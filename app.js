const images=document.querySelectorAll(".image");

images.forEach(image=>
{
    
    image.addEventListener("click",() =>evenementClick(image));
})

function evenementClick(img)
{
    enleverClasseActive();
    img.classList.add('active');

}

function enleverClasseActive(){
    images.forEach(image=>{
        image.classList.remove('active');
    })
}