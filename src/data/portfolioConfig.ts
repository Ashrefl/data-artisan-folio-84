
// Types
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: string;
}

export interface HeroContent {
  name: string;
  title: string;
  description: string;
  buttons: {
    primary: {
      text: string;
      target: string;
    };
    secondary: {
      text: string;
      target: string;
    };
  };
}

export interface ContactInfo {
  email: string;
  linkedIn: string;
  linkedInUrl: string;
  cv: {
    text: string;
    url: string;
  };
}

export interface NavigationItem {
  label: string;
  target: string;
}

// Configuration
const portfolioConfig = {
  // Hero Section Content
  hero: {
    name: "Limem Achraf",
    title: "Marketing Data Analyst",
    description: "Étudiant en data & IA, passionné par l'automatisation, l'analyse de données et les projets à impact.",
    buttons: {
      primary: {
        text: "Découvrir mes projets",
        target: "projets"
      },
      secondary: {
        text: "Me contacter",
        target: "contact"
      }
    }
  },

  // Navigation
  navigation: [
    {
      label: "Accueil",
      target: "accueil"
    },
    {
      label: "Projets",
      target: "projets"
    },
    {
      label: "Contact",
      target: "contact"
    }
  ],

  // Projects Section
  projectsSection: {
    title: "Mes Projets",
    subtitle: "Découvrez mes réalisations en data science, intelligence artificielle et automatisation"
  },

  // Contact Section
  contactSection: {
    title: "Restons en Contact",
    subtitle: "Prêt à collaborer sur des projets innovants ? Contactez-moi !",
    contactInfo: {
      email: "achreflimem@gmail.com",
      linkedIn: "Achraf Limem",
      linkedInUrl: "https://www.linkedin.com/in/achraf-limem/",
      cv: {
        text: "📄 Télécharger mon CV",
        url: "#"
      }
    }
  },

  // Projects List
  projects: [
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
  ],

  // Tag Colors
  tagColors: {
    'NoCode': 'bg-green-100 text-green-800',
    'Automation': 'bg-blue-100 text-blue-800',
    'MistralAI': 'bg-purple-100 text-purple-800',
    'Make': 'bg-orange-100 text-orange-800',
    'BigQuery': 'bg-yellow-100 text-yellow-800',
    'SQL': 'bg-indigo-100 text-indigo-800',
    'Looker': 'bg-pink-100 text-pink-800',
    'Dashboard': 'bg-cyan-100 text-cyan-800',
    'RStudio': 'bg-red-100 text-red-800',
    'Statistiques': 'bg-emerald-100 text-emerald-800',
    'KMeans': 'bg-violet-100 text-violet-800',
    'Recherche': 'bg-amber-100 text-amber-800',
    'ESS': 'bg-lime-100 text-lime-800',
    'Économie': 'bg-teal-100 text-teal-800',
    'Python': 'bg-blue-100 text-blue-800',
    'WebScraping': 'bg-slate-100 text-slate-800',
    'BeautifulSoup': 'bg-rose-100 text-rose-800',
    'PowerBI': 'bg-orange-100 text-orange-800',
    'Ventes': 'bg-green-100 text-green-800',
    'DataViz': 'bg-purple-100 text-purple-800'
  }
};

export default portfolioConfig;
