let todo = [];

let userRequest = prompt('enter your request : show , add , remove , quit')
while (true){
    if(userRequest =='quit'){
        break;
    }

    if (userRequest == 'show'){
        console.log('list items are')
        console.log('---------------------')
        for(i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log('---------------------')
    } else if (userRequest == 'add'){
        let task = prompt('enter your task to add');
        todo.push(task);
        console.log('task added');
        
    } else if (userRequest == 'remove'){
        let indexVal = prompt('enter index value to remove')
        todo.splice(indexVal, 1);
        console.log('item removed')
    }else{
        console.log('invalid request');
    }

    userRequest = prompt('enter your request ')

}

