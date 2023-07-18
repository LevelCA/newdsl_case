interface A {
    name?: string;
    age?: number;
}

const a = {
    name: 'zhangsan'
}

class C {
    person: A
    address: string
    parentId: string = ''

    constructor(p: A, add: string, par: string) {
        this.person = p;
        this.address = add;
        this.parentId = par
    }
}

const c: C = new C(a, 'wuhan', 'hubei');