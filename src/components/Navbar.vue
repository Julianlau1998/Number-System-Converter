<template>
  <div class="navbar">
    <img
      src="../../public/img/menu.png"
      alt="menu icon"
      class="menu"
      @click="menu=!menu"
      >
    <h3
      id="navTitle"
    >
      Number Systems
    </h3>
    <div
      v-if="menu"
      class="openMenu"
    >
      <a
        id="rate"
        href='https://play.google.com/store/apps/details?id=xyz.appmaker.xjzpta'
      >
        Rate this app
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      menu: false,
    }
  },
  props: {
  }
}
</script>

<style scoped>
  .navbar {
    width: 100vw;
    height: 4.5rem;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 1.3rem;
    position: fixed;
    z-index: -1;
  }
  .menu {
    width: 2rem;
    position: fixed;
    right: 0.7rem;
    top: 1rem;
    cursor: pointer;
  }
  #navTitle {
    position: fixed;
    top: -0.45rem;
    left: 1rem;
    color: lightgray;
    cursor: pointer;
    z-index: 0;
  }
  .openMenu {
    width: 9rem;
    height: 2.3rem;
    color: lightgray;
    background-color: #2a343c;
    border: 2px solid #eedcff;
    border-radius: 10px;
    position: fixed;
    right: 1.8rem;
    top: 3rem;
    font-weight: 600;
    padding-top: 0.65rem;
  }
  #rate {
    margin-top: 0.4rem;
    cursor: pointer;
    z-index: 11;
  }
  img {
    -webkit-tap-highlight-color: transparent;
  }
  a:link {
    text-decoration: none;
    color: lightgray;
    margin-top: 0.3rem;
    -webkit-tap-highlight-color: transparent;
  }
  a:visited {
    color: lightgray;
  }

</style>
