import { render } from '@testing-library/vue';
import App from '../App.vue';
import { hero, skills, experiences, projects, education } from '../data/content';

describe('App', () => {
  it('renders main sections', () => {
    const { getByText } = render(App);
    expect(getByText(hero.name)).toBeTruthy();
    expect(getByText('Skills')).toBeTruthy();
    expect(getByText('Experience')).toBeTruthy();
    expect(getByText('Projects')).toBeTruthy();
    expect(getByText('Education')).toBeTruthy();
  });

  it('passes data into lists', () => {
    const { getByText } = render(App);
    expect(getByText(skills[0].name)).toBeTruthy();
    expect(getByText(experiences[0].company)).toBeTruthy();
    expect(getByText(projects[0].name)).toBeTruthy();
    expect(getByText(education[0].school)).toBeTruthy();
  });
});

