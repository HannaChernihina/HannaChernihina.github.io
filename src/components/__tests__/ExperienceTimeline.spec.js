import { render } from '@testing-library/vue';
import ExperienceTimeline from '../ExperienceTimeline.vue';

const experiences = [
  {
    company: 'Example Inc',
    role: 'Engineer',
    period: '2023 - Present',
    summary: 'Building things.',
    achievements: ['Launched features', 'Optimized delivery']
  }
];

describe('ExperienceTimeline', () => {
  it('shows experience cards', () => {
    const { getByText } = render(ExperienceTimeline, { props: { experiences } });
    expect(getByText(experiences[0].company)).toBeTruthy();
    expect(getByText(experiences[0].role)).toBeTruthy();
    experiences[0].achievements.forEach((item) => {
      expect(getByText(item)).toBeTruthy();
    });
  });
});

