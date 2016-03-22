window.addEventListener('button', summarizeNow());
function summarizeNow() {
	var AYLIENTextAPI = require('aylien_textapi');
	var textapi = new AYLIENTextAPI({
	application_id: "12049eaa",
	application_key: "0050eee15d54ac3dbd69d868fc1e8570"
});
	var current = window.location.href 
	var sum = document.getElementById("summary");
	
	textapi.summarize({
	  url: 'current',
	  sentences_number: 5
	}, function(error, response) {
      if (error === null) {
        response.sentences.forEach(function(s) {
        sum.innerHTML = sum.innerHTML + s;
        });
      }
	});
}