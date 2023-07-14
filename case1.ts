export interface A { [key: string]: any }
export type B = (event?: A) => void

export interface E { [key: string]: B }

function D(a: string): B | undefined {
    let node: E = {}
    const res = node[a]
    return res
}

export function callback() {
    let a = "wasm";
    const event = D(a);  // 是一个union类型 
    if (event) {
        console.log('hello', 1)
        event()
        console.log('end', 2)
    }
}