<!-- компонент содержаний кнопку delete в фильтрах -->
<template>
    <div class="filters__delete-button"
        :class="{'filters__delete-button-disabled' : selectProductsCounter === 0}"
    >
        Delete ({{selectProductsCounter}})
    </div>
</template>

<script>
    export default {
        computed: {
            // счетчик выбранных товаров
            selectProductsCounter() {
                return this.$store.getters['products/counterSelectProducts']
            },
            // массив с продуктами
            products() {
                return this.$store.getters['products/products']
            }
        }
    }
</script>

<style lang="sass">

    .filters__delete-button
        margin-left: 64px
        font-size: 14px
        width: 86px
        display: flex
        justify-content: center
        align-items: center
        padding-left: 8px
        padding-right: 8px
        height: 32px
        cursor: pointer
        border-radius: 2px
        user-select: none
        margin-right: 4px
        color: #FFFFFF
        background-color: #00A11E
    
    .filters__delete-button-disabled,
    .filters__delete-button-disabled:hover
        border: 1px solid #C6CBD4
        background-color: white
        color: #5B5E77
        opacity: .5
        cursor: default
</style>