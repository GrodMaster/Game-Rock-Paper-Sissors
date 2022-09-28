const score = document.querySelector('.score')
const result = document.querySelector('.result')
const options = document.querySelectorAll('.option')
const submit = document.querySelector('.submit')

let computerScore = 0
let userScore = 0

options.forEach(i =>{
   i.addEventListener('click', (e)=>{
      let userChoice = e.target.dataset.option
      game(userChoice)
   })
})

const game = (userChoice)=>{
   let compChoice = Math.ceil(Math.random() * 3)
   console.log(compChoice);
   if(compChoice === 1){
      compChoice = 'Rock'
   }else if(compChoice === 2){
      compChoice = 'Paper'
   }else{
      compChoice = 'Scissors'
   }

   switch(compChoice[0]+userChoice[0]){
      case 'RP':
         userWin(userChoice, compChoice)
         break;
      case 'RS':
         compWin(compChoice, userChoice)
         break;
      case 'PR':
         compWin(compChoice, userChoice)
         break;
      case 'PS':
         userWin(userChoice, compChoice)
         break;
      case 'SP':
         compWin(compChoice, userChoice)
         break;
      case 'SR':
         userWin(userChoice, compChoice)
         break;
      default:
         usedrow(userChoice)
         break;
   }
}

const compWin = (compChoice, userChoice)=>{
   score.innerHTML = `${userScore}:${++computerScore}`
   result.innerHTML = `${compChoice} covers ${userChoice}. Comp win.`
   optionAnimation(userChoice, 'lose')
}

const userWin = (userChoice, compChoice )=>{
   score.innerHTML = `${++userScore}:${computerScore}`
   result.innerHTML = `${userChoice} covers ${compChoice}. Comp win.`
   optionAnimation(userChoice, 'win')
}

const usedrow = (userChoice)=>{
   result.innerHTML = `It's a draw. Keep goin!`
   optionAnimation(userChoice, 'draw')
}

const optionAnimation = (choice, selector) =>{
   const link = document.querySelector(`.${choice}`)
   const opt = document.querySelector('.score')
   link.classList.add(selector)
   opt.classList.add(selector)
   setTimeout(()=>{
      link.classList.remove(selector)
      opt.classList.remove(selector)
   }, 700)
   setTimeout(()=>{
      result.innerHTML = 'Just do it!'
      
   }, 1000)
}

submit.addEventListener('click', ()=>{
   result.innerHTML ='Okey, lats go!';
   score.innerHTML = '0:0'
   computerScore = 0
 userScore = 0
})