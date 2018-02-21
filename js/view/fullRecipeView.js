


var FullReceipeView = function (container, model){
   
   model.addObserver(this);
   
   //var nGuests = model.getNumberOfGuests();

   var nGuests; // = model.getNumberOfGuests();
   
   var receipesContainer = container.find("#receipesDiv");
   
   //var dishesSelected = model.getSelectedDishes();
   var dishesSelected; // = model.getSelectedDishes();
      
   
   // Getting a reference to the "return to previous page" button 
   this.return_to_previous_page_button = container.find("#returnToPreviousPageButton");
   
   
   
   
   this.update = function()
   {
      nGuests = model.getNumberOfGuests();
      
      // Filling the number of people
      container.find("#nGuests").html(nGuests + " People");      
      
      dishesSelected = model.getSelectedDishes();
      
	   
	  var d = container.find("#dishesT"); 
	  d.html("");
	   
      for(var i=0; i< dishesSelected.length; i++)
      {
		    d.append("<div class='row'> <div class='col-md-3'> <img src='images/" + dishesSelected[i].image + "' style='width:150px; height: 150px'> </div> <div class='col-md-4'> <h5>" + dishesSelected[i].name + "</h5> <p>" + dishesSelected[i].description + "</p> </div>  <div class='col-md-5'> <h5>Preperations</h5> <p>" + dishesSelected[i].description + "</p> </div> </div>");
		  
		  
		  /*
		  d.append("<div class='row' <div class='col-md-3'> <img src='images/" + dishesSelected[i].image + "' style='width:150px; height: 150px'> </div> <div class='col-md-4'> <h5>" + dishesSelected[i].name + "</h5> <p>" + dishesSelected[i].description + "</p> </div>  <div class='col-md-5'> <h5>Preperations</h5> <p>" + dishesSelected[i].description + "</p> </div> </div>");
		  */
		  
		  /*
         container.append("<div class='row' id='cleanThis' <div class='col-md-3'> <img src='images/" + dishesSelected[i].image + "' style='width:150px; height: 150px'> </div> <div class='col-md-4'> <h5>" + dishesSelected[i].name + "</h5> <p>" + dishesSelected[i].description + "</p> </div>  <div class='col-md-5'> <h5>Preperations</h5> <p>" + dishesSelected[i].description + "</p> </div> </div>");
		 */
      }      
   }
   
   
   this.update();
}



















