var numberofbuttons = document.querySelectorAll(".drum").length;

for(var i=0 ; i<numberofbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}


document.addEventListener('keydown',function(event){
    makeSound(event.key);

});




function makeSound(key){
    switch(key){
        case "w":
            var tom1= new Audio('/tom-1.mp3');
            tom1.play();
            break;
            case "a":
                var tom2= new Audio('/tom-2.mp3');
                tom2.play();
                break;
                 case "s":
                    var tom3= new Audio('/tom-3.mp3');
                    tom3.play();
                    break;    
                    case "j":
                        var j= new Audio('/tom-3.mp3');
                        j.play();
                        break;  
                        case "d":
                            var tom4= new Audio('/tom-4.mp3');
                            tom4.play();
                            break;
                            case "s":
                                var s= new Audio('/snare.mp3');
                                s.play();
                                break;

                                case "k":
                                    var k= new Audio('/kick-bass.mp3');
                                    k.play();
                                    break;
                                     case "c":
                                      var c= new Audio('/crash.mp3');
                                      c.play();
                                      break;  
    }
}








    
















    