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
      // 한국베스트만화
      신과함께: {
        name: "신과함께",
        images: "images/krMainimg/kr_bestMain01.jpg",
        plot: "이승과 저승을 떠돌며 재판하는 이야기",
      },
      유미의세포들: {
        name: "유미의 세포들",
        images: "images/krMainimg/kr_bestMain02.jpg",
        plot: "연애에 관한 이야기를 세포들로 꾸며낸 만화",
      },
      이끼: {
        name: "이끼",
        images: "images/krMainimg/kr_bestMain03.jpg",
        plot: "이끼 내용",
      },
      
      // 한국인기만화
      소녀의세계: {
        name: "소녀의세계",
        images: "images/krMainimg/kr_popularityMain01.jpg",
        plot: "여학생들의 일상과 성장 이야기",
      },
      머니게임:{
        name:"머니게임",
        images:"images/krMainimg/kr_popularityMain02.jpg",
      }
    };

    // 이미지 정보 출력
    const newImg = document.createElement("img");
    newImg.src = showImgInfo[imgname].images;
    newImg.alt = imgname;
    newImg.classList.add("book-img");

    const newName = document.createElement("h2");
    newName.textContent = showImgInfo[imgname].name;

    const newPlot = document.createElement("p");
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

  
});
