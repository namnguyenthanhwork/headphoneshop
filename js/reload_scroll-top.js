// Reload page
window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded");
});

// scroll smooth
window.addEventListener("scroll", () => {
    const showBtn = document.querySelector(".scroll-up-btn");
    this.scrollY > 300 ?
        showBtn.classList.add("show") :
        showBtn.classList.remove("show");
})

const links = document.querySelectorAll(".scroll-up-btn a");
for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}