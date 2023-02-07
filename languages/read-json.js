

const file = getParam('language');

switch (file){
    case 'python':
        var requestURL = "../json-files/python.json";
        break;
    case 'c':
        var requestURL = "../json-files/c++.json";
        break;
    case 'web':
        var requestURL = "../json-files/web.json";
        break;
    case 'swift':
        var requestURL = "../json-files/swift.json";
        break;
    case 'others':
        var requestURL = "../json-files/others.json";
        break;
}

var request = new XMLHttpRequest();


request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var languageData = request.response;
    readLanguage(languageData);

}




function readLanguage(jsonObj){

    const title_page = document.getElementById("title_page");
    title_page.innerHTML = "Eddy O. Gonzalez";

    var languages = jsonObj['Language'];


var template = document.querySelector('#product-card-template');
for (var i = 0; i < languages.length; i++){

    var user = languages[i];
    var clone = template.content.cloneNode(true);

    var h2 = clone.querySelectorAll('h2');
    h2[0].innerHTML = user.name;

    var p = clone.querySelectorAll('p');
    p[0].innerHTML = user.description;

    var img = clone.querySelectorAll('img');
    img[0].src = user.imgSrc;

    var link = clone.querySelectorAll('form');
    link[0].action = user.link;

    var button = clone.querySelectorAll('button');
    button[0].innerHTML = user.button;

    template.parentNode.appendChild(clone);
    
}
   

}
