
let obj = {
    data(){
        return {
            iscartvisible : false ,
            products : products ,
            allProduct : null ,
            fullText : false ,
            search : '', 
            cart : [] , 
        }
    } ,
    methods : {
        addToCart(pro){

            let exists = this.cart.some( item => {
                return pro.id == item.product.id
            })

            if (exists) {
               
                this.cart.find(item => {
                    return pro.id == item.product.id
                }).quantity++ 
            } else {
                
                this.cart.push({
                    product : pro ,
                    quantity : 1 
                })
            }

            pro.stock--
        } ,

        deleteFromCart(delItem , index){
            this.cart.splice(index , 1);

           
            this.products.find( pro => {
                return pro.id == delItem.product.id
            }).stock += delItem.quantity
        } ,

        searchPro(){
            this.allProduct = this.products.filter( pro => {
                return pro.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },

    mounted(){
        this.allProduct = this.products
    }
}

Vue.createApp(obj).mount('#app');
