

import HomePage from "../../../pages/homePage";

describe('Test for Home Page', () => {
    // Creating an object of HomePagec class
    const homePageObj = new HomePage();

    beforeEach(() => {
        // visit application
        homePageObj.visit();
    })

    it('Test 1: Verfiy image by its colors', () => {
        cy.get('.logo').should('have.css', 'color', colorCode.grayscale);
    })

    it('Test 2: Verfiy image by its dimensions', () => {
        cy.get('img[class="item-img "]').eq(0).should('be.visible').then(($element) => {
            const width = $element.width();
            const height = $element.height();

            cy.log(`Width: ${width}`);
            cy.log(`Height: ${height}`);

            expect(width).to.eq(305);
            expect(height).to.eq(175);

        });
    })

    it('Test 3: Verfiy image by screenshot comparison', () => {
        homePageObj.verifySerachResultBySnapshot();
    })
})