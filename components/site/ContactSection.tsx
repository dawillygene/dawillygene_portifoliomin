'use client';

import { useState } from 'react';
import {
  companyProfile,
  contactBudgetRanges,
  contactCountries,
  contactProjectTypes,
  contactTimelineRanges,
} from '@/lib/siteContent';

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currency, setCurrency] = useState<'TZS' | 'USD'>('TZS');

  const budgetOptions = contactBudgetRanges[currency];

  return (
    <div className="container" style={{ paddingBottom: '5rem' }}>
      <section className="contact-layout">
        <div className="glass-card" style={{ padding: '2rem' }}>
          <div className="section-badge">Direct Contact</div>
          <h2 style={{ marginBottom: '0.75rem' }}>Project conversations, hiring opportunities, and technical collaboration</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            The best engagements usually begin with a clear operating problem, timeline expectations, and a shared sense of what success should look like.
          </p>

          <div className="info-stack">
            <div>
              <strong>Email</strong>
              <a href={`mailto:${companyProfile.email}`}>{companyProfile.email}</a>
            </div>
            <div>
              <strong>Phone / WhatsApp</strong>
              <a href={`tel:${companyProfile.phone.replace(/\s+/g, '')}`}>{companyProfile.phone}</a>
            </div>
            <div>
              <strong>Location</strong>
              <span>{companyProfile.location}</span>
            </div>
            <div>
              <strong>Availability</strong>
              <span>{companyProfile.availability}</span>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.25rem', marginTop: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Preferred inquiry quality</h3>
            <ul className="clean-list">
              <li>What process or workflow needs improvement</li>
              <li>Who the primary users or decision-makers are</li>
              <li>Expected timeline, scope, and budget comfort level</li>
              <li>Whether the need is a new build, recovery, or modernization effort</li>
            </ul>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <div className="section-badge" style={{ margin: 0 }}>Inquiry Form</div>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#25D366',
              background: 'rgba(37, 211, 102, 0.1)',
              padding: '3px 10px',
              borderRadius: 'var(--radius-sm)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
            }}>
              <i className="fab fa-whatsapp" style={{ fontSize: '0.8rem' }} />
              Sends via WhatsApp
            </span>
          </div>
          <form
            className="site-form-grid"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitting(true);

              const form = event.currentTarget;
              const formData = new FormData(form);

              const fullName = String(formData.get('fullName') || '');
              const email = String(formData.get('email') || '');
              const organization = String(formData.get('organization') || '');
              const country = String(formData.get('country') || '');
              const projectType = String(formData.get('projectType') || '');
              const budgetRange = String(formData.get('budgetRange') || '');
              const timeline = String(formData.get('timeline') || '');
              const message = String(formData.get('message') || '');

              // Build WhatsApp message
              const waMessage = [
                `--- *New Project Inquiry* ---`,
                ``,
                `*Name:* ${fullName}`,
                `*Email:* ${email}`,
                organization ? `*Organization:* ${organization}` : '',
                `*Country:* ${country}`,
                `*Project Type:* ${projectType}`,
                `*Budget (${currency}):* ${budgetRange}`,
                `*Timeline:* ${timeline}`,
                ``,
                `*Message:*`,
                message,
                ``,
                `-- Sent from dawillygene.com`,
              ].filter(Boolean).join('\n');

              // Open WhatsApp with the formatted message
              const whatsappUrl = `https://wa.me/255753225961?text=${encodeURIComponent(waMessage)}`;
              window.open(whatsappUrl, '_blank');

              form.reset();
              setCurrency('TZS');
              setSubmitted(true);
              setSubmitting(false);
            }}
          >
            <label className="field-label">
              <span>Full name</span>
              <input className="site-input" type="text" name="fullName" required />
            </label>
            <label className="field-label">
              <span>Email</span>
              <input className="site-input" type="email" name="email" required />
            </label>
            <label className="field-label">
              <span>Organization</span>
              <input className="site-input" type="text" name="organization" />
            </label>
            <label className="field-label">
              <span>Country</span>
              <select
                className="site-select"
                name="country"
                defaultValue="Tanzania"
                onChange={(e) => {
                  const eastAfrican = ['Tanzania', 'Kenya', 'Uganda', 'Rwanda', 'Burundi', 'Mozambique', 'DRC'];
                  setCurrency(eastAfrican.includes(e.target.value) ? 'TZS' : 'USD');
                }}
              >
                {contactCountries.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="field-label">
              <span>Project type</span>
              <select className="site-select" name="projectType" defaultValue={contactProjectTypes[0]}>
                {contactProjectTypes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="field-label">
              <span>
                Budget range
                <span style={{
                  marginLeft: '0.5rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--accent-text)',
                  background: 'var(--accent-light)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-sm)',
                  verticalAlign: 'middle',
                }}>
                  {currency}
                </span>
              </span>
              <select className="site-select" name="budgetRange" defaultValue={budgetOptions[0]} key={currency}>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="field-label">
              <span>Timeline</span>
              <select className="site-select" name="timeline" defaultValue={contactTimelineRanges[0]}>
                {contactTimelineRanges.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="field-label full-span">
              <span>Message</span>
              <textarea
                className="site-input"
                name="message"
                rows={7}
                required
                placeholder="Describe the problem, current workflow, or opportunity you want to explore."
              />
            </label>

            <div className="full-span" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" type="submit" disabled={submitting} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="fab fa-whatsapp" style={{ fontSize: '1.1rem' }} />
                {submitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
              </button>
              {submitted ? (
                <p style={{ color: 'var(--success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <i className="fa-solid fa-circle-check" /> WhatsApp should have opened with your inquiry. If not, message me directly at +255 753 225 961.
                </p>
              ) : (
                <p style={{ color: 'var(--text-quaternary)' }}>
                  Direct email and social links remain available if you prefer a faster route.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
