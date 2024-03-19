import sandyq from "../assets/images/sandyq.jpeg"
import brazile from "../assets/images/brazile.jpeg"
import sandyq1 from "../assets/images/sandyq1.jpeg"
import sandyq2 from "../assets/images/sandyq2.jpeg"
import sandyq3 from "../assets/images/sandyq3.jpeg"

const getId = () => {
  return Math.floor(Math.random() * 99999999999)
}

const randomRating = () => {
  const random = Math.floor(Math.random() * 5)
  const isDivRandom = Math.floor(Math.random() * 2) + 1
  return random / isDivRandom
}

export const RestaurantsData = [
  {
    id: getId(),
    image: brazile,
    name: "Little Brazile",
    fullName: "Sandyq | National restaurant",
    description:
      "Цель ресторана - показать вековые традиции как в приготовлении так и в подаче блюд.",
    rate: randomRating(),
    categories: "Ресторан, бары, караоке",
    address: "Улица Аль Фараби 32",
    workingHours: "10:00-22:00",
    call: "8 (747) 122 11 22",
  },
  {
    id: getId(),
    image: brazile,
    name: "Little Brazile",
    rate: randomRating(),
    categories: "Ресторан, бары, караоке",
    address: "Улица Аль Фараби 32",
  },
  {
    id: getId(),
    image: brazile,
    name: "Little Brazile",
    rate: randomRating(),
    categories: "Ресторан, бары, караоке",
    address: "Улица Аль Фараби 32",
  },
  {
    id: getId(),
    image: brazile,
    name: "Little Brazile",
    rate: randomRating(),
    categories: "Ресторан, бары, караоке",
    address: "Улица Аль Фараби 32",
  },
  {
    id: getId(),
    image: brazile,
    name: "Little Brazile",
    rate: randomRating(),
    categories: "Ресторан, бары, караоке",
    address: "Улица Аль Фараби 32",
  },
  {
    id: getId(),
    image: brazile,
    name: "Little Brazile",
    rate: randomRating(),
    categories: "Ресторан, бары, караоке",
    address: "Улица Аль Фараби 32",
  },
]

export const PopularRestaurantsData = [
  {
    id: getId(),
    image: sandyq,
    name: "Little Brazile",
    rate: randomRating(),
    categories: "Ресторан, бары, караоке",
    address: "Улица Аль Фараби 32",
  },
  {
    id: getId(),
    image: sandyq,
    name: "Little Brazile",
    rate: randomRating(),
    categories: "Ресторан, бары, караоке",
    address: "Улица Аль Фараби 32",
  },
  {
    id: getId(),
    image: sandyq,
    name: "Little Brazile",
    rate: randomRating(),
    categories: "Ресторан, бары, караоке",
    address: "Улица Аль Фараби 32",
  },
]

export const RestaurantStatistics = {
  booking: 12620,
  people: 189012,
  establishments: 232,
}

export const RestaurantData = {
  icon: sandyq,
  name: "Little Brazile",
  fullName: "Sandyq | National restaurant",
  description:
    "Цель ресторана - показать вековые традиции как в приготовлении так и в подаче блюд.",
  categories: "Ресторан, бары, караоке",
  address: "Улица Аль Фараби 32",
  workingHours: "10:00-22:00",
  call: "8 (747) 122 11 22",
  images: [sandyq1, sandyq2, sandyq3, sandyq1, sandyq2, sandyq3],
  comments: [
    {
      icon: sandyq,
      name: "Shakh Manbayev",
      data: "29.03.2022",
      rate: 2,
      comment:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: sandyq,
      name: "Shakh Manbayev",
      data: "29.03.2022",
      rate: 3.5,
      comment:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ],
  services: [
    {
      icon: sandyq,
      desc: "Место , где можно поработать",
    },
    {
      icon: sandyq,
      desc: "Бар , где пиво без границ",
    },
    {
      icon: sandyq,
      desc: "Живая музыка",
    },
    {
      icon: sandyq,
      desc: "Кальянная",
    },
    {
      icon: sandyq,
      desc: "Есть бесплатный WI-FI",
    },
  ],
}
