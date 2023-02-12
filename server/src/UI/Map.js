import { useEffect } from "react";

const { kakao } = window;

const Map = (props) => {
  const targetAddress = props.address; // 지도에 나타낼 주소
  const targetHouseName = props.houseName; // 지도에 나타낼 건물명

  console.log(targetAddress, targetHouseName);

  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(targetAddress, (result, status) => {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        console.log(coords);

        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: coords, //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 결과값으로 받은 위치를 마커로 표시합니다
        new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        // var infowindow = new kakao.maps.InfoWindow({
        //   map: map,
        //   position: coords,
        //   content: `<div style="width:150px;height:40px;text-align:center;padding:6px 0;">${targetHouseName}</div>`,
        //   removable: true,
        // });
        // infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });

    // 주소-좌표 변환 객체를 생성합니다
  }, [targetAddress, targetHouseName]);

  return <div id="map" style={{ width: "90%", height: "400px" }}></div>;
};

export default Map;
