const affichage = document.querySelector('.affichage');
const btns = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');
const infoTxt = document.querySelector('.info-txt')
let dejaFait = false;


const today =  new Date();
const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

let day = ('0' + nextWeek).slice(9,11);
let month = ('0' + (today.getMonth() + 1)).slice(-2);
let year = today.getFullYear();
document.querySelector('input[type=date]').value = `${year}-${month}-${day}`;

btns.forEach(btn => {
    btn.addEventListener('click', btnAction);
})

function btnAction(e){
    let nvObj = {};

    inputs.forEach(input => {
        let attrName = input.getAttribute('name');
        let attrValeur = attrName !== "cookieExpire" ? input.value : input.valueAsDate;
        nvObj{attrName} = attrValeur;
    })

    let description = e.target.getAttribute('data-cookie');

    if(description === "creer"){
        createCookie(nvObj.cookieName, nvObj.cookieValue, nvObj.cookieExpire);
    } else if(description === "toutAfficher"){
        listCookies();
    }
}

function createCookie(name, value, exp){

    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${exp.toUTCString()}`;
    let info = document.createElement('li');
    info.innerText = `Your cookie ${name} has been baked !`;
    affichage.appendChild(info);
    setTimeout(() => {
        info.remove();
    }, 2000)
}
