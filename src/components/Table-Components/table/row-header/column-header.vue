<template>
    <div class="table-header__column-name"
        @click="$emit('clickColumnName', title)"
        :class="{'table-header__column-name-color-green' : typeof sortColumn === 'boolean'}"
    >
        {{title}}
        <div class="table-header__column-name-icon"
            v-show="typeof sortColumn === 'boolean'"
            :class="{'table-header__column-name-icon-rotate' : typeof sortColumn === 'boolean' && sortColumn}"
        >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <path style="fill:#4CAF50;" d="M263.432,3.136c-4.16-4.171-10.914-4.179-15.085-0.019c-0.006,0.006-0.013,0.013-0.019,0.019
                l-192,192c-4.093,4.237-3.975,10.99,0.262,15.083c4.134,3.992,10.687,3.992,14.82,0L245.213,36.416v464.917
                c0,5.891,4.776,10.667,10.667,10.667c5.891,0,10.667-4.776,10.667-10.667V36.416l173.781,173.781
                c4.093,4.237,10.845,4.355,15.083,0.262c4.237-4.093,4.354-10.845,0.262-15.083c-0.086-0.089-0.173-0.176-0.262-0.262L263.432,3.136
                z"/>
            <path d="M447.88,213.333c-2.831,0.005-5.548-1.115-7.552-3.115L255.88,25.749L71.432,210.219c-4.237,4.093-10.99,3.975-15.083-0.262
                c-3.992-4.134-3.992-10.687,0-14.82l192-192c4.165-4.164,10.917-4.164,15.083,0l192,192c4.159,4.172,4.149,10.926-0.024,15.085
                C453.409,212.214,450.702,213.333,447.88,213.333z"/>
            <path d="M255.88,512c-5.891,0-10.667-4.776-10.667-10.667V10.667C245.213,4.776,249.989,0,255.88,0
                c5.891,0,10.667,4.776,10.667,10.667v490.667C266.546,507.224,261.771,512,255.88,512z"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'sortColumn'
        ]
    }
</script>

<style lang="sass">
    .table-header__column-name
        font-size: 14px
        font-family: 'Source Sans Pro SemiBold', sans-serif
        color: #282136
        width: 180px
        box-sizing: border-box
        cursor: pointer
        display: flex
        align-items: center
    
    .table-header__column-name-color-green
        color: #00A11E
    
    .table-header__column-name-icon
        width: 10px
        height: 15px
        margin-left: 10px
        overflow: hidden

    .table-header__column-name-icon svg
        width: 100%
        height: 100%
    
    .table-header__column-name-icon-rotate
        transform: rotate(180deg)
</style>