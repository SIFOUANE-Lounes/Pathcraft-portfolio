import csv
from pathlib import Path


# Nos fichiers d'entrée et de sortie
INPUT = Path("data/raw/accidents/2024/caract-2024.csv")
OUTPUT = Path("data/processed/accidents_filtered.csv")


def get_city_name(insee_code):
    # On vérifie si y un code
    if not insee_code:
        return None
        
    insee_code = str(insee_code).strip()
    
    # Liste de nos 6 villes avec les codes correspondants
    if insee_code == "35238": 

        return "Rennes"
        
    if insee_code == "31555": 
        return "Toulouse"
        
    if insee_code == "59350": 
        return "Lille"
        
    if insee_code.startswith("751") or insee_code == "75056": 

        return "Paris 75"
        
    if insee_code.startswith("693") or insee_code == "69123": 
        return "Lyon 69"
        
    if insee_code.startswith("132") or insee_code == "13055": 



        return "Marseille 13"
        
    return None


def clean_hour(hrmn):
    # si l'heure est mal écrite
    hrmn = str(hrmn).replace(":", "").strip()
    
    # Si c'est vide on met minuit par défaut
    if not hrmn.isdigit() or len(hrmn) == 0:
        return "00:00"
        
    # On rajoute des zéros devant si besoin (pour avoir 4 chiffres)
    hrmn = hrmn.zfill(4) 
    
    # faire HH:MM
    return f"{hrmn[:2]}:{hrmn[2:4]}"


def process_data():
    # si le dossier exist 
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    
    # pour garde Les colonnes pour le rendu (on a viré dep, adr, etc.)
    fieldnames_out = ["id", "occured_at", "city", "insee_com", "lat", "long", "lum", "atm", "col"]
    
    count = 0
    
    
    with open(INPUT, mode="r", encoding="utf-8-sig") as f_in, \
         open(OUTPUT, mode="w", encoding="utf-8", newline="") as f_out:
        
        reader = csv.DictReader(f_in, delimiter=";")
        writer = csv.DictWriter(f_out, fieldnames=fieldnames_out)
        
        writer.writeheader()
        
        # On boucle sur chaque ligne du fichier brut
        for row in reader:
            city_name = get_city_name(row.get("com", ""))
            
            # Si c'est bien une de nos villes, on la traite

            if city_name:
                
                #(ex: 01 au lieu de 1)

                jour = str(row.get("jour", "1")).zfill(2)
                mois = str(row.get("mois", "1")).zfill(2)
                an = str(row.get("an", "2024"))
                
                heure_propre = clean_hour(row.get("hrmn", "0000"))
                
                # pour date complète
                
                occured_at = f"{an}-{mois}-{jour} {heure_propre}:00"
                
                # On écrit la nouvelle ligne nettoyée
                writer.writerow({


                    "id": row.get("Num_Acc", ""),
                    "occured_at": occured_at,
                    
                    "city": city_name,
                    "insee_com": row.get("com", ""),
                    "lat": row.get("lat", "").replace(",", "."),
                    "long": row.get("long", "").replace(",", "."),
                    "lum": row.get("lum", ""),
                    "atm": row.get("atm", ""),
                    "col": row.get("col", "")
                })
                
                count += 1
                


    print(f"Fini ! On a gardé {count} accidents au total.")


if __name__ == "__main__":
    process_data()