/*
// object
const breakfast = {
  food: "eggs",
  drink: "Delicious Caramel Latte"
}

// template to create an object
class houseTemplate {
  constructor(external, paint, roof, roomQTY) {
    this.external = external;
    this.paint = paint;
    this.roof = roof;
    this.roomQTY = roomQTY;
  }

  sentence() {
    console.log(`This ${this.roomQTY} bedroom home has a ${this.roof} roof, ${this.external} for external cladding, and ${this.paint} on the inside!`);
  }
}


const houseA = new houseTemplate("bricks", "white", "tiled", 3);
const houseB = new houseTemplate("weatherboard", "charcoal", "colorbond", 5);
const houseC = new houseTemplate("vinyl", "lexicon-half", "shingles", 2);


houseB.sentence();

*/


// --------------------------------------------------------------------




// Non scalable simple blockchain

const crypto = require("crypto");

const difficulty = 3

class Block {
  constructor(id, data, prevHash = "") {
    this.id = id;
    this.data = data;
    this.prevHash = prevHash;
    this.timeStamp = new Date().toISOString();
    this.hash = this.generateHash();
  }

  generateHash() {
    const hashedData = JSON.stringify(this.data) + this.prevHash + this.timeStamp;
    const hashed = crypto.createHash("sha256").update(hashedData).digest("hex");
    return "0".repeat(difficulty) + hashed
  }
}



const genesisBlock = new Block(1, {
  sender: "Ryan",
  Receiver: "Cass",
  Amount: 10
});

const secondBlock = new Block(2, {
  sender: "James",
  Receiver: "Marta",
  Amount: 50
}, genesisBlock.generateHash());

console.log(genesisBlock, "\n\n", secondBlock);