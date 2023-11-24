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
        
    })
}