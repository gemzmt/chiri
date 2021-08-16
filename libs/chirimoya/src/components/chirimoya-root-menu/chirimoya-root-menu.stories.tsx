import React from 'react';
import './chirimoya-root-menu.stories.scss';

export default {
  title: 'Chirimoya/chirimoya-root-menu',
};

window.onload = function() {
  const menu: any = document.querySelector('chirimoya-root-menu');
  menu && menu.addEventListener('closeMenu', (e: CustomEvent) => { console.log(e.detail) });
}

const openMenu = () => {
  let rootMenu: any = document.querySelector('chirimoya-root-menu');
  rootMenu.setAttribute('isOpen', 'true');
}

const addAccountSlot = () => {
  let rootMenu: any = document.querySelector('.root-menu-with-out-account chirimoya-root-menu');
  const userInfoSlot = document.createElement('div');
  const chiriUserInfo = document.createElement('chirimoya-user-info');
  const img = document.createElement('img');
  const name = document.createElement('p');
  const email = document.createElement('p');
  img.src = 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png';
  img.slot = 'user-avatar';
  name.innerHTML = 'Nombre';
  name.slot = 'user-name';
  email.innerHTML = 'Email';
  email.slot = 'user-email';
  userInfoSlot.slot = 'menu-user-info';
  chiriUserInfo.prepend(img);
  chiriUserInfo.append(name);
  chiriUserInfo.append(email);
  userInfoSlot.prepend(chiriUserInfo);
  rootMenu.prepend(userInfoSlot);
}

const removeSelected = () => {
  const buttonsMenu = document.querySelectorAll('.menu-item');

  buttonsMenu.forEach((button: Element) => {
    button.setAttribute('isSelected', 'false');
    button.setAttribute('fontColor', 'font-dark');
    button.classList.remove('--selected');
  })
}

const clickLinkMenu = (e: Event) => {
  const btn = (e.currentTarget as Element);
  removeSelected();

  btn.classList.add('--selected');
  btn.setAttribute('isSelected', 'true');
  btn.setAttribute('fontColor', 'font-white');
}

export const RootMenu = () => {
  return (
    <div className="storie-with-css">
      <chirimoya-button
        onClick={() => openMenu()}
        style={{ marginBottom: '10px' }}
      >
        <span>
          <primaries-icon icon="Menu"/>
        </span>
      </chirimoya-button>
      <chirimoya-root-menu
        isOpen
      >
        <primaries-icon slot="menu-icon" icon="Coffee" class="menu-icon" size="50"/>

        <p slot="menu-title">Chiri</p>

        <chirimoya-navigation-item
          variant="label"
          isSelected
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item --selected"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 1</span>
        </chirimoya-navigation-item>
        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 2</span>
        </chirimoya-navigation-item>
        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 3</span>
        </chirimoya-navigation-item>
        
        <div slot="menu-user-info">
          <chirimoya-user-info>
            <img slot="user-avatar" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"/>
            <p slot="user-name">Name</p>
            <p slot="user-email">Email</p>
          </chirimoya-user-info>
        </div>

        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          slot="menu-user-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading"/>
          <span>User link 1</span>
        </chirimoya-navigation-item>

        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          slot="menu-user-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading"/>
          <span>User link 2</span>
        </chirimoya-navigation-item>
        
        <nav slot="menu-footer-nav">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </nav>
        
        <p slot="menu-footer-copyright">2021 Cornershop by Uber</p>
      </chirimoya-root-menu>
    </div>
  );
};

export const RootMenuWithOutIcon = () => {
  return (
    <div className="storie-with-css">
      <chirimoya-button
        onClick={() => openMenu()}
        style={{ marginBottom: '10px' }}
      >
        <primaries-icon icon="Menu"/>
      </chirimoya-button>
      <chirimoya-root-menu
        isOpen
      >
        <p slot="menu-title">Chiri</p>

        <chirimoya-navigation-item
          variant="label"
          isSelected
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item --selected"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 1</span>
        </chirimoya-navigation-item>
        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 2</span>
        </chirimoya-navigation-item>
        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 3</span>
        </chirimoya-navigation-item>

        <div slot="menu-user-info">
          <chirimoya-user-info>
            <img slot="user-avatar" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"/>
            <p slot="user-name">Name</p>
            <p slot="user-email">Email</p>
          </chirimoya-user-info>
        </div>

        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          slot="menu-user-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading"/>
          <span>User link 1</span>
        </chirimoya-navigation-item>

        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          slot="menu-user-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading"/>
          <span>User link 2</span>
        </chirimoya-navigation-item>

        <nav slot="menu-footer-nav">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </nav>

        <p slot="menu-footer-copyright">2021 Cornershop by Uber</p>
      </chirimoya-root-menu>
    </div>
  );
};

