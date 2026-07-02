export interface Project {
  id: string;
  name: string;
  location: string;
  category: string;
  plotSize: string;
  builtUpArea: string;
  year: number;
  description: string;
  aboutProject: string;
  thumbnailImage: string;
  galleryImages: string[];
}

export const projects: Project[] = [
  {
    id: "radisson-chandigarh",
    name: "Radisson",
    location: "Chandigarh, Tranda",
    category: "Hospitality",
    plotSize: "1800 sq.ft",
    builtUpArea: "1,25,000 sq.ft",
    year: 2015,
    description: "A premium 5-star hospitality project featuring world-class amenities and luxury accommodations.",
    aboutProject: "Hotel Radisson is a striking urban resort within spacious compound. Featuring three multi-level integrated resort, a fine-dining outlet that is both a venue and eating destination nearby. Hotel Radisson showcases an architectural style combined with sophistication and refined luxurious interiors. The property is also a center for functions, celebrations. With its distinctive exterior that shows stone work combined with intricate detailing on different levels of craftsmanship and elaboration.",
    thumbnailImage: "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fff6e8afc8f874a9cafd148ecde5d953c?alt=media&token=c2808434-b2a3-4803-9696-7decca49a5be&apiKey=13db4688721e4e7592c6f9dd0fce780f",
    galleryImages: [
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F94e2400bced548e3a7f6864784eb1a70?alt=media&token=a74a233d-17e6-4900-a773-a0c84f0ff746&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F24a1131ecd9f48228fe7e92be5ad236b?alt=media&token=5eb06533-bed8-48bd-a3a1-6d81d0698f99&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fce2886ecb9544b84a19c7693642653a8?alt=media&token=0be05dfa-c813-42b7-96db-15d0bda78e3c&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F37c2ae1c2fbc4e1890e97a3788834796?alt=media&token=8141c232-be1a-460a-bbaf-39b99484a091&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fffe5039ffaf943309ce97eeaf3ff4a84?alt=media&token=6baab1a2-d792-4fce-9866-a1a554215608&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F24f4d85ae27f4635a023103304c47eed?alt=media&token=b8e7f9c5-157d-40f9-961a-37459dd3ab1c&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F065613dfe8a844fcb0ae4cf4feebe6d1?alt=media&token=4a148672-fbad-4f36-9648-4163827bc8be&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fe7c92781c1bd463697e8388356b649f4?alt=media&token=3d9a09f4-d21f-424e-9cb4-b8136fd4e63c&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F75d65ffd8a194a088948758bd23345d2?alt=media&token=143ae8b8-b9b0-40f5-8dcb-f2961418f32c&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fdde8ff58aa3e439c9900c01dbdeb9e7e?alt=media&token=52714970-bd08-4dc2-9767-86a33137d6bf&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F53732198b8954086be46f5db190a205b?alt=media&token=cd9b9aa7-8f05-4593-8350-0aa16a773cad&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F4702f21f41d6472ab8607140a96424e2?alt=media&token=7873c411-f916-43f9-a44c-d1eb02843852&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fe0020c800c424733a67e57c785be6904?alt=media&token=ba089940-eac4-4ea9-9dc6-7d43aab2a3cf&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F09b390022f7d4a1c9817c0f7970337c2?alt=media&token=56f257e2-e8ed-4639-9533-ab63969e3439&apiKey=13db4688721e4e7592c6f9dd0fce780f",
    ]
  },
  {
    id: "lemon-tree",
    name: "Lemon Tree",
    location: "Anjuna, Goa",
    category: "Hospitality",
    plotSize: "3000 sq.ft",
    builtUpArea: "95,000 sq.ft",
    year: 2018,
    description: "A coastal hospitality development with contemporary architecture and premium amenities.",
    aboutProject: "Nestled amidst Goa's serene foliage. The Scheiner Estate offers a breathtaking 360-degree panoramic view of the surrounding mountains, encompassed by whispering trees and the majestic resort of ever-changing nature. The hotel features meticulously crafted architectural details, and exceptional seasonal services that offer upscale yet undefinable charms, rendering the perfect ambiance for a memorable getaway.",
    thumbnailImage: "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Ff2fddca15aaf4cc180d201487354da69?alt=media&token=ff5085ed-5119-45d7-81ef-68f02059c36a&apiKey=13db4688721e4e7592c6f9dd0fce780f",
    galleryImages: [
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F1112422fc6094607b867e77edfb34de3?alt=media&token=6f907d25-4f3d-4d06-9d1f-276dad4ff08e&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Ff89cbc76fd284a9687221bae915b5ef9?alt=media&token=091170bf-e75d-4b06-a588-14748775a456&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fdefa0fc8356e4a5fa19a3c54400bae7b?alt=media&token=5bc6e0e5-2a5e-4b20-8803-98003219f58c&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F0da300b716c04919a07cf58070fa3809?alt=media&token=292be566-0197-4915-b740-81f2ba1c8f50&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F2e0548b9da6b4fb49636b40e46286801?alt=media&token=34e36469-bde0-40b5-a81e-8da498e4d9d4&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F05499d15cdab45388402dbb81d0172f3?alt=media&token=c4fdf841-a951-4a87-8176-c3dc715af167&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F934c0b71fc7c468c8e1b0ebc63aec438?alt=media&token=4090c86c-862c-4511-8ca6-8160b0b75b74&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F3de94625e1904f2a89a2e877d4d253dd?alt=media&token=3e9e4c3c-b778-42eb-861f-938d7baa3c82&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fc9762b7cad7348b0adfc592197cdf4bd?alt=media&token=aded37aa-42a4-460e-ba5b-1c5bb709e308&apiKey=13db4688721e4e7592c6f9dd0fce780f",
    ]
  },
  {
    id: "hotel-resort-kasauli",
    name: "Hotel & Resort at Kasauli",
    location: "Kasauli, Himachal Pradesh",
    category: "Hospitality",
    plotSize: "25,500 sq.ft",
    builtUpArea: "1,10,000 sq.ft",
    year: 2020,
    description: "A luxury resort nestled in the scenic hills of Himachal Pradesh with contemporary design.",
    aboutProject: "Perched atop a serene hillside, the Scheiner Estate offers a breathtaking 360-degree panoramic view of the surrounding mountains, encompassed by whispering trees and the majestic resort of ever-changing nature. The hotel features meticulously crafted architectural details, and exceptional seasonal services that offer upscale yet undefinable charms, rendering the perfect ambiance for a memorable getaway.",
    thumbnailImage: "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fdcf36d1322ae4f2ea22c93f02388dd9e?alt=media&token=32a45ab3-6bc7-4699-97f1-bcc92af9f34f&apiKey=13db4688721e4e7592c6f9dd0fce780f",
    galleryImages: [
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F9d1197e046614f60910eadf2da83df79?alt=media&token=2f610de4-7131-4c39-b7ce-7521f5a72c65&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fc6687b541b5c4cd18e345e9f6ef02216?alt=media&token=36ff7457-158a-4b28-a295-19b602c4666d&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fd033533383d94676ba49379f6f070567?alt=media&token=5076cb69-f18d-4b97-859c-9b890445b231&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F9c1cee377d2446239449e1aa8b05d8a4?alt=media&token=d18df970-6acd-44f7-8d36-c004230b3c34&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Ff1c5408ad9ed4e0ca46a8db413fe5bff?alt=media&token=36921110-2e57-4e61-b502-c369abc47b22&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F540c5870f19345faa426e006778843f0?alt=media&token=eed27922-6482-4e60-825c-f4a78989f058&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fcdbf4bb6a5874ecea652fecefa9a7bf8?alt=media&token=1e8233e5-956d-4713-a662-5509c7d473f1&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F3af79e4a1ed34f63b24c528d8d7eb496?alt=media&token=e73a1a1b-4ded-4525-ab32-1e81bacee4a4&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fa1aa3d56e5f74e9892b40ea389ad9eb7?alt=media&token=ca216f06-5614-4332-8b63-b9cd77812568&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fb958cecf8ea640f9962341b7ae1b685a?alt=media&token=28d6141a-e8ee-4c45-9d4f-26a16d6a3b29&apiKey=13db4688721e4e7592c6f9dd0fce780f",
    ]
  },
  {
    id: "hotel-banquet-ladwa",
    name: "Hotel & Banquet at Ladwa",
    location: "Kurukshetra, Haryana",
    category: "Hospitality",
    plotSize: "76,500 sq.ft",
    builtUpArea: "85,000 sq.ft",
    year: 2019,
    description: "A premium hotel and banquet venue featuring elegant architecture and modern facilities.",
    aboutProject: "A premium Wedding Destination Banquet and Hotel project that has been recognized as a first-ever premium one that are easily and consistently responsible for the preparation from the cities of Kurukshetra, Karnal, Yamunanagar, Ambala and a number of cities forms around. It has been designed to offer a large banquet space with open balconies and its luxurious Rooms. The property also offers a Roof top Bar & a fine Dining Restaurant to cater to the preferences of the discerning elite different events of gatherings and celebrations.",
    thumbnailImage: "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fd20a1b3e2bf146f5aa5a9dfa4fbfe252?alt=media&token=55d55c23-901b-4e76-83ab-de2b60376b5a&apiKey=13db4688721e4e7592c6f9dd0fce780f",
    galleryImages: [
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fe303e10f1ce94207af6a23b022446af0?alt=media&token=d87e5db8-4cfe-4aae-8e51-f6ce84591f3e&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fdba05483cfc4429c8a667774060352a4?alt=media&token=36490180-6515-4275-b233-ff09f4638f2c&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F5a7efb6c569e4883b87a946c1cd86957?alt=media&token=d1f0d512-134c-4b2c-8b98-e2c31c521701&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fcba75d8ff8ae4625bd908420df601538?alt=media&token=c5f2ed19-12d9-41da-9251-946e3cbc6265&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F4eb44a1ca6444e138ae2d1a91f0f3b26?alt=media&token=30d647d7-9b90-4ec4-a0de-b718415b9de9&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fefaecfe214b74febafc9d6d69b1a1867?alt=media&token=400d9b1a-7d42-4811-968e-502475743453&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F80dcb245d7384ca9a4f0611838a7d585?alt=media&token=cc70cfca-3561-4a7f-b109-06017ed1be06&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F3b71816502e4445e8086d6fdf4e845d1?alt=media&token=c2c217fb-edd1-477c-8a26-8c774fb55db3&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fbd3ed0de40a94cb896eed61bf432c5dc?alt=media&token=0a8c3cdc-11c3-455e-ba01-d27b3a1578d4&apiKey=13db4688721e4e7592c6f9dd0fce780f",
    ]
  },
  {
    id: "radisson-chandigarh-duplicate",
    name: "Radisson",
    location: "Chandigarh, Tranda",
    category: "Hospitality",
    plotSize: "1800 sq.ft",
    builtUpArea: "1,25,000 sq.ft",
    year: 2015,
    description: "A premium 5-star hospitality project featuring world-class amenities and luxury accommodations.",
    aboutProject: "Hotel Radisson is a striking urban resort within spacious compound. Featuring three multi-level integrated resort, a fine-dining outlet that is both a venue and eating destination nearby. Hotel Radisson showcases an architectural style combined with sophistication and refined luxurious interiors. The property is also a center for functions, celebrations. With its distinctive exterior that shows stone work combined with intricate detailing on different levels of craftsmanship and elaboration.",
    thumbnailImage: "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fff6e8afc8f874a9cafd148ecde5d953c?alt=media&token=c2808434-b2a3-4803-9696-7decca49a5be&apiKey=13db4688721e4e7592c6f9dd0fce780f",
    galleryImages: [
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F94e2400bced548e3a7f6864784eb1a70?alt=media&token=a74a233d-17e6-4900-a773-a0c84f0ff746&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F24a1131ecd9f48228fe7e92be5ad236b?alt=media&token=5eb06533-bed8-48bd-a3a1-6d81d0698f99&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fce2886ecb9544b84a19c7693642653a8?alt=media&token=0be05dfa-c813-42b7-96db-15d0bda78e3c&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F37c2ae1c2fbc4e1890e97a3788834796?alt=media&token=8141c232-be1a-460a-bbaf-39b99484a091&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fffe5039ffaf943309ce97eeaf3ff4a84?alt=media&token=6baab1a2-d792-4fce-9866-a1a554215608&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F24f4d85ae27f4635a023103304c47eed?alt=media&token=b8e7f9c5-157d-40f9-961a-37459dd3ab1c&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F065613dfe8a844fcb0ae4cf4feebe6d1?alt=media&token=4a148672-fbad-4f36-9648-4163827bc8be&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fe7c92781c1bd463697e8388356b649f4?alt=media&token=3d9a09f4-d21f-424e-9cb4-b8136fd4e63c&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F75d65ffd8a194a088948758bd23345d2?alt=media&token=143ae8b8-b9b0-40f5-8dcb-f2961418f32c&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fdde8ff58aa3e439c9900c01dbdeb9e7e?alt=media&token=52714970-bd08-4dc2-9767-86a33137d6bf&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F53732198b8954086be46f5db190a205b?alt=media&token=cd9b9aa7-8f05-4593-8350-0aa16a773cad&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F4702f21f41d6472ab8607140a96424e2?alt=media&token=7873c411-f916-43f9-a44c-d1eb02843852&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fe0020c800c424733a67e57c785be6904?alt=media&token=ba089940-eac4-4ea9-9dc6-7d43aab2a3cf&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F09b390022f7d4a1c9817c0f7970337c2?alt=media&token=56f257e2-e8ed-4639-9533-ab63969e3439&apiKey=13db4688721e4e7592c6f9dd0fce780f",
    ]
  },
  {
    id: "lemon-tree-duplicate",
    name: "Lemon Tree",
    location: "Anjuna, Goa",
    category: "Hospitality",
    plotSize: "3000 sq.ft",
    builtUpArea: "95,000 sq.ft",
    year: 2018,
    description: "A coastal hospitality development with contemporary architecture and premium amenities.",
    aboutProject: "Nestled amidst Goa's serene foliage. The Scheiner Estate offers a breathtaking 360-degree panoramic view of the surrounding mountains, encompassed by whispering trees and the majestic resort of ever-changing nature. The hotel features meticulously crafted architectural details, and exceptional seasonal services that offer upscale yet undefinable charms, rendering the perfect ambiance for a memorable getaway.",
    thumbnailImage: "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Ff2fddca15aaf4cc180d201487354da69?alt=media&token=ff5085ed-5119-45d7-81ef-68f02059c36a&apiKey=13db4688721e4e7592c6f9dd0fce780f",
    galleryImages: [
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F1112422fc6094607b867e77edfb34de3?alt=media&token=6f907d25-4f3d-4d06-9d1f-276dad4ff08e&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Ff89cbc76fd284a9687221bae915b5ef9?alt=media&token=091170bf-e75d-4b06-a588-14748775a456&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fdefa0fc8356e4a5fa19a3c54400bae7b?alt=media&token=5bc6e0e5-2a5e-4b20-8803-98003219f58c&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F0da300b716c04919a07cf58070fa3809?alt=media&token=292be566-0197-4915-b740-81f2ba1c8f50&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F2e0548b9da6b4fb49636b40e46286801?alt=media&token=34e36469-bde0-40b5-a81e-8da498e4d9d4&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F05499d15cdab45388402dbb81d0172f3?alt=media&token=c4fdf841-a951-4a87-8176-c3dc715af167&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F934c0b71fc7c468c8e1b0ebc63aec438?alt=media&token=4090c86c-4511-4ca6-8160-b0b75e74a4d3&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2F3de94625e1904f2a89a2e877d4d253dd?alt=media&token=3e9e4c3c-b778-42eb-861f-938d7baa3c82&apiKey=13db4688721e4e7592c6f9dd0fce780f",
      "https://cdn.builder.io/o/assets%2F13db4688721e4e7592c6f9dd0fce780f%2Fc9762b7cad7348b0adfc592197cdf4bd?alt=media&token=aded37aa-42a4-460e-ba5b-1c5bb709e308&apiKey=13db4688721e4e7592c6f9dd0fce780f",
    ]
  },
];
