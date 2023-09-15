const createPhoneBook = () => {
    const phoneBook = new Map();

    const addNumber = ({ name, number }) => {
        phoneBook.set(name, number);
        return true;
    }

    const getNumberByName = ({ name }) => {
        return phoneBook.get(name);
    }

    return { addNumber, getNumberByName };
}

const phoneBook = createPhoneBook();
phoneBook.addNumber({ name: 'jenny', number: '1233456' });
phoneBook.addNumber({ name: 'emergency', number: '123' });
console.log(phoneBook.getNumberByName({ name: 'jenny' }));
