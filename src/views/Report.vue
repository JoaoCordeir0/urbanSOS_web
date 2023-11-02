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
                    <div class="text-gray-600">
                        <img width="450"
                            src="https://3.bp.blogspot.com/-Tf1Vi5hOMB4/XCIp1KzaBBI/AAAAAAAAQBc/JjtA2QTubrkS8nLPHVy7tFakLzCqzGdKwCLcBGAs/s1600/Chevrlolet-Vectra-GT-2011%2B%25281%2529.jpg"
                            alt="">
                    </div>

                    <div class="lg:col-span-2">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                            <div class="md:col-span-5">
                                <label for="title">Title</label>
                                <input type="text" name="title" id="title"
                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="title" />
                            </div>

                            <div class="md:col-span-5">
                                <label for="description">Description</label>
                                <textarea name="description" id="description" cols="30" rows="10"
                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="description"
                                    placeholder="" style="min-height: 100px;"></textarea>
                            </div>

                            <div class="md:col-span-1">
                                <label for="status">Status</label>
                                <select name="status" id="status"
                                    class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                                    <option value="0">Opened</option>
                                    <option value="1">Resolved</option>
                                </select>
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
import { useFormReport } from "../hooks/useFormData";

export default defineComponent({
    data() {
        return {
            id: this.$route.params.id,
            img: '',
            title: '',
            description: '',
            situation: '',
            status: '',
        }
    },
    methods: {
        async getFormData() {
            const data = await useFormReport(this.id)

            this.title = data.value.title
            this.description = data.value.description
            this.situation = data.value.situation
        }
    },
    beforeMount() {
        this.getFormData();
    },
});
</script>
  