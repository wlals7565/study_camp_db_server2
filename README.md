<h1 style='display:flex;align-items:center;'>
<img src='./src/public/로고.png' width='30'>
study_camp
</h1>

<p align="center">
  <a href="" target="_blank" rel="noopener noreferrer"><img src="./src/public/배너.png"  alt="study_camp banner" 
/></a>
</p>

<p align='center'>
  <span>
    <a href='' target="_blank" rel="noopener noreferrer"><img src='./src/public/로고.png' width='80px'></a>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <a href='https://www.notion.so/project-node/8d8e7706e9d143f89fcf1c27416fec08?pvs=4' target="_blank" rel="noopener noreferrer"><img src='./src/public/노션.png' width='70px'></a>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <a href='https://www.notion.so/STUDY-CAMP-0e17e795a9334eb29a299ef40cba1f0d?pvs=4' target="_blank" rel="noopener noreferrer"><img src='./src/public/브로슈어.png' width='90px'></a>
  </span>
</p>
<p align='center'>
  사이트 바로가기
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  study_camp 기획안
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  study_camp 브로셔
  <br><br>
</p>

<p dir="auto"><br><br></p>

  프로젝트 참여인원: 4명
  
  진행기간: 2024.01.12 ~ 2024.02.20
  
  소속: 스파르타코딩클럽 NodeJS 3기
  
  본인의 역할: API서버 제작, Socket.io를 활용한 실시간 채팅 구현, AWS 서버 설계, AWS 로드밸런싱 및 오토스케일링, Redis를 이용한 서버 동기화

<h2>👉 프로젝트 소개</h2>
<p>
이 프로젝트는 학습특화 온라인 메타버스를 만드는 것입니다.
온라인 메타버스에서 모여 공부를 하는 트렌드가 생기며<br> 사용자들은  <b>학습</b>에 특화된 메타버스 환경을 원했습니다.
<br><br>
이 서비스를 통해 이용자들은 할 수 있는 일은 아래와 같습니다.
  
- 개인적인 학습 공간을 만들 수 있으며 같이 학습할 파트너들을 초대할 수 있습니다.

- 자신만의 개성있는 아바타를 꾸밀 수 있습니다.

- 채팅과 화상채팅을 통해 소통을 하면서 같이 학습을 할 수 있습니다.

- 계획적인 학습을 도와주기 위해 알림기능을 사용가능합니다.

- 강의 관리 기능을 제공합니다.

- 출석 관리 기능을 제공합니다.
</p>


<p dir="auto"><br><br></p>

<h2 tabindex="-1" dir="auto"><a id="user-content--기술-스택" class="anchor" aria-hidden="true" href="#-기술-스택"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a><g-emoji class="g-emoji" alias="gear" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2699.png">⚙</g-emoji> 기술 스택</h2>
<h3 tabindex="-1" dir="auto"><a id="user-content--frond-end" class="anchor" aria-hidden="true" href="#-frond-end"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a><g-emoji class="g-emoji" alias="heavy_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png">✔</g-emoji> Front-end</h3>
<div dir="auto">
<img src="https://img.shields.io/badge/phaser-F7DF1E?style=for-the-badge">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
</div>
<h3 tabindex="-1" dir="auto"><a id="user-content--back-end" class="anchor" aria-hidden="true" href="#-back-end"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a><g-emoji class="g-emoji" alias="heavy_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png">✔</g-emoji> Back-end</h3>
<div dir="auto">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=NestJS&logoColor=white">
<img src="https://img.shields.io/badge/Typeorm-262627?style=for-the-badge&logo=Typeorm&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
</div>
<h3 tabindex="-1" dir="auto"><a id="user-content--back-end" class="anchor" aria-hidden="true" href="#-back-end"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a><g-emoji class="g-emoji" alias="heavy_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png">✔</g-emoji> Database</h3>
<div dir="auto">
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
<img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=for-the-badge&logo=Amazon RDS&logoColor=white">
<img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white">
</div>
<h3 tabindex="-1" dir="auto"><a id="user-content--dev-tools" class="anchor" aria-hidden="true" href="#-dev-tools"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a><g-emoji class="g-emoji" alias="heavy_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png">✔</g-emoji> DevOps</h3>
<div dir="auto">
<img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white">
<img src="https://img.shields.io/badge/Amazon CloudWatch-FF4F8B?style=for-the-badge&logo=Amazon CloudWatch&logoColor=white">
<img src="https://img.shields.io/badge/AWS ElastiCache-FF9900?style=for-the-badge&logo=AWS ElastiCache&logoColor=white">
</div>
<h3 tabindex="-1" dir="auto"><a id="user-content--dev-tools" class="anchor" aria-hidden="true" href="#-dev-tools"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a><g-emoji class="g-emoji" alias="heavy_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png">✔</g-emoji> 협업툴</h3>
<div dir="auto">
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
</div>

