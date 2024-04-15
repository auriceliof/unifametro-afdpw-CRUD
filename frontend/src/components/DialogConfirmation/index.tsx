import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";

type Props = {
    message: string;
    onDialogAnswer: Function;
}

export default function DialogConfirmation({message, onDialogAnswer}: Props) {

    return (
        <div className="pag-dialog-background" onClick={() => onDialogAnswer(false)}>
            <div className="pag-dialog-box" onClick={(event) => event.stopPropagation}>
                <h2>{message}</h2>

                <div className="pag-dialog-btn-container">
                    <div onClick={() => onDialogAnswer(false)}>
                        <ButtonSecondary name="Não"/>
                    </div>
                    <div onClick={() => onDialogAnswer(true)}>
                        <ButtonPrimary name="Sim"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

