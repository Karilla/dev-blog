import { readdirSync, statSync } from "fs";

/**
 * Fonction qui extrait les noms de dossier d'un dossier parent
 * @param path chemin du dossier a scruter
 * @returns tableau des noms de dossier
 */
export function getDirectories(path : string) : string[]{
    return readdirSync(path).filter(function (file) {
      return statSync(path+'/'+file).isDirectory();
    });
  }