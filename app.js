const lol=document.querySelector('#but');
const lol1=document.querySelector('#but1')
const lol2=document.querySelector('#but2')
const lol3=document.querySelector('#but3')
const lol4=document.querySelector('#but4')
const lol5=document.querySelector('#but5')
const lol6=document.querySelector('#but6')
const lol7=document.querySelector('#but7')
const lol8=document.querySelector('#but8')

const tex=document.querySelector('#tex')
const tex1=document.querySelector('#tex1')
const tex2=document.querySelector('#tex2')
const tex3=document.querySelector('#tex3')
const tex4=document.querySelector('#tex4')
const tex5=document.querySelector('#tex5')
const tex6=document.querySelector('#tex6')
const tex7=document.querySelector('#tex7')
const tex8=document.querySelector('#tex8')
const res=document.querySelector('#res')
const turn=document.querySelector('#turn')
var val=document.querySelector('#val')
var rok=parseInt(val.textContent)
var woi=val.textContent
lol.addEventListener('click',change);
function change(){
    if(woi==1 || woi==3 || woi==5 || woi==7 || woi==9){
        tex.textContent="X"
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        turn.textContent="Turn: P2"
        var a;
        init();
        function init(){
            document.getElementById('tex').style.color='black';
        }
        
        console.log(a)
    }
    else{
        tex.textContent="O"
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        turn.textContent="Turn: P1"
        init();
        function init(){
            document.getElementById('tex').style.color='white';
            }
    }
    result();
    al();
}
function result(){
    if((tex.textContent==tex1.textContent) && ( tex1.textContent==tex2.textContent) ){
       if(tex.textContent=="X" && tex1.textContent=="X" && tex2.textContent=="X"){
           res.textContent="Player 1"
           turn.textContent="Game Over!!"
           init();
           function init(){
                document.getElementById('res').style.color='red';
            }
           setTimeout(function(){
            window.alert("Congratulatins Player 1 won the Match!!")
           window.location.reload();
           },1000)
           
           
       }
       else if( tex.textContent=="O" && tex1.textContent=="O" && tex2.textContent=="O"){
           res.textContent="Player 2"
           turn.textContent="Game Over!!"
           init();
           function init(){
                document.getElementById('res').style.color='red';
            }
           setTimeout(function(){
            window.alert("Congratulatins Player 2 won the Match!!")
            window.location.reload();
           },1000)
       } 
    }
    else if(tex3.textContent==tex4.textContent && tex4.textContent==tex5.textContent){
        if(tex3.textContent=="X" && tex4.textContent=="X" && tex5.textContent=="X"){
            res.textContent="Player 1"
            turn.textContent="Game Over!!"
            init();
            function init(){
                 document.getElementById('res').style.color='red';
             }
            setTimeout(function(){
                window.alert("Congratulatins Player 1 won the Match!!")
                window.location.reload();
               },1000)
        }
        else if( tex3.textContent=="O" && tex4.textContent=="O" && tex5.textContent=="O"){
            res.textContent="Player 2"
            turn.textContent="Game Over!!"
            init();
            function init(){
                 document.getElementById('res').style.color='red';
             }
            setTimeout(function(){
                window.alert("Congratulatins Player 2 won the Match!!")
                window.location.reload();
               },1000)
        } 
    }
    else if(tex6.textContent==tex7.textContent && tex7.textContent==tex8.textContent){
        if(tex6.textContent=="X" && tex7.textContent=="X" && tex8.textContent=="X"){
            res.textContent="Player 1"
            turn.textContent="Game Over!!"
            init();
            function init(){
                 document.getElementById('res').style.color='red';
             }
            setTimeout(function(){
                window.alert("Congratulatins Player 1 won the Match!!")
                window.location.reload();
               },1000)
        }
        else if( tex6.textContent=="O" && tex7.textContent=="O" && tex8.textContent=="O"){
            res.textContent="Player 2"
            turn.textContent="Game Over!!"
            init();
            function init(){
                 document.getElementById('res').style.color='red';
             }
            setTimeout(function(){
                window.alert("Congratulatins Player 2 won the Match!!")
                window.location.reload();
               },1000)
        } 
    }
    else if(tex.textContent==tex3.textContent && tex3.textContent==tex6.textContent){
        if(tex.textContent=="X" && tex3.textContent=="X" && tex6.textContent=="X"){
            res.textContent="Player 1"
            turn.textContent="Game Over!!"
            init();
            function init(){
                 document.getElementById('res').style.color='red';
             }
            setTimeout(function(){
                window.alert("Congratulatins Player 1 won the Match!!")
                window.location.reload();
               },1000)
        }
       else if( tex.textContent=="O" && tex3.textContent=="O" && tex6.textContent=="O"){
            res.textContent="Player 2"
            turn.textContent="Game Over!!"
            init();
            function init(){
                 document.getElementById('res').style.color='red';
             }
            setTimeout(function(){
                window.alert("Congratulatins Player 2 won the Match!!")
                window.location.reload();
               },1000)
        } 
    }
    else if(tex1.textContent==tex4.textContent && tex4.textContent==tex7.textContent){
        if(tex1.textContent=="X" && tex4.textContent=="X" && tex7.textContent=="X"){
            res.textContent="Player 1"
            turn.textContent="Game Over!!"
            init();
            function init(){
                 document.getElementById('res').style.color='red';
             }
            setTimeout(function(){
                window.alert("Congratulatins Player 1 won the Match!!")
                window.location.reload();
               },1000)
        }
        else if( tex1.textContent=="O" && tex4.textContent=="O" && tex7.textContent=="O"){
            res.textContent="Player 2"
            turn.textContent="Game Over!!"
            init();
            function init(){
                 document.getElementById('res').style.color='red';
             }
            setTimeout(function(){
                window.alert("Congratulatins Player 2 won the Match!!")
                window.location.reload();
               },1000)
        } 
     }
    else if(tex2.textContent==tex5.textContent && tex5.textContent==tex8.textContent){
        if(tex2.textContent=="X" && tex5.textContent=="X" && tex8.textContent=="X"){
            res.textContent="Player 1"
            turn.textContent="Game Over!!"
            init();
            function init(){
                 document.getElementById('res').style.color='red';
             }
            setTimeout(function(){
                window.alert("Congratulatins Player 1 won the Match!!")
                window.location.reload();
               },1000)
        }
        else if( tex2.textContent=="O" && tex5.textContent=="O" && tex8.textContent=="O"){
            res.textContent="Player 2"
            turn.textContent="Game Over!!"
            init();
            function init(){
                 document.getElementById('res').style.color='red';
             }
            setTimeout(function(){
                window.alert("Congratulatins Player 2 won the Match!!")
                window.location.reload();
               },1000)
        } 
     }
    else if(tex.textContent==tex4.textContent && tex4.textContent==tex8.textContent){
        if(tex.textContent=="X" && tex4.textContent=="X" && tex8.textContent=="X"){
            res.textContent="Player 1"
            turn.textContent="Game Over!!"
            init();
            function init(){
                 document.getElementById('res').style.color='red';
             }

            setTimeout(function(){
                window.alert("Congratulatins Player 1 won the Match!!")
                window.location.reload();
               },1000)
         }
        else if( tex.textContent=="O" && tex4.textContent=="O" && tex8.textContent=="O"){
            res.textContent="Player 2"
            turn.textContent="Game Over!!"
            init();
            function init(){
                 document.getElementById('res').style.color='red';
             }
            setTimeout(function(){
                window.alert("Congratulatins Player 2 won the Match!!")
                window.location.reload();
               },1000)
        } 
     }
    else if(tex2.textContent==tex4.textContent && tex4.textContent==tex6.textContent){
        if(tex2.textContent=="X" && tex4.textContent=="X" && tex6.textContent=="X"){
            res.textContent="Player 1"
            turn.textContent="Game Over!!"
            init();
            function init(){
                 document.getElementById('res').style.color='red';
             }
            setTimeout(function(){
                window.alert("Congratulatins Player 1 won the Match!!")
                window.location.reload();
               },1000)
        }
        else if( tex2.textContent=="O" && tex4.textContent=="O" && tex6.textContent=="O"){
            res.textContent="Player 2"
            turn.textContent="Game Over!!"
            init();
            function init(){
                 document.getElementById('res').style.color='red';
             }
            setTimeout(function(){
                window.alert("Congratulatins Player 2 won the Match!!")
                window.location.reload();
               },1000)
        } 
       
    }
    else if((val.textContent)==10){
        res.textContent="Tied!!"
        turn.textContent="Game Over!!"
        init();
        function init(){
             document.getElementById('res').style.color='red';
         }
        setTimeout(function(){
            window.alert("None of you won!!")
            window.location.reload();
        },1000)
        
    }
    
}

