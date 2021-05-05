<template>
  <div>
    <span v-touch:swipe="swipeHandler">
      <transition
        :name= componentTransitionName 
        mode="out-in"
        ref="componentTransition"
      >
        <converter v-if="converter" />
        <info v-else />
      </transition>
    </span>
  </div>
</template>

<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
import converter from '../components/Converter'
import info from '../components/Info'

Vue.use(Vue2TouchEvents)

export default {
  name: 'Home',
  components: {
    converter,
    info
  },
  data () {
    return {
    }
  },
  methods: {
    swipeHandler (direction) { 
      if (direction === 'left' && this.converter) {
        this.$store.state.converter = false
      } else if (direction === 'right' && !this.converter) {
        this.$store.state.converter = true
      }
    }
  },
  computed: {
    converter () {
      return this.$store.state.converter
    },
    componentTransitionName () {
      return this.$store.state.componentTransition
    }
  }
}
</script>
