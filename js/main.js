let scroller = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    scroller.style.width = `${(scrollTop / height) * 100}%`;
});
