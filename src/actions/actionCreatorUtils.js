export const createAction = (type: string, payload: Object = {}, error: boolean = false) => ({
  type,
  payload,
  error,
});

export const createErrorAction = (type: string, payload: Object) =>
  createAction(type, payload, true);
