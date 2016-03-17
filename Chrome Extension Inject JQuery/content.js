// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if( request.message === "inject_scripts") {
      // Injects scripts to the current page
      console.log('injecting scripts');
      appendScript('https://code.jquery.com/jquery-2.2.1.min.js')
    }

  }
);


function appendScript(pathToScript) {
    var head = document.getElementsByTagName("head")[0];
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = pathToScript;
    head.appendChild(js);
}