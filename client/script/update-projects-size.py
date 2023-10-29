""" Programme qui met à jour l'entièreté du json des projets situés dans le dossier
"client/src/asset/data/home/project.json" et rajouté une colonne size avec la taille
réelle du projet """

import os
import json

if __name__ == "__main__":

    print("Getting informations...\n")

    json_path = "client/src/asset/data/home/project.json"

    # Ouvrir en acceptant les caractères spéciaux
    with open(json_path, "r", encoding="utf-8") as f:
        json_content = json.load(f)

    file_project_path = "client/public/project/"

    for project in json_content["projects"]:

        if project["is_download"]:

            project_size = os.path.getsize(file_project_path + project["file"])

            # On récupère la taille en Mo
            project_mo_size = round(project_size / 1024 / 1024, 2)

            project["size"] = project_mo_size

            print('"' + project["title"] + '"' + " updated")

    with open(json_path, "w", encoding='utf-8') as f:
        print("\nWriting ...")

        jsonString = json.dumps(json_content, indent=4, ensure_ascii=False)
        f.write(jsonString)

    print("\nDone !")
