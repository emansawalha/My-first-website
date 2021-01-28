var user_level = prompt ('Are You biginner in Webdevelopment?');
alert("Welcome to our website ")


if(user_level === 'yes'){

    document.write ('<h2>' + 'Please Read This page carefully' +'</h2>')
    alert(" please Read This page carefully ")

}

else if(user_level != 'no' || "") {
    document.write('<h2>' + "you can find useful tutorial links in this webpage "+'</h3>')

    alert("you can find useful tutorials in this webpage");
}
 
var userInput = prompt("what tutorial do you want HTML or CSS?", "choose Your Topic")

while (userInput !== 'html'  &&  userInput !== 'css' )
{
    userInput = prompt("please enter the correct topic" )
}


var User_Rate = prompt('please Rate our website from 1-5')
star_img = ''; 
for(i = 1 ; i <= User_Rate ; i++)
{
  
       
        star_img = star_img + '<img src= "img/gold-star-1.jpg" >'
        console.log(star_img);
        
    
   

}
alert('thanks for your rate')
document.write(star_img)