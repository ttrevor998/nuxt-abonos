<template>
    <section class="container-fluid border border-3" id="contact-form">

        <h2 class="text-center p-5" id="contacto">Contáctanos</h2>

        <div class="container-fluid">
            <form class="pt-0" action="/submit-contact-form" method="POST">
                <div class="row">
                    <div class="col-25">
                        <label for="nombre">Nombre</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="nombre" name="nombre" placeholder="Tu Nombre.." autocomplete="on"
                            required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="email">Email</label>
                    </div>
                    <div class="col-75">
                        <input type="email" id="email" name="email" placeholder="Tu Correo .." autocomplete="on"
                            required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="numero">Número</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="numero" name="numero" autocomplete="on" placeholder="Tu Número .."
                            maxlength="15">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="pais">País</label>
                    </div>
                    <div class="col-75">
                        <select id="pais" name="pais">
                            <option value="Colombia">Colombia</option>
                            <option value="España">España</option>
                            <option value="Usa">USA</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="mensaje">Mensaje</label>
                    </div>
                    <div class="col-75">
                        <textarea id="mensaje" name="mensaje" placeholder="Escríbenos.." style="height:200px"
                            autocomplete="on" required></textarea>
                    </div>
                </div>
                <div id="submit-wrapper" class="row d-flex justify-content-center">
                    <button type="submit" class="btn-xl btn-filled-dark" value="Submit"
                        onclick="mensajeEnviado()">Enviar</button>
                </div>
            </form>
        </div>
    </section>

</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style scoped>
#contact-form {
    border-radius: 20px;
}

form {
    /*background: rgba(140, 202, 47, 0.89);*/
    background: transparent;
    padding: 4vw;
    border-radius: 20px;
}

/* Style inputs, select elements and textareas */
input,
select,
textarea {
    width: 100% !important;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
}

/* Style the label to display next to the inputs */
label {
    padding: 12px 12px 12px 0;
    display: inline-block;
}

/* Style the submit button */
button[type=submit] {
    background: rgb(140, 202, 47) !important;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    width: fit-content;
}

/* Style the container */
.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}

/* Floating column for labels: 25% width */
.col-25 {
    float: left;
    width: 20%;
    margin-top: 6px;
    font-style: bold;
}

/* Floating column for inputs: 75% width */
.col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}

@media only screen and (max-width: 600px) {

    #contact-form{
        border-radius: 0 !important;
        border-left: none !important;
        border-right: none !important;
        padding: 0 !important;
    }
    button[type=submit] {
        margin-top: 5vh;
    }
    .col-25{
        margin-right: 10px;
    }
    input{
        /*width: 50vw !important;*/
    }
    h2{
        padding: 5vh !important;
    }


}
</style>