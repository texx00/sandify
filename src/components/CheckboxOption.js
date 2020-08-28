import React, { Component } from 'react'
import {
  Col,
  Row,
  Form,
} from 'react-bootstrap'
import Switch from 'react-switch'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class CheckboxOption extends Component {
  render() {
    const option = this.props.options[this.props.optionKey]
    const model = this.props.model
   
    const renderTooltip = (tip) => (
      <Tooltip id="input-tooltip">
        {tip}
      </Tooltip>
    );

    const inputComponent = 
      <Switch
        checked={model[this.props.optionKey]}
        onChange={(checked) => {
          let attrs = {}
          attrs[this.props.optionKey] = checked

          if (option.onChange !== undefined) {
            attrs = option.onChange(attrs, model)
          }

          this.props.onChange(attrs)
        }} />

    return (
      <Row className="align-items-center">
        <Col sm={5}>
        <Form.Label htmlFor="options-step">
          {option.title}
        </Form.Label>
        </Col>

        <Col sm={7}>
          <div>
          {option.helperText !== undefined ?
            <OverlayTrigger
            placement={option.helperPosition !== undefined ? option.helperPosition : "bottom"}
            delay={{ show: 2000, hide: 200 }}
            overlay={renderTooltip(option.helperText)}>
              <div className="d-inline-block">{inputComponent}</div>
            </OverlayTrigger> : 
            <div>{inputComponent}</div>
          }
          </div>
        </Col>
      </Row>
    )
  }
}

export default CheckboxOption
