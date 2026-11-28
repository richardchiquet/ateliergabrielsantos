import { buildMeta } from "../constants/Seo";
import { legal } from "../constants/Legal";
import LegalPage from "../components/layout/LegalPage";

export const meta = () => buildMeta({
    title: legal.notice.meta_title,
    description: legal.notice.meta_description,
    path: legal.notice.url,
    breadcrumb: legal.notice.title,
});

export default function MentionsLegales() {
    return <LegalPage page={legal.notice} />;
}
