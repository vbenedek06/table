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