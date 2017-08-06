let userId = 1;

export function addUser (name) {
  return {
    type: 'ADD_USER',
    id: userId++,
    name
  };
}

export function deleteUser (id) {
  return {
    type: 'DELETE_USER',
    id
  }
}