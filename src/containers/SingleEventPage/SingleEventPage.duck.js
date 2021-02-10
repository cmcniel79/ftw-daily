import { storableError } from '../../util/errors';
import { addMarketplaceEntities } from '../../ducks/marketplaceData.duck';

import fetch from 'cross-fetch';

const eventsURL = " https://yxcapgxgcj.execute-api.us-west-1.amazonaws.com/prd/events";

// ================ Action types ================ //

export const EVENT_DETAILS_REQUEST = 'app/SingleEventPage/EVENT_DETAILS_REQUEST';
export const EVENT_DETAILS_SUCCESS = 'app/SingleEventPage/EVENT_DETAILS_SUCCESS';
export const EVENT_DETAILS_ERROR = 'app/SingleEventPage/EVENT_DETAILS_ERROR';

export const SEARCH_LISTINGS_REQUEST = 'app/SingleEventPage/SEARCH_LISTINGS_REQUEST';
export const SEARCH_LISTINGS_SUCCESS = 'app/SingleEventPage/SEARCH_LISTINGS_SUCCESS';
export const SEARCH_LISTINGS_ERROR = 'app/SingleEventPage/SEARCH_LISTINGS_ERROR';

// ================ Reducer ================ //

const initialState = {
  eventInfoInProgress: false,
  eventDetails: null,
  eventInfoError: null,
  searchListingsInProgress: false,
  searchListingsError: null,
  currentPageResultIds: [],
  pagination: null,
};

const resultIds = data => data.data.map(l => l.id);

const SingleEventPageReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {

    case EVENT_DETAILS_REQUEST:
      return { ...state, eventInfoInProgress: true };
    case EVENT_DETAILS_SUCCESS:
      return { ...state, eventInfoInProgress: false, eventDetails: payload };
    case EVENT_DETAILS_ERROR:
      return { ...state, eventInfoInProgress: false, eventInfoError: payload};

    case SEARCH_LISTINGS_REQUEST:
      return { ...state, searchListingsInProgress: true, searchListingsError: null };
    case SEARCH_LISTINGS_SUCCESS:
      return { ...state, currentPageResultIds: resultIds(payload.data), pagination: payload.data.meta, searchListingsInProgress: false };
    case SEARCH_LISTINGS_ERROR:
      // eslint-disable-next-line no-console
      return { ...state, searchListingsInProgress: false, searchListingsError: payload };

    default:
      return state;
  }
};

export default SingleEventPageReducer;

// ================ Action creators ================ //

// Event details
export const eventDetailsRequest = () => ({ type: EVENT_DETAILS_REQUEST, payload: {} });
export const eventDetailsSuccess = data => ({ type: EVENT_DETAILS_SUCCESS, payload: data });
export const eventDetailsError = error => ({ type: EVENT_DETAILS_ERROR, payload: error, error: true });

export const searchListingsRequest = searchParams => ({ type: SEARCH_LISTINGS_REQUEST, payload: { searchParams } });
export const searchListingsSuccess = response => ({ type: SEARCH_LISTINGS_SUCCESS, payload: { data: response.data } });
export const searchListingsError = e => ({ type: SEARCH_LISTINGS_ERROR, error: true, payload: e });


export const searchListings = (searchParams, id) => (dispatch, getState, sdk) => {
  dispatch(searchListingsRequest(searchParams));
  const { perPage, sort, keywords, ...rest } = searchParams;
  const params = {
    ...rest,
    per_page: perPage,
    meta_ranking: "0,",
    meta_events: id,
    sort: "-meta_ranking"
  };
  return sdk.listings
    .query(params)
    .then(response => {
      dispatch(addMarketplaceEntities(response));
      dispatch(searchListingsSuccess(response));
      return response;
    })
    .catch(e => {
      dispatch(searchListingsError(storableError(e)));
      throw e;
    });
};

const fetchEventDetails = (hostUUID) => (dispatch, getState, sdk) => {
  dispatch(eventDetailsRequest());
  const options = {
    method: 'GET',
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
      // "X-Api-Key": KEY,
    }
  }
  fetch(eventsURL + "?uuid=" + hostUUID, options)
    .then(response => response.json())
    .then((res) => dispatch(eventDetailsSuccess(res.body[0][0])))
    .catch(() => dispatch(eventDetailsError("Could Not Get Event Details")));
}

export const loadData = (id) => (dispatch, getState, sdk) => {
  return Promise.all([
    dispatch(fetchEventDetails(id)),
  ]);
};