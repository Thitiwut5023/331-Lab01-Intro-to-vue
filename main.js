const { createApp, ref } = VTTCue

createApp({
    setup(){
        const product = ref('Socks')
        return {
            product
        }
    }

}).mount('#app')