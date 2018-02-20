


var DinnerPrintoutView = function (container, model) 
{
    model.addObserver(this);
   
    var nGuests = container.find("#nGuests");
    
    nGuests.html(model.getNumberOfGuests() + " people");
    

    var dishes = model.getSelectedDishes();    
    
    var dishDiv = container.find("#fifthView");
    dishDiv.append("<h1> HELLO </h1>");
    
    
    for(var i=0; i<dishes.length; i++)
    {       
        
        container.append("<div class='row'> <div class='col-md-3'> <img src='images/" + dishes[i].image + "' style='width:150px; height: 150px'> </div>  <div class='col-md-4 bg-primary'>  <h5>" + dishes[i].name + "</h5> <p>" + dishes[i].description + "</p> </div>   <div class='col-md-5 bg-success'>   <h5>Preperations</h5>  <p>" + dishes[i].description + "</p> </div> </div>");        
    }
    
}




