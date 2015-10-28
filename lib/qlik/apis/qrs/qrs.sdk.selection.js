var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../../core').Core;
var base = require('../../base').Base;

module.exports = function(options) { 
return {
/**
 * {@link qrs.md|See parent documentation}
 * @namespace
 */
selection: {
/**
 * @namespace
 * @memberof selection
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}
 * This method is generated
 *
 * @memberof selection.id
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).delete().then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * @namespace
 * @memberof selection.id
 */
app: {
/**
 * @namespace
 * @memberof selection.id.app
 */
content: {
/**
 * @namespace
 * @memberof selection.id.app.content
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/content/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.app.content.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.content.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/content/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app.content
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/content/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is manual
 *
 * @memberof selection.id.app.content.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.content.full.get(filter, orderby, appendprivileges).then(function(Array.<AppContent>) {
 * 	console.log(Array.<AppContent>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppContent>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/content/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app.content
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/content/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is manual
 *
 * @memberof selection.id.app.content.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.content.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/content/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app.content
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/content/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is manual
 *
 * @memberof selection.id.app.content.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.content.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/content/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/content?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is manual
 *
 * @memberof selection.id.app.content
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.content.get(filter, orderby, appendprivileges).then(function(Array.<AppContent>) {
 * 	console.log(Array.<AppContent>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppContent>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/content' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.app.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app
 */
datasegment: {
/**
 * @namespace
 * @memberof selection.id.app.datasegment
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/datasegment/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.app.datasegment.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.datasegment.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/datasegment/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app.datasegment
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/datasegment/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.app.datasegment.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.datasegment.full.get(filter, orderby, appendprivileges).then(function(Array.<AppDataSegment>) {
 * 	console.log(Array.<AppDataSegment>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppDataSegment>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/datasegment/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app.datasegment
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/datasegment/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.app.datasegment.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.datasegment.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/datasegment/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app.datasegment
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/datasegment/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.app.datasegment.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.datasegment.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/datasegment/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/datasegment?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.app.datasegment
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.datasegment.get(filter, orderby, appendprivileges).then(function(Array.<AppDataSegment>) {
 * 	console.log(Array.<AppDataSegment>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppDataSegment>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/datasegment' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.app.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.full.get(filter, orderby, appendprivileges).then(function(Array.<App>) {
 * 	console.log(Array.<App>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<App>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app
 */
internal: {
/**
 * @namespace
 * @memberof selection.id.app.internal
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/internal/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.app.internal.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.internal.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/internal/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app.internal
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/internal/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.app.internal.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.internal.full.get(filter, orderby, appendprivileges).then(function(Array.<AppInternal>) {
 * 	console.log(Array.<AppInternal>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppInternal>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/internal/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app.internal
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/internal/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.app.internal.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.internal.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/internal/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app.internal
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/internal/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.app.internal.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.internal.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/internal/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/internal?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.app.internal
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.internal.get(filter, orderby, appendprivileges).then(function(Array.<AppInternal>) {
 * 	console.log(Array.<AppInternal>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppInternal>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/internal' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app
 */
object: {
/**
 * @namespace
 * @memberof selection.id.app.object
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/object/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.app.object.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.object.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/object/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app.object
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/object/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.app.object.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.object.full.get(filter, orderby, appendprivileges).then(function(Array.<AppObject>) {
 * 	console.log(Array.<AppObject>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppObject>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/object/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app.object
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/object/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.app.object.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.object.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/object/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/object/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.app.object.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.object.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/object/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app.object
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/object/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.app.object.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.object.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/object/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/object?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.app.object
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.object.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/object' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/object?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.app.object
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.object.get(filter, orderby, appendprivileges).then(function(Array.<AppObject>) {
 * 	console.log(Array.<AppObject>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppObject>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/object' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.app.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.app.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.app
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.app.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app?filter={filter}
 * This method is manual
 *
 * @memberof selection.id.app
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/app?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.app
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).app.get(filter, orderby, appendprivileges).then(function(Array.<App>) {
 * 	console.log(Array.<App>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<App>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/app' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
appavailability: {
/**
 * @namespace
 * @memberof selection.id.appavailability
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appavailability/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.appavailability.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appavailability.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appavailability/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.appavailability
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appavailability/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.appavailability.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appavailability.full.get(filter, orderby, appendprivileges).then(function(Array.<AppAvailability>) {
 * 	console.log(Array.<AppAvailability>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppAvailability>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appavailability/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.appavailability
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appavailability/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.appavailability.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appavailability.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appavailability/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.appavailability
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appavailability/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.appavailability.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appavailability.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appavailability/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appavailability?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.appavailability
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appavailability.get(filter, orderby, appendprivileges).then(function(Array.<AppAvailability>) {
 * 	console.log(Array.<AppAvailability>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppAvailability>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appavailability' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
appcomponent: {
/**
 * @namespace
 * @memberof selection.id.appcomponent
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appcomponent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.appcomponent.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appcomponent.full.get(filter, orderby, appendprivileges).then(function(Array.<IAppComponent>) {
 * 	console.log(Array.<IAppComponent>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<IAppComponent>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appcomponent/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appcomponent?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.appcomponent
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appcomponent.get(filter, orderby, appendprivileges).then(function(Array.<IAppComponent>) {
 * 	console.log(Array.<IAppComponent>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<IAppComponent>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appcomponent' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
appcontentquota: {
/**
 * @namespace
 * @memberof selection.id.appcontentquota
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appcontentquota/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.appcontentquota.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appcontentquota.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appcontentquota/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.appcontentquota
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appcontentquota/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.appcontentquota.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appcontentquota.full.get(filter, orderby, appendprivileges).then(function(Array.<AppContentQuota>) {
 * 	console.log(Array.<AppContentQuota>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppContentQuota>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appcontentquota/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.appcontentquota
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appcontentquota/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.appcontentquota.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appcontentquota.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appcontentquota/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appcontentquota/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.appcontentquota.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appcontentquota.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appcontentquota/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.appcontentquota
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appcontentquota/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.appcontentquota.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appcontentquota.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appcontentquota/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appcontentquota?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.appcontentquota
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appcontentquota.get(filter, orderby, appendprivileges).then(function(Array.<AppContentQuota>) {
 * 	console.log(Array.<AppContentQuota>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppContentQuota>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appcontentquota' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
appseedinfo: {
/**
 * @namespace
 * @memberof selection.id.appseedinfo
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appseedinfo/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.appseedinfo.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appseedinfo.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appseedinfo/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.appseedinfo
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appseedinfo/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.appseedinfo.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appseedinfo.full.get(filter, orderby, appendprivileges).then(function(Array.<AppSeedInfo>) {
 * 	console.log(Array.<AppSeedInfo>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppSeedInfo>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appseedinfo/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.appseedinfo
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appseedinfo/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.appseedinfo.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appseedinfo.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appseedinfo/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.appseedinfo
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appseedinfo/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.appseedinfo.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appseedinfo.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appseedinfo/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appseedinfo?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.appseedinfo
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appseedinfo.get(filter, orderby, appendprivileges).then(function(Array.<AppSeedInfo>) {
 * 	console.log(Array.<AppSeedInfo>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppSeedInfo>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appseedinfo' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
appstatus: {
/**
 * @namespace
 * @memberof selection.id.appstatus
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appstatus/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.appstatus.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appstatus.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appstatus/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.appstatus
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appstatus/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.appstatus.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appstatus.full.get(filter, orderby, appendprivileges).then(function(Array.<AppStatus>) {
 * 	console.log(Array.<AppStatus>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppStatus>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appstatus/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.appstatus
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appstatus/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.appstatus.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appstatus.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appstatus/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.appstatus
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appstatus/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.appstatus.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appstatus.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appstatus/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/appstatus?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.appstatus
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).appstatus.get(filter, orderby, appendprivileges).then(function(Array.<AppStatus>) {
 * 	console.log(Array.<AppStatus>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<AppStatus>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/appstatus' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
binarydelete: {
/**
 * @namespace
 * @memberof selection.id.binarydelete
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarydelete/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.binarydelete.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarydelete.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarydelete/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.binarydelete
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarydelete/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.binarydelete.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarydelete.full.get(filter, orderby, appendprivileges).then(function(Array.<BinaryDelete>) {
 * 	console.log(Array.<BinaryDelete>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<BinaryDelete>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarydelete/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.binarydelete
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarydelete/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.binarydelete.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarydelete.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarydelete/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.binarydelete
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarydelete/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.binarydelete.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarydelete.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarydelete/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarydelete?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.binarydelete
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarydelete.get(filter, orderby, appendprivileges).then(function(Array.<BinaryDelete>) {
 * 	console.log(Array.<BinaryDelete>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<BinaryDelete>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarydelete' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
binarydownload: {
/**
 * @namespace
 * @memberof selection.id.binarydownload
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarydownload/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.binarydownload.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarydownload.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarydownload/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.binarydownload
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarydownload/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.binarydownload.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarydownload.full.get(filter, orderby, appendprivileges).then(function(Array.<BinaryDownload>) {
 * 	console.log(Array.<BinaryDownload>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<BinaryDownload>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarydownload/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.binarydownload
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarydownload/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.binarydownload.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarydownload.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarydownload/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.binarydownload
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarydownload/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.binarydownload.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarydownload.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarydownload/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarydownload?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.binarydownload
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarydownload.get(filter, orderby, appendprivileges).then(function(Array.<BinaryDownload>) {
 * 	console.log(Array.<BinaryDownload>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<BinaryDownload>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarydownload' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
binarysyncruleevaluation: {
/**
 * @namespace
 * @memberof selection.id.binarysyncruleevaluation
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarysyncruleevaluation/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.binarysyncruleevaluation.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarysyncruleevaluation.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarysyncruleevaluation/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.binarysyncruleevaluation
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarysyncruleevaluation/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.binarysyncruleevaluation.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarysyncruleevaluation.full.get(filter, orderby, appendprivileges).then(function(Array.<BinarySyncRuleEvaluation>) {
 * 	console.log(Array.<BinarySyncRuleEvaluation>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<BinarySyncRuleEvaluation>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarysyncruleevaluation/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.binarysyncruleevaluation
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarysyncruleevaluation/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.binarysyncruleevaluation.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarysyncruleevaluation.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarysyncruleevaluation/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.binarysyncruleevaluation
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarysyncruleevaluation/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.binarysyncruleevaluation.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarysyncruleevaluation.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarysyncruleevaluation/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/binarysyncruleevaluation?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.binarysyncruleevaluation
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).binarysyncruleevaluation.get(filter, orderby, appendprivileges).then(function(Array.<BinarySyncRuleEvaluation>) {
 * 	console.log(Array.<BinarySyncRuleEvaluation>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<BinarySyncRuleEvaluation>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/binarysyncruleevaluation' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
compositeevent: {
/**
 * @namespace
 * @memberof selection.id.compositeevent
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeevent/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.compositeevent.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeevent.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeevent/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.compositeevent
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeevent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.compositeevent.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeevent.full.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEvent>) {
 * 	console.log(Array.<CompositeEvent>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<CompositeEvent>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeevent/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.compositeevent
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeevent/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.compositeevent.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeevent.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeevent/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeevent/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.compositeevent.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeevent.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeevent/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.compositeevent
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeevent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.compositeevent.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeevent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeevent/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeevent?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.compositeevent
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeevent.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeevent' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeevent?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.compositeevent
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeevent.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEvent>) {
 * 	console.log(Array.<CompositeEvent>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<CompositeEvent>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeevent' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
compositeeventoperational: {
/**
 * @namespace
 * @memberof selection.id.compositeeventoperational
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeeventoperational/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.compositeeventoperational.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeeventoperational.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeeventoperational/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.compositeeventoperational
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeeventoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.compositeeventoperational.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeeventoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEventOperational>) {
 * 	console.log(Array.<CompositeEventOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<CompositeEventOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeeventoperational/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.compositeeventoperational
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeeventoperational/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.compositeeventoperational.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeeventoperational.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeeventoperational/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeeventoperational/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.compositeeventoperational.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeeventoperational.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeeventoperational/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.compositeeventoperational
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeeventoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.compositeeventoperational.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeeventoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeeventoperational/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeeventoperational?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.compositeeventoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeeventoperational.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeeventoperational' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeeventoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.compositeeventoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeeventoperational.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEventOperational>) {
 * 	console.log(Array.<CompositeEventOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<CompositeEventOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeeventoperational' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
compositeeventruleoperational: {
/**
 * @namespace
 * @memberof selection.id.compositeeventruleoperational
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeeventruleoperational/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.compositeeventruleoperational.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeeventruleoperational.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeeventruleoperational/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.compositeeventruleoperational
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeeventruleoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.compositeeventruleoperational.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeeventruleoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEventRuleOperational>) {
 * 	console.log(Array.<CompositeEventRuleOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<CompositeEventRuleOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeeventruleoperational/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.compositeeventruleoperational
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeeventruleoperational/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.compositeeventruleoperational.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeeventruleoperational.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeeventruleoperational/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeeventruleoperational/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.compositeeventruleoperational.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeeventruleoperational.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeeventruleoperational/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.compositeeventruleoperational
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeeventruleoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.compositeeventruleoperational.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeeventruleoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeeventruleoperational/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeeventruleoperational?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.compositeeventruleoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeeventruleoperational.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeeventruleoperational' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/compositeeventruleoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.compositeeventruleoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).compositeeventruleoperational.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEventRuleOperational>) {
 * 	console.log(Array.<CompositeEventRuleOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<CompositeEventRuleOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/compositeeventruleoperational' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
contentlibrary: {
/**
 * @namespace
 * @memberof selection.id.contentlibrary
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/contentlibrary/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.contentlibrary.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).contentlibrary.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/contentlibrary/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.contentlibrary
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/contentlibrary/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.contentlibrary.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).contentlibrary.full.get(filter, orderby, appendprivileges).then(function(Array.<ContentLibrary>) {
 * 	console.log(Array.<ContentLibrary>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ContentLibrary>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/contentlibrary/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.contentlibrary
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/contentlibrary/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.contentlibrary.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).contentlibrary.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/contentlibrary/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/contentlibrary/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.contentlibrary.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).contentlibrary.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/contentlibrary/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.contentlibrary
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/contentlibrary/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.contentlibrary.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).contentlibrary.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/contentlibrary/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/contentlibrary?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.contentlibrary
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).contentlibrary.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/contentlibrary' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/contentlibrary?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.contentlibrary
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).contentlibrary.get(filter, orderby, appendprivileges).then(function(Array.<ContentLibrary>) {
 * 	console.log(Array.<ContentLibrary>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ContentLibrary>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/contentlibrary' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
custompropertydefinition: {
/**
 * @namespace
 * @memberof selection.id.custompropertydefinition
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/custompropertydefinition/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.custompropertydefinition.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).custompropertydefinition.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/custompropertydefinition/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.custompropertydefinition
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/custompropertydefinition/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.custompropertydefinition.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).custompropertydefinition.full.get(filter, orderby, appendprivileges).then(function(Array.<CustomPropertyDefinition>) {
 * 	console.log(Array.<CustomPropertyDefinition>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<CustomPropertyDefinition>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/custompropertydefinition/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.custompropertydefinition
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/custompropertydefinition/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.custompropertydefinition.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).custompropertydefinition.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/custompropertydefinition/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/custompropertydefinition/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.custompropertydefinition.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).custompropertydefinition.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/custompropertydefinition/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.custompropertydefinition
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/custompropertydefinition/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.custompropertydefinition.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).custompropertydefinition.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/custompropertydefinition/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/custompropertydefinition?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.custompropertydefinition
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).custompropertydefinition.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/custompropertydefinition' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/custompropertydefinition?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.custompropertydefinition
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).custompropertydefinition.get(filter, orderby, appendprivileges).then(function(Array.<CustomPropertyDefinition>) {
 * 	console.log(Array.<CustomPropertyDefinition>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<CustomPropertyDefinition>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/custompropertydefinition' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
dataconnection: {
/**
 * @namespace
 * @memberof selection.id.dataconnection
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/dataconnection/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.dataconnection.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).dataconnection.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/dataconnection/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.dataconnection
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/dataconnection/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.dataconnection.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).dataconnection.full.get(filter, orderby, appendprivileges).then(function(Array.<DataConnection>) {
 * 	console.log(Array.<DataConnection>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<DataConnection>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/dataconnection/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.dataconnection
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/dataconnection/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.dataconnection.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).dataconnection.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/dataconnection/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/dataconnection/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.dataconnection.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).dataconnection.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/dataconnection/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.dataconnection
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/dataconnection/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.dataconnection.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).dataconnection.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/dataconnection/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/dataconnection?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.dataconnection
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).dataconnection.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/dataconnection' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/dataconnection?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.dataconnection
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).dataconnection.get(filter, orderby, appendprivileges).then(function(Array.<DataConnection>) {
 * 	console.log(Array.<DataConnection>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<DataConnection>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/dataconnection' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
engineservice: {
/**
 * @namespace
 * @memberof selection.id.engineservice
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/engineservice/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.engineservice.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).engineservice.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/engineservice/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.engineservice
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/engineservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.engineservice.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).engineservice.full.get(filter, orderby, appendprivileges).then(function(Array.<EngineService>) {
 * 	console.log(Array.<EngineService>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<EngineService>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/engineservice/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.engineservice
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/engineservice/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.engineservice.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).engineservice.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/engineservice/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/engineservice/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.engineservice.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).engineservice.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/engineservice/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.engineservice
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/engineservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.engineservice.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).engineservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/engineservice/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * @namespace
 * @memberof selection.id.engineservice
 */
template: {
/**
 * @namespace
 * @memberof selection.id.engineservice.template
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/engineservice/template/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.engineservice.template.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).engineservice.template.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/engineservice/template/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.engineservice.template
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/engineservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.engineservice.template.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).engineservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<EngineServiceTemplate>) {
 * 	console.log(Array.<EngineServiceTemplate>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<EngineServiceTemplate>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/engineservice/template/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.engineservice.template
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/engineservice/template/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.engineservice.template.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).engineservice.template.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/engineservice/template/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/engineservice/template/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.engineservice.template.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).engineservice.template.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/engineservice/template/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.engineservice.template
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/engineservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.engineservice.template.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).engineservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/engineservice/template/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/engineservice/template?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.engineservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).engineservice.template.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/engineservice/template' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/engineservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.engineservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).engineservice.template.get(filter, orderby, appendprivileges).then(function(Array.<EngineServiceTemplate>) {
 * 	console.log(Array.<EngineServiceTemplate>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<EngineServiceTemplate>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/engineservice/template' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/engineservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.engineservice
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).engineservice.get(filter, orderby, appendprivileges).then(function(Array.<EngineService>) {
 * 	console.log(Array.<EngineService>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<EngineService>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/engineservice' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
event: {
/**
 * @namespace
 * @memberof selection.id.event
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/event/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.event.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).event.full.get(filter, orderby, appendprivileges).then(function(Array.<IEvent>) {
 * 	console.log(Array.<IEvent>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<IEvent>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/event/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/event?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.event
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).event.get(filter, orderby, appendprivileges).then(function(Array.<IEvent>) {
 * 	console.log(Array.<IEvent>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<IEvent>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/event' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
eventoperational: {
/**
 * @namespace
 * @memberof selection.id.eventoperational
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/eventoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.eventoperational.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).eventoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<IEventOperational>) {
 * 	console.log(Array.<IEventOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<IEventOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/eventoperational/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/eventoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.eventoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).eventoperational.get(filter, orderby, appendprivileges).then(function(Array.<IEventOperational>) {
 * 	console.log(Array.<IEventOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<IEventOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/eventoperational' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
executionresult: {
/**
 * @namespace
 * @memberof selection.id.executionresult
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionresult/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.executionresult.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionresult.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionresult/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.executionresult
 */
detail: {
/**
 * @namespace
 * @memberof selection.id.executionresult.detail
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionresult/detail/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.executionresult.detail.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionresult.detail.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionresult/detail/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.executionresult.detail
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionresult/detail/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.executionresult.detail.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionresult.detail.full.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResultDetail>) {
 * 	console.log(Array.<ExecutionResultDetail>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExecutionResultDetail>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionresult/detail/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.executionresult.detail
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionresult/detail/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.executionresult.detail.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionresult.detail.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionresult/detail/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionresult/detail/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.executionresult.detail.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionresult.detail.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionresult/detail/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.executionresult.detail
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionresult/detail/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.executionresult.detail.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionresult.detail.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionresult/detail/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionresult/detail?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.executionresult.detail
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionresult.detail.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionresult/detail' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionresult/detail?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.executionresult.detail
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionresult.detail.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResultDetail>) {
 * 	console.log(Array.<ExecutionResultDetail>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExecutionResultDetail>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionresult/detail' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.executionresult
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionresult/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.executionresult.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionresult.full.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResult>) {
 * 	console.log(Array.<ExecutionResult>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExecutionResult>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionresult/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.executionresult
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionresult/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.executionresult.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionresult.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionresult/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionresult/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.executionresult.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionresult.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionresult/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.executionresult
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionresult/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.executionresult.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionresult.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionresult/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionresult?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.executionresult
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionresult.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionresult' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionresult?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.executionresult
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionresult.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResult>) {
 * 	console.log(Array.<ExecutionResult>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExecutionResult>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionresult' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
executionsession: {
/**
 * @namespace
 * @memberof selection.id.executionsession
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionsession/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.executionsession.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionsession.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionsession/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.executionsession
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionsession/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.executionsession.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionsession.full.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionSession>) {
 * 	console.log(Array.<ExecutionSession>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExecutionSession>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionsession/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.executionsession
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionsession/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.executionsession.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionsession.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionsession/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionsession/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.executionsession.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionsession.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionsession/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.executionsession
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionsession/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.executionsession.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionsession.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionsession/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionsession?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.executionsession
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionsession.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionsession' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/executionsession?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.executionsession
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).executionsession.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionSession>) {
 * 	console.log(Array.<ExecutionSession>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExecutionSession>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/executionsession' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
extension: {
/**
 * @namespace
 * @memberof selection.id.extension
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/extension/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.extension.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).extension.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/extension/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.extension
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/extension/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.extension.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).extension.full.get(filter, orderby, appendprivileges).then(function(Array.<Extension>) {
 * 	console.log(Array.<Extension>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<Extension>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/extension/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.extension
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/extension/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.extension.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).extension.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/extension/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/extension/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.extension.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).extension.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/extension/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.extension
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/extension/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.extension.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).extension.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/extension/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/extension?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.extension
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).extension.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/extension' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/extension?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.extension
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).extension.get(filter, orderby, appendprivileges).then(function(Array.<Extension>) {
 * 	console.log(Array.<Extension>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<Extension>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/extension' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
externalchangeinfo: {
/**
 * @namespace
 * @memberof selection.id.externalchangeinfo
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalchangeinfo/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.externalchangeinfo.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalchangeinfo.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalchangeinfo/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.externalchangeinfo
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalchangeinfo/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.externalchangeinfo.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalchangeinfo.full.get(filter, orderby, appendprivileges).then(function(Array.<ExternalChangeInfo>) {
 * 	console.log(Array.<ExternalChangeInfo>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExternalChangeInfo>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalchangeinfo/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.externalchangeinfo
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalchangeinfo/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.externalchangeinfo.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalchangeinfo.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalchangeinfo/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalchangeinfo/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.externalchangeinfo.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalchangeinfo.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalchangeinfo/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.externalchangeinfo
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalchangeinfo/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.externalchangeinfo.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalchangeinfo.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalchangeinfo/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalchangeinfo?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.externalchangeinfo
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalchangeinfo.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalchangeinfo' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalchangeinfo?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.externalchangeinfo
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalchangeinfo.get(filter, orderby, appendprivileges).then(function(Array.<ExternalChangeInfo>) {
 * 	console.log(Array.<ExternalChangeInfo>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExternalChangeInfo>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalchangeinfo' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
externalprogramtask: {
/**
 * @namespace
 * @memberof selection.id.externalprogramtask
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalprogramtask/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.externalprogramtask.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalprogramtask.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalprogramtask/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.externalprogramtask
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalprogramtask/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.externalprogramtask.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalprogramtask.full.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTask>) {
 * 	console.log(Array.<ExternalProgramTask>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExternalProgramTask>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalprogramtask/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.externalprogramtask
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalprogramtask/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.externalprogramtask.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalprogramtask.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalprogramtask/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalprogramtask/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.externalprogramtask.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalprogramtask.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalprogramtask/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.externalprogramtask
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalprogramtask/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.externalprogramtask.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalprogramtask.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalprogramtask/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalprogramtask?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.externalprogramtask
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalprogramtask.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalprogramtask' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalprogramtask?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.externalprogramtask
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalprogramtask.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTask>) {
 * 	console.log(Array.<ExternalProgramTask>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExternalProgramTask>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalprogramtask' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
externalprogramtaskoperational: {
/**
 * @namespace
 * @memberof selection.id.externalprogramtaskoperational
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalprogramtaskoperational/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.externalprogramtaskoperational.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalprogramtaskoperational.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalprogramtaskoperational/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.externalprogramtaskoperational
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalprogramtaskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.externalprogramtaskoperational.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalprogramtaskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTaskOperational>) {
 * 	console.log(Array.<ExternalProgramTaskOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExternalProgramTaskOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalprogramtaskoperational/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.externalprogramtaskoperational
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalprogramtaskoperational/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.externalprogramtaskoperational.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalprogramtaskoperational.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalprogramtaskoperational/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalprogramtaskoperational/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.externalprogramtaskoperational.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalprogramtaskoperational.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalprogramtaskoperational/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.externalprogramtaskoperational
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalprogramtaskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.externalprogramtaskoperational.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalprogramtaskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalprogramtaskoperational/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalprogramtaskoperational?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.externalprogramtaskoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalprogramtaskoperational.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalprogramtaskoperational' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/externalprogramtaskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.externalprogramtaskoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).externalprogramtaskoperational.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTaskOperational>) {
 * 	console.log(Array.<ExternalProgramTaskOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExternalProgramTaskOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/externalprogramtaskoperational' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
filereference: {
/**
 * @namespace
 * @memberof selection.id.filereference
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/filereference/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.filereference.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).filereference.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/filereference/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.filereference
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/filereference/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.filereference.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).filereference.full.get(filter, orderby, appendprivileges).then(function(Array.<FileReference>) {
 * 	console.log(Array.<FileReference>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<FileReference>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/filereference/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.filereference
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/filereference/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.filereference.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).filereference.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/filereference/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.filereference
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/filereference/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.filereference.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).filereference.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/filereference/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/filereference?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.filereference
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).filereference.get(filter, orderby, appendprivileges).then(function(Array.<FileReference>) {
 * 	console.log(Array.<FileReference>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<FileReference>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/filereference' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
license: {
/**
 * @namespace
 * @memberof selection.id.license
 */
loginaccesstype: {
/**
 * @namespace
 * @memberof selection.id.license.loginaccesstype
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/loginaccesstype/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.license.loginaccesstype.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.loginaccesstype.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/loginaccesstype/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.loginaccesstype
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/loginaccesstype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.loginaccesstype.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.loginaccesstype.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessType>) {
 * 	console.log(Array.<LicenseLoginAccessType>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseLoginAccessType>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/loginaccesstype/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.loginaccesstype
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/loginaccesstype/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.license.loginaccesstype.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.loginaccesstype.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/loginaccesstype/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/loginaccesstype/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.loginaccesstype.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.loginaccesstype.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/loginaccesstype/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.loginaccesstype
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/loginaccesstype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.license.loginaccesstype.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.loginaccesstype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/loginaccesstype/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/loginaccesstype?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.license.loginaccesstype
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.loginaccesstype.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/loginaccesstype' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/loginaccesstype?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.loginaccesstype
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.loginaccesstype.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessType>) {
 * 	console.log(Array.<LicenseLoginAccessType>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseLoginAccessType>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/loginaccesstype' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license
 */
loginaccessusage: {
/**
 * @namespace
 * @memberof selection.id.license.loginaccessusage
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/loginaccessusage/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.license.loginaccessusage.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.loginaccessusage.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/loginaccessusage/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.loginaccessusage
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/loginaccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.loginaccessusage.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.loginaccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessUsage>) {
 * 	console.log(Array.<LicenseLoginAccessUsage>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseLoginAccessUsage>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/loginaccessusage/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.loginaccessusage
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/loginaccessusage/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.loginaccessusage.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.loginaccessusage.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/loginaccessusage/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.loginaccessusage
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/loginaccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.license.loginaccessusage.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.loginaccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/loginaccessusage/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/loginaccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.loginaccessusage
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.loginaccessusage.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessUsage>) {
 * 	console.log(Array.<LicenseLoginAccessUsage>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseLoginAccessUsage>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/loginaccessusage' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license
 */
useraccessgroup: {
/**
 * @namespace
 * @memberof selection.id.license.useraccessgroup
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccessgroup/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.license.useraccessgroup.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccessgroup.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccessgroup/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.useraccessgroup
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccessgroup/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.useraccessgroup.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccessgroup.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessGroup>) {
 * 	console.log(Array.<LicenseUserAccessGroup>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseUserAccessGroup>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccessgroup/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.useraccessgroup
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccessgroup/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.license.useraccessgroup.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccessgroup.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccessgroup/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccessgroup/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.useraccessgroup.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccessgroup.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccessgroup/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.useraccessgroup
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccessgroup/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.license.useraccessgroup.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccessgroup.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccessgroup/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccessgroup?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.license.useraccessgroup
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccessgroup.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccessgroup' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccessgroup?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.useraccessgroup
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccessgroup.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessGroup>) {
 * 	console.log(Array.<LicenseUserAccessGroup>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseUserAccessGroup>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccessgroup' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license
 */
useraccesstype: {
/**
 * @namespace
 * @memberof selection.id.license.useraccesstype
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccesstype/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.license.useraccesstype.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccesstype.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccesstype/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.useraccesstype
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccesstype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.useraccesstype.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccesstype.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessType>) {
 * 	console.log(Array.<LicenseUserAccessType>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseUserAccessType>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccesstype/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.useraccesstype
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccesstype/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.license.useraccesstype.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccesstype.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccesstype/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccesstype/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.useraccesstype.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccesstype.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccesstype/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.useraccesstype
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccesstype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.license.useraccesstype.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccesstype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccesstype/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccesstype?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.license.useraccesstype
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccesstype.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccesstype' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccesstype?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.useraccesstype
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccesstype.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessType>) {
 * 	console.log(Array.<LicenseUserAccessType>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseUserAccessType>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccesstype' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license
 */
useraccessusage: {
/**
 * @namespace
 * @memberof selection.id.license.useraccessusage
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccessusage/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.license.useraccessusage.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccessusage.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccessusage/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.useraccessusage
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.useraccessusage.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessUsage>) {
 * 	console.log(Array.<LicenseUserAccessUsage>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseUserAccessUsage>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccessusage/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.useraccessusage
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccessusage/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.useraccessusage.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccessusage.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccessusage/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.license.useraccessusage
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.license.useraccessusage.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccessusage/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license/useraccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.license.useraccessusage
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.useraccessusage.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessUsage>) {
 * 	console.log(Array.<LicenseUserAccessUsage>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseUserAccessUsage>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license/useraccessusage' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/license?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.license
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).license.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/license' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
licenseaccessusage: {
/**
 * @namespace
 * @memberof selection.id.licenseaccessusage
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/licenseaccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.licenseaccessusage.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).licenseaccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<ILicenseAccessUsage>) {
 * 	console.log(Array.<ILicenseAccessUsage>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ILicenseAccessUsage>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/licenseaccessusage/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/licenseaccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.licenseaccessusage
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).licenseaccessusage.get(filter, orderby, appendprivileges).then(function(Array.<ILicenseAccessUsage>) {
 * 	console.log(Array.<ILicenseAccessUsage>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ILicenseAccessUsage>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/licenseaccessusage' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
mimetype: {
/**
 * @namespace
 * @memberof selection.id.mimetype
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/mimetype/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.mimetype.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).mimetype.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/mimetype/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.mimetype
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/mimetype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.mimetype.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).mimetype.full.get(filter, orderby, appendprivileges).then(function(Array.<MimeType>) {
 * 	console.log(Array.<MimeType>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<MimeType>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/mimetype/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.mimetype
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/mimetype/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.mimetype.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).mimetype.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/mimetype/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/mimetype/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.mimetype.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).mimetype.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/mimetype/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.mimetype
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/mimetype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.mimetype.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).mimetype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/mimetype/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/mimetype?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.mimetype
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).mimetype.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/mimetype' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/mimetype?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.mimetype
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).mimetype.get(filter, orderby, appendprivileges).then(function(Array.<MimeType>) {
 * 	console.log(Array.<MimeType>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<MimeType>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/mimetype' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
printingservice: {
/**
 * @namespace
 * @memberof selection.id.printingservice
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/printingservice/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.printingservice.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).printingservice.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/printingservice/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.printingservice
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/printingservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.printingservice.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).printingservice.full.get(filter, orderby, appendprivileges).then(function(Array.<PrintingService>) {
 * 	console.log(Array.<PrintingService>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<PrintingService>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/printingservice/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.printingservice
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/printingservice/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.printingservice.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).printingservice.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/printingservice/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/printingservice/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.printingservice.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).printingservice.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/printingservice/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.printingservice
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/printingservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.printingservice.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).printingservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/printingservice/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * @namespace
 * @memberof selection.id.printingservice
 */
template: {
/**
 * @namespace
 * @memberof selection.id.printingservice.template
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/printingservice/template/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.printingservice.template.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).printingservice.template.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/printingservice/template/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.printingservice.template
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/printingservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.printingservice.template.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).printingservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<PrintingServiceTemplate>) {
 * 	console.log(Array.<PrintingServiceTemplate>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<PrintingServiceTemplate>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/printingservice/template/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.printingservice.template
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/printingservice/template/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.printingservice.template.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).printingservice.template.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/printingservice/template/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/printingservice/template/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.printingservice.template.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).printingservice.template.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/printingservice/template/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.printingservice.template
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/printingservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.printingservice.template.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).printingservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/printingservice/template/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/printingservice/template?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.printingservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).printingservice.template.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/printingservice/template' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/printingservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.printingservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).printingservice.template.get(filter, orderby, appendprivileges).then(function(Array.<PrintingServiceTemplate>) {
 * 	console.log(Array.<PrintingServiceTemplate>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<PrintingServiceTemplate>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/printingservice/template' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/printingservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.printingservice
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).printingservice.get(filter, orderby, appendprivileges).then(function(Array.<PrintingService>) {
 * 	console.log(Array.<PrintingService>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<PrintingService>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/printingservice' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
proxyservice: {
/**
 * @namespace
 * @memberof selection.id.proxyservice
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/proxyservice/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.proxyservice.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).proxyservice.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/proxyservice/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.proxyservice
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/proxyservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.proxyservice.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).proxyservice.full.get(filter, orderby, appendprivileges).then(function(Array.<ProxyService>) {
 * 	console.log(Array.<ProxyService>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ProxyService>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/proxyservice/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.proxyservice
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/proxyservice/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.proxyservice.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).proxyservice.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/proxyservice/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/proxyservice/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.proxyservice.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).proxyservice.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/proxyservice/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.proxyservice
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/proxyservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.proxyservice.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).proxyservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/proxyservice/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * @namespace
 * @memberof selection.id.proxyservice
 */
template: {
/**
 * @namespace
 * @memberof selection.id.proxyservice.template
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/proxyservice/template/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.proxyservice.template.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).proxyservice.template.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/proxyservice/template/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.proxyservice.template
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/proxyservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.proxyservice.template.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).proxyservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<ProxyServiceTemplate>) {
 * 	console.log(Array.<ProxyServiceTemplate>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ProxyServiceTemplate>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/proxyservice/template/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.proxyservice.template
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/proxyservice/template/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.proxyservice.template.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).proxyservice.template.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/proxyservice/template/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/proxyservice/template/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.proxyservice.template.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).proxyservice.template.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/proxyservice/template/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.proxyservice.template
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/proxyservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.proxyservice.template.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).proxyservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/proxyservice/template/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/proxyservice/template?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.proxyservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).proxyservice.template.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/proxyservice/template' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/proxyservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.proxyservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).proxyservice.template.get(filter, orderby, appendprivileges).then(function(Array.<ProxyServiceTemplate>) {
 * 	console.log(Array.<ProxyServiceTemplate>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ProxyServiceTemplate>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/proxyservice/template' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/proxyservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.proxyservice
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).proxyservice.get(filter, orderby, appendprivileges).then(function(Array.<ProxyService>) {
 * 	console.log(Array.<ProxyService>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ProxyService>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/proxyservice' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
reloadtask: {
/**
 * @namespace
 * @memberof selection.id.reloadtask
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/reloadtask/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.reloadtask.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).reloadtask.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/reloadtask/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.reloadtask
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/reloadtask/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.reloadtask.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).reloadtask.full.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTask>) {
 * 	console.log(Array.<ReloadTask>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ReloadTask>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/reloadtask/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.reloadtask
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/reloadtask/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.reloadtask.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).reloadtask.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/reloadtask/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/reloadtask/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.reloadtask.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).reloadtask.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/reloadtask/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.reloadtask
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/reloadtask/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.reloadtask.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).reloadtask.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/reloadtask/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/reloadtask?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.reloadtask
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).reloadtask.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/reloadtask' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/reloadtask?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.reloadtask
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).reloadtask.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTask>) {
 * 	console.log(Array.<ReloadTask>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ReloadTask>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/reloadtask' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
reloadtaskoperational: {
/**
 * @namespace
 * @memberof selection.id.reloadtaskoperational
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/reloadtaskoperational/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.reloadtaskoperational.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).reloadtaskoperational.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/reloadtaskoperational/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.reloadtaskoperational
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/reloadtaskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.reloadtaskoperational.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).reloadtaskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTaskOperational>) {
 * 	console.log(Array.<ReloadTaskOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ReloadTaskOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/reloadtaskoperational/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.reloadtaskoperational
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/reloadtaskoperational/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.reloadtaskoperational.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).reloadtaskoperational.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/reloadtaskoperational/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/reloadtaskoperational/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.reloadtaskoperational.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).reloadtaskoperational.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/reloadtaskoperational/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.reloadtaskoperational
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/reloadtaskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.reloadtaskoperational.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).reloadtaskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/reloadtaskoperational/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/reloadtaskoperational?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.reloadtaskoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).reloadtaskoperational.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/reloadtaskoperational' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/reloadtaskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.reloadtaskoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).reloadtaskoperational.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTaskOperational>) {
 * 	console.log(Array.<ReloadTaskOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ReloadTaskOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/reloadtaskoperational' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
repositoryservice: {
/**
 * @namespace
 * @memberof selection.id.repositoryservice
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/repositoryservice/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.repositoryservice.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).repositoryservice.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/repositoryservice/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.repositoryservice
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/repositoryservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.repositoryservice.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).repositoryservice.full.get(filter, orderby, appendprivileges).then(function(Array.<RepositoryService>) {
 * 	console.log(Array.<RepositoryService>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<RepositoryService>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/repositoryservice/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.repositoryservice
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/repositoryservice/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.repositoryservice.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).repositoryservice.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/repositoryservice/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/repositoryservice/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.repositoryservice.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).repositoryservice.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/repositoryservice/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.repositoryservice
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/repositoryservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.repositoryservice.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).repositoryservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/repositoryservice/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * @namespace
 * @memberof selection.id.repositoryservice
 */
template: {
/**
 * @namespace
 * @memberof selection.id.repositoryservice.template
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/repositoryservice/template/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.repositoryservice.template.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).repositoryservice.template.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/repositoryservice/template/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.repositoryservice.template
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/repositoryservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.repositoryservice.template.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).repositoryservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<RepositoryServiceTemplate>) {
 * 	console.log(Array.<RepositoryServiceTemplate>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<RepositoryServiceTemplate>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/repositoryservice/template/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.repositoryservice.template
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/repositoryservice/template/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.repositoryservice.template.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).repositoryservice.template.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/repositoryservice/template/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/repositoryservice/template/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.repositoryservice.template.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).repositoryservice.template.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/repositoryservice/template/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.repositoryservice.template
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/repositoryservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.repositoryservice.template.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).repositoryservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/repositoryservice/template/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/repositoryservice/template?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.repositoryservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).repositoryservice.template.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/repositoryservice/template' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/repositoryservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.repositoryservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).repositoryservice.template.get(filter, orderby, appendprivileges).then(function(Array.<RepositoryServiceTemplate>) {
 * 	console.log(Array.<RepositoryServiceTemplate>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<RepositoryServiceTemplate>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/repositoryservice/template' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/repositoryservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.repositoryservice
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).repositoryservice.get(filter, orderby, appendprivileges).then(function(Array.<RepositoryService>) {
 * 	console.log(Array.<RepositoryService>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<RepositoryService>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/repositoryservice' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
schedulerservice: {
/**
 * @namespace
 * @memberof selection.id.schedulerservice
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schedulerservice/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.schedulerservice.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schedulerservice.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schedulerservice/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.schedulerservice
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schedulerservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.schedulerservice.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schedulerservice.full.get(filter, orderby, appendprivileges).then(function(Array.<SchedulerService>) {
 * 	console.log(Array.<SchedulerService>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SchedulerService>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schedulerservice/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.schedulerservice
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schedulerservice/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.schedulerservice.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schedulerservice.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schedulerservice/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schedulerservice/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.schedulerservice.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schedulerservice.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schedulerservice/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.schedulerservice
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schedulerservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.schedulerservice.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schedulerservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schedulerservice/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * @namespace
 * @memberof selection.id.schedulerservice
 */
template: {
/**
 * @namespace
 * @memberof selection.id.schedulerservice.template
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schedulerservice/template/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.schedulerservice.template.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schedulerservice.template.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schedulerservice/template/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.schedulerservice.template
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schedulerservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.schedulerservice.template.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schedulerservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<SchedulerServiceTemplate>) {
 * 	console.log(Array.<SchedulerServiceTemplate>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SchedulerServiceTemplate>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schedulerservice/template/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.schedulerservice.template
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schedulerservice/template/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.schedulerservice.template.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schedulerservice.template.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schedulerservice/template/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schedulerservice/template/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.schedulerservice.template.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schedulerservice.template.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schedulerservice/template/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.schedulerservice.template
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schedulerservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.schedulerservice.template.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schedulerservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schedulerservice/template/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schedulerservice/template?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.schedulerservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schedulerservice.template.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schedulerservice/template' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schedulerservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.schedulerservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schedulerservice.template.get(filter, orderby, appendprivileges).then(function(Array.<SchedulerServiceTemplate>) {
 * 	console.log(Array.<SchedulerServiceTemplate>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SchedulerServiceTemplate>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schedulerservice/template' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schedulerservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.schedulerservice
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schedulerservice.get(filter, orderby, appendprivileges).then(function(Array.<SchedulerService>) {
 * 	console.log(Array.<SchedulerService>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SchedulerService>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schedulerservice' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
schemaevent: {
/**
 * @namespace
 * @memberof selection.id.schemaevent
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schemaevent/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.schemaevent.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schemaevent.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schemaevent/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.schemaevent
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schemaevent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.schemaevent.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schemaevent.full.get(filter, orderby, appendprivileges).then(function(Array.<SchemaEvent>) {
 * 	console.log(Array.<SchemaEvent>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SchemaEvent>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schemaevent/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.schemaevent
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schemaevent/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.schemaevent.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schemaevent.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schemaevent/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schemaevent/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.schemaevent.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schemaevent.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schemaevent/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.schemaevent
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schemaevent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.schemaevent.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schemaevent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schemaevent/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schemaevent?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.schemaevent
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schemaevent.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schemaevent' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schemaevent?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.schemaevent
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schemaevent.get(filter, orderby, appendprivileges).then(function(Array.<SchemaEvent>) {
 * 	console.log(Array.<SchemaEvent>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SchemaEvent>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schemaevent' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
schemaeventoperational: {
/**
 * @namespace
 * @memberof selection.id.schemaeventoperational
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schemaeventoperational/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.schemaeventoperational.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schemaeventoperational.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schemaeventoperational/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.schemaeventoperational
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schemaeventoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.schemaeventoperational.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schemaeventoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<SchemaEventOperational>) {
 * 	console.log(Array.<SchemaEventOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SchemaEventOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schemaeventoperational/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.schemaeventoperational
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schemaeventoperational/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.schemaeventoperational.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schemaeventoperational.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schemaeventoperational/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schemaeventoperational/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.schemaeventoperational.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schemaeventoperational.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schemaeventoperational/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.schemaeventoperational
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schemaeventoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.schemaeventoperational.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schemaeventoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schemaeventoperational/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schemaeventoperational?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.schemaeventoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schemaeventoperational.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schemaeventoperational' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/schemaeventoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.schemaeventoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).schemaeventoperational.get(filter, orderby, appendprivileges).then(function(Array.<SchemaEventOperational>) {
 * 	console.log(Array.<SchemaEventOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SchemaEventOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/schemaeventoperational' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
servernodeconfiguration: {
/**
 * @namespace
 * @memberof selection.id.servernodeconfiguration
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/servernodeconfiguration/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.servernodeconfiguration.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).servernodeconfiguration.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/servernodeconfiguration/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.servernodeconfiguration
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/servernodeconfiguration/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.servernodeconfiguration.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).servernodeconfiguration.full.get(filter, orderby, appendprivileges).then(function(Array.<ServerNodeConfiguration>) {
 * 	console.log(Array.<ServerNodeConfiguration>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ServerNodeConfiguration>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/servernodeconfiguration/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.servernodeconfiguration
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/servernodeconfiguration/synthetic?filter={filter}
 * This method is manual
 *
 * @memberof selection.id.servernodeconfiguration.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).servernodeconfiguration.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/servernodeconfiguration/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/servernodeconfiguration/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.servernodeconfiguration.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).servernodeconfiguration.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/servernodeconfiguration/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.servernodeconfiguration
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/servernodeconfiguration/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.servernodeconfiguration.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).servernodeconfiguration.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/servernodeconfiguration/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/servernodeconfiguration?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.servernodeconfiguration
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).servernodeconfiguration.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/servernodeconfiguration' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/servernodeconfiguration?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.servernodeconfiguration
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).servernodeconfiguration.get(filter, orderby, appendprivileges).then(function(Array.<ServerNodeConfiguration>) {
 * 	console.log(Array.<ServerNodeConfiguration>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ServerNodeConfiguration>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/servernodeconfiguration' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
servicestatus: {
/**
 * @namespace
 * @memberof selection.id.servicestatus
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/servicestatus/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.servicestatus.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).servicestatus.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/servicestatus/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.servicestatus
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/servicestatus/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.servicestatus.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).servicestatus.full.get(filter, orderby, appendprivileges).then(function(Array.<ServiceStatus>) {
 * 	console.log(Array.<ServiceStatus>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ServiceStatus>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/servicestatus/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.servicestatus
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/servicestatus/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.servicestatus.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).servicestatus.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/servicestatus/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.servicestatus
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/servicestatus/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.servicestatus.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).servicestatus.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/servicestatus/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/servicestatus?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.servicestatus
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).servicestatus.get(filter, orderby, appendprivileges).then(function(Array.<ServiceStatus>) {
 * 	console.log(Array.<ServiceStatus>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ServiceStatus>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/servicestatus' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
staticcontentreference: {
/**
 * @namespace
 * @memberof selection.id.staticcontentreference
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/staticcontentreference/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.staticcontentreference.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).staticcontentreference.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/staticcontentreference/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.staticcontentreference
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/staticcontentreference/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.staticcontentreference.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).staticcontentreference.full.get(filter, orderby, appendprivileges).then(function(Array.<StaticContentReference>) {
 * 	console.log(Array.<StaticContentReference>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<StaticContentReference>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/staticcontentreference/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.staticcontentreference
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/staticcontentreference/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.staticcontentreference.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).staticcontentreference.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/staticcontentreference/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.staticcontentreference
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/staticcontentreference/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.staticcontentreference.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).staticcontentreference.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/staticcontentreference/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/staticcontentreference?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.staticcontentreference
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).staticcontentreference.get(filter, orderby, appendprivileges).then(function(Array.<StaticContentReference>) {
 * 	console.log(Array.<StaticContentReference>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<StaticContentReference>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/staticcontentreference' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
staticcontentreferencebase: {
/**
 * @namespace
 * @memberof selection.id.staticcontentreferencebase
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/staticcontentreferencebase/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.staticcontentreferencebase.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).staticcontentreferencebase.full.get(filter, orderby, appendprivileges).then(function(Array.<IStaticContentReferenceBase>) {
 * 	console.log(Array.<IStaticContentReferenceBase>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<IStaticContentReferenceBase>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/staticcontentreferencebase/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/staticcontentreferencebase?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.staticcontentreferencebase
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).staticcontentreferencebase.get(filter, orderby, appendprivileges).then(function(Array.<IStaticContentReferenceBase>) {
 * 	console.log(Array.<IStaticContentReferenceBase>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<IStaticContentReferenceBase>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/staticcontentreferencebase' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
stream: {
/**
 * @namespace
 * @memberof selection.id.stream
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/stream/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.stream.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).stream.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/stream/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.stream
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/stream/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.stream.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).stream.full.get(filter, orderby, appendprivileges).then(function(Array.<Stream>) {
 * 	console.log(Array.<Stream>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<Stream>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/stream/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.stream
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/stream/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.stream.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).stream.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/stream/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/stream/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.stream.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).stream.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/stream/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.stream
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/stream/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.stream.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).stream.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/stream/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/stream?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.stream
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).stream.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/stream' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/stream?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.stream
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).stream.get(filter, orderby, appendprivileges).then(function(Array.<Stream>) {
 * 	console.log(Array.<Stream>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<Stream>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/stream' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
syncsession: {
/**
 * @namespace
 * @memberof selection.id.syncsession
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/syncsession/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.syncsession.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).syncsession.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/syncsession/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.syncsession
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/syncsession/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.syncsession.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).syncsession.full.get(filter, orderby, appendprivileges).then(function(Array.<SyncSession>) {
 * 	console.log(Array.<SyncSession>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SyncSession>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/syncsession/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.syncsession
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/syncsession/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.syncsession.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).syncsession.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/syncsession/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.syncsession
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/syncsession/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.syncsession.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).syncsession.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/syncsession/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/syncsession?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.syncsession
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).syncsession.get(filter, orderby, appendprivileges).then(function(Array.<SyncSession>) {
 * 	console.log(Array.<SyncSession>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SyncSession>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/syncsession' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
systemrule: {
/**
 * @namespace
 * @memberof selection.id.systemrule
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/systemrule/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.systemrule.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).systemrule.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/systemrule/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.systemrule
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/systemrule/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.systemrule.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).systemrule.full.get(filter, orderby, appendprivileges).then(function(Array.<SystemRule>) {
 * 	console.log(Array.<SystemRule>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SystemRule>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/systemrule/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.systemrule
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/systemrule/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.systemrule.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).systemrule.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/systemrule/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/systemrule/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.systemrule.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).systemrule.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/systemrule/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.systemrule
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/systemrule/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.systemrule.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).systemrule.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/systemrule/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/systemrule?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.systemrule
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).systemrule.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/systemrule' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/systemrule?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.systemrule
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).systemrule.get(filter, orderby, appendprivileges).then(function(Array.<SystemRule>) {
 * 	console.log(Array.<SystemRule>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SystemRule>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/systemrule' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
tag: {
/**
 * @namespace
 * @memberof selection.id.tag
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/tag/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.tag.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).tag.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/tag/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.tag
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/tag/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.tag.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).tag.full.get(filter, orderby, appendprivileges).then(function(Array.<Tag>) {
 * 	console.log(Array.<Tag>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<Tag>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/tag/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.tag
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/tag/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.tag.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).tag.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/tag/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/tag/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.tag.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).tag.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/tag/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.tag
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/tag/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.tag.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).tag.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/tag/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/tag?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.tag
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).tag.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/tag' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/tag?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.tag
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).tag.get(filter, orderby, appendprivileges).then(function(Array.<Tag>) {
 * 	console.log(Array.<Tag>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<Tag>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/tag' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
task: {
/**
 * @namespace
 * @memberof selection.id.task
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/task/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.task.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).task.full.get(filter, orderby, appendprivileges).then(function(Array.<ITask>) {
 * 	console.log(Array.<ITask>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ITask>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/task/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/task?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.task
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).task.get(filter, orderby, appendprivileges).then(function(Array.<ITask>) {
 * 	console.log(Array.<ITask>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ITask>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/task' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
taskoperational: {
/**
 * @namespace
 * @memberof selection.id.taskoperational
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/taskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.taskoperational.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).taskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<ITaskOperational>) {
 * 	console.log(Array.<ITaskOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ITaskOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/taskoperational/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/taskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.taskoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).taskoperational.get(filter, orderby, appendprivileges).then(function(Array.<ITaskOperational>) {
 * 	console.log(Array.<ITaskOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ITaskOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/taskoperational' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
tempcontent: {
/**
 * @namespace
 * @memberof selection.id.tempcontent
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/tempcontent/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.tempcontent.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).tempcontent.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/tempcontent/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.tempcontent
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/tempcontent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.tempcontent.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).tempcontent.full.get(filter, orderby, appendprivileges).then(function(Array.<TempContent>) {
 * 	console.log(Array.<TempContent>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<TempContent>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/tempcontent/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.tempcontent
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/tempcontent/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.tempcontent.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).tempcontent.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/tempcontent/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.tempcontent
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/tempcontent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.tempcontent.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).tempcontent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/tempcontent/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/tempcontent?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.tempcontent
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).tempcontent.get(filter, orderby, appendprivileges).then(function(Array.<TempContent>) {
 * 	console.log(Array.<TempContent>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<TempContent>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/tempcontent' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
user: {
/**
 * @namespace
 * @memberof selection.id.user
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.user.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.user
 */
followingapp: {
/**
 * @namespace
 * @memberof selection.id.user.followingapp
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/followingapp/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.user.followingapp.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.followingapp.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/followingapp/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.user.followingapp
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/followingapp/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.user.followingapp.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.followingapp.full.get(filter, orderby, appendprivileges).then(function(Array.<UserFollowingApp>) {
 * 	console.log(Array.<UserFollowingApp>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserFollowingApp>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/followingapp/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.user.followingapp
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/followingapp/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.user.followingapp.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.followingapp.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/followingapp/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/followingapp/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.user.followingapp.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.followingapp.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/followingapp/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.user.followingapp
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/followingapp/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.user.followingapp.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.followingapp.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/followingapp/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/followingapp?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.user.followingapp
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.followingapp.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/followingapp' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/followingapp?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.user.followingapp
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.followingapp.get(filter, orderby, appendprivileges).then(function(Array.<UserFollowingApp>) {
 * 	console.log(Array.<UserFollowingApp>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserFollowingApp>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/followingapp' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.user
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.user.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.full.get(filter, orderby, appendprivileges).then(function(Array.<User>) {
 * 	console.log(Array.<User>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<User>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.user
 */
license: {
/**
 * @namespace
 * @memberof selection.id.user.license
 */
useraccesstype: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/license/useraccesstype
 * This method is manual
 *
 * @memberof selection.id.user.license.useraccesstype
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.license.useraccesstype.post(postParams).then(function(Array.<LicenseUserAccessType>) {
 * 	console.log(Array.<LicenseUserAccessType>)
 * })
 * ```
 *
 * @param {LicenseUserAccessType} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Array.<LicenseUserAccessType>>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/license/useraccesstype',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
},
/**
 * @namespace
 * @memberof selection.id.user
 */
recentapp: {
/**
 * @namespace
 * @memberof selection.id.user.recentapp
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/recentapp/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.user.recentapp.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.recentapp.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/recentapp/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.user.recentapp
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/recentapp/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.user.recentapp.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.recentapp.full.get(filter, orderby, appendprivileges).then(function(Array.<UserRecentApp>) {
 * 	console.log(Array.<UserRecentApp>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserRecentApp>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/recentapp/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.user.recentapp
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/recentapp/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.user.recentapp.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.recentapp.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/recentapp/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/recentapp/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.user.recentapp.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.recentapp.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/recentapp/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.user.recentapp
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/recentapp/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.user.recentapp.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.recentapp.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/recentapp/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/recentapp?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.user.recentapp
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.recentapp.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/recentapp' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/recentapp?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.user.recentapp
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.recentapp.get(filter, orderby, appendprivileges).then(function(Array.<UserRecentApp>) {
 * 	console.log(Array.<UserRecentApp>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserRecentApp>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/recentapp' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.user
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.user.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.user.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.user
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.user.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.user
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/user?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.user
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).user.get(filter, orderby, appendprivileges).then(function(Array.<User>) {
 * 	console.log(Array.<User>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<User>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/user' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
userdirectory: {
/**
 * @namespace
 * @memberof selection.id.userdirectory
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/userdirectory/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.userdirectory.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).userdirectory.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/userdirectory/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.userdirectory
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/userdirectory/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.userdirectory.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).userdirectory.full.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectory>) {
 * 	console.log(Array.<UserDirectory>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserDirectory>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/userdirectory/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.userdirectory
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/userdirectory/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.userdirectory.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).userdirectory.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/userdirectory/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/userdirectory/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.userdirectory.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).userdirectory.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/userdirectory/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.userdirectory
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/userdirectory/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.userdirectory.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).userdirectory.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/userdirectory/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * @namespace
 * @memberof selection.id.userdirectory
 */
template: {
/**
 * @namespace
 * @memberof selection.id.userdirectory.template
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/userdirectory/template/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.userdirectory.template.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).userdirectory.template.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/userdirectory/template/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.userdirectory.template
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/userdirectory/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.userdirectory.template.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).userdirectory.template.full.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectoryTemplate>) {
 * 	console.log(Array.<UserDirectoryTemplate>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserDirectoryTemplate>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/userdirectory/template/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.userdirectory.template
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/userdirectory/template/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.userdirectory.template.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).userdirectory.template.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/userdirectory/template/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/userdirectory/template/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.userdirectory.template.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).userdirectory.template.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/userdirectory/template/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.userdirectory.template
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/userdirectory/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.userdirectory.template.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).userdirectory.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/userdirectory/template/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/userdirectory/template?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.userdirectory.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).userdirectory.template.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/userdirectory/template' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/userdirectory/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.userdirectory.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).userdirectory.template.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectoryTemplate>) {
 * 	console.log(Array.<UserDirectoryTemplate>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserDirectoryTemplate>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/userdirectory/template' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/userdirectory?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.userdirectory
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).userdirectory.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/userdirectory' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/userdirectory?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.userdirectory
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).userdirectory.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectory>) {
 * 	console.log(Array.<UserDirectory>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserDirectory>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/userdirectory' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
usersynctask: {
/**
 * @namespace
 * @memberof selection.id.usersynctask
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/usersynctask/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.usersynctask.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).usersynctask.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/usersynctask/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.usersynctask
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/usersynctask/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.usersynctask.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).usersynctask.full.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTask>) {
 * 	console.log(Array.<UserSyncTask>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserSyncTask>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/usersynctask/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.usersynctask
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/usersynctask/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.usersynctask.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).usersynctask.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/usersynctask/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/usersynctask/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.usersynctask.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).usersynctask.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/usersynctask/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.usersynctask
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/usersynctask/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.usersynctask.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).usersynctask.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/usersynctask/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/usersynctask?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.usersynctask
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).usersynctask.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/usersynctask' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/usersynctask?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.usersynctask
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).usersynctask.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTask>) {
 * 	console.log(Array.<UserSyncTask>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserSyncTask>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/usersynctask' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
usersynctaskoperational: {
/**
 * @namespace
 * @memberof selection.id.usersynctaskoperational
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/usersynctaskoperational/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.usersynctaskoperational.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).usersynctaskoperational.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/usersynctaskoperational/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.usersynctaskoperational
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/usersynctaskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.usersynctaskoperational.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).usersynctaskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTaskOperational>) {
 * 	console.log(Array.<UserSyncTaskOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserSyncTaskOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/usersynctaskoperational/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.usersynctaskoperational
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/usersynctaskoperational/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.usersynctaskoperational.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).usersynctaskoperational.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/usersynctaskoperational/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/usersynctaskoperational/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.usersynctaskoperational.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).usersynctaskoperational.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/usersynctaskoperational/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.usersynctaskoperational
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/usersynctaskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.usersynctaskoperational.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).usersynctaskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/usersynctaskoperational/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/usersynctaskoperational?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.usersynctaskoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).usersynctaskoperational.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/usersynctaskoperational' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/usersynctaskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.usersynctaskoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).usersynctaskoperational.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTaskOperational>) {
 * 	console.log(Array.<UserSyncTaskOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserSyncTaskOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/usersynctaskoperational' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id
 */
virtualproxyconfig: {
/**
 * @namespace
 * @memberof selection.id.virtualproxyconfig
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/virtualproxyconfig/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.virtualproxyconfig.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).virtualproxyconfig.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/virtualproxyconfig/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.virtualproxyconfig
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/virtualproxyconfig/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.virtualproxyconfig.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).virtualproxyconfig.full.get(filter, orderby, appendprivileges).then(function(Array.<VirtualProxyConfig>) {
 * 	console.log(Array.<VirtualProxyConfig>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<VirtualProxyConfig>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/virtualproxyconfig/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.virtualproxyconfig
 */
synthetic: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/virtualproxyconfig/synthetic?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.virtualproxyconfig.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).virtualproxyconfig.synthetic.put(postParams, filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {SyntheticRootEntity} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
put: function (postParams, filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/virtualproxyconfig/synthetic' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/virtualproxyconfig/synthetic?filter={filter}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.virtualproxyconfig.synthetic
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).virtualproxyconfig.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
 * 	console.log(SyntheticEntity)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SyntheticEntity>} a promise resolving to the response to the request
 */
get: function (filter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/virtualproxyconfig/synthetic' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection.id.virtualproxyconfig
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/virtualproxyconfig/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.id.virtualproxyconfig.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).virtualproxyconfig.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/virtualproxyconfig/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/virtualproxyconfig?filter={filter}
 * This method is generated
 *
 * @memberof selection.id.virtualproxyconfig
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).virtualproxyconfig.delete(filter).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/virtualproxyconfig' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}/virtualproxyconfig?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id.virtualproxyconfig
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).virtualproxyconfig.get(filter, orderby, appendprivileges).then(function(Array.<VirtualProxyConfig>) {
 * 	console.log(Array.<VirtualProxyConfig>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<VirtualProxyConfig>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '/virtualproxyconfig' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.id
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).get(appendprivileges).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{id}?privileges={appendprivileges}
 * This method is manual
 *
 * @memberof selection.id
 *
 * @example
 * ```javascript
 * qrsApi.selection.id(id).put(postParams, appendprivileges).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {Selection} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
put: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
}
};
},
/**
 * @namespace
 * @memberof selection
 */
selectionid: function(selectionid) {
return {
/**
 * @namespace
 * @memberof selection.selectionid
 */
appcomponent: {
/**
 * @namespace
 * @memberof selection.selectionid.appcomponent
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{selectionid}/appcomponent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.selectionid.appcomponent.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.selectionid(selectionid).appcomponent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + selectionid + '/appcomponent/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
},
/**
 * @namespace
 * @memberof selection.selectionid
 */
event: {
/**
 * @namespace
 * @memberof selection.selectionid.event
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{selectionid}/event/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.selectionid.event.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.selectionid(selectionid).event.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + selectionid + '/event/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
},
/**
 * @namespace
 * @memberof selection.selectionid
 */
eventoperational: {
/**
 * @namespace
 * @memberof selection.selectionid.eventoperational
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{selectionid}/eventoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.selectionid.eventoperational.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.selectionid(selectionid).eventoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + selectionid + '/eventoperational/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
},
/**
 * @namespace
 * @memberof selection.selectionid
 */
licenseaccessusage: {
/**
 * @namespace
 * @memberof selection.selectionid.licenseaccessusage
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{selectionid}/licenseaccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.selectionid.licenseaccessusage.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.selectionid(selectionid).licenseaccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + selectionid + '/licenseaccessusage/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
},
/**
 * @namespace
 * @memberof selection.selectionid
 */
staticcontentreferencebase: {
/**
 * @namespace
 * @memberof selection.selectionid.staticcontentreferencebase
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{selectionid}/staticcontentreferencebase/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.selectionid.staticcontentreferencebase.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.selectionid(selectionid).staticcontentreferencebase.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + selectionid + '/staticcontentreferencebase/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
},
/**
 * @namespace
 * @memberof selection.selectionid
 */
task: {
/**
 * @namespace
 * @memberof selection.selectionid.task
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{selectionid}/task/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.selectionid.task.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.selectionid(selectionid).task.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + selectionid + '/task/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
},
/**
 * @namespace
 * @memberof selection.selectionid
 */
taskoperational: {
/**
 * @namespace
 * @memberof selection.selectionid.taskoperational
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/{selectionid}/taskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof selection.selectionid.taskoperational.table
 *
 * @example
 * ```javascript
 * qrsApi.selection.selectionid(selectionid).taskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/' + selectionid + '/taskoperational/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
}
};
},
/**
 * @namespace
 * @memberof selection
 */
app: {
/**
 * @namespace
 * @memberof selection.app
 */
content: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/app/content?filter={filter}
 * This method is manual
 *
 * @memberof selection.app.content
 *
 * @example
 * ```javascript
 * qrsApi.selection.app.content.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/app/content' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection.app
 */
datasegment: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/app/datasegment?filter={filter}
 * This method is generated
 *
 * @memberof selection.app.datasegment
 *
 * @example
 * ```javascript
 * qrsApi.selection.app.datasegment.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/app/datasegment' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection.app
 */
internal: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/app/internal?filter={filter}
 * This method is generated
 *
 * @memberof selection.app.internal
 *
 * @example
 * ```javascript
 * qrsApi.selection.app.internal.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/app/internal' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection.app
 */
object: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/app/object?filter={filter}
 * This method is generated
 *
 * @memberof selection.app.object
 *
 * @example
 * ```javascript
 * qrsApi.selection.app.object.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/app/object' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/app?filter={filter}
 * This method is generated
 *
 * @memberof selection.app
 *
 * @example
 * ```javascript
 * qrsApi.selection.app.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/app' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
appavailability: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/appavailability?filter={filter}
 * This method is generated
 *
 * @memberof selection.appavailability
 *
 * @example
 * ```javascript
 * qrsApi.selection.appavailability.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/appavailability' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
appcontentquota: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/appcontentquota?filter={filter}
 * This method is generated
 *
 * @memberof selection.appcontentquota
 *
 * @example
 * ```javascript
 * qrsApi.selection.appcontentquota.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/appcontentquota' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
appseedinfo: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/appseedinfo?filter={filter}
 * This method is generated
 *
 * @memberof selection.appseedinfo
 *
 * @example
 * ```javascript
 * qrsApi.selection.appseedinfo.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/appseedinfo' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
appstatus: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/appstatus?filter={filter}
 * This method is generated
 *
 * @memberof selection.appstatus
 *
 * @example
 * ```javascript
 * qrsApi.selection.appstatus.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/appstatus' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
binarydelete: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/binarydelete?filter={filter}
 * This method is generated
 *
 * @memberof selection.binarydelete
 *
 * @example
 * ```javascript
 * qrsApi.selection.binarydelete.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/binarydelete' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
binarydownload: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/binarydownload?filter={filter}
 * This method is generated
 *
 * @memberof selection.binarydownload
 *
 * @example
 * ```javascript
 * qrsApi.selection.binarydownload.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/binarydownload' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
binarysyncruleevaluation: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/binarysyncruleevaluation?filter={filter}
 * This method is generated
 *
 * @memberof selection.binarysyncruleevaluation
 *
 * @example
 * ```javascript
 * qrsApi.selection.binarysyncruleevaluation.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/binarysyncruleevaluation' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
compositeevent: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/compositeevent?filter={filter}
 * This method is generated
 *
 * @memberof selection.compositeevent
 *
 * @example
 * ```javascript
 * qrsApi.selection.compositeevent.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/compositeevent' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
compositeeventoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/compositeeventoperational?filter={filter}
 * This method is generated
 *
 * @memberof selection.compositeeventoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.compositeeventoperational.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/compositeeventoperational' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
compositeeventruleoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/compositeeventruleoperational?filter={filter}
 * This method is generated
 *
 * @memberof selection.compositeeventruleoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.compositeeventruleoperational.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/compositeeventruleoperational' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
contentlibrary: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/contentlibrary?filter={filter}
 * This method is generated
 *
 * @memberof selection.contentlibrary
 *
 * @example
 * ```javascript
 * qrsApi.selection.contentlibrary.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/contentlibrary' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/count?filter={filter}
 * This method is generated
 *
 * @memberof selection.count
 *
 * @example
 * ```javascript
 * qrsApi.selection.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
custompropertydefinition: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/custompropertydefinition?filter={filter}
 * This method is generated
 *
 * @memberof selection.custompropertydefinition
 *
 * @example
 * ```javascript
 * qrsApi.selection.custompropertydefinition.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/custompropertydefinition' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
dataconnection: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/dataconnection?filter={filter}
 * This method is generated
 *
 * @memberof selection.dataconnection
 *
 * @example
 * ```javascript
 * qrsApi.selection.dataconnection.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/dataconnection' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
engineservice: {
/**
 * @namespace
 * @memberof selection.engineservice
 */
template: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/engineservice/template?filter={filter}
 * This method is generated
 *
 * @memberof selection.engineservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.engineservice.template.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/engineservice/template' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/engineservice?filter={filter}
 * This method is generated
 *
 * @memberof selection.engineservice
 *
 * @example
 * ```javascript
 * qrsApi.selection.engineservice.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/engineservice' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
executionresult: {
/**
 * @namespace
 * @memberof selection.executionresult
 */
detail: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/executionresult/detail?filter={filter}
 * This method is generated
 *
 * @memberof selection.executionresult.detail
 *
 * @example
 * ```javascript
 * qrsApi.selection.executionresult.detail.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/executionresult/detail' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/executionresult?filter={filter}
 * This method is generated
 *
 * @memberof selection.executionresult
 *
 * @example
 * ```javascript
 * qrsApi.selection.executionresult.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/executionresult' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
executionsession: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/executionsession?filter={filter}
 * This method is generated
 *
 * @memberof selection.executionsession
 *
 * @example
 * ```javascript
 * qrsApi.selection.executionsession.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/executionsession' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
extension: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/extension?filter={filter}
 * This method is generated
 *
 * @memberof selection.extension
 *
 * @example
 * ```javascript
 * qrsApi.selection.extension.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/extension' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
externalchangeinfo: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/externalchangeinfo?filter={filter}
 * This method is generated
 *
 * @memberof selection.externalchangeinfo
 *
 * @example
 * ```javascript
 * qrsApi.selection.externalchangeinfo.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/externalchangeinfo' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
externalprogramtask: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/externalprogramtask?filter={filter}
 * This method is generated
 *
 * @memberof selection.externalprogramtask
 *
 * @example
 * ```javascript
 * qrsApi.selection.externalprogramtask.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/externalprogramtask' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
externalprogramtaskoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/externalprogramtaskoperational?filter={filter}
 * This method is generated
 *
 * @memberof selection.externalprogramtaskoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.externalprogramtaskoperational.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/externalprogramtaskoperational' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
filereference: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/filereference?filter={filter}
 * This method is generated
 *
 * @memberof selection.filereference
 *
 * @example
 * ```javascript
 * qrsApi.selection.filereference.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/filereference' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.full
 *
 * @example
 * ```javascript
 * qrsApi.selection.full.get(filter, orderby, appendprivileges).then(function(Array.<Selection>) {
 * 	console.log(Array.<Selection>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<Selection>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
license: {
/**
 * @namespace
 * @memberof selection.license
 */
loginaccesstype: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/license/loginaccesstype?filter={filter}
 * This method is generated
 *
 * @memberof selection.license.loginaccesstype
 *
 * @example
 * ```javascript
 * qrsApi.selection.license.loginaccesstype.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/license/loginaccesstype' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection.license
 */
loginaccessusage: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/license/loginaccessusage?filter={filter}
 * This method is generated
 *
 * @memberof selection.license.loginaccessusage
 *
 * @example
 * ```javascript
 * qrsApi.selection.license.loginaccessusage.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/license/loginaccessusage' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection.license
 */
useraccessgroup: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/license/useraccessgroup?filter={filter}
 * This method is generated
 *
 * @memberof selection.license.useraccessgroup
 *
 * @example
 * ```javascript
 * qrsApi.selection.license.useraccessgroup.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/license/useraccessgroup' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection.license
 */
useraccesstype: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/license/useraccesstype?filter={filter}
 * This method is generated
 *
 * @memberof selection.license.useraccesstype
 *
 * @example
 * ```javascript
 * qrsApi.selection.license.useraccesstype.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/license/useraccesstype' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection.license
 */
useraccessusage: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/license/useraccessusage?filter={filter}
 * This method is generated
 *
 * @memberof selection.license.useraccessusage
 *
 * @example
 * ```javascript
 * qrsApi.selection.license.useraccessusage.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/license/useraccessusage' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
}
},
/**
 * @namespace
 * @memberof selection
 */
many: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/many?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection.many
 *
 * @example
 * ```javascript
 * qrsApi.selection.many.post(postParams, appendprivileges).then(function(Array.<Selection>) {
 * 	console.log(Array.<Selection>)
 * })
 * ```
 *
 * @param {List<Selection>} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<Selection>>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * @namespace
 * @memberof selection
 */
mimetype: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/mimetype?filter={filter}
 * This method is generated
 *
 * @memberof selection.mimetype
 *
 * @example
 * ```javascript
 * qrsApi.selection.mimetype.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/mimetype' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
previewcreateprivilege: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/previewcreateprivilege
 * This method is generated
 *
 * @memberof selection.previewcreateprivilege
 *
 * @example
 * ```javascript
 * qrsApi.selection.previewcreateprivilege.post(postParams).then(function(Boolean) {
 * 	console.log(Boolean)
 * })
 * ```
 *
 * @param {Selection} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/previewcreateprivilege',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * @namespace
 * @memberof selection
 */
printingservice: {
/**
 * @namespace
 * @memberof selection.printingservice
 */
template: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/printingservice/template?filter={filter}
 * This method is generated
 *
 * @memberof selection.printingservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.printingservice.template.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/printingservice/template' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/printingservice?filter={filter}
 * This method is generated
 *
 * @memberof selection.printingservice
 *
 * @example
 * ```javascript
 * qrsApi.selection.printingservice.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/printingservice' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
proxyservice: {
/**
 * @namespace
 * @memberof selection.proxyservice
 */
template: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/proxyservice/template?filter={filter}
 * This method is generated
 *
 * @memberof selection.proxyservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.proxyservice.template.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/proxyservice/template' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/proxyservice?filter={filter}
 * This method is generated
 *
 * @memberof selection.proxyservice
 *
 * @example
 * ```javascript
 * qrsApi.selection.proxyservice.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/proxyservice' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
reloadtask: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/reloadtask?filter={filter}
 * This method is generated
 *
 * @memberof selection.reloadtask
 *
 * @example
 * ```javascript
 * qrsApi.selection.reloadtask.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/reloadtask' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
reloadtaskoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/reloadtaskoperational?filter={filter}
 * This method is generated
 *
 * @memberof selection.reloadtaskoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.reloadtaskoperational.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/reloadtaskoperational' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
repositoryservice: {
/**
 * @namespace
 * @memberof selection.repositoryservice
 */
template: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/repositoryservice/template?filter={filter}
 * This method is generated
 *
 * @memberof selection.repositoryservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.repositoryservice.template.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/repositoryservice/template' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/repositoryservice?filter={filter}
 * This method is generated
 *
 * @memberof selection.repositoryservice
 *
 * @example
 * ```javascript
 * qrsApi.selection.repositoryservice.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/repositoryservice' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
schedulerservice: {
/**
 * @namespace
 * @memberof selection.schedulerservice
 */
template: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/schedulerservice/template?filter={filter}
 * This method is generated
 *
 * @memberof selection.schedulerservice.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.schedulerservice.template.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/schedulerservice/template' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/schedulerservice?filter={filter}
 * This method is generated
 *
 * @memberof selection.schedulerservice
 *
 * @example
 * ```javascript
 * qrsApi.selection.schedulerservice.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/schedulerservice' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
schemaevent: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/schemaevent?filter={filter}
 * This method is generated
 *
 * @memberof selection.schemaevent
 *
 * @example
 * ```javascript
 * qrsApi.selection.schemaevent.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/schemaevent' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
schemaeventoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/schemaeventoperational?filter={filter}
 * This method is generated
 *
 * @memberof selection.schemaeventoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.schemaeventoperational.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/schemaeventoperational' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
servernodeconfiguration: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/servernodeconfiguration?filter={filter}
 * This method is generated
 *
 * @memberof selection.servernodeconfiguration
 *
 * @example
 * ```javascript
 * qrsApi.selection.servernodeconfiguration.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/servernodeconfiguration' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
servicestatus: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/servicestatus?filter={filter}
 * This method is generated
 *
 * @memberof selection.servicestatus
 *
 * @example
 * ```javascript
 * qrsApi.selection.servicestatus.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/servicestatus' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
staticcontentreference: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/staticcontentreference?filter={filter}
 * This method is generated
 *
 * @memberof selection.staticcontentreference
 *
 * @example
 * ```javascript
 * qrsApi.selection.staticcontentreference.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/staticcontentreference' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
stream: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/stream?filter={filter}
 * This method is generated
 *
 * @memberof selection.stream
 *
 * @example
 * ```javascript
 * qrsApi.selection.stream.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/stream' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
syncsession: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/syncsession?filter={filter}
 * This method is generated
 *
 * @memberof selection.syncsession
 *
 * @example
 * ```javascript
 * qrsApi.selection.syncsession.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/syncsession' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
systemrule: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/systemrule?filter={filter}
 * This method is generated
 *
 * @memberof selection.systemrule
 *
 * @example
 * ```javascript
 * qrsApi.selection.systemrule.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/systemrule' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
tag: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/tag?filter={filter}
 * This method is generated
 *
 * @memberof selection.tag
 *
 * @example
 * ```javascript
 * qrsApi.selection.tag.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/tag' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
tempcontent: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/tempcontent?filter={filter}
 * This method is generated
 *
 * @memberof selection.tempcontent
 *
 * @example
 * ```javascript
 * qrsApi.selection.tempcontent.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/tempcontent' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
user: {
/**
 * @namespace
 * @memberof selection.user
 */
followingapp: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/user/followingapp?filter={filter}
 * This method is generated
 *
 * @memberof selection.user.followingapp
 *
 * @example
 * ```javascript
 * qrsApi.selection.user.followingapp.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/user/followingapp' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection.user
 */
recentapp: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/user/recentapp?filter={filter}
 * This method is generated
 *
 * @memberof selection.user.recentapp
 *
 * @example
 * ```javascript
 * qrsApi.selection.user.recentapp.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/user/recentapp' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/user?filter={filter}
 * This method is generated
 *
 * @memberof selection.user
 *
 * @example
 * ```javascript
 * qrsApi.selection.user.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/user' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
userdirectory: {
/**
 * @namespace
 * @memberof selection.userdirectory
 */
template: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/userdirectory/template?filter={filter}
 * This method is generated
 *
 * @memberof selection.userdirectory.template
 *
 * @example
 * ```javascript
 * qrsApi.selection.userdirectory.template.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/userdirectory/template' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/userdirectory?filter={filter}
 * This method is generated
 *
 * @memberof selection.userdirectory
 *
 * @example
 * ```javascript
 * qrsApi.selection.userdirectory.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/userdirectory' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
usersynctask: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/usersynctask?filter={filter}
 * This method is generated
 *
 * @memberof selection.usersynctask
 *
 * @example
 * ```javascript
 * qrsApi.selection.usersynctask.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/usersynctask' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
usersynctaskoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/usersynctaskoperational?filter={filter}
 * This method is generated
 *
 * @memberof selection.usersynctaskoperational
 *
 * @example
 * ```javascript
 * qrsApi.selection.usersynctaskoperational.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/usersynctaskoperational' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof selection
 */
virtualproxyconfig: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection/virtualproxyconfig?filter={filter}
 * This method is generated
 *
 * @memberof selection.virtualproxyconfig
 *
 * @example
 * ```javascript
 * qrsApi.selection.virtualproxyconfig.post(filter).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection/virtualproxyconfig' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection
 *
 * @example
 * ```javascript
 * qrsApi.selection.get(filter, orderby, appendprivileges).then(function(Array.<Selection>) {
 * 	console.log(Array.<Selection>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<Selection>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/selection?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof selection
 *
 * @example
 * ```javascript
 * qrsApi.selection.post(postParams, appendprivileges).then(function(Selection) {
 * 	console.log(Selection)
 * })
 * ```
 *
 * @param {Selection} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/selection' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
}
}