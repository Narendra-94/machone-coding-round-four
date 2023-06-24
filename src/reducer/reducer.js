export const initialState = {
  forumData: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESSFULL_DATA": {
      return { ...state, forumData: action.payload };
    }

    default:
      return state;
  }
};
