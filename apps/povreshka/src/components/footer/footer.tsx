import { docsLinks } from './constants'
import { Container, Content, Docs } from './footer.sc'
import { Copyright } from './сopyright'

/**
 * Renders the Footer component with contact information, policy links, navigation links, and social links.
 *
 * @param {any} props - Props for the Footer component
 * @return {JSX.Element} The Footer component JSX
 */
export const Footer = (props: any): JSX.Element => {
  return (
    <Container>
      <Content>
        {/* <Details list={details} /> */}
        {/* <Contacts>
          <Email>
            <A href="mailto:sjs-master@yandex.ru">sjs-master@yandex.ru</A>
          </Email>
          <A href="tel://+79537647035">+7 953 764 70 35</A>
        </Contacts> */}
        {/* <Docs list={docsLinks} /> */}
        {/* <NavLinks list={links} /> */}
        <Copyright />
      </Content>
    </Container>
  )
}
