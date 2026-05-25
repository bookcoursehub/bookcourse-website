// Course catalogue for BookCourse.co.uk
// All content sourced from https://bookcourse.co.uk

// Real BookCourse images from the WordPress site
const IMG = {
  doorSupervisor: "https://bookcourse.co.uk/wp-content/uploads/2024/10/SIA-Door-Supervisor-in-London.webp",
  firstAid: "https://bookcourse.co.uk/wp-content/uploads/2024/10/Emergency-First-Aid-Course-in-London.webp",
  securityHero: "https://bookcourse.co.uk/wp-content/uploads/2024/11/Security-Courses-in-London.webp",
  securityNearMe: "https://bookcourse.co.uk/wp-content/uploads/2024/11/Security-Courses-Near-Me.webp",
  siaLicence: "https://bookcourse.co.uk/wp-content/uploads/2024/11/Obtain-SIA-licence-uk.webp",
  about: "https://bookcourse.co.uk/wp-content/uploads/2024/11/About-Bookcourse.webp"
};

// WordPress booking/checkout URLs - clicking Book Now goes to the existing WP cart
const BOOK = {
  doorSupervisor: "https://bookcourse.co.uk/course/sia-door-supervisor-training-canary-wharf/",
  securityGuard: "https://bookcourse.co.uk/course/sia-security-guard-training-canary-wharf/",
  cctv: "https://bookcourse.co.uk/course/sia-cctv-course-canary-wharf/",
  trainer: "https://bookcourse.co.uk/course/sia-trainer-instructor-course-london/",
  dsRefresher: "https://bookcourse.co.uk/course/sia-door-supervisor-refresher-training-canary-wharf/",
  sgRefresher: "https://bookcourse.co.uk/course/sia-security-guard-refresher-training-canary-wharf/",
  forklift: "https://bookcourse.co.uk/course/forklift-training-course-london/",
  cpcs: "https://bookcourse.co.uk/course/cpcs-traffic-marshall-a73-london/",
  cscs: "https://bookcourse.co.uk/course/cscs-card-health-and-safety-test/",
  trafficOnline: "https://www.londonsecuritycollege.co.uk/product/traffic-marshal-banksman-online-training/",
  firstAid: "https://bookcourse.co.uk/course/emergency-first-aid-at-work/"
};

