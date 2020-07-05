<template>
<a @click="scrollTop" v-show="visible" class="bottom-right">
    <slot></slot>
</a>
</template>

<script>
    export default {
        data() {
            return {
                visible: false
            }
        },
        methods: {
            scrollTop: function () {
                this.intervalId = setInterval(() => {
                    if (window.pageYOffset === 0) {
                        clearInterval(this.intervalId)
                    }
                    window.scroll(0, window.pageYOffset - 50)
                }, 20)

            },
            scrollListener: function () {
                this.visible = window.scrollY > 150
            }
        },
        mounted: function () {
            window.addEventListener('scroll', this.scrollListener)
        },
        beforeDestroy: function () {
            window.removeEventListener('scroll', this.scrollListener)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bottom-right {
        position:fixed;
        bottom:55px;
        right:0px;
        cursor:pointer;
    }
</style>
