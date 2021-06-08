
#include <IRremote.h> 
int RECV_PIN = 14; // Analog 0
IRrecv irrecv(RECV_PIN);
decode_results results;

//unsigned long BlinkTime; 

void setup()
{
  Serial.begin(115200); // (s3860m-s v3.0) 

  irrecv.enableIRIn(); // Start the receiver.
} 

void loop() {
  
  
  if (Serial.available() > 0)Serial.write(Serial.read());

 // if (BlinkTime == 0)BlinkTime = millis();  
 // if(millis()-BlinkTime > 10000)
  {
    Serial.println("AT#CB"); //  Cancel Pairing Mode.
    //BlinkTime = 0;
  }  


  if (irrecv.decode(&results)) 
  {
    irrecv.resume(); // Receive the next value

    if (results.value != REPEAT)
    {
     
      Serial.println(results.value); 


      if(results.value == 0xF129)Serial.println("AT#VU");      // increase the volume
      else if(results.value == 0xF1A9)Serial.println("AT#VD"); // decrease the volume
      else if(results.value == 0xF171)Serial.println("AT#MA"); // Play/Pause Music
      else if(results.value == 0xF1B1)Serial.println("AT#MC"); // Stop Music 
      else if(results.value == 0xF149)Serial.println("AT#MD"); // Forward Music #MD
      else if(results.value == 0xF1C9)Serial.println("AT#ME"); // Backward Music #ME

      //else if(results.value == 3993014240)Serial.println("AT#CB"); // Cancel Pairing Mode
     // else if(results.value == 3993014224)Serial.println("AT#CA"); // Enter Pairing Mode    
     //  else if(results.value == 3993014256)Serial.println("AT#MI"); // Connect to AV Source 
     // else if(results.value == 3993014216)Serial.println("AT#CC"); // Connect HFP to Handset 

     

      delay(300); // delay entre cada valor
    }
  }
}

