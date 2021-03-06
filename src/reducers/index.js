import { combineReducers } from 'redux'
import list from './list'
import mylist from './mylist'
import brands from './brands'
import breweries from './breweries'
import allBreweries from './allBreweries'
import myBreweries from './myBreweries'
import sakeYeasts from './sakeYeasts'
import prefectures from './prefectures'
import rices from './rices'
import sake from './sake'
import isLogin from './isLogin'
import glossary from './glossary'
import shoplist from './shoplist'

const app = combineReducers( {
  list, mylist, brands, breweries, allBreweries, myBreweries, sakeYeasts, prefectures, rices, sake, isLogin, glossary, shoplist
} )

export default app
