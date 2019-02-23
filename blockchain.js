const hash = require('object-hash')

class Blockchain {

    constructor() {
        this.chain = []
        this.currentTransactions = []
    }

    addNewBlock(previousHash) {
        let block = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transaction: this.currentTransactions,
            hash: this.hash,
            previousHash: previousHash,
        }
        this.hash = hash(block)
        this.chain.push(block)
        this.currentTransactions = []
        return block
    }

    addNewTransaction(sender, recipient, data) {
        this.currentTransactions.push({
            sender,
            recipient,
            data
        })
    }

    lastBlock() {
        return this.chain.slice(-1)[0]
    }

    isEmpty() {
        return this.chain.length == 0
    }
}

module.exports = Blockchain