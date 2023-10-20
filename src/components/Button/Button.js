import { Button, ButtonLink,  } from "./Button.styled";

export const GoBackBtn = ({to}) =>{
    return(
        <Button type="button">
        <ButtonLink to={to}>
        Go back 
        </ButtonLink>
        </Button>
    )
}


