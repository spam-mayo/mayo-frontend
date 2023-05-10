import { format } from 'date-fns';

export const formatDate = (date: string | number | Date, dateFormat: string) => {
  const formattedDate = typeof date === 'string' ? new Date(date) : date;

  return format(formattedDate, dateFormat);
};
