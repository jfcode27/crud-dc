import bcrypt from 'bcrypt';

const users = [
    {
        name: 'Roberto Macias',
        username: 'rober7omag',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jeremy Franco',
        username: 'zeider27',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Alan Nuñez',
        username: 'pou2001',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
];

export default users;