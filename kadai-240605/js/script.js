/**
 * let ●●● = [];
 * $("●●●")
 * 
$("#●●●").on("click", function () {

});

for (let i = 0; i < ●●●; i++) {

}
 *
 *
 *
 *
 */

let images = JSON.parse(localStorage.getItem('images')) || [];

function updateImageList() {
    $('#image-list').empty();
    images.forEach((image) => {
        const imgElement = $('<img>').attr('src', image.src);
        $('#image-list').append(imgElement);
    });
}

$('upload-form').on('click', function(){

})


$('#upload-form').submit(function(event) {
    event.preventDefault();

    const file = $('#image-input')[0].files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imageData = {
            src: e.target.result,
        };

        images.push(imageData);
        localStorage.setItem('images', JSON.stringify(images));
        updateImageList();
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

$('#delete').on('click', function(){
    localStorage.clear();
    updateImageList();
});

updateImageList();