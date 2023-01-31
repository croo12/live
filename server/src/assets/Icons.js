import { AiOutlineCalendar, AiOutlineCompass } from "react-icons/ai";
import {
  BiArea,
  BiBuilding,
  BiBuildingHouse,
  BiCloset,
  BiFoodTag,
  BiPhoneCall,
  BiBed,
  BiCctv,
} from "react-icons/bi";
import { BsWind, BsFlower1 } from "react-icons/bs";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { FaSink, TbDeviceCctv } from "react-icons/fa";
import {
  GiDesk,
  GiTable,
  GiConverseShoe,
  GiGasStove,
  GiChickenOven,
  GiCaptainHatProfile,
} from "react-icons/gi";
import { GrElevator, GrRestroom } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  MdOutlineSpaceDashboard,
  MdOutlineLocalLaundryService,
  MdLocalLaundryService,
  MdOutlineMicrowave,
  MdDeck,
  MdOutlineDeck,
} from "react-icons/md";
import {
  RiParkingBoxLine,
  RiFridgeLine,
  RiSecurePaymentFill,
  RiAlarmWarningLine,
} from "react-icons/ri";
import { TbBath, TbSofa } from "react-icons/tb";

const Icons = {
  // 매물 상세 - 매물 정보
  area: <BiArea />, // 면적 아이콘
  room: <MdOutlineSpaceDashboard />, // 방(욕실) 아이콘
  buildingFloor: <BiBuilding />, // 층 수 아이콘
  parking: <RiParkingBoxLine />, // 주차 아이콘
  calendar: <AiOutlineCalendar />, // 달력 아이콘
  compass: <AiOutlineCompass />, // 방향 아이콘
  elevator: <GrElevator />, // 엘베 아이콘
  purpose: <BiBuildingHouse />, // 건축물용도 아이콘
  marker: <HiOutlineLocationMarker />, // 위치(상세주소) 아이콘

  // 매물 상세 - 매물 옵션
  bed: <BiBed />, //침대
  washingMachine: <MdOutlineLocalLaundryService />, //세탁기
  airConditioner: <BsWind />, //에어컨
  desk: <GiDesk />, //책상
  closet: <BiCloset />, //옷장
  bathtub: <TbBath />, //욕조
  sink: <FaSink />, //싱크대
  cctv: <BiCctv />, //CCTV
  table: <GiTable />, //식탁
  sofa: <TbSofa />, //소파
  shoeRack: <GiConverseShoe />, //신발장
  refrigerator: <RiFridgeLine />, //냉장고
  dryingMachine: <MdLocalLaundryService />, //건조기
  bidet: <GrRestroom />, //비데
  dishWasher: <CgSmartHomeWashMachine />, //식기세척기
  gasStore: <GiGasStove />, //가스레인지
  inductionCooktop: <BiFoodTag />, //인덕션
  microwave: <MdOutlineMicrowave />, //전자레인지
  gasOven: <GiChickenOven />, //오븐
  guard: <GiCaptainHatProfile />, //경비원
  intercom: <BiPhoneCall />, //인터폰
  keycard: <RiSecurePaymentFill />, //카드키
  fireAlarm: <RiAlarmWarningLine />, //화재경보기
  veranda: <MdDeck />, //베란다
  terrace: <MdOutlineDeck />, //테라스
  garden: <BsFlower1 />, //마당
};

export default Icons;
