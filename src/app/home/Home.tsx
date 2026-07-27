import { useEffect, useState } from "react";

import TopMenu from "@/components/layout/TopMenu";
import About from "../about/About";
import Skill from "../skill/Skill";
import Design from "../design/Design";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

import "@/assets/css/home.css";

// 타이핑 애니메이션에 사용할 문장들
const texts = [
  "디테일과 디자인 감각으로 코드를 완성하는",
  "사용자 경험까지 놓치지 않는",
];

// 항상 표시되는 텍스트
const finalText = "프론트엔드 개발자 강은자입니다.";

const Home = () => {
  // 스크롤시 헤더 배경색 변경상태
  const [scrolled, setScrolled] = useState(false);

  // 타이핑 애니메이션 상태
  const [displayText, setDisplayText] = useState(""); // 화면에 표시되는 문장
  const [textIndex, setTextIndex] = useState(0); // TEXTS 배열 인덱스
  const [charIndex, setCharIndex] = useState(0); // 현재 글자 위치
  const [isDeleting, setIsDeleting] = useState(false); // 삭제 중인지 여부

  // 메뉴 클릭 시 해당 섹션으로 부드럽게 스크롤 이동
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // 글자 하나씩 추가/삭제 효과
  useEffect(() => {
    const current = texts[textIndex];
    let timeout: number;

    if (!isDeleting) {
      // 글자 추가
      if (charIndex <= current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.substring(0, charIndex));
          setCharIndex((prev) => prev + 1);
        }, 70);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      }
    } else {
      // 글자 삭제
      if (charIndex >= 0) {
        timeout = setTimeout(() => {
          setDisplayText(current.substring(0, charIndex));
          setCharIndex((prev) => prev - 1);
        }, 40);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setCharIndex(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  // 페이지 스크롤 시 헤더 배경색 변경
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 진입시 상태 초기화
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopMenu
        scrolled={scrolled}
        onHome={() => scrollToSection("home")}
        onAbout={() => scrollToSection("about")}
        onSkills={() => scrollToSection("skills")}
        onProject={() => scrollToSection("project")}
        onDesign={() => scrollToSection("design")}
        onContact={() => scrollToSection("contact")}
      />

      <div id="home" className="main-img">
        <div className="main-text">
          {displayText}
          <span className="cursor">|</span>
          <div className="final-text">{finalText}</div>
        </div>

        <div className="main-bottom__img">
          <div className="main-scroll__line-wrap">
            <div className="main-scroll__line"></div>
          </div>
          <button
            className="main-scroll__text"
            onClick={() => scrollToSection("about")}
          >
            더 알아보기
          </button>
        </div>
      </div>

      <About />
      <Skill />
      <Projects />
      <Design />
      <Contact />
    </>
  );
};

export default Home;
