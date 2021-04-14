'use strict';
// console.log(document.querySelector('.message').textContent='Correct gussing');
// document.querySelector('.message').textContent='Correct gussing';
// document.querySelector('.score').textContent='10';
// document.querySelector('.number').textContent='23';
// document.querySelector('.guess').Value='12';
// // document.querySelector('h1').textContent='you catch up it correctly';

let secreteNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

function displayMsg(message){
    document.querySelector('.message').textContent=message;
}

function lossGame(){
    document.querySelector('.message').textContent='you loose the game'; 
    document.querySelector('.score').textContent=0;
    document.querySelector('body').style.backgroundColor='red';
}





document.querySelector('.check').addEventListener('click',function()
{
   const guess=Number(document.querySelector('.guess').value);
   console.log(guess,typeof guess);

   // when guess is noinput
    if(!guess)
    {

        displayMsg('no number!');
        // document.querySelector('.message').textContent='no number!';  


     // when guess is right   
    }
    else if(guess === secreteNumber){
        displayMsg('Correct number!');
        // document.querySelector('.message').textContent='Correct number!';  
        document.querySelector('.number').textContent=secreteNumber;
        document.querySelector('h1').textContent='congo You find is correct';


        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        

     //    update highscore
        
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent=highscore;
            
        }

    }
    else if(guess!==secreteNumber){
        // when guess is too hihg{
            if(score>1)
            {   displayMsg(guess>secreteNumber?'to high':'too low');
                // document.querySelector('.message').textContent=guess>secreteNumber?'to high':'too low'; 
                score--;
                document.querySelector('.score').textContent=score;
            }else
            {
                lossGame();
            }     
         
    }









    // // when guess is too hihg
    // else if(guess>secreteNumber)
    // {
    //     if(score>1)
    //     {
    //         document.querySelector('.message').textContent='to high!'; 
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }else{
    //         lossGame();
    //     }
     

    //     // when guess is too low
    // }else if(guess<secreteNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent='to low!';  
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }else{
    //         lossGame();
    //     }
     
    // }

    // game reser function

    document.querySelector('.again').addEventListener('click',function(){
        secreteNumber=Math.trunc(Math.random()*20)+1;
        score=20;
        displayMsg('Start guessing...');
        // document.querySelector('.message').textContent='Start guessing...';  
        document.querySelector('.score').textContent=score;
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value=" ";

        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width='15rem';
        document.querySelector('h1').textContent='Guess  my number';
    })


  
    

   
  
    
     
});






