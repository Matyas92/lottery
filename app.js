
// Input and Output in a variable using queryselector
var input1 = document.querySelector(".input1")
var input2 = document.querySelector(".input2")
var input3 = document.querySelector(".input3")
var input4 = document.querySelector(".input4")
var input5 = document.querySelector(".input5")

var output1 = document.querySelector(".output1")
var output2 = document.querySelector(".output2")
var output3 = document.querySelector(".output3")
var output4 = document.querySelector(".output4")
var output5 = document.querySelector(".output5")

//sing is the block showing how much you won
var sign = document.querySelector(".sign")
var info = document.querySelector(".info")
//Submit button starts the whole procedure
var submit = document.querySelector(".submit")
//It counts the number of wins
var counter = 0;
//Restart button renew the whole game nullify everything
var buttonToRestart = document.querySelector(".buttonToRestart")

var block = document.querySelector(".block");

//Clicking on submit will give the random numbers 
submit.addEventListener("click", function(){

//If all the inputs are filled starts the game
   if (input1.value == "" || input2.value == "" || input3.value == "" ||
   input4.value == "" || input5.value == "") 
   {

// Sign is displayed and info paragraph will say the below   
    sign.style.display = "block";
    info.innerHTML = "Please fill all input!"
   
   }else if (input1.value == input2.value || input1.value == input3.value  || input1.value ==  input4.value
    || input1.value == input5.value || input2.value == input3.value || input2.value == input4.value
    || input2.value ==  input5.value ||input3.value == input4.value || input3.value == input5.value 
    || input4.value == input5.value ){

   sign.style.display = "block";
   info.innerHTML = "Inputs are same!"

   }
   //Generate the output numbers 
   else{
    output1.value = generateRandomNum()
    output2.value = generateRandomNum()
    output3.value = generateRandomNum()
    output4.value = generateRandomNum()
    output5.value = generateRandomNum()

    //Func, if it macthes 
    toMatch();

 //Numbering the counters
    switch(counter) {
        case 0:
            sign.style.display = "block";
            info.innerHTML = "You got none"
          break;
        case 1:
            sign.style.display = "block";
            info.innerHTML = "You got one match"
          break;
        case 2:
            sign.style.display = "block";
    
            info.innerHTML = "You got two match"
        break;
        case 3:
            sign.style.display = "block";
    
            info.innerHTML = "You got three match"
          break;
        case 4:
            sign.style.display = "block";
    
            info.innerHTML = "You got four match"
          break;
        case 5:
            sign.style.display = "block";
    
            info.innerHTML = "You got five match"
          break;
        default:
      }
   }

//Random number generator between 1-99
function generateRandomNum(){
    var random = Math.floor(Math.random() * 99) +1;
    return random ;
}
//As seeing before this func gives the counter to increment when it hits
function toMatch(){

if(input1.value == output1.value || input1.value == output2.value ||input1.value == output3.value ||
     input1.value == output4.value || input1.value == output5.value)
     
     {
     counter++
     }

     if(input2.value == output1.value || input2.value == output2.value ||input2.value == output3.value ||
        input2.value == output4.value || input2.value == output5.value)
        
        {
        counter++
        }

        
     if(input3.value == output1.value || input3.value == output2.value ||input3.value == output3.value ||
        input3.value == output4.value || input3.value == output5.value)
        
        {
        counter++
        }

               
     if(input4.value == output1.value || input4.value == output2.value ||input4.value == output3.value ||
        input4.value == output4.value || input4.value == output5.value)
        
        {
        counter++
        }

               
     if(input5.value == output1.value || input5.value == output2.value ||input5.value == output3.value ||
        input5.value == output4.value || input5.value == output5.value)
        
        {
        counter++
        }


}

submit.style.visibility = "hidden";


})
//Restart button to nullify everything as mentionet before

buttonToRestart.addEventListener("click", function(){
   submit.style.visibility = "visible";

   block.style.display = "block";

    sign.style.display = "none";
     input1.value = ""
     input2.value = ""
     input3.value = ""
     input4.value = ""
     input5.value = ""

     output1.value = ""
     output2.value = ""
     output3.value = ""
     output4.value = ""
     output5.value = ""

     counter = 0;


})

