<template>
    <div class="filters__delete-button"
        :class="{'filters__delete-button-disabled' : deleteButton.status}"
    >
        Delete(3)
    </div>
</template>

<script>
    export default {
        data() {
            return {
                deleteButton: {
                    status: true
                }
            }
        }
    }
</script>

<style lang="sass">

    .filters__delete-button
        margin-left: 64px
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
        color: #3D374A
    
    .filters__delete-button:hover
        background-color: #00A11E
        color: #FFFFFF
    
    .filters__delete-button-disabled,
    .filters__delete-button-disabled:hover
        border: 1px solid #C6CBD4
        background-color: white
        color: #5B5E77
        opacity: .5
        cursor: default
</style>