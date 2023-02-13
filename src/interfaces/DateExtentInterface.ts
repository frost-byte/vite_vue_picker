export type DatePeriod = 'day' | 'week' | 'month' | 'quarter' | 'year';

export default interface DateExtentInterface {
  period: DatePeriod;
  minDate: Date;
  maxDate: Date;
  startDate: Date;
  endDate: Date;
  hideWeekend?: boolean | false;
}

export class DateExtent implements DateExtentInterface {
  period: DatePeriod;
  minDate: Date;
  maxDate: Date;
  startDate: Date;
  endDate: Date;
  hideWeekend?: boolean = false;

  constructor(
    period: DatePeriod,
    minDate: Date,
    maxDate: Date,
    startDate: Date,
    endDate: Date,
    hideWeekend: boolean = false
  ) {
    this.period = period;
    this.minDate = minDate;
    this.maxDate = maxDate;
    this.startDate = startDate;
    this.endDate = endDate;
    this.hideWeekend = hideWeekend;
  }
}

export type DateExtentArray = {
  [index in DatePeriod]: DateExtentInterface;
};
