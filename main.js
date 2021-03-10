const img1 = 'https://i0.wp.com/winkgo.com/wp-content/uploads/2020/01/motivational-memes-06.jpg'
const img2 = 'https://sayingimages.com/wp-content/uploads/be-the-best-you-can-be-motivational-memes.jpg'
const img3 = 'https://sayingimages.com/wp-content/uploads/motivational-dear-god-memes.jpg'
const img4 = 'https://sayingimages.com/wp-content/uploads/if-you-could-that-would-be-great-get-back-to-work-meme.png'
const imgArray = [img1, img2, img3, img4];
let count = 1;
const content = $("body");
content.empty();
content.prepend(`<img id="image" src="${img1}" />`);
let img1Select = $('#image');
function rotateImages (arr) {
    setInterval(function() {
        img1Select.prop('src', arr[count]);
        count++
        if (count > 3) {
            count = 0
            }
        }, 10000)};
        


rotateImages(imgArray)



document.querySelector('form').addEventListener("submit", addSiteName)



function addSiteName(e) {
    e.preventDefault();
    if (window.localStorage.getItem(document.querySelector('input').value)) {
      alert("This site has already been added");
    } else {
      window.localStorage.setItem(document.querySelector('input').value, document.querySelector('input').value);
    }
};
