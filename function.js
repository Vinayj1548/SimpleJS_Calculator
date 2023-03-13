let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=> {
    button.addEventListener('click', (e)=>{
        try {
            if(e.target.innerHTML == '='){
                string = eval(string);
                document.querySelector('input').value = string;
            }else if(e.target.innerHTML == 'clr'){
                string = "";
                document.querySelector('input').value = string;
            }
            else if(e.target.innerHTML == 'del'){
                let digit = document.querySelector('input').value;
                digit = digit.substring(0, digit.length-1)
                document.querySelector('input').value = digit;
            }
            else if(e.target.innerHTML == '%'){
                digit = document.querySelector('input').value;
                digit = digit / 100
                document.querySelector('input').value = digit
            }
            else if(e.target.innerHTML == 'M-'){
                string = "-"+string;
                document.querySelector('input').value = string;
            }
            else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        } catch (error) {
            document.querySelector('input').value = "Syntax Error";
        }
        
    })
})