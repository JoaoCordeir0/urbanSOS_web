<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-900">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center mb-5">
        <img 
          src="/logo_urbansos.png" 
          alt="Logo UrbanSOS"
          width="50">        
        <span class="text-2xl font-semibold text-gray-700 text-purple">UrbanSOS</span>
      </div>

      <form class="mt-4 mt-10" @submit.prevent="login">
        <label class="block">
          <span class="text-sm text-gray-700">Email or CPF</span>
          <input
            type="email"
            class="block w-full mt-1 border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="email"
          />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Password</span>
          <input
            type="password"
            class="block w-full mt-1 border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="password"
          />
        </label>

        <div class="flex items-center justify-between mt-4">
          <div></div>

          <div>
            <a
              class="block text-sm text-purple fontme hover:underline"
              href="#"
              >Forgot your password?</a
            >
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-purple rounded-md focus:outline-none hover:bg-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    function login() {
      router.push("/dashboard");
    }

    return {
      login,
      email,
      password,
    };
  },
});
</script>
