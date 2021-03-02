export default class Transaction {
  constructor(
    public amount: number,
    public sender: string,
    public recipient: string,
  ) {}

  toString(): string {
    return JSON.stringify(this);
  }
}
