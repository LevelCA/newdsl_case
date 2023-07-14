export type Jack = string | number | boolean
export interface Petter { [key: string]: Jack }

export interface Zhangsan {
    name?: Petter
    age?: Petter
}

const A = {
    age: {
        'A': "a",
        'S': "s",
        'D': "D",
        'F': "f"
    }
}

class China {
    id: string
    type: string
    isStatic: boolean = true
    opts: Zhangsan

    parentId: string = ''

    constructor(id: string, type: string, isStatic: boolean, opts: Zhangsan) {
        this.id = id;
        this.type = type;
        this.opts = opts
        this.isStatic = isStatic
    }
}

const nodeMap__: { [key: string]: China } = {}

function hello(id: string, tag: string, isStatic: boolean, opts: Zhangsan, parentId: string, withParentId?: boolean): China {
    if (withParentId) id = parentId + '_' + id
    let node = nodeMap__[id]
    return node
}

const B: China = hello('1', 'column', true, A, '', false);