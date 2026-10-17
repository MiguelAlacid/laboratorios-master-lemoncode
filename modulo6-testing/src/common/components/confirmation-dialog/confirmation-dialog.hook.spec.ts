import { renderHook, act } from '@testing-library/react';
import { createEmptyLookup, Lookup } from '#common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('common/confirmation-dialog/useConfirmationDialog', () => {
  it('should return isOpen false and an empty itemToDelete as initial state', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should set isOpen to true and update itemToDelete when calling onOpenDialog', () => {
    // Arrange
    const item: Lookup = { id: '1', name: 'Test item' };
    const { result } = renderHook(() => useConfirmationDialog());

    // Act
    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('should set isOpen to false when calling onClose', () => {
    // Arrange
    const item: Lookup = { id: '1', name: 'Test item' };
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(item);
    });

    // Act
    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('should reset itemToDelete without closing the dialog when calling onAccept', () => {
    // Arrange
    const item: Lookup = { id: '1', name: 'Test item' };
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(item);
    });

    // Act
    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
    expect(result.current.isOpen).toBeTruthy();
  });
});
