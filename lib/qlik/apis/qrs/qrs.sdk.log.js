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
log: {
/**
 * @namespace
 * @memberof log
 */
archive: {
/**
 * @namespace
 * @memberof log.archive
 */
logrootsubfolder: function(logrootsubfolder) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/log/archive/{logrootsubfolder}
 * This method is manual
 *
 * @memberof log.archive.logrootsubfolder
 *
 * @example
 * ```javascript
 * qrsApi.log.archive.logrootsubfolder(logrootsubfolder).post(postParams).then(function(Guid) {
 * 	console.log(Guid)
 * })
 * ```
 *
 * @param {String} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Guid>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/log/archive/' + logrootsubfolder + '',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
};
}
},
/**
 * @namespace
 * @memberof log
 */
rolled: {
/**
 * @namespace
 * @memberof log.rolled
 */
logrootsubfolder: function(logrootsubfolder) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/log/rolled/{logrootsubfolder}
 * This method is manual
 *
 * @memberof log.rolled.logrootsubfolder
 *
 * @example
 * ```javascript
 * qrsApi.log.rolled.logrootsubfolder(logrootsubfolder).post(postParams).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {Object} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/log/rolled/' + logrootsubfolder + '',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
};
}
}
}
}
}