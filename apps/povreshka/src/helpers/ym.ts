// @ts-ignore
import withYM from 'next-ym'
import { YANDEX_METRICA_ID } from '../process.env/YANDEX_METRICA_ID'
import { isProduction } from '../process.env/NODE_ENV'

export const reachGoal = (name: string) => {
  // @ts-ignore
  if (window[`yaCounter${YANDEX_METRICA_ID}`] && isProduction) {
    // @ts-ignore
    window[`yaCounter${YANDEX_METRICA_ID}`].reachGoal(name)
  }
}

// reachGoal('contact_phone');

export { withYM }
