/**
 * Auto-generated action file for "OSF APIv2 Documentation" API.
 *
 * Generated at: 2019-05-07T14:43:30.936Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / osf-io-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'nodes_wikis_list_create'
 * Endpoint Path: '/nodes/{node_id}/wikis/'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "node_id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "node_id": "node_id",
    "content_type": "content_type",
    "current_user_can_comment": "current_user_can_comment",
    "date_modified": "date_modified",
    "extra": "extra",
    "kind": "kind",
    "materialized_path": "materialized_path",
    "name": "name",
    "path": "path",
    "size": "size",
    "attributes": "attributes",
    "id": "id",
    "download": "download",
    "info": "info",
    "self": "self",
    "links": "links",
    "comments": "comments",
    "node": "node",
    "user": "user",
    "versions": "versions",
    "relationships": "relationships",
    "type": "type",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'nodes_wikis_list_create',
        pathName: '/nodes/{node_id}/wikis/',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}