
console.log('connected to home');

var badges = document.querySelectorAll('.badge');

for(var i = 0; i < badges.length; i++){
  if(badges[i].innerHTML === 'approved'){
    badges[i].classList.add("approved");
  } else if (badges[i].innerHTML === 'rejected'){
      badges[i].classList.add("rejected");
  }
}
