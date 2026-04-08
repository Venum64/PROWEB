const product = {
  crazy: {
    name: "Crazy",
    price: 31000,
    amount: 0,
    img: "./images/products/burger-1.png",
    get totalSumm() {
      return this.price * this.amount;
    },
  },
  light: {
    name: "Light",
    price: 26000,
    amount: 0,
    img: "./images/products/burger-2.png",
    get totalSumm() {
      return this.price * this.amount;
    },
  },
  cheeseburger: {
    name: "CheeseBurger",
    price: 29000,
    amount: 0,
    img: "./images/products/burger-3.png",
    get totalSumm() {
      return this.price * this.amount;
    },
  },
  dburger: {
    name: "dBurger",
    price: 24000,
    amount: 0,
    img: "./images/products/burger-4.png",
    get totalSumm() {
      return this.price * this.amount;
    },
  },
};

console.log(product);

const productBtns = document.querySelectorAll(".wrapper__list-card_bottom-btn"),
  basketBtn = document.querySelector(".wrapper__navbar-btn"),
  basketModal = document.querySelector(".wrapper__navbar-basket"),
  closeBasketModal = document.querySelector(".wrapper__navbar-basket_close"),
  basketBtnCount = document.querySelector(".wrapper__navbar-count"),
  basketOrderBtn = document.querySelector(".wrapper__navbar-basket_bottom"),
  basketCheckList = document.querySelector(".wrapper__navbar-basket_checklist"),
  basketTotalPrice = document.querySelector(
    ".wrapper__navbar-basket_bottom-totalprice"
  );

productBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    plusBurger(btn);
  });
});

// element.closest(селектор) - обращается к ближайшему родителю

function plusBurger(btn) {
  let parent = btn.closest(".wrapper__list-card"),
    parentId = parent.getAttribute("id");

  product[parentId].amount++;

  console.log(product[parentId].amount);
  console.log(product);
  basket();
}
function basket() {
  const productArray = [];
  for (const key in product) {
    const po = product[key];
    const productCard = document.querySelector(`#${po.name.toLowerCase()}`);
    const parentIndicator = productCard.querySelector(
      ".wrapper__list-card_count"
    );
    if (po.amount) {
      productArray.push(po);
      parentIndicator.classList.add("active");
      parentIndicator.innerHTML = po.amount;
    } else {
      parentIndicator.classList.remove("active");
      parentIndicator.innerHTML = 0;
    }
  }
  const allCount = totalAmountBasket();
  console.log(allCount);
  if (allCount) {
    basketBtnCount.classList.add("active");
  } else {
    basketBtnCount.classList.remove("active");
  }
  basketBtnCount.innerHTML = allCount;
  basketTotalPrice.innerHTML = totalSummBasket() + " сум";
  basketCheckList.innerHTML = "";
  productArray.forEach((product) => {
    basketCheckList.innerHTML += cartAddItem(product);
  });
}

function totalSummBasket() {
  let total = 0;
  for (const key in product) {
    total += product[key].totalSumm;
  }
  return total.toLocaleString();
}
function totalAmountBasket() {
  let total = 0;
  for (const key in product) {
    total += product[key].amount;
  }
  return total;
}

basketBtn.addEventListener("click", () => {
  basketModal.classList.add("active");
});

closeBasketModal.addEventListener("click", () => {
  basketModal.classList.remove("active");
});

function cartAddItem(product) {
  const { img, name, totalSumm: price, amount } = product;
  return `
  <div class="wrapper__navbar-product">
    <div class="wrapper__navbar-product_info">
      <img
        class="wrapper__navbar-product_info-img"
        src="${img}"
        alt=""
      />
      <div class="wrapper__navbar-product_info-sub">
        <p class="wrapper__navbar-product_info-sub_name">${name}</p>
        <p class="wrapper__navbar-product_info-sub_price">${price.toLocaleString()} сум</p>
      </div>
      <div class="wrapper__navbar-product_option" id='${name.toLowerCase()}_card'>
        <button
          class="wrapper__navbar-product_option-symbol fa-minus"
          data-symbol="-"
        >
         -
        </button>
        <output
          class="wrapper__navbar-product_option-count"
          >${amount}
          </output>
        <button
          class="wrapper__navbar-product_option-symbol fa-plus"
          data-symbol="+"
        >   
          +
        </button>
    </div>
  </div>
  `;
}

window.addEventListener("click", (event) => {
  const btn = event.target;
  if (btn.classList.contains("wrapper__navbar-product_option-symbol")) {
    const attr = btn.getAttribute("data-symbol"),
      parent = btn.closest(".wrapper__navbar-product_option");
    if (parent) {
      const idProduct = parent.getAttribute("id").split("_")[0];
      console.log(idProduct);
      if (attr == "-") product[idProduct].amount--;
      if (attr == "+") product[idProduct].amount++;
      basket();
    }
  }
});

