// ======== Объекты | Теория ====================

class Person {
  constructor(myName, myAge) {
    this.name = myName
    this.age = myAge
    this.job = 'Frontend Deveper'
  }
  sayHello () {
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет`)
  }
  print() {
    console.log(JSON.stringify(this))
  }
}
const person1 = new Person('Ildar', 26)

person1.sayHello()
person1.print()
console.log(person1);

const printObject = (object ={}) => {
  Object.keys(object).forEach((key) => {
    console.log('value', object[key])

  })
}
printObject(person1);