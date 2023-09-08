const arrayFeature = () => {
    let collection = [];

    const add = (value) => {
        const cloneCollection = [];

        if(collection.length === 0) {
            collection.push(value);
            return collection;
        }

        let collectionIndex = 0;
        let added = false;
        for(let currentIndex = 0; currentIndex <= collection.length;currentIndex++) {
            if((value <= collection[collectionIndex] || collection[collectionIndex] === undefined) && !added) {
                cloneCollection.push(value);
                added = true;
            } else {
                cloneCollection.push(collection[collectionIndex]);
                collectionIndex++;
            }
        }

        collection = cloneCollection;

        return collection;
    }

    const getAll = () => {
        return collection;
    }

    const get = (index) => {
        return collection[index];
    }

    const search = (value) => {
        for(let index = 0; index <= collection.length-1; index ++) {
            if(collection[index] === value) {
                return index;
            }

            if(value < collection[index]) {
                break;
            }
        }

        return null;
    };

    const destroy = (value) => {
        const position = search(value);

        const removedItem = get(position);
        
        const cloneCollection = [];
        for(let index = 0; index <= collection.length-1; index++) {
            if(position !== index) {
                cloneCollection.push(collection[index]);
            }
        }
        collection = cloneCollection;

        return removedItem;
    };

    return ({
        add,
        get,
        getAll,
        search,
        destroy,
    })
}

const array = arrayFeature();
console.log(array.getAll());
// []
console.log(array.add(30));
// [ 30 ]
console.log(array.add(20));
// [ 20, 30 ]
console.log(array.add(10));
// [ 10, 20, 30 ]
console.log(array.add(60));
// [ 10, 20, 30, 60 ]
console.log(array.add(40));
// [ 10, 20, 30, 40, 60 ]
console.log(array.add(55));
// [ 10, 20, 30, 40, 55, 60 ]
console.log(array.add(53));
// [ 10, 20, 30, 40, 53, 55, 60 ]
console.log(array.add(33));
// [ 10, 20, 30, 33, 40, 53, 55, 60 ]
console.log(array.getAll());
// [ 10, 20, 30, 33, 40, 53, 55, 60 ]

console.log(array.get(3));
// 33
console.log(array.search(55));
// 6
console.log(array.destroy(53));
// 53
console.log(array.getAll());
// [ 10, 20, 30, 33, 40, 55, 60 ]
console.log(array.search(20));
// 1
