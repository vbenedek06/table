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