# 관리자 샘플

## create-react-app --template typescript 기반


```
$ npm install - 패키지 설치
$ npm run start - 프로젝트 실행 (craco 로 실행 됨)
```

[http://localhost:3000](http://localhost:3000) -> 실행 주소

#### `폴더구조`

- components - 컴포넌트 모음
  - common - 모든 페이지 사용 컴포넌트
  - `pagename` - 페이지별 컴포넌트 (pages 폴더와 일치)
- constants - 상수 모음
- hooks - container 모음 (api, data 등)
- layouts - 전체 레이아웃 구성 (특정 라우터에 따라 다른 레이아웃 설정 가능)
- pages - 각 페이지 모음 (페이지 최상위만 존재, pages -> components 로 단방향 지향 )
- routes - 라우터 설정 모음
- store - 리덕스
- types - type 정의 모음
