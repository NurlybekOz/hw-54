import React from 'react';
import Cell from "../Cell/Cell.tsx";


interface FlexCellsProps {
    cells: { hasItems: boolean; clicked: boolean }[];
    onCellClick: (index: number) => void;
}

const FlexCells: React.FC<FlexCellsProps> = ({ cells, onCellClick}) => {
    return (
        <div className="flex-cells">
            {cells.map((cell, index) => (
                <Cell
                    key={index}
                    index={index}
                    hasItems={cell.hasItems}
                    clicked={cell.clicked}
                    onClick={onCellClick}
                ></Cell>

            ))}
        </div>
    );
};

export default FlexCells;