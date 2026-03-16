import re

STOP_WORDS = ["le", "la", "les", "un", "une", "de", "du", "je", "tu", "il", "et"]


INTENTS = {
    "RESERVATION": ["reserver", "reservation", "salle", "veux"],
    "HORAIRES": ["horaire", "ouvert", "heure"]
}

CORRECTIONS = {
    "vex": "veux",
    "dmain": "demain",
    "sal": "salle"
}


def tokenize(text):
    text = text.lower()
    for faute, correction in CORRECTIONS.items():
        text = text.replace(faute, correction)
    for p in ".,!?;:":
        text = text.replace(p, "")
    return text.split()

def remove_stop_words(tokens):
    resultat = []
    for mot in tokens:
        if mot not in STOP_WORDS:
            resultat.append(mot)
    return resultat


def detect_intent(tokens):
    if len(tokens) == 0:


        return "UNKNOWN", 0
    best_intent = "UNKNOWN"
    best_score = 0

    for intent, mots_cles in INTENTS.items():
        compteur = 0
    
        for mot in tokens:
            if mot in mots_cles:
                compteur = compteur + 1
    
    
        score = compteur / len(tokens)
        if score > best_score:
            best_score = score
            best_intent = intent
    if best_score < 0.2:
        return "UNKNOWN", 0
    return best_intent, best_score


def extract_entities(text):
    entities = {}
    
    date = re.search(r"(demain|lundi|mardi|mercredi|jeudi|vendredi)", text)
    if date:


        entities["date"] = date.group(0)
        
    heure = re.search(r"(\d{1,2})h", text)
    if heure:
        chiffre = int(heure.group(1))
        if chiffre < 24:
            entities["heure"] = heure.group(0)
            
    salle = re.search(r"salle (a|b|c)", text)
    if salle:


        entities["salle"] = salle.group(1).upper()
            
    return entities


def generate_response(intent, entities):
    if intent == "RESERVATION":
        if "date" in entities and "heure" in entities and "salle" in entities:
            return "ok"
            
        if "salle" not in entities:
            return "Quelle salle voulez-vous"
        if "date" not in entities:
            return "quelle date  ?"
        
        if "heure" not in entities:
            return "A quelle heure ?"
            
        return " quelle date et quelle heure ?"
        
    if intent == "HORAIRES":
        
        return "Ouvert de 9h a 18h."
        

    return "Je n'ai pas compris."