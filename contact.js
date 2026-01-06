

document.addEventListener("DOMContentLoaded", () => {
  
    const dot = document.querySelector(".cursor-dot");
    const outline = document.querySelector(".cursor-outline");

   
    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

       
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { 
            duration: 500, 
            fill: "forwards",
            easing: "ease-out"
        });
    });

    
    const initHoverEffects = () => {
        const interactables = document.querySelectorAll(
            "a, button, .logo, .skill-card, .contact-card, .icon-link"
        );
        
        interactables.forEach(el => {
            el.addEventListener("mouseenter", () => {
                outline.classList.add("cursor-hover");
            });
            el.addEventListener("mouseleave", () => {
                outline.classList.remove("cursor-hover");
            });
        });
    };

    const handleNavbarScroll = () => {
        const nav = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    };

   
    initHoverEffects();
    window.addEventListener("scroll", handleNavbarScroll);

    window.addEventListener("mousedown", () => {
        outline.style.transform = "translate(-50%, -50%) scale(0.8)";
    });
    window.addEventListener("mouseup", () => {
        outline.style.transform = "translate(-50%, -50%) scale(1)";
    });
});