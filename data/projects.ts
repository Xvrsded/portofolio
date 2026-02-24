import { ProjectCategory, ProjectItem, TechLogo } from "@/types";

export const projectCategories: ProjectCategory[] = ["Web", "IoT", "Network", "Mobile", "Research"];

export const projects: ProjectItem[] = [
  {
    id: "java-firebase-app",
    title: "Java + Firebase App",
    year: "2023",
    description: "A mobile-centric application integrating Firebase authentication and real-time data synchronization.",
    image: "/images/projects/java-firebase-app.jpg",
    stack: ["Java", "Firebase", "Android Studio"],
    categories: ["Mobile", "Web"]
  },
  {
    id: "rfid-temp-attendance",
    title: "RFID + Temperature Attendance System",
    year: "2022",
    description: "IoT attendance device combining RFID identification with temperature capture and cloud logging.",
    image: "/images/projects/rfid-temp-attendance.jpg",
    stack: ["ESP32", "RFID", "IoT", "Dashboard"],
    categories: ["IoT", "Research"]
  },
  {
    id: "iot-wsn-labs",
    title: "IoT & WSN Projects",
    year: "2024",
    description: "Wireless sensor network prototypes focused on telemetry reliability and efficient data routing.",
    image: "/images/projects/iot-wsn-labs.jpg",
    stack: ["WSN", "MQTT", "Python", "Linux"],
    categories: ["IoT", "Network", "Research"]
  },
  {
    id: "network-security-labs",
    title: "Network Security Labs",
    year: "2024",
    description: "Lab scenarios for segmentation, firewall policy testing, secure remote access, and traffic analysis.",
    image: "/images/projects/network-security-labs.jpg",
    stack: ["Mikrotik", "Wireshark", "Linux", "SNMP"],
    categories: ["Network", "Research"]
  },
  {
    id: "bantutugas-web",
    title: "BantuTugas Website",
    year: "2024",
    description: "Website platform project for online assistance and service showcase.",
    image: "/images/projects/guerlain-web.png",
    stack: ["Web", "Frontend", "Deployment"],
    categories: ["Web"],
    liveDemo: "https://bantutugas-murex.vercel.app/"
  },
  {
    id: "guerlain-web",
    title: "Guerlain Website",
    year: "2024",
    description: "Modern product presentation website with premium visual presentation.",
    image: "/images/projects/bantutugas-web.png",
    stack: ["Web", "UI/UX", "Vercel"],
    categories: ["Web"],
    liveDemo: "https://guerlain.vercel.app/"
  },
  {
    id: "company-website",
    title: "Company Website",
    year: "2024",
    description: "Company profile website built for branding and professional online presence.",
    image: "/images/projects/company-website.png",
    stack: ["Web", "Company Profile", "Vercel"],
    categories: ["Web"],
    liveDemo: "https://company-amber-one.vercel.app/"
  }
];

export const techLogos: TechLogo[] = [
  { name: "React", logo: "/images/skills/react.svg", alt: "React logo" },
  { name: "Next.js", logo: "/images/skills/nextjs.svg", alt: "Next.js logo" },
  { name: "HTML", logo: "/images/skills/html.svg", alt: "HTML logo" },
  { name: "CSS", logo: "/images/skills/css.svg", alt: "CSS logo" },
  { name: "Tailwind", logo: "/images/skills/tailwind.svg", alt: "Tailwind CSS logo" },
  { name: "Node.js", logo: "/images/skills/nodejs.svg", alt: "Node.js logo" },
  { name: "Java", logo: "/images/skills/java.svg", alt: "Java logo" },
  { name: "Python", logo: "/images/skills/python.svg", alt: "Python logo" },
  { name: "PHP", logo: "/images/skills/php.svg", alt: "PHP logo" },
  { name: "Linux", logo: "/images/skills/linux.svg", alt: "Linux logo" },
  { name: "Mikrotik", logo: "/images/skills/mikrotik.svg", alt: "Mikrotik logo" },
  { name: "Firebase", logo: "/images/skills/firebase.svg", alt: "Firebase logo" },
  { name: "Docker", logo: "/images/skills/docker.svg", alt: "Docker logo" },
  { name: "GitHub", logo: "/images/skills/github.svg", alt: "GitHub logo" },
  { name: "MySQL", logo: "/images/skills/mysql.svg", alt: "MySQL logo" }
];
