<template>
    <div>
        <div class="mt-0">
            <h2 class="text-xl font-semibold leading-tight text-gray-700 mb-5">Report &nbsp;
                <span v-if="situation == 'Tolerable'"
                    class="inline-flex px-2 text-sm font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full">
                    {{ situation }} </span>
                <span v-if="situation == 'Serious'"
                    class="inline-flex px-2 text-sm font-semibold leading-5 text-yellow-800 bg-yellow-300 rounded-full">
                    {{ situation }} </span>
                <span v-if="situation == 'Urgent'"
                    class="inline-flex px-2 text-sm font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                    {{ situation }} </span>
            </h2>

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
                            <p class="text-center">Loading...</p>
                        </div>
                    </div>
                </div>

                <div class="grid mt-5 gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div>
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                            <div class="md:col-span-5">
                                <label for="title">Title</label>
                                <input type="text" name="title" id="title" disabled
                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="title" />
                            </div>

                            <div class="md:col-span-3">
                                <label for="status">Status</label>
                                <select name="status" id="status" v-model="status" v-on:change="updateStatusReport"
                                    class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                                    <option value="Opened">Opened</option>
                                    <option value="In progress">In progress</option>                                    
                                    <option value="Resolved">Resolved</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-2">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                            <div class="md:col-span-5">
                                <label for="description">Description</label>
                                <textarea name="description" id="description" cols="30" rows="20" disabled
                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="description"
                                    placeholder="" style="min-height: 100px;"></textarea>
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
import { toast } from 'vue3-toastify';
import { useFormReport, useUpdateReportStatus } from "../hooks/useFormData";

export default defineComponent({
    data() {
        return {
            id: this.$route.params.id,
            img: '',
            title: '',
            description: '',
            situation: '',
            status: '',
            latitude: 0,
            longitude: 0,
        }
    },
    methods: {
        async getFormData() {
            const data = await useFormReport(this.id)

            this.title = data.value.title
            this.description = data.value.description
            this.situation = data.value.situation
            this.status = data.value.status
            this.latitude = data.value.latitude
            this.longitude = data.value.longitude

            document.getElementById('map').innerHTML = '<iframe width="100%" height="302" frameborder="0" src = "https://maps.google.com/maps?q=' + this.latitude + ',' + this.longitude + '&hl=pt;z=14&amp;output=embed"></iframe>                        '
        },
        async updateStatusReport() {
            const result = await useUpdateReportStatus(this.status, this.id)
            toast.success(result.message.toString())
        },
    },
    beforeMount() {
        this.getFormData()
    },
});
</script>
  