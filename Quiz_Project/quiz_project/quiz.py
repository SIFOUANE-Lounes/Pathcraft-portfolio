"""exercice"""

__author__ = "sifoua_l"
import json
import os


class Question:
    """exercice"""

    def __init__(self, id, theme, texte, options, reponse):
        """exercice"""
        self.id = id
        self.theme = theme
        self.texte = texte
        self.options = options
        self.reponse = reponse

    def afficher(self):
        """exercice"""
        print("\n" + self.texte)
        for opt in self.options:
            print("-", opt)

    def verifier(self, saisie):
        """exercice"""
        reponse_utilisateur = saisie.strip().lower()
        bonne_reponse = self.reponse.lower()
        return reponse_utilisateur == bonne_reponse



class Quiz:
    """exercice"""

    def __init__(self, questions):
        """exercice"""
        self.questions = questions

    def charger(self, fichier):
        """exercice"""
        try:
            with open(fichier, "r", encoding="utf-8") as f:
                data = json.load(f)
        except:
            print("Erreur on q pas trouver le fichier")
            data = []

        questions = []
        for q in data:
            questions.append(
                Question(q["id"], q["theme"], q["question"], q["options"], q["reponse"]))
        self.questions = questions

    def jouer(self):
        """exercice"""
        score = 0
        total = len(self.questions)

        for q in self.questions:
            q.afficher()
            rep = input("Ta réponse : ")
            if q.verifier(rep):
                print("Bravo !")
                score = score + 1
            else:
                print("Mauvaise réponse, la bonne reponse est :", q.reponse)

        print(f"Résultat : {score} sur {total}")
        return score, total
