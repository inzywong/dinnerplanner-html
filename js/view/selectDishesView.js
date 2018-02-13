var SelectDishesView = function (container, model){
    //var dishes = container.find("#dishes");
    var dishes = container.find("#AllDishes");
    var searchBar = container.find("#searchBar");


    var inputField = document.createElement("INPUT");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("value", "search for a recipe!");
    inputField.setAttribute("class", "form-control");
    inputField.setAttribute("id", "inputField");
   /* var btn = document.createElement("BUTTON");
    btn.setAttribute("type","button");
    btn.setAttribute("class", "btn btn-primary specialButton");
    var spanElement=document.createElement("SPAN");
    spanElement.setAttribute("class", "glyphicon glyphicon-search");
    btn.append(spanElement);
    btn.value = "Search";*/
    searchBar.prepend(inputField);
    var dishMenu = model.getFullMenu();

    //Show full dish list
  for (i=0;i<dishMenu.length;i++){
  //  dishes.append("<div style='width:200px; float: left; margin-left: 10px;'><img src='images/"+dishMenu[i].image+"' style='width:200px; height: 200px'><p>"+dishMenu[i].name+"</p></div>");
    dishes.append("<div style='width:200px; float: left; margin-left: 10px;'><img src='images/"+dishMenu[i].image+"'><p>"+dishMenu[i].name+"</p></div>");
  }
    //Show selected dishes in Full Recipe
   

}
