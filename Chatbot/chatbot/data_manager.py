import json
import os


def load_data():
    if os.path.exists("reservations.json") == False:
        return []
        
    fichier = open("reservations.json", "r")
    donnees = json.load(fichier)
    fichier.close()
    
    return donnees


def save_data(salle, date, heure):
    donnees = load_data()
    
    nouvelle_resa = {}
    nouvelle_resa["salle"] = salle
    nouvelle_resa["date"] = date
    nouvelle_resa["heure"] = heure
    
    donnees.append(nouvelle_resa)
    
    fichier = open("reservations.json", "w")
    json.dump(donnees, fichier)
    fichier.close()


def check_availability(salle, date, heure):
    donnees = load_data()
    
    for resa in donnees:
        if resa["salle"] == salle and resa["date"] == date and resa["heure"] == heure:
            return False
            
    return True