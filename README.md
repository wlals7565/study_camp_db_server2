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

<p align='center'>
  프로젝트 참여인원: 4명
  진행기간: 2024.01.10 ~ 2024.02.20
  소속: 스파르타코딩클럽 NodeJS
  본인의 역할: API서버 제작, Socket.io를 활용한 실시간 채팅 구현, AWS 서버 설계, AWS 로드밸런싱 및 오토스케일링, Redis를 이용한 서버 동기화
</p>

<h2>👉 프로젝트 소개</h2>
<p align='center'>
이 프로젝트는 학습특화 온라인 메타버스를 만드는 것입니다.
온라인 메타버스에서 모여 공부를 하는 트렌드가 생기며<br> 사용자들은  <b>학습</b>에 특화된 메타버스 환경을 원했습니다.
<br><br>
이런 사용자들의 요구에 따라 
<b>학습에 특화된 메타버스 환경을</b> 제공합니다.
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
<h2 tabindex="-1" dir="auto"><a id="user-content--프로젝트-아키텍쳐" class="anchor" aria-hidden="true" href="#-프로젝트-아키텍쳐"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a><g-emoji class="g-emoji" alias="hammer_and_wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png">
<h2>🛠</g-emoji> 프로젝트 아키텍쳐</h2>

![image](./src/public/아키텍쳐.png)

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
<td align="left">Phaser</td>
<td align="left">
  <ul>
    <li>
      HTML5 기반의 게임 개발 프레임워크입니다.
    </li>
    <li>
      자바스크립트를 지원합니다. 백엔드 서버도 자바스크립트를 쓰기 때문에 일관성을 유지할 수 있습니다. 생산성도 향상됩니다.
    </li>
    <li>
      Phaser는 커뮤니티가 타 JS기반 게임 개발 프레임워크 보다 크기 때문에 쉽게 자료를 구할 수 있습니다.
    </li>
  </ul>
  </td>
</tr>
<tr>
<td align="left">NestJS</td>
<td align="left">
  <ul>
    <li>
      NestJS는 서버 사이드 애플리케이션 구축을 지원하는 프레임워크입니다.
    </li>
    <li>
      API를 작성하는데 있어서 모듈화된 코드 작성과 유지보수를 위한 효율적인 도구를 제공합니다.
    </li>
  </ul>
  </td>
</tr>
<tr>
<td align="left">TypeORM</td>
<td align="left">
   <ul>
    <li> 
      객체와 데이터베이스를 매핑해줍니다. 
    </li>
    <li>
      Repository 패턴을 사용하여 코드를 구조화하기 편리합니다.
    </li>
    <li>
      다양한 관계를 지원하고, 관계를 더 쉽게 조작하기 위해 많은 기능을 제공해 줍니다.
    </li>
  </ul>
 </td>
</tr>
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
<tr>
<td align="left">webRTC</td>
<td align="left">
  <ul>
    <li>
      애플리케이션에 실시간 통신 기능을 추가해줍니다.
    </li>
    <li>
      사용자가 카메라와 마이크를 사용하여 통신할 수 있게 만들어줍니다.
    </li>
  </ul>
  </td>
</tr>
<tr>
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
    PassportStrategy를 통해 구글 인증 전략을 구현했습니다.<br/>
    구글 계정으로 회원가입과 로그인이 가능합니다.
    </li>
      <image src="./src/public/구글 로그인.png"></image>
  </ul>
  <summary>
    구글 로그인 구현
  </summary>
</details>
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
    사진필요!<br>
    Socket.io와 WebRTC를 이용해 실시간 화상채팅을 구현했습니다.
    </li>
      <image src=""></image>
  </ul>
  <summary>
    화상채팅 구현
  </summary>
</details>
<details>
  <ul>
    <li>
    온라인 메타버스를 생성할 때 결제기능을 구현했습니다.<br />
    토스페이먼츠의 API를 이용하였습니다.
    </li>
      <image src="./src/public/토스 결제창.png"></image>
  </ul>
  <summary>
    토스 페이먼츠 결제 구현
  </summary>
</details>
<details>
  <ul>
    <li>
    캐릭터를 꾸밀 수 있도록 꾸미기 기능을 넣었습니다.<br />
    헤어, 옷, 피부, 얼굴을 꾸밀 수 있습니다.
    </li>
      <image src="./src/public/꾸미기.png"></image>
  </ul>
  <summary>
    아바타 꾸미기 구현
  </summary>
</details>
<details>
  <ul>
    <li>
    학습 공간 관리자를 위한 백오피스 기능을 넣었습니다.<br />
    학습 공간에서의 동시 접속자 수와 결제 목록, 날짜별 매출을 볼 수 있습니다.
    </li>
      <image src="./src/public/백오피스.png"></image>
  </ul>
  <summary>
    관리자 백오피스 구현
  </summary>
</details>
<details>
  <ul>
    <li>
    학습 공간에 입장시 자동으로 출석체크가 되며 퇴장할때 자동으로 공부 누적시간을 계산해 줍니다.
    </li>
      <image src="./src/public/출석보기.png"></image>
  </ul>
  <summary>
    출석 구현
  </summary>
</details>
<details>
  <ul>
    <li>
    회원가입시 이메일을 통해 유효한 숫자 6자리를 입력해야 정상적으로 회원 가입이 되게 만들었습니다.
    </li>
      <image src="./src/public/이메일인증.png"></image>
  </ul>
  <summary>
    회원가입 이메일 인증 구현
  </summary>
</details>
<details>
  <ul>
    <li>
    학습 공간에서 주기적으로 갱신되는 코드를 통해 입장 가능합니다.
    </li>
      <image src="./src/public/코드입장.png"></image>
  </ul>
  <summary>
    코드 입장 구현
  </summary>
</details>

