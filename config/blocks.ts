export interface ComponentCategory {
  slug: string
  name: string
  components: { name: string; isPaid?: boolean }[]
  isNew?: boolean
}

export const blocks: ComponentCategory[] = [
  {
    slug: "about-sections",
    name: "About Sections",
    components: [
      {
        name: "about-sections-achievements",
        isPaid: true,
      },
      {
        name: "about-sections-animated-stats",
        isPaid: true,
      },
      {
        name: "about-sections-brand-values",
        isPaid: true,
      },
      {
        name: "about-sections-company-culture",
        isPaid: true,
      },
      {
        name: "about-sections-company-values",
      },
      {
        name: "about-sections-diversity-inclusion",
        isPaid: true,
      },
      {
        name: "about-sections-founders",
        isPaid: true,
      },
      {
        name: "about-sections-mission-statement",
        isPaid: true,
      },
      {
        name: "about-sections-press-recognitions",
        isPaid: true,
      },
      {
        name: "about-sections-process",
        isPaid: true,
      },
      {
        name: "about-sections-simple",
        isPaid: true,
      },
      {
        name: "about-sections-stats-grid",
        isPaid: true,
      },
      {
        name: "about-sections-tabs",
        isPaid: true,
      },
      {
        name: "about-sections-team-grid",
        isPaid: true,
      },
      {
        name: "about-sections-timeline",
        isPaid: true,
      },
      {
        name: "about-sections-two-column",
        isPaid: true,
      },
      {
        name: "about-sections-values",
        isPaid: true,
      },
      {
        name: "about-sections-with-image",
        isPaid: true,
      },
    ],
  },
  {
    slug: "accordions",
    name: "Accordions",
    components: [
      {
        name: "accordions-border-fade-accordion",
        isPaid: true,
      },
      {
        name: "accordions-card-accordion",
        isPaid: true,
      },
      {
        name: "accordions-dash-line-accordion",
        isPaid: true,
      },
      {
        name: "accordions-dotted-border-accordion",
        isPaid: true,
      },
      {
        name: "accordions-double-border-accordion",
        isPaid: true,
      },
      {
        name: "accordions-fade-in-content-accordion",
        isPaid: true,
      },
      {
        name: "accordions-floating-label-accordion",
        isPaid: true,
      },
      {
        name: "accordions-glow-border-accordion",
        isPaid: true,
      },
      {
        name: "accordions-highlight-active-accordion",
        isPaid: true,
      },
      {
        name: "accordions-minimal-line-accordion",
      },
      {
        name: "accordions-nested-border-accordion",
        isPaid: true,
      },
      {
        name: "accordions-numbered-accordion",
        isPaid: true,
      },
      {
        name: "accordions-shadow-reveal-accordion",
        isPaid: true,
      },
      {
        name: "accordions-stepped-accordion",
        isPaid: true,
      },
      {
        name: "accordions-thick-side-border-accordion",
        isPaid: true,
      },
      {
        name: "accordions-underline-accordion",
        isPaid: true,
      },
    ],
  },
  {
    slug: "ai-prompt",
    name: "Ai Prompt",
    components: [
      {
        name: "ai-prompt-welcome-page",
      },
    ],
  },
  {
    slug: "alerts",
    name: "Alerts",
    components: [
      {
        name: "alerts-accent-border-alerts",
      },
      {
        name: "alerts-all-sides-accent-alerts",
        isPaid: true,
      },
      {
        name: "alerts-basic-alerts",
        isPaid: true,
      },
      {
        name: "alerts-bottom-accent-alerts",
        isPaid: true,
      },
      {
        name: "alerts-compact-alerts",
        isPaid: true,
      },
      {
        name: "alerts-dashed-border-alerts",
        isPaid: true,
      },
      {
        name: "alerts-dismissible-alerts",
        isPaid: true,
      },
      {
        name: "alerts-dotted-border-alerts",
        isPaid: true,
      },
      {
        name: "alerts-double-border-alerts",
        isPaid: true,
      },
      {
        name: "alerts-elevated-alerts",
        isPaid: true,
      },
      {
        name: "alerts-frosted-glass-alerts",
        isPaid: true,
      },
      {
        name: "alerts-glow-border-alerts",
        isPaid: true,
      },
      {
        name: "alerts-icon-only-alerts",
        isPaid: true,
      },
      {
        name: "alerts-inset-alerts",
        isPaid: true,
      },
      {
        name: "alerts-monospace-alerts",
        isPaid: true,
      },
      {
        name: "alerts-outlined-alerts",
        isPaid: true,
      },
      {
        name: "alerts-paper-alerts",
        isPaid: true,
      },
      {
        name: "alerts-pulse-border-alerts",
        isPaid: true,
      },
      {
        name: "alerts-right-accent-alerts",
        isPaid: true,
      },
      {
        name: "alerts-top-accent-alerts",
        isPaid: true,
      },
    ],
  },
  {
    slug: "announcement-banners",
    name: "Announcement Banners",
    components: [
      {
        name: "announcement-banners-floating",
        isPaid: true,
      },
      {
        name: "announcement-banners-simple-centered",
      },
      {
        name: "announcement-banners-with-action",
        isPaid: true,
      },
      {
        name: "announcement-banners-with-countdown",
        isPaid: true,
      },
      {
        name: "announcement-banners-with-image",
        isPaid: true,
      },
      {
        name: "announcement-banners-with-social-proof",
        isPaid: true,
      },
    ],
  },
  {
    slug: "application-stats",
    name: "Application Stats",
    components: [
      {
        name: "application-stats-simple-cards",
      },
      {
        name: "application-stats-with-badges",
        isPaid: true,
      },
      {
        name: "application-stats-with-colored-icons",
        isPaid: true,
      },
      {
        name: "application-stats-with-description",
        isPaid: true,
      },
      {
        name: "application-stats-with-icons",
        isPaid: true,
      },
      {
        name: "application-stats-with-progress",
        isPaid: true,
      },
    ],
  },
  {
    slug: "badges",
    name: "Badges",
    components: [
      {
        name: "badges-3d-badge",
      },
      {
        name: "badges-bounce-badge",
        isPaid: true,
      },
      {
        name: "badges-dot-indicator-badge",
        isPaid: true,
      },
      {
        name: "badges-elevated-badge",
        isPaid: true,
      },
      {
        name: "badges-extra-large-badge",
        isPaid: true,
      },
      {
        name: "badges-gradient-border-badge",
        isPaid: true,
      },
      {
        name: "badges-hover-scale-badge",
        isPaid: true,
      },
      {
        name: "badges-icon-badge",
        isPaid: true,
      },
      {
        name: "badges-large-badge",
        isPaid: true,
      },
      {
        name: "badges-pulse-badge",
        isPaid: true,
      },
      {
        name: "badges-ribbon-badge",
        isPaid: true,
      },
      {
        name: "badges-square-badge",
        isPaid: true,
      },
    ],
  },
  {
    slug: "blog-sections",
    name: "Blog Sections",
    components: [
      {
        name: "blog-sections-author-spotlight",
        isPaid: true,
      },
      {
        name: "blog-sections-carousel",
      },
      {
        name: "blog-sections-case-study-showcase",
        isPaid: true,
      },
      {
        name: "blog-sections-category-filter",
        isPaid: true,
      },
      {
        name: "blog-sections-compact-list",
        isPaid: true,
      },
      {
        name: "blog-sections-expert-roundup",
        isPaid: true,
      },
      {
        name: "blog-sections-featured-list",
        isPaid: true,
      },
      {
        name: "blog-sections-featured-with-sidebar",
        isPaid: true,
      },
      {
        name: "blog-sections-hero-focus",
        isPaid: true,
      },
      {
        name: "blog-sections-interview-format",
        isPaid: true,
      },
      {
        name: "blog-sections-magazine-layout",
        isPaid: true,
      },
      {
        name: "blog-sections-minimal-blog",
        isPaid: true,
      },
      {
        name: "blog-sections-newsletter-blog",
        isPaid: true,
      },
      {
        name: "blog-sections-podcast-list",
        isPaid: true,
      },
      {
        name: "blog-sections-simple-grid",
        isPaid: true,
      },
      {
        name: "blog-sections-timeline-blog",
        isPaid: true,
      },
      {
        name: "blog-sections-video-blog",
        isPaid: true,
      },
    ],
  },
  {
    slug: "breadcrumbs",
    name: "Breadcrumbs",
    components: [
      {
        name: "breadcrumbs-background-breadcrumb",
        isPaid: true,
      },
      {
        name: "breadcrumbs-bordered-breadcrumb",
        isPaid: true,
      },
      {
        name: "breadcrumbs-card-breadcrumb",
        isPaid: true,
      },
      {
        name: "breadcrumbs-compact-breadcrumb",
        isPaid: true,
      },
      {
        name: "breadcrumbs-dot-breadcrumb",
        isPaid: true,
      },
      {
        name: "breadcrumbs-icon-breadcrumb",
      },
      {
        name: "breadcrumbs-numbered-breadcrumb",
        isPaid: true,
      },
      {
        name: "breadcrumbs-pill-breadcrumb",
        isPaid: true,
      },
      {
        name: "breadcrumbs-progress-breadcrumb",
        isPaid: true,
      },
      {
        name: "breadcrumbs-slash-breadcrumb",
        isPaid: true,
      },
      {
        name: "breadcrumbs-sticky-breadcrumb",
        isPaid: true,
      },
      {
        name: "breadcrumbs-timeline-breadcrumb",
        isPaid: true,
      },
    ],
  },
  {
    slug: "buttons",
    name: "Buttons",
    components: [
      {
        name: "buttons-border-animation-buttons",
      },
      {
        name: "buttons-cut-corners-buttons",
        isPaid: true,
      },
      {
        name: "buttons-extra-large-buttons",
        isPaid: true,
      },
      {
        name: "buttons-extra-small-buttons",
        isPaid: true,
      },
      {
        name: "buttons-grow-buttons",
        isPaid: true,
      },
      {
        name: "buttons-interactive-buttons",
        isPaid: true,
      },
      {
        name: "buttons-liquid-buttons",
        isPaid: true,
      },
      {
        name: "buttons-morphing-buttons",
        isPaid: true,
      },
      {
        name: "buttons-pixel-buttons",
        isPaid: true,
      },
      {
        name: "buttons-pulse-buttons",
        isPaid: true,
      },
      {
        name: "buttons-rotate-buttons",
        isPaid: true,
      },
      {
        name: "buttons-shadow-buttons",
        isPaid: true,
      },
      {
        name: "buttons-skew-buttons",
        isPaid: true,
      },
      {
        name: "buttons-slide-buttons",
        isPaid: true,
      },
      {
        name: "buttons-social-buttons",
        isPaid: true,
      },
      {
        name: "buttons-squeeze-buttons",
        isPaid: true,
      },
      {
        name: "buttons-underline-buttons",
        isPaid: true,
      },
    ],
  },
  {
    slug: "cards",
    name: "Cards",
    components: [
      {
        name: "cards-border-accent-card",
        isPaid: true,
      },
      {
        name: "cards-border-animation-card",
        isPaid: true,
      },
      {
        name: "cards-border-gradient-animation-card",
        isPaid: true,
      },
      {
        name: "cards-border-highlight-card",
        isPaid: true,
      },
      {
        name: "cards-corner-ribbon-card",
        isPaid: true,
      },
      {
        name: "cards-cutout-border-card",
        isPaid: true,
      },
      {
        name: "cards-dashed-border-card",
        isPaid: true,
      },
      {
        name: "cards-double-border-card",
        isPaid: true,
      },
      {
        name: "cards-expandable-card",
        isPaid: true,
      },
      {
        name: "cards-gradient-border-card",
        isPaid: true,
      },
      {
        name: "cards-hover-effect-card",
        isPaid: true,
      },
      {
        name: "cards-hover-reveal-card",
        isPaid: true,
      },
      {
        name: "cards-icon-card",
        isPaid: true,
      },
      {
        name: "cards-magnetic-card",
        isPaid: true,
      },
      {
        name: "cards-neon-border-card",
        isPaid: true,
      },
      {
        name: "cards-perspective-hover-card",
        isPaid: true,
      },
      {
        name: "cards-progress-card",
        isPaid: true,
      },
      {
        name: "cards-pulse-border-card",
        isPaid: true,
      },
      {
        name: "cards-shimmer-effect-card",
        isPaid: true,
      },
      {
        name: "cards-stacked-card",
      },
      {
        name: "cards-status-card",
        isPaid: true,
      },
      {
        name: "cards-tilt-effect-card",
        isPaid: true,
      },
    ],
  },
  {
    slug: "careers",
    name: "Careers",
    components: [
      {
        name: "careers-application-form",
        isPaid: true,
      },
      {
        name: "careers-career-path",
        isPaid: true,
      },
      {
        name: "careers-company-benefits",
        isPaid: true,
      },
      {
        name: "careers-department-positions",
        isPaid: true,
      },
      {
        name: "careers-department-showcase",
        isPaid: true,
      },
      {
        name: "careers-employee-benefits",
        isPaid: true,
      },
      {
        name: "careers-featured-job-slider",
      },
      {
        name: "careers-interview-process",
        isPaid: true,
      },
      {
        name: "careers-job-board",
        isPaid: true,
      },
      {
        name: "careers-job-details",
        isPaid: true,
      },
      {
        name: "careers-job-listings",
        isPaid: true,
      },
      {
        name: "careers-workplace-culture",
        isPaid: true,
      },
    ],
  },
  {
    slug: "category-filters",
    name: "Category Filters",
    components: [
      {
        name: "category-filters-filter-demo",
        isPaid: true,
      },
      {
        name: "category-filters-filter-drawer",
        isPaid: true,
      },
      {
        name: "category-filters-horizontal-filters",
      },
    ],
  },
  {
    slug: "category-preview",
    name: "Category Preview",
    components: [
      {
        name: "category-preview-carousel-preview",
      },
      {
        name: "category-preview-expandable-preview",
        isPaid: true,
      },
      {
        name: "category-preview-grid-preview",
        isPaid: true,
      },
      {
        name: "category-preview-magazine-preview",
        isPaid: true,
      },
      {
        name: "category-preview-scrolling-preview",
        isPaid: true,
      },
      {
        name: "category-preview-split-preview",
        isPaid: true,
      },
      {
        name: "category-preview-three-column-preview",
        isPaid: true,
      },
    ],
  },
  {
    slug: "changelogs",
    name: "Changelogs",
    components: [
      {
        name: "changelogs-basic-changelog",
      },
      {
        name: "changelogs-categorized-changelog",
        isPaid: true,
      },
      {
        name: "changelogs-compact-changelog",
        isPaid: true,
      },
      {
        name: "changelogs-expandable-changelog",
        isPaid: true,
      },
      {
        name: "changelogs-grid-changelog",
        isPaid: true,
      },
      {
        name: "changelogs-grouped-changelog",
        isPaid: true,
      },
      {
        name: "changelogs-interactive-changelog",
        isPaid: true,
      },
      {
        name: "changelogs-minimalist-changelog",
        isPaid: true,
      },
      {
        name: "changelogs-tabbed-changelog",
        isPaid: true,
      },
      {
        name: "changelogs-table-changelog",
        isPaid: true,
      },
      {
        name: "changelogs-timeline-changelog",
        isPaid: true,
      },
    ],
  },
  {
    slug: "collapsible",
    name: "Collapsible",
    components: [
      {
        name: "collapsible-card-collapsible",
        isPaid: true,
      },
      {
        name: "collapsible-grouped-collapsible",
        isPaid: true,
      },
      {
        name: "collapsible-icon-collapsible",
      },
      {
        name: "collapsible-shadowed-collapsible",
        isPaid: true,
      },
      {
        name: "collapsible-side-bordered-collapsible",
        isPaid: true,
      },
      {
        name: "collapsible-stepped-collapsible",
        isPaid: true,
      },
    ],
  },
  {
    slug: "contact-sections",
    name: "Contact Sections",
    components: [
      {
        name: "contact-sections-center-aligned",
      },
      {
        name: "contact-sections-split-with-details",
        isPaid: true,
      },
      {
        name: "contact-sections-with-map",
        isPaid: true,
      },
    ],
  },
  {
    slug: "cta-sections",
    name: "Cta Sections",
    components: [
      {
        name: "cta-sections-awards-cta",
        isPaid: true,
      },
      {
        name: "cta-sections-banner-with-background",
        isPaid: true,
      },
      {
        name: "cta-sections-case-study-cta",
        isPaid: true,
      },
      {
        name: "cta-sections-countdown-timer",
        isPaid: true,
      },
      {
        name: "cta-sections-cta-with-testimonial",
        isPaid: true,
      },
      {
        name: "cta-sections-faq-cta",
        isPaid: true,
      },
      {
        name: "cta-sections-feature-grid",
        isPaid: true,
      },
      {
        name: "cta-sections-gradient-cta",
        isPaid: true,
      },
      {
        name: "cta-sections-image-with-text",
        isPaid: true,
      },
      {
        name: "cta-sections-integrations-cta",
        isPaid: true,
      },
      {
        name: "cta-sections-newsletter-form",
        isPaid: true,
      },
      {
        name: "cta-sections-quick-contact-cta",
        isPaid: true,
      },
      {
        name: "cta-sections-simple-centered",
        isPaid: true,
      },
      {
        name: "cta-sections-split-with-image",
        isPaid: true,
      },
      {
        name: "cta-sections-stats-cta",
        isPaid: true,
      },
      {
        name: "cta-sections-tab-cta",
        isPaid: true,
      },
      {
        name: "cta-sections-video-cta",
      },
      {
        name: "cta-sections-zigzag-cta",
        isPaid: true,
      },
    ],
  },
  {
    slug: "ecommerce-bundle-upsells",
    name: "Ecommerce Bundle Upsells",
    components: [
      {
        name: "ecommerce-bundle-upsells-builder",
      },
      {
        name: "ecommerce-bundle-upsells-comparison",
        isPaid: true,
      },
      {
        name: "ecommerce-bundle-upsells-minimalist-grid",
        isPaid: true,
      },
      {
        name: "ecommerce-bundle-upsells-side-by-side",
        isPaid: true,
      },
      {
        name: "ecommerce-bundle-upsells-stack",
        isPaid: true,
      },
    ],
  },
  {
    slug: "ecommerce-cross-sells",
    name: "Ecommerce Cross Sells",
    components: [
      {
        name: "ecommerce-cross-sells-feature-icons",
      },
      {
        name: "ecommerce-cross-sells-simple-grid",
        isPaid: true,
      },
      {
        name: "ecommerce-cross-sells-stacked-list",
        isPaid: true,
      },
      {
        name: "ecommerce-cross-sells-with-badges",
        isPaid: true,
      },
      {
        name: "ecommerce-cross-sells-with-ratings",
        isPaid: true,
      },
    ],
  },
  {
    slug: "ecommerce-customer-reviews",
    name: "Ecommerce Customer Reviews",
    components: [
      {
        name: "ecommerce-customer-reviews-base",
      },
      {
        name: "ecommerce-customer-reviews-compact-review-list",
        isPaid: true,
      },
      {
        name: "ecommerce-customer-reviews-review-cards-grid",
        isPaid: true,
      },
      {
        name: "ecommerce-customer-reviews-review-comparison",
        isPaid: true,
      },
      {
        name: "ecommerce-customer-reviews-review-stats-overview",
        isPaid: true,
      },
      {
        name: "ecommerce-customer-reviews-social-proof-reviews",
        isPaid: true,
      },
    ],
  },
  {
    slug: "ecommerce-footers",
    name: "Ecommerce Footers",
    components: [
      {
        name: "ecommerce-footers-muti-column",
      },
      {
        name: "ecommerce-footers-simple-links",
        isPaid: true,
      },
      {
        name: "ecommerce-footers-with-newsletter",
        isPaid: true,
      },
      {
        name: "ecommerce-footers-with-payments",
        isPaid: true,
      },
      {
        name: "ecommerce-footers-with-socials",
        isPaid: true,
      },
    ],
  },
  {
    slug: "ecommerce-shipping-returns",
    name: "Ecommerce Shipping Returns",
    components: [
      {
        name: "ecommerce-shipping-returns-accordion",
      },
      {
        name: "ecommerce-shipping-returns-checklist",
        isPaid: true,
      },
      {
        name: "ecommerce-shipping-returns-full-text",
        isPaid: true,
      },
      {
        name: "ecommerce-shipping-returns-split-columns",
        isPaid: true,
      },
      {
        name: "ecommerce-shipping-returns-with-icons",
        isPaid: true,
      },
    ],
  },
  {
    slug: "ecommerce-trust-guarantee",
    name: "Ecommerce Trust Guarantee",
    components: [
      {
        name: "ecommerce-trust-guarantee-badge-row",
      },
      {
        name: "ecommerce-trust-guarantee-checklist",
        isPaid: true,
      },
      {
        name: "ecommerce-trust-guarantee-highlighted-quote",
        isPaid: true,
      },
      {
        name: "ecommerce-trust-guarantee-icon-list",
        isPaid: true,
      },
      {
        name: "ecommerce-trust-guarantee-three-pillars",
        isPaid: true,
      },
    ],
  },
  {
    slug: "faq-sections",
    name: "Faq Sections",
    components: [
      {
        name: "faq-sections-accordion-with-background",
        isPaid: true,
      },
      {
        name: "faq-sections-card-grid",
        isPaid: true,
      },
      {
        name: "faq-sections-center-aligned",
      },
      {
        name: "faq-sections-code-snippets",
        isPaid: true,
      },
      {
        name: "faq-sections-contact-form",
        isPaid: true,
      },
      {
        name: "faq-sections-image-illustrated",
        isPaid: true,
      },
      {
        name: "faq-sections-right-aligned",
        isPaid: true,
      },
      {
        name: "faq-sections-search-filter",
        isPaid: true,
      },
      {
        name: "faq-sections-sidebar-navigation",
        isPaid: true,
      },
      {
        name: "faq-sections-simple-2-cols-grid",
        isPaid: true,
      },
      {
        name: "faq-sections-simple-with-divider-and-icon",
        isPaid: true,
      },
      {
        name: "faq-sections-tabbed-categories",
        isPaid: true,
      },
      {
        name: "faq-sections-timeline-faq",
        isPaid: true,
      },
    ],
  },
  {
    slug: "feature-sections",
    name: "Feature Sections",
    components: [
      {
        name: "feature-sections-3d-cards",
        isPaid: true,
      },
      {
        name: "feature-sections-card-grid",
        isPaid: true,
      },
      {
        name: "feature-sections-feature-accordion",
        isPaid: true,
      },
      {
        name: "feature-sections-feature-chat",
        isPaid: true,
      },
      {
        name: "feature-sections-feature-stats",
        isPaid: true,
      },
      {
        name: "feature-sections-feature-timeline",
        isPaid: true,
      },
      {
        name: "feature-sections-feature-videos",
        isPaid: true,
      },
      {
        name: "feature-sections-feature-wizard",
        isPaid: true,
      },
      {
        name: "feature-sections-grid-hover",
        isPaid: true,
      },
      {
        name: "feature-sections-simple",
      },
      {
        name: "feature-sections-steps",
        isPaid: true,
      },
      {
        name: "feature-sections-terminal",
        isPaid: true,
      },
      {
        name: "feature-sections-with-carousel",
        isPaid: true,
      },
      {
        name: "feature-sections-with-comparison",
        isPaid: true,
      },
      {
        name: "feature-sections-with-images",
        isPaid: true,
      },
      {
        name: "feature-sections-with-stats",
        isPaid: true,
      },
      {
        name: "feature-sections-with-tabs",
        isPaid: true,
      },
    ],
  },
  {
    slug: "footers",
    name: "Footers",
    components: [
      {
        name: "footers-logo-cloud",
        isPaid: true,
      },
      {
        name: "footers-minimal",
        isPaid: true,
      },
      {
        name: "footers-multi-column",
        isPaid: true,
      },
      {
        name: "footers-simple",
      },
      {
        name: "footers-subscribe",
        isPaid: true,
      },
    ],
  },
  {
    slug: "form-layouts",
    name: "Form Layouts",
    components: [
      {
        name: "form-layouts-complex-form",
        isPaid: true,
      },
      {
        name: "form-layouts-stacked",
      },
      {
        name: "form-layouts-two-column",
        isPaid: true,
      },
    ],
  },
  {
    slug: "gallery",
    name: "Gallery",
    components: [
      {
        name: "gallery-carousel-gallery",
      },
      {
        name: "gallery-filmstrip-gallery",
        isPaid: true,
      },
      {
        name: "gallery-fullscreen-gallery",
        isPaid: true,
      },
      {
        name: "gallery-grid-gallery",
        isPaid: true,
      },
      {
        name: "gallery-immersive-gallery",
        isPaid: true,
      },
      {
        name: "gallery-polaroid-gallery",
        isPaid: true,
      },
      {
        name: "gallery-portfolio-gallery",
        isPaid: true,
      },
    ],
  },
  {
    slug: "hero-forms",
    name: "Hero Forms",
    components: [
      {
        name: "hero-forms-booking-form",
        isPaid: true,
      },
      {
        name: "hero-forms-center-aligned-search-with-tags",
      },
      {
        name: "hero-forms-center-aligned-with-a-form",
        isPaid: true,
      },
      {
        name: "hero-forms-contact-form-with-background",
        isPaid: true,
      },
      {
        name: "hero-forms-contest-entry-form",
        isPaid: true,
      },
      {
        name: "hero-forms-early-access-form",
        isPaid: true,
      },
      {
        name: "hero-forms-event-registration-countdown",
        isPaid: true,
      },
      {
        name: "hero-forms-feedback-survey-form",
        isPaid: true,
      },
      {
        name: "hero-forms-floating-card-with-gradient",
        isPaid: true,
      },
      {
        name: "hero-forms-free-ebook-form",
        isPaid: true,
      },
      {
        name: "hero-forms-free-trial-signup-form",
        isPaid: true,
      },
      {
        name: "hero-forms-image-and-form",
        isPaid: true,
      },
      {
        name: "hero-forms-job-application-form",
        isPaid: true,
      },
      {
        name: "hero-forms-newsletter-subscription",
        isPaid: true,
      },
      {
        name: "hero-forms-newsletter-with-social-proof",
        isPaid: true,
      },
      {
        name: "hero-forms-product-customizer-form",
        isPaid: true,
      },
      {
        name: "hero-forms-quiz-assessment-form",
        isPaid: true,
      },
      {
        name: "hero-forms-schedule-demo-form",
        isPaid: true,
      },
      {
        name: "hero-forms-sign-up-form",
        isPaid: true,
      },
      {
        name: "hero-forms-split-screen-multi-step",
        isPaid: true,
      },
      {
        name: "hero-forms-subscription-form-with-toggle",
        isPaid: true,
      },
      {
        name: "hero-forms-two-factor-verification",
        isPaid: true,
      },
      {
        name: "hero-forms-user-feedback-form",
        isPaid: true,
      },
      {
        name: "hero-forms-webinar-registration-form",
        isPaid: true,
      },
    ],
  },
  {
    slug: "hero-sections",
    name: "Hero Sections",
    components: [
      {
        name: "hero-sections-3d-isometric-hero",
        isPaid: true,
      },
      {
        name: "hero-sections-animated-features-hero",
        isPaid: true,
      },
      {
        name: "hero-sections-animated-gradient",
        isPaid: true,
      },
      {
        name: "hero-sections-animated-text-hero",
        isPaid: true,
      },
      {
        name: "hero-sections-centred-with-image",
        isPaid: true,
      },
      {
        name: "hero-sections-gradient-background",
        isPaid: true,
      },
      {
        name: "hero-sections-gradient-mesh-hero",
        isPaid: true,
      },
      {
        name: "hero-sections-image-carousel-hero",
        isPaid: true,
      },
      {
        name: "hero-sections-image-with-reviews",
        isPaid: true,
      },
      {
        name: "hero-sections-mobile-app-hero",
        isPaid: true,
      },
      {
        name: "hero-sections-particles-background-hero",
        isPaid: true,
      },
      {
        name: "hero-sections-product-carousel-hero",
        isPaid: true,
      },
      {
        name: "hero-sections-simple-centred",
      },
      {
        name: "hero-sections-split-content-hero",
        isPaid: true,
      },
      {
        name: "hero-sections-split-image-hero",
        isPaid: true,
      },
      {
        name: "hero-sections-split-with-video",
        isPaid: true,
      },
      {
        name: "hero-sections-video-background-hero",
        isPaid: true,
      },
      {
        name: "hero-sections-with-3d-mockup",
        isPaid: true,
      },
      {
        name: "hero-sections-with-api-preview",
        isPaid: true,
      },
      {
        name: "hero-sections-with-app-showcase",
        isPaid: true,
      },
      {
        name: "hero-sections-with-bento-grid",
        isPaid: true,
      },
      {
        name: "hero-sections-with-code-preview",
        isPaid: true,
      },
      {
        name: "hero-sections-with-content-tabs",
        isPaid: true,
      },
      {
        name: "hero-sections-with-dashboard",
        isPaid: true,
      },
      {
        name: "hero-sections-with-email-input",
        isPaid: true,
      },
      {
        name: "hero-sections-with-feature-cards",
        isPaid: true,
      },
      {
        name: "hero-sections-with-feature-timeline",
        isPaid: true,
      },
      {
        name: "hero-sections-with-integration-showcase",
        isPaid: true,
      },
      {
        name: "hero-sections-with-product-screenshots",
        isPaid: true,
      },
      {
        name: "hero-sections-with-team-grid",
        isPaid: true,
      },
      {
        name: "hero-sections-with-terminal",
        isPaid: true,
      },
    ],
  },
  {
    slug: "icon-sections",
    name: "Icon Sections",
    components: [
      {
        name: "icon-sections-2-cols-grid",
      },
      {
        name: "icon-sections-animated-icon-grid",
        isPaid: true,
      },
      {
        name: "icon-sections-centred-description-with-icon-blocks",
        isPaid: true,
      },
      {
        name: "icon-sections-circle-icons-centre-aligned",
        isPaid: true,
      },
      {
        name: "icon-sections-compact-metric-list",
        isPaid: true,
      },
      {
        name: "icon-sections-description-on-left-icon-blocks-on-right",
        isPaid: true,
      },
      {
        name: "icon-sections-expandable-icon-cards",
        isPaid: true,
      },
      {
        name: "icon-sections-feature-icon-tabs",
        isPaid: true,
      },
      {
        name: "icon-sections-horizontal-scrolling-icons",
        isPaid: true,
      },
      {
        name: "icon-sections-icon-feature-carousel",
        isPaid: true,
      },
      {
        name: "icon-sections-icon-stats-grid",
        isPaid: true,
      },
      {
        name: "icon-sections-icon-tabs-categories",
        isPaid: true,
      },
      {
        name: "icon-sections-icon-timeline",
        isPaid: true,
      },
      {
        name: "icon-sections-icons-with-tooltips",
        isPaid: true,
      },
      {
        name: "icon-sections-interactive-icon-showcase",
        isPaid: true,
      },
      {
        name: "icon-sections-metric-cards",
        isPaid: true,
      },
      {
        name: "icon-sections-minimal-stats-tiles",
        isPaid: true,
      },
      {
        name: "icon-sections-radial-icon-layout",
        isPaid: true,
      },
      {
        name: "icon-sections-solid-icon-with-hover-effect",
        isPaid: true,
      },
      {
        name: "icon-sections-stacked-cards",
        isPaid: true,
      },
    ],
  },
  {
    slug: "integrations",
    name: "Integrations",
    components: [
      {
        name: "integrations-api-preview",
        isPaid: true,
      },
      {
        name: "integrations-carousel",
        isPaid: true,
      },
      {
        name: "integrations-category-tabs",
        isPaid: true,
      },
      {
        name: "integrations-featured-showcase",
        isPaid: true,
      },
      {
        name: "integrations-simple-grid",
      },
    ],
  },
  {
    slug: "login",
    name: "Login",
    components: [
      {
        name: "login-split-with-image",
      },
    ],
  },
  {
    slug: "masonry-sections",
    name: "Masonry Sections",
    components: [
      {
        name: "masonry-sections-cards-on-images",
      },
    ],
  },
  {
    slug: "page-headings",
    name: "Page Headings",
    components: [
      {
        name: "page-headings-simple-centered",
      },
      {
        name: "page-headings-with-actions",
        isPaid: true,
      },
      {
        name: "page-headings-with-search-filters",
        isPaid: true,
      },
      {
        name: "page-headings-with-stats",
        isPaid: true,
      },
      {
        name: "page-headings-with-steps",
        isPaid: true,
      },
      {
        name: "page-headings-with-tabs",
        isPaid: true,
      },
    ],
  },
  {
    slug: "pagination",
    name: "Pagination",
    components: [
      {
        name: "pagination-bordered-pagination",
        isPaid: true,
      },
      {
        name: "pagination-card-pagination",
        isPaid: true,
      },
      {
        name: "pagination-compact-pagination",
      },
      {
        name: "pagination-dot-indicator-pagination",
        isPaid: true,
      },
      {
        name: "pagination-floating-pagination",
        isPaid: true,
      },
      {
        name: "pagination-icon-only-pagination",
        isPaid: true,
      },
      {
        name: "pagination-mini-pagination",
        isPaid: true,
      },
      {
        name: "pagination-responsive-pagination",
        isPaid: true,
      },
      {
        name: "pagination-rounded-pagination",
        isPaid: true,
      },
      {
        name: "pagination-shadow-pagination",
        isPaid: true,
      },
      {
        name: "pagination-split-pagination",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-about-and-skills",
    name: "Portfolio About And Skills",
    components: [
      {
        name: "portfolio-about-and-skills-about-me",
        isPaid: true,
      },
      {
        name: "portfolio-about-and-skills-education-certifications",
        isPaid: true,
      },
      {
        name: "portfolio-about-and-skills-resume-download",
        isPaid: true,
      },
      {
        name: "portfolio-about-and-skills-skills-display",
      },
      {
        name: "portfolio-about-and-skills-timeline-category-skills",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-awards-and-recognition",
    name: "Portfolio Awards And Recognition",
    components: [
      {
        name: "portfolio-awards-and-recognition-awards-timeline",
        isPaid: true,
      },
      {
        name: "portfolio-awards-and-recognition-badge-or-icon-grid",
      },
      {
        name: "portfolio-awards-and-recognition-carousel-of-certifications",
        isPaid: true,
      },
      {
        name: "portfolio-awards-and-recognition-featured-award-highlight",
        isPaid: true,
      },
      {
        name: "portfolio-awards-and-recognition-quote-award-combo",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-blog-writing-and-previews",
    name: "Portfolio Blog Writing And Previews",
    components: [
      {
        name: "portfolio-blog-writing-and-previews-featured-article-list",
      },
      {
        name: "portfolio-blog-writing-and-previews-grid-blog-cards",
        isPaid: true,
      },
      {
        name: "portfolio-blog-writing-and-previews-horizontal-blog-carousel",
        isPaid: true,
      },
      {
        name: "portfolio-blog-writing-and-previews-masonry-layout-articles",
        isPaid: true,
      },
      {
        name: "portfolio-blog-writing-and-previews-minimal-list-dates",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-case-studies",
    name: "Portfolio Case Studies",
    components: [
      {
        name: "portfolio-case-studies-accordion-expandable-case-studies",
      },
      {
        name: "portfolio-case-studies-grid-case-study-previews",
        isPaid: true,
      },
      {
        name: "portfolio-case-studies-large-visual-focus-case-study",
        isPaid: true,
      },
      {
        name: "portfolio-case-studies-side-by-side-image-story",
        isPaid: true,
      },
      {
        name: "portfolio-case-studies-timeline-style-case-study",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-contact-sections",
    name: "Portfolio Contact Sections",
    components: [
      {
        name: "portfolio-contact-sections-classic-contact-form",
      },
      {
        name: "portfolio-contact-sections-map-with-contact-info",
        isPaid: true,
      },
      {
        name: "portfolio-contact-sections-minimal-form-with-social",
        isPaid: true,
      },
      {
        name: "portfolio-contact-sections-popup-trigger-contact",
        isPaid: true,
      },
      {
        name: "portfolio-contact-sections-split-layout",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-core-services-overview",
    name: "Portfolio Core Services Overview",
    components: [
      {
        name: "portfolio-core-services-overview-accordion-services",
        isPaid: true,
      },
      {
        name: "portfolio-core-services-overview-icon-list-overview",
      },
      {
        name: "portfolio-core-services-overview-numbered-process-style-services",
        isPaid: true,
      },
      {
        name: "portfolio-core-services-overview-service-cards-grid",
        isPaid: true,
      },
      {
        name: "portfolio-core-services-overview-split-layout-feature",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-cta-banner",
    name: "Portfolio Cta Banner",
    components: [
      {
        name: "portfolio-cta-banner-full-width-bold-banner",
      },
      {
        name: "portfolio-cta-banner-inline-cta",
        isPaid: true,
      },
      {
        name: "portfolio-cta-banner-personal-photo-cta",
        isPaid: true,
      },
      {
        name: "portfolio-cta-banner-split-cta",
        isPaid: true,
      },
      {
        name: "portfolio-cta-banner-sticky-cta",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-email-signup-and-newsletter",
    name: "Portfolio Email Signup And Newsletter",
    components: [
      {
        name: "portfolio-email-signup-and-newsletter-card-style-signup",
      },
      {
        name: "portfolio-email-signup-and-newsletter-footer-integrated-signup",
        isPaid: true,
      },
      {
        name: "portfolio-email-signup-and-newsletter-popup-signup-form",
        isPaid: true,
      },
      {
        name: "portfolio-email-signup-and-newsletter-simple-inline-form",
        isPaid: true,
      },
      {
        name: "portfolio-email-signup-and-newsletter-split-section-signup",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-event-speaking-and-workshops",
    name: "Portfolio Event Speaking And Workshops",
    components: [
      {
        name: "portfolio-event-speaking-and-workshops-event-cards-grid",
      },
      {
        name: "portfolio-event-speaking-and-workshops-featured-talk",
        isPaid: true,
      },
      {
        name: "portfolio-event-speaking-and-workshops-featured-talk-highlight",
        isPaid: true,
      },
      {
        name: "portfolio-event-speaking-and-workshops-timeline-speaking-engagements",
        isPaid: true,
      },
      {
        name: "portfolio-event-speaking-and-workshops-video-recording-embed",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-featured-work-highlights",
    name: "Portfolio Featured Work Highlights",
    components: [
      {
        name: "portfolio-featured-work-highlights-carousel-of-featured-projects",
        isPaid: true,
      },
      {
        name: "portfolio-featured-work-highlights-interactive-hover-reveal",
        isPaid: true,
      },
      {
        name: "portfolio-featured-work-highlights-large-hero-project-display",
        isPaid: true,
      },
      {
        name: "portfolio-featured-work-highlights-split-image-and-details-layout",
        isPaid: true,
      },
      {
        name: "portfolio-featured-work-highlights-stacked-highlight-cards",
      },
    ],
  },
  {
    slug: "portfolio-hero-showcases",
    name: "Portfolio Hero Showcases",
    components: [
      {
        name: "portfolio-hero-showcases-carousel-slider",
        isPaid: true,
      },
      {
        name: "portfolio-hero-showcases-floating-elements",
        isPaid: true,
      },
      {
        name: "portfolio-hero-showcases-full-screen-centered",
        isPaid: true,
      },
      {
        name: "portfolio-hero-showcases-minimalist-cta",
        isPaid: true,
      },
      {
        name: "portfolio-hero-showcases-split-layout",
      },
    ],
  },
  {
    slug: "portfolio-mission-and-values",
    name: "Portfolio Mission And Values",
    components: [
      {
        name: "portfolio-mission-and-values-grid-of-core-values",
      },
      {
        name: "portfolio-mission-and-values-quote-values-combo",
        isPaid: true,
      },
      {
        name: "portfolio-mission-and-values-story-first-narrative",
        isPaid: true,
      },
      {
        name: "portfolio-mission-and-values-three-pillars-layout",
        isPaid: true,
      },
      {
        name: "portfolio-mission-and-values-vertical-step-timeline",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-process-and-approach",
    name: "Portfolio Process And Approach",
    components: [
      {
        name: "portfolio-process-and-approach-cycle-diagram",
      },
      {
        name: "portfolio-process-and-approach-horizontal-stepper",
        isPaid: true,
      },
      {
        name: "portfolio-process-and-approach-process-principles",
        isPaid: true,
      },
      {
        name: "portfolio-process-and-approach-stacked-cards",
        isPaid: true,
      },
      {
        name: "portfolio-process-and-approach-vertical-timeline",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-project-displays",
    name: "Portfolio Project Displays",
    components: [
      {
        name: "portfolio-project-displays-filterable-grid",
        isPaid: true,
      },
      {
        name: "portfolio-project-displays-quote-stack",
        isPaid: true,
      },
      {
        name: "portfolio-project-displays-standard-grid",
      },
      {
        name: "portfolio-project-displays-stats-cards",
        isPaid: true,
      },
      {
        name: "portfolio-project-displays-zigzag-layout",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-quote-and-feedback",
    name: "Portfolio Quote And Feedback",
    components: [
      {
        name: "portfolio-quote-and-feedback-base",
      },
      {
        name: "portfolio-quote-and-feedback-grid-of-quotes",
        isPaid: true,
      },
      {
        name: "portfolio-quote-and-feedback-quote-with-project-context",
        isPaid: true,
      },
      {
        name: "portfolio-quote-and-feedback-scrollable-quote-carousel",
        isPaid: true,
      },
      {
        name: "portfolio-quote-and-feedback-single-quote-highlight",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-resource-download-sections",
    name: "Portfolio Resource Download Sections",
    components: [
      {
        name: "portfolio-resource-download-sections-featured-resource-card",
      },
      {
        name: "portfolio-resource-download-sections-gated-download",
        isPaid: true,
      },
      {
        name: "portfolio-resource-download-sections-inline-resource-callout",
        isPaid: true,
      },
      {
        name: "portfolio-resource-download-sections-minimalist-resource-list",
        isPaid: true,
      },
      {
        name: "portfolio-resource-download-sections-resources-grid",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-resume-and-downloads",
    name: "Portfolio Resume And Downloads",
    components: [
      {
        name: "portfolio-resume-and-downloads-branded-document-icons-grid",
        isPaid: true,
      },
      {
        name: "portfolio-resume-and-downloads-resume-cover-letter-combo",
        isPaid: true,
      },
      {
        name: "portfolio-resume-and-downloads-resume-with-short-bio-cta",
        isPaid: true,
      },
      {
        name: "portfolio-resume-and-downloads-simple-download-button",
      },
      {
        name: "portfolio-resume-and-downloads-split-layout",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-social-media-embeds",
    name: "Portfolio Social Media Embeds",
    components: [
      {
        name: "portfolio-social-media-embeds-highlighted-post",
        isPaid: true,
      },
      {
        name: "portfolio-social-media-embeds-instagram-grid",
        isPaid: true,
      },
      {
        name: "portfolio-social-media-embeds-social-icons-feed",
        isPaid: true,
      },
      {
        name: "portfolio-social-media-embeds-tweet-carousel",
      },
      {
        name: "portfolio-social-media-embeds-youtube-video-strip",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-why-work-with-me",
    name: "Portfolio Why Work With Me",
    components: [
      {
        name: "portfolio-why-work-with-me-before-after-comparison",
      },
      {
        name: "portfolio-why-work-with-me-bulleted-value-proposition",
        isPaid: true,
      },
      {
        name: "portfolio-why-work-with-me-client-oriented-testimonials",
        isPaid: true,
      },
      {
        name: "portfolio-why-work-with-me-storytelling-approach",
        isPaid: true,
      },
      {
        name: "portfolio-why-work-with-me-why-me-vs-competition",
        isPaid: true,
      },
    ],
  },
  {
    slug: "portfolio-work-experience-cards",
    name: "Portfolio Work Experience Cards",
    components: [
      {
        name: "portfolio-work-experience-cards-accordion-experience-cards",
        isPaid: true,
      },
      {
        name: "portfolio-work-experience-cards-card-with-project-showcase",
        isPaid: true,
      },
      {
        name: "portfolio-work-experience-cards-experience-quote-combo",
        isPaid: true,
      },
      {
        name: "portfolio-work-experience-cards-logo-first-card-layout",
        isPaid: true,
      },
      {
        name: "portfolio-work-experience-cards-minimalist-role-highlight",
      },
    ],
  },
  {
    slug: "pricing-sections",
    name: "Pricing Sections",
    components: [
      {
        name: "pricing-sections-calculator",
        isPaid: true,
      },
      {
        name: "pricing-sections-cards",
      },
      {
        name: "pricing-sections-custom-builder",
        isPaid: true,
      },
      {
        name: "pricing-sections-enterprise",
        isPaid: true,
      },
      {
        name: "pricing-sections-feature-grid",
        isPaid: true,
      },
      {
        name: "pricing-sections-horizontal",
        isPaid: true,
      },
      {
        name: "pricing-sections-interactive",
        isPaid: true,
      },
      {
        name: "pricing-sections-minimalist",
        isPaid: true,
      },
      {
        name: "pricing-sections-modern",
        isPaid: true,
      },
      {
        name: "pricing-sections-seasonal",
        isPaid: true,
      },
      {
        name: "pricing-sections-simple",
        isPaid: true,
      },
      {
        name: "pricing-sections-stacked",
        isPaid: true,
      },
      {
        name: "pricing-sections-testimonial",
        isPaid: true,
      },
      {
        name: "pricing-sections-toggle",
        isPaid: true,
      },
    ],
  },
  {
    slug: "product-features",
    name: "Product Features",
    components: [
      {
        name: "product-features-3d-feature-carousel",
        isPaid: true,
      },
      {
        name: "product-features-alternating-features",
        isPaid: true,
      },
      {
        name: "product-features-animated-features-grid",
        isPaid: true,
      },
      {
        name: "product-features-before-after-comparison",
        isPaid: true,
      },
      {
        name: "product-features-carousel-feature-showcase",
        isPaid: true,
      },
      {
        name: "product-features-expandable-features-grid",
        isPaid: true,
      },
      {
        name: "product-features-feature-accordion",
        isPaid: true,
      },
      {
        name: "product-features-feature-comparison-table",
        isPaid: true,
      },
      {
        name: "product-features-feature-tabs-navigation",
        isPaid: true,
      },
      {
        name: "product-features-feature-timeline",
        isPaid: true,
      },
      {
        name: "product-features-features-testimonial-combo",
        isPaid: true,
      },
      {
        name: "product-features-horizontal-scrolling-features",
        isPaid: true,
      },
      {
        name: "product-features-image-hotspot-features",
        isPaid: true,
      },
      {
        name: "product-features-interactive-feature-tabs",
        isPaid: true,
      },
      {
        name: "product-features-simple-feature-grid",
      },
      {
        name: "product-features-split-image-features",
        isPaid: true,
      },
      {
        name: "product-features-stats-feature-showcase",
        isPaid: true,
      },
      {
        name: "product-features-timeline-feature-showcase",
        isPaid: true,
      },
      {
        name: "product-features-video-feature-showcase",
        isPaid: true,
      },
    ],
  },
  {
    slug: "product-list",
    name: "Product List",
    components: [
      {
        name: "product-list-compact-list",
      },
      {
        name: "product-list-comparison-list",
        isPaid: true,
      },
      {
        name: "product-list-featured-list",
        isPaid: true,
      },
      {
        name: "product-list-filter-list",
        isPaid: true,
      },
      {
        name: "product-list-gallery-list",
        isPaid: true,
      },
      {
        name: "product-list-grid-list",
        isPaid: true,
      },
      {
        name: "product-list-masonry-list",
        isPaid: true,
      },
      {
        name: "product-list-table-list",
        isPaid: true,
      },
      {
        name: "product-list-timeline-list",
        isPaid: true,
      },
    ],
  },
  {
    slug: "product-overview",
    name: "Product Overview",
    components: [
      {
        name: "product-overview-classic-overview",
      },
      {
        name: "product-overview-compact-overview",
        isPaid: true,
      },
      {
        name: "product-overview-gallery-overview",
        isPaid: true,
      },
      {
        name: "product-overview-immersive-overview",
        isPaid: true,
      },
      {
        name: "product-overview-minimal-overview",
        isPaid: true,
      },
      {
        name: "product-overview-modern-overview",
        isPaid: true,
      },
    ],
  },
  {
    slug: "promo-sections",
    name: "Promo Sections",
    components: [
      {
        name: "promo-sections-centered-icon-promo",
        isPaid: true,
      },
      {
        name: "promo-sections-centered-image-grid",
      },
      {
        name: "promo-sections-centered-simple-promo",
        isPaid: true,
      },
      {
        name: "promo-sections-countdown-timer-promo",
        isPaid: true,
      },
      {
        name: "promo-sections-fading-background-testimonial",
        isPaid: true,
      },
      {
        name: "promo-sections-full-width-large-content",
        isPaid: true,
      },
      {
        name: "promo-sections-image-aside",
        isPaid: true,
      },
      {
        name: "promo-sections-large-image-split",
        isPaid: true,
      },
      {
        name: "promo-sections-multi-column-cards",
        isPaid: true,
      },
      {
        name: "promo-sections-simple-banner",
        isPaid: true,
      },
      {
        name: "promo-sections-split-offers",
        isPaid: true,
      },
    ],
  },
  {
    slug: "reset-password",
    name: "Reset Password",
    components: [
      {
        name: "reset-password-email-otp-reset",
        isPaid: true,
      },
      {
        name: "reset-password-security-question-reset",
        isPaid: true,
      },
      {
        name: "reset-password-simple-reset",
      },
      {
        name: "reset-password-token-reset",
        isPaid: true,
      },
    ],
  },
  {
    slug: "shopping-cart",
    name: "Shopping Cart",
    components: [
      {
        name: "shopping-cart-compact-cart",
        isPaid: true,
      },
      {
        name: "shopping-cart-floating-cart",
        isPaid: true,
      },
      {
        name: "shopping-cart-mini-cart",
        isPaid: true,
      },
      {
        name: "shopping-cart-modern-cart",
      },
      {
        name: "shopping-cart-sidebar-cart",
        isPaid: true,
      },
      {
        name: "shopping-cart-sticky-cart",
        isPaid: true,
      },
    ],
  },
  {
    slug: "stats",
    name: "Stats",
    components: [
      {
        name: "stats-achievement-bars",
        isPaid: true,
      },
      {
        name: "stats-card-group",
      },
      {
        name: "stats-circular-progress",
        isPaid: true,
      },
      {
        name: "stats-comparison-metrics",
        isPaid: true,
      },
      {
        name: "stats-comparison-stats",
        isPaid: true,
      },
      {
        name: "stats-customer-testimonial",
        isPaid: true,
      },
      {
        name: "stats-funnel-stats",
        isPaid: true,
      },
      {
        name: "stats-gradient-grid",
        isPaid: true,
      },
      {
        name: "stats-growth-timeline",
        isPaid: true,
      },
      {
        name: "stats-horizontal-with-dividers",
        isPaid: true,
      },
      {
        name: "stats-impact-numbers",
        isPaid: true,
      },
      {
        name: "stats-interactive-hover",
        isPaid: true,
      },
      {
        name: "stats-metric-cards",
        isPaid: true,
      },
      {
        name: "stats-one-main-with-three-follow-ups",
        isPaid: true,
      },
      {
        name: "stats-progress-bars",
        isPaid: true,
      },
      {
        name: "stats-simple-3-cols",
        isPaid: true,
      },
      {
        name: "stats-sparkline-stats",
        isPaid: true,
      },
      {
        name: "stats-stats-with-icons",
        isPaid: true,
      },
      {
        name: "stats-timeline-stats",
        isPaid: true,
      },
      {
        name: "stats-trust-indicators",
        isPaid: true,
      },
    ],
  },
  {
    slug: "subscribe",
    name: "Subscribe",
    components: [
      {
        name: "subscribe-input-style",
      },
      {
        name: "subscribe-simple-center-aligned",
        isPaid: true,
      },
      {
        name: "subscribe-simple-right-aligned",
        isPaid: true,
      },
    ],
  },
  {
    slug: "tabs",
    name: "Tabs",
    components: [
      {
        name: "tabs-card-tabs",
        isPaid: true,
      },
      {
        name: "tabs-gradient-tabs",
        isPaid: true,
      },
      {
        name: "tabs-icon-tabs",
        isPaid: true,
      },
      {
        name: "tabs-minimal-tabs",
      },
      {
        name: "tabs-outline-tabs",
        isPaid: true,
      },
      {
        name: "tabs-pill-tabs",
        isPaid: true,
      },
      {
        name: "tabs-shadow-tabs",
        isPaid: true,
      },
      {
        name: "tabs-vertical-tabs",
        isPaid: true,
      },
    ],
  },
  {
    slug: "team-sections",
    name: "Team Sections",
    components: [
      {
        name: "team-sections-alternating-sections",
        isPaid: true,
      },
      {
        name: "team-sections-masonry-grid",
        isPaid: true,
      },
      {
        name: "team-sections-simple-cards",
      },
      {
        name: "team-sections-with-contact",
        isPaid: true,
      },
      {
        name: "team-sections-with-filters",
        isPaid: true,
      },
      {
        name: "team-sections-with-hover-cards",
        isPaid: true,
      },
      {
        name: "team-sections-with-large-images",
        isPaid: true,
      },
      {
        name: "team-sections-with-skill-badges",
        isPaid: true,
      },
      {
        name: "team-sections-with-testimonials",
        isPaid: true,
      },
    ],
  },
  {
    slug: "testimonials",
    name: "Testimonials",
    components: [
      {
        name: "testimonials-base",
      },
      {
        name: "testimonials-big-image",
        isPaid: true,
      },
      {
        name: "testimonials-cards",
        isPaid: true,
      },
      {
        name: "testimonials-cards-with-stats",
        isPaid: true,
      },
      {
        name: "testimonials-mini-with-dividers-in-grid",
        isPaid: true,
      },
      {
        name: "testimonials-short-review-with-logo-and-stars",
        isPaid: true,
      },
      {
        name: "testimonials-simple-center-aligned-with-logo",
        isPaid: true,
      },
      {
        name: "testimonials-small-image",
        isPaid: true,
      },
      {
        name: "testimonials-with-stats",
        isPaid: true,
      },
    ],
  },
  {
    slug: "user-profiles",
    name: "User Profiles",
    components: [
      {
        name: "user-profiles-billing",
      },
      {
        name: "user-profiles-compact-list",
        isPaid: true,
      },
      {
        name: "user-profiles-developer",
        isPaid: true,
      },
      {
        name: "user-profiles-onboarding",
        isPaid: true,
      },
      {
        name: "user-profiles-permissions",
        isPaid: true,
      },
      {
        name: "user-profiles-security-logs",
        isPaid: true,
      },
      {
        name: "user-profiles-simple",
        isPaid: true,
      },
      {
        name: "user-profiles-tabbed",
        isPaid: true,
      },
      {
        name: "user-profiles-team-grid",
        isPaid: true,
      },
      {
        name: "user-profiles-with-stats",
        isPaid: true,
      },
    ],
  },
]

export function getCategory(slug: string): ComponentCategory | undefined {
  return blocks.find((category) => category.slug === slug)
}
