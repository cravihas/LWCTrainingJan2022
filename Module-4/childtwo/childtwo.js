import { LightningElement, api } from 'lwc';

export default class Childtwo extends LightningElement {
    @api label = "Select";
    variant = "Neutral";
    @api childName = "Childtwo";

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

        if (this.label === "Select"){ this.label = "Selected"; this.variant = "success";}
        else{this.label = "Select"; this.variant = "Neutral";}

    }
}