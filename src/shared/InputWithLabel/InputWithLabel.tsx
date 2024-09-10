import { InputWithLabelContainer,TextAreaWithLabelContainer } from './InputWithLabel.style'



type Prop ={
    register:any,
    errorMessage?:string,
    label:string,
    is_textarea?:boolean,
}
const InputWithLabel = ({errorMessage,label,register,is_textarea}:Prop)=>{

  return (
    <div>
      {
        is_textarea?
          <TextAreaWithLabelContainer
            type="text" 
            className={errorMessage?'is_error':''}
            placeholder={label}
            {...register}
          />:

          <InputWithLabelContainer
            type="text" 
            className={errorMessage?'is_error':''}
            placeholder={label}
            {...register}
          />
      }   
      <span style={{'color':'#FF6F5B','textAlign':'right','display':'block','paddingTop':'.4rem'}}>{errorMessage}</span> 
    </div>
  )
}

export default InputWithLabel