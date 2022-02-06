import { LightningElement, api } from 'lwc';

export default class Childthree extends LightningElement {
    @api label = "Select";
    variant = "Neutral";
    @api childName = "Childthree";

    @api childReset(){
        this.label = "Select";
        this.variant = "Neutral";
    }

    handleClick(event){
        const event1 = new CustomEvent('childclick',
        {
            bubbles: true,
            composed: true,
            detail: this.label
        });
        this.dispatchEvent(event1);

        if (this.label === "Select"){
            this.label = "Selected";
            this.variant = "success";
        }
        else{
            this.label = "Select";
            this.variant = "Neutral";
        }
    }
}