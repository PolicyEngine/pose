import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProgressRing } from './ProgressRing'

describe('ProgressRing', () => {
  it('renders the current count', () => {
    render(<ProgressRing current={25} target={100} />)
    expect(screen.getByText('25')).toBeInTheDocument()
  })

  it('renders the target count with default label', () => {
    render(<ProgressRing current={25} target={100} />)
    expect(screen.getByText('/ 100 Completed')).toBeInTheDocument()
  })

  it('renders with custom label', () => {
    render(<ProgressRing current={50} target={100} label="Interviews" />)
    expect(screen.getByText('/ 100 Interviews')).toBeInTheDocument()
  })

  it('calculates and displays correct percentage', () => {
    render(<ProgressRing current={25} target={100} />)
    expect(screen.getByText('25%')).toBeInTheDocument()
  })

  it('rounds percentage correctly', () => {
    render(<ProgressRing current={33} target={100} />)
    expect(screen.getByText('33%')).toBeInTheDocument()
  })

  it('caps percentage at 100% when current exceeds target', () => {
    render(<ProgressRing current={150} target={100} />)
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('displays 0% when current is 0', () => {
    render(<ProgressRing current={0} target={100} />)
    expect(screen.getByText('0%')).toBeInTheDocument()
  })

  it('renders an SVG element', () => {
    const { container } = render(<ProgressRing current={50} target={100} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('renders two circle elements (background and progress)', () => {
    const { container } = render(<ProgressRing current={50} target={100} />)
    const circles = container.querySelectorAll('circle')
    expect(circles).toHaveLength(2)
  })

  it('uses default size of 180', () => {
    const { container } = render(<ProgressRing current={50} target={100} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '180')
    expect(svg).toHaveAttribute('height', '180')
  })

  it('respects custom size prop', () => {
    const { container } = render(
      <ProgressRing current={50} target={100} size={200} />
    )
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '200')
    expect(svg).toHaveAttribute('height', '200')
  })

  it('applies the correct stroke color to progress ring', () => {
    const { container } = render(<ProgressRing current={50} target={100} />)
    const circles = container.querySelectorAll('circle')
    // First circle is background (gray), second is progress (teal)
    expect(circles[0]).toHaveAttribute('stroke', '#e5e7eb')
    expect(circles[1]).toHaveAttribute('stroke', '#319795')
  })

  it('sets strokeLinecap to round on progress ring', () => {
    const { container } = render(<ProgressRing current={50} target={100} />)
    const circles = container.querySelectorAll('circle')
    expect(circles[1]).toHaveAttribute('stroke-linecap', 'round')
  })
})
