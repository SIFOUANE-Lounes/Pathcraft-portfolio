interface Customer {
    firstname: string;
    lastname: string;
    phone: string;
}

let customers: Customer[] = [
  { firstname: 'victor', lastname: 'ménestrelus', phone: '123-456-7890' },
  { firstname: 'alice', lastname: 'dupont', phone: '987-654-3210' },
  { firstname: 'bob', lastname: 'martin', phone: '555-555-5555' },
  { firstname: 'charlie', lastname: 'brown', phone: '444-444-4444' }
];

console.log("Before modification:", customers);

customers.forEach(c => {
  c.firstname = c.firstname[0].toUpperCase() + c.firstname.slice(1);
  c.lastname = c.lastname.toUpperCase(); // <-- Added this line
});

console.log("After modification:", customers);
