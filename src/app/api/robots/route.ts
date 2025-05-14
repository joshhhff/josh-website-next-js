'use server';

export async function GET(request: Request) {
    const domainToUse = new URL(request.url).host;
    console.log('Domain to use for robots:', domainToUse);

    const robots = `User-agent: *
Disallow: /api/
Allow: /

Sitemap: https://${domainToUse}/sitemap.xml
`;

    return new Response(robots, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}