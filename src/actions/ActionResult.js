class ActionResult {

  _isSuccess: boolean;

  constructor(isSuccess: boolean) {
    this._isSuccess = isSuccess;
  }

  get isSuccess(): boolean {
    return this._isSuccess;
  }

  static success(): ActionResult {
    return new ActionResult(true);
  }

  static error(): ActionResult {
    return new ActionResult(false);
  }

}

export default ActionResult;
