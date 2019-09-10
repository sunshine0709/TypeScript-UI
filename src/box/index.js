/** @jsx jsx */
import styled from 'styled-components'
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose
} from 'styled-system'
import extraConfig from './config'

export const truncate = props => {
  if (props.isTruncated) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }
}

export const systemProps = compose(
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox
)

const Box = styled.div`
  ${ systemProps };
  ${ extraConfig };
  
`

export default Box
