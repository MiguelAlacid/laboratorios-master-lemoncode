import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('mapper project.mapper.spec.ts', () => {
  describe('mapProjectFromApiToVm', () => {
    it('should return empty project when it feeds project equals undefined', () => {
      // Arrange
      const project = undefined as unknown as apiModel.Project;

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      expect(result).toEqual(viewModel.createEmptyProject());
    });

    it('should return empty project when it feeds project equals null', () => {
      // Arrange
      const project = null as unknown as apiModel.Project;

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      expect(result).toEqual(viewModel.createEmptyProject());
    });

    it('should return project with empty employees when it feeds project with employees equals undefined', () => {
      // Arrange
      const project: apiModel.Project = {
        id: '1',
        name: 'Proyecto 1',
        isActive: true,
        employees: undefined as unknown as apiModel.EmployeeSummary[],
      };

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      const expectedResult: viewModel.Project = {
        id: '1',
        name: 'Proyecto 1',
        isActive: true,
        employees: [],
      };
      expect(result).toEqual(expectedResult);
    });

    it('should return project with empty employees when it feeds project with employees equals null', () => {
      // Arrange
      const project: apiModel.Project = {
        id: '1',
        name: 'Proyecto 1',
        isActive: true,
        employees: null as unknown as apiModel.EmployeeSummary[],
      };

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      const expectedResult: viewModel.Project = {
        id: '1',
        name: 'Proyecto 1',
        isActive: true,
        employees: [],
      };
      expect(result).toEqual(expectedResult);
    });

    it('should return project with empty employees when it feeds project with employees equals empty array', () => {
      // Arrange
      const project: apiModel.Project = {
        id: '1',
        name: 'Proyecto 1',
        externalId: 'EXT-1',
        comments: 'Comentario',
        isActive: false,
        employees: [],
      };

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      const expectedResult: viewModel.Project = {
        id: '1',
        name: 'Proyecto 1',
        externalId: 'EXT-1',
        comments: 'Comentario',
        isActive: false,
        employees: [],
      };
      expect(result).toEqual(expectedResult);
    });

    it('should return mapped project with employees when it feeds project with employees', () => {
      // Arrange
      const project: apiModel.Project = {
        id: '1',
        name: 'Proyecto 1',
        externalId: 'EXT-1',
        comments: 'Comentario',
        isActive: true,
        employees: [
          { id: '10', isAssigned: true, employeeName: 'Daniel Perez' },
          { id: '20', isAssigned: false, employeeName: 'Jose Gomez' },
          { id: '30', employeeName: 'Manuel Ruiz' },
        ],
      };

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      const expectedResult: viewModel.Project = {
        id: '1',
        name: 'Proyecto 1',
        externalId: 'EXT-1',
        comments: 'Comentario',
        isActive: true,
        employees: [
          { id: '10', isAssigned: true, employeeName: 'Daniel Perez' },
          { id: '20', isAssigned: false, employeeName: 'Jose Gomez' },
          { id: '30', employeeName: 'Manuel Ruiz' },
        ],
      };
      expect(result).toEqual(expectedResult);
    });
  });
});
