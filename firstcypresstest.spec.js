describe("First Cypress Test with yemeksepeti", function () {
    context("Login Test with cypress", function () {

        it("Go to yemeksepeti.com", function () {
            cy.visit("https://www.yemeksepeti.com")
        })

        it("Select cities", function () {
            cy.contains("İstanbul").click()
        })

        it("Enter valid username/password", function () {
            cy.get('[id=UserName]').type('rbruno.ujka.714d@coinex.online')
            cy.get('[id=password]').type('testdeneme123')
        })

        it("Click submit button", function () {
            cy.get('[id=ys-fastlogin-button]').contains("ÜYE GİRİŞİ").click()
        })

        afterEach(() => {
            cy.screenshot()
          })
    })
})