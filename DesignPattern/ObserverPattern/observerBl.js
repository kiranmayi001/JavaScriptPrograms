class Click{
    constructor(sub){
        this.sub=sub;
        this.handlers=[];
    }
subscribersAdd(sub){
    this.handlers.push(sub);
    console.log(this.handlers);

    }
    subscriberDelete(sub){
        
        var index=0;
        for(let x in this.handlers){
            if(this.handlers[x]==sub){
              
               index=x;
               console.log(index);
               this.handlers.splice(index, 1);
            }
        }
        //console.log("deleted "+this.handlers.slice(index, 1));
        console.log(this.handlers);
    }
    printNotified(){
        for(let x in this.handlers){
            console.log(this.handlers[x]+" "+"notification sent successfully")
        }
    }
}
module.exports={
    Click
}