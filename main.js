const { createApp, ref, computed } = Vue

const app = createApp({
    setup(){
        const cart = ref([])
        const premium = ref(true)
        function updateCart(id) {
            cart.value.push(id)
        }
        const details = ref(["50% cotton", "30% wool", "20% polyester"])
        return {
            cart,
            premium,
            details,
            updateCart
        }
    }
})

app.component('product-details', productDetail)
    .component('product-display', productDisplay)
    .mount('#app')