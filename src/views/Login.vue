<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-900">
    <div class="w-full max-w-sm p-6 bg-white rounded-login shadow-md">
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
            type="text"
            class="block w-full mt-1 border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="username"
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
              class="block text-sm text-purple fontme hover:underline font-bold"
              href="#"
              >Forgot your password?</a
            >
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white btn-purple rounded-md focus:outline-none font-bold"
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
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { apiLogin } from "../hooks/useAuth"

export default defineComponent({
  setup() {    
    const router = useRouter()
    const username = ref("");
    const password = ref("");

    async function login() {            
      
      if (username.value == "" || password.value == "") 
      {
        toast.warn('Fill in all the information!')
        return
      }

      const result = await apiLogin(username.value, password.value)
      
      if (result.loginData.value.access_token != undefined) 
      {
        //router.push('/dashboard') 
        toast.success(result.loginData.value.message)            
      }
      else 
      {
        toast.error(result.loginData.value.message)            
      }            
    }

    return {
      login,
      username,
      password,
    }
  },
});
</script>
