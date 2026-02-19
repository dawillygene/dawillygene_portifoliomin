import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  TeamMember,
  Project,
  Service,
  Testimonial,
  CompanyInfo,
  PageContent,
} from './types';

interface ContentStore {
  // Company Info
  companyInfo: CompanyInfo;
  setCompanyInfo: (info: CompanyInfo) => void;

  // Team Members
  teamMembers: TeamMember[];
  addTeamMember: (member: TeamMember) => void;
  updateTeamMember: (id: string, member: Partial<TeamMember>) => void;
  deleteTeamMember: (id: string) => void;

  // Projects
  projects: Project[];
  addProject: (project: Project) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;

  // Services
  services: Service[];
  addService: (service: Service) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;

  // Testimonials
  testimonials: Testimonial[];
  addTestimonial: (testimonial: Testimonial) => void;
  updateTestimonial: (id: string, testimonial: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;

  // Page Content
  pageContent: PageContent[];
  addPageContent: (content: PageContent) => void;
  updatePageContent: (id: string, content: Partial<PageContent>) => void;
  deletePageContent: (id: string) => void;
  getPageContentBySection: (section: string) => PageContent[];
}

const defaultCompanyInfo: CompanyInfo = {
  name: 'Genelabs Software Tz',
  founder: 'Dawilly Gene',
  tagline: 'Transforming Ideas into Code',
  description:
    'Genelabs Software Tz is a software development company under Dawilly Gene, specializing in Web Development, Mobile Applications, and IoT solutions.',
  established: 2024,
  email: 'contact@dawillygene.com',
  website: 'dawillygene.com',
  social: {
    github: 'dawillygene',
    instagram: '@dawillygene',
  },
};

export const useContentStore = create<ContentStore>()(
  persist(
    (set, get) => ({
      companyInfo: defaultCompanyInfo,
      setCompanyInfo: (info) => set({ companyInfo: info }),

      teamMembers: [],
      addTeamMember: (member) =>
        set((state) => ({
          teamMembers: [...state.teamMembers, member],
        })),
      updateTeamMember: (id, updates) =>
        set((state) => ({
          teamMembers: state.teamMembers.map((member) =>
            member.id === id
              ? { ...member, ...updates, updatedAt: new Date().toISOString() }
              : member
          ),
        })),
      deleteTeamMember: (id) =>
        set((state) => ({
          teamMembers: state.teamMembers.filter((member) => member.id !== id),
        })),

      projects: [],
      addProject: (project) =>
        set((state) => ({
          projects: [...state.projects, project],
        })),
      updateProject: (id, updates) =>
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === id
              ? { ...project, ...updates, updatedAt: new Date().toISOString() }
              : project
          ),
        })),
      deleteProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((project) => project.id !== id),
        })),

      services: [],
      addService: (service) =>
        set((state) => ({
          services: [...state.services, service],
        })),
      updateService: (id, updates) =>
        set((state) => ({
          services: state.services.map((svc) =>
            svc.id === id
              ? { ...svc, ...updates, updatedAt: new Date().toISOString() }
              : svc
          ),
        })),
      deleteService: (id) =>
        set((state) => ({
          services: state.services.filter((service) => service.id !== id),
        })),

      testimonials: [],
      addTestimonial: (testimonial) =>
        set((state) => ({
          testimonials: [...state.testimonials, testimonial],
        })),
      updateTestimonial: (id, updates) =>
        set((state) => ({
          testimonials: state.testimonials.map((testimonial) =>
            testimonial.id === id
              ? {
                  ...testimonial,
                  ...updates,
                  updatedAt: new Date().toISOString(),
                }
              : testimonial
          ),
        })),
      deleteTestimonial: (id) =>
        set((state) => ({
          testimonials: state.testimonials.filter(
            (testimonial) => testimonial.id !== id
          ),
        })),

      pageContent: [],
      addPageContent: (content) =>
        set((state) => ({
          pageContent: [...state.pageContent, content],
        })),
      updatePageContent: (id, updates) =>
        set((state) => ({
          pageContent: state.pageContent.map((content) =>
            content.id === id
              ? { ...content, ...updates, updatedAt: new Date().toISOString() }
              : content
          ),
        })),
      deletePageContent: (id) =>
        set((state) => ({
          pageContent: state.pageContent.filter((content) => content.id !== id),
        })),
      getPageContentBySection: (section) => {
        const state = get();
        return state.pageContent
          .filter((content) => content.section === section && content.published)
          .sort((a, b) => a.order - b.order);
      },
    }),
    {
      name: 'genelabs-content-store',
    }
  )
);
