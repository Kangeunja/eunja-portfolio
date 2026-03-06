import ReadPick from "../assets/img/project/project-left-img1.png";
import jeju from "../assets/img/project/project-left-img2.png";
import jejuDetail from "../assets/img/project/peoject-jeju-content.png";

export const projectData = [
  {
    text: "ReadPick",
    date: "2025-03 ~ 2025-07",
    info: "사용자 경험을 중심으로, 도서 감상평 및 리뷰 작성을 지원하는 웹 서비스를 구현했습니다. 도서명과 작가명 기반의 검색 기능을 제공하며, 추천 및 찜 목록 추가·제거 기능을 통해 사용자의 도서 탐색 및 관리 경험을 개선했습니다. useState를 활용한 컴포넌트 상태 관리와 useSearchParams를 통한 URL 상태 동기화를 적용했으며, 토큰 기반 인증을 통해 로그인 상태를 관리했습니다.",
    skill: ["React", "Typescript", "Recoil", "Axios", "Figma", "Github"],
    src: ReadPick,
    github: "https://github.com/Kangeunja/ReadPick-front-portfolio",
    web: "https://readpick-front-portfolio.netlify.app/",
  },

  {
    text: "Jeju Travel Portal",
    date: "2025-08 ~ 2025-10",
    info: "제주도의 관광지, 축제, 역사 정보를 소개하는 관광 포털 웹 서비스를 구현했습니다. 기존 제주 관광 포털 사이트를 벤치마킹하여 퍼블리싱을 진행하고 React를 활용해 인터페이스를 구현했으며, MSW(Mock Service Worker)를 활용해 API 호출 환경을 구성했습니다. 이를 통해 관광지 및 축제 정보를 탐색하고 제주 관련 정보를 확인할 수 있는 웹 서비스를 제작했습니다.",
    skill: ["React", "Typescript", "Axios", "Figma", "Github"],
    src: jeju,
    subSrc: jejuDetail,
    github: "https://github.com/Kangeunja/Jeju-front",
    web: "https://jeju-portfolio.netlify.app/",
  },
];
