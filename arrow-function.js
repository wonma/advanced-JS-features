const people = [{
    name: 'Woshmi',
    age: 31,
    job: 'unemployed'
}, {
    name: 'Joshua',
    age: 33,
    job: 'Server expert'
}, {
    name: 'Thomas',
    age: 27,
    job: 'Bank manager'
}]


const over30 = people.filter(function(person){
    return person.age > 30
})
console.log(over30)
// 쉽게만들기1 (shorthand 없이 arrow만 사용)
const over30 = people.filter((person) => {
    return person.age > 30
})
// 쉽게만들기2 (shorthand로 arrow사용) - return필요없고, 한줄로.
const over30 = people.filter((person) => person.age > 30)

// Mission
// Find the person with age 27
// Print that person's name
const under30 = people.filter((person) => person.age < 30)
console.log(under30)

// 평가 : filter말고 find를 사용했으면 더 명확했음
// 왜냐면, filter는 returned value의 type이 'array'이거든
// find는 returned value type이 'object'임

const age27 = people.find((person) => person.age === 27)
console.log(age27.name)

// (person) => person.age < 30 이 부분을 anonymous function이라고함

// 원래방법으로 anonymouse function만드는 방법?
// const 펑션변수이름 = function(){ } 이렇게 만들었음