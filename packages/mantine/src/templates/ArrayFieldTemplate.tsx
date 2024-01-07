import {
  getTemplate,
  getUiOptions,
  isFixedItems,
  ArrayFieldTemplateProps,
  ArrayFieldTemplateItemType,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  UI_OPTIONS_KEY,
} from '@rjsf/utils';

import { cleanClassNames, getMantineProps } from '../../util';
import { Group, Stack, Divider } from '@mantine/core';

/** The `ArrayFieldTemplate` component is the template used to render all items in an array.
 *
 * @param props - The `ArrayFieldTemplateItemType` props for the component
 */
export default function ArrayFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: ArrayFieldTemplateProps<T, S, F>) {
  const {
    uiSchema,
    idSchema,
    canAdd,
    className,
    // classNames, This is not part of the type, so it is likely never passed in
    disabled,
    formContext,
    items,
    onAddClick,
    // options, This is not part of the type, so it is likely never passed in
    readonly,
    required,
    schema,
    title,
    registry,
  } = props;
  const mantineProps = getMantineProps<T, S, F>({
    uiSchema,
    formContext,
    defaultSchemaProps: { horizontalButtons: true, wrapItem: false },
  });
  const { horizontalButtons, wrapItem } = mantineProps;
  const mantine = { horizontalButtons, wrapItem };
  const uiOptions = getUiOptions<T, S, F>(uiSchema);
  const ArrayFieldDescriptionTemplate = getTemplate<'ArrayFieldDescriptionTemplate', T, S, F>(
    'ArrayFieldDescriptionTemplate',
    registry,
    uiOptions
  );
  const ArrayFieldItemTemplate = getTemplate<'ArrayFieldItemTemplate', T, S, F>(
    'ArrayFieldItemTemplate',
    registry,
    uiOptions
  );
  const ArrayFieldTitleTemplate = getTemplate<'ArrayFieldTitleTemplate', T, S, F>(
    'ArrayFieldTitleTemplate',
    registry,
    uiOptions
  );
  // Button templates are not overridden in the uiSchema
  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;

  const arrFields = items?.map(
    ({ key, uiSchema: itemUiSchema = {}, ...props }: ArrayFieldTemplateItemType<T, S, F>) => {
      // Merge in the mantine props from the ArrayFieldTemplate into each of the items
      const mergedUiSchema = {
        ...itemUiSchema,
        [UI_OPTIONS_KEY]: {
          ...itemUiSchema[UI_OPTIONS_KEY],
          mantine,
        },
      };
      return <ArrayFieldItemTemplate key={key} {...props} uiSchema={mergedUiSchema} />;
    }
  );

  const _title = uiOptions.title || title;
  let dividers;
  if (arrFields.length > 0) {
    dividers = (
      <>
        <Divider my='xs' label={`${_title || '配列'} の先頭`} labelPosition='center' />
        {arrFields}
        <Divider my='xs' label={`${_title || '配列'} の末尾`} labelPosition='center' />
      </>
    );
  } else {
    dividers = <Divider my='xs' label={`なにも入っていません。追加しましょう。`} labelPosition='center' />;
  }
  return (
    <Stack className={cleanClassNames([className, isFixedItems<S>(schema) ? '' : 'sortable-form-fields'])}>
      <Group align='center' justify='space-between'>
        <Group>
          <ArrayFieldTitleTemplate
            idSchema={idSchema}
            title={_title}
            schema={schema}
            uiSchema={uiSchema}
            required={required}
            registry={registry}
          />
          <ArrayFieldDescriptionTemplate
            idSchema={idSchema}
            description={uiOptions.description || schema.description}
            schema={schema}
            uiSchema={uiSchema}
            registry={registry}
          />
        </Group>
        {canAdd && (
          <AddButton onClick={onAddClick} disabled={disabled || readonly} uiSchema={uiSchema} registry={registry} />
        )}
      </Group>

      {dividers}
    </Stack>
  );
}
