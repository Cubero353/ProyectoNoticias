app.component('news-category-nav',{
    props:{
        name:{
            type: String,
            default: 'default text'
        },
    },

    methods:{
        clickNewsCategory(category){
            this.$emit('clicknewscategory', category);
        }
    },
    template:
    /*html*/
    `<ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link text-dark nav-f" aria-current="page" v-on:click="clickNewsCategory(name)">{{name}}</a>
        </li>
    </ul>`
});