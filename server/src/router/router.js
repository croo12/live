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
import MyPageUser, { myPageUserLoader } from "../components/mypage/MyPageUser";
import MyPageUserDetail, {
  userInfoLoader,
} from "../components/mypage/MyPageUserDetail";
import MyPageUserModify from "../components/mypage/MyPageUserModify";
import MyPageUserReservation from "../components/mypage/MyPageUserReservation";
import MyPageUserReservationDetail from "../components/mypage/MyPageUserReservationDetail";
import MyPageUserReview from "../components/mypage/MyPageUserReview";
import MyPageUserRecord from "../components/mypage/MyPageUserRecord";
import MyPageUserContract from "../components/mypage/MyPageUserContract";
import MyPageUserContractDetail from "../components/mypage/MyPageUserContractDetail";
import MyPageRealtor from "../components/mypage/MyPageRealtor";
import MyPageRealtorReview from "../components/mypage/MyPageRealtorReview";
import MyPageRealtorContract from "../components/mypage/MyPageRealtorContract";
import MyPageRealtorReservation from "../components/mypage/MyPageRealtorReservation";
import MyPageRealtorReservationDetail from "../components/mypage/MyPageRealtorReservationDetail";
import MyPageRealtorDetail from "../components/mypage/MyPageRealtorDetail";
import MyPageRealtorModify from "../components/mypage/MyPageRealtorModify";
import ConsultingPage from "../pages/ConsultingPage";
import ErrorCommonPage from "../pages/ErrorCommonPage";
import HousePage from "../pages/HousePage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import ReservationPage, { sidoLoader } from "../pages/ReservationPage";
import SignUpPageRealtor from "../components/SignUpPageRealtor";
import SignUpPageUser from "../components/SignUpPageUser";
import SignUpPage from "../pages/SignUpPage";
import AlertPage, { alertLoader } from "../pages/AlertPage";
import ContractPage from "../pages/ContractPage";
import { loader as houseModifyLoader } from "../components/house/HouseModify";
import { ProtectedRouter } from "../components/common/AuthProtector";
import ContractPageUser from "../components/contract/ContractPageUser";
import ContractPageRealtor from "../components/contract/ContractPageRealtor";
import ConsultingRightReservationList from "../components/consulting/ConsultingRightReservationList";
import ConsultingRightReservationHouseList, {
  consultingDetailLoader,
} from "../components/consulting/ConsultingRightReservationHouseList";
import { loader as ContractUserLoader } from "../components/contract/ContractPageUser";

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
      <Route
        path="reservation"
        element={<ReservationPage />}
        loader={sidoLoader}
      ></Route>
      <Route path="consulting/:sessionId" element={<ConsultingPage />}>
        <Route
          index
          element={
            <ProtectedRouter condition={true}>
              <ConsultingRightReservationList />
            </ProtectedRouter>
          }
        />
        <Route
          path=":consultingNo"
          element={<ConsultingRightReservationHouseList />}
          loader={consultingDetailLoader}
        />
      </Route>
      <Route path="house" element={<HousePage />}>
        <Route index element={<HouseList />}></Route>
        <Route path="regist" element={<HouseRegist />}></Route>
        <Route path="detail/:itemNo" element={<HouseDetail />}></Route>
        <Route
          path="modify/:itemNo"
          element={<HouseModify />}
          loader={houseModifyLoader}
          errorElement={
            <ErrorCommonPage errorMsg="매물 정보를 읽어오는데 실패했습니다." />
          }
        ></Route>
      </Route>
      <Route path="mypage" element={<MyPage />}>
        <Route path="user" element={<MyPageUser />} loader={myPageUserLoader}>
          <Route path="user-record" element={<MyPageUserRecord />}></Route>
          <Route path="user-review" element={<MyPageUserReview />}></Route>
          <Route
            path="user-reservation"
            element={<MyPageUserReservation />}
          ></Route>
          <Route
            path="user-reservation-detail"
            element={<MyPageUserReservationDetail />}
          ></Route>
          <Route path="user-contract" element={<MyPageUserContract />}>
            <Route
              path="user-contract-detail"
              element={<MyPageUserContractDetail />}
            ></Route>
          </Route>
        </Route>
        <Route
          path="user-detail-info"
          element={<MyPageUserDetail />}
          loader={userInfoLoader}
        ></Route>
        <Route
          path="user-modify-info"
          element={<MyPageUserModify />}
          loader={userInfoLoader}
        ></Route>
        <Route path="realtor" element={<MyPageRealtor />}>
          <Route
            path="realtor-review"
            element={<MyPageRealtorReview />}
          ></Route>
          <Route
            path="realtor-contract"
            element={<MyPageRealtorContract />}
          ></Route>
          <Route
            path="realtor-reservation"
            element={<MyPageRealtorReservation />}
          ></Route>
          <Route
            path="realtor-reservation-detail"
            element={<MyPageRealtorReservationDetail />}
          ></Route>
        </Route>
        <Route
          path="realtor-detail-info"
          element={<MyPageRealtorDetail />}
        ></Route>
        <Route
          path="realtor-modify-info"
          element={<MyPageRealtorModify />}
        ></Route>
      </Route>

      <Route
        path="alert"
        element={
          <ProtectedRouter>
            <AlertPage />
          </ProtectedRouter>
        }
        loader={alertLoader}
      ></Route>
      <Route path="contract" element={<ContractPage />}>
        <Route path="" element={<Navigate replace to="user-contract" />} />
        <Route
          path="user-contract"
          element={<ContractPageUser />}
          loader={ContractUserLoader}
        ></Route>
        <Route
          path="realtor-contract"
          element={<ContractPageRealtor />}
        ></Route>
      </Route>
    </Route>
  )
);

export default router;
