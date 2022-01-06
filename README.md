# SmartLight
A smart light project made with esp8266. it features proximity sensor, light sensor and a web interface.
Connect the relay in the circuit you want to control or, if you are brave like me, unmount your switch socket from the wall, connect the relay to your domestic power, hide the circuit in the switch socket. 

# Functionality
The base idea is to have a smart-light, but actually smart.
This project doesn't rely on vocal commands, internet connection or convoluted cloud based infrastracture. It's completly modular and every single part of it can function without the others, if stripped to the bare bones it can still function as a normal switch activated light.
Modules:
  - Proximity sensor: I used an ultrasonic sensor, HC-SR04, exploiting a peculiarity of ultrasounds. Humans (and clothes) are soft and squishy so they tend to absorb ultrasonic wawes, if a soft material is placed in front of this sensor no wawe returns and the sensor triggers. Using an ultrasonic sensor istead of (for example) a laser tripwire makes possible to distinguish between a person and an inanimate object. If I enter the room the sensor triggers, if I close the door the sensor doesn't.
  - Photoresistor: I used a LDR 5516, but every photoresistor should do the job if correctly configured. This module is a must have if used in combination with the proximity sensor, so if there is already enough lihgt in the room the smart light doesn't turn on. Another functionality implemented is the "Absent-minded" functionality: if the light is on for more than 600 seconds while there is enough light in the room it means that i forgot to turn it off, so it does it for me.
  - Web controls: I used a Wemos D1 mini for wifi capabilities. A text based web interface accepts connection on port 80.

# Hardware
- ESP2866

-  A wifi module or a Wemos D1 mini 

- Relay

- light sensor

- arduino proximity sensor ultrasonic

(when i'll understan how to upload schematics i'll share the wiring as well)
# Software
Install ESP8266WiFi library.
compile and load the code from your preferred Arduino IDE

## Web interface ##
This interface is runned on another device. I choose a RaspberryPi because I already had a Flask server running on it
