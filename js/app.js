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