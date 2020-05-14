
export class parkingTO {
  constructor(
    public _slotnumber: string,
    public _availablity: boolean
  ) {
  }

  get slotnumber(): string {
    return this._slotnumber;
  }

  set slotnumber(value: string) {
    this._slotnumber = value;
  }

  get availablity(): boolean {
    return this._availablity;
  }

  set availablity(value: boolean) {
    this._availablity = value;
  }
}
