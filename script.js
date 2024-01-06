
    var navLinks=document.getElementById("navLinks");

    function showmenu(){
        navLinks.style.right="0";
    }
    function hidemenu(){
        navLinks.style.right="-200px";
    }

// Bottom to top Button 

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    const scrollToTopInterval = setInterval(() => {
        const currentPosition = window.scrollY;
        if (currentPosition > 0) {
            window.scrollBy(0, -50);
        } else {
            clearInterval(scrollToTopInterval);
        }
    }, 15);
}



// card slider

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


// FAQ

const items = document.querySelectorAll(".accordins button");


function toggles() {
    const itemstoggle = this.getAttribute("aria-expanded");

    for (i=0; i<items.length; i++) {
        items[i].setAttribute("aria-expanded","false");
    }

    if(itemstoggle == "false") {
        this.setAttribute("aria-expanded","true");
    }
}

items.forEach((item) => item.addEventListener("click", toggles));
