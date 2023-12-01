window.addEventListener("load", initEvents);

function initEvents() {
    document.querySelector("#save").addEventListener("click", saveLocalStorage);
    loadProducts();
    loadLocalStorage();
}

function loadProducts() {
    let apple_list = document.querySelector("#apple_products");
    let samsung_list = document.querySelector("#samsung_products");
    productsArray.forEach(function(obj) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute("src", obj.p_image);
        img.className = "w-100";
        var h3 = document.createElement("h3");
        h3.innerText = obj.p_name;
        var btn = document.createElement("button");
        btn.className = "btn btn-primary w-100";
        btn.innerText = "Add to Cart";
        btn.setAttribute("data-bs-toggle","modal");
        btn.setAttribute("data-bs-target","#exampleModal");
        btn.setAttribute("title", obj.p_id);
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(btn);
        btn.addEventListener("click", addToCart);
        if(obj.p_brand == "Apple") {
            apple_list.appendChild(li);
        }
        else if(obj.p_brand == "Samsung") {
            samsung_list.appendChild(li);
        } 
    });
}

function addToCart() {
    let obj_id = this.title;
    let result = productsArray.filter(function(obj) {
        return obj.p_id == obj_id;
    });
    cartObj.addItem(obj_id, result[0].p_name, result[0].p_price, result[0].p_image);
    showCartItems();
}

function showCartItems() {
    let cart_list = document.querySelector("#cart-list");
    cart_list.innerHTML = "";
    cartObj.cartItems.forEach(function(obj) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute("src", obj.img);
        var h5 = document.createElement("h5");
        h5.innerText = obj.name;
        var btn = document.createElement("button");
        btn.className = "btn btn-primary";
        btn.innerText = "Delete";
        btn.setAttribute("title", obj.id);
        btn.addEventListener("click", deleteFromCart);
        li.appendChild(img);
        li.appendChild(h5);
        li.appendChild(btn);
        cart_list.appendChild(li);
    });
}

function deleteFromCart() {
    cartObj.deleteItem(this.title);
    showCartItems();
}

function saveLocalStorage() {
    let cartItems = JSON.stringify(cartObj.cartItems);
    localStorage.setItem("cart", cartItems);
}

function loadLocalStorage() {
    cartObj.cartItems = JSON.parse(localStorage.getItem("cart"));
    showCartItems();
}