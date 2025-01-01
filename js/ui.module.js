export class Ui {
    constructor(){
        
      
    }
   display(data) {
        let box = '';
        for (let i = 0; i < data.length; i++) {
            let title = data[i].title;
            let img = data[i].thumbnail;
            let description = data[i].short_description;
            let platform = data[i].platform;
            let genre = data[i].genre;
            let id = data[i].id
    
    
            box += `
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="inner rounded-3">
                        <div class="card m-2" data-id="${id}">
                            <div class="game-img">
                                <img src='${img}' class="w-100 rounded-top-2" alt="img-game">
                            </div>
                            <div class="content py-3">
                                <div class="top-content d-flex justify-content-between">
                                    <h3>${title}</h3>
                                    <span class="rounded-3 p-2 text-center">Free</span>
                                </div>
                                <p class='pt-2'>${description}</p>
                            </div>
                        </div>
                        <div class="bottom-content d-flex justify-content-between py-3 px-2 rounded-bottom-3">
                            <span class="badge badge-color">${genre}</span>
                            <span class="badge badge-color"> ${platform}</span>
                        </div>
                    </div>
                </div>`;
        }
        document.querySelector('.row').innerHTML = box;
        
    
    }

    displaydetails(result){
      

       const detailsbox =`          
              <div class="col-md-4 col-12">
                  <div class="image">
                      <img src="${result.thumbnail}" alt="" class="img-fluid">
                  </div>
              </div>
             
              <div class="col-md-8 col-12">
                  <div class="description">
                      <h3>Title: ${result.title}</h3>
                      <p>Category: <span class="badge text-bg-info">${result.genre}</span></p>
                      <p>Platform: <span class="badge text-bg-info">${result.platform}</span></p>
                      <p>Status: <span class="badge text-bg-info">${result.status}</span></p>
                      <p class="small">${result.description}</p>
                      <a href="${result.game_url}" class="btn btn-outline-warning" target="_blank">Show Game</a>
                  </div>
              </div>`
              document.querySelector('.details .row').innerHTML=detailsbox
    }
}