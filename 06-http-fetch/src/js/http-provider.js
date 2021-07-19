const jokeChuckUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=1';

const preset = process.env.CLOUDINARY_PRESET;
const urlCloudinary = process.env.CLOUDINARY_URL;

const getJoke = async () => {
  try {
    const response = await fetch(jokeChuckUrl);

    if (!response.ok) throw 'The request could not be fulfilled';

    const { icon_url, id, value } = await response.json();

    return { icon_url, id, value };
  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  try {
    const response = await fetch(urlUsers);
    const { data: users } = await response.json();

    return users;
  } catch (error) {
    throw error;
  }
};

const uploadFile = async (fileUpload) => {
  const formData = new FormData();
  formData.append('upload_preset', preset);
  formData.append('file', urlCloudinary);

  try {
    const response = fetch(urlCloudinary, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const cloudResponse = await response.json();
      console.log(cloudResponse);

      //return
    } else {
      throw await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export { getJoke, getUsers };
