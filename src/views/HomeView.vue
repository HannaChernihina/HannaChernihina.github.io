<script setup>
import { onMounted, nextTick } from 'vue';
import HeroSection from '@/components/HeroSection.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import SkillsIconBar from '@/components/SkillsIconBar.vue';
import ExperienceTimeline from '@/components/ExperienceTimeline.vue';
// import ProjectsGrid from '@/components/ProjectsGrid.vue';
import EducationList from '@/components/EducationList.vue';
import CertificatesGrid from '@/components/CertificatesGrid.vue';
import ThemeToggle from '@/components/ThemeToggle.vue';
import { useTheme } from '@/composables/useTheme';
import { useScrollAnimation } from '@/composables/useScrollAnimation';
import { useContentStore } from '@/stores/content';
import { storeToRefs } from 'pinia';

const contentStore = useContentStore();
const { hero, skills, experiences, projects, education, certificates } = storeToRefs(contentStore);

const { initTheme } = useTheme();
const { observeElements } = useScrollAnimation();

onMounted(async () => {
  initTheme();
  await nextTick();
  observeElements('[data-animate]');
});
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <div class="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-10 sm:py-14">
      <header class="animate-fade-in-down flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-2 text-lg font-semibold">
          <span class="text-primary transition-transform hover:scale-110">Hanna.CH()</span>
          <span class="hidden text-sm text-slate-500 dark:text-slate-400 sm:inline">portfolio</span>
        </div>
        <nav class="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300 sm:gap-6">
          <a 
            class="relative transition-all hover:text-primary hover:scale-105 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full" 
            href="#about"
          >
            About
          </a>
          <a 
            class="relative transition-all hover:text-primary hover:scale-105 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full" 
            href="#skills"
          >
            Skills
          </a>
          <a 
            class="relative transition-all hover:text-primary hover:scale-105 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full" 
            href="#experience"
          >
            Experience
          </a>
          <a 
            class="relative transition-all hover:text-primary hover:scale-105 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full" 
            href="#projects"
          >
            Projects
          </a>
          <a 
            class="relative transition-all hover:text-primary hover:scale-105 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full" 
            href="#education"
          >
            Education
          </a>
          <a 
            class="relative transition-all hover:text-primary hover:scale-105 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full" 
            href="#certificates"
          >
            Certificates
          </a>
          <a
            class="group rounded-full border border-primary px-4 py-2 text-primary transition-all hover:scale-105 hover:bg-primary hover:text-slate-950 hover:shadow-lg hover:shadow-primary/50 dark:hover:text-slate-950"
            href="https://github.com/hannachernihina"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <main class="flex flex-col gap-20">
        <section id="about" data-animate class="animate-fade-in">
          <HeroSection :hero="hero" />
        </section>

        <section id="skills" data-animate class="space-y-6">
          <SectionTitle
            title="Skills"
            subtitle="Tech stack I use to ship products."
          />
         <SkillsIconBar :skills="skills" />
        </section>

        <section id="experience" data-animate class="space-y-6">
          <SectionTitle
            title="Experience"
            subtitle="Roles where I built and shipped solutions."
          />
          <ExperienceTimeline :experiences="experiences" />
        </section>

        <!-- <section id="projects" data-animate class="space-y-6">
          <SectionTitle
            title="Projects"
            subtitle="Selected work showcasing product delivery."
          />
          <ProjectsGrid :projects="projects" />
        </section> -->

        <section id="education" data-animate class="space-y-6">
          <SectionTitle
            title="Education"
            subtitle="Foundations that support my engineering work."
          />
          <EducationList :education="education" />
        </section>

        <section id="certificates" data-animate class="space-y-6">
          <SectionTitle
            title="Certificates & Formations"
            subtitle="Professional certifications and achievements."
          />
          <CertificatesGrid :certificates="certificates" />
        </section>
      </main>
    </div>
  </div>
</template>