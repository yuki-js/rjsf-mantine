import { FormProps, withTheme } from '@rjsf/core';
import { FormContextType, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';
import { ComponentType } from 'react';
import { generateTemplates } from './templates';
import { generateWidgets } from './widgets';

export function generateForm<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(): ComponentType<FormProps<T, S, F>> {
  return withTheme<T, S, F>({
    templates: generateTemplates<T, S, F>(),
    widgets: generateWidgets<T, S, F>(),
  });
}

export default generateForm();
