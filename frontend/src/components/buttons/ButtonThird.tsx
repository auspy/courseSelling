"use client"
import { emptyButtonOnClick } from "@/helper/common";
import { ButtonProps } from "@/types/types.button";
import styles from "@/static/styles/button.module.scss"

const ButtonThird = ({ value, onClick = emptyButtonOnClick }: ButtonProps) => {
    return (
        <>
            <div className={styles.buttonThirdWrap} ><button className={styles.buttonThird} onClick={onClick}>{value}</button></div>
        </>
    );
}

export default ButtonThird;