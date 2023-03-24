const InputCalendar = () => {
  return (
    <div className="input-calendar-container">
      <label>
        모임기간<span className="required"> *</span>
      </label>
      <div className="input-wrapper">
        <i className="icon-calendar" />
        <input placeholder="모임기간을 선택하세요" />
      </div>
      <div className="calendar-wrapper"></div>
    </div>
  );
};

export default InputCalendar;
