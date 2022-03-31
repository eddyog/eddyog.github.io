

function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

const language = getParam('language');

languages(language);

function languages(language){

    const titleElement = document.getElementById('languageTitle');
    const banner = document.getElementById('banner');


    switch(language){
        
        case 'python':

            titleElement.innerHTML = 'Python';
            banner.src = '/images/logos/typing.jpeg'
            

            break;

        case 'c':
            titleElement.innerHTML = 'C++';
            banner.src = '/images/logos/typing.jpeg'
            break;

        case 'web':
            titleElement.innerHTML = 'Web Development';
            banner.src = '/images/logos/typing.jpeg'
            break;

        case 'swift':
            titleElement.innerHTML  = 'Swift';
            banner.src = '/images/logos/typing.jpeg'
            break;
        case 'others':
            titleElement.innerHTML = 'Others';
            banner.src = '/images/logos/typing.jpeg'
            break;


        default:

}

}