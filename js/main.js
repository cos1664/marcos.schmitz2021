var menuEstOuvert, domMenuHamburger, domMenuPrincipal;

menuEstOuvert = false;

domMenuPrincipal = document.getElementById("menuPrincipal");
domMenuHamburger = document.getElementById("menuHamburger");

if(domMenuHamburger != null && domMenuPrincipal !=null)
{
    domMenuHamburger.addEventListener('click', function(event) {
        if(menuEstOuvert == true)
        {
            menuEstOuvert = false;
            domMenuPrincipal.className = 'l-main-menu';
        }
        else
        {
            menuEstOuvert = true;
            domMenuPrincipal.className = 'l-main-menu is-show';
        }
        e.preventDefault( );
    });
}

