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

export function filterUser (name) {
  return {
    type: 'FILTER_USER',
    name
  }
}