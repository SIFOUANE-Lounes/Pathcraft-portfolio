import os
import ast

def analyser_fichier(chemin_fichier):
    with open(chemin_fichier, "r", encoding="utf-8") as f:
        try:
            tree = ast.parse(f.read())
        except:
            return # Ignore les fichiers non-python ou illisibles

    print(f"\n📄 FICHIER : {os.path.basename(chemin_fichier)}")
    
    for node in tree.body:
        # Si c'est une classe
        if isinstance(node, ast.ClassDef):
            print(f"  🟦 CLASSE : {node.name}")
            for item in node.body:
                if isinstance(item, ast.FunctionDef):
                    print(f"    🔸 méthode : {item.name}")
        
        # Si c'est une fonction (hors classe)
        elif isinstance(node, ast.FunctionDef):
            print(f"  🟢 FONCTION : {node.name}")

def parcourir_projet():
    for root, dirs, files in os.walk(os.getcwd()):
        # Ignorer les dossiers systèmes
        if 'env' in root or '__pycache__' in root or '.git' in root:
            continue
            
        for file in files:
            if file.endswith(".py") and file != "skeleton.py":
                analyser_fichier(os.path.join(root, file))

if __name__ == "__main__":
    parcourir_projet()