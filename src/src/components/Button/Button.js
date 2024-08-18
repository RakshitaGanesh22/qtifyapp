import { Button } from "@mui/material";
import Styles from './Button.module.css'; 
export default function SearchButton (props){
    return (
        <div>
            <form className={Styles.button1}>
                <Button type="submit" className={Styles.button2}>{props.name}</Button>
                
            </form>
        </div>
    )
}