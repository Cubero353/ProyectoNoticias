app.component('login-modal',{
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
    `<div id="modalInicioSesion" class="modal fade"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content ">
                <div class="modal-header">
                    <h5 class="modal-title nab-f-2" id="exampleModalLabel">Inicio sesion</h5>
                    <button type="button" class="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-outline mb-4">
                            <input type="email" id="form1Example1" class="form-control" />
                            <label class="form-label nav-f" for="form1Example1">Correo Electronico</label>
                        </div>
                    
                        <div class="form-outline mb-4">
                            <input type="password" id="form1Example2" class="form-control" />
                            <label class="form-label nav-f" for="form1Example2">Contraseña</label>
                        </div>
                    
                        <div class="row mb-4">
                            <div class="col d-flex justify-content-center">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                    <label class="form-check-label nav-f" for="form1Example3"> Remember me </label>
                                </div>
                            </div>
                    
                            <div class="col">
                                <a class="nav-f" href="#!">Olvido su contraseña</a>
                            </div>
                        </div>
                
                        <button type="submit" class="btn btn-primary btn-block">Iniciar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>`
});