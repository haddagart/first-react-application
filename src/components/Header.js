import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd}) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button
                text={showAdd ? 'Close':'Add'}
                color={showAdd ? 'red':'green'}
                onClick={onAdd}
            />
        </header>
    )
};

// Default props in case they are not defined
Header.defaultProps = {
    'title': "TaskTracker",
};

// Linting the types of properties
// .isRequired helps to require a certain property
Header.propTypes = {
    'title': PropTypes.string.isRequired,
};

// Inline styling
// const headingStyle = {
//    'color': 'white',
//    'backgroundColor': 'red',
//    'padding': '0.5em 0.5m',
//    'margin': '0',
//    'display': 'block',
//};

export default Header
