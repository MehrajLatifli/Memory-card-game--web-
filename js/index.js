var imagecount =0;
let mylist=[];
let mylist2=[];

function addarray(mylist)
{


    for (let index = 0; index < 4; index++) {
        
        var sub=[];
        
        for (let i = 0; i < 4; i++) {
            
            imagecount++;
            
            sub.push("images/"+imagecount+".png");
            
        }

        mylist.push(sub);

         console.log( mylist);
    
    }

   
}


function addarray2(mylist2, count)
{

        mylist2.push(count);

        

         console.log( mylist2);
    
    
}






var content="";
var rand = [];

function getNonRepeatingRndIntegers (min, max) {
    for (let i = 0; i <= (max - min); i++) {
        rand[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (let i = 0; i <= (max - min); i++) {
        for (let j = 0; j <= (max - min); j++) {
            if (i != j) {
                if (rand[i] === rand[j]) {
                    rand[j] = max + 1;
                }
            }
        }
    }

    for (let i = 0; i <= (max - min); i++) {
        if (rand[i] === (max + 1)) {
            rand[i]--;
    
            for (let k = 0; k <= (max - min); k++) {
                if (k != i) {
                    if (rand[i] === rand[k]) {
                        rand[i]--;
                        k = -1;
                    }
                }
            }
        }
    }
  
}


function showcards(){
    

        try {
            
      
            var a=   document.querySelectorAll("#flip-card-back");
      
            for (let index = 0; index < a.length; index++) {
            
                a[index].style.transform="rotateY(180deg)";
            }
    
             console.log(a);
                
        } 
        catch (error) {
            
            console.error(error);
        }
    
    
}
    
    
    
    

var getimage;

let index;


function createflipcard(){
    

    

    // var random = Math.floor(Math.random() * (1 - 4) + 4);

    getNonRepeatingRndIntegers(0,3);
 
    console.log(rand[0], rand[1], rand[2], rand[3]);


    
    try {
    
        //create game area
        
        var divflip=document.getElementById("flip");
        for ( index = 0; index <16; index++) {
            


            content+="<div id='flip-card"+ index  + "' onclick='playgame("+index+")'  title='flip-card"+index+"'>";
            

            for (let j = 0; j < 1; j++) {
                
                content+="<div id='flip-card-inner'>";
                
                for (let k = 0; k < 1; k++) {
                    
                    content+="<div id='flip-card-front'>";
                    content+="<img id='image1' src='images/cover.png' style='width:150px;height:150px'/>";
                    content+="</div>";
                    
                    
                    content+="<div id='flip-card-back'>";
                    
                    if(index==0){
                    content+="<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[0])]  +"\' style='width:150px;height:150px'/>";
                    content+="</div>";
                    }

                    if(index==1){
                        content+="<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[1])]  +"\' style='width:150px;height:150px'/>";
                        content+="</div>";
                    }
                    
                          
                    if(index==2){
                    content+="<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[2])]  +"\' style='width:150px;height:150px'/>";
                    content+="</div>";
                    }
                    
                    if(index==3){
                        content+="<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[3])]  +"\' style='width:150px;height:150px'/>";
                        content+="</div>";
                    }
                    
                    if(index==4){
                        content+="<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[0])]  +"\' style='width:150px;height:150px'/>";
                        content+="</div>";
                    }
                        
                    if(index==5){
                        content+="<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[1])]  +"\' style='width:150px;height:150px'/>";
                        content+="</div>";
                    }

                    if(index==6){
                        content+="<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[2])]  +"\' style='width:150px;height:150px'/>";
                        content+="</div>";
                    }
    
                    if(index==7){
                            content+="<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[3])]  +"\' style='width:150px;height:150px'/>";
                            content+="</div>";
                    }
                        
                              
                    if(index==8){
                        content+="<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[0])]  +"\' style='width:150px;height:150px'/>";
                        content+="</div>";
                    }
                        
                    if(index==9){
                        content+="<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[1])]  +"\' style='width:150px;height:150px'/>";
                        content+="</div>";
                    }
                        
                    if(index==10){
                        content+="<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[2])]  +"\' style='width:150px;height:150px'/>";
                        content+="</div>";
                    }
                            
                    if(index==11){
                        content+="<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[3])]  +"\' style='width:150px;height:150px'/>";
                        content+="</div>";
                    }

                    
                    if(index==12){
                        content+="<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[0])]  +"\' style='width:150px;height:150px'/>";
                        content+="</div>";
                    }
                        
                    if(index==13){
                        content+="<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[1])]  +"\' style='width:150px;height:150px'/>";
                        content+="</div>";
                    }
                        
                    if(index==14){
                        content+="<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[2])]  +"\' style='width:150px;height:150px'/>";
                        content+="</div>";
                    }
                            
                    if(index==15){
                        content+="<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[3])]  +"\' style='width:150px;height:150px'/>";
                        content+="</div>";
                    }
    
                  

                    // document.getElementById("flip-card-front").appendChild(image);
                    
                    
                    console.log( (mylist[parseInt(1)][parseInt(2)]));
                    
                }
                content+="</div>";
                
            }
            
            content+="</div>";
            
            
            
            divflip.innerHTML=content;
            

            
            console.log(document.getElementById("flip-card"+index).innerHTML.match("flip-card-back"));
            
        }
   
        
        // delete element
        
        // var elem = document.getElementById("flip-card0");
            // elem.remove();
        
    } catch (error) {
        
        console.error(error);
    }
}







       

var j;
var a;

var count =8;
function playgame(i){
    
    try {




        console.log(i);
        



        var item =i;
        addarray2(mylist2, item);

        
        
        mylist2.find(e=>e==10);


        var len = mylist2.length;

      


     
        var current = mylist2[(mylist2.length-1)];
        var previous = mylist2[(mylist2.length-2)];

        // alert(current+" "+previous);

      


        a=   document.querySelectorAll("div #flip-card-back, img #image2");

   
    
        // alert(i+" "+mylist2.find(e=>e==i));


        console.log( a[current].innerHTML + " \n "+a[previous].innerHTML +" \n\n " + a[current].innerHTML.includes(a[previous].innerHTML));



  


        if(a[current].innerHTML.includes(a[previous].innerHTML)){

            a[current].style.transform=null;
            a[previous].style.transform=null;
        }
          

         

            

        
    
        
     
     
   


        
  
  
        


  
      
            
    } 
    catch (error) {
        
        console.error(error);
    }
}




window.onload=function main(){

    setTimeout(() => {
        
        addarray(mylist);
        
        createflipcard();
        

        alert("If each last option does not match the previous one, then the last option is considered the first choice. Do not use doble click. \n This project work host (ex: localhost)");

        setTimeout(() => {
            
            showcards();

        }, 4000);
        
        
    }, 2000);
    



}