import {
  faBell,
  faBolt,
  faBoxesStacked,
  faBroadcastTower,
  faCarBurst,
  faFireExtinguisher,
  faGem,
  faHandHoldingDroplet,
  faHotel,
  faIndustry,
  faKeyboard,
  faLandmark,
  faMicrophone,
  faRocket,
  faSignHanging,
  faVideo,
  faWarehouse,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWandSparkles,
  faTowerBroadcast,
  faHouseSignal,
  faUsersViewfinder,
} from "@fortawesome/free-solid-svg-icons";

export const categories = [
  {
    id: 1,
    name: "HYBRID AIoT NVR",
    category: 1,
    icons: faHouseSignal,
    subcategories: [{ id: 1, name: "NVR & ALARM" }],
  },
  {
    id: 2,
    name: " INDUSTRIAL AI-NVR ",
    category: 2,
    icons: faIndustry,
    subcategories: [{ id: 1, name: "INDUSTRIAL" }],
  },
  {
    id: 3,
    name: "ALARM & AUTOMATION",
    category: 3,
    icons: faBell,
    subcategories: [{ id: 1, name: "INDUSTRIAL" }],
  },
  {
    id: 4,
    name: "CAMERA",
    category: 4,
    icons: faVideo,
    subcategories: [
      { id: 1, name: "AI-Camera" },
      { id: 2, name: "PIR-Camera" },
      { id: 3, name: "PTZ-Camera" },
      { id: 4, name: "DOM-Camera" },
      { id: 5, name: "Bullet Camera" },
      { id: 6, name: "Alarm Camera" },
      { id: 7, name: "Solar Camera" },
      { id: 8, name: "Wifi-Camera" },
      { id: 9, name: "Panaromic Camera" },
    ],
  },
  {
    id: 5,
    name: " SENSORS",
    category: 5,
    icons: faTowerBroadcast,
    subcategories: [
      { id: 1, name: "Alarm Sensor" },
      { id: 2, name: "Environmental Sensor" },
      { id: 3, name: "Fire Sensor" },
      { id: 4, name: "AI-Camera" },
      { id: 5, name: "Perimeter Sensor" },
    ],
  },
  {
    id: 6,
    name: " SMART SWITCH",
    category: 6,
    icons: faWandSparkles,
    subcategories: [{ id: 1, name: "SMART SWITCH" }],
  },
  {
    id: 7,
    name: "ACCESS SYSTEM",
    category: 7,
    icons: faUsersViewfinder,
    subcategories: [{ id: 1, name: "ACCESS SYSTEM" }],
  },
  {
    id: 8,
    name: "  DIGITAL CLASSROOM",
    category: 8,
    icons: faLandmark,
    subcategories: [{ id: 1, name: " DIGITAL CLASSROOM" }],
  },
  {
    id: 9,
    category: 9,
    name: "AI-VMS",
    icons: faCarBurst,
    subcategories: [{ id: 1, name: "AI-VMS" }],
  },
  {
    id: 10,
    name: " WATER MANAGEMENT",
    category: 10,
    icons: faHandHoldingDroplet,
    subcategories: [{ id: 1, name: "Tank Manager" }],
  },
  {
    id: 11,
    name: " ELECTRIC FENCE",
    category: 11,
    icons: faBolt,
    subcategories: [{ id: 1, name: "ELECTRIC" }],
  },
  {
    id: 12,
    name: "KITCHEN SAFETY",
    category: 12,
    icons: faFireExtinguisher,
    subcategories: [{ id: 1, name: "Fire SAFETY" }],
  },
  {
    id: 13,
    name: "IOE - COMMUNICATION",
    category: 13,
    icons: faBroadcastTower,
    subcategories: [{ id: 1, name: "IOE - COMMUNICATION" }],
  },
  {
    id: 14,
    name: "WAREHOUSE SAFETY",
    category: 14,
    icons: faBoxesStacked,
    subcategories: [{ id: 1, name: "Fire SAFETY" }],
  },
  {
    id: 15,
    name: " ACCESSORIES",
    category: 15,
    icons: faKeyboard,
    subcategories: [{ id: 1, name: "ACCESSORIES" }],
  },
  {
    id: 16,
    name: " HOTEL SYSTEMS",
    category: 16,
    icons: faHotel,
    subcategories: [{ id: 1, name: "HOTEL SYSTEMS" }],
  },
  {
    id: 17,
    name: "SIGNAGE",
    category: 17,
    icons: faSignHanging,
    subcategories: [{ id: 1, name: "SIGNAGE" }],
  },
  {
    id: 18,
    name: "DRONES",
    category: 18,
    icons: faRocket,
    subcategories: [{ id: 1, name: "DRONES" }],
  },
  {
    id: 19,
    name: "NETWORKING",
    category: 19,
    icons: faWifi,
    subcategories: [{ id: 1, name: "NETWORKING" }],
  },
  {
    id: 20,
    name: "AUDIO & VIDEO",
    category: 20,
    icons: faMicrophone,
    subcategories: [{ id: 1, name: "AUDIO & VIDEO" }],
  },
];

