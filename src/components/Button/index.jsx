import { Btn } from "./style"

const Button = ({children, fn, disabled, negative}) =>{
    return(
        <Btn onClick={fn} disabled={disabled} negative={negative}>
            {children}
        </Btn>
    )
}

export default Button