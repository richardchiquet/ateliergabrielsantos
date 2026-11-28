import { buildMeta } from "../constants/Seo";
import { content } from "../constants/Content";
import Container from "../components/layout/Container";

// Images
import { serviceImages } from "../constants/ServiceImages";

export const meta = () => buildMeta({
    title: content.meta.services.title,
    description: content.meta.services.description,
    path: "/services",
    breadcrumb: content.services.title,
});

// Intertitre « Nos prestations » puis la liste
function ServicesList({items}){
    return (
        <>
        <p className="text-eyebrow mt-3">
            {content.services.list_title}
        </p>
        <ul className="list-disc mx-5 mt-2">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
        </>
    )
}

function ServiceText({ service, className = "" }) {
    return (
        <div className={`flex flex-col max-md:pl-8 ${className}`}>
            <h2 className="mb-5">
                {service.title}
            </h2>
            <p className="mb-3">
                {service.text}
            </p>
            <ServicesList items={service.list} />
        </div>
    );
}

function ServiceBlock({ service, imageSide = "left" }) {
    const right = imageSide === "right";
    return (
        <Container className="grid-layout items-center gap-y-6 py-20 md:gap-y-12 md:py-12">
            <img
                src={serviceImages[service.id]}
                alt={service.alt}
                className={`w-full h-auto object-cover md:row-start-1 md:col-span-3 lg:col-span-4 ${right ? "md:col-start-6 lg:col-start-9" : "md:col-start-1"}`}
            />
            <ServiceText
                service={service}
                className={`justify-center md:row-start-1 md:col-span-4 lg:col-span-6 ${right ? "md:col-start-1" : "md:col-start-5 lg:col-start-6"}`}
            />
        </Container>
    );
}

function ServiceHalf({ service }) {
    return (
        <div id={service.id} className="grid grid-cols-subgrid gap-y-6 md:col-span-4 lg:col-span-6">
            <img src={serviceImages[service.id]} alt={service.alt} className="col-span-full w-full aspect-3/2 object-cover" />
            <ServiceText service={service} className="col-span-full" />
        </div>
    );
}

export default function Services() {
    return (
        <div>
            {/* Construction neuve */}
            <section id={content.services.new_construction.id} className="w-full min-h-section flex flex-col">
                <Container>
                    <h1 className="py-12 text-left w-full">
                        {content.services.subtitle}
                    </h1>
                </Container>
                <div className="my-auto">
                    <ServiceBlock service={content.services.new_construction} imageSide="left" />
                </div>
            </section>

            {/* Renovation */}
            <section id={content.services.renovation.id} className="bg-seafoam-300 w-full min-h-section flex flex-col justify-center">
                <ServiceBlock service={content.services.renovation} imageSide="right" />
            </section>

            {/* Extension */}
            <section id={content.services.extension.id} className="w-full min-h-section flex flex-col justify-center">
                <ServiceBlock service={content.services.extension} imageSide="left" />
            </section>

            {/* Aménagement intérieur et mobilier */}
            <section id="amenagement-interieur-et-mobilier" className="bg-lemon-500 w-full min-h-section flex flex-col justify-center">
                <Container className="grid-layout items-start gap-y-20 py-20 md:gap-y-12 md:py-12">
                    <ServiceHalf service={content.services.interior_design} />
                    <ServiceHalf service={content.services.furniture} />
                </Container>
            </section>
            
            {/* Équipement public */}
            <section id={content.services.public_facilities.id} className="w-full min-h-section flex flex-col justify-center">
                <ServiceBlock service={content.services.public_facilities} imageSide="right" />
            </section>
        </div>
    )
}
