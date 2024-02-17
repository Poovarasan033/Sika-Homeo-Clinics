(function() {
	"use strict";

    // Preloader 
    window.addEventListener('load',function(){
        document.querySelector('body').classList.add("loaded")  
    });

    window.onload = function(){

        // Header Sticky
        const getHeaderId = document.getElementById("navbar");
        if (getHeaderId) {
            window.addEventListener('scroll', event => {
                const height = 150;
                const { scrollTop } = event.target.scrollingElement;
                document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
            });
        }
        
        // Back to Top
        const getId = document.getElementById("backtotop");
        if (getId) {
            const topbutton = document.getElementById("backtotop");
            topbutton.onclick = function (e) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            };
            window.onscroll = function () {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    topbutton.style.opacity = "1";
                } else {
                    topbutton.style.opacity = "0";
                }
            };
        }

    };

    // Hero Slider
    var swiper = new Swiper(".hero-slider-one", {
        spaceBetween: 25,
        grabCursor: true,
        loop: true,
        autoHeight: true,
        speed:1200,
        pagination: {
            el: ".hero-pagination",
            clickable: true
        }
    });
    
    // Banner Slider JS
    var swiper = new Swiper(".hero-slider-four", {
        effect: "fade",
        loop: true,
        grabCursor: true,
        autoHeight: true,
        spaceBetween: 0,
        speed: 1200,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var mySwiper = new Swiper(".hero-gallery-slider", {
        spaceBetween: 1,
        slidesPerView: 3,
        effect: 'coverflow',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        coverflowEffect: {
            rotate: 0,
            modifier: 1,
            slideShadows: false,
        },
        speed:1400,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView:3,
                spaceBetween: 20,
                coverflowEffect: {
                    stretch: -50,
                    depth: 100
                }
            },
            992: {
                slidesPerView: 3,
                coverflowEffect: {
                    stretch: -130,
                    depth: 200
                }
            },
            1200: {
                slidesPerView: 4,
                coverflowEffect: {
                    stretch: -130,
                    depth: 200
                }
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 24,
                coverflowEffect: {
                    stretch: -50,
                    depth: 100
                }
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 24,
                coverflowEffect: {
                    stretch: -100,
                    depth: 100
                }
            },
            1920: {
                slidesPerView: 5,
                spaceBetween: 24,
                coverflowEffect: {
                    rotate: 0,
                    stretch: -140,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false
                }
            }
        }
    });
      
    // Service Slider
    var swiper = new Swiper(".service-slider-one", {
        spaceBetween: 25,
        grabCursor: true,
        loop: true,
        speed:1400,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 1.9,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 2.2,
                spaceBetween: 24
            },
            1400: {
                slidesPerView: 2.8,
                spaceBetween: 24
            }
        }
    });

    // Project Slider
    var swiper = new Swiper(".project-slider-one", {
        spaceBetween: 15,
        grabCursor: true,
        loop: true,
        speed:1400,
        autoHeight: true,
        pagination: {
            el: ".project-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            },
            1400: {
                slidesPerView: 4
            }
        }
    });

    // Testimonial Slider
    var swiper = new Swiper(".testimonial-slider-one", {
        spaceBetween: 25,
        grabCursor: true,
        loop: true,
        speed:1400,
        pagination: {
            el: ".testimonial-one-pagination",
            clickable: true
        }
    });
    var swiper = new Swiper(".testimonial-slider-two", {
        spaceBetween: 25,
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        speed:1400,
        autoHeight: true,
        navigation: {
            nextEl: ".testimonial-button-next",
            prevEl: ".testimonial-button-prev"
        }
    });
    var swiper = new Swiper(".testimonial-slider-three", {
        spaceBetween: 25,
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        speed:1400,
        autoHeight: true,
        navigation: {
            nextEl: ".testimonial-button-next",
            prevEl: ".testimonial-button-prev"
        }
    });

    // Partner Slider
    var swiper = new Swiper(".partner-slider", {
        spaceBetween: 25,
        grabCursor: true,
        loop: true,
        speed:1400,
        autoHeight: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 20
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 24
            }
        }
    });

    // AOS
    AOS.init({
        startEvent: 'load',
    });
    
    // Counter Js
    if ("IntersectionObserver" in window) {
        let counterObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                let counter = entry.target;
                let target = parseInt(counter.innerText);
                let step = target / 200;
                let current = 0;
                let timer = setInterval(function () {
                    current += step;
                    counter.innerText = Math.floor(current);
                    if (parseInt(counter.innerText) >= target) {
                    clearInterval(timer);
                    }
                }, 10);
                counterObserver.unobserve(counter);
                }
            });
        });
    
        let counters = document.querySelectorAll(".counter");
        counters.forEach(function (counter) {
            counterObserver.observe(counter);
        });
    }

    // Quantity Counter
    var resultEl = document.querySelector(".resultSet"),
    plusMinusWidgets = document.querySelectorAll(".v-counter");
    for (var i = 0; i < plusMinusWidgets.length; i++) {
        plusMinusWidgets[i].querySelector(".minusBtn").addEventListener("click", clickHandler);
        plusMinusWidgets[i].querySelector(".plusBtn").addEventListener("click", clickHandler);
    }
    function clickHandler(event) {
        // reference to the count input field
        var countEl = event.target.parentNode.querySelector(".count");
        if (event.target.className.match(/\bminusBtn\b/)) {
            countEl.value = Number(countEl.value) - 1;
        } else if (event.target.className.match(/\bplusBtn\b/)) {
            countEl.value = Number(countEl.value) + 1;
            
        }
        triggerEvent(countEl, "change");
    };
    function triggerEvent(el, type){
        if ('createEvent' in document) {
                // modern browsers, IE9+
                var e = document.createEvent('HTMLEvents');
                e.initEvent(type, false, true);
                el.dispatchEvent(e);
            } else {
                // IE 8
                var e = document.createEventObject();
                e.eventType = type;
                el.fireEvent('on'+e.eventType, e);
        }
    }
    function triggerEvent(el, type){
        if ('createEvent' in document) {
                // modern browsers, IE9+
                var e = document.createEvent('HTMLEvents');
                e.initEvent(type, false, true);
                el.dispatchEvent(e);
            } else {
                // IE 8
                var e = document.createEventObject();
                e.eventType = type;
                el.fireEvent('on'+e.eventType, e);
        }
    }

})();

// Light/Dark Mode
try {
	// function to set a given theme/color-scheme
	function setTheme(themeName) {
		localStorage.setItem('zigo_theme', themeName);
		document.documentElement.className = themeName;
	}
	// function to toggle between light and dark theme
	function toggleTheme() {
		if (localStorage.getItem('zigo_theme') === 'theme-dark') {
			setTheme('theme-light');
		} else {
			setTheme('theme-dark');
		}
	}
	// Immediately invoked function to set the theme on initial load
	(function () {
		if (localStorage.getItem('zigo_theme') === 'theme-dark') {
			setTheme('theme-dark');
			document.getElementById('slider').checked = false;
		} else {
			setTheme('theme-light');
		document.getElementById('slider').checked = true;
		}
	})();
} catch (err) {}