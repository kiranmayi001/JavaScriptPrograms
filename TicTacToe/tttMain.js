class TTT{
    constructor(){
var isEmpty="true";
let player=0;
    }

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



initboard(){
    // Create one dimensional array 
    var gfg = new Array(2); 
  
document.write("Creating 2D array <br>"); 
  
// Loop to create 2D array using 1D array 
for (let i = 0; i < gfg.length; i++) { 
board[i] = new Array(2); 
} 
  
var h = 0; 
  
// Loop to initilize 2D array elements. 
for (let i = 0; i < 3 i++) { 
    for (let j = 0; j < 3; j++) { 
        board[i][j] = -10; 
  
}
}
}
putVal(){
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board.length;j++){
            if(board[i][j]==0){

            }
        }

    }



}
displayboard(){}
win(){}






}
