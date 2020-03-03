const readLine = require("readline-sync");
const fs = require("fs");


var person = function () { //instances without creating constructor
    this.name = name;
    this.id = id;
    this.address = address;
    this.zip = zip;
    this.state = state;
    this.city = city;
    this.pnum = pnum;
    if (Object.getPrototypeOf(this).hasOwnProperty("abstract")) {

        throw new Error("Can't instantiate abstract class!");
    }
};
person.prototype.abstract = true;


    var AddressBook = function() {
    let bookdata = fs.readFileSync('aboop.json');
    let jsonBookData = JSON.parse(bookdata);
    this.person = [];
    if (Array.isArray(jsonBookData.person)) {
        this.entries = { person: jsonBookData.person };
    } else {
        this.entries = { person: this.person };
    }
};



AddressBook.prototype.addEntry = function () {
    person.call(this); //pulling the constructors of person ()function constructor
    const id = readLine.questionInt('Enter the id : ');
    const fname = readLine.question('Enter FirstName : ');
    const lname = readLine.question('Enter LastName : ');
    const address = readLine.question(' Enter Address : ');
    const city = readLine.question(' Enter City : ');
    const state = readLine.question(' Enter State : ');
    const zip = readLine.questionInt(' Enter Pincode : ');
    const pnum = readLine.questionInt(' Enter Phone Number : ');
    this.name = name;
    this.fname = fname;
    this.lname = lname;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.pnum = pnum;
    var p = JSON.parse(
        '{ "name":"' +
        this.name +
        '","fname" :' +
        this.fname +
        ',"lname" :' +
        this.lname +
        ',"address" :' +
        this.address +

        '","city" :' +
        this.city +
        ',"lname" :' +
        this.state +
        ',"address" :' +
        this.state +

        '","zip" :' +
        this.zip +
        ',"number" :' +
        this.pnum +


        "} "
    );
    this.entries.person.push(JSON.parse(JSON.stringify(p))); // For remove object name during push data into array 
    // other wise it will consider object name as a key of that array.
    fs.writeFileSync('aboop.json', JSON.stringify(this.entries));
};

AddressBook.prototype.deleteEntry=function(){
 
    let deletID = readLine.questionInt('Enter The ID for delete : ');
    let isAvailable = true;
    for(let i=0;i<this.entries.person.length;i++){
        if(this.entries.person[i].id == deletID){
            this.entries.person.splice(i,1);
        }else{
            isAvailable = false;
        }
    }
    let deleteMessage = isAvailable?'Record Deleted Successfully.':'Record Not Founded.';
    console.log(deleteMessage);
    fs.writeFileSync('aboop.json',JSON.stringify(this.entries));
};

AddressBook.prototype.editEntry=function (){
    person.call(this);
    let editID = readLine.questionInt('Enter The Id for EDIT : ');
    let isAvailable = false;
    for(let i=0;i<this.entries.person.length;i++){
        if(this.entries.person[i].id === editID){
            let editAddress = readLine.question('Enter Address For Edit : ');
            let editCity = readLine.question('Enter City For Edit : ');
            let editPincode = readLine.questionInt('Enter Pincode For Edit : ');
            let editPhone = readLine.questionInt('Enter Phone Number For Edit : ');
          
            this.entries.person[i].address = editAddress;
            this.entries.person[i].city =  editCity ;
            this.entries.person[i].zip = editPincode;
            this.entries.person[i].pnumber = editPhone;
            isAvailable = true;
        }
    }
    let editMessage = isAvailable?'Record Edited Successfully.':'Record Not Founded for given id.';
    console.log(editMessage);
    fs.writeFileSync('aboop.json',JSON.stringify(this.entries));
};


AddressBook.prototype.printBookData=function(){
    console.log(this.entries.person);
};
//USING ENCAPSULATION FOR A METHOD printBookData
let AB=new AddressBook();
var printBook=AB.printBookData();
// getFullbook
AddressBook.prototype.encap={
getentry: function(){
return entry;
},
setentry:function(entry){
    this.entry=entry;
}
};
var e=new encap();
e.setentry=printBook;
e.getentry;