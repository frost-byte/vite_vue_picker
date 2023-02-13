<template>
  <v-container class="picker">
    <h1>This is a demo of an extended date range picker.</h1>
    <picker-component></picker-component>
  </v-container>
</template>

<script lang="ts" setup>
import { useGlobal } from '@/store';
import PickerComponent from '@/components/PickerComponent.vue';

/** Global Store */
const globalStore = useGlobal();
</script>
