import { convertTypeAcquisitionFromJson } from "typescript";

class _SuperValidator{
    constructor() {
        this.isvalid = false;
    }

    get valid() {
        return this.isvalid;
    }
    get invalid() {
        return !this.isvalid;
    }
    validate(text) {
        this.isvalid = false;
    }
}

export class TextValidator extends _SuperValidator {
    constructor(minlen, maxlen) {
        super();
        this.minlen = minlen;
        this.maxlen = maxlen;
    }

    validate(text) {
        this.isvalid = text.length >= this.minlen && text.length <= this.maxlen;
    }
}

export class NameValidator extends TextValidator {
    constructor() {
        super(2,30);
    }
    validate(text) {
        const trimmed = text.trim();
        super.validate(trimmed);
        this.isvalid = super.valid && isValidName(trimmed);
    }
}

function isValidName(text) {
    return /^[a-zA-ZåäöÅÄÖ '-]+$/.test(text);
}

export class AddressValidator extends TextValidator {
    constructor() {
        super(0,30)
    }
    validate(text) {
        const trimmed = text.trim();
        super.validate(trimmed);
        this.isvalid && super.valid && isValidAddress(trimmed);
    }
}

function isValidAddress(text) {
    return /^[a-zA-ZåäöÅÄÖ '-]+[0-9]{3}$/.test(text);
}

export class ZipCodeValidator extends TextValidator {
    constructor() {
        super(5,5)
    }
    validate(text) {
        const trimmed = text.trim();
        super.validate(trimmed);
        this.isvalid && super.valid && isValidZipCode(trimmed);
    }
}

function isValidZipCode(text) {
    return /^[0-9]{3}+[0-9]{2}$/.test(text);
}

export class CombinedValidator {
    constructor(...validators) {
        this.items = validators;
    }
    get valid() {
        let validItems = this.items.filter(i => {
            return i.valid;
        });
        return validItems.length === this.items.length;
    }
    get invalid() {
        return !this.isvalid;
    }
}