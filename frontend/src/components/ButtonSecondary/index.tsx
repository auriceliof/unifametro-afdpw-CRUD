import './styles.css';

type Props = {
    name: string;
}

export default function ButtonSecondary({name}: Props) {

    return(
        <button className="pag-btn-secondary">
            {name}
        </button>
    );
}
