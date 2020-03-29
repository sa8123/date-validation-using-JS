function processDates()
{
   // actual processing code goes here
   input1 = String(document.getElementById("date1").value);
   input2 = String(document.getElementById("date2").value);
   var date1 = 0;
   var date2 = 0;
   var firstHour = "0";
   var firstMin = "0";
   var firstTime = "AM";
   var secondHour = "0";
   var seconMin = "0";
   //var secondTime = "AM";
   var finalHour = 0;
   var finalMinute = 0;
   var finalTime = "AM"
   var finalDay = "";
   var validity = 1;
   var sumMin = 0;
   var sumInt = 0;
   var tempMin = 0;

   // Performing the form validation process.
   // The regular expression that matches the firstDate requirement. 
   //regularExpression1 = /^\d{1,2}:\d{2}([ap]m)?$/;
   regularExpression1 = /^(1[0-2]|[1-9]):[0-5][0-9](([ap]m)|([AP]M))?$/;
   regularExpression2 = /^\d{1,2}:\d{2}$/;

   if(!input1.match(regularExpression1) && input1 != '')
   {
   		alert("Date 1 is invalid");
   		date1 = 0;
   		validity = 0;
   		return;
   		if(input1.length == 7)
         {
            if((input1.substring(5,7) == "PM") || (input1.substring(5,7) == "pm"))
            {
               firstTime = "PM";
            }
         }
   }
   else
   {
   		alert("first date is valid!");
   		firstHour = input1.substring(0,2);
   		firstMin = input1.substring(3,5);
   }

   if(!input2.match(regularExpression2) && input2 != '')
   {
   		alert("second date is invalid!");
   		validity = 0;
   		return;
   }
   else
   {
   		if(input2.substring(0,2) == "24" && input2.substring(3,5) != "00")
   		{
   			alert("second date is invalid!");
   			validity = 0;
   			return;
   		}
   		else
   		{
   			alert("second date is valid!");	
   			secondHour = parseInt(input2.substring(0,2));
   			secondMin = parseInt(input2.substring(3,5));
   		}
   		
   }

   // Adding two times format.
   // First adding minutes. 
   if(validity == 1)
   {
   		sumMin = firstMin + secondMin;
   		sumInt = Math.floor(sumMin / 60);
   		tempMin = sumMIn % 60;	
   		if(sumInt >= 1)
   {
   		finalHour = finalHour + sumInt;
   		finalMinute = tempMin;
   }
   else
   {
   		finalMinute = sumMin;
   }
   // Moving onto hour and AM/PM section
   if(secondHour >= 12)
   {
   		var temp = secondHour - 12;
   		var sum = temp + firstHour;
   		if(firstTime == "AM")
   		{
   			if(sum == 12)
   			{
   				finalHour = sum;
   				finalTime = "PM";
   			}
   			if(sum <= 11)
   			{
   				finalHour = sum;
   				finalTime = "AM";
   			}
   			if(sum > 12)
   			{
   				var temp1 = sum - 12;
   				finalHour = temp1;
   				finalTime = "PM";
   			}
   		}

   		if(firstTime == "PM")
   		{
   			if(sum == 12)
   			{
   				finalHour = sum;
   				finalTime = "AM";
   			}
   			if(sum <= 11)
   			{
   				finalHour = sum;
   				finalTime = "PM";
   			}
   			if(sum > 12)
   			{
   				var temp1 = sum - 12;
   				finalHour = temp1;
   				finalTime = "AM";
   			}
   		}
   }

   // if the secondHour is less than 12. 
   if(secondHour < 12)
   {
   		var sum = firstHour + secondHour;
   		if(firstTime == "AM")
   		{
   			if(sum == 12)
   			{
   				finalHour = sum;
   				finalTime = "PM";
   			}
   			else if(sum < 12)
   			{
   				finalHour = sum;
   				finalTime = "AM";
   			}
   			else
   			{
   				var temp = sum - 12;
   				finalHour = temp;
   				finalTime = "PM";
   			}
   		}

   		if(firstTime == "PM")
   		{
   			if(sum == 12)
   			{
   				finalHour = sum;
   				finalTime = "AM";
   			}
   			if(sum < 12)
   			{
   				finalHour = sum;
   				finalTime = "PM";
   			}
   			if(sum > 12)
   			{
   				var temp = sum - 12;
   				finalHour = temp;
   				finalTime = "AM";
   			}
   		}
   }

   // if the secondHour is equal to 24
   if(secondHour == 24)
   {
   		finalHour = firstHour;
   		finalMinute = firstMin;
   		finalTime = firstTime;
   		finalDay = "+1 day";
   }
   }
   alert("I am from outside");
   place = document.getElementById("result");
   place.innerHTML = "This is where the result would go based on input1: " + input1 + " and input2: " + input2 + " the final sum is: " + finalHour + ":" + finalMinute + finalTime;
}

window.onload = function() 
{
  thebutton = document.getElementById("process");
  thebutton.onclick = processDates;
}
