function throwError(message: string): never {
    throw new Error(message);
}

function validateGrade(grade: number): void {
    if (grade < 0 || grade > 20) {
        throwError(`Invalid grade: ${grade}`);
    } else {
        console.log(`Valid grade: ${grade}`);
    }
}

try {
    validateGrade(18);
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}

try {
    validateGrade(42);
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}

try {
    validateGrade(-5);
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}
