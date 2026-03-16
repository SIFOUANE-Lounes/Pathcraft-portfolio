import text_processor
import data_manager


def start_bot():
    print("--- CHATBOT DE RESERATION ---")
    
    print("Commandes : /quit, /reset, /list, /debug")
    print("")
    
    contexte = {}
    debug = False
    
    while True:
        
        message = input("> ")
        
        if message == "/quit":
            break
            
            
        if message == "/reset":
            contexte = {}
            continue
            
        if message == "/debug":
            if debug == False:
                debug = True
                print("Mode debug ON")
            else:
                debug = False
                print("Mode debug OFF")
            continue
            
            
        if message == "/list":
            liste = data_manager.load_data()
            
            for r in liste:
                print(r["salle"] + " " + r["date"] + " " + r["heure"])
            continue
            
            
        if message.strip() == "":
            continue



        tokens = text_processor.tokenize(message)
        filtres = text_processor.remove_stop_words(tokens)
        intent, score = text_processor.detect_intent(filtres)
        
        infos = text_processor.extract_entities(message)
        
        
        if debug == True:
            print("DEBUG mots :", filtres)
            print("DEBUG intent :", intent)
            
            print("DEBUG entites :", infos)
            
            
        if intent != "UNKNOWN":
            contexte["intent"] = intent
            
        for cle in infos:
            contexte[cle] = infos[cle]
            
            
        if "intent" in contexte:
            sujet = contexte["intent"]
        else:
            sujet = "UNKNOWN"
            
        reponse = text_processor.generate_response(sujet, contexte)
        
        
        if reponse == "ok":
            salle = contexte["salle"]
            date = contexte["date"]
            heure = contexte["heure"]
            
            libre = data_manager.check_availability(salle, date, heure)
            
            if libre == True:
                data_manager.save_data(salle, date, heure)
                print("Reseration validee !")
                contexte = {}
                
            else:
                print("Sall deja prise.")
                del contexte["heure"]
                
        else:
            print(reponse)



if __name__ == "__main__":
    start_bot()