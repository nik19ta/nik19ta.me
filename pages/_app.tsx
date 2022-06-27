// Global Styles
import '../styles/globals.css'

// Fonts
import "../fonts/Urbanist/gen/stylesheet.css"
import "../fonts/Open_Sans/gen/stylesheet.css"
import "../fonts/Fira_Code/gen/stylesheet.css"

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
