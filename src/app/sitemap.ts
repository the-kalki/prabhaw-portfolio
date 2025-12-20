import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://prabhaw.dev'; // Placeholder domain

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Since it's a single page app with sections, we mainly index the root.
        // However, if we had multiple pages, we'd list them here.
    ];
}
