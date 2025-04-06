type MenuOptions = '' | 'all'| 'dogs' | 'cat' | 'fishes'

export const createMenuObject = ( activeMenu: MenuOptions ) => {
    let returnObject = {
        all: false,
        dogs: false,
        cat: false,
        fishes: false
    }

    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

return returnObject
}