import checkoutDetails from '../utils/data.json';

export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.postalCode = '#postal-code';
        this.continueBtn = '#continue';
        this.finishBtn = '#finish';
    }

    async fillDetails(firstName, lastName, postalCode) {
        await this.page.fill(this.firstName, checkoutDetails.firstName);
        await this.page.fill(this.lastName, checkoutDetails.lastName);
        await this.page.fill(this.postalCode, checkoutDetails.postalCode);
        await this.page.click(this.continueBtn);
    }

    async finishOrder() {
        await this.page.click(this.finishBtn);
    }
}