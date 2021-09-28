const bookDetails = document.getElementById("book-details")
let details = ""

// class constructor.
class Book {

    constructor(title,author,yearPublished) {
       this.title = title
       this.author = author
       this.yearPublished = yearPublished
    }

    details() {
        return `${this.title} is a book published in ${this.yearPublished} by ${this.author}`
    }

}

// book object instance.
const book = new Book("Eat That Frog","Brian Tracy",2011)
details = `<p>${book.details()}</p>`

class Magazine extends Book {

    constructor(title,author,yearPublished,monthPublished) {
        super(title,author,yearPublished)
        this.monthPublished = monthPublished        
    }

    magazineDetails() {
        return `${this.title} is a magazine published in ${this.yearPublished}, ${this.monthPublished} by ${this.author}`
    }

}

// magazine object instance.
const magazine = new Magazine("prototype inheritance in JavaScript", "mosdev ally", 2021, "MAY")
details += `<p>${magazine.magazineDetails()}</p>`
details += `<p>${magazine.details()}</p>`








bookDetails.insertAdjacentHTML("beforeend", details )


