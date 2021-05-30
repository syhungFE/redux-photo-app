import React from 'react';
import PropTypes from 'prop-types'
const positions = {
  TOP_LEFT: 'top left',
  TOP_CENTER: 'top center',
  TOP_RIGHT: 'top right',
  MIDDLE_LEFT: 'middle left',
  MIDDLE: 'middle',
  MIDDLE_RIGHT: 'middle right',
  BOTTOM_LEFT: 'bottom left',
  BOTTOM_CENTER: 'bottom center',
  BOTTOM_RIGHT: 'bottom right'
}

const types = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
}

const transitions = {
  FADE: 'fade',
  SCALE: 'scale'
}

AlertCustomOptions.propTypes = {
  offset: PropTypes.string, // the margin of each alert
  position: PropTypes.oneOf([
    'top left',
    'top right',
    'top center',
    'middle left',
    'middle',
    'middle right',
    'bottom left',
    'bottom right',
    'bottom center'
  ]), // the position of the alerts in the page
  timeout: PropTypes.number ,// timeout to alert remove itself, if  set to 0 it never removes itself
  type: PropTypes.oneOf(['info', 'success', 'error']), // the default alert type used when calling this.props.alert.show
  transition: PropTypes.oneOf(['fade', 'scale']), // the transition animation
  containerStyle: PropTypes.Object, // style to be applied in the alerts container
  template: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired // the alert template to be used
}
function AlertCustomOptions(){
    return {
        offset: '10px',
        position: positions.TOP_CENTER,
        timeout: 3500,
        type: types.INFO,
        transition: transitions.FADE,
        containerStyle: {
            zIndex: 100,
            borderRadius : "5px",
        }
    }
}

export default AlertCustomOptions;