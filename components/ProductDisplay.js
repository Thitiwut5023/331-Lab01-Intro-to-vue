const productDisplay = {
    template:    
        /*html*/
        `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" :class="{ outOfStockImage: !inStock }">
                </div>
            </div>
        </div>
        <div class="product-info">
            <h1><a :href="productLink">{{title}}</a></h1>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
            <p>shipping: {{shipping}}</p>
            <p v-else>Out of Stock</p>

            <product-details :details></product-details>

            <p v-if="onSale">On Sale</p>
            <p v-else>Not on Sale</p>

            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>

            <div v-for="(variant,index) in variants" :key="variant.id"
            @mouseover="updateVariant(index)"
                 class="color-circle" :style="{backgroundColor: variant.color}">

            </div>
            <div>
                <button class="button" :disabled='!inStock' @click="addToCart" :class="{disabledButton: !inStock}">Add to Cart</button>
                <buttonn class="button" @click="toggleStock">Toggle in Stock</buttonn>
            </div>
            <div class="sizes-container">
                <div v-for="size in sizes" :key="size.id">
                    {{size.color}}: {{size.size}}
                </div>
            </div>
        </div>
        `,
        props: {
            premium: Boolean,
            details: Array
        },
        setup(props, { emit }){
            const shipping = computed(()=>{
                if (props.premium){
                    return 'Free'
                }else {
                    return 30
                }
            })
            const product = ref('Socks')
            const brand = ref('SE 331')
            const description = ref('These are sturdy and comfortable boots suitable for all terrains.')
            const productLink = ref('https://www.camt.cmu.ac.th') 
            const inventory = ref(100)
            const onSale = ref(true)
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
                emit('add-to-card', variants.value[selectedVariant.value].id)
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
                variants,
                sizes,
                cart,
                addToCart,
                updateImage,
                toggleStock,
                shipping
            }
        }
}