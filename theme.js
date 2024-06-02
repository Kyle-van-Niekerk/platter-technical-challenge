// Custom scrollbar

var thumb = document.getElementById("thumb");
var section = document.getElementById("products");
var scrollbar = document.getElementById("scroll-bar");
var thumb = document.getElementById("thumb");

thumb.addEventListener("mousedown", function (event) {
  var startX = event.clientX;
  var startLeft = thumb.offsetLeft;

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(event) {
    var deltaX = event.clientX - startX;
    var newLeft = startLeft + deltaX;

    if (newLeft < 0) {
      newLeft = 0;
    } else if (newLeft > scrollbar.offsetWidth - thumb.offsetWidth) {
      newLeft = scrollbar.offsetWidth - thumb.offsetWidth;
    }

    thumb.style.left = newLeft + "px";
    thumb.style.left = newLeft + "px";

    var scrollRatio = newLeft / (scrollbar.offsetWidth - thumb.offsetWidth);
    var maxScroll = section.scrollWidth - section.clientWidth;
    section.scrollLeft = scrollRatio * maxScroll;
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }
});

// View more functionality on mobile

document.getElementById("view-more").addEventListener("click", function () {
  const hiddenCards = document.querySelectorAll(".card-hide");

  hiddenCards.forEach((card) => {
    card.classList.remove("card-hide");
    card.classList.add("card-show");
  });

  setTimeout(() => {
    this.style.display = "none";
  }, 500);
});

// Product images hover to secondary image

document.addEventListener("DOMContentLoaded", function () {
  var containers = document.querySelectorAll(".product-images");

  containers.forEach(function (container) {
    var firstImage = container.querySelector(".product-image-first");
    var secondImage = container.querySelector(".product-image-second");

    container.addEventListener("mouseover", function () {
      firstImage.classList.remove("product-image-first-show");
      firstImage.classList.add("product-image-first-hide");
      secondImage.classList.remove("product-image-second-hide");
      secondImage.classList.add("product-image-second-show");
    });

    container.addEventListener("mouseleave", function () {
      firstImage.classList.add("product-image-first-show");
      firstImage.classList.remove("product-image-first-hide");
      secondImage.classList.add("product-image-second-hide");
      secondImage.classList.remove("product-image-second-show");
    });
  });
});