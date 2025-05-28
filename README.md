# 🎁 축의금 분석기

텍스트 대화를 입력하면 AI가 상대방과의 **친밀도 점수**를 분석하고,  
그에 따른 **축의금 금액을 추천**해주는 웹 애플리케이션입니다.  

---

## 📸 데모

👉 [배포 링크](https://weddinggiftai.online/)  
👉 [노션 링크](https://www.notion.so/1d5d67feba0a80cf9985f8b34e2b7189?pvs=4)  

---

## ✨ 주요 기능

- 📄 텍스트 입력 / 파일 업로드
- 🧠 대화 내용 기반 친밀도 점수 분석
- 💸 점수 기반 축의금 추천 금액 제시
- 📊 분석 요약 및 결과 공유 기능
- 📁 마이페이지에서 분석 이력 조회

---

## 🛠 기술 스택

### 프론트엔드
- `Next.js`
- `TypeScript`
- `Tailwind CSS`
- `React Query`
- `Zustand`
- `Framer Motion`
- `React Hook Form`
- `styled-components`

### 백엔드
- `Spring Boot`
- `JPA`, `PostgreSQL` (서버는 별도 저장소에서 관리)

---

## 🧭 서비스 흐름

1. 사용자 입력 (텍스트 or txt 파일)
2. 서버로 POST 요청 전송 → 텍스트 분석 수행
3. 응답으로 분석 결과 + UUID 수신
4. `/result/{uuid}` 경로에서 결과 확인
5. 로그인한 사용자는 마이페이지에서 분석 이력 관리 가능

---
## 💁‍♂️ 프로젝트 팀원
|Frontend|Backend|
|:---:|:---:|
| ![]() | ![]() |
|[김유진](https://github.com/yujini-kim)|[신동휘](https://github.com/tonghwi)|
