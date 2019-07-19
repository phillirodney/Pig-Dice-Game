var accumPoints = 0;

document.getElementById("p1-header").classList.add("active");

function player1Roll() {
  /**
   * Player 1 rolls 2 dice, generate random numbers
   * Round up using Math.ceil
   */
  dice1 = Math.ceil(Math.random() * 6);
  dice2 = Math.ceil(Math.random() * 6);
  // calcualte the sum of the rolled dice
  rollSum = dice1 + dice2;
  // show sum of rolled dice in UI
  document.getElementById("p1-roll-sum").innerHTML = rollSum;
  rollConditions();
}

function player2Roll() {}
function rollConditions() {
  /**
   * if snake eyes
   * lose turn
   * rollSum  = 0
   * all accumulated points = 0
   * show values in UI
   */
  if (dice1 == 1 && dice2 == 1) {
    rollSum = 0;
    accumPoints = 0;
    document.getElementById("p1-acc-pts").innerHTML = accumPoints;
    console.log("Ooops, snake eyes ");
    // swap player
    swapPlayer();
  } else if (dice1 == 1 || dice2 == 1) {
    /**
     * if a 1 is rolled
     * rollSum = 0
     * accumulated points unchaged
     * show values in UI
     */
    rollSum = 0;
    accumPoints += rollSum;
    document.getElementById("p1-acc-pts").innerHTML = accumPoints;
    console.log("Ooops, you rolled a 1 ");
    // swap player
    swapPlayer();
  } else {
    accumPoints += rollSum;
    document.getElementById("p1-acc-pts").innerHTML = accumPoints;
    console.log(dice1, dice2, rollSum);
  }
}
function hold() {}
function swapPlayer() {
  document.getElementById("p1-header").classList.remove("active");
  document.getElementById("p2-header").classList.add("active");
  document.getElementById("p1-roll").disabled = true;
  document.getElementById("p1-hold").disabled = true;

  document.getElementById("p2-roll").disabled = false;
  document.getElementById("p2-hold").disabled = false;
}
