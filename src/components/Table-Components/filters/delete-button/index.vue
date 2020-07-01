<!-- компонент содержаний кнопку delete в фильтрах -->
<template>
    <div class="filters__delete-button-container">

        <div class="filters__delete-button"
            :class="{'filters__delete-button-disabled' : selectProductsCounter === 0}"
            @click="$emit('clickDeleteButton')"
        >
            Delete ({{selectProductsCounter}})
        </div>

        <div class="filters__delete-button-question"
            v-show="statusDeleteButton"
        >
            <div class="filters__delete-button-question-text">
                 Are you sure you want to
                 <span style="font-family: 'Source Sans Pro SemiBold', sans-serif">delete ({{selectProductsCounter}}) items?</span>
            </div>
            <div class="filters__delete-button-question-buttons">
                <div class="filters__question-button"
                    @click="$emit('clickCancelButton')"
                >
                    Cancel
                </div>
                <div class="filters__question-button filters__question-button-confirm"
                    @click="$emit('clickConfirmButton')"
                >
                    Confirm
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'statusDeleteButton'
        ],
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

    .filters__delete-button-container
        position: relative

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
    
    .filters__delete-button-question
        width: 254px
        top: 49px
        display: flex
        justify-content: center
        align-items: center
        position: absolute
        flex-direction: column
        background: #FFFFFF
        padding: 16px
        z-index: 1
        cursor: auto
        box-sizing: border-box
        border-radius: 4px
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16)
    
    .filters__delete-button-question-text
        margin-top: 16px
        text-align: center
    
    .filters__delete-button-question-buttons
        display: flex
        justify-content: center
        align-items: center
    
    .filters__question-button
        display: flex
        width: 74px
        height: 32px
        align-items: center
        justify-content: center
        color: #5B5E77
        border: 1px solid #C6CBD4
        border-radius: 4px
        transition-duration: .2s
        margin-top: 8px
        cursor: pointer
    
    .filters__question-button:hover
        transition-duration: .2s
        transform: scale(.95)
    
    .filters__question-button-confirm
        background-color: #00A11E
        color: #FFFFFF
        margin-left: 16px
</style>