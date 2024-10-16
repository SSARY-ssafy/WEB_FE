# WEB_FE

# 문서 열람 관련 안내
- 나중에 지우거나 수정해야 하는 주석/소개 부분에는 반드시 ★를 적어놓았다(ctrl+f로 찾기 편하게 하기 위함).
- 현재 기본 프로젝트 진행을 위한 내용만을 작성해두었으며, 프로젝트 소개 관련 내용은 전무하다.

# 파일 소개
## 파일 구조
```
project-root/
├── css/
│   ├── default.css
│   ├── common.css
│   ├── index.css
│   ├── member.css
├── calendar/
│   ├── calendar.html (★임시: 두 파일로 분리)
│   └── css/
│       └── calendar.css
├── board/
│   ├── list.html (★임시: 두 파일로 분리)
│   └── write.html (★임시: 두 파일로 분리)
│   └── css/
│       └── board.css (★list와 write를 분리해도 상관없음)
├── header.html
├── index.html
└── footer.html
└── member.html
```

## css 내용 소개
- **default.css**: 기본 css 초기화, 기본 폰트 설정
- **common.css**: header, footer와 같이 페이지에 공통 적용되는 css 내용
- **index.css**: index.html에만 적용되는 css 내용, ★다만 초기 작업 시에는 common.css에 해당할 것 같은 내용도 모두 이곳에 작성해도 된다 > 나중에 옮길 것.
- **member.css**: member.html에만 적용되는 css 내용
- **calendar.css**: calendar 폴더 안 파일에만 적용되는 css 내용
- **board.css**: board 폴더 안 파일에만 적용되는 css 내용

## html 구조 상세 안내
- **index.html**은 메인 페이지에 해당한다.
- **header.html**에는 header 안에 들어가는 내용이 있다.
- **footer.html**에는 footer 안에 들어가는 내용이 있다.
- ★**member.html**은 현재 파일 상의 login.html과 register.html, 그리고 findaccount.html에 해당, 현재는 분리되어 있지만 나중에는 member.html로 합쳐진다. 로그인, 회원가입, ID/PW 찾기 페이지에 해당. 단, ID/PW 찾기 페이지(findaccount.html)는 분리될 가능성이 있다.
- ★**board/list.html**은 jsp에서는 하나로 합쳐질 예정이지만, html로만 작업할 때는 자기소개서 리스트와 마이노트 리스트의 두 파일을 작성하도록 한다.
- ★**board/write.html**은 jsp에서는 하나로 합쳐질 예정이지만, html로만 작업할 때는 자기소개서 write와 마이노트 write의 두 파일을 작성하도록 한다. 만일 하나로 작성하기 어려운 구조라면 jsp에서도 두 파일로 나눠도 된다.
- ★**calendar/calendar.html**은 jsp에서는 하나로 합쳐질 예정이지만, html로만 작업할 때는 채용 캘린더와 마이 캘린더의 두 파일을 작성하도록 한다.

# ★프론트 구성 역할 분담
## 백지민
- 기초 html/css 구조(파일) 생성 (default.css 등의 작성)
- member.html + member.css
- calendar.html + calendar.css

## 최수용
- index.html (header.html + footer.html도 작성, header와 footer는 모든 곳에서 사용하기 때문에 default.css에 작성하거나 common.css 파일을 새로 만들어서 작성한다 - 로그인, 회원가입에는 헤더 푸터가 없기 때문에 파일을 분리하지 않고 default.css에 쓸 것이라면 header footer 등의 css 선택자를 잘 써둘 것)
- list.html

# ★기타
- 각 인원에게 분배되지 않은 파일의 경우 BackEnd의 상황을 보고 차후 분담한다.

# ★작업 상 유의점
- js, css의 정상 적용을 위해 개별 파일을 열기보다는, live server로 파일을 열 것을 권장한다.
- html 파일 중 jsp에서 하나로 합쳐지는 파일들은 모두 하나의 파일을 기본 html로 먼저 작성하여 완성하고, 또 하나의 파일은 완성한 html 파일을 복사한 뒤 세세히 다른 부분만 조금씩 추가하는 식으로 진행하도록 한다. 요컨대, 반드시 하나를 완성한 뒤 다른 것을 진행하도록 한다 (혹은 애초부터 jsp 파일로 작성해도 좋다).
