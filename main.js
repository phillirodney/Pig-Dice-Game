function player1Roll() {
  /**
   * Player 1 rolls 2 dice, generate random numbers
   * Round up using Math.ceil
   */
  dice1 = Math.ceil(Math.random() * 6);
  dice2 = Math.ceil(Math.random() * 6);
  console.log(dice1, dice2);
}
