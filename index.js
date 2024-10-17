console.log("heellooo");
var button_length = document.querySelectorAll(".drum").length;
console.log(button_length);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BUTTON FUNCTIONALITY

for(var i=0 ; i<7 ; i++){


    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
     
        var inner_Value = this.innerHTML ;  //identifies the button which is being clicked and stores it in inner_Value variable
        console.log(inner_Value);

          sound(inner_Value); // calls the switch loop to make respective sound          
          animation(inner_Value); // adds animation class to the button
})

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KEYBOARD KEYS EVENTLISTENERS

document.addEventListener("keypress" , function(event){

    sound(event.key); //calls switch loop
    animation(event.key); // class animation
})

          
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SWITCH LOOP MOVED IN Ssound() FUNCTION.

function sound(value){

    switch (value) {
        case "w": 

         var audio = new Audio("sounds/tom-1.mp3");
         audio.play();
            
            break;

        case "a": 
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
            
             break;
        
        
        case "s": 
         var audio = new Audio("sounds/tom-3.mp3");
         audio.play();
                 
            break;

        case "d": 
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
                
           break;

        case "j": 
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
                
           break;

        case "k": 
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
                
           break;


        case "l": 
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
                
           break;
                              
        default:
            break;
    }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ANIMATION
 
function animation(valuekey){

 var clicked_button = document.querySelector("." + valuekey );

  clicked_button.classList.add("pressed"); //adds animation applied class called pressed which make its grey


  setTimeout(function(){

    clicked_button.classList.remove("pressed");   //removes class automatically after 100 miliseconds due to timer


  }, 100);


}