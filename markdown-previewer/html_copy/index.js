var i = 1;
var j = 1;

window.onload = function() {

    func2();
  };

function func2(){
    document.getElementById('preview').innerHTML = marked.parse(document.getElementById('editor').value); 
}


function func3(){
    if(i == 1){
        document.getElementById('editor').style.minHeight = "80vh";
        i = 2;
    }else{
        document.getElementById('editor').style.minHeight = "200px";
        i= 1;

    }
}

function func4(){
    if(j == 1){
        document.getElementById('preview').style.minHeight = "80vh";
        j = 2;
    }else{
        document.getElementById('preview').style.minHeight = "300px";
        j = 1;

    }
}