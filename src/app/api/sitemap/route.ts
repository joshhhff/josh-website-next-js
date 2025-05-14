'use server';
import { ProjectKeys, PersonalProjectsKeys } from '@/app/constants/constants';

export async function GET(request: Request) {
    const domainToUse = new URL(request.url).host;

    const pages = [
        { url: `https://${domainToUse}`, lastmod: '2025-05-09' },
        { url: `https://${domainToUse}/projects`, lastmod: '2025-05-14' },
        { url: `https://${domainToUse}/about`, lastmod: '2025-05-11' },
        { url: `https://${domainToUse}/contact`, lastmod: '2025-05-11' },
    ]

    const dynamicProjectPages = (Object.keys(ProjectKeys) as Array<keyof typeof ProjectKeys>).map((key) => {
        const projectKey = key as keyof typeof ProjectKeys;
        const project = ProjectKeys[key];
        
        return {
            url: `https://${domainToUse}/projects/${projectKey}`,
            lastmod: project.lastModified,
        }
    });

    const dynamicPersonalProjectPages = (Object.keys(PersonalProjectsKeys) as Array<keyof typeof PersonalProjectsKeys>).map((key) => {
        const projectKey = key as keyof typeof PersonalProjectsKeys;
        const project = PersonalProjectsKeys[key];
        
        return {
            url: `https://${domainToUse}/about/${projectKey}`,
            lastmod: project.lastModified,
        }
    });

    pages.push(...dynamicProjectPages);
    pages.push(...dynamicPersonalProjectPages);

    // Generate the sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
            ${pages.map(({ url, lastmod }) => `
            <url>
                <loc>${url as string}</loc>
                <lastmod>${lastmod}</lastmod>
            </url>
            `).join('')}
        </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}