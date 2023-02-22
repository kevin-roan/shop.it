function addToCart(proId) {
  $.ajax({
    url: "/add-to-cart/" + proId,
    method: "get",
    success: (response) => {
      if (response.status) {
        //retriving cart count from the html file,
        let count = $("#cart-count").html();
        //the retrived object is a string, so converting it to integer
        count = parseInt(count) + 1;
        // sending count to cart-count object
        $("#cart-count").html(count);
      }
    },
  });
}
function changeQuantity(cartId, proId, count) {
  // function changeQuantity(cartId,proId,count){
  let quantity = parseInt(document.getElementById(proId).innerHTML);
  console.log(quantity);
  count = parseInt(count);

  $.ajax({
    url: "/change-product-quantity",
    data: {
      cart: cartId,
      product: proId,
      count: count,
      quantity: quantity,
    },
    method: "post",
    success: (response) => {
      if (response.removeProduct) {
        alert("Product Removed from cart");
        location.reload();
      } else {
        document.getElementById(proId).innerHTML = quantity + count;
      }
    },
  });
}

function removeProduct(cartId, proId) {
  console.log("remove button pressed");
  $.ajax({
    url: "/remove-product",
    data: {
      cart: cartId,
      product: proId,
    },
    method: "post",
    success: (response) => {
      if (response.removeProduct) {
        alert("Product Removed from cart");
        location.reload();
      }
    },
  });
}
