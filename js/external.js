//form script


    function validateForm() {
   let x = document.forms.fname.value;
     if (x == "") {
     alert("Name must be filled out");
     return false;
     }   
    document.write(x);
     }
 
 function myFunction() {
   document.getElementById("frm1").submit();
 }
   

 