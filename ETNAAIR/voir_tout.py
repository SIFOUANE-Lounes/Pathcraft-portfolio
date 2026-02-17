import os

def ecrire_arbre(dossier, fichier, prefix="", ignore_list=None):
    # Liste des dossiers/fichiers à ignorer
    if ignore_list is None:
        ignore_list = {'.git', '__pycache__', 'node_modules', 'env', 'venv', 
                       '.DS_Store', '.vscode', 'dist', 'build', 'save_tree.py', 'structure_projet.txt'}

    try:
        # Récupérer le contenu du dossier en filtrant les indésirables
        contenus = [c for c in os.listdir(dossier) if c not in ignore_list]
    except PermissionError:
        fichier.write(f"{prefix}⛔ [Accès refusé]\n")
        return

    contenus.sort()
    count = len(contenus)

    for i, element in enumerate(contenus):
        chemin = os.path.join(dossier, element)
        is_last = (i == count - 1)
        
        # Les symboles pour l'arbre
        connecteur = "└── " if is_last else "├── "
        
        # Écriture dans le fichier
        ligne = f"{prefix}{connecteur}{element}\n"
        fichier.write(ligne)

        # Si c'est un dossier, on descend dedans (récursivité)
        if os.path.isdir(chemin):
            extension = "    " if is_last else "│   "
            ecrire_arbre(chemin, fichier, prefix + extension, ignore_list)

if __name__ == "__main__":
    nom_fichier_sortie = "structure_projet.txt"
    dossier_actuel = os.getcwd()

    print(f"⏳ Analyse du projet en cours...")

    # Ouverture du fichier en mode écriture ('w') avec encodage UTF-8 (pour les symboles)
    with open(nom_fichier_sortie, "w", encoding="utf-8") as f:
        f.write(f"📦 PROJET : {dossier_actuel}\n")
        f.write("="*50 + "\n")
        ecrire_arbre(dossier_actuel, f)

    print(f"✅ Terminé ! Tout est sauvegardé dans le fichier : {nom_fichier_sortie}")
    print("👉 Tu peux l'ouvrir pour voir tout ton code.")