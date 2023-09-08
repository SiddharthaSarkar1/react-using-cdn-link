const obj = {
    name : "Siddhartha",
    print : function(){
        console.log(this);
    },
    print2 : () => {
        console.log(this);
    },
}

const obj2 = {
    name : "Simran"
}

obj.print();
obj.print2();

obj.print.call();
obj.print.call();