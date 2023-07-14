export interface C {

}

export interface D {
    hello(key: D, info: string): void;  // wasm string
}

export interface C extends D {
    wasm(value: Object): void;
}

export class B implements D {

    hello(key: D, info?: string): void {  // info是一个anyref

    }
}

export class E extends B {
    constructor(parent: E | null) {
        super();
        if (parent) this.hello(parent);
    }
}

export abstract class A extends B implements C {

    constructor(owner: D, info: string) {
        super();
        this.hello(owner, info);
    }

    wasm(value: Object) {

    }
}