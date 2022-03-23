// SideBar
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// Remoce active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach(el => {
    el.classList.remove('active');
  })
}

menuItems.forEach(el => {
  el.addEventListener('click', () => {
    changeActiveItem();
    el.classList.add('active');
    if (el.id != 'notifications') {
      document.querySelector('.notifications-popup').style.display = 'none';
    } else {
      document.querySelector('.notifications-popup').style.display = 'block';
      document.querySelector('#notifications .notification-count').style.display = 'none';
    }
  })
})

/* ============ MESSAGES =========== */
// searches chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = 'flex';
    } else {
      chat.style.display = 'none';
    }
  })
}


messageSearch.addEventListener('keyup', searchMessage)
// search chat

// hightlight messages card when menu item is clicked
messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messagesNotification.querySelector('.notification-count').style.display = 'none';
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000);
})

// =====
const btn = document.querySelector('.create label');
const MessageModul = document.querySelector('.right');



btn.addEventListener('click', function () {
  MessageModul.style =
    `
      display:flex;
      opacity:1;
      z-index: 999;
      left:5%;
      `;
})
// close modal
const closeM = (e) => {
  if (e.target.classList.contains('right')) {
    MessageModul.style.display = 'none';
  }
}
MessageModul.addEventListener('click', closeM)




// =====================================



// THEME CHANGE
const theme = document.querySelector('#theme'),
  themeModal = document.querySelector('.customize-theme'),
  fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');



// opens modal
const openTheModal = () => {
  themeModal.style.display = 'grid';
};


// close modal
const closeTheModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
}
themeModal.addEventListener('click', closeTheModal)
theme.addEventListener('click', openTheModal)




// Font

// remove size class from spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active')
  })
};
fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    removeSizeSelector();
    size.classList.toggle('active');
    let fontSize;

    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '5.4rem');
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '-7rem');
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
      root.style.setProperty('--sticky-top-left', '-2rem');
      root.style.setProperty('--sticky-top-right', '-17rem');
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px';
      root.style.setProperty('--sticky-top-left', '5rem');
      root.style.setProperty('--sticky-top-right', '25rem');
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px';
      root.style.setProperty('--sticky-top-left', '-12rem');
      root.style.setProperty('--sticky-top-right', '-35rem');
    }
    // change font size of root html element
    document.querySelector('html').style.fontSize = fontSize;
  })

});


const colorPalette = document.querySelectorAll('.choose-color span')
//change primary colors
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primary;
    // remove active class from colors
    changeActiveColorClass();
    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    } else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    } else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    } else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    } else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }
    color.classList.add('active');
    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})

// remove active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
}


// BACKGROUND
const bg1 = document.querySelector('.bg-1'),
  bg2 = document.querySelector('.bg-2'),
  bg3 = document.querySelector('.bg-3');


// theme BACKGROUND values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
// changes background values
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}


bg1.addEventListener('click', () => {
  // add active class
  bg1.classList.add('active');
  // remove active class from the others
  bg2.classList.remove('active');
  bg3.classList.remove('active');
  window.location.reload();
});
bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';
  // add active class
  bg2.classList.add('active');
  // remove active class from the others
  bg1.classList.remove('active');
  bg3.classList.remove('active');
  changeBG();
});
bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';
  // add active class
  bg3.classList.add('active');
  // remove active class from the others
  bg1.classList.remove('active');
  bg2.classList.remove('active');
  changeBG();
});

// sidebar 
const postBtn = document.querySelector('.postbtn'),
  sideBar = document.querySelector('.left');

postBtn.addEventListener('click', (e) => {
  sideBar.style.transform = `translateX(0%)`
  if (e.target === e.currentTarget) {
    // sideBar.style.transform = `translateX(100%)`
  }
})




const category = document.querySelectorAll('.category h6');
category.forEach(el => {
  el.addEventListener('click', () => {
    changeActiveClass();
    el.classList.add('active')
  })
})

const changeActiveClass = () => {
  category.forEach(el => {
    el.classList.remove('active');
  })
}


// END 