export const RootMenuWithOutAccount = () => {
  return (
    <div className="storie-with-css root-menu-with-out-account">
      <chirimoya-button
        onClick={() => openMenu()}
        style={{ marginBottom: '10px' }}
      >
        <span>
          <primaries-icon icon="Menu"/>
        </span>
      </chirimoya-button>
      <chirimoya-button
        onClick={addAccountSlot}
        style={{ marginLeft: '400px' }}
      >
        Add Account
      </chirimoya-button>
      <chirimoya-root-menu
        isOpen
      >
        <primaries-icon slot="menu-icon" icon="Coffee" class="menu-icon" size="50"/>

        <p slot="menu-title">Chiri</p>

        <chirimoya-navigation-item
          variant="label"
          isSelected
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item --selected"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 1</span>
        </chirimoya-navigation-item>
        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 2</span>
        </chirimoya-navigation-item>
        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 3</span>
        </chirimoya-navigation-item>

        <nav slot="menu-footer-nav">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </nav>
        
        <p slot="menu-footer-copyright">2021 Cornershop by Uber</p>
      </chirimoya-root-menu>
    </div>
  );
};

export const RootMenuWithUserInfoOnly = () => {
  return (
    <div className="storie-with-css">
      <chirimoya-button
        onClick={() => openMenu()}
        style={{ marginBottom: '10px' }}
      >
        <span>
          <primaries-icon icon="Menu"/>
        </span>
      </chirimoya-button>
      <chirimoya-root-menu
        isOpen
      >
        <primaries-icon slot="menu-icon" icon="Coffee" class="menu-icon" size="50"/>

        <p slot="menu-title">Chiri</p>

        <chirimoya-navigation-item
          variant="label"
          isSelected
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item --selected"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 1</span>
        </chirimoya-navigation-item>
        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 2</span>
        </chirimoya-navigation-item>
        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 3</span>
        </chirimoya-navigation-item>

        <div slot="menu-user-info">
          <chirimoya-user-info>
            <img slot="user-avatar" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"/>
            <p slot="user-name">Name</p>
            <p slot="user-email">Email</p>
          </chirimoya-user-info>
        </div>
        
        <nav slot="menu-footer-nav">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </nav>
        
        <p slot="menu-footer-copyright">2021 Cornershop by Uber</p>
      </chirimoya-root-menu>
    </div>
  );
};

export const RootMenuWithUserNavOnly = () => {
  return (
    <div className="storie-with-css">
      <chirimoya-button
        onClick={() => openMenu()}
        style={{ marginBottom: '10px' }}
      >
        <span>
          <primaries-icon icon="Menu"/>
        </span>
      </chirimoya-button>
      <chirimoya-root-menu
        isOpen
      >
        <primaries-icon slot="menu-icon" icon="Coffee" class="menu-icon" size="50"/>

        <p slot="menu-title">Chiri</p>

        <chirimoya-navigation-item
          variant="label"
          isSelected
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item --selected"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 1</span>
        </chirimoya-navigation-item>
        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 2</span>
        </chirimoya-navigation-item>
        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 3</span>
        </chirimoya-navigation-item>

        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          slot="menu-user-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading"/>
          <span>User link 1</span>
        </chirimoya-navigation-item>

        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          slot="menu-user-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading"/>
          <span>User link 2</span>
        </chirimoya-navigation-item>
        
        <nav slot="menu-footer-nav">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </nav>
        
        <p slot="menu-footer-copyright">2021 Cornershop by Uber</p>
      </chirimoya-root-menu>
    </div>
  );
};

export const RootMenuWithFooterCopyrightOnly = () => {
  return (
    <div className="storie-with-css">
      <chirimoya-button
        onClick={() => openMenu()}
        style={{ marginBottom: '10px' }}
      >
        <span>
          <primaries-icon icon="Menu"/>
        </span>
      </chirimoya-button>
      <chirimoya-root-menu
        isOpen
      >
        <primaries-icon slot="menu-icon" icon="Coffee" class="menu-icon" size="50"/>

        <p slot="menu-title">Chiri</p>

        <chirimoya-navigation-item
          variant="label"
          isSelected
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item --selected"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 1</span>
        </chirimoya-navigation-item>
        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 2</span>
        </chirimoya-navigation-item>
        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 3</span>
        </chirimoya-navigation-item>

        <div slot="menu-user-info">
          <chirimoya-user-info>
            <img slot="user-avatar" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"/>
            <p slot="user-name">Name</p>
            <p slot="user-email">Email</p>
          </chirimoya-user-info>
        </div>

        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          slot="menu-user-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading"/>
          <span>User link 1</span>
        </chirimoya-navigation-item>

        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          slot="menu-user-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading"/>
          <span>User link 2</span>
        </chirimoya-navigation-item>
        
        <p slot="menu-footer-copyright">2021 Cornershop by Uber</p>
      </chirimoya-root-menu>
    </div>
  );
};

export const RootMenuWithOutAccountAndFooter = () => {
  return (
    <div className="storie-with-css">
      <chirimoya-button
        onClick={() => openMenu()}
        style={{ marginBottom: '10px' }}
      >
        <span>
          <primaries-icon icon="Menu"/>
        </span>
      </chirimoya-button>
      <chirimoya-root-menu
        isOpen
      >
        <primaries-icon slot="menu-icon" icon="Coffee" class="menu-icon" size="50"/>

        <p slot="menu-title">Chiri</p>

        <chirimoya-navigation-item
          variant="label"
          isSelected
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item --selected"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 1</span>
        </chirimoya-navigation-item>
        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 2</span>
        </chirimoya-navigation-item>
        <chirimoya-navigation-item
          variant="label"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <primaries-icon icon="PaperTowels" slot="leading" class="menu-item-icon"/>
          <span>Menu 3</span>
        </chirimoya-navigation-item>
      </chirimoya-root-menu>
    </div>
  );
};
