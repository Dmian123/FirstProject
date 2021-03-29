

function extended(){
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
 
 
 
  var queryURL ="https://api.openweathermap.org/data/2.5/forecast?q=miami&appid="+APIKey;

    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
      console.log(response);
      console.log(response.list[0].dt_txt);
       
    // var dateformateada=response.list[0].dt_txt;

   //  dateformateada.moment().format("L");
   var date = $("input").val();
          var temp=$("<p>").text(Math.floor(((response.list[3].main.temp -273.15) * 1.80 )+ 32)+" °F");

          //temperature=$("<p>").text( Math.floor(((response.list[38].main.temp -273.15) * 1.80 )+ 32)+" °F");
         // nextday=$("<h4>").append(moment().add(5,'days').format("dddd "));
          //nextday.append(moment().add(3,'days').format("ll"))
           if(date===response.list[3].dt_txt)//||date===response.list[8].dt_txt||date===response.list[17].dt_txt)
           
           {
               $("#weatherid").append(temp);
           }
           var temp1=$("<p>").text(Math.floor(((response.list[27].main.temp -273.15) * 1.80 )+ 32)+" °F");

           //temperature=$("<p>").text( Math.floor(((response.list[38].main.temp -273.15) * 1.80 )+ 32)+" °F");
          // nextday=$("<h4>").append(moment().add(5,'days').format("dddd "));
           //nextday.append(moment().add(3,'days').format("ll"))
            if(date===response.list[27].dt_txt)//||date===response.list[8].dt_txt||date===response.list[17].dt_txt)
            
            {
                $("#weatherid").append(temp1);
            }
          
         
});
};
$("button").click(function(){

   
    extended();
   
    
});
