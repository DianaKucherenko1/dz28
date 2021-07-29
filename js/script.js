const obj = {
    name : 'Dasha',
    age : 10 ,
    logInfo: function(phone , salary){
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Phone is ${phone}`)
        console.log(`Salary is ${salary}`)
    }
}

const secObg = {
    name : 'Ann',
    age : 20,
}

const newInfo = obj.logInfo.bind(secObg, '0956774485' , 800)
newInfo()