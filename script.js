
  const artist=$("input").val();

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
       

     
       var image=$("<img>");
       var imageUrl= image.append(response._embedded.events[i].images[0].url);
           image.attr("src",imageUrl);
       $("#byEvent").append(image);
     
        
       localStorage.setItem("clientInput",artist);

 }
     // else {
         // $("#byEvent").text("SORRY NO RESULTS ON THAT SEARCH VERIFIED ARTIST NAME AND TRY AGAIN");
    //  }
 
    // console.log(response._embedded.events[i].images[0].url);
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
var openbus=$("<img>").attr("src","https://images.unsplash.com/photo-1560456801-6abd80c6d87d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YnVzc2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
    openbus.addClass("openBus");
var head2=$("<h1>").text("Close Roof Bus");
var closeBus=$("<img>").attr("src","https://images.unsplash.com/photo-1560122861-fd86260dabb6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzc2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
var openRoof=$("<div>").append(head1);
    openRoof.append(openbus);
openRoof.attr("id","openRoof");
var closeRoof=$("<div>").append(head2);
    closeRoof.append(closeBus);
    closeBus.addClass("closeBus");
closeRoof.attr("id","closeRoof");
$("#center").append(openRoof);
$("#center").append(closeRoof);


};

function Book(){
  $(".main-image").remove();
  $("#center").empty();
  $("#infservice").empty();
  $("#list").empty();
  $("#contactinf").empty();

 var booktext= $("<p>").text("bus seat avialable ddjfjhfhjfhfhfhfh fhfhfhfhfhfhfhfhfh");
 $("#center").append(booktext);
};





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
  // var userSearch=$("input").val();
  // var userid=$("#clientInput");
  // var objectJson=JSON.stringify(userid);
 //  localStorage.setItem('#clientInput',userSearch);

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
 });

$("#favorites").click(function(){
 

  $("#byEvent").empty();
  $("#events").remove();
  $("#inf").empty();
  $("#list").empty();
  
  $("#byEvent").show();
  $(".main-image").remove();

var searchStoraged=localStorage.getItem("clientInput");

  var mostSearched=$("<div>");
 
     mostSearched.append(searchStoraged);

  
    $("#center").append( mostSearched);
    
   
});

 


    



