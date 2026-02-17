interface Module {
    id: number
    name: string
    credits: number

}

let mymodule: Module = {
    id: 1,
    name: 'lounes',
    credits: 15

}

function displayKeys(module: Module): void {

    for (const key in module) {
        console.log(key)

    }

}
displayKeys(mymodule)