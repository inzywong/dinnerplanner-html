

var DishDetailsView = function (container, model, _dishId) 
{     
    model.addObserver(this);
   this.container= container;
   
   var nGuests; // = model.getNumberOfGuests();

   //get the <h1 id="dish_name">
   var dName = container.find("#dish_name");
    
    
   this.dishId = _dishId;
   // Get the dish
   var selectedDish = model.getDish(this.dishId); 
   
   dName.html(selectedDish.name);
   

   var dishPhoto = container.find("#dish_image");
   dishPhoto.attr("src", "images/" + selectedDish.image);   
   
   var dishDescription = container.find("#dishDescription");
   dishDescription.html(selectedDish.description);

   
   var preparation = container.find("#preparation");
   preparation.html(selectedDish.description);
    
   
   // Reference to the buttons
   this.backToSearchButton = container.find("#back_to_search");
   this.addToMenuButton = container.find("#add_to_menu");   
   
   
   this.update = function()
   {

	   //this.dishId = _dishId;
	   // Get the dish
	  selectedDish = model.getDish(this.dishId); 	   

      nGuests = model.getNumberOfGuests();
	   
	   
	  dName = container.find("#dish_name");
	   
	  dName.html(selectedDish.name); 
	   
	   
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
      
   }

   this.error = function(data){
       container.html("<p>Somethings wrong try again later</p>");
   }

   model.getDish(_dishId, this.updateInfo, this.error);
   this.update();
}

/*
var DishDetailsView = function (container, model, _dishId) 
{     
    model.addObserver(this);
   
   
   var nGuests; 
   var dName = container.find("#dish_name");
   this.dishId = _dishId;   
   var dishPhoto = container.find("#dish_image");
   var dishDescription = container.find("#dishDescription");
   var preparation = container.find("#preparation");
   
   // Reference to the buttons
   this.backToSearchButton = container.find("#back_to_search");
   this.addToMenuButton = container.find("#add_to_menu");   
   
    this.dishInformation = function(dish, inputDiv){
        nGuests = model.getNumberOfGuests();
        dName.html(dish.title);
        dishPhoto.attr("src", "images/" + dish.image);
        dishDescription.html(dish.description);
        preparation.html(dish.description);

    }

   
   this.update = function()
   {

	dName = container.find("#dish_name");
	dName.html(dish.title); 
	   
   var dishPhoto = container.find("#dish_image");
   dishPhoto.attr("src", dish.image);   
   
   var dishDescription = container.find("#dishDescription");
   dishDescription.html(dish.analyzedInstructions[0].steps[0].step);

   var preparation = container.find("#preparation");
   preparation.html(dish.analyzedInstructions[0].steps[0].step);	   

       // Table ------------------------------------------------------------------------------------------------------
       // Ingredients for X people
       var tableTitle = container.find("#tableTitle");
       tableTitle.html("Ingredients for " + nGuests + " people");

       //var ingredients = selectedDishes[0].ingredients;
       var ingredients = dish.extendedIngredients;

       var tableItens = container.find("#tableIngredients"); 
       tableItens.html("");

       for(var i=0; i<ingredients.length; i++)
       {        
           var htmlToBeAdded = "<div class='row'>";

           // div for the quantity
           htmlToBeAdded += " <div class='col-xs-3 text-right'> <p>" + ingredients[i].quantity + " " + ingredients[i].unit + "</p>  </div> "

           // ingredient's name
           htmlToBeAdded += " <div class='col-xs-3 text-right'> <p>" + ingredients[i].originalString + "</p>  </div> "


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
       total.html(model.getDishPrice(dish.id)*nGuests + " SEK");
   // ------------------------------------------------------------------------------------------------------------ 
      
      
      // Reference to the buttons
      //this.backToSearchButton = container.find("#back_to_search");
      this.addToMenuButton = container.find("#add_to_menu");      
      
   }

   //this.error = function(data, inputDiv)
   //model.getDish(dishId, this.generateDetails, this.error, this);

   
   this.update();
}
*/