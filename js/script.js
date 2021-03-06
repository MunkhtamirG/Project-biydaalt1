const createFoods = (arr, container) => {
  let html = document.querySelector(container);
  arr.map((item) => {
    if (item.discount > 0) {
      let dissPrice = item.price - (item.price * item.discount) / 100;
      let card = `<div class="card p-0 m-2 w-100">
    <div class="mealpic p-3"><img src=${item.pic} alt="" class="w-100" /><p class='percent p-1 px-2'>${item.discount}%</p></div>
    <div class="des px-3"><p class="title m-0">${item.name}</p><div class="price d-flex">
    <p class="me-2">${dissPrice}₮</p><p class="oldprice">${item.price}₮</p>
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
    <div class="mealpic p-3"><img src=${item.pic} alt="" class="w-100" /></div>
    <div class="des px-3"><p class="title m-0">${item.name}</p><div class="price d-flex">
    <p class="me-2">${item.price}₮</p>
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
  });
};

const xhrFood = new XMLHttpRequest();
xhrFood.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let foods = JSON.parse(this.responseText);
    let discounts = foods.filter((i) => i.category == "Хямдралтай");
    let mainfood = foods.filter((i) => i.category == "Үндсэн хоол");
    let saladAnd = foods.filter((i) => i.category == "Салад ба зууш");
    let dessert = foods.filter((i) => i.category == "Амттан");
    createFoods(discounts, "#discountRow");
    createFoods(mainfood, "#mainRow");
    createFoods(saladAnd, "#saladRow");
    createFoods(dessert, "#dessertRow");
  }
};
xhrFood.open("GET", "js/data.json", true);
xhrFood.send();
