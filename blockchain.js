const Block = require('./block');

const Chain = class extends Block {
  constructor() {
    super();
    this.chain = [];
    this.currentTransaction = [];

    // create genesis block
    this.newBlock();
  }

  newBlock() {
    // const block = new Block();
  }
};

module.exports = Chain;
