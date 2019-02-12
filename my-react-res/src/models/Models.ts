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
