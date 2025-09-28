// Import global styles
import "./src/styles/global.css"

// Smooth scroll polyfill for older browsers
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  if (typeof IntersectionObserver === `undefined`) {
    import(`intersection-observer`).then(() => {
      console.log(`# IntersectionObserver is polyfilled!`)
    })
  }
}