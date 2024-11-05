let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]
createHTMLElement('table', 'persontable', document.body);
CreateHTMLElementWithParentId('thead', 'personthead', 'persontable');
CreateHTMLElementWithParentId('tbody', 'persontbody', 'persontable');


//előző előtti órai munka..fejléc cella létrehozása automatizálva

const thead = document.getElementById('personthead');
const tr = document.createElement('tr');
thead.appendChild(tr);

CellaLetrehozo("th", "Vezetéknév", tr);
const th_firstname = CellaLetrehozo("th", "Keresztnév", tr);
CellaLetrehozo("th", "Házas-e?", tr);
CellaLetrehozo("th", "Háziállat", tr);

th_firstname.colSpan = 2; // 2-es szélesség

const tablebody = document.getElementById('persontbody');


const form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const lastname = document.getElementById('lastname')
    const firstname = document.getElementById('firstname1')
    const firstname2 = document.getElementById('firstname2')
    const pet = document.getElementById('pet')
    const married = document.getElementById('married')

    const lastnamevalue = lastname.value
    const firstnamevalue = firstname.value
    let firstname2value = firstname2.value
    const marriedvalue = married.checked
    const petvalue = pet.value

    if (firstname2value === "") {
        firstname2value = undefined

    }


    const newperson =
    {
        firstname1: firstnamevalue,
        firstname2: firstname2value,
        lastname: lastnamevalue,
        married: marriedvalue,
        pet: petvalue

    }
    if (validatefields(firstname, lastname, pet))
    array.push(newperson)
    console.log(array)
    tablebody.innerHTML = ""
    rendertable()

    form.reset()
})
rendertable()
function rendertable() {
    for (const person of array) {
        const tr = document.createElement('tr')
        tablebody.appendChild(tr)
        const lastname = document.createElement('td')

        tr.appendChild(lastname)
        lastname.innerHTML = person.lastname

        const firstname = document.createElement('td')
        tr.appendChild(firstname)
        firstname.innerHTML = person.firstname1



        if (person.firstname2 === undefined) {
            firstname.colSpan = 2
        }
        else {
            const firstname2 = document.createElement('td')
            firstname2.innerHTML = person.firstname2
            tr.appendChild(firstname2)

        }

        const married = document.createElement('td')
        tablebody.appendChild(tr)
        tr.appendChild(married)
        married.innerHTML = person.married

        const pet = document.createElement('td')
        tablebody.appendChild(tr)
        tr.appendChild(pet)
        pet.innerHTML = person.pet

        if (person.married === true) {
            married.innerHTML = "igen"
        } else {
            married.innerHTML = "nem"
        }


        tr.addEventListener('click', function (e) {
            console.log('click')

            const ez = tablebody.querySelector('.selected')
            if (ez != undefined) {
                ez.classList.remove('selected')
            }
            e.currentTarget.classList.add('selected')
        })




    }

}

