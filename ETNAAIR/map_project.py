import os

def generer_arbre(dossier, prefix=""):
    # On liste les contenus
    try:
        contenus = [c for c in os.listdir(dossier) 
                    if c not in {'.git', '__pycache__', 'node_modules', 'env', 'venv'}] # On ignore les poubelles
    except PermissionError:
        return

    contenus.sort()
    count = len(contenus)

    for i, element in enumerate(contenus):
        chemin = os.path.join(dossier, element)
        is_last = (i == count - 1)
        
        # Choix des symboles pour faire joli
        connecteur = "└── " if is_last else "├── "
        
        print(f"{prefix}{connecteur}{element}")

        # Si c'est un dossier, on plonge dedans (récursivité)
        if os.path.isdir(chemin):
            extension = "    " if is_last else "│   "
            generer_arbre(chemin, prefix + extension)

if __name__ == "__main__":
    print(f"📦 Racine : {os.getcwd()}")
    generer_arbre(os.getcwd())