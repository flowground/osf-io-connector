# ![LOGO](logo.png) OSF APIv2 Documentation **flow**ground Connector

## Description

A generated **flow**ground connector for the OSF APIv2 Documentation API (version 2.0).

Generated from: https://api.apis.guru/v2/specs/osf.io/2.0/swagger.json<br/>
Generated at: 2019-05-07T17:43:31+03:00

## API Description

## https://api.osf.io/v2/

## Authorization

This API does not require authorization.

## Actions

### Root

> Welcome to the Open Science Framework API. With this API you can access users, projects, components, logs, and files from the [Open Science Framework](https://osf.io/). The Open Science Framework (OSF) is a free, open-source service maintained by the [Center for Open Science](http://cos.io/).<br/>
> <br/>
> #### Returns<br/>
> <br/>
> A JSON object with `meta` and `links` keys.<br/>
> <br/>
> The `meta` key contains information such as a welcome message from the API, the specified version of the request, and the full representation of the current user, if authentication credentials were provided in the request.<br/>
> <br/>
> The `links` key contains links to the following entity collections: [addons](#tag/Addons), [collections](), [institutions](#tag/Institutions), [licenses](#tag/Licenses), [metaschemas](#tag/Metaschemas), [nodes](#tag/Nodes), [registrations](#tag/Registrations), [users](#tag/Users)

*Tags:* `Base`

### Actions

> A log can have one of many actions. The complete list of loggable actions (in the format {identifier}: {description}) is as follows:<br/>
> <br/>
> * `project_created`: A Node is created<br/>
> <br/>
> * `project_registered`: A Node is registered<br/>
> <br/>
> * `project_deleted`: A Node is deleted<br/>
> ---<br/>
> <br/>
> * `created_from`: A Node is created using an existing Node as a template<br/>
> <br/>
> * `pointer_created`: A Pointer is created<br/>
> <br/>
> * `pointer_forked`: A Pointer is forked<br/>
> <br/>
> * `pointer_removed`: A Pointer is removed<br/>
> <br/>
> * `node_removed`: A component is deleted<br/>
> <br/>
> * `node_forked`: A Node is forked<br/>
> ---<br/>
> <br/>
> * `made_public`: A Node is made public<br/>
> <br/>
> * `made_private`: A Node is made private<br/>
> <br/>
> * `tag_added`: A tag is added to a Node<br/>
> <br/>
> * `tag_removed`: A tag is removed from a Node<br/>
> <br/>
> * `edit_title`: A Node's title is changed<br/>
> <br/>
> * `edit_description`: A Node's description is changed<br/>
> <br/>
> * `updated_fields`: One or more of a Node's fields are changed<br/>
> <br/>
> * `external_ids_added`: An external identifier is added to a Node (e.g. the DOI)<br/>
> ---<br/>
> <br/>
> * `view_only_link_added`: A view-only link was added to a Node<br/>
> <br/>
> * `view_only_link_removed`:  A view-only link was removed from a Node<br/>
> <br/>
> ---<br/>
> <br/>
> * `contributor_added`: A Contributor is added to a Node<br/>
> <br/>
> * `contributor_removed`: A Contributor is removed from a Node<br/>
> <br/>
> * `contributors_reordered`: A Contributor's position in a Node's bibliography is changed<br/>
> <br/>
> * `permissions_updated`: A Contributor`s permissions on a Node are changed<br/>
> <br/>
> * `made_contributor_visible`: A Contributor is made bibliographically visible on a Node<br/>
> <br/>
> * `made_contributor_invisible`: A Contributor is made bibliographically invisible on a Node<br/>
> <br/>
> ---<br/>
> <br/>
> * `wiki_updated`: A Node's wiki is updated<br/>
> <br/>
> * `wiki_deleted`: A Node's wiki is deleted<br/>
> <br/>
> * `wiki_renamed`: A Node's wiki is renamed<br/>
> <br/>
> * `made_wiki_public`: A Node's wiki is made public<br/>
> <br/>
> * `made_wiki_private`: A Node's wiki is made private<br/>
> <br/>
> ---<br/>
> <br/>
> * `addon_added`: An add-on is linked to a Node<br/>
> <br/>
> * `addon_removed`: An add-on is unlinked from a Node<br/>
> <br/>
> * `addon_file_moved`: A File in a Node's linked add-on is moved<br/>
> <br/>
> * `addon_file_copied`: A File in a Node's linked add-on is copied<br/>
> <br/>
> * `addon_file_renamed`: A File in a Node's linked add-on is renamed<br/>
> ---<br/>
> <br/>
> * `node_authorized`: An addon is authorized for a project<br/>
> <br/>
> * `node_deauthorized`: An addon is deauthorized for a project<br/>
> ---<br/>
> <br/>
> * `folder_created`: A Folder is created in a Node's linked add-on<br/>
> <br/>
> * `file_added`: A File is added to a Node's linked add-on<br/>
> <br/>
> * `file_updated`: A File is updated on a Node's linked add-on<br/>
> <br/>
> * `file_removed`: A File is removed from a Node's linked add-on<br/>
> <br/>
> * `file_restored`: A File is restored in a Node's linked add-on<br/>
> <br/>
> ---<br/>
> <br/>
> * `comment_added`: A Comment is added to some item<br/>
> <br/>
> * `comment_removed`: A Comment is removed from some item<br/>
> <br/>
> * `comment_updated`: A Comment is updated on some item<br/>
> <br/>
> ---<br/>
> <br/>
> * `embargo_initiated`: An embargoed Registration is proposed on a Node<br/>
> <br/>
> * `embargo_approved`: A proposed Embargo of a Node is approved<br/>
> <br/>
> * `embargo_cancelled`: A proposed Embargo of a Node is cancelled<br/>
> <br/>
> * `embargo_completed`: A proposed Embargo of a Node is completed<br/>
> ---<br/>
> <br/>
> * `retraction_initiated`: A Withdrawal of a Registration is proposed<br/>
> <br/>
> * `retraction_approved`: A Withdrawal of a Registration is approved<br/>
> <br/>
> * `retraction_cancelled`: A Withdrawal of a Registration is cancelled<br/>
> ---<br/>
> <br/>
> * `registration_initiated`: A Registration of a Node is proposed<br/>
> <br/>
> * `registration_approved`: A proposed Registration is approved<br/>
> <br/>
> * `registration_cancelled`: A proposed Registration is cancelled<br/>
> ---<br/>
> <br/>
> * `preprint_initiated`: A preprint is made from the node (deprecated log, preprints are no longer made from nodes)<br/>
> <br/>
> * `preprint_license_updated`: A license is added or updated to the preprint (deprecated log, preprint actions are no longer logged on the node)<br/>
> <br/>
> * `preprint_file_updated`: The primary file of a preprint is updated (deprecated log, this action is now logged on the preprint)

*Tags:* `Logs`

### List all addons

> A paginated list of addons configurable with the OSF<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> This request should never return an error.

*Tags:* `Addons`

### List all citation styles

> A paginated list of all standard citation styles available for rendering citations.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 citation styles. Each resource in the array is a separate citation syle and contains the full representation of the citation style object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> This request should never return an error.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/citations/styles/?filter[title]=open.<br/>
> <br/>
> Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Citations`

### Retrieve a citation style

> Retrieves the details of a citation style.<br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the representation of the requested citation style, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Citations`

#### Input Parameters
* `style_id` - _required_ - The unique identifier of the citation style.

### Delete a comment

> Deletes a comment. This action can be undone by setting deleted to False in a comment update request.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> If the request is successful, no content is returned.<br/>
> <br/>
> If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Comments`

#### Input Parameters
* `comment_id` - _required_ - The unique identifier of the comment you wish to delete.

### Retrieve a comment

> Retrieves the details of a comment<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested comment, if the request was successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Comments`

#### Input Parameters
* `comment_id` - _required_ - The unique identifier of the comment you wish to retrieve.

### Update a comment

> Updates the specified comment by setting the values of the parameters passed. Any parameters not provided will be left unchanged.<br/>
> #### Returns<br/>
> Returns JSON with a `data` key containing the new representation of the updated comment, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Comments`

#### Input Parameters
* `comment_id` - _required_ - The unique identifier of the comment you wish to update.

### Retrieve a file

> Retrieves the details of a file (or folder)<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the metadata for the requested file or folder. If a metadata request is issued against a folder, the request will return the metadata for every object in the folder. If the ?info= query parameter is present for a request against a folder, the response will contain the metadata for the folder itself instead of the metadata for the objects in the folder.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.<br/>
> <br/>
> ### Waterbutler API actions<br/>
> <br/>
> Files can be modified via the Waterbutler URLs found in the `links` key of the response (new_folder, move, upload, download, and delete). Further information about how to interact with files can be found in the [Waterbutler API documentation](https://waterbutler.readthedocs.io/en/latest/api.html#v1-api).<br/>
> <br/>
> <br/>
> #### Download (files)<br/>
> <br/>
> To download a file, issue a GET request against the download link. The response will have the Content-Disposition header set, which will will trigger a download in a browser.<br/>
> <br/>
> #### Create Subfolder (folders)<br/>
> <br/>
> You can create a subfolder of an existing folder by issuing a PUT request against the new_folder link. The ?kind=folder portion of the query parameter is already included in the new_folder link. The name of the new subfolder should be provided in the name query parameter. The response will contain a WaterButler folder entity. If a folder with that name already exists in the parent directory, the server will return a 409 Conflict error response.<br/>
> <br/>
> #### Upload New File (folders)<br/>
> <br/>
> <br/>
>   To upload a file to a folder, issue a PUT request to the folder's upload link with the raw file data in the request body, and the kind and name query parameters set to 'file' and the desired name of the file. The response will contain a WaterButler file entity that describes the new file. If a file with the same name already exists in the folder, the server will return a 409 Conflict error response.<br/>
> <br/>
> <br/>
> #### Update Existing File (file)<br/>
> <br/>
> To update an existing file, issue a PUT request to the file's upload link with the raw file data in the request body and the kind query parameter set to "file". The update action will create a new version of the file. The response will contain a WaterButler file entity that describes the updated file.<br/>
> <br/>
> #### Rename (files, folders)<br/>
> <br/>
> To rename a file or folder, issue a POST request to the move link with the action body parameter set to "rename" and the rename body parameter set to the desired name. The response will contain either a folder entity or file entity with the new name.<br/>
> <br/>
> #### Move & Copy (files, folders)<br/>
> <br/>
> Move and copy actions both use the same request structure, a POST to the move url, but with different values for the action body parameters. The path parameter is also required and should be the OSF path attribute of the folder being written to. The rename and conflict parameters are optional. If you wish to change the name of the file or folder at its destination, set the rename parameter to the new name. The conflict param governs how name clashes are resolved. Possible values are replace and keep. replace is the default and will overwrite the file that already exists in the target folder. keep will attempt to keep both by adding a suffix to the new file's name until it no longer conflicts. The suffix will be ' (x)' where x is a increasing integer starting from 1. This behavior is intended to mimic that of the OS X Finder. The response will contain either a folder entity or file entity with the new name.<br/>
> Files and folders can also be moved between nodes and providers. The resource parameter is the id of the node under which the file/folder should be moved. It must agree with the path parameter, that is the path must identify a valid folder under the node identified by resource. Likewise, the provider parameter may be used to move the file/folder to another storage provider, but both the resource and path parameters must belong to a node and folder already extant on that provider. Both resource and provider default to the current node and providers.<br/>
> If a moved/copied file is overwriting an existing file, a 200 OK response will be returned. Otherwise, a 201 Created will be returned.

*Tags:* `Files`

#### Input Parameters
* `file_id` - _required_ - The unique identifier of the file you wish to retrieve.

### Update a file

> Updates the specified file by setting the values of the parameters passed. Any parameters not provided will be left unchanged.<br/>
> #### Returns<br/>
> Returns JSON with a `data` key containing the new representation of the updated file, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Files`

#### Input Parameters
* `file_id` - _required_ - The unique identifier of the file you wish to update.

### List all file versions

> A paginated list of all file versions.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 file versions. Each resource in the array is a separate file version object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Files`

#### Input Parameters
* `file_id` - _required_ - The unique identifier of the file from which you want to retrieve versions.

### Retrieve a file version

> Retrieves the details of a file version<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested file, if the request was successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Files`

#### Input Parameters
* `file_id` - _required_ - The unique identifier of the file from which you want to retrieve versions.
* `version_id` - _required_ - The file version number you want to retrieve.

### List all institutions

> A paginated list of all verified institutions.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 institutions. Each resource in the array is a separate institution object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> This request should never return an error.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include institutions that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/?filter[id]=cos.<br/>
> <br/>
> Institutions may be filtered by their `id`, `name`, and `auth_url`<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Institutions`

### Retrieve an institution

> Retrieves the details of an institution<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested institution, if the request was successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Institutions`

#### Input Parameters
* `institution_id` - _required_ - The unique identifier of the institution you wish to retrieve.

### List all affiliated nodes

> A paginated list of all nodes affiliated with an institution.<br/>
> <br/>
> #### Versioning<br/>
> <br/>
> As of version `2.2`, affiliated components (in addition to affiliated top-level projects) are returned from this endpoint.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 nodes. Each resource in the array is a separate nodes object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/nodes?filter[title]=science.<br/>
> <br/>
> Nodes may be filtered by their `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Institutions`

#### Input Parameters
* `institution_id` - _required_ - The unique identifier of the institution you wish to retrieve.

### List all affiliated registrations

> A paginated list of all registrations affiliated with an institution.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 registrations. Each resource in the array is a separate users object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/registrations?filter[title]=science.<br/>
> <br/>
> Registrations may be filtered by their  `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`

*Tags:* `Institutions`

#### Input Parameters
* `institution_id` - _required_ - The unique identifier of the institution you wish to retrieve.

### List all affiliated users

> A paginated list of all users affiliated with an institution.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 users. Each resource in the array is a separate users object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include users that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/users?filter[family_name]=Nosek.<br/>
> <br/>
> Users may be filtered by their `id`, `full_name`, `given_name`, `middle_names`, and `family_name`<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Institutions`

#### Input Parameters
* `institution_id` - _required_ - The unique identifier of the institution you wish to retrieve.

### Retrieve a license

> Retrieves the details of a license.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested license, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Licenses`

#### Input Parameters
* `license_id` - _required_ - The unique identifier of the license.

### List all licenses

> A paginated list of licenses. The returned licenses are sorted by their name.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 licenses. Each resource in the array is a separate license object and contains the full representation of the license, meaning additional requests to a license's detail view are not necessary.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> This request should never return an error.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include licenses that match your filters by utilizing the `filter` query parameter, e.g. [https://api.osf.io/v2/licenses/?filter[name]=apache](https://api.osf.io/v2/licenses/?filter[name]=apache).<br/>
> <br/>
> Licenses may be filtered by their `id`, and `name`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Licenses`

### Retrieve a log

> Retrieves the details of a log.<br/>
> <br/>
> A log is permanent immutable record of a node's history. A log is created when a user performs one of many actions. See the [actions](#Logs_logs_actions) section for more details.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested log, if the request was successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Logs`

#### Input Parameters
* `log_id` - _required_ - The unique identifier of the log you wish to retrieve.

### List all metaschemas

> A paginated list of all active metaschemas.<br/>
> Metaschemas describe the supplemental questions that accompany a registration.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 metaschemas. Each resource in the array is a separate metaschema object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> This request should never return an error.

*Tags:* `Metaschemas`

### List all registration metaschemas

> A paginated list of all active registration metaschemas.<br/>
> <br/>
> Registration metaschemas describe the supplemental questions that accompany a registration.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 registration metaschemas. Each resource in the array is a separate registration metaschema object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> This request should never return an error.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include schemas that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/schemas/registrations/?filter[active]=true.<br/>
> <br/>
> Schemas may be filtered by their `active` attribute only.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Metaschemas`

### Retrieve a registration metaschema

> Retrieves the details of a given registration metaschema.<br/>
> <br/>
> Registration metaschemas describe the supplemental questions that accompany a registration.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested registration metaschema, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Metaschemas`

#### Input Parameters
* `metaschema_id` - _required_ - The unique identifier of the registration metaschema.

### Retrieve a metaschema

> Retrieves the details of a given metaschema.<br/>
> <br/>
> Metaschemas describe the supplemental questions that accompany a registration.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested metaschema, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Metaschemas`

#### Input Parameters
* `metaschema_id` - _required_ - The unique identifier of the metaschema.

### List all nodes

> A paginated list of nodes, representing projects and components, on the OSF.<br/>
> <br/>
> The returned nodes are those which are public or which the user has access to view.<br/>
> <br/>
> The returned nodes are sorted by their `date_modified`, with the most recently updated nodes appearing first.<br/>
> <br/>
> Registrations cannot be accessed through this endpoint (use the [registrations](#tag/Registrations) endpoints instead).<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> This request should never return an error.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/?filter[title]=reproducibility.<br/>
> <br/>
> Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.<br/>
> <br/>
> Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Nodes`

### Create a node

> Creates a new node.<br/>
> <br/>
> On the OSF, nodes are considered **projects** or **components**. The difference between a project and a component is that a project is a top-level node, and a component is a child of a project.<br/>
> <br/>
> Additionally, nodes have a `category` field that includes **project** as an option. The categorization determines what icon is displayed with the node on the OSF, and helps with search organization. Projects (top-level nodes) may have a category other than project, and components (children) may have a category of **project**.<br/>
> #### Required<br/>
> Required fields for creating a node include:<br/>
> <br/>
> &nbsp;&nbsp;&nbsp;&nbsp;`title`<br/>
> <br/>
> &nbsp;&nbsp;&nbsp;&nbsp;`category`<br/>
> <br/>
> Note: Nodes default to **private** unless the `public` field is explicitly set to **true** in the request payload.<br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the representation of the created node, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

### Delete a node

> Permanently deletes a node. This action cannot be undone.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Only project administrators may delete a node. Attempting to delete a node for which you are not an administrator will result in a **403 Forbidden** response.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> If the request is successful, no content is returned.<br/>
> <br/>
> If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Retrieve a node

> Retrieves the details of a given node (project or component).<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Only project contributors may retrieve the details of a private node. Attempting to retreive a private node for which you are not a contributor will result in a **403 Forbidden** response.<br/>
> <br/>
> Authentication is not required to view the details of a public node, as public nodes give read-only access to everyone.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested node, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Update a node

> Updates a node by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.<br/>
> <br/>
> Nodes can be updated with either a **PUT** or **PATCH** request. The `title` and `category` fields are mandatory in a **PUT** request, and optional in a **PATCH**.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Only write contributors may update a node. Attempting to update a node for which you do not have write access will result in a **403 Forbidden** response.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### List all addons

> A paginated list of addons connected to the given node or project.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of at most 10 addon objects. Each resource in the array is a separate addon object and contains the full representation of the addon, meaning additional requests to a addon's detail view are not necessary.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Retrieve an addon

> Retrieve details of an individual addon connected to this node.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> NodeSettings that are attached to public nodes will give read-only access to everyone. Private nodes require explicit read permission. Write and admin access are the same for public and private nodes. Administrators on a parent node have implicit read permissions for all child nodes.<br/>
> <br/>
> Any users with write or admin access to the node are able to deauthorize an enabled addon, but only the addon authorizer is able to change the configuration (i.e. selected folder) of an already-configured NodeSettings entity.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the details of the requested addon, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.
* `provider` - _required_ - The unique identifier of the addon.

### Update an addon

> Updates a node addon by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.<br/>
> <br/>
> Node addon can be updated with either a **PUT** or **PATCH** request. The `external_account_id`, `enabled`, and `folder_id` fields are mandatory in a **PUT**, and optional in **PATCH**. Non-string values will be accepted and stringified, however we make no promises about the stringification output.<br/>
> <br/>
> To delete or deauthorize a node addon, issue a **PUT** with all fields set to `null` or `False`, or a **PATCH** with enabled set `False`.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> NodeSettings that are attached to public nodes will give read-only access to everyone. Private nodes require explicit read permission. Write and admin access are the same for public and private nodes. Administrators on a parent node have implicit read permissions for all child nodes.<br/>
> <br/>
> Any users with write or admin access to the node are able to deauthorize an enabled addon, but only the addon authorizer is able to change the configuration (i.e. selected folder) of an already-configured NodeSettings entity.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the new representation of the updated node addon, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.
* `provider` - _required_ - The unique identifier of the addon.

### List all addon folders

> A paginated list of folders retrieved from the associated third-party (provider) service.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Folders are visible only to the user that authorized the addon.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of addon folder objects. Each resource in the array is a separate addon folder object and contains the full representation of the addon folder, meaning additional requests to a addon folder's detail view are not necessary.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.
* `provider` - _required_ - The unique identifier of the provider

### List all child nodes

> A paginated list of the next level child nodes for the given node. The returned nodes are sorted by their `date_modified`, with the most recently updated child nodes appearing first.<br/>
> <br/>
> The list will include child nodes that are public, as well as child nodes that are private, if the authenticated user has permission to view them.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 child nodes. If the given node has zero child nodes, the `data` key will contain an empty array. Each resource in the array is a separate node object and contains the full representation of the child node, meaning additional requests to the child node's detail view are not necessary.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> This request should never return an error.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/children/?filter[title]=reproducibility.<br/>
> <br/>
> Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.<br/>
> <br/>
> Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Create a child node

> Creates a new child node.<br/>
> <br/>
> Note: Creating a child node via this endpoint will function the same as creating a node via the node list endpoint, but the child node will have the given node set as its parent.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Only write contributors may create children nodes.<br/>
> <br/>
> #### Required<br/>
> <br/>
> Required fields for creating a node include:<br/>
> <br/>
> &nbsp;&nbsp;&nbsp;&nbsp;`title`<br/>
> <br/>
> &nbsp;&nbsp;&nbsp;&nbsp;`category`<br/>
> <br/>
> Note: nodes default to **private** unless the `public` field is explicitly set to **true** in the request payload.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the created node, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Retrieve citation details

> The citation details for a node, in CSL format.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key that contains the representation of the details necessary for the node citation.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Retrieve a styled citation

> The citation for a node in a specific style.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key that contains the representation of the node citation, in the requested style.

*Tags:* `Nodes`

#### Input Parameters
* `style_id` - _required_ - The unique identifier of the citation style.
* `node_id` - _required_ - The unique identifier of the node.

### List all comments

> A paginated list of comments related to a given node.<br/>
> <br/>
> The returned comments are sorted by their creation date, with the most recent comments appearing first.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Comments on public nodes are given read-only access to everyone.<br/>
> <br/>
> If the node comment-level is `private`, only contributors have permission to comment.<br/>
> <br/>
> If the comment-level is `public`, any logged-in OSF user can comment.<br/>
> <br/>
> Comments on private nodes are only visible to contributors and administrators on the parent node.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include comments that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/comments/?filter[target_id]=jg7sezmdnt93<br/>
> <br/>
> Nodes may be filtered by their `deleted`, `target_id`, `date_created`, `date_modified`.<br/>
> <br/>
> Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting `true` or `false` in the query will cause the match to fail.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Create a comment

> Create a comment on a given node overview page or a reply to a comment on that node.<br/>
> <br/>
> To create a comment on the node overview page, the target `type` would be "nodes" and the target `id` would be the node `id`.<br/>
> <br/>
> To reply to a comment on this node, the target `type` would be "comments" and the target `id` would be the `id` of the comment to reply to.<br/>
> <br/>
> #### Required<br/>
> <br/>
> A relationship object with a `data` key, containing the target (`comments` or `nodes`) type and a target `id` is required.<br/>
> <br/>
> In addition, the `content` attribute describing the relationship between the node and the comment is required.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a data key containing the representation of the new comment, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node you want to comment on.

### List all contributors

> A paginated list of the node's contributors, sorted by their index.<br/>
> <br/>
> Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.<br/>
> <br/>
> Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.<br/>
> <br/>
> Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/y9jdt/contributors/?filter[bibliographic]=true.<br/>
> <br/>
> Contributors may be filtered by their `bibliographic` and `permission` attributes.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Create a contributor

> Adds a contributor to a node, effectively creating a relationship between the node and a user.<br/>
> <br/>
> Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.<br/>
> <br/>
> Contributors are categorized as either "bibliographic" or "non-bibliographic" contributors. From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.<br/>
> #### Permissions<br/>
> Only project administrators can add contributors to a node.<br/>
> #### Required<br/>
> A relationship object with a `data` key, containing the `users` type and valid user ID is required.<br/>
> <br/>
> All attributes describing the relationship between the node and the user are optional.<br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the representation of the new contributor, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Delete a contributor

> Removes a contributor from a node. This request only removes the relationship between the node and the user, it does not delete the user itself.<br/>
> <br/>
> A node must always have at least one admin, and attempting to remove the only admin from a node will result in a **400 Bad Request** response.<br/>
> #### Permissions<br/>
> A user can remove themselves as a node contributor. Otherwise, only project administrators can remove contributors.<br/>
> #### Returns<br/>
> If the request is successful, no content is returned.<br/>
> <br/>
> If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.
* `user_id` - _required_ - The unique identifier of the user.

### Retrieve a contributor

> Retrieves the details of a given contributor.<br/>
> <br/>
> Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.<br/>
> <br/>
> Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.
* `user_id` - _required_ - The unique identifier of the user.

### Update a contributor

> Updates a contributor by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.<br/>
> <br/>
> Contributors can be updated with either a **PUT** or **PATCH** request. Since this endpoint has no mandatory attributes, PUT and PATCH are functionally the same.<br/>
> #### Permissions<br/>
> Only project administrators can update the contributors on a node.<br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the new representation of the updated contributor, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.<br/>
> <br/>
> If the given user is not already in the contributor list, a 404 Not Found error will be returned. A node must always have at least one admin, and any attempt to downgrade the permissions of a sole admin will result in a 400 Bad Request error.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.
* `user_id` - _required_ - The unique identifier of the user.

### List all draft registrations

> A paginated list of all of the draft registrations of a given node.<br/>
> <br/>
> Draft registrations contain the supplemental registration questions that accompany a registration. A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn.<br/>
> <br/>
> Your original project remains editable but will now have the draft registration linked to it.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Only project administrators may view draft registrations.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 draft registrations. Each resource in the array is a separate draft registration object and contains the full representation of the draft registration, meaning additional requests to a draft registration's detail view are not necessary.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Create a draft registration

> Initiate a draft registration of the current node.<br/>
> Draft registrations contain the supplemental registration questions that accompany a registration. A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn. It is the first step in creating a registration.<br/>
> <br/>
> Refer to step 2: [How to complete the supplemental registration questions of a draft registration](#operation/nodes_draft_registrations_partial_update)<br/>
> <br/>
> Refer to step 3: [How to create a registration from a completed draft registration](#operation/nodes_registrations_create)<br/>
> <br/>
> Your original project remains editable but will now have the draft registration linked to it.<br/>
> #### Permissions<br/>
> Only project administrators may create draft registrations.<br/>
> #### Required<br/>
> Required fields for creating a draft registration include:<br/>
> <br/>
> &nbsp;&nbsp;&nbsp;&nbsp;`registration_schema`<br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the representation of the created draft registration, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Delete a draft registration

> Permanently deletes a draft registration. A draft that has already been registered cannot be deleted.<br/>
> #### Permissions<br/>
> Only project administrators may delete draft registrations.<br/>
> #### Returns<br/>
> If the request is successful, no content is returned.<br/>
> <br/>
> If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.
* `draft_id` - _required_ - The unique identifier of the draft registration.

### Retrieve a draft registration

> Retrieve the details of a given draft registration.<br/>
> <br/>
> Draft registrations contain the supplemental registration questions that accompany a registration. A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn.<br/>
> <br/>
> Your original project remains editable but will now have the draft registration linked to it.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Only project administrators may view draft registrations.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.
* `draft_id` - _required_ - The unique identifier of the draft registration.

### Update a draft registration

> Update a draft registration by answering the supplemental registration questions. This is the second step in creating a registration. The answers will go under registration_metadata. Registration_metadata must be a dictionary with keys as question ids in the registration form, and values as nested dictionaries matching the specific format in the registration metaschema.<br/>
> <br/>
> [To view all active registration schemas](#operation/registration_metaschemas_list)<br/>
> <br/>
> [To retrieve the format of a certain registration schema](#operation/registration_metaschemas_read)<br/>
> <br/>
> If a question is multiple-choice, the question response must exactly match one of the possible choices.<br/>
> <br/>
> Refer to step 1: [How to create a draft registration](#operation/nodes_draft_registrations_create)<br/>
> <br/>
> Refer to step 3: [How to create a registration from a completed draft registration](#operation/nodes_registrations_create)<br/>
> <br/>
> #### Permissions<br/>
> Only project administrators may update draft registrations.<br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the new representation of the updated draft registration, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.
* `draft_id` - _required_ - The unique identifier of the draft registration.

### List all storage providers

> List of all storage providers that are configured for this node<br/>
> <br/>
> Users of the OSF may access their data on a [number of cloud-storage services](https://api.osf.io/v2/#storage-providers) that have integrations with the OSF. We call these **providers**. By default, every node has access to the OSF-provided storage but may use as many of the supported providers as desired.<br/>
> <br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of files. Each resource in the array is a separate file object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> Note: In the OSF filesystem model, providers are treated as folders, but with special properties that distinguish them from regular folders. Every provider folder is considered a root folder, and may not be deleted through the regular file API.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Retrieve a storage provider

> Retrieves the details of a storage provider enabled on this node.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested file object, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.
* `provider` - _required_ - The unique identifier of the storage provider.

### List all node files

> List of all the files/folders that are attached to your project for a given storage provider.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of files. Each resource in the array is a separate file object and contains the full representation of the file.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include files that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/files/osfstorage/?filter[kind]=file<br/>
> <br/>
> Node files may be filtered by `id`, `name`, `kind`, `path`, `provider`, `size`, and `last_touched`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).<br/>
> <br/>
> ### Waterbutler API actions<br/>
> <br/>
> Files can be modified via the Waterbutler URLs found in the `links` key of the response (new_folder, move, upload, download, and delete). Further information about how to interact with files can be found in the [Waterbutler API documentation](https://waterbutler.readthedocs.io/en/latest/api.html#v1-api).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.
* `provider` - _required_ - The unique identifier of the storage provider.

### Retrieve a file

> Retrieves the details of a file attached to given node (project or component) for the given storage provider.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested file object, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.
* `provider` - _required_ - The unique identifier of the storage provider.
* `path` - _required_ - The unique identifier of the file path.

### List all forks of this node

> A paginated list of the current node's forks. The returned fork nodes are sorted by their `forked_date`, with the most recently forked nodes appearing first.<br/>
> <br/>
> Forking a project creates a copy of an existing node and all of its contents. The fork always points back to the original node, forming a network of nodes.<br/>
> #### Returns<br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 forked nodes. If the current node has zero forked nodes, the `data` key will contain an empty array. Each resource in the array is a separate node object and contains the full representation of the forked node, meaning additional requests to the forked node's detail view are not necessary.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> This request should never return an error.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Create a fork of this node

> Creates a fork of the given node.<br/>
> <br/>
> Forking a project creates a copy of an existing node and all of its contents. The fork always points back to the original node, forming a network of nodes.<br/>
> <br/>
> You might use a fork to copy another's work to build on and extend. For example, a professor may create an OSF project of materials for individual student use. Each student forks the project to have his or her own copy of the materials to start his/her own work.<br/>
> <br/>
> When creating a fork, your fork will only contain public components of the current node and components for which you are a contributor. Private components that you do not have access to will not be forked.<br/>
> <br/>
> #### Required<br/>
> <br/>
> There are no required attributes when creating a fork, as all of the forked node's attributes will be copied from the current node.<br/>
> <br/>
> The `title` field is optional, with the default title being "Fork of " prepended to the current node's title.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the complete srepresentation of the forked node, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### List all identifiers

> List all identifiers associated with a given node.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of identifiers. Each resource in the array is a separate identifier object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/identifiers/?filter[category]=doi<br/>
> <br/>
> Identifiers may be filtered by their `category` e.g `doi`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### List all institutions

> List of all institutions affiliated with this node.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 affilited institutions. Each resource in the array is a separate institution object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### List all linked nodes

> List of all nodes linked to the given node.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/?filter[title]=reproducibility.<br/>
> <br/>
> Nodes may be filtered by their `title`, `category`, `description`, `public`, `registration`, or `tags`. `title`, `description`, and `category` are string fields and will be filteres using simple substring matching. `public`, `registration` are boolean and can be filtered using truthy values, such as `true`, `false`, `0`, `1`. `tags` is an array of simple strings.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### List all logs

> A paginated list of all logs associated with a given node.<br/>
> <br/>
> The returned logs are sorted by their `date`, with the most recents logs appearing first.<br/>
> <br/>
> This list includes the logs of the specified node as well as the logs of that node's children to which the current user has read-only access.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 logs. Each resource in the array is a separate logs object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include logs that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/logs/?filter[action]=made_private.<br/>
> <br/>
> Nodes may be filtered by their `action`, and `date`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### List all preprints

> A paginated list of preprints for which the given node contains supplemental materials. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.<br/>
> <br/>
> **Note: This API endpoint is under active development, and is subject to change in the future.**<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 preprints. Each resource in the array is a separate preprint object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### List all registrations

> List of all registrations of the given node.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 registrations. Each resource in the array is a separate registrations object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include registrations that match your filters by utilizing the filter query parameter, e.g. https://api.osf.io/v2/registrations/?filter[title]=open.<br/>
> <br/>
> Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Create a registration

> Finalize the registration process of the current draft registration. A registration is created from a completed draft registration (containing the supplemental registration questions). It also needs information about whether the registration will become public immediately or be embargoed, and conditionally, the datetime at which the registration will become public.<br/>
> <br/>
> Refer to step 1: [How to create a draft registration](#operation/nodes_draft_registrations_create)<br/>
> <br/>
> Refer to step 2: [How to complete the supplemental registration questions of a draft registration](#operation/nodes_draft_registrations_partial_update)<br/>
> <br/>
> A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn. Your original project remains editable but will now have the registration linked to it.<br/>
> #### Permissions<br/>
> Only project administrators may create registrations.<br/>
> #### Required<br/>
> Required fields for creating a registration include:<br/>
> <br/>
> &nbsp;&nbsp;&nbsp;&nbsp;`draft_registration`<br/>
> <br/>
> &nbsp;&nbsp;&nbsp;&nbsp;`registration_choice`<br/>
> <br/>
> &nbsp;&nbsp;&nbsp;&nbsp;`lift_embargo` (Only required when `registration_choice` is "embargo")<br/>
> #### Optional<br/>
> &nbsp;&nbsp;&nbsp;&nbsp;`children` (If left unspecified all children will be registered)<br/>
> <br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the representation of the created registration, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Retrieve node settings

> Retrieves the details of settings related to the node.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested node settings, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Settings for a node are readable by users that are contributors on the node. Most fields are writeable only by users that are administrators on the node. The fields for determining redirect links are writable by a contributor who has read/write permissions on the node.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Update node settings

> Updates the details of settings related to the node.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the updated representation of the requested node settings, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Most fields on the node settings entity are writeable only by users that are administrators on the node. The fields for determining redirect links are writable by a contributor who has read/write permissions on the node.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### List all view only links

> List of view only links on a node.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 view only links. Each resource in the array is a view only link object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> View only links on a node, public or private, are readable and writeable only by users that are administrators on the node.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include view only links that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/view_only_links/?filter[anonymous]=true.<br/>
> <br/>
> View Only Links may be filtered based on their `name`, `anonymous` and `date_created` fields. Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Retrieve a view only link

> Retrieves the details of a view only link on a node.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> View only links on a node, public or private, are readable and writeable only by users that are administrators on the node.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.
* `link_id` - _required_ - The unique identifier of the view only link.

### List all wikis

> List of wiki pages on a node.<br/>
> #### Returns<br/>
> <br/>
> Paginated list of the node's current wiki pages, ordered by their date_modified. Each resource contains the full representation of the wiki, meaning additional requests to an individual wiki's detail view are not necessary.<br/>
> <br/>
> Note that if an anonymous view_only key is being used, the user relationship will not be exposed.<br/>
> <br/>
> If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> Wiki pages can be filtered based on their `name` and `date_modified` fields.<br/>
> <br/>
> + `filter[name]=<Str>` -- filter wiki pages by name<br/>
> <br/>
> + `filter[date_modified][comparison_operator]=YYYY-MM-DDTH:M:S` -- filter wiki pages based on date modified.<br/>
> <br/>
> Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### Create a wiki

> Creates a new wiki page on the given node.<br/>
> `name` is the only required field when creating a new wiki page. The `content` of the wiki page may optionally be included.<br/>
> <br/>
> This POST request creates a wiki page, and then creates a first version for the wiki - adding your content to the first version. For subsequent updates to this wiki page, POST to the versions relationship.  This will create new versions of this wiki. For more information, see [Update a wiki](#operation/wiki_versions_create).<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the created wiki, if the request is successful.<br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Nodes`

#### Input Parameters
* `node_id` - _required_ - The unique identifier of the node.

### List all preprints

> A paginated list of preprints from all preprint providers. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> This request should never return an error.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/?filter[provider]=socarxiv.<br/>
> <br/>
> Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Preprints`

### Create a preprint

> Creates a new preprint.  Initial request to start the preprint requires a title and a provider.<br/>
> <br/>
> After you've created the preprint, you will need to upload a file to the preprint or copy a file from an existing OSF project, which will be a waterbutler request.<br/>
> <br/>
> To upload a new file to the preprint -<br/>
> <br/>
>     1. Make a request to the preprint files' relationship to get the preprint's upload link.<br/>
>     2. Issue a PUT request to the preprint's upload link<br/>
> <br/>
>     curl -X "PUT" "https://files.us.osf.io/v1/resources/<preprint_id>/providers/osfstorage/?kind=file&name=my_preprint_file.txt" \<br/>
>         --<br/>
>         -H "Authorization: Bearer your-token-goes-here" \<br/>
>         -H "Content-Type: text/plain" \<br/>
>         -d "Contents of my preprint file go here"<br/>
> <br/>
> To copy an existing file from a project to your preprint -<br/>
> <br/>
>     1. Make a request to the node file's list endpoint GET http://api.osf.io/v2/nodes/node_id/files/osfstorage/<br/>
>     2. Locate the "move" relationship link for the file you wish to copy from the node to the preprint<br/>
>     3. Issue a POST request to the file's move link, where the resource is the preprint id, the action is copy, and the provider is osfstorage.<br/>
> <br/>
>     curl -X "POST" "https://files.us.osf.io/v1/resources/<node_id>/providers/osfstorage/<file_id>" \<br/>
>         --<br/>
>         -H "Authorization: Bearer your-token-goes-here " \<br/>
>         -H "Content-Type: application/json" \<br/>
>         -d '{"action": "copy", "path": "/", "resource": "<preprint_id>", "provider": "osfstorage", "conflict": "replace"}'<br/>
> <br/>
> <br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the representation of the created preprint, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

*Tags:* `Preprints`

### Retrieve a preprint

> Retrieves the details of a preprint.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested preprint, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Preprints`

#### Input Parameters
* `preprint_id` - _required_ - The unique identifier of the preprint.

### Update a preprint

> Updates the specified preprint by setting the values of the parameters passed. Any parameters not provided will be left unchanged.<br/>
> <br/>
> The file that you either uploaded to the preprint or copied from an OSF project to the preprint will need to be set as the primary file before the preprint can be published.<br/>
> <br/>
> To remove a supplemental project from a preprint will be a separate PATCH request to the node self relationship link.<br/>
> <br/>
> PATCH /v2/preprints/<preprint_id>/relationships/node/<br/>
> <br/>
> {data: null}<br/>
> <br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the new representation of the updated preprint, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

*Tags:* `Preprints`

#### Input Parameters
* `preprint_id` - _required_ - The unique identifier of the preprint.

### Retrieve citation details

> The citation details for a preprint, in CSL format.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key that contains the representation of the details necessary for the preprint citation.

*Tags:* `Preprints`

#### Input Parameters
* `preprint_id` - _required_ - The unique identifier of the preprint whose citation you wish to retrieve.

### Retrieve a styled citation

> The citation for a preprint in a specific style.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key that contains the representation of the preprint citation, in the requested style.

*Tags:* `Preprints`

#### Input Parameters
* `style_id` - _required_ - The unique identifier of the citation style.
* `preprint_id` - _required_ - The unique identifier of the preprint.

### List all preprint providers

> A paginated list of all preprint providers.<br/>
> <br/>
> The returned preprint providers are sorted by their creation date, with the most recent preprints appearing first.<br/>
> <br/>
> _< v2.8 use `preprint_providers` instead of `providers/preprints`_<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 preprint providers.<br/>
> <br/>
> Each resource in the array is a separate preprint provider object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> This request should never return an error.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include preprint providers that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/providers/preprints/?filter[id]=osf.<br/>
> <br/>
> Preprint Providers may be filtered by their `id`, `name`,  and `description`<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Preprint Providers`

### Retrieve a preprint provider

> Retrieves the details of a preprint provider.<br/>
> <br/>
> _< v2.8 use `preprint_providers` instead of `providers/preprints`_<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested preprint provider, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Preprint Providers`

#### Input Parameters
* `preprint_provider_id` - _required_ - The unique identifier of the preprint provider.

### List all licenses

> A paginated list of the licenses allowed bya preprint provider.<br/>
> <br/>
> _< v2.8 use `preprint_providers` instead of `providers/preprints`_<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Preprint Providers`

#### Input Parameters
* `preprint_provider_id` - _required_ - The unique identifier of the preprint provider.

### List all preprints

> A paginated list of preprints from the specified preprint provider. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.<br/>
> <br/>
> _< v2.8 use `preprint_providers` instead of `providers/preprints`_<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.<br/>
> <br/>
> The `links` key contains a dictionary with keys that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/providers/preprints/osf/preprints/?filter[is_published]=true.<br/>
> <br/>
> Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Preprint Providers`

#### Input Parameters
* `preprint_provider_id` - _required_ - The unique identifier of the preprint provider.

### List all taxonomies

> A paginated list of the taxonomies for a preprint provider.<br/>
> <br/>
> The returned preprint providers taxonomies are sorted by their creation date, with the most recent preprints appearing first.<br/>
> <br/>
> <br/>
>  _< v2.8 use `preprint_providers` instead of `providers/preprints`_<br/>
> <br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Preprint Providers`

#### Input Parameters
* `preprint_provider_id` - _required_ - The unique identifier of the preprint provider.

### List all registrations

> A paginated list of registrations on the OSF to which the user has access.<br/>
> <br/>
> The returned registrations are those which are public or which the user has access to view.<br/>
> <br/>
> Non-registered nodes cannot be accessed through this endpoint (use the [nodes](#Nodes_nodes_list) endpoints instead).<br/>
> <br/>
> #### Registrations<br/>
> <br/>
> A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted. The *original project* can still be edited, while the registered version cannot.<br/>
> <br/>
> Registrations can be made public immediately or embargoed for up to 4 years.<br/>
> <br/>
> #### Withdrawals<br/>
> <br/>
> Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 registrations. Each resource in the array is a separate registration object and contains the full representation of the registration, meaning additional requests to a registration's detail view are not necessary.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> This request should never return an error.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/?filter[title]=open.<br/>
> <br/>
> Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Registrations`

### Retrieve a registration

> Retrieve the details of a given registration.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Only project contributors may retrieve the details of a registration that is embargoed, or has not yet been made public. Attempting to retrieve a private registration for which you are not a contributor will result in a **403 Forbidden** response.<br/>
> <br/>
> Authentication is not required to view the details of a public registration, as public registrations give read-only access to everyone.<br/>
> <br/>
> #### Registrations<br/>
> <br/>
> A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted.<br/>
> <br/>
> The *original project* can still be edited, while the registered version cannot.<br/>
> <br/>
> Registrations can be made public immediately or embargoed for up to 4 years.<br/>
> <br/>
> #### Withdrawals<br/>
> <br/>
> Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested registration, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### Update a registration

> Updates selected fields on a registration - only a selection of registration fields are editable.<br/>
> <br/>
> Registrations can be updated with either a **PUT** or **PATCH** request. Some fields that can be edited include the `public`, `pending_withdrawal`, and `withdrawal_justification` fields.<br/>
> <br/>
> Registrations can only be turned from private to public, not vice versa.<br/>
> <br/>
> You may request a registration to be withdrawn by providing a truthy value for `pending_withdrawal` in the data payload, along with an optional `withdrawal_justification`.<br/>
> #### Permissions<br/>
> Only project administrators may update most fields on a registration, but write contributors can edit certain fields like tags.<br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the new representation of the updated registration, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### List all child registrations

> A paginated list of children of a registration.<br/>
> <br/>
> The list consists of the next level child registrations for the given registration. The returned registrations are sorted by their `date_modified`, with the most recently updated child registrations appearing first.<br/>
> <br/>
> The list will include child registrations that are public, as well as child registrations that are private, if the authenticated user has permission to view them.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 child registrations. If the given registration has zero child registrations, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the child registration.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/children/?filter[title]=reproducibility.<br/>
> <br/>
> Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.<br/>
> <br/>
> Most fields are string fields and will be filtered using simple substring matching. Public is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### List all citation styles

> A paginated list of the registration's alternative citation styles<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 citation styles. Each resource in the array is a separate citation styles object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/citations/?filter[title]=open.<br/>
> <br/>
> Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### Retrieve a citation

> Retrieves the citation style details for a registration, in CSL format.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key that contains the representation of the details necessary for the citation style.

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.
* `citation_id` - _required_ - The unique identifier of the citation.

### List all comments

> A paginated list of the registration's comments.<br/>
> <br/>
> The returned comments are sorted by their creation date, with the most recent comments appearing first.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Comments of public registrations are given read-only access to everyone.<br/>
> <br/>
> If the comment-level is `private`, only registration contributors have permission to comment.<br/>
> <br/>
> If the comment-level is `public`, any logged-in OSF user can comment.<br/>
> <br/>
> Comments of private registrations are only visible to contributors and administrators on the registration.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include comments that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wuerf/comments/?filter[target]=wuerf<br/>
> <br/>
> Comments may be filtered by their `deleted`, `target`, `date_created`, `date_modified`.<br/>
> <br/>
> Most fields are string fields and will be filtered using simple substring matching. Deleted is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting `true` or `false` in the query will cause the match to fail.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### List all contributors

> A paginated list of all contributors on this registration.<br/>
> <br/>
> The returned contributors are sorted by their index.<br/>
> <br/>
> Contributors are users who can make changes to the registration or, in the case of private registration, have read access to the registration.<br/>
> <br/>
> Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed in the contributors list on the OSF, while non-bibliographic contributors are not.<br/>
> <br/>
> Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 contributors. Each resource in the array contains the full representation of the contributor. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/contributors/?filter[bibliographic]=true.<br/>
> <br/>
> Contributors may be filtered by their `bibliographic` and `permission` attributes.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### Retrieve a contributor

> Retrieves the details of a contributor on this registration.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.
* `user_id` - _required_ - The unique identifier of the user.

### List all storage providers

> A paginated list of storage providers enabled on the registration<br/>
> <br/>
> Users of the OSF may access their data on a [number of cloud-storage services](https://api.osf.io/v2/#storage-providers) that have integrations with the OSF. We call these **providers**. By default, every node has access to the OSF-provided storage but may use as many of the supported providers as desired.<br/>
> <br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 files. Each resource in the array is a separate file object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> Note: In the OSF filesystem model, providers are treated as folders, but with special properties that distinguish them from regular folders. Every provider folder is considered a root folder, and may not be deleted through the regular file API.

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### List all files

> List of all the registration's files/folders for a given storage provider.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of files. Each resource in the array is a separate file object and contains the full representation of the file.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include files that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/files/osfstorage/?filter[kind]=file<br/>
> <br/>
> Files may be filtered by `id`, `name`, `kind`, `path`, `provider`, `size`, and `last_touched`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.
* `provider` - _required_ - The unique identifier of the storage provider.

### Retrieve a file

> Retrieves the details of a registration file for the given storage provider.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested registration file object, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.
* `provider` - _required_ - The unique identifier of the storage provider.
* `path` - _required_ - The unique identifier of the file path.

### List all forks

> A paginated list of the registration's forks<br/>
> <br/>
> The returned forks are sorted by their `forked_date`, with the most recent forks appearing first.<br/>
> <br/>
> Forking a registration creates a copy of an existing registration and all of its contents.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 forks. If the current registration has no fork, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the registration's fork.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### Create a fork

> Creates a fork of the given registration.<br/>
> <br/>
> Forking a project creates a copy of an existing registration and all of its contents. The fork always points back to the original registration, forming a network of registrations.<br/>
> <br/>
> You might use a fork to copy another's work to build on and extend. For example, a professor may create an OSF project of materials for individual student use. Each student forks the project to have his or her own copy of the materials to start his/her own work.<br/>
> <br/>
> When creating a fork, your fork will only contain public components of the current registration and components for which you are a contributor. Private components that you do not have access to will not be forked.<br/>
> #### Required<br/>
> There are no required attributes when creating a fork, as all of the forked registration's attributes will be copied from the current registration.<br/>
> <br/>
> The `title` field is optional, with the default title being "Fork of " prepended to the current registration's title.<br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the complete representation of the forked registration, if the request is successful.<br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### List all identifiers

> A paginated list of the registration's identifiers.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of identifiers. Each resource in the array is a separate identifier object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/identifiers/?filter[category]=doi<br/>
> <br/>
> Identifiers may be filtered by their `category` e.g `doi`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### List all institutions

> A paginated list of institutions affiliated with the registration.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 affiliated institutions. Each resource in the array is a separate institution object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### List all linked nodes

> List of all nodes linked to the registration.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/linked_nodes/?filter[title]=reproducibility/?filter[title]=reproducibility.<br/>
> <br/>
> Nodes may be filtered by their `title`, `category`, `description`, `public`, `registration`, or `tags`. `title`, `description`, and `category` are string fields and will be filteres using simple substring matching. `public`, `registration` are boolean and can be filtered using truthy values, such as `true`, `false`, `0`, `1`. `tags` is an array of simple strings.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### List all logs

> A paginated list of the registration's logs.<br/>
> <br/>
> The returned logs are sorted by their `date`, with the most recents logs appearing first.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 logs. Each resource in the array is a separate logs object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include logs that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/logs/?filter[action]=made_private.<br/>
> <br/>
> Logs may be filtered by their `action`, and `date`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### List all view only links

> A paginated list of view only links created for this registration.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 view only links. Each resource in the array is a view only link object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include view only links that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/view_only_links/?filter[anonymous]=true.<br/>
> <br/>
> View Only Links may be filtered based on their `name`, `anonymous` and `date_created` fields. Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### Retrieve a view only link

> Retrieves the details of a view only link created from this registration.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.
* `link_id` - _required_ - The unique identifier of the view only link.

### List all wikis

> A paginated list of the registration's wiki pages<br/>
> <br/>
> #### Returns<br/>
> <br/>
> A list of all registration's current wiki page versions ordered by their date_modified. Each resource contains the full representation of the wiki, meaning additional requests to an individual wiki's detail view are not necessary.<br/>
> <br/>
> If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> Wiki pages can be filtered based on their `name` and `date_modified` fields.<br/>
> <br/>
> + `filter[name]=<Str>` -- filter wiki pages by name<br/>
> <br/>
> + `filter[date_modified][comparison_operator]=YYYY-MM-DDTH:M:S` -- filter wiki pages based on date modified.<br/>
> <br/>
> Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Registrations`

#### Input Parameters
* `registration_id` - _required_ - The unique identifier of the registration.

### List all taxonomies

> A paginated list of all [bepress disciplines taxonomies](https://www.bepress.com/wp-content/uploads/2016/12/Digital-Commons-Disciplines-taxonomy-2017-01.pdf).<br/>
> <br/>
> Note: this API endpoint is under active development, and is subject to change in the future.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 taxonomies. Each resource in the array is a separate taxonomy object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> This request should never return an error.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include taxonomies that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/taxonomies/?filter['id']='{taxonomy_id}'.<br/>
> <br/>
> Taxonomies may be filtered by their `id`, `parents`, and `text`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Taxonomies`

### Retrieve a taxonomy

> Retrieves the details of a taxonomy.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested taxonomy, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Taxonomies`

#### Input Parameters
* `taxonomy_id` - _required_ - The unique identifier of the taxonomy.

### List all users

> A paginated list of all users registered on the OSF. The returned users are sorted by their `date_registered`, with the most recently registered users appearing first.<br/>
> <br/>
> The subroute `/users/me/` is a special endpoint that always points to the currently logged-in user.<br/>
> <br/>
> #### Versioning<br/>
> <br/>
> As of version `2.3`, merged users will not be returned from this endpoint.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 users. Each resource in the array is a separate users object and contains the full representation of the user, meaning additional requests to a user's detail view are not necessary.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> This request should never return an error.<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/?filter[family_name]=Nosek.<br/>
> <br/>
> Users may be filtered by their `id`, `full_name`, `given_name`, `middle_name`, or `family_name`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Users`

### Retrieve a user

> Retrieves the details for a given user.<br/>
> <br/>
> The returned information includes the user's bibliographic information and the date the user was registered.<br/>
> <br/>
> Additionally, relationships to the list of institutions with which the user is affiliated, and to the list of nodes which the user contributes to (that the requesting user has permission to see) are returned.<br/>
> <br/>
> If `me` is given as the `user_id` in the request path, the record of the currently logged-in user will be returned.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested user, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.

### Update a user

> Updates a user by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.<br/>
> <br/>
> Users can be updated with either a **PUT** or **PATCH** request. The `full_name` field is mandatory in a **PUT** request, and optional in a **PATCH**.<br/>
> <br/>
> **Note**: if you make a PUT/PATCH request to the `/users/me/` endpoint, you must still provide your full user ID in the ID field of the request. We do not support using the `me` alias in request bodies at this time.<br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.

### List all user addons

> A paginated list of authorized user addons<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> User addons are visible only to the user that authorized the addon.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.<br/>
> <br/>
> Attempting to request the accounts for an addon that is not enabled will result in a **404 Not Found** response.

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.

### Retrieve a user addon

> Retrieves the details of an authorized user addon<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> User addons are visible only to the user that authorized the addon.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested user addon, if the request was successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.<br/>
> <br/>
> Attempting to request the accounts for an addon that is not enabled will result in a **404 Not Found** response.

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.
* `provider` - _required_ - The unique identifier of the addon provider.

### List all addon accounts

> A paginated list of addon accounts authorized by this user.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Addon accounts are visible only to the user that authorized the account.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of at most 10 addon account objects. Each resource in the array is a separate  addon account object and contains the full representation of the addon account.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.
* `provider` - _required_ - The unique identifier of the addon provider.

### Retrieve an addon account

> Retrieves the details of an addon account<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Addon accounts are visible only to the user that authorized the account.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested addon account, if the request was successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.
* `provider` - _required_ - The unique identifier of the addon provider.
* `account_id` - _required_ - The unique identifier of the addon account.

### Remove a external identity

> Deletes  the specified external identity.<br/>
> #### Permissions<br/>
> External identities may only be deleted by the user they belong to.<br/>
> #### Returns<br/>
> If the request is successful, no content is returned.<br/>
> <br/>
> If the request is unsuccessful, a JSON object with an errors key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.
* `identities_id` - _required_ - The unique identifier of a user's external identity.

### Retrieve a external identity

> Retrieves the specified external identity, e.g. ORCID.<br/>
> #### Permissions<br/>
> External identities may only be viewed by the user they belong to.<br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the representation of the requested external identities, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.
* `identities_id` - _required_ - The unique identifier of a user's external identity.

### List all institutions

> A paginated list of institutions that the user is affiliated with.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 institutions. Each resource in the array is a complete institution object and contains the full representation of the institution, meaning additional requests to a institution's detail view are not necessary.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.

### List all nodes

> A paginated list of nodes that the user is a contributor to. The returned nodes are sorted by their `date_modified`, with the most recently updated nodes appearing first.<br/>
> <br/>
> If the user ID in the path is the same as the logged-in user, all nodes will be returned. Otherwise, only the user's public nodes will be returned.<br/>
> <br/>
> User registrations are not available at this endpoint.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/nodes/?filter[title]=open.<br/>
> <br/>
> Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.

### List all preprints

> A paginated list of preprints that the user contributes to. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 preprints. Each resource in the array is a complete preprint object and contains the full representation of the preprint, meaning additional requests to a preprint's detail view are not necessary.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/preprints/?filter[provider]=psyarxiv.<br/>
> <br/>
> Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.

### List all registrations

> A paginated list of registrations that the user is a contributor to. The returned registrations are sorted by their `date_modified`, with the most recently updated registrations appearing first.<br/>
> <br/>
> If the user ID in the path is the same as the logged-in user, all registrations will be returned. Otherwise, only the user's public registrations will be returned.<br/>
> <br/>
> User nodes are not available at this endpoint.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of 10 registrations. Each resource in the array is a separate registration object and contains the full representation of the registration, meaning additional requests to a registration's detail view are not necessary.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> #### Filtering<br/>
> <br/>
> You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/registrations/?filter[title]=replication.<br/>
> <br/>
> Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.<br/>
> <br/>
> You can learn more about advanced filtering features [here](#tag/Filtering).

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.

### Retrieve user settings

> Retrieves a user's settings.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> A user's settings are only visible to that user.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested user addon, if the request was successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.

### Update a user's settings

> Updates a user's settings by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.<br/>
> User settings can be updated with either a **PUT** or **PATCH** request.<br/>
> <br/>
> #### Permissions<br/>
> Attempting to update any user settings but your own will result in a **403 Forbidden** response.<br/>
> <br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.

### List all external identities

> Retrieves a list of a user's external identities.<br/>
> #### Permissions<br/>
> External identities may only be viewed by the user they belong to.<br/>
> #### Returns<br/>
> Returns a JSON object with a `data` key containing the representation of the requested external identities, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Users`

#### Input Parameters
* `user_id` - _required_ - The unique identifier of the user.

### Retrieve a view only link

> Retrieves details about a specific view only link.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Only project administrators may retrieve the details of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `View Only Links`

#### Input Parameters
* `link_id` - _required_ - The unique identifier of the view only link.

### List all nodes

> The list of nodes which this view only link gives read-only access to.<br/>
> <br/>
> #### Permissions<br/>
> <br/>
> Only project administrators may retrieve the nodes of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.<br/>
> <br/>
> #### Returns<br/>
> <br/>
> Returns a JSON object containing `data` and `links` keys.<br/>
> <br/>
> The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.<br/>
> <br/>
> The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `View Only Links`

#### Input Parameters
* `link_id` - _required_ - The unique identifier of the view only link.

### Delete a wiki

> Permanently deletes a wiki page. This action cannot be undone.<br/>
> <br/>
> Note: the "Home" wiki page cannot be deleted.<br/>
> <br/>
> Only contributors with write permissions may delete a wiki page. Attempting to delete a wiki for which you do not have write permission will result in a **403 Forbidden** response.<br/>
> <br/>
> If the request is successful, no content is returned.<br/>
> <br/>
> If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Wikis`

#### Input Parameters
* `wiki_id` - _required_ - The unique identifier of the wiki.

### Retrieve a wiki

> Retrieves the details of a given wiki page.<br/>
> <br/>
> The wiki is a collection of markdown text pages that can be used to further describe or document a project.<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested wiki page, if the request was successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Wikis`

#### Input Parameters
* `wiki_id` - _required_ - The unique identifier of the wiki.

### Rename a wiki

> Renames the given wiki page.<br/>
> <br/>
> Note: the "Home" wiki page may not be renamed.<br/>
> <br/>
> Only write contributors may rename wiki pages. Attempting to rename a wiki page for which you do not have write access will result in a **403 Forbidden** response.<br/>
> <br/>
> Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Wikis`

#### Input Parameters
* `wiki_id` - _required_ - The unique identifier of the wiki.

### Retrieve the content of a wiki

> Retrieves the plaintext content of a wiki in markdown format.<br/>
> <br/>
> Returns `text/markdown` of the wiki content itself.<br/>
> <br/>
> If the request is unsuccessful, plaintext with the error message will be displayed.

*Tags:* `Wikis`

#### Input Parameters
* `wiki_id` - _required_ - The unique identifier of the wiki.

### List all wiki versions

> Lists all versions of a wiki.<br/>
> <br/>
> The wiki is a collection of markdown text pages that can be used to describe the project or dataset contained in the attached node.  Every time the content of a wiki page is updated, a new version is created.<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested wiki, if the request was successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.

*Tags:* `Wikis`

#### Input Parameters
* `wiki_id` - _required_ - The unique identifier of the wiki.

### Update a wiki

> Updates the content of the given wiki page by creating a new wiki version.<br/>
> <br/>
> `content` is the only required field when updating a wiki page.<br/>
> <br/>
> For information on creating a wiki for a node, see [Create a wiki](#operation/nodes_wikis_list_create).<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the created wiki version, if the request is successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

*Tags:* `Wikis`

#### Input Parameters
* `wiki_id` - _required_ - The unique identifier of the wiki.

### Retrieve a wiki version

> A wiki is a collection of markdown text pages that can be used to describe the project or dataset contained in the attached node.  Every time the content of a wiki is updated, a new version is created.<br/>
> <br/>
> Returns a JSON object with a `data` key containing the representation of the requested wiki, if the request was successful.<br/>
> <br/>
> If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#Introduction_error_codes) to understand why this request may have failed.

*Tags:* `Wikis`

#### Input Parameters
* `wiki_id` - _required_ - The unique identifier of the wiki.
* `version_id` - _required_ - The unique identifier of the wiki version

### Retrieve the content of a wiki version

> Retrieves the plaintext content of a specific wiki version in markdown format.<br/>
> <br/>
> Returns `text/markdown` of the wiki content itself.<br/>
> <br/>
> If the request is unsuccessful, plaintext with the error message will be displayed.

*Tags:* `Wikis`

#### Input Parameters
* `wiki_id` - _required_ - The unique identifier of the wiki.
* `version_id` - _required_ - The unique identifier of the wiki version.

## License

**flow**ground :- Telekom iPaaS / osf-io-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
