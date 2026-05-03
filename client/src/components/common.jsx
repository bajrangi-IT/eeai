import React from 'react';

/**
 * A reusable glass-morphism card component for consistent UI structure.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Component children.
 * @param {string} [props.className] - Additional CSS classes.
 */
const GlassCard = ({ children, className = '' }) => (
  <div className={`glass-morphism ${className}`} style={{ padding: '2rem' }}>
    {children}
  </div>
);

/**
 * A standardized button component with accessibility and consistent styling.
 * @param {Object} props
 * @param {string} props.variant - 'primary' | 'secondary'.
 * @param {string} [props.ariaLabel] - Accessibility label.
 */
const Button = ({ children, onClick, variant = 'primary', ariaLabel, ...props }) => (
  <button 
    onClick={onClick} 
    className={`btn-${variant}`} 
    aria-label={ariaLabel}
    {...props}
  >
    {children}
  </button>
);

export { GlassCard, Button };
