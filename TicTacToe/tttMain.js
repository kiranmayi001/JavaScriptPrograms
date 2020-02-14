class TTT{

hostplay(){
    this.initboard();
    while(this.isEmpty){
    console.log("Player turn");
        this.putVal();
        this.displayboard();
        if(this.win()){
            console.log("Yay Player Won");
        }
        this.player=1;
        console.log("Player turn");
        this.putVal();
        this.displayboard();
        if(this.win()){
            console.log("Yay Player Won");
        }
        this.player=0;
       }
    


}


initboard(){}
putVal(){}
displayboard(){}
win(){}






}