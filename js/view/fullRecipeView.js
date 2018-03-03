


var FullReceipeView = function (container, model){
   
   model.addObserver(this);
   
   //var nGuests = model.getNumberOfGuests();

   var nGuests; // = model.getNumberOfGuests();
   
   var receipesContainer = container.find("#receipesDiv");
   
   //var dishesSelected = model.getSelectedDishes();
   var dishesSelected; // = model.getSelectedDishes();
      
   
   // Getting a reference to the "return to previous page" button 
   this.return_to_previous_page_button = container.find("#returnToPreviousPageButton");
   
   
 /*  
   // This function is called once the dish is returned.
   this.fetchedDish = function(dish)
   {
	  var d = container.find("#dishesT"); 
	   
    
	   d.append("<div class='row'> <div class='col-md-3'> <img src='images/" + dish.image + "' style='width:150px; height: 150px'> </div> <div class='col-md-4'> <h5>" + dish.name + "</h5> <p>" + dish.description + "</p> </div>  <div class='col-md-5'> <h5>Preperations</h5> <p>" + dish.description + "</p> </div> </div>");
      
   }
   
   this.error = function()
   {
	   console.log("ops,there was a problem on requesting a dish");
   }
 */  
   
   this.update = function()
   {
      nGuests = model.getNumberOfGuests();
      
      // Filling the number of people
      container.find("#nGuests").html(nGuests + " People");      

	  var d = container.find("#dishesT"); 
	  d.html("");
	  
	  /*
	  var dishesSelected = model.getDishesSelectedID();
	   
	  for(var i=0; i < dishesSelected .length ; i++)
	  {
		  model.getDish(this.fetchedDish, this.error, dishesSelected[i]);
	  }
	   */
	   
      dishesSelected = model.getSelectedDishes();

     
      for(var i=0; i< dishesSelected.length; i++)
      {
		  d.append("<div class='row'> <div class='col-md-3'> <img src='" + dishesSelected[i].image + "' style='width:150px; height: 150px'> </div> <div class='col-md-4'> <h5>" + dishesSelected[i].title + "</h5> <p>" + dishesSelected[i].instructions + "</p> </div>  <div class='col-md-5'> <h5>Preperations</h5> <p id='prep_" + i + "'> </p> </div> </div>");
		  
		  var prep = container.find("#prep_"+i);
		  
		  for(var m=0; m<dishesSelected[i].analyzedInstructions[0].steps.length; m++)
		  {
			prep.append("<p>" + dishesSelected[i].analyzedInstructions[0].steps[m].step + "</p>");		   
		  }		  
      }      
   }
   
   
   this.update();
}



















