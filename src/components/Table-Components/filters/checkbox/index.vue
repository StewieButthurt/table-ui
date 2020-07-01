<!-- компонент checkbox -->
<template>
    <div class="checkbox"
        @click="$emit('clickCheckbox', localView)"
        :class="{'checkbox-active' : localView}"
    >
        <svg v-show="localView" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <g>
            <g>
                <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0
                    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7
                    C514.5,101.703,514.499,85.494,504.502,75.496z"/>
            </g>
        </g>
        </svg>

    </div>
</template>

<script>
    export default {
        props: [
            'view'
        ],
        computed: {
            localView() {
                if(this.view === true) {
                    return true
                } else if(this.view === false) {
                    return false
                } else if(this.view === 'disabled') {
                    return false
                } else if(this.view === 'active') {
                    return true
                }
            }
        }
    }
</script>

<style lang="sass">
    .checkbox
        width: 14px
        height: 14px
        border: 1px solid #C6CBD4
        display: flex
        flex-direction: column
        align-items: center
        cursor: pointer
    
    .checkbox svg
        fill: white
        width: 10px
        height: 14px
    
    .checkbox-active
        border: 1px solid #00A11E
        background-color: #00A11E
</style>