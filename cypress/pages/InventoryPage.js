const MENU_BUTTON = "#react-burger-menu-btn"
const LOGOUT_BUTTON = "#logout_sidebar_link"

class InventoryPage {
    inventoryPageValidation() {
        cy.url().should("contains", "/inventory.html");
    }
    openSideBar() {
        cy.get(MENU_BUTTON).click();
    }

    clickLogoutButton(title) {
        cy.get(LOGOUT_BUTTON).click();
    }
}

export default InventoryPage;