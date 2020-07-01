<template>
    <div class="filters__columns-selected-buttons">
        <!-- компонент checkbox -->
        <app-checkbox 
            :view="view"
            @clickCheckbox="$emit('clickCheckbox', index)"
        />
        <div class="filters__columns-selected-buttons-text">
            {{title}}
        </div>
    </div>
</template>

<script>
    const AppCheckbox = () => import('../checkbox/index.vue')
    export default {
        props: [
            'index',
            'title',
            'view'
        ],
        components: {
            AppCheckbox
        }
    }
</script>

<style lang="sass">
    .filters__columns-selected-buttons
        margin: 13px 8px 13px 8px
        display: flex
        align-items: center
    
    .filters__columns-selected-buttons-text
        margin-left: 13px
</style>