import { useRef, useState } from "react";
import Button from "../../UI/Button";
import Calendar from "../../UI/Calendar";
import Modal from "../../UI/Modal";

const DateSelector = (props) => {
  const [activeModal, setActive] = useState(false);
  const date = useRef(new Date());

  const year = date.current.getFullYear();
  const month = ("0" + (date.current.getMonth() + 1)).slice(-2);
  const day = ("0" + date.current.getDate()).slice(-2);

  const clickEvent = () => {
    setActive(!activeModal);
  };

  const startDateChangeEvent = (newStartDate) => {
    date.current = newStartDate;
    props.changeEventHandler(newStartDate);
  };

  return (
    <>
      {/* <span> Calendar</span> */}
      <input
        onClick={clickEvent}
        type="date"
        value={`${year}-${month}-${day}`}
        readOnly
      />
      {activeModal && (
        <Modal onConfirm={clickEvent}>
          <Calendar startDateChangeEvent={startDateChangeEvent} />
          <div>
            <Button clickEvent={clickEvent}>확인</Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DateSelector;
