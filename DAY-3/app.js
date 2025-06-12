const colorinput = document.getElementById("colorinput")
const colorcode = document.getElementById("colorcode")
const copycode = document.getElementById("copycode")
const Complementary = document.getElementById("Complementary")
const save = document.getElementById("save")
const Fav = document.getElementById("Fav")


colorinput.addEventListener("input", () => {
    const colorvalue =  colorinput.value
    Updatecolorcode(colorvalue);
    ShowcomplementraryColor(colorvalue)
})

function Updatecolorcode(color) {
    // colorcode.textContent = color;
    colorcode.textContent = color.slice(1)
}

function ShowcomplementraryColor(color) {
    const ComplementaryColor = getComplementary(color)
    Complementary.innerHTML = "";

    ComplementaryColor.forEach((campcolor) => {
        const colorBox = document.createElement('div')
        colorBox.classList.add('box')
        colorBox.style.backgroundColor = campcolor
        Complementary.appendChild(colorBox);

    })
}

function getComplementary(color) {
    const base = parseInt(color.slice(1), 16);
    const ComplementaryCode = (0xFFFFFF ^ base).toString(16).padStart(6, "0");
    return[`#${ComplementaryCode}`]
}

copycode.addEventListener("click", () => {
    navigator.clipboard
    .writeText(colorcode.textContent)
    .then(() => alert('Color Code Copied'))
    .catch((err) => console.error('Failed to copy', err))
})

save.addEventListener("click", () => {
    const color = colorcode.textContent
    addFavouriteColor(color)
})

function addFavouriteColor(color) {
    const colorBox = document.createElement('div')
    colorBox.classList.add('box')
    colorBox.title = color;
    colorBox.style.backgroundColor = color
    Fav.appendChild(colorBox);
}
