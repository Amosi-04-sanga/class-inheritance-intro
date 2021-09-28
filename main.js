const wrapper = document.getElementById("wrapper")
let renderOnHtml = ""

class Person {
    constructor(_name,_birthYear) {
      this.name = _name
      this.year = 2021
      this.birthYear = _birthYear
    }

    intro() {
        return `i am ${this.name}, i am ${this.year - this.birthYear} years old`
    }

}

class Programmer extends Person {

    constructor(_name,_birthYear,_myFirstYear) {
       super(_name,_birthYear)
       this.myFirstYear = _myFirstYear
    }

    description() {
        return `i'm ${this.name}, a programmer of ${this.year - this.myFirstYear} years of experiences`
    }

    thisYear() {
        return `this is ${this.year}`
    }

    coding() {
        return `${this.name} is coding`
    }

}

// class instances.
const mosdev = new Person("mosdev",1998)

// array of object instances.
const programmers = [
    new Programmer("jeff",1995,2009),
    new Programmer("ally",1990,2010),
    new Programmer("amos",1997,2019),
    new Programmer("sanga",1997,2018)
]



function coders(arr) {
   
   for( let programmer of arr ) {
       renderOnHtml += `<p>${programmer.coding()} is coding right now.</p>`
   }

}

coders(programmers)







// render on HTML
wrapper.insertAdjacentHTML("beforeend", renderOnHtml )



