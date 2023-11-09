<template>
    <div>
        <div class="mt-0">
            <h2 class="text-xl font-semibold leading-tight text-gray-700 mb-5"> Settings - {{ name }} </h2>

            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                v-model="name" />
                        </div>
                    </div>

                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="email" />
                        </div>
                    </div>

                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-3">
                            <label for="status">State</label>
                            <select name="status" id="status" v-model="state" v-on:change=""
                                class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </select>
                        </div>
                        <div class="md:col-span-2">
                            <label for="status">Status</label>
                            <select name="status" id="status" v-model="status" v-on:change=""
                                class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="mt-5 w-48 m-auto text-center">
                    <button type="submit" v-on:click="updateSettings"
                        class="w-full px-4 py-2 text-sm text-center text-white btn-purple rounded-md focus:outline-none font-bold">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import { toast } from 'vue3-toastify';
import { useFormSettings, useUpdateSettings } from '../hooks/useFormData';

export default defineComponent({
    data() {
        return {
            id: localStorage.getItem('AdminCity'),
            name: '',
            status: '',
            email: '',
            state: '',
        }
    },
    methods: {
        async getSettingsData() {
            const data = await useFormSettings(this.id)

            this.name = data.value.name
            this.status = data.value.status
            this.email = data.value.email
            this.state = data.value.state
        },
        async updateSettings() {
            const result = await useUpdateSettings(this.name, this.email, this.state, this.status)
            toast.success("em dev")
        }
    },
    beforeMount() {
        this.getSettingsData()
    },
});
</script>
  