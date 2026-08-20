const menu = document.querySelector(".menu");
const nav = document.querySelector(".desktop-nav");

menu?.addEventListener("click", () => {

  if (getComputedStyle(nav).display === "none") {

    nav.style.display = "flex";

    nav.style.position = "absolute";

    nav.style.top = "68px";

    nav.style.left = "12px";

    nav.style.right = "12px";

    nav.style.flexDirection = "column";

    nav.style.gap = "0";

    nav.style.padding = "12px 18px";

    nav.style.background =
      "rgba(8,4,20,.96)";

    nav.style.border =
      "1px solid rgba(255,255,255,.1)";

    nav.style.borderRadius = "16px";

    nav.style.backdropFilter =
      "blur(20px)";

    nav.querySelectorAll("a").forEach(a => {

      a.style.padding = "12px 0";

    });

  } else {

    nav.removeAttribute("style");

  }

});