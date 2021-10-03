import React, { Component } from 'react'
import PeriodicTableElement from './PeriodicTableElement'
import PeriodicTableInfo from './PeriodicTableInfo'
import './PeriodicTableRow.css'

const callPrintRow = (element, info, infoPopUp) => printRow(element, info,infoPopUp)

const printRow = (element, info,infoPopUp) => {
    return <PeriodicTableElement hover={info} click={infoPopUp} elementName={element.elementName} atomicNumber={element.atomicNumber} period={element.period} type={element.type} family={element.family} element={element.element} key={"atomicNumber" + element.atomicNumber} />
}
const elementNull = {}
export default class PeriodicTableRow extends Component {

    state = { ...elementNull }

    constructor(props) {
        super(props)

        this.infoElement = this.infoElement.bind(this)
    }
    infoElement(element) {
        this.setState({ ...element })
    }
    infoElementPopUp(element) {
       console.log(element)
    }
    render() {
        return (
            <div className='periodic-table-row'>
                <div className='modal'>a</div>
                <PeriodicTableInfo elements={this.state} />
                {this.props.elements.map(element => callPrintRow(element, this.infoElement, this.infoElementPopUp))}
            </div>
        )
    }
}