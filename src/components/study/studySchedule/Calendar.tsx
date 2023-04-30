import type { FC } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';

interface Props {
  date: Date;
  onDateChange: (date: Date | null) => void;
}

const Calendar: FC<Props> = ({ date, onDateChange }) => {
  return <DatePicker locale={ko} selected={date} onChange={onDateChange} inline />;
};

export default Calendar;
