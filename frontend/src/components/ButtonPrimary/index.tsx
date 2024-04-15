import './styles.css';

type Props = {
    name: string;
}

export default function ButtonPrimary({name}: Props) {

    return(
        <button className="pag-btn-primary">
            {name}
        </button>
    );
}
