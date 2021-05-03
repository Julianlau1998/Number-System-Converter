<template>
  <div class="navbar">
    <!-- <img src="../../public/img/menu.png" alt="hamburger icon" class="hamburger"> -->
    <h3 id="navTitle">Number Systems</h3>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
  }
}
</script>

<style scoped>
  .navbar {
    width: 100%;
    height: 4rem;
    background-color: #000000;
    box-shadow: 1px 1px 3px lightgray;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 1.3rem;
    position: fixed;
    z-index: 10;
  }
  .hamburger {
    width: 2rem;
    position: fixed;
    left: 1rem;
    top: 1rem;
  }
  #navTitle {
    position: fixed;
    top: -0.45rem;
    left: 1rem;
    color: lightgray;
  }

</style>
