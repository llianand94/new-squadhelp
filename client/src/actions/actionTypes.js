const ACTION = {
  AUTH_ACTION_LOGIN: 'AUTH_ACTION_LOGIN',
  AUTH_ACTION_REGISTER: 'AUTH_ACTION_REGISTER',
  AUTH_ACTION_REQUEST: 'AUTH_ACTION_REQUEST',
  AUTH_ACTION_SUCCESS: 'AUTH_ACTION_SUCCESS',
  AUTH_ACTION_ERROR: 'AUTH_ACTION_ERROR',
  GET_USER_ACTION: 'GET_USER_ACTION',
  GET_USER_REQUEST: 'GET_USER_REQUEST',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_ERROR: 'GET_USER_ERROR',
  GET_DATA_FOR_CONTEST_ACTION: 'GET_DATA_FOR_CONTEST_ACTION',
  GET_DATA_FOR_CONTEST_ACTION_REQUEST: 'GET_DATA_FOR_CONTEST_ACTION_REQUEST',
  GET_DATA_FOR_CONTEST_ACTION_SUCCESS: 'GET_DATA_FOR_CONTEST_ACTION_SUCCESS',
  GET_DATA_FOR_CONTEST_ACTION_ERROR: 'GET_DATA_FOR_CONTEST_ACTION_ERROR',
  CLEAR_DATA_FOR_SELECTS: 'CLEAR_DATA_FOR_SELECTS',
  PAYMENT_ACTION: 'PAYMENT_ACTION',
  PAYMENT_ACTION_REQUEST: 'PAYMENT_ACTION_REQUEST',
  PAYMENT_ACTION_SUCCESS: 'PAYMENT_ACTION_SUCCESS',
  PAYMENT_ACTION_ERROR: 'PAYMENT_ACTION_ERROR',
  GET_CONTESTS_FOR_CUSTOMER: 'GET_CONTEST_FOR_CUSTOMER',
  GET_CONTESTS_FOR_CREATIVE: 'GET_CONTEST_FOR_CREATIVE',
  GET_CONTESTS_ACTION_REQUEST: 'GET_CONTESTS_ACTION_REQUEST',
  GET_CONTESTS_ACTION_SUCCESS: 'GET_CONTESTS_ACTION_SUCCESS',
  GET_CONTESTS_ACTION_ERROR: 'GET_CONTESTS_ACTION_ERROR',
  GET_CONTEST_BY_ID_ACTION: 'GET_CONTEST_BY_ID',
  GET_CONTEST_BY_ID_REQUEST: 'GET_CONTEST_BY_ID_REQUEST',
  GET_CONTEST_BY_ID_SUCCESS: 'GET_CONTEST_BY_ID_SUCCESS',
  GET_CONTEST_BY_ID_ERROR: 'GET_CONTEST_BY_ID_ERROR',
  SET_OFFER_ACTION: 'SET_OFFER_ACTION',
  SET_OFFER_REQUEST: 'SET_OFFER_REQUEST',
  SET_OFFER_SUCCESS: 'SET_OFFER_SUCCESS',
  CHANGE_MARK_ACTION: 'CHANGE_MARK_ACTION',
  CHANGE_MARK_SUCCESS: 'CHANGE_MARK_SUCCESS',
  CHANGE_MARK_ERROR: 'CHANGE_MARK_ERROR',
  ADD_NEW_OFFER_TO_STORE: 'ADD_NEW_OFFER_TO_STORE',
  SET_OFFER_ERROR: 'SET_OFFER_ERROR',
  SET_OFFER_STATUS_ACTION: 'SET_OFFER_STATUS_ACTION',
  SET_NEW_OFFER_STATUS_REQUEST: 'SET_NEW_OFFER_STATUS_REQUEST',
  SET_NEW_OFFER_STATUS_SUCCESS: 'SET_NEW_OFFER_STATUS_SUCCESS',
  SET_NEW_OFFER_STATUS_ERROR: 'SET_NEW_OFFER_STATUS_ERROR',
  CHANGE_STORE_FOR_STATUS: 'CHANGE_STORE_FOR_STATUS',
  DOWNLOAD_CONTEST_FILE_ACTION: 'DOWNLOAD_CONTEST_FILE_ACTION',
  DOWNLOAD_CONTEST_FILE_REQUEST: 'DOWNLOAD_CONTEST_FILE_REQUEST',
  DOWNLOAD_CONTEST_FILE_SUCCESS: 'DOWNLOAD_CONTEST_FILE_SUCCESS',
  DOWNLOAD_CONTEST_FILE_ERROR: 'DOWNLOAD_CONTEST_FILE_ERROR',
  UPDATE_CONTEST_ACTION: 'UPDATE_CONTEST_ACTION',
  UPDATE_CONTEST_REQUEST: 'UPDATE_CONTEST_REQUEST',
  UPDATE_CONTEST_SUCCESS: 'UPDATE_CONTEST_UPDATE',
  UPDATE_CONTEST_ERROR: 'UPDATE_CONTEST_ERROR',
  UPDATE_STORE_AFTER_UPDATE_CONTEST: 'UPDATE_STORE_AFTER_UPDATE_CONTEST',
  SELECT_BUNDLE_ACTION: 'SELECT_BUNDLE_ACTION',
  CLEAR_BUNDLE_ACTION: 'CLEAR_BUNDLE_ACTION',
  SAVE_TO_STORE_NAME_CONTEST: 'SAVE_TO_STORE_NAME_CONTEST',
  SAVE_TO_STORE_LOGO_CONTEST: 'SAVE_TO_STORE_LOGO_CONTEST',
  SAVE_TO_STORE_TAGLINE_CONTEST: 'SAVE_TO_STORE_TAGLINE_CONTEST',
  DELETE_FROM_STORE_CONTESTS: 'DELETE_FROM_STORE_CONTEST',
  AUTH_ACTION_CLEAR_ERROR: 'AUTH_ACTION_CLEAR_ERROR',
  CLEAR_USER_STORE: 'CLEAR_USER_STORE',
  ADD_OFFER_ERROR: 'ADD_OFFER_ERROR',
  SET_OFFER_STATUS_ERROR: 'SET_OFFER_STATUS_ERROR',
  CLEAR_ADD_OFFER_ERROR: 'CLEAR_ADD_OFFER_ERROR',
  CLEAR_CHANGE_MARK_ERROR: 'CLEAR_CHANGE_MARK_ERROR',
  CLEAR_SET_OFFER_STATUS_ERROR: 'CLEAR_SET_OFFER_STATUS_ERROR',
  CLEAR_CONTEST_BY_ID_ERROR: 'CLEAR_CONTEST_BY_ID_ERROR',
  SAVE_CONTEST_TO_STORE: 'SAVE_CONTEST_TO_STORE',
  CLEAR_CONTEST_STORE: 'CLEAR_CONTEST_STORE',
  CLEAR_PAYMENT_STORE: 'CLEAR_PAYMENT_STORE',
  CLEAR_PREFERENCE: 'CLEAR_PREFERENCE',
  UPDATE_USER_DATA_SUCCESS: 'UPDATE_USER_DATA_SUCCESS',
  UPDATE_USER_DATA_ERROR: 'UPDATE_USER_DATA_ERROR',
  UPDATE_USER_DATA: 'UPDATE_USER_DATA',
  CLEAR_USER_UPDATE_STATUS: 'CLEAR_USER_UPDATE_STATUS',
  CASHOUT_ACTION: 'CASHOUT_ACTION',
  CLEAR_CONTESTS_LIST: 'CLEAR_CONTESTS_LIST',
  ONLY_FOR_NOT_AUTHORIZE_USERS: 'ONLY_FOR_NOT_AUTHORIZE_USERS',
  HEADER_REQUEST_AUTHORIZE: 'HEADER_REQUEST_AUTHORIZE',
  AUTH_ACTION_CLEAR: 'AUTH_ACTION_CLEAR',
  GET_PREVIEW_CHAT_ASYNC: 'GET_PREVIEW_CHAT_ASYNC',
  GET_PREVIEW_CHAT: 'GET_PREVIEW_CHAT',
  GET_PREVIEW_CHAT_ERROR: 'GET_PREVIEW_CHAT_ERROR',
  BACK_TO_DIALOG_LIST: 'BACK_TO_DIALOG_LIST',
  GO_TO_EXPANDED_DIALOG: 'GO_TO_EXPANDED_DIALOG',
  GET_DIALOG_MESSAGES_ASYNC: 'GET_DIALOG_MESSAGES_ASYNC',
  GET_DIALOG_MESSAGES: 'GET_DIALOG_MESSAGES',
  GET_DIALOG_MESSAGES_ERROR: 'GET_DIALOG_MESSAGES_ERROR',
  SEND_MESSAGE_ACTION: 'SEND_MESSAGE_ACTION',
  SEND_MESSAGE: 'SEND_MESSAGE',
  SEND_MESSAGE_ERROR: 'SEND_MESSAGE_ERROR',
  CLEAR_MESSAGE_LIST: 'CLEAR_MESSAGE_LIST',
  CHANGE_CHAT_SHOW: 'CHANGE_CHAT_SHOW',
  SET_NEW_CUSTOMER_FILTER: 'SET_NEW_CUSTOMER_FILTER',
  SET_NEW_CREATOR_FILTER: 'SET_NEW_CREATOR_FILTER',
  SET_CHAT_PREVIEW_MODE: 'SET_CHAT_PREVIEW_MODE',
  SET_CHAT_FAVORITE_FLAG: 'SET_CHAT_FAVORITE_FLAG',
  CHANGE_CHAT_FAVORITE: 'CHANGE_CHAT_FAVORITE',
  SET_CHAT_FAVORITE_ERROR: 'SET_CHAT_FAVORITE_ERROR',
  SET_CHAT_BLOCK_FLAG: 'SET_CHAT_BLOCK_FLAG',
  CHANGE_CHAT_BLOCK: 'CHANGE_CHAT_BLOCK',
  SET_CHAT_BLOCK_ERROR: 'SET_CHAT_BLOCK_ERROR',
  GET_CATALOG_LIST_ASYNC: 'GET_CATALOG_LIST_ASYNC',
  RECEIVE_CATALOG_LIST: 'RECEIVE_CATALOG_LIST',
  RECEIVE_CATALOG_LIST_ERROR: 'RECEIVE_CATALOG_LIST_ERROR',
  CHANGE_SHOW_MODE_CATALOG: 'CHANGE_SHOW_MODE_CATALOG',
  CHANGE_TYPE_ADDING_CHAT_IN_CATALOG: 'CHANGE_TYPE_ADDING_CHAT_IN_CATALOG',
  CHANGE_SHOW_ADD_CHAT_TO_CATALOG: 'CHANGE_SHOW_ADD_CHAT_TO_CATALOG',
  ADD_CHAT_TO_CATALOG_ASYNC: 'ADD_CHAT_TO_CATALOG_ASYNC',
  ADD_CHAT_TO_CATALOG: 'ADD_CHAT_TO_CATALOG',
  ADD_CHAT_TO_CATALOG_ERROR: 'ADD_CHAT_TO_CATALOG_ERROR',
  CREATE_CATALOG_REQUEST: 'CREATE_CATALOG_REQUEST',
  CREATE_CATALOG_ERROR: 'CREATE_CATALOG_ERROR',
  CREATE_CATALOG_SUCCESS: 'CREATE_CATALOG_SUCCESS',
  DELETE_CATALOG_REQUEST: 'DELETE_CATALOG_REQUEST',
  DELETE_CATALOG_SUCCESS: 'DELETE_CATALOG_SUCCESS',
  DELETE_CATALOG_ERROR: 'DELETE_CATALOG_ERROR',
  REMOVE_CHAT_FROM_CATALOG_REQUEST: 'REMOVE_CHAT_FROM_CATALOG_REQUEST',
  REMOVE_CHAT_FROM_CATALOG_SUCCESS: 'REMOVE_CHAT_FROM_CATALOG_SUCCESS',
  REMOVE_CHAT_FROM_CATALOG_ERROR: 'REMOVE_CHAT_FROM_CATALOG_ERROR',
  CHANGE_RENAME_CATALOG_MODE: 'CHANGE_RENAME_CATALOG_MODE',
  CHANGE_CATALOG_NAME_REQUEST: 'CHANGE_CATALOG_NAME_REQUEST',
  CHANGE_CATALOG_NAME_ERROR: 'CHANGE_CATALOG_NAME_ERROR',
  CHANGE_CATALOG_NAME_SUCCESS: 'CHANGE_CATALOG_NAME_SUCCESS',
  CHANGE_EDIT_CONTEST: 'CHANGE_EDIT_CONTEST',
  CHANGE_CONTEST_VIEW_MODE: 'CHANGE_CONTEST_VIEW_MODE',
  CHANGE_SHOW_IMAGE: 'CHANGE_SHOW_IMAGE',
  CHANGE_FOCUS_ON_CARD: 'CHANGE_FOCUS_ON_CARD',
  CHANGE_PROFILE_MODE_VIEW: 'CHANGE_PROFILE_MODE_VIEW',
  CHANGE_EDIT_MODE_ON_USER_PROFILE: 'CHANGE_EDIT_MODE_ON_USER_PROFILE',
  CLEAR_UPDATE_CONTEST_STORE: 'CLEAR_UPDATE_CONTEST_STORE',
  CLEAR_USER_ERROR: 'CLEAR_USER_ERROR',
  CLEAR_CHAT_ERROR: 'CLEAR_CHAT_ERROR',
  CHANGE_SHOW_MODAL: 'CHANGE_SHOW_MODAL',
};
export default ACTION;
