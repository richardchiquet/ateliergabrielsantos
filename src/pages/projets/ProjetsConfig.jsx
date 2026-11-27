import { content } from "../../constants/Content";

// Images
import cover1 from "../../assets/photosProjets/projet1/001-1-MICRO HABITAT 01-Vue EXT 01.webp";
import cover2 from "../../assets/photosProjets/projet2/002-1-FAMILY HOUSE 01-Vue EXT 01.webp";
import cover3 from "../../assets/photosProjets/projet3/004-1-MICRO HABITAT 02-Vue EXT 01.webp";
import cover4 from "../../assets/photosProjets/projet4/003-1-RENOVATION INTERIEUR 01-Vue INT 01.webp";
import cover5 from "../../assets/photosProjets/projet5/006-1-CABANON 01-Vue EXT 01.webp";
import cover6 from "../../assets/photosProjets/projet6/007-1-Appartement Nice-Vue INT 01.webp";

const imageLoader = import.meta.glob("../../assets/photosProjets/*/*.{jpg,jpeg,png,webp}");

// Libellé lisible d'une image à partir de la fin de son nom de fichier :
// « Vue EXT 01 » → « vue extérieure 1 », « Plan RDC » → « plan du rez-de-chaussée », « Façade 03 » → « façade 3 »
const listImageLabels = content.projects.image_labels;
const listImageLabelRules = [
    [
        /^Vue EXT/i, 
        listImageLabels.exterior
    ],
    [
        /^Vue INT/i, 
        listImageLabels.interior
    ],
    [
        /^Plan RDC/i, 
        listImageLabels.ground_floor_plan
    ],
    [
        /^Plan/i, 
        listImageLabels.plan
    ],
    [
        /^Coupe/i, 
        listImageLabels.section
    ],
    [
        /^Fa[cç]ade/i, 
        listImageLabels.facade
    ],
    [
        /^Axonom[eé]trie/i, 
        listImageLabels.axonometric
    ],
];

function imageLabel(path) {
    const name = decodeURIComponent(path.split("/").pop()).replace(/\.[a-z0-9]+$/i, "");
    const last = name.split("-").pop().trim();
    const rule = listImageLabelRules.find(([re]) => re.test(last));
    if (!rule) return last.toLowerCase();
    const number = last.match(/(\d+)$/)?.[1];
    // « Plan RDC » n'a pas de numéro ; « Vue EXT 01 » → « vue extérieure 1 »
    return number && rule[1] !== listImageLabels.ground_floor_plan ? `${rule[1]} ${Number(number)}` : rule[1];
}

function getImageLoaderForFolder(folderName) {
    return Object.entries(imageLoader)
        .filter(([path]) => path.includes(`/photosProjets/${folderName}/`))
        .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
        // isDrawing : plans, coupes, façades, axonométries → affichés en entier (contain) dans le carrousel
        .map(([path, load]) => ({ load, label: imageLabel(path), isDrawing: !/Vue (EXT|INT)/i.test(path.split("/").pop()) }));
}

export const projetsConfig = {
    Projet1: {
        color: "bg-chrome-400",
        content: content.projects.project_1,
        category: content.projects.category.draft,
        cover: cover1,
        status: content.projects.empty,
        location: content.projects.empty,
        year: content.projects.empty,
        getImageLoader: () => getImageLoaderForFolder("projet1"),
    },
    Projet2: {
        color: "bg-greige-400",
        content: content.projects.project_2,
        category: content.projects.category.draft,
        cover: cover2,
        status: content.projects.empty,
        location: content.projects.empty,
        year: content.projects.empty,
        getImageLoader: () => getImageLoaderForFolder("projet2"),
    },
    Projet3: {
        color: "bg-walnut-400",
        content: content.projects.project_3,
        category: content.projects.category.draft,
        cover: cover3,
        status: content.projects.empty,
        location: content.projects.empty,
        year: content.projects.empty,
        getImageLoader: () => getImageLoaderForFolder("projet3"),
    },
    Projet4: {
        color: "bg-seafoam-300",
        content: content.projects.project_4,
        category: content.projects.category.draft,
        cover: cover4,
        status: content.projects.empty,
        location: content.projects.empty,
        year: content.projects.empty,
        getImageLoader: () => getImageLoaderForFolder("projet4"),
    },
    Projet5: {
        color: "bg-greige-400",
        content: content.projects.project_5,
        category: content.projects.category.draft,
        cover: cover5,
        status: content.projects.empty,
        location: content.projects.empty,
        year: content.projects.empty,
        getImageLoader: () => getImageLoaderForFolder("projet5"),
    },
    Projet6: {
        color: "bg-orange-400",
        content: content.projects.project_6,
        category: content.projects.category.draft,
        cover: cover6,
        status: content.projects.status.ongoing,
        location: content.projects.location.nice,
        year: content.projects.year.twentySix,
        getImageLoader: () => getImageLoaderForFolder("projet6"),
    }
};