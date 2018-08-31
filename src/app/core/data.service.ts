import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

import { RequestOptions } from '@core/core.model';

// HOST (API HOST) URL - according to environment
const hostUrl =
  environment.host && environment.host.length
    ? `${environment.host}${environment.contextRoot}`
    : `${location.origin}${environment.contextRoot}`;

// API Engine URLs
const apiUrl = `${hostUrl}${environment.api}`;

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Main (global) GET request method
   * @param url URL of service
   * @param params request params (URL params)
   */
  get<T>(url: string, params: object = {}, options: Partial<RequestOptions> = {}): Observable<T> {
    // update default request options
    const requestOptions = this.assignRequestOptions(options);

    // define request headers
    const headers = new HttpHeaders().set('Accept', requestOptions.accept);

    return this.httpClient.get<T>(this.composeUrl(apiUrl, url), {
      headers: headers,
      params: this.composeParams(params)
    });
  }

  /**
   * Load application file.
   * @param url URL of requested file (folder).
   */
  getFile<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(
      this.composeUrl(`${location.origin}${environment.contextRoot}${environment.assets}`, url)
    );
  }

  /**
   * Main (global) POST request method
   * @param url URL of service
   * @param body body of request
   * @param options request options
   */
  post<T>(url: string, body: object = {}, options: Partial<RequestOptions> = {}): Observable<T> {
    // assing body object to empty object
    body = Object.assign({}, body);

    // update default request options
    const requestOptions = this.assignRequestOptions(options);

    // define request headers
    const headers = new HttpHeaders()
      .set('Accept', requestOptions.accept)
      .set('Content-Type', requestOptions.contentType);

    return this.httpClient.post<T>(this.composeUrl(apiUrl, url), body, {
      headers: headers,
      params: options.params ? this.composeParams(options.params) : null
    });
  }

  /**
   * Main (global) PUT request method
   * @param url URL of service
   * @param body body of request
   * @param options request options
   */
  put<T>(url: string, body: object = {}, options: Partial<RequestOptions> = {}): Observable<T> {
    // assing body object to empty object
    body = Object.assign({}, body);

    // update default request options
    const requestOptions = this.assignRequestOptions(options);

    // define request headers
    const headers = new HttpHeaders()
      .set('Accept', requestOptions.accept)
      .set('Content-Type', requestOptions.contentType);

    return this.httpClient.put<T>(this.composeUrl(apiUrl, url), body, {
      headers: headers,
      params: options.params ? this.composeParams(options.params) : null
    });
  }

  /**
   * assign specific request options with default ones (and use specific if specified)
   * @param options object of possible request options
   */
  private assignRequestOptions(options: Partial<RequestOptions>): RequestOptions {
    return {
      accept: 'application/json, text/plain, */*',
      contentType: 'application/json',
      ...options
    };
  }

  /**
   * Compose request URL
   * @param basicUrl basic (like API) url
   * @param additionUrl specific (API) url addition like 'doSomething' (.../API_URL/doSomething)
   */
  private composeUrl(basicUrl: string, additionUrl?: string): string {
    // add URL addition if exists
    return additionUrl ? `${basicUrl}/${additionUrl}` : basicUrl;
  }

  /**
   * convert params in object map to angular HttpParams object
   * @param params url query params (in object) - needs to be serialized
   */
  private composeParams(params: object): HttpParams {
    return Object.getOwnPropertyNames(params).reduce((p, key) => p.set(key, params[key]), new HttpParams());
  }
}
