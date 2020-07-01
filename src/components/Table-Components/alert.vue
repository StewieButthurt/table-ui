<template>
    <div class="alert-container"
        :class="{'alert-container__off' : alertOff}"
    >   
        <div class="alert-error"
            v-show="error"
        >
            <div class="alert__svg">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 451.74 451.74" style="enable-background:new 0 0 451.74 451.74;" xml:space="preserve">
                <path style="fill:#E24C4B;" d="M446.324,367.381L262.857,41.692c-15.644-28.444-58.311-28.444-73.956,0L5.435,367.381
                    c-15.644,28.444,4.267,64,36.978,64h365.511C442.057,429.959,461.968,395.825,446.324,367.381z"/>
                <path style="fill:#FFFFFF;" d="M225.879,63.025l183.467,325.689H42.413L225.879,63.025L225.879,63.025z"/>
                    <path style="fill:#3F4448;" d="M196.013,212.359l11.378,75.378c1.422,8.533,8.533,15.644,18.489,15.644l0,0
                        c8.533,0,17.067-7.111,18.489-15.644l11.378-75.378c2.844-18.489-11.378-34.133-29.867-34.133l0,0
                        C207.39,178.225,194.59,193.87,196.013,212.359z"/>
                    <circle style="fill:#3F4448;" cx="225.879" cy="336.092" r="17.067"/>
                </svg>
            </div>
            <div class="alert__text">
                {{error}}
            </div>
        </div>

        <div class="alert-success"
            v-show="success"
        >   
            <div class="alert__svg">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 468.293 468.293" style="enable-background:new 0 0 468.293 468.293;" xml:space="preserve">
                <circle style="fill:#44C4A1;" cx="234.146" cy="234.146" r="234.146"/>
                <polygon style="fill:#EBF0F3;" points="357.52,110.145 191.995,275.67 110.773,194.451 69.534,235.684 191.995,358.148 
                    398.759,151.378 "/>
                </svg>
            </div>
            <div class="alert__text">
                {{success}}
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        async mounted() {
            this.$emit('initAlert')
        },
        props: [
            'error',
            'success',
            'alertOff'
        ]
    }
</script>

<style lang="sass">
    .alert-container
        position: fixed
        bottom: 0px
        left: 50px
        max-width: 350px
        height: 70px
        background-color: #323232
        border-radius: 5px
        display: flex
        align-items: center
        padding: 20px
        box-sizing: border-box
        animation: alert .5s forwards
    
    .alert-error,
    .alert-success
        display: flex
        justify-content: center
        align-items: center
    
    .alert-container__off
        animation: alertOff .5s forwards
    
    .alert__text
        color: white
        font-size: 16px
        font-family: 'Source Sans Pro Regular', sans-serif
    
    .alert__svg
        width: 40px
        height: 40px
        margin-right: 20px
    
    .alert__svg svg
        width: 100%
        height: 100%
    
    @keyframes alert
        0%
            opacity: 0
            bottom: -300px
        100%
            opacity: 1
            bottom: 20px
    
    @keyframes alertOff
        0%
            opacity: 1
            bottom: 20px
        100%
            opacity: 0
            bottom: -300px

</style>