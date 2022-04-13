function zapytanie1()
{
  var contactName = document.getElementById("contactName");

  
 if (contactName.value == ""){
document.getElementById("contactName").className="form-control is-invalid"; 

 }
  else
 {
document.getElementById("contactName").className="form-control is-valid "; 
   
 }
 
 }
 
 function zapytanie2()
{

 var contactEmail = document.getElementById("contactEmail");
 
 if (contactEmail.value == ""){
document.getElementById("contactEmail").className="form-control is-invalid"; 
   }
    else
{

  document.getElementById("contactEmail").className="form-control is-valid "; 
   

 var email = contactEmail.value;
 var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
 if(regex.test(email)==false)
 {
document.getElementById("contactEmail").className="form-control is-invalid"; 
 }
 else
 {
  document.getElementById("contactEmail").className="form-control is-valid "; 
   
 }
} 

 
 }
   
   function zapytanie3()
{

  var contactSurName = document.getElementById("contactSurName");

  
 
 
  if (contactSuName.value == ""){
document.getElementById("contactSurName").className="form-control is-invalid"; 

 }
  else
 {
document.getElementById("contactSurName").className="form-control is-valid "; 
   
 }
 

 
 }
   
   function zapytanie4()
{

   var Info = document.getElementById("Info");
  

 
  if (Info.value == ""){
document.getElementById("Info").className="form-control is-invalid"; 

 }
  else
 {
document.getElementById("Info").className="form-control is-valid "; 
   
 }
 
 }
   

function checkForm()
{

var error=false; //to znaczy, że danych nie brakuje
var errorText=""; //komunikat z błędem
var contactName = document.getElementById("contactName");
var contactEmail = document.getElementById("contactEmail");
var contactSurName = document.getElementById("contactSurName");
var Info = document.getElementById("Info");
 

 if (contactName.value == ""){
document.getElementById("errorName").className="alert alert-danger"; 
 error=true;
 }
  else
 {
document.getElementById("errorName").className="d-none"; 
 error=false; 
   
 }
 
  if (contactSurName.value == ""){
document.getElementById("errorSurName").className="alert alert-danger"; 
 error=true;
 }
 else
 {
  document.getElementById("errorSurName").className="d-none"; 
 error=false; 
   
 }
 
  if (Info.value == ""){
document.getElementById("errorInfo").className="alert alert-danger"; 
 error=true;
 }
 else
 {
  document.getElementById("errorInfo").className="d-none"; 
 error=false; 
   
 }
 
   if (contactEmail.value == ""){
document.getElementById("errorEmail").className="alert alert-danger"; 
   error=true;
   }
    else
{

  document.getElementById("errorEmail").className="d-none"; 
 error=false; 
   

 var email = contactEmail.value;
 var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
 if(regex.test(email)==false)
 {
document.getElementById("errorEmail").className="alert alertdanger";  
 error=true;
 }
 else
 {
  document.getElementById("errorEmail").className="d-none"; 
 error=false; 
   
 }
} 
 

if (error==true){return true;} 
else {document.getElementById("myForm").reset();}



}



 


