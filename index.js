
//Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.

var lunch = 12;
var dinner = 15;
var total = lunch + dinner; //add 12 and 15 and save in variable total

console.log("How did you spend $" + total + " today?"); // print this string in the console

var orderLunch = "I had Salmon for lunch";
var orderDinner = "I had steak for dinner.";

console.log("Today " + orderLunch + " and at night " + orderDinner + " I spent a total of " + "$" + total + " on food today."); // print this string in the console

//Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

var lunchPreference = ["tuna", "pasta", "salmon"];
var dinnerPreference = ["steak", "pizza", "sushi"]

var mealsILove = [lunchPreference, dinnerPreference]; //save array lunchPreference and array dinnerPreference inside the two dimensional array mealsILove

console.log("I love " + mealsILove[0][2] + " for lunch.");//print salmon
console.log("But I love even more " + mealsILove[1][0] + " for dinner."); //print steak

//Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.

var batteryLevel = 150;

if (batteryLevel < 100) {
  alert("Your battery is at "+ batteryLevel + "%. You have a few more hours before your phone dies."); // print this string if battery is less than 100
  }
  else {
    alert("Your phone super charged! You're battery level is " + batteryLevel + "%.") //print this string if batteryLevel is greater than 100

//Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.

function doorGame (door) {
  if (door === "door1"){
        alert("You're going to Africa in two weeks!");//display this prize if player selects door1
     }
  else if (door === "door2"){
        alert("You're getting a yellow unbrella. LOL!");//display this prize if player selects door2
     }
      else {
        alert("You've have won a $1000 gift card in Macy's");//display this prize if player selects other doors
      }
    }

    console.log(doorGame("door1"));//execute the function to start playing

//Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.

var userName = "John";

if (userName === "Daniela") {
  console.log("Welcome back " + userNamename);//if the user's name equals to Daniela display string
}
else {
  console.log(userName + " is not a valid username. Please try again.");
}//if the user's name is not Daniela display this string
}
