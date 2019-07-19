/**
 * Each player will have these variables , create player object
 */
let player1 = {
  rollSum: 0,
  accumPoints: 0,
  totalPoints: 0,
  id: "p1"
};

let player2 = {
  rollSum: 0,
  accumPoints: 0,
  totalPoints: 0,
  id: "p2"
};

var playerId1, playerId2, playerId;
/**
 * Extract function calls from buttons in html page
 * Use event listeners instead
 * Allows us to leave html page as is, and change functionlity in JS code
 */

// document.getElementById("p1-roll").addEventListener("click", player1Roll);
document.getElementById("p1-roll").addEventListener("click", function() {
  playerRoll(player1);
});
document.getElementById("p2-roll").addEventListener("click", function() {
  playerRoll(player2);
});

document.getElementById("p1-hold").addEventListener("click", function() {
  hold(player1);
});
document.getElementById("p2-hold").addEventListener("click", function() {
  hold(player2);
});

function playerRoll(player) {
  dice1 = Math.ceil(Math.random() * 6);
  dice2 = Math.ceil(Math.random() * 6);
  // calcualte the sum of the rolled dice
  rollSum = dice1 + dice2;
  // show sum of rolled dice in UI
  document.getElementById(player.id + "-roll-sum").innerHTML = rollSum;
  rollConditions(player);
}

function rollConditions(player) {
  /**
   * if snake eyes
   * lose turn
   * rollSum  = 0
   * all accumulated points = 0
   * show values in UI
   */
  if (dice1 == 1 && dice2 == 1) {
    player.rollSum = 0;
    player.accumPoints = 0;
    document.getElementById(player.id + "-acc-pts").innerHTML =
      player.accumPoints;
    document.getElementById(player.id + "-total-pts").innerHTML = 0;
    console.log("Ooops, snake eyes ");
    // swap player
    reset(player.id);

    if (player.id == "p1") {
      swapPlayer("p1", "p2");
    } else {
      swapPlayer("p2", "p1");
    }
  } else if (dice1 == 1 || dice2 == 1) {
    /**
     * if a 1 is rolled
     * rollSum = 0
     * accumulated points unchaged
     * show values in UI
     */
    player.rollSum = 0;
    player.accumPoints += rollSum;
    document.getElementById(player.id + "-acc-pts").innerHTML =
      player.accumPoints;
    console.log("Ooops, you rolled a 1 ");
    console.log(player.accumPoints);
    console.log(player.totalPoints);
    player.totalPoints += player1.accumPoints;
    document.getElementById(player.id + "-total-pts").innerHTML =
      player.totalPoints;
    // swap player
    checkWinner(player);
    reset(player.id);
    if (player.id == "p1") {
      swapPlayer("p1", "p2");
    } else {
      swapPlayer("p2", "p1");
    }
  } else {
    player.accumPoints += rollSum;
    document.getElementById(player.id + "-acc-pts").innerHTML =
      player.accumPoints;
    console.log(dice1, dice2, rollSum);
  }
}
function hold(player) {
  // add accumulated points to total points for players round
  player.totalPoints += player.accumPoints;
  document.getElementById(player.id + "-total-pts").innerHTML =
    player.totalPoints;
  // reset accum points to 0, show changes in UI
  /**
   * if winner, stop game
   * else clear accum and roll values to 0
   * continue playing with next player (TBC)
   */
  checkWinner(player);
  //swap player
  if (player.id == "p1") {
    swapPlayer("p1", "p2");
  } else {
    swapPlayer("p2", "p1");
  }
}

function checkWinner(player) {
  if (player.totalPoints >= 100) {
    alert(player.id + " wins!");
    location.reload();
  } else {
    player.accumPoints = 0;
    document.getElementById(player.id + "-acc-pts").innerHTML = 0;
    document.getElementById(player.id + "-roll-sum").innerHTML = 0;
  }
}
/**
 * Create an if statement to assign player id to playerId1 and
 * Pass through two player ID's
 * If player 1 swap to player 2
 * If player 2 swap to player 1
 * @param {*} playerId1 active player
 * @param {*} playerId2 in-active player
 */
function swapPlayer(playerId1, playerId2) {
  document.getElementById(playerId1 + "-header").classList.remove("active");
  document.getElementById(playerId2 + "-header").classList.add("active");
  document.getElementById(playerId1 + "-roll").disabled = true;
  document.getElementById(playerId1 + "-hold").disabled = true;

  document.getElementById(playerId2 + "-roll").disabled = false;
  document.getElementById(playerId2 + "-hold").disabled = false;
}

function reset(playerId) {
  document.getElementById(playerId + "-acc-pts").innerHTML = 0;
  document.getElementById(playerId + "-roll-sum").innerHTML = 0;
}

/**
 * Function needs to be in hold button, only time to check values before next players turn
 */
function win() {}
