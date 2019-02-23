const BlockChain = require('./blockchain')
const hash = require('object-hash')

const blockchain = new BlockChain()

let PROOF = 1283

let validProof = proof => {
    let guessHash = hash(proof)
    console.log('Hashing :', guessHash)
    return guessHash == hash(PROOF)
}

let proofOfWork = () => {
    let proof = 0
    while (true) {
        if (!validProof(proof)) {
            proof++
        } else {
            break
        }
    } return proof
}

function addBlock(x, y, z) {
    if (proofOfWork() == PROOF) {
        blockchain.addNewTransaction(x, y, z)
        let previousHash = blockchain.lastBlock() ? blockchain.lastBlock().hash : null
        blockchain.addNewBlock(previousHash)
        console.log('Chain :', JSON.stringify(blockchain.chain, undefined, 2))
    }
}

addBlock('frank', 'harry', 100)
addBlock('bob', 'john', 200)