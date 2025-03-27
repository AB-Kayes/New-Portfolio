export interface Project {
  id: number
  title: string
  slug: string
  shortDescription: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  features?: {
    title: string
    description: string
  }[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    slug: "e-commerce-platform",
    shortDescription: "A full-featured e-commerce platform with product management, cart, and checkout.",
    description:
      "A comprehensive e-commerce solution built with Next.js and a headless CMS. Features include product catalog, search functionality, shopping cart, user authentication, and secure checkout process with multiple payment options.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce",
    features: [
      {
        title: "Product Management",
        description: "Comprehensive product catalog with categories, filters, and search.",
      },
      {
        title: "User Authentication",
        description: "Secure login and registration with social auth options.",
      },
      {
        title: "Payment Processing",
        description: "Integration with Stripe for secure payment processing.",
      },
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    slug: "task-management-app",
    shortDescription: "A collaborative task management application with real-time updates.",
    description:
      "A productivity tool that helps teams organize and track their tasks. Features include task creation, assignment, due dates, priority levels, comments, and real-time notifications. The app uses a drag-and-drop interface for intuitive task management.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    liveUrl: "https://example.com/taskapp",
    githubUrl: "https://github.com/yourusername/taskapp",
    features: [
      {
        title: "Drag-and-Drop Interface",
        description: "Intuitive kanban board for managing tasks across different stages.",
      },
      {
        title: "Real-time Collaboration",
        description: "Live updates when team members make changes to tasks.",
      },
      {
        title: "Detailed Analytics",
        description: "Track productivity and project progress with visual reports.",
      },
    ],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    slug: "weather-dashboard",
    shortDescription: "A weather application with forecasts, maps, and location-based data.",
    description:
      "A weather dashboard that provides current conditions and forecasts for any location. The app includes interactive maps, hourly and daily forecasts, and weather alerts. Users can save favorite locations and view historical weather data.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Vue.js", "Vuex", "OpenWeatherMap API", "Chart.js", "Leaflet"],
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/yourusername/weather",
    features: [
      {
        title: "Location-based Forecasts",
        description: "Get weather data for your current location or search for any place.",
      },
      {
        title: "Interactive Maps",
        description: "Visualize weather patterns with interactive map overlays.",
      },
      {
        title: "Historical Data",
        description: "Access and compare weather data from previous days and months.",
      },
    ],
  },
  {
    id: 4,
    title: "Fitness Tracker",
    slug: "fitness-tracker",
    shortDescription: "A personal fitness tracking application with workout plans and progress monitoring.",
    description:
      "A comprehensive fitness application that helps users track their workouts, set goals, and monitor progress. Features include custom workout plans, exercise library with demonstrations, calorie tracking, and performance analytics.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React Native", "Firebase", "Redux", "D3.js", "Expo"],
    liveUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/yourusername/fitness",
    features: [
      {
        title: "Workout Library",
        description: "Extensive collection of exercises with video demonstrations.",
      },
      {
        title: "Progress Tracking",
        description: "Visual charts and graphs to monitor your fitness journey.",
      },
      {
        title: "Custom Workout Plans",
        description: "Create and follow personalized workout routines.",
      },
    ],
  },
]

