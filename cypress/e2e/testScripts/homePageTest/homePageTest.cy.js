///<reference types="Cypress"/>

import { homePageParameters } from "../../../fixtures/homePageData";
import HomePage from "../../../pages/homePage";

describe('Test for Home Page', () => {
    // Creating an object of HomePagec class
    const homePageObj = new HomePage();

    beforeEach(() => {
        // visit application
        homePageObj.visit();
    })

    it('Test 1: Verfiy application home page', () => {
        homePageObj.verifyHomePageElements();
    })

    /*
    Verify menu option Women, Dresses, T-shirts and Blog is visible on home page
    */
    it("Verify menu option on home page" , () => {
        homePageObj.verifyMenuOption();
    });

    /*
    verify that suboption under women option
    */
    it('Test 2: Verfiy options with different page links home page', () => {
        homePageObj.verifySubmenuOnHoveringMouse(homePageParameters.menuOptionOnHomePage.women);
    });

    /*
    Verify recoomedation is shown when user search any thing
    */
   it("Verify on searching anything recoomendation is visible" ,() => {
        homePageObj.verifyRecomendationIsShown(homePageParameters.itemSearch.shirt, 
            homePageParameters.recommendationItem.shirt);
   })
})