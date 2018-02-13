

var SideBarController = function(view, model, pagesDisplayer) 
{
    //console.log(" SIDE BAR CONTROLLER! ");
    
    
    // getting a reference to the buttons:
    //var minusButton = container.find("#minusGuest");
    //var plusButton  = container.find("plusGuest");    
    
    // When the user clicks on the 'minus' button
	view.minusButton.click(function(e)
    {
        model.removeOneGuest();
        view.update();        
	});   
    
	view.plusButton.click(function(e)
    {
        model.addOneGuest();
        view.update();
	});       
}


