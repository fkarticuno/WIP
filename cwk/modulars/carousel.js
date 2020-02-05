var carousel, img1, img2, img3, sizing;

img1 = "https://fkarticuno.github.io/CodingPortfolio/Assets/Images/03.png";
img2 = "https://fkarticuno.github.io/CodingPortfolio/Assets/Images/15.png";
img3 = "https://fkarticuno.github.io/CodingPortfolio/Assets/Images/16.png";
sizing = "height='200px'"
carousel=`
<div id="carouselExampleCaptions" class="carousel slide col-md-4" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" >
    <div class="carousel-item active">project1
      <img src="${img1}" class="d-block w-100" alt="..." ${sizing}>
    </div>
    <div class="carousel-item"> project2
      <img src="${img2}" class="d-block w-100" alt="..." ${sizing}>
    </div>
    <div class="carousel-item">project3
      <img src="${img3}" class="d-block w-100" alt="..." ${sizing}>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>`

$('document').ready(function(){
    $('#carousel').html(carousel)

})