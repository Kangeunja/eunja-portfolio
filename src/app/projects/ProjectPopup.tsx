import { useEffect } from "react";
import "../../assets/css/projectPopup.css";
import { projectPopupData } from "../../data/projectPopupData";

interface ProjectPopupProps {
  onClose: () => void;
  selectText: string;
}
const ProjectPopup = ({ selectText, onClose }: ProjectPopupProps) => {
  // 선택된 text에 해당하는 데이터 조회
  const selectData = projectPopupData.find((item) => item.text === selectText);

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

  const handleInnerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="projectPopup" onClick={onClose}>
      <div className="projectPopup__inner" onClick={handleInnerClick}>
        <div className="projectPopup-box">
          <div className="projecetPopup-title">{selectData?.text}</div>
          <div className="projectPopup-hero__wrap">
            <div className="projecetPopup-hero">
              <p>참여인원</p>
              <p>{selectData?.person}</p>
            </div>
            <div className="projecetPopup-hero">
              <p>기간</p>
              <p>{selectData?.date}</p>
            </div>
            <div className="projecetPopup-hero">
              <p>기여도</p>
              <p>{selectData?.rate}</p>
            </div>
          </div>

          <div className="projectPopup-purpose">{selectData?.purpose}</div>

          <div className="projectPopup-info__wrap">
            <div className="projectPoppu-info__title">상세 내용</div>
            <p>{selectData?.info}</p>
          </div>

          <div className="projectPopup-function__wrap">
            <div className="projectPoppu-info__title">주요 기능</div>
            <ul>
              {selectData?.function.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="projectPopup-flow__wrap">
            <div className="projectPopup-flow__title">서비스 흐름도</div>
            {selectData?.flow.map((flow, index) => (
              <span key={index}>{flow}</span>
            ))}
          </div>

          <div className="projectPopup-step__wrap">
            {selectData?.step.map((step, index) => (
              <div className="projectPopup-step__box" key={index}>
                <div className="projectPopup-step__title">{step.title}</div>
                <div className="projectPopup-step__info">{step.info}</div>
                <div className={step.className}></div>
              </div>
            ))}
          </div>

          <div className="projecetPopup-technology__wrap">
            <div className="projectPopup-technology__title">
              기술 구현 포인트
            </div>

            {selectData?.technology.map((itme, index) => (
              <div key={index} className="projectPopup-technology__info">
                <div className="projectPopup-technology__t">{itme.title}</div>
                <p>{itme.info}</p>
              </div>
            ))}
          </div>

          <div className="projecetPopup-retrospective">
            <div className="projecetPopup-retrospective__title">회고</div>
            <p>{selectData?.retrospective}</p>
          </div>
        </div>

        <button className="projectPopup-close" onClick={onClose}></button>
      </div>
    </div>
  );
};

export default ProjectPopup;
