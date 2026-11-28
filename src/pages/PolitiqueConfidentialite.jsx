import { legal, legalMeta } from "../constants/Legal";
import LegalPage from "../components/layout/LegalPage";

export const meta = () => legalMeta(legal.privacy);

export default function PolitiqueConfidentialite() {
    return <LegalPage page={legal.privacy} />;
}
