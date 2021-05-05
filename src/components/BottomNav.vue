<template>
  <div id="bottomNav">
      <p class='link'>
      <span
        @click="converter(true)"
        class="marginRight marginBottom nevElement"
        ref="converter"
      >
          Converter
      </span>
      <span
        @click="converter(false)"
        class="marginLeft marginBottom nevElement"
        ref="info"
      >
        Info
      </span>
      </p>
  </div>
</template>

<script>
export default {
    name: 'bottomNav',
    methods: {
        converter (converter) {
            this.$store.state.converter = converter
        }
    },
    mounted () {
        if (this.current) {
            this.$refs.converter.style.opacity = 1
            this.$refs.info.style.opacity = 0.6
        } else {
            this.$refs.converter.style.opacity = 1
            this.$refs.info.style.opacity = 0.6
        }
    },
    computed: {
        current () {
            return this.$store.state.converter
        }
    },
    watch: {
        current (val) {
            if (val) {
                this.$refs.converter.style.opacity = 1
                this.$refs.info.style.opacity = 0.6
            } else {
                this.$refs.converter.style.opacity = 0.6
                this.$refs.info.style.opacity = 1
            }
        }
    }
}
</script>

<style>
    #bottomNav {
        width: 100vw;
        height: 1.3rem;
        position: absolute;
        left: 0vw;
        bottom: 1.7rem;
        border-top: 2px solid rgb(165, 165, 165) !important;
        white-space: nowrap;
        padding-bottom: 1.2rem;
        z-index: 0;
    }
    .link {
        color: white;
        font-weight: 600;
        font-size: 1.3rem;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
    }
    .marginLeft {
        margin-left: 2.5rem;
    }
    .marginRight {
        margin-right: 2.5rem;
    }

    /* @media (max-width: 410px) {
        .marginLeft {
            margin-left: 1.5rem;
        }
        .marginRight {
            margin-right: 1.5rem;
        }
    } */
    @media (max-width: 300px) {
        .marginLeft {
            margin-left: 1rem;
        }
        .marginRight {
            margin-right: 1rem;
        }
    }
</style>