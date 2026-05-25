// Training centre locations served by BookCourse.co.uk
export const locations = [
  {
    slug: "greenwich",
    name: "Greenwich",
    fullName: "SIA Training Courses in London - Greenwich",
    summary:
      "SIA Door Supervisor, Security Guard and CCTV training in Greenwich, South-East London. Close to North Greenwich tube, DLR and bus links.",
    address: "Greenwich, South-East London, SE10",
    tubeNearby: ["North Greenwich (Jubilee)", "Cutty Sark DLR", "Greenwich rail"],
    courses: ["sia-door-supervisor", "sia-security-guard", "sia-cctv", "sia-door-supervisor-refresher"]
  },
  {
    slug: "east-london",
    name: "East London",
    fullName: "SIA Training Course in London - East London",
    summary:
      "Affordable SIA security training across East London - covering Stratford, Canary Wharf, Whitechapel and Mile End areas.",
    address: "East London (Stratford / Canary Wharf area)",
    tubeNearby: ["Stratford", "Canary Wharf", "Whitechapel", "Mile End"],
    courses: ["sia-door-supervisor", "sia-security-guard", "sia-security-guard-refresher", "emergency-first-aid"]
  },
  {
    slug: "park-royal",
    name: "Park Royal",
    fullName: "SIA Training Courses in Park Royal",
    summary:
      "SIA Door Supervisor and refresher training in Park Royal, West London. Excellent transport links via Central and Piccadilly lines.",
    address: "Park Royal, West London, NW10",
    tubeNearby: ["Park Royal (Piccadilly)", "Hanger Lane (Central)", "North Acton"],
    courses: ["sia-door-supervisor", "sia-cctv", "sia-door-supervisor-refresher", "cscs-card"]
  }
];

export const getLocation = (slug) => locations.find((l) => l.slug === slug);
