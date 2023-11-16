<template>
    <Preloader/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Preloader from "../components/Preloader.vue";

export default defineComponent({
    setup() {
    },
    components: { Preloader }
});
</script>
