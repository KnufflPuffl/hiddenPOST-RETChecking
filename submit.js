var checkIntervalID = 0; 


// Function will be checking in Intervall if Server returned success
function continousCheckOrder() 
{
	
	var frame_result = $('#submit_frame').contents().find("html").html(); 
		
		
		if (frame_result.indexOf("1") !=-1) // Server Returned 1 for Success 
		{
    	
    	// Do Whatever you want here in my Case Display a Message and Relocating 
			clearInterval(checkIntervalID);
				
			errorMessage("<h2>Bestellung erfolgreich</h2>Vielen Dank wir haben Ihre Bestellung erhalten, Sie haben auch eine Bestätigung per E-Mail erhalten"); 
			showError();
				
			$('#error button').on('click',function() 
			{
				document.location.href = 'index.html';  
			});
			
		}

	
}




$(document).ready(function(e) 
{
	

	$('.ajax-loader').css('display','block');
	$('#wrapper').css('display','none'); 
	
	
	$('#submit_frame').on('load', function() 
	{
		
		// Show Loader
		$('.ajax-loader').css('display','block');
		$('#wrapper').css('display','none'); 

		// coming back from Server... -> calling check RET function 
		checkIntervalID = setInterval(continousCheckOrder,1000); 
		 
			
	}); 
