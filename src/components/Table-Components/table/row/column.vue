<template>
    <div class="row-component__column">

    </div>
</template>

<script>
    export default {
        props: [
            'serverName',
            'data',
            'filterSelect'
        ],
        computed: {
            // val() {
            //     for(let i = 0; i < this.filterSelect.length; i++) {
            //         if(this.serverName === this.data[i].serverName) {
            //             return this.data[i]
            //         }
            //     }
            // }
        }
    }
</script>

<style lang="sass">

</style>