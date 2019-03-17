import { promisify } from 'core/helpers';

import { decorations } from 'data';

const getDecorations = () => promisify(decorations);

export const decorationService = {
  getDecorations,
};
