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
  const skillPaths = getElementsByTextContent('span', 'Skill Path');
  const completedSkillPaths = getElementsByTextContent(
    'span',
    'Skill Path completed!'
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
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyStyles);
} else {
  applyStyles();
}
