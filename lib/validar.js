function validar_login(form){
    var error="";
    if(!form.l_usuario.value.length || !form.l_password.value.length)
        error+="El usuaio y la contrase&ntilde;a no pueden estar en blanco";
    if(error.length)  
        Lungo.Notification.error(
            "Error",                      //Title
            error,                        //Description
            "cancel",                     //Icon
            0                           //Time on screen
        );
    else
        Lungo.Router.section("main_section");
}
function validar_registro(form){
    var error="";
    if(!form.r_usuario.value.length)
        error+="El usuaio esta en blanco<br/>";
    if(!form.r_password.value.length)
        error+="La contrase&ntilde;a esta en blanco<br/>";
    if(form.rr_password.value!==form.r_password.value)
        error+="Las contrse&ntilde;as no coinciden<br/>";
    if(!form.r_correo.value.length)
        error+="El correo esta en blanco<br/>";
    else{
        expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!expr.test(form.r_correo.value))
            error+="El correo no es v&aacute;lido<br/>";
    }
    if(error.length)  
        Lungo.Notification.error(
            "Error",                      //Title
            error,                        //Description
            "cancel",                     //Icon
            0                           //Time on screen
        );
    else
        Lungo.Notification.success(
            "Registrado con exito",                      //Title
            form.r_usuario.value+", bienvenid@ a QUINIELATOR",                        //Description
            "check",                     //Icon
            0                           //Time on screen
        );
}