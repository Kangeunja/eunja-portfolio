import { useEffect, useRef, useState } from "react";
import TopMenu from "../../components/layout/TopMenu";
import "../../assets/css/home.css";
import About from "../about/About";
import Skill from "../skill/Skill";
import Design from "../design/Design";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { data } from "../../data/homeData";

const Home = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const designRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // 스크롤시 헤더 배경색 변경상태
  const [scrolled, setScrolled] = useState(false);

  // 메뉴 클릭 시 해당 섹션으로 부드럽게 스크롤 이동
  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // 페이지 진입시 실행함수
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopMenu
        scrolled={scrolled}
        onHome={() => scrollTo(homeRef)}
        onAbout={() => scrollTo(aboutRef)}
        onSkills={() => scrollTo(skillsRef)}
        onProject={() => scrollTo(projectRef)}
        onDesign={() => scrollTo(designRef)}
        onContact={() => scrollTo(contactRef)}
      />
      <div className="main-img" ref={homeRef}>
        <div className="main-text">
          안녕하세요 :) <br />
          <span>웹디자인에서 개발자로 성장</span>하는 <br />
          프론트엔드 개발자 강은자입니다.
        </div>

        <div className="main-bottom__img">
          <div className="main-scroll__line-wrap">
            <div className="main-scroll__line"></div>
          </div>
          <button
            className="main-scroll__text"
            onClick={() => scrollTo(aboutRef)}
          >
            더 알아보기
          </button>
        </div>
      </div>

      <About data={data} aboutRef={aboutRef} />

      <Skill skillsRef={skillsRef} />

      <Projects projectRef={projectRef} />

      <Design designRef={designRef} />

      <Contact contactRef={contactRef} />
    </>
  );
};

export default Home;
