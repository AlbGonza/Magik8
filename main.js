function getFormData(){ 
  let userName=document.getElementById('name').value;
  let userQuestion=document.getElementById('question').value;
  let randomNumber = Math.floor(Math.random()*8);
  let eightBall = '';
 
  userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')
 if (userQuestion) {
  switch (randomNumber) {
  case 0:
  eightBall = 'FALSE....*Dwight Schrute Voice*';
 break; case 1:
  eightBall = 'Mmmmm yenaah';
  break; case 2:
  eightBall = 'Maybe next year';
  break; case 3:
  eightBall = 'Give me a sec...Ask again.';
  break; case 4:
 eightBall = 'Negative.';
  break; case 5:
  eightBall = 'Possibly...maybe not';
 break; case 6:
  eightBall = 'Donde esta la biblioteca?';
 break; case 7:
  eightBall = 'Sure.';
 break; case 8:
}
  let array = [userName, eightBall];
 
  userName ? document.getElementById("insert").innerHTML = `Hey ${array[0]}, ${array[1]}`: document.getElementById("insert").innerHTML = `${array[1]}`;
  } else {
  document.getElementById("insert").innerHTML = "Well ask me then...."
  }
 
  return false;
}