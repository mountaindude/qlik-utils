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
reloadtask: {
/**
 * @namespace
 * @memberof reloadtask
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/reloadtask/{id}
 * This method is generated
 *
 * @memberof reloadtask.id
 *
 * @example
 * ```javascript
 * qrsApi.reloadtask.id(id).delete().then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtask/' + id + '',
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
 * /qrs/reloadtask/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof reloadtask.id
 *
 * @example
 * ```javascript
 * qrsApi.reloadtask.id(id).get(appendprivileges).then(function(ReloadTask) {
 * 	console.log(ReloadTask)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<ReloadTask>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtask/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * /qrs/reloadtask/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof reloadtask.id
 *
 * @example
 * ```javascript
 * qrsApi.reloadtask.id(id).put(postParams, appendprivileges).then(function(ReloadTask) {
 * 	console.log(ReloadTask)
 * })
 * ```
 *
 * @param {ReloadTask} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<ReloadTask>} a promise resolving to the response to the request
 */
put: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtask/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof reloadtask
 */
reloadtaskid: function(reloadtaskid) {
return {
/**
 * @namespace
 * @memberof reloadtask.reloadtaskid
 */
scriptlog: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/reloadtask/{reloadtaskid}/scriptlog?filereferenceid={filereferenceid}
 * This method is manual
 *
 * @memberof reloadtask.reloadtaskid.scriptlog
 *
 * @example
 * ```javascript
 * qrsApi.reloadtask.reloadtaskid(reloadtaskid).scriptlog.get(filereferenceid).then(function(Guid) {
 * 	console.log(Guid)
 * })
 * ```
 *
 * @param {string=} filereferenceid the filereferenceid parameter
 * @returns {Promise.<Guid>} a promise resolving to the response to the request
 */
get: function (filereferenceid) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtask/' + reloadtaskid + '/scriptlog' + core.ifNotUndef(filereferenceid, '?filereferenceid=' + filereferenceid, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
}
};
},
/**
 * @namespace
 * @memberof reloadtask
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/reloadtask/count?filter={filter}
 * This method is generated
 *
 * @memberof reloadtask.count
 *
 * @example
 * ```javascript
 * qrsApi.reloadtask.count.get(filter).then(function(int) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtask/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
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
 * @memberof reloadtask
 */
create: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/reloadtask/create
 * This method is manual
 *
 * @memberof reloadtask.create
 *
 * @example
 * ```javascript
 * qrsApi.reloadtask.create.post(postParams).then(function(ReloadTask) {
 * 	console.log(ReloadTask)
 * })
 * ```
 *
 * @param {ReloadTaskBundle} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<ReloadTask>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtask/create',
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
 * @memberof reloadtask
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/reloadtask/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof reloadtask.full
 *
 * @example
 * ```javascript
 * qrsApi.reloadtask.full.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTask>) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtask/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
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
 * @memberof reloadtask
 */
many: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/reloadtask/many?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof reloadtask.many
 *
 * @example
 * ```javascript
 * qrsApi.reloadtask.many.post(postParams, appendprivileges).then(function(Array.<ReloadTask>) {
 * 	console.log(Array.<ReloadTask>)
 * })
 * ```
 *
 * @param {List<ReloadTask>} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ReloadTask>>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtask/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof reloadtask
 */
previewcreateprivilege: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/reloadtask/previewcreateprivilege
 * This method is generated
 *
 * @memberof reloadtask.previewcreateprivilege
 *
 * @example
 * ```javascript
 * qrsApi.reloadtask.previewcreateprivilege.post(postParams).then(function(Boolean) {
 * 	console.log(Boolean)
 * })
 * ```
 *
 * @param {ReloadTask} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtask/previewcreateprivilege',
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
 * @memberof reloadtask
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/reloadtask/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof reloadtask.table
 *
 * @example
 * ```javascript
 * qrsApi.reloadtask.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtask/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
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
 * @memberof reloadtask
 */
update: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/reloadtask/update
 * This method is manual
 *
 * @memberof reloadtask.update
 *
 * @example
 * ```javascript
 * qrsApi.reloadtask.update.post(postParams).then(function(ReloadTask) {
 * 	console.log(ReloadTask)
 * })
 * ```
 *
 * @param {ReloadTaskChange} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<ReloadTask>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtask/update',
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
 * /qrs/reloadtask?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof reloadtask
 *
 * @example
 * ```javascript
 * qrsApi.reloadtask.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTask>) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtask' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * /qrs/reloadtask?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof reloadtask
 *
 * @example
 * ```javascript
 * qrsApi.reloadtask.post(postParams, appendprivileges).then(function(ReloadTask) {
 * 	console.log(ReloadTask)
 * })
 * ```
 *
 * @param {ReloadTask} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<ReloadTask>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtask' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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