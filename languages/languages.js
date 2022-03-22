

function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

const language = getParam('language');

languages(language);

function languages(language){

    const titleElement = document.getElementById('languageTitle');


    switch(language){
        
        case 'python':

            titleElement.innerHTML = 'Python';

            break;

        case 'c++':
            titleElement.innerHTML = 'C++';
            break;

        case 'web':
            titleElement.innerHTML = 'Web Development';
            break;

        case 'swift':
            titleElement.innerHTML  = 'Swift';
            break;
        case 'others':
            titleElement.innerHTML = 'Others';
            break;


        default:

}

}