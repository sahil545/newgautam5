export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  education?: string;
  experience?: string[];
  achievements?: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "dharam-pal-gupta",
    name: "Ar. Dharam Pal Gupta",
    role: "Founder & Mentor",
    image: "https://cdn.builder.io/o/assets%2F9c4b66000efd41e78140e4d6e6d29921%2F37b5045e7a5e4aa6939b342fa4ed6a70?alt=media&token=f9de05bd-f4eb-4cd1-807c-d406174de6fb&apiKey=9c4b66000efd41e78140e4d6e6d29921",
    bio: "Ar. Dharam Pal Gupta is a distinguished architect and mentor with extensive experience in housing, institutional, and public projects. He has shaped the forward-thinking and contemporary approach to architecture.",
    education: "Graduated with Honors in Architecture from the Indian Institute of Technology (IIT), Kharagpur in 1959. In 1962, he was selected by the Government of France for advanced studies, where he trained as an apprentice under Architect Zavaroni at the École des Beaux-Arts, Paris.",
    experience: [
      "Completed Diploma in Development Studies with specialization in Regional Planning at IEED, Paris",
      "Short-term course on housing schemes by Ministry of Works and Construction, Government of India",
      "Specialized program at the Harmonized Development of South Italy by SVIMEZ, Rome",
      "Extensive travels across Germany, Belgium, Netherlands, Denmark, Switzerland, and modern architecture studies",
      "Chief Town and Country Planner, Government of Uttar Pradesh",
      "Regional Housing Development Centre, Ministry of Urban Development, Government of India",
      "Thesis Guide at Chandigarh College of Architecture for 5 years",
      "Member of the Regional Technical Committee of HUDCO, Chandigarh"
    ],
    achievements: [
      "Nearly 28 years of professional service at various governmental positions",
      "Extensive experience in housing, regional planning, and low-cost construction technologies",
      "Significant contributions to the field of architecture and urban development"
    ]
  },
  {
    id: "gautam-gupta",
    name: "Ar. Gautam Gupta",
    role: "Principal Architect",
    image: "https://cdn.builder.io/o/assets%2F9c4b66000efd41e78140e4d6e6d29921%2F5c927e2379324846b5ccfc21e8198fb1?alt=media&token=eb5a0424-6a6f-41c7-96ba-749e85dd2d4f&apiKey=9c4b66000efd41e78140e4d6e6d29921",
    bio: "Ar. Gautam Gupta trained under the distinguished Ar. Dharam Pal Gupta and brings extensive experience across diverse architectural projects. He leads the design philosophy with clarity and modernity.",
    education: "Joined Chandigarh College of Architecture (CCA), Chandigarh in 1985 and Graduated in Bachelor of Architecture in 1990. Apprenticeship with Ar. Mahesh Kumar Mehta.",
    experience: [
      "Various architectural works at MTTB College, Jadhpur, and Rashtay Station projects in Chandigarh, Mumbai and other locations",
      "Exposure to European architecture during travels and studies in Paris during early 1960s",
      "Established own Architectural and Interior Design firm 'Gautam & Associates' at Chandigarh in 1990",
      "Over 35 years of operation with work on Residential, Educational Institutions, Commercial and Hospitality projects",
      "Head of design team at Gautam & Associates working on prestigious hospitality projects in Punjab, Haryana, Himachal Pradesh and other regions"
    ],
    achievements: [
      "Diverse and expansive portfolio spanning Residential, Institutional, Commercial, and Hospitality sectors",
      "Worked extensively on projects across Chandigarh, Panchkula, Jugalpur, Yamunanagar and tri-city region"
    ]
  },
  {
    id: "rachit-gupta",
    name: "Ar. Rachit Gupta",
    role: "Senior Architect",
    image: "https://cdn.builder.io/o/assets%2F9c4b66000efd41e78140e4d6e6d29921%2F0264520b2fff42dfb4cfe8a474b7f321?alt=media&token=efb99b10-2e44-4b41-9f7c-dee9bc359495&apiKey=9c4b66000efd41e78140e4d6e6d29921",
    bio: "Ar. Rachit Gupta is a talented senior architect with recognition for excellence and a comprehensive understanding of contemporary architectural principles.",
    education: "Born in the City of Chandigarh in the year 1997. Completed Bachelor of Architecture Degree with Distinction from the Chandigarh College of Architecture (CCA) in the year 2021.",
    experience: [
      "Top architect students during academic years at CCA",
      "Received the A.R. Prabhawakar Award for excellence",
      "6 months apprenticeship at Freiburg in Breisgau, Germany with Hansen Architekturburro",
      "Extensive exposure to Art and Architecture of European countries",
      "Actively practicing as Senior Architect and Interior Designer at Gautam & Associates since graduation in 2021"
    ],
    achievements: [
      "Won A.R. Prabhawakar Award during academic years",
      "Worked on Country Homes - 300 Acres project with Master Planning and individual villas",
      "Experience on Commercial areas, Schools and functional components",
      "Thesis project on country homes recognized as best among top 3 presentations"
    ]
  },
  {
    id: "diksha-gupta",
    name: "Ar. Diksha Gupta",
    role: "Senior Architect & Interior Designer",
    image: "https://cdn.builder.io/o/assets%2F9c4b66000efd41e78140e4d6e6d29921%2F56ee71788a594ab99a20eb8ba29a662c?alt=media&token=78752fb5-882b-462e-a837-3f7c2dafc122&apiKey=9c4b66000efd41e78140e4d6e6d29921",
    bio: "Ar. Diksha Gupta combines her expertise in architecture and interior design to create spaces that are both functional and aesthetically refined.",
    education: "Born in the year 1997 in Himachal Pradesh. Completed her Bachelor of Architecture degree from the Chandigarh College of Architecture (CCA) in the year 2021.",
    experience: [
      "6 months apprenticeship at Freiburg in Breisgau, Germany with Hansen Architekturburro",
      "Extensive exposure to Art and Architecture of European countries including Germany, Italy, France, Austria, Hungary, Netherlands, Switzerland, and Croatia",
      "Final thesis on 5-Star Luxury Hotel & Wellness Retreat Design",
      "Thesis project acknowledged as best among projects in the Academic year",
      "Highly appreciated and recognized by a renowned jury from across the country",
      "Actively practicing as Senior Architect and Interior Designer with husband Ar. Rachit Gupta at Gautam & Associates since graduation in 2021"
    ],
    achievements: [
      "Academic excellence in Bachelor of Architecture studies",
      "5-Star Luxury Hotel & Wellness Retreat Design thesis project"
    ]
  },
  {
    id: "rohil-gupta",
    name: "Id. Rohil Gupta",
    role: "Interior & Furniture Designer",
    image: "https://cdn.builder.io/o/assets%2F9c4b66000efd41e78140e4d6e6d29921%2Fd82761deee6e4d3d9eaa1ddb88767c4a?alt=media&token=69e8f1c7-e12e-49de-be4c-a4e12428161d&apiKey=9c4b66000efd41e78140e4d6e6d29921",
    bio: "Id. Rohil Gupta is a talented interior and furniture designer with international recognition and a passion for innovative design solutions.",
    education: "Born in the City of Chandigarh in the year 2001. Graduated in the Bachelor of Science in Interior Design Degree from The International Institute of Fashion Design (IIFD), Chandigarh, in 2023.",
    experience: [
      "Master of Furniture Design Degree Programme from the Florence Institute of Design International (FIDI), Florence, Italy in 2024",
      "Worked with professionals in the field of Architecture and Furniture Design in Italy under Leonardo Rossato and Ar. Guido Vinci",
      "Renowned Designer Luigi Bianchi and Federico Giacomo among others",
      "Work portfolio assessed by worldwide jury of professionals",
      "Selected to participate and showcase work for 3 years (2025-2027) at the Salone del Mobile exhibition",
      "Salone del Mobile is the most renowned and largest exhibition of furniture and design in the world",
      "Actively associated as Designer at Gautam & Associates, Chandigarh since January 2025"
    ],
    achievements: [
      "Work featured in prestigious Italian National Newspaper, La Repubblica",
      "Prominently featured on the Architectural Digest Italia Website",
      "Selected for Salone del Mobile exhibition participation for 3 consecutive years"
    ]
  }
];
