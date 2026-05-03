import { render, screen } from '@testing-library/react';
import { GlassCard } from '../components/Common';
import { expect, it, describe } from 'vitest';

describe('Common Components', () => {
  it('should render children inside GlassCard', () => {
    render(<GlassCard>Test Content</GlassCard>);
    expect(screen.getByText('Test Content')).toBeDefined();
  });

  it('should apply custom className to GlassCard', () => {
    const { container } = render(<GlassCard className="custom-class">Content</GlassCard>);
    expect(container.firstChild.classList.contains('custom-class')).toBe(true);
  });
});
