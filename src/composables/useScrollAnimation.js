import { ref, onMounted, onUnmounted } from 'vue';

let observer = null;

export function useScrollAnimation() {
  const elements = ref([]);

  const initObserver = () => {
    if (typeof window === 'undefined') return;

    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              // Удаляем элемент из наблюдения после появления
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );
    }
  };

  const observeElement = (element) => {
    if (!element) return;
    initObserver();
    
    if (observer && !elements.value.includes(element)) {
      element.classList.add('animate-on-scroll');
      observer.observe(element);
      elements.value.push(element);
    }
  };

  const observeElements = (selector) => {
    if (typeof document === 'undefined') return;
    initObserver();
    
    const items = document.querySelectorAll(selector);
    items.forEach((item) => observeElement(item));
  };

  onMounted(() => {
    // Небольшая задержка для правильной инициализации
    setTimeout(() => {
      observeElements('[data-animate]');
    }, 100);
  });

  onUnmounted(() => {
    if (observer) {
      elements.value.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
      observer = null;
    }
    elements.value = [];
  });

  return {
    observeElement,
    observeElements
  };
}

