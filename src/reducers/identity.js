/**
 * Created by yinchong on 2018/11/2
 */

'use strict';

import {
  LOAD_IDENTITY,

  CREATE_IDENTITY_SUCCESS,
  CREATE_IDENTITY_FAIL,
  CREATE_KEYSTORE_LOADING,

  DELETE_IDENTITY_SUCCESS,
  DELETE_IDENTITY_FAIL,

  IMPORT_IDENTITY_SUCCESS,
  IMPORT_IDENTITY_FAIL,
  IMPORT_IDENTITY_TYPE,
  IMPORT_KEYSTORE_LOADING,

  EXPORT_IDENTITY_SUCCESS,
  EXPORT_IDENTITY_FAIL,
  EXPORT_KEYSTORE_LOADING,

  LOGOUT_IDENTITY_SUCCESS,
  LOGOUT_IDENTITY_FAIL,

  SWITCH_IDENTITY,
  VIEW_IDENTITY,

  GET_IDENTITY_BALANCE,
  GET_PROFILE_BALANCE,
  QUERY_PROFILE_BALANCE_LOADING,
  QUERY_IDENTITY_BALANCE_LOADING,

  UPDATE_IDENTITY_ALIAS,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_LOADING
} from "./../actions/actionTypes"

const initIdentities = {
  importType: 0,   //0 == private key,  1 == keystore,
  currentViewIdentity: {},
  selectedIdentity: null,
  allIdentities: [],
};

export default function identity(state = initIdentities, action) {
  switch (action.type) {
    case LOAD_IDENTITY:

    case CREATE_IDENTITY_SUCCESS:
    case CREATE_IDENTITY_FAIL:
    case CREATE_KEYSTORE_LOADING:

    case DELETE_IDENTITY_FAIL:
    case DELETE_IDENTITY_SUCCESS:

    case IMPORT_IDENTITY_SUCCESS:
    case IMPORT_IDENTITY_FAIL:
    case IMPORT_KEYSTORE_LOADING:
    case IMPORT_IDENTITY_TYPE:

    case EXPORT_IDENTITY_SUCCESS:
    case EXPORT_IDENTITY_FAIL:
    case EXPORT_KEYSTORE_LOADING:

    case SWITCH_IDENTITY:
    case VIEW_IDENTITY:

    case LOGOUT_IDENTITY_SUCCESS:
    case LOGOUT_IDENTITY_FAIL:

    case UPDATE_IDENTITY_ALIAS:
    case CHANGE_PASSWORD_SUCCESS:
    case CHANGE_PASSWORD_FAIL:

    case GET_IDENTITY_BALANCE:
    case GET_PROFILE_BALANCE:

    case QUERY_PROFILE_BALANCE_LOADING:
    case QUERY_IDENTITY_BALANCE_LOADING:
    case CHANGE_PASSWORD_LOADING:
      return Object.assign({}, state, action);

    default:
      return Object.assign({}, state, action);
  }
}