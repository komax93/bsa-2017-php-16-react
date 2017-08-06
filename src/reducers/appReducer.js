export default function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
        }
      ];
    case 'DELETE_USER':
      return state.filter(user => user.id !== action.id);
    default:
      return state;
  }
}