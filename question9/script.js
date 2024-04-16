const searchinputElm=document.getElementById(`searchInput`);
const paragraphElm=document.getElementById(`postsContainer`);
const URL="https://jsonplaceholder.typicode.com/posts";


async function fetchposts(){
    const data = await fetch(URL);
    const jsonData = await data.json()
    console.log(jsonData);
    for(let i=0; i < jsonData.length; i++){
        const bodyElem=document.createElement("p");
        bodyElem.innerText =jsonData[i].body;
        const listElem =document.createElemnet("li");
        listElem.innerText =jsonData[i].title;
        listElem.appendChild(bodyElem);
        paragraphElm.appendChild(listElem);
    }
}
fetchposts()                