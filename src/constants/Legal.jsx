import { content } from "./Content";

const { address, phone, email } = content.contact;
const mail = { label: email.text, href: `mailto:${email.text}` };
const tel = { label: phone.text, href: `tel:${phone.url}` };
const place = { label: address.text, href: address.url };

export const legal = {
    updated: "27 novembre 2026",
    updated_label: "Mise à jour le",
    toc_label: "Sommaire",
    links_label: "Informations légales",

    notice: {
        url: "/mentions-legales",
        title: "Mentions légales",
        meta_title: "Mentions légales | Atelier Gabriel Santos",
        meta_description: "Mentions légales du site de L'atelier Gabriel Santos, architecte inscrit à l'Ordre des architectes d'Île-de-France.",
        intro: "Qui édite ce site, qui l'héberge, et comment en utiliser les contenus.",
        sections: [
            {
                id: "editeur",
                title: "Éditeur du site",
                blocks: [
                    "Le site www.ateliergabrielsantos.com est édité par Gabriel Santos, entrepreneur individuel (EI Gabriel Santos), architecte exerçant à titre libéral sous le régime de la micro-entreprise.",
                    {
                        details: [
                            [
                                "Adresse", 
                                [place]
                            ],
                            [
                                "Téléphone", 
                                [tel]
                            ],
                            [
                                "E-mail", 
                                [mail]
                            ],
                            [
                                "SIREN", 
                                "945 076 172"
                            ],
                            [
                                "Directeur de la publication", 
                                "Gabriel Santos"
                            ],
                        ],
                    },
                ],
            },
            {
                id: "profession",
                title: "Profession réglementée",
                blocks: [
                    "Gabriel Santos porte le titre d'architecte. Il est titulaire du diplôme d'État d'architecte et de l'habilitation à exercer la maîtrise d'œuvre en son nom propre (HMONP), délivrés en France.",
                    {
                        details: [
                            [
                                "Inscription",
                                "Tableau de l'Ordre des architectes, conseil régional d'Île-de-France"
                            ],
                            [
                                "Numéro", 
                                "094583"
                            ],
                            [
                                "Assureur", 
                                "Mutuelle des Architectes Français assurances (MAF), 189 boulevard Malesherbes, 75856 Paris Cedex 17"
                            ],
                            [
                                "Couverture", 
                                "France hexagonale et territoires d'outre-mer"
                            ],
                        ],
                    },
                    [
                        "La profession est régie par la loi n° 77-2 du 3 janvier 1977 sur l'architecture (dont l'article 16 impose l'assurance professionnelle) et par le code de déontologie des architectes (décret n° 80-217 du 20 mars 1980), consultables sur ",
                        { 
                            label: "le site de l'Ordre des architectes", 
                            href: "https://www.architectes.org" 
                        },
                        ".",
                    ],
                ],
            },
            {
                id: "hebergement",
                title: "Hébergement",
                blocks: [
                    {
                        details: [
                            [
                                "Hébergeur", 
                                "Vercel Inc."
                            ],
                            [
                                "Adresse", 
                                "440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis"],
                            [
                                "Contact", 
                                [
                                    { 
                                        label: "vercel.com/help", 
                                        href: "https://vercel.com/help" 
                                    }
                                ]
                            ],
                        ],
                    },
                ],
            },
            {
                id: "propriete-intellectuelle",
                title: "Propriété intellectuelle",
                blocks: [
                    "Les textes, plans, perspectives, photographies des projets et le logo présents sur ce site sont la propriété de Gabriel Santos, sauf mention contraire.",
                    "Toute reproduction ou réutilisation, même partielle, nécessite son autorisation écrite préalable. À défaut, elle constitue une contrefaçon (articles L. 335-2 et suivants du code de la propriété intellectuelle).",
                    [
                        "Pour toute demande d'utilisation, écrivez à ", 
                        mail, 
                        "."
                    ],
                ],
            },
            {
                id: "credits",
                title: "Crédits",
                blocks: [
                    {
                        details: [
                            [
                                "Projets, plans et perspectives", 
                                "Gabriel Santos"
                            ],
                            [
                                "Photographies de la page Services",
                                [
                                    "them snapshots, Mark Potterton, Zaji Kanamajinas, Hans, Fabrizio Coco et Curated Lifestyle, via ",
                                    { 
                                        label: "Unsplash", 
                                        href: "https://unsplash.com/license" 
                                    },
                                    " (licence Unsplash)",
                                ],
                            ],
                            [
                                "Polices de caractères", 
                                "Satoshi (Indian Type Foundry, licence Fontshare) et Instrument Sans (licence SIL Open Font License), hébergées sur le site"
                            ],
                        ],
                    },
                ],
            },
            {
                id: "liens",
                title: "Liens vers d'autres sites",
                blocks: [
                    "Le site contient des liens vers LinkedIn, Instagram et Architectes pour tous. Gabriel Santos n'est pas responsable du contenu de ces sites ni de leur traitement des données personnelles.",
                ],
            },
            {
                id: "donnees-personnelles",
                title: "Données personnelles",
                blocks: [
                    [
                        "Ce site ne dépose aucun cookie. Le traitement des données personnelles est décrit dans la ", 
                        { 
                            label: "politique de confidentialité", 
                            href: "/politique-de-confidentialite" 
                        }, 
                        "."
                    ],
                ],
            },
            {
                id: "droit-applicable",
                title: "Droit applicable",
                blocks: [
                    [
                        "Les présentes mentions sont soumises au droit français. Pour signaler une erreur ou un problème sur le site, écrivez à ", mail, "."
                    ],
                ],
            },
        ],
    },

    privacy: {
        url: "/politique-de-confidentialite",
        title: "Politique de confidentialité",
        meta_title: "Politique de confidentialité | Atelier Gabriel Santos",
        meta_description: "Données personnelles traitées par le site de L'atelier Gabriel Santos : aucun cookie, aucun formulaire, mesure d'audience anonyme.",
        intro: "Quelles données ce site traite, pourquoi, combien de temps, et comment exercer vos droits.",
        sections: [
            {
                id: "en-bref",
                title: "En bref",
                blocks: [
                    {
                        list: [
                            "Aucun cookie, aucun enregistrement dans votre navigateur.",
                            "Aucun formulaire : seules les informations que vous envoyez vous-même par e-mail ou par téléphone sont traitées.",
                            "Une mesure d'audience anonyme, qui ne permet pas de vous identifier.",
                            "Aucune donnée vendue ni utilisée à des fins publicitaires.",
                        ],
                    },
                ],
            },
            {
                id: "responsable",
                title: "Responsable du traitement",
                blocks: [
                    {
                        details: [
                            [
                                "Responsable", "Gabriel Santos, entrepreneur individuel (EI Gabriel Santos)"
                            ],
                            [
                                "Adresse", 
                                [place]
                            ],
                            [
                                "E-mail", 
                                [mail]
                            ],
                        ],
                    },
                ],
            },
            {
                id: "traitements",
                title: "Données traitées",
                blocks: [
                    {
                        table: {
                            caption: "Données traitées, finalité, base légale et durée de conservation",
                            head: ["Situation", "Données", "Pourquoi", "Base légale (RGPD)", "Conservation"],
                            rows: [
                                [
                                    "Vous écrivez ou appelez l'atelier",
                                    "Celles que vous choisissez de transmettre : nom, coordonnées, adresse et description du projet",
                                    "Répondre à votre demande, établir une proposition, suivre le projet si une mission est confiée",
                                    "Mesures précontractuelles et exécution du contrat (art. 6.1.b)",
                                    "3 ans après le dernier contact sans suite ; pour les clients, la mission puis 10 ans (pièces comptables et responsabilité de l'architecte)",
                                ],
                                [
                                    "Vous visitez le site",
                                    "Adresse IP, date et heure, page demandée, navigateur (journaux de l'hébergeur)",
                                    "Faire fonctionner le site et le protéger contre les abus",
                                    "Intérêt légitime (art. 6.1.f)",
                                    "Durée limitée fixée par l'hébergeur",
                                ],
                                [
                                    "Mesure d'audience",
                                    "Données anonymes : page consultée, site de provenance, pays et région, type d'appareil, navigateur, système",
                                    "Connaître la fréquentation des pages (Vercel Web Analytics, sans cookie)",
                                    "Intérêt légitime (art. 6.1.f), exempté de consentement selon la CNIL",
                                    "Empreinte de visite supprimée après 24 heures ; statistiques anonymes",
                                ],
                            ],
                        },
                    },
                    "Fournir ces données n'est jamais obligatoire : vous pouvez consulter tout le site sans rien transmettre.",
                ],
            },
            {
                id: "cookies",
                title: "Cookies et contenus tiers",
                blocks: [
                    "Aucun cookie n'est déposé et aucun stockage local n'est utilisé : il n'y a donc aucun bandeau à accepter.",
                    "Les polices de caractères et les images sont hébergées sur le site. Aucun service tiers (Google Fonts, réseaux sociaux, cartes) n'est contacté pendant votre visite. Les liens vers LinkedIn, Instagram et Architectes pour tous ouvrent ces sites, qui appliquent leur propre politique.",
                ],
            },
            {
                id: "destinataires",
                title: "Destinataires et transferts",
                blocks: [
                    "Vos données ne sont accessibles qu'à Gabriel Santos et, pour l'hébergement et la mesure d'audience, à Vercel Inc., qui agit comme sous-traitant.",
                    [
                        "Vercel Inc. est située aux États-Unis. Elle est certifiée au cadre de protection des données UE–États-Unis (Data Privacy Framework), reconnu par la Commission européenne comme offrant un niveau de protection adéquat : voir ",
                        { 
                            label: "sa certification sur le site officiel du Data Privacy Framework", 
                            href: "https://www.dataprivacyframework.gov/list" 
                        },
                        " et ",
                        { 
                            label: "la politique de confidentialité de Vercel", 
                            href: "https://vercel.com/legal/privacy-policy" 
                        },
                        ".",
                    ],
                ],
            },
            {
                id: "vos-droits",
                title: "Vos droits",
                blocks: [
                    "Vous pouvez accéder à vos données, les faire rectifier ou effacer, en limiter le traitement, vous y opposer et demander leur portabilité. Vous pouvez aussi définir des directives sur le sort de vos données après votre décès.",
                    {
                        box: [
                            [
                                "Pour exercer vos droits, écrivez à ", 
                                mail, 
                                " ou par courrier à EI Gabriel Santos, ", 
                                address.text, 
                                "."
                            ],
                            "Une réponse vous sera apportée dans un délai d'un mois. Une pièce d'identité ne vous sera demandée qu'en cas de doute raisonnable sur votre identité.",
                        ],
                    },
                    [
                        "Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL : ",
                        { 
                            label: "cnil.fr/plaintes", 
                            href: "https://www.cnil.fr/fr/plaintes" 
                        },
                        " ou 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.",
                    ],
                ],
            },
        ],
    },
};
