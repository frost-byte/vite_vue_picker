<template>
  <v-row>
    <v-btn-toggle v-model="toggle_exclusive">
      <v-btn> Day </v-btn>
      <v-btn> Week </v-btn>
      <v-btn> Month </v-btn>
    </v-btn-toggle>
  </v-row>
  <v-row>
    <Datepicker></Datepicker>
  </v-row>
</template>

<script setup lang="ts">
import {
    type DateExtentInterface,
    DateExtent,
    type DateExtentArray
} from '@/interfaces/DateExtentInterface';

/** TODO
 * Define Interface for DateRangeFrame
 *  minDate,
 *  maxDate,
 *  startDate,
 *  endDate,
 *  type: day, week, month, quarter, year
 *
 * Create a panel with a button group, one button for each of the selectable DateRangeFrames
 * Display DateRangePicker using settings for selected DateRangeFrame
 *
 * Create Multiple Instances of the Extended Picker with different settings.
 * One instance should be a single date, the user can toggle the Selected DateRangeFrame using the button group,
 * but only one calendar should be visible and the start/end date will be the same. (A single date can be selected)
 *
 *
 * Another instance should contain two calendars and allow a range of dates to be selected, in units of time according
 * to the DateRangeFrame selected via the button group.
 *
 */
  /** const extents: DateExtentArray = [
    'day': new DateExtent(
      'day',
      new Date("2023-02-05"),
      new Date("2023-02-11"),
      new Date("2023-02-11"),
      new Date("2023-02-11"),
      true
    ),
    'week': new DateExtent(
      'day',
      new Date("2019-06-16"),
      new Date("2023-02-04"),
      new Date("2023-01-29")
      new Date("2023-02-04"),
    ),
    'month': new DateExtent(
      'month',
      new Date("2019-06-02"),
      new Date("2023-02-25"),
      new Date("2023-01-29")
      new Date("2023-02-25"),
    ),
  ];
  */
</script>
