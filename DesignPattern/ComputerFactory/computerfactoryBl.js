
class Computer{
constructor(memory,ram,type){
    this.memory=memory;
    this.ram=ram;
    this.type=type;
}
factory(memory,ram,type){
   try{
    if(type=="pc"){
        let pc=new Computer(memory,ram)
        return pc;
    }
    if(type=="laptop"){
        let laptop=new Computer(memory,ram)
        return laptop;
    }
    if(type=="server"){
        let server=new Computer(memory,ram)
        return server;
    }
}
catch(err){
    throw err;
}

}
}
module.exports={
    Computer
}