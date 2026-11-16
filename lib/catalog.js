/**
 * RentCan product catalogue — the single source of truth for segments, plans,
 * pricing and platform modules.
 *
 * Pages, pricing tables, navigation, schema and the sitemap all render from
 * here, so a price exists in exactly one place. Change it here, it changes
 * everywhere.
 *
 * Positioning rule this file encodes: RentCan is a property OPERATIONS company
 * powered by software. The physical visit is the product; the platform is the
 * record of it. Copy should read like a person in Mohali talking, not a SaaS
 * landing page.
 */

const WHATSAPP = '919915217674';

// ── Residential plans (Homes & Kothis) ──────────────────────────────────────
const RESIDENTIAL_PLANS = [
  { id: '1bhk',   name: '1 BHK',                        price: 1499, unit: '/month', inspection: 'Room-by-room condition check' },
  { id: '2bhk',   name: '2 BHK',                        price: 1799, unit: '/month', inspection: 'Room-by-room condition check' },
  { id: '3bhk',   name: '3 BHK',                        price: 2299, unit: '/month', inspection: 'Full room-by-room plus systems review' },
  { id: '4bhk',   name: '4 BHK / Large Apartment',      price: 2799, unit: '/month', inspection: 'Full room-by-room plus systems review' },
  { id: 'kothi',  name: 'Kothi / Independent House',    price: 3499, unit: '/month', inspection: 'Expanded: interior, exterior, floors, parking, access points, outdoor areas' },
  { id: 'estate', name: 'Large Estate',                 price: null, unit: '',       inspection: 'Scoped to the property', cta: 'Talk to Sales' }
];

// First month complimentary inspection.
const FIRST_MONTH_INSPECTION = [
  'Physical inspection',
  'Property condition check',
  'Inspection photos',
  'Basic issue identification',
  'Digital inspection report'
];

// Ongoing services included in residential plans.
const RESIDENTIAL_INCLUDED = [
  'Scheduled property inspections',
  'Inspection photos',
  'Maintenance requests',
  'Maintenance coordination',
  'Before/after repair photos',
  'Property history',
  'Documents',
  'Rent tracking',
  'Digital rent receipts',
  'Owner notifications',
  'Tenant communication'
];

// Visits beyond the included inspection.
const EXTRA_VISITS = [
  { id: 'additional', name: 'Additional property inspection', price: 499, note: 'Booked in advance' },
  { id: 'urgent',     name: 'Urgent property visit',         price: 799, note: 'Same or next day, subject to availability' },
  { id: 'emergency',  name: 'Emergency visit',               price: 999, from: true, note: 'Outside working hours' }
];

// ── NRI services (cross-segment, not a standalone category) ────────────────
const NRI_SERVICES = [
  'Rent collection',
  'Digital rent receipts',
  'Tenant management',
  'Property inspections',
  'Inspection photos',
  'Maintenance coordination',
  'Before/after repair evidence',
  'Property documents',
  'Owner reports',
  'Property history',
  'Key/access management',
  'On-ground visits',
  'Remote owner updates'
];

// ── Airbnb & Hospitality ────────────────────────────────────────────────────
const AIRBNB_SETUP = [
  {
    id: 'setup', name: 'Airbnb Setup', price: 9999, from: true, unit: 'one-time',
    includes: [
      'Airbnb listing setup', 'Listing optimisation', 'Property readiness',
      'Amenities', 'House rules', 'Guest instructions', 'Check-in instructions',
      'Pricing strategy', 'Photography planning', 'Interior/styling recommendations',
      'Guest experience setup', 'Cleaning workflow', 'Maintenance workflow', 'Launch support'
    ]
  }
];

const AIRBNB_SETUP_EXTENDED = [
  'Interior design', 'Property styling', 'Branding', 'Logo',
  'Website', 'SEO', 'Digital marketing', 'Social media',
  'Advertising', 'Professional photography', 'Content'
];

