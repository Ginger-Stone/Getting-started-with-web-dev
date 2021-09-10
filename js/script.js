function darkModeToggle() {
    let body = document.getElementsByTagName('body')
    let def_classes = document.getElementsByClassName('default')
    let other_classes = document.getElementsByClassName('other')
    let mode_switch = document.getElementById('mode-switch')
    let class_list = body[0].classList
    if (class_list.contains('dark')) {
        class_list.remove('dark')
        for (let i = 0; i < def_classes.length; i++) {
            def_classes[i].classList.remove('hide')
            other_classes[i].classList.add('hide')
        }
        mode_switch.classList.add('fa-moon')
        mode_switch.classList.remove('fa-sun')
    } else {
        class_list.add('dark')
        for (let i = 0; i < def_classes.length; i++) {
            def_classes[i].classList.add('hide')
            other_classes[i].classList.remove('hide')
        }
        mode_switch.classList.add('fa-sun')
        mode_switch.classList.remove('fa-moon')
    }
}

function arrowDownToggle() {
    let down_arrow = document.getElementById("down-arrow")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 50) {
        down_arrow.classList.add("pause");
    } else {
        down_arrow.classList.remove("pause");
    }
}

async function productSelector() {
    let all = document.getElementById('all-img')
    let current = document.getElementById('current-img')

    current.appendChild(all.firstElementChild)
    setTimeout(function () {
        all.appendChild(current.firstElementChild)
        productSelector()
    }, 5000);
}



productSelector()