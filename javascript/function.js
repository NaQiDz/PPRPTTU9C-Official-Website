  const slides = document.querySelectorAll(".slide");
        let index = 0;

        setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
        }, 4000);

        window.addEventListener("scroll", function () {
          const navbar = document.querySelector(".navbar");

          if (window.scrollY > 50) {
              navbar.classList.add("scrolled");
          } else {
              navbar.classList.remove("scrolled");
          }
      });


/* =========================================
   SCROLL ANIMATION
========================================= */

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add("show-animation");
    }

  });

}, {
  threshold: 0.2
});


/* LEFT SECTION */
document.querySelectorAll(
  '.creative-section, .image-wrapper, .creative-content, .small-image'
).forEach((el) => {
  observer.observe(el);
});


/* RIGHT SECTION */
document.querySelectorAll(
  '.right-creative-section, .right-image-wrapper, .right-creative-content, .right-small-image'
).forEach((el) => {
  observer.observe(el);
});

/* =========================================
   SCROLL SHOW ANIMATION
========================================= */

const statsSection = document.querySelector('.stats-section');

const statsObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            statsSection.classList.add('show-stats');

            startCounter();

            statsObserver.unobserve(statsSection);
        }

    });

},{
    threshold:0.3
});

statsObserver.observe(statsSection);


/* =========================================
   COUNTER ANIMATION
========================================= */

function startCounter(){

    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {

        const target = +counter.getAttribute('data-target');

        let count = 0;

        const speed = target / 80;

        const updateCounter = () => {

            count += speed;

            if(count < target){

                counter.innerText = Math.floor(count) + "+";

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target + "+";
            }

        };

        updateCounter();

    });

}

function changeImage(mainId, element){

    /* CHANGE MAIN IMAGE */
    document.getElementById(mainId).src = element.src;

    /* REMOVE ACTIVE */
    const groupClass = element.classList[0];

    document.querySelectorAll("." + groupClass)
    .forEach(img => {
        img.classList.remove("active");
    });

    /* ADD ACTIVE */
    element.classList.add("active");
}

function toggleMenu(){

    const sidebar = document.getElementById("sidebar");
    const burger = document.querySelector(".burger");

    sidebar.classList.toggle("active");
    burger.classList.toggle("change");

}