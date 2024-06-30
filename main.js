const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('These are sturdy and comfortable boots suitable for all terrains.') 
        return {
            product,
            description
        }
    }

}).mount('#app')