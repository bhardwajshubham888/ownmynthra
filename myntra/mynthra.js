var slide = document.getElementsByClassName("slide");
var indicator = document.getElementById("indicator");
var dots = document.getElementsByClassName("dots");
var autoplay = document
  .getElementsByClassName("container")[0]
  .getAttribute("data-autoplay");
var l = slide.length;
var interval = 5000;
var set;

window.onload = function () {
  initialize();
  slide[0].style.opacity = "1";
  for (var j = 0; j < l; j++) {
    indicator.innerHTML += "<div class='dots' onclick=change(" + j + ")></div>";
  }

  dots[0].style.background = "#696969";
};

function initialize() {
  if (autoplay === "true")
    set = setInterval(function () {
      next();
    }, interval);
}

function change(index) {
  clearInterval(set);
  count = index;
  for (var j = 0; j < l; j++) {
    slide[j].style.opacity = "0";
    dots[j].style.background = "#bdbdbd";
  }
  slide[count].style.opacity = "1";
  dots[count].style.background = "#696969";
}

var count = 0;
function next() {
  clearInterval(set);
  slide[count].style.opacity = "0";
  count++;
  for (var j = 0; j < l; j++) {
    dots[j].style.background = "#bdbdbd";
  }

  if (count == l) {
    count = 0;
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  } else {
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  }
  initialize();
}

function prev() {
  clearInterval(set);
  slide[count].style.opacity = "0";
  for (var j = 0; j < l; j++) {
    dots[j].style.background = "#bdbdbd";
  }
  count--;

  if (count == -1) {
    count = l - 1;
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  } else {
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  }
  initialize();
}

$(document).ready(function () {
  $("#itemslider").carousel({ interval: 3000 });

  $(".carousel-showmanymoveone .item").each(function () {
    var itemToClone = $(this);

    for (var i = 1; i < 6; i++) {
      itemToClone = itemToClone.next();

      if (!itemToClone.length) {
        itemToClone = $(this).siblings(":first");
      }

      itemToClone
        .children(":first-child")
        .clone()
        .addClass("cloneditem-" + i)
        .appendTo($(this));
    }
  });
});

let procard = document.getElementById("pro-card");
const cont=document.getElementById('containerpro');

async function GetData() {
  const res = await fetch('https://dummyjson.com/products');
  const userdata = await res.json();
  const user = userdata.products;
  bindData(user);
  console.log(user);
}

function bindData(user) {
  user.forEach((users) => {
    const usercard = procard.cloneNode(true);
    let cardimg = usercard.querySelector("#card-img");
    let cardtittle = usercard.querySelector("#pro-tittle");
    let cardprice = usercard.querySelector("#card-price");
    cardimg.src=users.images;
    cardprice.innerHTML=users.price;
    cardtittle.innerHTML=users.title;
    

    cont.appendChild(usercard);

  });
}

GetData();
