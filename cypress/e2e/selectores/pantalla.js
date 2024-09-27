class pantalla{
    login = {
        usuario:"[data-test=username]",
        clave:"[data-test=password]",
        btn_ingresar:"[data-test=login-button]",
        select_title: '#root > div > div.login_logo',
        mjs_fail: '#login_button_container > div > form > div.error-message-container.error > h3'
    }
    menu = {
        icono_burger: '#react-burger-menu-btn',
        logout: '[data-test=logout-sidebar-link]'
    }
    productos = {
        
    }
}

module.exports = new pantalla()