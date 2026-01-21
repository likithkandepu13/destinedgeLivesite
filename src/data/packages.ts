import { Package } from '../types/package';

export const packages: Package[] = [
  {
    id: "vizag-araku-2d",
    title: "Vizag City & Araku Valley Tour",
    days: "2 Days / 1 Night",
    thumbnail: "https://vizagtourism.org.in/images/places-to-visit/header/ins-kurusura-submarine-museum-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    itinerary: ["Day 1: VIZAG CITY TOUR", "Day 2: ARAKU VALLEY"],
    stay: " Stay : Vizag - Destinedge Padmavathi Guest House A/C",
    prices: {
      "1-2": { people: "1-2 People", price: "9,999" },
<<<<<<< HEAD
      "3-4": { people: "3-4 People", price: "11,999" },
      "5-7": { people: "5-7 People", price: "17,499" },
      "8-9": { people: "8-9 People", price: "19,999" },
      "10-12": { people: "10-12 People", price: "27,999" }
=======
      "4": { people: "3-4 People", price: "11,999" },
      "7": { people: "5-7 People", price: "17,499" },
      "9": { people: "8-9 People", price: "20,999" }
>>>>>>> 1d9c128937ab5b14c5620593737355dc4c2cbe9d
    },
    includes: [
      "Comfortable A/C guesthouse stay in Vizag [Homestay Style]",
      "Travel in 5/7/10 Seater CAR or MINI BUS, with Driver cum Guide",
      "All arrangements except entry tickets, lunch, and dinner"
    ],
    places: [
      {
        "name": "RK Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://curlytales.com/wp-content/uploads/2022/09/Untitled-design-2022-09-21T185442.051.jpg"
      },
      {
        "name": "INS Kurusura Submarine Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagtourism.org.in/images/places-to-visit/header/ins-kurusura-submarine-museum-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        "name": "TU 142 Air Craft Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.redd.it/irfey6ka7oo21.jpg"
      },
      {
        "name": "Varaha Lakshmi Narasimha Temple – Simhachalam",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://gumlet.assettype.com/swarajya/2018-11/e146410c-0a9e-42b3-973e-151180c317a9/19488679_697429360444270_3188699791108890886_o1.jpg?rect=0%2C122%2C863%2C453&w=1200&auto=format%2Ccompress&ogImage=true"
      },
      {
        "name": "Kailasagiri Hill",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://1.bp.blogspot.com/-c8Gd66eNTvM/Uwmm16INP1I/AAAAAAAAATg/enaXbWNPazA/s1600/kailasagiri-hill-visakhapatnam.jpg"
      },
      {
        "name": "Rishikonda Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i0.wp.com/www.agrotistravel.com/wp-content/uploads/2016/08/Rishikonda-Beach-India.jpg?ssl=1"
      },
      {
        "name": "Thotlakonda",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://www.touristplaces.net.in/images/pp/5/p113753.jpg"
      },
      {
        "name": "Indira Gandhi Zoological Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://image.slidesharecdn.com/indiragandhizoologicalpark-150724084744-lva1-app6892/95/indira-gandhi-zoological-park-at-visakhapatnam-timings-1-638.jpg?cb=1437727732"
      },
      {
        "name": "Tenneti Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.pinimg.com/originals/87/36/1d/87361d7a882dfed4800764772e2e5d9d.jpg"
      },
      {
        "name": "Vizag Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.dR5G6e02_8YhnK4KgkClVAHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vuda Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://media.tripinvites.com/places/visakhapatnam/vuda-park-taraka-rama/vuda-park-in-visakhapatnam-featured.jpg"
      },
      {
        "name": "RamaNaidu Studios",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.u2EZe6NoHsddT0K0Tuyd4wHaDt?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        "name": "Fishing Harbour",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.idNa8Or-X4afbKOmapsFeAHaEc?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Borra Caves",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/compressed/attractions/attr_2194.jpg"
      },
      {
        "name": "Ananthagiri Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/rFryjbv1k8w/maxresdefault.jpg"
      },
      {
        "name": "Coffee Plantation",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21.jpg"
      },
      {
        "name": "Galikonda View Point",
        "description": "Day 2 - Araku Valley",
        "image": "https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2022/10/Galikonda-View-Point.jpg?resize=800%2C600&ssl=1"
      },
      {
        "name": "Katiki Waterfalls",
        "description": "Day 2 - Araku Valley [Self Transport by JEEP]",
        "image": "https://th.bing.com/th/id/OIP.sYJH4QIcDGw13acNNgMiRQAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vintage Church",
        "description": "Day 2 - Araku Valley",
        "image": "https://th.bing.com/th/id/OIP.MJNtbOU9_VB8W3uu1Dks1AHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Araku Valley Pienery",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/fya8e4cnZvo/maxresdefault.jpg"
      },
      {
        "name": "Tribal Museum",
        "description": "Day 2 - Araku Valley",
        "image": "https://tripxl.com/blog/wp-content/uploads/2024/07/Tribal-Museum-Araku-Valley.jpg"
      },
      {
        "name": "Padmapuram Gardens",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/cmsuploads/compressed/PadmapuramGardens_20200212150409.JPG"
      },
      {
        "name": "Chaparai Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/OIE-AfFgQy4/maxresdefault.jpg"
      },
      {
        "name": "Madagada View Point",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/6MEIrX_m6yM/maxresdefault.jpg"
      },
      {
        "name": "Natural Honey Farming",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      }
    ]
  },
  {
    id: "araku-madagada-2d",
    title: "Araku & Madagada Tour",
    days: "2 Days / 1 Night",
    thumbnail: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21.jpg",
    itinerary: ["Day 1: ARAKU VALLEY", "Day 2: MADAGADA VIEW POINT (Early Morning View)"],
    stay: "Stay : ARAKU VALLEY",
    prices: {
<<<<<<< HEAD
       "1-2": { people: "1-2 People", price: "11,999" },
      "3-4": { people: "3-4 People", price: "12,999" },
      "5-7": { people: "5-7 People", price: "18,499" },
      "8-9": { people: "8-9 People", price: "19,999" },
      "10-12": { people: "10-12 People", price: "28,999" }
=======
      "1-2": { people: "1-2 People", price: "12,499" },
      "4": { people: "3-4 People", price: "13,999" },
      "7": { people: "5-7 People", price: "20,499" },
      "9": { people: "8-9 People", price: "23,499" }
>>>>>>> 1d9c128937ab5b14c5620593737355dc4c2cbe9d
    },
    includes: [
      "Comfortable A/C stay in Araku Valley",
      "Travel in 5/7/10 Seater CAR or MINI BUS, with Driver cum Guide",
      "All arrangements except entry tickets, lunch, and dinner"
    ],
    places: [
      {
        "name": "Borra Caves",
        "description": "Day 1 - Araku Valley",
        "image": "https://www.holidify.com/images/compressed/attractions/attr_2194.jpg"
      },
      {
        "name": "Ananthagiri Waterfalls",
        "description": "Day 1 - Araku Valley",
        "image": "https://i.ytimg.com/vi/rFryjbv1k8w/maxresdefault.jpg"
      },
      {
        "name": "Coffee Plantation",
        "description": "Day 1 - Araku Valley",
        "image": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21.jpg"
      },
      {
        "name": "Galikonda View Point",
        "description": "Day 1 - Araku Valley",
        "image": "https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2022/10/Galikonda-View-Point.jpg?resize=800%2C600&ssl=1"
      },
      {
        "name": "Katiki Waterfalls",
        "description": "Day 1 - Araku Valley [Self Transport by JEEP]",
        "image": "https://th.bing.com/th/id/OIP.sYJH4QIcDGw13acNNgMiRQAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vintage Church",
        "description": "Day 1 - Araku Valley",
        "image": "https://th.bing.com/th/id/OIP.MJNtbOU9_VB8W3uu1Dks1AHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Araku Valley Pienery",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/fya8e4cnZvo/maxresdefault.jpg"
      },
      {
        "name": "Tribal Museum",
        "description": "Day 2 - Araku Valley",
        "image": "https://tripxl.com/blog/wp-content/uploads/2024/07/Tribal-Museum-Araku-Valley.jpg"
      },
      {
        "name": "Padmapuram Gardens",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/cmsuploads/compressed/PadmapuramGardens_20200212150409.JPG"
      },
      {
        "name": "Chaparai Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/OIE-AfFgQy4/maxresdefault.jpg"
      },
      {
        "name": "Madagada View Point",
        "description": "Day 2 - Araku Valley",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/fd/bc/f1/vanajangi-early-morning.jpg?w=1200&h=1200&s=1"
      },
      {
        "name": "Natural Honey Farming",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      }
    ]
  },
  {
    id: "araku-vanajangi-2d",
    title: "Araku & Vanajangi Tour",
    days: "2 Days / 1 Night",
    thumbnail: "https://farm6.staticflickr.com/5557/14710542212_7522609ebc_b.jpg",
    itinerary: ["Day 1: ARAKU VALLEY", "Day 2: VANAJANGI"],
    stay: "Stay: ARAKU VALLEY ",
<<<<<<< HEAD
    prices: {
      "1-2": { people: "1-2 People", price: "11,499" },
      "3-4": { people: "3-4 People", price: "12,999" },
      "5-7": { people: "5-7 People", price: "18,999" },
      "8-9": { people: "8-9 People", price: "22,999" },
      "10-12": { people: "10-12 People", price: "28,999" }
=======
     prices: {
      "1-2": { people: "1-2 People", price: "12,499" },
      "4": { people: "3-4 People", price: "13,999" },
      "7": { people: "5-7 People", price: "20,499" },
      "9": { people: "8-9 People", price: "23,499" }
>>>>>>> 1d9c128937ab5b14c5620593737355dc4c2cbe9d
    },
    includes: [
      "Comfortable A/C stay in Araku Valley",
      "Travel in 5/7/10 Seater CAR or MINI BUS, with Driver cum Guide",
      "All arrangements except entry tickets, lunch, and dinner"
    ],
    places: [
      {
        "name": "Borra Caves",
        "description": "Day 1 - Araku Valley",
        "image": "https://www.holidify.com/images/compressed/attractions/attr_2194.jpg"
      },
      {
        "name": "Ananthagiri Waterfalls",
        "description": "Day 1 - Araku Valley",
        "image": "https://i.ytimg.com/vi/rFryjbv1k8w/maxresdefault.jpg"
      },
      {
        "name": "Coffee Plantation",
        "description": "Day 1 - Araku Valley",
        "image": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21.jpg"
      },
      {
        "name": "Galikonda View Point",
        "description": "Day 1 - Araku Valley",
        "image": "https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2022/10/Galikonda-View-Point.jpg?resize=800%2C600&ssl=1"
      },
      {
        "name": "Katiki Waterfalls",
        "description": "Day 1 - Araku Valley [Self Transport by JEEP]",
        "image": "https://th.bing.com/th/id/OIP.sYJH4QIcDGw13acNNgMiRQAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vintage Church",
        "description": "Day 1 - Araku Valley",
        "image": "https://th.bing.com/th/id/OIP.MJNtbOU9_VB8W3uu1Dks1AHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Araku Valley Pienery",
        "description": "Day 1 - Araku Valley",
        "image": "https://i.ytimg.com/vi/fya8e4cnZvo/maxresdefault.jpg"
      },
      {
        "name": "Tribal Museum",
        "description": "Day 1 - Araku Valley",
        "image": "https://tripxl.com/blog/wp-content/uploads/2024/07/Tribal-Museum-Araku-Valley.jpg"
      },
      {
        "name": "Padmapuram Gardens",
        "description": "Day 1 - Araku Valley",
        "image": "https://www.holidify.com/images/cmsuploads/compressed/PadmapuramGardens_20200212150409.JPG"
      },
      {
        "name": "Chaparai Waterfalls",
        "description": "Day 1 - Araku Valley",
        "image": "https://i.ytimg.com/vi/OIE-AfFgQy4/maxresdefault.jpg"
      },
      {
        "name": "Natural Honey Farming",
        "description": "Day 2 - Vanajangi",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      },
      {
        "name": "Vanjangi View Point ( covers 4-5 hours spending ) includes Trek",
        "description": "Day 2 - Vanjangi",
        "image": "https://th.bing.com/th/id/OIP.3ozoPMVnAyLybaeXYsCNPgHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Strawberry Plantations",
        "description": "Day 2 - Vanjangi",
        "image": "https://thumbs.dreamstime.com/b/strawberry-plantation-26993854.jpg"
      }
      
    ]
  },
  {
    id: "vizag-yarada-2d",
    title: "Vizag City & Yarada Beach Tour",
    days: "2 Days / 1 Night",
    thumbnail: "https://yometro.com/images/places/yarada-beach.jpg",
    itinerary: ["Day 1: VIZAG CITY TOUR", "Day 2: YARADA BEACH"],
    stay: "Stay: Vizag ",
    prices: {
<<<<<<< HEAD
      "1-2": { people: "1-2 People", price: "8,999" },
      "3-4": { people: "3-4 People", price: "9,999" },
      "5-7": { people: "5-7 People", price: "14,999" },
      "8-9": { people: "8-9 People", price: "16,499" },
      "10-12": { people: "10-12 People", price: "24,999" }
=======
      "1-2": { people: "1-2 People", price: "8,499" },
      "4": { people: "3-4 People", price: "9,999" },
      "7": { people: "5-7 People", price: "13,499" },
      "9": { people: "8-9 People", price: "15,499" }
>>>>>>> 1d9c128937ab5b14c5620593737355dc4c2cbe9d
    },
    includes: [
      "Comfortable A/C guesthouse stay in Vizag",
      "Travel in 5/7/10 Seater CAR or MINI BUS, with Driver cum Guide",
      "All arrangements except entry tickets, lunch, and dinner"
    ],
    places: [
      {
        "name": "RK Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.Eig87HEoTffyGbKdtR5ADgHaEC?rs=1&pid=ImgDetMain"
      },
      {
        "name": "INS Kurusura Submarine Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagtourism.org.in/images/places-to-visit/header/ins-kurusura-submarine-museum-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        "name": "TU 142 Air Craft Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.redd.it/irfey6ka7oo21.jpg"
      },
      {
        "name": "Varaha Lakshmi Narasimha Temple – Simhachalam",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://gumlet.assettype.com/swarajya/2018-11/e146410c-0a9e-42b3-973e-151180c317a9/19488679_697429360444270_3188699791108890886_o1.jpg?rect=0%2C122%2C863%2C453&w=1200&auto=format%2Ccompress&ogImage=true"
      },
      {
        "name": "Kailasagiri Hill",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://1.bp.blogspot.com/-c8Gd66eNTvM/Uwmm16INP1I/AAAAAAAAATg/enaXbWNPazA/s1600/kailasagiri-hill-visakhapatnam.jpg"
      },
      {
        "name": "Rishikonda Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i0.wp.com/www.agrotistravel.com/wp-content/uploads/2016/08/Rishikonda-Beach-India.jpg?ssl=1"
      },
      {
        "name": "Thotlakonda",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://www.touristplaces.net.in/images/pp/5/p113753.jpg"
      },
      {
        "name": "Indira Gandhi Zoological Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://image.slidesharecdn.com/indiragandhizoologicalpark-150724084744-lva1-app6892/95/indira-gandhi-zoological-park-at-visakhapatnam-timings-1-638.jpg?cb=1437727732"
      },
      {
        "name": "Tenneti Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.pinimg.com/originals/87/36/1d/87361d7a882dfed4800764772e2e5d9d.jpg"
      },
      {
        "name": "Vizag Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.dR5G6e02_8YhnK4KgkClVAHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vuda Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://media.tripinvites.com/places/visakhapatnam/vuda-park-taraka-rama/vuda-park-in-visakhapatnam-featured.jpg"
      },
      {
        "name": "RamaNaidu Studios",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagdekho.com/wp-content/uploads/2021/09/rama-naidu-studio-image-gallery.jpg"
      },
      {
        "name": "Fishing Harbour",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.idNa8Or-X4afbKOmapsFeAHaEc?rs=1&pid=ImgDetMain"
      },
      {
        name: "Yarada Beach",
        description: "Day 2 - Yarada Island",
        image: "https://yometro.com/images/places/yarada-beach.jpg"
      },
      {
        name: "Light House",
        description: "Day 2 - Yarada Island",
        image: "https://vizagtourism.org.in/images/places-to-visit/header/dolphin-s-nose-light-house-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        name: "Navel View Point ",
        description: "Day 2 - Yarada Island",
        image: "https://th.bing.com/th/id/OIP._E6sit_YnJ6OtiGyo6kjggHaEK?w=2048&h=1151&rs=1&pid=ImgDetMain"
      }
    ]
  },
  {
    id: "vizag-araku-yarada-3d",
    title: "Vizag, Araku & Yarada Tour",
    days: "3 Days / 2 Nights",
    thumbnail: "https://vizagtourism.org.in/images/places-to-visit/header/araku-valley-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    itinerary: [
      "Day 1: VIZAG CITY TOUR",
      "Day 2: ARAKU VALLEY",
      "Day 3: YARADA BEACH ISLAND"
    ],
    stay: "Stay : VIZAG , Araku ",
    prices: {
<<<<<<< HEAD
         "1-2": { people: "1-2 People", price: "14,999" },
      "3-4": { people: "3-4 People", price: "16,999" },
      "5-7": { people: "5-7 People", price: "25,999" },
      "8-9": { people: "8-9 People", price: "27,999" },
      "10-12": { people: "10-12 People", price: "42,999" }
=======
      "1-2": { people: "1-2 People", price: "15,499" },
      "4": { people: "3-4 People", price: "16,499" },
      "7": { people: "5-7 People", price: "24,499" },
      "9": { people: "8-9 People", price: "26,499" }
>>>>>>> 1d9c128937ab5b14c5620593737355dc4c2cbe9d
    },
    includes: [
      "2 nights, Comfortable A/C guesthouse stay in Vizag [Homestay Style]",
      "Travel in 5/7/10 Seater CAR or MINI BUS, with Driver cum Guide",
      "All arrangements except entry tickets, lunch, and dinner"
    ],
    places: [
      {
        "name": "RK Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://curlytales.com/wp-content/uploads/2022/09/Untitled-design-2022-09-21T185442.051.jpg"
      },
      {
        "name": "INS Kurusura Submarine Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagtourism.org.in/images/places-to-visit/header/ins-kurusura-submarine-museum-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        "name": "TU 142 Air Craft Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.redd.it/irfey6ka7oo21.jpg"
      },
      {
        "name": "Varaha Lakshmi Narasimha Temple – Simhachalam",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://gumlet.assettype.com/swarajya/2018-11/e146410c-0a9e-42b3-973e-151180c317a9/19488679_697429360444270_3188699791108890886_o1.jpg?rect=0%2C122%2C863%2C453&w=1200&auto=format%2Ccompress&ogImage=true"
      },
      {
        "name": "Kailasagiri Hill",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://1.bp.blogspot.com/-c8Gd66eNTvM/Uwmm16INP1I/AAAAAAAAATg/enaXbWNPazA/s1600/kailasagiri-hill-visakhapatnam.jpg"
      },
      {
        "name": "Rishikonda Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i0.wp.com/www.agrotistravel.com/wp-content/uploads/2016/08/Rishikonda-Beach-India.jpg?ssl=1"
      },
      {
        "name": "Thotlakonda",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://www.touristplaces.net.in/images/pp/5/p113753.jpg"
      },
      {
        "name": "Indira Gandhi Zoological Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://image.slidesharecdn.com/indiragandhizoologicalpark-150724084744-lva1-app6892/95/indira-gandhi-zoological-park-at-visakhapatnam-timings-1-638.jpg?cb=1437727732"
      },
      {
        "name": "Tenneti Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.pinimg.com/originals/87/36/1d/87361d7a882dfed4800764772e2e5d9d.jpg"
      },
      {
        "name": "Vizag Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.dR5G6e02_8YhnK4KgkClVAHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vuda Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://media.tripinvites.com/places/visakhapatnam/vuda-park-taraka-rama/vuda-park-in-visakhapatnam-featured.jpg"
      },
      {
        "name": "RamaNaidu Studios",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagdekho.com/wp-content/uploads/2021/09/rama-naidu-studio-image-gallery.jpg"
      },
      {
        "name": "Fishing Harbour",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.idNa8Or-X4afbKOmapsFeAHaEc?rs=1&pid=ImgDetMain"
      },
      {
        name: "Yarada Beach",
        description: "Day 3 - Yarada Island",
        image: "https://yometro.com/images/places/yarada-beach.jpg"
      },
      {
        name: "Light House",
        description: "Day 3 - Yarada Island",
        image: "https://vizagtourism.org.in/images/places-to-visit/header/dolphin-s-nose-light-house-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        name: "Navel View Point ",
        description: "Day 3 - Yarada Island",
        image: "https://th.bing.com/th/id/OIP._E6sit_YnJ6OtiGyo6kjggHaEK?w=2048&h=1151&rs=1&pid=ImgDetMain"
      },
      {
        "name": "Borra Caves",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/compressed/attractions/attr_2194.jpg"
      },
      {
        "name": "Ananthagiri Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/rFryjbv1k8w/maxresdefault.jpg"
      },
      {
        "name": "Coffee Plantation",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21.jpg"
      },
      {
        "name": "Galikonda View Point",
        "description": "Day 2 - Araku Valley",
        "image": "https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2022/10/Galikonda-View-Point.jpg?resize=800%2C600&ssl=1"
      },
      {
        "name": "Katiki Waterfalls",
        "description": "Day 2 - Araku Valley [Self Transport by JEEP]",
        "image": "https://th.bing.com/th/id/OIP.sYJH4QIcDGw13acNNgMiRQAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vintage Church",
        "description": "Day 2 - Araku Valley",
        "image": "https://th.bing.com/th/id/OIP.MJNtbOU9_VB8W3uu1Dks1AHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Araku Valley Pienery",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/fya8e4cnZvo/maxresdefault.jpg"
      },
      {
        "name": "Tribal Museum",
        "description": "Day 2 - Araku Valley",
        "image": "https://tripxl.com/blog/wp-content/uploads/2024/07/Tribal-Museum-Araku-Valley.jpg"
      },
      {
        "name": "Padmapuram Gardens",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/cmsuploads/compressed/PadmapuramGardens_20200212150409.JPG"
      },
      {
        "name": "Chaparai Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/OIE-AfFgQy4/maxresdefault.jpg"
      },
      {
        "name": "Natural Honey Farming",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      }
    ]
  },
  {
    id: "vizag-araku-madagada-3d",
    title: "Vizag, Araku & Madagada Tour",
    days: "3 Days / 2 Nights",
    thumbnail: "https://th.bing.com/th/id/OIP.u2EZe6NoHsddT0K0Tuyd4wHaDt?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    itinerary: [
      "Day 1: VIZAG CITY TOUR",
      "Day 2: ARAKU VALLEY",
      "Day 3: MADAGADA VIEW POINT"
    ],
    stay: "Stay :VIZAG , ARAKU VALLEY ",
    prices: {
<<<<<<< HEAD
      "1-2": { people: "1-2 People", price: "15,999" },
      "3-4": { people: "3-4 People", price: "17,499" },
      "5-7": { people: "5-7 People", price: "27,999" },
      "8-9": { people: "8-9 People", price: "32,999" },
      "10-12": { people: "10-12 People", price: "42,999" }
=======
      "1-2": { people: "1-2 People", price: "16,499" },
      "4": { people: "3-4 People", price: "18,499" },
      "7": { people: "5-7 People", price: "28,999" },
      "9": { people: "8-9 People", price: "33,999" }
>>>>>>> 1d9c128937ab5b14c5620593737355dc4c2cbe9d
    },
    includes: [
      "2 nights, Comfortable A/C guesthouse stay in Vizag [Homestay Style], Araku Valley",
      "Travel in 5/7/10 Seater CAR or MINI BUS, with Driver cum Guide",
      "All arrangements except entry tickets, lunch, and dinner"
    ],
    places: [
      {
        "name": "RK Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://curlytales.com/wp-content/uploads/2022/09/Untitled-design-2022-09-21T185442.051.jpg"
      },
      {
        "name": "INS Kurusura Submarine Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagtourism.org.in/images/places-to-visit/header/ins-kurusura-submarine-museum-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        "name": "TU 142 Air Craft Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.redd.it/irfey6ka7oo21.jpg"
      },
      {
        "name": "Varaha Lakshmi Narasimha Temple – Simhachalam",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://gumlet.assettype.com/swarajya/2018-11/e146410c-0a9e-42b3-973e-151180c317a9/19488679_697429360444270_3188699791108890886_o1.jpg?rect=0%2C122%2C863%2C453&w=1200&auto=format%2Ccompress&ogImage=true"
      },
      {
        "name": "Kailasagiri Hill",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://1.bp.blogspot.com/-c8Gd66eNTvM/Uwmm16INP1I/AAAAAAAAATg/enaXbWNPazA/s1600/kailasagiri-hill-visakhapatnam.jpg"
      },
      {
        "name": "Rishikonda Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i0.wp.com/www.agrotistravel.com/wp-content/uploads/2016/08/Rishikonda-Beach-India.jpg?ssl=1"
      },
      {
        "name": "Thotlakonda",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://www.touristplaces.net.in/images/pp/5/p113753.jpg"
      },
      {
        "name": "Indira Gandhi Zoological Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://image.slidesharecdn.com/indiragandhizoologicalpark-150724084744-lva1-app6892/95/indira-gandhi-zoological-park-at-visakhapatnam-timings-1-638.jpg?cb=1437727732"
      },
      {
        "name": "Tenneti Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.pinimg.com/originals/87/36/1d/87361d7a882dfed4800764772e2e5d9d.jpg"
      },
      {
        "name": "Vizag Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.dR5G6e02_8YhnK4KgkClVAHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vuda Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://media.tripinvites.com/places/visakhapatnam/vuda-park-taraka-rama/vuda-park-in-visakhapatnam-featured.jpg"
      },
      {
        "name": "RamaNaidu Studios",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagdekho.com/wp-content/uploads/2021/09/rama-naidu-studio-image-gallery.jpg"
      },
      {
        "name": "Fishing Harbour",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.idNa8Or-X4afbKOmapsFeAHaEc?rs=1&pid=ImgDetMain"
      },
    
      {
        "name": "Borra Caves",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/compressed/attractions/attr_2194.jpg"
      },
      {
        "name": "Ananthagiri Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/rFryjbv1k8w/maxresdefault.jpg"
      },
      {
        "name": "Coffee Plantation",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21.jpg"
      },
      {
        "name": "Galikonda View Point",
        "description": "Day 2 - Araku Valley",
        "image": "https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2022/10/Galikonda-View-Point.jpg?resize=800%2C600&ssl=1"
      },
      {
        "name": "Katiki Waterfalls",
        "description": "Day 2 - Araku Valley [Self Transport by JEEP]",
        "image": "https://th.bing.com/th/id/OIP.sYJH4QIcDGw13acNNgMiRQAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vintage Church",
        "description": "Day 2 - Araku Valley",
        "image": "https://th.bing.com/th/id/OIP.MJNtbOU9_VB8W3uu1Dks1AHaEK?rs=1&pid=ImgDetMain"
      },
  
      {
        "name": "Araku Valley Pienery",
        "description": "Day 3 - Araku Valley",
        "image": "https://i.ytimg.com/vi/fya8e4cnZvo/maxresdefault.jpg"
      },
      {
        "name": "Tribal Museum",
        "description": "Day 2 - Araku Valley",
        "image": "https://tripxl.com/blog/wp-content/uploads/2024/07/Tribal-Museum-Araku-Valley.jpg"
      },
      {
        "name": "Padmapuram Gardens",
        "description": "Day 3 - Araku Valley",
        "image": "https://www.holidify.com/images/cmsuploads/compressed/PadmapuramGardens_20200212150409.JPG"
      },
      {
        "name": "Chaparai Waterfalls",
        "description": "Day 3 - Araku Valley",
        "image": "https://i.ytimg.com/vi/OIE-AfFgQy4/maxresdefault.jpg"
      },
      {
        "name": "Madagada View Point",
        "description": "Day 3 - Madagada View Point",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/fd/bc/f1/vanajangi-early-morning.jpg?w=1200&h=1200&s=1"
      },
      {
        "name": "Natural Honey Farming",
        "description": "Day 3 - Araku Valley",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      }
    ]
  },
  {
    id: "vizag-araku-vanajangi-3d",
    title: "Vizag, Araku & Vanajangi Tour",
    days: "3 Days / 2 Nights",
    thumbnail: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21.jpg",
    itinerary: [
      "Day 1: VIZAG CITY TOUR",
      "Day 2: ARAKU VALLEY",
      "Day 3: VANAJANGI"
    ],
    stay: "Stay : VIZAG , ARAKU VALLEY ",
    prices: {
<<<<<<< HEAD
         "1-2": { people: "1-2 People", price: "17,499" },
      "3-4": { people: "3-4 People", price: "17,999" },
      "5-7": { people: "5-7 People", price: "28,999" },
      "8-9": { people: "8-9 People", price: "31,999" },
      "10-12": { people: "10-12 People", price: "56,999" }
=======
      "1-2": { people: "1-2 People", price: "16,499" },
      "4": { people: "3-4 People", price: "18,999" },
      "7": { people: "5-7 People", price: "28,999" },
      "9": { people: "8-9 People", price: "33,499" }
>>>>>>> 1d9c128937ab5b14c5620593737355dc4c2cbe9d
    },
    includes: [
      "2 nights, Comfortable A/C guesthouse stay in Vizag [Homestay Style], Araku Valley",
      "Travel in 5/7 Seater CAR or MINI BUS, with Driver cum Guide",
      "All arrangements except entry tickets, lunch, and dinner"
    ],
    places: [
      {
        "name": "RK Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://curlytales.com/wp-content/uploads/2022/09/Untitled-design-2022-09-21T185442.051.jpg"
      },
      {
        "name": "INS Kurusura Submarine Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagtourism.org.in/images/places-to-visit/header/ins-kurusura-submarine-museum-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        "name": "TU 142 Air Craft Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.redd.it/irfey6ka7oo21.jpg"
      },
      {
        "name": "Varaha Lakshmi Narasimha Temple – Simhachalam",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://gumlet.assettype.com/swarajya/2018-11/e146410c-0a9e-42b3-973e-151180c317a9/19488679_697429360444270_3188699791108890886_o1.jpg?rect=0%2C122%2C863%2C453&w=1200&auto=format%2Ccompress&ogImage=true"
      },
      {
        "name": "Kailasagiri Hill",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://1.bp.blogspot.com/-c8Gd66eNTvM/Uwmm16INP1I/AAAAAAAAATg/enaXbWNPazA/s1600/kailasagiri-hill-visakhapatnam.jpg"
      },
      {
        "name": "Rishikonda Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i0.wp.com/www.agrotistravel.com/wp-content/uploads/2016/08/Rishikonda-Beach-India.jpg?ssl=1"
      },
      {
        "name": "Thotlakonda",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://www.touristplaces.net.in/images/pp/5/p113753.jpg"
      },
      {
        "name": "Indira Gandhi Zoological Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://image.slidesharecdn.com/indiragandhizoologicalpark-150724084744-lva1-app6892/95/indira-gandhi-zoological-park-at-visakhapatnam-timings-1-638.jpg?cb=1437727732"
      },
      {
        "name": "Tenneti Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.pinimg.com/originals/87/36/1d/87361d7a882dfed4800764772e2e5d9d.jpg"
      },
      {
        "name": "Vizag Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.dR5G6e02_8YhnK4KgkClVAHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vuda Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://media.tripinvites.com/places/visakhapatnam/vuda-park-taraka-rama/vuda-park-in-visakhapatnam-featured.jpg"
      },
      {
        "name": "RamaNaidu Studios",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagdekho.com/wp-content/uploads/2021/09/rama-naidu-studio-image-gallery.jpg"
      },
      {
        "name": "Fishing Harbour",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.idNa8Or-X4afbKOmapsFeAHaEc?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Borra Caves",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/compressed/attractions/attr_2194.jpg"
      },
      {
        "name": "Ananthagiri Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/rFryjbv1k8w/maxresdefault.jpg"
      },
      {
        "name": "Coffee Plantation",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21.jpg"
      },
      {
        "name": "Galikonda View Point",
        "description": "Day 2 - Araku Valley",
        "image": "https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2022/10/Galikonda-View-Point.jpg?resize=800%2C600&ssl=1"
      },
      {
        "name": "Katiki Waterfalls",
        "description": "Day 2 - Araku Valley [Self Transport by JEEP]",
        "image": "https://th.bing.com/th/id/OIP.sYJH4QIcDGw13acNNgMiRQAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vintage Church",
        "description": "Day 2 - Araku Valley",
        "image": "https://th.bing.com/th/id/OIP.MJNtbOU9_VB8W3uu1Dks1AHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Araku Valley Pienery",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/fya8e4cnZvo/maxresdefault.jpg"
      },
      {
        "name": "Tribal Museum",
        "description": "Day 2 - Araku Valley",
        "image": "https://tripxl.com/blog/wp-content/uploads/2024/07/Tribal-Museum-Araku-Valley.jpg"
      },
      {
        "name": "Padmapuram Gardens",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/cmsuploads/compressed/PadmapuramGardens_20200212150409.JPG"
      },
      {
        "name": "Chaparai Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/OIE-AfFgQy4/maxresdefault.jpg"
      },
      {
        "name": "Natural Honey Farming-1",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      },
      {
        "name": "Natural Honey Farming-2",
        "description": "Day 3 - Vanajangi",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      },
      {
        "name": "Vanjangi View Point ( covers 4-5 hours spending ) includes Trek",
        "description": "Day 3 - Vanjangi",
        "image": "https://th.bing.com/th/id/OIP.3ozoPMVnAyLybaeXYsCNPgHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Strawberry Plantations",
        "description": "Day 3 - Vanjangi",
        "image": "https://thumbs.dreamstime.com/b/strawberry-plantation-26993854.jpg"
      }
    ]
  },
  {
    id: "araku-madagada-lambasingi-3d",
    title: "Araku, Madagada & Lambasingi Tour",
    days: "3 Days / 2 Nights",
    thumbnail: "https://i.ytimg.com/vi/CpJjDq1sSnM/maxresdefault.jpg",
    itinerary: [
      "Day 1: ARAKU VALLEY",
      "Day 2: MADAGADA VIEW POINT",
      "Day 3: LAMBASINGI"
    ],
    stay: "Stay: ARAKU VALLEY, Campfire/Tents/Musical Night at Vanajangi ",
    prices: {
<<<<<<< HEAD
   "1-2": { people: "1-2 People", price: "16,499" },
      "3-4": { people: "3-4 People", price: "18,999" },
      "5-7": { people: "5-7 People", price: "29,999" },
      "8-9": { people: "8-9 People", price: "38,999" },
      "10-12": { people: "10-12 People", price: "48,999" }
=======
      "1-2": { people: "1-2 People", price: "18,499" },
      "4": { people: "3-4 People", price: "20,499" },
      "7": { people: "5-7 People", price: "32,499" },
      "9": { people: "8-9 People", price: "39,499" }
>>>>>>> 1d9c128937ab5b14c5620593737355dc4c2cbe9d
    },
    includes: [
      "2 nights, Comfortable A/C stay in Araku Valley, Vanajangi",
      "Travel in 5/7 Seater CAR or MINI BUS, with Driver cum Guide",
      "All arrangements except entry tickets, lunch, and dinner"
    ],
    places: [
      {
        "name": "Borra Caves",
        "description": "Day 1 - Araku Valley",
        "image": "https://www.holidify.com/images/compressed/attractions/attr_2194.jpg"
      },
      {
        "name": "Ananthagiri Waterfalls",
        "description": "Day 1 - Araku Valley",
        "image": "https://i.ytimg.com/vi/rFryjbv1k8w/maxresdefault.jpg"
      },
      {
        "name": "Coffee Plantation",
        "description": "Day 1 - Araku Valley",
        "image": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21.jpg"
      },
      {
        "name": "Galikonda View Point",
        "description": "Day 1 - Araku Valley",
        "image": "https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2022/10/Galikonda-View-Point.jpg?resize=800%2C600&ssl=1"
      },
      {
        "name": "Katiki Waterfalls",
        "description": "Day 1 - Araku Valley [Self Transport by JEEP]",
        "image": "https://th.bing.com/th/id/OIP.sYJH4QIcDGw13acNNgMiRQAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vintage Church",
        "description": "Day 1 - Araku Valley",
        "image": "https://th.bing.com/th/id/OIP.MJNtbOU9_VB8W3uu1Dks1AHaEK?rs=1&pid=ImgDetMain"
      },
  
      {
        "name": "Araku Valley Pienery",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/fya8e4cnZvo/maxresdefault.jpg"
      },
      {
        "name": "Tribal Museum",
        "description": "Day 2 - Araku Valley",
        "image": "https://tripxl.com/blog/wp-content/uploads/2024/07/Tribal-Museum-Araku-Valley.jpg"
      },
      {
        "name": "Padmapuram Gardens",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/cmsuploads/compressed/PadmapuramGardens_20200212150409.JPG"
      },
      {
        "name": "Chaparai Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/OIE-AfFgQy4/maxresdefault.jpg"
      },
      {
        "name": "Madagada View Point",
        "description": "Day 2 - Madagada View Point",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/fd/bc/f1/vanajangi-early-morning.jpg?w=1200&h=1200&s=1"
      },
      {
        "name": "Natural Honey Farming",
        "description": "Day 3 - Lambasingi",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      },
      {
        "name": "Lambasingi with trecking",
        "description": "Day 3 - Lambasingi",
        "image": "https://i.ytimg.com/vi/CpJjDq1sSnM/maxresdefault.jpg"
      },
      {
        "name": "Strawberry Plantations",
        "description": "Day 3 - Lambasingi",
        "image": "https://thumbs.dreamstime.com/b/strawberry-plantation-26993854.jpg"
      }
    ]
  },
  {
    id: "yarada-araku-vanajangi-3d",
    title: "Yarada, Araku & Vanajangi/Madagada Tour",
    days: "3 Days / 2 Nights",
    thumbnail: "https://www.holidify.com/images/compressed/attractions/attr_2194.jpg",
    itinerary: [
      "Day 1: YARADA BEACH",
      "Day 2: ARAKU VALLEY",
      "Day 3: VANAJANGI / MADAGADA VIEW POINT"
    ],
    stay: "VIZAG , ARAKU VALLEY",
    prices: {
      "1-2": { people: "1-2 People", price: "16,499" },
      "4": { people: "3-4 People", price: "18,999" },
      "7": { people: "5-7 People", price: "28,999" },
      "9": { people: "8-9 People", price: "32,999" }
    },
    includes: [
      "2 nights, Comfortable A/C guesthouse stay in Vizag [Homestay Style], Araku Valley",
      "Travel in 5/7/10 Seater CAR or MINI BUS, with Driver cum Guide",
      "All arrangements except entry tickets, lunch, and dinner"
    ],
    places: [
      {
        name: "Yarada Beach",
        description: "Day 1 - Yarada Island",
        image: "https://yometro.com/images/places/yarada-beach.jpg"
      },
      {
        name: "Light House",
        description: "Day 1 - Yarada Island",
        image: "https://vizagtourism.org.in/images/places-to-visit/header/dolphin-s-nose-light-house-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        name: "Navel View Point ",
        description: "Day 1 - Yarada Island",
        image: "https://th.bing.com/th/id/OIP._E6sit_YnJ6OtiGyo6kjggHaEK?w=2048&h=1151&rs=1&pid=ImgDetMain"
      },
      {
        "name": "Borra Caves",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/compressed/attractions/attr_2194.jpg"
      },
      {
        "name": "Ananthagiri Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/rFryjbv1k8w/maxresdefault.jpg"
      },
      {
        "name": "Coffee Plantation",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21.jpg"
      },
      {
        "name": "Galikonda View Point",
        "description": "Day 2 - Araku Valley",
        "image": "https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2022/10/Galikonda-View-Point.jpg?resize=800%2C600&ssl=1"
      },
      {
        "name": "Katiki Waterfalls",
        "description": "Day 2 - Araku Valley [Self Transport by JEEP]",
        "image": "https://th.bing.com/th/id/OIP.sYJH4QIcDGw13acNNgMiRQAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vintage Church",
        "description": "Day 2 - Araku Valley",
        "image": "https://th.bing.com/th/id/OIP.MJNtbOU9_VB8W3uu1Dks1AHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Araku Valley Pienery",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/fya8e4cnZvo/maxresdefault.jpg"
      },
      {
        "name": "Tribal Museum",
        "description": "Day 2 - Araku Valley",
        "image": "https://tripxl.com/blog/wp-content/uploads/2024/07/Tribal-Museum-Araku-Valley.jpg"
      },
      {
        "name": "Padmapuram Gardens",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/cmsuploads/compressed/PadmapuramGardens_20200212150409.JPG"
      },
      {
        "name": "Chaparai Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/OIE-AfFgQy4/maxresdefault.jpg"
      },
      {
        "name": "Natural Honey Farming-1",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      },
      {
        "name": "Natural Honey Farming-2",
        "description": "Day 3 - Vanajangi",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      },
      {
        "name": "Vanjangi View Point ( covers 4-5 hours spending ) includes Trek",
        "description": "Day 3 - Vanjangi",
        "image": "https://th.bing.com/th/id/OIP.3ozoPMVnAyLybaeXYsCNPgHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Strawberry Plantations",
        "description": "Day 3 - Vanjangi",
        "image": "https://thumbs.dreamstime.com/b/strawberry-plantation-26993854.jpg"
      }
    ]
  },
  {
    id: "vizag-araku-madagada-yarada-4d",
    title: "Complete Vizag Tour - Vizag,Araku,Yarada,Madagada View Point  ",
    days: "4 Days / 3 Nights",
    thumbnail: "https://1.bp.blogspot.com/-c8Gd66eNTvM/Uwmm16INP1I/AAAAAAAAATg/enaXbWNPazA/s1600/kailasagiri-hill-visakhapatnam.jpg",
    itinerary: [
      "Day 1: VIZAG CITY TOUR",
      "Day 2: ARAKU VALLEY",
      "Day 3: MADAGADA VIEW POINT",
      "Day 4: YARADA BEACH ISLAND"
    ],
    stay: "VIZAG , 2 Nights - ARAKU VALLEY ",
    prices: {
<<<<<<< HEAD
         "1-2": { people: "1-2 People", price: "17,499" },
      "3-4": { people: "3-4 People", price: "17,999" },
      "5-7": { people: "5-7 People", price: "28,999" },
      "8-9": { people: "8-9 People", price: "32,999" },
      "10-12": { people: "10-12 People", price: "56,999" }
=======
      "1-2": { people: "1-2 People", price: "19,499" },
      "4": { people: "3-4 People", price: "20,499" },
      "7": { people: "5-7 People", price: "32,499" },
      "9": { people: "8-9 People", price: "34,499" }
>>>>>>> 1d9c128937ab5b14c5620593737355dc4c2cbe9d
    },
    includes: [
      "3 nights, Comfortable A/C guesthouse stay in Vizag [Homestay Style], Araku Valley",
      "Travel in 5/7/10 Seater CAR or MINI BUS, with Driver cum Guide",
      "All arrangements except entry tickets, lunch, and dinner"
    ],
    places: [
      {
        "name": "RK Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://curlytales.com/wp-content/uploads/2022/09/Untitled-design-2022-09-21T185442.051.jpg"
      },
      {
        "name": "INS Kurusura Submarine Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagtourism.org.in/images/places-to-visit/header/ins-kurusura-submarine-museum-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        "name": "TU 142 Air Craft Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.redd.it/irfey6ka7oo21.jpg"
      },
      {
        "name": "Varaha Lakshmi Narasimha Temple – Simhachalam",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://gumlet.assettype.com/swarajya/2018-11/e146410c-0a9e-42b3-973e-151180c317a9/19488679_697429360444270_3188699791108890886_o1.jpg?rect=0%2C122%2C863%2C453&w=1200&auto=format%2Ccompress&ogImage=true"
      },
      {
        "name": "Kailasagiri Hill",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://1.bp.blogspot.com/-c8Gd66eNTvM/Uwmm16INP1I/AAAAAAAAATg/enaXbWNPazA/s1600/kailasagiri-hill-visakhapatnam.jpg"
      },
      {
        "name": "Rishikonda Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i0.wp.com/www.agrotistravel.com/wp-content/uploads/2016/08/Rishikonda-Beach-India.jpg?ssl=1"
      },
      {
        "name": "Thotlakonda",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://www.touristplaces.net.in/images/pp/5/p113753.jpg"
      },
      {
        "name": "Indira Gandhi Zoological Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://image.slidesharecdn.com/indiragandhizoologicalpark-150724084744-lva1-app6892/95/indira-gandhi-zoological-park-at-visakhapatnam-timings-1-638.jpg?cb=1437727732"
      },
      {
        "name": "Tenneti Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.pinimg.com/originals/87/36/1d/87361d7a882dfed4800764772e2e5d9d.jpg"
      },
      {
        "name": "Vizag Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.dR5G6e02_8YhnK4KgkClVAHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vuda Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://media.tripinvites.com/places/visakhapatnam/vuda-park-taraka-rama/vuda-park-in-visakhapatnam-featured.jpg"
      },
      {
        "name": "RamaNaidu Studios",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagdekho.com/wp-content/uploads/2021/09/rama-naidu-studio-image-gallery.jpg"
      },
      {
        "name": "Fishing Harbour",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.idNa8Or-X4afbKOmapsFeAHaEc?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Borra Caves",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/compressed/attractions/attr_2194.jpg"
      },
      {
        "name": "Ananthagiri Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/rFryjbv1k8w/maxresdefault.jpg"
      },
      {
        "name": "Coffee Plantation",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21.jpg"
      },
      {
        "name": "Galikonda View Point",
        "description": "Day 2 - Araku Valley",
        "image": "https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2022/10/Galikonda-View-Point.jpg?resize=800%2C600&ssl=1"
      },
      {
        "name": "Katiki Waterfalls",
        "description": "Day 2 - Araku Valley [Self Transport by JEEP]",
        "image": "https://th.bing.com/th/id/OIP.sYJH4QIcDGw13acNNgMiRQAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vintage Church",
        "description": "Day 2 - Araku Valley",
        "image": "https://th.bing.com/th/id/OIP.MJNtbOU9_VB8W3uu1Dks1AHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Araku Valley Pienery",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/fya8e4cnZvo/maxresdefault.jpg"
      },
    
      
      {
        "name": "Chaparai Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/OIE-AfFgQy4/maxresdefault.jpg"
      },
      {
        "name": "Natural Honey Farming",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      },
      {
        name: "Yarada Beach",
        description: "Day 4 - Yarada Island",
        image: "https://yometro.com/images/places/yarada-beach.jpg"
      },
      {
        name: "Light House",
        description: "Day 4 - Yarada Island",
        image: "https://vizagtourism.org.in/images/places-to-visit/header/dolphin-s-nose-light-house-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        name: "Navel View Point ",
        description: "Day 4 - Yarada Island",
        image: "https://th.bing.com/th/id/OIP._E6sit_YnJ6OtiGyo6kjggHaEK?w=2048&h=1151&rs=1&pid=ImgDetMain"
      },
      {
        "name": "Araku Valley Pienery",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/fya8e4cnZvo/maxresdefault.jpg"
      },
      {
        "name": "Tribal Museum",
        "description": "Day 3 - Araku Valley",
        "image": "https://tripxl.com/blog/wp-content/uploads/2024/07/Tribal-Museum-Araku-Valley.jpg"
      },
      {
        "name": "Padmapuram Gardens",
        "description": "Day 3 - Araku Valley",
        "image": "https://www.holidify.com/images/cmsuploads/compressed/PadmapuramGardens_20200212150409.JPG"
      },
      {
        "name": "Chaparai Waterfalls",
        "description": "Day 3 - Araku Valley",
        "image": "https://i.ytimg.com/vi/OIE-AfFgQy4/maxresdefault.jpg"
      },
      {
        "name": "Madagada View Point",
        "description": "Day 3 - Madagada View Point",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/fd/bc/f1/vanajangi-early-morning.jpg?w=1200&h=1200&s=1"
      },
    ]
  },
  {
    id: "vizag-araku-madagada-lambasingi-4d",
    title: "Vizag, Araku, Madagada, Lambasingi",
    days: "4 Days / 3 Nights",
    thumbnail: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/fd/bc/f1/vanajangi-early-morning.jpg?w=1200&h=1200&s=1",
    itinerary: [
      "Day 1: VIZAG CITY TOUR",
      "Day 2: ARAKU VALLEY",
      "Day 3: MADAGADA VIEW POINT",
      "Day 4: LAMBASINGI or VANAJANGI"
    ],
    stay: "VIZAG ,2 Nights-ARAKU VALLEY ",
    prices: {
<<<<<<< HEAD
        "1-2": { people: "1-2 People", price: "18,999" },
      "3-4": { people: "3-4 People", price: "22,999" },
      "5-7": { people: "5-7 People", price: "33,999" },
      "8-9": { people: "8-9 People", price: "37,999" },
      "10-12": { people: "10-12 People", price: "46,999" }
=======
      "1-2": { people: "1-2 People", price: "20,999" },
      "4": { people: "3-4 People", price: "23,999" },
      "7": { people: "5-7 People", price: "36,499" },
      "9": { people: "8-9 People", price: "41,999" }
>>>>>>> 1d9c128937ab5b14c5620593737355dc4c2cbe9d
    },
    includes: [
      "3 nights, Comfortable A/C guesthouse stay in Vizag [Homestay Style], Araku Valley",
      "Travel in 5/7/10 Seater CAR or MINI BUS, with Driver cum Guide",
      "All arrangements except entry tickets, lunch, and dinner"
    ],
    places: [
      {
        "name": "RK Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://curlytales.com/wp-content/uploads/2022/09/Untitled-design-2022-09-21T185442.051.jpg"
      },
      {
        "name": "INS Kurusura Submarine Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagtourism.org.in/images/places-to-visit/header/ins-kurusura-submarine-museum-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        "name": "TU 142 Air Craft Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.redd.it/irfey6ka7oo21.jpg"
      },
      {
        "name": "Varaha Lakshmi Narasimha Temple – Simhachalam",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://gumlet.assettype.com/swarajya/2018-11/e146410c-0a9e-42b3-973e-151180c317a9/19488679_697429360444270_3188699791108890886_o1.jpg?rect=0%2C122%2C863%2C453&w=1200&auto=format%2Ccompress&ogImage=true"
      },
      {
        "name": "Kailasagiri Hill",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://1.bp.blogspot.com/-c8Gd66eNTvM/Uwmm16INP1I/AAAAAAAAATg/enaXbWNPazA/s1600/kailasagiri-hill-visakhapatnam.jpg"
      },
      {
        "name": "Rishikonda Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i0.wp.com/www.agrotistravel.com/wp-content/uploads/2016/08/Rishikonda-Beach-India.jpg?ssl=1"
      },
      {
        "name": "Thotlakonda",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://www.touristplaces.net.in/images/pp/5/p113753.jpg"
      },
      {
        "name": "Indira Gandhi Zoological Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://image.slidesharecdn.com/indiragandhizoologicalpark-150724084744-lva1-app6892/95/indira-gandhi-zoological-park-at-visakhapatnam-timings-1-638.jpg?cb=1437727732"
      },
      {
        "name": "Tenneti Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.pinimg.com/originals/87/36/1d/87361d7a882dfed4800764772e2e5d9d.jpg"
      },
      {
        "name": "Vizag Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.dR5G6e02_8YhnK4KgkClVAHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vuda Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://media.tripinvites.com/places/visakhapatnam/vuda-park-taraka-rama/vuda-park-in-visakhapatnam-featured.jpg"
      },
      {
        "name": "RamaNaidu Studios",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagdekho.com/wp-content/uploads/2021/09/rama-naidu-studio-image-gallery.jpg"
      },
      {
        "name": "Fishing Harbour",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.idNa8Or-X4afbKOmapsFeAHaEc?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Borra Caves",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/compressed/attractions/attr_2194.jpg"
      },
      {
        "name": "Ananthagiri Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/rFryjbv1k8w/maxresdefault.jpg"
      },
      {
        "name": "Coffee Plantation",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21.jpg"
      },
      {
        "name": "Galikonda View Point",
        "description": "Day 2 - Araku Valley",
        "image": "https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2022/10/Galikonda-View-Point.jpg?resize=800%2C600&ssl=1"
      },
      {
        "name": "Katiki Waterfalls",
        "description": "Day 2 - Araku Valley [Self Transport by JEEP]",
        "image": "https://th.bing.com/th/id/OIP.sYJH4QIcDGw13acNNgMiRQAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vintage Church",
        "description": "Day 2 - Araku Valley",
        "image": "https://th.bing.com/th/id/OIP.MJNtbOU9_VB8W3uu1Dks1AHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Araku Valley Pienery",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/fya8e4cnZvo/maxresdefault.jpg"
      },
    
      
      {
        "name": "Chaparai Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/OIE-AfFgQy4/maxresdefault.jpg"
      },
      {
        "name": "Natural Honey Farming",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      },
      {
        "name": "Araku Valley Pienery",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/fya8e4cnZvo/maxresdefault.jpg"
      },
      {
        "name": "Tribal Museum",
        "description": "Day 3 - Araku Valley",
        "image": "https://tripxl.com/blog/wp-content/uploads/2024/07/Tribal-Museum-Araku-Valley.jpg"
      },
      {
        "name": "Padmapuram Gardens",
        "description": "Day 3 - Araku Valley",
        "image": "https://www.holidify.com/images/cmsuploads/compressed/PadmapuramGardens_20200212150409.JPG"
      },
      {
        "name": "Chaparai Waterfalls",
        "description": "Day 3 - Araku Valley",
        "image": "https://i.ytimg.com/vi/OIE-AfFgQy4/maxresdefault.jpg"
      },
      {
        "name": "Madagada View Point",
        "description": "Day 3 - Madagada View Point",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/fd/bc/f1/vanajangi-early-morning.jpg?w=1200&h=1200&s=1"
      },
      {
        "name": "Natural Honey Farming",
        "description": "Day 4 - Lambasingi",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      },
      {
        "name": "Lambasingi with trecking",
        "description": "Day 4 - Lambasingi",
        "image": "https://i.ytimg.com/vi/CpJjDq1sSnM/maxresdefault.jpg"
      },
      {
        "name": "Strawberry Plantations",
        "description": "Day 4 - Lambasingi",
        "image": "https://thumbs.dreamstime.com/b/strawberry-plantation-26993854.jpg"
      }
    ]
  },
  {
    id: "vizag-araku-vanajangi-lambasingi-4d",
    title: "Vizag, Araku, Vanajangi, Lambasingi",
    days: "4 Days / 3 Nights",
    thumbnail: "https://th.bing.com/th/id/OIP.MJNtbOU9_VB8W3uu1Dks1AHaEK?rs=1&pid=ImgDetMain",
    itinerary: [
      "Day 1: VIZAG CITY TOUR",
      "Day 2: ARAKU VALLEY",
      "Day 3: VANAJANGI",
      "Day 4: LAMBASINGI"
    ],
    stay: "Stay: VIZAG, ARAKU VALLEY , Campfire/Tent/Musical Night at Vanajangi",
    prices: {
<<<<<<< HEAD
"1-2": { people: "1-2 People", price: "18,999" },
      "3-4": { people: "3-4 People", price: "22,499" },
      "5-7": { people: "5-7 People", price: "32,999" },
      "8-9": { people: "8-9 People", price: "36,999" },
      "10-12": { people: "10-12 People", price: "45,999" }
=======
      "1-2": { people: "1-2 People", price: "20,499" },
      "4": { people: "3-4 People", price: "23,499" },
      "7": { people: "5-7 People", price: "35,999" },
      "9": { people: "8-9 People", price: "39,999" }
>>>>>>> 1d9c128937ab5b14c5620593737355dc4c2cbe9d
    },
    includes: [
      "3 nights, Comfortable A/C guesthouse stay in Vizag [Homestay Style], Araku Valley",
      "Travel in 5/7 Seater CAR or MINI BUS, with Driver cum Guide",
      "All arrangements except entry tickets, lunch, and dinner"
    ],
    places: [
      {
        "name": "RK Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://curlytales.com/wp-content/uploads/2022/09/Untitled-design-2022-09-21T185442.051.jpg"
      },
      {
        "name": "INS Kurusura Submarine Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagtourism.org.in/images/places-to-visit/header/ins-kurusura-submarine-museum-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        "name": "TU 142 Air Craft Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.redd.it/irfey6ka7oo21.jpg"
      },
      {
        "name": "Varaha Lakshmi Narasimha Temple – Simhachalam",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://gumlet.assettype.com/swarajya/2018-11/e146410c-0a9e-42b3-973e-151180c317a9/19488679_697429360444270_3188699791108890886_o1.jpg?rect=0%2C122%2C863%2C453&w=1200&auto=format%2Ccompress&ogImage=true"
      },
      {
        "name": "Kailasagiri Hill",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://1.bp.blogspot.com/-c8Gd66eNTvM/Uwmm16INP1I/AAAAAAAAATg/enaXbWNPazA/s1600/kailasagiri-hill-visakhapatnam.jpg"
      },
      {
        "name": "Rishikonda Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i0.wp.com/www.agrotistravel.com/wp-content/uploads/2016/08/Rishikonda-Beach-India.jpg?ssl=1"
      },
      {
        "name": "Thotlakonda",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://www.touristplaces.net.in/images/pp/5/p113753.jpg"
      },
      {
        "name": "Indira Gandhi Zoological Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://image.slidesharecdn.com/indiragandhizoologicalpark-150724084744-lva1-app6892/95/indira-gandhi-zoological-park-at-visakhapatnam-timings-1-638.jpg?cb=1437727732"
      },
      {
        "name": "Tenneti Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.pinimg.com/originals/87/36/1d/87361d7a882dfed4800764772e2e5d9d.jpg"
      },
      {
        "name": "Vizag Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.dR5G6e02_8YhnK4KgkClVAHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vuda Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://media.tripinvites.com/places/visakhapatnam/vuda-park-taraka-rama/vuda-park-in-visakhapatnam-featured.jpg"
      },
      {
        "name": "RamaNaidu Studios",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagdekho.com/wp-content/uploads/2021/09/rama-naidu-studio-image-gallery.jpg"
      },
      {
        "name": "Fishing Harbour",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.idNa8Or-X4afbKOmapsFeAHaEc?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Borra Caves",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/compressed/attractions/attr_2194.jpg"
      },
      {
        "name": "Ananthagiri Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/rFryjbv1k8w/maxresdefault.jpg"
      },
      {
        "name": "Coffee Plantation",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21.jpg"
      },
      {
        "name": "Galikonda View Point",
        "description": "Day 2 - Araku Valley",
        "image": "https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2022/10/Galikonda-View-Point.jpg?resize=800%2C600&ssl=1"
      },
      {
        "name": "Katiki Waterfalls",
        "description": "Day 2 - Araku Valley [Self Transport by JEEP]",
        "image": "https://th.bing.com/th/id/OIP.sYJH4QIcDGw13acNNgMiRQAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vintage Church",
        "description": "Day 2 - Araku Valley",
        "image": "https://th.bing.com/th/id/OIP.MJNtbOU9_VB8W3uu1Dks1AHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Araku Valley Pienery",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/fya8e4cnZvo/maxresdefault.jpg"
      },
      {
        "name": "Tribal Museum",
        "description": "Day 2 - Araku Valley",
        "image": "https://tripxl.com/blog/wp-content/uploads/2024/07/Tribal-Museum-Araku-Valley.jpg"
      },
      {
        "name": "Padmapuram Gardens",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/cmsuploads/compressed/PadmapuramGardens_20200212150409.JPG"
      },
      {
        "name": "Chaparai Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/OIE-AfFgQy4/maxresdefault.jpg"
      },
      {
        "name": "Natural Honey Farming-1",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      },
      {
        "name": "Natural Honey Farming-2",
        "description": "Day 3 - Vanajangi",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      },
      {
        "name": "Vanjangi View Point ( covers 4-5 hours spending ) includes Trek",
        "description": "Day 3 - Vanjangi",
        "image": "https://th.bing.com/th/id/OIP.3ozoPMVnAyLybaeXYsCNPgHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Strawberry Plantations",
        "description": "Day 3 - Vanjangi",
        "image": "https://thumbs.dreamstime.com/b/strawberry-plantation-26993854.jpg"
      },
      {
        "name": "Natural Honey Farming",
        "description": "Day 4 - Lambasingi",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      },
      {
        "name": "Lambasingi with trecking",
        "description": "Day 4 - Lambasingi",
        "image": "https://i.ytimg.com/vi/CpJjDq1sSnM/maxresdefault.jpg"
      },
      {
        "name": "Strawberry Plantations",
        "description": "Day 4 - Lambasingi",
        "image": "https://thumbs.dreamstime.com/b/strawberry-plantation-26993854.jpg"
      }
    ]
  },
  {
    id: "vizag-araku-2d",
    title: "Vizag City & Araku Valley Travel Only without stay",
    days: "Travel Only ",
    thumbnail: "https://vizagtourism.org.in/images/places-to-visit/header/ins-kurusura-submarine-museum-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    itinerary: ["Day 1: VIZAG CITY TOUR", "Day 2: ARAKU VALLEY"],
    stay: " Stay : Vizag ",
    prices: {
      "1-2": { people: "1-2 People", price: "5,999" },
      "4": { people: "3-4 People", price: "6,499" },
      "7": { people: "5-7 People", price: "9,499" },
      "9": { people: "8-9 People", price: "10,499" }
    },
    includes: [
      "Comfortable A/C guesthouse stay in Vizag [Homestay Style]",
      "Travel in 5/7 Seater CAR or MINI BUS, with Driver cum Guide",
      "All arrangements except entry tickets, lunch, and dinner"
    ],
    places: [
      {
        "name": "RK Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://curlytales.com/wp-content/uploads/2022/09/Untitled-design-2022-09-21T185442.051.jpg"
      },
      {
        "name": "INS Kurusura Submarine Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagtourism.org.in/images/places-to-visit/header/ins-kurusura-submarine-museum-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        "name": "TU 142 Air Craft Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.redd.it/irfey6ka7oo21.jpg"
      },
      {
        "name": "Varaha Lakshmi Narasimha Temple – Simhachalam",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://gumlet.assettype.com/swarajya/2018-11/e146410c-0a9e-42b3-973e-151180c317a9/19488679_697429360444270_3188699791108890886_o1.jpg?rect=0%2C122%2C863%2C453&w=1200&auto=format%2Ccompress&ogImage=true"
      },
      {
        "name": "Kailasagiri Hill",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://1.bp.blogspot.com/-c8Gd66eNTvM/Uwmm16INP1I/AAAAAAAAATg/enaXbWNPazA/s1600/kailasagiri-hill-visakhapatnam.jpg"
      },
      {
        "name": "Rishikonda Beach",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i0.wp.com/www.agrotistravel.com/wp-content/uploads/2016/08/Rishikonda-Beach-India.jpg?ssl=1"
      },
      {
        "name": "Thotlakonda",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://www.touristplaces.net.in/images/pp/5/p113753.jpg"
      },
      {
        "name": "Indira Gandhi Zoological Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://image.slidesharecdn.com/indiragandhizoologicalpark-150724084744-lva1-app6892/95/indira-gandhi-zoological-park-at-visakhapatnam-timings-1-638.jpg?cb=1437727732"
      },
      {
        "name": "Tenneti Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://i.pinimg.com/originals/87/36/1d/87361d7a882dfed4800764772e2e5d9d.jpg"
      },
      {
        "name": "Vizag Museum",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.dR5G6e02_8YhnK4KgkClVAHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vuda Park",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://media.tripinvites.com/places/visakhapatnam/vuda-park-taraka-rama/vuda-park-in-visakhapatnam-featured.jpg"
      },
      {
        "name": "RamaNaidu Studios",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://vizagdekho.com/wp-content/uploads/2021/09/rama-naidu-studio-image-gallery.jpg"
      },
      {
        "name": "Fishing Harbour",
        "description": "Day 1 - Vizag City Tour",
        "image": "https://th.bing.com/th/id/OIP.idNa8Or-X4afbKOmapsFeAHaEc?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Borra Caves",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/compressed/attractions/attr_2194.jpg"
      },
      {
        "name": "Ananthagiri Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/rFryjbv1k8w/maxresdefault.jpg"
      },
      {
        "name": "Coffee Plantation",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21.jpg"
      },
      {
        "name": "Galikonda View Point",
        "description": "Day 2 - Araku Valley",
        "image": "https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2022/10/Galikonda-View-Point.jpg?resize=800%2C600&ssl=1"
      },
      {
        "name": "Katiki Waterfalls",
        "description": "Day 2 - Araku Valley [Self Transport by JEEP]",
        "image": "https://th.bing.com/th/id/OIP.sYJH4QIcDGw13acNNgMiRQAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Vintage Church",
        "description": "Day 2 - Araku Valley",
        "image": "https://th.bing.com/th/id/OIP.MJNtbOU9_VB8W3uu1Dks1AHaEK?rs=1&pid=ImgDetMain"
      },
      {
        "name": "Araku Valley Pienery",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/fya8e4cnZvo/maxresdefault.jpg"
      },
      {
        "name": "Tribal Museum",
        "description": "Day 2 - Araku Valley",
        "image": "https://tripxl.com/blog/wp-content/uploads/2024/07/Tribal-Museum-Araku-Valley.jpg"
      },
      {
        "name": "Padmapuram Gardens",
        "description": "Day 2 - Araku Valley",
        "image": "https://www.holidify.com/images/cmsuploads/compressed/PadmapuramGardens_20200212150409.JPG"
      },
      {
        "name": "Chaparai Waterfalls",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/OIE-AfFgQy4/maxresdefault.jpg"
      },
      {
        "name": "Madagada View Point",
        "description": "Day 2 - Araku Valley",
        "image": "https://i.ytimg.com/vi/6MEIrX_m6yM/maxresdefault.jpg"
      },
      {
        "name": "Natural Honey Farming",
        "description": "Day 2 - Araku Valley",
        "image": "https://images.slurrp.com/prodrich_article/4py0fxcrthj.webp?impolicy=slurrp-20210601&width=880&height=500"
      }
    ]
  }
];
