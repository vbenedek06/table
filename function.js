/**
 * Létrehoz egy táblázat cellát a megadott típussal, tartalommal és szülő elemmel.
 * @param {'td'|'th'} tipus 
 * @param {string} tartalom 
 * @param {HTMLTableRowElement} szuloElem 
 * @returns {HTMLElement} A létrehozott cella elem
 */
function CellaLetrehozo(tipus, tartalom, szuloElem) {
    const ujCella = document.createElement(tipus); // cellát hoz létre egy új típussal
    ujCella.innerHTML = tartalom; // a cella tartalmát beállítja
    szuloElem.appendChild(ujCella); // hozzáadja a cellát a szülő elemhez
    return ujCella;
}

/**
 * 
 * @param {'th'|'td'} element 
 * @param {string} inner 
 * @param {HTMLTableCellElementCell} parent 
 */
function CreateTablecell(element, inner, parent) {
    const elem = document.createElement(element)
    parent.appendChild(elem)
    elem.innerHTML = inner
    return elem
    //változtatás

}

function createHTMLElement(tag,id,parent){
    const htmlelement = document.createElement(tag)
    htmlelement.id = id
    parent.appendChild(htmlelement)
}

function CreateHTMLElementWithParentId(tag,id,parentid){
    const element = document.getElementById(parentid)
    if (element != undefined)
    {
        createHTMLElement(tag,id,element)
    }
}

/**
 * 
 * @param {*} lastname 
 * @param {*} firstname 
 * @param {*} pet 
 * @returns 
 */
function validatefields(lastname, firstname, pet) {

    let valtozo = form.querySelectorAll('.error')
    for (const error of valtozo) {
        error.innerHTML = ""
    }
    innerHTML = ""
    let result = true
    if (lastname.value === "") {
        const par = lastname.parentElement
        const error = par.querySelector(".error")
        error.innerHTML = "kötelező vezetéknév"
        result = false


    }
    if (firstname.value === "") {
        const par = firstname.parentElement
        const error = par.querySelector(".error")
        error.innerHTML = "kötelező keresztnév"
        result = false


    }
    if (pet.value === "") {
        const par = pet.parentElement
        const error = par.querySelector(".error")
        error.innerHTML = "kötelező háziállat"
        result = false
        


    }
    return result

}
