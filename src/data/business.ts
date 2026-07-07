export const business = {
  name: "9 Natural Nails & Spa",
  shortName: "Natural Nails & Spa",
  city: "Mississauga",
  region: "Ontario",
  tagline: "Mississauga · Est. Rathburn Rd",
  address: {
    line1: "900 Rathburn Rd W, Unit B1",
    line2: "Mississauga, ON L5C 4L4",
    mapQuery: "900+Rathburn+Rd+W+Unit+B1,+Mississauga,+ON+L5C+4L4",
  },
  phone: {
    display: "(905) 290-2335",
    href: "tel:+19052902335",
  },
  rating: {
    score: 4.8,
    count: 773,
    source: "Google Reviews",
  },
  hours: [
    { day: "Mon – Fri", time: "10:00 am – 8:00 pm" },
    { day: "Saturday", time: "10:00 am – 6:00 pm" },
    { day: "Sunday", time: "11:00 am – 5:00 pm" },
  ],
  openNote: "Open today · 10:00 am – 8:00 pm · Walk-ins welcome",
  instagram: {
    handle: "@9naturalnailsandspa",
    url: "https://www.instagram.com/9naturalnailsandspa/",
    posts: 383,
    followers: 333,
    bio: "Luxury Nails · Waxing · Russian Mani & Pedi",
    displayName: "9 Natural Nails and Spa Mississauga",
    tileClasses: ["f-berry", "f-chrome", "f-cateye", "f-ombre", "f-nude", "f-red"],
  },
} as const;

/**
 * Booking integration toggle.
 *
 * Today every "book" CTA on the site calls the salon directly. If this
 * client signs on with Setmore, switch `provider` to "setmore" and paste
 * their hosted booking page URL below (Setmore dashboard: Scheduling →
 * Booking Page, or Integrations → Booking Widget → "Book now" button —
 * the booking page URL works as a plain link on its own). Every CTA reads
 * from `getBookingHref()` / `isSetmoreActive()`, so this is the only edit
 * needed to flip the whole site over.
 *
 * Setmore also offers a true in-page popup widget (a `<script>` +
 * account-specific button snippet from Integrations → Booking Widget →
 * "I'll embed the code myself") instead of a new-tab link-out. That
 * snippet is generated per-account, so it can't be hardcoded here — once
 * you have it, add the `<script>` to Base.astro (gated on
 * `isSetmoreActive()`) and swap BookButton's anchor for the snippet's
 * button markup.
 */
export const booking = {
  provider: "phone" as "phone" | "setmore",
  setmore: {
    url: "",
  },
};

export function isSetmoreActive(): boolean {
  return booking.provider === "setmore" && booking.setmore.url.length > 0;
}

export function getBookingHref(): string {
  return isSetmoreActive() ? booking.setmore.url : business.phone.href;
}

export const reviewQuotes = [
  "Great service and very kind staff that go the extra mile.",
  "Their prices cannot be beat for the quality of workmanship that they produce.",
  "They also offer Russian manicures at a great price!",
] as const;

export const shades = [
  { code: "N.09", name: "Vamp", swatch: "s1" },
  { code: "N.02", name: "Café Crème", swatch: "s2" },
  { code: "N.05", name: "Rosé", swatch: "s3" },
  { code: "N.11", name: "Merlot", swatch: "s4" },
  { code: "N.14", name: "Chrome", swatch: "s5" },
  { code: "N.07", name: "Sage", swatch: "s6" },
] as const;

export type MenuItem = {
  name: string;
  note?: string;
  price: string;
  tag?: string;
};

export type MenuColumn = {
  title: string;
  subtitle: string;
  description: string;
  items: MenuItem[];
};

export const serviceMenu: MenuColumn[] = [
  {
    title: "Manicures",
    subtitle: "/ hands",
    description: "Shaping, cuticle care, and a finish that lasts.",
    items: [
      { name: "Classic Manicure", price: "$25" },
      { name: "Gel / Shellac Manicure", price: "$40" },
      {
        name: "Russian Manicure",
        tag: "Signature",
        note: "Dry, precise cuticle work – cleaner edges, longer wear",
        price: "$55",
      },
      { name: "BioGel Overlay", price: "$50" },
    ],
  },
  {
    title: "Pedicures",
    subtitle: "/ feet",
    description: "Because your feet deserve the same care as your hands.",
    items: [
      { name: "Classic Pedicure", price: "$35" },
      { name: "Gel Pedicure", price: "$50" },
      {
        name: "Russian Pedicure",
        tag: "Signature",
        note: "The same precise, long-wear technique – for toes",
        price: "$65",
      },
      {
        name: "Spa Deluxe Pedicure",
        note: "Scrub, mask, hot towel & extended massage",
        price: "$60",
      },
    ],
  },
  {
    title: "Extensions",
    subtitle: "/ length",
    description: "Acrylic, hard gel and dip – built to your shape.",
    items: [
      { name: "Acrylic Full Set", price: "$55" },
      { name: "Hard Gel Full Set", price: "$65" },
      { name: "Dip Powder", price: "$50" },
      { name: "Fills & Refresh", note: "From", price: "$40" },
    ],
  },
  {
    title: "Art & Add-ons",
    subtitle: "/ finish",
    description: "The little details people notice.",
    items: [
      { name: "French / Ombré", price: "+$10" },
      { name: "Chrome / Cat-Eye", price: "+$10" },
      { name: "Nail Art", note: "Per nail", price: "+$5" },
      { name: "Soak-off & Removal", price: "$15" },
    ],
  },
  {
    title: "Waxing",
    subtitle: "/ smooth",
    description: "Quick, careful hair removal while you're in the chair.",
    items: [
      { name: "Eyebrow", price: "$12" },
      { name: "Lip / Chin", price: "$8" },
      { name: "Full Face", price: "$35" },
      { name: "Underarm", price: "$18" },
    ],
  },
];

export type GalleryLook = {
  name: string;
  meta: string;
  finishClass: string;
};

export const galleryLooks: GalleryLook[] = [
  { name: "Vamp Berry", meta: "GEL · N.09", finishClass: "f-berry" },
  { name: "Modern French", meta: "SHELLAC · TIP", finishClass: "f-french" },
  { name: "Champagne Chrome", meta: "MIRROR · N.14", finishClass: "f-chrome" },
  { name: "Velvet Cat-Eye", meta: "MAGNETIC · GEL", finishClass: "f-cateye" },
  { name: "Rosé Ombré", meta: "BLEND · N.05", finishClass: "f-ombre" },
  { name: "Café Crème", meta: "NATURAL · N.02", finishClass: "f-nude" },
  { name: "Classic Red", meta: "GLOSS · N.01", finishClass: "f-red" },
  { name: "Deep Sage", meta: "MATTE · N.07", finishClass: "f-emerald" },
];
