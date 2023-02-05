import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../App";
import HouseDetail from "../components/HouseDetail";
import HouseRegist from "../components/house/HouseRegist";
import HouseList from "../components/house/HouseList";
import HouseModify from "../components/house/HouseModify";
import MyAlert from "../components/mypage/MyAlert";
import MyConsulting from "../components/mypage/MyConsulting";
import MyContractUser from "../components/mypage/MyContractUser";
import MyContractDetailUser from "../components/mypage/MyContractDetailUser";
import MyContractRegistUser from "../components/mypage/MyContractRegistUser";
import MyContractViewUser from "../components/mypage/MyContractViewUser";
import MyContractRealtor from "../components/mypage/MyContractRealtor";
import MyContractViewRealtor from "../components/mypage/MyContractViewRealtor";
import MyContractModifyRealtor from "../components/mypage/MyContractModifyRealtor";
import MyContractDetailRealtor from "../components/mypage/MyContractDetailRealtor";
import MyInfoDetailRealtor from "../components/mypage/MyInfoDetailRealtor";
import MyInfoDetailUser from "../components/mypage/MyInfoDetailUser";
import MyInfoModifyRealtor from "../components/mypage/MyInfoModifyRealtor";
import MyInfoModifyUser from "../components/mypage/MyInfoModifyUser";
import ConsultingPage from "../pages/ConsultingPage";
import ErrorCommonPage from "../pages/ErrorCommonPage";
import HousePage from "../pages/HousePage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import ReservationPage from "../pages/ReservationPage";
import SignUpPageRealtor from "../components/SignUpPageRealtor";
import SignUpPageUser from "../components/SignUpPageUser";
import MyConsultingDetail from "../components/mypage/MyConsultingDetail";
import SignUpPage from "../pages/SignUpPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorCommonPage />}>
      <Route index element={<MainPage />}></Route>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="signup" element={<SignUpPage />}>
        {/* for Redirect */}
        <Route path="" element={<Navigate replace to="user" />} />
        <Route path="user" element={<SignUpPageUser />}></Route>
        <Route path="realtor" element={<SignUpPageRealtor />}></Route>
      </Route>
      <Route path="reservation" element={<ReservationPage />}></Route>
      <Route path="consulting/:sessionId" element={<ConsultingPage />}></Route>
      <Route path="house" element={<HousePage />}>
        <Route index element={<HouseList />}></Route>
        <Route path="regist" element={<HouseRegist />}></Route>
        <Route path="detail/:itemNo" element={<HouseDetail />}></Route>
        <Route path="modify" element={<HouseModify />}></Route>
      </Route>
      <Route path="mypage" element={<MyPage />}>
        <Route path="info-detail-user" element={<MyInfoDetailUser />}></Route>
        <Route path="info-modify-user" element={<MyInfoModifyUser />}></Route>
        <Route
          path="info-detail-realtor"
          element={<MyInfoDetailRealtor />}
        ></Route>
        <Route
          path="info-modify-realtor"
          element={<MyInfoModifyRealtor />}
        ></Route>
        <Route path="consulting" element={<MyConsulting />}></Route>
        <Route
          path="consulting-detail"
          element={<MyConsultingDetail />}
        ></Route>
        <Route path="contract-user" element={<MyContractUser />}>
          <Route index element={<MyContractViewUser />}></Route>
          <Route
            path="contract-regist-user"
            element={<MyContractRegistUser />}
          ></Route>
          <Route
            path="contract-detail-user"
            element={<MyContractDetailUser />}
          ></Route>
        </Route>
        <Route path="contract-realtor" element={<MyContractRealtor />}>
          <Route index element={<MyContractViewRealtor />}></Route>

          <Route
            path="contract-detail-realtor"
            element={<MyContractDetailRealtor />}
          ></Route>
          <Route
            path="contract-modify-realtor"
            element={<MyContractModifyRealtor />}
          ></Route>
        </Route>
        <Route path="alert" element={<MyAlert />}></Route>
        {/* 부동산 아저씨 일정관리 */}
      </Route>
    </Route>
  )
);

export default router;
