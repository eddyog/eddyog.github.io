



var requestURL = "../json-files/python.json"
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

    var languages = jsonObj['Python'];



//  var arr = [
//     {name: 'Susan', country: 'Usa', age: 27},
//     {name: 'Eddy', country: 'Guatema;a', age: 31},
// ];

var template = document.querySelector('#product-card-template');
for (var i = 0; i < languages.length; i++){

    // const nameList = document.getElementById("projectName");
    // let listNames = document.createElement('p');
    // listNames.textContent = languages[i].name;
    // nameList.appendChild(listNames);

    var user = languages[i];
    var clone = template.content.cloneNode(true);

    var h2 = clone.querySelectorAll('h2');
    h2[0].innerHTML = user.name;

    var p = clone.querySelectorAll('p');
    p[0].innerHTML = user.description;

    var img = clone.querySelectorAll('img');
    img[0].src = user.imgSrc;

    template.parentNode.appendChild(clone);

    
}
   


    // var mytemp = document.getElementById("card");
    // var clon = mytemp.content.cloneNode(true);
    // mytemp.appendChild(clon);

    

    // const debug = document.getElementById("debugging");
    // debug.innerHTML = "a";


    // var name = languages.name;
    // document.getElementById("projectName").innerHTML = name;

    //  for (i = 0; i < languages.length ; i ++) {
        
    //     var image = "<src='" + languages[i].imageSrc + "' alt='" + languages[i].imageAlt + "'>";
    //     document.getElementById("project-image").innerHTML = image;

    // const cards = document.getElementById("card");
    // let listCard = document.createElement("div");
    // listCard.textContent = "";
    // cards.appendChild(listCard);



    // const descriptionList = document.getElementById("description");
    // let listDescription = document.createElement('p');
    // listDescription.textContent = languages[i].description;
    // descriptionList.appendChild(listDescription);

    // }
}
