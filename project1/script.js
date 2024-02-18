let index=0;
let b=document.querySelector('button');
b.addEventListener('click',()=>{
    let arr=["yellow","red","pink","aqua","green","purple"];
    document.querySelector('.abc').style.background=arr[index++];
    if(index>arr.length-1){
        index=0;
    }
})