<h2> 🖥 화면 구현 </h2>
<table border="3">
  <tbody>
  <tr align="center">
    <td colspan=3><b>이미지를 클릭하면 크게 볼 수 있습니다!</b></td>
  </tr>
  <tr align="center">
    <td width="300">로그인 페이지</td>
    <td width="300">학습 공간 접속 페이지</td>
    <td width="300">학습 공간 페이지</td>
  </tr>
  <tr>
    <td><img src='./src/public/로그인 페이지.png'></td>
    <td><img src='./src/public/학습 공간 접속 페이지.png'></td>
    <td><img src='./src/public/학습 공간 페이지.png'></td>
  </tr>
  <tr align="center">
    <td>화상 전화</td>
    <td>채팅</td>
    <td>미정</td>
  </tr>
  <tr>
    <td><img src='./src/public/화상전화.png'></td>
    <td><img src='./src/public/채팅.png'></td>
    <td><img src=''></td>
  </tr>
  </tbody>
</table>

<h2>🛠</g-emoji> 프로젝트 아키텍쳐</h2>

![image](./src/public/아키텍쳐.png)



<h2>⌚ 프로젝트 과정 소개</h2>

<table>
<thead>
<tr>
<th align="left"><strong>기간</strong></th>
<th align="left"><strong>작업</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">2024.01.12 ~ 2024.01.17</td>
<td align="left">
  <ul>
    <li>
      데이터베이스 설계 및 API 작성
    </li>
    <li>
      API 작성을 하면서 데이터베이스에서 실제 작업에 필요한 테이블이 누락되어있음을 확인하여 추가하였고 기존 테이블을 일부 수정하였음.
    </li>
    <li>
      데이터베이스의 테이블을 추가하고 수정하는데 있어서 어떤 작업들을 할 것인지 정리하고 각각의 작업들에 대하여 필요한 데이터를 정리하여 테이블 구조가 적합한지 확인함.
    </li>
  </ul>
  </td>
</tr>
  <tr>
<td align="left">2024.01.18 ~ 2024.01.26</td>
<td align="left">
  <ul>
    <li>
      Socket.io를 이용한 전체 채팅 및 DM 기능 구현, 기존 MySQL 데이터 베이스에서 채팅 정보를 따로 분리해 MongoDB로 이전 및 과거 채팅 기록 로드 속도 감소,현재 접속중인 사용자 검색 기능 구현
    </li>
    <li>
      SSE와 WS, Socket.io 중에 무엇을 쓸지 고민하였는데 특정 대상이나 특정 그룹에게만 메세지를 보낼 수 있는 기능을 Socket.io가 지원해줘서 Socket.Io를 사용하게 되었음.
    </li>
    <li>
3만 개의 채팅 데이터에서 특정 유저 관련 채팅을 가져오는데 느리다 것이 체감되어 확인해본 결과 MySQL에 데이터가 많아지자 Join연산에서 부하가 많이 생기는 것을 확인 이런 부하를 제거하기 위해 채팅을 독립적으로 MongoDB에 저장 이후 같은 조건에서 1.8초로 채팅을 가져오는 시간이 줄어든 것을 확인 체감상으로도 빨라짐.
    </li>
    <li>
