import React from 'react';

export default function Loader() {
    const cells = 4;

    const renderCells = () => {
        const cellElements = [];
        for (let i = 0; i < cells; i++) {
            for (let j = 0; j < cells; j++) {
                const className = `cell d-${i + j}`;
                cellElements.push(<div className={className} key={`${i}-${j}`} />);
            }
        }
        return cellElements;
    };

    return (
        <div className="mosaic-loader">
            {renderCells()}
        </div>
    );
}
