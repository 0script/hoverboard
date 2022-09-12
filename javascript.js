const container=document.getElementById('container');
const colors=['#e74c3c','#8344ad','#349db','#e67e22','#2ecc71'];
const SQUARES=500;

for(let i=0;i<SQUARES;i++){
    const square=document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover',()=>setColor(square));
    container.appendChild(square);
    square.addEventListener('mouseout',()=>removeColor(square));
}

function setColor(el){
    const color=getRandomColor();
    el.style.backgroundColor=color;
    el.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`;
}

function removeColor(el){

    el.style.backgroundColor='#1d1d1d';
    el.style.boxShadow='0 0 2px #000';
}

function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)];
}