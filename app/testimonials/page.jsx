import Testimonials from '../../components/Testimonials';

export const metadata = {
  title: 'Testimonials | Route Budget',
  description: 'Read what our happy clients say about Route Budget’s cab expense management platform.',
  alternates: {
    canonical: 'https://routebudget.com/testimonials',
  },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
