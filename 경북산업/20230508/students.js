class Student{
  constructor(name,gender,beonho)
  {
    this.name = name
    this.gender = gender
    this.beonho = beonho
  }
}
Student.prototype.toString = function(){
  return `${this.name}학생은 ${this.gender}학생이며, ${this.beonho}`
}
let student = []