export const courses = [
  {
    slug: "sia-door-supervisor",
    category: "SIA",
    title: "SIA Door Supervisor Course",
    shortTitle: "SIA Door Supervisor",
    duration: "6 Days",
    price: 300,
    image: IMG.doorSupervisor,
    bookUrl: BOOK.doorSupervisor,
    summary: "The SIA Door Supervisor Licence - 6 Days course offers essential training in security, conflict management, and legal duties for working as a licenced door supervisor.",
    description: "To begin a career as a security guard or door supervisor in the UK, you'll first need to complete the six-day Door Supervisor course, which qualifies you to apply for your SIA licence.",
    highlights: ["Introduction to the Private Security Industry", "Door Supervisor Responsibilities (law, search, arrest)", "Conflict Management in Security", "Physical Intervention Techniques", "Emergency First Aid at Work (included)", "Practical assessments and written exams"],
    outcomes: ["SIA Door Supervisor Licence eligibility", "Level 2 Award certification", "First Aid at Work certificate", "Roles: Door Supervisor at nightclubs, bars, restaurants; Event Security; Corporate Security; Retail; Loss Prevention"],
    featured: true
  },
  {
    slug: "sia-security-guard",
    category: "SIA",
    title: "SIA Security Guard Course",
    shortTitle: "SIA Security Guard",
    duration: "4 Days",
    price: 270,
    image: IMG.securityNearMe,
    bookUrl: BOOK.securityGuard,
    summary: "Get SIA Security Guard with our training, covering essential skills for a career in security across the UK.",
    description: "The SIA Security Guard course gives you everything you need to obtain your SIA Security Guard licence and start working in retail, corporate, warehouse and event security.",
    highlights: ["Roles and responsibilities of a security officer", "Communication skills and conflict management", "Patrolling, searching and access control", "Emergency procedures and report writing", "Health & safety in the security workplace"],
    outcomes: ["Eligibility for SIA Security Guard front-line licence", "Level 2 Award for Working as a Security Officer", "Career routes into retail, events, warehousing, corporate security"],
    featured: true
  },
  {
    slug: "sia-cctv",
    category: "SIA",
    title: "SIA CCTV Course",
    shortTitle: "SIA CCTV Course",
    duration: "3 Days",
    price: 250,
    image: IMG.siaLicence,
    bookUrl: BOOK.cctv,
    summary: "SIA CCTV Course with our training, equipping you with the skills needed for surveillance and monitoring roles.",
    description: "Our 3-day SIA CCTV Operator course covers the practical and legal knowledge needed to operate Public Space Surveillance (CCTV) systems and apply for an SIA CCTV licence.",
    highlights: ["Working in the private security industry", "CCTV operations within the law", "Practical use of CCTV equipment", "Surveillance techniques and incident management", "Evidence handling and report writing"],
    outcomes: ["SIA CCTV Public Space Surveillance Licence eligibility", "Level 2 Award for Working as a CCTV Operator", "Roles in control rooms, retail, councils, transport"]
  },
  {
    slug: "sia-trainer-instructor",
    category: "SIA",
    title: "SIA Trainer Instructor",
    shortTitle: "SIA Trainer Instructor",
    duration: "7 Days",
    price: 300,
    image: IMG.securityHero,
    bookUrl: BOOK.trainer,
    summary: "Become an accredited SIA Trainer with our course, designed to equip you with the skills to teach security training to others.",
    description: "If you have an SIA licence and want to teach, this trainer pathway gives you the qualifications needed to deliver SIA-approved courses.",
    highlights: ["Level 3 Award in Education and Training (AET)", "Conflict Management Trainer qualification", "Physical Intervention Trainer qualification", "Lesson planning, micro-teach and assessment", "Industry trainer best practice"],
    outcomes: ["Qualified SIA trainer / instructor status", "Eligibility to deliver door supervisor and security guard courses", "Pathway into your own training business"]
  },
  {
    slug: "sia-door-supervisor-refresher",
    category: "SIA Refresher",
    title: "SIA Door Supervisor Refresher Training",
    shortTitle: "Door Supervisor Refresher",
    duration: "2 Days",
    price: 200,
    image: IMG.siaLicence,
    bookUrl: BOOK.dsRefresher,
    summary: "To ensure the renewal of your SIA Door Supervisor Licence, it is mandatory to successfully complete Top Up Training.",
    description: "The SIA mandates a top-up qualification when renewing your Door Supervisor licence. This 2-day course covers the latest physical intervention and conflict management updates plus EFAW first aid.",
    highlights: ["Door Supervisor top-up training", "Physical intervention refresher", "Conflict management refresher", "Emergency First Aid at Work (1 day)", "Updates on terrorism awareness (ACT)"],
    outcomes: ["Licence renewal eligibility", "Updated EFAW certificate (3 years)", "Current ACT and counter-terrorism knowledge"],
    featured: true
  },
  {
    slug: "sia-security-guard-refresher",
    category: "SIA Refresher",
    title: "SIA Security Guard Refresher Training",
    shortTitle: "Security Guard Refresher",
    duration: "1 Day",
    price: 200,
    image: IMG.securityNearMe,
    bookUrl: BOOK.sgRefresher,
    summary: "Refresher training plus EFAW first aid for SIA Security Guard licence renewal.",
    description: "A one-day course covering the SIA top-up for security guards plus Emergency First Aid at Work. The fastest route to renew your licence.",
    highlights: ["Security guard top-up training", "ACT and counter-terrorism updates", "Emergency First Aid at Work", "Latest legal and procedural updates"],
    outcomes: ["Licence renewal eligibility", "Fresh EFAW certificate"]
  },
  {
    slug: "forklift-training",
    category: "Construction",
    title: "Forklift Training Course",
    shortTitle: "Forklift Training",
    duration: "2 Days",
    price: 630,
    image: IMG.about,
    bookUrl: BOOK.forklift,
    summary: "Master Forklift Training in 2 Days. Gain hands-on skills, safety techniques, and certification for roles in logistics and warehousing.",
    description: "Our accredited 2-day forklift training course covers counterbalance and reach truck operation, pre-use checks and load handling, qualifying you for warehouse and logistics roles.",
    highlights: ["Pre-use safety inspections", "Counterbalance forklift operation", "Load lifting, moving and stacking", "Practical driving assessment", "Theory test and certification"],
    outcomes: ["Accredited Forklift Operator certificate", "Roles in warehousing, logistics, manufacturing", "RTITB / ITSSAR aligned training"],
    featured: true
  },
  {
    slug: "cpcs-traffic-marshall-a73",
    category: "Construction",
    title: "CPCS Traffic Marshall A73",
    shortTitle: "CPCS Traffic Marshall A73",
    duration: "2 Days",
    price: 750,
    image: IMG.about,
    bookUrl: BOOK.cpcs,
    summary: "Get your CPCS A73 Traffic Marshall card. Recognised on every major UK construction site, including HS2 and Tier 1 contractor projects.",
    description: "The CPCS A73 Vehicle Marshaller course is the gold-standard traffic management qualification, recognised by Tier 1 contractors and major UK construction projects.",
    highlights: ["Vehicle banking and reversing signals", "Site traffic management plans", "PPE and safe zones", "Theory and practical CPCS assessments", "Red CPCS trained operator card on pass"],
    outcomes: ["CPCS A73 Vehicle Marshaller card", "Access to high-paying traffic marshall roles", "Recognised on HS2 and large construction sites"]
  },
  {
    slug: "cscs-card",
    category: "Construction",
    title: "CSCS Certification Test",
    shortTitle: "CSCS Card Test",
    duration: "1 Day",
    price: 160,
    image: IMG.about,
    bookUrl: BOOK.cscs,
    summary: "The CSCS Certification - 1 Day course provides the required health and safety training to qualify for a CSCS card and work on construction sites.",
    description: "We prepare you for the CITB Health, Safety and Environment test and your CSCS card application - the standard requirement for working on UK construction sites.",
    highlights: ["CITB HS&E test preparation", "Mock tests and revision", "Test booking assistance", "CSCS card application support"],
    outcomes: ["Pass the CITB HS&E test", "Apply for your CSCS card", "Eligible to work on UK building sites"],
    featured: true
  },
  {
    slug: "traffic-marshall-online",
    category: "Construction",
    title: "Traffic Marshal Course Online",
    shortTitle: "Traffic Marshall Online",
    duration: "Self-paced",
    price: 40,
    image: IMG.about,
    bookUrl: BOOK.trafficOnline,
    summary: "Affordable online Traffic Marshall awareness course. Learn the basics of vehicle banking and site traffic management from home.",
    description: "An entry-level online course covering the essential principles of traffic marshalling on construction sites. Includes downloadable certificate on completion.",
    highlights: ["Online video modules", "Vehicle banking signals", "Pedestrian-vehicle segregation", "End-of-course assessment", "Instant digital certificate"],
    outcomes: ["Awareness-level certificate (not a CPCS card)", "Good preparation for the CPCS A73 in-person course"]
  },
  {
    slug: "emergency-first-aid",
    category: "First Aid",
    title: "Emergency First Aid at Work",
    shortTitle: "Emergency First Aid at Work",
    duration: "1 Day",
    price: 120,
    image: IMG.firstAid,
    bookUrl: BOOK.firstAid,
    summary: "The First Aid at Work - 1 Day course equips you with vital first aid skills to handle workplace emergencies and meet UK safety regulations.",
    description: "Join our HSE-approved Emergency First Aid at Work course in London, perfect for security officers, supervisors, and low-risk workplaces.",
    highlights: ["Health and Safety (First Aid) Regulations", "Incident Management and First Aid Priorities", "Resuscitation Techniques (CPR and AED)", "Recognizing and Managing Shock", "Handling Choking Incidents and Seizures", "Controlling Bleeding and Common Workplace Injuries"],
    outcomes: ["HSE-approved EFAW certificate (valid 3 years)", "Designated workplace first aider", "Confidence handling real emergencies"],
    featured: true
  }
];

export const getCourse = (slug) => courses.find((c) => c.slug === slug);
export const featuredCourses = () => courses.filter((c) => c.featured);
export const coursesByCategory = (category) => courses.filter((c) => c.category === category);

export const categories = [
  { key: "SIA", label: "SIA Courses", href: "/sia-courses" },
  { key: "SIA Refresher", label: "SIA Refresher", href: "/sia-refresher-training" },
  { key: "Construction", label: "Construction", href: "/construction-courses" },
  { key: "First Aid", label: "First Aid", href: "/courses/emergency-first-aid" }
];
