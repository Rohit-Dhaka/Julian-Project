    // --------nav-bar
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".menulist");
    hamburger.addEventListener("click", mobileMenu);
    function mobileMenu() {
      hamburger.classList.toggle("nav-active");
      document.body.classList.toggle("overflow-hidden");
      navMenu.classList.toggle("nav-active");
    }

    // --------slider
    $('.responsive').slick({      
      prevArrow: ".pre-btn",
      nextArrow: ".next-btn",
      infinite: true,
      dots: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true, 
            autoplay: true,           
            cssEase: 'linear'
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,     
            cssEase: 'linear'      
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,      
            cssEase: 'linear'     
          }
        }                        
      ]
    });


    // ------------tab
    const tabcontant = document.querySelectorAll(".tabcontant");
    const firstcontant = document.querySelector(".tabcontant");
    const fistactivetab = document.querySelector(".allbtn div");
    tabcontant.forEach(e => e.style.display = "none");
    firstcontant.style.display = "block";
    fistactivetab.classList.add("tab1active");
    function clickhere(tabs) {
        tabcontant.forEach(e => e.style.display = "none");
        const selectcontant = document.getElementById(tabs)
        selectcontant.style.display = "block";
        const tabsactive = document.querySelectorAll(".allbtn div")
        tabsactive.forEach(e => e.classList.remove("tab1active"))
        const selecttab = document.querySelector(`[onclick="clickhere('${tabs}')"]`)
        selecttab.classList.add("tab1active")
    }

    // ----------tab-2
    const tabcontant2 = document.querySelectorAll(".tabcontant2");
    const firstcontant2 = document.querySelector(".tabcontant2");
    const fistactivetab2 = document.querySelector(".allbtn2 .tab-2");
    tabcontant2.forEach(e => e.style.display = "none");
    firstcontant2.style.display = "block";
    fistactivetab2.classList.add("active");
    function clicktab(tabs) {
      tabcontant2.forEach(e => e.style.display = "none");
      const selectcontant = document.getElementById(tabs)
      selectcontant.style.display = "block";
      const tabsactive = document.querySelectorAll(".allbtn2 .tab-2")
      tabsactive.forEach(e => e.classList.remove("active"))
      const selecttab = document.querySelector(`[onclick="clicktab('${tabs}')"]`)
      selecttab.classList.add("active")
    }
  



    


    // ---------acc
    let item = document.querySelectorAll(".acc-Item");
        item.forEach(function (e) {
            e.addEventListener("click", function () {
                const isitactive = e.classList.contains("acc-active");
                item.forEach(function (e) {
                    e.classList.remove("acc-active");
                })
                if (!isitactive) {
                    e.classList.toggle("acc-active");
                }
            })
        });




        // ------preloader
        $(document).ready(function () {
          setTimeout(function () {
              $('#container').addClass('loaded');
              // Once the container has finished, the scroll appears
              if ($('#container').hasClass('loaded')) {
                  // It is so that once the container is gone, the entire preloader section is deleted
                  $('#preloader').delay(9000).queue(function () {
                      $(this).remove();
                  });
              }
          }, 2000);
      });