export class A {
    static isObject(item: any): boolean {
        return typeof item == 'object';
    }

    static B(item: Object): boolean {
        // return A.isObject(item) && !!item
        //     && 'aaa' in item && 'bbb' in item
        return 'aaa' in item
    }
}