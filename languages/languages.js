

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
    const language_information = document.getElementById('language_information');
    const current_page = document.getElementsByTagName("li");

    switch(language){
        
        case 'python':

            titleElement.innerHTML = 'Python';
            banner.src = '/images/logos/typing.jpeg'
            language_information.innerText = 'I have been able to work in python in different projects. I have knowldege in the following topics: Classes, Functions, Data Structures';
            current_page[1].id = "current-page"
            

            break;

        case 'c':
            titleElement.innerHTML = 'C++';
            banner.src = '/images/logos/typing.jpeg'
            language_information.innerText = 'I have developed several projects with C++ some games that helped to understand Software Objected-Oriendted language';
            current_page[2].id = "current-page"
            break;

        case 'web':
            titleElement.innerHTML = 'Web Development';
            banner.src = '/images/logos/typing.jpeg'
            language_information.innerText = 'I have experience building functional websites by using API and retrieve data from different sources and filtered too. I create understanding code that it can be reusable efficiently.';
            current_page[3].id = "current-page"
            break;

        case 'swift':
            titleElement.innerHTML  = 'Swift';
            banner.src = '/images/logos/typing.jpeg'
            language_information.innerText = 'I have been learning Swift Language in my own. I was really excited about it so I have been taking courses online outside of collage. I created some projects base in the courses and I am excited to learn more about Swift';
            current_page[4].id = "current-page"
            break;
        case 'others':
            titleElement.innerHTML = 'Others';
            banner.src = '/images/logos/typing.jpeg'
            break;


        default:

}

}