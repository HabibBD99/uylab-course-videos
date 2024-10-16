
  var len = document.querySelectorAll(".myButton").length;


  for(var i=0; i<len; i++){
   let myButton = document.querySelectorAll(".myButton")[i];
       myButton.addEventListener("click", function(){
   var buttonText = this.innerHTML;
   var buttonValue = this.value;

        if(buttonText=="Home"){
           location.href="index.html";
   
            
          }else if(buttonText=="About"){
             location.href="document/about.html";
            
          }else if(buttonText=="Contact"){
             location.href="document/contact.html";
          
          }else if(buttonText=="Author"){
             location.href="document/author.html";
          
          }else if(buttonText=="Images"){
             location.href="document/images.html";
          
          }else if(buttonText=="Videos"){
             location.href="document/videos.html";
          
          }else if(buttonText=="Audio"){
             location.href="document/audio.html";
          
          }else if(buttonText=="Apps"){
             location.href="document/apps.html";
          
          }
       
       
       
       
       });

   }
   