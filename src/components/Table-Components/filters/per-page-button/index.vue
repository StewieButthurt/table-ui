<template>
    <div class="filters__per-page-container"
        v-click-outside="clickOutside"
    >
        <div class="filters__per-page-button"
            @click="enter = !enter"
            
        >
            {{title}}

            <div class="filters__per-page-button-svg">
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
        <div class="filters__per-page-button-window"
            v-show="enter"
            @click="enter = false"
            >
            <app-page-button-element 
                v-for="item in list"
                :key="item.perPage"
                :title="item.perPage"
                @clickElement="clickElement"
            />
        </div>
    </div>
    
</template>

<script>
    const AppPageButtonElement = () => import('./per-page-element.vue')

    export default {
        async mounted() {
            await this.$store.dispatch('perPage/setPerPage', parseInt(this.title))
        },
        data() {
            return {
                title: '10 Per Page',
                list: [
                    {
                        perPage: '10 Per Page'
                    },
                    {
                        perPage: '15 Per Page'
                    },
                    {
                        perPage: '20 Per Page'
                    }
                ],
                enter: false
            }
        },
        components: {
            AppPageButtonElement
        },
        methods: {
            async clickOutside(event) {
                this.enter = false
            },
            async clickElement(title) {
                this.title = title
                await this.$store.dispatch('perPage/setPerPage', parseInt(title))
                await this.$store.dispatch('products/setViewProducts')
            }
        }
    }
</script>

<style lang="sass">
    .filters__per-page-container
        position: relative
        display: flex
        margin-left: 13px
        user-select: none

    .filters__per-page-button
        display: flex
        align-items: center
        color: #5B5E77
        border: 1px solid #D5DAE0
        border-radius: 2px
        height: 32px
        padding-left: 13px
        padding-right: 13px
        cursor: pointer
    
    .filters__per-page-button-svg
        display: flex
        justify-content: center
        align-items: center
        width: 10px
        height: 10px
        fill: #5B5E77
        margin-left: 8px
        transform: rotate(180deg)
    
    .filters__per-page-button-svg svg
        width: 100%
        height: 100%
    
    .filters__per-page-button-window
        position: absolute
        padding-top: 2px
        padding-bottom: 2px
        top: 36px
        left: 0px
        display: flex
        min-height: 90px
        width: 100%
        flex-direction: column
        background-color: white
        box-shadow: 0px 0px 8px 0px #acacac
</style>