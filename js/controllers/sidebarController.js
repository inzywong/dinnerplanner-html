

var SideBarController = function(view, model, pagesDisplayer) 
{    
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
   
	view.confirmDinnerButton.click(function(e)
    {
         pagesDisplayer.showDinnerSummary();
	});          
}