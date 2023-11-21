


// alert('hello world')
const updateBannerImage = () =>{
    const bannger_image = document.querySelector('.banner_image img');
    const banner_image_section = document.querySelector('.banner_image')
    console.log(bannger_image)

    if(window.innerWidth <= 800){
        bannger_image.src = 'images/image-hero-mobile.png';
        bannger_image.classList.remove('h-5');
        bannger_image.classList.add('h-50');
        banner_image_section.classList.add('order-first');
    }
    else{
        bannger_image.src = 'images/image-hero-desktop.png';
        bannger_image.classList.add('h-5');
        bannger_image.classList.remove('h-50');
        banner_image_section.classList.remove('order-first');
    }
}

const handBurgerMenuHandler = () =>{
    const handBurgerBtn = document.querySelector('.handBurger');
    handBurgerBtn.addEventListener('click',() =>{
        const mobileNavbar = document.querySelector('.mobile_navbar');
        mobileNavbar.style.display = 'flex';
    });

    const closeNavbarBtn = document.querySelector('.closeBtn');

    closeNavbarBtn.addEventListener('click',() =>{
        const mobileNavbar = document.querySelector('.mobile_navbar');
        mobileNavbar.style.display = 'none';
    });

}

const desktopDropdownHandler = () => {
    const desktopDropdownList = document.querySelectorAll('.dropdown_wrapper');
    desktopDropdownList.forEach((element) =>{
        element.addEventListener('mouseover', () =>{
            const arrowElement = element.querySelector('.deskArrow');
            arrowElement.src = 'images/icon-arrow-up.svg'
        });

        element.addEventListener('mouseout', () =>{
            const arrowElement = element.querySelector('.deskArrow');
            arrowElement.src = 'images/icon-arrow-down.svg'
        });
    })
}

const mobileDropdownHandler = () =>{
    const dropDownMenuList = document.querySelectorAll('.mobileDropdown')
    dropDownMenuList[0].addEventListener('click',() =>{
        const featureMenu = document.querySelector('.FeaturesMobileDropdownSubMenu');
        if(featureMenu.style.display === 'flex' || featureMenu.style.display === ''){
            featureMenu.style.display = 'none';
            document.querySelector('.arrow').src = 'images/icon-arrow-down.svg';
        }
        else{
            featureMenu.style.display = 'flex';
            console.log(document.querySelector('.arrow'))
            document.querySelector('.arrow').src = 'images/icon-arrow-up.svg';
        }
    });

    dropDownMenuList[1].addEventListener('click',() =>{
        const companyMenu = document.querySelector('.CompanyMobileDropdownSubMenu');

        if(companyMenu.style.display === 'flex' || companyMenu.style.display === ''){
            companyMenu.style.display = 'none';
            document.querySelector('.arrow1').src = 'images/icon-arrow-down.svg';
        }
        else{
            companyMenu.style.display = 'flex';
            document.querySelector('.arrow1').src = 'images/icon-arrow-up.svg';
        }
    });
}
updateBannerImage();
handBurgerMenuHandler();
mobileDropdownHandler();
desktopDropdownHandler();