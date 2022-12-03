let countNumber = document.getElementById("countNumber")

/* let number = prompt("bir sayi giriniz!");
countNumber.innerHTML = number; */

/* function countDown(){
  
setInterval(function(){
  
      if(counter>0)
      counter--;
         countNumber.innerHTML = counter;
        
      
},1000);
} */

/* function countDownTimer(){
   countNumber.innerHTML = prompt("bir sayi giriniz!");

}
function countDown() {
   if (counter > 0) {
      counter--;  
      countNumber.innerHTML = counter;
   } else {
      clearInterval(myInterval);
   }
   let myInterval = setInterval(countDown(), 1000)

} */

function countDownTimer() {
   let counter = countNumber.innerHTML = prompt("bir sayi giriniz!");
   let myInterval = setInterval(function () {
      counter--;
      if (counter >= 0) {
         countNumber.innerHTML = counter;
      }else{
         countNumber.style.display = "none"
         clearInterval(myInterval)
      }
   }, 1000)

}