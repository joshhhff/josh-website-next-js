"use client";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function NavLogo() {

    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const isProjectsPage = pathname === "/projects";
    const isProjectsSubroute = pathname.startsWith("/projects/");
    const isPersonalProjectsPage = pathname.startsWith("/about/");

    const linkToNavigateTo = isHomePage || isProjectsPage ? "/" : isProjectsSubroute ? "/projects" : isPersonalProjectsPage ? "/about" : "/";

    return (
        <Link href={linkToNavigateTo}>
            {isHomePage ? (
                <p style={{ fontSize: 24 }}>Josh Ford</p>
            ) : (
                <FaArrowLeftLong size={24} className="nav-arrow" />
            )}
        </Link>
    );
}