window.addEventListener("load", function () {
    const pics = this.document.querySelectorAll(".pic");
    const lightbox = this.document.querySelector("#lightbox"); 
    const imgText = this.document.querySelector(".img-text")
    const lightboxImage = this.document.querySelector("#lightboxImage")
    const lightboxImageDesc = this.document.querySelector("#lightboxImage-desc")
    pics.forEach(function (pic) {
      // console.log(pic);
      pic.addEventListener("click", function () {
        // console.log(this);
        const bicImg = this.getAttribute("data-src");
        lightboxImage.setAttribute("src", bicImg);
        lightbox.style.display = "block";
        imgText.style.display = "none"
      });
    });
    lightbox.onclick = function () {
      lightbox.style.display = "none";
      lightboxImage.style.display = "block"
      lightboxImageDesc.style.display 
    };
  });
  