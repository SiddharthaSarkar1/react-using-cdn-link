const person = {
    name : "Siddhartha",
    print : function() {
        console.log(this);
    },
}

const person2 = {
    name : "Simran",
}

person.print();
person.print.call();
person.print.call(this);
person.print.call(person2);
person.print.call(person);
