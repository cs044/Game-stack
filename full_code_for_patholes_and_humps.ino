    #include <Blynk.h>
    #include<SoftwareSerial.h>
    #include<BlynkSimpleStream.h>
    #include<SimpleTimer.h>
    SoftwareSerial DebugSerial(2,3);
    #define BLYNK_PRINT DebugSerial
    
    #include<SoftwareSerial.h> //Lib Software serial for RX,TX
    
    #include <TinyGPS.h>  //GPS libraries
    TinyGPS gps;
    
    #include<LiquidCrystal.h>
    const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 6, d7 = 7;
    LiquidCrystal lcd(rs, en, d4, d5, d6, d7);
    
    float flat, flon; // gps long,latti variables
    SoftwareSerial ss(2,3); //Software serial for RX,TX
    
    const int trig=8;
    const int echo=9;
    int distance;
    int duration;
    int buzzer=10;
    
    int count=0;
    char auth[]="1a8acea5a31c4bfa8f1a0cb52fe4af45";
    
    static void smartdelay(unsigned long ms);  //dalay function for gps
    
    
    SimpleTimer timer;
    
    int Read=A0;
    
    
    void setup() {
      // put your setup code here, to run once:
      
      
      DebugSerial.begin(9600);
    Serial.begin(9600);
    
    Blynk.begin(auth,Serial);
    pinMode(Read,INPUT);
      pinMode(trig,OUTPUT);
      pinMode(echo,INPUT);
      lcd.begin(16,2);
      lcd.clear();
      lcd.print("Welcome");
      delay(1000);
      lcd.setCursor(0,1);
      lcd.print("To The System");
      delay(1000);
      //Serial.begin(9600);
      //digitalWrite(Read,HIGH);
    ss.begin(9600);
    }
    
    void loop() {
      // put your main code here, to run repeatedly:
    Blynk.run();
    timer.run();
       gps.f_get_position(&flat, &flon); //get the gps location function
    
      digitalWrite(trig,LOW);
      delay(500);
      digitalWrite(trig,HIGH);
      delay(1000);
      digitalWrite(trig,LOW);
      duration=pulseIn(echo,HIGH);
      distance=duration*0.034/2;
      //Serial.println("Distence");
      //Serial.println(distance);
      
      if(distance>20)
      {
        Blynk.virtualWrite(V0,"Pathole Detect");
        lcd.clear();
        lcd.setCursor(0,0);
        lcd.print("Pathole Detected");
        delay(500);
        digitalWrite(buzzer,HIGH);
       delay(1000);
    smartdelay(1000);
    float flat, flon;
    gps.f_get_position(&flat, &flon);
     
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("long:"); //print logitude range in lcd
    //delay(200);
    lcd.setCursor(6,0);
    //lcd.print(flon == TinyGPS::GPS_INVALID_F_ANGLE ? 0.0 : flon, 6);
    lcd.print(flon);
    //lcd.clear();
    lcd.setCursor(0,1);
    lcd.print("latt"); //print lattitude range in lcd
    lcd.setCursor(6,1);
     
    lcd.print(flat);
    delay(500);
    Blynk.virtualWrite(V2,flat);//print lattitude range in blynk
    Blynk.virtualWrite(V3,flon);//print logitude range in blynk
   // Blynk.location(V4,flat,flon);//print logitude range in blynk
    }
      else
      {
        Blynk.virtualWrite(V0,"Safe ok move");
        lcd.clear();
        lcd.setCursor(0,0);
        lcd.print("Safe");
        lcd.setCursor(0,1);
        lcd.print("Ok Move");
        delay(500);
        digitalWrite(buzzer,LOW);
        delay(1000);
      }
    
    
    if(digitalRead(Read)==0)
    {
      while(digitalRead(Read)==0);
      
      Blynk.virtualWrite(V1,"Hump Detect");
      lcd.clear();
      lcd.print("Hump Detect");
      delay(3000);
      lcd.clear();
    }
    else
    {
      Blynk.virtualWrite(V1,"Hump Not Detect");
    }
    }
    static void smartdelay(unsigned long ms) //smart delay main function
    {
      unsigned long start = millis();
    do 
      {
        while (ss.available())
          gps.encode(ss.read());
      } while (millis() - start < ms);
    }
