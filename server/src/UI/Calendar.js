import { useState } from "react";
import Button from "./Button";
import classes from "./Calendar.module.scss";

/**
 * @description 주워온 캘린더를 수정해서 만듦.
 *
 * @param { today : Date } new Date() 넣어요
 * @param { mode : boolean } false : 날짜 하나 선택, true : 날짜 여러개 선택 가능 
 * @returns
 */

const isSame = (date1, date2, depth) => {
  if (!date1 || !date2) return false;

  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();

  if (depth && depth === "year") {
    return year1 === year2;
  }

  const month1 = date1.getMonth();
  const month2 = date2.getMonth();

  if (depth && depth === "month") {
    return year1 === year2 && month1 === month2;
  }

  const day1 = date1.getDate();
  const day2 = date2.getDate();

  return year1 === year2 && month1 === month2 && day1 === day2;
};

const CalendarTitle = ({ date, changeMonthEvent, resetDate, today }) => (
  <nav className={classes.calendar__nav}>
    {date.getMonth() > today.getMonth() && (
      <Button clickEvent={() => changeMonthEvent(date.getMonth() - 1)}>
        &#8249;
      </Button>
    )}
    <h1 onClick={() => resetDate()}>
      {date.getMonth() + 1} <small>{date.getFullYear()}</small>
    </h1>
    <Button clickEvent={() => changeMonthEvent(date.getMonth() + 1)}>
      &#8250;
    </Button>
  </nav>
);

const Day = ({ currentdate, date, startDate, endDate, clickEvent, today }) => {
  const thisDate = new Date(date.toString());

  return (
    <span
      onClick={() => clickEvent(thisDate)}
      className={
        thisDate < today
          ? classes.muted
          : `${isSame(new Date(), thisDate) ? classes.active : ""} 
      ${isSame(thisDate, startDate) ? classes.start : ""} 
      ${isSame(thisDate, endDate) ? classes.end : ""} 
      ${!isSame(thisDate, currentdate, "month") ? classes.another : ""} 
      ${thisDate > startDate && date < endDate ? classes.between : ""}`
      }
    >
      {thisDate.getDate()}
    </span>
  );
};

const Days = ({ date, startDate, endDate, clickEvent, today }) => {
  const firstDayDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const daysInMonth = lastDayDate.getDate();

  const labels = ["월", "화", "수", "목", "금", "토", "일"];
  let days = [];

  for (let i = firstDayDate.getDay(); i > 0; i--) {
    const prevMonthDate = new Date(
      firstDayDate.getFullYear(),
      firstDayDate.getMonth(),
      1 - i
    );

    days.push(prevMonthDate);
  }

  for (let i = 0; i < daysInMonth; i++) {
    days.push(
      new Date(
        firstDayDate.getFullYear(),
        firstDayDate.getMonth(),
        firstDayDate.getDate() + i
      )
    );
  }

  const daysCount = 42 - days.length;
  for (let i = 1; i <= daysCount; i++) {
    days.push(
      new Date(
        lastDayDate.getFullYear(),
        lastDayDate.getMonth(),
        lastDayDate.getDate() + i
      )
    );
  }

  return (
    <nav className={classes.calendar__days}>
      {labels.map((el, idx) => (
        <span className={classes.label} key={idx}>
          {el}
        </span>
      ))}
      {days.map((el, idx) => (
        <Day
          key={idx}
          clickEvent={
            date < today ? () => console.log("ㄴㄴ") : (d) => clickEvent(d)
          }
          currentdate={date}
          date={el}
          startDate={startDate}
          endDate={endDate}
          today={today}
        />
      ))}
    </nav>
  );
};

const Calendar = ({ today, mode }) => {
  const TODAY = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const [date, setDate] = useState(TODAY);
  const [startDate, setStartDate] = useState(TODAY);
  const [endDate, setEndDate] = useState(TODAY);

  const resetDate = () => {
    setDate(new Date());
  };

  const changeMonth = (newMonth) => {
    const tmp = new Date(date.getFullYear(), newMonth, date.getDate());
    setDate(tmp);
  };

  const changeDay = (newDate) => {
    if (newDate < TODAY) return;

    if (mode) {
      if (
        startDate === null ||
        newDate < startDate ||
        !isSame(startDate, endDate)
      ) {
        setStartDate(newDate);
        setEndDate(newDate);
      } else if (isSame(newDate, startDate) && isSame(newDate, endDate)) {
        setStartDate(null);
        setEndDate(null);
      } else if (newDate > startDate) {
        setEndDate(newDate);
      }
    } else {
      setStartDate(newDate);
      setEndDate(newDate);
    }
  };

  return (
    <div className={classes.calendar}>
      <CalendarTitle
        date={date}
        changeMonthEvent={(month) => changeMonth(month)}
        resetDate={() => resetDate()}
        today={TODAY}
      />

      <Days
        date={date}
        clickEvent={(date) => changeDay(date)}
        startDate={startDate}
        endDate={endDate}
        today={TODAY}
      />
    </div>
  );
};

export default Calendar;
