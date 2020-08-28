import React, { Component } from 'react'
import {
  Col,
  Form,
  Row
} from 'react-bootstrap'
import Select from 'react-select'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class DropdownOption extends Component {
  render() {
    const option = this.props.options[this.props.optionKey]
    const model = this.props.model
    const currentChoice = model[this.props.optionKey]
  
    const renderTooltip = (tip) => (
      <Tooltip id="input-tooltip">
        {tip}
      </Tooltip>
    );

    const inputComponent = <Select
      value={{value: currentChoice, label: currentChoice}}
      onChange={(choice) => {
        const value = choice.value
        let attrs = {}
        attrs[this.props.optionKey] = value

        if (option.onChange !== undefined) {
          attrs = option.onChange(attrs, model)
        }

        this.props.onChange(attrs)
      }}
      options={option.choices.map((choice) => {
        return { value: choice, label: choice}
      })}
      />

    return (
      <Row className="align-items-center pb-2" key={this.props.index}>
        <Col sm={5}>
          <Form.Label htmlFor="options-dropdown">
            {option.title}
          </Form.Label>
        </Col>

        <Col sm={7}>
          {option.helperText !== undefined ?
              <OverlayTrigger
              placement={option.helperPosition !== undefined ? option.helperPosition : "bottom"}
              delay={{ show: 2000, hide: 200 }}
              overlay={renderTooltip(option.helperText)}>
                <div>{inputComponent}</div>
              </OverlayTrigger> : 
              <div>{inputComponent}</div>
            }
        </Col>
      </Row>
    )
  }
}

export default DropdownOption
