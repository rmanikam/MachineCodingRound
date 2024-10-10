import React from 'react'

const Button = ({ onClick, disabled }) => {
//     When the button is clicked, this function checks:
// If an onClick function is passed as a prop.
// If the button is not disabled.
// If both conditions are true, it triggers the onClick function (which alerts "Button Clicked").
    const handleClick = (event) => {
        if (onClick && !disabled) {
            onClick(event);
        }
    };
// This function listens for keyboard input (specifically the "Enter" key).
// If the "Enter" key is pressed, and the button is not disabled,
// it will simulate a click (which can be useful for keyboard navigation or accessibility).
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && onClick && !disabled) {
            onClick(event); // If Enter is pressed and button isn't disabled, it triggers the click event
        }
    };
  return (
    <button
    onClick={handleClick}        // Calls `handleClick` when the button is clicked
    onKeyPress={handleKeyPress}  // Calls `handleKeyPress` when a key is pressed while the button is focused
    aria-pressed="true"          // ARIA attribute indicating the button is in a pressed state (useful for accessibility)
    disabled={disabled}          // HTML attribute disabling the button if `disabled` is true
    aria-label="Click me"        // ARIA label, a descriptive text for screen readers
    aria-disabled={disabled}     // ARIA attribute indicating if the button is disabled (for accessibility)
    role="button"                // ARIA role indicating this is a button (for assistive technologies)
    aria-haspopup="true"         // ARIA attribute indicating this button might open a dropdown or popup
    aria-controls="dropdown-menu"// ARIA attribute referencing the element controlled by this button (e.g., a dropdown)
    tabIndex={disabled ? -1 : 0} // Controls keyboard focus: if disabled, it won't be focusable
    style={{ cursor: disabled ? 'not-allowed' : 'pointer' }} // Visual cue: cursor shows "not-allowed" when disabled
>
    Click Me
</button>
  )
}

export default Button