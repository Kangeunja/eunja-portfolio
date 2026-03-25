import projectPopup1 from "../assets/img/projectPopup/projectPopup-data1.png";
import projectPopup2 from "../assets/img/projectPopup/projectPopup-data2.png";
import projectPopup3 from "../assets/img/projectPopup/projectPopup-data3.png";
import projectPopup4 from "../assets/img/projectPopup/projectPopup-data4.png";
import projectPopup5 from "../assets/img/projectPopup/projectPopup-data5.png";
import projectPopup6 from "../assets/img/projectPopup/projectPopup-data6.png";
import projectPopup7 from "../assets/img/projectPopup/projectPopup-data7.png";
import projectPopup8 from "../assets/img/projectPopup/projectPopup-data8.png";
import projectPopup9 from "../assets/img/projectPopup/projectPopup-data9.png";

export const projectPopupData = [
  {
    text: "ReadPick",
    person: "2명",
    date: "2025.03 ~ 2025.07",
    rate: "프론트엔드 전담 (UX 설계 및 기능 구현)",
    purpose: `도서 탐색의 편의성과 감상평 기록까지의 과정을 간소화하여, 사용자가 불필요한 단계 없이
독서 경험을 기록하고 콘텐츠에 좀 더 집중할 수 있는 웹 서비스를 기획했습니다.`,
    info: `관심사를 바탕으로 추천을 해주는 추천목록과 마이페이지에서 내가 쓴 리뷰와 찜목록을 바로 확인 가능하도록
설계했으며, 사용자는 도서명 또는 작가명 기반 검색을 통해 원하는 도서를 탐색할 수 있습니다.

또한 페이지 이동이나 새로고침 이후에도 검색 조건과 목록 상태가 유지되도록 URL상태 동기화를 적용하여
사용자의 재탐색 부담을 줄이도록 했습니다.`,
    function: [
      "도서명·작가명 기반 도서 검색 기능",
      "도서별 감상평 및 리뷰 작성·수정·삭제 기능",
      "추천 도서 및 찜 목록 추가·제거 기능",
      "useState를 활용한 컴포넌트 상태 관리",
      "useSearchParams를 통한 검색 조건 및 URL 상태 동기화",
      "토큰 기반 인증을 통한 로그인 상태 관리",
    ],
    flow: ["도서 검색", "도서 선택", "감상평 작성", "개인 리뷰 관리"],
    step: [
      {
        title: "STEP 01. 도서 검색",
        src: projectPopup1,
        info: "도서명·작가명 기반 키워드 검색을 제공하여, 사용자가 원하는 도서를 빠르고 직관적으로 탐색할 수 있도록 설계했습니다.",
      },

      {
        title: "STEP 02. 감상평 & 리뷰 작성",
        src: projectPopup2,
        info: "도서 상세 화면에서 바로 감상평 또는 리뷰를 작성할 수 있도록 설계하여, 사용자가 바로비로 기록할 수 있습니다.",
      },

      {
        title: "STEP 03. 리뷰관리",
        src: projectPopup3,
        info: "작성한 감상평 또는 리뷰를 한 곳에서 확인하고 관리할 수 있어, 개인의 독서 기록을 체계적으로 정리할 수 있습니다.",
      },
    ],
    technology: [
      {
        title: "상태 관리",
        info: "useState를 활용한 리뷰 작성 상태 등을 컴포넌트 단위로 관리",
      },
      {
        title: "인증 처리",
        info: "토큰 기반 인증 방식으로 로그인 상태를 관리하고, 인증이 필요한 기능 접근 제어",
      },
      {
        title: "API 관리",
        info: "Axios 인스턴스를 분리하여 공통 설정 및 요청, 응답 처리 구조화",
      },
      {
        title: "조건부 렌더링",
        info: "로그인 상태에 따라 리뷰 작성, 찜 기능 접근을 제어하여 사용자 흐름 분기 처리",
      },
      {
        title: "UI 피드백 처리",
        info: "찜 추가,제거 및 리뷰 작성 시 즉각적인 화면 반영으로 사용자 반응성 강화",
      },
      {
        title: "예외 처리",
        info: "인증 만료 및 API 요청 실패 시 사용자에게 상태를 인지할 수 있도록 처리",
      },
    ],

    retrospective: `이번 프로젝트를 통해 기능 구현뿐만 아니라 사용자 흐름과 상태 관리의 일관성이 UX에 큰 영향을 준다는 점을 경험했습니다.
특히 URL 상태 동기화를 통해 새로고침이나 페이지 이동에도 사용자 맥락을 유지하는 설계의 중요성을 체감했으며,
React 훅을 활용한 상태 관리 역량을 강화할 수 있었습니다.

상태 범위가 커지면서 전역 상태 관리 도구를 미처 도입하지 못해 프로젝트 후반부에 전체적인 상태 관리가 다소 복잡해졌으나,
리팩토링을 통해 구조를 정리하고 유지보수성을 개선했습니다.`,
  },

  {
    text: "Jeju Travel Portal",
    person: "1명(개인 프로젝트)",
    date: "2025.08 ~ 2025.10",
    rate: "100%",
    purpose:
      "제주도 여행을 계획하는 관광객들이 관광지, 축제, 역사 정보를 쉽게 탐색할 수 있도록  제주 관광 포털 웹 서비스를 기획했습니다.",
    info: `제주도의 관광지, 축제, 역사 정보를 탐색할 수 있도록 구성했으며, 메인 화면에서는 바로가기 메뉴를 포함해
    사용자들이 관광 정보를 직관적으로 확인할 수 있도록 설계했습니다.
    
    React의 state를 활용하여 화면 상태를 관리하고, Swiper 라이브러리를 적용해 제주도의 대표 음식정보를 슬라이드 형태로 탐색할 수 있도록 구현했습니다.
    
    또한 MSW를 활용하여 API 호출 환경을 구성하여 실제 서비스와 유사한 데이터 흐름을 구현했습니다.`,

    function: [
      "Swiper 라이브러리를 활용한 제주 대표 음식 슬라이드 UI 구현",
      "React state를 활용한 화면 상태 관리",
      "MSW(Mock Service Worker)를 활용한 API 호출 환경 구성",
      "Mock 데이터를 기반으로 관광 정보 목록 및 콘텐츠 렌더링",
    ],
    flow: ["메인 화면 진입", "관광 정보 탐색", "콘텐츠 확인", "추가 탐색"],
    step: [
      {
        title: "STEP 01. 메인 페이지",
        src: projectPopup4,
        info: "제주 관광 포털 메인 화면에서 여행도우미 리모컨, 추천 여행코스, 관광지도를 한눈에 확인할 수 있습니다.",
      },

      {
        title: "STEP 02. 관광/축제 목록 화면",
        src: projectPopup5,
        info: "테마여행, 추천일정, 관광정보센터, 역사 카테고리를 통해 다양한 제주 관광 정보를 확인할 수 있습니다.",
      },

      {
        title: "STEP 03. 콘텐츠 상세 확인",
        src: projectPopup6,
        info: "선택한 관광지 또는 축제의 상세 정보를 확인하며 제주 관련 콘텐츠를 탐색할 수 있습니다.",
      },
    ],
    technology: [
      {
        title: "상태 관리",
        info: "useState를 활용한 리뷰 작성 상태 등을 컴포넌트 단위로 관리",
      },
      {
        title: "API 관리",
        info: "MSW를 활용하여 관광지, 축제, 음식 데이터 API 호출 환경을 구성하고 요청/응답구조를 모킹",
      },

      {
        title: "UI 인터렉셔",
        info: "Swiper 슬라이드를 통해 제주 대표 음식 콘텐츠 탐색 시 부드러운 애니메이션과 반응형 UI 제공",
      },
    ],

    retrospective: `이번 프로젝트를 통해 사용자 흐름과 상태 관리의 일관성이 UX에 큰 영향을 준다는 점을 경험했습니다.
    Swiper 기반 제주 대표 음식 슬라이드와 카테고리별 관광 정보 탐색 등 기능을 구현하며, MSW를 활용한
    API 구조 설계에 한층 더 가까워질수 있었습니다.`,
  },

  {
    text: "Anne Exhibition",
    person: "1명(개인 프로젝트)",
    date: "2026.03 ~ 진행중",
    rate: "100%",
    purpose:
      "서울숲에서 개최된 빨강머리앤 전시회를 찾는 관림객들이 전시 관련한 간단한 정보와 위치, 프로그램등의 정보를 얻을 수 있도록 돕는 웹 서비스를 기획했습니다. ",
    info: `전시의 메인 테마와 각 챕터별 전시작품들, 그리고 전시장 위치 정보를 직관적으로 탐색할 수 있도록 구성했습니다. 
    
    데이터 관리 측면에서는 Supabase를 연동하여 실제 서비스와 동일한 데이터 흐름을 구축하도록 했으며, Vercel을 통해 최적화된 배포 환경을 마련하여 사용자에게 빠르고 안정적인 웹 전시환경을 제공합니다.`,

    function: [
      "React State를 활용한 동적 UI제어",
      "Supabase 기반의 실시간 데이터 관리",
      "Supabase 클라이언트를 활용해 실제 데이터베이스와 통신하는 API 환경 구축",
      "확장성을 고려한 컴포넌트 기반의 전시 콘텐츠 렌더링",
    ],
    flow: ["메인 화면 진입", "전시회 미리보기", "프로그램", "추가 탐색"],
    step: [
      {
        title: "STEP 01. 메인 페이지",
        src: projectPopup7,
        info: "메인 화면에서는 전시소개와 순서, 프로그램과 일러스트작품모음전을 간단하게 확인할 수 있습니다.",
      },

      {
        title: "STEP 02. Exhibition",
        src: projectPopup8,
        info: "챕터별 전시회내용과 다양한 작품들을 한눈에 확인할 수 있습니다.",
      },

      {
        title: "STEP 03. Program",
        src: projectPopup9,
        info: "전시회에서 열리는 프로그램들을 소개하면서 각 프로그램의 상세 정보나 대표 이미지들을 보여주면서 빨강머리앤 전시회 관련 콘텐츠를 탐색할 수 있습니다.",
      },
    ],
    technology: [
      {
        title: "스타일 관리",
        info: "SCSS를 활용하여 전시회 대표 컬러와 폰트 스타일을 공통화하고, 스타일 코드 중복 최소화",
      },
      {
        title: "상태 관리",
        info: "useState를 활용한 전시 챕터별 탭 상태와 데이터들을 컴포넌트 단위로 관리",
      },
      {
        title: "API 관리",
        info: "Supabase 기반 실시간 데이터 연동으로 작품 정보 등 프로그램 데이터를 호출하는 API 환경을 구성",
      },

      {
        title: "배포 관리",
        info: "Vercel을 활용해 자동 배포 파이프라인을 구축하고, Supbase API Key 정보를 환경 변수로 관리",
      },
    ],

    retrospective: `이번 프로젝트를 통해 실제 데이터베이스(Supabase) 연동과 배포 환경(Vercel) 구축을 경험하며, 
    백엔드와 프론트엔드 간의 데이터 흐름을 깊이 있게 이해할 수 있었습니다.
    
    특히 SCSS의 변수를 활용해 전시회의 디자인 시스템을 구조화하여 코드의 재사용성을 높였고, 사용자 경험에 
    영향을 주는 요소들을 체득할 수 있었습니다. 단순히 UI 구현을 넘어, 실제 API 호출 환경을 구성하고 최적화된
     배포 과정을 거치며 한층 더 견고한 웹서비스를 설계하는 역량을 기를 수 있는 소중한 기회였습니다.`,
  },
];
