let color = ['#fff', '#0000FF', '#808080', '#008000', '#800080', '#FF0000', '#FF3', '#903033', '#fb4f54', '#89ff'];

let btn = document.getElementById("btn");
btn.addEventListener('click', function () {
    let randomColor = color[Math.floor(Math.random() * color.length)]
    console.log(randomColor);
    document.body.style.background = randomColor;

})