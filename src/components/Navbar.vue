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
    background-color: rgb(191, 191, 191);
    position: fixed;
    top: 0;
    left: 0;
    font-size: 1.3rem;
    position: fixed;
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
  }

</style>
