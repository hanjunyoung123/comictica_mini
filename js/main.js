//스와이퍼===============
window.onload = function () {
  const swBanner = new Swiper(".sw-banner", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      // 480 : {
      //     slidesPerView: 2
      // },
      // 760 : {
      //     slidesPerView: 3.5
      // },
    },
    // navigation:{
    //     nextEl: ".banner .sw-next",
    //     prevEl: ".banner .sw-prev",
    // },
    pagination: {
      el: ".sw-promotion-pg",
      clickable: true,
    },

    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  //스와이퍼===============

  const swBannerjp = new Swiper(".sw-banner2", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      // 480 : {
      //     slidesPerView: 2
      // },
      // 760 : {
      //     slidesPerView: 3.5
      // },
    },
    // navigation:{
    //     nextEl: ".banner .sw-next",
    //     prevEl: ".banner .sw-prev",
    // },
    pagination: {
      el: ".sw-promotion-pg",
      clickable: true,
    },

    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  // 플레이스 홀더 내용 변경(책 검색)
  function updatePlaceholder() {
    if (window.innerWidth <= 900) {
      document.querySelector(".search-text").setAttribute("placeholder", "찾는 책 검색하기");
    } else {
      document.querySelector(".search-text").setAttribute("placeholder", "찾으시려는 책 이름을 입력해주세요.");
    }
  }
  // 페이지 로드 시 실행
  updatePlaceholder();

  // 창 크기가 변경될 때마다 실행
  window.addEventListener("resize", updatePlaceholder);

  //언어 전환 버튼
  
  const jpBt = document.querySelector(".changePageJP");
  const krBt = document.querySelector(".changePageKR");
  function changeJp() {
    document.querySelectorAll(".krActive").forEach((element) => {
      element.style.display = "none";
    });
    document.querySelectorAll(".jpActive").forEach((element) => {
      element.style.display = "block";
    });

    krBt.style.display = "block";
    jpBt.style.display = "none";
  }

  function changeKr() {
    document.querySelectorAll(".krActive").forEach((element) => {
      element.style.display = "block";
    });
    document.querySelectorAll(".jpActive").forEach((element) => {
      element.style.display = "none";
    });
    jpBt.style.display = "block";
    krBt.style.display = "none";
  }
  jpBt.addEventListener("click", changeJp);
  krBt.addEventListener("click", changeKr);

};
