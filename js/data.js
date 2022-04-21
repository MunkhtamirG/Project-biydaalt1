let foods = [
  {
    name: "Зайрмаг",
    price: "4,760₮",
    salePrice: "6,800₮",
    pic: "images/sale/unsplash_TLD6iCOlyb0.png",
    discount: "20%",
    category: "Хямдралтай",
  },
  {
    name: "Панкейк",
    price: "4,800₮",
    salePrice: "6,800₮",
    pic: "images/sale/unsplash_eeqbbemH9-c.png",
    discount: "20%",
    category: "Хямдралтай",
  },
  {
    name: "Өглөөний хоол",
    price: "4,800₮",
    salePrice: "6,800₮",
    pic: "images/sale/sale/unsplash_fdlZBWIP0aM.svg",
    discount: "20%",
    category: "Хямдралтай",
  },
  {
    name: "Банана сендвич",
    price: "4,800₮",
    salePrice: "6,800₮",
    pic: "images/sale/pic.png",
    discount: "20%",
    category: "Хямдралтай",
  },
  {
    name: "Салмон загас",
    price: "11,800₮",
    salePrice: "",
    pic: "images/main/unsplash_awj7sRviVXo.png",
    category: "Үндсэн хоол",
  },
  {
    name: "Бөөрөнхий мах",
    price: "14,000₮",
    salePrice: "",
    pic: "images/main/unsplash_oaz0raysASk.png",
    category: "Үндсэн хоол",
  },
  {
    name: "Самрын нухаш",
    price: "9,800₮",
    salePrice: "",
    pic: "images/main/unsplash_pLKgCsBOiw4.png",
    category: "Үндсэн хоол",
  },
  {
    name: "Чикен бургер",
    price: "14,000₮",
    salePrice: "",
    pic: "images/main/unsplash_OFismyezPnY.png",
    category: "Үндсэн хоол",
  },
  {
    name: "Детокс салад",
    price: "6,800₮",
    salePrice: "",
    pic: "images/salad/1.png",
    category: "Салад ба зууш",
  },
  {
    name: "Кобб салад",
    price: "6,800₮",
    salePrice: "",
    pic: "images/salad/2.png",
    category: "Салад ба зууш",
  },
  {
    name: "Авокадо салад",
    price: "6,800₮",
    salePrice: "",
    pic: "images/salad/3.png",
    category: "Салад ба зууш",
  },
  {
    name: "Сендвич",
    price: "4,800₮",
    salePrice: "",
    pic: "images/salad/4.png",
    category: "Салад ба зууш",
  },
  {
    name: "Донатс",
    price: "5,800₮",
    salePrice: "",
    pic: "images/desert/unsplash_q54Oxq44MZs.png",
    category: "Амттан",
  },
  {
    name: "Орео дессерт",
    price: "7,800₮",
    salePrice: "",
    pic: "images/desert/unsplash_cLpdEA23Z44.png",
    category: "Амттан",
  },
  {
    name: "Вафли",
    price: "5,800₮",
    salePrice: "",
    pic: "images/desert/unsplash_jABXuTS1azc.png",
    category: "Амттан",
  },
  {
    name: "Макарон",
    price: "3,800₮",
    salePrice: "",
    pic: "images/desert/unsplash_WbZesfqwR-A.png",
    category: "Амттан",
  },
];

let mealPic = document.getElementsByClassName("mealpic");
let mealText = document.getElementsByClassName("des");
let card = document.getElementsByClassName("card");

for (i = 0; i < mealPic.length; i++) {
  mealPic[i].innerHTML += `<img src=${foods[i].pic} alt="" class="w-100" />`;
  if (foods[i].category == "Хямдралтай") {
    mealPic[
      i
    ].innerHTML += `<p class="percent px-2 py-1 text-center">${foods[i].discount}</p>`;
  }
  mealText[
    i
  ].innerHTML = `<p class="title m-0">${foods[i].name}</p><div class="price d-flex">
  <p class="me-2">${foods[i].price}</p><p class="oldprice">${foods[i].salePrice}</p>
</div>`;
  card[i].innerHTML += `<div
type="button"
class="btn busketicon d-flex flex-column align-items-center justify-content-center p-0"
data-bs-toggle="modal"
data-bs-target="#staticBackdrop"
>
<img src="images/basket_icon.png" alt="" class="basketicon" />
<p class="text-light">Сагслах</p>
</div>`;
}
let some = foods[1].category == "Хямдралтай";
console.log(some);
