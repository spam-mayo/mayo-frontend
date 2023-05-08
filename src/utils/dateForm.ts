import { format } from 'date-fns';

export const yeartToHour = (date: Date) => format(date, 'yyyy-MM-dd HH:mm');
export const yearToDate = (date: Date) => format(date, 'yyyy-MM-dd');
