class UI {
    // help function to add DOM element
    // optional elements should have defined empty values
    // several atributes need to be object, so each object can be named {}, not just array [] that has only indexes
    addUIElement(name, classname = '', textcontent = '', atributes = {}){
        // create element
        const element = document.createElement(name);
        // add css style class to element
        if(classname !== ''){
            element.className = classname
        }
        // add text content to element
        element.appendChild(document.createTextNode(textcontent))
        // add atributes to element
        if(Object.keys(atributes).length > 0){
            for(let key in atributes){
                element.setAttribute(key, atributes[key])
            }
        }
        return element
    }
    addBook(book){
        // create <tr> element
        const tr = this.addUIElement('tr')
        // td for title, author and isbn
        for(let name in book){
            // create <td> element and add text
            let td = this.addUIElement('td', '', book[name])
            // add td to tr
            tr.appendChild(td)
        }
        // X link
        // create <td> element
        let td = this.addUIElement('td')
        // create <a> element
        const link = this.addUIElement('a', '', 'X', {'href':'#'})
        // add link to td
        td.appendChild(link)
        // add td to tr
        tr.appendChild(td)
        // add tr to tbody
        const booksList = document.querySelector('#books-list')
        booksList.appendChild(tr)
    }

    delBook(event){
        event.target.parentElement.parentElement.remove();
    }
}