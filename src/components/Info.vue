<template>
    <div id="wrapper">
        <div id="blocker"></div>
        <h1 id="header">
            How to convert different number systems.
        </h1>
        <img
            src="../../public/img/info.png"
            alt="info graphic"
            id="infoGraphic"
        >
    </div>
</template>

<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)

export default {
    name: 'info',
    created () {
        this.$store.state.componentTransition = 'swipe-component-right'
    }
}
</script>

<style>
    #wrapper {
        text-align: center;
    }
    #infoGraphic  {
        margin-top: -7.5rem;
        width: 26rem;
        z-index: 0;
    }
    #header {
        color: lightgray !important;
        z-index: 100;
        margin-top: 6rem;
    }
    @media (max-width: 650px) {
        #infoGraphic {
            width: 25rem;
        }
    }
    @media (max-width: 468px) {
        #infoGraphic {
            width: 23rem;
        }
    }
    @media (max-width: 468px) {
        #infoGraphic {
            margin-top: -5rem;
            width: 20rem;
        }
    }
</style>