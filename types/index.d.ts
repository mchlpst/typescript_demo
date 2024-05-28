type Button = {
  link: string,
  label: string,
  target: '_blank' | '_self'
}

type TextComponent = {
  title: string,
  text: string,
  button: Button
}
interface TextComponentInterface {
  title: string,
  text: string,
  button: Button
}
interface Image {
  src: string,
  alt: string
  height: number,
  width: number,
}
interface QuotesComponent {
  title: string,
  subTitle: string,
  quotes: Quotes[]
}

interface Quotes {
  quote: string,
  firstName: string,
  lastName: string
}
type FullNameKeys = 'fristName' | 'lastName';

type FullName = Record<FullNameKeys, string>