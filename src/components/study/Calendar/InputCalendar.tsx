import CalendarRange from '@/components/common/Calendar';

const InputCalendar = () => {
  return (
    <div className="input-calendar-container">
      <label>
        모임기간<span className="required"> *</span>
      </label>
      <div className="input-wrapper">
        <i className="icon-calendar" />
        <input placeholder="모임기간을 선택하세요" type="text" />
      </div>
      <div className="calendar-wrapper">
        <CalendarRange />
      </div>
    </div>
  );
};

export default InputCalendar;
