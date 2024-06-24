const XLSX = require('xlsx');
import HomePage from "../../../pages/homePage";
import AccountCreationPage from "../../../pages/accountCreationPage";
import { colorCode } from "../../../fixtures/colorCodeData";

describe('Test for Home Page', () => {
    let randomText = "";
    let testEmail = "";
    // Creating an object of HomePage class
    const homePageObj = new HomePage();

    // Creating an object of AccountCreationPage class
    const accountCreationPageObj = new AccountCreationPage();

    beforeEach(() => {
        // visit application
        homePageObj.visit()
    })

    it('Test 1: Verfiy that user is able to create account successfully', () => {
        accountCreationPageObj.clickOnLogInButton();
        // Read Excel file and fetch data
        cy.readFile('cypress/fixtures/signupdata.xlsx', 'binary').then((fileContent) => {
            const workbook = XLSX.read(fileContent, { type: 'binary' });
            const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
            const sheet = workbook.Sheets[sheetName];

            // Extracting email and ID from the first row (assuming headers are in the first row)
            const data = XLSX.utils.sheet_to_json(sheet);
            const firstRow = data[0];
            const email = firstRow['Email']; // Assuming 'Email' is the header in Excel
            const firstName = firstRow['firstName']; // Assuming 'ID' is the header in Excel
            const lastName = firstRow['lastName']; // Assuming 'ID' is the header in Excel
            
            // Use email and id as needed
            cy.log(`Fetched Email: ${email}, ID: ${firstName}, lastName: ${lastName}`);
            // Generate random string for email
            const testEmailNumber = Math.random().toString(36).substring(2, 7);
            accountCreationPageObj.enterEmail(email + testEmailNumber + '@gmail.com');
            accountCreationPageObj
                .clickOnCreateAnAccountButton()
                .fillPersonalInformation(firstName, lastName);
        })
    })

    it('Test 2: Verfiy that user is able fill persoanl information', () => {
        cy.get('.sf-menu > :nth-child(1)').click()
        cy.get('.shop-phone > strong').should('have.css', 'color', colorCode.white);
        cy.get('.logo').should('have.css', 'color', colorCode.grayscale);

        // match element snapshot
        cy.matchImageSnapshot();
    })
})