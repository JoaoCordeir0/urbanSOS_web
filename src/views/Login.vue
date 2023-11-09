<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-900">
    <div class="w-full max-w-sm p-6 bg-white rounded-login shadow-md">
      <div class="flex items-center justify-center mb-5">
        <img src="/logo_urbansos.png" alt="Logo UrbanSOS" width="50">
        <span class="text-2xl font-semibold text-gray-700 text-purple">UrbanSOS</span>
      </div>

      <form class="mt-4 mt-10" @submit.prevent="login">
        <label class="block">
          <span class="text-sm text-gray-700">Email or CPF</span>
          <input type="text"
            class="block w-full mt-1 border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="username" />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Password</span>
          <input type="password"
            class="block w-full mt-1 border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="password" />
        </label>

        <div class="flex items-center justify-between mt-4">
          <div></div>

          <div>
            <a class="block text-sm text-purple fontme hover:underline font-bold" href="#">Forgot your password?</a>
          </div>
        </div>

        <div class="mt-6">
          <button type="submit" :disabled="isLoading"
            class="w-full px-4 py-2 text-sm text-center text-white btn-purple rounded-md focus:outline-none font-bold">
            <span v-if="isLoading == false">
              Sign in
            </span>
            <span v-if="isLoading == true">
              <img src="/preloader.svg" width="20" id="preloaderLogin">
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
import { toast } from 'vue3-toastify';
import { ILoginState, apiLogin } from "../hooks/useAuth"

export default defineComponent({
  setup() {
    const state: ILoginState = reactive({
      isLoading: false,
      isAdmin: false,
      message: '',
      token: '',
    });

    const username = ref("");
    const password = ref("");

    async function login() {
      state.isLoading = true

      if (username.value == "" || password.value == "") {
        toast.warn('Fill in all the information!')
        state.isLoading = false
        return
      }

      const result = await apiLogin(username.value, password.value)
      
      state.message = result.value.message
      state.token = result.value.access_token      

      if (!state.token != undefined) {        
        toast.error(state.message.toString())
        state.isLoading = false
      }
    }

    return {
      ...toRefs(state),
      username,
      password,
      login,
    }
  },
});
</script>
