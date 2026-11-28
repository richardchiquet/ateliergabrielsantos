import { content } from "../../constants/Content";

// Images
import cover1 from "../../assets/photosProjets/projet1/001-1-MICRO HABITAT 01-Vue EXT 01.webp";
import cover2 from "../../assets/photosProjets/projet2/002-1-FAMILY HOUSE 01-Vue EXT 01.webp";
import cover3 from "../../assets/photosProjets/projet3/004-1-MICRO HABITAT 02-Vue EXT 01.webp";
import cover4 from "../../assets/photosProjets/projet4/003-1-RENOVATION INTERIEUR 01-Vue INT 01.webp";
import cover5 from "../../assets/photosProjets/projet5/006-1-CABANON 01-Vue EXT 01.webp";
import cover6 from "../../assets/photosProjets/projet6/007-1-Appartement Nice-Vue INT 01.webp";

// Versions réduites des couvertures pour les cartes de la page Projets (affichées sur 550px au plus)
import cover1Srcset from "../../assets/photosProjets/projet1/001-1-MICRO HABITAT 01-Vue EXT 01.webp?w=640;1280&format=webp&as=srcset";
import cover2Srcset from "../../assets/photosProjets/projet2/002-1-FAMILY HOUSE 01-Vue EXT 01.webp?w=640;1280&format=webp&as=srcset";
import cover3Srcset from "../../assets/photosProjets/projet3/004-1-MICRO HABITAT 02-Vue EXT 01.webp?w=640;1280&format=webp&as=srcset";
import cover4Srcset from "../../assets/photosProjets/projet4/003-1-RENOVATION INTERIEUR 01-Vue INT 01.webp?w=640;1280&format=webp&as=srcset";
import cover5Srcset from "../../assets/photosProjets/projet5/006-1-CABANON 01-Vue EXT 01.webp?w=640;1280&format=webp&as=srcset";
import cover6Srcset from "../../assets/photosProjets/projet6/007-1-Appartement Nice-Vue INT 01.webp?w=640;1280&format=webp&as=srcset";

// Images de partage (réseaux sociaux) des projets : couverture recadrée en 1200×630px, en JPG
import cover1Og from "../../assets/photosProjets/projet1/001-1-MICRO HABITAT 01-Vue EXT 01.webp?w=1200&h=630&fit=cover&format=jpeg&quality=82";
import cover2Og from "../../assets/photosProjets/projet2/002-1-FAMILY HOUSE 01-Vue EXT 01.webp?w=1200&h=630&fit=cover&format=jpeg&quality=82";
import cover3Og from "../../assets/photosProjets/projet3/004-1-MICRO HABITAT 02-Vue EXT 01.webp?w=1200&h=630&fit=cover&format=jpeg&quality=82";
import cover4Og from "../../assets/photosProjets/projet4/003-1-RENOVATION INTERIEUR 01-Vue INT 01.webp?w=1200&h=630&fit=cover&format=jpeg&quality=82";
import cover5Og from "../../assets/photosProjets/projet5/006-1-CABANON 01-Vue EXT 01.webp?w=1200&h=630&fit=cover&format=jpeg&quality=82";
import cover6Og from "../../assets/photosProjets/projet6/007-1-Appartement Nice-Vue INT 01.webp?w=1200&h=630&fit=cover&format=jpeg&quality=82";

// Chaque image de galerie est importée sous forme de srcset : 320px (miniatures), 960px et 1600px (mobile, tablette).
const imageLoader = import.meta.glob("../../assets/photosProjets/*/*.{jpg,jpeg,png,webp}");
const srcsetLoader = import.meta.glob("../../assets/photosProjets/*/*.{jpg,jpeg,png,webp}", { query: "?w=320;960;1600&format=webp&as=srcset", import: "default" });
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
    return number && rule[1] !== listImageLabels.ground_floor_plan ? `${rule[1]} ${Number(number)}` : rule[1];
}

function getImageLoaderForFolder(folderName) {
    return Object.entries(imageLoader)
        .filter(([path]) => path.includes(`/photosProjets/${folderName}/`))
        .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
        .map(([path, load]) => ({ load, loadSrcset: srcsetLoader[path], label: imageLabel(path), isDrawing: !/Vue (EXT|INT)/i.test(path.split("/").pop()) }));
}

export const projetsConfig = {
    Projet1: {
        url: content.projects.project_1.url,
        color: "bg-chrome-400",
        content: content.projects.project_1,
        category: content.projects.category.new_construction,
        cover: cover1,
        coverSrcset: cover1Srcset,
        coverOg: cover1Og,
        status: content.projects.status.draft,
        location: content.projects.empty,
        year: content.projects.year.twentySix,
        getImageLoader: () => getImageLoaderForFolder("projet1"),
    },
    Projet2: {
        url: content.projects.project_2.url,
        color: "bg-greige-400",
        content: content.projects.project_2,
        category: content.projects.category.new_construction,
        cover: cover2,
        coverSrcset: cover2Srcset,
        coverOg: cover2Og,
        status: content.projects.status.draft,
        location: content.projects.empty,
        year: content.projects.year.twentySix,
        getImageLoader: () => getImageLoaderForFolder("projet2"),
    },
    Projet3: {
        url: content.projects.project_3.url,
        color: "bg-walnut-400",
        content: content.projects.project_3,
        category: content.projects.category.new_construction,
        cover: cover3,
        coverSrcset: cover3Srcset,
        coverOg: cover3Og,
        status: content.projects.status.draft,
        location: content.projects.empty,
        year: content.projects.year.twentySix,
        getImageLoader: () => getImageLoaderForFolder("projet3"),
    },
    Projet4: {
        url: content.projects.project_4.url,
        color: "bg-seafoam-300",
        content: content.projects.project_4,
        category: content.projects.category.interior_design,
        cover: cover4,
        coverSrcset: cover4Srcset,
        coverOg: cover4Og,
        status: content.projects.status.draft,
        location: content.projects.empty,
        year: content.projects.year.twentySix,
        getImageLoader: () => getImageLoaderForFolder("projet4"),
    },
    Projet5: {
        url: content.projects.project_5.url,
        color: "bg-greige-400",
        content: content.projects.project_5,
        category: content.projects.category.new_construction,
        cover: cover5,
        coverSrcset: cover5Srcset,
        coverOg: cover5Og,
        status: content.projects.status.draft,
        location: content.projects.empty,
        year: content.projects.year.twentySix,
        getImageLoader: () => getImageLoaderForFolder("projet5"),
    },
    Projet6: {
        url: content.projects.project_6.url,
        color: "bg-orange-400",
        content: content.projects.project_6,
        category: content.projects.category.renovation,
        cover: cover6,
        coverSrcset: cover6Srcset,
        coverOg: cover6Og,
        status: content.projects.status.draft,
        location: content.projects.location.nice,
        year: content.projects.year.twentySix,
        getImageLoader: () => getImageLoaderForFolder("projet6"),
    }
};

export const getProjetByUrl = (url) => Object.values(projetsConfig).find((projet) => projet.url === url);