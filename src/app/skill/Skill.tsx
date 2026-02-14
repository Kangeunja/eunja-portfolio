import { useState } from "react";
import "../../assets/css/skill.css";
import { skillsContent } from "../../data/skillData";

const Skill = ({ skillsRef }: any) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // 스킬 리스트
  const skillsList = ["Language", "FrontEnd", "Database", "Etc", "Design"];

  // 현재 클릭된 스킬의 콘텐츠 보여주기
  const currentContent = Object.values(skillsContent[activeIndex])[0];

  return (
    <div className="skill" ref={skillsRef}>
      <div className="skill-title__wrap">
        <div className="skill-title">Skill</div>
      </div>

      <div className="skill-menu">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className={`skill-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <span>{skill}</span>
            <div className="skill-bar"></div>
          </div>
        ))}
      </div>

      <div className="skill-content">
        {currentContent.list.map(
          (item: { name: string; className: string }, index: number) => (
            <div key={index} className="skill-box__wrap">
              <div className="skill-box">
                <div className={`skill-img ${item.className}`}></div>
              </div>
              <span>{item.name}</span>
            </div>
          )
        )}

        {currentContent.description && (
          <p className="skill-description">{currentContent.description}</p>
        )}
      </div>
    </div>
  );
};

export default Skill;
