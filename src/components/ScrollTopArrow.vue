<template>
<ScrollTopComponent>
    <a class="btn outline-info">
      <!--<font-awesome-icon :icon="['fa fa-arrows','angle-double-up']" size="3x"/>-->
        <i class="fas fa-angle-double-up" aria-hidden="true"></i>
    </a>
</ScrollTopComponent>
</template>

<script>
    import ScrollTopComponent from './ScrollTopComponent'
    export default {
        components: {
            ScrollTopComponent
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn {
        border-radius:3px;
        background-color:#5bc0de;
        padding-top:27px;
        padding-left:10px;
        padding-right:10px;
        padding-bottom:5px;
    }
</style>
