window.addEventListener("load", function () {
  // 스크롤 방지 링크 처리
  document.querySelectorAll(".no-scroll").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId); // targetId 변수 사용
      if (targetElement) { // targetElement가 존재하는지 확인
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      } 
    });
  });

  // 이미지 라이트박스 처리
  const imgbox = this.document.querySelector("#lightboxImage")
  const pics = document.querySelectorAll(".pic");
  const lightbox = document.querySelector("#lightbox");
  const imgText = document.querySelector(".img-text");
  const lightboxImage = document.querySelector("#lightboxImage");
  const lightboxImageDesc = document.querySelector("#lightboxImage-desc");

  pics.forEach(function (pic) {
    pic.addEventListener("click", function () {
      const bigImg = this.getAttribute("data-src");
      lightboxImage.setAttribute("src", bigImg);
      lightbox.style.display = "block";
      imgText.style.display = "none";
      lightboxImage.style.display ="block"
      lightboxImageDesc.style.display = "block"; // lightboxImageDesc 보이도록 설정
    });
  });

  lightbox.onclick = function () {
    lightbox.style.display = "none";
    imgText.style.display = "block"; // imgText를 다시 보이도록 설정
    lightboxImageDesc.style.display = "none"; // lightboxImageDesc 숨김
  };
});
