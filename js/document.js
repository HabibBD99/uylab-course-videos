
/*--------------Menu Code-------------------------------*/
  var len = document.querySelectorAll(".myButton").length;


  for(var i=0; i<len; i++){
   let myButton = document.querySelectorAll(".myButton")[i];
       myButton.addEventListener("click", function(){
   var buttonText = this.innerHTML;

   //var buttonValue = this.value;
   //var buttonId = this.id;
   //var buttonText = this.innerHTML;


  
 switch (buttonText){

     case "Home":
     location.href="../index.html";
     break;

     case "About":
     location.href="about.html";
     break;

     case "Contact":
     location.href="contact.html";
     break;

     case "Author":
     location.href="author.html";          
     break;

      case "Images":
      location.href="images.html";                
      break;


      case "Videos":
      location.href="videos.html";    
      break;


      case "Audio":
      location.href="audio.html";
      break;
   
      case "Apps":
      location.href="apps.html";
      break;
   

      default:
      document.write("File Not Found.");

      }

        
   });

}

 /*-------------END---------------------------*/
 

 
 
 