import tailoring from "@/assets/course-tailoring.jpg";
import automotive from "@/assets/course-automotive.jpg";
import it from "@/assets/course-it.jpg";
import hospitality from "@/assets/course-hospitality.jpg";

export type Course = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  fee: string;
  image: string;
  summary: string;
  outcomes: string[];
};

export const courses: Course[] = [
  {
    slug: "apparel-tailoring",
    title: "Apparel Design & Tailoring",
    category: "Textiles",
    duration: "6 months",
    level: "Beginner",
    fee: "₹ 8,500",
    image: tailoring,
    summary:
      "From pattern making to boutique-grade finishing. Trainees build a portfolio of stitched garments and launch home enterprises.",
    outcomes: [
      "Industrial sewing machine operation",
      "Pattern drafting for men, women, kidswear",
      "Boutique-ready finishing techniques",
    ],
  },
  {
    slug: "automotive-mechanic",
    title: "Automotive Service Mechanic",
    category: "Automotive",
    duration: "9 months",
    level: "Intermediate",
    fee: "₹ 14,000",
    image: automotive,
    summary:
      "Hands-on training in engine diagnostics, EV components, and workshop safety with certified Maruti and Bajaj partner garages.",
    outcomes: [
      "2W, 3W, 4W engine servicing",
      "EV powertrain fundamentals",
      "Workshop safety and customer handling",
    ],
  },
  {
    slug: "it-support-fundamentals",
    title: "IT Support & Digital Skills",
    category: "Technology",
    duration: "4 months",
    level: "Beginner",
    fee: "₹ 6,500",
    image: it,
    summary:
      "Practical computing, Microsoft Office, Tally Prime and CSC service delivery — mapped to NSDC's IT-ITeS SSC.",
    outcomes: [
      "Hardware & OS troubleshooting",
      "Tally Prime with GST",
      "CSC / digital seva operations",
    ],
  },
  {
    slug: "hospitality-culinary",
    title: "Hospitality & Culinary Arts",
    category: "Hospitality",
    duration: "12 months",
    level: "Advanced",
    fee: "₹ 22,000",
    image: hospitality,
    summary:
      "Live kitchens, front-office labs and industry placements with Taj, Lemon Tree and Oyo Rooms hospitality partners.",
    outcomes: [
      "Indian & continental cuisine",
      "Front office & housekeeping ops",
      "Guaranteed placement interviews",
    ],
  },
];
