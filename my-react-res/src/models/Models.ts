import {Type} from "class-transformer";

export class Anchor {
    private _link: string = "";
    private _text: string = "";

    get link(): string {
        return this._link;
    }
    set link(l: string) {
        this._link = l;
    }

    get text(): string {
        return this._text;
    }
    set text(t: string) {
        this._text = t;
    }
}

export class Social {
    private _link: string = "";
    private _css: string = "";

    get link(): string {
        return this._link;
    }
    set link(l: string) {
        this._link = l;
    }

    get css(): string {
        return this._css;
    }
    set css(c: string) {
        this._css = c;
    }
}


export class Bio {
    private _name: string = "";
    private _title: string = "";
    private _tagline: string = "";
    private _par1: string = "";
    private _par2: string = "";
    private _pitch: string = "";

    @Type(() => Address)
    private _address: Address = new Address();

    get name(): string {
        return this._name;
    }
    set name(n: string) {
        this._name = n;
    }

    get title(): string {
        return this._title;
    }
    set title(t: string) {
        this._title = t;
    }

    get address(): Address {
        return this._address;
    }
    set address(add:Address) {
        this._address = add;
    }

    get tagline(): string {
        return this._tagline;
    }
    set tagline(l: string) {
        this._tagline = l;
    }

    get par1(): string {
        return this._par1;
    }
    set par1(p: string) {
        this._par1 = p;
    }

    get par2(): string {
        return this._par2;
    }
    set par2(p: string) {
        this._par2 = p;
    }

    get pitch(): string {
        return this._pitch;
    }
    set pitch(p: string) {
        this._pitch = p;
    }


}

export class Address {
    private _nationality: string = "";
    private _city: string = "";
    private _province: string = "";
    private _phonetext: string = "";
    private _phonenumber: string = "";

    get nationality(): string {
        return this._nationality;
    }
    set nationality(n: string) {
        this._nationality = n;
    }

    get city(): string {
        return this._city;
    }
    set city(c: string) {
        this._city = c;
    }

    get province(): string {
        return this._province;
    }
    set province(p: string) {
        this._province = p;
    }

    get phonetext(): string {
        return this._phonetext;
    }
    set phonetext(p: string) {
        this._phonetext = p;
    }

    get phonenumber(): string {
        return this._phonenumber;
    }
    set phonenumber(p: string) {
        this._phonenumber = p;
    }
}