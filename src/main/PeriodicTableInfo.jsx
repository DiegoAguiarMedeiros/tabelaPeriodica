import React from 'react'
import './PeriodicTableInfo.css'

// eslint-disable-next-line
export default props => {
    console.log(props)
    let classes = props.elements.atomicNumber === null ? 'd-none ' : ''
    let classesElement = 'periodic-table-element-info '
    classesElement += props.elements.type === "noMetal" ? 'no-metal ' : ''
    classesElement += props.elements.type === "nobleGases" ? 'noble-gases ' : ''
    classesElement += props.elements.type === "alkaliMetals" ? 'alkali-metals ' : ''
    classesElement += props.elements.type === "alkalineEarthMetals" ? 'alkaline-earth-metals ' : ''
    classesElement += props.elements.type === "semiMetals" ? 'semi-metals ' : ''
    classesElement += props.elements.type === "halogens" ? 'halogens ' : ''
    classesElement += props.elements.type === "otherMetals" ? 'other-metals ' : ''
    classesElement += props.elements.type === "transitionMetals" ? 'transition-metals ' : ''
    classesElement += props.elements.type === "lanthanides" ? 'lanthanides ' : ''
    classesElement += props.elements.type === "actinides" ? 'actinides ' : ''
    classes += 'info'
    return (
        <div className={classes}>
            <div className={classesElement}>
                <div className='atomic-number-info'><small>{props.elements.atomicNumber}</small></div>
                <div className='element-simbol-info'><h1>{props.elements.element}</h1>
                    <small>{props.elements.elementName}</small>
                </div>
            </div >
        </div>
    )
}