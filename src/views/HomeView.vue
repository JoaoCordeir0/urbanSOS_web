<script setup>
import AppDescription from '../components/Home/AppDescription.vue'
import AppName from '../components/Home/AppName.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo_urbansos.png" width="200" />

    <div class="wrapper">
      <AppName name="UrbanSOS" />
    </div>
  </header>

  <main>
    <AppDescription />
  </main>
</template>

<style>
#app{
  max-width: 1280px;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
</style>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    display: block;
    margin: auto;
    text-align: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>