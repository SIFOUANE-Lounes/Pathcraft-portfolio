type ID = number | string;
type EventType = "kickoff" | "workshop" | "followup" | "delivery" | "defense";

interface EtnaEvent {
  id: ID;
  name: string;
  eventType: EventType;
}

const etnaEvent: EtnaEvent = {
  id: 1,
  name: "lounes",
  eventType: "kickoff"
};

console.log(etnaEvent);
