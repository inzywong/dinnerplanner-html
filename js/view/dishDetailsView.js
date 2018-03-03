

var DishDetailsView = function (container, model, _dishId) 
{     
    model.addObserver(this);
   
   // This will store 
   this.dishObject;
	
   // In case no dish was returned, we'll use this object to display the properties on the view.
   this.dishDefault = {'id':1,
		'name':'',
		'type':'',
		'image':'',
		'description':"",
		'ingredients':[]
		}
   
   
   var nGuests; // = model.getNumberOfGuests();

   //get the <h1 id="dish_name">
   var dName = container.find("#dish_name");
    
    
   this.dishId = _dishId;
   // Get the dish
   var selectedDish = model.getDish(this.dishId); 
  		
   //dName.html(selectedDish.name);
   

   //var dishPhoto = container.find("#dish_image");
   //dishPhoto.attr("src", "images/" + selectedDish.image);   
   
   //var dishDescription = container.find("#dishDescription");
   //dishDescription.html(selectedDish.description);

   
   //var preparation = container.find("#preparation");
   //preparation.html(selectedDish.description);
    
   
   // Reference to the buttons
   this.backToSearchButton = container.find("#back_to_search");
   this.addToMenuButton = container.find("#add_to_menu");   
   
   

   	this.error = function(error){
		console.log("Error on Dish Details!");	
	}
	
	
	

   
   this.update = function()
   {	   
	   //this.dishId = _dishId;
	   // Get the dish
	   //selectedDish = model.getDish(this.dishId); 	   
	   
	   //console.log("Getting Dish2");
	   //model.getDish2( this.cbTest, this.errorCb, this.dishId );
	   model.getDish( this.cbTest, this.errorCb, this.dishId );

	   /*
	   selectedDish	= this.dishObject;   

	   console.log("Dish on update(): ");
	   console.log(selectedDish);
	   if( selectedDish == null )
	   {
		  selectedDish = this.dishDefault;		  
	   }
	   //selectedDish = this.dishObject; 
	   
	   
	   //console.log( "a :" );
	   //onsole.log(a);
	   
	   //console.log("SELECTED DISH: ");
	   //var d = model.getDish2( this.error, this.dishId );
	   //console.log( d ); 	
	   
	   nGuests = model.getNumberOfGuests();
	   
	   
	   dName = container.find("#dish_name");
	   

		  
	   dName.html(selectedDish.name); 
	   //dName.html(selectedDish.title); 
	   
	   
	   var dishPhoto = container.find("#dish_image");
	   dishPhoto.attr("src", "images/" + selectedDish.image);   

	   var dishDescription = container.find("#dishDescription");
	   dishDescription.html(selectedDish.description);


	   var preparation = container.find("#preparation");
	   preparation.html(selectedDish.description);	   


       // Table ------------------------------------------------------------------------------------------------------
       // Ingredients for X people
       var tableTitle = container.find("#tableTitle");
       tableTitle.html("Ingredients for " + nGuests + " people");

       //var ingredients = selectedDishes[0].ingredients;
       var ingredients = selectedDish.ingredients;


       var tableItens = container.find("#tableIngredients"); 
       tableItens.html("");

       for(var i=0; i<ingredients.length; i++)
       {        
           var htmlToBeAdded = "<div class='row'>";

           // div for the quantity
           htmlToBeAdded += " <div class='col-xs-3 text-right'> <p>" + ingredients[i].quantity + " " + ingredients[i].unit + "</p>  </div> "

           // ingredient's name
           htmlToBeAdded += " <div class='col-xs-3 text-right'> <p>" + ingredients[i].name + "</p>  </div> "


           // SEK
           htmlToBeAdded += " <div class='col-xs-3 text-right'> <p> SEK </p>  </div> "

           // PRICE 
           htmlToBeAdded += " <div class='col-xs-3 text-right'> <p>" + parseInt(ingredients[i].price)*nGuests + "</p>  </div> "


           // Close the row div
           htmlToBeAdded += "</div>"

          
           tableItens.prepend(htmlToBeAdded);        
       }
      
      //tableItens.append("<hr style='border-color: black'> <div class='row'> <div class='col-xs-6'> <div class='col-md-12 text-left' style='margin-bottom: 10px; margin-top: 10px'> <button type='button' class='btn btn-warning' id='add_to_menu'>Add to menu</button>  </div> </div> <div class='col-xs-6 text-right'> <p id='totalPrice'>??? SEK </p> </div> </div>   ");
      
       


       var total = container.find("#totalPrice");
       total.html(model.getDishPrice(selectedDish.id)*nGuests + " SEK");
   // ------------------------------------------------------------------------------------------------------------ 
      
      
      // Reference to the buttons
      //this.backToSearchButton = container.find("#back_to_search");
      this.addToMenuButton = container.find("#add_to_menu");      
      
	  */
   }

   
   
   this.cbTest = function(dish)
   {	   
	   this.dishObject = dish;
	   
	   selectedDish	= this.dishObject;   
	   
	   if( selectedDish == null )
	   {
		   console.log("HERE!");
		  selectedDish = this.dishDefault;		  
	   }
	   //selectedDish = this.dishObject; 
	   
	   
	   //console.log( "a :" );
	   //onsole.log(a);
	   
	   //console.log("SELECTED DISH: ");
	   //var d = model.getDish2( this.error, this.dishId );
	   //console.log( d ); 	
	   
	   nGuests = model.getNumberOfGuests();
	   
	   
	   dName = container.find("#dish_name");
	   

	   //dName.html(selectedDish.name); 
	   dName.html(selectedDish.title); 
	   
	   
	   var dishPhoto = container.find("#dish_image");
	   //dishPhoto.attr("src", "images/" + selectedDish.image);   
	   dishPhoto.attr("src", selectedDish.image)

	   //var dishDescription = container.find("#dishDescription");
	   //dishDescription.html(selectedDish.description);


	   var preparation = container.find("#preparation");
	   preparation.html("");
	   
	   for(var i=0; i<selectedDish.analyzedInstructions[0].steps.length; i++)
	   {
		   preparation.append("<p>" + selectedDish.analyzedInstructions[0].steps[i].step + "</p>");		   
		   //console.log( selectedDish.analyzedInstructions[0].steps[i].step );
	   }
	   

       // Table ------------------------------------------------------------------------------------------------------
       // Ingredients for X people
       var tableTitle = container.find("#tableTitle");
       tableTitle.html("Ingredients for " + nGuests + " people");

       //var ingredients = selectedDishes[0].ingredients;
       //var ingredients = selectedDish.ingredients;
	   var ingredients = selectedDish.extendedIngredients;


       var tableItens = container.find("#tableIngredients"); 
       tableItens.html("");

       for(var i=0; i<ingredients.length; i++)
       {        
           var htmlToBeAdded = "<div class='row'>";

           // div for the quantity
           //htmlToBeAdded += " <div class='col-xs-3 text-right'> <p>" + ingredients[i].quantity + " " + ingredients[i].unit + "</p>  </div> "
		   
		   // div for image
           htmlToBeAdded += " <div class='col-xs-3 text-right'> <img src='" + ingredients[i].image + " ' height='42' width='42' >  </div>"
		              
		   
		   // ingredient's name
           htmlToBeAdded += " <div class='col-xs-3 text-right'> <p>" + ingredients[i].name + "</p>  </div> "


           // SEK
           // htmlToBeAdded += " <div class='col-xs-3 text-right'> <p> SEK </p>  </div> "
		   
		   // Amount
           htmlToBeAdded += " <div class='col-xs-3 text-right'> <p>" + ingredients[i].amount + "</p>  </div> "
		   

           // PRICE 
           //htmlToBeAdded += " <div class='col-xs-3 text-right'> <p>" + parseInt(ingredients[i].price)*nGuests + "</p>  </div> "
		   
           // UNIT
           htmlToBeAdded += " <div class='col-xs-3 text-right'> <p>" + ingredients[i].unit + "</p>  </div> "		   


           // Close the row div
           htmlToBeAdded += "</div>"

           tableItens.prepend(htmlToBeAdded);       
       }
      
      //tableItens.append("<hr style='border-color: black'> <div class='row'> <div class='col-xs-6'> <div class='col-md-12 text-left' style='margin-bottom: 10px; margin-top: 10px'> <button type='button' class='btn btn-warning' id='add_to_menu'>Add to menu</button>  </div> </div> <div class='col-xs-6 text-right'> <p id='totalPrice'>??? SEK </p> </div> </div>   ");
      
       
       var total = container.find("#totalPrice");
       //total.html(model.getDishPrice(selectedDish.id)*nGuests + " SEK");
	   total.html(selectedDish.pricePerServing*nGuests + " SEK");
	   // ------------------------------------------------------------------------------------------------------------ 
      
      
      // Reference to the buttons
      //this.backToSearchButton = container.find("#back_to_search");
      this.addToMenuButton = container.find("#add_to_menu");  
   }
   
   this.errorCb = function()
   {
	   console.log("Error on Dish Details!");
   }
      
   
   this.update();
}
