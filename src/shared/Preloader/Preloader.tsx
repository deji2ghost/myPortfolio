import {CSSProperties } from 'react'
import FadeLoader from 'react-spinners/ScaleLoader';

type PropType={
  loading:boolean;
  color?:string
}
const override: CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex:'10000000',
  backgroundColor:'#ffffffc0',
  width:'100%',
  height:'100%',
  'display':'flex',
  justifyContent:'center',
  alignItems:'center'

};

const Preloader = ({loading=false,color='#242424'}:PropType)=>{



  return (
    <div  style={{...override,'display':loading==false?'none':'flex'}}>
      <FadeLoader
        color={color} loading={loading} 
        
        // size={60}
        // cssOverride={override}
      />
    </div>
  )
}


export default Preloader