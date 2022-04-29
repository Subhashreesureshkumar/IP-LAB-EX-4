/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function validateform()
{
    var check=document.querySelector('input[name="car"]:checked');
    var color=document.forms["My_Form"]["colors"].value;
    var other=document.forms["My_Form"]["others"].value;
    var textarea=document.forms["My_Form"]["textarea"].value;
    var name=document.forms["My_Form"]["name"].value;
    var telephone=document.forms["My_Form"]["telephone"].value;
    var mail=document.forms["My_Form"]["email"].value;
    var name_regex=/^[A-Za-z]$/;
    var number_regex=/^[0-9]$/;
    var mail_regex=/^[a-z]+@+[a-z]+.+[a-z]$/;
    var check2=document.querySelector('input[name="checkbox"]:checked');
    
    if(check==null)
    {
        alert("Please select the car!!");
         return false;
    }
    
    if(color=="choice" && other=="")
    {
        alert("Please choose the color from the options given below!!");
        return false;
    }
    if(textarea=="")
    {
        alert("Please fill the specifications!!");
        return false;
    }
    if(textarea.length<10 || textarea.length>15)
    {
        alert("Please enter specifications between 10 to 15 words in length!!");
        return false;
    }
    if(name==null)
    {
        alert("Please fill the name!");
        return false;
    }
    if(!name.match(name_regex))
    {
      alert("Give the name in correct format!!");
      return false;
    }
    if(telephone==null)
    {
        alert("Please fill the telephone number!!");
        return false;
    }
    if(!telephone.match(number_regex))
    {
      alert("Give the correct telephone number!!");
      return false;
    }
    if(isNaN(telephone))
    {
        alert("Please enter the telephone number correctly!!");
        return false;
    }
    if(mail==null)
    {
        alert("Please fill the mail id");
        return false;
    }
    if(!mail.match(mail_regex))
    {
        alert("Give the correct mailid!!");
          return false;
    }
    if(check2==null)
    {
        alert("Please tick the checkbox!!");
        return false;
    }
    else
    {
        alert("Form Filled Successfully");
    }
  
    
}
function clr()
{
    document.querySelector('input[name="car"]:unchecked');
    document.forms["My_Form"]["colors"].value="";
    document.forms["My_Form"]["others"].value="";
    document.forms["My_Form"]["textarea"].value="";
    document.forms["My_Form"]["name"].value="";
    document.forms["My_Form"]["telephone"].value="";
    document.forms["My_Form"]["email"].value="";
    document.querySelector('input[name="checkbox"]:unchecked');
}