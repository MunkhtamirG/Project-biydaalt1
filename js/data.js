let foods = [
  {
    name: "Зайрмаг",
    price: 6800,
    pic: "images/sale/unsplash_TLD6iCOlyb0.png",
    discount: 30,
    category: "Хямдралтай",
  },
  {
    name: "Панкейк",
    price: 6800,
    pic: "images/sale/unsplash_eeqbbemH9-c.png",
    discount: 20,
    category: "Хямдралтай",
  },
  {
    name: "Өглөөний хоол",
    price: 6800,
    pic: "images/sale/sale/unsplash_fdlZBWIP0aM.svg",
    discount: 20,
    category: "Хямдралтай",
  },
  {
    name: "Банана сендвич",
    price: 6800,
    pic: "images/sale/pic.png",
    discount: 20,
    category: "Хямдралтай",
  },
  {
    name: "Салмон загас",
    price: 11800,
    pic: "images/main/unsplash_awj7sRviVXo.png",
    discount: 0,
    category: "Үндсэн хоол",
  },
  {
    name: "Бөөрөнхий мах",
    price: 14000,
    pic: "images/main/unsplash_oaz0raysASk.png",
    discount: 0,
    category: "Үндсэн хоол",
  },
  {
    name: "Самрын нухаш",
    price: 9800,
    pic: "images/main/unsplash_pLKgCsBOiw4.png",
    discount: 0,
    category: "Үндсэн хоол",
  },
  {
    name: "Чикен бургер",
    price: 14000,
    pic: "images/main/unsplash_OFismyezPnY.png",
    discount: 0,
    category: "Үндсэн хоол",
  },
  {
    name: "Детокс салад",
    price: 6800,
    pic: "images/salad/1.png",
    discount: 0,
    category: "Салад ба зууш",
  },
  {
    name: "Кобб салад",
    price: 6800,
    pic: "images/salad/2.png",
    discount: 0,
    category: "Салад ба зууш",
  },
  {
    name: "Авокадо салад",
    price: 6800,
    pic: "images/salad/3.png",
    discount: 0,
    category: "Салад ба зууш",
  },
  {
    name: "Сендвич",
    price: 4800,
    pic: "images/salad/4.png",
    discount: 0,
    category: "Салад ба зууш",
  },
  {
    name: "Донатс",
    price: 5800,
    pic: "images/desert/unsplash_q54Oxq44MZs.png",
    discount: 0,
    category: "Амттан",
  },
  {
    name: "Орео дессерт",
    price: 7800,
    pic: "images/desert/unsplash_cLpdEA23Z44.png",
    discount: 0,
    category: "Амттан",
  },
  {
    name: "Вафли",
    price: 5800,
    pic: "images/desert/unsplash_jABXuTS1azc.png",
    discount: 0,
    category: "Амттан",
  },
  {
    name: "Макарон",
    price: 3800,
    pic: "images/desert/unsplash_WbZesfqwR-A.png",
    discount: 0,
    category: "Амттан",
  },
];

let discounts = foods.filter((i) => i.category == "Хямдралтай");
let mainfood = foods.filter((i) => i.category == "Үндсэн хоол");
let saladAnd = foods.filter((i) => i.category == "Салад ба зууш");
let dessert = foods.filter((i) => i.category == "Амттан");

const createFoods = (arr, container) => {
  let html = document.querySelector(container);
  for (i = 0; i < arr.length; i++) {
    if (arr[i].discount > 0) {
      let dissPrice = arr[i].price - (arr[i].price * arr[i].discount) / 100;
      let card = `<div class="card p-0 m-2 w-100">
    <div class="mealpic p-3"><img src=${arr[i].pic} alt="" class="w-100" /><p class='percent p-1 px-2'>${arr[i].discount}%</p></div>
    <div class="des px-3"><p class="title m-0">${arr[i].name}</p><div class="price d-flex">
    <p class="me-2">${dissPrice}₮</p><p class="oldprice">${arr[i].price}₮</p>
  </div></div><div
  type="button"
  class="btn busketicon d-flex flex-column align-items-center justify-content-center p-0"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
  >
  <img src="images/basket_icon.png" alt="" class="basketicon" />
  <p class="text-light">Сагслах</p>
  </div>
  </div>`;
      html.innerHTML += card;
    } else {
      let card = `<div class="card p-0 m-2 w-100">
    <div class="mealpic p-3"><img src=${arr[i].pic} alt="" class="w-100" /></div>
    <div class="des px-3"><p class="title m-0">${arr[i].name}</p><div class="price d-flex">
    <p class="me-2">${arr[i].price}₮</p>
  </div></div><div
  type="button"
  class="btn busketicon d-flex flex-column align-items-center justify-content-center p-0"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
  >
  <img src="images/basket_icon.png" alt="" class="basketicon" />
  <p class="text-light">Сагслах</p>
  </div>
  </div>`;
      html.innerHTML += card;
    }
  }
};
createFoods(discounts, "#discountRow");
createFoods(mainfood, "#mainRow");
createFoods(saladAnd, "#saladRow");
createFoods(dessert, "#dessertRow");
