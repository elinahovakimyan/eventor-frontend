import { promisify } from 'core/helpers';

import { decorations } from 'shared/data';

const getDecorations = () => promisify(decorations);

export const decorationService = {
  getDecorations,
};
