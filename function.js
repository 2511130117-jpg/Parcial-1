function enviarCorreo(event) {
    emailjs.init("SEfB_wFRmZTMC5RoL");
    // Evita que la página se recargue al enviar el formulario
    event.preventDefault();

    const parametros = {
        to_name: document.getElementById("nombre").value,
        to_email: document.getElementById("email").value,
        message: document.getElementById("mensaje").value
    };


    emailjs.send("service_87nu9nl", "template_abqtvhq", parametros)
        .then(function(response) {
            alert("¡Correo enviado con éxito!");
            // Opcional: Limpiar el formulario tras el envío
            document.querySelector("form").reset();
        }, function(error) {
            alert("Error al enviar el correo: " + JSON.stringify(error));
        });
}