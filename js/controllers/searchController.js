

var SearchController = function(view, model, pagesDisplayer) 
{
   //Click on dish action
   view.inputDiv.on("click", ".nav-to-dish", function(e){
      e.preventDefault();
      model.setDishesSelectedID($(this).data("id"));
      pagesDisplayer.showDishDetails();
   });
   
   
   //drop down 
   view.searchBar.on("change", "#DishType", function()
   {
      var type = $(this).val();
      view.inputDiv.html("<center><img src='https://media1.tenor.com/images/8ac12962c05648c55ca85771f4a69b2d/tenor.gif?itemid=9212724'></center>");
      if(type == "all")
      {
          model.getAllDishes(null, null, view.selectableDishes, view.error,view.inputDiv);
         //view.selectableDishes(model.getAllDishes(), view.imageGrid);
      }
      else
      {
        model.getAllDishes(type, null, view.selectableDishes, view.error, view.inputDiv);
        //view.selectableDishes(model.getAllDishes(type, null), view.imageGrid);         
      }
   });
   
   //input to search field
   view.searchBar.on("input", "#SearchField", function()
   {
      model.getAllDishes(null, $(this).val(), view.selectableDishes, view.error, view.inputDiv);
   });
}