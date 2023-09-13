let outButton = document.getElementsByClassName('aot');

for(let i= 0; i < outButton.length; i++){
    outButton[i].addEventListener('click', function(){
        alert('this is out of the document alert');
        console.log('this one also worked');
    })
}