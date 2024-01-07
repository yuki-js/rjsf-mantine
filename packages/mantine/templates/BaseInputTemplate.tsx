import { ChangeEvent } from "react";
import { TextInput } from "@mantine/core";

import {
  ariaDescribedByIds,
  BaseInputTemplateProps,
  examplesId,
  getInputProps,
  labelValue,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils";

/** The `BaseInputTemplate` is the template to use to render the basic `<input>` component for the `core` theme.
 * It is used as the template for rendering many of the <input> based widgets that differ by `type` and callbacks only.
 * It can be customized/overridden for other themes or individual implementations as needed.
 *
 * @param props - The `WidgetProps` for this template
 */
export default function BaseInputTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: BaseInputTemplateProps<T, S, F>) {
  const {
    id,
    placeholder,
    label,
    hideLabel,
    value,
    required,
    readonly,
    disabled,
    onChange,
    onChangeOverride,
    onBlur,
    onFocus,
    autofocus,
    options,
    schema,
    type,
    rawErrors = [],
  } = props;
  const inputProps = getInputProps<T, S, F>(schema, type, options);
  const _onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = () => onBlur && onBlur(id, value);
  const _onFocus = () => onFocus && onFocus(id, value);

  return (
    <>
      <TextInput
        key={id}
        id={id}
        name={id}
        placeholder={placeholder}
        description={schema.description}
        {...inputProps}
        label={labelValue(label || undefined, hideLabel, false)}
        required={required}
        autoFocus={autofocus}
        disabled={disabled || readonly}
        list={schema.examples ? examplesId<T>(id) : undefined}
        value={value || value === 0 ? value : ""}
        error={
          rawErrors.length > 0
            ? rawErrors.map((error, i) => <span key={i}>{error}</span>)
            : false
        }
        onChange={onChangeOverride || _onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        aria-describedby={ariaDescribedByIds<T>(id, !!schema.examples)}
      />
      {Array.isArray(schema.examples) && (
        <datalist id={examplesId<T>(id)}>
          {(schema.examples as string[])
            .concat(
              schema.default && !schema.examples.includes(schema.default)
                ? ([schema.default] as string[])
                : [],
            )
            .map((example) => {
              return <option key={example} value={example} />;
            })}
        </datalist>
      )}
    </>
  );
}
