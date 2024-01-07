import BaseInputTemplate from './BaseInputTemplate';
import FieldErrorTemplate from './FieldErrorTemplate';
import ErrorListTemplate from './ErrorListTemplate';
import SubmitButton from './ButtonTemplates/SubmitButton';
import FieldTemplate from './FieldTemplate';

import { CopyButton, MoveDownButton, MoveUpButton, RemoveButton } from './ButtonTemplates/IconButton';
import AddButton from './ButtonTemplates/AddButton';
import WrapIfAdditionalTemplate from './WrapIfAdditionalTemplate';
import ObjectFieldTemplate from './ObjectFieldTemplate';
import TitleFieldTemplate from './TitleFieldTemplate';
import DescriptionFieldTemplate from './DescriptionFieldTemplate';
import ArrayFieldItemTemplate from './ArrayFieldItemTemplate';
import ArrayFieldTemplate from './ArrayFieldTemplate';

const ButtonTemplates = {
  SubmitButton,
  AddButton,
  RemoveButton,
  CopyButton,
  MoveDownButton,
  MoveUpButton,
};

export {
  ArrayFieldItemTemplate,
  ArrayFieldTemplate,
  BaseInputTemplate,
  FieldErrorTemplate,
  ErrorListTemplate,
  ButtonTemplates,
  FieldTemplate,
  WrapIfAdditionalTemplate,
  ObjectFieldTemplate,
  TitleFieldTemplate,
  DescriptionFieldTemplate,
};
