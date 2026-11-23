// Company facts used across the site, structured data and llms.txt.
// Everything here comes from the previous gishnugears.com content. Do not add
// certifications, capacities or contact details that the company has not published.

export const site = {
  url: 'https://www.gishnugears.com',
  name: 'Gishnu Gears',
  legalName: 'Gishnu Gears Private Limited',
  tagline: 'Transforming Innovation',
  lang: 'en-IN',
  locale: 'en_IN',
  founded: 1995, // as M.M Gears (P) Ltd
  renamed: 2011, // became Gishnu Gears
  description:
    'Gishnu Gears Private Limited is an ISO 9001:2015 certified industrial gearbox manufacturer in Coimbatore, Tamil Nadu, India. Founded in 1995 as M.M Gears (P) Ltd, the company designs and manufactures worm, helical, bevel, aerator and custom-built gearboxes, precision gears and machined components.',

  phone: '+919943917774',
  phoneDisplay: '+91 99439 17774',

  address: {
    lines: ['S.F. No. 796, Door No. 3/217K, Avinashi Road', 'Near Hotel Le Meridian, Neelambur'],
    street: 'S.F. No. 796, Door No. 3/217K, Avinashi Road, Near Hotel Le Meridian, Neelambur',
    locality: 'Coimbatore',
    region: 'Tamil Nadu',
    postalCode: '641062',
    country: 'IN',
    countryName: 'India',
  },
  gstin: '33AAHCG6311Q1ZD',

  // Listed alongside Gishnu Gears on the previous site footer and contact page.
  associate: {
    name: 'MM Gears Private Limited',
    lines: ['Plot No. J9, SIPCOT Industrial Growth Centre', 'Perundurai, Tamil Nadu 638052'],
    gstin: '33AABCM4110H1Z3',
  },

  maps: {
    gishnu: {
      label: 'Gishnu Gears (P) Ltd',
      embed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15662.941846871388!2d77.06025660037992!3d11.058449348340913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857dddc0e2ea1%3A0x346c356b8f0802d5!2sGishnu%20Gears%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1754306036093!5m2!1sen!2sin',
      link: 'https://www.google.com/maps?cid=3777452923534443221',
    },
    mm: {
      label: 'M.M Gears Pvt Ltd',
      embed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7831.189208984633!2d77.0954010437678!3d11.068990119686372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84b43c595a677%3A0xaf7c703e30a74124!2sM.M%20Gears%20Pvt%20Ltd%20-%20Coimbatore%2C%20India!5e0!3m2!1sen!2sin!4v1754306110945!5m2!1sen!2sin',
      link: 'https://www.google.com/maps?cid=12645105266156060964',
    },
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/gishnu-gears/',
    youtube: 'https://www.youtube.com/channel/UC7lr-tXnGkyKBBSXh0EF0hg',
    facebook: 'https://www.facebook.com/gishnugears.in/',
    linktree: 'https://linktr.ee/gishnugears',
  },

  // Existing integrations, carried over unchanged.
  // `tag` is the additional Google tag supplied by Velozity Global Solutions (November 2026).
  analytics: { gtm: 'GTM-5LR7RMVW', ga4: 'G-LVZ0ERHB04', tag: 'GTM-5QV3WRM3' },
  emailjs: { publicKey: 'PAIj6PqL_ryfKfRZC', service: 'service_xw8ufxt', template: 'template_cn322ae' },

  credit: { prefix: 'Designed, developed & managed by', name: 'Velozity Global Solutions', url: 'https://www.velozityglobal.com/' },
};

export const nav = [
  { label: 'Products', href: '/products/', mega: true },
  { label: 'Aerator Gearboxes', href: '/aerator-gearboxes.html' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Infrastructure', href: '/infrastructure/' },
  { label: 'About', href: '/about-us/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Careers', href: '/careers/' },
];

// Machinery published on the Infrastructure page, grouped by the job each machine does.
export const machinery = [
  {
    group: 'Gear cutting',
    items: [
      { name: 'Nimble NOAH 400H', note: 'CNC gear hobbing' },
      { name: 'Nidec ST25', note: 'Gear shaper' },
      { name: 'Hobbing machine', note: 'Gear hobbing' },
      { name: 'Horizontal broaching machine', note: 'Keyways and internal profiles' },
    ],
  },
  {
    group: 'Gear grinding',
    items: [
      { name: 'Höfler Helix 400', note: 'Gear grinding' },
      { name: 'Worm grinding machine', note: 'Worm shaft finishing' },
    ],
  },
  {
    group: 'Machining',
    items: [
      { name: 'CNC turning machine', note: 'Shafts and turned components' },
      { name: 'Thread milling machine', note: 'Threaded features' },
    ],
  },
  {
    group: 'Inspection and testing',
    items: [
      { name: 'Klingelnberg P40', note: 'Gear measuring centre' },
      { name: 'Accurate Spectra', note: 'Coordinate measuring machine (CMM)' },
      { name: 'Brinell hardness tester KB300H', note: 'Hardness testing' },
      { name: 'Rockwell hardness tester', note: 'Hardness testing' },
      { name: 'Gauges and instruments', note: 'All types, for in-process checks' },
    ],
  },
];

// Industry → application → series, taken from the application notes on each series page.
export const industries = [
  { name: 'Aquaculture', use: 'Paddle-wheel aerators for prawn and shrimp ponds', series: ['a'] },
  { name: 'Water and wastewater', use: 'Aeration systems and water pumps', series: ['a', 'g', 'gal'] },
  { name: 'Food processing', use: 'Grinders and processing machinery', series: ['g', 'gal'] },
  { name: 'Pharmaceutical', use: 'Clean, lightweight drives for process lines', series: ['gal'] },
  { name: 'Material handling', use: 'Conveyors and handling equipment', series: ['g', 'b', 'h'] },
  { name: 'Mining and crushing', use: 'Crushers and slow-speed, high-torque drives', series: ['h'] },
  { name: 'Agriculture', use: 'Farm and agricultural machinery', series: ['h', 'g'] },
  { name: 'Automotive', use: 'Steering mechanisms and vehicle projects', series: ['b', 'm'] },
  { name: 'Cement and construction', use: 'Concrete mixer and milling components', series: ['c'] },
  { name: 'Packaging', use: 'Packaging machinery drives', series: ['g'] },
  { name: 'Industrial automation', use: 'Special-purpose and prototype machinery', series: ['m', 'z'] },
  { name: 'Cooling and lifting', use: 'Cooling tower, screw-jack and tyre changer drives', series: ['z'] },
];
