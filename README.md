## Modern Calculator (HTML/CSS/JavaScript)

### Description
A simple, modern, and responsive calculator built with plain HTML, CSS, and JavaScript. It supports mouse and keyboard input for basic arithmetic operations, including percentage, and provides a clean UI inspired by contemporary calculator designs.

### Features
- **Clean UI**: Minimal, modern layout with clear visual grouping
- **Basic operations**: Addition, subtraction, multiplication, division, percentage
- **Input methods**: Click buttons or use keyboard
- **Utility keys**: AC (clear), backspace, equals
- **Responsive feedback**: Button press animation

### Demo / How to Run
No build step is required.

1. Download or clone the project files.
2. Open `task2.html` in any modern web browser.

### Keyboard Shortcuts
- **Digits**: 0–9
- **Operators**: `+`, `-`, `*`, `/`, `%`, `.`
- **Evaluate**: `Enter`
- **Backspace**: `Backspace`
- **Clear**: `Escape`

### Project Structure
```
wd task2/
├─ task2.html   # Markup and calculator layout
├─ style.css    # Styling and layout rules
├─ script.js    # Calculator logic and event handling
└─ README.md    # This file
```

### Implementation Notes
- The display is read-only and updated via button and keyboard events.
- Evaluation uses JavaScript's `eval` after normalizing symbols (e.g., `×` -> `*`, `÷` -> `/`). For trusted, local usage this is acceptable; for production or untrusted input, replace with a safe expression parser.

### Customization
- Modify colors, sizes, and spacing in `style.css`.
- Add or tweak buttons in `task2.html` inside the `.buttons` grid.
- Extend logic in `script.js` for advanced operations or improved parsing.

### Requirements
- Any modern browser (Chrome, Edge, Firefox, Safari).

### License
You may use, modify, and distribute this project for personal or educational purposes. For commercial use, consider adding a formal license of your choice.


