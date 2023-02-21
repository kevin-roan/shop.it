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
