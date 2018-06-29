export const checkUrl = () => {
  const result = {
    opts: {
      displayFullScreen: false,
      displayFloatScreen: false,
      displaySimpleIframe: false,
      displayBar: false,
      displaySurprise: false
    }
  }
  const url = window.location.href
  if (url.indexOf('toto=1') !== -1) result.opts.displaySimpleIframe = true
  if (url.indexOf('toto=2') !== -1) result.opts.displayFloatScreen = true
  if (url.indexOf('toto=3') !== -1) result.opts.displayFullScreen = true
  if (url.indexOf('toto=4') !== -1) result.opts.displayBar = true
  if (url.indexOf('toto=5') !== -1) result.opts.displaySurprise = true

  return Promise.resolve(result)
}
