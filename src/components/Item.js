import PropTypes from 'prop-types'

function Item(props) {

    const {marca, anoLancamento} = props;

    return(
        <>
            <li>{marca} - {anoLancamento}</li>
        </>
    );
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number
}

Item.defaultProps = {
    marca: "Faltou a marca",
    anoLancamento: 0
}

export default Item;