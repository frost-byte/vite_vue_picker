<template>
  <v-row>
    <v-btn-toggle v-model="toggle_exclusive">
      <v-btn> Day </v-btn>
      <v-btn> Week </v-btn>
      <v-btn> Month </v-btn>
    </v-btn-toggle>
  </v-row>
  <v-row>
    <Datepicker v-model="date"></Datepicker>
  </v-row>
</template>

<script lang="ts">
import { DateExtent } from '@/interfaces/DateExtentInterface';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const extents: Map<string, DateExtent> = new Map([
  [
    'day',
    new DateExtent(
      'day',
      new Date('2023-02-05'),
      new Date('2023-02-11'),
      new Date('2023-02-11'),
      new Date('2023-02-11'),
      true
    ),
  ],
  [
    'week',
    new DateExtent(
      'week',
      new Date('2019-06-16'),
      new Date('2023-02-04'),
      new Date('2023-01-29'),
      new Date('2023-02-04')
    ),
  ],
  [
    'month',
    new DateExtent(
      'month',
      new Date('2019-06-02'),
      new Date('2023-02-25'),
      new Date('2023-01-29'),
      new Date('2023-02-25')
    ),
  ],
]);
export default {
  components: { Datepicker },
  data() {
    const currentExtent: DateExtent = extents.get('day');

    return {
      date: null,
      minDate: currentExtent.minDate,
    };
  },
};
</script>
