export default (handlers, defaultState) =>
  (state = defaultState, action) => {
    // find handler matching action type
    if (handlers[action.type]) {
      const handler = handlers[action.type](state, action);

      // check if handler has 'always' function and fall this first.
      let tmpState = {};
      if (handler.always) {
        tmpState = handler.always();
      }

      // call next
      if (handler.next && !action.error) {
        return Object.assign(tmpState, handler.next());
      }

      // call throw
      if (handler.throw && action.error) {
        return Object.assign(tmpState, handler.throw());
      }

      // assert errors have been handled
      if (handler.next && action.error) console.error('Unhandled error action!');

      return handler;
    }
    return state;
  };
