const team = {
  _players: [
    {_firstname: "Zorawar",_lastname: "Purohit",_age: 34,},
    {_firstname: "Gora",_lastname: "Singh",_age: 39,},
    {_firstname: "Sankalp",_lastname: "Verma",_age: 24,},
  ],
  _games: [
    {_opponent: "Whiskey",_teamPoints: 11,_opponentPoints: 12,},
    {_opponent: "Samba",_teamPoints: 14,_opponentPoints: 11,},
    {_opponent: "Vermi",_teamPoints: 2,_opponentPoints: 1,},
  ],

  get players () {
    return this._players;
  },

  get games () {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGames(newFirstName, newLastName, newAge){
    let game = {
      opponent: newFirstName,
      teamPoints: newLastName,
      opponentPoints: newAge,
    };
    this.games.push(game);
  }  
};

team.addPlayer("Bugs", "Bunny", 77);
team.addGames("WOw", 100, 77);

console.log(team.players)
console.log(team.games)
