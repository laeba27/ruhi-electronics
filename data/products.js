// Main product categories with subcategories and products
export const productCategories = [
  {
    id: 1,
    name: "Immersion Water Heater",
    slug: "immersion-water-heater",
    count: 50,
    image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    products: [
      {
        id: 101,
        title: "Electric Water Heater Water Immersion Rod 1500W",
        slug: "electric-water-heater-immersion-rod-1500w",
        description: "High-quality immersion water heater rod with 1500W power, featuring copper heating element and stainless steel construction. Energy-efficient with shock-proof and waterproof design.",
        price: 145,
        images: [
          "https://5.imimg.com/data5/SELLER/Default/2024/2/394242942/YS/TN/BZ/106712753/1-4-500x500.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/2/394243027/NG/FN/FP/106712753/1-2-500x500.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/2/394243149/JJ/PI/MY/106712753/1-3-500x500.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/2/394243261/SO/BJ/FN/106712753/1-5-500x500.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/3/404560716/OJ/JE/NF/106712753/immersion-water-heater-rod-1000w-500x500.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/3/404561583/ED/GM/US/106712753/immersion-water-heater-rod-1000w-500x500.jpg",
        ],
        specifications: {
          power: "1500W",
          material: "Stainless Steel",
          heatingElement: "Copper",
          voltage: "220V",
          waterproof: true,
          shockproof: true,
          warranty: "1 Year",
          dimensions: "Width 8cm, Height 37cm, Depth 8cm",
          weight: "450g",
          color: "Red & White",
          brand: "UGC",
          model: "SS304-1.5Kw C",
          isiCertified: true,
          thermostatSensor: false,
          tankCapacity: "100L & more"
        },
        minOrderQuantity: 50
      },
      {
        id: 102,
        title: "Electric Immersion Water Heater Rod 2000W",
        slug: "electric-immersion-water-heater-rod-2000w",
        description: "Powerful 2000W immersion water heater rod with copper heating element. Features waterproof and shock-proof design for safe operation.",
        price: 160,
        images: [
          "https://5.imimg.com/data5/SELLER/Default/2024/12/477216658/QZ/ZS/MI/106712753/ss-immersion-water-heater-rod-500x500.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/12/477216721/AX/TT/MT/106712753/ss-immersion-water-heater-rod-500x500.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/12/477216772/UG/JH/DA/106712753/ss-immersion-water-heater-rod-500x500.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/12/477216811/UG/XL/ES/106712753/ss-immersion-water-heater-rod-500x500.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/12/477216844/EL/RB/JB/106712753/ss-immersion-water-heater-rod-500x500.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/12/477216882/LG/BZ/UH/106712753/ss-immersion-water-heater-rod-500x500.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/12/477216941/GH/PP/CY/106712753/ss-immersion-water-heater-rod-500x500.jpg",
        ],
        specifications: {
          power: "2000W",
          material: "Stainless Steel",
          heatingElement: "Copper",
          voltage: "220V",
          waterproof: true,
          shockproof: true,
          warranty: "1 Year",
          dimensions: "16 inch length",
          weight: "500g",
          color: "Black Base",
          brand: "UGC",
          model: "UGC-B2K-C",
          isiCertified: true,
          thermostatSensor: false,
          frequency: "50Hz"
        },
        minOrderQuantity: 100
      },
      {
        id: 103,
        title: "2000W Copper Immersion Rod",
        slug: "2000w-copper-immersion-rod",
        description: "Energy-efficient 2000W immersion heater with copper heating element. Designed with hairpin tubular elements for optimum heat transfer and enhanced performance.",
        price: 164,
        image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "2000W",
          material: "Anti-corrosive Plastic",
          heatingElement: "Copper with Nickel Plating",
          voltage: "230V",
          waterproof: true,
          shockproof: true,
          warranty: "1 Year",
          dimensions: "Width 8cm, Height 37cm, Depth 8cm",
          weight: "460g",
          color: "White",
          brand: "UGC",
          model: "SS304 2.Kw C",
          isiCertified: true,
          thermostatSensor: false,
          frequency: "50Hz"
        },
        minOrderQuantity: 100
      },
      {
        id: 104,
        title: "Immersion Water Heater 1000W",
        slug: "immersion-water-heater-1000w",
        description: "Compact 1000W immersion water heater with robust design and copper heating element. Features energy-efficient operation and easy storage.",
        price: 140,
        image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "1000W",
          material: "Stainless Steel",
          heatingElement: "Copper",
          voltage: "220V",
          waterproof: false,
          shockproof: true,
          warranty: "1 Year",
          dimensions: "Width 8cm, Height 37cm, Depth 8cm",
          weight: "450g",
          color: "Black",
          brand: "UGC",
          model: "UGC-N854",
          isiCertified: true,
          thermostatSensor: false
        },
        minOrderQuantity: 15
      },
      {
        id: 105,
        title: "1000W Immersion Rod Water Heater",
        slug: "1000w-immersion-rod-water-heater",
        description: "Reliable 1000W immersion rod with waterproof and shock-proof features. Made with copper heating element for efficient water heating.",
        price: 125,
        image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "1000W",
          material: "SS202",
          heatingElement: "Copper",
          voltage: "220V",
          waterproof: true,
          shockproof: true,
          warranty: "1 Year",
          dimensions: "Width 8cm, Height 37cm, Depth 8cm",
          weight: "450g",
          color: "Black",
          brand: "UGC",
          model: "UGC-N532",
          isiCertified: true,
          thermostatSensor: false
        },
        minOrderQuantity: 15
      },
      {
        id: 106,
        title: "Electric Immersion Water Heater Rod 1500W",
        slug: "electric-immersion-water-heater-rod-1500w-v2",
        description: "Durable 1500W immersion heater rod with copper heating element. Features shock-proof design and energy-efficient operation.",
        price: 130,
        image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "1500W",
          material: "Plastic",
          heatingElement: "Copper",
          voltage: "220V",
          waterproof: false,
          shockproof: true,
          warranty: "1 Year",
          dimensions: "Width 8cm, Height 37cm, Depth 8cm",
          weight: "420g",
          color: "Orange",
          brand: "UGC",
          model: "UGC 5249",
          isiCertified: false,
          thermostatSensor: false
        },
        minOrderQuantity: 70
      },
      {
        id: 107,
        title: "Immersion Rods 1500 Watts",
        slug: "immersion-rods-1500-watts",
        description: "High-performance 1500W immersion rod with copper heating element and waterproof construction. Ideal for efficient water heating applications.",
        price: 155,
        image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "1500W",
          material: "Stainless Steel",
          heatingElement: "Copper",
          voltage: "220V",
          waterproof: true,
          shockproof: true,
          warranty: "1 Year",
          dimensions: "8x8x37cm",
          weight: "450g",
          color: "White",
          brand: "UGC",
          model: "ugc542",
          isiCertified: true,
          thermostatSensor: false
        },
        minOrderQuantity: 100
      },
      {
        id: 108,
        title: "1500W Shock Proof Immersion Heater Rod",
        slug: "1500w-shock-proof-immersion-heater-rod",
        description: "Premium 1500W shock-proof immersion heater rod with advanced safety features. Waterproof design with copper heating element.",
        price: 160,
        image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "1500W",
          material: "SS304",
          heatingElement: "Copper",
          voltage: "230V",
          waterproof: true,
          shockproof: true,
          warranty: "1 Year",
          dimensions: "Width 8cm, Height 37cm, Depth 8cm",
          weight: "450g",
          color: "White",
          brand: "UGC",
          model: "SS304-1.5Kw C",
          isiCertified: true,
          thermostatSensor: false
        },
        minOrderQuantity: 100
      },
      {
        id: 109,
        title: "Electric Immersion Water Heater 2000W",
        slug: "electric-immersion-water-heater-2000w-red",
        description: "Powerful 2000W electric immersion water heater with copper heating element. Features waterproof and shock-proof construction in attractive red color.",
        price: 155,
        image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "2000W",
          material: "Stainless Steel",
          heatingElement: "Copper",
          voltage: "220V",
          waterproof: true,
          shockproof: true,
          warranty: "1 Year",
          dimensions: "Width 8cm, Height 37cm, Depth 8cm",
          weight: "450g",
          color: "Red",
          brand: "UGC",
          model: "UGC 5421",
          isiCertified: true,
          thermostatSensor: false
        },
        minOrderQuantity: 70
      },
      {
        id: 110,
        title: "UGC 1500W Immersion Water Heater Rod",
        slug: "ugc-1500w-immersion-water-heater-rod",
        description: "Premium UGC brand 1500W immersion water heater rod with instant IC technology. Features waterproof and shock-proof design.",
        price: 160,
        image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "1500W",
          material: "Plastic",
          heatingElement: "Copper",
          voltage: "220V",
          waterproof: true,
          shockproof: true,
          warranty: "1 Year",
          color: "Orange",
          brand: "UGC",
          isiCertified: false,
          thermostatSensor: false,
          technology: "Instant IC"
        },
        minOrderQuantity: 1
      },
      {
        id: 111,
        title: "UGC 2000W Water Immersion Rod Waterproof",
        slug: "ugc-2000w-water-immersion-rod-waterproof",
        description: "High-capacity 2000W waterproof immersion rod with instant IC technology. Features robust design and copper heating element.",
        price: 150,
        image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "2000W",
          material: "Plastic",
          heatingElement: "Copper",
          voltage: "220V",
          waterproof: true,
          shockproof: true,
          warranty: "1 Year",
          color: "Orange",
          brand: "UGC",
          isiCertified: false,
          thermostatSensor: false,
          technology: "Instant IC"
        },
        minOrderQuantity: 1
      },
      {
        id: 112,
        title: "DCP 1000W Waterproof Immersion Rod",
        slug: "dcp-1000w-waterproof-immersion-rod",
        description: "DCP brand 1000W waterproof immersion rod with copper heating element. Compact design with shock-proof construction.",
        price: 140,
        image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "1000W",
          material: "Plastic",
          heatingElement: "Copper",
          voltage: "220V",
          waterproof: true,
          shockproof: true,
          warranty: "1 Year",
          color: "Orange",
          brand: "DCP",
          isiCertified: false,
          thermostatSensor: false,
          technology: "Instant IC"
        },
        minOrderQuantity: 1
      },
      {
        id: 113,
        title: "DCP 1500W Waterproof Immersion Rod",
        slug: "dcp-1500w-waterproof-immersion-rod",
        description: "DCP 1500W waterproof immersion rod with advanced features. Copper heating element with instant IC technology for quick heating.",
        price: 145,
        image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "1500W",
          material: "Plastic",
          heatingElement: "Copper",
          voltage: "220V",
          waterproof: true,
          shockproof: true,
          warranty: "1 Year",
          color: "Orange",
          brand: "DCP",
          isiCertified: false,
          thermostatSensor: false,
          technology: "Instant IC"
        },
        minOrderQuantity: 200
      },
      {
        id: 114,
        title: "DCP 1000W Normal Immersion Rod",
        slug: "dcp-1000w-normal-immersion-rod",
        description: "Standard DCP 1000W immersion rod with aluminum heating element. Basic model without waterproof features.",
        price: 125,
        image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "1000W",
          material: "Plastic",
          heatingElement: "Aluminum",
          voltage: "220V",
          waterproof: false,
          shockproof: false,
          warranty: "1 Year",
          color: "Orange",
          brand: "DCP",
          isiCertified: false,
          thermostatSensor: false
        },
        minOrderQuantity: 200
      },
      {
        id: 115,
        title: "Normal Electric Water Rod 1000W",
        slug: "normal-electric-water-rod-1000w",
        description: "Basic 1000W electric water rod with copper heating element. Standard model for everyday water heating needs.",
        price: 125,
        image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "1000W",
          material: "Plastic",
          heatingElement: "Copper",
          voltage: "220V",
          waterproof: false,
          shockproof: false,
          warranty: "1 Year",
          color: "Orange",
          brand: "UGC",
          isiCertified: false,
          thermostatSensor: false
        },
        minOrderQuantity: 200
      },
      {
        id: 116,
        title: "Water Immersion Rod 1000W",
        slug: "water-immersion-rod-1000w",
        description: "Standard 1000W water immersion rod with aluminum heating element and shock-proof design. Compact and efficient.",
        price: 125,
        image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "1000W",
          material: "Plastic",
          heatingElement: "Aluminum",
          voltage: "220V",
          waterproof: false,
          shockproof: true,
          warranty: "1 Year",
          color: "Orange",
          brand: "UGC",
          isiCertified: false,
          thermostatSensor: false
        },
        minOrderQuantity: 1
      },
      
    ]
  },
  {
    id: 2,
    name: "Water Immersion Rod",
    slug: "water-immersion-rod",
    count: 25,
    image: "https://images.pexels.com/photos/3848860/pexels-photo-3848860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    products: [
      {
        id: 201,
        title: "Electric Water Heater Water Immersion Rod 1500W",
        slug: "electric-water-heater-water-immersion-rod-1500w",
        description: "Reliable electric water heater immersion rod with 1500W power for quick water heating. Energy efficient with safety features.",
        price: 580,
        image: "https://images.pexels.com/photos/3848860/pexels-photo-3848860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "1500W",
          material: "Copper Core with Nickel Plating",
          voltage: "220-240V",
          waterproof: "Yes",
          length: "33cm"
        }
      },
      {
        id: 202,
        title: "Electric Immersion Water Heater Rod",
        slug: "electric-immersion-water-heater-rod",
        description: "High-quality electric immersion water heater rod for efficient water heating. Features advanced safety technologies.",
        price: 520,
        image: "https://images.pexels.com/photos/3848860/pexels-photo-3848860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "1300W",
          material: "Copper with Chrome Finish",
          voltage: "220-240V",
          waterproof: "Yes",
          length: "31cm"
        }
      },
    ]
  },
  {
    id: 3,
    name: "Room Heater",
    slug: "room-heater",
    count: 18,
    image: "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    products: [
      {
        id: 301,
        title: "Room Heater 2000W - Adjustable Heat Modes",
        slug: "room-heater-2000w-adjustable-heat-modes",
        description: "Powerful room heater with 2000W capacity and multiple heat settings. Features overheat protection and energy-efficient operation.",
        price: 1800,
        image: "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "2000W",
          heatSettings: "3 levels",
          coverage: "Up to 250 sq ft",
          features: "Overheat protection, Adjustable thermostat",
          dimensions: "45 × 15 × 30 cm"
        }
      },
      {
        id: 302,
        title: "DCP Room Heater",
        slug: "dcp-room-heater",
        description: "Premium DCP room heater designed for efficiency and comfort. Warms up spaces quickly with minimal energy consumption.",
        price: 2200,
        image: "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "1800W",
          heatSettings: "Variable",
          coverage: "Up to 300 sq ft",
          features: "Silent operation, Auto-shutoff",
          dimensions: "48 × 18 × 35 cm"
        }
      }
    ]
  },
  {
    id: 4,
    name: "Ceiling Fan",
    slug: "ceiling-fan",
    count: 18,
    image: "https://images.pexels.com/photos/1797824/pexels-photo-1797824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    products: [
      {
        id: 401,
        title: "All Purpose Table Fan",
        slug: "all-purpose-table-fan",
        description: "Versatile table fan suitable for home and office use. Features multiple speed settings and quiet operation.",
        price: 1200,
        image: "https://images.pexels.com/photos/1797824/pexels-photo-1797824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "60W",
          speeds: "3 speed settings",
          bladeSize: "12 inches",
          features: "Oscillation, Tilt adjustment",
          dimensions: "35 × 30 × 50 cm"
        }
      },
      {
        id: 402,
        title: "60W Electrical Ceiling Fan",
        slug: "60w-electrical-ceiling-fan",
        description: "Energy-efficient ceiling fan with smooth operation and modern design. Provides excellent air circulation with low power consumption.",
        price: 1500,
        image: "https://images.pexels.com/photos/1797824/pexels-photo-1797824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specifications: {
          power: "60W",
          speeds: "5 speed settings",
          bladeSize: "48 inches",
          features: "Reversible motor, Pull chain control",
          dimensions: "120 × 120 × 30 cm"
        }
      }
    ]
  }
];

