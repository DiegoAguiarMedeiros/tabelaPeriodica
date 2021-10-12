import React, { Component } from 'react'
import PeriodicTableElement from './PeriodicTableElement'
import PeriodicTableInfo from './PeriodicTableInfo'
import Modal from './Modal'
import './PeriodicTableRow.css'

const callPrintElement = (element, info,infoElementOut, infoPopUp) => printElement(element, info,infoElementOut,infoPopUp)

const printElement = (element, info,infoOut,infoPopUp) => {
    return <PeriodicTableElement hover={info} mouseOut={infoOut} click={infoPopUp} elementName={element.elementName} atomicNumber={element.atomicNumber} period={element.period} type={element.type} family={element.family} element={element.element} key={"atomicNumber" + element.atomicNumber} />
}

const elementNull = {
    elements:{
        atomicNumber:null,
        element:null,
        elementName:null,
        type:null,
        family:null,
        period:null,
        displayInfo:"none"
    },
    elementModal:{
        atomicNumber:null,
        element:null,
        elementName:null,
        type:null,
        family:null,
        period:null,
        displayModal:"none"
    },
}
export default class PeriodicTableRow extends Component {

    state = { ...elementNull }
    constructor(props) {
        super(props)
        

        this.infoElement = this.infoElement.bind(this)
        this.infoElementPopUp = this.infoElementPopUp.bind(this)
        this.infoElement = this.infoElement.bind(this)
        this.infoElementOut = this.infoElementOut.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }
    toggleInfo(){
        const displayInfo = this.state.displayInfo === 'none' ? '' : 'none'
        this.setState({ displayInfo })
    }
    infoElement(elements) {
        this.toggleInfo()
        this.setState({ elements })
    }
    infoElementOut() {
        const elements = {
            atomicNumber:null,
            element:null,
            elementName:null,
            type:null,
            family:null,
            period:null,
            displayInfo:"none"
        }
        this.setState({ elements })
    }
    closeModal(){
        
        this.setState({ ...elementNull })
    }
    toggleModal(){
        const displayModal = this.state.displayModal === 'none' ? '' : 'none'
        this.setState({ displayModal })
    }
    infoElementPopUp(elementModal) {
        this.toggleModal()
        this.setState({ elementModal })
    }
    render() {
        return (
            <div className='periodic-table-row'>
                <Modal elements={this.state.elementModal} display={this.state.elementModal.displayModal} close={this.closeModal} />
                <PeriodicTableInfo elements={this.state.elements} />
                {this.props.elements.map(element => callPrintElement(element, this.infoElement,this.infoElementOut, this.infoElementPopUp))}
            </div>
        )
    }
}