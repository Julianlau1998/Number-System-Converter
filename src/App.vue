<template>
  <div id="app">
    <router-view/>
    <!-- <transition
      name= 'fade'
      mode="out-in"
      ref="transition"
    >
      <router-view/>
    </transition> -->
    <navbar />
    <!-- <bottom-nav v-if="!openKeyboard"/> -->
  </div>
</template>

<script>
import navbar from './components/Navbar'

export default {
  components: {
    navbar
  },
  data () {
    return {
      height: 0,
      openKeyBoard: false
    }
  },
  mounted () {
    if('visualViewport' in window) {
      const vm = this
      window.visualViewport.addEventListener('resize', function(event) {
      vm.height = event.currentTarget.height
    })
    }
  },
  computed: {
    transitionName () {
      return this.$store.state.transitionName
    },
    screenHeight () {
      return this.height
    }
  },
  watch: {
    height (newVal, oldVal) {
      if ((oldVal-newVal)>50) {
        this.openKeyBoard = true
      } else if ((newVal-oldVal)>50) {
        this.openKeyBoard = false
      }
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #2a343c;
  width: 100vw;
  margin: -0.5rem 0 0 -0.5rem;
}
html {
  background-color: #2a343c;
}
/* #blocker {
  width: 100%;
  height: 100vh;
  background-color: transparent;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  background-color: #2a343c;
} */
body {
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

  .swipe-component-left-enter-active,
  .swipe-component-left-leave-active {
    transition: transform 0.2s;
  }
  .swipe-component-left-leave {
    transform: translateX(0%);
  }
  .swipe-component-left-leave-to {
    transform: translateX(-100%);
  }
  .swipe-component-left-enter {
    transform: translateX(100%);
  }
  .swipe-component-left-enter-to {
    transform: translateX(0%);
  }

  .swipe-component-right-enter-active,
  .swipe-component-right-leave-active{
    transition: transform 0.2s;
  }
  .swipe-component-right-enter {
    transform: translateX(-100%);
  }
  .swipe-component-right-enter-to {
    transform: translateX(0%);
  } 
  .swipe-component-right-leave {
    transform: translateX(0%);
  }
  .swipe-component-right-leave-to {
    transform: translateX(100%);
  }

  /* Fade Transition */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter-to, .fade-leave {
    opacity: 1;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
