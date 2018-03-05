

var SearchController = function(view, model, pagesDisplayer) 
{
   
   // When the user clicks on a 'Dish'.
   view.imageGrid.on("click", ".nav-to-dish", function(e){
      e.preventDefault();
	 
      //console.log( "Clicked dish ID: " + $(this).data("id") );
      /*
      model.setDishesSelectedID($(this).data("id"));

      pagesDisplayer.showDishDetails();*/
      pagesDisplayer.showDishDetails( $(this).data("id") ); 
   });
   
   
   // When the user changes the dropdown menu
   view.searchBar.on("change", "#DishType", function()
   {     
       var type = $(this).val();
       view.imageGrid.html("<center><img src='https://media1.tenor.com/images/8ac12962c05648c55ca85771f4a69b2d/tenor.gif?itemid=9212724'></center>");

      
	   if(type == "all") {
		   // 
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
    view.imageGrid.html("<center><img src='https://media1.tenor.com/images/8ac12962c05648c55ca85771f4a69b2d/tenor.gif?itemid=9212724'></center>");

	   model.getAllDishes(view.selectableDishes, view.error, null, $(this).val(), view.imageGrid);	   
	   //view.selectableDishes(model.getAllDishes(null, $(this).val()), view.imageGrid);
   });
}