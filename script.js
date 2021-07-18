// let start= document.getElementById('start').addEventListener('click', function()
// {
//     // alert('button clicked');
//     document.getElementById('main').style.animation = ' mj 5s linear infinite' ;
//     document.getElementById('main').style.backgroundColor = 'azure';
// })

 document.getElementById('start').addEventListener('click', function()
 {
 document.getElementById('main').setAttribute("class","my-animationclass")
 $("start").toggleClass("my-animationclass")
})

document.getElementById('stop').addEventListener('click', function()
{
    document.getElementById('main').style.animation = "0s";
    document.getElementById('main').style.backgroundColor = 'grey';
})

