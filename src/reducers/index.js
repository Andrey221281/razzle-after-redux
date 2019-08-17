const initialState = {
  books: [
    {
      id: 1,
      name: 'React',
      prise: 255
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
