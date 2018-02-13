

var SelectDishesController = function(view, model, pagesDisplayer) 
{

    var searchField = view.find("#inputField").on("click", function(){
        console.log("nooooo");
    });

    //if a dish is selected, redirect to dishdetail
    /*
	view.grid.on("click", ".nav-to-dish", function(e){
		e.preventDefault();
		router.showDishDetailsScreen($(this).data("dish-id"));		
    });
    */
    
    //Searchfield filter functions
    /*
    view.searchBar.on("change", "#type-selector", function(){
		view.searchBar.find("#search-field").val("");
		var type = $(this).val();
		if(type == "all"){
			view.generateGrid(model.getAllDishes(), view.grid);
		}else{
			view.generateGrid(model.getAllDishes(type, null), view.grid);
		}
    });
    */

    //searchfield function
    /*
    view.searchBar.on("input", "#search-field", function(){
		view.searchBar.find("#type-selector").val("all");
		view.generateGrid(model.getAllDishes(null, $(this).val()), view.grid);
    });
    */

}


