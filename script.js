
  

  function ticketmaster(){
  
    var APIKey = "5ye3EOMW7PoGxZjTBlHcmFafBR9pD7Oo";
   var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?city=miami&apikey="+ APIKey;
  
  
     
     $.ajax({
     url: queryURL,
     method: "GET"
     }).then(function(response) {

       var  numbersofevents=["0","1","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"];
       
      for(var i=0; i<=numbersofevents.length; i++){
    
    var tablerow=$("<tr>");
        tablerow.addClass("table");
        

      

    var titlecell=$("<td>");
            titlecell.append(response._embedded.events[i].name);
            tablerow.append(titlecell);
      
    var yearcell=$("<td>");
          yearcell.append(response._embedded.events[i].dates.start.localDate);
          tablerow.append(yearcell);
      
    var hourcell=$("<td>");
         hourcell.append(response._embedded.events[i].dates.start.localTime);
          tablerow.append(hourcell);

    var location=$("<td>");
        location.addClass("local");
        location.append(response._embedded.events[i]._embedded.venues[0].name);
        tablerow.append(location);

    var weather=$("<a>");
       weather.addClass("weather");
       weather.attr("href","weather.html");
       weather.text("check weather");
       tablerow.append(weather); 
        

          $("#byEvent").append(tablerow);
   };
   console.log(response);

    });
     
 
 };



  

            

function ticketmasterbyartist (){    //function for artist search
   var artist= $("input").val();
  var APIKey = "5ye3EOMW7PoGxZjTBlHcmFafBR9pD7Oo";
 var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?city=miami&apikey="+ APIKey;



   
   $.ajax({
   url: queryURL,
   method: "GET"
   }).then(function(response) {
      var numEventsArtist=["0","1","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"];
     
     
     
      for(var i=0; i<=numEventsArtist.length; i++){
      
        if (response._embedded.events[i].name==artist)
       {



     
     
       var tablerow=$("<tr>");
          tablerow.attr("id","artistinf");

        var titlecell=$("<td>");
        titlecell.append(response._embedded.events[i].name);
        tablerow.append(titlecell);

       var yearcell=$("<td>");
       yearcell.append(response._embedded.events[i].dates.start.localDate);
       tablerow.append(yearcell);

        var hourcell=$("<td>");
       hourcell.append(response._embedded.events[i].dates.start.localTime);
        tablerow.append(hourcell);

       $("#byEvent").append(tablerow);
 };
      
      
     console.log(response);
      };
     
});

}; 


/*

$("#home").click(function(){

    $("body").html(href);

});

*/ 


function busType(){
  $(".main-image").remove();
  $("#center").empty();
  $("#infservice").empty();
  $("#list").empty();
  $("#contactinf").empty();
var head1=$("<h1>").text("Open Roof Bus");
var head2=$("<h1>").text("Close Roof Bus");
var openRoof=$("<div>").append(head1);
openRoof.attr("id","openRoof");
var closeRoof=$("<div>").append(head2);
closeRoof.attr("id","closeRoof");
$("#center").append(openRoof);
$("#center").append(closeRoof);


}

function Book(){
  $(".main-image").remove();
  $("#center").empty();
  $("#infservice").empty();
  $("#list").empty();
  $("#contactinf").empty();

 var booktext= $("<p>").text("bus seat avialable");
 $("#center").append(booktext);
}



 $("#byEvent").hide();


 $("#events").click(function(){
   $("#inf").empty();
   $("#list").empty();
   $("#events").remove();
  $("#byEvent").show();
  $(".main-image").remove();
   ticketmaster();
});



$("button").click(function(){
 
   $("#inf").empty();
   $("#list").empty();
   ticketmasterbyartist();
   $("#byEvent").show();
   $(".main-image").remove();
  });



 $("#bustype").click(function(){

  $("#byEvent").empty();
  $("#events").remove();
    busType();
    
 });

 $("#book").click(function(){
  $("#byEvent").empty();
  $("#events").remove();
    Book();
 })
  
/*chat
function openForm() {
  $("#myForm").style.display = "block";
 
}

function closeForm() {
  $("#myForm").style.display = "none";
}
//$("#map").click(function(){
   
//});

 var queryURL ="https://api.openweathermap.org/data/2.5/forecast?q=miami&appid=166a433c57516f51dfab1f7edaed8413";
   
  //  var queryURL ="https://api.openweathermap.org/data/2.5/forecast?q=miami&appid=166a433c57516f51dfab1f7edaed8413";
       //   $.ajax({
         // url: queryURL,
       //  method: "GET"
         // }).then(function(response) {
         // console.log(response);
          //  var temperature=$("<p>").text( Math.floor(((response.list[6].main.temp -273.15) * 1.80 )+ 32)+" °F");
             //  var  nextday=$("<h4>").append(moment().add(1,'days').format("dddd "));
                  //  nextday.append(moment().add(1,'days').format("ll"));
         
           //  var temperature=( Math.floor(((response.list[6].main.temp -273.15) * 1.80 )+ 32)+" °F




*/





