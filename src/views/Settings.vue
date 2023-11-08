<template>
    <div>
        <div class="mt-0">
            <h2 class="text-xl font-semibold leading-tight text-gray-700 mb-5"> Settings - {{ name }} </h2>

            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div class="">
                        <span class="mb-4">Image</span>
                        <img width="450" class="mt-2"
                            src="https://3.bp.blogspot.com/-Tf1Vi5hOMB4/XCIp1KzaBBI/AAAAAAAAQBc/JjtA2QTubrkS8nLPHVy7tFakLzCqzGdKwCLcBGAs/s1600/Chevrlolet-Vectra-GT-2011%2B%25281%2529.jpg"
                            alt="">
                    </div>

                    <div class="lg:col-span-2">
                        <label class="mb-4">Location</label>
                        <div id="map" class="mt-2">
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import { toast } from 'vue3-toastify';
import { useFormSettings } from '../hooks/useFormData';

export default defineComponent({
    data() {
        return {
            id: localStorage.getItem('AdminCity'),
            name: ''
        }
    },
    methods: {        
        async getSettingsData() {
            const data = await useFormSettings(this.id)            
                        
            this.name = data.value.name            
        }
    },
    beforeMount() {          
        this.getSettingsData()
    },
});
</script>
  