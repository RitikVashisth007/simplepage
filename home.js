const colors = [
    "red","green","cyan","grey","black","pink","olive","yellow","DarkGoldenRod","teal"
];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const i = Math.floor(Math.random()*10);
    document.body.style.backgroundColor=colors[i];
    color.innerHTML=colors[i];
}
);


