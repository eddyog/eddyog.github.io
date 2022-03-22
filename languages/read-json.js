


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

    var languages = jsonObj['Python']
    var i = 0;

    var name = languages.name;
    document.getElementById("projectName").innerHTML = name;

     for (i = 0; i < languages.length ; i ++) {
        
    //     var image = "<src='" + languages[i].imageSrc + "' alt='" + languages[i].imageAlt + "'>";
    //     document.getElementById("project-image").innerHTML = image;

    // const cards = document.getElementById("card");
    // let listCard = document.createElement("div");
    // listCard.textContent = "";
    // cards.appendChild(listCard);

    const nameList = document.getElementById("projectName");
    let listNames = document.createElement('p');
    listNames.textContent = languages[i].name;
    nameList.appendChild(listNames);

    const descriptionList = document.getElementById("description");
    let listDescription = document.createElement('p');
    listDescription.textContent = languages[i].description;
    descriptionList.appendChild(listDescription);

    }
}
