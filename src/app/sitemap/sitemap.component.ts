import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitemap',
  template: '',
})
export class SitemapComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const routes = this.router.config.filter(route => route.path !== '**'); // Exclude wildcard routes
    const sitemapEntries = routes.map(route => ({
      loc: `https://softgenics.online/${route.path}`, // Update with your domain
      changefreq: 'monthly', // Modify as needed
      priority: 0.8, // Modify as needed
    }));
    const sitemapXml = this.generateSitemapXml(sitemapEntries);
    console.log(sitemapXml);
    // You can also save this XML to a file or send it to the client upon a specific route request.
  }

  generateSitemapXml(entries: any[]): string {
    // Create and return the sitemap XML string
    const urls = entries
      .map(entry => `<url><loc>${entry.loc}</loc><changefreq>${entry.changefreq}</changefreq><priority>${entry.priority}</priority></url>`)
      .join('\n');
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;
  }
}
