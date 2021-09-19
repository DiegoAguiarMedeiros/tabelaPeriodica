import React, {Component} from 'react'
import PeriodicTableElement from './PeriodicTableElement'
import './PeriodicTableRow.css'

const printRow = element => <PeriodicTableElement elementName={element.elementName} atomicNumber={element.atomicNumber} period={element.period} type={element.type} family={element.family} element={element.element} key={"atomicNumber"+element.atomicNumber}/>



export default class PeriodicTableRow extends Component {
    render() {
        return (
            <div className='periodic-table-row'>
                <div className="info">INFO</div>
                {this.props.elements.map(printRow)}
                
            </div>
        )
    }
}