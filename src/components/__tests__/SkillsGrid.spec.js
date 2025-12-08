import { render } from '@testing-library/vue';
import SkillsGrid from '../SkillsGrid.vue';

const skills = [
  { name: 'Vue 3', level: 'Advanced' },
  { name: 'Tailwind', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' }
];

describe('SkillsGrid', () => {
  it('renders provided skills', () => {
    const { getByText } = render(SkillsGrid, { props: { skills } });
    skills.forEach((skill) => {
      expect(getByText(skill.name)).toBeTruthy();
      expect(getByText(skill.level)).toBeTruthy();
    });
  });
});

