

var SearchController = function(view, model, pagesDisplayer) 
{
   
   view.imageGrid.on("click", ".nav-to-dish", function(e){
      e.preventDefault();
      pagesDisplayer.showDishDetails( $(this).data("id") ); 
   });
   
   
   // When the user changes the dropdown menu
   view.searchBar.on("change", "#DishType", function()
   {     
	   var type = $(this).val();
      
	   if(type == "all") {
		   model.getAllDishes(view.selectableDishes, view.error, null, null, view.imageGrid);
		   //view.selectableDishes(model.getAllDishes(), view.imageGrid);
	   }
	   else {
		   model.getAllDishes(view.selectableDishes, view.error, type, null, view.imageGrid);		   
		   //view.selectableDishes(model.getAllDishes(type, null), view.imageGrid);         
	   }
   });
   
   
   // When the user is typing the name of the dish/ingredient 
   view.searchBar.on("input", "#SearchField", function()
   {
	  model.getAllDishes(view.selectableDishes, view.error, null, $(this).val(), view.imageGrid);	   
	   
      //view.selectableDishes(model.getAllDishes(null, $(this).val()), view.imageGrid);
   });
}