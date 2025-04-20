var project = {
    "url": "http://127.0.0.1:8000/api/project",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(project).done(function (response) {
    // console.log(response.project);
    $.each(response.project, function (key, value) {
        var settings = {
            "url": "http://127.0.0.1:8000/api/project/"+value.slug,
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            $.each(response.image, function (indexInArray, valueOfElement) { 
                 $("#image"+valueOfElement.project_id).append(`
                 <div class="carousel-item active">
                    <img src="`+ valueOfElement.url_image +`" class="d-block w-100">
                 </div>
                 `);
            });
            $('#project').append(`
            <div class="card border border-2 mb-5" style="border-color: #009e66 !important; background-color: #202020" ;">
                <div id="preview`+ value.id +`" class="carousel slide w-100" data-bs-ride="true" style="overflow: hidden;">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#preview`+ value.id +`" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#preview`+ value.id +`" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#preview`+ value.id +`" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#preview`+ value.id +`" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#preview`+ value.id +`" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#preview`+ value.id +`" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner" id="image`+ value.id +`">
                    <div class="carousel-item active">
                    <img src="https://munn.my.id/asset/img/anime-list/animelist.png" class="d-block w-100">
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#preview`+ value.id +`" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#preview`+ value.id +`" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                <div class="card-body border-top border-2 d-flex justify-content-between" style="border-color: #009e66 !important;">
                <div class="d-flex align-items-center">
                    <img src="`+ value.url_icon +`" width="30px" class="rounded" style="box-shadow: 0px 0px 10px #fff">
                    <a class="fs-5 ms-2 palet-abu genera-semi-bold pointer">`+ value.name_project +`</a>
                </div>
                <div class="d-flex align-items-center">
                    <a href="`+ value.url_project +`" class="btn btn-sm bg-main text-light small"><i class="bi bi-play-fill"></i> Demo</a>
                    <a href="`+ value.url_code +`" class="btn btn-sm bg-main text-light ms-3 small"><i class="bi bi-github"></i> Github</a>
                </div>
                </div>
            </div>
            `);
          });


    });
});