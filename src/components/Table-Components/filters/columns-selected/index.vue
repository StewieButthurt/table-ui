<!-- компонент позволяющий выбирать колонки с помощью checkbox -->
<template>
    <div class="filters__columns-selected-container"
        v-click-outside="clickOutside"
    >
        <div class="filters__columns-selected"
            @click="status = !status"
        >
            {{columnsSelected}} columns selected
            
            <div class="filters__columns-selected-svg"
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
        <div class="filters__columns-selected-window"
            v-show="status"
        >   
            <!-- модуль добавляющий кастомную прокрутку -->
            <simplebar class="test" data-simplebar-auto-hide="true">
                <span id="columns-select-button">
                    <!-- строка selectAll с checkbox -->
                    <app-columns-selected-button
                        v-for="(item, index) in selectAll"
                        :key="item.title"
                        :title="item.title"
                        :view="item.view"
                        :index="index"
                        @clickCheckbox="clickSelectAll"
                    />
                </span>
                <!-- компонент позволяющий выбирать колонки по checkbox -->
                <app-columns-selected-button 
                    v-for="(item, index) in filters"
                    :key="item.title"
                    :title="item.title"
                    :index="index"
                    :view="item.view"
                    @clickCheckbox="clickCheckbox"
                />
            </simplebar>
        </div>
    </div>
</template>

<script>
    import 'simplebar/dist/simplebar.min.css';
    const simplebar = () => import('simplebar-vue')
    const AppColumnsSelectedButton = () => import('./columns-selected-button.vue')

    export default {
        props: [
            'filters',
            'selectAll'
        ],
        data() {
            return {
                status: false
            }
        },
        components: {
            AppColumnsSelectedButton,
            simplebar
        },
        methods: {
            // обработка клика по checkbox у выбранного продукта
            async clickCheckbox(index) {
                this.$store.dispatch('filters/setView', {
                    value: !this.filters[index].view,
                    index: index
                })
            },
            // обработка клика по checkbox для всех продуктов
            async clickSelectAll(index) {
                await this.$store.dispatch('columnsSelected/setViewSelectAll', {
                    value: !this.filters[index].view,
                    index: index
                })
            },
            // обработка клика мимо окна
            async clickOutside(event) {
                this.status = false
            }
        },
        computed: {
            // счетчик выбранных колонок 
            columnsSelected() {
                let counter = 0
                for(let i = 0; i < this.filters.length; i++) {
                    if(this.filters[i].view) {
                        counter++
                    }
                }
                return counter
            },
        }
    }
</script>

<style lang="sass">
    .filters__columns-selected-container
        position: relative
        display: flex
        margin-left: 13px
        align-items: center

    .filters__columns-selected
        display: flex
        justify-content: center
        align-items: center
        height: 32px
        padding-left: 13px
        padding-right: 13px
        border: 1px solid #D5DAE0
        cursor: pointer
        color: #5B5E77
    
    .filters__columns-selected-svg
        display: flex
        justify-content: center
        align-items: center
        width: 10px
        height: 10px
        fill: #5B5E77
        margin-left: 8px
        transform: rotate(-180deg)
    
    .filters__columns-selected-svg svg
        width: 100%
        height: 100%

    .filters__columns-selected-window
        z-index: 10
        background-color: white
        position: absolute
        width: max-content
        top: 40px
        left: 1px
        box-shadow: 0px 0px 8px 0px #acacac
    
    #columns-select-button
        font-family: 'Source Sans Pro SemiBold', sans-serif
        font-weight: 600
    
    .simplebar-scrollbar::before 
        background-color: #D5DAE0
    
    .simplebar-content
        width: max-content
        max-height: 207px


    .test
        width: max-content
        max-height: 207px


</style>