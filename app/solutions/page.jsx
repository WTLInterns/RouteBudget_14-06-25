// app/solutions/page.jsx
import Solutions from '../../components/Solutions';

export const metadata = {
  title: 'Solutions | Route Budget',
  description: 'Discover how Route Budget provides smart solutions for cab fleet expense tracking and management.',
  alternates: {
    canonical: 'https://routebudget.com/solutions',
  },
};

export default function SolutionsPage() {
  return <Solutions />;
}
