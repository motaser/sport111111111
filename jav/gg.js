//var usernam = 'montaser';
//var age = 26;
//alert('hello in sport worlad')

//var userag = prompt('how old are you')
//console.log(userag)

//var favoriteSport = prompt('what your favarite sport(football , tennis)')

//if(favoriteSport =='football')
//{

//var image = '<img src="https://cdn.ttgtmedia.com/visuals/ComputerWeekly/Hero%20Images/sport-football-1-adobe.jpeg" alt= "football"/>';

//document.write(image);

//}else if(favoriteSport =='tennis')
//{
  //var image2 = '<img src="https://e3arabi.com/wp-content/uploads/2020/01/tennis-3552164_640.jpg" alt= "tennis"/>'

  // document.write(image2);
//}//

//while(favoriteSport !== 'football' && favoriteSport !== 'tennis'){
  //favoriteSport = prompt('what your favarite sport(football , tennis)')
//}

//var favariteSportNumber = prompt('how many your favarite sport? ');

//for (var i = 1; i <= favariteSportNumber; i++) {
  //if(favoriteSport =='football'){

//var image = '<img src="https://cdn.ttgtmedia.com/visuals/ComputerWeekly/Hero%20Images/sport-football-1-adobe.jpeg" alt= "football"/>';

//document.write(image);

//}else if(favoriteSport =='tennis')
//{
  //var image2 = '<img src="https://e3arabi.com/wp-content/uploads/2020/01/tennis-3552164_640.jpg" alt= "tennis"/>'

   //document.write(image2);
//}
//}
var ask1 = prompt('do you love football sport?');
while (ask1 !== 'yes');
{
  ask1 = prompt('do you love football sport?');
}
tell();


var ask2 = prompt('do you love tennis sport?');
while (ask1 !== 'yes');
{

ask2 = prompt('do you love tennis sport?');

}
tell();

function tell (){
alert('its a agood sport');
alert('i love this sport'); 
alert('thank you for your answer');

}


  function ask(sport){

    var ask1 = prompt('Do  you like' + sport + '?');
    return ask1;

  }
  ask('football');
  
  ask('tennis');
