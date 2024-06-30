const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Socks')
        const description = ref('These are sturdy and comfortable boots suitable for all terrains.')
        const image = ref('./assets/images/socks_green.jpg')
        const productLink = ref('https://www.camt.cmu.ac.th') 
        const inStock = ref(false)
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: '/assets/images/socks_green.jpg'},
            { id: 2235, color: 'blue', image: '/assets/images/socks_blue.jpg'}
        ])
        const sizes = ref([
            { id: 2234, color: 'green', size: 'S'},
            { id: 2234, color: 'green', size: 'M'},
            { id: 2234, color: 'green', size: 'L'},
            { id: 2235, color: 'blue', size: 'S'},
            { id: 2235, color: 'blue', size: 'M'},
            { id: 2235, color: 'blue', size: 'L'}
        ])
        const cart = ref(0)
        function addToCart() {
            cart.value +=1
        }
        function updateImage(variantImage){
            image.value = variantImage
        }
        function toggleStock(){
            inStock.value = !inStock.value
        }
        return {
            product,
            description,
            image,
            productLink,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            toggleStock
        }
    }

}).mount('#app')