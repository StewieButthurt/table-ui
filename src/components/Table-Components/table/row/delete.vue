 <!-- компонент позволяющий удалять строку таблицы -->
<template>
    <div class="row-component__delete-container">
        <div class="row-component__delete"
            @click="$emit('clickDelete', globalIndex)"
            @mouseenter="enter = true"
            @mouseleave="enter = false"
            v-show="rowEnter || statusButton"
        >
            <div class="row-component__delete-icon"
                :class="{'row-component__delete-icon-hover' : enter}"
                >
                <svg viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M13.2326 1.88398H11.0963V0.495768C11.0963 0.216339 10.8709 0 10.5915 0C10.5644 0 10.5463 0.00905115 10.5375 0.0180816C10.5284 0.00905115 10.5103 0 10.5013 0H5.48046H5.4445H5.40834C5.12893 0 4.91259 0.216339 4.91259 0.495768V1.884H2.76726C2.1542 1.884 1.67651 2.36169 1.67651 2.97475V3.76801V4.75952H2.62302V14.9183C2.62302 15.5314 3.09168 16 3.70474 16H12.2951C12.9082 16 13.3859 15.5314 13.3859 14.9183V4.75952H14.3233V3.76801V2.97475C14.3233 2.36169 13.8455 1.88398 13.2326 1.88398ZM5.90411 0.991515H10.0957V1.88398H5.90411V0.991515ZM12.3853 14.9183C12.3853 14.9816 12.3582 15.0085 12.2951 15.0085H3.70474C3.64167 15.0085 3.61456 14.9816 3.61456 14.9183V4.7595H12.3853V14.9183ZM13.3228 3.76799H2.67706V2.97473C2.67706 2.91164 2.70417 2.8755 2.76724 2.8755H13.2326C13.2957 2.8755 13.3228 2.91164 13.3228 2.97473V3.76799Z"/>
                    <path d="M10.8169 5.92236H9.81635V14.1251H10.8169V5.92236Z"/>
                    <path d="M8.50915 5.92236H7.50861V14.1251H8.50915V5.92236Z"/>
                    <path d="M6.20153 5.92236H5.20099V14.1251H6.20153V5.92236Z"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="row-component__delete-text"
                :class="{'row-component__delete-tex-hover' : enter}"
            >
                delete
            </div>
        </div>
        <div class="row-component__delete-question"
            v-if="statusButton"
        >
            <div class="row-component__delete-question-text">
                 Are you sure you want to
                 <span style="font-family: 'Source Sans Pro SemiBold', sans-serif">delete item?</span>
            </div>
            <div class="row-component__delete-question-buttons">
                <div class="question-button"
                    @click="$emit('clickCancelButton')"
                >
                    Cancel
                </div>
                <div class="question-button question-button-confirm"
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
            'globalIndex',
            'rowEnter',
            'index',
            'statusButton'
        ],
        data() {
            return {
                enter: false
            }
        },
        computed: {
            products() {
                return this.$store.getters['products/products']
            }
        }
    }
</script>

<style lang="sass">
    .row-component__delete-container
        display: flex
        position: relative
        height: 49px
        align-items: center
        justify-content: center
        margin-left: 20px
        box-sizing: border-box
    
    .row-component__delete
        display: flex
        justify-content: center
        align-items: center
        width: 100%
        height: 100%
        transition-duration: .4s
    
    .row-component__delete-icon
        width: 16px
        height: 16px
        margin-right: 4px
    
    .row-component__delete-icon svg
        width: 100%
        height: 100%
    
    .row-component__delete-icon-hover
        fill: #d01515

    .row-component__delete-text
        color: #5B5E77
    
    .row-component__delete-tex-hover
        color: #d01515
    
    .row-component__delete-question
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
        box-sizing: border-box
        border-radius: 4px
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16)
    
    .row-component__delete-question-text
        margin-top: 16px
        text-align: center
    .row-component__delete-question-buttons
        display: flex
        justify-content: center
        align-items: center
    
    .question-button
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

    .question-button:hover
        transition-duration: .2s
        transform: scale(.95)
    
    .question-button-confirm
        background-color: #00A11E
        color: #FFFFFF
        margin-left: 16px
</style>