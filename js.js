let parentDiv =document.getElementById('parent');
const HEIGHT =10, WIDTH=15;
let intervalId;
let connectFourGrid = [];

for (let i = 0 ; i < HEIGHT+2 ; i++)
{
    let row = [];
    for(let j = 0 ; j < WIDTH+2 ; j++)
        row.push(true);

    connectFourGrid.push(row)
}//gird 

renderGrid();



function onCellClick(row,col){
if(connectFourGrid[row][col]){
    connectFourGrid[row][col]=false;

}
else{
connectFourGrid[row][col]=true;
}
itreation();
}





function itreation(){
    for (let i=1;i<=HEIGHT;i++){
        for (let j =1; j<=WIDTH;j++)
{
        let div=document.getElementById(i.toString()+j.toString());
        div.classList.remove('black');
        div.classList.remove('rewind');
        if (connectFourGrid[i][j]==true){
            div.classList.add("rewind");
        }
        else if(connectFourGrid[i][j]==false){
            div.classList.add("black");
        }
      
    
}
        }

}




function renderGrid(){
    parentDiv.innerHTML="";
for (let i=1;i<=HEIGHT;i++){
let rowdiv=document.createElement('div');
rowdiv.classList.add("rowClass");
for (let j =1; j<=WIDTH;j++)
{
    let newdiv= document.createElement('div');
    newdiv.id=i.toString()+j.toString();//id to divs
newdiv.classList.add("cellClass");
newdiv.classList.add("rewind");

  newdiv.addEventListener('click',function() {onCellClick(i,j)});

    rowdiv.appendChild(newdiv);
}

parentDiv.appendChild(rowdiv)
}
}





function play(){
 
    let newgrid=[];
    for (let i = 0 ; i < HEIGHT+2 ; i++)
    {
        let row = [];
        for(let j = 0 ; j < WIDTH+2 ; j++)
            row.push(true);
    
        newgrid.push(row)
    }//gird 
    
for (let i=1;i<=HEIGHT;i++){
    for(let j=1;j<=WIDTH;j++){
        let counter=0;

            if(connectFourGrid[i][j-1]==false){
                counter++;//prev cell
            }
            if (connectFourGrid[i][j+1]==false){
                counter++;//next cell
            }
             if (connectFourGrid[i+1][j]==false){
                counter++;//down cell
            }
             if (connectFourGrid[i-1][j]==false){
                counter++;//upper cell
            }
             if (connectFourGrid[i-1][j-1]==false){
                counter++;//up left cell
            }
             if (connectFourGrid[i-1][j+1]==false){
                counter++;//up right cell
            }
             if (connectFourGrid[i+1][j-1]==false){
                counter++;//down left cell
            }
             if (connectFourGrid[i+1][j+1]==false){
                counter++;//down right cell;
            }
            console.log(counter);

        if(counter==0||counter==1){
    newgrid[i][j]=true;
        }
    
      else if((counter==2||counter==3)&&connectFourGrid[i][j]==false){

        newgrid[i][j]=false;

    }
     
      else if(counter>3){

        newgrid[i][j]=true;
    }
    else if(counter==3){
        newgrid[i][j]=false;
    }
    else{
        newgrid[i][j]=connectFourGrid[i][j];
    }

}

}
connectFourGrid=newgrid;
itreation();
}

function start (){
intervalId= setInterval(play,250)
}
function stop(){
clearInterval(intervalId);
}
function restart(){
    for(let i=0;i<HEIGHT;i++){
        for(let j=0;j<WIDTH;j++){
            connectFourGrid[i][j]=true;
        }
    }
    renderGrid();
}