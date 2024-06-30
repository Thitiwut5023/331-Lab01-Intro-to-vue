const { createApp, ref, computed } = Vue

createApp({
    setup(){
        const product = ref('Socks')
        const brand = ref('SE 331')
        const description = ref('These are sturdy and comfortable boots suitable for all terrains.')
        const productLink = ref('https://www.camt.cmu.ac.th') 
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: '/assets/images/socks_green.jpg', quantity:50, onSale: true},
            { id: 2235, color: 'blue', image: '/assets/images/socks_blue.jpg', quantity:0, onSale: false}
        ])
        const selectedVariant = ref(0)
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
        const title = computed(() =>{
            const variant = variants.value[selectedVariant.value]
            return brand.value + ' ' + product.value + ' ' + (variant.onSale ? 'is on sale' : 'not on sale')
        })
        function updateImage(variantImage){
            image.value = variantImage
        }
        function toggleStock(){
            inStock.value = !inStock.value
        }
        function updateVariant(index){
            selectedVariant.value = index;
        }
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        return {
            title,
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