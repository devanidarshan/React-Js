import {createStore} from 'redux'
import {reducer } from '../Redux/Cake/Reducer'

const store = createStore (reducer)

export default store