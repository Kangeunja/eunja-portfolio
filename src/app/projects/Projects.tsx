import { useState } from "react";
import "../../assets/css/project.css";
import { projectData } from "../../data/projectData";
import ProjectPopup from "./ProjectPopup";

const Projects = ({ projectRef }: any) => {
  // 상세 내용 클릭 시 팝업에 전달할 text
  const [selectText, setSelectText] = useState<any>(null);

  // 현재 보여지고 있는 tab
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <div className="project" ref={projectRef}>
        <div className="project-title__wrap">
          <div className="project-title">Project</div>
          <div className="project-tab">
            {projectData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTab(index)}
                className={currentTab === index ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="project-con__wrap">
          <div
            className="project-slider"
            style={{
              transform: `translateX(-${currentTab * 1200}px)`,
            }}
          >
            {projectData.map((item, index) => (
              <>
                <div className="project-left__con" key={index}>
                  <img src={item.src} alt="" />
                  {item.text === "Jeju Travel Portal" && (
                    <>
                      <div className="project-left__info">
                        * 화면에 마우스를 올려보세요
                      </div>
                      <div className="project-left__screen">
                        <img src={item.subSrc} alt="콘텐츠" />
                      </div>
                    </>
                  )}
                </div>

                <div className="project-right__con">
                  <div className="project-text">{item.text}</div>
                  <div className="project-data__wrap">
                    <div className="project-date">{item.date}</div>
                    <button
                      className="project-more"
                      onClick={() => setSelectText(item.text)}
                    >
                      상세 내용
                    </button>
                  </div>

                  <div className="project-info">{item.info}</div>
                  <div className="project-skill__wrap">
                    {item.skill.map((skillItem, idx) => (
                      <div key={idx} className="project-skill">
                        {skillItem}
                      </div>
                    ))}
                  </div>

                  <div className="project-tag__wrap">
                    <div
                      className="project-tag-item"
                      onClick={() => window.open(`${item.github}`)}
                    >
                      <div className="project-tag github"></div>
                      <span>Github</span>
                    </div>

                    <div
                      className="project-tag-item"
                      onClick={() => window.open(`${item.web}`)}
                    >
                      <div className="project-tag web"></div>
                      <span>Web</span>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {selectText && (
        <ProjectPopup
          selectText={selectText}
          onClose={() => setSelectText(false)}
        />
      )}
    </>
  );
};

export default Projects;
