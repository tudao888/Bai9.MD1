function sayyes() {
    alert("Tối nay đi chơi nhé!")
}
function sayno() {
    let a = Math.floor(Math.random() * window.innerWidth);
    let b = Math.floor(Math.random() * window.innerHeight);
    document.getElementById("no1").style.left = a + "px"
    document.getElementById("no1").style.top = b + "px"
}