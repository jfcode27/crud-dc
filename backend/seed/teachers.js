import bcrypt from 'bcrypt';

const teachers = [
    {
        name: 'Roberto Macias',
        username: 'rober7omag',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Jeremy Franco',
        username: 'zeider27',
        password: bcrypt.hashSync('123456', 10)
    }
];

export default teachers;