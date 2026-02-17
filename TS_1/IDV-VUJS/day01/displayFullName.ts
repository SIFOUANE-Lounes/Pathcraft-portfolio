interface User {
    firstname: string;
    lastname: string;
    age: number;
    email: string;
    isActive: boolean;
}

let user: User = {
    firstname: 'Marie',
    lastname: 'Curie',
    age: 157,
    email: 'marie.curie@etna.io',
    isActive: false
};

console.log(user);

function displayFullName(user: User): void {
    console.log(`${user.firstname} ${user.lastname}`);
}

displayFullName(user);
