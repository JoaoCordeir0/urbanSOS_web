<template>
  <div>
    <div class="mt-1">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
            <div class="p-3 bg-purple bg-opacity-75 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                style="fill: rgb(255, 255, 255);transform: ;msFilter:;">
                <path
                  d="m20 8-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9 19H7v-9h2v9zm4 0h-2v-6h2v6zm4 0h-2v-3h2v3zM14 9h-1V4l5 5h-4z">
                </path>
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">{{ total }}</h4>
              <div class="text-gray-500">Total reports</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
            <div class="p-3 bg-red-700 bg-opacity-75 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                style="fill: rgb(255, 255, 255);transform: ;msFilter:;">
                <path
                  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z">
                </path>
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">{{ opened }}</h4>
              <div class="text-gray-500">Open reports</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
            <div class="p-3 bg-green-700 bg-opacity-75 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                style="fill: rgb(255, 255, 255);transform: ;msFilter:;">
                <path
                  d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z">
                </path>
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">{{ resolved }}</h4>
              <div class="text-gray-500">Resolved reports</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id="chart1" class="mt-10">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-2/3">
          <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
            <apexchart type="line" :options="useInfoChartLineDashboard.options" :series="useInfoChartLineDashboard.series"></apexchart>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
            <apexchart type="donut" :options="useInfoChartDonutDashboard.options" :series="useInfoChartDonutDashboard.series"></apexchart>
          </div>
        </div>        
      </div>      
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useInfoDataDashboard, useInfoChartLineDashboard, useInfoChartDonutDashboard } from "../hooks/useDashData"

export default defineComponent({
  async setup() {

    const total = ref("")
    const opened = ref("")
    const resolved = ref("")

    const dashData = await useInfoDataDashboard()

    total.value = dashData.dashTableData.value.count_total
    opened.value = dashData.dashTableData.value.count_opened
    resolved.value = dashData.dashTableData.value.count_resolved

    return {
      total,
      opened,
      resolved
    }
  },
  data: function() {
    return { 
      useInfoChartLineDashboard, 
      useInfoChartDonutDashboard,
    }
  }
});
</script>
