window.addEventListener("load", function () {
  // 스크롤 방지 링크 처리
  document.querySelectorAll(".no-scroll").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId); // targetId 변수 사용
      if (targetElement) {
        // targetElement가 존재하는지 확인
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
  // 이미지 클릭 시 이미지 정보 창 열기/닫기
  const imgLinks = document.querySelectorAll(".imgttt");
  imgLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const infoDiv = document.querySelector("#info");
      showImgInfo(link.getAttribute("data-img"), link);
      infoDiv.classList.toggle("active"); // 'active' 클래스 토글
    });
  });

  // 이미지 정보 출력 함수
  function showImgInfo(imgname, element) {
    const imgDiv = document.getElementById("info");
    imgDiv.innerHTML = "";

    // 이미지 정보 데이터
    const showImgInfo = {
      // 한국 베스트셀러
      신과함께: {
        name: "신과함께",
        images: "images/krMainimg/kr_bestMain01.jpg",
        plot: "사후 세계를 배경으로 한 이야기로, 사망한 주인공 김자홍이 저승에서 7개의 지옥을 거치며 심판받는 과정을 다룹니다. 저승 변호사인 강림도령과 그의 동료들이 김자홍을 변호하며, 그의 생전의 죄와 공적을 평가받게 됩니다. 이야기는 인간의 삶과 죽음, 그리고 죄와 용서에 대한 깊이 있는 메시지를 전달합니다",
      },
      유미의세포들: {
        name: "유미의 세포들",
        images: "images/krMainimg/kr_bestMain02.jpg",
        plot: "주인공 유미의 일상과 연애를 그녀의 뇌 속에 존재하는 다양한 감정과 성격을 가진 세포들의 시각에서 그린 이야기입니다. 각 세포는 유미의 감정, 사고, 행동을 담당하며, 그녀의 연애와 일상에서 벌어지는 여러 상황들을 감정적으로 풀어냅니다",
      },
      이끼: {
        name: "이끼",
        images: "images/krMainimg/kr_bestMain03.jpg",
        plot: "주인공 류해국은 오랫동안 연락이 끊겼던 아버지가 갑자기 사망했다는 소식을 듣고, 아버지가 살던 외딴 시골 마을을 찾습니다. 이 마을은 겉보기에는 평화롭고 조용하지만, 주민들은 이상할 정도로 류해국의 방문을 꺼려하고 경계합니다. 마을은 외부와 단절되어 있고, 주민들은 서로 긴밀한 유대감을 형성하며 외부인들을 배척하는 폐쇄적인 사회를 이루고 있습니다",
      },
      
      // 한국입고
      소녀의세계: {
        name: "소녀의세계",
        images: "images/krMainimg/kr_popularityMain01.jpg",
        plot: "대학 입학을 앞둔 주인공 오나리는 소심하고 평범한 성격을 지닌 소녀로, 학창 시절을 무사히 보내고자 하지만, 그 과정에서 여러 가지 복잡한 사건들과 친구들 사이의 갈등을 겪게 됩니다.특히, 학교에서 가장 인기 있는 '미모 4인방'과의 관계가 중심이 됩니다. 4인방에는 차가운 성격의 유미, 착하지만 자신감 없는 수아, 활발한 지유, 그리고 겉으로는 쿨하지만 내면은 외로운 마리가 속해 있습니다. 오나리는 이들과의 교류를 통해 자신을 발견하고, 우정을 쌓아가며 성장해 갑니다",
      },
      머니게임:{
        name:"머니게임",
        images:"images/krMainimg/kr_popularityMain02.jpg",
        plot:"여러 명의 참가자들이 일정한 공간에 갇혀, 제한된 자원을 가지고 일정 기간 동안 생존하며 상금을 획득하는 과정을 그린 서바이벌 웹툰입니다.결국 게임이 끝나갈수록 돈보다 더 중요한 것이 무엇인지, 인간의 도덕성과 윤리의식이 어떻게 시험받는지를 보여주며, 독자들에게 깊은 생각을 하게 만드는 작품입니다"
      },
      순정빌런:{
        name:"순정빌런",
        images:"images/krMainimg/kr_popularityMain03.jpg",
        plot:"타고난 미모와 매력을 가진 남자 주인공 '한지훈'과 그에게 휘둘리는 여주인공 '강주영'의 이야기를 중심으로 전개되는 로맨스 웹툰입니다. 이 웹툰은 평범한 여주인공이 완벽한 남자 주인공과 얽히면서 벌어지는 달콤하면서도 가슴 아픈 사랑 이야기를 그리고 있습니다"
      },
      // 한국전권
      궁:{
        name:"궁",
        images:"images/krMainimg/kr_allMain01.jpg",
        plot:"대한민국이 입헌군주제를 유지하고 있는 가상의 현대를 배경으로,로맨스뿐만 아니라 권력 다툼, 정치적인 음모, 가족 간의 갈등 등을 다루며, 화려한 궁중 생활과 그 이면에 숨겨진 인물들의 내면을 깊이 있게 그려낸 작품입니다. 작품은 채경이 황태자비로서 성장해 나가는 과정을 중심으로, 진정한 사랑의 의미와 개인의 자유에 대한 고민을 풀어냅니다",
      },
      정글고:{
        name:"정글고",
        images:"images/krMainimg/kr_allMain02.jpg",
        plot:"현실과는 거리가 먼 상황들을 유머러스하게 풀어내면서도, 그 속에 담긴 풍자와 비판을 통해 현대 사회의 여러 문제들을 은유적으로 드러내기도 합니다. 특히 학교 폭력, 권위주의, 부조리한 사회 구조 등에 대한 날카로운 비판을 유머로 풀어내며 독자들에게 웃음과 동시에 생각할 거리를 제공합니다"
      },
      독고리와인드:{
        name:"독고:리와인드",
        images:"images/krMainimg/kr_allMain03.jpg",
        plot:"강혁은 학교 내의 불의와 부조리에 맞서 싸우며, 동시에 여러 인물들과 얽히게 됩니다. 이 과정에서 강혁은 친구와 적을 구분해야 하며, 그의 주변 인물들 또한 각기 다른 이유로 강혁과 관계를 맺습니다. 이 웹툰은 강혁의 성장 과정과 함께, 학교 폭력의 잔인함과 그에 맞서 싸우는 청소년들의 이야기를 강렬하게 그려냅니다"
      },
      // 한국mz
      각시탈:{
        name:"각시탈",
        images:"images/krMainimg/kr_mzMain01.jpg",
        plot:"주인공 이강토는 조선총독부의 경찰로 일하며, 일본 제국에 충성하는 인물로 등장합니다. 그러나 그의 진짜 정체는 일제에 대항하는 비밀 조직의 일원이며, '각시탈'이라는 가면을 쓰고 조선의 독립을 위해 싸우는 의열단의 일원입니다. 각시탈은 가면을 쓴 영웅으로, 일본의 압제에 맞서 싸우며 조선 사람들에게 희망을 심어줍니다"
      },
      열혈강호:{
        name:"열혈강호",
        images:"images/krMainimg/kr_mzMain02.jpg",
        plot:" 주인공 한비광과 그의 동료들이 펼치는 모험을 중심으로 전개됩니다. 한비광은 천하제일검인 아버지와 절세미녀인 어머니 사이에서 태어났지만, 부모님의 죽음으로 인해 어릴 적부터 혼자 자라며 자유롭고 무책임한 성격을 가지게 됩니다. 그러던 중, 무림의 비급서 '살수비전'을 손에 넣게 되면서 무림 세계에 휘말리게 됩니다"
      },
      달려라하니:{
        name:"달려라하니",
        images:"images/krMainimg/kr_mzMain03.jpg",
        plot:"어린 나이에 어머니를 여의고 혼자가 된 소녀로, 어머니와의 이별 후 깊은 상처를 안고 살아갑니다.활발하고 씩씩한 성격을 가지고 있지만, 어머니를 잃은 슬픔 때문에 때때로 반항적인 모습을 보이기도 합니다.그러나 친구들과의 우정, 그리고 운동에 대한 열정을 통해 점차 마음의 상처를 치유해 나가는 이야기"
      },
      // 일본베스트셀러
      원피스:{
        name:"원피스",
        images:"images/jpMainImg/jpBestMain01.png",
        plot:"루피는 어린 시절 우연히 '고무고무 열매'라는 신비한 열매를 먹고 몸이 고무처럼 늘어나는 능력을 얻게 됩니다. 그는 어린 시절 자신에게 큰 영향을 준 해적 샹크스처럼 자유로운 바다를 누비는 해적왕이 되는 것을 꿈꾸며, 전설적인 보물 '원피스(One Piece)'를 찾기 위해 모험을 떠납니다.루피는 모험을 시작하면서 다양한 동료들을 만나게 됩니다"
      },
      나루토:{
        name:"나루토",
        images:"images/jpMainImg/jpBestMain02.png",
        plot:"나루토는 나뭇잎마을에서 태어난 고아로 마을을 파괴한 여우정령이 자기몸에 봉인이 되어서 마을사람들에게 외면을받고 쓸쓸하게 자랍니다.하지만 특유의 유쾌한 성격으로 점차 동료와친구들이 생기고 지라이야라는 선생님을 만나면서 서서히 긍정적으로 바뀌게 되고 어렷을적 꿈인 호카게(마을수장)이 되기 위해 모험을 떠나는 이야기"       
      },
      블리치:{
        name:"블리치",
        images:"images/jpMainImg/jpBestMain03.png",
        plot:"쿠로사키 이치고는 평범한 고등학생이지만, 어릴 때부터 영혼을 볼 수 있는 특별한 능력을 가지고 있습니다. 어느 날, 이치고는 사신인 쿠치키 루키아를 만나게 되고, 그와 동시에 그의 가족이 강력한 악령인 '호로우'에게 공격당하게 됩니다. 이를 막기 위해 루키아는 자신의 사신 능력을 이치고에게 넘겨주고, 이치고는 사신의 힘을 얻게 됩니다"
      },
      // 일본인기
      귀멸의칼날:{
        name:"귀멸읠칼날",
        images:"images/jpMainImg/jpPopularityMain01.png",
        plot:"이야기의 주인공은 카마도 탄지로라는 소년입니다. 탄지로는 산에서 숯을 팔며 가족들과 평화롭게 살아가고 있었지만, 어느 날 집에 돌아와 보니 그의 가족이 모두 잔인하게 살해된 것을 발견하게 됩니다. 유일하게 살아남은 동생 네즈코도 귀신(악마)으로 변해버립니다.탄지로는 네즈코를 구하고, 다시 인간으로 되돌리기 위해 귀신을 처단하는 조직인 '귀살대'에 들어가기로 결심합니다. 그는 귀신들을 사냥하며 점차 자신의 실력을 키우고, 다양한 동료들과 함께 여정을 떠나게 됩니다"
      },
      스파이패밀리:{
        name:"스파이패밀리",
        images:"images/jpMainImg/jpPopularityMain02.png",
        plot:"이야기는 천재 스파이 황혼(코드명: Twilight)이 동서 냉전 시대의 두 나라 사이에서 평화를 유지하기 위해 비밀 임무를 수행하는 데서 시작됩니다. 황혼의 최신 임무는 오스테니아의 정치 지도자인 도노반 데스몬드에게 접근해 그의 계획을 알아내는 것인데, 이를 위해 그는 가족을 꾸려야만 합니다.황혼은 자신의 정체를 숨기고 로이드 포저라는 이름으로 신분을 위장해, 임무를 수행하기 위해 급히 가족을 구성합니다. 그는 고아원에서 입양한 딸 아냐와 위장 결혼한 아내 요르 브라이어와 함께 '포저 가'를 이루게 됩니다"
      },
      체인소맨:{
        name:"체인소맨",
        images:"images/jpMainImg/jpPopularityMain03.png",
        plot:"주인공 덴지가 악마 사냥꾼으로 활동하며 살아가는 이야기입니다. 덴지는 가난과 빚에 시달리며, 전기톱 악마 포치타와 함께 악마를 사냥하며 연명합니다. 어느 날, 덴지는 마피아에게 배신당해 죽음을 맞이하지만, 포치타와의 계약으로 부활해 체인소맨이 됩니다.덴지는 공안의 악마 사냥 부서에 들어가 악마들과 싸우며, 평범한 삶을 꿈꾸지만 점점 더 큰 위험과 음모에 휘말리게 됩니다. 이 작품은 덴지의 처절한 생존과 성장, 그리고 복잡한 인간관계를 중심으로 전개됩니다"
      },
      // 일본전권
      슬램덩크:{
        name:"슬램덩크",
        images:"images/jpMainImg/jpAllMain01.png",
        plot:"주인공 사쿠라기 하나미치는 불량 청소년으로, 중학교 시절 연애에 번번이 실패한 후 고등학교에 입학합니다. 그는 처음에는 농구에 관심이 없었지만, 농구부 매니저 아카기 하루코에게 반해 농구부에 들어가게 됩니다.북산 고등학교 농구부가 전국 대회를 목표로 하여 성장해가는 과정을 중심으로 전개됩니다. 팀원들은 각자의 고난과 역경을 극복하며 팀워크를 쌓아가고, 전국 강호들과의 치열한 경기를 통해 자신들의 실력을 증명해 나갑니다"
      },
      카드캡터체리:{
        name:"카드캡터 체리",
        images:"images/jpMainImg/jpAllMain02.png",
        plot:" 초등학생 사쿠라가 우연히 마법 카드인 크로우 카드를 풀어놓게 되면서 시작됩니다.카드들을 다시 모아 봉인해야 하는 사명을 받고, 마법 소녀로서 모험을 시작합니다.친구 토모요와, 라이벌이자 동료인 샤오랑의 도움을 받아 각기 다른 능력을 가진 크로우 카드들을 모아가며 성장합니다. 이 과정에서 마법과 우정, 사랑을 경험하며, 점점 더 강력한 마법사로 성장하는 이야기입니다"
      },
      강철의연금술사:{
        name:"강철의 연금술사",
        images:"images/jpMainImg/jpAllMain03.png",
        plot:"이야기는 에드워드 엘릭과 그의 동생 알폰스 엘릭이 어머니를 되살리기 위해 금지된 연금술인 인체 연성을 시도하면서 시작됩니다. 그러나 연성은 실패하고, 에드워드는 한쪽 팔과 다리를, 알폰스는 온몸을 잃게 됩니다. 에드워드는 자신의 팔과 다리를 대가로 알폰스의 영혼을 갑옷에 묶어두는 데 성공합니다.형제는 잃어버린 신체를 되찾기 위해 현자의 돌을 찾는 여정을 떠나게 됩니다"
      },
      // 일본mz
      이니셜D:{
        name:"이니셜D",
        images:"images/jpMainImg/jpMzMain01.png",
        plot:"주인공인 고등학생 타쿠미가 낡은 토요타 AE86를 타고 산길에서 뛰어난 운전 실력을 발휘하며, 스트리트 레이싱 세계에서 점차 주목받게 되는 이야기를 그린 만화입니다. 타쿠미는 다양한 레이서들과의 경주를 통해 성장하며, 최고의 레이서로 인정받기 위해 도전합니다"
      },
      몬스터:{
        name:"몬스터",
        images:"images/jpMainImg/jpMzMain02.png",
        plot:"몬스터는 천재 외과의사 텐마가 자신이 살린 소년 요한이 연쇄 살인마라는 사실을 알게 되면서, 그를 추적하는 이야기를 그린 서스펜스 스릴러입니다. 텐마는 요한의 범죄를 막기 위해 자신의 삶을 바치고, 인간의 악마성과 도덕적 딜레마를 탐구하는 여정을 시작합니다"
      },
      도박묵시록카이지:{
        name:"도박묵시록 카이지",
        images:"images/jpMainImg/jpMzMain03.png",
        plot:"주인공 이토 카이지는 무책임하고 나태한 청년으로, 친구의 빚 보증을 서게 되어 거대한 빚을 떠안게 됩니다. 이 절망적인 상황에서 빚을 갚을 기회를 얻기 위해, 그는 위험한 도박에 참여하게 됩니다.카이지는 여러 극단적인 도박 게임에 휘말리며, 목숨을 건 긴장감 넘치는 심리전과 승부를 펼칩니다. 이 과정에서 그는 자신의 지혜와 본능을 발휘해 상대를 속이고, 극한의 상황에서 생존하기 위해 끊임없이 싸웁니다"
      }
    };

    // 이미지 정보 출력
    const newImg = document.createElement("img");
    newImg.src = showImgInfo[imgname].images;
    newImg.alt = imgname;
    newImg.classList.add("book-img");

    const newName = document.createElement("h2");
    newName.setAttribute("class","newNameH")
    newName.textContent = showImgInfo[imgname].name;

    const newPlot = document.createElement("p");
    newPlot.setAttribute("class","newPlotP")
    newPlot.textContent = showImgInfo[imgname].plot;

    imgDiv.appendChild(newName);
    imgDiv.appendChild(newImg);
    imgDiv.appendChild(newPlot);
  }

  // 정보 창 클릭 시 닫기
  const infoDiv = document.getElementById("info");
  infoDiv.addEventListener("click", function () {
    this.classList.remove("active"); // 'active' 클래스 제거
  });

  const lightBox = this.document.querySelector("#lightbox")
  lightBox.onclick = function(){
    lightBox.style.display = "none"
  }
});
