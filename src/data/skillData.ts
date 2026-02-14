// 스킬별 보여줄 콘텐츠 데이터
export const skillsContent = [
  {
    Language: {
      list: [
        { name: "HTML5", className: "skill-language-html" },
        { name: "CSS3", className: "skill-language-css" },
        { name: "JavaScript", className: "skill-language-js" },
        { name: "TypeScript", className: "skill-language-ts" },
      ],
      description:
        "웹 표준과 접근성을 고려한 마크업을 기반으로 UI를 구현하며, JavaScript와 TypeScript를 활용해 동적인 화면과 로직을 개발합니다.",
    },
  },

  {
    FrontEnd: {
      list: [
        { name: "React", className: "skill-frontend-react" },
        { name: "Recoil", className: "skill-frontend-recoil" },
        { name: "Redux", className: "skill-frontend-redux" },
        { name: "Vite", className: "skill-frontend-vite" },
        { name: "React-Query", className: "skill-frontend-query" },
      ],
      description:
        "사용자 경험을 중심으로 UI 흐름과 인터랙션을 설계하며, React를 기반으로 컴포넌트 단위 개발을 구현합니다. 유지보수를 고려한 코드 구조를 중요하게 생각하며, 상태의 역할에 따라 로컬 상태와 전역 상태를 구분하여 코드를 구현하도록 합니다. ",
    },
  },

  {
    Database: {
      list: [
        { name: "MySQL", className: "skill-database-mysql" },
        { name: "MongoDB", className: "skill-database-mongodb" },
      ],
      description:
        "데이터 구조를 이해하고 API 연동을 통해 프론트엔드에서 효울적으로 데이터를 활용합니다. 데이터의 형태와 흐름을 고려해 화면에 적합한 구조로 가공하고, 안정적인 데이터 처리와 화면 렌더링을 구현합니다.",
    },
  },

  {
    Etc: {
      list: [
        { name: "Git", className: "skill-etc-git" },
        { name: "AWS", className: "skill-etc-aws" },
        { name: "GitHub", className: "skill-etc-github" },
        { name: "Sourcetree", className: "skill-etc-sourcetree" },
        { name: "Notion", className: "skill-etc-notion" },
      ],
      description:
        "Git과 GitHub를 활용해 버전 관리를 진행하며, 협업 환경에서의 브랜치 코드 공유 경험이 있습니다. AWS를 통한 간단한 환경 설정 경험과 Notion을 사용해 작업 정리와 커뮤니케이션을 진행합니다.",
    },
  },
  {
    Design: {
      list: [
        { name: "Figma", className: "skill-design-figma" },
        { name: "Photoshop", className: "skill-design-photoshop" },
        { name: "Illustrator", className: "skill-design-illustrator" },
      ],
      description:
        "Figma를 활용해 UI 설계와 시안 작업을 진행하며, 디자인 의도를 이해한 뒤 프론트엔드 구현으로 연결합니다. 시각적 완성도와 사용성을 함께 고려하여, 개발 단계에서도 디자인 일관성과 퀄리티를 유지하는 것을 중요하게 생각합니다.",
    },
  },
];
