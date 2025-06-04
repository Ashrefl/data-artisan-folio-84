
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Hackathon - Finaliste",
    description: "Automatisation de la personnalisation des messages selon les clics sur des annonces. Utilisation de Make (workflow) et Mistral AI (prompts dynamiques).",
    tags: ["NoCode", "Automation", "MistralAI", "Make"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    category: "AI"
  },
  {
    id: 2,
    title: "Analyse des prix du carburant",
    description: "Nettoyage de fichiers CSV, analyse avec BigQuery & SQL. Dashboard Looker Studio pour trouver les stations les moins chères.",
    tags: ["BigQuery", "SQL", "Looker", "Dashboard"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    category: "Data Analysis"
  },
  {
    id: 3,
    title: "Analyse de la pauvreté en R",
    description: "Clustering K-means, tests statistiques (Bartlett, KMO), segmentation socio-économique avec analyses approfondies.",
    tags: ["RStudio", "Statistiques", "KMeans"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
    category: "Statistics"
  },
  {
    id: 4,
    title: "Mémoires de recherche",
    description: "Recherches sur l'utilité sociale des organisations ESS et la sécurité alimentaire et dépendance économique.",
    tags: ["Recherche", "ESS", "Économie"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
    category: "Research"
  },
  {
    id: 5,
    title: "Web Scraping de recettes",
    description: "Extraction de données Marmiton avec BeautifulSoup, nettoyage et préparation pour analyse nutritionnelle complète.",
    tags: ["Python", "WebScraping", "BeautifulSoup"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
    category: "Web Scraping"
  },
  {
    id: 6,
    title: "Analyse des ventes (Power BI)",
    description: "Création de tableaux de bord interactifs avec visualisations avancées et filtres dynamiques pour optimiser les performances commerciales.",
    tags: ["PowerBI", "Ventes", "DataViz"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
    category: "Business Intelligence"
  }
];
