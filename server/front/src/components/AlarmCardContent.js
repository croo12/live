import sample from "../assets/image/sample.jpg";

const AlarmCardContent = ({ image, writer, date, time, content }) => {
  return (
    <>
      <td>{writer}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>{content}</td>
    </>
  );
};

export default AlarmCardContent;

export const DUMMY3 = [
  {
    image: sample,
    writer: "김희연",
    date: "2021-12-01",
    time: "12:30",
    content: "알람이 도착하였습니다.",
  },
  {
    image: sample,
    writer: "김희연",
    date: "2021-12-01",
    time: "12:30",
    content: "알람이 도착하였습니다.",
  },
  {
    image: sample,
    writer: "김희연",
    date: "2021-12-01",
    time: "12:30",
    content: "알람이 도착하였습니다.",
  },
];
