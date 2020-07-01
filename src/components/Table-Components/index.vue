<template>
    <div class="container">

        <div class="title">
            Table UI
        </div>

        <div class="border" />
        
        <app-filters />

        <app-table 
            v-if="!downloadError"
        />

        <app-error404 
            v-if="downloadError"
        />

        <app-alert 
            v-if="error || success"
            :error="error"
            :success="success"
            :alertOff="alertOff"
            @initAlert="initAlert"
        />
        
    </div>
</template>

<script>
    const AppFilters = () => import('./filters/index.vue')
    const AppTable = () => import('./table/index.vue')
    const AppAlert = () => import('./alert.vue')
    const AppError404 = () => import('./error404.vue')
    const AppRequest = () => require('@@/api/request.js')

    export default {
        async beforeCreate() {
            try {
                // импортируем API
                const request = await AppRequest()
                // получаем массив проудктов
                const getProducts = await request.getProducts()
                // перебираем и создаем новый массив
                // с дополнительными ключами
                await getProducts.forEach((item, i) => {
                    this.$store.dispatch('products/setProducts', {
                        index: i,
                        item: item
                    })
                })
                // создаем массив с учетом пагинации
                await this.$store.dispatch('products/setViewProducts')

            } catch(e) {
                // обработка ошибок
                this.downloadError = true
                await this.$store.dispatch('alert/setError', 
                `При загрузке продуктов произошла ошибка! ${e.error}!`
                )
                throw new Error(`При загрузке продуктов произошла ошибка! ${e.error}!`)
            }
            
            
        },
        components: {
            AppFilters,
            AppTable,
            AppAlert,
            AppError404
        },
        data() {
            return {
                downloadError: false
            }
        },
        methods: {
            async initAlert() {
                let timer1 = setTimeout(() => {
                    this.$store.dispatch('alert/setAlertOff', true)
                }, 4000);

                let timer2 = setTimeout(() => {
                    this.$store.dispatch('alert/setError', false)
                    this.$store.dispatch('alert/setSuccess', false)
                    this.$store.dispatch('alert/setAlertOff', false)
                }, 4100);
                
            }
        },
        computed: {
            error() {
                return this.$store.getters['alert/error']
            },
            success() {
                return this.$store.getters['alert/success']
            },
            alertOff() {
                return this.$store.getters['alert/alertOff']
            }
        }
    }
</script>

<style lang="sass">

    .container
        min-height: 600px
        margin: 0 auto
        width: 1366px
        padding-top: 32px
        padding-left: 113px
        padding-right: 113px
        user-select: none
        font-family: 'Source Sans Pro Regular', sans-serif
        font-size: 14px

    .title
        font-size: 32px
        font-family: 'Source Sans Pro SemiBold', sans-serif

    .border
        height: 1px
        background-color: #EDEDED
        margin-top: 16px

</style>