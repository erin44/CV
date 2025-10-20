/**
 * Utility function to smoothly scroll to a section by ID
 * @param id - The ID of the element to scroll to
 */
export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


