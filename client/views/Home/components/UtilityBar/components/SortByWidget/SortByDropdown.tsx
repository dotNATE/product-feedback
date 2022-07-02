import { useAppSelector, useAppDispatch } from '../../../../../../store/hooks';
import { selectSuggestionSortLabel, setSuggestionSort } from '../../../../../../store/suggestion';
import { Typography, ButtonGroup, Button, Collapse } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CheckIcon from '../../../../../../components/icons/Check';
import { SuggestionType } from '../../../SuggestionList/Suggestion';

type DropdownProps = {
    show: boolean,
};

const SortByDropdown: React.FC<DropdownProps> = ({ show }) => {
    const dispatch = useAppDispatch();
    const sortLabel = useAppSelector(selectSuggestionSortLabel);
    const theme = useTheme();

    console.log('theme: ', theme);
    console.log('theme.palette.primary.main: ', theme.palette.primary.main);

    const leastUpvotes = setSuggestionSort({
        sort: (a: SuggestionType, b: SuggestionType) => a.upvotes - b.upvotes,
        label: "Least Upvotes",
    });

    const mostUpvotes = setSuggestionSort({
        sort: (a: SuggestionType, b: SuggestionType) => b.upvotes - a.upvotes,
        label: "Most Upvotes",
    });

    const actions = [
        mostUpvotes,
        leastUpvotes,
    ];

    const handleClick: React.MouseEventHandler<HTMLSpanElement> = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        // @ts-ignore 
        const selectedFilter: string = e.target.innerText;

        const action = actions.find(el => el.payload.label === selectedFilter);
        if (!action) {
            return;
        }

        dispatch(action);
    };

    const buttonStyles = {
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
            '& p': {
                color: theme.palette.primary.main,
            },
        },
    };

    return (
        <Collapse in={show} sx={{ position: 'absolute', top: '2.325rem', left: '4rem' }}>
            <ButtonGroup orientation='vertical' sx={{ borderRadius: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
                {
                    actions.map((action, index) => {
                        const { label } = action.payload
                        const selected = label === sortLabel;

                        return (
                            <Button variant='outlined' endIcon={ selected ? <CheckIcon /> : null } onClick={ handleClick } key={ `sort_button_${index}` } sx={buttonStyles}>
                                <Typography variant='body1' sx={{ whiteSpace: 'nowrap' }}>{ label }</Typography>
                            </Button>
                        );
                    })
                }
            </ButtonGroup>
        </Collapse>
    );
};

export default SortByDropdown;