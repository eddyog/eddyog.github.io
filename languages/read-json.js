
var requestURL = "/json-files/python.json"
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.load = function() {
    var languageData = request.response;
    readLanguage(languageData);
}


function readLanguage(jsonObj){
    var languages = jsonObj['Languages']
    var i = 0;

    for (i = 0; i < languages.length ; i ++) {
        
        // var image = "<src='" + languages[i].imageSrc + "' alt='" + languages[i].imageAlt + "'>";
        // document.getElementById("project-image").innerHTML = image;

        var name = languages[i].name;
        document.getElementById("projectName").innerHTML = name;

        var description = languages[i].description;
        document.getElementById("description").innerHTML = description;

    }
}
