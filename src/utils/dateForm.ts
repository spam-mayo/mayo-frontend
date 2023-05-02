import { format } from 'date-fns';

const dateForm = (date: string | Date) => {
  const newDate = new Date(date);
  const newDateFormHour = format(newDate, 'yyyy-MM-dd HH:mm');
  const newDateForm = format(newDate, 'yyyy-MM-dd');

  return { newDateForm, newDateFormHour };
};

export default dateForm;
