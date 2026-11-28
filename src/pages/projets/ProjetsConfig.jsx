import { content } from "../../constants/Content";

/*
    Images des projets, résolues à la compilation (vite-imagetools)
    Les URL sont importées directement (eager)
*/
const PROJETS = "../../assets/photosProjets";
// Galerie 
const galleryUrls = import.meta.glob("../../assets/photosProjets/*/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" });
const gallerySrcsets = import.meta.glob("../../assets/photosProjets/*/*.{jpg,jpeg,png,webp}", { eager: true, import: "default", query: "?w=320;960;1600&format=webp&as=srcset" });
// Couvertures 
const coverSrcsets = import.meta.glob("../../assets/photosProjets/*/[0-9][0-9][0-9]-1-*.webp", { eager: true, import: "default", query: "?w=640;1280&format=webp&as=srcset" });
const coverOgs = import.meta.glob("../../assets/photosProjets/*/[0-9][0-9][0-9]-1-*.webp", { eager: true, import: "default", query: "?w=1200&h=630&fit=cover&format=jpeg&quality=82" });

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

const inFolder = (glob, folder) => Object.entries(glob).find(([path]) => path.startsWith(`${PROJETS}/${folder}/`))?.[1];

function folderImages(folder) {
    const images = Object.keys(galleryUrls)
        .filter((path) => path.startsWith(`${PROJETS}/${folder}/`))
        .sort((pathA, pathB) => pathA.localeCompare(pathB, undefined, { numeric: true }))
        .map((path) => ({
            src: galleryUrls[path],
            srcSet: `${gallerySrcsets[path]}, ${galleryUrls[path]} 2560w`,
            label: imageLabel(path),
            isDrawing: !/Vue (EXT|INT)/i.test(path.split("/").pop()),
        }));
    return {
        images,
        cover: images[0].src,
        coverSrcset: inFolder(coverSrcsets, folder),
        coverOg: inFolder(coverOgs, folder),
    };
}

export const projetsConfig = {
    Projet1: {
        url: content.projects.project_1.url,
        color: "bg-chrome-400",
        content: content.projects.project_1,
        category: content.projects.category.new_construction,
        status: content.projects.status.draft,
        location: content.projects.empty,
        year: content.projects.year.twentySix,
        ...folderImages("projet1"),
    },
    Projet2: {
        url: content.projects.project_2.url,
        color: "bg-greige-400",
        content: content.projects.project_2,
        category: content.projects.category.new_construction,
        status: content.projects.status.draft,
        location: content.projects.empty,
        year: content.projects.year.twentySix,
        ...folderImages("projet2"),
    },
    Projet3: {
        url: content.projects.project_3.url,
        color: "bg-walnut-400",
        content: content.projects.project_3,
        category: content.projects.category.new_construction,
        status: content.projects.status.draft,
        location: content.projects.empty,
        year: content.projects.year.twentySix,
        ...folderImages("projet3"),
    },
    Projet4: {
        url: content.projects.project_4.url,
        color: "bg-seafoam-300",
        content: content.projects.project_4,
        category: content.projects.category.interior_design,
        status: content.projects.status.draft,
        location: content.projects.empty,
        year: content.projects.year.twentySix,
        ...folderImages("projet4"),
    },
    Projet5: {
        url: content.projects.project_5.url,
        color: "bg-greige-400",
        content: content.projects.project_5,
        category: content.projects.category.new_construction,
        status: content.projects.status.draft,
        location: content.projects.empty,
        year: content.projects.year.twentySix,
        ...folderImages("projet5"),
    },
    Projet6: {
        url: content.projects.project_6.url,
        color: "bg-orange-400",
        content: content.projects.project_6,
        category: content.projects.category.renovation,
        status: content.projects.status.draft,
        location: content.projects.location.nice,
        year: content.projects.year.twentySix,
        ...folderImages("projet6"),
    }
};

// Informations affichées sous le titre
export const getProjetDetails = (projet) => [
    [content.projects.category.name, projet.category],
    [content.projects.status.name, projet.status],
    [content.projects.location.name, projet.location],
    [content.projects.year.name, projet.year],
].filter(([, value]) => value);

export const getProjetByUrl = (url) => Object.values(projetsConfig).find((projet) => projet.url === url);