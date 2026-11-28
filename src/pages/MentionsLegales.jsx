import { legal, legalMeta } from "../constants/Legal";
import LegalPage from "../components/layout/LegalPage";

export const meta = () => legalMeta(legal.notice);

export default function MentionsLegales() {
    return <LegalPage page={legal.notice} />;
}
