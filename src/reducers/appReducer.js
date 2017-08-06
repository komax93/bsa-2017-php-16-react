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
    case 'FILTER_USER':
      return state.map(user => {
        user.hidden = !user.name.includes(action.name);
        return user;
      });
    default:
      return state;
  }
}