import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";


describe('Login Module', () => {

    const mainPage = new MainPage
    const signUpPage = new SignUpPage

        it('TC0001 - Login User Control', () => {
            
            mainPage
                .openWebSite()
                .fillEmail(5)
                .fillPassword();

        })

    it('TC0002 - Login User Control', () => {

            mainPage
                .openWebSite()
                .fillEmail(5)
                .fillPassword();

        })

    it('TC0003 - Login User Control', () => {

        mainPage
                .openWebSite()
                .fillEmail(5)
                .fillPassword()
                .loginClick();

        })

    it('TC0004 - Login User Control', () => {

        mainPage
                .openWebSite()
                .fillEmail("john.smith@gmail.com")
                .fillPassword("john")
                .loginClick()
                .loggedInControl();

        })

    it('TC0005 - Login User Control', () => {

        mainPage
                .openWebSite()
                .signUpClick();

        signUpPage
                .fillFirstName("Sahir");

        })


})    
