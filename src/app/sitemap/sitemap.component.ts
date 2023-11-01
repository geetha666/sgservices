import * as fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://softgenics.online' });
  const writeStream = createGzip();

  // Define your website's URLs
  const urls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.6 },
    { url: '/services', changefreq: 'weekly', priority: 0.8 },
    { url: '/angular', changefreq: 'monthly', priority: 0.6 },
    { url: '/psd-html', changefreq: 'monthly', priority: 0.6 },
    { url: '/wordpress', changefreq: 'monthly', priority: 0.6 },
    { url: '/singlepage', changefreq: 'monthly', priority: 0.6 },
    { url: '/ionic', changefreq: 'monthly', priority: 0.6 },





    // Add more URLs as needed
  ];

  // Add URLs to the sitemap
  urls.forEach((url) => {
    sitemap.write(url);
  });

  // End the sitemap
  sitemap.end();

  // Create and save the sitemap.xml.gz file
  const xml = await streamToPromise(sitemap).then((data) => data.toString());
  fs.writeFileSync('sitemap.xml.gz', xml);
}

generateSitemap().then(() => {
  console.log('Sitemap generated successfully.');
});