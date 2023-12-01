class CartItem {
    constructor(p_id, p_name, p_price, p_img) {
        this.id = p_id;
        this.name = p_name;
        this.price = p_price;
        this.img = p_img;
        this.deleteFlag = false;
    }
}

let cartObj = {
    cartItems : [],
    addItem : function(p_id, p_name, p_price, p_img) {
        let obj = new CartItem(p_id, p_name, p_price, p_img);
        this.cartItems.push(obj);
    },
    deleteItem : function(p_id) {
        // fetch that object which we wants to delete
        let toDelete = this.cartItems.filter(function(obj) {
            return obj.id == p_id;
        });
        // now set deleteFlag = true of that object
        toDelete[0].deleteFlag = true;
        // now store only those element whose deleteFlag = false
        this.cartItems = this.cartItems.filter(function(obj) {
            return obj.deleteFlag == false;
        });
        console.log("Updated cart :",this.cartItems);
    },
    updateItem : function() {

    }
}