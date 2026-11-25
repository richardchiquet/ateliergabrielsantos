import Header from "../components/Header";
import { content } from "../constants/Content";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { websiteName } from "../constants/Seo";

export const meta = () => [
    { title: `${content.not_found.title} | ${websiteName}` },
    { name: "robots", content: "noindex" },
];

export default function NotFound() {
    return (
        <div id="top" className="min-h-screen scroll-mt-100">
            <Header />
            <div className="bg-walnut-200 w-full min-h-[calc(100vh-72px)] flex items-center justify-center px-6 py-20">
                <div className="flex flex-col items-start max-w-xl">
                    <h1 className="text-8xl">
                        {content.not_found.code}
                    </h1>
                    <h2 className="mt-4 mb-5">
                        {content.not_found.title}
                    </h2>
                    <p className="text-formatting">
                        {content.not_found.text}
                    </p>
                    <div className="mt-10 flex flex-col md:flex-row gap-5">
                        <Link to={{ pathname: "/" }} className="cta-button walnut-primary w-fit">
                            {content.not_found.cta.home}
                        </Link>
                        <Link to={{ pathname: "/projets" }} className="cta-button walnut-secondary w-fit">
                            {content.not_found.cta.projects}
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
