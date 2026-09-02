# Kurimi-Observatory (쿠리미 관측소)

⚠️ 비공식 팬메이드 프로젝트
Kurimi-Observatory is an unofficial fan-made project and is not affiliated with, endorsed by, or sponsored by STELLIVE or Aokumo Rin.


STELLIVE 소속 아오쿠모 린(Aokumo Rin)님의 치지직(Chzzk) 라이브 방송에서 발생하는 채팅 트래픽을 분석하여 시청자 반응이 활발했던 구간을 탐색할 수 있도록 하는 비공식 팬메이드 대시보드입니다.

오픈소스 기반 프로젝트인 [Chat-Hype-Meter](https://github.com/CHU3221/ChatHypeMeter) 엔진을 활용하여 구축되었습니다.

![kurimi-obs Lobby](https://raw.githubusercontent.com/CHU3221/kurimi-observatory/main/docs/lobby.png)
![kurimi-obs Dashboard](https://raw.githubusercontent.com/CHU3221/kurimi-observatory/main/docs/dashboard.png)
---

## 소개

본 프로젝트는 치지직 라이브 스트리밍에서 발생한 채팅 활동을 바탕으로 시간대별 채팅량 및 시청자 반응 지표를 분석합니다.

별도의 설치나 가입 없이 웹 브라우저에서 바로 접속하여 인터랙티브 차트를 통해 방송의 흐름을 한눈에 파악할 수 있습니다.

쿠리미들의 반응이 격렬한 구간이 린님의 하이라이트 구간일 것이다 라는 철학으로 개발되었습니다.

채팅 반응은 실제 방송 사건보다 지연되어 발생할 수 있으므로, 차트의 피크 시점과 실제 장면 사이에 시간차가 발생할 수 있습니다.

주요 목표:

* 스트리머 아오쿠모 린님의 치지직 VOD 채팅 데이터 자동 수집 및 정제
* 채팅 트래픽을 기반으로 쿠리미의 방송 참여도(Hype Score) 산출
* 높은 chats/sec 구간을 하이라이트 후보 구간으로 자동 추출 및 다시보기 연동
* 가이드라인을 준수하는 건전한 팬 창작물 생태계 지향



---

## 목차

1. [주요 특징](#주요-특징)
2. [사용 기술 및 기반 엔진](#사용-기술-및-기반-엔진)
3. [접속 및 사용 방법](#접속-및-사용-방법)
4. [저작권 및 출처 (Copyright & Attribution)](#저작권-및-출처-copyright--attribution)

---

## 주요 특징

* **방송 다시보기 목록(Lobby)**: 달력 기반 UI를 통해 린님의 과거 라이브 방송 목록과 각 방송의 Hype Score를 한눈에 열람할 수 있습니다.
* **인터랙티브 미니맵 차트**: 방송 전체의 채팅 트래픽 흐름을 줌/팬 기능을 통해 1분~1초 단위로 정밀하게 탐색합니다.
* **자동 하이라이트 군집화**: 방송 중 채팅 속도가 극점에 달했던 명장면 구간들을 자동으로 추출하여 순위별로 제공합니다.
* **VOD 다이렉트 연동**: 차트의 특정 시점이나 하이라이트 카드를 클릭하면 해당 시간대의 치지직 다시보기 영상으로 즉시 이동합니다.
* **전체 통계 및 자주 쓰인 단어**: 방송 중 자주 등장한 채팅 키워드와 구독티콘 등의 통계를 제공합니다.

---

## 사용 기술 및 기반 엔진

본 서비스의 코어 파이프라인과 프론트엔드는 [Chat-Hype-Meter](https://github.com/CHU3221/ChatHypeMeter) 아키텍처를 기반으로 작동합니다.

### Base Project

* [CHU3221/ChatHypeMeter](https://github.com/CHU3221/ChatHypeMeter) : 정적 서빙 기반 라이브 스트리밍 채팅 분석 파이프라인

### Frontend

* HTML5 / Vanilla JavaScript
* Tailwind CSS / Chart.js

### Backend / Infra

* Python 3.11+ (데이터 수집 및 정제 데몬)
* Nginx (정적 데이터 서빙)
* Cloudflare (Edge Caching & DNS)
* Rocky Linux / Podman (Rootless Container 환경)

---

## 접속 및 사용 방법

별도의 앱 설치나 다운로드 없이 웹 브라우저를 통해 접속할 수 있습니다.

### 1. 접속 링크

* [kurimi-observatory.pages.dev](https://kurimi-observatory.pages.dev/)

### 2. 조작 방법

* **탐색**: 로비에서 원하는 날짜의 방송 카드를 클릭하여 상세 분석 대시보드로 진입합니다.
* **차트 조작**: 마우스 휠(또는 모바일 핀치 줌)을 이용해 차트를 확대/축소하고, 드래그하여 방송 시간대를 이동할 수 있습니다.
* **바로 시청**: 탐색 모드에서 차트의 특정 막대를 클릭하거나, 명장면 탭의 카드를 클릭하여 해당 시점의 치지직 VOD로 이동합니다.

---

## 저작권 및 출처 (Copyright & Attribution)

이 프로젝트는 스텔라이브의 2차 창작 가이드라인을 참고하여 제작된 비공식 팬메이드 프로젝트입니다.

프로젝트 공개 전 최신 공식 가이드라인을 확인하고 이에 맞게 운영하는 것을 원칙으로 합니다.

본 프로젝트가 수집 및 분석하는 메타데이터와 채팅 내역의 원본은 **스텔라이브 소속 아오쿠모 린**님의 치지직(Chzzk) 라이브 스트리밍 방송을 기반으로 합니다.

* 원본 방송 및 관련 지적재산권에 대한 모든 권리는 해당 저작권자에게 귀속됩니다.
* 본 프로젝트는 해당 데이터 및 원본 콘텐츠에 대한 권리를 주장하지 않으며, 팬메이드 2차창작 프로젝트의 목적으로만 사용합니다.
* 본 프로젝트는 '스텔라이브' 또는 '아오쿠모 린'과 공식적인 제휴, 후원 또는 협력 관계가 없습니다.
* 원본 콘텐츠의 이용 및 2차창작물의 배포에 관한 자세한 사항은 해당 공식 2차창작 가이드라인을 참고하시기 바랍니다.



---

This project is an unofficial fan-made project created with reference to the applicable fan-work guidelines.

The metadata and chat history analyzed in this project are based on the Chzzk live streams of **Rin Aokumo**, a talent affiliated with **STELLIVE**.

* All rights to the original content and related intellectual property belong to their respective copyright holders.
* This project does not claim ownership of the source material. The data is used solely for the purpose of this fan-made derivative work.
* This project is not officially affiliated with, endorsed by, sponsored by, or otherwise associated with STELLIVE or Rin Aokumo.
* Please refer to the applicable official fan-work guidelines for further information regarding the use and distribution of derivative works.