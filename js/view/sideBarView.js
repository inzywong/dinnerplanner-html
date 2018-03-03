

var SideBarView = function (container, model) 
{

    model.addObserver(this);
   
    // getting a reference to the buttons:
    this.minusButton = container.find("#minusGuest");
    this.plusButton  = container.find("#plusGuest");    
    this.confirmDinnerButton = container.find("#confirm_dinner_button");
    
	
   // This function is called once the dish is returned.
   this.fetchedDish = function(dish)
   {
	   var dishNameCostDiv = container.find("#dish_cost");

	   console.log("Dish got in the siderbar");
	   console.log(dish);
	   
	   
	   dishNameCostDiv.append("<div class = 'row'> <div  class='col-md-6 noPadding' style='float:left' > <p style='text-align:left'>"+ dish.title + " </p> </div>" + "<div class='col-md-6'> <p style='text-align:right'>" + dish.pricePerServing*model.getNumberOfGuests() + " SEK</p> </div> </div>");
      //" /*+ dish.price*model.getNumberOfGuests() + */"
   }
   
   this.error = function()
   {
	   console.log("ops,there was a problem on requesting a dish");
   }
   
   
   
    this.update = function()
    {
        var nGuests = container.find("#nGuests");

        nGuests.html(model.getNumberOfGuests());

        // get the div to add the dishes's name and cost
        var dishNameCostDiv = container.find("#dish_cost");
        dishNameCostDiv.html("");
		
        //var selectedDishes = model.getSelectedDishes();
		var dishesSelected = model.getDishesSelectedID();

		for(var i=0; i < dishesSelected .length ; i++)
		{
			model.getDish(this.fetchedDish, this.error, dishesSelected[i]);
		}
		
		
        /*
        for(var i =0; i< selectedDishes.length; i++)
        {
            dishNameCostDiv.append("<div class = 'row'> <div  class='col-md-6 noPadding' style='float:left' > <p style='text-align:left'>"+ model.getDish(selectedDishes[i].id).name + " </p> </div>" + "<div class='col-md-6'> <p style='text-align:right'>"+ model.getDishPrice(selectedDishes[i].id)*model.getNumberOfGuests() + " SEK</p> </div> </div>");
        }        
       */
		
        // Adding the total cost of the dish
        //container.find("#total_cost").html( model.getTotalMenuPrice() + " SEK");
    }
    
    this.update();

}








