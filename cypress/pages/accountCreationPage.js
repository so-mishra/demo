

import { createAccountPageParameters } from "../fixtures/accountCreationData";

class AccountCreationPage {

    constructor() {
        this.locators = {
            emailAddress: '#email_create',
            createAnAccountLableValue: '[class="btn btn-default button button-medium exclusive"]',
            PersonalInformationText: '.page-subheading',
            title: '.clearfix',
            titleRadioButton: "[for='id_gender1']",
            firstNameTextBox: "#customer_firstname",
            lastNameTextBox: "#customer_lastname",
            passwordTextBox: "#passwd",
            daysDropDown: '#days',
            monthDropDown: "#months",
            yearsDropDown: "#years",
            newsLetterSignUpCheckBox: "[class='checker']",
            registerButton: "#submitAccount",
            myAccountLabel: "h1[class='page-heading']",
            welcomeInfoText: '[class="info-account"]',
            addAddress: "[title='Add my first address']",
            yourAddress: ".info-title",
            addressTextBox: '#address1',
            cityTextBox: '#address1',

        };

    }

    // Method to enter value of Email
    enterEmail() {
        cy.get(this.locators.emailAddress).click().type("adnjdgsadSsobghtfg12@qas.com")

    }

    // Method to click on create an account button
    clickOnCreateAnAccountButton() {
        cy.get(this.locators.createAnAccountLableValue).should('be.visible')
            .click({ force: true });
        return this;
    }

    //Create resuable method to click an element
    clicOnElement(locator) {
        cy.get(locator).click();
    }

    clickOnLogInButton() {
        this.clicOnElement('[class="login"]');
    }

    //Create resuable method to enter text
    enterValue(locator, value) {
        cy.get(locator).clear().type(value);
    }

    enterEmail(emailValue) {
        this.enterValue(this.locators.emailAddress, emailValue);
    }

    // Method to fill personal information form
    fillPersonalInformation(firstName, lastName) {
        this.clicOnElement(this.locators.titleRadioButton);
        this.enterValue(this.locators.firstNameTextBox,
           firstName);
        this.enterValue(this.locators.lastNameTextBox,
           lastName);
        this.enterValue(this.locators.passwordTextBox,
            createAccountPageParameters.password);
        cy.get(this.locators.daysDropDown)
            .select(createAccountPageParameters.dateOfBirthValue[0])
        cy.get(this.locators.monthDropDown)
            .select(createAccountPageParameters.dateOfBirthValue[1])
        cy.get(this.locators.yearsDropDown)
            .select(createAccountPageParameters.dateOfBirthValue[2])
        this.clicOnElement(this.locators.newsLetterSignUpCheckBox);
        this.clicOnElement(this.locators.registerButton);
        cy.get(this.locators.myAccountLabel)
            .should('have.text', createAccountPageParameters.myAccountLabelValue);
        cy.get(this.locators.welcomeInfoText)
            .should('have.text', createAccountPageParameters.welcomeNote);
    }

    // Method to check visibility of sign in button and navigate to sign in page
    verifyVisibilityAndClickOnSignInButton() {
        cy.get(this.locators.signInButton).should('be.visible').click();
        cy.get(this.locators.authenticationText).should('have.text', 'Authentication')
    }

    //Method to verify different links on page
    verifyPageLinks(){
        cy.scrollIntoView()
    }
    generateString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

}


export default AccountCreationPage;
