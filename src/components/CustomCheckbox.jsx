import styled from 'styled-components'
import PropTypes from 'prop-types'

export const CustomCheckbox = ({ checked, onChange }) => {
    return (
        <StyledWrapper className="col-1">
            <label className="container">
                <input type="checkbox" checked={checked} onChange={onChange} />
                <div className="checkmark" />
            </label>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    /* Hide the default checkbox */
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .container {
        display: block;
        position: relative;
        cursor: pointer;
        font-size: 1.5rem;
        user-select: none;
    }

    /* Create a custom checkbox */
    .checkmark {
        --clr: #0b6e4f;
        position: relative;
        top: 0;
        left: 0;
        height: 1em;
        width: 1em;
        background-color: #ccc;
        border-radius: 50%;
        transition: 300ms;
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: var(--clr);
        border-radius: 0.5rem;
        animation: pulse 500ms ease-in-out;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: '';
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
        left: 0.45em;
        top: 0.25em;
        width: 0.25em;
        height: 0.5em;
        border: solid #e0e0e2;
        border-width: 0 0.15em 0.15em 0;
        transform: rotate(45deg);
    }

    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 #0b6e4f90;
            rotate: 20deg;
        }

        50% {
            rotate: -20deg;
        }

        75% {
            box-shadow: 0 0 0 10px #0b6e4f60;
        }

        100% {
            box-shadow: 0 0 0 13px #0b6e4f30;
            rotate: 0;
        }
    }
`

CustomCheckbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}
