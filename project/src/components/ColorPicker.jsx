import {SketchPicker} from 'react-color'
import { useSnapshot } from "valtio";
import state from "../store/Proxy";
const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
  <div
  className="absolute left-full ml-3"
  >
    <SketchPicker
    color={snap.color}
    disableAlpha
    presetColors={[
      '#FF6900',
      '#FCB900',
      '#7BDCB5',
      '#00D084',
      '#8ED1FC',
      '#0693E3',
      '#ABB8C3',
      '#EB144C',
      '#F78DA7',
      '#990000',
      '#000000',
      '#FFFFFF'
    ]}
    onChangeComplete={(color)=>state.color=color.hex}
    />

  </div>
  )
}

export default ColorPicker