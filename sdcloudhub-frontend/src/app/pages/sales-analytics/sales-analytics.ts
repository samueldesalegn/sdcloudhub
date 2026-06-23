import { Component } from '@angular/core';

interface Highlight {
  img: string;
  alt: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-sales-analytics',
  standalone: true,
  templateUrl: './sales-analytics.html',
  styleUrl: './sales-analytics.scss',
})
export class SalesAnalytics {
  /**
   * Base path for the screenshots.
   * Files live directly in: sdcloudhub-frontend/src/assets/
   * and are served at /assets/<file>.
   */
  readonly imgBase = '/assets';

  // TODO: replace <your-username> with your actual GitHub handle.
  readonly githubUrl = 'https://github.com/<your-username>/sales-analytics-iac';

  // ---- Hero (image 1: the full dashboard) -------------------------------
  readonly hero = 'dashboard.png';
  readonly heroAlt =
    'QuickSight dashboard overview: KPI strip with 3.28M revenue, 1.08M profit ' +
    'and 33% margin, alongside a revenue-by-channel donut, a margin-vs-target ' +
    'gauge, and 18.89% year-over-year growth.';

  // ---- Tech tags --------------------------------------------------------
  readonly tags = [
    'Amazon S3',
    'Glue ETL (PySpark)',
    'Parquet',
    'Athena',
    'QuickSight',
    'AWS SAM',
    'GitHub Actions',
  ];

  // ---- Highlight cards (images 2, 3, 4) ---------------------------------
  readonly highlights: Highlight[] = [
    {
      img: 'product-profitability.png',
      alt:
        'Product profitability table and Profit by Category & Year bar chart. ' +
        'Total revenue 3.28M, profit 1.08M, 33% margin. Electronics dominates profit each year.',
      title: 'High volume, low margin — and vice versa',
      text:
        'The two biggest revenue lines, Laptop ($1.24M) and Phone ($877K), sit at the ' +
        'bottom of the margin table at ~29–30%, while tiny accessory lines like Cable and ' +
        'Case clear ~67%. Across 2024–2026, Electronics produces the overwhelming majority ' +
        'of total profit.',
    },
    {
      img: 'monthly-revenue.png',
      alt:
        'Monthly revenue line chart for 2024–2026 and a Revenue, Cost & Margin by Category ' +
        'combo chart where margin rises as category size falls.',
      title: 'Scale drives volume, not margin',
      text:
        'Monthly revenue trends upward year over year with strong seasonal swings. By ' +
        'category, Electronics moves the most money — roughly $2.6M revenue against $1.8M ' +
        'cost — yet runs the lowest margin (~0.30); margin climbs steadily toward ~0.65 as ' +
        'categories get smaller.',
    },
    {
      img: 'price-margin.png',
      alt:
        'Price vs. Margin bubble chart. Low-priced accessories sit near 65–67% margin while ' +
        'high-priced electronics cluster around 30%. Bubble size tracks revenue.',
      title: 'Cheaper products, fatter margins',
      text:
        'Plotting unit price against margin reveals a clean inverse relationship: sub-$100 ' +
        'accessories cluster at 60–67% margin, while premium Electronics like Phone and ' +
        'Laptop sit near 30%. Bubble size tracks revenue, so the largest revenue bubbles are ' +
        'also the lowest-margin ones.',
    },
  ];
}
