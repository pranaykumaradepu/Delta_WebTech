let btn = document.querySelector('button');
let ul = document.querySelector('ul');
btn.addEventListener('click', function(){
    let inp = document.querySelector('input')
    let li = document.createElement('li');
    li.innerText = inp.value;

    let delBtn = document.createElement('button');
    delBtn.innerText = 'delete';
    delBtn.classList.add('delete');
    li.appendChild(delBtn);
    ul.appendChild(li);
    inp.value = '';
});

ul.addEventListener('click', function(event){
    if(event.target.nodeName == 'BUTTON'){
        let per = event.target.parentElement;
        per.remove();
    }
})
