
enum DaysOfWeek {
    MONDAY = "monday",
    TUESDAY = "tuesday",
    WEDNESDAY = "wednesday",
    THURSDAY = "thursday",
    FRIDAY = "friday",
    SATURDAY = "saturday",
    SUNDAY = "sunday"
}

function dailyMessage(day: DaysOfWeek): string | null {
    switch (day) {
        case DaysOfWeek.MONDAY:
            return "Let's start a new week!";
        case DaysOfWeek.FRIDAY:
            return "Ready for the WE?";
        case DaysOfWeek.SUNDAY:
            return "Have a chill sunday!";
        default:
            return null;
    }
}
