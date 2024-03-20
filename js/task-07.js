let x=document.getElementById('font-size-control');
let text=document.getElementById('text');

x.oninput=function(){
    text.style.fontSize=`${this.value}px`;
}