소켓에 연결된 사용자만을 확인함으로써 현재 접속 중인 사용자들을 가져와 검색할 수 있게 만듦.
    </li>
  </ul>
  </td>
</tr>
   <tr>
<td align="left">2024.01.29 ~ 2024.02.01</td>
<td align="left">
  <ul>
    <li>
      CloudType을 이용한 서버 배포 및 실유저 테스트를 통한 피드백 받기
    </li>
    <li>
      CloudType를 이용하여 서버를 배포한 뒤 실제 사용이 가능하다는 것을 확인.
    </li>
    <li>
실제 사용자를 통해 주요 기능들에 대한 테스트를 진행하였고 버그나 개선되어야 할 점들은 피드백 받음.
    </li>
    <li>
버그들에 대해서는 우선순위를 매기고 우선순위대로 버그를 픽스 하였음.
    </li>
  </ul>
  </td>
</tr>
  <tr>
<td align="left">2024.02.02 ~ 2024.02.08</td>
<td align="left">
  <ul>
    <li>
      CloudType에서 AWS로 배포 이전하기
    </li>
    <li>
      CloudType가 사용하기 편리했지만 AWS에서 지원해주는 오토스케일링, 로드밸런싱, 클라우드와치 같은 서버 관리에 있어서 좋은 기능들이 많았기에 이전을 시도.
    </li>
    <li>
프론트의 경우 변할일이 거의 없고 빠르게 데이터를 가져와 화면을 띄워주는 것이 중요하다고 판단하여 CloudFront와 S3를 이용하여 프론트를 배포.
    </li>
    <li>
데이터를 처리할 서버는 EC2를 이용하여 배포하였고 데이터베이스에 대해서도 Mysql은 RDS, Redis는 ElasticCache for redis로 운영. 
    </li>
  </ul>
  </td>
</tr>
  <tr>
<td align="left">2024.02.13 ~ 2024.02.19</td>
<td align="left">
  <ul>
    <li>
      AWS를 이용하여 로드밸런싱 및 오토스케일링 적용
    </li>
    <li>
      AWS의 CloudWatch 기능을 이용하여 일정 수준의 CPU 사용량이 넘으면 오토스케일링이 작동되게 하였음.
    </li>
    <li>
오토스케일링과 로드밸런싱에는 문제가 없었지만 유저들 간에 보이지 않고 채팅도 되지 않는 현상을 발견하게 됨.
    </li>
    <li>
오토스케일링을 통해 만들어진 서버끼리는 동기화가 되지 않는다는 것을 알아냄.
    </li>
    <li>
서버끼리 동기화를 하기 위해 Pub/Sub을 지원하는 Redis를 이용하여 해당 문제를 해결
    </li>
  </ul>
  </td>
</tr>
</tbody>
</table>

<p dir="auto"><br><br></p>

<h2><g-emoji class="g-emoji" alias="memo" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4dd.png">📝</g-emoji>기술적 의사 결정 </h2>
<table>
<thead>
<tr>
<th align="left"><strong>기술 스택</strong></th>
<th align="left"><strong>사용이유</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Axios</td>
<td align="left">
  <ul>
    <li> 
      비동기 HTTP 통신 라이브러리입니다.
    </li>
    <li>
      프론트에서 API서버와 통신을 편리하게 해줍니다.
    </li>
  </ul>
 </td>
</tr>
<tr>
<td align="left">socket.io</td>
<td align="left">
  <ul>
    <li>
      socket.io는 실시간 양방향 통신 라이브러리입니다.
    </li>
    <li>
      온라인 메타버스에서는 실시간으로 왔다 갔다 해야할 데이터가 많습니다. socket.io는 이러한 데이터를 처리하는데 특화되어 있습니다.
    </li>
  </ul>
  </td>
