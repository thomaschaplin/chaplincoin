import Chain from "./chain";
import Wallet from "./wallet";

const satoshi = new Wallet();
const thomas = new Wallet();
const sophie = new Wallet();

satoshi.sendMoney(100, thomas.publicKey);
thomas.sendMoney(5, sophie.publicKey);
sophie.sendMoney(32, thomas.publicKey);

console.log(Chain.instance);
