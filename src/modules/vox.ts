import badWordsRegExp from 'badwords/regexp'
import * as say from 'say'
import { urlRegExPattern } from './isUrl'
export default function vox (message: string): void {
  const voiceMessage = message
    .replace(badWordsRegExp, 'expletive')
    .replace(urlRegExPattern, '')
  say.speak(voiceMessage)
}