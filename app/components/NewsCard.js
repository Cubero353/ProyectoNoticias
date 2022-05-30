app.component('news-card',{
    props:{
        title:{
            type: String,
            default: 'default text'
        },
        subtitle:{
            type: String,
            default: 'default text'
        },
        image:{
            type: String,
            default: '../imgs/default-image.webp'
        },
        index:{
            type: Number
        }
    },

    methods:{
        clickNewsDetails(index){
            this.$emit('clicknewsdetail', index);
        }
    },

    template:
    /*html*/
    `<div class="col-lg-4">
        <div class="card h-100 w-100 shadow">
        <img class="card-img-top" :src="image" :alt="title">
            <div class="card-body">
                <h5 class="card-t-f card-title">{{title}}</h5>
                <p class="card-d-f card-text">{{subtitle}}</p>
            </div>                  
            <div class="ps-3">
                <a href="#" class="btn-card-f" v-on:click="clickNewsDetails(index)" data-bs-target="#exampleModal" data-bs-toggle="modal">Mas información</a>
                <i class="position-absolute end-0 pe-4 pt-2 far fa-heart"></i>
            </div>
        </div>
    </div>`
});