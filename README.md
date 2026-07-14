# Anatomy & Form: A Costume Technology & Art Showcase

## Project Description
A simple, single-page responsive portfolio interface designed to showcase a creative project that bridges traditional studio art techniques with entertainment costume construction. This project serves as a digital gallery for technical design phases, including perspective sketches, contour mapping, and final fabrication.

## Intended User or Player
Creative directors, theme park entertainment costume recruiters, design review committees, and art instructors looking to evaluate a student's technical workflow and execution.

## User / Player Goal
The user should be able to instantly comprehend the project's core concept, review the technical design phases sequentially (from initial sketches to the physical build), and easily find a way to contact the creator.

## Inspiration Interfaces
* **Behance Project Case Studies:** Taught me the importance of using large, full-width imagery to hook the viewer immediately and using ample padding to let the artwork breathe.
* **ArtStation Artwork Breakdowns:** Inspired the dark-mode interface to make fine line work and tonal renderings pop with high contrast, as well as the use of side-by-side grid comparisons for the artistic process.

## Design Choices
- **Layout:** Utilized CSS Flexbox for a clean, spaced-out navigation bar and CSS Grid to create a perfectly aligned 3-column structural layout for the "Process" card gallery.
- **Color:** A sleek dark-mode palette featuring a charcoal gray background (`#121212`) and crisp white text (`#FFFFFC`), with a striking theatrical crimson (`#D32F2F`) acting as the primary accent color for borders and interactive elements.
- **Typography:** *Montserrat* (sans-serif) for bold, modern headings and *Inter* for highly legible, clean body copy.
- **Visual hierarchy:** The large master image in the Hero section grabs attention first, followed by the image-heavy process cards (secondary focus), and finally the conceptual reflection text and footer links (tertiary focus).
- **Feedback states:** Navigation links and call-to-action buttons change color and fill (highlighting in crimson) when the user hovers or focuses on them via keyboard navigation, clearly indicating interactivity.
- **Responsive design:** A media query breaks the desktop's 3-column process grid down into a single-column vertical stack on mobile devices (screens under 768px). Images are set to a max-width of 100% so they resize fluidly without overflowing the screen.

## Technologies Used
- HTML
- CSS
- GitHub Pages

## Credits
- Fonts provided by [Google Fonts](https://fonts.google.com/) (Montserrat and Inter).
- Placeholder imagery sourced from [Unsplash](https://unsplash.com/).
- UI structure and layout planning inspired by course Project 2 requirements.

## Future Improvements
With more time, I would like to implement a JavaScript lightbox or modal so users can click on the smaller process sketches to view them in full-screen high resolution. I would also like to replace the simple `mailto:` contact link with a fully functional, styled form built directly into the page.