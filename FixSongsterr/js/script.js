const panelSearch = document.querySelector(".Fdftiq_mainPanel");
const nav = document.querySelector("#tablist").parentElement;

let stylesA = {
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "20px",
    top: "96px"
}

Object.assign(panelSearch.style, stylesA);

let stylesA2 = {
    top: "20px",
    bottom: "unset",
    right: "0",
    left: "50%",
    transform: "translateX(-50%)"
}

Object.assign(nav.style, stylesA2);