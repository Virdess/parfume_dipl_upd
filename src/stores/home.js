import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state: () => ({
    recs: [
      {
        id: 1,
        title: "Avon Today парфюмерная вода EDP 100 мл",
        price: "120тг",
        image: "/assets/homepage/recs/65815130538014.jpg",
      },
      {
        id: 2,
        title: "Avon Today парфюмерная вода EDP 100 мл",
        price: "120тг",
        image: "/assets/homepage/recs/65815130538014.jpg",
      },
      {
        id: 3,
        title: "Avon Today парфюмерная вода EDP 100 мл",
        price: "120тг",
        image: "/assets/homepage/recs/65815130538014.jpg",
      },
      {
        id: 4,
        title: "Avon Today парфюмерная вода EDP 100 мл",
        price: "120тг",
        image: "/assets/homepage/recs/65815130538014.jpg",
      },
    ],
    trands: [
      "#2021",
      "#spring",
      "#collection",
      "#fall",
      "#dress",
      "#autumncollection",
      "#openfashion",
    ],
    brands: [
      {
        id: 1,
        name: "Prada",
        image: "/assets/homepage/brands/Prada.png",
      },
      {
        id: 2,
        name: "Burberry",
        image: "/assets/homepage/brands/Burberry.png",
      },
      {
        id: 3,
        name: "Boss",
        image: "/assets/homepage/brands/Boss.png",
      },
      {
        id: 4,
        name: "Cartier",
        image: "/assets/homepage/brands/Cartier.png",
      },
      {
        id: 5,
        name: "Gucci",
        image: "/assets/homepage/brands/Gucci.png",
      },
      {
        id: 6,
        name: "Tiffany",
        image: "/assets/homepage/brands/Tiffany.png",
      },
    ],
    links: [
      {
        id: 1,
        image: "/assets/homepage/follow/first.jpg",
        path: "@mia",
      },
      {
        id: 2,
        image: "/assets/homepage/follow/second.jpg",
        path: "@_jihyn",
      },
      {
        id: 3,
        image: "/assets/homepage/follow/third.jpg",
        path: "@mia",
      },
      {
        id: 4,
        image: "/assets/homepage/follow/fourth.jpg",
        path: "@_jihyn",
      },
    ],
    advantages: [
      {
        id: 1,
        image: "/assets/homepage/advantages/Fast-shipping.png",
        description: "Быстрая доставка. Бесплатно при заказе от $25.",
      },
      {
        id: 2,
        image: "/assets/homepage/advantages/Sustainable.png",
        description: "Устойчивый процесс от начала до конца.",
      },
      {
        id: 3,
        image: "/assets/homepage/advantages/Unique-design.png",
        description: "Уникальный дизайн и высококачественные материалы.",
      },
      {
        id: 4,
        image: "/assets/homepage/advantages/Heart-crown.png",
        description: "Быстрая доставка. Бесплатно при заказе от $25.",
      },
    ],
  }),

});
