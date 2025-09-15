const crypto = require("crypto");
const { diff } = require("util");


// HASHING FUNCTION
function hashData(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}



// BLOCK CLASS
// Represents each block in the blockchain

class Block {
  constructor(index, transactions, previousHash = "") {
    this.index = index;
    this.timestamp = new Date().toISOString();
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }


  // create a hash based on block data
  calculateHash() {
    const data = this.data + this.timestamp + JSON.stringify(this.transactions) + this.previousHash + this.nonce;
    return hashData(data);
  }


  // Mining: find a hash starting with a set number of zeroes
  mineBlock(difficulty) {
    const target = "0".repeat(difficulty); // Start the hash with "000"
    const startTime = Date.now(); // start timing

    while (!this.hash.startsWith(target)) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    const endTime = Date.now(); // end timing
    const seconds = ((endTime - startTime) / 1000).toFixed(2);

    console.log(`\n\n ✅ Block mined: ${this.hash}`);
    console.log(`⏱️ Mining took ${seconds} seconds`);
  }
}




// BLOCKCHAIN CLASS
// managing the chain of blocks
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()]; // Firstblock in the chain
    this.difficulty = 4 // Mining difficulty - represent the amount of "0"s the hash starts with.
  }


  // Create the first block
  createGenesisBlock() {
    return new Block(0, ["Genesis Block"], "0");
  }


  // Get latest block
  getLatestBlock() {
    return this.chain[this.chain.length - 1]; // array indexing 
  }


  // Add a new block to the chain
  addBlock(transactions) {
    const newBlock = new Block(this.chain.length, transactions, this.getLatestBlock().hash);
    newBlock.mineBlock(this.difficulty); // e.g. "000" for difficulty = 3
    this.chain.push(newBlock);
  }


  // Check if blockchain is still valid
  isChainValid() {
    const target = "0".repeat(this.difficulty);

    for (let i = 1; i < this.chain.length; i++) {
      const current = this.chain[i]; // Store the curent block in a variable
      const previous = this.chain[i - 1]; // Store the previous block in a variable

      if (current.hash !== current.calculateHash()) return false;
      if (current.previousHash !== previous.hash) return false;
      if (!current.hash.startsWith(target)) return false;
    }

    return true; // If all blocks pass the above checks, the chain is valid
  }
}




// TESTING THE BLOCKCHAIN
// create blockchain
const myBlockChain = new Blockchain();


// Add some blocks
myBlockChain.addBlock([
  "Alice pays Bob 10 BTC",
  "Jane pays Michael 15 BTC",
  "Phil pays Dave 7 BTC"
]);

myBlockChain.addBlock([
  "Eve pays Frank 5 BTC",
  "Oscar pays Liam 3 BTC",
  "Mia pays Noah 8 BTC",
  "Sophia pays Ethan 12 BTC",
  "Lily pays Jack 6 BTC"
]);

myBlockChain.addBlock([
  "Jim pays Alice 10 BTC",
  "Charlie pays Zoe 9 BTC",
  "Henry pays Olivia 11 BTC"
])





// Show original blockchain
console.log("\n\n\n --- ORIGINAL BLOCKCHAIN --- \n", JSON.stringify(myBlockChain, null, 2));

// Show amount of blocks
console.log("\n• Number of blocks on the chain:", myBlockChain.chain.length, "\n");

// Validate blockchain 
console.log("\n• Is blockchain valid?", myBlockChain.isChainValid(), "\n\n\n");




// Tamper with block details and re-hashing
const blockNumber = 2;
myBlockChain.chain[blockNumber].transactions = "I am tampered with";
myBlockChain.chain[blockNumber].hash = myBlockChain.chain[blockNumber].calculateHash();

// Update all following blocks' previousHash and recalc their hashes
for (let i = blockNumber + 1; i < myBlockChain.chain.length; i++) {
  myBlockChain.chain[i].previousHash = myBlockChain.chain[i - 1].hash; // Set the current block's previousHash to the hash of the block before it
  myBlockChain.chain[i].hash = myBlockChain.chain[i].calculateHash(); // Recalculate the current block's own hash to reflect the updated previousHash and any other data
}




// Show tampered blockchain
console.log("--- MODIFIED BLOCKCHAIN ---", "\n", JSON.stringify(myBlockChain, null, 2));

// Show amount of blocks
console.log("\n• Number of blocks on chain:", myBlockChain.chain.length, "\n");

// Validate blockchain after tampering
console.log("• Is blockchain valid after tampering?", myBlockChain.isChainValid(), "\n\n\n");
