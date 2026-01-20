import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Outreach } from '../components/Outreach'

describe('Outreach', () => {
  it('renders the email generator form', () => {
    render(<Outreach />)

    expect(screen.getByText('Email outreach generator')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Tax Policy Center')).toBeInTheDocument()
  })

  it('shows all 6 segment options', () => {
    render(<Outreach />)

    expect(screen.getByText('Users')).toBeInTheDocument()
    expect(screen.getByText('Supporters')).toBeInTheDocument()
    expect(screen.getByText('Contributors')).toBeInTheDocument()
    expect(screen.getByText('Competitors')).toBeInTheDocument()
    expect(screen.getByText('Distributors')).toBeInTheDocument()
    expect(screen.getByText('Partners')).toBeInTheDocument()
  })

  it('shows sender options for Max, Pavel, and Dan', () => {
    render(<Outreach />)

    expect(screen.getByRole('button', { name: 'Max' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pavel' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dan' })).toBeInTheDocument()
  })

  it('generates email with recipient name', async () => {
    const user = userEvent.setup()
    render(<Outreach />)

    const nameInput = screen.getByPlaceholderText('Jane Smith')
    await user.type(nameInput, 'John Doe')

    // Check generated email contains the first name
    expect(screen.getByText(/Hi John/)).toBeInTheDocument()
  })

  it('changes email template when segment changes', async () => {
    const user = userEvent.setup()
    render(<Outreach />)

    // Default is 'user' segment
    expect(screen.getByText(/Quick chat about PolicyEngine/)).toBeInTheDocument()

    // Switch to 'supporter' segment
    const supporterButton = screen.getByRole('button', { name: 'Supporters' })
    await user.click(supporterButton)

    expect(screen.getByText(/PolicyEngine sustainability/)).toBeInTheDocument()
  })

  it('has working copy buttons', async () => {
    const user = userEvent.setup()

    // Mock clipboard API using vi.stubGlobal
    const writeText = vi.fn().mockResolvedValue(undefined)
    vi.stubGlobal('navigator', {
      ...navigator,
      clipboard: { writeText },
    })

    render(<Outreach />)

    // Find and click the "Copy all" button
    const copyAllButton = screen.getByRole('button', { name: 'Copy all' })
    await user.click(copyAllButton)

    expect(writeText).toHaveBeenCalled()

    vi.unstubAllGlobals()
  })

  it('includes scheduling link in generated emails', () => {
    render(<Outreach />)

    expect(screen.getByText(/cal\.com\/max-ghenis-policyengine\/pose-ecosystem-interview/)).toBeInTheDocument()
  })

  it('shows outreach tips', () => {
    render(<Outreach />)

    expect(screen.getByText('Outreach tips')).toBeInTheDocument()
    expect(screen.getByText(/Personalize the context/)).toBeInTheDocument()
    expect(screen.getByText(/Send Tuesday-Thursday/)).toBeInTheDocument()
  })

  it('has mailto link for opening email client', () => {
    render(<Outreach />)

    const mailtoLink = screen.getByRole('link', { name: 'Open in email client' })
    expect(mailtoLink).toHaveAttribute('href')
    expect(mailtoLink.getAttribute('href')).toMatch(/^mailto:/)
  })
})
