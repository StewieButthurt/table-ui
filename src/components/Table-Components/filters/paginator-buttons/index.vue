<!-- компонент содержащий пагинацию для управлением таблицей -->
<template>
    <div class="filters__paginator-container">
        <div class="filters__paginator-button filters__paginator-button-left"
            :class="{'filters__paginator-button-disabled' : leftButtonDisabled}"
            @click="counterDecrement()"
        >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 490.523 490.523" style="enable-background:new 0 0 490.523 490.523;" xml:space="preserve">
            <path d="M487.411,355.047L252.744,120.38c-4.165-4.164-10.917-4.164-15.083,0L2.994,355.047
                c-4.093,4.237-3.976,10.99,0.262,15.083c4.134,3.993,10.687,3.993,14.821,0l227.115-227.115l227.115,227.136
                c4.237,4.093,10.99,3.976,15.083-0.261c3.993-4.134,3.993-10.688,0-14.821L487.411,355.047z"/>
            <path d="M479.859,373.266c-2.831,0.005-5.548-1.115-7.552-3.115L245.192,143.015L18.077,370.151
                c-4.237,4.093-10.99,3.976-15.083-0.262c-3.993-4.134-3.993-10.687,0-14.821l234.667-234.667c4.165-4.164,10.917-4.164,15.083,0
                l234.667,234.667c4.159,4.172,4.148,10.926-0.024,15.085C485.388,372.146,482.681,373.265,479.859,373.266z"/>
            </svg>
        </div>
        <div class="filters__paginator-button-text">
            {{start}} - {{end}} of {{all}}
        </div>
        <div class="filters__paginator-button filters__paginator-button-right"
            @click="counterIncrement()"
            :class="{'filters__paginator-button-disabled' : rightButtonDisabled}"  
        >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 490.523 490.523" style="enable-background:new 0 0 490.523 490.523;" xml:space="preserve">
            <path d="M487.411,355.047L252.744,120.38c-4.165-4.164-10.917-4.164-15.083,0L2.994,355.047
                c-4.093,4.237-3.976,10.99,0.262,15.083c4.134,3.993,10.687,3.993,14.821,0l227.115-227.115l227.115,227.136
                c4.237,4.093,10.99,3.976,15.083-0.261c3.993-4.134,3.993-10.688,0-14.821L487.411,355.047z"/>
            <path d="M479.859,373.266c-2.831,0.005-5.548-1.115-7.552-3.115L245.192,143.015L18.077,370.151
                c-4.237,4.093-10.99,3.976-15.083-0.262c-3.993-4.134-3.993-10.687,0-14.821l234.667-234.667c4.165-4.164,10.917-4.164,15.083,0
                l234.667,234.667c4.159,4.172,4.148,10.926-0.024,15.085C485.388,372.146,482.681,373.265,479.859,373.266z"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        async mounted() {
            // при монтировании страницы заполняем setEnd в store
            await this.$store.dispatch('paginator/setEnd', this.perPageValue)
        },
        computed: {
            // первый элемент массива с пагинацией
            start() {
                return this.$store.getters['paginator/start']
            },
            // последний элемент массива с пагинацией
            end() {
                return this.$store.getters['paginator/end']
            },
            // кол-во продуктов
            all() {
                this.$store.dispatch('paginator/setAll', this.getProducts.length)
                return this.$store.getters['paginator/all']
            },
            // отключаем или включаем кнопку пагинации (назад)
            leftButtonDisabled() {
                if(this.start > 1) {
                    return false
                } else {
                    return true
                }
            },
            // отключаем или включаем кнопку пагинации (вперед)
            rightButtonDisabled() {
                if(this.end === this.all || this.perPageValue === this.endIncrement) {
                    return true
                } else {
                    return false
                }
            },
            // получаем выбранный пользователем фильтр пагинации (10, 15, 20)
            perPageValue() {
                return this.$store.getters['perPage/perPage']
            },
            // получаем номер n в пагинации n - 10 of 1000
            // при клике на кнопку >
            startIncrement() {
                if(this.start === 1) {
                    if(this.perPageValue > this.all) {
                        return 1
                    } else {
                        return this.perPageValue
                    }
                } else if(this.start + this.perPageValue >= this.all) {
                    return this.start
                } else if(this.perPageValue > this.all - this.start) {
                    return this.start + (this.all - this.start)
                } else {
                    return this.start + this.perPageValue
                }
            },
            // получаем номер n в пагинации 1 - n of 1000
            // при клике на кнопку >
            endIncrement() {
                if(this.perPageValue > (this.all - this.end)) {
                    return this.end + (this.all - this.end)
                }
                return this.end + this.perPageValue
            },
            // получаем номер n в пагинации n - 10 of 1000
            // при клике на кнопку <
            startDecrement() {
                if(this.start === this.perPageValue ||
                    this.start < this.perPageValue
                ) {
                    return 1
                }
                return this.start - this.perPageValue
            },
            // получаем номер n в пагинации 1 - n of 1000
            // при клике на кнопку <
            endDecrement() {
                if(this.end <= this.perPageValue) {
                    if(this.perPageValue > this.all)  {
                        return this.perPageValue
                    } else {
                        return this.perPageValue
                    }
                } else if(this.end - this.perPageValue < this.perPageValue) {
                    return this.perPageValue
                }
                return this.end - this.perPageValue
            },
            // получаем массив продуктов
            getProducts() {
                return this.$store.getters['products/products']
            }
        },
        watch: {
            // обработка выбора фильтра пагинации (10, 15, 20)
            perPageValue(val) {
                if(val > this.all) {
                    this.$store.dispatch('paginator/setEnd', this.all)
                    this.$store.dispatch('paginator/setStart', 1)
                } else {
                    this.$store.dispatch('paginator/setEnd', val)
                    this.$store.dispatch('paginator/setStart', 1)
                }
                
            }
        },
        methods: {
            // рассчитываем n - n of n 
            // при клике на кнопку >
            async counterIncrement() {
                await this.$store.dispatch('paginator/setStart', this.startIncrement)
                await this.$store.dispatch('paginator/setEnd', this.endIncrement)
                await this.$store.dispatch('products/setViewProducts', null, { root: true })
            },
            // рассчитываем n - n of n 
            // при клике на кнопку <
            async counterDecrement() {
                await this.$store.dispatch('paginator/setStart', this.startDecrement)
                await this.$store.dispatch('paginator/setEnd', this.endDecrement)
                await this.$store.dispatch('products/setViewProducts', null, { root: true })
                
            }
        }
    }
</script>

<style lang="sass">
    .filters__paginator-container
        display: flex
        margin-left: 16px
        align-items: center
        user-select: none
    
    .filters__paginator-button
        display: flex
        justify-content: center
        align-items: center
        border: 1px solid #D5DAE0
        width: 32px
        height: 32px
        cursor: pointer

    .filters__paginator-button-left svg
        width: 10px
        height: 10px
        fill: #5B5E77
        transform: rotate(-90deg)
    
    .filters__paginator-button-right svg
        width: 10px
        height: 10px
        fill: #5B5E77
        transform: rotate(90deg)
    
    .filters__paginator-button-text
        font-size: 14px
        font-weight: 600
        font-family: 'Source Sans Pro SemiBold', sans-serif
        margin-left: 8px
        margin-right: 8px
    
    .filters__paginator-button-disabled
        opacity: .5
        cursor: default
</style>