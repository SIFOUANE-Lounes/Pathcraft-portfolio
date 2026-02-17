"""exercice"""

__author__ = "sifoua_l"
import json
from quiz import Question, Quiz
from user import User


def charger_questions(fichier="data/questions.json"):
    """exercice"""
    try:
        with open(fichier, "r", encoding="utf-8") as f:
            return json.load(f)
    except (OSError, json.JSONDecodeError):
        print("Impossible de lire le fichier questions.json")
        return []


def main():
    """exercice"""
    nom = input("Entrez votre nom : ")
    joueur = User(nom)

    while True:
        print("\n1. Jouer au quiz")
        print("2. Voir mes scores")
        print("3. Quitter")

        choix = input("Votre choix : ").strip()

        if choix == "1":
            questions_data = charger_questions()
            if not questions_data:
                print("Aucune question disponible.")
                continue

            questions = [
                Question(q["id"], q["theme"], q["question"],
                         q["options"], q["reponse"])
                for q in questions_data
            ]

            quiz = Quiz(questions)
            score, total = quiz.jouer()

            theme = questions[0].theme if questions else "Général"
            joueur.sauvegarder_score(theme, score, total)

        elif choix == "2":
            joueur.afficher_resultats()

        elif choix == "3":
            print("À bientôt !")
            break

        else:
            print("Veuillez entrer 1, 2 ou 3.")


if __name__ == "__main__":
    main()
