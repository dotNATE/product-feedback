import styled from "@emotion/styled";

import { useState } from "react";
import { useAppSelector } from '@store/hooks';
import { selectSuggestionSortLabel } from '@store/suggestion';

import { Typography, ClickAwayListener } from "@mui/material";

import ChevronDownIcon from "@components/icons/ChevronDownIcon";
import SortByDropdown from "./SortByDropdown";

const SortByWidget: React.FC = () => {
    const sortLabel = useAppSelector(selectSuggestionSortLabel);
    const [selectSortOpen, setSelectSortOpen] = useState(false);

    const FlexRow2 = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5rem;
        position: relative;
    `;

    const FlexRow3 = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5rem;
        cursor: pointer;
    `;

    const handleClickAway = () => {
        setSelectSortOpen(false);
    };

    return (
        <FlexRow2>
            <Typography variant='subtitle2' sx={{ color: 'white' }} onClick={() => setSelectSortOpen(false)}>Sort by :</Typography>
            <FlexRow3 onClick={() => setSelectSortOpen(true)}>
                <Typography variant='subtitle2' sx={{ color: 'white', fontWeight: '600' }}>{ sortLabel }</Typography>
                <ChevronDownIcon color='white' />
            </FlexRow3>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div>
                    <SortByDropdown show={selectSortOpen} />
                </div>
            </ClickAwayListener>
        </FlexRow2>
    );
};

export default SortByWidget;