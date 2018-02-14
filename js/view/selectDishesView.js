var SelectDishesView = function (container, model){
  //var dishes = container.find("#dishes");
  this.dishesDiv = container.find("#Dishes");
  this.searchBar = container.find("#searchBar");

  var dishMenu = model.getFullMenu();
  
  //Show dishes!
  this.selectableDishes= function(dishes, inputDiv ){
    inputDiv.html("");
    for (i=0;i<dishes.length;i++){
      //dishes.append("<div style='width:200px; float: left; margin-left: 10px;'><img src='images/"+dishMenu[i].image+"' style='width:200px; height: 200px'><p>"+dishMenu[i].name+"</p></div>");
      var htmlString="<div style='float: left; margin-left: 15px;'> <a href='details' data-dish-id="+dishes[i].id+" class='nav-to-dish'> <img src='images/"+dishes[i].image+"'><p>"+dishes[i].name+"</p></a></div>";
      inputDiv.append(htmlString);
    }
  }

  //Show full dish list on load
  this.selectableDishes(dishMenu,this.dishesDiv);
}
