// config.js
const UI_CONFIG = {
    // 사이트 설정
    branding: {
        pageTitle: "쿠리미 관측소 | Aokumo Rin Live Chat Analytics", 
        mainTitle: "쿠리미 관측소",                                
        subTitle: "Aokumo Rin Live Chat Analytics",
        lobbyGreeting: "방송 데이터를 선택해주세요",
        lobbyDesc: "좌측 목록에서 분석할 라이브 스트리밍을 클릭하세요."
    },

    // R2/서버 스토리지 설정
    dataSource: {
        baseUrl: "https://data-kurimiobservatory.chucode.com", 
        globalIndex: "/global_index.json",
        streamsDir: "/streams" 
    },

    chunkTransitionRangeSec: 600, 
    maxZoomRangeSec: 20,          
    yAxisPadding: 0.1,
    
    colors: {
        line: '#007FFF',
        fill: 'rgba(0, 127, 255, 0.08)',
        highlight: 'rgba(0, 127, 255, 0.25)' 
    },
    
    rankStyles: {
        gold: "text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] [-webkit-text-stroke:1px_#0B132B]",
        silver: "text-[#C0C0C0] drop-shadow-[0_0_8px_rgba(192,192,192,0.8)] [-webkit-text-stroke:1px_#0B132B]",
        bronze: "text-[#CD7F32] drop-shadow-[0_0_8px_rgba(205,127,50,0.8)] [-webkit-text-stroke:1px_#0B132B]",
        default: "text-navy-900" 
    },

    // 구독티콘 : 이미지 파일 경로
    emotes: {
        "Angrin": "./assets/Sub Emotes/Angrin.png",
        "aokumorinBeam": "./assets/Sub Emotes/aokumorinBeam.gif",
        "aokumorinBokbok": "./assets/Sub Emotes/aokumorinBokbok.gif",
        "aokumorinBokbokrin": "./assets/Sub Emotes/aokumorinBokbok.gif",
        "aokumorinChuchu": "./assets/Sub Emotes/aokumorinChuchu.gif",
        "aokumorinEee": "./assets/Sub Emotes/aokumorinEee.png",
        "aokumorinEeek": "./assets/Sub Emotes/aokumorinEeek.png",
        "aokumorinEthem": "./assets/Sub Emotes/aokumorinEthem.png",
        "aokumorinEtt": "./assets/Sub Emotes/aokumorinEtt.png",
        "aokumorinHemm": "./assets/Sub Emotes/aokumorinHemm.png",
        "aokumorinKuriminoonchi": "./assets/Sub Emotes/aokumorinKuriminoonchi.png",
        "aokumorinLick": "./assets/Sub Emotes/aokumorinLick.gif",
        "aokumorinLickkurimi": "./assets/Sub Emotes/aokumorinLick.gif",
        "aokumorinNoonchi": "./assets/Sub Emotes/aokumorinNoonchi.png",
        "aokumorinNyo": "./assets/Sub Emotes/aokumorinNyo.png",
        "aokumorinNyoiiik": "./assets/Sub Emotes/aokumorinNyoiiik.png",
        "aokumorinNyoo": "./assets/Sub Emotes/aokumorinNyoo.png",
        "aokumorinRiii": "./assets/Sub Emotes/aokumorinRiii.png",
        "aokumorinRinlight": "./assets/Sub Emotes/aokumorinRinlight.gif",
        "aokumorinRinlight2": "./assets/Sub Emotes/aokumorinRinlight2.gif",
        "aokumorinSakabaksoo": "./assets/Sub Emotes/aokumorinSakabaksoo.gif",
        "aokumorinSweat": "./assets/Sub Emotes/aokumorinSweat.png",
        "Byerin": "./assets/Sub Emotes/Byerin.png",
        "Crin": "./assets/Sub Emotes/Crin.png",
        "Dancerin": "./assets/Sub Emotes/Dancerin.gif",
        "Fanlight": "./assets/Sub Emotes/Fanlight.gif",
        "Heartrin": "./assets/Sub Emotes/Heartrin.png",
        "Huk": "./assets/Sub Emotes/Huk.png",
        "Kumorin": "./assets/Sub Emotes/Kumorin.png",
        "punchrin": "./assets/Sub Emotes/punchrin.gif",
        "aokumorinPunchrin": "./assets/Sub Emotes/punchrin.gif",
        "Question": "./assets/Sub Emotes/Question.png",
        "d_108": "./assets/Emotes/c_36.png"
    }
};