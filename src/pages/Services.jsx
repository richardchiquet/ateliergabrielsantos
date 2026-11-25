import { buildMeta } from "../constants/Seo";
import { content } from "../constants/Content";
import Section from "../components/layout/Section";
import MediaText from "../components/MediaText";
import Card from "../components/Card";
import Picture from "../components/Picture";
import ContactCta from "../components/ContactCta";

// Images
import serviceConstructionNeuve from "../assets/photosServices/constructionNeuve.webp";
import serviceRenovation from "../assets/photosServices/renovation.webp";
import serviceEquipementPublic from "../assets/photosServices/equipementPublic.webp";
import serviceExtension from "../assets/photosServices/extension.webp";
import serviceAmenagementInterieur from "../assets/photosServices/amenagementInterieur.webp";
import serviceMobilier from "../assets/photosServices/mobilier.webp";

export const meta = () => buildMeta({
    title: content.meta.services.title,
    description: content.meta.services.description,
    path: "/services",
});

function ServiceDetails({ service }) {
    return (
        <>
            <p>{service.text}</p>
            <p className="text-eyebrow mt-6">{content.services.list_title}</p>
            <ul className="mt-2 list-disc pl-6">
                {service.list.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

function ServiceMediaText({ id, bg, imageSide, image, service }) {
    return (
        <Section id={id} bg={bg} labelledBy={`${id}-title`}>
            <MediaText
                imageSide={imageSide}
                media={<Picture src={image} alt={service.alt} ratio="portrait" caption={service.credit} />}
            >
                <h2 id={`${id}-title`} className="mb-6">{service.title}</h2>
                <ServiceDetails service={service} />
            </MediaText>
        </Section>
    );
}

function ServicePair({ id, bg, title, items }) {
    return (
        <Section id={id} bg={bg} labelledBy={`${id}-title`}>
            <h2 id={`${id}-title`}>{title}</h2>
            <div className="grid-12 mt-12 gap-y-12">
                {items.map(({ image, service }) => (
                    <div key={service.title} className="md:col-span-6">
                        <Card image={image} imageAlt={service.alt} caption={service.credit} title={service.title}>
                            <ServiceDetails service={service} />
                        </Card>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default function Services() {
    const s = content.services;

    return (
        <>
            <Section labelledBy="services-title" className="pb-0 lg:pb-0">
                <h1 id="services-title">{s.subtitle}</h1>
            </Section>

            <ServiceMediaText id="construction-neuve" imageSide="left" image={serviceConstructionNeuve} service={s.new_construction} />
            <ServiceMediaText id="renovation" bg="teal" imageSide="right" image={serviceRenovation} service={s.renovation} />

            <ServicePair
                id="amenagement-interieur-et-mobilier"
                title={`${s.interior_design.title} et ${s.furniture.title.toLowerCase()}`}
                items={[
                    { image: serviceAmenagementInterieur, service: s.interior_design },
                    { image: serviceMobilier, service: s.furniture },
                ]}
            />
            <ServicePair
                id="equipement-public-et-extension"
                bg="mustard"
                title={`${s.public_facilities.title} et ${s.extension.title.toLowerCase()}`}
                items={[
                    { image: serviceEquipementPublic, service: s.public_facilities },
                    { image: serviceExtension, service: s.extension },
                ]}
            />

            <ContactCta />
        </>
    );
}
