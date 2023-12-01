window.addEventListener("load", initEvents);

function initEvents() {
    loadProducts();
}

function loadProducts() {
    let pizzaList = document.querySelector("#pizzaList");
    let sideList = document.querySelector("#sideList");
    productsArray.forEach(function(obj) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute("src", obj.p_img);
        img.className = "w-100";
        var h4 = document.createElement("h4");
        h4.innerText = obj.p_name;
        var priceTag = document.createElement("p");
        priceTag.innerText = "Price : " + obj.p_price + "rs";
        var sizeTag = document.createElement("p");
        sizeTag.innerText = "Size : " + obj.p_size;
        var btn = document.createElement("button");
        btn.innerText = "Add to cart";
        btn.className = "btn btn-primary w-100";
        btn.setAttribute("data-bs-toggle","modal");
        btn.setAttribute("data-bs-target", "#exampleModal");
        btn.setAttribute("title", obj.p_id);
        btn.addEventListener("click", addToCart);
        li.appendChild(img);
        li.appendChild(h4);
        li.appendChild(priceTag);
        li.appendChild(sizeTag);
        li.appendChild(btn);
        if(obj.p_category == "pizza") {
            pizzaList.appendChild(li);
        }

        else if(obj.p_category == "side") {
            sideList.appendChild(li);
        }
        
    });
}

function addToCart() {
    let obj_id = this.title;

    let cartItem = cartObj.cartList.filter(function(x) {
        return x.id == obj_id;
    })
    if(cartItem.length != 0) {
        alert("Product already exists in Cart...");
    }
    else {
        let resultArray = productsArray.filter(function(obj) {
            return obj.p_id == obj_id;
        });
        cartObj.addItem(resultArray[0].p_id, resultArray[0].p_name, resultArray[0].p_price, resultArray[0].p_img);
        showCart();
    }
}

function showCart() {
    let cartList = document.querySelector("#cartList");
    cartList.innerHTML = "";
    cartObj.cartList.forEach(function(obj) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute("src", obj.img);
        var h5 = document.createElement("h5");
        h5.innerText = obj.name;
        var priceTag = document.createElement("p");
        priceTag.innerText = "Price : " + obj.price + "rs";
        var btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.className = "btn btn-primary";
        btn.setAttribute("title", obj.id);
        btn.addEventListener("click", deleteFromCart);
        li.appendChild(img);
        li.appendChild(h5);
        li.appendChild(priceTag);
        li.appendChild(btn);
        cartList.appendChild(li);
    });
}

function deleteFromCart() {
    let obj_id = this.title;
    cartObj.deleteItem(obj_id);
    showCart();
}