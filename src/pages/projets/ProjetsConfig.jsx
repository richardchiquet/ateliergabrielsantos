import { content } from "../../constants/Content";

// Images
const imageLoader = import.meta.glob("../../assets/photosProjets/*/*.jpg");

function getImageLoaderForFolder(folderName) {
    return Object.entries(imageLoader)
    .filter(([path]) => path.includes(`/photosProjets/${folderName}/`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, loader]) => loader);

}

export const projetsConfig = {
    Projet1: {
        color: "bg-chrome-400",
        content: content.projects.project_1,
        text_color: "text-black",
        category: content.projects.category.draft,
        getImageLoader: () => getImageLoaderForFolder("projet1"),
    },
    Projet2: {
        color: "bg-greige-400",
        content: content.projects.project_2,
        text_color: "text-black",
        category: content.projects.category.draft,
        getImageLoader: () => getImageLoaderForFolder("projet2"),
    },
    Projet3: {
        color: "bg-chrome-900",
        content: content.projects.project_3,
        text_color: "text-white",
        category: content.projects.category.draft,
        getImageLoader: () => getImageLoaderForFolder("projet3"),
    },
    Projet4: {
        color: "bg-seafoam-400",
        content: content.projects.project_4,
        text_color: "text-black",
        category: content.projects.category.draft,
        getImageLoader: () => getImageLoaderForFolder("projet4"),
    },
    Projet5: {
        color: "bg-greige-400",
        content: content.projects.project_5,
        text_color: "text-black",
        category: content.projects.category.draft,
        getImageLoader: () => getImageLoaderForFolder("projet5"),
    }
};