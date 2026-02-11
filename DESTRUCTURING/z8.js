const user = {
    name: 'Bart',
    address: {
        city: 'Poznań',
        zip: '60-001'
    }
};

const { name, address: { city: location } } = user;