var app = new Vue({
    el: "#products",
    data: {
        products: [{ id: 1, title: "Kivi 1", short_text: 'Very sweet kiwi', image: '../img/kivi1.png', desc: "Try our exotic kiwi fruit varieties - now available with free shipping." },
        { id: 2, title: "Kivi 2", short_text: 'Very good kiwi', image: '../img/kivi2.png', desc: "Bulk discount: Save 30% when you buy five kilograms of kiwi fruit." },
        { id: 3, title: "Kivi 3", short_text: 'Very green kiwi', image: '../img/kivi3.png', desc: "Get a free recipe book with every purchase of kiwi fruit." },
        { id: 4, title: "Kivi 4", short_text: 'Very beautiful kiwi', image: '../img/kivi4.png', desc: "20% off on organic kiwi fruit for a limited time."},
        { id: 5, title: "Kivi 5", short_text: 'Very cool kiwi', image: '../img/kivi5.png', desc: "Buy one dozen kiwi fruit, get one dozen free!" }],
        btnVisible: 0,
        product: { },
        cart: [],
        contactFields: [],
        orderSubmitted: false
    },
    mounted: function () {
        console.log(window.localStorage.getItem('prod'));
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    



    methods: {
        addItem: function (id) {
            window.localStorage.setItem('prod', id);
        },

        addToCart: function (id) {
            var cart = [];
            if (window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }
            if (cart.indexOf(String(id)) == -1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible = 1;
            }
        },
        getProduct: function () {
            if(window.location.hash) {
                var id = window.location.hash.replace('#', '');
                if (this.products && this.products.length > 0) {
                    for (i in this.products) {
                        if (this.products[i] && this.products[i].id && id == this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        },
        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf (String (this.product.id))!=-1) this.btnVisible=1;
        },

        getCart: function () {
            var cartIds = [];
            if (window.localStorage.getItem('cart')) {
                cartIds = window.localStorage.getItem('cart').split(',');
            }
            for (i in this.products) {
                if (this.products[i] && this.products[i].id && cartIds.includes(String(this.products[i].id) )) this.cart.push(this.products[i]);
            }

        },
        removeFromCart: function (id) {
            var cart = [];
            if (window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }
            var index = cart.indexOf(String(id));
            if (index > -1) {
                cart.splice(index, 1);
                window.localStorage.setItem('cart', cart.join());
                this.cart = [];
                this.getCart();
            }
        },
        makeOrder: function () {
            this.cart = [];
            localStorage.removeItem('cart');
            this.orderSubmitted = true;
          }
    }
});