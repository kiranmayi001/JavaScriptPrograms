class Person{
constructor(){
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.pnumber = pnumber;
}
}
class AddressBook{
constructor(){
    let bookdata = fs.readFileSync('AddressBook.json');
        let jsonBookData = JSON.parse(bookdata);
Object.entries(jsonBookData.person);                      
}
addEntry(){
    const id = readLine.questionInt('Enter the id : ');
    const fname = readLine.question('Enter FirstName : ');
    const lname = readLine.question('Enter LastName : ');
    const address = readLine.question(' Enter Address : ');
    const city = readLine.question(' Enter City : ');
    const state = readLine.question(' Enter State : ');
    const zip = readLine.questionInt(' Enter Pincode : ');
    const pnumber = readLine.questionInt(' Enter Phone Number : ');
    let p = new person(id,fname,lname,address,city,state,zip,pnumber);
}

