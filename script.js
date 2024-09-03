const boxes = document.getElementById('boxes');
const itembox =document.getElementById('item-box')
const numberofboxes=5;
const numberofitems = 20;
createboxes();
creteitems()

function createboxes(){
    for(let i=0;i<numberofboxes;i++){
        const boxEl=document.createElement('div');
        boxEl.classList.add('box');
        boxEl.addEventListener('click',()=> clickedbox(boxEl))
        boxes.appendChild(boxEl)
    }
    const allboxes=document.querySelectorAll('.box');
    allboxes[0].classList.add('active')
}
function creteitems(){
    for(let i=0;i<numberofitems;i++){
        const itemEl=document.createElement('div');
        itemEl.classList.add('item');
        itemEl.innerText = i + 1;
        itemEl.addEventListener('click',()=> clickeditem(itemEl))
        itembox.appendChild(itemEl)
    }
}

function clickedbox(item1){
    let flag = 0;
    const allboxes=document.querySelectorAll('.box');
    allboxes.forEach(item => {
        if(item.classList.contains('active')){
            flag = 1
            changetheitems(item1,item);
        }   
    })
    if(flag === 0){
        item1.classList.add('active');
    }
}

function clickeditem(item){
    additemtofirstbox(item.innerText)
    item.remove();
}

function additemtofirstbox(itemvalue){
    const Numberofboxes=document.querySelectorAll('.box')
    const boxel=document.createElement('div');
    boxel.classList.add('item');
    boxel.innerText= itemvalue;
    Numberofboxes[0].appendChild(boxel); 
}

function changetheitems(item1,item){
     const activeboxes=item.querySelectorAll('.item')
     let n = activeboxes.length
     if(activeboxes.length < 1){
        /* no code here so the last code all ways execute */
     }else{
        const value = activeboxes[n - 1].innerText;
        activeboxes[n - 1].remove()
        createsingleitems(item1,value)
         
     }
    const allboxes=document.querySelectorAll('.box');
    setTimeout(() => {
        allboxes.forEach(item => item.classList.remove('active'))
    }, 100);    
}

function createsingleitems(item1,value){
     const itemEl=document.createElement('div');
     itemEl.classList.add('item');
     itemEl.innerText = value;
     item1.appendChild(itemEl)
}