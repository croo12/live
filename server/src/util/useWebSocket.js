// import { useCallback, useRef } from "react";

// const useWebRTC = ({ sessionId, localVideo, remoteVideo }) => {
//   //로그인 체크
//   const login = true;

//   const wsocket = useRef(null);
//   const webRtcPeer = useRef(null);

//   //웹소켓 연결
//   wsocket.current = new WebSocket(`wss://localhost:8443/call`);

//   const handlerProcessSdpAnswer = useCallback(
//     (jsonMsg) => {
//       console.log(`kms에서 답장이 왔으니 WEBRTC 진행 해버릴까...`);

//       if (webRtcPeer.current == null) {
//         console.log("상대가 없는데?");

//         return;
//       }

//       //에러남
//       webRtcPeer.current.processAnswer(jsonMsg.sdpAnswer, (err) => {
//         if (err) {
//           console.log(err);
//           return;
//         }

//         //비디오 시작하기
//         startVideo(true);
//         //
//       });
//     },
//     [webRtcPeer]
//   );

//   const registerResponse = useCallback((jsonMsg) => {
//     if (jsonMsg.respose === "accepted") {
//       console.log("등록되었다");
//     } else {
//       console.log("등록 ㄴ");
//     }
//   }, []);

//   const callResponse = useCallback(
//     (jsonMsg) => {
//       if (jsonMsg.respose !== "accepted") {
//         console.log(`거절당함`);
//         //정지!!!
//         //경고
//       } else {
//         handlerProcessSdpAnswer(jsonMsg);
//       }
//     },
//     [handlerProcessSdpAnswer]
//   );

//   const incomingCall = useCallback(
//     (jsonMsg) => {
//       // if (통화중?) {
//       // 	var response = {
//       // 		id : 'incomingCallResponse',
//       // 		from : message.from,
//       // 		callResponse : 'reject',
//       // 		message : 'bussy'
//       // 	};
//       // 	return sendMsg(response);
//       // }

//       const confirm = window.confirm(
//         "User " + jsonMsg.from + " is calling you. Do you accept the call?"
//       );

//       if (confirm) {
//         // showSpinner(videoInput, videoOutput);

//         let from = jsonMsg.from;
//         var options = {
//           localVideo,
//           remoteVideo,
//           onicecandidate: onIceCandidate,
//         };
//         webRtcPeer.current = new kurentoUtils.WebRtcPeer.WebRtcPeerSendrecv(
//           options,
//           function (error) {
//             if (error) {
//               return console.error(error);
//             }
//             this.generateOffer(onOfferIncomingCall);
//           }
//         );
//       } else {
//         var response = {
//           id: "incomingCallResponse",
//           from: message.from,
//           callResponse: "reject",
//           message: "user declined",
//         };
//         sendMessage(response);
//         stop();
//       }
//     },
//     [handlerProcessSdpAnswer]
//   );

//   const handleAddIceCandidate = useCallback(
//     (jsonMsg) => {
//       if (webRtcPeer.current == null) {
//         console.warn("상대가 없는데 경로를 왜 찾아");
//         return;
//       }

//       webRtcPeer.current.addIceCandidate(jsonMsg.candidate, (err) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//       });
//     },
//     [webRtcPeer]
//   );

//   const startVideo = () => {};

//   const onBeforeUnload = useCallback(() => {
//     wsocket.current.close();
//   }, [wsocket]);

//   const onMessage = useCallback(
//     (msg) => {
//       const jsonMsg = JSON.parse(msg.data);
//       console.log(`메세지가 왔다네 : `, jsonMsg);

//       switch (jsonMsg.id) {
//         case `registerResponse`:
//           registerResponse(jsonMsg);
//           break;

//         case `callResponse`:
//           callResponse(jsonMsg);
//           break;

//         case `incomingCall`:
//           incomingCall(jsonMsg);
//           break;

//         // case `PROCESS_SDP_ANSWER`:
//         //   handlerProcessSdpAnswer(jsonMsg);
//         //   break;

//         case "iceCandidate":
//           handleAddIceCandidate(jsonMsg);
//           break;

//         default:
//           console.log("뭐임 이건 없는 id잖어");
//           break;
//       }
//     },
//     [registerResponse, callResponse, handleAddIceCandidate]
//   );

//   try {
//     window.onbeforeunload = onBeforeUnload;

//     wsocket.current.onmessage = onMessage;

//     //웹소켓에 기능달기
//     const funcs = {
//       websocket: wsocket.current,
//       sendMsg(msg) {
//         if (wsocket.readyState !== wsocket.OPEN) {
//           console.warn(`웹소켓 세션 안열림 : ${wsocket.readyState}`);
//           return;
//         }

//         const jsonMsg = JSON.stringify(msg);
//         wsocket.current.send(jsonMsg);
//       },
//       onIceCandidate(candidate) {
//         let message = {
//           id: "onIceCandidate",
//           candidate: candidate,
//         };

//         this.sendMsg(message);
//       },
//     };

//     if (login) return funcs;
//   } catch (err) {
//     console.error("useWebSocket 에러 발생...", err);
//   }

//   return null;
// };

// export default useWebRTC;
