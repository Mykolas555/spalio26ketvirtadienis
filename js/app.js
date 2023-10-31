//primityvus tipai
let firstname = 'Jonas'; // string
let lastname = 'jonaitis'; // string
let itemPrice = 12.56; 
let userAge = 25;
let userOnline = true;

console.log(typeof(firstname));
console.log(typeof(lastname));
console.log(typeof(itemPrice));
console.log(typeof(userAge));
console.log(typeof(userOnline));

//inteligentiski duomenu tipai

//masyvas
let productCart = ['computer', 'phone', 'pencil',];
//objektas
let product = {
    title: "apple mac book pro",
    price: 23366.12,
    location: 'kaunas'
}
//masyve objektas
let products = [
    {
        title: "apple mac book pro",
    price: 23366.12,
    location: 'kaunas'
    },
    {
        title: "apple mac book pro",
    price: 23366.12,
    location: 'kaunas'
    },
    {
        title: "apple mac book pro",
    price: 23366.12,
    location: 'kaunas'
    },
    {
        title: "apple mac book pro",
    price: 23366.12,
    location: 'kaunas'
    }
]

console.log(typeof(firstname));
console.log(typeof(lastname));
console.log(typeof(itemPrice));
console.log(typeof(userAge));
console.log(typeof(userOnline));



console.log("man patinka js "+firstname);
console.log(`vartotojo pavarde yra ${lastname}`)

const userRole = "admin";

console.log(`vartotojo role yra: ${userRole}`)


var firstName = "Mykolas";
console.log(firstName[3])

console.log(firstName.length);

console.log(firstName.indexOf("ol"))

let data = []

if (data){
    console.log('ok')
}else{
    console.log('false')
}


const language = "aa";

switch (language){
    case "lt":
        console.log("sveiki");
        break;
    case "en":
        console.log("hello");
        break;
    default:
        console.log("nesupratau kalbos")
}

let weather = 20;
let userName = weather >19 ? "andrius":"karolis";
console.log(userName)


/*ciklai*/
/*
let items = ['phone', 'pencil', 'box', 'table']

let user = {
    id:1,
    name:"jonas",
    email:"jonux@kazkas.lt",
    role:"admin"
}

/*for (let i=0;i<items.length; i++){
    console.log(items[i])
}
*/

/*for(let item in items){
    console.log(items[item])
}
*/

/*negali eiti per objekta

for(let item of items){
    console.log(item)
}
*/

/*for(let userDate in user){
    console.log(`${userData}:${user[userDate]}`)
}
*/


let students = [
    {
        id:1,
        firstName:"tadas",
        lastname:"tadauskas",
        email:"tadas@tadauskas.lt",
        group:"students",
        marks:[
            {
            subject:'programing',
            mark:4
            },
            {
            subject:'it',
            mark:8
            },
            {
            subject:'math',
            mark:5
            }
        ]
    },
    {
        id:2,
        firstName:"ieva",
        lastname:"tadauske",
        email:"ieva@tadauskas.lt",
        group:"students",
        marks:[
            {
            subject:'programing',
            mark:4
            },
            {
            subject:'it',
            mark:8
            },
            {
            subject:'math',
            mark:5
            }
        ]
    },
    {
        id:3,
        firstName:"ona",
        lastname:"tadauskis",
        email:"ona@tadauskas.lt",
        group:"students",
        marks:[
            {
            subject:'programing',
            mark:4
            },
            {
            subject:'it',
            mark:8
            },
            {
            subject:'math',
            mark:5
            }
        ]
    },
    {
        id:4,
        firstName:"tadas",
        lastname:"tadauskas",
        email:"tadas@tadauskas.lt",
        group:"students",
        marks:[
            {
            subject:'programing',
            mark:4
            },
            {
            subject:'it',
            mark:8
            },
            {
            subject:'math',
            mark:5
            }
        ]
    },
    {
        id:5,
        firstName:"petras",
        lastname:"tadauschis",
        email:"petras@tadauskas.lt",
        group:"students",
        marks:[
            {
            subject:'programing',
            mark:4
            },
            {
            subject:'it',
            mark:8
            },
            {
            subject:'math',
            mark:5
            }
        ]
    }
]

/* isvesti studentus tokiu butu:

studentai:
-----------
petras
tadauschis
petras@tadaushis.lt
grupe: students
------------
(kitas studentas)
*/

/* 
for (let student in students){
    console.log('------------');
    for(let studentData in student){
        if(studentData==='group'){
            console.log(`grupe:${students[studentData])`};
        console.log(student[studentData])
    }
}

*/

for(let student of students){
    console.log('---------------');
    for (let studentData in student){
        if(studentData === 'group'){
            console.log(`grupe:${student[studentData]}`);
        }else{
            if(studentData=='marks'){
                console.log('ivertinimai:');
                for(marks of student[studentData]){
                    console.log(`${marks.subject}:${marks.mark}`)
               }
            }
            console.log(student[studentData]);
        }
    }
}