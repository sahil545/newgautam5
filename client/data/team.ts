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
    bio: "Graduated with Honors in Architecture from the Indian Institute of Technology (IIT), Kharagpur in 1959. In 1962, he was selected by the Government of France for advanced studies, where he trained as an apprentice under Architect Zavaroni at the École des Beaux-Arts, Paris. He further completed a Diploma in Development Studies with a specialization in Regional Planning at RFED, Paris.\n\nHe also undertook a short-term course on housing schemes organized by the Ministry of Works and Construction, Government of France, focusing on projects in and around Paris. In addition, he attended a specialized program on the Harmonized Development of South Italy at SVIMEZ, Rome. During this period, he traveled extensively across Germany, Belgium, the Netherlands, Denmark, Switzerland, Luxembourg, Italy, and the United Kingdom to study both ancient and modern architecture.\n\nBeginning his professional career in October 1959, he joined the office of the Chief Town and Country Planner, Government of Uttar Pradesh, in Lucknow. In 1965, he was appointed to the Regional Housing Development Centre under the Ministry of Urban Development, Government of India, located at Punjab Engineering College, Chandigarh. He served the Centre for nearly 28 years, retiring in 1992 as Architect Planner upon attaining the age of superannuation.\n\nWith extensive experience in housing, regional planning, and low-cost construction technologies, he has made significant contributions to the field. He served as a Thesis Guide at the Chandigarh College of Architecture for five years and was a Member of the Regional Technical Committee of HUDCO, Regional Centre Chandigarh, also for five years.\n\nHe is currently engaged in professional practice as an Architect Planner, working in collaboration with his son, Architect Gautam Gupta.",
    education: "Graduated with Honors in Architecture from the Indian Institute of Technology (IIT), Kharagpur in 1959. In 1962, he was selected by the Government of France for advanced studies, where he trained as an apprentice under Architect Zavaroni at the École des Beaux-Arts, Paris.",
    experience: [
      "Completed Diploma in Development Studies with specialization in Regional Planning at RFED, Paris",
      "Short-term course on housing schemes by Ministry of Works and Construction, Government of France",
      "Specialized program on the Harmonized Development of South Italy at SVIMEZ, Rome",
      "Extensive travels across Germany, Belgium, Netherlands, Denmark, Switzerland, Luxembourg, Italy, and the United Kingdom",
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
    bio: "Joined Chandigarh College of Architecture (CCA), Chandigarh in 1985 and Graduated in Bachelor of Architecture in 1990.\n\nDid his apprenticeship with India's leading Architect Sh. Uttam C. Jain at Mumbai (June 1988 - Dec 1988). During this period he has had the chance to work on various architectural works that were underway, namely MPM College, Jodhpur, various Railway Station projects in Rajasthan and Maharashtra, RBI Headquarters at Goregaon, Mumbai and other ongoing projects in the office.\n\nSince 1990, he has established his own Architectural and Interior Design Firm 'Gautam & Associates' at Chandigarh. The firm has been in operation for the last 35 years and has worked extensively on Residential, Educational Institutions, Commercial and Hospitality projects.\n\nCurrently he heads the design team at 'Gautam & Associates' and working on many prestigious hospitality projects in Punjab, Haryana, Himachal Pradesh and other regions.",
    education: "Joined Chandigarh College of Architecture (CCA), Chandigarh in 1985 and Graduated in Bachelor of Architecture in 1990.",
    experience: [
      "Apprenticeship with Ar. Uttam C. Jain at Mumbai (June 1988 - Dec 1988)",
      "Worked on MPM College, Jodhpur",
      "Various Railway Station projects in Rajasthan and Maharashtra",
      "RBI Headquarters at Goregaon, Mumbai",
      "Established own Architectural and Interior Design firm 'Gautam & Associates' at Chandigarh in 1990",
      "35+ years of operation with work on Residential, Educational Institutions, Commercial and Hospitality projects",
      "Heads the design team at Gautam & Associates working on prestigious hospitality projects in Punjab, Haryana, Himachal Pradesh and other regions"
    ],
    achievements: [
      "Diverse and expansive portfolio spanning Residential, Institutional, Commercial, and Hospitality sectors",
      "35+ years of professional practice and firm leadership",
      "Work on prestigious hospitality projects across multiple states"
    ]
  },
  {
    id: "rachit-gupta",
    name: "Ar. Rachit Gupta",
    role: "Senior Architect",
    image: "https://cdn.builder.io/o/assets%2F9c4b66000efd41e78140e4d6e6d29921%2F0264520b2fff42dfb4cfe8a474b7f321?alt=media&token=efb99b10-2e44-4b41-9f7c-dee9bc359495&apiKey=9c4b66000efd41e78140e4d6e6d29921",
    bio: "Born in the City of Chandigarh, in the year 1997.\n\nCompleted his Bachelor of Architecture Degree with Distinction from The Chandigarh College of Architecture (CCA) in the year 2021.\n\nWas amongst the top architect students during the academic years at CCA and received the A.R. Prabhawalkar Award for the same.\n\nDid his apprenticeship of 6 months at Freiburg Im Breisgau, Germany with Hansen Architekturburo. During this period he has had an extensive exposure to the Art and Architecture of the European countries like Germany, Italy, France, Austria, Hungary, Netherlands, Switzerland, Croatia, etc.\n\nDid his thesis on 'Low Density Country Homes' - 300 Acres, including Master Planning of the Campus layout and individual Country Homes, Commercial areas, Schools and other functional components. His thesis project was acknowledged as best among top 3 presentations.\n\nSince his graduation in year 2021, he has been actively practising as Senior Architect and Interior Designer at Gautam & Associates, Chandigarh.",
    education: "Born in the City of Chandigarh in the year 1997. Completed Bachelor of Architecture Degree with Distinction from the Chandigarh College of Architecture (CCA) in the year 2021.",
    experience: [
      "Top architect students during academic years at CCA",
      "Received the A.R. Prabhawalkar Award for excellence",
      "6 months apprenticeship at Freiburg Im Breisgau, Germany with Hansen Architekturburo",
      "Extensive exposure to Art and Architecture of European countries like Germany, Italy, France, Austria, Hungary, Netherlands, Switzerland, Croatia",
      "Thesis on 'Low Density Country Homes' - 300 Acres with Master Planning and individual Country Homes",
      "Actively practicing as Senior Architect and Interior Designer at Gautam & Associates since graduation in 2021"
    ],
    achievements: [
      "Graduated with Distinction from CCA",
      "Won A.R. Prabhawalkar Award during academic years",
      "Thesis project on country homes recognized as best among top 3 presentations"
    ]
  },
  {
    id: "diksha-gupta",
    name: "Ar. Diksha Gupta",
    role: "Senior Architect & Interior Designer",
    image: "https://cdn.builder.io/o/assets%2F9c4b66000efd41e78140e4d6e6d29921%2F56ee71788a594ab99a20eb8ba29a662c?alt=media&token=78752fb5-882b-462e-a837-3f7c2dafc122&apiKey=9c4b66000efd41e78140e4d6e6d29921",
    bio: "Born in the year 1997 in Himachal Pradesh.\n\nCompleted her Bachelor of Architecture degree from The Chandigarh College of Architecture (CCA) in the year 2021.\n\nDid her apprenticeship of 6 months at Freiburg Im Breisgau, Germany with Hansen Architekturburo. During this period she has had an extensive exposure to the Art and Architecture of the European countries like Germany, Italy, France, Austria, Hungary, Netherlands, Switzerland, Croatia, etc.\n\nDid her final thesis on 'Five Star Luxury Hotel & Wellness Retreat Design' on a site near Chandigarh, which was acknowledged amongst the top projects in the Academic year and was highly appreciated and recognised by a renowned jury from across the country.\n\nSince her graduation in year 2021, she has been actively practising as Senior Architect and Interior Designer along with her husband, Ar. Rachit Gupta at Gautam & Associates, Chandigarh.",
    education: "Born in the year 1997 in Himachal Pradesh. Completed her Bachelor of Architecture degree from the Chandigarh College of Architecture (CCA) in the year 2021.",
    experience: [
      "6 months apprenticeship at Freiburg Im Breisgau, Germany with Hansen Architekturburo",
      "Extensive exposure to Art and Architecture of European countries like Germany, Italy, France, Austria, Hungary, Netherlands, Switzerland, Croatia",
      "Final thesis on 5-Star Luxury Hotel & Wellness Retreat Design near Chandigarh",
      "Thesis project acknowledged amongst top projects in the Academic year",
      "Highly appreciated and recognized by a renowned jury from across the country",
      "Actively practicing as Senior Architect and Interior Designer with husband Ar. Rachit Gupta at Gautam & Associates since graduation in 2021"
    ],
    achievements: [
      "Bachelor of Architecture from CCA",
      "5-Star Luxury Hotel & Wellness Retreat Design thesis project",
      "Thesis recognized amongst top projects in academic year by renowned jury"
    ]
  },
  {
    id: "rohil-gupta",
    name: "Id. Rohil Gupta",
    role: "Interior & Furniture Designer",
    image: "https://cdn.builder.io/o/assets%2F9c4b66000efd41e78140e4d6e6d29921%2Fd82761deee6e4d3d9eaa1ddb88767c4a?alt=media&token=69e8f1c7-e12e-49de-be4c-a4e12428161d&apiKey=9c4b66000efd41e78140e4d6e6d29921",
    bio: "Born in the City of Chandigarh, in the year 2001.\n\nGraduated in the Bachelor of Science in Interior Design Degree from The International Institute of Fashion Design (INIFD), Chandigarh, in 2023.\n\nAttended and completed the Master of Furniture Design Degree Programme from the Florence Institute of Design International (FIDI), Florence, Italy in 2024. Worked with professionals in the field of Architecture and Furniture Design in Italy, namely, Ar. Leonardo Rossano, Ar. Giulio Vinci, renowned Designer Lapo Binazzi, Ar. Federico Grazzini, among others.\n\nHis work and portfolio was assessed by a worldwide jury of professionals and he got selected to participate and showcase his work for 3 year (2025-2027) at the Salone Satellite exhibition as part of the Salone del Mobile fair. The Salone del Mobile is the most renowned and the largest exhibition of furniture and design in the world, held annually in the city of Milan in Italy.\n\nHis work got published in a prestigious Italian National Newspaper, La Repubblica and prominently featured on the Architectural Digest India Website.\n\nSince January 2025, he is actively associated as Designer at Gautam & Associates, Chandigarh.",
    education: "Born in the City of Chandigarh in the year 2001. Graduated in the Bachelor of Science in Interior Design Degree from The International Institute of Fashion Design (INIFD), Chandigarh, in 2023.",
    experience: [
      "Master of Furniture Design Degree Programme from the Florence Institute of Design International (FIDI), Florence, Italy in 2024",
      "Worked with Ar. Leonardo Rossano, Ar. Giulio Vinci, renowned Designer Lapo Binazzi, Ar. Federico Grazzini, among others",
      "Portfolio assessed by worldwide jury of professionals",
      "Selected to participate and showcase work for 3 years (2025-2027) at the Salone Satellite exhibition",
      "Work published in prestigious Italian National Newspaper, La Repubblica",
      "Featured on the Architectural Digest India Website",
      "Actively associated as Designer at Gautam & Associates, Chandigarh since January 2025"
    ],
    achievements: [
      "Master of Furniture Design from FIDI, Florence, Italy",
      "Selected for Salone Satellite exhibition participation for 3 consecutive years (2025-2027)",
      "Work published in La Repubblica and featured on Architectural Digest India",
      "Association with prestigious Italian architects and designers"
    ]
  }
];
