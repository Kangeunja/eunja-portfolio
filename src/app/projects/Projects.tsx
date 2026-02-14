import { useState } from "react";
import "../../assets/css/project.css";
import { projectData } from "../../data/projectData";
import ProjectPopup from "./ProjectPopup";

const Projects = ({ projectRef }: any) => {
  // 상세 내용 클릭 시 팝업에 전달할 text
  const [selectText, setSelectText] = useState<any>(null);
  return (
    <>
      <div className="project" ref={projectRef}>
        <div className="project-title__wrap">
          <div className="project-title">Project</div>
        </div>

        <div className="project-con__wrap">
          <div className="project-left__con"></div>
          <div className="project-right__con">
            {projectData.map((item, index) => (
              <div key={index}>
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
              </div>
            ))}
            <div className="project-tag__wrap">
              <div
                className="project-tag-item"
                onClick={() =>
                  window.open(
                    "https://github.com/Kangeunja/ReadPick-front-portfolio",
                  )
                }
              >
                <div className="project-tag github"></div>
                <span>Github</span>
              </div>

              <div
                className="project-tag-item"
                onClick={() =>
                  window.open("https://fascinating-muffin-92a8a5.netlify.app/")
                }
              >
                <div className="project-tag web"></div>
                <span>Web</span>
              </div>
            </div>
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
