export const projects = [
  {
    id: 1,
    title: "Vision-Guided Mobile Robotic Arm",
    category: "Personal Robotics Project",
    year: "2025 — PRESENT",
    status: "Active Development",
    description: "A ROS 2-based mobile manipulation platform combining robotic arm control, autonomous navigation, perception, and embedded systems.",
    problem: "Building a useful autonomous robot requires more than controlling an individual actuator. The robot needs to perceive its environment, understand where it is, plan motion, control its hardware, and coordinate multiple subsystems reliably.",
    approach: "Developing a 6-DOF robotic manipulation pipeline using inverse kinematics, trajectory planning, and MoveIt 2. Integrating feedback-driven actuator control for synchronized robotic motion. Implementing autonomous navigation using SLAM, LiDAR-based localization, sensor fusion, and obstacle-aware planning. Designing communication between ROS 2 nodes, embedded controllers, motor drivers, sensors, and actuator subsystems. Using Gazebo simulation to validate robot behavior, trajectories, and system integration before deploying to hardware.",
    highlights: [
      "6-DOF robotic manipulation pipeline using inverse kinematics and trajectory planning",
      "Autonomous navigation using SLAM, LiDAR localization, and sensor fusion",
      "Integrated ROS 2 node communication and embedded system coordination",
      "Vision-guided manipulation for object perception and interaction"
    ],
    technologies: ["ROS 2", "C++", "Python", "MoveIt 2", "Gazebo", "SLAM", "LiDAR", "Computer Vision", "Sensor Fusion", "Embedded Systems"],
    image: "[ADD ROBOT ARM VIDEO/GIF]",
    github: "[ADD GITHUB URL]",
    demo: "[ADD DEMO VIDEO]",
    featured: true
  },
  {
    id: 2,
    title: "AUTOMI — Autonomous Humanoid Robot",
    category: "Humanoid Robotics",
    year: "IIT Kanpur · Science and Technology Council",
    status: "Completed",
    description: "An autonomous humanoid robot developed as a multidisciplinary robotics project at IIT Kanpur with team leadership experience.",
    problem: "Developing a complete humanoid robot system requires coordinating mechanical design, electronics, controls, and autonomous software across multiple subsystems.",
    approach: "Led ROS-based autonomy capabilities including SLAM, localization, motion planning, and autonomous navigation. Worked on pneumatic actuation, embedded control, sensor fusion, and distributed communication architecture. Developed trajectory planning and motion-control systems for coordinated humanoid movement and balancing.",
    highlights: [
      "TEAM LEAD · ~25 MEMBERS across mechanical, electronics, controls, and software",
      "ROS-based SLAM and autonomous navigation implementation",
      "Pneumatic actuation and embedded control systems",
      "Participated in FIRA HuroCup 2019",
      "Led recruitment and technical workshops during COVID-19 period"
    ],
    technologies: ["ROS", "SLAM", "Motion Planning", "Embedded Systems", "Pneumatics", "Sensor Fusion", "Control Systems", "CAD", "Mechanical Design"],
    image: "[ADD HUMANOID ROBOT IMAGE]",
    github: "[ADD GITHUB URL]",
    demo: "[ADD DEMO VIDEO]",
    featured: true
  },
  {
    id: 3,
    title: "Gesture-Controlled Virtual Blackboard",
    category: "Computer Vision",
    year: "2020",
    status: "Completed",
    description: "A real-time computer vision system that turns hand gestures into an interactive virtual writing surface.",
    problem: "Needed an interactive system for digital classroom use that could convert hand gestures into drawing and writing operations in real-time.",
    approach: "Developed real-time hand detection and tracking using MediaPipe and OpenCV. Converted hand movements and gestures into drawing interactions with support for shapes, colors, and multi-page support. Implemented synchronized camera-processing and canvas-rendering pipelines for seamless real-time interaction.",
    highlights: [
      "Real-time hand detection and tracking using MediaPipe",
      "Smooth drawing and shape generation with gesture recognition",
      "Synchronized camera processing and rendering pipelines",
      "Packaged as standalone Windows application for interactive teaching"
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Real-time Processing"],
    image: "[ADD DEMO IMAGE/GIF]",
    github: "https://github.com/sahilkulria002/Virtual-Board",
    demo: "[ADD DEMO VIDEO]",
    featured: true
  },
  {
    id: 4,
    title: "Laser Printer Mechanism — Reconstruction & Study",
    category: "Electromechanical Engineering",
    year: "2022",
    status: "Completed",
    description: "Reconstructed a functional laser-printer mechanism to understand the electromechanical architecture behind precision motion systems.",
    problem: "Understanding how mechanical transmission, actuator coordination, and control logic interact in complex electromechanical systems.",
    approach: "Built and tested a functional laser-printer system to study mechanical transmission systems and precision motion mechanisms. Investigated synchronization between multiple actuators and moving mechanisms. Explored how mechanical design, actuator coordination, and control logic interact.",
    highlights: [
      "Functional laser-printer mechanism reconstruction",
      "Mechanical transmission and precision motion analysis",
      "Multi-actuator synchronization and coordination",
      "System integration of mechanics, electronics, and control"
    ],
    technologies: ["Mechanical Design", "Electronics", "Control Logic", "Actuators", "CAD"],
    image: "[ADD PRINTER MECHANISM IMAGE]",
    github: "[ADD GITHUB URL]",
    demo: "[ADD VIDEO]",
    featured: true
  }
];

export const personalProjects = {
  title: "Vision-Guided Mobile Robotic Arm",
  goal: "A ROS 2-based mobile manipulation platform combining robotic arm control, autonomous navigation, perception, and embedded systems.",
  currentStage: "Active Development",
  hardware: "6-DOF robotic arm, LiDAR, cameras, encoders, motor controllers, embedded systems",
  software: "ROS 2, C++, Python, MoveIt 2, Gazebo, SLAM",
  whatBuilt: "6-DOF manipulation pipeline, autonomous navigation system, integrated ROS 2 architecture",
  nextMilestone: "Vision-guided manipulation and real-world hardware deployment"
};
