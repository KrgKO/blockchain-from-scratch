// block example
// {
//     blockNo: 0,
//     timestamp: XXXXXXXXXXXXX,
//     previousHash: 'hash-SHA256',
//     currentHash: 'hash-SHA256',
//     difficulty: '000000'
//     nonce: 0,
//     transaction: [],
// }
const Block = class {
  constructor(timestamp, transaction) {
    this.blockNo = 0;
    this.timestamp = timestamp;
    this.previousHash = '0';
    this.currentHash = this.calculateHash();
    this.difficulty = '00000000';
    this.nonce = 0;
    this.transaction = transaction;
  }

  calculateHash() {}

  //   transaction example:
  //   {
  //       sender: 'uuid',
  //       recipient: 'uuid',
  //       data: {}
  //   }
  newTransaction() {}
};

module.exports = Block;
