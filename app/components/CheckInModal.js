app.component('check-in-modal',{
    props:{

    },

    methods:{

    },

    template:
    /*html*/
    `<div id="modalCheckIn" class="modal fade"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content ">
                <div class="modal-header">
                    <h5 class="modal-title nab-f-2" id="exampleModalLabel">Registrate Gratis</h5>
                    <button type="button" class="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label nav-f">Direccion de correo</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" >
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label nav-f">Nombre de Usuario</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Elthony353">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label nav-f">Contraseña</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <!-- catagorias -->
                        <div class="md-3">
                            <label for="formGroupExampleInput" class="form-label card-t-f">Escoja las categorias que desea ver</label>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label nav-f" for="flexCheckDefault">Deportes</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label nav-f" for="flexCheckDefault">Ciencia y tecnologia</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label nav-f" for="flexCheckDefault">Salud</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label nav-f" for="flexCheckDefault">Entretenimiento</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Registrarse</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>`
});