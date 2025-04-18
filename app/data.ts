type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Devex - at Apple',
    description:
      'A micro front-end-based web application designed for managing CI/CD pipelines. It enables users to add new projects, configure pipelines, trigger builds, and manage build logs. The application serves department users within the GBI division and provides a seamless interface for continuous integration and deployment processes.',
    link: '#',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Data Catalogue (DataHub) - at Apple',
    description:
      'Data Catalogue (DataHub): A comprehensive data catalog ecosystem management portal developed for the GBI team. This application facilitates the ingestion of data and provides business users with domain-specific data grids. Users can create dashboards, apply filters, export data, and manage datasets effectively through an intuitive UI.',
    link: '#',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    name: 'CECRM (Community Engagement CRM) - at Amazon',
    description:
      'Built CECRM, a web application aimed at managing and maintaining community relationship data between Amazon and its clients. It captures various communication channels such as phone calls, emails, and messages. The system ensures consistent tracking of engagement, even if there are user transitions on either side, thereby preserving relationship continuity.',
    link: '#',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
  },
  {
    name: 'EMEA Application: - at CitiBank Group',
    description:
      'Developed an application focused on managing materiality issues within the EMEA (Europe, Middle East, and Asia) regions. The tool helps business and data analysts identify the root cause of issues by tracing data flow across upstream and downstream systems. The platform supports critical decision-making by providing end-to-end visibility of data interactions.',
    link: '#',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project4',
  },
  {
    name: 'KonnectCo - at Freyr Software Solutions',
    description:
      'Developed KonnectCo, a web and mobile-based Human Resource Management (HRM) application. It includes features such as a social feed (similar to LinkedIn), payroll, leave and attendance management, project tracking, timesheets, and appraisal systems. The platform is role-based and allows companies to fully manage their HR and internal operations from onboarding to daily workflows.',
    link: '#',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project5',
  },
  {
    name: 'SubmitPro - at Freyr Software Solutions',
    description:
      'Developed KonnectCo, a web and mobile-based Human Resource Management (HRM) application. It includes features such as a social feed (similar to LinkedIn), payroll, leave and attendance management, project tracking, timesheets, and appraisal systems. The platform is role-based and allows companies to fully manage their HR and internal operations from onboarding to daily workflows.',
    link: '#',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project5',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Apple',
    title: 'Sr UI UX Designer ',
    start: 'Dec 2022',
    end: 'Mar 2025',
    link: 'https://www.apple.com/',
    id: 'apple1',
  },
  {
    company: 'Citi Bank Group',
    title: 'UX Subject Matter Expert',
    start: 'Apr 2022',
    end: 'Nov 2022',
    link: 'https://www.citi.com/',
    id: 'citi1',
  },
  {
    company: 'Amazon',
    title: 'UI Architect',
    start: 'Feb 2021',
    end: 'Apr 2022',
    link: 'https://www.amazon.com/',
    id: 'amazon1',
  },
  {
    company: 'Freyr Software Solutions',
    title: 'Senior Associate',
    start: 'Feb 2018',
    end: 'Feb 2021',
    link: 'https://www.freyrsolutions.com/',
    id: 'freyr1',
  },
  {
    company: 'Social DNA',
    title: 'UI UX Designer & Developer',
    start: 'Jan 2016',
    end: 'Feb 2018',
    link: 'http://socialdna.in/',
    id: 'socialdna1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/hemuhere',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hemuhere',
  },
  {
    label: 'Behance',
    link: 'https://www.behance.net/hemuhere/projects',
  },
]

export const EMAIL = 'hemasundar.sr@gmail.com'
