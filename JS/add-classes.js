function getElementsByTextContent(tag, text) {
  const elements = document.querySelectorAll(tag);
  return Array.from(elements).filter(
    (element) => element.textContent.trim() === text
  );
}

function applyStyles() {
  const freeCourses = getElementsByTextContent('span', 'Free course');
  const completedFreeCourses = getElementsByTextContent(
    'span',
    'Free course completed!'
  );

  const regularCourses = getElementsByTextContent('span', 'Course');
  const completedRegularCourses = getElementsByTextContent(
    'span',
    'Course completed!'
  );
  const skillPaths = getElementsByTextContent('span', 'Skill path');
  const completedSkillPaths = getElementsByTextContent(
    'span',
    'Skill Path completed!'
  );
  const careerPaths = getElementsByTextContent('span', 'Career path');
  const completedCareerPaths = getElementsByTextContent(
    'span',
    'Career Path completed!'
  );

  freeCourses.forEach((element) => {
    element.parentElement.classList.add('freeCourse');
  });
  completedFreeCourses.forEach((element) => {
    element.parentElement.classList.add('completedFreeCourse');
  });
  regularCourses.forEach((element) => {
    element.parentElement.classList.add('regularCourse');
  });
  completedRegularCourses.forEach((element) => {
    element.parentElement.classList.add('completedRegularCourse');
  });
  skillPaths.forEach((element) => {
    element.parentElement.classList.add('skillPath');
  });
  completedSkillPaths.forEach((element) => {
    element.parentElement.classList.add('completedSkillPath');
  });
  careerPaths.forEach((element) => {
    element.parentElement.classList.add('careerPath');
  });
  completedCareerPaths.forEach((element) => {
    element.parentElement.classList.add('completedCareerPath');
  });
}

function init() {
  // Check if we are on the homepage
  if (
    window.location.pathname === '/' ||
    window.location.pathname.startsWith('/catalog') ||
    window.location.pathname.startsWith('/learn')
  ) {
    applyStyles();

    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        applyStyles();
      });
    });

    // Start observing the document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
