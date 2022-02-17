class Menu {
    constructor() {
        let elem_ids = {"#main": 0, "#about": 1, "#education": 2, "#portfolio": 3, '': 0};
        this.active_elem = elem_ids[window.location.hash] // ID активного элемента меню
        this.is_open = false; // 0 - закрыто, 1 - открыто (для мобильных телефонов)
        this.color_scheme = 0; // 0 - светлая тема, 1 - темная тема
    }

    changeMenuState() {
        /*
        * Метод меняющий состояние меню на мобильной версии
        * */
        if (!this.is_open) {
            document.getElementById('nav_bar').classList.remove('close-nav-elem');
            document.getElementById('header').classList.add('open-header');
            document.getElementById('nav_bar').classList.add('open-nav-elem');
        } else {
            document.getElementById('header').classList.remove('close-header');
            document.getElementById('nav_bar').classList.add('close-nav-elem');
            document.getElementById('nav_bar').classList.remove('open-nav-elem')
            setTimeout("document.getElementById('header').classList.add('close-header')", 500);
            setTimeout("document.getElementById('header').classList.remove('open-header')", 500);
            setTimeout("document.getElementById('nav_bar').classList.remove('close-nav-elem')", 1000);
            setTimeout("document.getElementById('header').classList.remove('close-header')", 1500);
        }
        this.is_open = !this.is_open
    }

    changeSection(nav_elem_id) {
        /*
        * Метод меняющий контент на странице
        * @param {number} nav_elem_id ID элемента навигации без nav_elem_
        * */
        this.active_elem = nav_elem_id
        for (let id = 0; id < 4; id++) {
            if (id === nav_elem_id) {
                document.getElementById("nav_elem_" + id).classList.add("active-nav-elem");
                document.getElementById("section_" + id).classList.remove("hide-object");
            } else {
                document.getElementById("nav_elem_" + id).classList.remove("active-nav-elem");
                document.getElementById("section_" + id).classList.add("hide-object");
            }
        }
        this.changeMenuState();
    }

    mouseWheelChangeInformation(){
        /*
        * Метод смены контента по прокрутке
        * */
        if (event.deltaY < 0) {
            this.changeSection((this.active_elem + 3) % 4);
        } else {
            this.changeSection((this.active_elem + 1) % 4);
        }
    }

    changeTheme(){
        /*
        * Метод смены темы на сайте
        * */
        document.body.classList.toggle("dark-theme");
        document.getElementById("moon").classList.toggle("hide-object")
        document.getElementById("sun").classList.toggle("hide-object")
        if (!this.color_scheme) {
            this.color_scheme = "dark";
            document.getElementById("school_logo").src = "images/logo_dark_theme.png"
        } else {
            this.color_scheme = "light";
            document.getElementById("school_logo").src = "images/logo.png"
        }
    }
}

let menu = new Menu();

let theme_button = document.getElementById("theme_button");

// Отслеживание событий на сайте
theme_button.onclick = menu.changeTheme;
window.onwheel = menu.mouseWheelChangeInformation.bind(menu);
menu.changeSection(menu.active_elem)