const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Socks')
        const description = ref('These are sturdy and comfortable boots suitable for all terrains.')
        const image = ref('./assets/images/socks_green.jpg') 
        return {
            product,
            description,
            image
        }
    }

}).mount('#app')