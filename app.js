let timeleft = 10;
let score = 0;
let failstate = 0;
function startgame(){
  failstate++;
  if (failstate > 1) {
    alert("please do not touch this button when the code is running")
    location.reload();
  }
  let compselect = ["rock","paper", "scissors"];
  let randomNumber = Math.floor(Math.random()*compselect.length);
  compchosen = compselect[randomNumber];
  alert(randomNumber);
  document.getElementById("rock").addEventListener("click", () => {
    usrchosen = "rock"
    if (usrchosen == compchosen){
      compchosen = ""
      alert("you have one vin");
      failstate++;
      reload();
      return;
    }
  
  })
  document.getElementById("paper").addEventListener("click", () => {
    usrchosen = "paper"
    if (usrchosen == compchosen){
      compchosen = ""
      alert("you have one vin");
      failstate++;
      reload();
      return;
    }
  
  })
  document.getElementById("scissors").addEventListener("click", () => {
    usrchosen = "scissors"
    if (usrchosen == compchosen){
      compchosen = ""
      alert("you have one vin");
      failstate++;
      reload();
      return;
    }
  
  })




const timer = setInterval(() => {
  timeleft--;
  document.getElementById("countdown").innerText = timeleft;
  if (timeleft <= 0) {
    clearInterval(timer);
    alert("Time is up");
    timeleft = 10;
  }
}, 1000);
function reload(){
  if (failstate > 1) {
    location.reload();
  }

}
}
