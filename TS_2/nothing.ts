function getUserName(user: { name?: string | null }): string | undefined {
    if (user.name === undefined) {
        return undefined;
    } else if (user.name === null) {
        return "Anonymous";
    } else {
        return user.name;
    }
}

function processValue(n: unknown): void {
    if (typeof n === "string") {
        console.log(`Longueur de la chaîne : ${n.length}`);
    } else if (typeof n === "number") {
        console.log(`Valeur multipliée par 2 : ${n * 2}`);
    } else {
        console.log("Type non reconnu");
    }
}

function logMessage(message: string): void {
    console.log(message);
}

console.log("=== Test getUserName: ===");
console.log(getUserName({ name: "Alice" }));
console.log(getUserName({}));

console.log("\n=== Test processValue: ===");
processValue("Hello");
processValue(21);
processValue(true);
processValue({ key: "value" });

console.log("\n=== Test logMessage: ===");
logMessage("Ceci est un message de test");
logMessage("TypeScript est génial !");
