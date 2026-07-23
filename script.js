/* ==========================================================
   BAHMAN CORE v4.0
   FINAL CLEAN JAVASCRIPT
========================================================== */


/* =====================
   PAGE LOADER
===================== */


window.addEventListener("load",()=>{

/* =====================
   PREMIUM LOADER EXIT
===================== */


const loader = document.getElementById("loader");


if(loader){


    setTimeout(()=>{


        loader.classList.add("hide");


    },2200);


}

});

/* =====================
   MOBILE MENU
===================== */


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){


    menuBtn.addEventListener("click",()=>{


        navLinks.classList.toggle("active");


        if(navLinks.classList.contains("active")){

            menuBtn.innerHTML="✕";

        }

        else{

            menuBtn.innerHTML="☰";

        }


    });


}



/* Close menu after clicking link */


document.querySelectorAll(".nav-links a").forEach(link=>{


    link.addEventListener("click",()=>{


        if(navLinks){

            navLinks.classList.remove("active");

        }


        if(menuBtn){

            menuBtn.innerHTML="☰";

        }


    });


});



/* =====================
   SMOOTH CARD HOVER
===================== */


const cards = document.querySelectorAll(
    ".skill-card,.project-card,.contact-box"
);


cards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";

    });


    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });


});
/* =====================
   SCROLL REVEAL
===================== */


const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("active");


        }


    });


},{

    threshold:0.15

});



revealElements.forEach((element)=>{


    revealObserver.observe(element);


});
/* =====================
   CURSOR GLOW
===================== */


const cursorGlow = document.querySelector(".cursor-glow");


if(cursorGlow){


    document.addEventListener("mousemove",(e)=>{


        cursorGlow.style.left = e.clientX + "px";

        cursorGlow.style.top = e.clientY + "px";


    });


}
/* =====================
   SMART NAVBAR
===================== */


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


    if(navbar){


        if(window.scrollY > 50){

            navbar.classList.add("scrolled");

        }

        else{

            navbar.classList.remove("scrolled");

        }


    }


});





/* =====================
   ACTIVE SECTION LINK
===================== */


const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop = section.offsetTop - 120;


        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });


});
/* =====================
   CARD TILT EFFECT
===================== */


const tiltCards = document.querySelectorAll(
    ".project-card,.skill-card"
);


