<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="purple">{{ name }}</h1>
    <h3>
      <RouterLink to="login">Sing In</RouterLink>
      |
      <RouterLink to="register">Sing Up</RouterLink>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  max-width: 550px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
