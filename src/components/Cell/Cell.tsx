import React from 'react';

interface CellProps {
    index: number;
    hasItems: boolean;
    clicked: boolean;
    onClick: (index: number) => void;
}

const Cell: React.FC<CellProps> = ({ index, hasItems, clicked, onClick,  }) => {
    return (
        <div
            className={`cell  ${clicked ? 'removed' : ''} ${hasItems ? 'item' : ''} `}
            onClick={() => onClick(index)}
        ></div>
    );
};

export default Cell;