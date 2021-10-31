import { createStore } from '@reduxjs/toolkit';
import { calcReducer } from './components/calcReducer';

const store = createStore(calcReducer);

export default store
