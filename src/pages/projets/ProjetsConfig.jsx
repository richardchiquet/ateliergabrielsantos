import { content } from "../../constants/Content";

// Images
import cover1 from "../../assets/photosProjets/projet1/001-1-MICRO HABITAT 01-Vue EXT 01.jpg";
import cover2 from "../../assets/photosProjets/projet2/002-1-FAMILY HOUSE 01-Vue EXT 01.jpg";
import cover3 from "../../assets/photosProjets/projet3/004-1-MICRO HABITAT 02-Vue EXT 01.jpg";
import cover4 from "../../assets/photosProjets/projet4/003-1-RENOVATION INTERIEUR 01-Vue INT 01.jpg";
import cover5 from "../../assets/photosProjets/projet5/006-1-CABANON 01-Vue EXT 01.jpg";

const imageLoader = import.meta.glob("../../assets/photosProjets/*/*.jpg");

function getImageLoaderForFolder(folderName) {
    return Object.entries(imageLoader)
    .filter(([path]) => path.includes(`/photosProjets/${folderName}/`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
    .map(([, loader]) => loader);

}

export const projetsConfig = {
    Projet1: {
        color: "bg-chrome-400",
        content: content.projects.project_1,
        text_color: "text-black",
        category: content.projects.category.draft,
        cover: cover1,
        getImageLoader: () => getImageLoaderForFolder("projet1"),
    },
    Projet2: {
        color: "bg-greige-400",
        content: content.projects.project_2,
        text_color: "text-black",
        category: content.projects.category.draft,
        cover: cover2,
        getImageLoader: () => getImageLoaderForFolder("projet2"),
    },
    Projet3: {
        color: "bg-chrome-900",
        content: content.projects.project_3,
        text_color: "text-white",
        category: content.projects.category.draft,
        cover: cover3,
        getImageLoader: () => getImageLoaderForFolder("projet3"),
    },
    Projet4: {
        color: "bg-seafoam-400",
        content: content.projects.project_4,
        text_color: "text-black",
        category: content.projects.category.draft,
        cover: cover4,
        getImageLoader: () => getImageLoaderForFolder("projet4"),
    },
    Projet5: {
        color: "bg-greige-400",
        content: content.projects.project_5,
        text_color: "text-black",
        category: content.projects.category.draft,
        cover: cover5,
        getImageLoader: () => getImageLoaderForFolder("projet5"),
    }
};