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
 * Operation: 'preprints_create'
 * Endpoint Path: '/preprints/'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "current_user_permissions": "current_user_permissions",
    "date_created": "date_created",
    "date_last_transitioned": "date_last_transitioned",
    "date_modified": "date_modified",
    "date_published": "date_published",
    "date_withdrawn": "date_withdrawn",
    "description": "description",
    "doi": "doi",
    "is_preprint_orphan": "is_preprint_orphan",
    "is_published": "is_published",
    "license_record": "license_record",
    "original_publication_date": "original_publication_date",
    "preprint_doi_created": "preprint_doi_created",
    "public": "public",
    "reviews_state": "reviews_state",
    "subjects": "subjects",
    "tags": "tags",
    "title": "title",
    "attributes": "attributes",
    "id": "id",
    "html": "html",
    "preprint_doi": "preprint_doi",
    "self": "self",
    "links": "links",
    "citation": "citation",
    "contributors": "contributors",
    "files": "files",
    "identifiers": "identifiers",
    "license": "license",
    "node": "node",
    "primary_file": "primary_file",
    "provider": "provider",
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
        operationId: 'preprints_create',
        pathName: '/preprints/',
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