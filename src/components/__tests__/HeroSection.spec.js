import { render } from '@testing-library/vue';
import HeroSection from '../HeroSection.vue';

const hero = {
  greeting: "Hi, I'm",
  name: 'Hanna CHERNIHINA',
  titleLead: "I'm a",
  titleHighlight: 'Full Stack Engineer',
  blurb: 'Building modern web experiences.',
  cta: { label: 'Check Resume', href: 'https://example.com' },
  profile: '/Image.png'
};

describe('HeroSection', () => {
  it('renders hero information', () => {
    const { getByText } = render(HeroSection, { props: { hero } });
    expect(getByText(hero.name)).toBeTruthy();
    expect(getByText(hero.titleHighlight)).toBeTruthy();
    expect(getByText(hero.blurb)).toBeTruthy();
  });

  it('renders CTA with href', () => {
    const { getByText } = render(HeroSection, { props: { hero } });
    const cta = getByText(hero.cta.label);
    expect(cta.getAttribute('href')).toContain(hero.cta.href);
  });
});

