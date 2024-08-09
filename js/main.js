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


 // 돋보기 버튼 누르면 입력창이 나오는 코드 
 const searchMb = document.querySelector(".search-mobile")
const searchBar = document.querySelector(".search-reset")
searchMb.addEventListener("click",function(){
  searchBar.style.display = "block"
})

//입력창을 켠상태로 창을 늘렸을 때 자동으로 사라지는 코드
window.addEventListener('resize', function() {
  if (window.innerWidth >= 768) {
    searchBar.style.display = 'none'; // 창 크기가 768px 이상일 때 입력창 숨기기
  }
});

//입력창 바깥을 누르거나 스크롤하면 입력창이 사라지는 코드
document.addEventListener("click", function(event) {
  if (!searchBar.contains(event.target) && !searchMb.contains(event.target)) {
    searchBar.style.display = "none";
  }
});
window.addEventListener("scroll", function() {
  searchBar.style.display = "none";
});

// 메뉴바 아이콘을 누르면 네비가 나오는 코드
  const menubar = document.querySelector(".menubar")
  const navGnb = document.querySelector(".nav-gnb")
  menubar.addEventListener("click", function(){
    navGnb.classList.toggle("active")
  })


  // 목록 개별 삭제하기 버튼(x) 기능
  const reset = document.querySelector("#reset")
  const inputValue = document.querySelector("#searchbar").value
  reset.addEventListener("click" , function(){
    inputValue.innerHTML = ""
  })

};
