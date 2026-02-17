function convertMinutesInHours(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    console.log(`${hours} hours ${remainingMinutes} minutes`);
}
convertMinutesInHours(1643)