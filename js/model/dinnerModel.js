//DinnerModel Object constructor
var DinnerModel = function() 
{
	var nGuests = 0;
	
	var randomRecipes = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=15&tags=";
	var APIkey = "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB";
    
    // Array containing the ID of the dishes selected
    //var dishesSelectedID = [2,103,202];
	var dishesSelectedID=1;
	var menu = [];   
   
   var observers = [];
   
   this.addObserver = function(obs) 
   { 
      observers.push(obs);
      
   }
   
   
   var notifyObservers = function(obj)
   {
      for(var i=0; i<observers.length; i++)
      {
         observers[i].update();
      }
   }
   

	this.setNumberOfGuests = function(num) 
    {
        // Just checking if we are not trying to set a negative number by mistake
        if(num < 0)
        {
            nGuests = 0;
        }
        else
        {
            nGuests = num; 
		}
		//I think we need to notifyObserver()
	}
	
	this.getNumberOfGuests = function() 
    {
        return (nGuests);
	}
    
    this.addOneGuest = function()
    {
        this.setNumberOfGuests( this.getNumberOfGuests() + 1);
        notifyObservers();
    }
    
    this.removeOneGuest = function()
    {
        this.setNumberOfGuests( this.getNumberOfGuests() - 1);
        notifyObservers();       
    }    
    
    

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) 
    {
        // Go through every dish selected
        for(var i=0; i<menu.length; i++)
        {
            if(menu[i].type == type)
            {
                return this.getDish(menu[i]);
            }
        }
        
        // If no dish of that type was found, let's return -1.
        return (-1);
	}

    // Returns all dishes selected
    this.getSelectedDishes = function()
    {
        // Array that is gonna contain all the dishes selected
		var allDishesOnTheMenu = [];
        
        // Go through every dish selected
        for(var i=0; i<menu.length; i++)
        {
            allDishesOnTheMenu.push(this.getDish(menu[i]));
        }
        
        return allDishesOnTheMenu;        
    }
    
	//Returns all the dishes on the menu.
	this.getFullMenu = function() 
    {
		//return this.getAllDishes();
		return menu;
	}

    
	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() 
    {
		var allIngredients = [];
    
        // Go through every dish selected
        for(var i=0; i<menu.length; i++)
        {
            allIngredients.push(this.getDish(menu[i]).ingredients);
        }
 
        return allIngredients;
	}

    
	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() 
    {
        var totalPrice = 0;
    
        var ingredients = this.getAllIngredients();       
       
        // Each dish has a list of ingredients.
        // 'ingredients' is a list of the list of ingredients for the dishes selected
        for(var i=0; i< ingredients.length; i++)
        {
            for(var m=0; m<ingredients[i].length; m++)
            {               
                totalPrice += ingredients[i][m].price;
            }
        }

        return totalPrice*nGuests;   
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) 
    {           
       

       // If there is no selected dishes, we should add it right away
       if(menu.length == 0)
       {
          menu.push(id);
       }       
       
       // If there is already some dishes selected, we should check if there isn't some dish of the same type
       else
       {
          var inserted = false;
          // Go through every dish selected
          for(var i=0; i<menu.length; i++)
          {        
             if( this.getDish(menu[i]).type == this.getDish(id).type)
             {
                this.removeDishFromMenu(menu[i]);
                
                // Adding the new dish to our dishesSelectedID
                menu.push(id);
                
                inserted = true;
                break;
             }
          }
          
          if(!inserted)
          {
             menu.push(id);
          }
       }

      notifyObservers(); 
    }

	//Removes dish from menu
	this.removeDishFromMenu = function(id) 
    {
        // Go through every dish selected
        for(var i=0; i<menu.length; i++)
        {
            if( menu[i] == id )
            {
                menu.splice(i,1);
            }
        }
       
        notifyObservers();       
	}
    
    //Get the price of the dish
	this.getDishPrice = function(id) 
    {
        var d = this.getDish(id); 
        
        var price = 0;
        for(var i=0; i< d.ingredients.length; i++)
        {
            price += d.ingredients[i].price;
        }
        
        return price
	}    

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	/*this.getAllDishes = function (type,filter) 
    {
	  return dishes.filter(function(dish) 
      {
		var found = true;
		if(filter){
			found = false;
			dish.ingredients.forEach(function(ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			//if(dish.name.indexOf(filter) != -1)
			if(dish.name.toLocaleLowerCase().indexOf(filter) != -1)
            {
				found = true;
			}
		}
		if (type) {
			return dish.type == type && found;
		}
		else {
			return found;
		}
	  });	
	}*/

	this.getAllDishes = function (type, filter, callback, errorCallback, inputDiv) {
		if(type){
			var myType = "type="+type;
		}
		if(filter){
			var myFilter = "query="+filter;
		}
		$.ajax( {
		   //url: randomRecipes,
		   url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?"+myType+"&"+myFilter,
		   headers: {
			 'X-Mashape-Key': APIkey
		   },
		   success: function(data) {
			console.log(data);
			callback(data.results, inputDiv)
		   },
		   error: function(error) {
			   //console.log(error);
			errorCallback(error, inputDiv)
		   }
		 });
	}

	//function that returns a dish of specific ID
	this.getDish = function (id, callback, errorCallback) {
		if(dishesSelectedID == id) {
			callback(dishesSelectedID);
		}	
		$.ajax( {
			url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"+id+"/information",
			headers: {
			  'X-Mashape-Key': APIkey
			},
			success: function(data) {
			  console.log(data);
			 setDishesSelectedID = data; 
			  callback(data)
			},
			error: function(error) {
			  errorCallback(error)
			}
		  });
	}
	this.getDishesSelectedID= function(){
		return dishesSelectedID;
	}
	this.setDishesSelectedID=function(id){
		dishesSelectedID = id;
	}

	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}
