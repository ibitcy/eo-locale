/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    'Getting Started': [
      'getting-started/install',
      'getting-started/corePackage',
    ],
    Components: [
      'components/translationsProvider',
      'components/text',
      'components/datetime',
      'components/numeric',
    ],
    APIs: [
      'apis/useTranslator',
      {
        'Core': [
          'apis/core/translator',
          'apis/core/models',
        ],
      },
    ],

  },
};
