/**
 * Each player will have these variables , create player object
 */
let player1 = {
  rollSum: 0,
  accumPoints: 0,
  totalPoints: 0
};

let player2 = {
  rollSum: 0,
  accumPoints: 0,
  totalPoints: 0
};

/**
 * Extract function calls from buttons in html page
 * Use event listeners instead
 * Allows us to leave html page as is, and change functionlity in JS code
 */

document.getElementById("p1-roll").addEventListener("click", player1Roll);
document.getElementById("p1-hold").addEventListener("click", hold);

function playerRoll(player) {}
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
    player1.rollSum = 0;
    player1.accumPoints = 0;
    document.getElementById("p1-acc-pts").innerHTML = player1.accumPoints;
    document.getElementById("p1-total-pts").innerHTML = 0;
    console.log("Ooops, snake eyes ");
    // swap player
    reset();
    swapPlayer();
  } else if (dice1 == 1 || dice2 == 1) {
    /**
     * if a 1 is rolled
     * rollSum = 0
     * accumulated points unchaged
     * show values in UI
     */
    player1.rollSum = 0;
    player1.accumPoints += rollSum;
    document.getElementById("p1-acc-pts").innerHTML = player1.accumPoints;
    console.log("Ooops, you rolled a 1 ");
    player1.totalPoints += player1.accumPoints;
    document.getElementById("p1-total-pts").innerHTML = player1.totalPoints;
    // swap player
    reset();
    swapPlayer();
  } else {
    player1.accumPoints += rollSum;
    document.getElementById("p1-acc-pts").innerHTML = player1.accumPoints;
    console.log(dice1, dice2, rollSum);
  }
}
function hold() {
  // add accumulated points to total points for players round
  player1.totalPoints += player1.accumPoints;
  document.getElementById("p1-total-pts").innerHTML = player1.totalPoints;
  // reset accum points to 0, show changes in UI
  /**
   * if winner, stop game
   * else clear accum and roll values to 0
   * continue playing with next player (TBC)
   */
  if (player1.totalPoints >= 100) {
    alert("Player 1 wins!");
    location.reload();
  } else {
    player1.accumPoints = 0;
    document.getElementById("p1-acc-pts").innerHTML = 0;
    document.getElementById("p1-roll-sum").innerHTML = 0;

    //swap player
    swapPlayer();
  }
}

function swapPlayer() {
  document.getElementById("p1-header").classList.remove("active");
  document.getElementById("p2-header").classList.add("active");
  document.getElementById("p1-roll").disabled = true;
  document.getElementById("p1-hold").disabled = true;

  document.getElementById("p2-roll").disabled = false;
  document.getElementById("p2-hold").disabled = false;
}
function reset() {
  document.getElementById("p1-acc-pts").innerHTML = 0;
  document.getElementById("p1-roll-sum").innerHTML = 0;
}

/**
 * Function needs to be in hold button, only time to check values before next players turn
 */
function win() {}
