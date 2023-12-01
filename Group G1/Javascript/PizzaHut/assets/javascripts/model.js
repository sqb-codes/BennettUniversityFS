// function as a constructor
// function CartItem(id, name, price, img) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.img = img;
// }

class CartItem {
    constructor(id, name, price, img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.selected = false;
    }
}

// first way to create object
let cartObj = {
    cartList : [],
    addItem : function(id, name, price, img) {
        let obj = new CartItem(id, name, price, img);
        this.cartList.push(obj);
        console.log(this.cartList);
    },
    deleteItem : function(p_id) {
        let toDelete = this.cartList.filter(function(x) {
            return x.id == p_id;
        });
        toDelete[0].selected = true;
        this.cartList = this.cartList.filter(function(x) {
            return x.selected == false;
        });

    },
    updateItem : function() {

    }
}