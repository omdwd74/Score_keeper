const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winScoreSelect = document.querySelector('#playto');



let p1Score = 0;
let winScore = 5;
let isGameOver = false;



p1Button.addEventListener('click',function(){
  if(!isGameOver)
  {
    p1Score+=1;
    if(p1Score === winScore)
    {
        isGameOver= true;
        p1Display.classList.add('winner');
        p2Display.classList.add('losser');
    
    }
    p1Display.textContent = p1Score;
 
  }
});
let p2Score = 0;

p2Button.addEventListener('click',function(){
    if(!isGameOver)
    {
        p2Score+=1;
        if(p2Score === winScore)
        {
            isGameOver=true;

        p2Display.classList.add('winner');
        p1Display.classList.add('losser');
    
         
        }
        p2Display.textContent = p2Score;
     
    }
});
winScoreSelect.addEventListener('change',function(){
    winScore = parseInt(this.value);
    reset();

})
resetButton.addEventListener('click',reset)
function reset(){
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    p1Display.textContent = p1Score;
 
    p2Display.textContent = p2Score;
    p1Display.classList.remove('winner','losser');
    p2Display.classList.remove('winner','losser')


}

