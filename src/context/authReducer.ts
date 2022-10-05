type authReducerAction = 
  | {type: 'login', payload: {}}
  | {type: 'logout'}


export const authReducer = (state: any, action: authReducerAction) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case "logout":
      return {
        ...state,
        logged: false,
      };

    default:
      return state;
  }
};
