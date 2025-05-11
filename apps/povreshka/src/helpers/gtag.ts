import { GA_MEASUREMENT_ID } from '../process.env/GA_MEASUREMENT_ID'
import { isProduction } from '../process.env/NODE_ENV'

export const pageview = (page_path: string) => {
  // @ts-ignore
  if (window['gtag'] && isProduction) {
    // @ts-ignore
    window['gtag']('config', GA_MEASUREMENT_ID, {
      page_path,
    })
  }
}

export const event = ({ action, category, label, value }: any) => {
  // @ts-ignore
  if (window['gtag'] && isProduction) {
    // @ts-ignore
    window['gtag']('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}

// event({action: 'submit_form', category: 'contact_phone', label: '+79999999999'});
