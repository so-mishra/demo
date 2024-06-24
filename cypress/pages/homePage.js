

import { homePageParameters } from "../fixtures/homePageData";

class HomePage {

    constructor() {
        this.locators = {
            saleImage: "[class='img-responsive']",
            logoImage: "[class*='logo']",
            contactPhone: ".shop-phone",
            contactUs: '[title="Contact us"]',
            cartOption: '[title="View my shopping cart"]',
            signInButton: 'a[title="Log in to your customer account"]',
            authenticationText: '[class="page-heading"]',
            emailAddress: '#email_create',
            createAnAccountLableValue: '[class="btn btn-default button button-medium exclusive"]',
            PersonalInformationText: ".page-subheading",
            title: ".clearfix",
            titleRadioButton: "[for='id_gender1']",
            firstNameTextBox: "#customer_firstname",
            lastNameTextBox: "#customer_lastname",
            passwordTextBox: "#passwd",
            daysDropDown: "#days",
            monthDropDown: "#months",
            yearsDropDown: "#years",
            newsLetterButton: "[class='checker']",
            registerButton: "#submitAccount",
            myAccountText: "h1[class='page-heading']",
            addAddress: "[title='Add my first address']",
            yourAddress: ".info-title",
            addressTextBox: "#address1",
            cityTextBox: "#address1",
            womenLink: "a[title='Women']",
            categorySelect: "[for='layered_category_4']",
            dressesLink: "[class='sf-with-ul']",
            menuOptionOnHomePage:".sf-menu > :nth-child(position) > a",
            menuListBar:".sf-menu",
            subMenuOptions:'[class="submenu-container clearfix first-in-line-xs"]',
            searchBox:'#search_query_top',
            recommendationOption:'[class="ac_even"]',
            seacrhButton:'#searchbox > .btn'
        };
    }
    // Method to navigate to the application
    visit() {
        cy.visit(homePageParameters.applicationUrl);
        //Check application url contains correct address
        cy.url().should('contains', homePageParameters.urlTextValue);
    }
    // Method to verify the home page elements
    verifySerachResultBySnapshot() {
        cy.get(this.locators.searchBox).clear().type(homePageParameters.itemSearch.shirt);
        cy.get(this.locators.seacrhButton).click();
        cy.wait(1500);
        cy.matchImageSnapshot();
    }

    // Methods to verify links on home page
    verifySubmenuOnHoveringMouse(option) {
        cy.get(this.locators.menuListBar).within(() => {
            cy.contains(option).realHover();
        });
        cy.get(this.locators.subMenuOptions).first().within(() => {
           for(var i = 0; i <= 1; i++){
            cy.contains(homePageParameters.womenSubMenuOption[i]);
           }
        });
    }

    // Method to verify menu option on home page
    verifyMenuOption(){
        for(var i = 1; i <=4; i++){
            cy.get(this.locators.menuOptionOnHomePage.replace('position', i)).
            should('have.text', homePageParameters.optionsTextOnHomePage[i-1]);
        }
    }

    // Method to verify recomendation is shown on search anything
    verifyRecomendationIsShown(searchItem, recommendationOption){
        cy.get(this.locators.searchBox).clear().type(searchItem);
        cy.get(this.locators.recommendationOption).within(() => {
            cy.contains(recommendationOption);
        })
    }

}

export default HomePage;
