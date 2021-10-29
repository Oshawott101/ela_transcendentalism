var score = 0;
var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var optionD = document.getElementById("D");
var wordsA = document.getElementById("ASpan");
var wordsB = document.getElementById("BSpan");
var wordsC = document.getElementById("CSpan");
var wordsD = document.getElementById("DSpan");
var question = document.getElementById("question");
var background = document.getElementById("background");
var hideAfterFirst = document.getElementById("hideAfterFirst");
var button = document.getElementById("button");
var nature = document.getElementById("nature");
var selfreliance = document.getElementById("selfreliance");
var inherentgoodness = document.getElementById("inherentgoodness");
var intuition = document.getElementById("intuition");
var nonconformity = document.getElementById("nonconformity");
var questionNumber = 0;
var isNature = false, isNonConformity = false, isInherentGoodness = false, isSelfReliance = false, isIntuition = false;
var numQuotes = 0;

function transition() {
  if (optionA.checked || optionB.checked || optionC.checked || optionD.checked || questionNumber === 0 || questionNumber == 6) {
    if (questionNumber === 0) {
      transition1();
    }
    else if (questionNumber == 1) {
      transition2();
    }
    else if (questionNumber == 2) {
      transition3();
    }
    else if (questionNumber == 3) {
      transition4();
    }
    else if (questionNumber == 4) {
      transition5();
    }
    else if (questionNumber == 5) {
      transition6();
    }
    else if (questionNumber == 6) {
      retake();
    }
    if (questionNumber == 6) {
      questionNumber = 0;
    }
    else {
      questionNumber++;
    }
  }
}

function transition1() {
  wordsB.style.display = "inline";
  wordsC.style.display = "inline";
  wordsD.style.display = "inline";
  optionA.style.display = "inline";
  optionB.style.display = "inline";
  optionC.style.display = "inline";
  optionD.style.display = "inline";
  background.style.backgroundImage = "url('question1.jpg')";
  button.innerHTML = "Next Question";
  question.innerHTML = "You are walking down a path in the forest, when you come across a fork in the road. You see, at the split point, a broken sign with two arrows lying on the ground. One says 'town', and the other says 'poison swamp'. You don't know which direction holds which destination, but you see well-trodden dirt covering the right path. You can't see the directions of the steps, but you know many people went that route. On the left path, though, you see only one set of footprints, though those return. You need to make a decision quickly: the sun is setting, and you need more supplies. Which way do you go?";
  hideAfterFirst.style.display = "none";
  wordsA.innerHTML = "Left Path";
  wordsB.innerHTML = "Right Path";
  wordsC.innerHTML = "Back Path";
  wordsD.innerHTML = "Climb a Tree";
  optionA.checked = false;
  optionB.checked = false;
  optionC.checked = false;
  optionD.checked = false;
}

function transition2() {
  background.style.backgroundImage = "url('question2.jpg')";
  question.innerHTML = "A friend of yours is constantly bullied at your school. They never want to tell anyone, only confiding in you. After constantly berating them to talk to someone, they tell you that they won't stoop to the bully's level. You decide to take matters into your own hands and get justice for your friend. How do you do it?";
  wordsA.innerHTML = "Inform the administration, knowing the bully will be suspended at best.";
  wordsB.innerHTML = "Inform the bully's parents, hoping for an interference.";
  wordsC.innerHTML = "Confront the bully and fight back.";
  wordsD.innerHTML = "Constantly be nice to the bully, waiting for them to apologize.";
  if (optionA.checked) {
    score += 4;
    optionA.checked = false;
    isNonConformity = true;
    numQuotes++;
  }
  else if (optionB.checked) {
    score += 1;
    optionB.checked = false;
  }
  else if (optionC.checked) {
    score += 2;
    optionC.checked = false;
  }
  else if (optionD.checked) {
    score += 3;
    optionD.checked = false;
  }
}

function transition3() {
  background.style.backgroundImage = "url('question3.jpeg')";
  question.innerHTML = "You are locating a lost item for your parents. You have no idea where to start, and all they tell you is that the item is a ring. A tiny ring. You have no idea where to start, but want to find it before dinner, so you calculate the four most probable places the ring could be: the kitchen, the living room, the master bedroom (your parents' room), and the master bathroom. The most logical place it would be is in the master bedroom, possibly in the bathroom. Something is nagging you to take a look in the living room, though. There's only enough time to search for the ring in one room before dinner, now. Which one do you look in?";
  wordsA.innerHTML = "Kitchen";
  wordsB.innerHTML = "Bedroom";
  wordsC.innerHTML = "Living Room";
  wordsD.innerHTML = "Bathroom";
  if (optionA.checked) {
    score += 2;
    optionA.checked = false;
  }
  else if (optionB.checked) {
    score += 3;
    optionB.checked = false;
  }
  else if (optionC.checked) {
    score += 1;
    optionC.checked = false;
  }
  else if (optionD.checked) {
    score += 4;
    optionD.checked = false;
    isInherentGoodness = true;
    numQuotes++;
  }
}

