const urlCRUD = 'https://reqres.in/api/users';

const getUser = async (id) => {
  const response = await fetch(`${urlCRUD}/${id}`);
  const { data } = await response.json();
  return data;
};

const createUser = async (user) => {
  const response = await fetch(urlCRUD, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  });

  return await response.json();
};

const updateUser = async (id, user) => {
  const response = await fetch(`${urlCRUD}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  });

  return await response.json();
};

const deleteUser = async (id) => {
  try {
    const response = await fetch(`${urlCRUD}/${id}`, {
      method: 'DELETE',
    });

    return response.ok ? 'Deleted.' : 'Oh! Error on delete!';
  } catch (error) {
    throw error;
  }
};

export { getUser, createUser, updateUser, deleteUser };
