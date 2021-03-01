// //commented out the interval for now. 

// var contents = $('#contents');
// var wrapper = $('#chips-wrapper')
// var contentParent = contents.parent()

// contentParent.prepend('<img id="theImg" src="https://i0.wp.com/winkgo.com/wp-content/uploads/2020/01/motivational-memes-06.jpg?w=800&ssl=1" alt="who knows"/>')
// contentParent.prepend('<h1 id="beauText">This is going to be a good day!</hi>')
// contents.remove();
// wrapper.remove();

// var message = '<h1 id="beauText">This is going to be a good day!</hi>'
// var img1 = '<img id="theImg1" src="https://i0.wp.com/winkgo.com/wp-content/uploads/2020/01/motivational-memes-06.jpg?w=800&ssl=1" alt="who knows"/>'
// var img2 = '<img id="theImg2" src="https://sayingimages.com/wp-content/uploads/be-the-best-you-can-be-motivational-memes.jpg" alt="who knows"/>'
// var img3 = '<img id="theImg3" src="https://sayingimages.com/wp-content/uploads/motivational-dear-god-memes.jpg" alt="who knows"/>'
// var imgArray = [img1, img2, img3];
// var count = 0;
// var img1Select = $('#theImg1');
// var img2Select = $('#theImg2');
// var img3Select = $('#theImg3');
// var selectArray = [img1Select, img2Select, img3Select];

// var timer

// // function rotateImages (arr) {
// //     timer = setInterval(function() {
// //         let i = count
// //         selectArray[i].remove()
// //         $('#beauText').remove()
// //         count++
// //         contentParent.prepend(message)
// //         if (count > 2) {
// //             count = 0
// //             }
// //         contentParent.prepend(arr[count]) 
// //         }, 10000)};


// // rotateImages(imgArray)

var img1 = 'https://i0.wp.com/winkgo.com/wp-content/uploads/2020/01/motivational-memes-06.jpg'
var img2 = 'https://sayingimages.com/wp-content/uploads/be-the-best-you-can-be-motivational-memes.jpg'
var img3 = 'https://sayingimages.com/wp-content/uploads/motivational-dear-god-memes.jpg'
var img4 = 'https://sayingimages.com/wp-content/uploads/if-you-could-that-would-be-great-get-back-to-work-meme.png'
var imgArray = [img1, img2, img3, img4];
var count = 1;
var content = $("body");
content.empty();
content.prepend(`<img id="image" src="${img1}" />`);
var img1Select = $('#image');
function rotateImages (arr) {
    setInterval(function() {
        img1Select.prop('src', arr[count]);
        count++
        if (count > 3) {
            count = 0
            }
        }, 10000)};
         


rotateImages(imgArray)

chrome.storage.local.get(sites, function(storage) {
    if ( sites in storage ) {
      callback.call(this, storage[sites].blocked);
    } else {
      storage = {};
      storage[sites] = { sites: [] };
      chrome.storage.local.set( storage, function() {
        callback.call(this, storage[sites].blocked);
      }.bind(this));
    }
    console.log('sites file created, now find it')
})
