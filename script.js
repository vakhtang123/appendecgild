let taskColors = ['#ff0000', '#eeff00', '#0000ff', '#00ff00'];

function addTask(){
    let taskname = document.getElementById('task_name').value;
    let description  = document.getElementById('task_description').value;
    let assignee = document.getElementById('task_assignee').value;

    console.log('shamaxede', taskname);

    let newdiv = document.createElement('div');

    let newtitle = document.createElement('h3');
    newtitle.innerHTML = taskname;

    let newh = document.createElement('h2');
    newh.innerHTML=description;

    let newP = document.createElement('p');
    newP.innerHTML=assignee;

    console.log('show',newtitle);
    console.log('show',newh);
    console.log('show',newP);

    let taskStatus = document.getElementById('task_status').value;

    // if(taskStatus==='0'){
    //     document.getElementById('toDo').appendChild(newdiv);
    // }else if(taskStatus==='1'){
    //     document.getElementById('progress').appendChild(newdiv);
    // }else if(taskStatus==='2'){
    //     document.getElementById('testing').appendChild(newdiv);
    // }else{
    //     document.getElementById('done').appendChild(newdiv);
    // }
    
    switch(taskStatus){
        case '0':
            document.getElementById('toDo').appendChild(newdiv);
            // newdiv.style = 'background-color: #ff0000; margin: 5px';
            newdiv.className= 'cisferi';
            break;
            case '1':
                for(let i=0; i<100; i++){
                document.getElementById('progress').appendChild(newdiv);
                newdiv.className= 'witeli';}

                
                break;
            case '2':
                document.getElementById('testing').appendChild(newdiv);
                newdiv.className= 'mwvane';
                break;
            case '3':
                document.getElementById('done').appendChild(newdiv);
                newdiv.className= 'kviteli';
                break;
                default:
    }

    let iconChild = document.createElement('img');
    iconChild.className='icon';
    iconChild.src="download.png";
    iconChild.addEventListener('click',function(){
        newdiv.remove();
    })
    
    let iconchild1 = document.createElement('img');
    iconchild1.className ='icon1';
    iconchild1.src = 'edit.png';


  
    newdiv.appendChild(newtitle);
    newdiv.appendChild(newh);
    newdiv.appendChild(newP);
    newdiv.appendChild(iconChild);
    newdiv.appendChild(iconchild1);

    

    
}

for(let i=0; i<10; i++){

  
    document.getElementById('vaxo').innerHTML="gamarjoba";


    console.log(i,'.sorry');

};

