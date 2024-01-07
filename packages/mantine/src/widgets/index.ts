import { FormContextType, RegistryWidgetsType, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';

import SelectWidget from './SelectWidget';
import RadioWidget from './RadioWidget';
import CheckboxesWidget from './CheckboxesWidget';
import CheckboxWidget from './CheckboxWidget';
import TextareaWidget from './TextareaWidget';

export function generateWidgets<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(): RegistryWidgetsType<T, S, F> {
  return {
    CheckboxWidget,
    CheckboxesWidget,
    RadioWidget,
    SelectWidget,
    TextareaWidget,
  };
}

export default generateWidgets();
