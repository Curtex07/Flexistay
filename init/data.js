
// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "listingImage",
//       url: "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat Cabin",
//     description: "Relax in this secluded mountain cabin surrounded by nature. Perfect for a quiet escape with breathtaking views and hiking trails.",
//     image: {
//       filename: "listingImage",
//       url: "https://plus.unsplash.com/premium_photo-1694475416476-d7f765fa9ff6?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     price: 1200,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Urban Loft Apartment",
//     description: "Experience city living in this stylish urban loft. Located in the heart of downtown with easy access to shops, restaurants, and nightlife.",
//     image: {
//       filename: "listingImage",
//       url: "https://images.unsplash.com/photo-1555400082-1a2152f840b1?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     price: 2000,
//     location: "New York",
//     country: "United States",
//   },
//   {
//     title: "Charming Country Farmhouse",
//     description: "Enjoy a peaceful stay at this picturesque farmhouse surrounded by rolling hills and fields. Ideal for a relaxing retreat in the countryside.",
//     image: {
//       filename: "listingImage",
//       url: "https://images.unsplash.com/photo-1468950487387-88b8240b0166?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     price: 1000,
//     location: "Lancaster",
//     country: "United States",
//   },
//   {
//     title: "Luxury Lake House",
//     description: "Indulge in luxury with this stunning lake house offering panoramic views of the water and high-end amenities for a memorable stay.",
//     image: {
//       filename: "listingImage",
//       url: "https://images.unsplash.com/photo-1585544314038-a0d3769d0193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8THV4dXJ5JTIwTGFrZSUyMEhvdXNlfGVufDB8fDB8fHww",
//     },
//     price: 2500,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Elegant Parisian Apartment",
//     description: "Experience the charm of Paris in this elegantly decorated apartment located near iconic landmarks and charming cafes.",
//     image: {
//       filename: "listingImage",
//       url: "https://images.unsplash.com/photo-1716831309985-48246936fe42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWxlZ2FudCUyMFBhcmlzaWFuJTIwQXBhcnRtZW50fGVufDB8fDB8fHww",
//     },
//     price: 3000,
//     location: "Paris",
//     country: "France",
//   },
//   {
//     title: "Tropical Island Villa",
//     description: "Relax in this luxurious tropical villa with private beach access and stunning ocean views. The perfect getaway for sun and sand lovers.",
//     image: {
//       filename: "listingImage",
//       url: "https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     price: 4000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Historic Rome Apartment",
//     description: "Stay in a beautifully restored apartment in the heart of Rome, offering modern comforts with historic charm and easy access to famous sites.",
//     image: {
//       filename: "listingImage",
//       url: "https://plus.unsplash.com/premium_photo-1677355735491-c543a6a522f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     price: 2200,
//     location: "Rome",
//     country: "Italy",
//   },
//   {
//     title: "Modern Tokyo Condo",
//     description: "Experience modern living in this sleek Tokyo condo with panoramic city views, high-end amenities, and easy access to local attractions.",
//     image: {
//       filename: "listingImage",
//       url: "https://plus.unsplash.com/premium_photo-1723669629708-0de9b27820b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     price: 1800,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Sunny Barcelona Flat",
//     description: "Enjoy sunny days in Barcelona from this stylish flat located in a vibrant neighborhood with easy access to local attractions and beaches.",
//     image: {
//       filename: "listingImage",
//       url: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     price: 1600,
//     location: "Barcelona",
//     country: "Spain",
//   },
//   {
//     title: "Chic Sydney Penthouse",
//     description: "Experience luxury in this chic Sydney penthouse with breathtaking views of the harbor, modern amenities, and close proximity to the city’s attractions.",
//     image: {
//       filename: "listingImage",
//       url:"https://images.unsplash.com/photo-1549180030-48bf079fb38a?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     price: 3500,
//     location: "Sydney",
//     country: "Australia",
//   },
//   {
//     title: "Serene Kyoto Ryokan",
//     description: "Immerse yourself in traditional Japanese culture at this serene ryokan in Kyoto, offering a tranquil setting with beautiful gardens and authentic experiences.",
//     image: {
//       filename: "listingImage",
//       url:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     price: 2700,
//     location: "Kyoto",
//     country: "Japan",
//   },
//   {
//     title: "Alpine Chalet in Switzerland",
//     description: "Escape to this cozy alpine chalet nestled in the Swiss mountains. Perfect for skiing enthusiasts or those seeking a peaceful retreat in nature.",
//     image: {
//       filename: "listingImage",
//       url:"https://images.unsplash.com/photo-1550503736-c1a2c9033c03?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWxwaW5lJTIwQ2hhbGV0JTIwaW4lMjBTd2l0emVybGFuZHxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     price: 2200,
//     location: "Zermatt",
//     country: "Switzerland",
//   },
//   {
//     title: "Seaside Villa in Bali",
//     description: "Experience tropical paradise in this stunning seaside villa in Bali. Enjoy luxurious amenities, breathtaking ocean views, and private beach access.",
//     image: {
//       filename: "listingImage",
//       url:"https://plus.unsplash.com/premium_photo-1697730288131-6684ca63584b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     price: 3500,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Countryside Cottage in England",
//     description: "Relax in this charming countryside cottage in England, offering a serene setting with beautiful gardens and a cozy atmosphere.",
//     image: {
//       filename: "listingImage",
//       url:"https://images.unsplash.com/photo-1659819824206-0682c7855c62?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q291bnRyeXNpZGUlMjBDb3R0YWdlJTIwaW4lMjBFbmdsYW5kfGVufDB8fDB8fHww",
//     },
//     price: 1400,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Vibrant Rio de Janeiro Apartment",
//     description: "Enjoy the vibrant culture of Rio de Janeiro from this modern apartment with stunning views of the city and easy access to beaches and nightlife.",
//     image: {
//       filename: "listingImage",
//       url:"https://plus.unsplash.com/premium_photo-1676240726397-b1045b52d85b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmlicmFudCUyMFJpbyUyMGRlJTIwSmFuZWlybyUyMEFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     price: 2000,
//     location: "Rio de Janeiro",
//     country: "Brazil",
//   },
//   {
//     title: "Scenic Cape Town Villa",
//     description: "Stay in this luxurious villa in Cape Town with stunning views of Table Mountain and the ocean, offering a perfect blend of relaxation and adventure.",
//     image: {
//       filename: "listingImage",
//       url:"https://plus.unsplash.com/premium_photo-1661963534539-4f606dbc5149?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2NlbmljJTIwQ2FwZSUyMFRvd24lMjBWaWxsYSUyMnxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     price: 2800,
//     location: "Cape Town",
//     country: "South Africa",
//   },
//   {
//     title: "Historic Marrakech Riad",
//     description: "Experience the rich culture of Marrakech in this historic riad featuring traditional Moroccan architecture, serene courtyards, and luxurious amenities.",
//     image: {
//       filename: "listingImage",
//       url:"https://plus.unsplash.com/premium_photo-1699555730053-a2e7e84a26c3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGlzdG9yaWMlMjBNYXJyYWtlY2glMjBSaWFkJTIyfGVufDB8fDB8fHww",
//     },
//     price: 1900,
//     location: "Marrakech",
//     country: "Morocco",
//   },
//   {
//     title: "Luxury UAE Penthouse",
//     description: "Enjoy opulent living in this luxury penthouse in Dubai with panoramic city views, high-end amenities, and proximity to world-class shopping and dining.",
//     image: {
//       filename: "listingImage",
//       url:"https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     price: 4000,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Idyllic Santorini House",
//     description: "Stay in a picturesque house on the island of Santorini with stunning views of the Aegean Sea, white-washed architecture, and a relaxing atmosphere.",
//     image: {
//       filename: "listingImage",
//       url:"https://images.unsplash.com/photo-1452626212852-811d58933cae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SWR5bGxpYyUyMFNhbnRvcmluaSUyMEhvdXNlfGVufDB8fDB8fHww",
//     },
//     price: 3200,
//     location: "Santorini",
//     country: "Greece",
//   },
//   {
//     title: "Chic Buenos Aires Loft",
//     description: "Experience the vibrant culture of Buenos Aires in this chic loft apartment with modern amenities and easy access to the city's cultural and culinary highlights.",
//     image: {
//       filename: "listingImage",
//       url:"https://images.unsplash.com/photo-1629085601815-c99c5fc6f557?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENoaWMlMjBCdWVub3MlMjBBaXJlcyUyMExvZnR8ZW58MHx8MHx8fDA%3D",
//     },
//     price: 1700,
//     location: "Buenos Aires",
//     country: "Argentina",
//   }
// ];

