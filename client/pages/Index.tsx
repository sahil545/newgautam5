import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import CaseGrid from "@/components/CaseGrid";
import FeatureBanner from "@/components/FeatureBanner";
import HospitalityProjects from "@/components/HospitalityProjects";
import { projects } from "@/data/projects";

// Transform architecture projects for the latest work section
const latestWorkCases = projects.map((project) => ({
  id: project.id,
  title: project.name,
  category: "Architecture",
  type: project.category,
  description: project.description,
  tags: ["Architecture", project.category],
  year: project.year,
  image: project.thumbnailImage,
  link: `/architecture/${project.id}`,
}));

const hospitalityProjects = [
  {
    id: "h1",
    title: "TRUNK(HOTEL) YOYOGI PARK",
    description:
      "TRUNK(HOTEL) YOYOGI PARK is a calm retreat seamlessly woven into the vibrant tapestry of Tokyo. Here, amid the juxtaposition of modernity and tradition, guests discover a refined blend of urban sophistication and natural beauty.",
    category: "Architecture",
    type: "Hospitality",
    year: 2023,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
  },
  {
    id: "h2",
    title: "ÄNG",
    description:
      "Sitting like a solitary diamond within rolling vineyard landscapes, Restaurant ÄNG delivers an immersive hospitality experience where architecture, nature, and culinary artistry converge.",
    category: "Architecture",
    type: "Hospitality",
    year: 2022,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
  },
];

const hospitalityCases = [
  {
    id: "h1",
    title: "TRUNK(HOTEL) YOYOGI PARK",
    tags: ["Architecture", "Hospitality"],
    year: 2023,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=600&fit=crop",
  },
  {
    id: "h2",
    title: "ÄNG",
    tags: ["Architecture", "Hospitality"],
    year: 2022,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=600&fit=crop",
  },
  {
    id: "h3",
    title: "Audo House",
    tags: ["Architecture", "Hospitality"],
    year: 2023,
    image: "https://images.unsplash.com/photo-1576527014312-d4306ca884e9?w=600&h=600&fit=crop",
  },
];

const residentialCases = [
  {
    id: "r1",
    title: "Repulse Bay Residence",
    tags: ["Architecture", "Residential"],
    year: 2024,
    image: "/images/project1.jpg",
  },
  {
    id: "r2",
    title: "Kent Avenue Penthouse",
    tags: ["Architecture", "Residential"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=600&fit=crop",
  },
  {
    id: "r3",
    title: "Fjord Boat House",
    tags: ["Architecture", "Residential"],
    year: 2020,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=600&fit=crop",
  },
  {
    id: "r4",
    title: "Archipelago House",
    tags: ["Architecture", "Residential"],
    year: 2020,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop",
  },
  {
    id: "r5",
    title: "Pavillion House",
    tags: ["Architecture", "Residential"],
    year: 2021,
    image: "/images/project2.jpg",
  },
];

const furnitureCases = [
  {
    id: "f1",
    title: "Modern Office Complex",
    tags: ["Architecture", "Commercial"],
    year: 2023,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop",
  },
  {
    id: "f2",
    title: "Contemporary Mall Design",
    tags: ["Architecture", "Commercial"],
    year: 2024,
    image: "/images/project3.jpg",
  },
  {
    id: "f3",
    title: "Urban Plaza Development",
    tags: ["Architecture", "Commercial"],
    year: 2023,
    image: "/images/project4.jpg",
  },
  {
    id: "f4",
    title: "Corporate Headquarters",
    tags: ["Architecture", "Commercial"],
    year: 2022,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=600&fit=crop",
  },
];

const objectsCases = [
  {
    id: "o1",
    title: "Emi Tray",
    tags: ["Design", "Objects"],
    year: 2022,
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&h=600&fit=crop",
  },
  {
    id: "o2",
    title: "Brandt Copenhagen",
    tags: ["Design", "Objects"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=600&fit=crop",
  },
  {
    id: "o3",
    title: "Minimal Vase Collection",
    tags: ["Design", "Objects"],
    year: 2023,
    image: "https://images.unsplash.com/photo-1594195666882-9c5e4e5e6c3d?w=600&h=600&fit=crop",
  },
];

export default function Index() {
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: "#f5f1e5" }}>
      <Header />
      <HeroSlider />

      {/* Latest work section */}
      <CaseGrid
        title="Latest Work"
        stickyWord="Recent"
        cases={latestWorkCases}
        layout="three"
        isLatestWork={true}
      />

      {/* Feature Banner */}
      <FeatureBanner
        title="RADISSON CHANDIGARH"
        description="Radisson stands as a striking urban resort sanctuary featuring world-class amenities and luxury accommodations. Showcasing an architectural style combined with sophistication and refined luxurious interiors, this premium 5-star hospitality project merges contemporary design with meticulous craftsmanship, creating an exceptional destination for function, celebrations, and unforgettable guest experiences."
        image={projects[0]?.thumbnailImage || "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&h=900&fit=crop"}
      />

      {/* Hospitality Projects */}
      <HospitalityProjects projects={hospitalityProjects} />

      {/* Hospitality Feature Banner */}
      <FeatureBanner
        title="LEMON TREE GOA"
        description="Nestled amidst serene foliage, Lemon Tree offers a breathtaking escape immersed in the embrace of nature. This coastal hospitality development features meticulously crafted architectural details with contemporary design, surrounded by whispering trees and panoramic views. The hotel offers exceptional seasonal services that provide upscale yet undefinable charms, rendering the perfect ambiance for a memorable coastal getaway."
        image={projects[1]?.thumbnailImage || "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&h=900&fit=crop"}
      />

      {/* In Residence */}
      <CaseGrid
        title="In Residence"
        stickyWord="HOMES"
        cases={residentialCases}
        layout="five"
        backgroundColor="#f5f1e5"
      />

      {/* In Residence Feature Banner */}
      <FeatureBanner
        title="KASAULI HILLSIDE RESORT"
        description="Perched atop a serene hillside, our Hotel & Resort at Kasauli offers a breathtaking 360-degree panoramic view of the surrounding Himalayan mountains. This luxury resort features meticulously crafted architectural details with exceptional seasonal services, combining upscale amenities with undefinable charm. Every element reflects our commitment to creating spaces where contemporary design meets natural beauty, providing an unforgettable mountain retreat experience."
        image={projects[2]?.thumbnailImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=900&fit=crop"}
      />

      {/* Commercial Spaces */}
      <CaseGrid
        title="Commercial Spaces"
        cases={furnitureCases}
        layout="four"
        backgroundColor="#f5f1e5"
      />

      {/* Objects of Desire */}
      {/* <CaseGrid
        title="Objects of Desire"
        cases={objectsCases}
        layout="two"
        backgroundColor="#f5f1e5"
      /> */}

      <Footer />
    </div>
  );
}
