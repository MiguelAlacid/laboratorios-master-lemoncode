import * as React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('common/confirmation-dialog/ConfirmationDialogComponent', () => {
  const labels = { closeButton: 'Cancelar', acceptButton: 'Aceptar' };

  it('should render title, children and labels when isOpen is true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: 'Test title',
      labels,
    };

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <p>Test content</p>
      </ConfirmationDialogComponent>
    );

    // Assert
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Cancelar' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Aceptar' })).toBeInTheDocument();
  });

  it('should not render the dialog when isOpen is false', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: 'Test title',
      labels,
    };

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <p>Test content</p>
      </ConfirmationDialogComponent>
    );

    // Assert
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByText('Test title')).not.toBeInTheDocument();
  });

  it('should render a React node as title', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: <span data-testid="custom-title">Custom title</span>,
      labels,
    };

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <p>Test content</p>
      </ConfirmationDialogComponent>
    );

    // Assert
    expect(screen.getByTestId('custom-title')).toBeInTheDocument();
  });

  it('should call only onClose when clicking the close button', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: 'Test title',
      labels,
    };

    render(
      <ConfirmationDialogComponent {...props}>
        <p>Test content</p>
      </ConfirmationDialogComponent>
    );

    // Act
    await userEvent.click(screen.getByRole('button', { name: 'Cancelar' }));

    // Assert
    expect(props.onClose).toHaveBeenCalledTimes(1);
    expect(props.onAccept).not.toHaveBeenCalled();
  });

  it('should call onAccept and then onClose when clicking the accept button', async () => {
    // Arrange
    const calls: string[] = [];
    const props = {
      isOpen: true,
      onAccept: vi.fn(() => calls.push('accept')),
      onClose: vi.fn(() => calls.push('close')),
      title: 'Test title',
      labels,
    };

    render(
      <ConfirmationDialogComponent {...props}>
        <p>Test content</p>
      </ConfirmationDialogComponent>
    );

    // Act
    await userEvent.click(screen.getByRole('button', { name: 'Aceptar' }));

    // Assert
    expect(props.onAccept).toHaveBeenCalledTimes(1);
    expect(props.onClose).toHaveBeenCalledTimes(1);
    expect(calls).toEqual(['accept', 'close']);
  });
});
