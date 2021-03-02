import Transaction from "./transaction";
import * as crypto from "crypto";

export default class Block {
  public nonce = Math.round(Math.random() * 999999999);

  constructor(
    public prevHash: string,
    public transaction: Transaction,
    public timestamp = Date.now(),
  ) {}

  get hash(): string {
    const blockString = JSON.stringify(this);
    const hash = crypto.createHash("SHA256");
    hash.update(blockString).end();
    return hash.digest("hex");
  }
}
