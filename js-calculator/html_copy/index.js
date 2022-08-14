    var input  = 0;
    var string = "";
    var result = 0;
    var bit = 1;
    var count = 0;
    var bit2 = 1;
    var bit3 = 1;

    function func(key){
        if(key == '0'){
            if(bit2){
                input = input + key;
                document.getElementById('display').innerHTML = input;
                document.getElementById('result').innerHTML = 0;
            }else{
                input = input + key;
                document.getElementById('display').innerHTML = input;
                string = string + key;
                document.getElementById('result').innerHTML = string;
            }

        }else if(key == 'a'){
            input = 0;
            document.getElementById('display').innerHTML = input;
            string = "";
            document.getElementById('result').innerHTML = string;

        }else if(key == "+" || key == '-' || key == '*' || key == '/'){
            if(bit3){
                string = string + key;
                document.getElementById('result').innerHTML = string;
                input = key;
                document.getElementById('display').innerHTML = input;
                bit = 0
            }else{
                
            }
        }else if(key == '='){
            if(bit2){
                var b = string;
                document.getElementById('display').innerHTML = b;
                document.getElementById('result').innerHTML = b;
                bit = 0;

            }else{
                var b = eval(string);
                input = b;

                document.getElementById('display').innerHTML = input;
                string = b;
                document.getElementById('result').innerHTML = string;
            }
        }else{
            bit2 = 0;
        if(string == ""){
            input = key;
            document.getElementById('display').innerHTML = input;
            string = key;
            document.getElementById('result').innerHTML = string;

        }else{
            bit2 = 0;
            if(bit){
                input = input + key;
                document.getElementById('display').innerHTML = input;
                string = string + key;
                document.getElementById('result').innerHTML = string;
                bit = 0;
            }else{
                input = input + key;
                document.getElementById('display').innerHTML = input;
                string = string + key;
                document.getElementById('result').innerHTML = string;
            }
        }

        }


    }
