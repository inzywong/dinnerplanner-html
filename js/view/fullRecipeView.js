


var FullReceipeView = function (container, model){
   
   model.addObserver(this);
   
   //var nGuests = model.getNumberOfGuests();

   var nGuests; // = model.getNumberOfGuests();
   
   var receipesContainer = container.find("#receipesDiv");
   
   //var dishesSelected = model.getSelectedDishes();
   var dishesSelected; // = model.getSelectedDishes();
      
   
   // Getting a reference to the "return to previous page" button 
   this.return_to_previous_page_button = container.find("#returnToPreviousPageButton");
   
   
   
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
   
   
   this.update = function()
   {
      nGuests = model.getNumberOfGuests();
      
      // Filling the number of people
      container.find("#nGuests").html(nGuests + " People");      

	  var d = container.find("#dishesT"); 
	  d.html("");
	   
	  var dishesSelected = model.getDishesSelectedID();
	   
	  for(var i=0; i < dishesSelected .length ; i++)
	  {
		  model.getDish(this.fetchedDish, this.error, dishesSelected[i]);
	  }
	   
      //dishesSelected = model.getSelectedDishes();

     /*
      for(var i=0; i< dishesSelected.length; i++)
      {
		    d.append("<div class='row'> <div class='col-md-3'> <img src='images/" + dishesSelected[i].image + "' style='width:150px; height: 150px'> </div> <div class='col-md-4'> <h5>" + dishesSelected[i].name + "</h5> <p>" + dishesSelected[i].description + "</p> </div>  <div class='col-md-5'> <h5>Preperations</h5> <p>" + dishesSelected[i].description + "</p> </div> </div>");
		  
		  
		  /*
		  d.append("<div class='row' <div class='col-md-3'> <img src='images/" + dishesSelected[i].image + "' style='width:150px; height: 150px'> </div> <div class='col-md-4'> <h5>" + dishesSelected[i].name + "</h5> <p>" + dishesSelected[i].description + "</p> </div>  <div class='col-md-5'> <h5>Preperations</h5> <p>" + dishesSelected[i].description + "</p> </div> </div>");
		  */
		  
		  /*
         container.append("<div class='row' id='cleanThis' <div class='col-md-3'> <img src='images/" + dishesSelected[i].image + "' style='width:150px; height: 150px'> </div> <div class='col-md-4'> <h5>" + dishesSelected[i].name + "</h5> <p>" + dishesSelected[i].description + "</p> </div>  <div class='col-md-5'> <h5>Preperations</h5> <p>" + dishesSelected[i].description + "</p> </div> </div>");
		 */
    //  }      
   	
   }
   
   
   this.update();
}



