lol1.addEventListener('click',change1);
function change1(){
    if(woi==1 || woi==3 || woi==5 || woi==7 || woi==9){
        tex1.textContent="X"
        woi=parseInt(val.textContent)+1
        turn.textContent="Turn: P2"
        var b;
        b=2;
        init();
        function init(){
            document.getElementById('tex1').style.color='black';
        }
        
        console.log(b)
        val.textContent=woi
    }
    else{
        
        tex1.textContent="O"
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        turn.textContent="Turn: P1"
        console.log(woi)
        init();
        function init(){
            document.getElementById('tex1').style.color='white';
            }
    }
    result();
}
lol2.addEventListener('click',change2);
function change2(){
    if(woi==1 || woi==3 || woi==5 || woi==7 || woi==9){
        tex2.textContent="X"
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        turn.textContent="Turn: P2"
        init();
        function init(){
        document.getElementById('tex2').style.color='black';
        }
        
        var c; 
        c=2;
        console.log(c)
    }
    else{
        
        tex2.textContent="O"
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        console.log(woi)
        turn.textContent="Turn: P1"
        init();
        function init(){
            document.getElementById('tex2').style.color='white';
            }
    }
    result();
}
lol3.addEventListener('click',change3);
function change3(){
    if(woi==1 || woi==3 || woi==5 || woi==7 || woi==9){
        tex3.textContent="X"
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        turn.textContent="Turn: P2"
        init();
        function init(){
            document.getElementById('tex3').style.color='black';
            }
    }
    else{
        
        tex3.textContent="O"
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        console.log(woi)
        turn.textContent="Turn: P1"
        init();
        function init(){
            document.getElementById('tex3').style.color='white';
            }
    }
    result();
}
lol4.addEventListener('click',change4);
function change4(){
    if(woi==1 || woi==3 || woi==5 || woi==7 || woi==9){
        tex4.textContent="X"
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        turn.textContent="Turn: P2"
        init();
        function init(){
            document.getElementById('tex4').style.color='black';
            }
    }
    else{
        
        tex4.textContent="O"
        
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        console.log(woi)
        turn.textContent="Turn: P1"
        init();
        function init(){
            document.getElementById('tex4').style.color='white';
            }
    }
    result()
}
lol5.addEventListener('click',change5);
function change5(){
    if(woi==1 || woi==3 || woi==5 || woi==7 || woi==9){
        tex5.textContent="X"
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        turn.textContent="Turn: P2"
        init();
        function init(){
            document.getElementById('tex5').style.color='black';
            }
    }
    else{
        
        tex5.textContent="O"
        
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        console.log(woi)
        turn.textContent="Turn: P1"
        init();
        function init(){
            document.getElementById('tex5').style.color='white';
            }
    }
    result();
}