tiltCards.forEach(card=>{


    card.addEventListener("mousemove",(e)=>{


        const rect = card.getBoundingClientRect();


        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;


        const rotateX =
        ((y / rect.height) - .5) * 8;


        const rotateY =
        ((x / rect.width) - .5) * -8;



        card.style.transform =
        `perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;


    });



    card.addEventListener("mouseleave",()=>{


        card.style.transform="";


    });


});
/* ==========================================================
   CINEMATIC SCROLL ENGINE
========================================================== */


if(typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined"){


    gsap.registerPlugin(ScrollTrigger);



    console.log("BAHMAN CORE Scroll Engine Activated");


}
/* ==========================================================
   HERO PARALLAX
========================================================== */


if(typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined"){


    gsap.to(".hero-content",{

        y:-120,

        opacity:0.2,

        ease:"none",

        scrollTrigger:{

            trigger:".hero",

            start:"top top",

            end:"bottom top",

            scrub:1

        }


    });



    gsap.to(".hero::before",{

        scale:1.5,

        ease:"none",

        scrollTrigger:{

            trigger:".hero",

            start:"top top",

            end:"bottom top",

            scrub:1

        }


    });



    gsap.to(".hero-buttons",{

        y:80,

        opacity:0,

        ease:"none",

        scrollTrigger:{

            trigger:".hero",

            start:"top top",

            end:"60% top",

            scrub:1

        }


    });


}
/* ==========================================================
   FOUNDER CINEMATIC ANIMATION FIX
========================================================== */


if(typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined"){


const founderTL = gsap.timeline({

    scrollTrigger:{

        trigger:".developer",

        start:"top 75%",

        toggleActions:"play none none reverse"

    }

});


founderTL

.from(".developer-banner",{

    x:-120,

    opacity:0,

    duration:1,

    ease:"power3.out"

})


.from(".developer-label,.developer-right h2,.developer-right h3,.developer-tagline,.developer-about",{

    x:120,

    opacity:0,

    stagger:.12,

    duration:.8,

    ease:"power3.out"

})


.from(".tech-stack span",{

    y:40,

    opacity:0,

    stagger:.08,

    duration:.5,

    clearProps:"all"

})


.from(".contact-grid a",{

    y:40,

    opacity:0,

    stagger:.1,

    duration:.5,

    clearProps:"all"

});


}
/* ==========================================================
   SKILLS + PROJECTS CINEMATIC ANIMATION
========================================================== */


if(typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined"){


    // SKILLS


    gsap.from(".skill-card",{

        y:100,

        opacity:0,

        scale:.85,

        stagger:.12,

        duration:.8,

        ease:"power3.out",

        scrollTrigger:{

            trigger:".skills",

            start:"top 75%",

            toggleActions:"play none none reverse"

        }


    });



    // PROJECT CARD


    gsap.from(".project-card",{

        y:120,

        opacity:0,

        scale:.9,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:".projects",

            start:"top 75%",

            toggleActions:"play none none reverse"

        }


    });



    // PROJECT CONTENT


    gsap.from(".project-card > *",{

        y:40,

        opacity:0,

        stagger:.12,

        duration:.6,

        ease:"power3.out",

        scrollTrigger:{

            trigger:".project-card",

            start:"top 80%",

            toggleActions:"play none none reverse"

        }


    });


}
/* ==========================================================
   SCROLL PROGRESS
========================================================== */


const progressBar = document.querySelector(".scroll-progress");


if(progressBar){


window.addEventListener("scroll",()=>{


    const scrollTop =
    document.documentElement.scrollTop;


    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;


    const progress =
    (scrollTop / height) * 100;


    progressBar.style.width =
    progress + "%";


});


}
/* FOOTER REVEAL */


if(typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined"){


gsap.from(".footer",{

    y:100,

    opacity:0,

    duration:1,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".footer",

        start:"top 85%",

        toggleActions:"play none none reverse"

    }

});


}
/* ==========================================================
   GSAP PERFORMANCE SAFETY
========================================================== */


if(typeof ScrollTrigger !== "undefined"){

    ScrollTrigger.refresh();

}
/* ==========================================================
   SECTION DEPTH MOVEMENT
========================================================== */


if(typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined"){


gsap.utils.toArray("section").forEach(section=>{


    gsap.fromTo(section,

    {

        y:40

    },

    {

        y:0,

        ease:"none",

        scrollTrigger:{

            trigger:section,

            start:"top bottom",

            end:"top center",

            scrub:1

        }


    });


});


}
/* ==========================================================
   MAGNETIC BUTTON EFFECT
========================================================== */


const magneticButtons = document.querySelectorAll(
    ".btn-primary, .btn-secondary, .project-btn, .contact-btn"
);


magneticButtons.forEach(button=>{


    button.addEventListener("mousemove",(e)=>{


        const rect = button.getBoundingClientRect();


        const x = e.clientX - rect.left - rect.width / 2;

        const y = e.clientY - rect.top - rect.height / 2;



        button.style.transform = 
        `translate(${x * 0.15}px, ${y * 0.15}px)`;



    });



    button.addEventListener("mouseleave",()=>{


        button.style.transform="";


    });


});
/* ==========================================================
   TEXT REVEAL ANIMATION
========================================================== */


if(typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined"){



gsap.utils.toArray(".text-reveal").forEach(text=>{


    gsap.from(text.children,{

        y:80,

        opacity:0,

        duration:1,

        ease:"power4.out",

        scrollTrigger:{

            trigger:text,

            start:"top 85%",

            toggleActions:"play none none reverse"

        }


    });


});


}
/* ==========================================================
   FINAL GSAP REFRESH
========================================================== */


window.addEventListener("load",()=>{


    if(typeof ScrollTrigger !== "undefined"){

        ScrollTrigger.refresh();

    }


});