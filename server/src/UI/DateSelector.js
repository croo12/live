import { useState } from "react";
import Calendar from "./Calendar";
import Modal from "./Modal";

const DateSelector = () => {
  const [activeModal, setActive] = useState(false);

  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);

  const clickEvent = () => {
    setActive(!activeModal);
  };

  return (
    <>
      <span onClick={clickEvent}> Calendar</span>
      <input type="date" value={`${year}-${month}-${day}`} readOnly />
      {activeModal && (
        <Modal onConfirm={clickEvent}>
          <Calendar today={today}></Calendar>
        </Modal>
      )}
    </>
  );
};

export default DateSelector;
