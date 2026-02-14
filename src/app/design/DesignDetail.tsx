import { useParams } from "react-router-dom";
import "../../assets/css/designDetail.css";
import DesignHeader from "../../components/layout/DesignHeader";
import { designDetailData } from "../../data/designDetailData";
import { useEffect } from "react";

const DesignDetail = () => {
  const { slug } = useParams();

  const item = designDetailData.find((data) => data.slug === slug);

  // 페이지 들어올 때 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DesignHeader />
      <div className="design-detail">
        <div className="design-detail__top-wrap">
          <div className="design-detail__title">{item?.title}</div>

          <div className="design-detail__wrap">
            <div className={`design-detail__img ${item?.className}`}></div>

            <div className="design-detail__right">
              <div className="design-detail__info-wrap">
                <div className="design-detail__info">
                  <div className="design-detail__t">작업유형</div>
                  <span>{item?.type}</span>
                </div>

                <div className="design-detail__info">
                  <div className="design-detail__t">기여도</div>
                  <span>100%</span>
                </div>
              </div>

              <div className="design-detail__info">
                <div className="design-detail__t">Tools</div>
                <span>{item?.program}</span>
              </div>

              <div className="design-detail__info desc">
                <div className="design-detail__t">설명</div>
                <span>{item?.desc}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="design-detail__mockup-wrap">
          <div className="design-detail__mockup">MOCKUP</div>
          <div
            className={`design-detail__mockup-con ${
              item?.mocks.some((m) => m.slug) ? "row" : "column"
            }`}
          >
            {item?.mocks.map((mock) => (
              <div
                key={mock.className}
                className={`design-detail__mockup-img ${
                  mock.slug ? "" : "full"
                } ${mock.className}`}
              ></div>
            ))}
          </div>
        </div>

        <div className="design-detail__hero-wrap">
          <div className="design-detail__subTitle">Detail</div>

          <div
            className={`design-detail__hero-list ${
              item?.type === "카드뉴스 디자인" ||
              item?.type === "픽토그램 디자인"
                ? "row"
                : "column"
            }`}
          >
            {item?.detailClassName.map((item, index) => (
              <div key={index} className={`design-detail__hero ${item}`}></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignDetail;
