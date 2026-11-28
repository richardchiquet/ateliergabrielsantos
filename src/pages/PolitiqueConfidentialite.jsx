import { buildMeta } from "../constants/Seo";
import { legal } from "../constants/Legal";
import LegalPage from "../components/layout/LegalPage";

export const meta = () => buildMeta({
    title: legal.privacy.meta_title,
    description: legal.privacy.meta_description,
    path: legal.privacy.url,
    breadcrumb: legal.privacy.title,
});

export default function PolitiqueConfidentialite() {
    return <LegalPage page={legal.privacy} />;
}
