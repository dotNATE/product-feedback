import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useState } from "react";
import ChevronDownIcon from "../../../../../../components/icons/ChevronDownIcon";
import SortByDropdown from "./SortByDropdown";
import { useAppSelector } from '../../../../../../store/hooks';
import { selectSuggestionSortLabel } from '../../../../../../store/suggestion';

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

    return (
        <FlexRow2>
            <Typography variant='subtitle2' sx={{ color: 'white' }}>Sort by :</Typography>
            <FlexRow3 onClick={() => setSelectSortOpen(true)}>
                <Typography variant='subtitle2' sx={{ color: 'white', fontWeight: '600' }}>{ sortLabel }</Typography>
                <ChevronDownIcon color='white' />
            </FlexRow3>
            <SortByDropdown show={selectSortOpen} />
        </FlexRow2>
    );
};

export default SortByWidget;