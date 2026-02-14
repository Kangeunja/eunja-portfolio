import { useEffect } from "react";
import "../../assets/css/designPopup.css";
import { designPopupData } from "../../data/designPopupData";

interface DesignPopupProps {
  onClose: () => void;
  selectedSlug: string;
}

const DesignPopup = ({ onClose, selectedSlug }: DesignPopupProps) => {
  // 선택된 slug에 해당하는 디자인 데이터 조회
  const imageData = designPopupData.find((item) => item.slug === selectedSlug);

  // 페이지 진입시 실행함수
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  return (
    <div className="designPopup">
      <div className="designPopup__inner">
        <div className="designPopup-title">{imageData?.title}</div>

        <div className="designPopup-info__wrap">
          <div className="designPopup-info">
            <p>아티스트</p>
            <p>Eunja Kang</p>
          </div>

          <div className="designPopup-info">
            <p>제작방식</p>
            <p>디지털 일러스트</p>
          </div>
        </div>

        <div className="designPopup-info__content">
          {imageData?.description}
        </div>

        <div className="designPopup-box">
          <div className={`${imageData?.className}`}></div>
        </div>

        <button className="designPopup-close" onClick={onClose}></button>
      </div>
    </div>
  );
};

export default DesignPopup;