// Featured products for homepage
export const featuredProducts = [
  {
    id: 101,
    title: "Immersion Water Heater Rod 1000W",
    slug: "immersion-water-heater-rod-1000w",
    description: "High-quality immersion water heater rod with 1000W power for efficient water heating.",
    price: 450,
    image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Immersion Water Heater"
  },
  {
    id: 301,
    title: "Room Heater 2000W - Adjustable Heat Modes",
    slug: "room-heater-2000w-adjustable-heat-modes",
    description: "Powerful room heater with 2000W capacity and multiple heat settings.",
    price: 1800,
    image: "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Room Heater"
  },
  {
    id: 402,
    title: "60W Electrical Ceiling Fan",
    slug: "60w-electrical-ceiling-fan",
    description: "Energy-efficient ceiling fan with smooth operation and modern design.",
    price: 1500,
    image: "https://images.pexels.com/photos/1797824/pexels-photo-1797824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Ceiling Fan"
  },
  {
    id: 202,
    title: "Electric Immersion Water Heater Rod",
    slug: "electric-immersion-water-heater-rod",
    description: "High-quality electric immersion water heater rod for efficient water heating.",
    price: 520,
    image: "https://images.pexels.com/photos/3848860/pexels-photo-3848860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Water Immersion Rod"
  }
];