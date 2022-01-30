import {
    LightningElement
} from 'lwc';

export default class FormAddress extends LightningElement {
    addressLine1;
    addressLine1_c;
    addressLine2;
    addressLine2_c;
    Landmark;
    Landmark_c;
    Zipcode;
    Zipcode_c;
    sameAsPermanent = false;

    zipCodeChange(event) {
        this.Zipcode = event.target.value;
    }
    landmarkChange(event) {
        this.Landmark = event.target.value;
    }
    address2Change(event) {
        this.addressLine2 = event.target.value;
    }
    address1Change(event) {
        this.addressLine1 = event.target.value;
    }

    sameAsPermanentChanged(event) {
         if (this.sameAsPermanent == true) {
            this.sameAsPermanent = false;
        } else {
            this.sameAsPermanent = true;
        }
        if (this.sameAsPermanent) {
            this.Zipcode_c = this.Zipcode;
            this.Landmark_c = this.Landmark;
            this.addressLine2_c = this.addressLine2;
            this.addressLine1_c = this.addressLine1;
        } else {
            this.Zipcode_c = '';
            this.Landmark_c = '';
            this.addressLine2_c = '';
            this.addressLine1_c = '';
        }
    }

}