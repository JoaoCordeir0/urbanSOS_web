<template>
  <div>
    <div class="mt-0">
      <h2 class="text-xl font-semibold leading-tight text-gray-700 mb-5">Administrators</h2>

      <div class="flex flex-col mt-8">
        <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table class="min-w-full">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Name
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    CPF
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Status
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Creation date
                  </th>
                  <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr v-for="item in admsTableData">
                  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img class="w-10 h-10 rounded-full"
                          src="https://cdn-icons-png.flaticon.com/512/1198/1198344.png"
                          alt="" />
                      </div>

                      <div class="ml-4">
                        <div class="text-sm font-medium leading-5 text-gray-900">
                          {{ item.name }}
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{ item.email }}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                    <div class="text-sm leading-5 text-gray-900">
                      {{ item.cpf }}
                    </div>                    
                  </td>

                  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                    <span
                      v-if="item.status == 'Inactive'"
                      class="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-300 rounded-full">{{
                        item.status }}</span>
                    <span
                      v-if="item.status == 'Active'"
                      class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">{{
                        item.status }}</span>
                  </td>

                  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                    <div class="text-sm leading-5 text-gray-900">
                      {{ item.createdAt }}
                    </div>                    
                  </td>                 

                  <td
                    class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">
                    <a :href="`adm/${ item.id }`" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useTableDataAdms } from "../hooks/useTableData";

export default defineComponent({
  async setup() {
    const admsTableData = ref()

    admsTableData.value = await useTableDataAdms()

    admsTableData.value = JSON.parse(JSON.stringify(admsTableData.value)).admsTableData

    return { admsTableData };
  },
});
</script>
