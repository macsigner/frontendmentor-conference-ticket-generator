import { delegate } from '../helper/tools.js';

export default class Upload {
    constructor() {
        document.addEventListener('change', delegate('.input--upload [type="file"]', e => {
            const wrapper = e.target.closest('.input');
            const placeholder = wrapper.querySelector('.input__upload-img--placeholder');
            const imgWrapper = document.createElement('div')
                || wrapper.querySelector('.input__upload-preview');
            imgWrapper.classList.add('input__upload-preview');
            const img = wrapper.querySelector('.input__upload-img:not(.input__upload-img--placeholder)')
                || document.createElement('img');
            img.classList.add('input__upload-img');
            const [file] = e.target.files;
            imgWrapper.appendChild(img);

            imgWrapper.innerHTML = `
                <img class="input__upload-img" src="${URL.createObjectURL(file)}" alt="New avatar image">
                <button class="button input__upload-reset" type="button">Remove image</button>
                <label class="button" type="button" for="${e.target.id}">Change image</label>
            `

            placeholder.after(imgWrapper);
        }));
    }
}
