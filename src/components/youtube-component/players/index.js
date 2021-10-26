import { lazy } from 'react'

import { canPlay} from '../patterns'

export default [
  {
    key: 'youtube',
    name: 'YouTube',
    canPlay: canPlay.youtube,
    lazyPlayer: lazy(() => import(/* webpackChunkName: 'reactPlayerYouTube' */'./YouTube'))
  },
 
  
  
  
 

  
  
]