const AIRBNB_MANAGEMENT = {
  rate: '15%',
  basis: 'of monthly booking revenue',
  minimum: 2999,
  includes: [
    'Booking management', 'Guest communication and support', 'Check-in and check-out',
    'Cleaning and turnover coordination', 'Linen and inventory coordination',
    'Property inspections', 'Maintenance coordination', 'Emergency/on-ground visits',
    'Key/access management', 'Guest issue resolution',
    'Listing and calendar management', 'Pricing strategy', 'Occupancy monitoring',
    'Review management', 'Guest experience', 'International guest support',
    'Property documentation', 'Damage documentation',
    'Before/after evidence', 'Check-in/check-out condition documentation'
  ]
};

// ── The four customer segments ──────────────────────────────────────────────
const SEGMENTS = [
  {
    id: 'buildings',
    slug: '/buildings',
    nav: 'Buildings & Societies',
    name: 'Residential Buildings & Societies',
    h1: 'Your residents report it.<br>You see it get fixed.',
    lede: 'Housing societies, apartment buildings, residential complexes and gated communities. Residents scan a QR code to report an issue with a photo — no app to install. It becomes a ticket, a vendor is assigned, and the work is documented before and after.',
    title: 'Housing Society & Building Management, Mohali | RentCan',
    description: 'Housing society and building management in the Tricity — QR issue reporting, inspections, maintenance coordination and vendor management.',
    audience: ['Housing societies', 'Apartment societies', 'Residential buildings', 'Apartment complexes', 'Gated communities', 'Multi-unit residential properties', 'Co-living buildings', 'Large residential properties'],
    features: [
      'Building/property inspections', 'Common-area inspections', 'Unit inspections',
      'Resident/tenant management', 'Maintenance requests', 'Resident complaints',
      'QR-based issue reporting', 'Work orders', 'Vendor coordination',
      'Maintenance tracking', 'Before/after repair photos', 'Inspection photos',
      'Property condition reports', 'Building/property documents', 'Staff access',
      'Role-based access', 'Owner/manager approvals', 'Property history',
      'Issue history', 'Reports', 'Notifications',
      'Emergency requests', 'Asset/equipment records where applicable'
    ],
    pricing: 'sales',
    pricingNote: 'Pricing depends on units, buildings, residents, inspection frequency, common areas, maintenance requirements, staff and on-ground support.',
    waPlan: 'general',
    cta: 'Talk to Sales'
  },
  {
    id: 'airbnb',
    slug: '/airbnb',
    nav: 'Airbnb & Hospitality',
    name: 'Airbnb & Hospitality',
    h1: "You don't need to be in the city.<br>RentCan runs the property.",
    lede: 'Airbnb, villas, guesthouses, serviced apartments, boutique stays and hotels. We set the property up, list it properly, talk to your guests, coordinate every changeover and keep the place in shape — while you are somewhere else entirely.',
    title: 'Airbnb Management & Setup in Mohali, Chandigarh | RentCan',
    description: 'Airbnb management and setup in the Tricity — listing optimisation, guest communication, cleaning and turnover coordination. Setup from ₹9,999.',
    audience: ['Airbnb properties', 'Vacation rentals', 'Short-term rentals', 'Villas', 'Guesthouses', 'Serviced apartments', 'Boutique stays', 'Hotels', 'Hospitality properties', 'Short-term rental portfolios'],
    pricing: 'airbnb',
    waPlan: 'airbnb',
    cta: 'Explore Airbnb Management'
  },
  {
    id: 'commercial',
    slug: '/commercial',
    nav: 'Commercial',
    name: 'Commercial Properties',
    h1: 'Your shop, office or godown.<br>Checked and documented.',
    lede: 'Offices, shops, showrooms, warehouses, clinics and mixed-use property. Scheduled visits, tenant records, maintenance coordination and photo evidence of everything — so a commercial property you rarely visit does not quietly fall apart.',
    title: 'Commercial Property Management, Mohali & Chandigarh | RentCan',
    description: 'Commercial property management in the Tricity — offices, shops, showrooms and warehouses. Scheduled inspections, maintenance and photo evidence.',
    audience: ['Offices', 'Shops', 'Showrooms', 'Clinics', 'Warehouses', 'Commercial buildings', 'Business premises', 'Mixed-use properties'],
    features: [
      'Property inspections', 'Maintenance', 'Tenant management',
      'Complaints', 'Work orders', 'Vendor coordination',
      'Property documentation', 'Inspection photos', 'Before/after repair photos',
      'Property history', 'Reports', 'On-ground visits',
      'Asset/equipment records where applicable'
    ],
    pricing: 'sales',
    pricingNote: 'Priced on property type, size, number of units and how often you need someone on site.',
    waPlan: 'commercial',
    cta: 'Talk to Sales'
  },
  {
    id: 'homes',
    slug: '/homes',
    nav: 'Homes & Kothis',
    name: 'Homes & Kothis',
    h1: 'Someone checks your home.<br>Every month.',
    lede: 'Flats, kothis and independent houses across the Tricity. A RentCan person visits your property, photographs what they find, and you see it — wherever you are.',
    title: 'Property Management for Homes & Kothis in Mohali | RentCan',
    description: 'Property management for 1–4 BHK flats and kothis in Mohali — inspections, maintenance, rent tracking and tenant support. From ₹1,499/month.',
    audience: ['1, 2, 3 and 4 BHK flats', 'Large apartments', 'Kothis and independent houses', 'Rented-out family property', 'Locked or empty homes'],
    pricing: 'plans',
    waPlan: 'residential',
    cta: 'Manage My Property'
  },
  {
    id: 'hotels',
    slug: '/hotels',
    nav: 'Hotels',
    name: 'Hotels & Hospitality Management',
    h1: 'Your hotel runs to standard.<br>Even when you are away.',
    lede: 'Boutique hotels, business hotels, guesthouses, resorts and serviced stays across Mohali, Chandigarh, Panchkula, Zirakpur and Aerocity. Room-by-room inspections, housekeeping SOPs, preventative maintenance, vendor AMC tracking and guest-issue accountability.',
    title: 'Hotel Management & Operations, Mohali & Chandigarh | RentCan',
    description: 'On-ground hotel and hospitality management in the Tricity — room inspections, housekeeping SOPs, vendor AMC, guest issues and staff accountability.',
    audience: [
      'Boutique hotels & city hotels',
      'Guesthouses & bed-and-breakfasts',
      'Highway & airport hotels (Zirakpur / Aerocity)',
      'Resorts & farm-stay properties (New Chandigarh)',
      'Serviced apartment blocks',
      'Co-living & PG hospitality operators',
      'Multi-property hospitality owners',
      'Remote & NRI hotel investors'
    ],
    features: [
      'Scheduled room & corridor inspections',
      'Housekeeping & linen turnover audits',
      'Preventative AC, plumbing & electrical checks',
      'QR-based room & staff issue reporting',
      'Vendor & AMC (lift, DG, RO, HVAC) coordination',
      'Before/after repair & deep-clean photo logs',
      'Lobby, kitchen & common-area condition checks',
      'Guest complaint escalation & resolution tracking',
      'Asset, appliance & inventory register',
      'Staff attendance & shift accountability logs',
      'Monthly owner operations & maintenance summary',
      'Emergency on-ground dispatch across Tricity'
    ],
    pricing: 'sales',
    pricingNote: 'Scoped individually by room count (keys), property type, inspection cadence, housekeeping oversight and vendor AMC needs.',
    waPlan: 'general',
    cta: 'Talk to Sales'
  }
];

