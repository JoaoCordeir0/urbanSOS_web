<template>
    <div>
        <div class="mt-0">
            <h2 class="text-xl font-semibold leading-tight text-gray-700 mb-5">Profile</h2>

            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div class="text-gray-600">
                        <img width="450"
                            src="https://3.bp.blogspot.com/-Tf1Vi5hOMB4/XCIp1KzaBBI/AAAAAAAAQBc/JjtA2QTubrkS8nLPHVy7tFakLzCqzGdKwCLcBGAs/s1600/Chevrlolet-Vectra-GT-2011%2B%25281%2529.jpg"
                            alt="">
                    </div>

                    <div class="lg:col-span-2">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                            <div class="md:col-span-3">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name"
                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="name" />
                            </div>

                            <div class="md:col-span-2">
                                <label for="email">Email</label>
                                <input type="text" name="email" id="email"
                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="email" />
                            </div>

                            <div class="md:col-span-2">
                                <label for="cpf">CPF</label>
                                <input type="text" name="cpf" id="cpf"
                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="cpf" />
                            </div>

                            <div class="md:col-span-2">
                                <label for="date">Registration date</label>
                                <input type="text" disabled name="date" id="date"
                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="date" />
                            </div>

                            <div class="md:col-span-1">
                                <label for="status">Status</label>
                                <select name="status" id="status"
                                    class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </div>

                            <div class="md:col-span-2">
                                <label for="password">Password</label>
                                <input type="text" name="password" id="password"
                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="password" />
                            </div>

                            <div class="md:col-span-2">
                                <label for="password_confirm">Confirm password</label>
                                <input type="text" name="password_confirm" id="password_confirm"
                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="password_confirm" />
                            </div>

                            <div class="md:col-span-1">
                                <button type="submit"
                                    class="w-full px-4 py-2 text-sm mt-6 text-center text-white btn-purple rounded-md focus:outline-none font-bold">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useFormUser } from "../hooks/useFormData";

export default defineComponent({    
    data() {
        return {
            id: this.$route.params.id,
            name: '',
            email: '',
            cpf: '',
            date: '',
            password: '',
            password_confirm: '',
        }
    },
    methods: {
        async getFormData() {
            const user = await useFormUser(this.id)
            this.name = user.value.name
            this.email = user.value.email
            this.cpf = user.value.cpf
            this.date = user.value.createdAt            
        }
    },
    beforeMount() {
        this.getFormData();
    },
});
</script>
  