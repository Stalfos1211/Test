// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }

    if( request.message === "get_all_images") {
  //   	
  		var aImages = [];
  		$("[src*='.jpg']").each(function() {  
		   aImages.push(this.src);
		});

		console.log(aImages);
		console.log("There are " + aImages.length + " images!" );
    }

  }
);