function transition4() {
  background.style.backgroundImage = "url('question4.jpg')";
  question.innerHTML = "You and 3 other students are working on a project for History. You've done all the research in class, but someone needs to take it home and create the presentation part of the project over the weekend. You four agree that the person taking the project home should come in and pick up the materials after school. The class is dismissed, and only when you sit down in your seat for the next class do you realize that your group never established who would take the materials home. You have no way of contacting your group members, as you aren't in any of the same classes, including lunch. What do you do?";
  wordsA.innerHTML = "Hunt down some of your partners in between classes.";
  wordsB.innerHTML = "Track down mutual friends and find a way to contact your group members.";
  wordsC.innerHTML = "Go after school and pick up the project yourself.";
  wordsD.innerHTML = "Let someone else take home the assignment, you have enough on your plate already.";
  if (optionA.checked) {
    score += 1;
    optionA.checked = false;
  }
  else if (optionB.checked) {
    score += 3;
    optionB.checked = false;
  }
  else if (optionC.checked) {
    score += 4;
    optionC.checked = false;
    isIntuition = true;
    numQuotes++;
  }
  else if (optionD.checked) {
    score += 2;
    optionD.checked = false;
  }
}

function transition5() {
  background.style.backgroundImage = "url('question5.jpg')";
  button.innerHTML = "Submit";
  question.innerHTML = "You and your friends are going on a week-long trip. The itinerary has been planned out, but your dad tells you that all of your parents vetoed one of the activities, so you'll need to think up a replacement. Sitting with your group, you tell them the problem, and together, you come up with 4 replacements. They hold votes on the plans, and you are the tiebreaker. Which activity do you choose?";
  wordsA.innerHTML = "Laser Tag";
  wordsB.innerHTML = "Walk in the Park";
  wordsC.innerHTML = "Beach Day!";
  wordsD.innerHTML = "Drive Around the Town";
  if (optionA.checked) {
    score += 3;
    optionA.checked = false;
  }
  else if (optionB.checked) {
    score += 2;
    optionB.checked = false;
  }
  else if (optionC.checked) {
    score += 4;
    optionC.checked = false;
    isSelfReliance = true;
    numQuotes++;
  }
  else if (optionD.checked) {
    score += 1;
    optionD.checked = false;
  }
}

function transition6() {
  background.style.backgroundImage = "url('question6.jpg')";
  button.innerHTML = "Retake";
  if (optionA.checked) {
    score += 1;
    optionA.checked = false;
  }
  else if (optionB.checked) {
    score += 4;
    optionB.checked = false;
    isNature = true;
    numQuotes++;
  }
  else if (optionC.checked) {
    score += 3;
    optionC.checked = false;
  }
  else if (optionD.checked) {
    score += 2;
    optionD.checked = false;
  }
  if (score < 9) {
    question.innerHTML = "'Transcendentalism? What's that?' you say. Mr. Henry David Thoreau wouldn't be very happy with you!";
  }
  else if (score < 13) {
    question.innerHTML = "You know the Transcendentalist beliefs exist, but you don't fully understand them yet.";
  }
  else if (score < 17) {
    question.innerHTML = "You aren't a stranger to Transcendentalism, but not a full aficionado, either.";
  }
  else if (score < 21) {
    question.innerHTML = "Amazing! You're just as much of a Transcendentalist as Henry David Thoreau, Ralph Waldo Emerson, and Walt Whitman!";
  }
  wordsA.innerHTML = "You had a score of " + score + ". Want to try again?";
  if (numQuotes === 0) {
    wordsB.innerHTML = "Oh no! You didn't discover any quotes!";
  }
  else if (numQuotes == 1) {
    wordsB.innerHTML = "Here is the quote you found!";
  }
  else if (numQuotes > 1) {
    wordsB.innerHTML = "Here are the quotes you found!";
  }
  wordsC.style.display = "none";
  wordsD.style.display = "none";
  optionA.style.display = "none";
  optionB.style.display = "none";
  optionC.style.display = "none";
  optionD.style.display = "none";
  if (isNature) {
    nature.style.display = "block";
  }
  if (isNonConformity) {
    nonconformity.style.display = "block";
  }
  if (isIntuition) {
    intuition.style.display = "block";
  }
  if (isSelfReliance) {
    selfreliance.style.display = "block";
  }
  if (isInherentGoodness) {
    inherentgoodness.style.display = "block";
  }
}

function retake() {
  nature.style.display = "none";
  nonconformity.style.display = "none";
  intuition.style.display = "none";
  selfreliance.style.display = "none";
  inherentgoodness.style.display = "none";
  background.style.backgroundImage = "url('question0.png')";
  wordsA.innerHTML = "Ready?";
  button.innerHTML = "Start";
  hideAfterFirst.style.display = "inline";
  question.innerHTML = "Let's get started!<br>Click the 'Start' button to start.";
}