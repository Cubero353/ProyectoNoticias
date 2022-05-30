app.component('news-footer',{
    props:{
        name:{
            type: String,
            default: 'default text'
        },
    },

    methods:{

    },
    template:
    /*html*/
    `<footer class="text-center text-white" style="background-color: #801414">
        <ul class="nav justify-content-center pt-4">
            <li class="nav-item">
                <a class="card-d-f nav-link text-white" aria-current="page" href="#">Sobre Nosotros</a>
            </li>
            <li class="nav-item">
                <a class="card-d-f nav-link text-white" href="#">Trabajos</a>
            </li>
            <li class="nav-item">
                <a class="card-d-f nav-link text-white" href="#">Desarrolladores</a>
            </li>
            <li class="nav-item">
                <a class="card-d-f nav-link text-white" href="#">Terminos de servicio</a>
            </li>
            <li class="nav-item">
                <a class="card-d-f nav-link text-white" href="#">Soporte</a>
            </li>
        </ul>

        <!-- Line -->
        <div class="container line-footer"></div>

        <div class="pt-4">
            <section class="  mb-2">
                <!-- Facebook -->
                <i class="me-4 ms-4 fab fa-facebook fa-xl"></i>
                <!-- Instagram -->
                <i class="ms-4 me-4 fab fa-instagram"></i>
                <!-- Github -->
                <i class="ms-4 me-4 fab fa-github"></i>
            </section>
        </div>
        <div class="text-center text-dark pt-3 pb-4"> 
            <a class="card-d-f nav-link text-white" href="#">© 2020 Copyright:</a>
        </div>
    </footer>`
});