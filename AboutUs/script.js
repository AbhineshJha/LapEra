class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();



    document.addEventListener("DOMContentLoaded", function () {
        // Get the slider wrapper and items
        var sliderWrapper = document.querySelector(".slider-wrapper");
        var sliderItems = document.querySelectorAll(".slider-item");

        // Set the index and width variables
        var currentIndex = 0;
        var itemWidth = sliderItems[0].clientWidth;

        // Function to move the slider to the next item
        function nextSlide() {
            currentIndex = (currentIndex + 1) % sliderItems.length;
            updateSlider();
        }

        // Function to move the slider to the previous item
        function prevSlide() {
            currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
            updateSlider();
        }

        // Function to update the slider position
        function updateSlider() {
            var newPosition = -currentIndex * itemWidth;
            sliderWrapper.style.transform = "translateX(" + newPosition + "px)";
        }

        // Add event listeners for next and previous buttons
        document.getElementById("nextBtn").addEventListener("click", nextSlide);
        document.getElementById("prevBtn").addEventListener("click", prevSlide);
    });
