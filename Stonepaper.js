let usrScore = 0 ;
let compScore = 0 ;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const you = document.querySelector("#you");
const comp = document.querySelector("#comp");


const genComp = ()=>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const draw = ()=>{
    console.log("its a draw");
    msg.innerText = "Game was Draw Play Again !!" ;
    msg.style.backgroundColor = "pink" ;
}
const showWinner=(userwin,userchoice,compChoice)=>{
    if(userwin == true){
        usrScore++ ;
        you.innerText = usrScore ;
        console.log("You win");
        msg.innerText = `You Win!!  Your ${userchoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "Green" ;
    }
    else{
        compScore++ ;
        comp.innerText = compScore ;
        console.log("You lose !!");
        msg.innerText = `You Loose!!  ${compChoice} beats ${userchoice}` ;
        msg.style.backgroundColor = "red" ;
    }
}
const playgame = (userchoice)=>{
    console.log("User choice: ",userchoice);
    const compChoice = genComp();
    console.log("Comp choice: ",compChoice);

    if(userchoice === compChoice){
        //draw game
        draw();
    }
    else{
        let userwin = true ;
        if(userchoice === "rock"){
            //scissors , paper
            userwin = compChoice=== "scissors" ? false : true ;
        }
        else if (userchoice === "paper"){
            //scissors , rock
            userwin = compChoice === "rock" ? true : false ;
        }
        else{
            //rock , paper 
            userwin = compChoice==="paper" ? true : false ;
        }
        showWinner(userwin , userchoice , compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

