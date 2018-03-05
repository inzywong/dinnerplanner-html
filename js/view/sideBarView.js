

var SideBarView = function (container, model) 
{

    model.addObserver(this);
   
    // getting a reference to the buttons:
    this.minusButton = container.find("#minusGuest");
    this.plusButton  = container.find("#plusGuest");    
    this.confirmDinnerButton = container.find("#confirm_dinner_button");
    
	
   
    this.update = function()
    {
		//console.log("sideBar being updated");
		
        var nGuests = container.find("#nGuests");

        nGuests.html( model.getNumberOfGuests() );

        // get the div to add the dishes's name and cost
        var dishNameCostDiv = container.find("#dish_cost");
        dishNameCostDiv.html("");
		
        var selectedDishes = model.getSelectedDishes();
	
		//console.log(selectedDishes);
		//console.log(selectedDishes[0]);
		
        for(var i=0; i< selectedDishes.length; i++)
        {
            dishNameCostDiv.append("<div class = 'row'> <div  class='col-md-6 noPadding' style='float:left' > <p style='text-align:left'>"+ selectedDishes[i].title + " </p> </div>" + "<div class='col-md-6'> <p style='text-align:right'>"+ (selectedDishes[i].pricePerServing*model.getNumberOfGuests()).toFixed(2) + " SEK</p> </div> </div>");	
			
			/*
            dishNameCostDiv.append("<div class = 'row'> <div  class='col-md-6 noPadding' style='float:left' > <p style='text-align:left'>"+ model.getDish(selectedDishes[i].id).name + " </p> </div>" + "<div class='col-md-6'> <p style='text-align:right'>"+ model.getDishPrice(selectedDishes[i].id)*model.getNumberOfGuests() + " SEK</p> </div> </div>");
			*/
        }        
       
        // Adding the total cost of the dish
        container.find("#total_cost").html( (model.getTotalMenuPrice()).toFixed(2) + " SEK");
    }
    
    this.update();

}