// module.exports = { data: sampleListings };


const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingImage",
      url: "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259],
    },
  },
  {
    title: "Mountain Retreat Cabin",
    description: "Relax in this secluded mountain cabin surrounded by nature. Perfect for a quiet escape with breathtaking views and hiking trails.",
    image: {
      filename: "listingImage",
      url: "https://plus.unsplash.com/premium_photo-1694475416476-d7f765fa9ff6?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1200,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8370, 39.1911],
    },
  },
  {
    title: "Urban Loft Apartment",
    description: "Experience city living in this stylish urban loft. Located in the heart of downtown with easy access to shops, restaurants, and nightlife.",
    image: {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1555400082-1a2152f840b1?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2000,
    location: "New York",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128],
    },
  },
  {
    title: "Charming Country Farmhouse",
    description: "Enjoy a peaceful stay at this picturesque farmhouse surrounded by rolling hills and fields. Ideal for a relaxing retreat in the countryside.",
    image: {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1468950487387-88b8240b0166?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1000,
    location: "Lancaster",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-76.3055, 40.0379],
    },
  },
  {
    title: "Luxury Lake House",
    description: "Indulge in luxury with this stunning lake house offering panoramic views of the water and high-end amenities for a memorable stay.",
    image: {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1585544314038-a0d3769d0193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8THV4dXJ5JTIwTGFrZSUyMEhvdXNlfGVufDB8fDB8fHww",
    },
    price: 2500,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-120.0324, 39.0968],
    },
  },
  {
    title: "Elegant Parisian Apartment",
    description: "Experience the charm of Paris in this elegantly decorated apartment located near iconic landmarks and charming cafes.",
    image: {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1716831309985-48246936fe42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWxlZ2FudCUyMFBhcmlzaWFuJTIwQXBhcnRtZW50fGVufDB8fDB8fHww",
    },
    price: 3000,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566],
    },
  },
  {
    title: "Tropical Island Villa",
    description: "Relax in this luxurious tropical villa with private beach access and stunning ocean views. The perfect getaway for sun and sand lovers.",
    image: {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4000,
    location: "Maldives",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028],
    },
  },
  {
    title: "Historic Rome Apartment",
    description: "Stay in a beautifully restored apartment in the heart of Rome, offering modern comforts with historic charm and easy access to famous sites.",
    image: {
      filename: "listingImage",
      url: "https://plus.unsplash.com/premium_photo-1677355735491-c543a6a522f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2200,
    location: "Rome",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [12.4964, 41.9028],
    },
  },
  {
    title: "Modern Tokyo Condo",
    description: "Experience modern living in this sleek Tokyo condo with panoramic city views, high-end amenities, and easy access to local attractions.",
    image: {
      filename: "listingImage",
      url: "https://plus.unsplash.com/premium_photo-1723669629708-0de9b27820b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895],
    },
  },
  {
    title: "Sunny Barcelona Flat",
    description: "Enjoy sunny days in Barcelona from this stylish flat located in a vibrant neighborhood with easy access to local attractions and beaches.",
    image: {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1600,
    location: "Barcelona",
    country: "Spain",
    geometry: {
      type: "Point",
      coordinates: [2.1734, 41.3851],
    },
  },
  {
    title: "Chic Sydney Penthouse",
    description: "Experience luxury in this chic Sydney penthouse with breathtaking views of the harbor, modern amenities, and close proximity to the city’s attractions.",
    image: {
      filename: "listingImage",
      url: "https://images.unsplash.com/photo-1549180030-48e1722b48ac?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500,
    location: "Sydney",
    country: "Australia",
    geometry: {
      type: "Point",
      coordinates: [151.2093, -33.8688],
    },
  }
];

module.exports = { data: sampleListings };
