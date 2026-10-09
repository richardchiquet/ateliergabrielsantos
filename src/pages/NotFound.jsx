import Header from "../components/Header";
import Footer from "../components/Footer";
import { content } from "../constants/Content";
import { SITE_NAME } from "../constants/Seo";
import { Link } from "react-router";

export const meta = () => [
    { title: `${content.not_found.title} | ${SITE_NAME}` },
    { name: "robots", content: "noindex" },
];

export default function NotFound() {
    return (
        <div id="top" className="min-h-screen scroll-mt-100">
            <Header />
            <div className="bg-greige-400 text-black w-full min-h-[calc(100vh-72px)] flex items-center justify-center px-6 py-20">
                <div className="flex flex-col items-start max-w-xl">
                    <p className="font-title text-[8rem] md:text-[12rem] leading-none text-white" aria-hidden="true">
                        {content.not_found.code}
                    </p>
                    <h1 className="mt-4 mb-5">
                        {content.not_found.title}
                    </h1>
                    <p className="text-formatting">
                        {content.not_found.text}
                    </p>
                    <div className="mt-10 flex flex-col md:flex-row gap-5">
                        <Link to={{ pathname: "/", hash: "top" }} className="cta-button home-primary w-fit">
                            {content.not_found.cta.home}
                        </Link>
                        <Link to={{ pathname: "/projets", hash: "top" }} className="cta-button home-secondary w-fit">
                            {content.not_found.cta.projects}
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
