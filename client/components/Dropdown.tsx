import { useAppSelector, useAppDispatch } from '@store/hooks';
import { selectSuggestionSortLabel } from '@store/suggestion';

import { Typography, ButtonGroup, Button, Collapse } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import CheckIcon from './icons/Check';

const useStyles = () => {
    const theme = useTheme();

    return {
        collapse: {
            position: 'absolute', top: '2.325rem', left: '4rem'
        },
        buttonGroup: {
            borderRadius: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
        },
        button: {
            backgroundColor: 'white',
            '&:hover': {
                backgroundColor: 'white',
                '& p': {
                    color: theme.palette.primary.main,
                },
            },
        },
        label: {
            whiteSpace: 'nowrap'
        },
    };
};

interface Action {
    payload: any,
    type: string,
};

interface Props {
    show: boolean,
    actions: Action[],
};

const Dropdown: React.FC<Props> = ({ show, actions }) => {
    const dispatch = useAppDispatch();
    const sortLabel = useAppSelector(selectSuggestionSortLabel);
    const styles = useStyles();

    const handleClick: React.MouseEventHandler<HTMLSpanElement> = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        // @ts-ignore 
        const selectedFilter: string = e.target.innerText;

        const action = actions.find(el => el.payload.label === selectedFilter);
        if (!action) {
            return;
        }

        dispatch(action);
    };

    return (
        <Collapse in={show} sx={ styles.collapse }>
            <ButtonGroup orientation='vertical' sx={ styles.buttonGroup }>
                {
                    actions.map((action, index) => {
                        const { label } = action.payload
                        const selected = label === sortLabel;

                        return (
                            <Button variant='outlined' endIcon={ selected ? <CheckIcon /> : null } onClick={ handleClick } key={ `sort_button_${index}` } sx={ styles.button }>
                                <Typography variant='body1' sx={ styles.label }>{ label }</Typography>
                            </Button>
                        );
                    })
                }
            </ButtonGroup>
        </Collapse>
    );
};

export default Dropdown;