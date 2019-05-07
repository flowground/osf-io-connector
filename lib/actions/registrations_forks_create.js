/**
 * Auto-generated action file for "OSF APIv2 Documentation" API.
 *
 * Generated at: 2019-05-07T14:43:30.941Z
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
 * Operation: 'registrations_forks_create'
 * Endpoint Path: '/registrations/{registration_id}/forks/'
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
    "registration_id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "registration_id": "registration_id",
    "category": "category",
    "children": "children",
    "collection": "collection",
    "current_user_can_comment": "current_user_can_comment",
    "current_user_permissions": "current_user_permissions",
    "date_created": "date_created",
    "date_modified": "date_modified",
    "date_registered": "date_registered",
    "date_withdrawn": "date_withdrawn",
    "description": "description",
    "draft_registration": "draft_registration",
    "embargo_end_date": "embargo_end_date",
    "fork": "fork",
    "lift_embargo": "lift_embargo",
    "node_license": "node_license",
    "pending_embargo_approval": "pending_embargo_approval",
    "pending_registration_approval": "pending_registration_approval",
    "pending_withdrawal": "pending_withdrawal",
    "preprint": "preprint",
    "public": "public",
    "registered_meta": "registered_meta",
    "registration": "registration",
    "registration_choice": "registration_choice",
    "registration_supplement": "registration_supplement",
    "tags": "tags",
    "template_from": "template_from",
    "title": "title",
    "wiki_enabled": "wiki_enabled",
    "withdrawal_justification": "withdrawal_justification",
    "withdrawn": "withdrawn",
    "attributes": "attributes",
    "id": "id",
    "html": "html",
    "self": "self",
    "links": "links",
    "affiliated_institutions": "affiliated_institutions",
    "citation": "citation",
    "comments": "comments",
    "contributors": "contributors",
    "files": "files",
    "forks": "forks",
    "identifiers": "identifiers",
    "linked_nodes": "linked_nodes",
    "logs": "logs",
    "node_links": "node_links",
    "parent": "parent",
    "registered_by": "registered_by",
    "registered_from": "registered_from",
    "registration_schema": "registration_schema",
    "root": "root",
    "view_only_links": "view_only_links",
    "wikis": "wikis",
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
        operationId: 'registrations_forks_create',
        pathName: '/registrations/{registration_id}/forks/',
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