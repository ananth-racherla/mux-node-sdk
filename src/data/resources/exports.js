/*!
 * Mux Exports
 * Copyright(c) 2018 Mux Inc.
 */

const api = require('../../utils/api');

/**
 * @private Base exports path for the Mux API
 * */
const PATH = '/data/v1/exports';

/**
 * Exports Class - Provides access to the Mux Data Exports API
 *
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // Lists the available video view exports along with URLs to retrieve them
 * Data.exports.list();
 */
class Exports {
  /**
   * @ignore
   * Exports Constructor
   *
   * @param {string} accessToken - Mux API Access Token
   * @param {string} secret - Mux API Access Token secret
   * @constructor
   */
  constructor(accessToken, secret) {
    if (typeof accessToken === 'undefined') {
      throw new Error('API Access Token must be provided.');
    }

    if (typeof secret === 'undefined') {
      throw new Error('API secret key must be provided');
    }

    /**
     *  @ignore
     *  @type {Object} requestOptions - The HTTP request options for Mux Assets
     *  @property {string} requestOptions.auth.username - HTTP basic auth username (access token)
     *  @property {string} requestOptions.auth.password - HTTP basic auth password (secret)
     * */
    this.requestOptions = {
      auth: {
        username: accessToken,
        password: secret,
      },
    };
  }

  /**
   * Lists the available video view exports along with URLs to retrieve them
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Lists the available video view exports along with URLs to retrieve them
   * Data.exports.list();
   *
   * @see https://api-docs.mux.com/#export-get
   */
  list() {
    return api.get(PATH, {}, this.requestOptions);
  }
}

module.exports = Exports;
