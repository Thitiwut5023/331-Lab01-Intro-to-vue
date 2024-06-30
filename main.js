const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Socks')
        const description = ref('These are sturdy and comfortable boots suitable for all terrains.')
        const image = ref('./assets/images/socks_green.jpg')
        const productLink = ref('https://www.camt.cmu.ac.th') 
        const inStock = ref(false)
        return {
            product,
            description,
            image,
            productLink,
            inStock
        }
    }

}).mount('#app')