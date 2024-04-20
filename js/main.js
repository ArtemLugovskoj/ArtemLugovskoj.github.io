var app = new Vue({
    el: "#products",
    data: {
        products: [{ id: 1, title: "Kivi 1", short_text: 'Very sweet kiwi', image: '../img/kivi1.png', desc: "Kiwi is a round, green fruit that grows on tree-like vines. There is also a golden kiwi. China is considered to be the birthplace of the fruit. For this reason, kiwi is sometimes called Chinese gooseberry." },
        { id: 2, title: "Kivi 2", short_text: 'Very good kiwi', image: '../img/kivi2.png', desc: "Kiwi is a round, green fruit that grows on tree-like vines. There is also a golden kiwi. China is considered to be the birthplace of the fruit. For this reason, kiwi is sometimes called Chinese gooseberry." },
        { id: 3, title: "Kivi 3", short_text: 'Very green kiwi', image: '../img/kivi3.png', desc: "Kiwi is a round, green fruit that grows on tree-like vines. There is also a golden kiwi. China is considered to be the birthplace of the fruit. For this reason, kiwi is sometimes called Chinese gooseberry." },
        { id: 4, title: "Kivi 4", short_text: 'Very beautiful kiwi', image: '../img/kivi4.png', desc: "Kiwi is a round, green fruit that grows on tree-like vines. There is also a golden kiwi. China is considered to be the birthplace of the fruit. For this reason, kiwi is sometimes called Chinese gooseberry."},
        { id: 5, title: "Kivi 5", short_text: 'Very cool kiwi', image: '../img/kivi5.png', desc: "Kiwi is a round, green fruit that grows on tree-like vines. There is also a golden kiwi. China is considered to be the birthplace of the fruit. For this reason, kiwi is sometimes called Chinese gooseberry." }],
        btnVisible: 0,
        product: { }
        
    
    },
    mounted: function () {
        console.log(window.localStorage.getItem('prod'));
        this.getProduct();
        this.checkInCart();
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
        }
    }
});