// function Mom(firstName,lastName,eyeColor,hairColor) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.eyeColor = eyeColor,
//     this.hairColor = hairColor;
//     return Mom;

// };
// const  mom = new Mom("Alice","Wong","brown","black");

// const daughter = new Mom(firstName,hairColor)
// daughter.firstName = "Ilean"
// daughter.hairColor = "Brown"
// console.log(daughter)

class Person{
    constructor(name){
        this.name = name;
        this.friends = [];
    }
    addFriend (friend) { 
        this.friends.push(friend); 
    };    
    createGreeting(other){
        return (`Yo ${other.name}! From ${this.name}.`)
    }
    greet(other){
        console.log(this.createGreeting(other));
    }
    lazyGreeting(other){
        setTimeout(() => {
        this.greet(other)
    },2000);
    }
    createGreetingForFriends(){
        const friendList = this.friends.map((friend) => this.createGreeting(friend));
        console.log(friendList);
    }


};
const Jane = new Person('Jane')
const Mary = new Person('Mary')
const Johnathon = new Person('Johnathon')
Jane.lazyGreeting(Mary)
Jane.addFriend(Mary)
Jane.addFriend(Johnathon)
Jane.createGreetingForFriends();