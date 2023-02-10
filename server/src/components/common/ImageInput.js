/**
 * 이미지 업로드 및 미리보기 컴포넌트
 *
 * prop
 *  - setImage(), 부모 컴포넌트에 image 데이터 설정하는 함수
 *  - maxFileNum, 등록 가능한 최대 파일 수 ( 설정안했을 시 -> 기본 1개 )
 *  - maxFileSize, 등록 가능한 파일 최대 크기( 설정안했을 시 -> 기본 5MB )
 *  - isPreview, 이미지 미리보기 여부 ( true 일 때 미리보기 )
 *  - addButton : 사진 등록 버튼 ( 기본 : 사진 업로드하기 (텍스트) )
 *  - delButton : 사진 삭제 버튼 ( isPreview 설정안했을 때 삭제하기 위해 생성 )
 *  - loadedImages : 백엔드에서 이미지 불러와서 사용할 용도
 *  - setLoadedImages : 부모 컴포넌트에 loadedImage 데이터 설정 함수
 */

import { useEffect, useState } from "react";
import classes from "./ImageInput.module.scss";

const ImageInput = (props) => {
  const [imagePreviewState, setImagePreviewState] = useState([]); // 매물 이미지 미리보기
  const [imageState, setImageState] = useState([]); // 매물 이미지 파일
  const [loadedImages, setLoadedImages] = useState(props.loadedImages); // 이미지 배열[{itemImageNo,imageSrc},{...}]

  // 매물 이미지 변경 이벤트 함수
  const ImageChangeEventHandler = async (data) => {
    const images = [...data.target.files]; // 입력받은 이미지 파일
    data.target.value = ""; // 다음 이미지 선택을 고려해 input 값 초기화

    // 등록 가능 최대 파일 수가 1일 경우
    if (props.maxFileNum === 1 || !props.maxFileNum) {
      if (!images[0].type.includes("image")) {
        alert(
          "등록하실 사진을 확인해주세요!\n이미지 형식의 파일만 등록이 가능합니다."
        );
        return;
      }

      if (
        images[0].size >
        (!props.maxFileSize ? 5 : props.maxFileSize) * 1024 * 1024
      ) {
        alert(
          `등록이 가능한 사진의 최대 크기는 ${
            !props.maxFileSize ? 5 : props.maxFileSize
          }MB입니다.\n업로드 파일의 크기를 확인바랍니다.`
        );
        return;
      }

      setImageState([images[0]]);
      props.setImage(images[0]);
      return;
    }

    const removeDupl = [...imageState, ...images]; // 이미지 파일 중복 제거용 배열

    // 이미지 파일 정보는 객체 배열이므로 -> 파일 이름 속성으로 객체 중복 제거
    const nonDuplImages = removeDupl.filter((item) => {
      let idx; // 중복되는 객체의 인덱스 정보를 담을 변수

      for (let i = 0; i < removeDupl.length; i++) {
        // 반복문을 통해 중복 객체의 인덱스 정보를 찾음
        if (item.name === removeDupl[i].name) {
          idx = i;
          // break; <-- 동일 이름이면 늦게 등록한 이미지가 반환되도록 break 주석
        }
      }

      // 찾은 인덱스(idx)와 일치하는 이미지 객체들을 필터함수로 배열 형태로 반환
      return idx === removeDupl.indexOf(item);
    });

    // 이미지 파일 개수 유효성 검사 ( 기존 등록된 이미지 수도 고려하여 중복제거 후 검사 )
    if (
      nonDuplImages.length + (!loadedImages ? 0 : loadedImages.length) >
      props.maxFileNum
    ) {
      alert(`이미지 등록은 최대 ${props.maxFileNum}개까지만 가능합니다.`);
      return;
    }

    let imageTypeValid = false;
    let imageSizeValid = false;

    // 유효성 검사 ( 파일 형식, 최대 파일 크기)
    nonDuplImages.forEach((image) => {
      if (!image.type.includes("image")) {
        imageTypeValid = true;
      }

      if (
        image.size >
        (!props.maxFileSize ? 5 : props.maxFileSize) * 1024 * 1024
      ) {
        imageSizeValid = true;
      }
    });

    if (imageTypeValid) {
      alert(
        "등록하실 사진을 확인해주세요!\n이미지 형식의 파일만 등록이 가능합니다."
      );
      return;
    }

    if (imageSizeValid) {
      alert(
        `등록이 가능한 사진의 최대 크기는 1장당 ${
          !props.maxFileSize ? 5 : props.maxFileSize
        }MB입니다.\n업로드 파일의 크기를 확인바랍니다.`
      );
      return;
    }

    // 유효성 검사를 통과 시 imageState에 중복제거된 배열 복사
    setImageData([...nonDuplImages]);
  };

  // 이미지 제거용 함수
  const imageRemoveEventHandler = (event) => {
    const targetName = event.target.value;

    const resultSet = imageState.filter((image) => {
      return image.name !== targetName;
    });

    setImageData([...resultSet]);
  };

  // 로드된 이미지 제거용 함수
  const loadedImageRemoveHandler = (event) => {
    const targetNo = event.target.value;

    const resultSet = loadedImages.filter((image) => {
      console.log(targetNo, image.itemImageNo);
      return image.itemImageNo !== +targetNo;
    });

    setLoadedData([...resultSet]);
  };

  const setImageData = (data) => {
    setImageState(data);
    props.setImage(data);
  };

  const setLoadedData = (data) => {
    setLoadedImages(data);
    props.setLoadedImages(data);
  };

  // 매물 이미지 미리보기 처리 ( imageState 변경 시 실행 )
  useEffect(() => {
    if (!props.isPreview) {
      return;
    }
    let imagePreview = []; // 미리보기 데이터 담을 임시 변수

    if (imageState.length === 0) {
      // imageState 길이가 0 이면 previewState를 빈 배열로하고 리턴(삭제 시 마지막 남는 값 제거용)
      setImagePreviewState([]);
      return;
    }

    imageState.forEach((image) => {
      const reader = new FileReader(); // 이미지 파일 읽어줄 친구
      reader.readAsDataURL(image); // 이미지 URL 변환

      // onload : 읽기 성공 시, onloadend : 읽기 성공 실패 여부 상관 없음
      reader.onload = () => {
        imagePreview = [...imagePreview, { image, url: reader.result }]; // 데이터 담아줌

        setImagePreviewState([...imagePreview]); // previewImageState에 넣어줌
      };
    });
  }, [imageState, props.isPreview]);

  const removeAllHandler = () => {
    setImageData();
  };

  return (
    <>
      <div>
        <input
          type="file"
          id="houseImage"
          accept="image/*"
          multiple={props.maxFileNum === 1 || !props.maxFileNum ? false : true}
          onChange={ImageChangeEventHandler}
          style={{ display: "none" }}
        />
        <label htmlFor="houseImage">
          {props.addButton ? props.addButton : <p>사진 업로드하기</p>}
        </label>
      </div>
      {props.delButton && (
        <div onClick={removeAllHandler}>{props.delButton}</div>
      )}
      {props.isPreview && (
        <>
          {imagePreviewState.map((data) => {
            const image = data.image;
            const imageURL = data.url;
            return (
              <div className={classes.previewImage} key={image.name}>
                <img src={imageURL} alt={image.name} id={image.name} />
                <button
                  type="button"
                  onClick={imageRemoveEventHandler}
                  value={image.name}
                >
                  ✖
                </button>
              </div>
            );
          })}
          {loadedImages &&
            loadedImages.map((data) => {
              const imageNo = data.itemImageNo;
              const imageURL = data.imageSrc;
              return (
                <div className={classes.previewImage} key={imageNo}>
                  <img src={imageURL} alt={imageNo} id={imageNo} />
                  <button
                    type="button"
                    onClick={loadedImageRemoveHandler}
                    value={imageNo}
                  >
                    ✖
                  </button>
                </div>
              );
            })}
        </>
      )}
    </>
  );
};

export default ImageInput;
