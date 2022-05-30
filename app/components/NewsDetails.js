app.component('news-details',{
    props:{
        title:{
            type: String,
            default: 'default text'
        },
        category:{
            type: String,
            default: 'default text'
        },
        image:{
            type: String,
            default: '../imgs/default-image.webp'
        },
        date:{
            type: String,
            default: 'default text'
        },
        description:{
            type: String,
            default: 'default text'
        }
    },
    template:
    /*html*/
    `<div id="exampleModal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title nab-f-2">{{ title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row ">
                        <div class="col-lg-6">
                        <img class="img-fluid" v-bind:src="image" :alt="title">
                        </div>
                        <div class="col">
                            <p class="text-uppercase">{{category}}</p>
                            <p class="lead">{{date}}</p>
                            <p>{{description}}</p>                        
                        </div>
                    </div>
                    <!-- cards-relacionadas -->
                    <h6 class="nab-f-2 pt-5">Noticias relacionadas</h6>
                    <div class="pt-5 pb-5 row row-cols-1 row-cols-md-3 g-4">
                        <div class="col-lg-4">
                            <div class="card h-100 w-100 shadow">
                                <img src="./imgs/01.jfif" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-t-f card-title">Card title</h5>
                                    <p class="card-d-f card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bitlonger.</p>
                                </div>                  
                                <div class="ps-3">
                                    <a href="#" class="btn-card-f" data-bs-target="#exampleModal" data-bs-toggle="modal">Mas información</a>
                                    <i class="position-absolute end-0 pe-4 pt-2 far fa-heart"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100 w-100 shadow">
                                <img src="./imgs/01.jfif" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-t-f card-title">Card title</h5>
                                    <p class="card-d-f card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reprehenderit architecto odio libero soluta laudantium, laborum, voluptas delectus maiores tempora praesentium eos quaerat non nam blanditiis minima.
                                    </p>                       
                                </div>
                                <div class="ps-3">
                                    <a href="#" class="btn-card-f">Mas información</a>
                                    <i class="position-absolute end-0 pe-4 pt-2 far fa-heart"></i>
                                </div>                              
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`
});