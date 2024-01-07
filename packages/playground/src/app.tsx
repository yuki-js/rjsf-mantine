import v8Validator, { customizeValidator } from '@rjsf/validator-ajv8';
import v6Validator from '@rjsf/validator-ajv6';
import localize_es from 'ajv-i18n/localize/es';
import Ajv2019 from 'ajv/dist/2019.js';
import Ajv2020 from 'ajv/dist/2020.js';

import Layout from './layout';
import Playground, { PlaygroundProps } from './components';

// @ts-expect-error todo: error TS2345: Argument of type 'Localize' is not assignable to parameter of type 'Localizer'.
const esV8Validator = customizeValidator({}, localize_es);
const AJV8_2019 = customizeValidator({ AjvClass: Ajv2019 });
const AJV8_2020 = customizeValidator({ AjvClass: Ajv2020 });

const validators: PlaygroundProps['validators'] = {
  AJV8: v8Validator,
  AJV8_es: esV8Validator,
  AJV8_2019,
  AJV8_2020,
  'AJV6 (deprecated)': v6Validator,
};

const themes: PlaygroundProps['themes'] = {
  default: {
    stylesheet: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
    theme: {},
    subthemes: {
      cerulean: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/cerulean/bootstrap.min.css',
      },
      cosmo: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/cosmo/bootstrap.min.css',
      },
      cyborg: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/cyborg/bootstrap.min.css',
      },
      darkly: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/darkly/bootstrap.min.css',
      },
      flatly: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/flatly/bootstrap.min.css',
      },
      journal: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/journal/bootstrap.min.css',
      },
      lumen: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/lumen/bootstrap.min.css',
      },
      paper: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/paper/bootstrap.min.css',
      },
      readable: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/readable/bootstrap.min.css',
      },
      sandstone: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/sandstone/bootstrap.min.css',
      },
      simplex: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/simplex/bootstrap.min.css',
      },
      slate: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/slate/bootstrap.min.css',
      },
      spacelab: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/spacelab/bootstrap.min.css',
      },
      'solarized-dark': {
        stylesheet: '//cdn.rawgit.com/aalpern/bootstrap-solarized/master/bootstrap-solarized-dark.css',
      },
      'solarized-light': {
        stylesheet: '//cdn.rawgit.com/aalpern/bootstrap-solarized/master/bootstrap-solarized-light.css',
      },
      superhero: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/superhero/bootstrap.min.css',
      },
      united: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/united/bootstrap.min.css',
      },
      yeti: {
        stylesheet: '//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/yeti/bootstrap.min.css',
      },
    },
  },
};

export default function App() {
  return (
    <Layout>
      <Playground themes={themes} validators={validators} />
    </Layout>
  );
}
