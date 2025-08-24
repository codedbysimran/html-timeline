1. ARIA Roles & Attributes
	•	Added role="button" to timeline markers so they are announced as buttons.
	•	Added tabIndex={0} to make markers focusable via keyboard.
	•	Used aria-current="true" on the active timeline marker to indicate current selection.
	•	Modal uses role="dialog" with aria-modal="true" for screen readers.
	•	Modal has a proper aria-labelledby and aria-describedby for title and description.

2. Keyboard Navigation
	•	Timeline markers are reachable via Tab and Arrow keys.
	•	Pressing Enter or Space on a marker opens the modal.
	•	Modal can be closed via Escape (Esc) key.
	•	After closing the modal, focus returns to the marker that opened it.

3. Focus Management
	•	Focus is trapped inside the modal when open (cannot tab outside).
	•	On modal close, focus automatically goes back to the triggering marker.

4. WCAG Color Contrast
	•	Verified that text color contrast meets WCAG AA standards (contrast ratio ≥ 4.5:1 for normal text).

5. Other WCAG Requirements
	•	All interactive elements are reachable via keyboard.
	•	Non-text content has accessible text or labels.
	•	Resizable text and zoom tested without breaking layout.

6. Testing & Verification
	•	Checked navigation with keyboard only (no mouse).
	•	Tested with screen reader (VoiceOver/NVDA).
	•	Ensured modal announces correctly as a dialog.