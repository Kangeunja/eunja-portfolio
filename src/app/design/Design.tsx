import { useState } from "react";
import "../../assets/css/design.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  designList,
  artwork,
  visualdesign,
  indesign,
  infographic,
} from "../../data/designData";
import DesignPopup from "./DesignPopup";

const Design = ({ designRef }: any) => {
  const navigate = useNavigate();

  // 현재 선택된 디자인 카테고리 인덱스
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Artwork 클릭 시 팝업에 전달할 선택된 이미지 slug
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // 디자인 카테고리별 이미지 그룹,
  // activeIndex 값에 따라 렌더링 데이터가 변경됨
  const imageGroups = [
    {
      data: visualdesign,
    },

    {
      data: artwork,
    },

    {
      data: indesign,
    },

    {
      data: infographic,
    },
  ];

  // 현재 선택된 카테고리의 데이터
  const current = imageGroups[activeIndex];

  // left, right 컬럼 분리
  // framer-motion을 사용한 스크롤 애니메이션 적용
  // artwork는 팝업, 그외는 상세 페이지로 이동
  const renderImages = (column: "left" | "right", delayOffset = 0) =>
    current.data
      .filter((_, index) =>
        column === "left" ? index % 2 === 0 : index % 2 === 1
      )
      .map((item, index) => (
        <motion.div
          key={item.className}
          className={`design-img ${item.className} ${
            item.title ? "has-overlay" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: index * 0.4 + delayOffset }}
          onClick={() => {
            if (designList[activeIndex].name === "ArtWork") {
              setSelectedImage(item.slug);
            } else {
              navigate(`/design/${item.slug}`);
            }
          }}
        >
          <div className="design-overlay">
            <h4 className="design-title__text">{item.title}</h4>
            <p className="design-desc-text">{item.desc}</p>
          </div>
        </motion.div>
      ));

  return (
    <>
      <div className="design" ref={designRef}>
        <div className="design-title__wrap">
          <div className="design-title">Design</div>
        </div>

        <div className="design-container">
          <div className="design-menu">
            {designList.map((item, index) => (
              <span
                key={index}
                className={`design-item ${
                  activeIndex === index ? "active" : ""
                }`}
                style={
                  activeIndex === index
                    ? { color: designList[index].color }
                    : {}
                }
                onClick={() => setActiveIndex(index)}
              >
                {item.name}
              </span>
            ))}
          </div>

          <div className="design-img__wrap">
            <div className="design-img__left">{renderImages("left")}</div>
            <div className="design-img__right">
              {renderImages("right", 0.2)}
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <DesignPopup
          selectedSlug={selectedImage}
          onClose={() => setSelectedImage(false)}
        />
      )}
    </>
  );
};

export default Design;
