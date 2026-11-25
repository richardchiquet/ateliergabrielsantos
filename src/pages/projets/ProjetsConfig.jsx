import { content } from "../../constants/Content";

// Images
import cover1 from "../../assets/photosProjets/projet1/001-1-MICRO HABITAT 01-Vue EXT 01.jpg";
import cover2 from "../../assets/photosProjets/projet2/002-1-FAMILY HOUSE 01-Vue EXT 01.jpg";
import cover3 from "../../assets/photosProjets/projet3/004-1-MICRO HABITAT 02-Vue EXT 01.jpg";
import cover4 from "../../assets/photosProjets/projet4/003-1-RENOVATION INTERIEUR 01-Vue INT 01.webp";
import cover5 from "../../assets/photosProjets/projet5/006-1-CABANON 01-Vue EXT 01.jpg";
import cover6 from "../../assets/photosProjets/projet6/007-1-Appartement Nice-Vue INT 01.webp";

const imageLoader = import.meta.glob("../../assets/photosProjets/*/*.{jpg,jpeg,png,webp}");

// Libellé lisible tiré du nom de fichier : "001-2-MICRO HABITAT 01-Vue INT 01.webp" → "Vue intérieure 01"
const LABELS = [
    [/Vue EXT/i, "Vue extérieure"],
    [/Vue INT/i, "Vue intérieure"],
    [/Plan/i, "Plan"],
    [/Coupe/i, "Coupe"],
    [/Fa[cç]ade/i, "Façade"],
    [/Axonom[eé]trie/i, "Axonométrie"],
];

function describe(path) {
    const name = path.split("/").pop().replace(/\.[a-z]+$/i, "");
    const last = name.split("-").pop().trim();
    const label = LABELS.find(([re]) => re.test(last));
    const number = last.match(/\d+$/)?.[0];
    return {
        label: label ? `${label[1]}${number ? ` ${number}` : ""}` : last,
        // Plans, coupes, façades, axonométries : affichés en entier (contain) sur fond crème
        isDrawing: !/Vue (EXT|INT)/i.test(last),
    };
}

// Images d'un projet, triées, sans la couverture (déjà affichée en tête de fiche)
function getImagesForFolder(folderName) {
    return Object.entries(imageLoader)
        .filter(([path]) => path.includes(`/photosProjets/${folderName}/`))
        .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
        .slice(1)
        .map(([path, load]) => ({ ...describe(path), load }));
}

export const projetsConfig = {
    Projet1: {
        color: "bg-chrome-400",
        content: content.projects.project_1,
        category: content.projects.category.draft,
        cover: cover1,
        status: content.projects.status.empty,
        location: "",
        year: "",
        getImages: () => getImagesForFolder("projet1"),
    },
    Projet2: {
        color: "bg-greige-400",
        content: content.projects.project_2,
        category: content.projects.category.draft,
        cover: cover2,
        status: content.projects.status.empty,
        location: "",
        year: "",
        getImages: () => getImagesForFolder("projet2"),
    },
    Projet3: {
        color: "bg-walnut-400",
        content: content.projects.project_3,
        category: content.projects.category.draft,
        cover: cover3,
        status: content.projects.status.empty,
        location: "",
        year: "",
        getImages: () => getImagesForFolder("projet3"),
    },
    Projet4: {
        color: "bg-seafoam-300",
        content: content.projects.project_4,
        category: content.projects.category.draft,
        cover: cover4,
        status: content.projects.status.empty,
        location: "",
        year: "",
        getImages: () => getImagesForFolder("projet4"),
    },
    Projet5: {
        color: "bg-greige-400",
        content: content.projects.project_5,
        category: content.projects.category.draft,
        cover: cover5,
        status: content.projects.status.empty,
        location: "",
        year: "",
        getImages: () => getImagesForFolder("projet5"),
    },
    Projet6: {
        color: "bg-orange-400",
        content: content.projects.project_6,
        category: content.projects.category.draft,
        cover: cover6,
        status: content.projects.status.ongoing,
        location: "Nice",
        year: "",
        getImages: () => getImagesForFolder("projet6"),
    }

};