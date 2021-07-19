import { uploadFile } from './http-provider';

const body = document.body;
let inputFile;
let inputImgPhoto;

const createInputHtml = () => {
  const html = `
    <h1 class='mt-5'>Upload Files</h1> 
    <hr />
    <label>Select Photo!</label>  
    <input type='file' accept='image/png, image/jpeg'/>

    <br /> 
    <img id='photo' class='img-thumbnail' src='' /> 
  `;

  const div = document.createElement('div');
  div.innerHTML = html;
  body.appendChild(div);

  inputFile = document.querySelector('input');
  inputImgPhoto = document.querySelector('#photo');
};

const events = () => {
  inputFile.addEventListener('change', (event) => {
    const file = event.target.files[0];
    console.log(file);
  });
  // inputImgPhoto.
  // uploadFile(file.then((response) => console.log(response)));
};

export const init = () => {
  createInputHtml();
  events();
};
