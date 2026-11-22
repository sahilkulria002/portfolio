/* =====================================================================
   SVM DHUKRA — single source of content for:
     • svm-dhukra/index.html                (web page)
     • svm-dhukra/school-portfolio.html     (Document A)
     • svm-dhukra/hardware-proposal.html    (Document B)

   HOW TO ADD A STUDENT PROJECT
   1. Put the photo in svm-dhukra/media/  (e.g. media/rain-alarm.jpg, ~1200px wide JPG)
   2. Copy the example object below into `projects`, fill it in.
      - youtube: just the video ID (the part after "watch?v=" or "youtu.be/")
      - link:    the original Facebook / YouTube post URL
      - Leave a field as "" if you don't know it. Never guess components.
   3. Re-run tools/build-pdfs.ps1 so the PDFs include the new project.
   ===================================================================== */

window.SVM_DATA = {
  facebook: "https://www.facebook.com/rohtash.rohtashkumar.560",
  youtubeChannel: "", // e.g. "https://www.youtube.com/@your-channel"

  contact: {
    name: "Sahil Kulria",
    role: "Robotics Engineer · Mentor, SVM Dhukra Robotics Lab",
    email: "sahilkulria002@gmail.com",
    phone: "+91 70270 50659",
    whatsapp: "917027050659",
    portfolio: "../index.html" // main portfolio, relative to this folder
  },

  stats: [
    { value: "~100", label: "students actively building projects" },
    { value: "₹50,000+", label: "invested in components, plus the 3D printer & computers" },
    { value: "10–15", label: "student project videos documented" },
    { value: "80–90%", label: "of students took part in the latest project round" }
  ],

  infrastructure: [
    { name: "3D printer", note: "Printing custom parts, mounts and enclosures" },
    { name: "Computers", note: "Programming and simulation" },
    { name: "Arduino boards", note: "Core platform for student projects" },
    { name: "ESP32 boards", note: "Wi-Fi / IoT-capable projects" },
    { name: "Sensors & modules", note: "Distance, IR, environment and more" },
    { name: "Motors & drivers", note: "Movement and actuation" },
    { name: "Electronic components", note: "Prototyping essentials" },
    { name: "Project materials", note: "Building and mounting models" }
  ],

  suppliers: ["Robocraze (approx. ₹10,000–₹15,000)", "Robu.in", "Amazon"],

  /* ---------- Student projects (verified only) ----------
  Example (copy, uncomment, fill):
  {
    title: "Automatic Rain Alarm",
    stages: ["design","simulate","build","demo"], // only stages you can SEE in the video/photos
    type: "robotics",                    // "robotics" (Arduino/robotics) or "science" (science & engineering models)
    category: "Arduino · Sensors",      // short label
    description: "Buzzer sounds when the rain sensor detects water.",
    components: ["Arduino Uno", "Rain sensor", "Buzzer"], // only if verified
    objective: "Understand analog sensors and threshold logic.",
    image: "media/rain-alarm.jpg",
    youtube: "",                         // video ID only
    link: ""                             // original post URL
  },
  */
  /* DISPLAY ORDER = PRIORITY (set by Sahil, 2026-11-22). Keep this order when adding projects:
       1. Smart Dustbin        (top: shows the simulation-first workflow)
       2. Automatic Tap        (high views)
       3. Automatic Bell       (high views)
       4. Student Robotic Arm  (high views; add here when its video arrives)
       5. Science Exhibition   (#13 in media/links.txt, high views)
       then the rest. */
  projects: [
    {
      // Source: media/A_smart_dustbin.mp4 (components read from the circuit design shown in the video)
      type: "robotics",
      title: "Smart Dustbin: Contactless Waste-Disposal System",
      category: "Embedded Systems · Simulation-First Design",
      description: "A hygienic, touch-free waste-disposal system built around an Arduino Uno. An ultrasonic distance sensor monitors the space in front of the bin. When someone comes close, the Arduino drives a servo motor that opens the lid, and an indicator LED lights up. The lid stays open while the person is there, waits a moment after they move away, then closes on its own. The students added their own filtering and timing logic so the lid moves smoothly instead of twitching on noisy readings.",
      components: ["Arduino Uno", "HC-SR04 ultrasonic sensor", "Servo motor (lid)", "Indicator LED", "Breadboard"],
      stages: ["design", "simulate", "build", "demo"],   // all four visible in the video
      domain: "Automation",
      objective: "Simulation-first development. The team modelled the complete circuit (sensor, microcontroller, servo and indicator LEDs) in a virtual electronics simulator and checked the sense-and-actuate logic there before building any hardware. They then assembled the physical prototype exactly according to the simulation, and added software filtering and a hold timer for reliable real-world behaviour. This is the same design → simulate → build → validate workflow used in professional embedded-systems engineering.",
      image: "img/smart-dustbin.jpg",
      youtube: "",   // paste the YouTube video ID here when uploaded
      link: "https://www.facebook.com/share/v/1BgGm7gMkC/"
    },
    {
      // Source: media/automatic tap.mp4 (installed on a real school washbasin with "Hand Free" sign; simulator shows ultrasonic sensor)
      type: "robotics",
      domain: "Automation",
      title: "Automatic Tap: Hands-Free Water System, Deployed on Campus",
      category: "Embedded Systems · Real-World Deployment",
      description: "A touch-free water tap retrofitted onto a real washbasin in the school: a working installation, not just a desk model. An ultrasonic sensor beside the spout measures the distance to the user's hand. When a hand is held between 5 and 20 cm below the tap, the Arduino commands a DC motor driver, and a DC motor physically turns the existing tap on. When the hand is removed, the motor reverses and closes it, so water flows only while it is needed.",
      components: ["Arduino Uno", "HC-SR04 ultrasonic sensor", "DC motor driver", "DC geared motor (turns the tap)", "Custom enclosure on an existing tap"],
      objective: "From simulation to deployment. The sensing logic was first tested in a virtual electronics simulator, then engineered as a retrofit onto existing plumbing in the school. The students wrote the firmware themselves (trigger pulse, echo timing with pulseIn, distance calculation and a 5–20 cm activation window) and can explain it line by line. Taking a prototype through to a real installation is a step most student projects never reach.",
      stages: ["simulate", "build", "demo"],
      image: "img/automatic-tap.jpg",
      youtube: "",
      link: "https://www.facebook.com/share/v/1CZfyGoKtC/"
    },
    {
      // Source: media/Automatic Bell.mp4 (RTC module + Arduino shown, code in Arduino IDE, unit installed under the shed roof)
      type: "robotics",
      domain: "Automation",
      title: "Automatic School Bell: Real-Time-Clock Scheduling System",
      category: "Embedded Systems · Real-World Deployment",
      description: "An automatic bell system built for the school. A real-time clock (RTC) module keeps accurate time and feeds it to an Arduino. At each programmed period the Arduino commands a DC motor driver, which rings the bell, with no one needed to ring it by hand. The finished unit is mounted and wired on campus.",
      components: ["Arduino Uno", "Real-time clock (RTC) module", "DC motor driver", "Electric bell", "Mains-powered installation"],
      objective: "Time-critical embedded control in production. The students wrote the firmware themselves in the Arduino IDE: the wiring set-up, reading time from the RTC, and a separate programmed time for every bell period, which can be changed whenever the school's timetable changes. They then installed it as permanent infrastructure, which is how industrial timers and building-automation controllers work.",
      stages: ["code", "build", "demo"],
      image: "img/automatic-bell.jpg",
      youtube: "",
      link: "https://www.facebook.com/share/v/1Mp6cbGCBR/"
    },
    {
      // Source: media/robotics arm students.mp4 (sheet-metal links, belt + gear reductions, 3 stepper drivers, Arduino, laptop GUI with Move/Store)
      type: "robotics",
      domain: "Robotics",
      title: "Student Robotic Arm: Multi-Axis Stepper-Driven Manipulator",
      category: "Robotics · Mechatronics",
      description: "A full-size, multi-joint robotic arm designed and fabricated by the students themselves. Its links are formed from sheet metal, and each joint is driven by a stepper motor through timing-belt pulleys and gear reductions. Dedicated industrial stepper drivers power the motors under an Arduino controller. The arm is operated from a laptop: a command entered on the computer is executed by the arm as the matching movement.",
      components: ["Stepper motors", "Industrial stepper drivers", "Arduino controller", "Timing belts & pulleys", "Gear reductions", "Sheet-metal links", "Laptop control interface"],
      objective: "Real mechatronics, not a kit. Students had to solve the same problems industrial robot builders face: transmitting torque through belts and gears, sizing drivers for multiple stepper axes, keeping several joints coordinated, and building a software interface to command the arm. Very few school labs anywhere attempt a manipulator at this scale.",
      stages: ["code", "build", "demo"],
      image: "img/student-robotic-arm.jpg",
      youtube: "",
      link: "https://www.facebook.com/share/v/1E3ActtCXd/"
    },
    {
      // Source: media/smart_room_car_railpassway.mp4 (edited exhibition montage: robot car, level crossing, city/river models, structures, houses)
      type: "science",
      domain: "Exhibition",
      title: "Science & Innovation Exhibition: Thoughts Put Into the World",
      category: "Exhibition · Student Showcase",
      description: "The school's science and innovation exhibition, where students presented their working models to visitors. Exhibits ranged from robotics, such as the autonomous robot car and the automated level crossing, to sustainable-city and river-ecosystem models, structural designs and smart-home models. Halls full of students explained their own engineering.",
      components: ["Robotics models", "Smart-infrastructure models", "Environmental models", "Structural models"],
      objective: "Engineering communication at scale. Students did more than build: they explained their design decisions to a live audience, which is a core professional skill. The range of exhibits shows the lab's breadth, from embedded robotics to systems thinking about cities and the environment.",
      stages: ["build", "demo"],
      image: "img/science-exhibition.jpg",
      youtube: "",
      link: ""   // links.txt #13 had the same link as the Automatic Tap; add the exhibition's own post when available
    },
    {
      // Source: media/obstacle_avoiding_car.mp4 (robot, front ultrasonic sensor, Arduino IDE code all visible)
      type: "robotics",
      domain: "Robotics",
      title: "Obstacle-Avoiding Robot: Autonomous Mobile Platform",
      category: "Mobile Robotics · Autonomous Navigation",
      description: "A four-wheel driverless robot car that navigates on its own. Three ultrasonic sensors watch the front, left and right. When the path ahead is blocked, the robot checks both sides and turns toward whichever is clear; if all three directions are blocked, it reverses and turns away. The students spent about 12–13 days building the chassis and body, then assembled the electronics and tested all three sensors with the microcontroller.",
      components: ["Arduino Uno", "3 × ultrasonic sensors (front, left, right)", "DC motor driver", "DC geared motors", "4-wheel drive chassis"],
      objective: "Closed-loop autonomy with multi-sensor decision logic. The students wrote the navigation program themselves, uploaded it to the Arduino, and then tuned the front and side detection distances by repeated testing until the robot avoided obstacles reliably. This perceive → decide → act cycle is the foundation of autonomous mobile robots, from warehouse robots to self-driving vehicles.",
      stages: ["code", "build", "demo"],
      image: "img/obstacle-avoiding-car.jpg",
      youtube: "",
      link: "https://www.facebook.com/share/v/1cMi525cGm/"
    },
    {
      // Source: media/Smart_rail_passway.mp4 (crossing model, ultrasonic sensor posts, red/green signal on gantry)
      type: "robotics",
      domain: "Smart Transport",
      title: "Smart Rail Passway: Automated Level-Crossing Safety",
      category: "Smart Infrastructure · Sensor Networks",
      description: "A scale model of an automated railway level crossing that needs no gatekeeper. When a train reaches the first ultrasonic sensor, an ESP32 commands a servo that closes the crossing gate and switches the signal to red. When the train passes the second sensor on the far side, the gate opens again and the signal turns green.",
      components: ["ESP32", "2 × ultrasonic sensors", "Servo motor (crossing gate)", "Red and green LEDs", "Breadboard", "Road-and-crossing scale model"],
      objective: "Two-point sensing with an event-driven state machine. One sensor marks the train arriving and the other marks it clearing, so the gate is only closed for exactly as long as needed. The students programmed the ESP32 themselves. It is a small-scale version of the automated crossings replacing manual gates on railways.",
      stages: ["code", "build", "demo"],
      image: "img/smart-rail-passway.jpg",
      youtube: "",
      link: "https://www.facebook.com/share/v/1A7rLhDaGM/"
    },
    {
      // Source: media/A_live_traffic_lights/ (school-campus model with gate, ultrasonic sensors, microcontroller, LED signals, toy vehicles)
      type: "robotics",
      domain: "Smart Transport",
      title: "Live Traffic Lights: Sensor-Driven Smart Junction",
      category: "Smart Transport · Traffic Control",
      description: "A Smart Traffic Control System modelled on the students' own school, where a blind turn at the gate is a real hazard. Two roads meet at 90°, with an ultrasonic sensor on each road detecting approaching vehicles. The Arduino switches the LED signals so one vehicle stops while the other passes, and applies a priority rule when vehicles arrive from both sides at once.",
      components: ["Arduino Uno", "2 × ultrasonic sensors (one per road)", "LED signal lights", "Connecting wires", "Campus & road scale model"],
      objective: "Adaptive control instead of fixed timing. The signals react to the vehicles actually present, including a conflict rule for simultaneous arrivals, which is the principle behind modern adaptive traffic management. The students applied it to a real safety problem they see every day: traffic at their own school gate.",
      stages: ["build", "demo"],
      image: "img/smart-traffic.jpg",
      youtube: "",
      link: "https://www.facebook.com/share/v/1FNdnZ6wZb/"
    },
    {
      // Source: media/Smart_rain_sensitive_roof/ (rain sensor plate, Arduino Uno, motor driver, spool motor, bamboo rails + string-pulled cover)
      type: "robotics",
      domain: "Automation",
      title: "Smart Rain-Sensitive Roof: Automatic Weather Protection",
      category: "Automation · Environmental Sensing",
      description: "A house-and-courtyard model with a retractable cover that responds to the weather on its own. When the rain-sensor plate detects water, the Arduino Uno runs a motor through a gearbox, winding a string-and-pulley mechanism that draws the cover across the open area along bamboo rails. When the rain stops, the cover retracts by itself, protecting the space even when nobody is home. The idea was the students' own.",
      components: ["Arduino Uno", "Rain sensor plate", "Motor driver", "DC motor with gearbox and spool", "String-and-pulley cover mechanism"],
      objective: "Sensing to mechanical actuation. The project joins environmental sensing, power electronics (a motor driver) and a purpose-built cable-drive mechanism into one autonomous system, the same architecture used in automatic awnings, greenhouse covers and smart buildings.",
      stages: ["build", "demo"],
      image: "img/rain-roof.jpg",
      youtube: "",
      link: ""
    },
    {
      // Source: media/A_plant_watering_system.mp4 (water/moisture sensor probe, mini submersible pump in jar, tubing, potted plant)
      type: "robotics",
      domain: "Environment",
      title: "Smart Plant Watering: Sensor-Controlled Irrigation",
      category: "Smart Agriculture · Fluid Control",
      description: "An automatic irrigation system for plants. A water sensor in the soil checks whether the plant needs water and tells the Arduino. When the soil is dry, the Arduino commands a DC motor driver to switch on a mini submersible pump, which draws from a reservoir through tubing. Once the water level is sufficient, the pump switches off on its own.",
      components: ["Arduino Uno", "Water / soil-moisture sensor", "DC motor driver", "Mini submersible water pump", "Reservoir & tubing"],
      objective: "Closed-loop resource control. Water is delivered based on a measurement, not a guess, which is the core idea behind precision agriculture. The students built it because plants often dry out and die for lack of timely watering. It is a practical project for a farming region, where water efficiency matters.",
      stages: ["build", "demo"],
      image: "img/plant-watering.jpg",
      youtube: "",
      link: "https://www.facebook.com/share/v/1EKGEcjSmr/"
    },
    {
      // Source: media/A_security_Alarm/ (room model with doors, cylindrical proximity sensor inside, figure as intruder)
      type: "robotics",
      domain: "Security",
      title: "Security Alarm: Intrusion-Detection System",
      category: "Security · Photoelectric Sensing",
      description: "A room model protected by an intrusion-detection system, designed for when the house is empty or at night. A photoelectric sensor inside the doorway watches the entry zone, and when an intruder (the figure in the demo) breaks its beam, the system sounds a buzzer and lights an LED, so people outside know someone has entered.",
      components: ["Photoelectric sensor", "Buzzer", "Alert LED", "Controller wiring", "Room-and-door scale model"],
      objective: "Event detection and response. Placing the sensor and defining the trigger zone are the same design decisions made in real security and access-control systems.",
      stages: ["build", "demo"],
      image: "img/security-alarm.jpg",
      youtube: "",
      link: ""
    },
    {
      // Source: media/speed_based_height__speed_breaker/ (road ramps, green rotating breaker, ultrasonic sensor, Arduino, servo)
      type: "robotics",
      domain: "Smart Transport",
      title: "Speed-Based Smart Speed Breaker: Adaptive Road Safety",
      category: "Smart Transport · Adaptive Control",
      description: "A road model with an active speed breaker whose height depends on the speed of the approaching car: the faster the car, the higher the breaker rises, while slow vehicles pass over a lower one. An ultrasonic sensor measures the approaching vehicle, and an Arduino Uno drives a servo that rotates the breaker set into the road surface. The breaker itself was built from 3D-printed parts and PVC pipe.",
      components: ["Arduino Uno", "Ultrasonic sensor", "Servo motor", "3D-printed + PVC-pipe breaker mechanism", "Road scale model"],
      objective: "Making infrastructure respond to behaviour. Instead of a fixed bump that penalises every vehicle, the system measures and then decides, the same thinking behind intelligent transport systems.",
      stages: ["build", "demo"],
      image: "img/speed-breaker.jpg",
      youtube: "",
      link: ""
    },
    {
      // Source: media/smart_living_room final.mp4 (room model, HC-SR04 sensor on breadboard, figure, lighting change, Arduino IDE code)
      type: "robotics",
      domain: "Automation",
      title: "Smart Living Room: Presence-Aware Home Automation",
      category: "Smart Home · Embedded Systems",
      description: "A living-room model that reacts to the people in it. An HC-SR04 ultrasonic sensor detects when someone enters and signals the Arduino, which switches on both the LED lighting and a cooler (fan) through a motor driver. When the person leaves, both turn off automatically.",
      components: ["Arduino Uno", "HC-SR04 ultrasonic sensor", "Motor driver", "Cooler / fan", "LED lighting", "Breadboard"],
      objective: "Presence detection to save electricity. People often leave rooms with lights and fans still running. The students identified that waste, wrote the control logic in the Arduino IDE and built the room around it, demonstrating the occupancy-sensing principle behind energy-saving smart buildings.",
      stages: ["code", "build", "demo"],
      image: "img/smart-living-room.jpg",
      youtube: "",
      link: "https://www.facebook.com/share/v/19oJxXh3BG/"
    },
    {
      // Source: media/Sun_earth_moon/ (3D-printed geared orrery: sun, earth, moon on gear train)
      type: "science",
      domain: "Science",
      title: "Sun–Earth–Moon Orrery: 3D-Printed Planetary Gear Model",
      category: "Science · Mechanism Design",
      description: "A working mechanical model of the Sun–Earth–Moon system, 3D-printed on the school's own printer. A gearbox underneath drives the Earth and Moon around the Sun, and the model demonstrates both solar and lunar eclipses. The students also use it to explain why the Moon's tilted orbit means eclipses happen only occasionally. The idea came from their science textbook.",
      components: ["3D-printed gearbox & gear train", "3D-printed frame & arms", "Sun, Earth and Moon bodies"],
      objective: "Engineering applied to science. The gear sizes were calculated so the Moon completes about 12 revolutions for every orbit of the Earth around the Sun, turning astronomy into a precise mechanism. The parts were produced on the lab's own 3D printer, which puts digital fabrication in students' hands.",
      stages: ["build", "demo"],
      image: "img/sun-earth-moon.jpg",
      youtube: "",
      link: "https://www.facebook.com/share/v/1CUr3MVLjp/"
    }
  ],

  /* ---------- Extra videos not tied to a single project ---------- */
  videos: [
    // { title: "Science exhibition walkthrough", youtube: "VIDEO_ID" }
  ],

  /* ---------- Hardware requirements (Document B + web page) ----------
     priority: "High" = used up continuously / blocks projects today
               "Medium" = expands what students can build
               "Future" = for advanced projects as the lab grows
     Quantities are deliberately left to be finalised with the school. */
  requirements: [
    { category: "Development boards & controllers", items: [
      { name: "Arduino Uno R3 / Arduino Nano", priority: "High", use: "Core board for every beginner and intermediate project" },
      { name: "ESP32 DevKit V1 (ESP32-WROOM-32)", priority: "High", use: "Wi-Fi / Bluetooth, IoT and phone-controlled projects" },
      { name: "Arduino Mega 2560", priority: "High", use: "Multi-axis robotic arms and projects with many sensors and motors" },
      { name: "ESP32-CAM (OV2640)", priority: "Medium", use: "Camera projects: surveillance, colour and object detection" },
      { name: "Arduino CNC Shield V3 / Uno sensor shield V5", priority: "Medium", use: "Clean wiring for stepper axes and multi-sensor builds" },
      { name: "Raspberry Pi Pico / Pico W (RP2040)", priority: "Medium", use: "A second microcontroller platform, MicroPython" },
      { name: "Raspberry Pi 5 (4 GB)", priority: "Future", use: "Computer vision and ROS-based robotics for senior students" }
    ]},
    { category: "Sensors", items: [
      { name: "HC-SR04 ultrasonic distance sensor", priority: "High", use: "Used across most projects: dustbin, robot car, crossing, traffic, speed breaker" },
      { name: "FC-51 IR obstacle sensor / TCRT5000 IR line-tracking sensor", priority: "High", use: "Line-following robots, object detection, counting" },
      { name: "HC-SR501 PIR motion sensor (human presence)", priority: "High", use: "Security alarms, smart rooms, automatic lighting" },
      { name: "Capacitive soil moisture sensor v1.2", priority: "High", use: "Smart irrigation and plant care" },
      { name: "FC-37 / YL-83 rain sensor module", priority: "High", use: "Rain-sensitive roof, weather alarms" },
      { name: "Water level sensor module", priority: "High", use: "Tank level, overflow and irrigation models" },
      { name: "DS3231 real-time clock (RTC) module", priority: "High", use: "Automatic school bell, timers and schedulers" },
      { name: "E18-D80NK photoelectric proximity sensor", priority: "Medium", use: "Industrial-style object detection and automation" },
      { name: "VL53L0X / VL53L1X laser time-of-flight distance sensor", priority: "Medium", use: "Precise short-range distance for robots and arms" },
      { name: "LDR light sensor module", priority: "Medium", use: "Automatic street lights, day/night switching" },
      { name: "DHT22 / DHT11 temperature & humidity sensor", priority: "Medium", use: "Weather stations, smart homes" },
      { name: "MQ-2 gas & smoke sensor / IR flame sensor", priority: "Medium", use: "Fire and gas-leak safety systems" },
      { name: "TTP223 touch sensor / LM393 sound sensor", priority: "Medium", use: "Touch-controlled and clap-controlled devices" },
      { name: "TCS34725 / TCS3200 colour sensor", priority: "Medium", use: "Colour-sorting machines" },
      { name: "RC522 RFID reader with cards and tags", priority: "Medium", use: "Attendance and access-control systems" },
      { name: "HX711 + load cell (5 kg / 10 kg)", priority: "Medium", use: "Weighing systems and gripper-force measurement" },
      { name: "AD8232 ECG sensor / MyoWare 2.0 EMG muscle sensor", priority: "Future", use: "Human bio-signal projects: muscle-controlled robotic hand, heart monitor" },
      { name: "360° LiDAR scanner (RPLIDAR A1 class) / TF-Luna", priority: "Future", use: "Mapping and autonomous navigation" }
    ]},
    { category: "Robotic arm & motion control", items: [
      { name: "NEMA 17 stepper motors (17HS4401, 1.8°)", priority: "High", use: "Joint actuation for the lab's robotic arms" },
      { name: "TMC2209 / A4988 / DRV8825 stepper drivers", priority: "High", use: "Quiet, precise micro-stepping of arm joints" },
      { name: "AS5600 12-bit magnetic angle encoder (with diametric magnet)", priority: "High", use: "Measuring real joint angles for closed-loop arm control" },
      { name: "MG996R / DS3218 (20 kg·cm) high-torque servos", priority: "High", use: "Grippers, wrists and lighter arm joints" },
      { name: "PCA9685 16-channel servo driver", priority: "Medium", use: "Driving many servos from one controller" },
      { name: "NEMA 23 stepper + TB6600 / DM542 driver", priority: "Medium", use: "Base and shoulder joints that carry more load" },
      { name: "Planetary-geared NEMA 17 stepper", priority: "Medium", use: "High-torque joints without large printed gearboxes" },
      { name: "MPU6050 6-axis IMU", priority: "Medium", use: "Tilt sensing, balancing robots, arm orientation" },
      { name: "KY-040 rotary encoder / A3144 Hall-effect sensor", priority: "Medium", use: "Speed, position and homing feedback" },
      { name: "Micro limit switches (end-stops)", priority: "Medium", use: "Homing and safe travel limits for every axis" },
      { name: "Closed-loop stepper (MKS SERVO42C class)", priority: "Future", use: "Stepper joints that cannot lose steps under load" }
    ]},
    { category: "Motors, pumps & other actuators", items: [
      { name: "SG90 micro servos", priority: "High", use: "Lids, gates, barriers and steering" },
      { name: "BO DC geared motors with wheels", priority: "High", use: "Robot cars and moving models" },
      { name: "L298N / L293D / TB6612FNG DC motor drivers", priority: "High", use: "Driving DC motors" },
      { name: "Mini submersible water pumps (3–6 V) with tubing", priority: "High", use: "Irrigation, automatic taps, fountains" },
      { name: "Active / passive buzzers", priority: "High", use: "Alarms and alerts" },
      { name: "N20 / JGB37-520 geared motors with encoders", priority: "Medium", use: "Closed-loop speed control for advanced robots" },
      { name: "12 V solenoid lock / solenoid water valve", priority: "Medium", use: "Smart locks, water control" },
      { name: "28BYJ-48 stepper with ULN2003 driver", priority: "Medium", use: "Low-cost introduction to stepper motors" },
      { name: "Linear actuators (12 V)", priority: "Future", use: "Lifting and pushing mechanisms" }
    ]},
    { category: "Electronics, power & consumables", items: [
      { name: "Breadboards (830-point)", priority: "High", use: "Every prototype starts here" },
      { name: "Jumper wires (M-M, M-F, F-F)", priority: "High", use: "Consumed continuously" },
      { name: "LEDs and resistor assortment kits", priority: "High", use: "First circuits for new students" },
      { name: "18650 Li-ion cells with holders and charger", priority: "High", use: "Powering mobile robots" },
      { name: "1 / 2 / 4-channel 5 V relay modules", priority: "High", use: "Switching lights, pumps and bells" },
      { name: "12 V / 24 V SMPS power supplies", priority: "High", use: "Powering stepper-driven arms safely" },
      { name: "LM2596 / XL4015 buck converters, 2S/3S BMS boards", priority: "Medium", use: "Clean, protected power for boards and motors" },
      { name: "16x2 I2C LCD / 0.96\" OLED display", priority: "Medium", use: "Showing readings and status" },
      { name: "Push buttons, toggle switches, potentiometers, joysticks", priority: "Medium", use: "Manual control and user input" },
      { name: "Soldering consumables (solder wire, flux, heat-shrink)", priority: "Medium", use: "Turning prototypes into durable builds" }
    ]},
    { category: "3D printing & mechanical", items: [
      { name: "PLA filament (1.75 mm)", priority: "High", use: "Everyday rigid parts, enclosures and models" },
      { name: "PETG filament (1.75 mm)", priority: "High", use: "Tough, impact-, heat- and water-resistant parts: arm links, pump housings, outdoor models" },
      { name: "TPU 95A flexible filament (1.75 mm)", priority: "High", use: "Soft gripper pads, tyres, bumpers, flexible couplings" },
      { name: "PLA+ / ABS / ASA filament", priority: "Medium", use: "Stronger and heat-resistant structural parts" },
      { name: "Carbon-fibre-filled PLA / PETG", priority: "Future", use: "Stiff, lightweight robot arm links" },
      { name: "3D printer spares (0.4 mm nozzles, PEI build plate, PTFE tube)", priority: "Medium", use: "Keeping the school printer running" },
      { name: "608ZZ / 6800-series bearings", priority: "Medium", use: "Smooth rotating joints in arms and mechanisms" },
      { name: "GT2 timing belts and pulleys", priority: "Medium", use: "Belt-driven arm joints and linear axes" },
      { name: "8 mm smooth rods, T8 lead screws, shaft couplers", priority: "Medium", use: "Linear motion and Z-axes" },
      { name: "M3 / M4 fastener kits", priority: "Medium", use: "Assembling every mechanism properly" },
      { name: "2020 aluminium extrusion and brackets", priority: "Future", use: "Rigid frames for larger robots" }
    ]},
    { category: "Robotics kits", items: [
      { name: "Smart car kits", priority: "Medium", use: "Team robotics projects" },
      { name: "Arduino starter / robotics kits", priority: "Medium", use: "Structured learning for new batches" },
      { name: "STEM learning kits", priority: "Medium", use: "Younger students" },
      { name: "Robotic arm kits", priority: "Future", use: "Introduction to manipulation for new students" }
    ]}
  ],

  models: [
    { name: "Monthly component kit", text: "Components worth ₹5,000 or more each month, chosen by you from our wishlist." },
    { name: "Robotics parts for the arm projects", text: "Stepper motors, drivers, encoders and bearings for the students' robotic arms." },
    { name: "Store credit", text: "Credit on your store that the school redeems against actual project needs." },
    { name: "Educational discount", text: "A standing discount for school orders." },
    { name: "Free samples", text: "Sample boards and sensors that students test and give feedback on." },
    { name: "Filament support", text: "PLA, PETG or flexible TPU filament for the school's 3D printer." },
    { name: "Mentorship & workshops", text: "An engineer-led session, online or on-site, or workshop material." }
  ],

  tiers: [
    { name: "Monthly Partner", amount: "₹5,000 / month", period: "in components (minimum)", text: "Keeps the lab stocked every month. You choose the items from our wishlist that match your catalogue." },
    { name: "Lab Partner", amount: "₹10,000+ / month", period: "in components", text: "Covers consumables plus robotics parts such as stepper motors, drivers and filament for the arm projects." },
    { name: "Equipment Partner", amount: "By agreement", period: "based on mutually agreed needs", text: "Larger items such as kits, advanced sensors or 3D printing equipment." }
  ],

  benefits: [
    "Recognition as an official school robotics hardware partner",
    "Acknowledgement at school project exhibitions",
    "Student projects built and demonstrated using your hardware",
    "Photographs and videos of student projects you may share",
    "Honest feedback on component usability from first-time users",
    "Recommendation to students as our preferred store when they buy parts for their own projects",
    "Acknowledgement on this portfolio and in school communication"
  ]
};
