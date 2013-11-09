function validar_login(form){
    if (!form.l_usuario.length)
    {   var er="falta usuarop";
        Lungo.Notification.error(
            "Error",                      //Title
            er,     //Description
            "cancel",                     //Icon
            3                           //Time on screen
        );
    }
}
