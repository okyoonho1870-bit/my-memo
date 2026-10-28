/*
  강의 목록 — 새 강의를 추가하는 방법
  1) 슬라이드 HTML 파일을 이 lectures 폴더에 넣습니다. (예: chambumo-1-2.html)
  2) 아래 목록에 { ... } 한 덩어리를 복사해서 붙이고 내용을 고칩니다.
     - file   : 넣은 파일 이름
     - series : 묶음(시리즈) 이름 — 같은 이름끼리 함께 모여 보입니다
     - status : "완료" 또는 "준비중"
     - date   : 강의(예정)일, "YYYY-MM-DD"
  3) 다른 사이트에 있는 자료는 file 대신 url 에 전체 주소를 적습니다. (새 탭으로 열림)
*/
window.LECTURES = [
  {
    file: "chambumo-1-1.html",
    series: "참부모론 해설",
    chapter: "제1장 하늘부모님과 창조",
    title: "1. 하늘부모님의 본질",
    minutes: 18,
    slides: 28,
    status: "완료",
    date: "2026-10-28",
    summary: "명제 21개를 도식과 키워드로 — 하나님은 단순한 창조주가 아니라 우리의 부모이시다.",
    tags: ["명제·도식", "하늘부모님", "심정", "성상·형상", "로고스"]
  },
  {
    url: "https://hs-os-2.vercel.app/chambumo-interview.html",
    series: "인터뷰 자료",
    title: "참부모론 인터뷰",
    status: "완료",
    date: "2026-10-28",
    summary: "참부모론 인터뷰 자료 — 외부 사이트에서 열립니다.",
    tags: ["참부모론", "인터뷰"]
  }
];
