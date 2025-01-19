<div align="center">

# 🐸 Moneytto 🐸
<a name="readme-top"></a>
![alt text](final-pjt-front/src/assets/logo.jpg)
소비의 시각화부터 맞춤형 재정 조언까지, 당신의 금융친구 **머니또**!

</div>
</br>

### 프로젝트 개요

- 설명 : 삼성청년SW아카데미 1학기 관통 프로젝트
- 기간 : 2024.11.18(월) ~ 2024.11.26(화)

<br>

### 🦾 팀 소개

| 송지영                                      | 손채이                                       |
| ------------------------------------------- | -------------------------------------------- |
| <a href="https://github.com/xongeeuse">github</a> | <a href="https://github.com/chaeyi0318">github</a> |
| 팀장                                         | 팀원                              |
|                                             |                                              |

<br>

### ERD
![alt text](images/머니또_ERD.png)

<br>
<br>

### ⚙ 주요 기능
| **카테고리**        | **기능**           | **설명**                                                                                                                                              |
|---------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **회원**            | 회원가입          | 아이디, 비밀번호, 닉네임, 이메일 입력<br>회원가입 완료 시 생년월일, 보유자산, 월수입을 입력할 수 있는 페이지로 이동                                         |
|                     | 로그인 / 로그아웃  | 아이디와 비밀번호가 일치하지 않을 시 로그인 실패 알림<br>아이디, 비밀번호 입력 후 로그인 완료 시 메인 페이지로 이동                                            |
|                     | 마이페이지         | 프로필 이미지, 닉네임, 생년월일, 월수입, 보유 자산 수정 가능<br>프로필 이미지가 없는 경우 기본 이미지 제공<br>비밀번호 확인 후 회원 탈퇴 완료<br>적금 상품 상세보기에서 찜한 상품 목록 확인<br>풀었던 퀴즈 내역 확인 |
| **가계부**          | 가계부             | 해당 날짜에 게시글 이미지 표시<br>가계부를 기록하면 해당 날짜에 유저가 게시글을 작성할 때 첨부한 이미지 표시<br>달력에 있는 이미지 클릭 시 게시글 상세보기<br>한 날짜에 게시글을 여러 개 등록 가능<br>게시글에 댓글 작성, 수정, 삭제<br>게시글 수정, 삭제 |
|                     | 소비 분석          | 설정한 예산 대비 소비금액에 따른 경고 표시<br>카테고리별 소비 내역을 나타낸 원형 차트 제공<br>각 달의 예산 대비 총 소비 금액 분석                              |
| **적금**            | 적금 상품          | 적금 목표액, 적금 예정 기간, 이자 계산 방식, 금융 권역을 설정하여 조건에 맞는 상품 검색<br>최고 이율 상품을 우선순위로 추천하고 내림차순으로 보기<br>적금 상품 상세보기에서 마음에 드는 상품 찜 가능 및 유저의 적금 상품 보유 여부 표시<br>가입하려는 가계부 연동이 있는 경우 추천 상품 제공<br>적금 상품 상세보기에서 해당 상품의 페이지로 이동 가능 |
| **금융 AI 비서**    | 구매 결정 조언     | 금융 정보를 바탕으로 현재 소비자의 예산과 소비 금액 대비 합리적인 소비인지 분석                                                                          |
|                     | 금융 퀴즈          | 금융과 관련된 OX 퀴즈를 통해 포인트 획득 가능 / 획득한 포인트는 금융 AI 비서를 이용할 때 사용                                                               |

<br>

### 프로젝트 소개
#### 메인
- 로그인 전
![alt text](screenshots/main_beforelogin.png)

- 회원 가입 및 추가 정보 입력 후 자동 로그인
![alt text](screenshots/signup.png)
![alt text](screenshots/additional_info.png)
![alt text](screenshots/additional_info_2.png)

- 로그인 후
![alt text](screenshots/main.png)

#### 소비기록
- 기본 캘린더 화면(좌측 상단에서 해당 월의 예산 설정)
![alt text](screenshots/calendar_default.png)

- 캘린더의 날짜 클릭 시 해당 날짜의 소비 기록 작성 페이지 이동
![alt text](screenshots/post.png)

- 작성 기록 상세 페이지 및 댓글
![alt text](screenshots/post_detail.png) 
![alt text](screenshots/post_comment.png)

- 소비 기록 작성 후(물결의 높이를 통해 예산 대비 소비 현황 쉽게 파악 가능)
![alt text](screenshots/calendar.png)

- 월간 소비 기록 분석 제공
![alt text](screenshots/calendar_report.png)

#### 적금 검색
- 적금 상품 검색
![alt text](screenshots/saving_search_2.png)
- 검색 결과 페이지네이션 및 정렬 옵션 제공
![alt text](screenshots/saving_search_list.png)
- 상품 상세 페이지 및 찜하기 기능
![alt text](screenshots/saving_search_detail.png)

#### 적금 추천
- 화면 우측 상단의 상품 추천받기 클릭
![alt text](screenshots/saving_search.png)
- 회원 정보에 작성된 연령 및 금융 정보 기반으로 비슷한 유저가 많이 보유하고 있는 상품 추천 알고리즘 구현
![alt text](screenshots/saving_recommend1.png)
![alt text](screenshots/saving_recommend2.png)

#### AI를 활용한 소비 조언 및 금전운 제공
- Fortune 탭
![alt text](screenshots/fortune.png)
- 상담 서비스 이용 시 포인트 차감
![alt text](screenshots/fortune_salmal_popup.png)
- 유저의 설정 예산 및 소비 기록 바탕으로 대화 형식을 통한 맞춤형 소비 조언 제공
![alt text](screenshots/fortune_salmal_1.png) ![alt text](screenshots/fortune_salmal_2.png) ![alt text](screenshots/fortune_salmal_3.png)

- 회원정보에 기록된 생년월일 정보 바탕으로 금전운 제공
![alt text](screenshots/fortune_1.png) ![alt text](screenshots/fortune_2.png)

#### 금융 퀴즈
- 금융 퀴즈를 통한 포인트 시스템
![alt text](screenshots/quiz_2.png) ![alt text](screenshots/quiz.png)

#### 마이 페이지
- 회원정보 수정 및 탈퇴
![alt text](screenshots/mypage.png)
![alt text](screenshots/profile_update.png)
![alt text](screenshots/mypage_withdraw.png)

- 찜한 적금 및 지난 퀴즈 모아보기
![alt text](screenshots/mypage_likesavings.png) 
![alt text](screenshots/mypage_quiz_record.png)

## 🛒 기술 스택

### Backend

![Django](https://img.shields.io/badge/Django-092E20.svg?style=for-the-badge&logo=django&logoColor=white)&nbsp;
![Python](https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=python&logoColor=white)&nbsp;
![sqlite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=nodedotjs&logoColor=white)&nbsp;

### Frontend

![Vue.js](https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)&nbsp;

### DevOps

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)&nbsp;
![Github](https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=github&logoColor=white)&nbsp;

### Tools

![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)&nbsp;
![VS code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)&nbsp;
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)&nbsp;
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)&nbsp;

<br />

## 🔧 개발 환경

**Backend**

- django 4.2.16


**Frontend**

- vue.js 3.3.4
