import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact Us | Route Budget',
  description: 'Get in touch with Route Budget for support, inquiries, or more information about our cab fleet expense management system.',
  alternates: {
    canonical: 'https://routebudget.com/contact',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
