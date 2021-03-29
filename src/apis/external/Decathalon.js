import axios from 'axios'
import React from 'react';
import {showSnack} from 'utils/snackbar'

const SportsApiInstance = axios.create({
  baseURL: 'https://sports.api.decathlon.com',
  timeout: 10000,
  parse: true
});

export const statusCodes = {
  400: "Bad Request -- Your request is invalid - check the JSON format of your request.",
  401: "Unauthorized -- There's a problem with your credentials.",
  404: "Not Found -- We can't find the data you're looking for.",
  422: "Unprocessable Entity -- There was a validation error with your request.",
  500: "Internal Server Error -- We had a problem with our server. Try again later."
}

SportsApiInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  showSnack('error', statusCodes[error.response.status])
  return Promise.reject(error.message);
})

/** 
 * For dettailed api information cisit this url:
 * https://developers.decathlon.com/sports/
*/

export const GetSportsList = async(tag='', has_icon=false, parents_only=false, has_decathalon_id=false,) => {
  try {
    const resp = await SportsApiInstance.get('/sports', {
      params: {
        has_icon,
        parents_only,
        has_decathalon_id,
        tag
      }
    });
    console.log(resp.config.params)
    return resp
  } 
  catch(error) {
   return null
  }
}

export const GetASingleSport = async(id) => {
  try {
    const resp = await SportsApiInstance.get(`/sports/${id}`)
    return resp
  }
  catch(error) {
    return null
  }
}

export const IntelligentSearch = async(query, coordinates, source, has_icon, parents_only, strict, has_decathalon_id) => {
  try {
    const resp = await SportsApiInstance.get(`/search/${query}`, {
      params: {
        coordinates,
        source,
        has_icon,
        parents_only,
        strict,
        has_decathalon_id,
        tag
      }
    })
    return resp
  }
  catch(error) {
    return null
  }
}

export const LocationBasedRecommendation = async(coordinates, source, has_icon, parents_only) => {
  try {
    const resp = await SportsApiInstance.get(`/recommendations/geolocation`, {
      params: {
        coordinates,
        source,
        has_icon,
        parents_only,
      }
    })
    return resp
  }
  catch(error) {
    return null
  }
}

export const SportsGroup = async() => {
  try {
    const resp = await SportsApiInstance.get(`/groups`)
    return resp
  }
  catch(error) {
    return null
  }
}

// Deprecation soon
export const GetASportGroup = async(slug) => {
  try {
    const resp = await SportsApiInstance.get(`/groups/${slug}`)
    return resp
  }
  catch(error) {
    return null
  }
}