<!-- компонент содержит набор фильтров для управления таблицей -->
<template>
    <div class="filters">
        <div class="sorting">
            Sorting by:
        </div>
        <div class="filters__button-container">
            <!-- компонент кнопки для product, calories, fat и тд -->
            <app-filter-button 
                v-for="(item, index) in filters"
                :key=item.title
                :index="index"
                :title="item.title"
                :status="item.status"
                :view="item.view"
                @clickButton="clickButton"
            />
        </div>
        <!-- компонент кнопки delete -->
        <app-delete-button 
            :products="products"
            :statusDeleteButton="statusDeleteButton"
            @clickDeleteButton="clickDeleteButton"
            @clickCancelButton="clickCancelButton"
            @clickConfirmButton="clickConfirmButton"
        />

        <!-- компонент кнопки фильтра пагинации
            позволяет выбрать пагинацию на 10, 15, 20 товаров
         -->
        <app-per-page-button />

        <!-- компонент отображающий пагинацию, позволяет листать таблицу -->
        <app-paginators-buttons  />

        <!-- компонент отображающий выбранные колонки,
            позволяет управлять колонками
         -->
        <app-columns-selected 
            :filters="filters"
            :selectAll="selectAll"
        />
    </div>
</template>

<script>
    const AppFilterButton = () => import('./filter-button/index.vue')
    const AppDeleteButton = () => import('./delete-button/index.vue')
    const AppPerPageButton = () => import('./per-page-button/index.vue')
    const AppPaginatorsButtons = () => import('./paginator-buttons/index.vue')
    const AppColumnsSelected = () => import('./columns-selected/index.vue')

    export default {
        data() {
            return {
                statusDeleteButton: false
            }
        },
        methods: {
            // обработка клика колонкам сортировки (product, calories, fat и тд)
            async clickButton(title) {
                new Promise(async (resolve, reject) => {
                    // проходим по массиву с фильтрами сортировки
                    // ищем нужный title и устанавлием ему статус
                    await this.filters.forEach(async (item, i) => {
                        if(this.filters[i].title === title)  {
                            await this.$store.dispatch('filters/setStatus', {
                                value: true,
                                index: i
                            })
                            resolve(i)
                        } else {
                            await this.$store.dispatch('filters/setStatus', {
                                value: false,
                                index: i
                            })
                        }
                    })
                })
                .then(async i => {
                    // получаем массив с продуктами и делаем копию
                    const arr =  this.$store.getters['products/products']
                    // очищаем массив с продуктами в store
                    await this.$store.dispatch('products/clearProducts')
                    // перебираем копию, и создаем новый массив products
                    // в store
                    await arr.forEach((item, i) => {
                        this.$store.dispatch('products/setProducts', {
                            index: i,
                            item: item,
                            view: item.view
                        })
                    })
                    // сбрасываем пагинацию
                    await this.$store.dispatch('paginator/setStart', 1)
                    await this.$store.dispatch('paginator/setEnd',
                    await this.$store.getters['perPage/perPage'])
                    // собираем новый массив исходя из пагинации
                    await this.$store.dispatch('products/setViewProducts')
                })
                
            },
            async clickDeleteButton() {
                this.statusDeleteButton = true
            },
            async clickCancelButton() {
                this.statusDeleteButton = false
            },
            async clickConfirmButton() {
                this.statusDeleteButton = false

                await this.$store.dispatch('products/deleteMoreProducts')
            }
        },
        components: {
            AppFilterButton,
            AppDeleteButton,
            AppPerPageButton,
            AppPaginatorsButtons,
            AppColumnsSelected
        },
        computed: {
            // получаем массив с фильтрами
            filters() {
                return this.$store.getters['filters/filters']
            },
            // получаем массив с одним пунктом SelectAll
            // такоф формат нужен для компонента
            selectAll() {
                return this.$store.getters['columnsSelected/selectAll']
            },
            // получаем массив с продуктами
            products() {
                return this.$store.getters['products/products']
            }
        }
    }
</script>

<style lang="sass">

    .filters
        display: flex
        margin-top: 17px
        align-items: center
        transition: all 1s
        width: max-content

    .sorting
        font-size: 14px
        font-family: 'Source Sans Pro SemiBold', sans-serif
        color: #3D374A
        margin-right: 4px
    
    .filters__button-container
        min-width: 600px
        display: flex
        align-items: center
    
    
</style>