lol6.addEventListener('click',change6);
function change6(){
    if(woi==1 || woi==3 || woi==5 || woi==7 || woi==9){
        tex6.textContent="X"
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        turn.textContent="Turn: P2"
        init();
        function init(){
            document.getElementById('tex6').style.color='black';
            }
    }
    else{
        
        tex6.textContent="O"
        
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        console.log(woi)
        turn.textContent="Turn: P1"
        init();
        function init(){
            document.getElementById('tex6').style.color='white';
            }
    }
    result();
}

lol7.addEventListener('click',change7);
function change7(){
    if(woi==1 || woi==3 || woi==5 || woi==7 || woi==9){
        tex7.textContent="X"
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        turn.textContent="Turn: P2"
        init();
        function init(){
            document.getElementById('tex7').style.color='black';
            }
    }
    else{
        
        tex7.textContent="O"
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        console.log(woi)
        turn.textContent="Turn: P1"
        init();
        function init(){
            document.getElementById('tex7').style.color='white';
            }
    }
    result();
}
lol8.addEventListener('click',change8);
function change8(){
    if(woi==1 || woi==3 || woi==5 || woi==7 || woi==9){
        tex8.textContent="X"
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        turn.textContent="Turn: P2"
        init();
        function init(){
            document.getElementById('tex8').style.color='black';
            }
    }
    else{
        
        tex8.textContent="O"
        woi=parseInt(val.textContent)+1
        val.textContent=woi
        console.log(woi)
        turn.textContent="Turn: P1"
        init();
        function init(){
            document.getElementById('tex8').style.color='white';
            }
    }
    result();
}



