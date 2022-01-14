// SIDEBAR 

const menuItems = document.querySelectorAll(".menu-item");
// console.log(menuItems);


// Messages variables
const messagesNotifications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

// Fonts
const fontSize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

// Color
const colorPalette = document.querySelectorAll('.choose-color span');

// Background
const backgroundColor = document.querySelectorAll('.choose-bg div');

//REMOVE ACTIVE CLASS FROM ALL THE OTHERS
const changeActiveItems = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item => {
        item.addEventListener("click", () => {
            changeActiveItems();
            item.classList.add("active");
            if(item.id != 'notifications'){
                document.querySelector('.notifications-popup').
                style.display = 'none';
            }
            else{
                document.querySelector('.notifications-popup').
                style.display = 'block';
                document.querySelector('#notifications .notifications-count').
                style.display = 'none';
            }
        });
    })

// SEARCH CHAT
searchMessage = () => {
    var val = messageSearch.value.toLowerCase();
    // console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('.message-body h5').textContent.toLowerCase();
        // console.log(name.indexOf(val));
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage);

// MESSAGES
messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotifications.querySelector('.notifications-count').
    style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// THEME CUSTOMIZATIONS
openThemeModal = () => {
    themeModal.style.display = 'grid';
    themeModal.querySelector('.card').style.display = 'grid';
}

removeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

theme.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', removeThemeModal)

// THEME CUSTOMIZATIONS FONTS
removeActiveFont = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}

// console.log(fontSize);
fontSize.forEach(size => {
    let fontsize;
    let selectedSize = 'font-size-2';
    document.querySelector('html').style.fontSize = '0.8rem';
    size.addEventListener('click', () => {
        selectedSize = size.className;
        // console.log(fontsize);
        removeActiveFont();
        size.classList.add('active');

        if(selectedSize == 'font-size-1'){
            fontsize = '0.5rem';
            // root.style.setProperty('--sticky-top-left', '5.4rem');
            // root.style.setProperty('--sticky-top-right', '5.4rem');
            root.style.setProperty('--left-percent', '90%');
        }
        else if(selectedSize == 'font-size-2'){
            fontsize = '0.65rem';
            // root.style.setProperty('--sticky-top-left', '5.4rem');
            // root.style.setProperty('--sticky-top-right', '-20rem');
            root.style.setProperty('--left-percent', '86%');
        }
        else if(selectedSize == 'font-size-3'){
            fontsize = '0.8rem';
            // root.style.setProperty('--sticky-top-left', '5.4rem');
            // root.style.setProperty('--sticky-top-right', '-22rem');
            root.style.setProperty('--left-percent', '84%');
        }
        else if(selectedSize == 'font-size-4'){
            fontsize = '0.9rem';
            root.style.setProperty('--sticky-top-left', '0');
            root.style.setProperty('--sticky-top-right', '-25rem');
            root.style.setProperty('--mobile-left', '4rem');
            root.style.setProperty('--left-percent', '80%');
        }
        else if(selectedSize == 'font-size-5'){
            fontsize = '1rem';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-33rem'); 
            root.style.setProperty('--mobile-left', '4rem');
            root.style.setProperty('--left-percent', '78%');
        }
        document.querySelector('html').style.fontSize = fontsize;
    })
})

// THEME CUSTOMIZATIONS COLOR
removeColor = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        removeColor();
        color.classList.add('active');
        if(color.classList.contains('color-1')){
            root.style.setProperty('--color-primary', 'hsl(252, 75%, 60%)');
        }
        else if(color.classList.contains('color-2')){
            root.style.setProperty('--color-primary', 'hsl(52, 75%, 60%)');
        }
        else if(color.classList.contains('color-3')){
            root.style.setProperty('--color-primary', 'hsl(0, 75%, 60%)');
        }
        else if(color.classList.contains('color-4')){
            root.style.setProperty('--color-primary', 'hsl(152, 75%, 60%)');
        }
        else if(color.classList.contains('color-5')){
            root.style.setProperty('--color-primary', 'hsl(202, 75%, 60%)');
        }
    })
})

// THEME CUSTOMIZATIONS BACKGROUND
removeBackground = () => {
    backgroundColor.forEach(background => {
        background.classList.remove('active');
    })
}

backgroundColor.forEach(background => {
    background.addEventListener('click', () => {
    let lightColorLightness;
    let darkColorLightness;
    let whiteColorLightness;

    removeBackground();
    background.classList.add('active');
    
    if(background.classList.contains('bg-1')){
        darkColorLightness = '17%';
        whiteColorLightness = '100%';
        lightColorLightness = '95%';
    }
    else if(background.classList.contains('bg-2')){
        darkColorLightness = '95%';
        whiteColorLightness = '20%';
        lightColorLightness = '15%';    
    }
    else if(background.classList.contains('bg-3')){
        darkColorLightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';    
    }

    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    })
})