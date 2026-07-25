import "@/assets/css/about.css";
import { data } from "@/data/aboutData";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="aout-title__wrap">
        <div className="about-title">ABOUT</div>
      </div>

      <div className="about-con">
        <div className="about-profile">
          <div className="about-pf__box">
            <div className="about-pf__img"></div>
          </div>

          <a href="/about_resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="about-btn">이력서 바로가기</button>
          </a>
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

            <div>
              <div className="about-carrer__list">
                <div className="about-carrer__dot" />
                <div className="about-carrer__info">경력</div>
                <div className="about-carrer__item-wrap">
                  {data.experience.map((item, index) => (
                    <div key={index} className="about-carrer__item">
                      <p>{item.company}</p>
                      <p className="role-period">
                        <span>{item.role}</span>
                        <span>{item.period}</span>
                      </p>
                      {item.isLatest && item.notionLink && (
                        <a
                          href={item.notionLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="about-isLatest"
                        >
                          📄 상세 경력기술서 보기
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-carrer__list">
                <div className="about-carrer__dot" />
                <div className="about-carrer__info">자격증</div>
                <div className="about-carrer__item-wrap">
                  {data.certification.map((item, index) => (
                    <div key={index} className="about-carrer__item">
                      <p>{item.title}</p>
                      <p className="role-period">
                        <span>{item.organizer}</span>
                        <span>{item.date}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-carrer__list">
                <div className="about-carrer__dot" />
                <div className="about-carrer__info">교육</div>
                <div className="about-carrer__item-wrap">
                  {data.education.map((item, index) => (
                    <div key={index} className="about-carrer__item">
                      <p>{item.title}</p>
                      <p className="role-period">
                        <span>{item.institution}</span>
                        <span>{item.period}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-bottom__icon"></div>
      </div>
    </div>
  );
};

export default About;
