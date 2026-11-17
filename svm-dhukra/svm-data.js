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
    { value: "₹50,000+", label: "personally invested in components" },
    { value: "10–15", label: "student project videos documented" },
    { value: "3D", label: "printer, Arduino & ESP32 lab on campus" }
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
  projects: [],

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
    { category: "Development boards", items: [
      { name: "Arduino Uno / Nano", priority: "High", use: "Core board for every beginner project" },
      { name: "ESP32 development boards", priority: "High", use: "Wi-Fi / Bluetooth and IoT projects" },
      { name: "Other microcontroller boards", priority: "Future", use: "Exposure to more platforms" }
    ]},
    { category: "Sensors", items: [
      { name: "Ultrasonic sensors (HC-SR04 type)", priority: "High", use: "Distance, obstacle avoidance, parking models" },
      { name: "IR sensors", priority: "High", use: "Line following, object detection" },
      { name: "Rain sensors", priority: "Medium", use: "Weather and alarm models" },
      { name: "Water / level sensors", priority: "Medium", use: "Tank level and irrigation models" },
      { name: "Photoelectric sensors", priority: "Medium", use: "Counting and automation models" },
      { name: "LiDAR and advanced sensors", priority: "Future", use: "Mapping and senior-student robotics" }
    ]},
    { category: "Motors & actuators", items: [
      { name: "Servo motors (SG90 / MG996R type)", priority: "High", use: "Arms, gates, steering" },
      { name: "DC geared motors + wheels", priority: "High", use: "Robot cars and moving models" },
      { name: "Motor drivers (L298N / L293D type)", priority: "High", use: "Driving DC and stepper motors" },
      { name: "Stepper motors", priority: "Medium", use: "Precise positioning projects" },
      { name: "Encoders", priority: "Future", use: "Closed-loop speed and position control" }
    ]},
    { category: "Electronics & consumables", items: [
      { name: "Breadboards", priority: "High", use: "Every prototype starts here" },
      { name: "Jumper wires (M-M, M-F, F-F)", priority: "High", use: "Consumed continuously" },
      { name: "LEDs and resistors (assorted kits)", priority: "High", use: "First circuits for new students" },
      { name: "Batteries, holders and chargers", priority: "High", use: "Powering mobile projects" },
      { name: "Power supplies / adapters", priority: "Medium", use: "Safe bench power" },
      { name: "Relay modules", priority: "Medium", use: "Home automation models" },
      { name: "Switches and push buttons", priority: "Medium", use: "User input" }
    ]},
    { category: "Mechanical & 3D printing", items: [
      { name: "PLA filament", priority: "High", use: "Parts and enclosures on the school 3D printer" },
      { name: "3D printer accessories / spares", priority: "Medium", use: "Nozzles, beds, maintenance" },
      { name: "Bearings, belts and gears", priority: "Medium", use: "Mechanisms and motion models" },
      { name: "Prototyping materials", priority: "Medium", use: "Chassis, mounts, fasteners" }
    ]},
    { category: "Robotics kits", items: [
      { name: "Smart car kits", priority: "Medium", use: "Team robotics projects" },
      { name: "Arduino robotics kits", priority: "Medium", use: "Structured learning for new batches" },
      { name: "STEM learning kits", priority: "Medium", use: "Younger students" },
      { name: "Robotic arm kits", priority: "Future", use: "Introduction to manipulation" }
    ]}
  ],

  models: [
    { name: "Component sponsorship", text: "One-time contribution of boards, sensors or motors from the requirements list." },
    { name: "Quarterly hardware kit", text: "A small, regular box of consumables and modules every term." },
    { name: "Store credit", text: "Credit on your store that the school redeems against actual project needs." },
    { name: "Educational discount", text: "A standing discount for school orders." },
    { name: "Free samples", text: "Sample boards and sensors that students test and give feedback on." },
    { name: "Filament support", text: "PLA filament for the school's 3D printer." },
    { name: "Mentorship & workshops", text: "An engineer-led session, online or on-site, or workshop material." }
  ],

  tiers: [
    { name: "Supporter", amount: "₹2,000 – ₹5,000", period: "in components, one-time", text: "Enough for a set of sensors, boards or consumables for one project cycle." },
    { name: "Quarterly Partner", amount: "₹5,000 – ₹10,000", period: "in components, per quarter", text: "Keeps the lab stocked with consumables and lets new batches start without waiting." },
    { name: "Equipment Partner", amount: "By agreement", period: "based on mutually agreed needs", text: "Larger items such as kits, advanced sensors or 3D printing equipment." }
  ],

  benefits: [
    "Recognition as an official school robotics hardware partner",
    "Acknowledgement at school project exhibitions",
    "Student projects built and demonstrated using your hardware",
    "Photographs and videos of student projects you may share",
    "Honest feedback on component usability from first-time users",
    "Acknowledgement on this portfolio and in school communication"
  ]
};
