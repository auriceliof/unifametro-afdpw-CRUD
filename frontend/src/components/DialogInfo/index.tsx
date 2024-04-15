import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message: string;
    onDialogClose: Function;
}

export default function DialogInfo({message, onDialogClose}: Props) {

    return (
        <div className="pag-dialog-background">
            <div className="pag-dialog-box" onClick={(event) => event.stopPropagation}>
                <h2>{message}</h2>
                <div className="pag-dialog-btn" onClick={() => {onDialogClose()}}>
                    <ButtonPrimary name="OK"/>
                </div>
            </div>
        </div>
    )
}

