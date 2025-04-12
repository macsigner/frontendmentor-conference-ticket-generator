import { delegate } from '../helper/tools.js';

export default class Upload {
    constructor() {
        document.addEventListener('change', delegate('.input--upload [type="file"]', e => {
            const wrapper = e.target.closest('.input');
            const placeholder = wrapper.querySelector('.input__upload-img--placeholder');
            const img = wrapper.querySelector('.input__upload-img:not(.input__upload-img--placeholder)')
                || document.createElement('img');
            img.classList.add('input__upload-img');
            const [file] = e.target.files;

            img.src = URL.createObjectURL(file);

            placeholder.after(img);
        }));
    }
}
