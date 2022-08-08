

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
            language_information.innerText = 'I have been able to work in python in different projects. I have knowldege in the following topics: Classes, Functions and Data Structures';
            current_page[1].id = "current-page"
            

            break;

        case 'c':
            titleElement.innerHTML = 'C++';
            banner.src = '/images/logos/typing.jpeg'
            language_information.innerText = 'I have developed several projects with C++, included some games that helped me to understand Software Object-Oriented language.';
            current_page[2].id = "current-page"
            break;

        case 'web':
            titleElement.innerHTML = 'Web Development';
            banner.src = '/images/logos/typing.jpeg'
            language_information.innerText = 'I have experience building functional websites by using API to retrieve filtered data from different sources. I created code that can be efficiently reuse and edited';
            current_page[3].id = "current-page"
            break;

        case 'swift':
            titleElement.innerHTML  = 'Swift';
            banner.src = '/images/logos/typing.jpeg'
            language_information.innerText = 'I have been learning Swift Language on my own. I was really excited about it so I have been taking courses online outside of college. I created some projects based on the courses and I am excited to learn more about Swift.';
            current_page[4].id = "current-page"
            break;
        case 'others':
            titleElement.innerHTML = 'Others';
            banner.src = '/images/logos/typing.jpeg'
            break;


        default:

}

}