// Hotels / large portfolios — deliberately not squeezed into a plan.
const ENTERPRISE = {
  name: 'Hotels, Large Properties & Portfolios',
  blurb: 'Hotels, resorts, large hospitality properties and multi-property portfolios are scoped individually. Rooms, staff, housekeeping, room and common-area inspections, equipment records and work orders.',
  cta: 'Talk to Sales'
};

// ── Real Tricity scenarios & owner stories ──────────────────────────────────
const STORIES = [
  {
    tag: 'NRI Home · Sector 79, Mohali',
    title: 'Keeping a locked kothi dry, clean, and tenant-ready from Toronto',
    summary: 'An NRI family checked their kothi once a year on visits home — only to find bathroom seepage and overgrown lawns. With RentCan, a field rep visits on the 5th of every month, sends 15+ timestamped photos, coordinates plumber quotes with photo proof, and tracks rent and utility bills in one place.'
  },
  {
    tag: 'Boutique Hotel · Zirakpur / Aerocity',
    title: 'Stopping silent room wear and AC breakdowns at a 24-key hotel',
    summary: 'Outstation hotel owners rarely hear about loose hinges, damp bathroom grout, or overdue HVAC servicing until a 1-star review lands. RentCan runs weekly room and corridor audits, tracks vendor AMCs, logs housekeeping quality with photos, and turns every room snag into an assigned work order.'
  },
  {
    tag: 'Commercial Showroom · Sector 17 & Aerocity',
    title: 'Documented handovers and maintenance for a leased commercial floor',
    summary: 'Instead of chasing tenants over WhatsApp about facade upkeep, electrical load issues, or water-tank cleaning, RentCan maintains a permanent timeline of inspection reports, vendor invoices, and before/after repair evidence.'
  },
  {
    tag: 'Housing Society · Panchkula & Kharar',
    title: '30-second QR complaint tickets without forcing residents to install an app',
    summary: 'Residents scan a lobby QR code to report lift snags, corridor lights, or parking leaks with a photo. The committee sees open tickets, assigned vendors, and completion photos without sifting through 200 WhatsApp messages.'
  }
];

