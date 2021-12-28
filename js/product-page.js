const quantity = document.querySelector("#quantity");

const totalPrice = document.querySelector(".price");


quantity.onchange = function() {

  const value = quantity.value;
  
  const total = value * 52;
  
  totalPrice.innerHTML = `$${total}`;
};