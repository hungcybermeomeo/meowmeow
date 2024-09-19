function inputCart(c) {
    let price = document.getElementById("price-sp" + c).innerHTML;
    let name = document.getElementById("name-sp" + c).innerHTML;
    let image = document.getElementById("img-sp" + c).src;
  
    let cartItems = document.getElementsByClassName('output-product');
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].querySelector('.output-name').innerHTML === name) {
            let quantityInput = cartItems[i].querySelector('.input-qty');
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateCartTotal();
            var notification = document.querySelector('.notification');
            notification.innerHTML ='Đã thêm sản phẩm vào giỏ hàng';
            notification.classList.add('show');
            setTimeout(function() {
              notification.classList.remove('show');
            }, 3000);
            return;
        }
    }

    let newProduct = document.createElement("div");
    newProduct.classList.add("cart-row");
    newProduct.classList.add("output-product");
  
    let productImg = document.createElement("div");
    productImg.classList.add("cart-column");
    productImg.classList.add("output-img");
    productImg.innerHTML = "<img src='" + image + "' class='product-image'>";
  
    let productName = document.createElement("div");
    productName.classList.add("cart-column");
    productName.classList.add("output-name");
    productName.innerHTML = name;
  
    let productPrice = document.createElement("div");
    productPrice.classList.add("cart-column");
    productPrice.classList.add("output-price");
    productPrice.setAttribute("data-price", parseFloat(price));
    productPrice.innerHTML = "Giá: " + price;
  
    let productQuantity = document.createElement("div");
    productQuantity.classList.add("cart-column");
    productQuantity.classList.add("output-quantity");
    let quantityDiv = document.createElement("div");
    quantityDiv.classList.add("cart-quantity");
    let quantityInput = document.createElement("input");
    quantityInput.setAttribute("id", "quantity");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("value", "1");
    quantityInput.setAttribute("min", "1");
    quantityInput.setAttribute("max", "10");
    quantityInput.classList.add("input-qty");
    quantityInput.addEventListener("change", updateCartTotal);
    
    let minusBtn = document.createElement("button");
    minusBtn.classList.add("quantity-btn");
    minusBtn.classList.add("minus");
    minusBtn.innerHTML = "-";
    minusBtn.addEventListener("click", function() {
      if (quantityInput.value > 1) {
        quantityInput.value--;
        updateCartTotal();
      }
    });
    let plusBtn = document.createElement("button");
    plusBtn.classList.add("quantity-btn");
    plusBtn.classList.add("plus");
    plusBtn.innerHTML = "+";
    plusBtn.addEventListener("click", function() {
      if (quantityInput.value < 10) {
        quantityInput.value++;
        updateCartTotal();
      }
    });
    quantityDiv.appendChild(minusBtn);
    quantityDiv.appendChild(quantityInput);
    quantityDiv.appendChild(plusBtn);
    productQuantity.appendChild(quantityDiv);  
    let productTotal = document.createElement("div");
    productTotal.classList.add("cart-column");
    productTotal.classList.add("output-total");
    productTotal.innerHTML = "Tổng tiền: " + parseFloat(price) + ".000đ";
  
    let removeButton = document.createElement("div");
    removeButton.classList.add("cart-column");
    removeButton.classList.add("output-del");
    removeButton.innerHTML = "<button class='remove-btn' onclick='updateCartTotal()'>Xóa</button>";
  
    newProduct.appendChild(productImg);
    newProduct.appendChild(productName);
    newProduct.appendChild(productPrice);
    newProduct.appendChild(productQuantity);
    newProduct.appendChild(productTotal);
    newProduct.appendChild(removeButton);
    let cart = document.querySelector(".input-cart");
    cart.appendChild(newProduct);
    updateCartTotal()
    let removeBtn = newProduct.querySelector(".remove-btn");
    removeBtn.addEventListener("click", function() {
      newProduct.remove();
      updateCartTotal();
    });
      // Lấy đối tượng thông báo
    var notification = document.querySelector('.notification');
    notification.innerHTML ='Đã thêm sản phẩm vào giỏ hàng';
    // Thêm lớp "show" để hiển thị thông báo
    notification.classList.add('show');
    // Đặt thời gian ẩn thông báo
    setTimeout(function() {
      notification.classList.remove('show');
    }, 3000);
    
  }
  function updateCartTotal() {
    let cartItemContainer = document.querySelector(".input-cart");
    let cartRows = cartItemContainer.querySelectorAll(".output-product");
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
      let cartRow = cartRows[i];
      let price = parseFloat(cartRow.querySelector(".output-price").textContent.split(" ")[1].replace(",", ""));
      let quantity = cartRow.querySelector(".input-qty").value;
      let productTotal = parseFloat(price) * quantity;
      cartRow.querySelector(".output-total").innerHTML = "Tổng tiền: " + productTotal.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "đ";
      total += productTotal;
    }
    document.querySelector(".cart-total-price").innerHTML =  total.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "đ";
  }

