<template>
  <div id="app">
    <transition
      name= 'fade'
      mode="out-in"
      ref="transition"
    >
      <router-view/>
    </transition>
    <navbar />
    <bottom-nav />
  </div>
</template>

<script>
import navbar from './components/Navbar'
import bottomNav from './components/BottomNav'

export default {
  components: {
    navbar,
    bottomNav
  },
  computed: {
    transitionName () {
      return this.$store.state.transitionName
    }
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
}
body {
  background-color: black;
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
