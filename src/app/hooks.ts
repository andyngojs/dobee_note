import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux/es/exports';
import {TypedUseSelectorHook} from 'react-redux/es/types';
import {RootState, AppDispatch} from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
