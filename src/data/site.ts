/**
 * Single source of truth for every word on the site.
 * Edit copy here, components only handle layout.
 */

export const site = {
  name: 'Nicole Yahaya',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nicoleyahaya.vercel.app',
  email: 'Nicolegaku23@gmail.com',
  jobTitle: 'Retail Manager, Xiaomi Nigeria',
  tagline: 'Tech creator & keynote host',
  creatorBrand: 'That Tech Girl',
  location: 'Lagos & Abuja, Nigeria',
  description:
    'Nicole Yahaya is a tech creator and keynote host based in Nigeria. She speaks at national launches, trains dealer networks across 14 states, and reviews hardware as “That Tech Girl”, grounded in how Nigerians actually use their phones.',
} as const;

export const nav = [
  { id: 'stage', label: 'Stage' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Content' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
] as const;

export const socials = [
  {
    label: 'YouTube',
    handle: '@nicoleyahaya',
    href: 'https://youtube.com/@nicoleyahaya',
    stat: '1.07M lifetime views',
  },
  {
    label: 'TikTok',
    handle: '@nicoleyahaya',
    href: 'https://tiktok.com/@nicoleyahaya',
    stat: '56K+ likes',
  },
  {
    label: 'Instagram',
    handle: '@nicole_yayus',
    href: 'https://www.instagram.com/nicole_yayus/',
    stat: 'Behind the scenes',
  },
] as const;

export const heroStats = [
  { value: 6, suffix: '+', decimals: 0, label: 'years in consumer tech' },
  { value: 14, suffix: '', decimals: 0, label: 'Nigerian states trained' },
  { value: 500, suffix: '+', decimals: 0, label: 'press & partners at the 2026 Redmi Note 15 premiere' },
  { value: 1, suffix: 'M+', decimals: 0, label: 'lifetime views on her YouTube channel' },
] as const;

export const proof = {
  brands: ['Xiaomi', 'Redmi', 'POCO'],
  press: ['TechEconomy.ng', 'The Guardian Nigeria', 'ThisDay'],
} as const;

export const featuredKeynote = {
  title: 'Redmi Note 15 Series Grand Premiere',
  tag: 'Featured keynote · 28 Jan 2026',
  role: 'Creative Manager & opening host',
  venue: 'Lagos, Nigeria',
  audience: '500+ press, VIP partners and MTN team',
  summary:
    'I opened and hosted Xiaomi Nigeria’s flagship event of 2026, setting the tone for the national rollout in front of journalists, telecom partners and regional distributors, and introducing the Redmi Note 15 Pro+ 5G to the press.',
  presented: [
    { value: '#232', label: 'Xiaomi’s Fortune Global 500 ranking' },
    { value: '+18%', label: 'Unit sales growth in Nigeria' },
    { value: '48%', label: 'Nigerian tablet market share' },
  ],
  note: 'Figures presented on stage on behalf of Xiaomi.',
  video: {
    src: '/video/redmi-note-15-keynote.mp4',
    poster: '/images/keynote-poster.jpg',
    duration: '0:20',
  },
} as const;

export type KeynoteEvent = {
  id: string;
  year: string;
  title: string;
  role: string;
  location: string;
  audience: string;
  coverage?: string;
  latest?: boolean;
  summary: string;
  outcomes: string[];
};

export const events: KeynoteEvent[] = [
  {
    id: 'redmi-note-17',
    year: 'Autumn 2026',
    title: 'Redmi Note 17 Series Nigeria Launch',
    role: 'Retail Manager, Xiaomi Nigeria',
    location: 'Lagos, Nigeria',
    audience: 'Channel partners, nationwide dealers, distributors and tech influencers',
    coverage: 'The Guardian Nigeria, ThisDay',
    latest: true,
    summary:
      'Spoke for Xiaomi Nigeria’s retail team at the unveiling of the Redmi Note 17 series, alongside the country manager and distribution partners.',
    outcomes: [
      'Made the retail case for the series: as phone prices rise, buyers want durability and long-term performance, not routine upgrades',
      'Launch introduced the Note 17, 17 Pro, 17 Pro 5G and 17 Pro Max 5G',
      'Documented the day as a keynote speaker in a TikTok vlog',
      'Held as Xiaomi reported a 22% share of the Nigerian smartphone market',
    ],
  },
  {
    id: 'redmi-note-15',
    year: 'Jan 2026',
    title: 'Redmi Note 15 Series Grand Premiere',
    role: 'Creative Manager & opening host',
    location: 'Lagos, Nigeria',
    audience: '500+ press, VIP partners and MTN team',
    coverage: 'TechEconomy.ng, The Guardian Nigeria',
    summary:
      'Opened and hosted Xiaomi Nigeria’s launch of the Redmi Note 15 series in Lagos on 28 January 2026, before press, telecom partners and regional distributors.',
    outcomes: [
      'Recapped Xiaomi’s Fortune Global 500 milestone (#232)',
      'Presented 18% unit sales growth in Nigeria',
      'Presented 48% Nigerian tablet market share',
      'Introduced the Redmi Note 15 Pro+ 5G to national media',
      'Presented the launch partnership with MTN',
    ],
  },
  {
    id: 'poco-triple-launch',
    year: '18 Nov 2024',
    title: 'POCO Triple Launch: X6 Pro 5G, C75 & C61',
    role: 'Brand representative & keynote speaker',
    location: 'Lagos, Nigeria',
    audience: 'National media and trade distributors',
    coverage: 'Nairametrics, The Guardian Nigeria',
    summary:
      'Delivered the strategic presentation introducing POCO’s expansion in Nigeria, with coverage across the country’s leading business press.',
    outcomes: [
      'Positioned Xiaomi’s dual-brand strategy in Nigeria',
      'Explained gaming performance on the Dimensity 8300-Ultra',
      'Communicated pricing strategy for emerging-market buyers',
    ],
  },
  {
    id: 'northern-dealers',
    year: '2020–21',
    title: 'Northern Dealers Training & Investment Seminar',
    role: 'Founder & lead technical trainer',
    location: '14 northern Nigerian states',
    audience: 'Regional dealers, investors and sales leads',
    summary:
      'Designed and ran the dealer education initiative that established Xiaomi’s retail foothold in Northern Nigeria.',
    outcomes: [
      'Pioneered a mobile-tech roadshow across 14 states',
      'Grew the regional training division to 20+ staff',
      '5% consecutive monthly sales increase over three months',
    ],
  },
  {
    id: 'covid-training',
    year: '2020',
    title: 'Nationwide Digital Training during COVID-19',
    role: 'Lead remote trainer & systems architect',
    location: 'National, remote',
    audience: 'Xiaomi retail and field teams nationwide',
    summary:
      'Built an online training programme that kept dealer networks aligned and product knowledge sharp through lockdown.',
    outcomes: [
      'Created a remote curriculum for the Xiaomi 9 series',
      'Permanently reduced inter-state training costs',
      'Adopted as the training blueprint for regional clusters',
    ],
  },
  {
    id: 'investor-summit',
    year: '2020',
    title: 'Xiaomi Regional Investor Summit',
    role: 'Keynote host & product specialist',
    location: 'Northern regional headquarters',
    audience: 'Tier-1 smartphone importers and regional investors',
    summary:
      'Bridged product roadmaps and commercial capital to build dealer trust and speed up retail adoption.',
    outcomes: [
      'Presented smartphone adoption roadmaps for West Africa',
      'Aligned dealer inventory commitments',
      'Opened a direct line between manufacturer and trade channels',
    ],
  },
];

export const gallery = [
  { src: '/images/stage-4.jpg', alt: 'Nicole Yahaya on a large launch stage beside a robotics demo', caption: 'Launch-stage presence' },
  { src: '/images/stage-1.jpg', alt: 'Nicole Yahaya presenting in an olive blazer with a headset microphone', caption: 'Product storytelling' },
  { src: '/images/stage-3.jpg', alt: 'Nicole Yahaya presenting a product slide on stage', caption: 'Live demo & Q&A' },
  { src: '/images/stage-5.jpg', alt: 'Nicole Yahaya speaking on a Xiaomi-branded stage', caption: 'Hosting the room' },
] as const;

export const galleryWide = {
  src: '/images/stage-2.jpg',
  alt: 'Wide view of a launch auditorium with Nicole Yahaya presenting under a large screen',
  caption: 'Keynote to a full house',
} as const;

export const about = {
  heading: 'I started inside the product.',
  paragraphs: [
    'My career began as a Tech Product Specialist and Lead Trainer at Xiaomi, breaking engineering roadmaps down for dealers, retail managers and investors whose livelihoods depended on understanding the hardware.',
    'That discipline never left. Today, at Xiaomi Nigeria, I speak at national launches in front of press, distributors and partners, most recently the Redmi Note 17 series, and as a creator, ‘That Tech Girl’, I test hardware in real conditions for over a million YouTube views.',
  ],
  quote:
    'In emerging markets like Nigeria, a smartphone is not merely an accessory, it is an entrepreneur’s bank, a student’s classroom, and a creator’s production studio. Consumers don’t buy megapixel numbers; they buy the assurance that their hard-earned money will deliver.',
  pillars: [
    {
      title: 'Test it for real',
      body: 'Battery tested on Nigerian networks, cameras in tropical daylight, thermals in real heat, not lab conditions.',
    },
    {
      title: 'Price in context',
      body: 'Every device judged against local exchange rates and real purchasing power.',
    },
    {
      title: 'Honest authority',
      body: 'Holding brands accountable while explaining the engineering intent behind every trade-off.',
    },
  ],
  expertise: [
    'Smartphone hardware & optics',
    'Keynote hosting & press briefings',
    'Emerging-market pricing',
    'Short- & long-form video',
    'Dealer & retail training',
  ],
} as const;

export type MediaCategory = 'Flagship reviews' | 'Viral shorts' | 'Audio & ecosystem' | 'Buying guides';

export type MediaWork = {
  id: string;
  title: string;
  category: MediaCategory;
  platform: 'YouTube' | 'TikTok';
  videoId: string;
  specs: string[];
  verdict: string;
};

export const mediaFilters = ['All', 'Flagship reviews', 'Viral shorts', 'Audio & ecosystem', 'Buying guides'] as const;

export const works: MediaWork[] = [
  {
    id: '15t',
    title: 'Xiaomi 15T: The flagship disruptor of 2025',
    category: 'Flagship reviews',
    platform: 'YouTube',
    videoId: 'IOnc92LsQwk',
    specs: ['Leica optics', 'Dimensity 8400-Ultra', '1.5K 144Hz AMOLED', '5500mAh'],
    verdict: 'Punches well above its price tier, the Leica calibration delivers flagship-level skin tones and dynamic range.',
  },
  {
    id: 'poco-m7',
    title: 'POCO M7: the 7000mAh endurance test',
    category: 'Flagship reviews',
    platform: 'YouTube',
    videoId: 'HQP_8C2C_SA',
    specs: ['7000mAh', 'Snapdragon 685', 'FHD+ 120Hz', '33W charging'],
    verdict: 'Built for Nigerian power realities: three full days of battery without touching a charger.',
  },
  {
    id: 'redmi-note-15',
    title: 'Redmi Note 15: 108MP camera launch breakdown',
    category: 'Flagship reviews',
    platform: 'YouTube',
    videoId: '4_vBsBKUkuk',
    specs: ['108MP sensor', 'Helio G100-Ultra', '6000mAh', 'HyperOS 2.0'],
    verdict: 'Hands-on verdict straight from the Lagos launch stage, a new bar for entry-tier photography.',
  },
  {
    id: 'speaker-vs-jbl',
    title: 'Xiaomi Bluetooth Speaker vs JBL: the audio verdict',
    category: 'Audio & ecosystem',
    platform: 'YouTube',
    videoId: '0acgjDrv0Ds',
    specs: ['93dB output', '17-hour battery', 'IP67', 'RGB sync'],
    verdict: 'Tested head-to-head for depth and outdoor volume: roughly 90% of the JBL experience at half the price.',
  },
  {
    id: 'redmi-pad-2',
    title: 'Redmi Pad 2: a one-month real-world test',
    category: 'Flagship reviews',
    platform: 'YouTube',
    videoId: 'ri8MKpd5g5U',
    specs: ['11" 2K display', 'Quad speakers', '8000mAh', 'Multi-window'],
    verdict: 'My daily-driver tablet for a full month, the one I’d point Nigerian students and remote workers to.',
  },
  {
    id: 'projector',
    title: 'Xiaomi Compact Projector 2.0: living-room cinema test',
    category: 'Audio & ecosystem',
    platform: 'TikTok',
    videoId: '7607470741042285831',
    specs: ['1080p HDR', 'Dolby Audio', 'Auto-keystone', 'Portable'],
    verdict: 'Turns any bedroom wall into a private cinema, tested for ambient brightness and fan noise.',
  },
  {
    id: '17-pro-max',
    title: 'Xiaomi 17 Pro Max camera: portrait & night test',
    category: 'Viral shorts',
    platform: 'TikTok',
    videoId: '7580794599015337234',
    specs: ['Triple periscope', '4K 60fps', 'Pro portrait'],
    verdict: 'Low-light photography that genuinely surprises, a creator’s dream rig.',
  },
  {
    id: 'under-120k',
    title: 'Best smartphones under ₦120,000',
    category: 'Buying guides',
    platform: 'TikTok',
    videoId: '7509059288254500102',
    specs: ['Sub-₦120k', 'Network reliability', 'Battery life'],
    verdict: 'Practical advice that helps everyday Nigerians avoid buying e-waste.',
  },
  {
    id: 'watch-5',
    title: 'Redmi Watch 5 Active: the 18-day smartwatch',
    category: 'Audio & ecosystem',
    platform: 'TikTok',
    videoId: '7463907104290508038',
    specs: ['18-day battery', '140+ sports modes', '5ATM'],
    verdict: 'Unbeatable wearable value, health tracking with zero battery anxiety.',
  },
];

export const services = [
  {
    num: '01',
    title: 'Launch & keynote hosting',
    desc: 'Anchoring product unveilings, press briefings and partner summits with stage presence and genuine technical depth.',
    items: ['Opening address & keynote delivery', 'Press Q&A and media briefing host', 'VIP & partner welcome', 'Stage photo and video assets'],
  },
  {
    num: '02',
    title: 'Long-form hardware reviews',
    desc: 'Broadcast-quality YouTube reviews built on real Nigerian network, battery and camera conditions.',
    items: ['4K long-form video', 'Real-world network & thermal testing', 'Direct competitor benchmarks', 'Dedicated link & description placement'],
  },
  {
    num: '03',
    title: 'Short-form campaigns & first looks',
    desc: 'High-energy TikTok and Reels sprints, plus day-one unboxings that build early credibility and pre-order momentum.',
    items: ['Multi-part short-form campaigns', 'Cinematic b-roll & macro shots', 'Embargo-cleared day-one drops', 'Story reshares & comment moderation'],
  },
  {
    num: '04',
    title: 'Training & market advisory',
    desc: 'Dealer education and regional positioning that bridge global hardware and West African consumers.',
    items: ['Custom technical training curricula', 'Dealer & enterprise roadshows', 'Price-to-value assessments', 'Messaging & launch consulting'],
  },
] as const;

export const impact = [
  { value: 14, suffix: '', decimals: 0, label: 'States reached', body: 'Dealer-education roadshow I founded across northern Nigeria.' },
  { value: 20, suffix: '+', decimals: 0, label: 'Staff led', body: 'Regional training division grown from the ground up.' },
  { value: 5, suffix: '%', decimals: 0, label: 'Monthly sales lift', body: 'Consecutive growth for three months after the roadshow.' },
  { value: 1.07, suffix: 'M', decimals: 2, label: 'YouTube lifetime views', body: '114 videos of hands-on tech reviews and tutorials.' },
] as const;

export type Voice = {
  kind: 'Creator';
  name: string;
  role: string;
  handle: string;
  avatar: string | null;
  quote: string;
  context: string;
};

export const voices: Voice[] = [
  {
    kind: 'Creator',
    name: 'Fisayo Fosudo',
    role: 'Tech creator & visual storyteller',
    handle: '@fisayofosudo',
    avatar: '/images/voice-fisayo.jpg',
    quote: 'You did really great! Even when the clicker didn’t work.',
    context: 'Instagram DM after the Xiaomi flagship launch',
  },
  {
    kind: 'Creator',
    name: 'Valor Reviews',
    role: 'Smartphone reviewer',
    handle: '@valorreviews',
    avatar: '/images/voice-valor.jpg',
    quote: 'You were amazing on stage.',
    context: 'Instagram DM after the Redmi Note 15 keynote',
  },
];

export const brief = {
  scopes: [
    'Keynote or launch hosting',
    'Long-form review (YouTube)',
    'Short-form campaign (TikTok / Reels)',
    'First look & unboxing',
    'Market advisory',
    'Dealer training roadshow',
  ],
  facts: [
    { label: 'Based in', value: 'Lagos & Abuja' },
    { label: 'Travel', value: 'Available for events' },
    { label: 'Lead time', value: '2–3 weeks for launch prep' },
    { label: 'Response', value: 'Within 24 business hours' },
  ],
} as const;

export const pressCoverage = [
  {
    outlet: 'ThisDay',
    date: '3 Oct 2026',
    headline: 'Xiaomi Reports 22% Nigeria Smartphone Share, Unveils New Redmi Models',
    note: 'Quoted on why the Redmi Note 17 series answers rising phone prices.',
    url: 'https://www.thisdaylive.com/2026/10/03/xiaomi-reports-22-nigeria-smartphone-share-unveils-new-redmi-models/',
  },
  {
    outlet: 'The Guardian Nigeria',
    date: 'Oct 2026',
    headline: 'Xiaomi moves to deepen market share with new offering',
    note: 'Featured speaking at the Redmi Note 17 launch.',
    url: 'https://guardian.ng/business-services/xiaomi-moves-to-deepen-market-share-with-new-offering/',
  },
  {
    outlet: 'TechEconomy.ng',
    date: 'Jan 2026',
    headline: 'Xiaomi Launches Redmi Note 15 Series in Nigeria, Featuring 200MP Camera and “Titan Tough” Durability',
    note: 'Credited with opening the Redmi Note 15 launch.',
    url: 'https://techeconomy.ng/xiaomi-launches-redmi-note-15-series-in-nigeria-featuring-200mp-camera-and-titan-tough-durability/',
  },
] as const;

export const latestContent = {
  heading: 'Fresh from the channel',
  note: 'Covering new launches as they land, across Xiaomi, Google, Insta360 and more.',
  items: [
    { title: 'Redmi Note 17 Pro Max 5G unboxing', tag: 'Unboxing' },
    { title: 'Redmi Note 17 Pro Max vs Redmi Note 15 Pro+: camera comparison', tag: 'Camera test' },
    { title: 'Xiaomi 17T telephoto test, and 17T vs POCO X8 Pro', tag: 'Camera test' },
    { title: 'Google Pixel 10 Pro XL unboxing', tag: 'Unboxing' },
    { title: 'Insta360 Luna Ultra: the first 8K camera gimbal of 2026', tag: 'Gear' },
    { title: 'V2com S13 portable monitor extender unboxing', tag: 'Gear' },
  ],
} as const;
