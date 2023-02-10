import { useState, useEffect } from "react";
import axios from "../util/axios";

const useRecording = ({ stream, recordingFiles, setRecordingFiles }) => {
  const [recording, setRecording] = useState(false);

  const startRecording = () => {
    setRecording(true);
  };

  const stopRecording = () => {
    setRecording(false);
  };

  useEffect(() => {
    console.log(`현재 스트림`, stream);
    if (!recording || !stream) return;

    const mediaRecorder = new MediaRecorder(stream);
    const chunks = [];

    mediaRecorder.start();

    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      // datas
      const blob = new Blob(chunks, { type: "video/webm" });

      setRecordingFiles([...recordingFiles, blob]);
      // axios
      //   .post("recordings", blob)
      //   .then((res) =>
      //     console.log("Successfully sent recording to server", res)
      //   )
      //   .catch((error) => console.error(error));
    };

    return () => {
      if (mediaRecorder.state === "recording") {
        mediaRecorder.stop();
      }
    };
  }, [recording, stream]);

  return [recording, startRecording, stopRecording];
};

export default useRecording;