console.log("asdf")
// const m=document.getElementsByClassName('main')
//select sepcified tag in css to copy the color  from
const csstag=document.querySelector('.main');
const colorgrid=document.querySelector('.colorgrid');
const column=document.querySelector('.column');
// by using a selected element through "computedStyleMap()"
const m1=document.getElementById('color')
let bg,p;
// csstag.addEventListener('click',()=>{
//     var element = document.getElementById('csstag');
//   var  style = window.getComputedStyle(csstag);
//     // top = style.getPropertyValue('background-color');
//     // console.log(style)
//     console.log(style);
//      bg=style.backgroundColor;
//      p=bg;
//     console.log(bg)
//     // console.log(event.currentTarget)
// })
// m1.addEventListener('click',function  name(){
//     m1.style.background=bg;
//     console.log(bg)
// })
var i=1;
[
    'one','two',
    'three',
    'four','five'
].forEach((val)=>{
    const dele=document.createElement('div');
    // dele.textContent=val;
    dele.id=`base-${i++}`;
    dele.classList.add("col");
    dele.addEventListener('click',(e)=>{
        
        console.log(e.currentTarget);
        
       
        var style=window.getComputedStyle(e.currentTarget);
        bg=style.backgroundColor;
        console.log(bg);
        console.log(e.currentTarget.getAttribute("id"));
        console.log(e.currentTarget.getAttribute("class"));
        

    })
    colorgrid.appendChild(dele);
})
var r;

var colors = new Array("ff0000","00ff00","0000ff","ff00ff","beeeef");
for(r=0;r<20;r++)
{
    const cre = document.createElement('div');
    cre.classList.add("grid")
    cre.id=`id-${r}`
    cre.addEventListener('click',(e)=>{
        e.currentTarget.style.background=bg;
        console.log(e.currentTarget)
        if(bg==null)
        {
            alert("chosse some color!!")
        }
        else{
            // console.log("asd156f");
        }
    })
    // cre.style.backgroundColor="#"+ colors[r];
    column.appendChild(cre);
}




       