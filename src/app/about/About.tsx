import "../../assets/css/about.css";

const About = ({ data, aboutRef }: any) => {
  return (
    <div ref={aboutRef} className="about">
      <div className="aout-title__wrap">
        <div className="about-title">ABOUT</div>
      </div>

      <div className="about-con">
        <div className="about-profile">
          <div className="about-pf__box"></div>
          <div className="about-quote-left"></div>
          <div className="about-pf__info">
            디테일과 디자인 감각으로 코드를 <br />
            완성하며, 사용자 경험까지 놓치지 않는
            <br /> 프론트엔드 개발자 강은자입니다.
          </div>
          <div className="about-quote-right"></div>

          <button className="about-btn">이력서 바로가기</button>
        </div>

        <div className="about-info">
          <div className="about-info__text">
            안녕하세요. 웹 퍼블리싱 학원에서 HTML, CSS, JavaScript, jQuery 등을
            배우며 웹디자이너를 꿈꿔왔습니다. 직접 기획하고 디자인한 화면을
            하나씩 구현해 나가면서, 단순히 보이는 디자인을 넘어 사용자 경험을
            고려해 필요한 기능을 직접 만들어보고 싶다는 생각이 들었고, 그
            과정에서 개발자의 꿈을 갖게 되었습니다.
          </div>

          <div className="about-career">
            <div className="about-carrer__title-wrap">
              <div className="about-carrer__icon"></div>
              <div className="about-carrer__text">Career</div>
            </div>

            <div className="about-carrer__list">
              {data.map((item: any, index: number) => (
                <div key={index} className="about-carrer__item">
                  <div className="about-carrer__dot" />
                  <div className="about-career__date">
                    <span className="year">
                      {"start" in item ? (
                        <>
                          <span>{item.start}</span>
                          <span>~</span>
                          <span>{item.end}</span>
                        </>
                      ) : (
                        <span>{item.year}</span>
                      )}
                    </span>
                  </div>

                  <div className="about-carrer__desc-wrap">
                    <p>{item.title}</p>
                    <p>
                      {item.info1}
                      <br />
                      {item.info2}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-bottom__icon"></div>
      </div>
    </div>
  );
};

export default About;
