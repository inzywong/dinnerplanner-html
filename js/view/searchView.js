

var SearchView = function (container, model){
    //search bar
   this.searchBar = container.find("#searchBar");
   // FOOD IMAGES DIV ----------------------------------------------
   this.inputDiv = container.find("#dishImages");
   
   this.selectableDishes = function(dishes, inputDiv)
   {
        inputDiv.html("");
        //console.log("what is this: "+ dishes[0].id);
        //Show full dish list
        console.log("success");
    
    for (i=0;i<dishes.length;i++){
            var htmlString ="<a href='details' data-id='" + dishes[i].id +"' class='nav-to-dish'> <div style='width:200px; float: left; margin-left: 10px;'><img src='https://spoonacular.com/recipeImages/"+dishes[i].image+"' style='width:200px; height: 200px'><p>"+dishes[i].title+"</p></div> </a>";
            inputDiv.append(htmlString);
        }
        
    }
   
   this.error = function(data, inputDiv){
        console.log("error");
       inputDiv.html("<p> something went wrong!</p>");
   }
   
  // this.selectableDishes(dishMenu,  this.inputDiv);
  model.getAllDishes(null, null, this.selectableDishes, this.error, this.inputDiv);
}

