// @ts-ignore
import withYM from 'next-ym'

import { isProduction } from '../process.env/NODE_ENV'
import { YANDEX_METRICA_ID } from '../process.env/YANDEX_METRICA_ID'

export const reachGoal = (name: string) => {
  // @ts-ignore
  if (window[`yaCounter${YANDEX_METRICA_ID}`] && isProduction) {
    // @ts-ignore
    window[`yaCounter${YANDEX_METRICA_ID}`].reachGoal(name)
  }
}

// reachGoal('contact_phone');

export { withYM }
