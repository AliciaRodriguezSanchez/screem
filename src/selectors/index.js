import { createSelector } from 'reselect';

const getList = (state) => ((state?.listTv) || []);
export const getSelectorScheduleTV =  createSelector(
  [getList],
  data => data
);