</tr>
<td align="left">Redis</td>
<td align="left">
   <ul>
   <li>
   인메모리 저장소를 지원하기 때문에 빠른 읽기 쓰기가 가능합니다.
   </li>
    <li> 
      또한 Pub/Sub을 지원하기 때문에 socket.io를 사용하는 동일한 서버를 여러개 두었을 때 동기화를 도와줍니다.
    </li>
  </ul>
</td>
</tr>
<tr>
<td align="left">AWS</td>
<td align="left">
  <ul>
    <li>
      AWS는 클라우드 서비스를 지원하며 이와 관련된 많은 도구들이 존재합니다.
    </li>
    <li>
      AWS에서 지원하는 도구들을 통해 서버와 데이터베이스에 대해서 고가용성, 확장성, 안정성 등을 확보할 수 있습니다.
    </li>
  </ul>
  </td>
</tr>
</tbody>
</table>

<h2>🔎 주요 기능</h2>
<details>
  <ul>
    <li>
    Socket.io를 통해 실시간 채팅을 구현했습니다.<br/>
    전체 채팅과 다이렉트 메시지를 지원합니다.<br/>
    과거의 채팅도 볼 수 있습니다.<br/>
    </li>
      <image src="./src/public/다이렉트 메세지.png"></image>
  </ul>
  <summary>
    채팅 구현
  </summary>
</details>
<details>
  <ul>
    <li>
    socket.io를 이용하여 유저간 인터렉티브를 제공하는 서버와 API 서버를 분리했습니다.<br/>
    API서버를 통해 학습 멤버와 학습 그룹 강의들에 대한 요청을 처리합니다.<br/>
    서버의 분리를 통해 서버의 부하를 분산할 수 있습니다.<br/>
    </li>
  </ul>
  <summary>
    API 서버와 socket.io서버 분리
  </summary>
</details>
<details>
  <ul>
    <li>
    AWS의 S3와 CloudFront를 통해 클라이언트 웹페이지를 배포하였습니다.<br/>
    서버를 EC2를 사용하여 배포하였으며 HTTPS를 적용하였습니다..<br/>
    데이터베이스에 대해서도 REDIS의 경우 ElasticCache for Redis로 MySQL같은 경우는 RDS로 옮겼습니다.<br/>
    </li>
  </ul>
  <summary>
    AWS를 이용한 서버 배포
  </summary>
</details>
<details>
  <ul>
    <li>
    서버의 유연성을 확보하기 위해 오토스케일링을 적용했습니다.<br/>
    오토스케일링을 통해 생성된 서버에 적절하게 부하를 분산하기 위해 로드밸런싱을 적용했습니다.<br/>
    </li>
  </ul>
  <summary>
    오토스케일링 및 로드밸런싱 적용
  </summary>
</details>
<details>
  <ul>
    <li>
    오토스케일링이 적용된 서버들이 동기화되지 않는 문제를 Redis를 통해 해결했습니다.<br/>
    </li>
  </ul>
  <summary>
    Redis를 이용한 서버 동기화
  </summary>
</details>

# 프로젝트 결과 영상
- [영상 링크](https://youtu.be/_-HA_VoVRVs)

# 프로젝트 회고
- 팀원들이 매우 잘해서 고마웠고 한편으로는 내가 못 한 부분이 크게 드러나서 미안했다.
- 채팅 기능에 있어서 가능한 많은 버그들을 잡아냈고 정상적으로 작동하게 만들어서 재밌었다.
- AWS의 다양한 기능들을 이용하면서 배포해보는 경험이 좋았다. AWS를 배우면서 네트워크와 통신에 대해서도 배울 수 있어 좋았다.
- 시간에 치여 기능을 구현한다고 코드의 가독성이 너무 낮아졌다. 협업에서는 서로의 기능을 사용할 것을 염두해 가독성 좋은 코드를 짜야 하는데 이를 지키지 못한 것이 아쉬웠다.
- 주요 기능들은 만들어 냈지만 계획한 기능들을 시간 내에 못 만든 것이 아쉽다.
