window.addEventListener("load", initEvents);

function initEvents() {
    loadProducts();
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
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(btn);
        if(obj.p_brand == "Apple") {
            apple_list.appendChild(li);
        }
        else if(obj.p_brand == "Samsung") {
            samsung_list.appendChild(li);
        }
        
    })
}