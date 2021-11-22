const string = window.prompt('giv array: ');
const array = string.split(' ');


function reverse(array){
    let newArray = new Array();
    let a = array.length;

    for(let i = 0; i < array.length; i++){  
        a -= 1;
        newArray[i] = array[a];
    }

    alert(newArray);
}

reverse(array);