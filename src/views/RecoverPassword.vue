<template>
    <div class="flex items-center justify-center h-screen px-6 bg-gray-900">
      <div class="w-full max-w-sm p-6 bg-white rounded-login shadow-md">
        <div class="flex items-center justify-center mb-5">
          <img src="/logo_urbansos.png" alt="Logo UrbanSOS" width="50">
          <span class="text-2xl font-semibold text-gray-700 text-purple">UrbanSOS</span>
        </div>
  
        <form class="mt-4 mt-10" @submit.prevent="">
          <label class="block">
            <span class="text-sm text-gray-700">New password</span>
            <input type="password"
              class="block w-full mt-1 border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500" />
          </label>
  
          <label class="block mt-3">
            <span class="text-sm text-gray-700">Confirm password</span>
            <input type="password"
              class="block w-full mt-1 border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500" />
          </label>
  
          <div class="mt-6">
            <button type="submit"
              class="w-full px-4 py-2 text-sm text-center text-white btn-purple rounded-md focus:outline-none font-bold">
              Recover
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, reactive, toRefs } from "vue";

  export default defineComponent({
    setup() {
    }
  });
  </script>
  