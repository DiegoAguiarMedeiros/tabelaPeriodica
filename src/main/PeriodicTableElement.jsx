import React from 'react'
import './PeriodicTableElement.css'

// eslint-disable-next-line
export default props => {
    let classes = 'periodic-table-element '
    classes += props.type === "noMetal" ? 'no-metal ' : ''
    classes += props.type === "nobleGases" ? 'noble-gases ' : ''
    classes += props.type === "alkaliMetals" ? 'alkali-metals ' : ''
    classes += props.type === "alkalineEarthMetals" ? 'alkaline-earth-metals ' : ''
    classes += props.type === "semiMetals" ? 'semi-metals ' : ''
    classes += props.type === "halogens" ? 'halogens ' : ''
    classes += props.type === "otherMetals" ? 'other-metals ' : ''
    classes += props.type === "transitionMetals" ? 'transition-metals ' : ''
    classes += props.type === "lanthanides" ? 'lanthanides lanthanides-position ' : ''
    classes += props.type === "actinides" ? 'actinides actinides-position ' : ''
    classes += props.family === 1 ? 'family-one ' : ''
    classes += props.family === 2 ? 'family-two ' : ''
    classes += props.family === 3 ? 'family-three ' : ''
    classes += props.family === 4 ? 'family-four ' : ''
    classes += props.family === 5 ? 'family-five ' : ''
    classes += props.family === 6 ? 'family-six ' : ''
    classes += props.family === 7 ? 'family-seven ' : ''
    classes += props.family === 8 ? 'family-eight ' : ''
    classes += props.family === 9 ? 'family-nine ' : ''
    classes += props.family === 10 ? 'family-ten ' : ''
    classes += props.family === 11 ? 'family-eleven ' : ''
    classes += props.family === 12 ? 'family-twelve ' : ''
    classes += props.family === 13 ? 'family-thirteen ' : ''
    classes += props.family === 14 ? 'family-fourteen ' : ''
    classes += props.family === 15 ? 'family-fiveteen ' : ''
    classes += props.family === 16 ? 'family-sixteen ' : ''
    classes += props.family === 17 ? 'family-seventeen ' : ''
    classes += props.family === 18 ? 'family-eighteen ' : ''
    classes += props.period === 1 ? 'period-one ' : ''
    classes += props.period === 2 ? 'period-two ' : ''
    classes += props.period === 3 ? 'period-three ' : ''
    classes += props.period === 4 ? 'period-four ' : ''
    classes += props.period === 5 ? 'period-five ' : ''
    classes += props.period === 6 ? 'period-six ' : ''
    classes += props.period === 7 ? 'period-seven ' : ''
    classes += props.period === 8 ? 'period-eight ' : ''
    return (
        <div id={props.atomicNumber} className={classes} onMouseEnter={e => props.hover && props.hover(props)} onClick={e => props.click && props.click(props)}>
            <div className='atomic-number'><small>{props.atomicNumber}</small></div>
            <div className='element-simbol'><h3>{props.element}</h3>
            <small>{props.elementName}</small></div>
                 </div >
    )
}