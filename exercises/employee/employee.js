


function Employee(name, job, salary, status = 'fulltime'){
  this.name = name
  this.job = job 

  this.salary = salary 
  this.status = status
}

employee = []



Employee.prototype.statusUpdate = function() {
  console.log(this.status = "part time")
}

const bob = new Employee('bob', 'grunt', Math.random() * 200000, 'contract')

const sindy = new Employee('sindy', 'boss', Math.floor(Math.random() * 200000), 'contract')

const febe = new Employee('febe', 'hr',  Math.floor(Math.random() * 200000), )

const hired = [sindy, bob, febe]

bob.statusUpdate()

employee.push(...hired)
console.log(console.log("emmmmmmployee:", employee))


