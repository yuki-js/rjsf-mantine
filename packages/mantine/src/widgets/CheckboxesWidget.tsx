import { ChangeEvent } from 'react';

import {
  ariaDescribedByIds,
  enumOptionsDeselectValue,
  enumOptionsIsSelected,
  enumOptionsSelectValue,
  getTemplate,
  optionId,
  titleId,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
  labelValue,
  enumOptionsValueForIndex,
  enumOptionsIndexForValue,
} from '@rjsf/utils';
import { Checkbox, Group, Input } from '@mantine/core';

/** The `CheckboxesWidget` is a widget for rendering checkbox groups.
 *  It is typically used to represent an array of enums.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function CheckboxesWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: WidgetProps<T, S, F>) {
  const {
    id,
    disabled,
    options,
    value,
    autofocus,
    readonly,
    label,
    hideLabel,
    onChange,
    onBlur,
    onFocus,
    schema,
    required,
    rawErrors = [],
  } = props;

  const { enumOptions, enumDisabled } = options;
  const checkboxesValues = Array.isArray(value) ? value : [value];

  const selectedIndices = enumOptionsIndexForValue<S>(checkboxesValues, enumOptions, true) as string[];

  const _onBlur = () => onBlur(id, value);
  const _onFocus = () => onFocus(id, value);

  const description = options.description ?? schema.description;

  const _onChange = (nextIndices: string[]) => {
    const nextValues = enumOptionsValueForIndex<S>(nextIndices, enumOptions, []) as T[];
    onChange(nextValues);
  };
  return (
    <Checkbox.Group
      label={labelValue(label, hideLabel, false)}
      description={description}
      error={rawErrors.length > 0 ? rawErrors.map((error, i) => <span key={i}>{error}</span>) : false}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
      value={selectedIndices}
      id={id}
      required={required}
      autoFocus={autofocus}
    >
      <Group>
        {enumOptions?.map((option, index) => {
          return (
            <Checkbox
              id={optionId(id, index)}
              key={index}
              label={option.label}
              value={enumOptionsIndexForValue<S>(option.value, enumOptions, false) as string}
              disabled={disabled || readonly || (enumDisabled ?? []).includes(index)}
              name={id}
              aria-describedby={ariaDescribedByIds<T>(id)}
            />
          );
        })}
      </Group>
    </Checkbox.Group>
  );
}
