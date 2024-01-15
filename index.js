function photoElemFn(keywordInput, index){
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/400x225/?${keywordInput}&sig=${index}`;
    const galleryElem = document.querySelector('.gallery')
    galleryElem.appendChild(imgElem);
}
const inputKeywordElem = document.querySelector('input')
inputKeywordElem.addEventListener('keydown', keywordPhotos);

function removePhotos(){
    const removeImgElem = document.querySelector('.gallery');
    removeImgElem.innerHTML = '';
}

function keywordPhotos(event){
    const keyword = event.target.value;
    if(event.key === 'Enter' && keyword != ''){
        removePhotos();
        for(let photos = 0; photos < 12; photos++){
            photoElemFn(keyword, photos);
        };
    };  
};

