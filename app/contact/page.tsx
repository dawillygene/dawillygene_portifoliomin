import type { Metadata } from 'next';
import ContactSection from '@/components/site/ContactSection';
import PageHero from '@/components/site/PageHero';
import PageShell from '@/components/site/PageShell';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Inquiry form and direct contact details for project work, hiring discussions, and technical collaboration.',
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="A clearer conversion path for inquiries, opportunities, and collaboration"
        description="The contact experience now includes the fields specified in the requirements: full name, email, organization, project type, message, budget range, and timeline, alongside direct contact paths."
      />
      <ContactSection />
    </PageShell>
  );
}
