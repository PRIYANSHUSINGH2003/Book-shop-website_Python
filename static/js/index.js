let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

// ?????????????????????????????????????????????????????

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


let navbar = document.querySelector('.header-2');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
// ???????????????????????????????????????????????????????
window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  // fadeOut();

}

// function loader(){
//   document.querySelector('.loader-container').classList.add('active');
// }

// function fadeOut(){
//   setTimeout(loader, 4000);
// }

var swiper = new Swiper(".books-slider", {
  loop: true,
  centeredSlides: true,
  autoplay:{
    delay:9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    "0": {
      slidesPerView: 1,
    },
    "768": {
      slidesPerView: 2,
    },
    "1024": {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//////////////////////////////////////////////////
let addToCartButtons = document.getElementsByClassName('btn-card')
let cartContainer = document.getElementsByClassName('cart-items-container')[0]
let quantityFields = document.getElementsByClassName('num1')
let delete_buttons = document.getElementsByClassName('fas fa-times')

// picking up all the Add-To-Cart buttons
for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener('click', addToCart)
    
}
// This function helps to add items to our cart
function addToCart(event){

    
    let itemContainer = document.createElement('tc')
    let btn = event.target
    let btnGrandParent = btn.parentElement.parentElement
    let btnParent = btn.parentElement
    let itemImage = btnParent.children[0].src
    let itemName8 = btnParent.children[1].innerText
    let itemPrice = btnParent.children[2].innerText
    
    // console.log(itemPrice)
    itemContainer.innerHTML = `
                    <div class="cart-item">
                        <span class="fas fa-times"></span>
                        <img src="${itemImage}" alt="">
                        <div class="content">
                            <h3>${itemName8}</h3>
                            <div class="price">${itemPrice}</div>
                            <input type="number" value="1" id="cart-quantity" class="num1">
                        </div>
                    </div>
                    <div class="total">
                        <div class="total-title">Total</div>
                        <div class="total-price"><h4>${itemPrice}</h4></div>
                    </div>
                    <a href="#" class="btn">Buy Now</a>
</div>
`

    cartContainer.append(itemContainer)
    // Accessing individual quantity fields
    for (let i = 0; i < quantityFields.length; i++) {
        quantityFields[i].value = 1
        quantityFields[i].addEventListener('change', totalCost1)
    }
    // Accessing individual quantity fields
    for (let i = 0; i < delete_buttons.length; i++) {
        delete_buttons[i].addEventListener('click', removeItem)
    }
    grandTotal()
}
// This function helps to multiply the quantity and the price
function totalCost1(event) {
    let quantity = event.target
    quantity_parent = quantity.parentElement.parentElement.parentElement
    price_field = quantity_parent.getElementsByClassName('price')[0]
    total_field = quantity_parent.getElementsByClassName('total-price')[0]
    // price_field_content = total_field.children[0].innerText
    // console.log(price_field_content)
    price_field_content = price_field.innerText.replace('Rs', '')
    total_field.children[0].innerText = 'Rs' + quantity.value * price_field_content
    grandTotal()
    if (isNaN(quantity.value) || quantity.value <= 0) {
        quantity.value = 1
    }
}

// // This function helps to add up the total of the items
function grandTotal() {
    let total = 0
    let grand_total = document.getElementsByClassName('total-Amount')[0]
    let all_total_fields = document.getElementsByClassName('total-price')
    for (let i = 0; i < all_total_fields.length; i++) {
        all_prices = Number(all_total_fields[i].innerText.replace('Rs', ''))
        total += all_prices
    }
    // console.log(total)
    grand_total.innerText = "Rs" + total
    grand_total.style.fontWeight = 'bold'
    console.log(grand_total)
}
function removeItem(event) {
    del_btn = event.target
    del_btn_parent = del_btn.parentElement.parentElement
    del_btn_parent.remove()
    console.log(del_btn)
    grandTotal()
}
// //////////////////////////////////////////
// let count = 0;
// let counter = document.getElementById('counter');
// document.getElementById('btn-card').addEventListener('click',event =>{
//     const cl = counter.classList;
//     const c = 'animation-counter';
//     count++;

//     counter.innerText = count;
//     cl.remove(c, cl.contains(c));
//     setTimeout(() =>
//         counter.classList.add('animation-counter'),1)
// })
// document.getElementById('btn-card1').addEventListener('click',event =>{
//     const cl = counter.classList;
//     const c = 'animation-counter';
//     count++;

//     counter.innerText = count;
//     cl.remove(c, cl.contains(c));
//     setTimeout(() =>
//         counter.classList.add('animation-counter'),1)
// })
// document.getElementById('btn-card2').addEventListener('click',event =>{
//     const cl = counter.classList;
//     const c = 'animation-counter';
//     count++;

//     counter.innerText = count;
//     cl.remove(c, cl.contains(c));
//     setTimeout(() =>
//         counter.classList.add('animation-counter'),1)
// })
// document.getElementById('btn-card3').addEventListener('click',event =>{
//     const cl = counter.classList;
//     const c = 'animation-counter';
//     count++;

//     counter.innerText = count;
//     cl.remove(c, cl.contains(c));
//     setTimeout(() =>
//         counter.classList.add('animation-counter'),1)
// })
// document.getElementById('btn-card4').addEventListener('click',event =>{
//     const cl = counter.classList;
//     const c = 'animation-counter';
//     count++;

//     counter.innerText = count;
//     cl.remove(c, cl.contains(c));
//     setTimeout(() =>
//         counter.classList.add('animation-counter'),1)
// })
// document.getElementById('btn-card5').addEventListener('click',event =>{
//     const cl = counter.classList;
//     const c = 'animation-counter';
//     count++;

//     counter.innerText = count;
//     cl.remove(c, cl.contains(c));
//     setTimeout(() =>
//         counter.classList.add('animation-counter'),1)
// })
////////////////////////////////////////////////

let popup = document.getElementById('popup');
function openPopup(){
    popup.classList.add('open-popup');
}
function closePopup(){
    popup.classList.remove('open-popup');
}
//// /////////////////////////////////////////////////////////////////////