// ── The platform (the record, not the pitch) ────────────────────────────────
const PLATFORM_MODULES = [
  { name: 'Inspections',      blurb: 'Scheduled visits with a checklist, observations, severity and photographs. Findings can raise a maintenance ticket directly.' },
  { name: 'Maintenance',      blurb: 'From reported to closed, with quotes, approvals, assigned vendors and before/after photos on every job.' },
  { name: 'Complaints',       blurb: 'Tenants and residents report issues with a photo. Nothing depends on remembering a WhatsApp message.' },
  { name: 'Property History', blurb: 'Every inspection, issue and repair on one permanent timeline. You can see what happened to the property months later.' },
  { name: 'Documents',        blurb: 'Rent agreements, leases, invoices, warranties and inspection reports in one place.' },
  { name: 'Photos & Evidence',blurb: 'Dated photographs from every visit and every repair — what it looked like before, and after.' },
  { name: 'Approvals',        blurb: 'Repair needed? You get the estimate and the photos, and approve or decline from your phone.' },
  { name: 'Rent Collection',  blurb: 'Rent tracking, payment records, digital receipts, rent ledger, owner statements and due/overdue status.' }
];

// ── Optional specialist services — kept out of the core plans ───────────────
const ADDON_SERVICES = [
  {
    group: 'Property Services',
    items: [
      'Additional property inspection',
      'Urgent property visit',
      'Emergency visit',
      'Key/access management',
      'Cleaning coordination',
      'Maintenance coordination'
    ]
  },
  {
    group: 'Photography & Content',
    items: [
      'Property photography',
      'Airbnb photography',
      'Video content',
      'Interior consultation',
      'Interior design',
      'Property styling'
    ]
  },
  {
    group: 'Airbnb & Hospitality',
    items: [
      'Listing optimisation',
      'Pricing strategy',
      'Guest experience design',
      'Accommodation setup',
      'International guest support'
    ]
  },
  {
    group: 'Digital & Creative',
    items: [
      'Website design & development',
      'UI/UX design',
      'SEO',
      'Local SEO',
      'Digital marketing',
      'Google Ads',
      'Meta Ads',
      'Social media management',
      'Branding',
      'Logo design',
      'Graphic design'
    ]
  }
];

// ── Helpers ─────────────────────────────────────────────────────────────────
const inr = (n) => '₹' + Number(n).toLocaleString('en-IN');

const NAV_LINKS = SEGMENTS.map(s => ({ href: s.slug, label: s.nav }))
  .concat([{ href: '/platform', label: 'Platform' }, { href: '/pricing', label: 'Pricing' }]);

const getSegment = (id) => SEGMENTS.find(s => s.id === id) || null;

module.exports = {
  WHATSAPP, RESIDENTIAL_PLANS, FIRST_MONTH_INSPECTION, RESIDENTIAL_INCLUDED,
  EXTRA_VISITS, NRI_SERVICES, AIRBNB_SETUP, AIRBNB_SETUP_EXTENDED,
  AIRBNB_MANAGEMENT, SEGMENTS, ENTERPRISE, STORIES, PLATFORM_MODULES, ADDON_SERVICES,
  NAV_LINKS, inr, getSegment
};
