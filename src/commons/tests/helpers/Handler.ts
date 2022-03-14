import {
  screen,
  act,
  fireEvent,
  SelectorMatcherOptions,
  ByRoleOptions,
  MatcherOptions,
  Matcher,
  ByRoleMatcher
} from '@testing-library/react';

type TMethodElement =
  | 'getByLabelText'
  | 'getByText'
  | 'getByRole'
  | 'getByTestId'
  | 'queryByText'
  | 'queryByTestId'
  | 'queryByRole';

type TMethodElements = 'getAllByText' | 'getAllByRole';

const methodElement = {
  getByLabelText: screen.getByLabelText,
  getByText: screen.getByText,
  queryByRole: screen.queryByRole,
  getByRole: screen.getByRole,
  getByTestId: screen.getByTestId,
  queryByText: screen.queryByText,
  queryByTestId: screen.queryByTestId
};

const methodElements = {
  getAllByText: screen.getAllByText,
  getAllByRole: screen.getAllByRole
};

interface IElement {
  exists: () => void;
  notExists: () => void;
  isChecked: () => void;
  isNotChecked: () => void;
  isDisabled: () => void;
  isNotDisabled: () => void;
  get: () => HTMLElement | null;
}

interface IElements {
  get: () => HTMLElement[] | null;
}

export default class Handler {
  private static getElement(
    name: Matcher | ByRoleMatcher,
    type: TMethodElement,
    options?: SelectorMatcherOptions & ByRoleOptions & MatcherOptions
  ): HTMLElement {
    return (methodElement[type] as any)(name, options);
  }

  private static getElements(
    name: string | RegExp,
    type: TMethodElements,
    options?: SelectorMatcherOptions & ByRoleOptions & MatcherOptions
  ): HTMLElement[] {
    return (methodElements[type] as any)(name, options);
  }

  static field = (
    name: string | RegExp,
    type: TMethodElement,
    value: string | number
  ): void => {
    const domElement = this.getElement(name, type);
    fireEvent.change(domElement, {
      target: { value }
    });
  };

  static fileField = (
    name: string | RegExp,
    type: TMethodElement,
    value: File[]
  ): void => {
    const domElement = this.getElement(name, type);
    fireEvent.change(domElement, {
      target: { files: value }
    });
  };

  static click = async (
    name: string | RegExp,
    type: TMethodElement,
    options?: SelectorMatcherOptions & ByRoleOptions & MatcherOptions
  ): Promise<void> => {
    const domElement = this.getElement(name, type, options);
    await act(async () => await domElement?.click());
  };

  static elements = (
    name: string | RegExp,
    type: TMethodElements,
    options?: SelectorMatcherOptions & ByRoleOptions & MatcherOptions
  ): IElements => {
    const domElement = this.getElements(name, type, options);
    return {
      get: () => domElement
    };
  };

  static element = (
    name: string | RegExp,
    type: TMethodElement,
    options?: SelectorMatcherOptions & ByRoleOptions & MatcherOptions
  ): IElement => {
    const domElement = this.getElement(name, type, options);
    return {
      exists: () => expect(domElement).toBeInTheDocument(),
      notExists: () => expect(domElement).not.toBeInTheDocument(),
      isChecked: () => expect(domElement).toBeChecked(),
      isNotChecked: () => expect(domElement).not.toBeChecked(),
      isDisabled: () => expect(domElement).toBeDisabled(),
      isNotDisabled: () => expect(domElement).not.toBeDisabled(),
      get: () => domElement
    };
  };
}