export const products = [
  // 1-HYBRID-NVR-- 1PRODUCTS
  {
    id: 1,
    category: 1,
    subcategory: 1,
    icons: "faHouseSignal",

    ModelNumber: "NI-N16A64-201",
    title: "NYSTAI AI-IoT Hybrid NVR",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HYBRID-NVR/NYSTAI AI-IoT Hybrid NVR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HYBRID-NVR/NEW HYBRID NVR/NVR-IMG-1.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HYBRID-NVR/NEW HYBRID NVR/NVR-IMG-2.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HYBRID-NVR/NEW HYBRID NVR/NVR-IMG-1.webp",

    // Icons Images (NEW FIELD)
    iconImages: [
      {
        src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.webp",
        label: "Cloud",
      },
      {
        src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/download.webp",
        label: "AI",
      },
      {
        src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.webp",
        label: "Video",
      },
      {
        src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.webp",
        label: "Wi-Fi",
      },
      {
        src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.webp",
        label: "Sensor",
      },
    ],

    // Card
    Cardsingleword: "Advanced AI Functions",
    Cardthreeword:
      "Offers intelligent analysis features such as facial recognition, video analytics, flow statistics, and boundary crossing detection.",

    // Modal
    Mkeyone: "16 Channel IP Cameras & 64 Wireless Sensors",
    Mkeytwo:
      "Offers smart features like facial recognition, video analytics, flow stats, and boundary detection.",
    MkeyTHREE:
      "Supports up to 32 groups of customized and multi-directional intelligent scene linkage for diverse surveillance needs.",
    MkeyFOUR:
      "Supports 64 wireless devices (FSK, LoRa, Zigbee, Z-Wave) and 16 IPC channels up to 5MP.",
    modalDescriptionp:
      "The NYSTAI AI-IoT Hybrid NVR combines NVR and alarm functionality into an affordable, integrated security system. It supports video surveillance, AI video analysis, intercom, one-click alarms, access control, attendance, fire alarms, and more, with applications spanning security, fire safety, and digital classrooms.",
  },

  // 2-INDUSTRIAL-NVR-- 1PRODUCTS
  {
    id: 2,
    category: 2,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Industrial - Alarm Panel",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/INDUSTRIAL-NVR/Industrial - AlarmPannel.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/INDUSTRIAL-NVR/Industrial - AlarmPannel.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/INDUSTRIAL-NVR/Industrial - AlarmPannel.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/INDUSTRIAL-NVR/Industrial - AlarmPannel.webp",

    // Card
    Cardsingleword: "Robust Industrial Design",
    Cardthreeword:
      "Offers reliable alarm panel functionality with industrial-grade durability, enhanced communication protocols, and remote monitoring capabilities.",

    // Modal
    Mkeyone: "Industrial-grade alarm panel for harsh environments",
    Mkeytwo:
      "Supports advanced communication protocols such as RS485, Modbus, and Ethernet.",
    MkeyTHREE:
      "Real-time monitoring and control with seamless integration into industrial networks.",
    MkeyFOUR:
      "Compatible with various industrial sensors and alarm systems for comprehensive security and monitoring.",
    modalDescriptionp:
      "The Industrial Alarm Panel is designed for demanding industrial environments, providing reliable security and monitoring capabilities. It supports a wide range of communication protocols and integrates seamlessly with industrial systems, ensuring real-time monitoring and control. With a rugged design, this alarm panel is ideal for factories, warehouses, and other industrial settings where durability and performance are critical.",
  },

  // 3-ALARM&AUTOMATION--5PRODUCTS
  {
    id: 3,
    category: 3,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Access Control Gateway",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel + Access Control Gateway.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel + Access Control Gateway.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel + Access Control Gateway.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel + Access Control Gateway.webp",

    // Card
    Cardsingleword: "Integrated Security Solution",
    Cardthreeword:
      "Combines alarm and access control features for a unified security gateway with real-time monitoring and smart automation.",

    // Modal
    Mkeyone: "Integrated alarm system with access control capabilities.",
    Mkeytwo:
      "Supports remote monitoring, control, and automation for enhanced security.",
    MkeyTHREE:
      "Compatible with multiple communication protocols for seamless system integration.",
    MkeyFOUR:
      "Ideal for secure facilities requiring both alarm and access control management.",
    modalDescriptionp:
      "The Alarm Panel + Access Control Gateway is an integrated security solution that combines alarm management and access control. It provides real-time monitoring, automation, and remote control, ideal for high-security environments. Compatible with various protocols, it integrates seamlessly into existing infrastructures for unified management.",
  },

  {
    id: 6,
    category: 3,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "NYSTAI Alarm Panel with Display",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI Alarm Pannel with Display.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI Alarm Pannel with Display.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI Alarm Pannel with Display.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI Alarm Pannel with Display.webp",

    // Card
    Cardsingleword: "User-Friendly Interface",
    Cardthreeword:
      "Equipped with an intuitive display for real-time monitoring, alarm management, and system control in one panel.",

    // Modal
    Mkeyone: "Alarm panel with integrated display for easy operation.",
    Mkeytwo: "Provides real-time monitoring and management of alarm systems.",
    MkeyTHREE:
      "Supports various alarm triggers and customizable notifications.",
    MkeyFOUR:
      "Ideal for both residential and commercial security applications with a user-friendly interface.",
    modalDescriptionp:
      "The NYSTAI Alarm Panel with Display offers a seamless and user-friendly interface for managing security alarms. Equipped with a display, it provides real-time monitoring, easy control, and customization of alarm settings. This panel is designed to handle multiple alarm triggers and customizable notifications, making it suitable for both residential and commercial security environments.",
  },

  {
    id: 7,
    category: 3,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "NYSTAI WiFi Alarm Panel",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI WiFi Alarm Pannel.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI WiFi Alarm Pannel.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI WiFi Alarm Pannel.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI WiFi Alarm Pannel.webp",

    // Card
    Cardsingleword: "Wireless Connectivity",
    Cardthreeword:
      "WiFi-enabled alarm panel for seamless, wireless integration with security systems and remote monitoring through mobile devices.",

    // Modal
    Mkeyone: "WiFi-enabled for remote monitoring and control.",
    Mkeytwo:
      "Easy integration with existing security systems via wireless networks.",
    MkeyTHREE:
      "Supports mobile app for real-time notifications and alarm management.",
    MkeyFOUR:
      "Ideal for homes, offices, and commercial spaces needing a flexible, wireless alarm system.",
    modalDescriptionp:
      "The NYSTAI WiFi Alarm Panel offers advanced wireless connectivity, allowing for seamless integration with security systems and remote monitoring via mobile devices. With its WiFi-enabled features, users can manage alarms, receive real-time notifications, and control security remotely. This system is perfect for residential, office, and commercial spaces that require a flexible, wireless alarm solution.",
  },

  // 4-CAMERA-- 17PRODUCTS

  {
    id: 8,
    category: 4,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "AI Fish Eye Camera 3MP+IR",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Fish Eye Camera 3MP+IR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Fish Eye Camera 3MP+IR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Fish Eye Camera 3MP+IR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Fish Eye Camera 3MP+IR.webp",
    ficon:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Fish Eye Camera 3MP+IR.webp",

    // Card
    Cardsingleword: "360° Coverage",
    Cardthreeword:
      "AI-powered fish eye camera with 3MP resolution, infrared night vision, and 360-degree panoramic coverage for enhanced surveillance.",

    // Modal
    Mkeyone: "3MP resolution fish eye camera with AI-enhanced analytics.",
    Mkeytwo: "Provides 360° panoramic view for complete area surveillance.",
    MkeyTHREE:
      "Equipped with infrared (IR) capabilities for clear night vision.",
    MkeyFOUR:
      "Ideal for indoor and outdoor use, suitable for security monitoring in large spaces.",
    modalDescriptionp:
      "The AI Fish Eye Camera 3MP+IR is designed to provide comprehensive surveillance with its 360° panoramic view and 3MP high-resolution video. It includes advanced AI analytics for intelligent monitoring and infrared night vision for low-light environments. This camera is perfect for monitoring large areas in both indoor and outdoor settings, offering robust security coverage.",
  },

  {
    id: 9,
    category: 4,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "AI Indoor Motion Camera",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Indoor Motion Camera.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Indoor Motion Camera.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Indoor Motion Camera.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Indoor Motion Camera.webp",

    // Card
    Cardsingleword: "Smart Motion Detection",
    Cardthreeword:
      "AI-powered indoor camera with motion detection, providing real-time alerts and advanced monitoring for indoor security.",

    // Modal
    Mkeyone:
      "AI-enhanced motion detection for real-time alerts and monitoring.",
    Mkeytwo:
      "Designed for indoor use, ensuring effective motion-based surveillance.",
    MkeyTHREE:
      "Supports high-resolution video capture for clear indoor monitoring.",
    MkeyFOUR:
      "Ideal for home, office, and indoor commercial spaces needing smart motion detection.",
    modalDescriptionp:
      "The AI Indoor Motion Camera offers advanced indoor surveillance with AI-powered motion detection for real-time alerts. It captures high-resolution video and provides intelligent monitoring, making it ideal for home, office, or indoor commercial spaces. This camera ensures secure and efficient indoor security through smart motion-based detection and notification systems.",
  },

  {
    id: 10,
    category: 4,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "AI Motion Camera with Battery",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Camera with Battery.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Camera with Battery.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Camera with Battery.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Camera with Battery.webp",

    // Card
    Cardsingleword: "Battery-Powered Security",
    Cardthreeword:
      "AI-powered motion camera with built-in battery, offering wireless surveillance and smart monitoring for flexible security setups.",

    // Modal
    Mkeyone: "AI-powered motion detection with wireless battery operation.",
    Mkeytwo:
      "Portable and flexible, ideal for locations without wired power access.",
    MkeyTHREE:
      "Supports real-time alerts and intelligent monitoring for enhanced security.",
    MkeyFOUR:
      "Perfect for indoor and outdoor use, especially in remote or hard-to-wire areas.",
    modalDescriptionp:
      "The AI Motion Camera with Battery offers wireless, battery-powered surveillance with smart motion detection. Equipped with AI technology for intelligent monitoring, this camera is ideal for both indoor and outdoor applications, especially in locations where wiring is not possible. With its real-time alerts and portable design, it ensures flexible and effective security solutions.",
  },

  {
    id: 11,
    category: 4,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "AI Motion Outdoor Camera with Battery",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Outdoor Camera with Battery.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Outdoor Camera with Battery.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Outdoor Camera with Battery.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Outdoor Camera with Battery.webp",

    // Card
    Cardsingleword: "Outdoor Security",
    Cardthreeword:
      "AI-powered motion outdoor camera with a built-in battery, providing wireless and durable surveillance for outdoor security.",

    // Modal
    Mkeyone: "AI-powered motion detection for outdoor surveillance.",
    Mkeytwo:
      "Battery-powered for wireless, flexible outdoor security solutions.",
    MkeyTHREE:
      "Weatherproof design for reliable performance in outdoor conditions.",
    MkeyFOUR:
      "Ideal for areas with limited access to wired power, ensuring continuous security monitoring.",
    modalDescriptionp:
      "The AI Motion Outdoor Camera with Battery is a smart, battery-powered security solution designed for outdoor use. With AI motion detection and a weatherproof design, this camera offers wireless and reliable surveillance, even in areas with limited access to power. Its flexible setup makes it perfect for homes, businesses, and outdoor environments, providing 24/7 monitoring in any condition.",
  },

  {
    id: 12,
    category: 4,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "AI Outdoor Motion Camera",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Outdoor Motion Camera.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Outdoor Motion Camera.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Outdoor Motion Camera.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Outdoor Motion Camera.webp",

    // Card
    Cardsingleword: "Enhanced Detection",
    Cardthreeword:
      "AI-powered outdoor motion camera providing intelligent surveillance and real-time alerts for outdoor security.",

    // Modal
    Mkeyone: "AI-enhanced motion detection for accurate outdoor surveillance.",
    Mkeytwo: "High-resolution video capture for clear and detailed monitoring.",
    MkeyTHREE:
      "Designed for outdoor use with a weatherproof and durable build.",
    MkeyFOUR:
      "Ideal for comprehensive outdoor security, including homes, businesses, and large outdoor areas.",
    modalDescriptionp:
      "The AI Outdoor Motion Camera delivers advanced outdoor security with its AI-powered motion detection, providing accurate alerts and high-resolution video capture. Its weatherproof and durable design ensures reliable performance in various outdoor conditions. Perfect for enhancing security around homes, businesses, and large outdoor areas, this camera offers comprehensive surveillance with intelligent monitoring capabilities.",
  },

  {
    id: 13,
    category: 4,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "AI+4G Fixed Dome Camera",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI+4G Fixed Dome Camera.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI+4G Fixed Dome Camera.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI+4G Fixed Dome Camera.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI+4G Fixed Dome Camera.webp",

    // Card
    Cardsingleword: "4G Connectivity",
    Cardthreeword:
      "AI-powered fixed dome camera with 4G connectivity for reliable, high-speed remote surveillance and monitoring.",

    // Modal
    Mkeyone:
      "AI-driven analytics for enhanced video surveillance and real-time alerts.",
    Mkeytwo:
      "4G connectivity ensures high-speed, reliable remote access and streaming.",
    MkeyTHREE: "Fixed dome design provides discreet and robust surveillance.",
    MkeyFOUR:
      "Suitable for both indoor and outdoor applications with flexible installation options.",
    modalDescriptionp:
      "The AI+4G Fixed Dome Camera combines advanced AI analytics with 4G connectivity, delivering reliable and high-speed remote surveillance. Its fixed dome design offers discreet and durable monitoring for various environments. Ideal for both indoor and outdoor use, this camera ensures seamless access and streaming, making it a versatile choice for comprehensive security solutions.",
  },

  {
    id: 14,
    category: 4,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "AI-WiFi Fixed Bullet Camera 50m IR",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera 50m IR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera 50m IR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera 50m IR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera 50m IR.webp",

    // Card
    Cardsingleword: "Powerful IR",
    Cardthreeword:
      "AI-powered WiFi fixed bullet camera with 50m infrared range for clear, high-resolution night vision surveillance.",

    // Modal
    Mkeyone:
      "AI-enhanced video analytics for accurate motion detection and alerts.",
    Mkeytwo: "WiFi connectivity for easy installation and remote access.",
    MkeyTHREE:
      "50m infrared range for effective night vision and low-light performance.",
    MkeyFOUR:
      "Fixed bullet design ideal for long-range outdoor surveillance in various conditions.",
    modalDescriptionp:
      "The AI-WiFi Fixed Bullet Camera with 50m IR combines advanced AI video analytics with powerful infrared capabilities for superior night vision. This camera offers reliable WiFi connectivity, making installation simple and providing seamless remote access. Its fixed bullet design is perfect for long-range outdoor surveillance, ensuring clear and high-resolution monitoring even in low-light conditions.",
  },

  {
    id: 15,
    category: 4,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "AI-WiFi Fixed Bullet Camera with 2-way Comm",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera with 2way Comm.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera with 2way Comm.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera with 2way Comm.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera with 2way Comm.webp",

    // Card
    Cardsingleword: "Interactive Monitoring",
    Cardthreeword:
      "AI-powered WiFi fixed bullet camera with 2-way communication for interactive surveillance and real-time communication.",

    // Modal
    Mkeyone:
      "AI-enhanced video analytics for improved motion detection and alerts.",
    Mkeytwo: "WiFi connectivity for flexible installation and remote access.",
    MkeyTHREE: "2-way communication allows for real-time audio interaction.",
    MkeyFOUR:
      "Fixed bullet design ideal for detailed, long-range surveillance in various environments.",
    modalDescriptionp:
      "The AI-WiFi Fixed Bullet Camera with 2-way Communication integrates advanced AI video analytics with WiFi connectivity and interactive audio features. The camera supports real-time audio communication, making it perfect for both surveillance and direct interaction. Its fixed bullet design provides reliable long-range monitoring, suitable for a variety of indoor and outdoor environments.",
  },

  {
    id: 16,
    category: 4,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "AI-WiFi+LAN Fixed Bullet Camera",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN Fixed Bullet Camera.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN Fixed Bullet Camera.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN Fixed Bullet Camera.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN Fixed Bullet Camera.webp",

    // Card
    Cardsingleword: "Flexible Surveillance",
    Cardthreeword:
      "AI-powered fixed bullet camera with dual WiFi and LAN connectivity for versatile installation and reliable monitoring.",

    // Modal
    Mkeyone:
      "AI-enhanced video analytics for precise motion detection and smart alerts.",
    Mkeytwo:
      "Dual connectivity options with both WiFi and LAN for flexible installation and stable network connection.",
    MkeyTHREE:
      "Fixed bullet design provides long-range surveillance capabilities with high-definition clarity.",
    MkeyFOUR:
      "Built to withstand outdoor conditions, ensuring durability in diverse environments and scenarios.",
    modalDescriptionp:
      "The AI-WiFi+LAN Fixed Bullet Camera delivers HD surveillance with AI video analytics, smart motion detection, and alerts. With dual WiFi/LAN connectivity, it ensures flexible installation. Its durable bullet design withstands harsh environments, making it ideal for reliable indoor and outdoor monitoring across residential and commercial spaces.",
  },

  {
    id: 17,
    category: 4,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "AI-WiFi+LAN PT Camera with 2-way Comm",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera with 2way Comm.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera with 2way Comm.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera with 2way Comm.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera with 2way Comm.webp",

    // Card
    Cardsingleword: "Dynamic Surveillance",
    Cardthreeword:
      "AI-powered PT camera with WiFi and LAN connectivity and 2-way communication for interactive and flexible monitoring.",

    // Modal
    Mkeyone:
      "AI-enhanced pan-tilt capabilities for comprehensive coverage and precise monitoring.",
    Mkeytwo:
      "Dual WiFi and LAN connectivity options for versatile installation and network stability.",
    MkeyTHREE:
      "2-way communication feature for real-time audio interaction and enhanced security.",
    MkeyFOUR:
      "Weather-resistant PT camera design suitable for both indoor and outdoor use, ensuring durability and reliable performance.",
    modalDescriptionp:
      "The AI-WiFi+LAN PT Camera offers advanced AI features, pan-tilt control, and dual WiFi/LAN connectivity. It supports smart video analytics, real-time alerts, and 2-way audio communication. Ideal for indoor and outdoor use, it ensures reliable, comprehensive surveillance and interactive security in various environments with enhanced monitoring capabilities.",
  },

  {
    id: 18,
    category: 4,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "AI-WiFi+LAN PT Camera",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera.webp",

    // Card
    Cardsingleword: "Versatile Monitoring",
    Cardthreeword:
      "AI-powered PT camera with dual connectivity options for flexible and comprehensive surveillance coverage.",

    // Modal
    Mkeyone:
      "Pan-Tilt functionality allows for wide-area surveillance with precise control.",
    Mkeytwo:
      "Supports both WiFi and LAN connections for adaptable installation and stable performance.",
    MkeyTHREE:
      "AI-enhanced video analytics for accurate motion detection and smart alerts.",
    MkeyFOUR:
      "Designed for durability, suitable for various indoor and outdoor environments.",
    modalDescriptionp:
      "The AI-WiFi+LAN PT Camera offers AI-powered motion detection, pan-tilt control, and dual WiFi/LAN connectivity for flexible setup. Ideal for homes and businesses, it delivers smart alerts and accurate video analytics. Its durable design ensures reliable performance in various environments, making it perfect for indoor and outdoor surveillance.",
  },

  {
    id: 19,
    category: 4,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "Fish Eye Camera 2MP+IR",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Fish Eye Camera 2MP+IR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Fish Eye Camera 2MP+IR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Fish Eye Camera 2MP+IR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Fish Eye Camera 2MP+IR.webp",

    // Card
    Cardsingleword: "360° Coverage",
    Cardthreeword:
      "High-resolution fisheye camera with infrared capabilities for complete panoramic surveillance.",

    // Modal
    Mkeyone: "2MP resolution provides clear and detailed panoramic views.",
    Mkeytwo:
      "Built-in IR (Infrared) technology for effective night vision up to a certain distance.",
    MkeyTHREE:
      "Fisheye lens offers 360-degree coverage, minimizing blind spots.",
    MkeyFOUR:
      "Ideal for large-area surveillance such as lobbies, warehouses, or retail stores.",
    modalDescriptionp:
      "The Fish Eye Camera 2MP+IR offers a 360° panoramic view with no blind spots, ideal for wide-area surveillance. Equipped with IR for night vision, it ensures clear footage in low light. Perfect for lobbies, warehouses, and retail spaces, it suits both indoor and outdoor security needs.",
  },

  {
    id: 20,
    category: 4,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "IR Motion Camera",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/IR Motion Camera.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/IR Motion Camera.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/IR Motion Camera.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/IR Motion Camera.webp",

    // Card
    Cardsingleword: "Smart Detection",
    Cardthreeword:
      "Infrared motion camera with advanced detection capabilities for enhanced surveillance.",

    // Modal
    Mkeyone:
      "Built-in infrared (IR) sensors for reliable motion detection in low-light environments.",
    Mkeytwo: "Supports smart alerts and notifications when motion is detected.",
    MkeyTHREE: "Ideal for both indoor and outdoor security applications.",
    MkeyFOUR:
      "Compact design suitable for discreet placement in various locations.",
    modalDescriptionp:
      "The IR Motion Camera features advanced IR motion detection for reliable low-light surveillance. It supports real-time alerts for quick response to threats. With a compact, discreet design, it's ideal for both indoor and outdoor use in residential and commercial settings, offering versatile and effective security monitoring.",
  },

  {
    id: 21,
    category: 4,
    subcategory: 2,

    ModelNumber: "NI-N16A64-201",
    title: "Solar Intruder Camera",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Solar Intruder Camera.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Solar Intruder Camera.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Solar Intruder Camera.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Solar Intruder Camera.webp",

    // Card
    Cardsingleword: "Solar-Powered Security",
    Cardthreeword:
      "Solar-powered intruder camera with AI detection for sustainable, uninterrupted outdoor security.",

    // Modal
    Mkeyone: "AI-powered motion detection for precise intruder alerts.",
    Mkeytwo:
      "Solar-powered design ensures continuous operation in outdoor settings.",
    MkeyTHREE:
      "Weather-resistant build ideal for harsh environmental conditions.",
    MkeyFOUR:
      "Real-time monitoring and alerts for proactive security response.",
    modalDescriptionp:
      "The Solar Intruder Camera combines solar-powered operation with advanced AI motion detection, ensuring uninterrupted outdoor surveillance. Designed to withstand harsh environmental conditions, this camera provides real-time intruder alerts and is perfect for sustainable and efficient security in remote or outdoor locations.",
  },

  {
    id: 22,
    category: 4,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Dual Lenz PTZ+Siren",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Dual Lenz PTZ+Siren.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Dual Lenz PTZ+Siren.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Dual Lenz PTZ+Siren.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Dual Lenz PTZ+Siren.webp",

    // Card
    Cardsingleword: "Dual Surveillance",
    Cardthreeword:
      "PTZ camera with dual lenses and built-in siren for advanced monitoring and active deterrence.",

    // Modal
    Mkeyone: "Dual lenses provide enhanced wide-angle and zoomed-in views.",
    Mkeytwo:
      "PTZ (Pan-Tilt-Zoom) functionality for comprehensive area coverage.",
    MkeyTHREE: "Built-in siren for active intruder deterrence.",
    MkeyFOUR:
      "Ideal for real-time tracking and intervention in large or sensitive areas.",
    modalDescriptionp:
      "The Dual Lenz PTZ+Siren camera offers versatile surveillance with its dual lenses, providing both wide-angle and zoomed-in views. The PTZ functionality allows for full area coverage, while the integrated siren actively deters intruders, making it perfect for sensitive or large areas requiring real-time monitoring and response.",
  },

  // 5-SENSORS--33PRODUCTS
  {
    id: 23,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Door Sensor A",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor A.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor A.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor A.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor A.webp",

    // Card
    Cardsingleword: "Door Security",
    Cardthreeword:
      "Reliable door sensor for accurate entry detection and enhanced security monitoring.",

    // Modal
    Mkeyone:
      "Detects door openings and closures for real-time security alerts.",
    Mkeytwo:
      "Wireless design for easy installation and integration into existing systems.",
    MkeyTHREE: "Ideal for monitoring entry points in homes or businesses.",
    MkeyFOUR:
      "Battery-powered for long-lasting performance with low energy consumption.",
    modalDescriptionp:
      "The Door Sensor A provides accurate detection of door openings and closures, ensuring real-time alerts for enhanced security. Its wireless design allows for easy installation, making it suitable for homes, offices, and businesses. With low energy consumption and long-lasting battery life, it's a reliable addition to any security system.",
  },

  {
    id: 24,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Door Sensor B",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor B.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor B.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor B.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor B.webp",

    // Card
    Cardsingleword: "Advanced Entry Detection",
    Cardthreeword:
      "High-precision door sensor for enhanced security with real-time alerts and seamless integration.",

    // Modal
    Mkeyone:
      "Highly accurate detection of door opening and closing for instant notifications.",
    Mkeytwo:
      "Easy-to-install wireless design with broad compatibility for security systems.",
    MkeyTHREE:
      "Enhanced sensitivity for reliable monitoring of key entry points.",
    MkeyFOUR:
      "Energy-efficient with long battery life, designed for continuous operation.",
    modalDescriptionp:
      "The Door Sensor B offers high-precision monitoring of door activity, providing real-time notifications for enhanced security. Its wireless design allows for effortless installation, while its broad compatibility ensures easy integration with various security systems. Designed for reliability, it operates with low energy consumption for long-lasting use.",
  },

  {
    id: 25,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Environment Sensor",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Environment Sensor.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Environment Sensor.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Environment Sensor.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Environment Sensor.webp",

    // Card
    Cardsingleword: "Environmental Monitoring",
    Cardthreeword:
      "Advanced environment sensor for real-time monitoring of temperature, humidity, and air quality.",

    // Modal
    Mkeyone:
      "Monitors environmental factors such as temperature, humidity, and air quality.",
    Mkeytwo:
      "Wireless design for easy integration into smart home or office systems.",
    MkeyTHREE:
      "Real-time data and alerts to ensure optimal environmental conditions.",
    MkeyFOUR:
      "Energy-efficient operation with long battery life for continuous monitoring.",
    modalDescriptionp:
      "The Environment Sensor monitors temperature, humidity, and air quality in real-time. It offers wireless connectivity for easy integration, delivering data and alerts to maintain optimal conditions. Its energy-efficient design ensures long-lasting performance, ideal for smart home and office environments.",
  },

  {
    id: 26,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "GAS Sensor Wireless",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/GAS Sensor Wireless.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/GAS Sensor Wireless.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/GAS Sensor Wireless.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/GAS Sensor Wireless.webp",

    // Card
    Cardsingleword: "Gas Detection",
    Cardthreeword:
      "Wireless gas sensor for real-time detection and alerts, ensuring safety and monitoring of gas levels.",

    // Modal
    Mkeyone: "Detects harmful gas levels and provides real-time alerts.",
    Mkeytwo: "Wireless connectivity for easy installation and integration.",
    MkeyTHREE:
      "Ideal for homes, offices, and industrial spaces to ensure safety.",
    MkeyFOUR:
      "Energy-efficient with long-lasting battery life for continuous monitoring.",
    modalDescriptionp:
      "The Gas Sensor Wired ensures continuous real-time detection of harmful gas levels, offering reliable safety in homes, offices, and industrial settings. Its wired connection provides uninterrupted power, making it ideal for critical safety applications that require constant monitoring. Built for accuracy and durability, it ensures peace of mind.",
  },

  {
    id: 27,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Gas Sensor",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor B.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor B.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor B.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor B.webp",

    // Card
    Cardsingleword: "Gas Monitoring",
    Cardthreeword:
      "Reliable gas sensor for real-time detection and monitoring, ensuring safety in critical environments.",

    // Modal
    Mkeyone: "Detects and alerts on harmful gas levels in real time.",
    Mkeytwo: "Compact and easy to install in various settings.",
    MkeyTHREE: "Suitable for homes, offices, and industrial environments.",
    MkeyFOUR:
      "Energy-efficient design with long battery life for continuous monitoring.",
    modalDescriptionp:
      "The Gas Sensor is built to detect harmful gas levels and provide real-time alerts to ensure safety in homes, offices, and industrial environments. It’s compact and easy to install, making it a perfect addition to any safety system. With its energy-efficient design, the sensor ensures long-lasting, continuous monitoring of gas levels.",
  },

  {
    id: 28,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Gas Sensor Wired",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor Wired.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor Wired.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor Wired.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor Wired.webp",

    // Card
    Cardsingleword: "Wired Gas Detection",
    Cardthreeword:
      "Reliable wired gas sensor for continuous real-time monitoring and safety in various environments.",

    // Modal
    Mkeyone: "Provides real-time detection of harmful gas levels.",
    Mkeytwo:
      "Wired installation ensures a constant power supply for continuous operation.",
    MkeyTHREE: "Suitable for homes, industrial, and commercial environments.",
    MkeyFOUR:
      "Designed for high accuracy and durability in critical safety applications.",
    modalDescriptionp:
      "The Gas Sensor Wired provides continuous real-time detection of harmful gas levels, ensuring safety in homes, offices, and industrial settings. Its wired connection ensures constant power, making it ideal for critical applications requiring uninterrupted monitoring. Built for accuracy and durability, it offers peace of mind in various environments.",
  },

  {
    id: 29,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Gas Sensor",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor.webp",
    modalimage1: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor.webp",
    modalimage2: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor.webp",
    modalimage3: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor.webp",

    // Card
    Cardsingleword: "Gas Detection",
    Cardthreeword:
      "Reliable gas sensor for detecting hazardous gases and ensuring safety in various environments.",

    // Modal
    Mkeyone:
      "Real-time detection of harmful gas levels for immediate safety alerts.",
    Mkeytwo: "Easy to install and integrate into existing security systems.",
    MkeyTHREE:
      "Ideal for monitoring gas levels in homes, offices, and industrial spaces.",
    MkeyFOUR:
      "Designed for continuous operation with a long-lasting power supply.",
    modalDescriptionp:
      "The Gas Sensor is a reliable solution for detecting harmful gases in real time, ensuring immediate safety alerts in homes, offices, and industrial environments. Its easy installation and integration into existing systems make it a valuable addition to any safety setup. With a design focused on continuous operation and durability, it provides peace of mind for gas level monitoring.",
  },

  {
    id: 30,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Invisible Beem Perimeter Sensor - 2IR",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 2IR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 2IR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 2IR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 2IR.webp",

    // Card
    Cardsingleword: "Perimeter Protection",
    Cardthreeword:
      "Invisible beam perimeter sensor with dual infrared technology for secure boundary protection.",

    // Modal
    Mkeyone: "Invisible infrared beams for discreet perimeter protection.",
    Mkeytwo: "Dual infrared technology for enhanced detection accuracy.",
    MkeyTHREE:
      "Ideal for securing outdoor areas, fences, and property boundaries.",
    MkeyFOUR:
      "Weather-resistant design for reliable performance in various conditions.",
    modalDescriptionp:
      "The Invisible Beam Perimeter Sensor - 2IR provides discreet perimeter protection with dual infrared technology, ensuring accurate intrusion detection in outdoor areas. It’s ideal for securing fences and boundaries, built to withstand harsh weather for reliable performance.",
  },

  {
    id: 31,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Invisible Beem Perimeter Sensor - 3IR",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 3IR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 3IR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 3IR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 3IR.webp",

    // Card
    Cardsingleword: "Advanced Perimeter Security",
    Cardthreeword:
      "Triple infrared beam perimeter sensor for enhanced boundary protection and intrusion detection.",

    // Modal
    Mkeyone:
      "Triple infrared beams for superior detection and reduced false alarms.",
    Mkeytwo: "Invisible beam technology for discreet perimeter monitoring.",
    MkeyTHREE:
      "Ideal for securing large outdoor areas, including commercial and residential properties.",
    MkeyFOUR: "Durable and weather-resistant for all-season protection.",
    modalDescriptionp:
      "The Invisible Beam Perimeter Sensor - 3IR offers advanced perimeter protection with triple infrared beams, ensuring superior accuracy and minimizing false alarms. Perfect for securing large outdoor areas like commercial and residential properties, it provides reliable all-season performance with its weather-resistant design.",
  },

  {
    id: 32,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Invisible Beem Perimeter Sensor B - 2IR",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor B - 2IR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor B - 2IR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor B - 2IR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor B - 2IR.webp",

    // Card
    Cardsingleword: "Discrete Protection",
    Cardthreeword:
      "Invisible dual infrared beam perimeter sensor for effective boundary security and low visibility monitoring.",

    // Modal
    Mkeyone: "Dual infrared beams for precise perimeter detection.",
    Mkeytwo: "Invisible beam technology for subtle yet effective monitoring.",
    MkeyTHREE:
      "Suitable for a variety of outdoor spaces, providing flexible installation options.",
    MkeyFOUR:
      "Weatherproof design ensures performance in all weather conditions.",
    modalDescriptionp:
      "The Invisible Beam Perimeter Sensor B - 2IR offers discreet perimeter security with dual infrared beams. Its invisible beam technology ensures subtle monitoring without compromising detection accuracy. Ideal for outdoor spaces, this sensor withstands diverse weather conditions for continuous protection.",
  },

  {
    id: 33,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Invisible Beem Perimeter Sensor C - 4IR",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor C - 4IR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor C - 4IR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor C - 4IR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor C - 4IR.webp",

    // Card
    Cardsingleword: "Stealth Protection",
    Cardthreeword:
      "Invisible beam perimeter sensor with 4 infrared channels for advanced boundary security and intrusion detection.",

    // Modal
    Mkeyone:
      "Equipped with four invisible infrared (IR) beams for reliable perimeter security.",
    Mkeytwo:
      "Advanced intrusion detection technology ensures accurate and immediate alerts.",
    MkeyTHREE: "Weather-resistant design suitable for outdoor installations.",
    MkeyFOUR:
      "Supports integration with existing security systems for comprehensive protection.",
    modalDescriptionp:
      "The Invisible Beam Perimeter Sensor C - 4IR offers high-level perimeter protection with four invisible infrared beams that detect unauthorized movements and provide immediate alerts. Its weather-resistant design ensures reliable outdoor performance, integrating seamlessly with existing security systems for discreet, effective boundary protection.",
  },

  {
    id: 34,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Invisible Beem Perimeter Sensor D - 2IR",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor D - 2IR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor D - 2IR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor D - 2IR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor D - 2IR.webp",

    // Card
    Cardsingleword: "Intrusion Detection",
    Cardthreeword:
      "Discrete perimeter sensor with 2 infrared beams for reliable intrusion detection and boundary security.",

    // Modal
    Mkeyone:
      "Equipped with two invisible infrared (IR) beams for precise perimeter monitoring.",
    Mkeytwo:
      "Effective detection technology provides fast and accurate intrusion alerts.",
    MkeyTHREE:
      "Compact design ideal for seamless integration with various outdoor security setups.",
    MkeyFOUR:
      "Durable construction withstands harsh weather conditions for reliable outdoor use.",
    modalDescriptionp:
      "The Invisible Beam Perimeter Sensor D - 2IR offers discreet perimeter security with two invisible infrared beams for accurate intrusion detection and quick response. Its compact, durable design is ideal for outdoor installations, ensuring continuous monitoring in challenging weather. Easily integrable with existing systems, it enhances boundary protection in various environments.",
  },

  {
    id: 35,
    category: 5,
    subcategory: 1,
    ModelNumber: "NI-N16A64-201",
    title: "Invisible Beam Perimeter Sensor F - 2IR",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor F - 2IR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor F - 2IR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor F - 2IR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor F - 2IR.webp",

    // Card
    Cardsingleword: "Invisible Protection",
    Cardthreeword:
      "Advanced infrared beam technology for securing perimeters with invisible detection lines.",

    // Modal
    Mkeyone:
      "Invisible infrared beams create a secure perimeter with undetectable protection.",
    Mkeytwo:
      "Dual-beam system reduces false alarms by detecting only when both beams are interrupted.",
    MkeyTHREE:
      "Weatherproof design ensures reliable operation in outdoor environments.",
    MkeyFOUR:
      "Ideal for protecting the boundaries of homes, businesses, and restricted areas.",
    modalDescriptionp:
      "The Invisible Beam Perimeter Sensor F - 2IR provides an undetectable security solution using infrared beam technology. The dual-beam system minimizes false alarms by triggering only when both beams are interrupted. Its weatherproof design ensures consistent performance in various outdoor conditions, making it ideal for safeguarding perimeters around homes, businesses",
  },

  {
    id: 36,
    category: 5,
    subcategory: 1,
    ModelNumber: "NI-N16A64-201",
    title: "Invisible Wall Perimeter Sensor - 4IR",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Wall Perimeter Sensor - 4IR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Wall Perimeter Sensor - 4IR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Wall Perimeter Sensor - 4IR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Wall Perimeter Sensor - 4IR.webp",

    // Card
    Cardsingleword: "Advanced Security",
    Cardthreeword:
      "Infrared wall-mounted sensor with 4-beam technology for robust perimeter protection.",

    // Modal
    Mkeyone:
      "4-beam infrared technology provides high-accuracy detection for maximum security.",
    Mkeytwo:
      "Invisible beams create an undetectable security wall around protected areas.",
    MkeyTHREE:
      "Wall-mounted design is ideal for secure perimeter setup in various environments.",
    MkeyFOUR:
      "Durable construction ensures reliability in outdoor and indoor settings.",
    modalDescriptionp:
      "The Invisible Wall Perimeter Sensor - 4IR uses a 4-beam infrared system to create a high-accuracy invisible barrier. Designed for indoor and outdoor use, it ensures reliable detection with minimal false alarms and withstands diverse environmental conditions for lasting security.",
  },

  {
    id: 37,
    category: 5,
    subcategory: 1,
    ModelNumber: "NI-N16A64-201",
    title: "Microwave Radar Home Garden-Lawn Sensor",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Microwave Radar Home Garden-Lawn Sensor.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Microwave Radar Home Garden-Lawn Sensor.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Microwave Radar Home Garden-Lawn Sensor.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Microwave Radar Home Garden-Lawn Sensor.webp",

    // Card
    Cardsingleword: "Outdoor Monitoring",
    Cardthreeword:
      "Microwave radar sensor designed for reliable perimeter detection in gardens and lawns.",

    // Modal
    Mkeyone:
      "Microwave radar technology ensures accurate detection over a wide area.",
    Mkeytwo:
      "Specifically designed for outdoor use in gardens, lawns, and perimeters.",
    MkeyTHREE:
      "Resistant to weather conditions for reliable performance in different environments.",
    MkeyFOUR:
      "Ideal for enhancing home security by monitoring outdoor areas effectively.",
    modalDescriptionp:
      "The Microwave Radar Home Garden-Lawn Sensor uses advanced microwave radar technology for outdoor coverage, ensuring accurate detection and reliable performance in all weather conditions. Its robust build and outdoor compatibility make it an excellent choice for enhancing security systems. Ideal for monitoring gardens, lawns, or outdoor perimeter",
  },

  {
    id: 38,
    category: 5,
    subcategory: 1,
    ModelNumber: "NI-N16A64-201",
    title: "Motion Sensor",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor B.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor B.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor B.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor B.webp",

    // Card
    Cardsingleword: "Motion Detection",
    Cardthreeword:
      "Reliable motion sensor for enhanced security and automated lighting solutions.",

    // Modal
    Mkeyone: "High sensitivity for detecting motion over a specified range.",
    Mkeytwo:
      "Ideal for both indoor and outdoor use for security and automation.",
    MkeyTHREE:
      "Easy installation and integration with existing security systems.",
    MkeyFOUR:
      "Can be used to automate lights or trigger alarms based on detected motion.",
    modalDescriptionp:
      "The Motion Sensor is designed to detect motion with high sensitivity, enhancing security and automating systems. Suitable for both indoor and outdoor use, it integrates easily with existing setups to provide extra protection. Its functionality includes automating lights, triggering alarms, and other tasks based on motion detection",
  },

  {
    id: 39,
    category: 5,
    subcategory: 1,
    ModelNumber: "NI-N16A64-201",
    title: "Motion Sensor",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor C.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor C.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor C.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor C.webp",

    // Card
    Cardsingleword: "Reliable Detection",
    Cardthreeword:
      "Highly sensitive motion sensor with advanced detection capabilities for enhanced security.",

    // Modal
    Mkeyone:
      "Advanced motion detection technology for accurate and reliable monitoring.",
    Mkeytwo:
      "Ideal for home security setups, providing an extra layer of protection.",
    MkeyTHREE:
      "Easy installation with flexible mounting options for various environments.",
    MkeyFOUR: "Compatible with most security systems for seamless integration.",
    modalDescriptionp:
      "The Motion Sensor provides robust and accurate motion detection capabilities, ensuring your home or property is well-protected. With advanced sensor technology, it is capable of detecting even the slightest movements, making it an essential component of any modern security system. Its easy installation and compatibility with various security setups make it a versatile choice for enhancing safety.",
  },

  {
    id: 40,
    category: 5,
    subcategory: 1,
    ModelNumber: "NI-N16A64-201",
    title: "Motion Sensor",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor N.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor N.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor N.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor N.webp",

    // Card
    Cardsingleword: "Enhanced Security",
    Cardthreeword:
      "High-performance motion sensor designed for reliable intrusion detection and security automation.",

    // Modal
    Mkeyone: "High-sensitivity sensor for detecting even subtle movements.",
    Mkeytwo:
      "Works seamlessly with smart home systems for automation and alerts.",
    MkeyTHREE:
      "Weather-resistant design suitable for both indoor and outdoor use.",
    MkeyFOUR:
      "Easy integration into existing security setups with minimal configuration.",
    modalDescriptionp:
      "The Motion Sensor delivers high-sensitivity intrusion detection, ideal for homes and businesses. Compatible with smart home systems, it enables automation and instant alerts. Its weather-resistant build supports indoor and outdoor use, ensuring easy installation and reliable, all-around security.",
  },

  {
    id: 41,
    category: 5,
    subcategory: 1,
    ModelNumber: "NI-N16A64-201",
    title: "Motion Sensor",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor R.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor R.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor R.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor R.webp",

    // Card
    Cardsingleword: "Precision Detection",
    Cardthreeword:
      "Reliable motion sensor designed for precise and efficient movement detection in various environments.",

    // Modal
    Mkeyone:
      "Advanced detection technology ensures accurate movement recognition.",
    Mkeytwo:
      "Highly adaptable for both residential and commercial applications.",
    MkeyTHREE:
      "Integrates smoothly with existing security systems for enhanced monitoring.",
    MkeyFOUR:
      "Compact design for easy installation and minimal impact on surroundings.",
    modalDescriptionp:
      "The Motion Sensor offers precise, efficient movement detection with advanced technology. Compact and easy to install, it integrates smoothly into residential or commercial security systems, providing reliable, responsive monitoring and enhancing overall protection in various environments.",
  },

  {
    id: 42,
    category: 5,
    subcategory: 1,
    ModelNumber: "NI-N16A64-201",
    title: "Outdoor iBeem Perimeter Sensor - 4IR",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - 4IR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - 4IR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - 4IR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - 4IR.webp",

    // Card
    Cardsingleword: "Advanced Perimeter Protection",
    Cardthreeword:
      "Outdoor perimeter sensor equipped with 4 IR beams for reliable intrusion detection.",

    // Modal
    Mkeyone:
      "4 IR beams provide comprehensive perimeter protection and enhanced detection accuracy.",
    Mkeytwo:
      "Designed specifically for outdoor use, ensuring durability and performance in various weather conditions.",
    MkeyTHREE:
      "Easy installation and integration with existing security systems for seamless operation.",
    MkeyFOUR:
      "Ideal for securing large outdoor areas such as properties, warehouses, and industrial sites.",
    modalDescriptionp:
      "The Outdoor iBeem Perimeter Sensor - 4IR offers advanced perimeter protection with four infrared beams, ensuring accurate intrusion detection. Built for harsh outdoor conditions, it integrates seamlessly with security systems, making it ideal for properties, warehouses, and industrial sites.",
  },

  {
    id: 43,
    category: 5,
    subcategory: 1,
    ModelNumber: "NI-N16A64-201",
    title: "Outdoor iBeem Perimeter Sensor - IR",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - IR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - IR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - IR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - IR.webp",

    // Card
    Cardsingleword: "Reliable Perimeter Detection",
    Cardthreeword:
      "Outdoor IR perimeter sensor for effective security with reliable intrusion detection.",

    // Modal
    Mkeyone:
      "Infrared (IR) technology ensures accurate detection and reduced false alarms.",
    Mkeytwo:
      "Designed for outdoor use with a rugged build to withstand harsh weather conditions.",
    MkeyTHREE:
      "Integrates easily with existing security systems for comprehensive protection.",
    MkeyFOUR:
      "Suitable for large outdoor areas, including residential properties and commercial sites.",
    modalDescriptionp:
      "The Outdoor iBeem Perimeter Sensor - IR ensures reliable perimeter protection with advanced infrared technology. Built for outdoor use, it delivers accurate detection and minimal false alarms. Its durable, weatherproof design integrates easily with security systems for enhanced outdoor protection.",
  },

  {
    id: 44,
    category: 5,
    subcategory: 1,
    ModelNumber: "NI-N16A64-201",
    title: "Rolling Shutter Sensor",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor F.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor F.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor F.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor F.webp",

    // Card
    Cardsingleword: "Enhanced Security",
    Cardthreeword:
      "Advanced rolling shutter sensor for precise detection and security enhancement.",

    // Modal
    Mkeyone:
      "Designed to work with rolling shutters for accurate intrusion detection.",
    Mkeytwo: "Features high sensitivity to detect any movement or tampering.",
    MkeyTHREE:
      "Robust build quality ensures reliable performance in various environments.",
    MkeyFOUR:
      "Easily integrates with existing security systems to provide comprehensive protection.",
    modalDescriptionp:
      "The Rolling Shutter Sensor provides advanced protection by detecting movement and tampering on rolling shutters. With high sensitivity and durable construction, it ensures reliable performance in various settings. Easy to integrate, it's ideal for enhancing security in homes and businesses.",
  },

  {
    id: 45,
    category: 5,
    subcategory: 1,
    ModelNumber: "NI-N16A64-201",
    title: "Rolling Shutter Sensor",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor L.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor L.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor L.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor L.webp",

    // Card
    Cardsingleword: "Advanced Detection",
    Cardthreeword:
      "High-performance rolling shutter sensor designed for superior detection and security.",

    // Modal
    Mkeyone:
      "Specialized for rolling shutters to offer precise intrusion detection.",
    Mkeytwo:
      "High sensitivity to accurately detect any unauthorized movement or tampering.",
    MkeyTHREE:
      "Durable construction ensures reliable performance in various conditions.",
    MkeyFOUR:
      "Easily integrates into existing security setups for enhanced protection.",
    modalDescriptionp:
      "The Rolling Shutter Sensor provides high-performance detection specifically designed for rolling shutters. It features high sensitivity to detect unauthorized movements or tampering, ensuring superior security. The sensor’s durable build guarantees reliable operation under various conditions. It integrates seamlessly with current security systems, enhancing overall protection and providing peace of mind.",
  },

  {
    id: 46,
    category: 5,
    subcategory: 1,
    ModelNumber: "NI-N16A64-201",
    title: "Smoke-Fire Sensor with Motion Detection",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless with Motion Detection.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless with Motion Detection.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless with Motion Detection.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless with Motion Detection.webp",

    // Card
    Cardsingleword: "Integrated Safety",
    Cardthreeword:
      "Wireless smoke and fire sensor with motion detection capabilities for enhanced safety.",

    // Modal
    Mkeyone:
      "Wireless design ensures easy installation without the need for complex wiring.",
    Mkeytwo:
      "Advanced smoke and fire detection to provide timely alerts and prevent emergencies.",
    MkeyTHREE:
      "Motion detection feature enhances security by detecting movement in addition to environmental changes.",
    MkeyFOUR:
      "Reliable and durable construction designed for long-term use in various environments.",
    modalDescriptionp:
      "The Smoke-Fire Sensor Wireless with Motion Detection offers dual protection with advanced smoke detection and motion monitoring. Its wireless design ensures easy installation, while durable construction provides reliable, long-term safety—ideal for securing homes, offices, and other indoor environments.",
  },

  {
    id: 47,
    category: 5,
    subcategory: 1,
    ModelNumber: "NI-N16A64-201",
    title: "Smoke-Fire Sensor Wireless",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless.webp",

    // Card
    Cardsingleword: "Wireless Safety",
    Cardthreeword:
      "Reliable smoke and fire sensor with a wireless design for easy installation.",

    // Modal
    Mkeyone:
      "Wireless technology allows for quick and easy installation without extensive wiring.",
    Mkeytwo:
      "Sensitive smoke and fire detection for reliable performance in emergency situations.",
    MkeyTHREE:
      "Compact design fits seamlessly into various environments while maintaining high functionality.",
    MkeyFOUR:
      "Durable and long-lasting, designed to provide consistent safety and performance over time.",
    modalDescriptionp:
      "The Smoke-Fire Sensor Wireless offers reliable smoke and fire detection with easy wireless installation. Its high sensitivity ensures quick alerts, while the compact design fits seamlessly into any environment. A durable, dependable choice for enhancing safety in homes or businesses.",
  },

  {
    id: 51,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Solar Motion Sensor",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar Motion Sensor O.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar Motion Sensor O.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar Motion Sensor O.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar Motion Sensor O.webp",

    // Card
    Cardsingleword: "Eco-friendly Security",
    Cardthreeword:
      "Solar-powered motion sensor for efficient, eco-friendly outdoor security with wireless installation and intelligent detection.",

    // Modal
    Mkeyone:
      "Solar-powered design eliminates the need for wiring and external power sources.",
    Mkeytwo:
      "Advanced motion detection with adjustable sensitivity for precise monitoring.",
    MkeyTHREE:
      "Weatherproof construction ensures reliable operation in all outdoor conditions.",
    MkeyFOUR:
      "Wireless installation for flexibility in placing the sensor in optimal locations.",
    modalDescriptionp:
      "The Solar Motion Sensor is an eco-friendly, solar-powered security solution for outdoor use. With adjustable motion sensitivity and weather-resistant design, it ensures accurate detection and reliable performance. Its wireless setup allows flexible placement for securing entry points, gardens, and more.",
  },

  {
    id: 52,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Solar iBeem Perimeter Sensor",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 2IR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 2IR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 2IR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 2IR.webp",

    // Card
    Cardsingleword: "Perimeter Security",
    Cardthreeword:
      "Solar-powered iBeem perimeter sensor for long-range infrared detection, securing outdoor boundaries efficiently and wirelessly.",

    // Modal
    Mkeyone:
      "Dual infrared beam technology for precise long-range perimeter detection.",
    Mkeytwo:
      "Solar-powered design eliminates the need for wired installations or external power.",
    MkeyTHREE:
      "Weather-resistant housing ensures reliable performance in harsh outdoor environments.",
    MkeyFOUR:
      "Wireless installation allows for easy setup and flexibility in positioning.",
    modalDescriptionp:
      "The Solar iBeem Perimeter Sensor offers efficient outdoor security with dual infrared beams for long-range detection. Solar-powered and wire-free, it ensures easy installation. Its weather-resistant design and flexible placement make it ideal for gardens, driveways, and perimeter protection.",
  },

  {
    id: 53,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Solar iBeem Perimeter Sensor - 4IR",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 4IR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 4IR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 4IR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 4IR.webp",

    // Card
    Cardsingleword: "Enhanced Security",
    Cardthreeword:
      "Solar-powered iBeem perimeter sensor with 4 infrared beams for superior long-range detection and wireless outdoor security.",

    // Modal
    Mkeyone:
      "Quad infrared beam technology for enhanced perimeter protection and accuracy.",
    Mkeytwo:
      "Solar-powered system for eco-friendly and maintenance-free operation.",
    MkeyTHREE:
      "Durable, weatherproof construction for reliable performance in various conditions.",
    MkeyFOUR:
      "Wireless installation ensures easy setup and flexibility in sensor placement.",
    modalDescriptionp:
      "The Solar iBeem Perimeter Sensor - 4IR delivers long-range, high-precision security with four infrared beams. Fully solar-powered and weatherproof, it ensures reliable performance without wiring. Ideal for flexible installation in outdoor, high-security environments like boundaries, properties, and industrial zones.",
  },

  {
    id: 54,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Window Sensor (Metal) Wired",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Metal) Wired.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Metal) Wired.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Metal) Wired.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Metal) Wired.webp",

    // Card
    Cardsingleword: "Reliable Detection",
    Cardthreeword:
      "Wired window sensor for high-sensitivity detection, built with durable metal housing for reliable indoor security.",

    // Modal
    Mkeyone:
      "Wired connection ensures consistent and reliable detection with minimal interference.",
    Mkeytwo: "Durable metal housing for enhanced protection and longevity.",
    MkeyTHREE:
      "High-sensitivity detection triggers alarms upon window opening or tampering.",
    MkeyFOUR:
      "Ideal for securing windows in homes, offices, and commercial buildings.",
    modalDescriptionp:
      "The Window Sensor (Metal) Wired ensures reliable protection for residential and commercial windows. Its durable metal housing resists tampering, while the wired connection offers uninterrupted, high-sensitivity detection. Ideal for securing homes, offices, and other indoor environments with consistent performance.",
  },

  {
    id: 55,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Window Sensor (Plastic) Wired",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Plastic) Wired.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Plastic) Wired.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Plastic) Wired.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Plastic) Wired.webp",

    // Card
    Cardsingleword: "Lightweight Detection",
    Cardthreeword:
      "Wired window sensor with plastic housing, offering lightweight and cost-effective indoor security for windows.",

    // Modal
    Mkeyone:
      "Wired sensor provides reliable and uninterrupted detection for windows.",
    Mkeytwo:
      "Lightweight plastic housing makes it easy to install and maintain.",
    MkeyTHREE:
      "Sensitive to window opening or tampering, triggering alarms instantly.",
    MkeyFOUR: "An affordable option for securing windows in homes and offices.",
    modalDescriptionp:
      "The Window Sensor (Plastic) Wired is a cost-effective, lightweight solution for indoor window security. With a reliable wired connection and high-sensitivity detection, it ensures immediate alerts during tampering. Ideal for homes, offices, and other indoor spaces needing affordable protection.",
  },

  {
    id: 56,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Window Sensor (Wooden) Wired",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.webp",

    // Card
    Cardsingleword: "Window Sensor",
    Cardthreeword: "Wooden Wired Sensor",

    // Modal
    Mkeyone: "Robust wooden design.",
    Mkeytwo: "Reliable wired connection.",
    MkeyTHREE: "Enhanced security for windows.",
    MkeyFOUR: "Seamless integration with home systems.",
    modalDescriptionp:
      "The Window Sensor (Wooden) Wired features a robust wooden design and reliable wired connection, providing enhanced security for windows. Its seamless integration with home security systems ensures comprehensive protection for your property. Ideal for users seeking a reliable and aesthetically pleasing sensor for their windows.",
  },

  {
    id: 57,
    category: 5,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Window Sensor (Wooden) Wired",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.webp",

    // Card
    Cardsingleword: "Durable Security",
    Cardthreeword:
      "Wired window sensor with wooden housing for reliable and long-lasting window security in indoor environments.",

    // Modal
    Mkeyone:
      "Wired sensor delivers consistent and stable detection for window security.",
    Mkeytwo:
      "Wooden housing provides durability and blends well with wood-framed windows.",
    MkeyTHREE:
      "High-sensitivity detection system triggers alerts on unauthorized window activity.",
    MkeyFOUR:
      "Ideal for homes or commercial spaces with wooden window frames, ensuring seamless integration.",
    modalDescriptionp:
      "The Window Sensor (Wooden) Wired offers reliable detection for wood-framed windows with a stable wired connection. Its wooden housing blends seamlessly with décor, ensuring discreet security. Ideal for residential and commercial use, it provides constant monitoring against unauthorized access or tampering.",
  },

  // 6-SMART SWITCH--4PRODUCTS
  {
    id: 58,
    category: 6,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Gang Switch - Retrofit",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Gang Switch - Retrofit-png.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Gang Switch - Retrofit-png.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Gang Switch - Retrofit-png.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Gang Switch - Retrofit-png.webp",

    // Card
    Cardsingleword: "Upgrade Ready",
    Cardthreeword: "Smart Retrofit Switch",

    // Modal
    Mkeyone:
      "Easily retrofits into existing switch systems for smart control upgrades.",
    Mkeytwo:
      "Compatible with various home automation systems for remote and voice control.",
    MkeyTHREE: "Sleek design ensures it blends well with modern interiors.",
    MkeyFOUR:
      "Ideal for upgrading traditional switches to smart functionality without rewiring.",
    modalDescriptionp:
      "The Gang Switch - Retrofit upgrades traditional switches to smart switches without rewiring. Compatible with major home automation systems, it supports remote control, scheduling, and voice commands. Its sleek design suits modern interiors, making it an ideal solution for effortlessly enhancing your home’s lighting and electrical control systems.",
  },

  {
    id: 59,
    category: 6,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Smart Plug",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Smar Plug E.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Smar Plug E.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Smar Plug E.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Smar Plug E.webp",

    // Card
    Cardsingleword: "Smart Power",
    Cardthreeword: "Built-in energy monitoring",

    // Modal
    Mkeyone:
      "Allows remote control of connected appliances via smartphone or voice control.",
    Mkeytwo: "Energy monitoring feature helps track power consumption.",
    MkeyTHREE:
      "Enables scheduling and automation of devices for energy savings.",
    MkeyFOUR: "Compact design for easy integration into any electrical outlet.",
    modalDescriptionp:
      "The Smart Plug turns any appliance into a smart device, allowing remote control via smartphone or voice assistant. It features energy monitoring to track power usage and supports scheduling for optimized energy efficiency. Its compact design fits seamlessly into your home, offering convenience, automation, and better energy management.",
  },

  {
    id: 60,
    category: 6,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Touch Wall Switch 2M",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Touch Wall Switch 2M.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Touch Wall Switch 2M.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Touch Wall Switch 2M.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Touch Wall Switch 2M.webp",

    // Card
    Cardsingleword: "Elegant Control",
    Cardthreeword: "Smart control via app or voice",

    // Modal
    Mkeyone: "Touch-sensitive interface for smooth and responsive control.",
    Mkeytwo: "Compatible with smart home systems for remote and voice control.",
    MkeyTHREE: "Modern and elegant design complements any room decor.",
    MkeyFOUR: "2-module configuration for flexible switching options.",
    modalDescriptionp:
      "The Touch Wall Switch 2M combines elegance with smart functionality. Its touch-sensitive interface allows easy control of lights and devices. Seamlessly integrating with smart home systems, it offers remote access and voice control. With its sleek, minimalistic design, it enhances room aesthetics while providing flexible, modern switching options.",
  },

  {
    id: 61,
    category: 6,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Wireless Bell",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Wireless Bell.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Wireless Bell.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Wireless Bell.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Wireless Bell.webp",

    // Card
    Cardsingleword: "Smart Alert",
    Cardthreeword: "Smart alerts and notifications",

    // Modal
    Mkeyone:
      "Wireless design for hassle-free installation without the need for wiring.",
    Mkeytwo:
      "Smart notifications sent to your smartphone for enhanced convenience.",
    MkeyTHREE:
      "Customizable chimes and volume control to suit your preferences.",
    MkeyFOUR:
      "Battery-operated, with long-lasting performance for minimal maintenance.",
    modalDescriptionp:
      "The Wireless Bell offers a modern, easy-to-install solution with no wiring required. It provides smart notifications to your smartphone and allows customization of chimes and volume. Battery-operated for long-lasting performance, this bell is perfect for home or office use, offering convenience and minimal maintenance.",
  },

  // 7-ACCESS CONTROL--3PRODUCTS
  {
    id: 62,
    category: 7,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Access Control FACE+CARD+PIN",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Android) - FACE+CARD+PIN.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Android) - FACE+CARD+PIN.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Android) - FACE+CARD+PIN.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Android) - FACE+CARD+PIN.webp",

    // Card
    Cardsingleword: "Smart Access",
    Cardthreeword:
      "Android-based access control system featuring facial recognition, card, and PIN authentication.",

    // Modal
    Mkeyone:
      "Supports multi-factor authentication including face, card, and PIN for enhanced security.",
    Mkeytwo:
      "Android operating system for easy integration with custom software and apps.",
    MkeyTHREE:
      "Advanced facial recognition technology for secure, touchless entry.",
    MkeyFOUR:
      "Ideal for high-traffic areas requiring fast and accurate access control.",
    modalDescriptionp:
      "The Access Control FACE+CARD+PIN system offers secure authentication via facial recognition, card, and PIN, powered by Linux for reliable performance—ideal for businesses needing robust, multi-layered access control.",
  },

  {
    id: 63,
    category: 7,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Access Control FACE+CARD+PIN",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Linux) - FACE+CARD+PIN.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Linux) - FACE+CARD+PIN.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Linux) - FACE+CARD+PIN.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Linux) - FACE+CARD+PIN.webp",

    // Card
    Cardsingleword: "Secure Entry",
    Cardthreeword:
      "Linux-based access control system with face recognition, card, and PIN for secure authentication.",

    // Modal
    Mkeyone:
      "Linux-based platform for stability and security in access control applications.",
    Mkeytwo:
      "Facial recognition, card, and PIN authentication for multi-layered security.",
    MkeyTHREE:
      "Reliable performance in environments requiring consistent access control.",
    MkeyFOUR:
      "Ideal for businesses and facilities looking for secure and stable access solutions.",
    modalDescriptionp:
      "The Access Control FACE+CARD+PIN system delivers secure, stable access control using facial recognition, card, and PIN authentication. Powered by Linux, it ensures reliable performance—ideal for small to large businesses needing multi-layered security.",
  },

  {
    id: 64,
    category: 7,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Access Control WIFI+CARD+PIN",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control WIFI-TUYA - BIO+CARD+PIN.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control WIFI-TUYA - BIO+CARD+PIN.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control WIFI-TUYA - BIO+CARD+PIN.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control WIFI-TUYA - BIO+CARD+PIN.webp",

    // Card
    Cardsingleword: "Connected Security",
    Cardthreeword:
      "Smart WiFi-based access control with biometric, card, and PIN support powered by TUYA.",

    // Modal
    Mkeyone:
      "WiFi-enabled access control system with TUYA integration for remote management.",
    Mkeytwo:
      "Biometric authentication, card, and PIN for flexible and secure access.",
    MkeyTHREE: "Allows real-time monitoring and control via the TUYA app.",
    MkeyFOUR:
      "Perfect for smart homes, offices, and facilities requiring remote access management.",
    modalDescriptionp:
      "The Access Control WIFI+CARD+PIN system integrates with the TUYA platform for remote management via WiFi. Supporting biometric, card, and PIN entry, it offers flexible, secure access. Ideal for smart homes, offices, and commercial spaces needing advanced, app-controlled access solutions.",
  },

  //8-DIGITAL CLASS--1PRODUCTS

  {
    id: 65,
    category: 8,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "INTERACTIVE FLAT PANEL DISPLAY (IFPD)",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/DIGITAL CLASS/IFPD.webp",
    modalimage1: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/DIGITAL CLASS/IFPD.webp",
    modalimage2: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/DIGITAL CLASS/IFPD.webp",
    modalimage3: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/DIGITAL CLASS/IFPD.webp",

    // Card
    Cardsingleword: "Interactive Display",
    Cardthreeword:
      "Advanced flat panel display with interactive features for enhanced presentations and collaboration.",

    // Modal
    Mkeyone:
      "High-definition flat panel with touchscreen capabilities for interactive presentations.",
    Mkeytwo:
      "Integrated with digital whiteboarding and annotation tools for enhanced collaboration.",
    MkeyTHREE:
      "Supports multiple connectivity options including HDMI, USB, and wireless connections.",
    MkeyFOUR:
      "Ideal for educational settings, corporate meetings, and collaborative work environments.",
    modalDescriptionp:
      "The INTERACTIVE FLAT PANEL DISPLAY (IFPD) is a high-definition touchscreen with digital whiteboarding, annotation tools, and multiple connectivity options—perfect for interactive collaboration in education, corporate settings, and presentations.",
  },

  //9-AI-VMS--8PRODUCTS

  {
    id: 66,
    category: 9,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Mobile NVR",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR 1.webp",
    modalimage1: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR 1.webp",
    modalimage2: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR 1.webp",
    modalimage3: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR 1.webp",

    // Card
    Cardsingleword: "Mobile Recording",
    Cardthreeword:
      "Compact Network Video Recorder for mobile applications with robust recording and management features.",

    // Modal
    Mkeyone:
      "Compact and rugged design tailored for mobile environments and vehicle installations.",
    Mkeytwo:
      "Supports high-definition video recording and playback for clear and detailed surveillance footage.",
    MkeyTHREE:
      "Advanced network capabilities for remote access and real-time monitoring.",
    MkeyFOUR:
      "Ideal for use in law enforcement, fleet management, and mobile surveillance applications.",
    modalDescriptionp:
      "The Mobile NVR is a compact, rugged recorder built for vehicles and mobile environments. It supports HD video recording and playback with remote access and real-time monitoring. Ideal for law enforcement and fleet management, its durable design ensures reliable performance in demanding conditions, delivering clear, dependable surveillance on the move.",
  },

  {
    id: 67,
    category: 9,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Mobile NVR",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR.webp",
    modalimage1: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR.webp",
    modalimage2: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR.webp",
    modalimage3: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR.webp",

    // Card
    Cardsingleword: "Mobile Recording",
    Cardthreeword:
      "Compact Network Video Recorder for mobile applications with robust recording and management features.",

    // Modal
    Mkeyone:
      "Compact and rugged design tailored for mobile environments and vehicle installations.",
    Mkeytwo:
      "Supports high-definition video recording and playback for clear and detailed surveillance footage.",
    MkeyTHREE:
      "Advanced network capabilities for remote access and real-time monitoring.",
    MkeyFOUR:
      "Ideal for use in law enforcement, fleet management, and mobile surveillance applications.",
    modalDescriptionp:
      "The Mobile NVR is a compact, rugged recorder built for vehicles and mobile environments. It supports HD video recording and playback with remote access and real-time monitoring. Ideal for law enforcement and fleet management, its durable design ensures reliable performance in demanding conditions, delivering clear, dependable surveillance on the move.",
  },

  {
    id: 68,
    category: 9,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "VMS Controller Water Proof",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Controller Water Proof.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Controller Water Proof.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Controller Water Proof.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Controller Water Proof.webp",

    // Card
    Cardsingleword: "Durable Control",
    Cardthreeword:
      "Waterproof VMS controller designed for reliable performance in various environments.",

    // Modal
    Mkeyone:
      "Robust waterproof design to withstand harsh environmental conditions.",
    Mkeytwo:
      "High-performance control for managing video surveillance systems.",
    MkeyTHREE:
      "Ergonomic interface for ease of use and efficient system management.",
    MkeyFOUR:
      "Ideal for outdoor installations and locations with challenging weather conditions.",
    modalDescriptionp:
      "The VMS Controller Water Proof delivers reliable performance in tough environments with its durable, waterproof design. Ideal for outdoor use, it ensures seamless video surveillance management through an ergonomic interface. Built to withstand harsh weather, it offers efficient, long-lasting control for demanding installations across various environmental conditions.",
  },

  {
    id: 69,
    category: 9,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "VMS Monitor",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor B.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor B.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor B.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor B.webp",

    // Card
    Cardsingleword: "High-Resolution Display",
    Cardthreeword:
      "Advanced monitor for clear, detailed video surveillance and system management.",

    // Modal
    Mkeyone: "High-resolution display for clear and detailed video output.",
    Mkeytwo: "Supports multiple input sources for versatile connectivity.",
    MkeyTHREE:
      "Ergonomic design with adjustable stand for optimal viewing angles.",
    MkeyFOUR:
      "Ideal for use in control rooms, monitoring stations, and surveillance centers.",
    modalDescriptionp:
      "The VMS Monitor offers high-resolution video output for clear, detailed surveillance footage. Supporting multiple input sources, it adapts to various system setups. Its ergonomic design and adjustable stand ensure optimal viewing angles, making it ideal for control rooms and monitoring stations. It enhances video management with sharp, accurate visuals.",
  },

  {
    id: 70,
    category: 9,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "VMS Monitor",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor C.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor C.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor C.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor C.webp",

    // Card
    Cardsingleword: "Premium Display",
    Cardthreeword:
      "High-performance monitor for superior video clarity and system integration.",

    // Modal
    Mkeyone:
      "High-performance display with exceptional color accuracy and clarity.",
    Mkeytwo: "Supports various video inputs for flexible system integration.",
    MkeyTHREE:
      "Advanced features including high refresh rates and low latency for smooth video playback.",
    MkeyFOUR:
      "Ideal for professional video management and critical surveillance applications.",
    modalDescriptionp:
      "The VMS Monitor (Model C) delivers exceptional color accuracy and clarity for high-quality video output. Supporting multiple input sources, it integrates easily with diverse systems. With high refresh rates and low latency, it ensures smooth playback. Ideal for professional surveillance, it meets the demands of high-performance monitoring environments.",
  },

  {
    id: 71,
    category: 9,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "VMS Monitor",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor.webp",
    modalimage1: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor.webp",
    modalimage2: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor.webp",
    modalimage3: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor.webp",

    // Card
    Cardsingleword: "Versatile Display",
    Cardthreeword:
      "Comprehensive monitor for effective video management and surveillance.",

    // Modal
    Mkeyone: "High-resolution display for clear and detailed video output.",
    Mkeytwo: "Compatible with multiple video inputs for diverse system setups.",
    MkeyTHREE:
      "Robust design suited for continuous operation in surveillance environments.",
    MkeyFOUR:
      "Ideal for use in control rooms, security centers, and monitoring stations.",
    modalDescriptionp:
      "The VMS Monitor is a high-resolution display built for effective video management and surveillance. It supports multiple video inputs for flexible system integration. Designed for continuous operation, its robust build suits control rooms and security centers. Ideal for professionals, it ensures reliable performance and clear visuals in demanding environments.",
  },

  {
    id: 72,
    category: 9,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Wireless VMS Camera Receiver",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Wireless VMS Camera Receiver.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Wireless VMS Camera Receiver.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Wireless VMS Camera Receiver.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Wireless VMS Camera Receiver.webp",

    // Card
    Cardsingleword: "Seamless Connectivity",
    Cardthreeword:
      "Efficient receiver for wireless VMS camera integration and monitoring.",

    // Modal
    Mkeyone:
      "Supports wireless communication for seamless integration with VMS cameras.",
    Mkeytwo:
      "Ensures stable and reliable video transmission with minimal interference.",
    MkeyTHREE: "User-friendly setup with intuitive configuration options.",
    MkeyFOUR:
      "Compatible with a wide range of VMS cameras for versatile application.",
    modalDescriptionp:
      "The Wireless VMS Camera Receiver enables smooth integration of wireless VMS cameras, ensuring stable video transmission with minimal interference. With easy setup and intuitive configuration, it fits seamlessly into existing surveillance systems. Compatible with various VMS cameras, it offers efficient, reliable wireless connectivity for enhanced video management",
  },

  {
    id: 73,
    category: 9,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "VMS",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/vms-7-6683fbd1695c5.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/vms-7-6683fbd1695c5.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/vms-7-6683fbd1695c5.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/vms-7-6683fbd1695c5.webp",

    // Card
    Cardsingleword: "Advanced Monitoring",
    Cardthreeword: "Comprehensive VMS for seamless video management.",

    // Modal
    Mkeyone: "Supports a wide range of video formats and resolutions.",
    Mkeytwo: "Integrated analytics for enhanced surveillance capabilities.",
    MkeyTHREE: "Scalable architecture to meet various monitoring needs.",
    MkeyFOUR: "User-friendly interface for efficient system management.",
    modalDescriptionp:
      "The VMS (Video Management System) offers a powerful platform for managing multiple video feeds across various sources. Supporting diverse formats and resolutions, it includes advanced analytics like motion detection and object recognition. Its scalable design suits different monitoring needs, while the user-friendly interface ensures efficient operation and system control.",
  },

  //10-WATER--3PRODUCTS
  {
    id: 74,
    category: 10,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Tank Manager",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Tank Manager.webp",
    modalimage1: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Tank Manager.webp",
    modalimage2: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Tank Manager.webp",
    modalimage3: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Tank Manager.webp",

    // Card
    Cardsingleword: "Efficient Control",
    Cardthreeword: "Advanced management system for water tanks.",

    // Modal
    Mkeyone: "Real-time monitoring of tank levels and usage.",
    Mkeytwo: "Automated alerts for maintenance and low levels.",
    MkeyTHREE: "User-friendly interface for easy operation.",
    MkeyFOUR: "Compatible with various tank sizes and types.",
    modalDescriptionp:
      "The Tank Manager is an advanced system for real-time monitoring of water tank levels and usage. It sends automated alerts for maintenance and low levels, preventing disruptions. With a user-friendly interface, it supports various tank sizes and types, offering versatility and ensuring optimal performance across different applications.",
  },

  {
    id: 75,
    category: 10,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Water Leak Detector",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector A.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector A.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector A.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector A.webp",

    // Card
    Cardsingleword: "Leak Detection",
    Cardthreeword: "Advanced sensor for detecting water leaks.",

    // Modal
    Mkeyone: "High-sensitivity sensors for accurate leak detection.",
    Mkeytwo: "Instant alerts via app or notifications for immediate action.",
    MkeyTHREE: "Easy installation and maintenance.",
    MkeyFOUR: "Compatible with various environments and water systems.",
    modalDescriptionp:
      "The Water Leak Detector uses high-sensitivity sensors to detect even minor leaks early. It sends instant alerts via app or notifications for prompt action to prevent damage. Easy to install and maintain, it’s compatible with various environments and water systems, providing reliable protection against water damage.",
  },

  {
    id: 76,
    category: 10,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Water Leak Detector",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector B.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector B.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector B.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector B.webp",

    // Card
    Cardsingleword: "Leak Detection",
    Cardthreeword: "Advanced sensor for detecting water leaks.",

    // Modal
    Mkeyone: "High-sensitivity sensors for accurate leak detection.",
    Mkeytwo: "Instant alerts via app or notifications for immediate action.",
    MkeyTHREE: "Easy installation and maintenance.",
    MkeyFOUR: "Compatible with various environments and water systems.",
    modalDescriptionp:
      "The Water Leak Detector features high-sensitivity sensors to detect even minor leaks early. It sends instant alerts via app or notifications for quick action to prevent damage. Easy to install and maintain, it’s compatible with various environments and water systems, providing reliable protection against water damage to your property.",
  },

  //11-ELECTRIC FENCE--12PRODUCTS

  {
    id: 77,
    category: 11,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Electric Fence Energiser",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Energiser.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Energiser.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Energiser.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Energiser.webp",

    // Card
    Cardsingleword: "Fence Energiser",
    Cardthreeword: "Powerful electric fence energiser.",

    // Modal
    Mkeyone: "High voltage output for effective deterrence.",
    Mkeytwo: "Adjustable power settings to suit various applications.",
    MkeyTHREE: "Durable construction for outdoor use.",
    MkeyFOUR: "Compatible with various fence types and lengths.",
    modalDescriptionp:
      "The Electric Fence Energiser provides a powerful solution for securing perimeters with high voltage output to effectively deter intruders and animals. It features adjustable power settings to accommodate different applications and lengths, ensuring versatile use. Designed with durable construction, this energiser is built to withstand outdoor conditions and is compatible with various fence types, making it a reliable choice for comprehensive security.",
  },

  {
    id: 78,
    category: 11,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Electric Fence Siren",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Siren.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Siren.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Siren.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Siren.webp",

    // Card
    Cardsingleword: "Fence Siren",
    Cardthreeword: "Loud alarm for security.",

    // Modal
    Mkeyone: "High-decibel siren for effective deterrence.",
    Mkeytwo: "Weather-resistant for reliable outdoor use.",
    MkeyTHREE: "Integrates with electric fence systems.",
    MkeyFOUR: "Easy installation and maintenance.",
    modalDescriptionp:
      "The Electric Fence Siren is designed to enhance security by providing a loud and effective alarm when a breach is detected. With a high-decibel output, it serves as a powerful deterrent to potential intruders. Built to withstand outdoor conditions, the siren is weather-resistant and integrates seamlessly with electric fence systems. Its easy installation and low maintenance make it a practical addition to any security setup.",
  },

  {
    id: 79,
    category: 11,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Electric Fence",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-11-6683fb5cb455f.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-11-6683fb5cb455f.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-11-6683fb5cb455f.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-11-6683fb5cb455f.webp",

    // Card
    Cardsingleword: "Electric Fence",
    Cardthreeword: "Secure your perimeter.",

    // Modal
    Mkeyone: "Provides high-voltage deterrence against intruders.",
    Mkeytwo: "Customizable to fit various perimeter sizes.",
    MkeyTHREE: "Durable and weather-resistant construction.",
    MkeyFOUR: "Simple installation with clear instructions.",
    modalDescriptionp:
      "The Electric Fence offers robust security by delivering a high-voltage deterrent to prevent unauthorized access. It can be customized to suit different perimeter sizes, ensuring effective protection tailored to your needs. Designed for durability and resilience against weather conditions, this electric fence is easy to install with straightforward instructions, making it a practical choice for securing your property.",
  },

  {
    id: 80,
    category: 11,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Electric Fence",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-2-6683fb58881de.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-2-6683fb58881de.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-2-6683fb58881de.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-2-6683fb58881de.webp",

    // Card
    Cardsingleword: "Electric Fence",
    Cardthreeword: "Perimeter Security Solution",

    // Modal
    Mkeyone: "Enhanced protection with electric deterrence.",
    Mkeytwo: "Adjustable for various fence heights and lengths.",
    MkeyTHREE: "Built to withstand harsh environmental conditions.",
    MkeyFOUR: "Easy setup and maintenance with user-friendly components.",
    modalDescriptionp:
      "The Electric Fence provides a powerful security solution designed to safeguard your property with high-voltage deterrence. It can be easily adjusted to accommodate different fence heights and lengths, ensuring comprehensive coverage. Constructed to endure severe weather conditions, this electric fence offers reliable protection. Its user-friendly design simplifies both installation and maintenance, making it an effective choice for enhancing your perimeter security.",
  },

  {
    id: 81,
    category: 11,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Electric Fence",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-3-6683fb5906e98.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-3-6683fb5906e98.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-3-6683fb5906e98.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-3-6683fb5906e98.webp",

    // Card
    Cardsingleword: "Electric Fence",
    Cardthreeword: "Perimeter Security Solution",

    // Modal
    Mkeyone: "Enhanced protection with electric deterrence.",
    Mkeytwo: "Adjustable for various fence heights and lengths.",
    MkeyTHREE: "Built to withstand harsh environmental conditions.",
    MkeyFOUR: "Easy setup and maintenance with user-friendly components.",
    modalDescriptionp:
      "The Electric Fence offers robust security with its high-voltage deterrence system. Designed to be adaptable, it accommodates various fence heights and lengths for complete perimeter protection. The durable construction ensures reliability even in extreme weather, and its user-friendly design simplifies installation and maintenance. Ideal for enhancing the security of any property.",
  },

  {
    id: 82,
    category: 11,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Electric Fence",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-4-6683fb59b2519.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-4-6683fb59b2519.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-4-6683fb59b2519.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-4-6683fb59b2519.webp",

    // Card
    Cardsingleword: "Electric Fence",
    Cardthreeword: "Advanced Security Solution",

    // Modal
    Mkeyone: "High-voltage deterrence for enhanced security.",
    Mkeytwo: "Customizable for different fence configurations.",
    MkeyTHREE: "Durable and weather-resistant for reliable performance.",
    MkeyFOUR: "Simple to install and maintain with comprehensive support.",
    modalDescriptionp:
      "The Electric Fence provides superior security with its high-voltage deterrence system, customizable to fit various fence configurations. It is built to endure harsh weather conditions, ensuring reliable performance year-round. With an easy installation process and robust support, this solution is ideal for enhancing property security.",
  },

  {
    id: 83,
    category: 11,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Electric Fence",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-5-6683fb5a25198.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-5-6683fb5a25198.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-5-6683fb5a25198.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-5-6683fb5a25198.webp",

    // Card
    Cardsingleword: "Electric Fence",
    Cardthreeword: "Advanced Security Solution",

    // Modal
    Mkeyone: "High-voltage deterrence for enhanced security.",
    Mkeytwo: "Customizable for different fence configurations.",
    MkeyTHREE: "Durable and weather-resistant for reliable performance.",
    MkeyFOUR: "Simple to install and maintain with comprehensive support.",
    modalDescriptionp:
      "The Electric Fence offers enhanced security with high-voltage deterrence, adaptable to various fence setups. Built to withstand harsh weather conditions, it ensures dependable performance throughout the year. Its straightforward installation and maintenance, combined with robust support, make it a reliable security solution.",
  },

  {
    id: 84,
    category: 11,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Electric Fence",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-6-6683fb5b22eca.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-6-6683fb5b22eca.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-6-6683fb5b22eca.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-6-6683fb5b22eca.webp",

    // Card
    Cardsingleword: "Electric Fence",
    Cardthreeword: "Enhanced Security System",

    // Modal
    Mkeyone: "Advanced high-voltage deterrence technology.",
    Mkeytwo: "Versatile setup options for different environments.",
    MkeyTHREE: "Robust, weather-resistant construction for durability.",
    MkeyFOUR: "Effortless installation and maintenance with expert support.",
    modalDescriptionp:
      "The Electric Fence is designed to deliver high-voltage deterrence for superior security. It offers versatile setup options suitable for various environments and features a robust, weather-resistant build for long-term durability. With easy installation and comprehensive support, it stands out as a reliable choice for enhancing security.",
  },

  {
    id: 85,
    category: 11,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Electric Fence",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-7-6683fb5b01f2e.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-7-6683fb5b01f2e.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-7-6683fb5b01f2e.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-7-6683fb5b01f2e.webp",

    // Card
    Cardsingleword: "Electric Fence",
    Cardthreeword: "Advanced Security Solution",

    // Modal
    Mkeyone: "High-voltage deterrence with reliable performance.",
    Mkeytwo: "Customizable for various security needs.",
    MkeyTHREE: "Durable and resistant to environmental conditions.",
    MkeyFOUR: "Simple installation with expert support available.",
    modalDescriptionp:
      "The Electric Fence offers advanced high-voltage deterrence to ensure superior security. It is customizable to meet diverse security needs and built to withstand environmental conditions, ensuring long-term durability. The easy installation process and available expert support make it a practical choice for enhancing security.",
  },

  {
    id: 86,
    category: 11,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Electric Fence",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-8-6683fb5bcb82e.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-8-6683fb5bcb82e.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-8-6683fb5bcb82e.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-8-6683fb5bcb82e.webp",

    // Card
    Cardsingleword: "Electric Fence",
    Cardthreeword: "Advanced Security Solution",

    // Modal
    Mkeyone: "High-voltage deterrence with reliable performance.",
    Mkeytwo: "Customizable for various security needs.",
    MkeyTHREE: "Durable and resistant to environmental conditions.",
    MkeyFOUR: "Simple installation with expert support available.",
    modalDescriptionp:
      "The Electric Fence offers advanced high-voltage deterrence to ensure superior security. It is customizable to meet diverse security needs and built to withstand environmental conditions, ensuring long-term durability. The easy installation process and available expert support make it a practical choice for enhancing security.",
  },

  {
    id: 87,
    category: 11,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Electric Fence",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d--10.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d--10.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d--10.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d--10.webp",

    // Card
    Cardsingleword: "Electric Fence",
    Cardthreeword: "Advanced Security Solution",

    // Modal
    Mkeyone: "High-voltage deterrence with reliable performance.",
    Mkeytwo: "Customizable for various security needs.",
    MkeyTHREE: "Durable and resistant to environmental conditions.",
    MkeyFOUR: "Simple installation with expert support available.",
    modalDescriptionp:
      "The Electric Fence offers advanced high-voltage deterrence to ensure superior security. It is customizable to meet diverse security needs and built to withstand environmental conditions, ensuring long-term durability. The easy installation process and available expert support make it a practical choice for enhancing security.",
  },

  {
    id: 88,
    category: 11,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Electric Fence",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d.webp",

    // Card
    Cardsingleword: "Electric Fence",
    Cardthreeword: "High Security Barrier",

    // Modal
    Mkeyone: "Robust high-voltage deterrent system.",
    Mkeytwo: "Flexible installation for various settings.",
    MkeyTHREE: "Weather-resistant and durable construction.",
    MkeyFOUR: "Easy to maintain with comprehensive support.",
    modalDescriptionp:
      "The Electric Fence provides a robust high-voltage deterrent system to secure your property effectively. Its flexible installation options make it suitable for various settings, and its weather-resistant construction ensures long-term durability. The product is easy to maintain, with comprehensive support available to assist with any needs.",
  },

  //12-FIRE SAFETY--3PRODUCTS
  {
    id: 89,
    category: 12,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "E-Valve Manipulator",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve Manipulator.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve Manipulator.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve Manipulator.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve Manipulator.webp",

    // Card
    Cardsingleword: "E-Valve Manipulator",
    Cardthreeword: "Precision Control Tool",

    // Modal
    Mkeyone: "Advanced valve manipulation technology.",
    Mkeytwo: "Designed for critical safety applications.",
    MkeyTHREE: "User-friendly interface for ease of operation.",
    MkeyFOUR: "Robust construction for durability and reliability.",
    modalDescriptionp:
      "The E-Valve Manipulator is equipped with advanced technology for precise valve control, essential for critical safety applications. It features a user-friendly interface for straightforward operation and is built with robust materials to ensure durability and reliability.",
  },

  {
    id: 90,
    category: 12,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "E-Valve",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve.webp",
    modalimage1: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve.webp",
    modalimage2: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve.webp",
    modalimage3: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve.webp",

    // Card
    Cardsingleword: "E-Valve",
    Cardthreeword: "Essential Safety Component",

    // Modal
    Mkeyone: "High-performance valve for critical applications.",
    Mkeytwo: "Reliable and efficient operation.",
    MkeyTHREE: "Easy integration with existing systems.",
    MkeyFOUR: "Durable construction for long-lasting use.",
    modalDescriptionp:
      "The E-Valve offers high-performance valve control, essential for critical safety applications. It ensures reliable and efficient operation, integrates easily with existing systems, and is constructed for durability and long-lasting use.",
  },

  {
    id: 91,
    category: 12,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Kitchen Automation",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/Kitchen Automation.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/Kitchen Automation.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/Kitchen Automation.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/Kitchen Automation.webp",

    // Card
    Cardsingleword: "Kitchen Automation",
    Cardthreeword: "Advanced Kitchen Solutions",

    // Modal
    Mkeyone: "Streamlines kitchen operations for efficiency.",
    Mkeytwo: "Enhances safety with automated controls.",
    MkeyTHREE: "Customizable settings for various kitchen tasks.",
    MkeyFOUR: "Integrates seamlessly with existing systems.",
    modalDescriptionp:
      "Kitchen Automation offers a streamlined approach to kitchen operations, enhancing safety with automated controls. It provides customizable settings for various tasks and integrates seamlessly with existing systems, making it an advanced solution for modern kitchens.",
  },

  // 12-ACCESSORIES--9PRODUCTS
  {
    id: 92,
    category: 13,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Remote Control",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control B.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control B.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control B.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control B.webp",

    // Card
    Cardsingleword: "Remote Control",
    Cardthreeword: "Wireless Device Controller",

    // Modal
    Mkeyone: "User-friendly interface for easy operation.",
    Mkeytwo: "Compact design for portability.",
    MkeyTHREE: "Compatible with a variety of devices.",
    MkeyFOUR: "Reliable wireless connectivity.",
    modalDescriptionp:
      "The Remote Control offers a user-friendly interface, allowing for easy operation of connected devices. Its compact design ensures portability, while its compatibility with a variety of devices and reliable wireless connectivity make it a versatile accessory for any setup.",
  },

  {
    id: 93,
    category: 13,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Remote Control",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control W.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control W.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control W.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control W.webp",

    // Card
    Cardsingleword: "Remote Control",
    Cardthreeword: "Wireless Device Controller",

    // Modal
    Mkeyone: "User-friendly interface for easy operation.",
    Mkeytwo: "Compact design for portability.",
    MkeyTHREE: "Compatible with a variety of devices.",
    MkeyFOUR: "Reliable wireless connectivity.",
    modalDescriptionp:
      "The Remote Control offers a user-friendly interface, allowing for easy operation of connected devices. Its compact design ensures portability, while its compatibility with a variety of devices and reliable wireless connectivity make it a versatile accessory for any setup.",
  },

  {
    id: 94,
    category: 13,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "SOS - Emergency Button Switch",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Button Switch.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Button Switch.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Button Switch.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Button Switch.webp",

    // Card
    Cardsingleword: "SOS Button",
    Cardthreeword: "Emergency Alert Switch",

    // Modal
    Mkeyone: "Immediate emergency response activation.",
    Mkeytwo: "Durable construction for reliable performance.",
    MkeyTHREE: "Simple installation and operation.",
    MkeyFOUR: "Clear emergency signal indicator.",
    modalDescriptionp:
      "The SOS - Emergency Button Switch is designed to provide immediate activation for emergency responses. With its durable construction and simple installation, it ensures reliable performance and a clear emergency signal indicator, making it a crucial component for safety and security systems.",
  },

  {
    id: 95,
    category: 13,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "SOS - Emergency Wall Switch",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Wall Switch.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Wall Switch.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Wall Switch.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Wall Switch.webp",

    // Card
    Cardsingleword: "SOS Wall Switch",
    Cardthreeword: "Emergency Activation Switch",

    // Modal
    Mkeyone: "Quick emergency response at the wall.",
    Mkeytwo: "Robust and reliable switch mechanism.",
    MkeyTHREE: "Easy to install and operate.",
    MkeyFOUR: "Visible and accessible emergency button.",
    modalDescriptionp:
      "The SOS - Emergency Wall Switch offers a quick and reliable way to activate emergency responses directly from the wall. Designed for robustness and ease of use, this switch ensures immediate activation when needed, making it a vital part of emergency response systems.",
  },

  {
    id: 96,
    category: 13,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Solar Wireless Siren",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Solar Wireless Siren.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Solar Wireless Siren.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Solar Wireless Siren.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Solar Wireless Siren.webp",

    // Card
    Cardsingleword: "Solar Siren",
    Cardthreeword: "Wireless Alarm System",

    // Modal
    Mkeyone: "Energy-efficient solar power.",
    Mkeytwo: "Wireless connectivity for easy installation.",
    MkeyTHREE: "High-decibel alarm for effective alert.",
    MkeyFOUR: "Durable and weather-resistant design.",
    modalDescriptionp:
      "The Solar Wireless Siren combines the efficiency of solar power with the convenience of wireless technology to deliver a high-decibel alarm system that is both effective and easy to install. Its durable, weather-resistant design ensures reliable performance in various conditions.",
  },

  {
    id: 97,
    category: 13,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Wired Siren with Battery",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wired Siren with Battery B.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wired Siren with Battery B.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wired Siren with Battery B.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wired Siren with Battery B.webp",

    // Card
    Cardsingleword: "Wired Siren",
    Cardthreeword: "Siren with Battery",

    // Modal
    Mkeyone: "Reliable wired connection.",
    Mkeytwo: "Backup battery for uninterrupted operation.",
    MkeyTHREE: "Loud alarm for high visibility alerts.",
    MkeyFOUR: "Durable build for long-lasting use.",
    modalDescriptionp:
      "The Wired Siren with Battery offers a dependable wired connection combined with a backup battery to ensure continuous operation. Its loud alarm is designed for high visibility alerts, and the durable construction guarantees long-lasting performance.",
  },

  {
    id: 98,
    category: 13,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Wireless Repeater",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Repeator.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Repeator.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Repeator.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Repeator.webp",

    // Card
    Cardsingleword: "Wireless Repeater",
    Cardthreeword: "Repeater for Coverage",

    // Modal
    Mkeyone: "Enhances wireless signal range.",
    Mkeytwo: "Reliable performance for extended coverage.",
    MkeyTHREE: "Easy setup and integration.",
    MkeyFOUR: "Compatible with various wireless devices.",
    modalDescriptionp:
      "The Wireless Repeater extends the range of your wireless network, ensuring reliable performance and coverage throughout your space. It is easy to set up and integrates seamlessly with various wireless devices, providing an enhanced and more stable signal.",
  },

  {
    id: 99,
    category: 13,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Wireless Siren with Battery",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery S.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery S.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery S.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery S.webp",

    // Card
    Cardsingleword: "Wireless Siren",
    Cardthreeword: "Battery-Powered Alarm",

    // Modal
    Mkeyone: "Battery-powered for flexibility.",
    Mkeytwo: "Loud and effective alarm sound.",
    MkeyTHREE: "Easy installation and maintenance.",
    MkeyFOUR: "Reliable wireless communication.",
    modalDescriptionp:
      "The Wireless Siren with Battery offers a flexible and powerful alarm solution. Its battery-powered design allows for easy installation in various locations, while its loud alarm sound ensures effective alerting. The device is easy to maintain and integrates reliably with your existing wireless system.",
  },

  {
    id: 100,
    category: 13,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Wireless Siren with Battery",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery.webp",

    // Card
    Cardsingleword: "Wireless Siren",
    Cardthreeword: "Battery-Powered Alarm",

    // Modal
    Mkeyone: "Battery-powered for flexibility.",
    Mkeytwo: "Loud and effective alarm sound.",
    MkeyTHREE: "Easy installation and maintenance.",
    MkeyFOUR: "Reliable wireless communication.",
    modalDescriptionp:
      "The Wireless Siren with Battery offers a flexible and powerful alarm solution. Its battery-powered design allows for easy installation in various locations, while its loud alarm sound ensures effective alerting. The device is easy to maintain and integrates reliably with your existing wireless system.",
  },

  {
    id: 101,
    category: 13,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Alarm Panel Wired Keypad",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wired Keypad.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wired Keypad.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wired Keypad.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wired Keypad.webp",

    // Card
    Cardsingleword: "Wired Keypad",
    Cardthreeword: "Alarm Panel Controller",

    // Modal
    Mkeyone: "User-friendly interface.",
    Mkeytwo: "Reliable wired connection.",
    MkeyTHREE: "Robust design for durability.",
    MkeyFOUR: "Easy installation and setup.",
    modalDescriptionp:
      "The Alarm Panel Wired Keypad features a user-friendly interface designed for easy operation. Its reliable wired connection ensures consistent performance, while the robust design guarantees durability in various environments. Installation and setup are straightforward, making it an ideal choice for managing your alarm system.",
  },

  {
    id: 102,
    category: 13,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Alarm Panel Wireless Keypad",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wireless Keypad.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wireless Keypad.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wireless Keypad.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wireless Keypad.webp",

    // Card
    Cardsingleword: "Wireless Keypad",
    Cardthreeword: "Alarm Panel Controller",

    // Modal
    Mkeyone: "Convenient wireless operation.",
    Mkeytwo: "Enhanced mobility and flexibility.",
    MkeyTHREE: "Secure and reliable connection.",
    MkeyFOUR: "Sleek design for modern setups.",
    modalDescriptionp:
      "The Alarm Panel Wireless Keypad offers convenient wireless operation, enhancing mobility and flexibility in managing your alarm system. Its secure and reliable connection ensures consistent performance, while the sleek design integrates seamlessly into modern setups. Ideal for users seeking a hassle-free, high-performance control solution.",
  },

  // 14 WAREHOUSE 2 PRODUCTS
  {
    id: 103,
    category: 14,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Anti Collision Alarm",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Anti Collision.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Anti Collision.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Anti Collision.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Anti Collision.webp",

    // Card
    Cardsingleword: "Anti Collision",
    Cardthreeword: "Collision Alarm System",

    // Modal
    Mkeyone: "Advanced obstacle detection system.",
    Mkeytwo: "Real-time alerts for accident prevention.",
    MkeyTHREE: "Reliable operation in all conditions.",
    MkeyFOUR: "Seamless integration with machinery.",
    modalDescriptionp:
      "The Anti Collision Alarm is a state-of-the-art safety solution designed to enhance operational safety in high-risk environments. Featuring advanced obstacle detection and real-time alerts, it ensures accidents are minimized, and operations remain smooth. Its robust construction and seamless integration make it a reliable choice for industries requiring precision and safety. Ideal for warehouses, industrial sites, and construction areas.",
  },

  {
    id: 104,
    category: 14,
    subcategory: 1,

    ModelNumber: "NI-N16A64-201",
    title: "Fork Lift Camera",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Forklift Camera.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Forklift Camera.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Forklift Camera.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Forklift Camera.webp",

    // Card
    Cardsingleword: "Forklift Camera",
    Cardthreeword: "Enhanced Safety System",

    // Modal
    Mkeyone: "Real-time video monitoring.",
    Mkeytwo: "Improved operator visibility.",
    MkeyTHREE: "Durable and weather-resistant design.",
    MkeyFOUR: "Easy installation and integration.",
    modalDescriptionp:
      "The Fork Lift Camera enhances operational safety by providing real-time video monitoring and improved visibility for forklift operators. Its durable and weather-resistant design ensures reliability in demanding environments, while easy installation and integration make it a seamless addition to your safety systems. Ideal for warehouses, logistics hubs, and industrial facilities where precision and safety are critical.",
  },

  {
    id: 105, // Updated ID
    category: 14,
    subcategory: 2, // Assuming this is a new subcategory

    ModelNumber: "SH-X12A45-301",
    title: "Smart Helmet",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/smart helmet.webp",
    modalimage1: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/smart helmet.webp",
    modalimage2: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/smart helmet.webp",
    modalimage3: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/smart helmet.webp",

    // Card
    Cardsingleword: "Smart Helmet",
    Cardthreeword: "Advanced Safety Gear",

    // Modal
    Mkeyone: "Integrated communication system.",
    Mkeytwo: "Real-time environmental monitoring.",
    MkeyTHREE: "Lightweight and ergonomic design.",
    MkeyFOUR: "Enhanced safety compliance tracking.",
    modalDescriptionp:
      "The Smart Helmet redefines workplace safety with cutting-edge technology. Featuring an integrated communication system and real-time environmental monitoring, it ensures proactive safety measures. Its lightweight, ergonomic design guarantees user comfort, while enhanced compliance tracking keeps safety protocols in check. Ideal for construction sites, factories, and hazardous environments requiring advanced safety gear.",
  },

  {
    id: 106, // Updated ID
    category: 14,
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "FD-CAM-400",
    title: "Fire Detection Camera",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Fire Detection Camera.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Fire Detection Camera.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Fire Detection Camera.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Fire Detection Camera.webp",

    // Card
    Cardsingleword: "Fire Camera",
    Cardthreeword: "Early Fire Detection",

    // Modal
    Mkeyone: "Real-time fire and smoke detection.",
    Mkeytwo: "High accuracy with thermal imaging.",
    MkeyTHREE: "Alerts and notifications for quick response.",
    MkeyFOUR: "Robust design for industrial environments.",
    modalDescriptionp:
      "The Fire Detection Camera is designed for early fire detection and prevention, utilizing advanced thermal imaging technology to identify fire and smoke in real-time. With high accuracy and robust industrial-grade design, it ensures quick alerts and notifications for immediate response. Ideal for factories, warehouses, and sensitive areas requiring 24/7 fire monitoring.",
  },

  // 15 IOE COMMUNICATION 5 PRODUCTS

  {
    id: 107, // Updated ID
    category: 15, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "Wall Mount 10W SIP PA Speaker",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 10W SIP PA SPEAKER.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 10W SIP PA SPEAKER.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 10W SIP PA SPEAKER.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 10W SIP PA SPEAKER.webp",

    // Card
    Cardsingleword: "SIP Speaker",
    Cardthreeword: "Clear Audio Communication",

    // Modal
    Mkeyone: "High-quality audio output.",
    Mkeytwo: "SIP protocol for seamless communication.",
    MkeyTHREE: "10W power for wide coverage.",
    MkeyFOUR: "Durable wall-mounted design.",
    modalDescriptionp:
      "The Wall Mount 10W SIP PA Speaker delivers high-quality audio for effective public address systems. Supporting the SIP protocol, it integrates seamlessly with communication networks for clear announcements. The 10W power output ensures wide-area coverage, making it ideal for offices, schools, and industrial environments. Its durable wall-mounted design ensures easy installation and long-term reliability.",
  },

  {
    id: 108, // Updated ID
    category: 15, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "Wall Mount 15W SIP PA Speaker",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 15W SIP PA SPEAKER.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 15W SIP PA SPEAKER.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 15W SIP PA SPEAKER.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 15W SIP PA SPEAKER.webp",

    // Card
    Cardsingleword: "SIP Speaker",
    Cardthreeword: "Clear Audio Communication",

    // Modal
    Mkeyone: "High-quality 15W audio output.",
    Mkeytwo: "SIP protocol for seamless communication.",
    MkeyTHREE: "Wide coverage with 15W power.",
    MkeyFOUR: "Durable wall-mounted design.",
    modalDescriptionp:
      "The Wall Mount 15W SIP PA Speaker delivers powerful, crystal-clear audio for public address systems. Featuring SIP protocol support, it ensures seamless integration with communication networks. With its 15W power output, it covers large areas efficiently, making it ideal for schools, factories, and public spaces. The robust, wall-mounted design ensures reliability and ease of installation in any environment.",
  },

  {
    id: 109, // Updated ID
    category: 15, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "AI Speaker",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SPEAKER.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SPEAKER.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SPEAKER.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SPEAKER.webp",

    // Card
    Cardsingleword: "AI Speaker",
    Cardthreeword: "Intelligent Audio Assistant",

    // Modal
    Mkeyone: "AI-powered voice recognition.",
    Mkeytwo: "Seamless integration with smart systems.",
    MkeyTHREE: "High-quality audio output.",
    MkeyFOUR: "Compact and modern design.",
    modalDescriptionp:
      "The AI Speaker combines advanced AI technology with superior audio performance to deliver an intelligent audio experience. Equipped with AI-powered voice recognition, it integrates seamlessly with smart systems for enhanced connectivity. Its compact and modern design ensures it fits effortlessly into any environment, while high-quality audio output makes it suitable for personal and professional use.",
  },

  {
    id: 110, // Updated ID
    category: 15, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "IP Phone",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/IP PHONE.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/IP PHONE.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/IP PHONE.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/IP PHONE.webp",

    // Card
    Cardsingleword: "IP Phone",
    Cardthreeword: "Advanced Communication Device",

    // Modal
    Mkeyone: "High-definition audio for clear communication.",
    Mkeytwo: "Supports VoIP protocols for efficient calling.",
    MkeyTHREE: "Multiple lines and call management features.",
    MkeyFOUR: "Sleek design with intuitive user interface.",
    modalDescriptionp:
      "The IP Phone is a cutting-edge communication device designed for modern businesses. It features high-definition audio for crystal-clear calls and supports VoIP protocols for seamless and efficient communication. With multiple lines, advanced call management features, and a sleek, intuitive design, it is perfect for offices and enterprises looking to enhance their communication systems.",
  },

  {
    id: 111, // Updated ID
    category: 15, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "Analog Phone",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/ANALOG PHONE.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/ANALOG PHONE.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/ANALOG PHONE.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/ANALOG PHONE.webp",

    // Card
    Cardsingleword: "Analog Phone",
    Cardthreeword: "Reliable Voice Communication",

    // Modal
    Mkeyone: "Durable and user-friendly design.",
    Mkeytwo: "Crystal-clear analog voice quality.",
    MkeyTHREE: "Compatible with traditional phone lines.",
    MkeyFOUR: "Perfect for home and office use.",
    modalDescriptionp:
      "The Analog Phone is a dependable communication solution for both personal and professional environments. It offers crystal-clear analog voice quality and is compatible with traditional phone lines. Featuring a durable and user-friendly design, this phone is ideal for homes, small businesses, and offices looking for reliable voice communication without the complexity of digital systems.",
  },

  {
    id: 112, // Updated ID
    category: 15, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "Industrial Phone",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INDUSTRIAL PHONE.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INDUSTRIAL PHONE.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INDUSTRIAL PHONE.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INDUSTRIAL PHONE.webp",

    // Card
    Cardsingleword: "Industrial Phone",
    Cardthreeword: "Robust Communication Solution",

    // Modal
    Mkeyone: "Rugged design for harsh environments.",
    Mkeytwo: "Reliable performance in industrial settings.",
    MkeyTHREE: "Weatherproof and shock-resistant.",
    MkeyFOUR: "Supports advanced communication protocols.",
    modalDescriptionp:
      "The Industrial Phone is engineered for extreme environments, offering unmatched durability and reliability. With its rugged, weatherproof, and shock-resistant design, it is ideal for factories, construction sites, and other demanding industrial settings. Supporting advanced communication protocols, this phone ensures clear and uninterrupted communication in critical operations. Its robust construction and advanced features make it a dependable choice for industrial applications.",
  },

  {
    id: 113, // Updated ID
    category: 15, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "Visual Access Control",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/VISUAL ACCESS CONTROL.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/VISUAL ACCESS CONTROL.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/VISUAL ACCESS CONTROL.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/VISUAL ACCESS CONTROL.webp",

    // Card
    Cardsingleword: "Access Control",
    Cardthreeword: "Visual Security Solution",

    // Modal
    Mkeyone: "Real-time visual monitoring.",
    Mkeytwo: "Advanced facial recognition technology.",
    MkeyTHREE: "High-definition video output.",
    MkeyFOUR: "Seamless integration with security systems.",
    modalDescriptionp:
      "The Visual Access Control system provides a cutting-edge solution for managing access to secure areas. Featuring real-time visual monitoring and advanced facial recognition technology, it ensures secure and efficient access control. With high-definition video output and seamless integration into existing security systems, this product is ideal for sensitive areas requiring high security and monitoring capabilities. Its robust design ensures reliable performance in various environments.",
  },

  {
    id: 114, // Updated ID
    category: 15, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "Wifi Land IP Phone",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI IP LAND PHONE.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI IP LAND PHONE.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI IP LAND PHONE.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI IP LAND PHONE.webp",

    // Card
    Cardsingleword: "IP Phone",
    Cardthreeword: "Seamless Wireless Communication",

    // Modal
    Mkeyone: "High-quality audio and video support.",
    Mkeytwo: "Supports WiFi and LAN connectivity.",
    MkeyTHREE: "Advanced communication features.",
    MkeyFOUR: "Sleek and durable design.",
    modalDescriptionp:
      "The Wifi Land IP Phone combines seamless wireless communication with advanced features for both audio and video. With support for both WiFi and LAN connectivity, it offers flexible installation options in both office and home environments. Its sleek, durable design ensures long-lasting performance, while high-quality audio and video make it ideal for both business and personal communication. A perfect solution for anyone needing reliable, modern communication technology.",
  },

  {
    id: 115, // Updated ID
    category: 15, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "AI SIP Camera",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SIP CAMERA.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SIP CAMERA.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SIP CAMERA.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SIP CAMERA.webp",

    // Card
    Cardsingleword: "SIP Camera",
    Cardthreeword: "Smart Video Surveillance",

    // Modal
    Mkeyone: "High-definition video capture.",
    Mkeytwo: "AI-powered motion detection.",
    MkeyTHREE: "Seamless integration with SIP networks.",
    MkeyFOUR: "Weatherproof and durable design.",
    modalDescriptionp:
      "The AI SIP Camera offers advanced video surveillance with high-definition capture and AI-powered motion detection for enhanced security. Seamlessly integrating with SIP networks, it provides reliable and scalable communication for video monitoring. Designed to withstand harsh conditions, its weatherproof and durable construction ensures long-lasting performance in outdoor environments. Ideal for security applications, it combines cutting-edge technology with robust functionality.",
  },

  {
    id: 116, // Updated ID
    category: 15, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "Boom Barrier",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/BOOM BARIERTALKIE.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/BOOM BARIERTALKIE.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/BOOM BARIERTALKIE.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/BOOM BARIERTALKIE.webp",

    // Card
    Cardsingleword: "Boom Barrier",
    Cardthreeword: "Access Control Solution",

    // Modal
    Mkeyone: "Automatic barrier arm control.",
    Mkeytwo: "Seamless integration with security systems.",
    MkeyTHREE: "Durable and weather-resistant construction.",
    MkeyFOUR: "Remote access and management features.",
    modalDescriptionp:
      "The Boom Barrier is an advanced access control solution designed for secure entry and exit management. Featuring automatic barrier arm control, it integrates seamlessly with security systems for efficient vehicle management. Its durable, weather-resistant construction ensures long-term reliability in outdoor environments. Ideal for parking lots, toll gates, and secure facilities, the Boom Barrier offers remote access and management features for enhanced convenience and security.",
  },

  {
    id: 117, // Updated ID
    category: 15, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "Intercom with Video and Sound",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM WITH VIDEO AND SOUND.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM WITH VIDEO AND SOUND.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM WITH VIDEO AND SOUND.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM WITH VIDEO AND SOUND.webp",

    // Card
    Cardsingleword: "Intercom",
    Cardthreeword: "Video & Audio Communication",

    // Modal
    Mkeyone: "Two-way video and audio communication.",
    Mkeytwo: "High-definition video support.",
    MkeyTHREE: "Remote unlocking features.",
    MkeyFOUR: "Seamless integration with security systems.",
    modalDescriptionp:
      "The Intercom with Video and Sound offers a comprehensive communication solution, combining high-quality video and audio for clear, two-way communication. This system supports high-definition video for enhanced clarity, while its remote unlocking features provide added convenience. Seamlessly integrating with security systems, it is ideal for residential and commercial buildings, offering both security and ease of communication.",
  },

  {
    id: 118, // Updated ID
    category: 15, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "Intercom SOS",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM SOS.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM SOS.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM SOS.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM SOS.webp",

    // Card
    Cardsingleword: "Intercom",
    Cardthreeword: "SOS Communication Solution",

    // Modal
    Mkeyone: "Two-way video and audio communication.",
    Mkeytwo: "Emergency SOS features for quick response.",
    MkeyTHREE: "High-definition video support.",
    MkeyFOUR: "Seamless integration with security systems.",
    modalDescriptionp:
      "The Intercom SOS system provides a robust communication solution with enhanced features for emergency situations. Combining high-definition video and audio, it offers two-way communication, allowing for clear conversations in critical moments. With built-in SOS features, it enables users to send emergency alerts, ensuring a quick response. Seamlessly integrating with security systems, it is a reliable solution for both residential and commercial applications.",
  },

  {
    id: 119, // Updated ID
    category: 15, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "WIFI Phone",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI PHONES.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI PHONES.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI PHONES.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI PHONES.webp",

    // Card
    Cardsingleword: "WIFI Phone",
    Cardthreeword: "Seamless Wireless Communication",

    // Modal
    Mkeyone: "High-quality audio and video support.",
    Mkeytwo: "Supports WiFi and LAN connectivity.",
    MkeyTHREE: "Advanced communication features.",
    MkeyFOUR: "Sleek and durable design.",
    modalDescriptionp:
      "The WIFI Phone provides seamless wireless communication with advanced features for both audio and video. With support for both WiFi and LAN connectivity, it offers flexible installation options in both office and home environments. Its sleek, durable design ensures long-lasting performance, while high-quality audio and video make it ideal for both business and personal communication. A perfect solution for anyone needing reliable, modern communication technology.",
  },

  // 9 AI VMS ADDITIONAL PRODUCTS

  {
    id: 120, // Updated ID
    category: 9, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "MDVR",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/MDVR.webp",
    modalimage1: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/MDVR.webp",
    modalimage2: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/MDVR.webp",
    modalimage3: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/MDVR.webp",

    // Card
    Cardsingleword: "MDVR",
    Cardthreeword: "Mobile Digital Video Recorder",

    // Modal
    Mkeyone: "High-definition video recording.",
    Mkeytwo: "Supports multiple camera inputs.",
    MkeyTHREE: "Built-in WiFi and GPS support.",
    MkeyFOUR: "Durable and weather-resistant design.",
    modalDescriptionp:
      "The MDVR (Mobile Digital Video Recorder) offers reliable vehicle-based surveillance with support for multiple camera inputs and HD recording. Featuring built-in WiFi and GPS, it enables real-time tracking and data access. Its rugged, weather-resistant design ensures durability, making it ideal for transportation, fleet management, and mobile security applications.",
  },

  {
    id: 121, // Updated ID
    category: 9, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "360 Degree Vision Systems",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/360° Vision Systems.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/360° Vision Systems.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/360° Vision Systems.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/360° Vision Systems.webp",

    // Card
    Cardsingleword: "MDVR",
    Cardthreeword: "Mobile Digital Video Recorder",

    // Modal
    Mkeyone: "High-definition video recording.",
    Mkeytwo: "Supports multiple camera inputs.",
    MkeyTHREE: "Built-in WiFi and GPS support.",
    MkeyFOUR: "Durable and weather-resistant design.",
    modalDescriptionp:
      "The MDVR (Mobile Digital Video Recorder) offers reliable vehicle-based surveillance with support for multiple camera inputs and HD recording. Featuring built-in WiFi and GPS, it enables real-time tracking and data access. Its rugged, weather-resistant design ensures durability, making it ideal for transportation, fleet management, and mobile security applications.",
  },

  {
    id: 122, // Updated ID
    category: 9, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "Electric Mirror",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/ELECTRIC MIRROR.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/ELECTRIC MIRROR.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/ELECTRIC MIRROR.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/ELECTRIC MIRROR.webp",

    // Card
    Cardsingleword: "Electric Mirror",
    Cardthreeword: "Smart Reflective Surface",

    // Modal
    Mkeyone: "Adjustable heating and defogging.",
    Mkeytwo: "Touchscreen interface for controls.",
    MkeyTHREE: "Anti-glare and anti-scratch coating.",
    MkeyFOUR: "Energy-efficient and eco-friendly design.",
    modalDescriptionp:
      "The Electric Mirror combines smart functionality with modern design, featuring adjustable heating and defogging for clear reflections. Its touchscreen interface offers easy control, while anti-glare and anti-scratch coatings enhance durability. Energy-efficient and eco-friendly, it’s ideal for residential and commercial use, delivering lasting performance with style and convenience.",
  },

  {
    id: 123, // Updated ID
    category: 9, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "Dashboard Camera",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/DasHBOARD CAMERA FRONT.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/DasHBOARD CAMERA FRONT.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/DasHBOARD CAMERA FRONT.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/DasHBOARD CAMERA FRONT.webp",

    // Card
    Cardsingleword: "Dashboard Camera",
    Cardthreeword: "Vehicle Video Surveillance",

    // Modal
    Mkeyone: "Full HD video recording.",
    Mkeytwo: "Wide-angle lens for enhanced coverage.",
    MkeyTHREE: "Loop recording and G-sensor functionality.",
    MkeyFOUR: "Night vision and motion detection.",
    modalDescriptionp:
      "The Dashboard Camera records in full HD, capturing every detail with a wide-angle lens for enhanced coverage. Featuring loop recording and G-sensor functionality, it saves footage during impacts. With night vision and motion detection, the camera operates efficiently in all conditions, making it essential for vehicle surveillance.",
  },

  {
    id: 124, // Updated ID
    category: 9, // Corrected category
    subcategory: 3, // Assuming this is a new subcategory

    ModelNumber: "WM-SIP-15W",
    title: "Wireless Fork Lift Camera",
    image:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/wireless fork lift camera.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/wireless fork lift camera.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/wireless fork lift camera.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/wireless fork lift camera.webp",

    // Card
    Cardsingleword: "Wireless Camera",
    Cardthreeword: "Fork Lift Video Surveillance",

    // Modal
    Mkeyone: "Wireless video transmission for ease of installation.",
    Mkeytwo: "High-definition video for clear visibility.",
    MkeyTHREE: "Rugged design for harsh warehouse environments.",
    MkeyFOUR: "Wide viewing angle to cover all critical areas.",
    modalDescriptionp:
      "The Wireless Fork Lift Camera provides high-definition video surveillance for forklifts, offering clear visibility of all critical areas during operation. Its wireless transmission makes installation quick and easy, without the need for complex wiring. Built with a rugged design, it is ideal for harsh warehouse and industrial environments. With a wide viewing angle, the camera ensures that every angle is covered, improving safety and operational efficiency.",
  },

  {
    id: 125, // New unique ID
    category: 16, // Same hotel solutions category
    subcategory: 4, // Assuming a different subcategory for Smart Lock

    ModelNumber: "AI-SMART-LOCK",
    title: "Smart Lock for Hotel Rooms",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HOTEL SOLUTIONS/OIP.webp",
    modalimage1: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HOTEL SOLUTIONS/OIP.webp",
    modalimage2: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HOTEL SOLUTIONS/OIP.webp",
    modalimage3: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HOTEL SOLUTIONS/OIP.webp",

    // Card
    Cardsingleword: "Smart Lock",
    Cardthreeword: "Keyless Room Access",

    // Modal
    Mkeyone: "Keyless entry via card, PIN, or mobile app.",
    Mkeytwo: "Secure access control with real-time monitoring.",
    MkeyTHREE: "Integration with hotel management systems.",
    MkeyFOUR: "Sleek design suited for modern hotel aesthetics.",
    modalDescriptionp:
      "The Smart Lock for Hotel Rooms offers guests a seamless and secure access experience with keyless entry through RFID cards, PIN codes, or mobile apps. Designed for modern hospitality environments, it provides real-time access monitoring and integrates smoothly with hotel management systems. Its elegant design and robust security features enhance both the functionality and appearance of hotel room access control.",
  },

  {
    id: 126, // Unique ID
    category: 16, // Hotel solutions category
    subcategory: 5, // Assuming a new subcategory for voice control

    ModelNumber: "AI-VOICE-SYS",
    title: "Voice Operator Smart System",
    image: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HOTEL SOLUTIONS/HOTEL-2.webp",
    modalimage1:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HOTEL SOLUTIONS/HOTEL-2.webp",
    modalimage2:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HOTEL SOLUTIONS/HOTEL-2.webp",
    modalimage3:
      "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HOTEL SOLUTIONS/HOTEL-2.webp",

    // Card
    Cardsingleword: "Voice Control",
    Cardthreeword: "Smart Room Assistant",

    // Modal
    Mkeyone: "Hands-free control of lights, curtains, and room temperature.",
    Mkeytwo: "Integration with hotel services like housekeeping and concierge.",
    MkeyTHREE: "Multi-language support for international guests.",
    MkeyFOUR: "AI-powered voice assistant tailored for hospitality.",
    modalDescriptionp:
      "The Voice Operator Smart System enhances the guest experience by enabling hands-free control of room features such as lighting, air conditioning, and curtains. Guests can also request hotel services via voice commands, improving convenience and efficiency. With multi-language support and AI integration, this system delivers a personalized, tech-forward stay for every guest.",
  },

  // SINAGE 2 PRODUCTS

  {
    id: 127, // Unique ID
    category: 17, // Hotel solutions category
    subcategory: 1, // Assuming a new subcategory for display solutions

    ModelNumber: "3D-DISPLAY-BOX",
    title: "Holographic 3D Display Box",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    // Card
    Cardsingleword: "3D Display",
    Cardthreeword: "Holographic Presentation Box",

    // Modal
    Mkeyone: "Captivating 3D visuals for promotions and information.",
    Mkeytwo: "Perfect for lobby displays, room advertisements, and events.",
    MkeyTHREE: "Supports video, animation, and interactive content.",
    MkeyFOUR: "Sleek, modern design enhances luxury aesthetics.",
    modalDescriptionp:
      "The Holographic 3D Display Box brings a futuristic edge to hotel presentations. Ideal for showcasing services, offers, or personalized messages, it delivers high-impact 3D visuals that engage guests at first glance. Whether placed in lobbies or suites, it adds a high-tech touch to your hospitality environment.",
  },

  {
    id: 128, // Unique ID
    category: 17, // Hotel solutions category
    subcategory: 2, // Assuming a new subcategory for AI signage solutions

    ModelNumber: "OLED-AI-SIGN",
    title: "OLED AI Smart Signage",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    // Card
    Cardsingleword: "AI Signage",
    Cardthreeword: "OLED Smart Display",

    // Modal
    Mkeyone: "Ultra-thin OLED display with vibrant visuals.",
    Mkeytwo: "AI-powered content delivery based on guest profiles.",
    MkeyTHREE: "Real-time updates and dynamic scheduling.",
    MkeyFOUR: "Ideal for lobbies, elevators, and meeting rooms.",
    modalDescriptionp:
      "The OLED AI Smart Signage redefines guest communication with its sleek design and intelligent features. Display personalized messages, promotions, or information with AI-driven scheduling and adaptive content. Perfect for premium hotel environments, it delivers an immersive and engaging visual experience tailored to each guest's journey.",
  },

  // DRONE 2 PRODUCTS
  {
    id: 129, // Unique ID
    category: 18, // Hotel solutions category
    subcategory: 1, // Assuming a new subcategory for security systems

    ModelNumber: "WM-SIP-15W",
    title: "Anti-Drone Signal Jammer",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    // Card
    Cardsingleword: "Drone Shield",
    Cardthreeword: "Signal Blocking System",

    // Modal
    Mkeyone: "Disrupts unauthorized drone activity near hotel premises.",
    Mkeytwo: "Protects guest privacy and secures restricted areas.",
    MkeyTHREE: "Covers multiple frequency bands for effective jamming.",
    MkeyFOUR: "Compact and discreet design for seamless deployment.",
    modalDescriptionp:
      "The Anti-Drone Signal Jammer ensures hotel privacy and safety by neutralizing potential threats from unauthorized drones. With advanced signal disruption capabilities, it defends sensitive zones such as rooftops, pools, and VIP areas. Ideal for luxury hotels, it provides peace of mind without disturbing the guest experience.",
  },

  {
    id: 130, // Unique ID
    category: 18, // Hotel solutions category
    subcategory: 9, // Assuming a new subcategory for aerial surveillance

    ModelNumber: "WM-SIP-15W",
    title: "Autonomous Surveillance Drone",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    // Card
    Cardsingleword: "Aerial Watch",
    Cardthreeword: "Surveillance Drone Patrol",

    // Modal
    Mkeyone: "Autonomous patrol of hotel perimeters and rooftops.",
    Mkeytwo: "Real-time video feed with night vision and thermal imaging.",
    MkeyTHREE: "AI-powered threat detection and pattern recognition.",
    MkeyFOUR: "Secure cloud storage for surveillance footage.",
    modalDescriptionp:
      "The Autonomous Surveillance Drone elevates hotel security by providing intelligent aerial monitoring. With capabilities like real-time HD video, night vision, and AI-based threat analysis, it ensures comprehensive surveillance of large areas. This high-tech solution supports staff efficiency and enhances guest safety around the clock.",
  },

  // NETWORKING 5 PRODUCTS
  {
    id: 131,
    category: 19,
    subcategory: 1,
    ModelNumber: "WM-SIP-15W",
    title: "High-Speed Network Jack",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    iconImages: [
      {
        src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.webp",
        label: "RJ45",
      },
      {
        src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/hd_subscription.webp",
        label: "High-Speed",
      },
    ],

    Cardsingleword: "Reliable Port",
    Cardthreeword: "RJ45 Network Access",

    Mkeyone: "Universal RJ45 compatibility for seamless connectivity.",
    Mkeytwo: "Supports gigabit Ethernet and PoE applications.",
    MkeyTHREE: "Easy installation with snap-in design.",
    MkeyFOUR: "Durable housing for long-term use.",
    modalDescriptionp:
      "The High-Speed Network Jack provides reliable, fast Ethernet connections for your hotel's wired networking needs. Built to support gigabit speeds and PoE, it is ideal for modern digital infrastructures requiring both stability and performance.",
  },

  {
    id: 132,
    category: 19,
    subcategory: 1,
    ModelNumber: "WM-SIP-15W",
    title: "Smart Backbox Housing",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    // iconImages: [
    //     {
    //         src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/casing.webp",
    //         label: "Mounting"
    //     },
    //     {
    //         src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/protection.webp",
    //         label: "Protection"
    //     }
    // ],

    Cardsingleword: "Flush Mount",
    Cardthreeword: "Secure Cable Housing",

    Mkeyone: "Designed for structured cable back-end support.",
    Mkeytwo: "Flush-mount for seamless wall finish.",
    MkeyTHREE: "Fire-retardant and robust plastic material.",
    MkeyFOUR: "Easy cut-outs for flexible conduit entry.",
    modalDescriptionp:
      "The Smart Backbox Housing ensures safe and clean installation for network jacks and devices. With a flush-mount design and cable-ready slots, it enhances durability and aesthetics in network infrastructure layouts.",
  },

  {
    id: 133,
    category: 19,
    subcategory: 1,
    ModelNumber: "WM-SIP-15W",
    title: "In-Wall WiFi Router",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    // iconImages: [
    //     {
    //         src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/wifi.webp",
    //         label: "Wi-Fi"
    //     },
    //     {
    //         src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/ethernet-port.webp",
    //         label: "Ethernet"
    //     }
    // ],

    Cardsingleword: "Wall Wi-Fi",
    Cardthreeword: "Discrete Wireless Access",

    Mkeyone: "Built-in wall design for space-saving and aesthetics.",
    Mkeytwo: "Dual-band wireless AC performance.",
    MkeyTHREE: "Ideal for hotel rooms, lobbies, and halls.",
    MkeyFOUR: "Includes LAN port for wired devices.",
    modalDescriptionp:
      "The In-Wall WiFi Router provides high-speed wireless access without cluttering interior spaces. With dual-band support and discrete design, it fits seamlessly into walls while delivering reliable, enterprise-grade connectivity to guests and staff.",
  },

  {
    id: 134,
    category: 19,
    subcategory: 1,
    ModelNumber: "WM-SIP-15W",
    title: "Smart Power Distribution Unit",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    // iconImages: [
    //     {
    //         src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/power.webp",
    //         label: "Power"
    //     },
    //     {
    //         src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/smart.webp",
    //         label: "Smart Control"
    //     }
    // ],

    Cardsingleword: "Smart Power",
    Cardthreeword: "Controlled Power Flow",

    Mkeyone: "Distributes power to networking and server equipment.",
    Mkeytwo: "Remote monitoring and switching capabilities.",
    MkeyTHREE: "Supports overload protection and power metrics.",
    MkeyFOUR: "Rack-mount ready with industrial-grade build.",
    modalDescriptionp:
      "The Smart PDU enables intelligent power distribution with real-time monitoring and remote access. Ideal for networking rooms and data centers in hotel setups, it ensures uninterrupted power flow and advanced control over connected devices.",
  },

  {
    id: 135,
    category: 19,
    subcategory: 1,
    ModelNumber: "WM-SIP-15W",
    title: "Smart Network Cabinet",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    // iconImages: [
    //     {
    //         src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/server-rack.webp",
    //         label: "Rack"
    //     },
    //     {
    //         src: "/IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/sensor.webp",
    //         label: "Smart Sensors"
    //     }
    // ],

    Cardsingleword: "Smart Rack",
    Cardthreeword: "Intelligent Equipment Housing",

    Mkeyone: "Supports servers, routers, PDUs, and patch panels.",
    Mkeytwo: "Built-in temperature, humidity, and door sensors.",
    MkeyTHREE: "Remote access via network management tools.",
    MkeyFOUR: "Lockable doors and cable management system.",
    modalDescriptionp:
      "The Smart Network Cabinet ensures organized, secure, and monitored housing for networking equipment. Integrated sensors and intelligent management options make it perfect for hotel IT rooms, ensuring operational reliability and asset protection.",
  },

  // AUDIO & VIDEO  PRODUCTS

  {
    id: 136,
    category: 20,
    subcategory: 1,
    ModelNumber: "DIGI-PODIUM-EDU",
    title: "Smart Digital Podium",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Interactive",
    Cardthreeword: "Smart Lecture Control",

    Mkeyone: "Built-in touch screen with annotation support.",
    Mkeytwo: "Integrated audio, mic, and visual inputs.",
    MkeyTHREE: "Centralized control for presentations and classes.",
    MkeyFOUR: "Secure storage with sliding panel and lock.",
    modalDescriptionp:
      "The Smart Digital Podium transforms classrooms and conference halls with built-in PC, touch interface, and complete multimedia control. Ideal for lectures, sermons, and smart education environments.",
  },

  {
    id: 137,
    category: 20,
    subcategory: 1,
    ModelNumber: "IND-PANELPC-156",
    title: "Industrial Panel PC",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Rugged Panel",
    Cardthreeword: "Industrial Control PC",

    Mkeyone: "Touchscreen display with industrial-grade housing.",
    Mkeytwo: "Fanless design with wide operating temperature.",
    MkeyTHREE: "Supports multiple I/O ports and RS232/485.",
    MkeyFOUR: "Used in automation, factories, and kiosks.",
    modalDescriptionp:
      "Built for harsh environments, the Industrial Panel PC delivers reliable computing with rugged features, fanless cooling, and an IP-rated touchscreen interface for industrial use cases.",
  },

  {
    id: 138,
    category: 20,
    subcategory: 1,
    ModelNumber: "HDMI-TXRX-WL01",
    title: "HDMI Wireless Transceiver",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "No Cables",
    Cardthreeword: "Wireless HDMI Streaming",

    Mkeyone: "Transmit HDMI signal up to 50 meters wirelessly.",
    Mkeytwo: "Low latency for real-time presentations and video.",
    MkeyTHREE: "Plug-and-play setup with automatic pairing.",
    MkeyFOUR: "Supports up to 1080p resolution.",
    modalDescriptionp:
      "Eliminate messy cables with the HDMI Wireless Transceiver. Perfect for conference rooms and classrooms, it transmits high-quality video and audio with minimal delay over long distances.",
  },

  {
    id: 139,
    category: 20,
    subcategory: 1,
    ModelNumber: "MINI-PROJ-NANO",
    title: "Smart Mini Projector",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Pocket Projector",
    Cardthreeword: "Smart Wireless Display",

    Mkeyone: "Portable design with Wi-Fi and HDMI input.",
    Mkeytwo: "Android OS for direct app streaming.",
    MkeyTHREE: "Auto keystone and focus adjustment.",
    MkeyFOUR: "Rechargeable with long battery life.",
    modalDescriptionp:
      "Compact yet powerful, this Smart Mini Projector fits in your bag and supports wireless streaming. Ideal for mobile presentations, travel, and entertainment on-the-go.",
  },

  {
    id: 140,
    category: 20,
    subcategory: 1,
    ModelNumber: "KARAOKE-SYS-BT",
    title: "Smart Karaoke Speaker System",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Sing Smart",
    Cardthreeword: "Wireless Karaoke Fun",

    Mkeyone: "Wireless mics and Bluetooth speaker in one.",
    Mkeytwo: "LED lighting effects for party vibes.",
    MkeyTHREE: "Echo and vocal effects built-in.",
    MkeyFOUR: "USB, TF Card, AUX, and BT input supported.",
    modalDescriptionp:
      "The Smart Karaoke System brings fun to any event with high-quality sound, wireless connectivity, and voice effects. Great for hospitality spaces, home use, or private entertainment rooms.",
  },

  // 3-ALARM&AUTOMATION-- ADDITIONAL 16 PRODUCTS

  {
    id: 141,
    category: 3,
    subcategory: 1,

    ModelNumber: "IND-ROBOT-X1",
    title: "Industrial Robot System",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Robotic Control",
    Cardthreeword: "Smart Industrial Automation",

    Mkeyone: "Multi-axis robotic automation for manufacturing efficiency.",
    Mkeytwo: "Supports precision control with real-time AI adjustments.",
    MkeyTHREE: "Adaptable to multiple industrial tasks and workflows.",
    MkeyFOUR: "Built-in safety protocols for industrial-grade operations.",
    modalDescriptionp:
      "Our Industrial Robot System is engineered for smart automation across manufacturing lines. With AI capabilities and precision mechanics, it offers consistent performance, safety integration, and task adaptability for next-gen factories.",
  },

  {
    id: 142,
    category: 3,
    subcategory: 1,
    ModelNumber: "AI-CHAT-01",
    title: "AI Chat Bot",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    Cardsingleword: "Smart Talk",
    Cardthreeword: "24x7 AI Assistant",
    Mkeyone: "Natural language customer support.",
    Mkeytwo: "Custom-trained on your business needs.",
    MkeyTHREE: "Available across web and mobile.",
    MkeyFOUR: "Integrates with CRM & ticketing.",
    modalDescriptionp:
      "AI Chat Bots offer intelligent, 24x7 customer assistance using natural language processing, and are trained to represent your business in real-time conversations.",
  },

  {
    id: 143,
    category: 3,
    subcategory: 1,
    ModelNumber: "AI-VIDEO-CHATBOT",
    title: "AI Video Chatbot",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    Cardsingleword: "Human Face",
    Cardthreeword: "Interactive AI Video",
    Mkeyone: "AI-powered humanlike video assistants.",
    Mkeytwo: "Auto-interact via voice and gestures.",
    MkeyTHREE: "Perfect for websites, kiosks & expos.",
    MkeyFOUR: "Multilingual, customizable avatars.",
    modalDescriptionp:
      "AI Video Chatbots combine facial avatars with natural voice to deliver a truly humanlike AI interface, suitable for websites, product demos, and customer help kiosks.",
  },

  {
    id: 144,
    category: 3,
    subcategory: 1,
    ModelNumber: "RAK-VENT-01",
    title: "RAK Ventilation System",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    // Card
    Cardsingleword: "Ventilation",
    Cardthreeword: "Fresh Air System",

    // Modal
    Mkeyone: "Continuous airflow circulation for better indoor air quality.",
    Mkeytwo: "Smart control system integrated with building automation.",
    MkeyTHREE: "Energy-efficient operation with noise reduction.",
    MkeyFOUR: "Suitable for commercial and residential installations.",

    modalDescriptionp:
      "The RAK Ventilation System provides smart, efficient indoor air circulation to maintain air purity and freshness. It integrates with building management systems and supports automation, ensuring both comfort and energy savings.",
  },

  {
    id: 145,
    category: 3,
    subcategory: 1,
    ModelNumber: "AI-PURE-02",
    title: "Smart Air Purifiers",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    // Card
    Cardsingleword: "Purification",
    Cardthreeword: "Smart Air Filtration",

    // Modal
    Mkeyone:
      "HEPA and carbon filter combination for high-efficiency air cleaning.",
    Mkeytwo: "Real-time air quality monitoring and reporting.",
    MkeyTHREE: "Wi-Fi enabled for remote control and scheduling.",
    MkeyFOUR: "Designed for homes, offices, and industrial spaces.",

    modalDescriptionp:
      "Our Smart Air Purifiers deliver advanced air cleaning performance using HEPA and activated carbon filters. They feature intelligent sensors, real-time monitoring, and app-based control to ensure the air you breathe is always clean and healthy.",
  },

  {
    id: 146,
    category: 3,
    subcategory: 1,
    ModelNumber: "FRESH-AIR-MNT-03",
    title: "Fresh Air Maintain System",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    // Card
    Cardsingleword: "Air Quality",
    Cardthreeword: "Continuous Fresh Circulation",

    // Modal
    Mkeyone: "Automated system ensures constant supply of fresh air indoors.",
    Mkeytwo: "Improves indoor air quality and prevents stale air buildup.",
    MkeyTHREE: "Seamless integration with HVAC and smart home systems.",
    MkeyFOUR: "Designed for energy efficiency and minimal noise operation.",

    modalDescriptionp:
      "The Fresh Air Maintain System continuously supplies filtered fresh air to your indoor environment, enhancing health, comfort, and productivity. Ideal for smart buildings and sustainable spaces, it ensures optimal ventilation without sacrificing energy efficiency.",
  },

  {
    id: 147,
    category: 3,
    subcategory: 1,
    ModelNumber: "PET-SMRT-04",
    title: "Smart Pet Cabinets",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Pet Safety",
    Cardthreeword: "Smart Pet Shelter",

    Mkeyone: "Built-in temperature and humidity control for pet comfort.",
    Mkeytwo: "Live camera feed and app control for remote pet monitoring.",
    MkeyTHREE: "Automatic feeding, lighting, and voice interaction system.",
    MkeyFOUR: "Suitable for home and veterinary use with safety features.",

    modalDescriptionp:
      "Smart Pet Cabinets provide a safe, climate-controlled environment for your pets with automated feeding and real-time monitoring. It's ideal for pet owners who want to ensure comfort and security for their furry companions even while away.",
  },

  {
    id: 148,
    category: 3,
    subcategory: 1,
    ModelNumber: "IND-CONV-05",
    title: "Industrial Conveyor Systems",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Conveyor",
    Cardthreeword: "Automated Transport System",

    Mkeyone: "Efficient material handling system for industrial operations.",
    Mkeytwo: "Customizable belt speed, direction, and load capacity.",
    MkeyTHREE: "Integrated safety sensors and automatic stop features.",
    MkeyFOUR: "Supports continuous 24/7 operation with minimal maintenance.",

    modalDescriptionp:
      "Industrial Conveyor Systems streamline the movement of goods in factories, warehouses, and assembly lines. Designed for durability, automation, and adaptability, these systems increase efficiency and reduce manual labor requirements.",
  },

  {
    id: 149,
    category: 3,
    subcategory: 1,
    ModelNumber: "CLEANBOT-06",
    title: "Intelligent Cleaning Robots",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Clean",
    Cardthreeword: "Smart Floor Bot",

    Mkeyone: "Autonomous cleaning with AI-based obstacle avoidance.",
    Mkeytwo: "Supports wet & dry modes, auto-charging, and scheduling.",
    MkeyTHREE: "Advanced navigation with mapping and path planning.",
    MkeyFOUR: "Low-noise operation ideal for homes and offices.",

    modalDescriptionp:
      "Intelligent Cleaning Robots automate your floor maintenance routine. Equipped with smart mapping, obstacle detection, and dual-mode cleaning, they ensure spotless floors with minimal effort.",
  },

  {
    id: 150,
    category: 3,
    subcategory: 1,
    ModelNumber: "CUR-SNSR-07",
    title: "Curtain Motion Sensor",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Sensor",
    Cardthreeword: "Motion-Based Curtain",

    Mkeyone: "Detects movement to auto-open or close curtains.",
    Mkeytwo: "Adjusts light and privacy based on presence.",
    MkeyTHREE: "Works with home automation and voice assistants.",
    MkeyFOUR: "Energy-efficient and easy to install.",

    modalDescriptionp:
      "The Curtain Motion Sensor automates curtain movement based on room occupancy or time. Enhance privacy and light control effortlessly with smart motion-based automation.",
  },

  {
    id: 151,
    category: 3,
    subcategory: 1,
    ModelNumber: "WEATHR-SMRT-08",
    title: "Smart Weather Station",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Weather",
    Cardthreeword: "Smart Climate Monitor",

    Mkeyone: "Real-time data on temperature, humidity, wind, and rain.",
    Mkeytwo: "Wi-Fi enabled with mobile alerts and logs.",
    MkeyTHREE: "AI forecasting and smart garden integrations.",
    MkeyFOUR: "Compact, durable outdoor-ready design.",

    modalDescriptionp:
      "The Smart Weather Station gives precise environmental readings, letting users monitor local weather, set climate-based triggers, and integrate with smart systems for responsive automation.",
  },

  {
    id: 152,
    category: 3,
    subcategory: 1,
    ModelNumber: "MBX-ALRM-09",
    title: "Mailbox Alarm System",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Mail",
    Cardthreeword: "Smart Mailbox Alarm",

    Mkeyone: "Detects when mailbox is opened or mail is delivered.",
    Mkeytwo: "Sends instant alert to connected devices.",
    MkeyTHREE: "Easy DIY setup with battery operation.",
    MkeyFOUR: "Water-resistant and tamper-proof design.",

    modalDescriptionp:
      "Never miss a delivery again. The Mailbox Alarm notifies you the moment your mailbox is opened or receives mail, ensuring peace of mind and convenience with modern alert systems.",
  },

  {
    id: 153,
    category: 3,
    subcategory: 1,
    ModelNumber: "FRAG-SPRY-10",
    title: "Smart Fragrance Sprayer",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Fragrance",
    Cardthreeword: "Automated Aroma Dispenser",

    Mkeyone: "Dispenses aroma on a schedule or smart triggers.",
    Mkeytwo: "Connects to app for customization and refill alerts.",
    MkeyTHREE: "Compact, stylish, and silent operation.",
    MkeyFOUR: "Supports multiple fragrance cartridges.",

    modalDescriptionp:
      "Enhance your space with automated scent control. The Smart Fragrance Sprayer disperses pleasant aromas based on schedule, motion, or app command, creating a fresh environment with minimal effort.",
  },

  {
    id: 153,
    category: 3,
    subcategory: 1,
    ModelNumber: "SCM-360",
    title: "Smart Curtain Motor",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Curtain Motor",
    Cardthreeword: "Automated Window Solution",

    Mkeyone:
      "Automates opening and closing of curtains with timer and remote control.",
    Mkeytwo: "Integrates with smart home systems and mobile apps.",
    MkeyTHREE: "Quiet operation and energy-efficient design.",
    MkeyFOUR: "Compatible with voice assistants like Alexa and Google Home.",
    modalDescriptionp:
      "The Smart Curtain Motor allows users to automate curtain movements for energy saving, comfort, and privacy. It can be scheduled, voice-controlled, or controlled via app, blending seamlessly with modern smart homes and hospitality spaces.",
  },

  {
    id: 154,
    category: 3,
    subcategory: 1,
    ModelNumber: "AIB-CAM01",
    title: "AI Camera with Behaviour Algorithm",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Behavior Analysis",
    Cardthreeword: "AI Surveillance Camera",

    Mkeyone:
      "Detects unusual behavior in real-time using advanced AI algorithms.",
    Mkeytwo: "Supports intrusion detection, loitering, object removal, etc.",
    MkeyTHREE: "Enables proactive threat management with smart alerts.",
    MkeyFOUR: "Compatible with existing NVR/VMS infrastructure.",
    modalDescriptionp:
      "This AI camera leverages behavior analysis algorithms to detect suspicious actions like intrusion, loitering, or object abandonment. Ideal for high-security zones, it enhances proactive surveillance and threat detection.",
  },

  {
    id: 155,
    category: 3,
    subcategory: 1,
    ModelNumber: "XRAY-SECURE01",
    title: "X-Ray Baggage Scanner",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Baggage Scanner",
    Cardthreeword: "Advanced Security Screening",

    Mkeyone:
      "Uses X-ray technology to detect hidden threats in luggage and packages.",
    Mkeytwo:
      "High-resolution imaging with automatic threat detection software.",
    MkeyTHREE: "Suitable for airports, government buildings, and secure areas.",
    MkeyFOUR: "Ergonomic and efficient design for rapid scanning.",
    modalDescriptionp:
      "The X-Ray Baggage Scanner provides fast and accurate detection of concealed weapons, explosives, and contraband. With high-resolution scanning and automated threat recognition, it's essential for ensuring public and institutional safety.",
  },

  //
  {
    id: 156,
    category: 13,
    subcategory: 1,
    ModelNumber: "NET-JACK01",
    title: "Network Jack",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "LAN Jack",
    Cardthreeword: "Stable Network Port",

    Mkeyone: "Provides secure Ethernet connectivity.",
    Mkeytwo: "Compatible with CAT5/CAT6 cables.",
    MkeyTHREE: "Durable build for long-term usage.",
    MkeyFOUR: "Easy installation in wall plates or panels.",
    modalDescriptionp:
      "The Network Jack ensures reliable Ethernet connectivity in residential and commercial networks. It's designed for easy integration and stable long-term performance.",
  },

  {
    id: 157,
    category: 13,
    subcategory: 1,
    ModelNumber: "RJ45-CONN01",
    title: "RJ45 Connector",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "RJ45 Plug",
    Cardthreeword: "Ethernet Cable Connector",

    Mkeyone: "Standard 8P8C modular plug for LAN cables.",
    Mkeytwo: "Supports CAT5e, CAT6, and CAT7 cables.",
    MkeyTHREE: "Gold-plated contacts for signal integrity.",
    MkeyFOUR: "Ideal for custom Ethernet cable assembly.",
    modalDescriptionp:
      "The RJ45 Connector is essential for creating custom Ethernet cables, supporting a wide range of networking applications with high performance and reliability.",
  },

  {
    id: 158,
    category: 13,
    subcategory: 1,
    ModelNumber: "BBX-WALL01",
    title: "Back Box",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Back Housing",
    Cardthreeword: "Wall Mount Box",

    Mkeyone: "Provides enclosure for switches, sockets, and devices.",
    Mkeytwo: "Durable fire-resistant material.",
    MkeyTHREE: "Supports in-wall or surface mounting.",
    MkeyFOUR: "Standard size fits multiple device types.",
    modalDescriptionp:
      "The Back Box ensures safe and clean installation of electrical and network components. It's essential for structured wiring and secure device mounting.",
  },

  {
    id: 159,
    category: 13,
    subcategory: 1,
    ModelNumber: "MOD-4G01",
    title: "4G Communication Module",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "4G Module",
    Cardthreeword: "Cellular Communication Device",

    Mkeyone: "Enables 4G LTE connectivity for IoT devices.",
    Mkeytwo: "Supports SMS, data, and voice communication.",
    MkeyTHREE: "Compact and easy integration with embedded systems.",
    MkeyFOUR: "Works with SIM cards and global LTE bands.",
    modalDescriptionp:
      "The 4G Communication Module empowers devices with cellular capabilities for remote monitoring, telemetry, and real-time data transfer in IoT and industrial automation setups.",
  },

  {
    id: 160,
    category: 13,
    subcategory: 1,
    ModelNumber: "SMT-BRUSH01",
    title: "Smart Toothbrush",
    image: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage1: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage2: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",
    modalimage3: "/IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/logoooo 1.webp",

    Cardsingleword: "Toothbrush",
    Cardthreeword: "Smart Oral Care",

    Mkeyone: "Tracks brushing patterns and duration via mobile app.",
    Mkeytwo: "Offers multiple modes for deep clean and gum care.",
    MkeyTHREE: "Built-in timer and pressure sensor.",
    MkeyFOUR: "Rechargeable with long battery life.",
    modalDescriptionp:
      "The Smart Toothbrush connects to your smartphone to provide feedback on your brushing habits, ensuring effective dental hygiene through AI-driven tracking and coaching.",
  },
];
