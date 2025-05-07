import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

interface ArrowLinkProps {
    text: string;
    link: string;
    colour?: string
}

export default function ArrowLink({text, link, colour}: ArrowLinkProps) {
    return (
        <Link href={link} className="arrow-link" style={{ color: colour }}>
            {text}
            <FaArrowRightLong className="arrow-link-arrow" />
        </Link>
    )
}
