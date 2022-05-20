
/**
 *Class definition for the Kaltura service: accessControlProfile.
 **/
var KalturaAccessControlProfileService = {
	/**
	 * Add new access control profile.
	 * @param	accessControlProfile	KalturaAccessControlProfile		 (optional)
	 **/
	add: function(accessControlProfile){
		var kparams = new Object();
		kparams.accessControlProfile = accessControlProfile;
		return new KalturaRequestBuilder("accesscontrolprofile", "add", kparams);
	},
	
	/**
	 * Delete access control profile by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrolprofile", "delete", kparams);
	},
	
	/**
	 * Get access control profile by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrolprofile", "get", kparams);
	},
	
	/**
	 * List access control profiles by filter and pager.
	 * @param	filter	KalturaAccessControlProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("accesscontrolprofile", "list", kparams);
	},
	
	/**
	 * Update access control profile by id.
	 * @param	id	int		 (optional)
	 * @param	accessControlProfile	KalturaAccessControlProfile		 (optional)
	 **/
	update: function(id, accessControlProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.accessControlProfile = accessControlProfile;
		return new KalturaRequestBuilder("accesscontrolprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: accessControl.
 **/
var KalturaAccessControlService = {
	/**
	 * Add new Access Control Profile.
	 * @param	accessControl	KalturaAccessControl		 (optional)
	 **/
	add: function(accessControl){
		var kparams = new Object();
		kparams.accessControl = accessControl;
		return new KalturaRequestBuilder("accesscontrol", "add", kparams);
	},
	
	/**
	 * Delete Access Control Profile by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrol", "delete", kparams);
	},
	
	/**
	 * Get Access Control Profile by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("accesscontrol", "get", kparams);
	},
	
	/**
	 * List Access Control Profiles by filter and pager.
	 * @param	filter	KalturaAccessControlFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("accesscontrol", "list", kparams);
	},
	
	/**
	 * Update Access Control Profile by id.
	 * @param	id	int		 (optional)
	 * @param	accessControl	KalturaAccessControl		 (optional)
	 **/
	update: function(id, accessControl){
		var kparams = new Object();
		kparams.id = id;
		kparams.accessControl = accessControl;
		return new KalturaRequestBuilder("accesscontrol", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: adminUser.
 **/
var KalturaAdminUserService = {
	/**
	 * Get an admin session using admin email and password (Used for login to the KMC application).
	 * @param	email	string		 (optional)
	 * @param	password	string		 (optional)
	 * @param	partnerId	int		 (optional, default: null)
	 **/
	login: function(email, password, partnerId){
		if(!partnerId)
			partnerId = null;
		var kparams = new Object();
		kparams.email = email;
		kparams.password = password;
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("adminuser", "login", kparams);
	},
	
	/**
	 * Reset admin user password and send it to the users email address.
	 * @param	email	string		 (optional)
	 **/
	resetPassword: function(email){
		var kparams = new Object();
		kparams.email = email;
		return new KalturaRequestBuilder("adminuser", "resetPassword", kparams);
	},
	
	/**
	 * Set initial users password.
	 * @param	hashKey	string		 (optional)
	 * @param	newPassword	string		new password to set (optional)
	 **/
	setInitialPassword: function(hashKey, newPassword){
		var kparams = new Object();
		kparams.hashKey = hashKey;
		kparams.newPassword = newPassword;
		return new KalturaRequestBuilder("adminuser", "setInitialPassword", kparams);
	},
	
	/**
	 * Update admin user password and email.
	 * @param	email	string		 (optional)
	 * @param	password	string		 (optional)
	 * @param	newEmail	string		Optional, provide only when you want to update the email (optional)
	 * @param	newPassword	string		 (optional)
	 * @param	otp	string		the user's one-time password (optional, default: null)
	 **/
	updatePassword: function(email, password, newEmail, newPassword, otp){
		if(!newEmail)
			newEmail = "";
		if(!newPassword)
			newPassword = "";
		if(!otp)
			otp = null;
		var kparams = new Object();
		kparams.email = email;
		kparams.password = password;
		kparams.newEmail = newEmail;
		kparams.newPassword = newPassword;
		kparams.otp = otp;
		return new KalturaRequestBuilder("adminuser", "updatePassword", kparams);
	}
}

/**
 *Class definition for the Kaltura service: analytics.
 **/
var KalturaAnalyticsService = {
	/**
	 * report query action allows to get a analytics data for specific query dimensions, metrics and filters..
	 * @param	filter	KalturaAnalyticsFilter		the analytics query filter (optional)
	 * @param	pager	KalturaFilterPager		the analytics query result pager (optional, default: null)
	 **/
	query: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("analytics", "query", kparams);
	}
}

/**
 *Class definition for the Kaltura service: appToken.
 **/
var KalturaAppTokenService = {
	/**
	 * Add new application authentication token.
	 * @param	appToken	KalturaAppToken		 (optional)
	 **/
	add: function(appToken){
		var kparams = new Object();
		kparams.appToken = appToken;
		return new KalturaRequestBuilder("apptoken", "add", kparams);
	},
	
	/**
	 * Delete application authentication token by ID.
	 * @param	id	string		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("apptoken", "delete", kparams);
	},
	
	/**
	 * Get application authentication token by ID.
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("apptoken", "get", kparams);
	},
	
	/**
	 * List application authentication tokens by filter and pager.
	 * @param	filter	KalturaAppTokenFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("apptoken", "list", kparams);
	},
	
	/**
	 * Starts a new KS (kaltura Session) based on an application authentication token ID.
	 * @param	id	string		application token ID (optional)
	 * @param	tokenHash	string		a hash [MD5, SHA1, SHA256 and SHA512 are supported] of the current KS concatenated with the application token (optional)
	 * @param	userId	string		session user ID, will be ignored if a different user ID already defined on the application token (optional, default: null)
	 * @param	type	int		session type, will be ignored if a different session type is already defined on the application token (optional, enum: KalturaSessionType, default: null)
	 * @param	expiry	int		session expiry (in seconds), could be overridden by shorter expiry of the application token (optional, default: null)
	 * @param	sessionPrivileges	string		session privileges, will be ignored if a similar privilege is already defined on the application token or the privilege is server reserved (optional, default: null)
	 **/
	startSession: function(id, tokenHash, userId, type, expiry, sessionPrivileges){
		if(!userId)
			userId = null;
		if(!type)
			type = null;
		if(!expiry)
			expiry = null;
		if(!sessionPrivileges)
			sessionPrivileges = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.tokenHash = tokenHash;
		kparams.userId = userId;
		kparams.type = type;
		kparams.expiry = expiry;
		kparams.sessionPrivileges = sessionPrivileges;
		return new KalturaRequestBuilder("apptoken", "startSession", kparams);
	},
	
	/**
	 * Update application authentication token by ID.
	 * @param	id	string		 (optional)
	 * @param	appToken	KalturaAppToken		 (optional)
	 **/
	update: function(id, appToken){
		var kparams = new Object();
		kparams.id = id;
		kparams.appToken = appToken;
		return new KalturaRequestBuilder("apptoken", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: baseEntry.
 **/
var KalturaBaseEntryService = {
	/**
	 * Generic add entry, should be used when the uploaded entry type is not known..
	 * @param	entry	KalturaBaseEntry		 (optional)
	 * @param	type	string		 (optional, enum: KalturaEntryType, default: null)
	 **/
	add: function(entry, type){
		if(!type)
			type = null;
		var kparams = new Object();
		kparams.entry = entry;
		kparams.type = type;
		return new KalturaRequestBuilder("baseentry", "add", kparams);
	},
	
	/**
	 * Attach content resource to entry in status NO_MEDIA.
	 * @param	entryId	string		 (optional)
	 * @param	resource	KalturaResource		 (optional)
	 **/
	addContent: function(entryId, resource){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.resource = resource;
		return new KalturaRequestBuilder("baseentry", "addContent", kparams);
	},
	
	/**
	 * Generic add entry using an uploaded file, should be used when the uploaded entry type is not known..
	 * @param	entry	KalturaBaseEntry		 (optional)
	 * @param	uploadTokenId	string		 (optional)
	 * @param	type	string		 (optional, enum: KalturaEntryType, default: null)
	 **/
	addFromUploadedFile: function(entry, uploadTokenId, type){
		if(!type)
			type = null;
		var kparams = new Object();
		kparams.entry = entry;
		kparams.uploadTokenId = uploadTokenId;
		kparams.type = type;
		return new KalturaRequestBuilder("baseentry", "addFromUploadedFile", kparams);
	},
	
	/**
	 * Anonymously rank an entry, no validation is done on duplicate rankings..
	 * @param	entryId	string		 (optional)
	 * @param	rank	int		 (optional)
	 **/
	anonymousRank: function(entryId, rank){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.rank = rank;
		return new KalturaRequestBuilder("baseentry", "anonymousRank", kparams);
	},
	
	/**
	 * Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable)..
	 * @param	entryId	string		 (optional)
	 **/
	approve: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("baseentry", "approve", kparams);
	},
	
	/**
	 * Clone an entry with optional attributes to apply to the clone.
	 * @param	entryId	string		Id of entry to clone (optional)
	 * @param	cloneOptions	array		 (optional, default: null)
	 **/
	cloneAction: function(entryId, cloneOptions){
		if(!cloneOptions)
			cloneOptions = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.cloneOptions = cloneOptions;
		return new KalturaRequestBuilder("baseentry", "clone", kparams);
	},
	
	/**
	 * Count base entries by filter..
	 * @param	filter	KalturaBaseEntryFilter		Entry filter (optional, default: null)
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("baseentry", "count", kparams);
	},
	
	/**
	 * Delete an entry..
	 * @param	entryId	string		Entry id to delete (optional)
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("baseentry", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	storageProfileId	int		 (optional)
	 **/
	exportAction: function(entryId, storageProfileId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.storageProfileId = storageProfileId;
		return new KalturaRequestBuilder("baseentry", "export", kparams);
	},
	
	/**
	 * add batch job that sends an email with a link to download an updated CSV that contains list of entries.
	 * @param	filter	KalturaBaseEntryFilter		A filter used to exclude specific entries (optional, default: null)
	 * @param	metadataProfileId	int		 (optional, default: null)
	 * @param	additionalFields	array		 (optional, default: null)
	 * @param	mappedFields	array		mapping between field headline and its mapped value (optional, default: null)
	 **/
	exportToCsv: function(filter, metadataProfileId, additionalFields, mappedFields){
		if(!filter)
			filter = null;
		if(!metadataProfileId)
			metadataProfileId = null;
		if(!additionalFields)
			additionalFields = null;
		if(!mappedFields)
			mappedFields = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		kparams.metadataProfileId = metadataProfileId;
		kparams.additionalFields = additionalFields;
		kparams.mappedFields = mappedFields;
		return new KalturaRequestBuilder("baseentry", "exportToCsv", kparams);
	},
	
	/**
	 * Flag inappropriate entry for moderation..
	 * @param	moderationFlag	KalturaModerationFlag		 (optional)
	 **/
	flag: function(moderationFlag){
		var kparams = new Object();
		kparams.moderationFlag = moderationFlag;
		return new KalturaRequestBuilder("baseentry", "flag", kparams);
	},
	
	/**
	 * Get base entry by ID..
	 * @param	entryId	string		Entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("baseentry", "get", kparams);
	},
	
	/**
	 * Get an array of KalturaBaseEntry objects by a comma-separated list of ids..
	 * @param	entryIds	string		Comma separated string of entry ids (optional)
	 **/
	getByIds: function(entryIds){
		var kparams = new Object();
		kparams.entryIds = entryIds;
		return new KalturaRequestBuilder("baseentry", "getByIds", kparams);
	},
	
	/**
	 * This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information..
	 * @param	entryId	string		 (optional)
	 * @param	contextDataParams	KalturaEntryContextDataParams		 (optional)
	 **/
	getContextData: function(entryId, contextDataParams){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.contextDataParams = contextDataParams;
		return new KalturaRequestBuilder("baseentry", "getContextData", kparams);
	},
	
	/**
	 * This action delivers all data relevant for player.
	 * @param	entryId	string		 (optional)
	 * @param	contextDataParams	KalturaPlaybackContextOptions		 (optional)
	 **/
	getPlaybackContext: function(entryId, contextDataParams){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.contextDataParams = contextDataParams;
		return new KalturaRequestBuilder("baseentry", "getPlaybackContext", kparams);
	},
	
	/**
	 * Get remote storage existing paths for the asset..
	 * @param	entryId	string		 (optional)
	 **/
	getRemotePaths: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("baseentry", "getRemotePaths", kparams);
	},
	
	/**
	 * Index an entry by id..
	 * @param	id	string		 (optional)
	 * @param	shouldUpdate	bool		 (optional, default: true)
	 **/
	index: function(id, shouldUpdate){
		if(!shouldUpdate)
			shouldUpdate = true;
		var kparams = new Object();
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("baseentry", "index", kparams);
	},
	
	/**
	 * List base entries by filter with paging support..
	 * @param	filter	KalturaBaseEntryFilter		Entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("baseentry", "list", kparams);
	},
	
	/**
	 * List base entries by filter according to reference id.
	 * @param	refId	string		Entry Reference ID (optional)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listByReferenceId: function(refId, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.refId = refId;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("baseentry", "listByReferenceId", kparams);
	},
	
	/**
	 * List all pending flags for the entry..
	 * @param	entryId	string		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listFlags: function(entryId, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("baseentry", "listFlags", kparams);
	},
	
	/**
	 * Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non-playable)..
	 * @param	entryId	string		 (optional)
	 **/
	reject: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("baseentry", "reject", kparams);
	},
	
	/**
	 * Update base entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Entry id to update (optional)
	 * @param	baseEntry	KalturaBaseEntry		Base entry metadata to update (optional)
	 **/
	update: function(entryId, baseEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.baseEntry = baseEntry;
		return new KalturaRequestBuilder("baseentry", "update", kparams);
	},
	
	/**
	 * Update the content resource associated with the entry..
	 * @param	entryId	string		Entry id to update (optional)
	 * @param	resource	KalturaResource		Resource to be used to replace entry content (optional)
	 * @param	conversionProfileId	int		The conversion profile id to be used on the entry (optional, default: null)
	 * @param	advancedOptions	KalturaEntryReplacementOptions		Additional update content options (optional, default: null)
	 **/
	updateContent: function(entryId, resource, conversionProfileId, advancedOptions){
		if(!conversionProfileId)
			conversionProfileId = null;
		if(!advancedOptions)
			advancedOptions = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.resource = resource;
		kparams.conversionProfileId = conversionProfileId;
		if (advancedOptions != null)
			kparams.advancedOptions = advancedOptions;
		return new KalturaRequestBuilder("baseentry", "updateContent", kparams);
	},
	
	/**
	 * Update entry thumbnail from a different entry by a specified time offset (in seconds)..
	 * @param	entryId	string		Media entry id (optional)
	 * @param	sourceEntryId	string		Media entry id (optional)
	 * @param	timeOffset	int		Time offset (in seconds) (optional)
	 **/
	updateThumbnailFromSourceEntry: function(entryId, sourceEntryId, timeOffset){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.sourceEntryId = sourceEntryId;
		kparams.timeOffset = timeOffset;
		return new KalturaRequestBuilder("baseentry", "updateThumbnailFromSourceEntry", kparams);
	},
	
	/**
	 * Update entry thumbnail using URL..
	 * @param	entryId	string		Media entry id (optional)
	 * @param	url	string		file url (optional)
	 **/
	updateThumbnailFromUrl: function(entryId, url){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.url = url;
		return new KalturaRequestBuilder("baseentry", "updateThumbnailFromUrl", kparams);
	},
	
	/**
	 * Update entry thumbnail using a raw jpeg file..
	 * @param	entryId	string		Media entry id (optional)
	 * @param	fileData	HTMLElement		Jpeg file data (optional)
	 **/
	updateThumbnailJpeg: function(entryId, fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.entryId = entryId;
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("baseentry", "updateThumbnailJpeg", kparams, kfiles);
	},
	
	/**
	 * Upload a file to Kaltura, that can be used to create an entry..
	 * @param	fileData	HTMLElement		The file data (optional)
	 **/
	upload: function(fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("baseentry", "upload", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: bulkUpload.
 **/
var KalturaBulkUploadService = {
	/**
	 * Aborts the bulk upload and all its child jobs.
	 * @param	id	int		job id (optional)
	 **/
	abort: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload", "abort", kparams);
	},
	
	/**
	 * Add new bulk upload batch job
 *		 Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *		 If no conversion profile was specified, partner's default will be used.
	 * @param	conversionProfileId	int		Conversion profile id to use for converting the current bulk (-1 to use partner's default) (optional)
	 * @param	csvFileData	HTMLElement		bulk upload file (optional)
	 * @param	bulkUploadType	string		 (optional, enum: KalturaBulkUploadType, default: null)
	 * @param	uploadedBy	string		 (optional, default: null)
	 * @param	fileName	string		Friendly name of the file, used to be recognized later in the logs. (optional, default: null)
	 **/
	add: function(conversionProfileId, csvFileData, bulkUploadType, uploadedBy, fileName){
		if(!bulkUploadType)
			bulkUploadType = null;
		if(!uploadedBy)
			uploadedBy = null;
		if(!fileName)
			fileName = null;
		var kparams = new Object();
		var kfiles = new Object();
		kparams.conversionProfileId = conversionProfileId;
		kfiles.csvFileData = csvFileData;
		kparams.bulkUploadType = bulkUploadType;
		kparams.uploadedBy = uploadedBy;
		kparams.fileName = fileName;
		return new KalturaRequestBuilder("bulkupload", "add", kparams, kfiles);
	},
	
	/**
	 * Get bulk upload batch job by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload", "get", kparams);
	},
	
	/**
	 * List bulk upload batch jobs.
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("bulkupload", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: categoryEntry.
 **/
var KalturaCategoryEntryService = {
	/**
	 * activate CategoryEntry when it is pending moderation.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 **/
	activate: function(entryId, categoryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryentry", "activate", kparams);
	},
	
	/**
	 * Add new CategoryEntry.
	 * @param	categoryEntry	KalturaCategoryEntry		 (optional)
	 **/
	add: function(categoryEntry){
		var kparams = new Object();
		kparams.categoryEntry = categoryEntry;
		return new KalturaRequestBuilder("categoryentry", "add", kparams);
	},
	
	/**
	 * .
	 * @param	bulkUploadData	KalturaBulkServiceData		 (optional)
	 * @param	bulkUploadCategoryEntryData	KalturaBulkUploadCategoryEntryData		 (optional, default: null)
	 **/
	addFromBulkUpload: function(bulkUploadData, bulkUploadCategoryEntryData){
		if(!bulkUploadCategoryEntryData)
			bulkUploadCategoryEntryData = null;
		var kparams = new Object();
		kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadCategoryEntryData != null)
			kparams.bulkUploadCategoryEntryData = bulkUploadCategoryEntryData;
		return new KalturaRequestBuilder("categoryentry", "addFromBulkUpload", kparams);
	},
	
	/**
	 * Delete CategoryEntry.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 **/
	deleteAction: function(entryId, categoryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryentry", "delete", kparams);
	},
	
	/**
	 * Index CategoryEntry by Id.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 * @param	shouldUpdate	bool		 (optional, default: true)
	 **/
	index: function(entryId, categoryId, shouldUpdate){
		if(!shouldUpdate)
			shouldUpdate = true;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("categoryentry", "index", kparams);
	},
	
	/**
	 * List all categoryEntry.
	 * @param	filter	KalturaCategoryEntryFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("categoryentry", "list", kparams);
	},
	
	/**
	 * activate CategoryEntry when it is pending moderation.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 **/
	reject: function(entryId, categoryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryentry", "reject", kparams);
	},
	
	/**
	 * update privacy context from the category.
	 * @param	entryId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 **/
	syncPrivacyContext: function(entryId, categoryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryentry", "syncPrivacyContext", kparams);
	},
	
	/**
	 * .
	 * @param	fileData	HTMLElement		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null)
	 * @param	bulkUploadCategoryEntryData	KalturaBulkUploadCategoryEntryData		 (optional, default: null)
	 **/
	updateStatusFromBulk: function(fileData, bulkUploadData, bulkUploadCategoryEntryData){
		if(!bulkUploadData)
			bulkUploadData = null;
		if(!bulkUploadCategoryEntryData)
			bulkUploadCategoryEntryData = null;
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadCategoryEntryData != null)
			kparams.bulkUploadCategoryEntryData = bulkUploadCategoryEntryData;
		return new KalturaRequestBuilder("categoryentry", "updateStatusFromBulk", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: category.
 **/
var KalturaCategoryService = {
	/**
	 * Add new Category.
	 * @param	category	KalturaCategory		 (optional)
	 **/
	add: function(category){
		var kparams = new Object();
		kparams.category = category;
		return new KalturaRequestBuilder("category", "add", kparams);
	},
	
	/**
	 * .
	 * @param	fileData	HTMLElement		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null)
	 * @param	bulkUploadCategoryData	KalturaBulkUploadCategoryData		 (optional, default: null)
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData, bulkUploadCategoryData){
		if(!bulkUploadData)
			bulkUploadData = null;
		if(!bulkUploadCategoryData)
			bulkUploadCategoryData = null;
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadCategoryData != null)
			kparams.bulkUploadCategoryData = bulkUploadCategoryData;
		return new KalturaRequestBuilder("category", "addFromBulkUpload", kparams, kfiles);
	},
	
	/**
	 * Delete a Category.
	 * @param	id	int		 (optional)
	 * @param	moveEntriesToParentCategory	int		 (optional, enum: KalturaNullableBoolean, default: 1)
	 **/
	deleteAction: function(id, moveEntriesToParentCategory){
		if(!moveEntriesToParentCategory)
			moveEntriesToParentCategory = 1;
		var kparams = new Object();
		kparams.id = id;
		kparams.moveEntriesToParentCategory = moveEntriesToParentCategory;
		return new KalturaRequestBuilder("category", "delete", kparams);
	},
	
	/**
	 * Get Category by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("category", "get", kparams);
	},
	
	/**
	 * Index Category by id.
	 * @param	id	int		 (optional)
	 * @param	shouldUpdate	bool		 (optional, default: true)
	 **/
	index: function(id, shouldUpdate){
		if(!shouldUpdate)
			shouldUpdate = true;
		var kparams = new Object();
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("category", "index", kparams);
	},
	
	/**
	 * List all categories.
	 * @param	filter	KalturaCategoryFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("category", "list", kparams);
	},
	
	/**
	 * Move categories that belong to the same parent category to a target categroy - enabled only for ks with disable entitlement.
	 * @param	categoryIds	string		 (optional)
	 * @param	targetCategoryParentId	int		 (optional)
	 **/
	move: function(categoryIds, targetCategoryParentId){
		var kparams = new Object();
		kparams.categoryIds = categoryIds;
		kparams.targetCategoryParentId = targetCategoryParentId;
		return new KalturaRequestBuilder("category", "move", kparams);
	},
	
	/**
	 * Unlock categories.
	 **/
	unlockCategories: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("category", "unlockCategories", kparams);
	},
	
	/**
	 * Update Category.
	 * @param	id	int		 (optional)
	 * @param	category	KalturaCategory		 (optional)
	 **/
	update: function(id, category){
		var kparams = new Object();
		kparams.id = id;
		kparams.category = category;
		return new KalturaRequestBuilder("category", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: categoryUser.
 **/
var KalturaCategoryUserService = {
	/**
	 * activate CategoryUser.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 **/
	activate: function(categoryId, userId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("categoryuser", "activate", kparams);
	},
	
	/**
	 * Add new CategoryUser.
	 * @param	categoryUser	KalturaCategoryUser		 (optional)
	 **/
	add: function(categoryUser){
		var kparams = new Object();
		kparams.categoryUser = categoryUser;
		return new KalturaRequestBuilder("categoryuser", "add", kparams);
	},
	
	/**
	 * .
	 * @param	fileData	HTMLElement		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null)
	 * @param	bulkUploadCategoryUserData	KalturaBulkUploadCategoryUserData		 (optional, default: null)
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData, bulkUploadCategoryUserData){
		if(!bulkUploadData)
			bulkUploadData = null;
		if(!bulkUploadCategoryUserData)
			bulkUploadCategoryUserData = null;
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadCategoryUserData != null)
			kparams.bulkUploadCategoryUserData = bulkUploadCategoryUserData;
		return new KalturaRequestBuilder("categoryuser", "addFromBulkUpload", kparams, kfiles);
	},
	
	/**
	 * Copy all member from parent category.
	 * @param	categoryId	int		 (optional)
	 **/
	copyFromCategory: function(categoryId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		return new KalturaRequestBuilder("categoryuser", "copyFromCategory", kparams);
	},
	
	/**
	 * reject CategoryUser.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 **/
	deactivate: function(categoryId, userId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("categoryuser", "deactivate", kparams);
	},
	
	/**
	 * Delete a CategoryUser.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 **/
	deleteAction: function(categoryId, userId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("categoryuser", "delete", kparams);
	},
	
	/**
	 * Get CategoryUser by id.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 **/
	get: function(categoryId, userId){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("categoryuser", "get", kparams);
	},
	
	/**
	 * Index CategoryUser by userid and category id.
	 * @param	userId	string		 (optional)
	 * @param	categoryId	int		 (optional)
	 * @param	shouldUpdate	bool		 (optional, default: true)
	 **/
	index: function(userId, categoryId, shouldUpdate){
		if(!shouldUpdate)
			shouldUpdate = true;
		var kparams = new Object();
		kparams.userId = userId;
		kparams.categoryId = categoryId;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("categoryuser", "index", kparams);
	},
	
	/**
	 * List all categories.
	 * @param	filter	KalturaCategoryUserFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("categoryuser", "list", kparams);
	},
	
	/**
	 * Update CategoryUser by id.
	 * @param	categoryId	int		 (optional)
	 * @param	userId	string		 (optional)
	 * @param	categoryUser	KalturaCategoryUser		 (optional)
	 * @param	override	bool		- to override manual changes (optional, default: false)
	 **/
	update: function(categoryId, userId, categoryUser, override){
		if(!override)
			override = false;
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		kparams.categoryUser = categoryUser;
		kparams.override = override;
		return new KalturaRequestBuilder("categoryuser", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: conversionProfileAssetParams.
 **/
var KalturaConversionProfileAssetParamsService = {
	/**
	 * Lists asset parmas of conversion profile by ID.
	 * @param	filter	KalturaConversionProfileAssetParamsFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("conversionprofileassetparams", "list", kparams);
	},
	
	/**
	 * Update asset parmas of conversion profile by ID.
	 * @param	conversionProfileId	int		 (optional)
	 * @param	assetParamsId	int		 (optional)
	 * @param	conversionProfileAssetParams	KalturaConversionProfileAssetParams		 (optional)
	 **/
	update: function(conversionProfileId, assetParamsId, conversionProfileAssetParams){
		var kparams = new Object();
		kparams.conversionProfileId = conversionProfileId;
		kparams.assetParamsId = assetParamsId;
		kparams.conversionProfileAssetParams = conversionProfileAssetParams;
		return new KalturaRequestBuilder("conversionprofileassetparams", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: conversionProfile.
 **/
var KalturaConversionProfileService = {
	/**
	 * Add new Conversion Profile.
	 * @param	conversionProfile	KalturaConversionProfile		 (optional)
	 **/
	add: function(conversionProfile){
		var kparams = new Object();
		kparams.conversionProfile = conversionProfile;
		return new KalturaRequestBuilder("conversionprofile", "add", kparams);
	},
	
	/**
	 * Delete Conversion Profile by ID.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("conversionprofile", "delete", kparams);
	},
	
	/**
	 * Get Conversion Profile by ID.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("conversionprofile", "get", kparams);
	},
	
	/**
	 * Get the partner's default conversion profile.
	 * @param	type	string		 (optional, enum: KalturaConversionProfileType, default: null)
	 **/
	getDefault: function(type){
		if(!type)
			type = null;
		var kparams = new Object();
		kparams.type = type;
		return new KalturaRequestBuilder("conversionprofile", "getDefault", kparams);
	},
	
	/**
	 * List Conversion Profiles by filter with paging support.
	 * @param	filter	KalturaConversionProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("conversionprofile", "list", kparams);
	},
	
	/**
	 * Set Conversion Profile to be the partner default.
	 * @param	id	int		 (optional)
	 **/
	setAsDefault: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("conversionprofile", "setAsDefault", kparams);
	},
	
	/**
	 * Update Conversion Profile by ID.
	 * @param	id	int		 (optional)
	 * @param	conversionProfile	KalturaConversionProfile		 (optional)
	 **/
	update: function(id, conversionProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.conversionProfile = conversionProfile;
		return new KalturaRequestBuilder("conversionprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: data.
 **/
var KalturaDataService = {
	/**
	 * Adds a new data entry.
	 * @param	dataEntry	KalturaDataEntry		Data entry (optional)
	 **/
	add: function(dataEntry){
		var kparams = new Object();
		kparams.dataEntry = dataEntry;
		return new KalturaRequestBuilder("data", "add", kparams);
	},
	
	/**
	 * Update the dataContent of data entry using a resource.
	 * @param	entryId	string		 (optional)
	 * @param	resource	KalturaGenericDataCenterContentResource		 (optional)
	 **/
	addContent: function(entryId, resource){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.resource = resource;
		return new KalturaRequestBuilder("data", "addContent", kparams);
	},
	
	/**
	 * Delete a data entry..
	 * @param	entryId	string		Data entry id to delete (optional)
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("data", "delete", kparams);
	},
	
	/**
	 * Get data entry by ID..
	 * @param	entryId	string		Data entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("data", "get", kparams);
	},
	
	/**
	 * List data entries by filter with paging support..
	 * @param	filter	KalturaDataEntryFilter		Document entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("data", "list", kparams);
	},
	
	/**
	 * Update data entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Data entry id to update (optional)
	 * @param	documentEntry	KalturaDataEntry		Data entry metadata to update (optional)
	 **/
	update: function(entryId, documentEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.documentEntry = documentEntry;
		return new KalturaRequestBuilder("data", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: deliveryProfile.
 **/
var KalturaDeliveryProfileService = {
	/**
	 * Add new delivery..
	 * @param	delivery	KalturaDeliveryProfile		 (optional)
	 **/
	add: function(delivery){
		var kparams = new Object();
		kparams.delivery = delivery;
		return new KalturaRequestBuilder("deliveryprofile", "add", kparams);
	},
	
	/**
	 * Add delivery based on existing delivery.
 *		Must provide valid sourceDeliveryId.
	 * @param	deliveryId	int		 (optional)
	 **/
	cloneAction: function(deliveryId){
		var kparams = new Object();
		kparams.deliveryId = deliveryId;
		return new KalturaRequestBuilder("deliveryprofile", "clone", kparams);
	},
	
	/**
	 * Get delivery by id.
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("deliveryprofile", "get", kparams);
	},
	
	/**
	 * Retrieve a list of available delivery depends on the filter given.
	 * @param	filter	KalturaDeliveryProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("deliveryprofile", "list", kparams);
	},
	
	/**
	 * Update existing delivery profile.
	 * @param	id	string		 (optional)
	 * @param	delivery	KalturaDeliveryProfile		 (optional)
	 **/
	update: function(id, delivery){
		var kparams = new Object();
		kparams.id = id;
		kparams.delivery = delivery;
		return new KalturaRequestBuilder("deliveryprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: EmailIngestionProfile.
 **/
var KalturaEmailIngestionProfileService = {
	/**
	 * EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
	 * @param	EmailIP	KalturaEmailIngestionProfile		Mandatory input parameter of type KalturaEmailIngestionProfile (optional)
	 **/
	add: function(EmailIP){
		var kparams = new Object();
		kparams.EmailIP = EmailIP;
		return new KalturaRequestBuilder("emailingestionprofile", "add", kparams);
	},
	
	/**
	 * add KalturaMediaEntry from email ingestion.
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional)
	 * @param	uploadTokenId	string		Upload token id (optional)
	 * @param	emailProfId	int		 (optional)
	 * @param	fromAddress	string		 (optional)
	 * @param	emailMsgId	string		 (optional)
	 **/
	addMediaEntry: function(mediaEntry, uploadTokenId, emailProfId, fromAddress, emailMsgId){
		var kparams = new Object();
		kparams.mediaEntry = mediaEntry;
		kparams.uploadTokenId = uploadTokenId;
		kparams.emailProfId = emailProfId;
		kparams.fromAddress = fromAddress;
		kparams.emailMsgId = emailMsgId;
		return new KalturaRequestBuilder("emailingestionprofile", "addMediaEntry", kparams);
	},
	
	/**
	 * Delete an existing EmailIngestionProfile.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("emailingestionprofile", "delete", kparams);
	},
	
	/**
	 * Retrieve a EmailIngestionProfile by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("emailingestionprofile", "get", kparams);
	},
	
	/**
	 * Retrieve a EmailIngestionProfile by email address.
	 * @param	emailAddress	string		 (optional)
	 **/
	getByEmailAddress: function(emailAddress){
		var kparams = new Object();
		kparams.emailAddress = emailAddress;
		return new KalturaRequestBuilder("emailingestionprofile", "getByEmailAddress", kparams);
	},
	
	/**
	 * Update an existing EmailIngestionProfile.
	 * @param	id	int		 (optional)
	 * @param	EmailIP	KalturaEmailIngestionProfile		 (optional)
	 **/
	update: function(id, EmailIP){
		var kparams = new Object();
		kparams.id = id;
		kparams.EmailIP = EmailIP;
		return new KalturaRequestBuilder("emailingestionprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: entryServerNode.
 **/
var KalturaEntryServerNodeService = {
	/**
	 * .
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("entryservernode", "get", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaEntryServerNodeFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("entryservernode", "list", kparams);
	},
	
	/**
	 * .
	 * @param	id	int		 (optional)
	 * @param	entryServerNode	KalturaEntryServerNode		 (optional)
	 **/
	update: function(id, entryServerNode){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryServerNode = entryServerNode;
		return new KalturaRequestBuilder("entryservernode", "update", kparams);
	},
	
	/**
	 * .
	 * @param	id	string		 (optional)
	 * @param	status	int		 (optional, enum: KalturaEntryServerNodeStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("entryservernode", "updateStatus", kparams);
	},
	
	/**
	 * Validates server node still registered on entry.
	 * @param	id	int		entry server node id (optional)
	 **/
	validateRegisteredEntryServerNode: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("entryservernode", "validateRegisteredEntryServerNode", kparams);
	}
}

/**
 *Class definition for the Kaltura service: exportcsv.
 **/
var KalturaExportcsvService = {
	/**
	 * Will serve a requested CSV.
	 * @param	id	string		- the requested file id (optional)
	 **/
	serveCsv: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("exportcsv", "serveCsv", kparams);
	}
}

/**
 *Class definition for the Kaltura service: fileAsset.
 **/
var KalturaFileAssetService = {
	/**
	 * Add new file asset.
	 * @param	fileAsset	KalturaFileAsset		 (optional)
	 **/
	add: function(fileAsset){
		var kparams = new Object();
		kparams.fileAsset = fileAsset;
		return new KalturaRequestBuilder("fileasset", "add", kparams);
	},
	
	/**
	 * Delete file asset by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("fileasset", "delete", kparams);
	},
	
	/**
	 * Get file asset by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("fileasset", "get", kparams);
	},
	
	/**
	 * List file assets by filter and pager.
	 * @param	filter	KalturaFileAssetFilter		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("fileasset", "list", kparams);
	},
	
	/**
	 * Set content of file asset.
	 * @param	id	int		 (optional)
	 * @param	contentResource	KalturaContentResource		 (optional)
	 **/
	setContent: function(id, contentResource){
		var kparams = new Object();
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new KalturaRequestBuilder("fileasset", "setContent", kparams);
	},
	
	/**
	 * Update file asset by id.
	 * @param	id	int		 (optional)
	 * @param	fileAsset	KalturaFileAsset		 (optional)
	 **/
	update: function(id, fileAsset){
		var kparams = new Object();
		kparams.id = id;
		kparams.fileAsset = fileAsset;
		return new KalturaRequestBuilder("fileasset", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: flavorAsset.
 **/
var KalturaFlavorAssetService = {
	/**
	 * Add flavor asset.
	 * @param	entryId	string		 (optional)
	 * @param	flavorAsset	KalturaFlavorAsset		 (optional)
	 **/
	add: function(entryId, flavorAsset){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.flavorAsset = flavorAsset;
		return new KalturaRequestBuilder("flavorasset", "add", kparams);
	},
	
	/**
	 * Add and convert new Flavor Asset for Entry with specific Flavor Params.
	 * @param	entryId	string		 (optional)
	 * @param	flavorParamsId	int		 (optional)
	 * @param	priority	int		 (optional)
	 **/
	convert: function(entryId, flavorParamsId, priority){
		if(!priority)
			priority = 0;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.flavorParamsId = flavorParamsId;
		kparams.priority = priority;
		return new KalturaRequestBuilder("flavorasset", "convert", kparams);
	},
	
	/**
	 * Delete Flavor Asset by ID.
	 * @param	id	string		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorasset", "delete", kparams);
	},
	
	/**
	 * delete all local file syncs for this asset.
	 * @param	assetId	string		 (optional)
	 **/
	deleteLocalContent: function(assetId){
		var kparams = new Object();
		kparams.assetId = assetId;
		return new KalturaRequestBuilder("flavorasset", "deleteLocalContent", kparams);
	},
	
	/**
	 * manually export an asset.
	 * @param	assetId	string		 (optional)
	 * @param	storageProfileId	int		 (optional)
	 **/
	exportAction: function(assetId, storageProfileId){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.storageProfileId = storageProfileId;
		return new KalturaRequestBuilder("flavorasset", "export", kparams);
	},
	
	/**
	 * Get Flavor Asset by ID.
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorasset", "get", kparams);
	},
	
	/**
	 * Get Flavor Assets for Entry.
	 * @param	entryId	string		 (optional)
	 **/
	getByEntryId: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("flavorasset", "getByEntryId", kparams);
	},
	
	/**
	 * Get download URL for the Flavor Asset.
	 * @param	id	string		 (optional)
	 * @param	useCdn	bool		 (optional, default: false)
	 **/
	getDownloadUrl: function(id, useCdn){
		if(!useCdn)
			useCdn = false;
		var kparams = new Object();
		kparams.id = id;
		kparams.useCdn = useCdn;
		return new KalturaRequestBuilder("flavorasset", "getDownloadUrl", kparams);
	},
	
	/**
	 * Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa).
	 * @param	entryId	string		 (optional)
	 **/
	getFlavorAssetsWithParams: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("flavorasset", "getFlavorAssetsWithParams", kparams);
	},
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param	id	string		 (optional)
	 **/
	getRemotePaths: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorasset", "getRemotePaths", kparams);
	},
	
	/**
	 * Get download URL for the asset.
	 * @param	id	string		 (optional)
	 * @param	storageId	int		 (optional, default: null)
	 * @param	forceProxy	bool		 (optional, default: false)
	 * @param	options	KalturaFlavorAssetUrlOptions		 (optional, default: null)
	 **/
	getUrl: function(id, storageId, forceProxy, options){
		if(!storageId)
			storageId = null;
		if(!forceProxy)
			forceProxy = false;
		if(!options)
			options = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.storageId = storageId;
		kparams.forceProxy = forceProxy;
		if (options != null)
			kparams.options = options;
		return new KalturaRequestBuilder("flavorasset", "getUrl", kparams);
	},
	
	/**
	 * Get web playable Flavor Assets for Entry.
	 * @param	entryId	string		 (optional)
	 **/
	getWebPlayableByEntryId: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("flavorasset", "getWebPlayableByEntryId", kparams);
	},
	
	/**
	 * List Flavor Assets by filter and pager.
	 * @param	filter	KalturaAssetFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("flavorasset", "list", kparams);
	},
	
	/**
	 * Reconvert Flavor Asset by ID.
	 * @param	id	string		Flavor Asset ID (optional)
	 **/
	reconvert: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorasset", "reconvert", kparams);
	},
	
	/**
	 * serve cmd line to transcode the ad.
	 * @param	assetId	string		 (optional)
	 * @param	ffprobeJson	string		 (optional, default: null)
	 * @param	duration	string		 (optional, default: null)
	 **/
	serveAdStitchCmd: function(assetId, ffprobeJson, duration){
		if(!ffprobeJson)
			ffprobeJson = null;
		if(!duration)
			duration = null;
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.ffprobeJson = ffprobeJson;
		kparams.duration = duration;
		return new KalturaRequestBuilder("flavorasset", "serveAdStitchCmd", kparams);
	},
	
	/**
	 * Set a given flavor as the original flavor.
	 * @param	assetId	string		 (optional)
	 **/
	setAsSource: function(assetId){
		var kparams = new Object();
		kparams.assetId = assetId;
		return new KalturaRequestBuilder("flavorasset", "setAsSource", kparams);
	},
	
	/**
	 * Update content of flavor asset.
	 * @param	id	string		 (optional)
	 * @param	contentResource	KalturaContentResource		 (optional)
	 **/
	setContent: function(id, contentResource){
		var kparams = new Object();
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new KalturaRequestBuilder("flavorasset", "setContent", kparams);
	},
	
	/**
	 * Update flavor asset.
	 * @param	id	string		 (optional)
	 * @param	flavorAsset	KalturaFlavorAsset		 (optional)
	 **/
	update: function(id, flavorAsset){
		var kparams = new Object();
		kparams.id = id;
		kparams.flavorAsset = flavorAsset;
		return new KalturaRequestBuilder("flavorasset", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: flavorParamsOutput.
 **/
var KalturaFlavorParamsOutputService = {
	/**
	 * Get flavor params output object by ID.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorparamsoutput", "get", kparams);
	},
	
	/**
	 * List flavor params output objects by filter and pager.
	 * @param	filter	KalturaFlavorParamsOutputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("flavorparamsoutput", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: flavorParams.
 **/
var KalturaFlavorParamsService = {
	/**
	 * Add new Flavor Params.
	 * @param	flavorParams	KalturaFlavorParams		 (optional)
	 **/
	add: function(flavorParams){
		var kparams = new Object();
		kparams.flavorParams = flavorParams;
		return new KalturaRequestBuilder("flavorparams", "add", kparams);
	},
	
	/**
	 * Delete Flavor Params by ID.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorparams", "delete", kparams);
	},
	
	/**
	 * Get Flavor Params by ID.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("flavorparams", "get", kparams);
	},
	
	/**
	 * Get Flavor Params by Conversion Profile ID.
	 * @param	conversionProfileId	int		 (optional)
	 **/
	getByConversionProfileId: function(conversionProfileId){
		var kparams = new Object();
		kparams.conversionProfileId = conversionProfileId;
		return new KalturaRequestBuilder("flavorparams", "getByConversionProfileId", kparams);
	},
	
	/**
	 * List Flavor Params by filter with paging support (By default - all system default params will be listed too).
	 * @param	filter	KalturaFlavorParamsFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("flavorparams", "list", kparams);
	},
	
	/**
	 * Update Flavor Params by ID.
	 * @param	id	int		 (optional)
	 * @param	flavorParams	KalturaFlavorParams		 (optional)
	 **/
	update: function(id, flavorParams){
		var kparams = new Object();
		kparams.id = id;
		kparams.flavorParams = flavorParams;
		return new KalturaRequestBuilder("flavorparams", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: groupUser.
 **/
var KalturaGroupUserService = {
	/**
	 * Add new GroupUser.
	 * @param	groupUser	KalturaGroupUser		 (optional)
	 **/
	add: function(groupUser){
		var kparams = new Object();
		kparams.groupUser = groupUser;
		return new KalturaRequestBuilder("groupuser", "add", kparams);
	},
	
	/**
	 * delete by userId and groupId.
	 * @param	userId	string		 (optional)
	 * @param	groupId	string		 (optional)
	 **/
	deleteAction: function(userId, groupId){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.groupId = groupId;
		return new KalturaRequestBuilder("groupuser", "delete", kparams);
	},
	
	/**
	 * List all GroupUsers.
	 * @param	filter	KalturaGroupUserFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("groupuser", "list", kparams);
	},
	
	/**
	 * sync by userId and groupIds.
	 * @param	userId	string		 (optional)
	 * @param	groupIds	string		 (optional, default: null)
	 * @param	removeFromExistingGroups	bool		 (optional, default: true)
	 * @param	createNewGroups	bool		 (optional, default: true)
	 **/
	sync: function(userId, groupIds, removeFromExistingGroups, createNewGroups){
		if(!groupIds)
			groupIds = null;
		if(!removeFromExistingGroups)
			removeFromExistingGroups = true;
		if(!createNewGroups)
			createNewGroups = true;
		var kparams = new Object();
		kparams.userId = userId;
		kparams.groupIds = groupIds;
		kparams.removeFromExistingGroups = removeFromExistingGroups;
		kparams.createNewGroups = createNewGroups;
		return new KalturaRequestBuilder("groupuser", "sync", kparams);
	},
	
	/**
	 * update GroupUser.
	 * @param	groupUserId	string		 (optional)
	 * @param	groupUser	KalturaGroupUser		Id (optional)
	 **/
	update: function(groupUserId, groupUser){
		var kparams = new Object();
		kparams.groupUserId = groupUserId;
		kparams.groupUser = groupUser;
		return new KalturaRequestBuilder("groupuser", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: liveChannelSegment.
 **/
var KalturaLiveChannelSegmentService = {
	/**
	 * Add new live channel segment.
	 * @param	liveChannelSegment	KalturaLiveChannelSegment		 (optional)
	 **/
	add: function(liveChannelSegment){
		var kparams = new Object();
		kparams.liveChannelSegment = liveChannelSegment;
		return new KalturaRequestBuilder("livechannelsegment", "add", kparams);
	},
	
	/**
	 * Delete live channel segment by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannelsegment", "delete", kparams);
	},
	
	/**
	 * Get live channel segment by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannelsegment", "get", kparams);
	},
	
	/**
	 * List live channel segments by filter and pager.
	 * @param	filter	KalturaLiveChannelSegmentFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("livechannelsegment", "list", kparams);
	},
	
	/**
	 * Update live channel segment by id.
	 * @param	id	int		 (optional)
	 * @param	liveChannelSegment	KalturaLiveChannelSegment		 (optional)
	 **/
	update: function(id, liveChannelSegment){
		var kparams = new Object();
		kparams.id = id;
		kparams.liveChannelSegment = liveChannelSegment;
		return new KalturaRequestBuilder("livechannelsegment", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: liveChannel.
 **/
var KalturaLiveChannelService = {
	/**
	 * Adds new live channel..
	 * @param	liveChannel	KalturaLiveChannel		Live channel metadata (optional)
	 **/
	add: function(liveChannel){
		var kparams = new Object();
		kparams.liveChannel = liveChannel;
		return new KalturaRequestBuilder("livechannel", "add", kparams);
	},
	
	/**
	 * Append recorded video to live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	assetId	string		Live asset id (optional)
	 * @param	mediaServerIndex	string		 (optional, enum: KalturaEntryServerNodeType)
	 * @param	resource	KalturaDataCenterContentResource		 (optional)
	 * @param	duration	float		in seconds (optional)
	 * @param	isLastChunk	bool		Is this the last recorded chunk in the current session (i.e. following a stream stop event) (optional, default: false)
	 **/
	appendRecording: function(entryId, assetId, mediaServerIndex, resource, duration, isLastChunk){
		if(!isLastChunk)
			isLastChunk = false;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.assetId = assetId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.resource = resource;
		kparams.duration = duration;
		kparams.isLastChunk = isLastChunk;
		return new KalturaRequestBuilder("livechannel", "appendRecording", kparams);
	},
	
	/**
	 * Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on..
	 * @param	entryId	string		Live entry id (optional)
	 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType)
	 * @param	liveEntryStatus	int		the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus)
	 **/
	createRecordedEntry: function(entryId, mediaServerIndex, liveEntryStatus){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.liveEntryStatus = liveEntryStatus;
		return new KalturaRequestBuilder("livechannel", "createRecordedEntry", kparams);
	},
	
	/**
	 * Delete a live channel..
	 * @param	id	string		Live channel id to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannel", "delete", kparams);
	},
	
	/**
	 * Get live channel by ID..
	 * @param	id	string		Live channel id (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannel", "get", kparams);
	},
	
	/**
	 * Delivering the status of a live channel (on-air/offline).
	 * @param	id	string		ID of the live channel (optional)
	 **/
	isLive: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livechannel", "isLive", kparams);
	},
	
	/**
	 * List live channels by filter with paging support..
	 * @param	filter	KalturaLiveChannelFilter		live channel filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("livechannel", "list", kparams);
	},
	
	/**
	 * Register media server to live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	hostname	string		Media server host name (optional)
	 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType)
	 * @param	applicationName	string		the application to which entry is being broadcast (optional, default: null)
	 * @param	liveEntryStatus	int		the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus, default: 1)
	 * @param	shouldCreateRecordedEntry	bool		 (optional, default: true)
	 **/
	registerMediaServer: function(entryId, hostname, mediaServerIndex, applicationName, liveEntryStatus, shouldCreateRecordedEntry){
		if(!applicationName)
			applicationName = null;
		if(!liveEntryStatus)
			liveEntryStatus = 1;
		if(!shouldCreateRecordedEntry)
			shouldCreateRecordedEntry = true;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.applicationName = applicationName;
		kparams.liveEntryStatus = liveEntryStatus;
		kparams.shouldCreateRecordedEntry = shouldCreateRecordedEntry;
		return new KalturaRequestBuilder("livechannel", "registerMediaServer", kparams);
	},
	
	/**
	 * Set recorded video to live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	mediaServerIndex	string		 (optional, enum: KalturaEntryServerNodeType)
	 * @param	resource	KalturaDataCenterContentResource		 (optional)
	 * @param	duration	float		in seconds (optional)
	 * @param	recordedEntryId	string		Recorded entry Id (optional, default: null)
	 * @param	flavorParamsId	int		Recorded entry Id (optional, default: null)
	 **/
	setRecordedContent: function(entryId, mediaServerIndex, resource, duration, recordedEntryId, flavorParamsId){
		if(!recordedEntryId)
			recordedEntryId = null;
		if(!flavorParamsId)
			flavorParamsId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.resource = resource;
		kparams.duration = duration;
		kparams.recordedEntryId = recordedEntryId;
		kparams.flavorParamsId = flavorParamsId;
		return new KalturaRequestBuilder("livechannel", "setRecordedContent", kparams);
	},
	
	/**
	 * Unregister media server from live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	hostname	string		Media server host name (optional)
	 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType)
	 **/
	unregisterMediaServer: function(entryId, hostname, mediaServerIndex){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		return new KalturaRequestBuilder("livechannel", "unregisterMediaServer", kparams);
	},
	
	/**
	 * Update live channel. Only the properties that were set will be updated..
	 * @param	id	string		Live channel id to update (optional)
	 * @param	liveChannel	KalturaLiveChannel		Live channel metadata to update (optional)
	 **/
	update: function(id, liveChannel){
		var kparams = new Object();
		kparams.id = id;
		kparams.liveChannel = liveChannel;
		return new KalturaRequestBuilder("livechannel", "update", kparams);
	},
	
	/**
	 * Validates all registered media servers.
	 * @param	entryId	string		Live entry id (optional)
	 **/
	validateRegisteredMediaServers: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("livechannel", "validateRegisteredMediaServers", kparams);
	}
}

/**
 *Class definition for the Kaltura service: liveReports.
 **/
var KalturaLiveReportsService = {
	/**
	 * .
	 * @param	reportType	int		 (optional, enum: KalturaLiveReportExportType)
	 * @param	params	KalturaLiveReportExportParams		 (optional)
	 **/
	exportToCsv: function(reportType, params){
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.params = params;
		return new KalturaRequestBuilder("livereports", "exportToCsv", kparams);
	},
	
	/**
	 * .
	 * @param	reportType	string		 (optional, enum: KalturaLiveReportType)
	 * @param	filter	KalturaLiveReportInputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	getEvents: function(reportType, filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("livereports", "getEvents", kparams);
	},
	
	/**
	 * .
	 * @param	reportType	string		 (optional, enum: KalturaLiveReportType)
	 * @param	filter	KalturaLiveReportInputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	getReport: function(reportType, filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("livereports", "getReport", kparams);
	},
	
	/**
	 * Will serve a requested report.
	 * @param	id	string		- the requested id (optional)
	 **/
	serveReport: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livereports", "serveReport", kparams);
	}
}

/**
 *Class definition for the Kaltura service: liveStats.
 **/
var KalturaLiveStatsService = {
	/**
	 * Will write to the event log a single line representing the event
 *		 KalturaStatsEvent $event.
	 * @param	event	KalturaLiveStatsEvent		 (optional)
	 **/
	collect: function(event){
		var kparams = new Object();
		kparams.event = event;
		return new KalturaRequestBuilder("livestats", "collect", kparams);
	}
}

/**
 *Class definition for the Kaltura service: liveStream.
 **/
var KalturaLiveStreamService = {
	/**
	 * Adds new live stream entry.
 *		 The entry will be queued for provision..
	 * @param	liveStreamEntry	KalturaLiveStreamEntry		Live stream entry metadata (optional)
	 * @param	sourceType	string		Live stream source type (optional, enum: KalturaSourceType, default: null)
	 **/
	add: function(liveStreamEntry, sourceType){
		if(!sourceType)
			sourceType = null;
		var kparams = new Object();
		kparams.liveStreamEntry = liveStreamEntry;
		kparams.sourceType = sourceType;
		return new KalturaRequestBuilder("livestream", "add", kparams);
	},
	
	/**
	 * Add new pushPublish configuration to entry.
	 * @param	entryId	string		 (optional)
	 * @param	protocol	string		 (optional, enum: KalturaPlaybackProtocol)
	 * @param	url	string		 (optional, default: null)
	 * @param	liveStreamConfiguration	KalturaLiveStreamConfiguration		 (optional, default: null)
	 **/
	addLiveStreamPushPublishConfiguration: function(entryId, protocol, url, liveStreamConfiguration){
		if(!url)
			url = null;
		if(!liveStreamConfiguration)
			liveStreamConfiguration = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.protocol = protocol;
		kparams.url = url;
		if (liveStreamConfiguration != null)
			kparams.liveStreamConfiguration = liveStreamConfiguration;
		return new KalturaRequestBuilder("livestream", "addLiveStreamPushPublishConfiguration", kparams);
	},
	
	/**
	 * Allocates a conference room or returns ones that has already been allocated.
	 * @param	entryId	string		 (optional)
	 * @param	env	string		 (optional)
	 **/
	allocateConferenceRoom: function(entryId, env){
		if(!env)
			env = "";
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.env = env;
		return new KalturaRequestBuilder("livestream", "allocateConferenceRoom", kparams);
	},
	
	/**
	 * Append recorded video to live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	assetId	string		Live asset id (optional)
	 * @param	mediaServerIndex	string		 (optional, enum: KalturaEntryServerNodeType)
	 * @param	resource	KalturaDataCenterContentResource		 (optional)
	 * @param	duration	float		in seconds (optional)
	 * @param	isLastChunk	bool		Is this the last recorded chunk in the current session (i.e. following a stream stop event) (optional, default: false)
	 **/
	appendRecording: function(entryId, assetId, mediaServerIndex, resource, duration, isLastChunk){
		if(!isLastChunk)
			isLastChunk = false;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.assetId = assetId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.resource = resource;
		kparams.duration = duration;
		kparams.isLastChunk = isLastChunk;
		return new KalturaRequestBuilder("livestream", "appendRecording", kparams);
	},
	
	/**
	 * Archive a live entry which was recorded.
	 * @param	liveEntryId	string		 (optional)
	 * @param	vodEntryId	string		 (optional)
	 **/
	archive: function(liveEntryId, vodEntryId){
		var kparams = new Object();
		kparams.liveEntryId = liveEntryId;
		kparams.vodEntryId = vodEntryId;
		return new KalturaRequestBuilder("livestream", "archive", kparams);
	},
	
	/**
	 * Authenticate live-stream entry against stream token and partner limitations.
	 * @param	entryId	string		Live stream entry id (optional)
	 * @param	token	string		Live stream broadcasting token (optional)
	 * @param	hostname	string		Media server host name (optional, default: null)
	 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType, default: null)
	 * @param	applicationName	string		the application to which entry is being broadcast (optional, default: null)
	 **/
	authenticate: function(entryId, token, hostname, mediaServerIndex, applicationName){
		if(!hostname)
			hostname = null;
		if(!mediaServerIndex)
			mediaServerIndex = null;
		if(!applicationName)
			applicationName = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.token = token;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.applicationName = applicationName;
		return new KalturaRequestBuilder("livestream", "authenticate", kparams);
	},
	
	/**
	 * Creates periodic metadata sync-point events on a live stream.
	 * @param	entryId	string		Kaltura live-stream entry id (optional)
	 * @param	interval	int		Events interval in seconds (optional)
	 * @param	duration	int		Duration in seconds (optional)
	 **/
	createPeriodicSyncPoints: function(entryId, interval, duration){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.interval = interval;
		kparams.duration = duration;
		return new KalturaRequestBuilder("livestream", "createPeriodicSyncPoints", kparams);
	},
	
	/**
	 * Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on..
	 * @param	entryId	string		Live entry id (optional)
	 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType)
	 * @param	liveEntryStatus	int		the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus)
	 **/
	createRecordedEntry: function(entryId, mediaServerIndex, liveEntryStatus){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.liveEntryStatus = liveEntryStatus;
		return new KalturaRequestBuilder("livestream", "createRecordedEntry", kparams);
	},
	
	/**
	 * Delete a live stream entry..
	 * @param	entryId	string		Live stream entry id to delete (optional)
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("livestream", "delete", kparams);
	},
	
	/**
	 * When the conf is finished this API should be called..
	 * @param	entryId	string		 (optional)
	 * @param	serverNodeId	int		 (optional, default: null)
	 **/
	finishConf: function(entryId, serverNodeId){
		if(!serverNodeId)
			serverNodeId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("livestream", "finishConf", kparams);
	},
	
	/**
	 * Get live stream entry by ID..
	 * @param	entryId	string		Live stream entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("livestream", "get", kparams);
	},
	
	/**
	 * Delivering the status of a live stream (on-air/offline) if it is possible.
	 * @param	id	string		ID of the live stream entry (optional)
	 **/
	getDetails: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livestream", "getDetails", kparams);
	},
	
	/**
	 * Delivering the status of a live stream (on-air/offline) if it is possible.
	 * @param	id	string		ID of the live stream (optional)
	 * @param	protocol	string		protocol of the stream to test. (optional, enum: KalturaPlaybackProtocol, default: null)
	 **/
	isLive: function(id, protocol){
		if(!protocol)
			protocol = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.protocol = protocol;
		return new KalturaRequestBuilder("livestream", "isLive", kparams);
	},
	
	/**
	 * List live stream entries by filter with paging support..
	 * @param	filter	KalturaLiveStreamEntryFilter		live stream entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("livestream", "list", kparams);
	},
	
	/**
	 * Regenerate new secure token for liveStream.
	 * @param	entryId	string		Live stream entry id to regenerate secure token for (optional)
	 **/
	regenerateStreamToken: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("livestream", "regenerateStreamToken", kparams);
	},
	
	/**
	 * Mark that the conference has actually started.
	 * @param	entryId	string		 (optional)
	 **/
	registerConf: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("livestream", "registerConf", kparams);
	},
	
	/**
	 * Register media server to live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	hostname	string		Media server host name (optional)
	 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType)
	 * @param	applicationName	string		the application to which entry is being broadcast (optional, default: null)
	 * @param	liveEntryStatus	int		the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus, default: 1)
	 * @param	shouldCreateRecordedEntry	bool		 (optional, default: true)
	 **/
	registerMediaServer: function(entryId, hostname, mediaServerIndex, applicationName, liveEntryStatus, shouldCreateRecordedEntry){
		if(!applicationName)
			applicationName = null;
		if(!liveEntryStatus)
			liveEntryStatus = 1;
		if(!shouldCreateRecordedEntry)
			shouldCreateRecordedEntry = true;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.applicationName = applicationName;
		kparams.liveEntryStatus = liveEntryStatus;
		kparams.shouldCreateRecordedEntry = shouldCreateRecordedEntry;
		return new KalturaRequestBuilder("livestream", "registerMediaServer", kparams);
	},
	
	/**
	 * Remove push publish configuration from entry.
	 * @param	entryId	string		 (optional)
	 * @param	protocol	string		 (optional, enum: KalturaPlaybackProtocol)
	 **/
	removeLiveStreamPushPublishConfiguration: function(entryId, protocol){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.protocol = protocol;
		return new KalturaRequestBuilder("livestream", "removeLiveStreamPushPublishConfiguration", kparams);
	},
	
	/**
	 * Set recorded video to live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	mediaServerIndex	string		 (optional, enum: KalturaEntryServerNodeType)
	 * @param	resource	KalturaDataCenterContentResource		 (optional)
	 * @param	duration	float		in seconds (optional)
	 * @param	recordedEntryId	string		Recorded entry Id (optional, default: null)
	 * @param	flavorParamsId	int		Recorded entry Id (optional, default: null)
	 **/
	setRecordedContent: function(entryId, mediaServerIndex, resource, duration, recordedEntryId, flavorParamsId){
		if(!recordedEntryId)
			recordedEntryId = null;
		if(!flavorParamsId)
			flavorParamsId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.resource = resource;
		kparams.duration = duration;
		kparams.recordedEntryId = recordedEntryId;
		kparams.flavorParamsId = flavorParamsId;
		return new KalturaRequestBuilder("livestream", "setRecordedContent", kparams);
	},
	
	/**
	 * Unregister media server from live entry.
	 * @param	entryId	string		Live entry id (optional)
	 * @param	hostname	string		Media server host name (optional)
	 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType)
	 **/
	unregisterMediaServer: function(entryId, hostname, mediaServerIndex){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		return new KalturaRequestBuilder("livestream", "unregisterMediaServer", kparams);
	},
	
	/**
	 * Update live stream entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Live stream entry id to update (optional)
	 * @param	liveStreamEntry	KalturaLiveStreamEntry		Live stream entry metadata to update (optional)
	 **/
	update: function(entryId, liveStreamEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.liveStreamEntry = liveStreamEntry;
		return new KalturaRequestBuilder("livestream", "update", kparams);
	},
	
	/**
	 * Update entry thumbnail using url.
	 * @param	entryId	string		live stream entry id (optional)
	 * @param	url	string		file url (optional)
	 **/
	updateOfflineThumbnailFromUrl: function(entryId, url){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.url = url;
		return new KalturaRequestBuilder("livestream", "updateOfflineThumbnailFromUrl", kparams);
	},
	
	/**
	 * Update live stream entry thumbnail using a raw jpeg file.
	 * @param	entryId	string		live stream entry id (optional)
	 * @param	fileData	HTMLElement		Jpeg file data (optional)
	 **/
	updateOfflineThumbnailJpeg: function(entryId, fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.entryId = entryId;
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("livestream", "updateOfflineThumbnailJpeg", kparams, kfiles);
	},
	
	/**
	 * Validates all registered media servers.
	 * @param	entryId	string		Live entry id (optional)
	 **/
	validateRegisteredMediaServers: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("livestream", "validateRegisteredMediaServers", kparams);
	}
}

/**
 *Class definition for the Kaltura service: mediaInfo.
 **/
var KalturaMediaInfoService = {
	/**
	 * List media info objects by filter and pager.
	 * @param	filter	KalturaMediaInfoFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("mediainfo", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: media.
 **/
var KalturaMediaService = {
	/**
	 * Add entry.
	 * @param	entry	KalturaMediaEntry		 (optional)
	 **/
	add: function(entry){
		var kparams = new Object();
		kparams.entry = entry;
		return new KalturaRequestBuilder("media", "add", kparams);
	},
	
	/**
	 * Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 *	     If the requirement is to replace the entry's associated content, use action updateContent..
	 * @param	entryId	string		 (optional)
	 * @param	resource	KalturaResource		 (optional, default: null)
	 **/
	addContent: function(entryId, resource){
		if(!resource)
			resource = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		if (resource != null)
			kparams.resource = resource;
		return new KalturaRequestBuilder("media", "addContent", kparams);
	},
	
	/**
	 * Adds new media entry by importing an HTTP or FTP URL.
 *		 The entry will be queued for import and then for conversion.
 *		 This action should be exposed only to the batches.
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional)
	 * @param	url	string		An HTTP or FTP URL (optional)
	 * @param	bulkUploadId	int		The id of the bulk upload job (optional)
	 **/
	addFromBulk: function(mediaEntry, url, bulkUploadId){
		var kparams = new Object();
		kparams.mediaEntry = mediaEntry;
		kparams.url = url;
		kparams.bulkUploadId = bulkUploadId;
		return new KalturaRequestBuilder("media", "addFromBulk", kparams);
	},
	
	/**
	 * Copy entry into new entry.
	 * @param	sourceEntryId	string		Media entry id to copy from (optional)
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null)
	 * @param	sourceFlavorParamsId	int		The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null)
	 **/
	addFromEntry: function(sourceEntryId, mediaEntry, sourceFlavorParamsId){
		if(!mediaEntry)
			mediaEntry = null;
		if(!sourceFlavorParamsId)
			sourceFlavorParamsId = null;
		var kparams = new Object();
		kparams.sourceEntryId = sourceEntryId;
		if (mediaEntry != null)
			kparams.mediaEntry = mediaEntry;
		kparams.sourceFlavorParamsId = sourceFlavorParamsId;
		return new KalturaRequestBuilder("media", "addFromEntry", kparams);
	},
	
	/**
	 * Copy flavor asset into new entry.
	 * @param	sourceFlavorAssetId	string		Flavor asset id to be used as the new entry source (optional)
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null)
	 **/
	addFromFlavorAsset: function(sourceFlavorAssetId, mediaEntry){
		if(!mediaEntry)
			mediaEntry = null;
		var kparams = new Object();
		kparams.sourceFlavorAssetId = sourceFlavorAssetId;
		if (mediaEntry != null)
			kparams.mediaEntry = mediaEntry;
		return new KalturaRequestBuilder("media", "addFromFlavorAsset", kparams);
	},
	
	/**
	 * Add new entry after the file was recorded on the server and the token id exists.
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional)
	 * @param	webcamTokenId	string		Token id for the recorded webcam file (optional)
	 **/
	addFromRecordedWebcam: function(mediaEntry, webcamTokenId){
		var kparams = new Object();
		kparams.mediaEntry = mediaEntry;
		kparams.webcamTokenId = webcamTokenId;
		return new KalturaRequestBuilder("media", "addFromRecordedWebcam", kparams);
	},
	
	/**
	 * Adds new media entry by importing the media file from a search provider.
 *		 This action should be used with the search service result..
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null)
	 * @param	searchResult	KalturaSearchResult		Result object from search service (optional, default: null)
	 **/
	addFromSearchResult: function(mediaEntry, searchResult){
		if(!mediaEntry)
			mediaEntry = null;
		if(!searchResult)
			searchResult = null;
		var kparams = new Object();
		if (mediaEntry != null)
			kparams.mediaEntry = mediaEntry;
		if (searchResult != null)
			kparams.searchResult = searchResult;
		return new KalturaRequestBuilder("media", "addFromSearchResult", kparams);
	},
	
	/**
	 * Add new entry after the specific media file was uploaded and the upload token id exists.
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional)
	 * @param	uploadTokenId	string		Upload token id (optional)
	 **/
	addFromUploadedFile: function(mediaEntry, uploadTokenId){
		var kparams = new Object();
		kparams.mediaEntry = mediaEntry;
		kparams.uploadTokenId = uploadTokenId;
		return new KalturaRequestBuilder("media", "addFromUploadedFile", kparams);
	},
	
	/**
	 * Adds new media entry by importing an HTTP or FTP URL.
 *		 The entry will be queued for import and then for conversion..
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional)
	 * @param	url	string		An HTTP or FTP URL (optional)
	 **/
	addFromUrl: function(mediaEntry, url){
		var kparams = new Object();
		kparams.mediaEntry = mediaEntry;
		kparams.url = url;
		return new KalturaRequestBuilder("media", "addFromUrl", kparams);
	},
	
	/**
	 * Anonymously rank a media entry, no validation is done on duplicate rankings.
	 * @param	entryId	string		 (optional)
	 * @param	rank	int		 (optional)
	 **/
	anonymousRank: function(entryId, rank){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.rank = rank;
		return new KalturaRequestBuilder("media", "anonymousRank", kparams);
	},
	
	/**
	 * Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable).
	 * @param	entryId	string		 (optional)
	 **/
	approve: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("media", "approve", kparams);
	},
	
	/**
	 * Approves media replacement.
	 * @param	entryId	string		Media entry id to replace (optional)
	 **/
	approveReplace: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("media", "approveReplace", kparams);
	},
	
	/**
	 * Add new bulk upload batch job
 *		 Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *		 If no conversion profile was specified, partner's default will be used.
	 * @param	fileData	HTMLElement		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null)
	 * @param	bulkUploadEntryData	KalturaBulkUploadEntryData		 (optional, default: null)
	 **/
	bulkUploadAdd: function(fileData, bulkUploadData, bulkUploadEntryData){
		if(!bulkUploadData)
			bulkUploadData = null;
		if(!bulkUploadEntryData)
			bulkUploadEntryData = null;
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadEntryData != null)
			kparams.bulkUploadEntryData = bulkUploadEntryData;
		return new KalturaRequestBuilder("media", "bulkUploadAdd", kparams, kfiles);
	},
	
	/**
	 * Cancels media replacement.
	 * @param	entryId	string		Media entry id to cancel (optional)
	 **/
	cancelReplace: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("media", "cancelReplace", kparams);
	},
	
	/**
	 * Convert entry.
	 * @param	entryId	string		Media entry id (optional)
	 * @param	conversionProfileId	int		 (optional, default: null)
	 * @param	dynamicConversionAttributes	array		 (optional, default: null)
	 **/
	convert: function(entryId, conversionProfileId, dynamicConversionAttributes){
		if(!conversionProfileId)
			conversionProfileId = null;
		if(!dynamicConversionAttributes)
			dynamicConversionAttributes = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.conversionProfileId = conversionProfileId;
		kparams.dynamicConversionAttributes = dynamicConversionAttributes;
		return new KalturaRequestBuilder("media", "convert", kparams);
	},
	
	/**
	 * Count media entries by filter..
	 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null)
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("media", "count", kparams);
	},
	
	/**
	 * Delete a media entry..
	 * @param	entryId	string		Media entry id to delete (optional)
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("media", "delete", kparams);
	},
	
	/**
	 * Creates a batch job that sends an email with a link to download a CSV containing a list of entries.
	 * @param	data	KalturaMediaEsearchExportToCsvJobData		job data indicating filter to pass to the job (optional)
	 **/
	exportToCsv: function(data){
		var kparams = new Object();
		kparams.data = data;
		return new KalturaRequestBuilder("media", "exportToCsv", kparams);
	},
	
	/**
	 * Flag inappropriate media entry for moderation.
	 * @param	moderationFlag	KalturaModerationFlag		 (optional)
	 **/
	flag: function(moderationFlag){
		var kparams = new Object();
		kparams.moderationFlag = moderationFlag;
		return new KalturaRequestBuilder("media", "flag", kparams);
	},
	
	/**
	 * Get media entry by ID..
	 * @param	entryId	string		Media entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("media", "get", kparams);
	},
	
	/**
	 * Get MRSS by entry id
 *	     XML will return as an escaped string.
	 * @param	entryId	string		Entry id (optional)
	 * @param	extendingItemsArray	array		 (optional, default: null)
	 * @param	features	string		 (optional, default: null)
	 **/
	getMrss: function(entryId, extendingItemsArray, features){
		if(!extendingItemsArray)
			extendingItemsArray = null;
		if(!features)
			features = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.extendingItemsArray = extendingItemsArray;
		kparams.features = features;
		return new KalturaRequestBuilder("media", "getMrss", kparams);
	},
	
	/**
	 * List media entries by filter with paging support..
	 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("media", "list", kparams);
	},
	
	/**
	 * List all pending flags for the media entry.
	 * @param	entryId	string		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listFlags: function(entryId, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("media", "listFlags", kparams);
	},
	
	/**
	 * Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable).
	 * @param	entryId	string		 (optional)
	 **/
	reject: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("media", "reject", kparams);
	},
	
	/**
	 * Request a new conversion job, this can be used to convert the media entry to a different format.
	 * @param	entryId	string		Media entry id (optional)
	 * @param	fileFormat	string		Format to convert (optional)
	 **/
	requestConversion: function(entryId, fileFormat){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.fileFormat = fileFormat;
		return new KalturaRequestBuilder("media", "requestConversion", kparams);
	},
	
	/**
	 * Update media entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Media entry id to update (optional)
	 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata to update (optional)
	 **/
	update: function(entryId, mediaEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.mediaEntry = mediaEntry;
		return new KalturaRequestBuilder("media", "update", kparams);
	},
	
	/**
	 * Replace content associated with the media entry..
	 * @param	entryId	string		Media entry id to update (optional)
	 * @param	resource	KalturaResource		Resource to be used to replace entry media content (optional)
	 * @param	conversionProfileId	int		The conversion profile id to be used on the entry (optional, default: null)
	 * @param	advancedOptions	KalturaEntryReplacementOptions		Additional update content options (optional, default: null)
	 **/
	updateContent: function(entryId, resource, conversionProfileId, advancedOptions){
		if(!conversionProfileId)
			conversionProfileId = null;
		if(!advancedOptions)
			advancedOptions = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.resource = resource;
		kparams.conversionProfileId = conversionProfileId;
		if (advancedOptions != null)
			kparams.advancedOptions = advancedOptions;
		return new KalturaRequestBuilder("media", "updateContent", kparams);
	},
	
	/**
	 * Update media entry thumbnail by a specified time offset (In seconds)
 *		 If flavor params id not specified, source flavor will be used by default.
	 * @param	entryId	string		Media entry id (optional)
	 * @param	timeOffset	int		Time offset (in seconds) (optional)
	 * @param	flavorParamsId	int		The flavor params id to be used (optional, default: null)
	 **/
	updateThumbnail: function(entryId, timeOffset, flavorParamsId){
		if(!flavorParamsId)
			flavorParamsId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.timeOffset = timeOffset;
		kparams.flavorParamsId = flavorParamsId;
		return new KalturaRequestBuilder("media", "updateThumbnail", kparams);
	},
	
	/**
	 * Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 *		 If flavor params id not specified, source flavor will be used by default.
	 * @param	entryId	string		Media entry id (optional)
	 * @param	sourceEntryId	string		Media entry id (optional)
	 * @param	timeOffset	int		Time offset (in seconds) (optional)
	 * @param	flavorParamsId	int		The flavor params id to be used (optional, default: null)
	 **/
	updateThumbnailFromSourceEntry: function(entryId, sourceEntryId, timeOffset, flavorParamsId){
		if(!flavorParamsId)
			flavorParamsId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.sourceEntryId = sourceEntryId;
		kparams.timeOffset = timeOffset;
		kparams.flavorParamsId = flavorParamsId;
		return new KalturaRequestBuilder("media", "updateThumbnailFromSourceEntry", kparams);
	},
	
	/**
	 * Update entry thumbnail using URL.
	 * @param	entryId	string		Media entry id (optional)
	 * @param	url	string		file url (optional)
	 **/
	updateThumbnailFromUrl: function(entryId, url){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.url = url;
		return new KalturaRequestBuilder("media", "updateThumbnailFromUrl", kparams);
	},
	
	/**
	 * Update media entry thumbnail using a raw jpeg file.
	 * @param	entryId	string		Media entry id (optional)
	 * @param	fileData	HTMLElement		Jpeg file data (optional)
	 **/
	updateThumbnailJpeg: function(entryId, fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.entryId = entryId;
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("media", "updateThumbnailJpeg", kparams, kfiles);
	},
	
	/**
	 * Upload a media file to Kaltura, then the file can be used to create a media entry..
	 * @param	fileData	HTMLElement		The file data (optional)
	 **/
	upload: function(fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("media", "upload", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: mixing.
 **/
var KalturaMixingService = {
	/**
	 * Adds a new mix.
 *		 If the dataContent is null, a default timeline will be created..
	 * @param	mixEntry	KalturaMixEntry		Mix entry metadata (optional)
	 **/
	add: function(mixEntry){
		var kparams = new Object();
		kparams.mixEntry = mixEntry;
		return new KalturaRequestBuilder("mixing", "add", kparams);
	},
	
	/**
	 * Anonymously rank a mix entry, no validation is done on duplicate rankings.
	 * @param	entryId	string		 (optional)
	 * @param	rank	int		 (optional)
	 **/
	anonymousRank: function(entryId, rank){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.rank = rank;
		return new KalturaRequestBuilder("mixing", "anonymousRank", kparams);
	},
	
	/**
	 * Appends a media entry to the end of the mix timeline, this will save the mix timeline as a new version..
	 * @param	mixEntryId	string		Mix entry to append to its timeline (optional)
	 * @param	mediaEntryId	string		Media entry to append to the timeline (optional)
	 **/
	appendMediaEntry: function(mixEntryId, mediaEntryId){
		var kparams = new Object();
		kparams.mixEntryId = mixEntryId;
		kparams.mediaEntryId = mediaEntryId;
		return new KalturaRequestBuilder("mixing", "appendMediaEntry", kparams);
	},
	
	/**
	 * Clones an existing mix..
	 * @param	entryId	string		Mix entry id to clone (optional)
	 **/
	cloneAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("mixing", "clone", kparams);
	},
	
	/**
	 * Count mix entries by filter..
	 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null)
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("mixing", "count", kparams);
	},
	
	/**
	 * Delete a mix entry..
	 * @param	entryId	string		Mix entry id to delete (optional)
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("mixing", "delete", kparams);
	},
	
	/**
	 * Get mix entry by id..
	 * @param	entryId	string		Mix entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("mixing", "get", kparams);
	},
	
	/**
	 * Get the mixes in which the media entry is included.
	 * @param	mediaEntryId	string		 (optional)
	 **/
	getMixesByMediaId: function(mediaEntryId){
		var kparams = new Object();
		kparams.mediaEntryId = mediaEntryId;
		return new KalturaRequestBuilder("mixing", "getMixesByMediaId", kparams);
	},
	
	/**
	 * Get all ready media entries that exist in the given mix id.
	 * @param	mixId	string		 (optional)
	 * @param	version	int		Desired version to get the data from (optional, default: -1)
	 **/
	getReadyMediaEntries: function(mixId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.mixId = mixId;
		kparams.version = version;
		return new KalturaRequestBuilder("mixing", "getReadyMediaEntries", kparams);
	},
	
	/**
	 * List entries by filter with paging support.
 *		 Return parameter is an array of mix entries..
	 * @param	filter	KalturaMixEntryFilter		Mix entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("mixing", "list", kparams);
	},
	
	/**
	 * Update mix entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Mix entry id to update (optional)
	 * @param	mixEntry	KalturaMixEntry		Mix entry metadata to update (optional)
	 **/
	update: function(entryId, mixEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.mixEntry = mixEntry;
		return new KalturaRequestBuilder("mixing", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: notification.
 **/
var KalturaNotificationService = {
	/**
	 * Return the notifications for a specific entry id and type.
	 * @param	entryId	string		 (optional)
	 * @param	type	int		 (optional, enum: KalturaNotificationType)
	 **/
	getClientNotification: function(entryId, type){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.type = type;
		return new KalturaRequestBuilder("notification", "getClientNotification", kparams);
	}
}

/**
 *Class definition for the Kaltura service: partner.
 **/
var KalturaPartnerService = {
	/**
	 * Count partner's existing sub-publishers (count includes the partner itself)..
	 * @param	filter	KalturaPartnerFilter		 (optional, default: null)
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("partner", "count", kparams);
	},
	
	/**
	 * Retrieve partner object by Id.
	 * @param	id	int		 (optional, default: null)
	 **/
	get: function(id){
		if(!id)
			id = null;
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("partner", "get", kparams);
	},
	
	/**
	 * Retrieve all info attributed to the partner
 *		 This action expects no parameters. It returns information for the current KS partnerId..
	 **/
	getInfo: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("partner", "getInfo", kparams);
	},
	
	/**
	 * Returns partner public info by Id.
	 * @param	id	int		 (optional, default: null)
	 **/
	getPublicInfo: function(id){
		if(!id)
			id = null;
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("partner", "getPublicInfo", kparams);
	},
	
	/**
	 * Retrieve partner secret and admin secret.
	 * @param	partnerId	int		 (optional)
	 * @param	adminEmail	string		 (optional)
	 * @param	cmsPassword	string		 (optional)
	 * @param	otp	string		 (optional, default: null)
	 **/
	getSecrets: function(partnerId, adminEmail, cmsPassword, otp){
		if(!otp)
			otp = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.adminEmail = adminEmail;
		kparams.cmsPassword = cmsPassword;
		kparams.otp = otp;
		return new KalturaRequestBuilder("partner", "getSecrets", kparams);
	},
	
	/**
	 * Get usage statistics for a partner
 *		 Calculation is done according to partner's package.
	 **/
	getStatistics: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("partner", "getStatistics", kparams);
	},
	
	/**
	 * Get usage statistics for a partner
 *		 Calculation is done according to partner's package
 *		 Additional data returned is a graph points of streaming usage in a time frame
 *		 The resolution can be "days" or "months".
	 * @param	year	int		 (optional)
	 * @param	month	int		 (optional, default: 1)
	 * @param	resolution	string		 (optional, enum: KalturaReportInterval, default: null)
	 **/
	getUsage: function(year, month, resolution){
		if(!year)
			year = "";
		if(!month)
			month = 1;
		if(!resolution)
			resolution = null;
		var kparams = new Object();
		kparams.year = year;
		kparams.month = month;
		kparams.resolution = resolution;
		return new KalturaRequestBuilder("partner", "getUsage", kparams);
	},
	
	/**
	 * List partners by filter with paging support
 *		 Current implementation will only list the sub partners of the partner initiating the API call (using the current KS).
 *		 This action is only partially implemented to support listing sub partners of a VAR partner..
	 * @param	filter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("partner", "list", kparams);
	},
	
	/**
	 * List partner's current processes' statuses.
	 **/
	listFeatureStatus: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("partner", "listFeatureStatus", kparams);
	},
	
	/**
	 * Retrieve a list of partner objects which the current user is allowed to access..
	 * @param	partnerFilter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listPartnersForUser: function(partnerFilter, pager){
		if(!partnerFilter)
			partnerFilter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (partnerFilter != null)
			kparams.partnerFilter = partnerFilter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("partner", "listPartnersForUser", kparams);
	},
	
	/**
	 * Create a new Partner object.
	 * @param	partner	KalturaPartner		 (optional)
	 * @param	cmsPassword	string		 (optional)
	 * @param	templatePartnerId	int		 (optional, default: null)
	 * @param	silent	bool		 (optional, default: false)
	 **/
	register: function(partner, cmsPassword, templatePartnerId, silent){
		if(!cmsPassword)
			cmsPassword = "";
		if(!templatePartnerId)
			templatePartnerId = null;
		if(!silent)
			silent = false;
		var kparams = new Object();
		kparams.partner = partner;
		kparams.cmsPassword = cmsPassword;
		kparams.templatePartnerId = templatePartnerId;
		kparams.silent = silent;
		return new KalturaRequestBuilder("partner", "register", kparams);
	},
	
	/**
	 * Create a new Partner object.
	 * @param	partner	KalturaPartner		 (optional)
	 * @param	cmsPassword	string		 (optional)
	 * @param	templatePartnerId	int		 (optional, default: null)
	 * @param	silent	bool		 (optional, default: false)
	 **/
	registrationValidation: function(partner, cmsPassword, templatePartnerId, silent){
		if(!cmsPassword)
			cmsPassword = "";
		if(!templatePartnerId)
			templatePartnerId = null;
		if(!silent)
			silent = false;
		var kparams = new Object();
		kparams.partner = partner;
		kparams.cmsPassword = cmsPassword;
		kparams.templatePartnerId = templatePartnerId;
		kparams.silent = silent;
		return new KalturaRequestBuilder("partner", "registrationValidation", kparams);
	},
	
	/**
	 * Update details and settings of an existing partner.
	 * @param	partner	KalturaPartner		 (optional)
	 * @param	allowEmpty	bool		 (optional, default: false)
	 **/
	update: function(partner, allowEmpty){
		if(!allowEmpty)
			allowEmpty = false;
		var kparams = new Object();
		kparams.partner = partner;
		kparams.allowEmpty = allowEmpty;
		return new KalturaRequestBuilder("partner", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: permissionItem.
 **/
var KalturaPermissionItemService = {
	/**
	 * Adds a new permission item object to the account.
 *		 This action is available only to Kaltura system administrators..
	 * @param	permissionItem	KalturaPermissionItem		The new permission item (optional)
	 **/
	add: function(permissionItem){
		var kparams = new Object();
		kparams.permissionItem = permissionItem;
		return new KalturaRequestBuilder("permissionitem", "add", kparams);
	},
	
	/**
	 * Deletes an existing permission item object.
 *		 This action is available only to Kaltura system administrators..
	 * @param	permissionItemId	int		The permission item's unique identifier (optional)
	 **/
	deleteAction: function(permissionItemId){
		var kparams = new Object();
		kparams.permissionItemId = permissionItemId;
		return new KalturaRequestBuilder("permissionitem", "delete", kparams);
	},
	
	/**
	 * Retrieves a permission item object using its ID..
	 * @param	permissionItemId	int		The permission item's unique identifier (optional)
	 **/
	get: function(permissionItemId){
		var kparams = new Object();
		kparams.permissionItemId = permissionItemId;
		return new KalturaRequestBuilder("permissionitem", "get", kparams);
	},
	
	/**
	 * Lists permission item objects that are associated with an account..
	 * @param	filter	KalturaPermissionItemFilter		A filter used to exclude specific types of permission items (optional, default: null)
	 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("permissionitem", "list", kparams);
	},
	
	/**
	 * Updates an existing permission item object.
 *		 This action is available only to Kaltura system administrators..
	 * @param	permissionItemId	int		The permission item's unique identifier (optional)
	 * @param	permissionItem	KalturaPermissionItem		Id The permission item's unique identifier (optional)
	 **/
	update: function(permissionItemId, permissionItem){
		var kparams = new Object();
		kparams.permissionItemId = permissionItemId;
		kparams.permissionItem = permissionItem;
		return new KalturaRequestBuilder("permissionitem", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: permission.
 **/
var KalturaPermissionService = {
	/**
	 * Adds a new permission object to the account..
	 * @param	permission	KalturaPermission		The new permission (optional)
	 **/
	add: function(permission){
		var kparams = new Object();
		kparams.permission = permission;
		return new KalturaRequestBuilder("permission", "add", kparams);
	},
	
	/**
	 * Deletes an existing permission object..
	 * @param	permissionName	string		The name assigned to the permission (optional)
	 **/
	deleteAction: function(permissionName){
		var kparams = new Object();
		kparams.permissionName = permissionName;
		return new KalturaRequestBuilder("permission", "delete", kparams);
	},
	
	/**
	 * Retrieves a permission object using its ID..
	 * @param	permissionName	string		The name assigned to the permission (optional)
	 **/
	get: function(permissionName){
		var kparams = new Object();
		kparams.permissionName = permissionName;
		return new KalturaRequestBuilder("permission", "get", kparams);
	},
	
	/**
	 * Retrieves a list of permissions that apply to the current KS..
	 **/
	getCurrentPermissions: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("permission", "getCurrentPermissions", kparams);
	},
	
	/**
	 * Lists permission objects that are associated with an account.
 *		 Blocked permissions are listed unless you use a filter to exclude them.
 *		 Blocked permissions are listed unless you use a filter to exclude them..
	 * @param	filter	KalturaPermissionFilter		A filter used to exclude specific types of permissions (optional, default: null)
	 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("permission", "list", kparams);
	},
	
	/**
	 * Updates an existing permission object..
	 * @param	permissionName	string		The name assigned to the permission (optional)
	 * @param	permission	KalturaPermission		Name The name assigned to the permission (optional)
	 **/
	update: function(permissionName, permission){
		var kparams = new Object();
		kparams.permissionName = permissionName;
		kparams.permission = permission;
		return new KalturaRequestBuilder("permission", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: playlist.
 **/
var KalturaPlaylistService = {
	/**
	 * Add new playlist
 *		 Note that all entries used in a playlist will become public and may appear in KalturaNetwork.
	 * @param	playlist	KalturaPlaylist		 (optional)
	 * @param	updateStats	bool		indicates that the playlist statistics attributes should be updated synchronously now (optional, default: false)
	 **/
	add: function(playlist, updateStats){
		if(!updateStats)
			updateStats = false;
		var kparams = new Object();
		kparams.playlist = playlist;
		kparams.updateStats = updateStats;
		return new KalturaRequestBuilder("playlist", "add", kparams);
	},
	
	/**
	 * Clone an existing playlist.
	 * @param	id	string		Id of the playlist to clone (optional)
	 * @param	newPlaylist	KalturaPlaylist		Parameters defined here will override the ones in the cloned playlist (optional, default: null)
	 **/
	cloneAction: function(id, newPlaylist){
		if(!newPlaylist)
			newPlaylist = null;
		var kparams = new Object();
		kparams.id = id;
		if (newPlaylist != null)
			kparams.newPlaylist = newPlaylist;
		return new KalturaRequestBuilder("playlist", "clone", kparams);
	},
	
	/**
	 * Delete existing playlist.
	 * @param	id	string		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("playlist", "delete", kparams);
	},
	
	/**
	 * Retrieve playlist for playing purpose.
	 * @param	id	string		 (optional)
	 * @param	detailed	string		 (optional)
	 * @param	playlistContext	KalturaContext		 (optional, default: null)
	 * @param	filter	KalturaMediaEntryFilterForPlaylist		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	execute: function(id, detailed, playlistContext, filter, pager){
		if(!detailed)
			detailed = "";
		if(!playlistContext)
			playlistContext = null;
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.detailed = detailed;
		if (playlistContext != null)
			kparams.playlistContext = playlistContext;
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("playlist", "execute", kparams);
	},
	
	/**
	 * Retrieve playlist for playing purpose, based on content.
	 * @param	playlistType	int		 (optional, enum: KalturaPlaylistType)
	 * @param	playlistContent	string		 (optional)
	 * @param	detailed	string		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	executeFromContent: function(playlistType, playlistContent, detailed, pager){
		if(!detailed)
			detailed = "";
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.playlistType = playlistType;
		kparams.playlistContent = playlistContent;
		kparams.detailed = detailed;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("playlist", "executeFromContent", kparams);
	},
	
	/**
	 * Retrieve playlist for playing purpose, based on media entry filters.
	 * @param	filters	array		 (optional)
	 * @param	totalResults	int		 (optional)
	 * @param	detailed	string		 (optional, default: 1)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	executeFromFilters: function(filters, totalResults, detailed, pager){
		if(!detailed)
			detailed = 1;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filters = filters;
		kparams.totalResults = totalResults;
		kparams.detailed = detailed;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("playlist", "executeFromFilters", kparams);
	},
	
	/**
	 * Retrieve a playlist.
	 * @param	id	string		 (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 **/
	get: function(id, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.id = id;
		kparams.version = version;
		return new KalturaRequestBuilder("playlist", "get", kparams);
	},
	
	/**
	 * Retrieve playlist statistics.
	 * @param	playlistType	int		 (optional, enum: KalturaPlaylistType)
	 * @param	playlistContent	string		 (optional)
	 **/
	getStatsFromContent: function(playlistType, playlistContent){
		var kparams = new Object();
		kparams.playlistType = playlistType;
		kparams.playlistContent = playlistContent;
		return new KalturaRequestBuilder("playlist", "getStatsFromContent", kparams);
	},
	
	/**
	 * List available playlists.
	 * @param	filter	KalturaPlaylistFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("playlist", "list", kparams);
	},
	
	/**
	 * Update existing playlist
 *		 Note - you cannot change playlist type. Updated playlist must be of the same type..
	 * @param	id	string		 (optional)
	 * @param	playlist	KalturaPlaylist		 (optional)
	 * @param	updateStats	bool		 (optional, default: false)
	 **/
	update: function(id, playlist, updateStats){
		if(!updateStats)
			updateStats = false;
		var kparams = new Object();
		kparams.id = id;
		kparams.playlist = playlist;
		kparams.updateStats = updateStats;
		return new KalturaRequestBuilder("playlist", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: report.
 **/
var KalturaReportService = {
	/**
	 * .
	 * @param	id	int		 (optional)
	 * @param	params	array		 (optional, default: null)
	 **/
	execute: function(id, params){
		if(!params)
			params = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.params = params;
		return new KalturaRequestBuilder("report", "execute", kparams);
	},
	
	/**
	 * .
	 * @param	params	KalturaReportExportParams		 (optional)
	 **/
	exportToCsv: function(params){
		var kparams = new Object();
		kparams.params = params;
		return new KalturaRequestBuilder("report", "exportToCsv", kparams);
	},
	
	/**
	 * report getBaseTotal action allows to get the total base for storage reports.
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null)
	 **/
	getBaseTotal: function(reportType, reportInputFilter, objectIds, responseOptions){
		if(!objectIds)
			objectIds = null;
		if(!responseOptions)
			responseOptions = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.objectIds = objectIds;
		if (responseOptions != null)
			kparams.responseOptions = responseOptions;
		return new KalturaRequestBuilder("report", "getBaseTotal", kparams);
	},
	
	/**
	 * report getGraphs action allows to get a graph data for a specific report..
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	dimension	string		 (optional, default: null)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null)
	 **/
	getGraphs: function(reportType, reportInputFilter, dimension, objectIds, responseOptions){
		if(!dimension)
			dimension = null;
		if(!objectIds)
			objectIds = null;
		if(!responseOptions)
			responseOptions = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.dimension = dimension;
		kparams.objectIds = objectIds;
		if (responseOptions != null)
			kparams.responseOptions = responseOptions;
		return new KalturaRequestBuilder("report", "getGraphs", kparams);
	},
	
	/**
	 * report getTable action allows to get a graph data for a specific report..
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional)
	 * @param	order	string		 (optional, default: null)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null)
	 **/
	getTable: function(reportType, reportInputFilter, pager, order, objectIds, responseOptions){
		if(!order)
			order = null;
		if(!objectIds)
			objectIds = null;
		if(!responseOptions)
			responseOptions = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.pager = pager;
		kparams.order = order;
		kparams.objectIds = objectIds;
		if (responseOptions != null)
			kparams.responseOptions = responseOptions;
		return new KalturaRequestBuilder("report", "getTable", kparams);
	},
	
	/**
	 * report getTotal action allows to get a graph data for a specific report..
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null)
	 **/
	getTotal: function(reportType, reportInputFilter, objectIds, responseOptions){
		if(!objectIds)
			objectIds = null;
		if(!responseOptions)
			responseOptions = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.objectIds = objectIds;
		if (responseOptions != null)
			kparams.responseOptions = responseOptions;
		return new KalturaRequestBuilder("report", "getTotal", kparams);
	},
	
	/**
	 * will create a CSV file for the given report and return the URL to access it.
	 * @param	reportTitle	string		The title of the report to display at top of CSV (optional)
	 * @param	reportText	string		The text of the filter of the report (optional)
	 * @param	headers	string		The headers of the columns - a map between the enumerations on the server side and the their display text (optional)
	 * @param	reportType	string		 (optional, enum: KalturaReportType)
	 * @param	reportInputFilter	KalturaReportInputFilter		 (optional)
	 * @param	dimension	string		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @param	order	string		 (optional, default: null)
	 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null)
	 **/
	getUrlForReportAsCsv: function(reportTitle, reportText, headers, reportType, reportInputFilter, dimension, pager, order, objectIds, responseOptions){
		if(!dimension)
			dimension = null;
		if(!pager)
			pager = null;
		if(!order)
			order = null;
		if(!objectIds)
			objectIds = null;
		if(!responseOptions)
			responseOptions = null;
		var kparams = new Object();
		kparams.reportTitle = reportTitle;
		kparams.reportText = reportText;
		kparams.headers = headers;
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.dimension = dimension;
		if (pager != null)
			kparams.pager = pager;
		kparams.order = order;
		kparams.objectIds = objectIds;
		if (responseOptions != null)
			kparams.responseOptions = responseOptions;
		return new KalturaRequestBuilder("report", "getUrlForReportAsCsv", kparams);
	},
	
	/**
	 * Will serve a requested report.
	 * @param	id	string		- the requested id (optional)
	 **/
	serve: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("report", "serve", kparams);
	}
}

/**
 *Class definition for the Kaltura service: responseProfile.
 **/
var KalturaResponseProfileService = {
	/**
	 * Add new response profile.
	 * @param	addResponseProfile	KalturaResponseProfile		 (optional)
	 **/
	add: function(addResponseProfile){
		var kparams = new Object();
		kparams.addResponseProfile = addResponseProfile;
		return new KalturaRequestBuilder("responseprofile", "add", kparams);
	},
	
	/**
	 * Clone an existing response profile.
	 * @param	id	int		 (optional)
	 * @param	profile	KalturaResponseProfile		 (optional)
	 **/
	cloneAction: function(id, profile){
		var kparams = new Object();
		kparams.id = id;
		kparams.profile = profile;
		return new KalturaRequestBuilder("responseprofile", "clone", kparams);
	},
	
	/**
	 * Delete response profile by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("responseprofile", "delete", kparams);
	},
	
	/**
	 * Get response profile by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("responseprofile", "get", kparams);
	},
	
	/**
	 * List response profiles by filter and pager.
	 * @param	filter	KalturaResponseProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("responseprofile", "list", kparams);
	},
	
	/**
	 * Recalculate response profile cached objects.
	 * @param	options	KalturaResponseProfileCacheRecalculateOptions		 (optional)
	 **/
	recalculate: function(options){
		var kparams = new Object();
		kparams.options = options;
		return new KalturaRequestBuilder("responseprofile", "recalculate", kparams);
	},
	
	/**
	 * Update response profile by id.
	 * @param	id	int		 (optional)
	 * @param	updateResponseProfile	KalturaResponseProfile		 (optional)
	 **/
	update: function(id, updateResponseProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.updateResponseProfile = updateResponseProfile;
		return new KalturaRequestBuilder("responseprofile", "update", kparams);
	},
	
	/**
	 * Update response profile status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaResponseProfileStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("responseprofile", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: schema.
 **/
var KalturaSchemaService = {

}

/**
 *Class definition for the Kaltura service: search.
 **/
var KalturaSearchService = {
	/**
	 * .
	 * @param	searchSource	int		 (optional, enum: KalturaSearchProviderType)
	 * @param	userName	string		 (optional)
	 * @param	password	string		 (optional)
	 **/
	externalLogin: function(searchSource, userName, password){
		var kparams = new Object();
		kparams.searchSource = searchSource;
		kparams.userName = userName;
		kparams.password = password;
		return new KalturaRequestBuilder("search", "externalLogin", kparams);
	},
	
	/**
	 * Retrieve extra information about media found in search action
 *		 Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields..
	 * @param	searchResult	KalturaSearchResult		KalturaSearchResult object extends KalturaSearch and has all fields required for media:add (optional)
	 **/
	getMediaInfo: function(searchResult){
		var kparams = new Object();
		kparams.searchResult = searchResult;
		return new KalturaRequestBuilder("search", "getMediaInfo", kparams);
	},
	
	/**
	 * Search for media in one of the supported media providers.
	 * @param	search	KalturaSearch		A KalturaSearch object contains the search keywords, media provider and media type (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	search: function(search, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.search = search;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("search", "search", kparams);
	},
	
	/**
	 * Search for media given a specific URL
 *		 Kaltura supports a searchURL action on some of the media providers.
 *		 This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported).
	 * @param	mediaType	int		 (optional, enum: KalturaMediaType)
	 * @param	url	string		 (optional)
	 **/
	searchUrl: function(mediaType, url){
		var kparams = new Object();
		kparams.mediaType = mediaType;
		kparams.url = url;
		return new KalturaRequestBuilder("search", "searchUrl", kparams);
	}
}

/**
 *Class definition for the Kaltura service: serverNode.
 **/
var KalturaServerNodeService = {
	/**
	 * Adds a server node to the Kaltura DB..
	 * @param	serverNode	KalturaServerNode		 (optional)
	 **/
	add: function(serverNode){
		var kparams = new Object();
		kparams.serverNode = serverNode;
		return new KalturaRequestBuilder("servernode", "add", kparams);
	},
	
	/**
	 * delete server node by id.
	 * @param	serverNodeId	string		 (optional)
	 **/
	deleteAction: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "delete", kparams);
	},
	
	/**
	 * Disable server node by id.
	 * @param	serverNodeId	string		 (optional)
	 **/
	disable: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "disable", kparams);
	},
	
	/**
	 * Enable server node by id.
	 * @param	serverNodeId	string		 (optional)
	 **/
	enable: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "enable", kparams);
	},
	
	/**
	 * Get server node by id.
	 * @param	serverNodeId	int		 (optional)
	 **/
	get: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "get", kparams);
	},
	
	/**
	 * Get the edge server node full path.
	 * @param	hostName	string		 (optional)
	 * @param	protocol	string		 (optional, default: http)
	 * @param	deliveryFormat	string		 (optional, default: null)
	 * @param	deliveryType	string		 (optional, default: null)
	 **/
	getFullPath: function(hostName, protocol, deliveryFormat, deliveryType){
		if(!protocol)
			protocol = "http";
		if(!deliveryFormat)
			deliveryFormat = null;
		if(!deliveryType)
			deliveryType = null;
		var kparams = new Object();
		kparams.hostName = hostName;
		kparams.protocol = protocol;
		kparams.deliveryFormat = deliveryFormat;
		kparams.deliveryType = deliveryType;
		return new KalturaRequestBuilder("servernode", "getFullPath", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaServerNodeFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("servernode", "list", kparams);
	},
	
	/**
	 * Mark server node offline.
	 * @param	serverNodeId	string		 (optional)
	 **/
	markOffline: function(serverNodeId){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		return new KalturaRequestBuilder("servernode", "markOffline", kparams);
	},
	
	/**
	 * Update server node status.
	 * @param	hostName	string		 (optional)
	 * @param	serverNode	KalturaServerNode		 (optional, default: null)
	 * @param	serverNodeStatus	int		 (optional, enum: KalturaServerNodeStatus, default: 1)
	 **/
	reportStatus: function(hostName, serverNode, serverNodeStatus){
		if(!serverNode)
			serverNode = null;
		if(!serverNodeStatus)
			serverNodeStatus = 1;
		var kparams = new Object();
		kparams.hostName = hostName;
		if (serverNode != null)
			kparams.serverNode = serverNode;
		kparams.serverNodeStatus = serverNodeStatus;
		return new KalturaRequestBuilder("servernode", "reportStatus", kparams);
	},
	
	/**
	 * Update server node by id.
	 * @param	serverNodeId	int		 (optional)
	 * @param	serverNode	KalturaServerNode		Id (optional)
	 **/
	update: function(serverNodeId, serverNode){
		var kparams = new Object();
		kparams.serverNodeId = serverNodeId;
		kparams.serverNode = serverNode;
		return new KalturaRequestBuilder("servernode", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: session.
 **/
var KalturaSessionService = {
	/**
	 * End a session with the Kaltura server, making the current KS invalid..
	 **/
	end: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("session", "end", kparams);
	},
	
	/**
	 * Parse session key and return its info.
	 * @param	session	string		The KS to be parsed, keep it empty to use current session. (optional, default: null)
	 **/
	get: function(session){
		if(!session)
			session = null;
		var kparams = new Object();
		kparams.session = session;
		return new KalturaRequestBuilder("session", "get", kparams);
	},
	
	/**
	 * Start an impersonated session with Kaltura's server.
 *		 The result KS is the session key that you should pass to all services that requires a ticket..
	 * @param	secret	string		- should be the secret (admin or user) of the original partnerId (not impersonatedPartnerId). (optional)
	 * @param	impersonatedPartnerId	int		 (optional)
	 * @param	userId	string		- impersonated userId (optional)
	 * @param	type	int		 (optional, enum: KalturaSessionType)
	 * @param	partnerId	int		 (optional, default: null)
	 * @param	expiry	int		KS expiry time in seconds (optional, default: 86400)
	 * @param	privileges	string		 (optional, default: null)
	 **/
	impersonate: function(secret, impersonatedPartnerId, userId, type, partnerId, expiry, privileges){
		if(!userId)
			userId = "";
		if(!type)
			type = 0;
		if(!partnerId)
			partnerId = null;
		if(!expiry)
			expiry = 86400;
		if(!privileges)
			privileges = null;
		var kparams = new Object();
		kparams.secret = secret;
		kparams.impersonatedPartnerId = impersonatedPartnerId;
		kparams.userId = userId;
		kparams.type = type;
		kparams.partnerId = partnerId;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new KalturaRequestBuilder("session", "impersonate", kparams);
	},
	
	/**
	 * Start an impersonated session with Kaltura's server.
 *		 The result KS info contains the session key that you should pass to all services that requires a ticket.
 *		 Type, expiry and privileges won't be changed if they're not set.
	 * @param	session	string		The old KS of the impersonated partner (optional)
	 * @param	type	int		Type of the new KS (optional, enum: KalturaSessionType, default: null)
	 * @param	expiry	int		Expiry time in seconds of the new KS (optional, default: null)
	 * @param	privileges	string		Privileges of the new KS (optional, default: null)
	 **/
	impersonateByKs: function(session, type, expiry, privileges){
		if(!type)
			type = null;
		if(!expiry)
			expiry = null;
		if(!privileges)
			privileges = null;
		var kparams = new Object();
		kparams.session = session;
		kparams.type = type;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new KalturaRequestBuilder("session", "impersonateByKs", kparams);
	},
	
	/**
	 * Start a session with Kaltura's server.
 *		 The result KS is the session key that you should pass to all services that requires a ticket..
	 * @param	secret	string		Remember to provide the correct secret according to the sessionType you want (optional)
	 * @param	userId	string		 (optional)
	 * @param	type	int		Regular session or Admin session (optional, enum: KalturaSessionType)
	 * @param	partnerId	int		 (optional, default: null)
	 * @param	expiry	int		KS expiry time in seconds (optional, default: 86400)
	 * @param	privileges	string		 (optional, default: null)
	 **/
	start: function(secret, userId, type, partnerId, expiry, privileges){
		if(!userId)
			userId = "";
		if(!type)
			type = 0;
		if(!partnerId)
			partnerId = null;
		if(!expiry)
			expiry = 86400;
		if(!privileges)
			privileges = null;
		var kparams = new Object();
		kparams.secret = secret;
		kparams.userId = userId;
		kparams.type = type;
		kparams.partnerId = partnerId;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new KalturaRequestBuilder("session", "start", kparams);
	},
	
	/**
	 * Start a session for Kaltura's flash widgets.
	 * @param	widgetId	string		 (optional)
	 * @param	expiry	int		 (optional, default: 86400)
	 **/
	startWidgetSession: function(widgetId, expiry){
		if(!expiry)
			expiry = 86400;
		var kparams = new Object();
		kparams.widgetId = widgetId;
		kparams.expiry = expiry;
		return new KalturaRequestBuilder("session", "startWidgetSession", kparams);
	}
}

/**
 *Class definition for the Kaltura service: stats.
 **/
var KalturaStatsService = {
	/**
	 * Will write to the event log a single line representing the event
 *		 client version - will help interprete the line structure. different client versions might have slightly different data/data formats in the line
 *	event_id - number is the row number in yuval's excel
 *	datetime - same format as MySql's datetime - can change and should reflect the time zone
 *	session id - can be some big random number or guid
 *	partner id
 *	entry id
 *	unique viewer
 *	widget id
 *	ui_conf id
 *	uid - the puser id as set by the ppartner
 *	current point - in milliseconds
 *	duration - milliseconds
 *	user ip
 *	process duration - in milliseconds
 *	control id
 *	seek
 *	new point
 *	referrer
 *		
 *		
 *		 KalturaStatsEvent $event.
	 * @param	event	KalturaStatsEvent		 (optional)
	 **/
	collect: function(event){
		var kparams = new Object();
		kparams.event = event;
		return new KalturaRequestBuilder("stats", "collect", kparams);
	},
	
	/**
	 * Will collect the kmcEvent sent form the KMC client
 *		 // this will actually be an empty function because all events will be sent using GET and will anyway be logged in the apache log.
	 * @param	kmcEvent	KalturaStatsKmcEvent		 (optional)
	 **/
	kmcCollect: function(kmcEvent){
		var kparams = new Object();
		kparams.kmcEvent = kmcEvent;
		return new KalturaRequestBuilder("stats", "kmcCollect", kparams);
	},
	
	/**
	 * Use this action to report device capabilities to the kaltura server..
	 * @param	data	string		 (optional)
	 **/
	reportDeviceCapabilities: function(data){
		var kparams = new Object();
		kparams.data = data;
		return new KalturaRequestBuilder("stats", "reportDeviceCapabilities", kparams);
	},
	
	/**
	 * Use this action to report errors to the kaltura server..
	 * @param	errorCode	string		 (optional)
	 * @param	errorMessage	string		 (optional)
	 **/
	reportError: function(errorCode, errorMessage){
		var kparams = new Object();
		kparams.errorCode = errorCode;
		kparams.errorMessage = errorMessage;
		return new KalturaRequestBuilder("stats", "reportError", kparams);
	},
	
	/**
	 * .
	 * @param	kalturaCEError	KalturaCEError		 (optional)
	 **/
	reportKceError: function(kalturaCEError){
		var kparams = new Object();
		kparams.kalturaCEError = kalturaCEError;
		return new KalturaRequestBuilder("stats", "reportKceError", kparams);
	}
}

/**
 *Class definition for the Kaltura service: storageProfile.
 **/
var KalturaStorageProfileService = {
	/**
	 * Adds a storage profile to the Kaltura DB..
	 * @param	storageProfile	KalturaStorageProfile		 (optional)
	 **/
	add: function(storageProfile){
		var kparams = new Object();
		kparams.storageProfile = storageProfile;
		return new KalturaRequestBuilder("storageprofile", "add", kparams);
	},
	
	/**
	 * Get storage profile by id.
	 * @param	storageProfileId	int		 (optional)
	 **/
	get: function(storageProfileId){
		var kparams = new Object();
		kparams.storageProfileId = storageProfileId;
		return new KalturaRequestBuilder("storageprofile", "get", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaStorageProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("storageprofile", "list", kparams);
	},
	
	/**
	 * storage profile lockPendingFileSyncs action locks file syncs for export by the file sync periodic worker.
	 * @param	filter	KalturaFileSyncFilter		 (optional)
	 * @param	workerId	int		The id of the file sync import worker (optional)
	 * @param	storageProfileId	int		The id of the storage profile (optional)
	 * @param	maxCount	int		The maximum number of file syncs that should be returned (optional)
	 * @param	maxSize	int		The maximum total size of file syncs that should be returned, this limit may be exceeded by one file sync (optional, default: 9223372036854775807)
	 **/
	lockPendingFileSyncs: function(filter, workerId, storageProfileId, maxCount, maxSize){
		if(!maxSize)
			maxSize = 9223372036854775807;
		var kparams = new Object();
		kparams.filter = filter;
		kparams.workerId = workerId;
		kparams.storageProfileId = storageProfileId;
		kparams.maxCount = maxCount;
		kparams.maxSize = maxSize;
		return new KalturaRequestBuilder("storageprofile", "lockPendingFileSyncs", kparams);
	},
	
	/**
	 * Update storage profile by id.
	 * @param	storageProfileId	int		 (optional)
	 * @param	storageProfile	KalturaStorageProfile		Id (optional)
	 **/
	update: function(storageProfileId, storageProfile){
		var kparams = new Object();
		kparams.storageProfileId = storageProfileId;
		kparams.storageProfile = storageProfile;
		return new KalturaRequestBuilder("storageprofile", "update", kparams);
	},
	
	/**
	 * .
	 * @param	storageId	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaStorageProfileStatus)
	 **/
	updateStatus: function(storageId, status){
		var kparams = new Object();
		kparams.storageId = storageId;
		kparams.status = status;
		return new KalturaRequestBuilder("storageprofile", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: syndicationFeed.
 **/
var KalturaSyndicationFeedService = {
	/**
	 * Add new Syndication Feed.
	 * @param	syndicationFeed	KalturaBaseSyndicationFeed		 (optional)
	 **/
	add: function(syndicationFeed){
		var kparams = new Object();
		kparams.syndicationFeed = syndicationFeed;
		return new KalturaRequestBuilder("syndicationfeed", "add", kparams);
	},
	
	/**
	 * Delete Syndication Feed by ID.
	 * @param	id	string		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("syndicationfeed", "delete", kparams);
	},
	
	/**
	 * Get Syndication Feed by ID.
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("syndicationfeed", "get", kparams);
	},
	
	/**
	 * get entry count for a syndication feed.
	 * @param	feedId	string		 (optional)
	 **/
	getEntryCount: function(feedId){
		var kparams = new Object();
		kparams.feedId = feedId;
		return new KalturaRequestBuilder("syndicationfeed", "getEntryCount", kparams);
	},
	
	/**
	 * List Syndication Feeds by filter with paging support.
	 * @param	filter	KalturaBaseSyndicationFeedFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("syndicationfeed", "list", kparams);
	},
	
	/**
	 * request conversion for all entries that doesn't have the required flavor param
 *		 returns a comma-separated ids of conversion jobs.
	 * @param	feedId	string		 (optional)
	 **/
	requestConversion: function(feedId){
		var kparams = new Object();
		kparams.feedId = feedId;
		return new KalturaRequestBuilder("syndicationfeed", "requestConversion", kparams);
	},
	
	/**
	 * Update Syndication Feed by ID.
	 * @param	id	string		 (optional)
	 * @param	syndicationFeed	KalturaBaseSyndicationFeed		 (optional)
	 **/
	update: function(id, syndicationFeed){
		var kparams = new Object();
		kparams.id = id;
		kparams.syndicationFeed = syndicationFeed;
		return new KalturaRequestBuilder("syndicationfeed", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: system.
 **/
var KalturaSystemService = {
	/**
	 * .
	 **/
	getHealthCheck: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getHealthCheck", kparams);
	},
	
	/**
	 * .
	 **/
	getTime: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getTime", kparams);
	},
	
	/**
	 * .
	 **/
	getVersion: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getVersion", kparams);
	},
	
	/**
	 * .
	 **/
	ping: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "ping", kparams);
	},
	
	/**
	 * .
	 **/
	pingDatabase: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "pingDatabase", kparams);
	}
}

/**
 *Class definition for the Kaltura service: thumbAsset.
 **/
var KalturaThumbAssetService = {
	/**
	 * Add thumbnail asset.
	 * @param	entryId	string		 (optional)
	 * @param	thumbAsset	KalturaThumbAsset		 (optional)
	 **/
	add: function(entryId, thumbAsset){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.thumbAsset = thumbAsset;
		return new KalturaRequestBuilder("thumbasset", "add", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	fileData	HTMLElement		 (optional)
	 **/
	addFromImage: function(entryId, fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.entryId = entryId;
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("thumbasset", "addFromImage", kparams, kfiles);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	url	string		 (optional)
	 **/
	addFromUrl: function(entryId, url){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.url = url;
		return new KalturaRequestBuilder("thumbasset", "addFromUrl", kparams);
	},
	
	/**
	 * .
	 * @param	thumbAssetId	string		 (optional)
	 **/
	deleteAction: function(thumbAssetId){
		var kparams = new Object();
		kparams.thumbAssetId = thumbAssetId;
		return new KalturaRequestBuilder("thumbasset", "delete", kparams);
	},
	
	/**
	 * manually export an asset.
	 * @param	assetId	string		 (optional)
	 * @param	storageProfileId	int		 (optional)
	 **/
	exportAction: function(assetId, storageProfileId){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.storageProfileId = storageProfileId;
		return new KalturaRequestBuilder("thumbasset", "export", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	thumbParams	KalturaThumbParams		 (optional)
	 * @param	sourceAssetId	string		id of the source asset (flavor or thumbnail) to be used as source for the thumbnail generation (optional, default: null)
	 **/
	generate: function(entryId, thumbParams, sourceAssetId){
		if(!sourceAssetId)
			sourceAssetId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.thumbParams = thumbParams;
		kparams.sourceAssetId = sourceAssetId;
		return new KalturaRequestBuilder("thumbasset", "generate", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	destThumbParamsId	int		indicate the id of the ThumbParams to be generate this thumbnail by (optional)
	 **/
	generateByEntryId: function(entryId, destThumbParamsId){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.destThumbParamsId = destThumbParamsId;
		return new KalturaRequestBuilder("thumbasset", "generateByEntryId", kparams);
	},
	
	/**
	 * .
	 * @param	thumbAssetId	string		 (optional)
	 **/
	get: function(thumbAssetId){
		var kparams = new Object();
		kparams.thumbAssetId = thumbAssetId;
		return new KalturaRequestBuilder("thumbasset", "get", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 **/
	getByEntryId: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("thumbasset", "getByEntryId", kparams);
	},
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param	id	string		 (optional)
	 **/
	getRemotePaths: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("thumbasset", "getRemotePaths", kparams);
	},
	
	/**
	 * Get download URL for the asset.
	 * @param	id	string		 (optional)
	 * @param	storageId	int		 (optional, default: null)
	 * @param	thumbParams	KalturaThumbParams		 (optional, default: null)
	 **/
	getUrl: function(id, storageId, thumbParams){
		if(!storageId)
			storageId = null;
		if(!thumbParams)
			thumbParams = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.storageId = storageId;
		if (thumbParams != null)
			kparams.thumbParams = thumbParams;
		return new KalturaRequestBuilder("thumbasset", "getUrl", kparams);
	},
	
	/**
	 * List Thumbnail Assets by filter and pager.
	 * @param	filter	KalturaAssetFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("thumbasset", "list", kparams);
	},
	
	/**
	 * .
	 * @param	thumbAssetId	string		 (optional)
	 **/
	regenerate: function(thumbAssetId){
		var kparams = new Object();
		kparams.thumbAssetId = thumbAssetId;
		return new KalturaRequestBuilder("thumbasset", "regenerate", kparams);
	},
	
	/**
	 * Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 *		 Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync..
	 * @param	thumbAssetId	string		 (optional)
	 **/
	setAsDefault: function(thumbAssetId){
		var kparams = new Object();
		kparams.thumbAssetId = thumbAssetId;
		return new KalturaRequestBuilder("thumbasset", "setAsDefault", kparams);
	},
	
	/**
	 * Update content of thumbnail asset.
	 * @param	id	string		 (optional)
	 * @param	contentResource	KalturaContentResource		 (optional)
	 **/
	setContent: function(id, contentResource){
		var kparams = new Object();
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new KalturaRequestBuilder("thumbasset", "setContent", kparams);
	},
	
	/**
	 * Update thumbnail asset.
	 * @param	id	string		 (optional)
	 * @param	thumbAsset	KalturaThumbAsset		 (optional)
	 **/
	update: function(id, thumbAsset){
		var kparams = new Object();
		kparams.id = id;
		kparams.thumbAsset = thumbAsset;
		return new KalturaRequestBuilder("thumbasset", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: thumbParamsOutput.
 **/
var KalturaThumbParamsOutputService = {
	/**
	 * Get thumb params output object by ID.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("thumbparamsoutput", "get", kparams);
	},
	
	/**
	 * List thumb params output objects by filter and pager.
	 * @param	filter	KalturaThumbParamsOutputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("thumbparamsoutput", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: thumbParams.
 **/
var KalturaThumbParamsService = {
	/**
	 * Add new Thumb Params.
	 * @param	thumbParams	KalturaThumbParams		 (optional)
	 **/
	add: function(thumbParams){
		var kparams = new Object();
		kparams.thumbParams = thumbParams;
		return new KalturaRequestBuilder("thumbparams", "add", kparams);
	},
	
	/**
	 * Delete Thumb Params by ID.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("thumbparams", "delete", kparams);
	},
	
	/**
	 * Get Thumb Params by ID.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("thumbparams", "get", kparams);
	},
	
	/**
	 * Get Thumb Params by Conversion Profile ID.
	 * @param	conversionProfileId	int		 (optional)
	 **/
	getByConversionProfileId: function(conversionProfileId){
		var kparams = new Object();
		kparams.conversionProfileId = conversionProfileId;
		return new KalturaRequestBuilder("thumbparams", "getByConversionProfileId", kparams);
	},
	
	/**
	 * List Thumb Params by filter with paging support (By default - all system default params will be listed too).
	 * @param	filter	KalturaThumbParamsFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("thumbparams", "list", kparams);
	},
	
	/**
	 * Update Thumb Params by ID.
	 * @param	id	int		 (optional)
	 * @param	thumbParams	KalturaThumbParams		 (optional)
	 **/
	update: function(id, thumbParams){
		var kparams = new Object();
		kparams.id = id;
		kparams.thumbParams = thumbParams;
		return new KalturaRequestBuilder("thumbparams", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: uiConf.
 **/
var KalturaUiConfService = {
	/**
	 * UIConf Add action allows you to add a UIConf to Kaltura DB.
	 * @param	uiConf	KalturaUiConf		Mandatory input parameter of type KalturaUiConf (optional)
	 **/
	add: function(uiConf){
		var kparams = new Object();
		kparams.uiConf = uiConf;
		return new KalturaRequestBuilder("uiconf", "add", kparams);
	},
	
	/**
	 * Clone an existing UIConf.
	 * @param	id	int		 (optional)
	 **/
	cloneAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("uiconf", "clone", kparams);
	},
	
	/**
	 * Delete an existing UIConf.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("uiconf", "delete", kparams);
	},
	
	/**
	 * Retrieve a UIConf by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("uiconf", "get", kparams);
	},
	
	/**
	 * Retrieve a list of all available versions by object type.
	 **/
	getAvailableTypes: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("uiconf", "getAvailableTypes", kparams);
	},
	
	/**
	 * Retrieve a list of available UIConfs.
	 * @param	filter	KalturaUiConfFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("uiconf", "list", kparams);
	},
	
	/**
	 * retrieve a list of available template UIConfs.
	 * @param	filter	KalturaUiConfFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listTemplates: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("uiconf", "listTemplates", kparams);
	},
	
	/**
	 * Update an existing UIConf.
	 * @param	id	int		 (optional)
	 * @param	uiConf	KalturaUiConf		 (optional)
	 **/
	update: function(id, uiConf){
		var kparams = new Object();
		kparams.id = id;
		kparams.uiConf = uiConf;
		return new KalturaRequestBuilder("uiconf", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: upload.
 **/
var KalturaUploadService = {
	/**
	 * .
	 * @param	fileName	string		 (optional)
	 **/
	getUploadedFileTokenByFileName: function(fileName){
		var kparams = new Object();
		kparams.fileName = fileName;
		return new KalturaRequestBuilder("upload", "getUploadedFileTokenByFileName", kparams);
	},
	
	/**
	 * .
	 * @param	fileData	HTMLElement		The file data (optional)
	 **/
	upload: function(fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("upload", "upload", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: uploadToken.
 **/
var KalturaUploadTokenService = {
	/**
	 * Adds new upload token to upload a file.
	 * @param	uploadToken	KalturaUploadToken		 (optional, default: null)
	 **/
	add: function(uploadToken){
		if(!uploadToken)
			uploadToken = null;
		var kparams = new Object();
		if (uploadToken != null)
			kparams.uploadToken = uploadToken;
		return new KalturaRequestBuilder("uploadtoken", "add", kparams);
	},
	
	/**
	 * Deletes the upload token by upload token id.
	 * @param	uploadTokenId	string		 (optional)
	 **/
	deleteAction: function(uploadTokenId){
		var kparams = new Object();
		kparams.uploadTokenId = uploadTokenId;
		return new KalturaRequestBuilder("uploadtoken", "delete", kparams);
	},
	
	/**
	 * Get upload token by id.
	 * @param	uploadTokenId	string		 (optional)
	 **/
	get: function(uploadTokenId){
		var kparams = new Object();
		kparams.uploadTokenId = uploadTokenId;
		return new KalturaRequestBuilder("uploadtoken", "get", kparams);
	},
	
	/**
	 * List upload token by filter with pager support. 
 *		 When using a user session the service will be restricted to users objects only..
	 * @param	filter	KalturaUploadTokenFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("uploadtoken", "list", kparams);
	},
	
	/**
	 * Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients)
 *		 Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 *		 A parallel upload session should have three stages:
 *		 1. A single upload with resume=false and finalChunk=false
 *		 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 *		 If a chunk fails to upload it can be re-uploaded.
 *		 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded 
 *		 with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 *		 has been returned (indicating not all of the chunks were appended yet) the final request can be retried..
	 * @param	uploadTokenId	string		 (optional)
	 * @param	fileData	HTMLElement		 (optional)
	 * @param	resume	bool		 (optional, default: false)
	 * @param	finalChunk	bool		 (optional, default: true)
	 * @param	resumeAt	float		 (optional, default: -1)
	 **/
	upload: function(uploadTokenId, fileData, resume, finalChunk, resumeAt){
		if(!resume)
			resume = false;
		if(!finalChunk)
			finalChunk = true;
		if(!resumeAt)
			resumeAt = -1;
		var kparams = new Object();
		var kfiles = new Object();
		kparams.uploadTokenId = uploadTokenId;
		kfiles.fileData = fileData;
		kparams.resume = resume;
		kparams.finalChunk = finalChunk;
		kparams.resumeAt = resumeAt;
		return new KalturaRequestBuilder("uploadtoken", "upload", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: userEntry.
 **/
var KalturaUserEntryService = {
	/**
	 * Adds a user_entry to the Kaltura DB..
	 * @param	userEntry	KalturaUserEntry		 (optional)
	 **/
	add: function(userEntry){
		var kparams = new Object();
		kparams.userEntry = userEntry;
		return new KalturaRequestBuilder("userentry", "add", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaUserEntryFilter		 (optional)
	 **/
	bulkDelete: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("userentry", "bulkDelete", kparams);
	},
	
	/**
	 * .
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("userentry", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("userentry", "get", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaUserEntryFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("userentry", "list", kparams);
	},
	
	/**
	 * Submits the quiz so that it's status will be submitted and calculates the score for the quiz.
	 * @param	id	int		 (optional)
	 **/
	submitQuiz: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("userentry", "submitQuiz", kparams);
	},
	
	/**
	 * .
	 * @param	id	int		 (optional)
	 * @param	userEntry	KalturaUserEntry		 (optional)
	 **/
	update: function(id, userEntry){
		var kparams = new Object();
		kparams.id = id;
		kparams.userEntry = userEntry;
		return new KalturaRequestBuilder("userentry", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: userRole.
 **/
var KalturaUserRoleService = {
	/**
	 * Adds a new user role object to the account..
	 * @param	userRole	KalturaUserRole		A new role (optional)
	 **/
	add: function(userRole){
		var kparams = new Object();
		kparams.userRole = userRole;
		return new KalturaRequestBuilder("userrole", "add", kparams);
	},
	
	/**
	 * Creates a new user role object that is a duplicate of an existing role..
	 * @param	userRoleId	int		The user role's unique identifier (optional)
	 **/
	cloneAction: function(userRoleId){
		var kparams = new Object();
		kparams.userRoleId = userRoleId;
		return new KalturaRequestBuilder("userrole", "clone", kparams);
	},
	
	/**
	 * Deletes an existing user role object..
	 * @param	userRoleId	int		The user role's unique identifier (optional)
	 **/
	deleteAction: function(userRoleId){
		var kparams = new Object();
		kparams.userRoleId = userRoleId;
		return new KalturaRequestBuilder("userrole", "delete", kparams);
	},
	
	/**
	 * Retrieves a user role object using its ID..
	 * @param	userRoleId	int		The user role's unique identifier (optional)
	 **/
	get: function(userRoleId){
		var kparams = new Object();
		kparams.userRoleId = userRoleId;
		return new KalturaRequestBuilder("userrole", "get", kparams);
	},
	
	/**
	 * Lists user role objects that are associated with an account.
 *		 Blocked user roles are listed unless you use a filter to exclude them.
 *		 Deleted user roles are not listed unless you use a filter to include them..
	 * @param	filter	KalturaUserRoleFilter		A filter used to exclude specific types of user roles (optional, default: null)
	 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("userrole", "list", kparams);
	},
	
	/**
	 * Updates an existing user role object..
	 * @param	userRoleId	int		The user role's unique identifier (optional)
	 * @param	userRole	KalturaUserRole		Id The user role's unique identifier (optional)
	 **/
	update: function(userRoleId, userRole){
		var kparams = new Object();
		kparams.userRoleId = userRoleId;
		kparams.userRole = userRole;
		return new KalturaRequestBuilder("userrole", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: user.
 **/
var KalturaUserService = {
	/**
	 * Adds a new user to an existing account in the Kaltura database.
 *		 Input param $id is the unique identifier in the partner's system..
	 * @param	user	KalturaUser		The new user (optional)
	 **/
	add: function(user){
		var kparams = new Object();
		kparams.user = user;
		return new KalturaRequestBuilder("user", "add", kparams);
	},
	
	/**
	 * .
	 * @param	fileData	HTMLElement		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null)
	 * @param	bulkUploadUserData	KalturaBulkUploadUserData		 (optional, default: null)
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData, bulkUploadUserData){
		if(!bulkUploadData)
			bulkUploadData = null;
		if(!bulkUploadUserData)
			bulkUploadUserData = null;
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadUserData != null)
			kparams.bulkUploadUserData = bulkUploadUserData;
		return new KalturaRequestBuilder("user", "addFromBulkUpload", kparams, kfiles);
	},
	
	/**
	 * Action which checks whther user login.
	 * @param	filter	KalturaUserLoginDataFilter		 (optional)
	 **/
	checkLoginDataExists: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("user", "checkLoginDataExists", kparams);
	},
	
	/**
	 * Deletes a user from a partner account..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 **/
	deleteAction: function(userId){
		var kparams = new Object();
		kparams.userId = userId;
		return new KalturaRequestBuilder("user", "delete", kparams);
	},
	
	/**
	 * Disables a user's ability to log into a partner account using an email address and a password.
 *		 You may use either a userId or a loginId parameter for this action..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional, default: null)
	 * @param	loginId	string		The user's email address that identifies the user for login (optional, default: null)
	 **/
	disableLogin: function(userId, loginId){
		if(!userId)
			userId = null;
		if(!loginId)
			loginId = null;
		var kparams = new Object();
		kparams.userId = userId;
		kparams.loginId = loginId;
		return new KalturaRequestBuilder("user", "disableLogin", kparams);
	},
	
	/**
	 * Enables a user to log into a partner account using an email address and a password.
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 * @param	loginId	string		The user's email address that identifies the user for login (optional)
	 * @param	password	string		The user's password (optional, default: null)
	 **/
	enableLogin: function(userId, loginId, password){
		if(!password)
			password = null;
		var kparams = new Object();
		kparams.userId = userId;
		kparams.loginId = loginId;
		kparams.password = password;
		return new KalturaRequestBuilder("user", "enableLogin", kparams);
	},
	
	/**
	 * Creates a batch job that sends an email with a link to download a CSV containing a list of users.
	 * @param	filter	KalturaUserFilter		A filter used to exclude specific types of users (optional, default: null)
	 * @param	metadataProfileId	int		 (optional, default: null)
	 * @param	additionalFields	array		 (optional, default: null)
	 * @param	mappedFields	array		mapping between field (optional, default: null)
	 **/
	exportToCsv: function(filter, metadataProfileId, additionalFields, mappedFields){
		if(!filter)
			filter = null;
		if(!metadataProfileId)
			metadataProfileId = null;
		if(!additionalFields)
			additionalFields = null;
		if(!mappedFields)
			mappedFields = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		kparams.metadataProfileId = metadataProfileId;
		kparams.additionalFields = additionalFields;
		kparams.mappedFields = mappedFields;
		return new KalturaRequestBuilder("user", "exportToCsv", kparams);
	},
	
	/**
	 * get QR image content.
	 * @param	hashKey	string		 (optional)
	 **/
	generateQrCode: function(hashKey){
		var kparams = new Object();
		kparams.hashKey = hashKey;
		return new KalturaRequestBuilder("user", "generateQrCode", kparams);
	},
	
	/**
	 * Retrieves a user object for a specified user ID..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional, default: null)
	 **/
	get: function(userId){
		if(!userId)
			userId = null;
		var kparams = new Object();
		kparams.userId = userId;
		return new KalturaRequestBuilder("user", "get", kparams);
	},
	
	/**
	 * Retrieves a user object for a user's login ID and partner ID.
 *		 A login ID is the email address used by a user to log into the system..
	 * @param	loginId	string		The user's email address that identifies the user for login (optional)
	 **/
	getByLoginId: function(loginId){
		var kparams = new Object();
		kparams.loginId = loginId;
		return new KalturaRequestBuilder("user", "getByLoginId", kparams);
	},
	
	/**
	 * Index an entry by id..
	 * @param	id	string		 (optional)
	 * @param	shouldUpdate	bool		 (optional, default: true)
	 **/
	index: function(id, shouldUpdate){
		if(!shouldUpdate)
			shouldUpdate = true;
		var kparams = new Object();
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("user", "index", kparams);
	},
	
	/**
	 * Lists user objects that are associated with an account.
 *		 Blocked users are listed unless you use a filter to exclude them.
 *		 Deleted users are not listed unless you use a filter to include them..
	 * @param	filter	KalturaUserFilter		A filter used to exclude specific types of users (optional, default: null)
	 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("user", "list", kparams);
	},
	
	/**
	 * Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password..
	 * @param	partnerId	int		The identifier of the partner account (optional)
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 * @param	password	string		The user's password (optional)
	 * @param	expiry	int		The requested time (in seconds) before the generated KS expires (By default, a KS expires after 24 hours). (optional, default: 86400)
	 * @param	privileges	string		Special privileges (optional, default: *)
	 **/
	login: function(partnerId, userId, password, expiry, privileges){
		if(!expiry)
			expiry = 86400;
		if(!privileges)
			privileges = "*";
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.userId = userId;
		kparams.password = password;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new KalturaRequestBuilder("user", "login", kparams);
	},
	
	/**
	 * Logs a user to the destination account provided the KS' user ID is associated with the destination account and the loginData ID matches.
	 * @param	requestedPartnerId	int		 (optional)
	 **/
	loginByKs: function(requestedPartnerId){
		var kparams = new Object();
		kparams.requestedPartnerId = requestedPartnerId;
		return new KalturaRequestBuilder("user", "loginByKs", kparams);
	},
	
	/**
	 * Logs a user into a partner account with a user login ID and a user password..
	 * @param	loginId	string		The user's email address that identifies the user for login (optional)
	 * @param	password	string		The user's password (optional)
	 * @param	partnerId	int		The identifier of the partner account (optional, default: null)
	 * @param	expiry	int		The requested time (in seconds) before the generated KS expires (By default, a KS expires after 24 hours). (optional, default: 86400)
	 * @param	privileges	string		Special privileges (optional, default: *)
	 * @param	otp	string		the user's one-time password (optional, default: null)
	 **/
	loginByLoginId: function(loginId, password, partnerId, expiry, privileges, otp){
		if(!partnerId)
			partnerId = null;
		if(!expiry)
			expiry = 86400;
		if(!privileges)
			privileges = "*";
		if(!otp)
			otp = null;
		var kparams = new Object();
		kparams.loginId = loginId;
		kparams.password = password;
		kparams.partnerId = partnerId;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		kparams.otp = otp;
		return new KalturaRequestBuilder("user", "loginByLoginId", kparams);
	},
	
	/**
	 * Notifies that a user is banned from an account..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 **/
	notifyBan: function(userId){
		var kparams = new Object();
		kparams.userId = userId;
		return new KalturaRequestBuilder("user", "notifyBan", kparams);
	},
	
	/**
	 * Reset user's password and send the user an email to generate a new one..
	 * @param	email	string		The user's email address (login email) (optional)
	 * @param	linkType	string		kmc or kms (optional, enum: KalturaResetPassLinkType, default: null)
	 **/
	resetPassword: function(email, linkType){
		if(!linkType)
			linkType = null;
		var kparams = new Object();
		kparams.email = email;
		kparams.linkType = linkType;
		return new KalturaRequestBuilder("user", "resetPassword", kparams);
	},
	
	/**
	 * Will serve a requested CSV.
	 * @param	id	string		- the requested file id (optional)
	 **/
	serveCsv: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("user", "serveCsv", kparams);
	},
	
	/**
	 * Set initial user password.
	 * @param	hashKey	string		The hash key used to identify the user (retrieved by email) (optional)
	 * @param	newPassword	string		The new password to set for the user (optional)
	 **/
	setInitialPassword: function(hashKey, newPassword){
		var kparams = new Object();
		kparams.hashKey = hashKey;
		kparams.newPassword = newPassword;
		return new KalturaRequestBuilder("user", "setInitialPassword", kparams);
	},
	
	/**
	 * Updates an existing user object.
 *		 You can also use this action to update the userId..
	 * @param	userId	string		The user's unique identifier in the partner's system (optional)
	 * @param	user	KalturaUser		Id The user's unique identifier in the partner's system (optional)
	 **/
	update: function(userId, user){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.user = user;
		return new KalturaRequestBuilder("user", "update", kparams);
	},
	
	/**
	 * Updates a user's login data: email, password, name..
	 * @param	oldLoginId	string		The user's current email address that identified the user for login (optional)
	 * @param	password	string		The user's current email address that identified the user for login (optional)
	 * @param	newLoginId	string		Optional, The user's email address that will identify the user for login (optional)
	 * @param	newPassword	string		Optional, The user's new password (optional)
	 * @param	newFirstName	string		Optional, The user's new first name (optional, default: null)
	 * @param	newLastName	string		Optional, The user's new last name (optional, default: null)
	 * @param	otp	string		the user's one-time password (optional, default: null)
	 **/
	updateLoginData: function(oldLoginId, password, newLoginId, newPassword, newFirstName, newLastName, otp){
		if(!newLoginId)
			newLoginId = "";
		if(!newPassword)
			newPassword = "";
		if(!newFirstName)
			newFirstName = null;
		if(!newLastName)
			newLastName = null;
		if(!otp)
			otp = null;
		var kparams = new Object();
		kparams.oldLoginId = oldLoginId;
		kparams.password = password;
		kparams.newLoginId = newLoginId;
		kparams.newPassword = newPassword;
		kparams.newFirstName = newFirstName;
		kparams.newLastName = newLastName;
		kparams.otp = otp;
		return new KalturaRequestBuilder("user", "updateLoginData", kparams);
	},
	
	/**
	 * Validate hash key.
	 * @param	hashKey	string		The hash key used to identify the user (retrieved by email) (optional)
	 **/
	validateHashKey: function(hashKey){
		var kparams = new Object();
		kparams.hashKey = hashKey;
		return new KalturaRequestBuilder("user", "validateHashKey", kparams);
	}
}

/**
 *Class definition for the Kaltura service: widget.
 **/
var KalturaWidgetService = {
	/**
	 * Add new widget, can be attached to entry or kshow
 *		 SourceWidget is ignored..
	 * @param	widget	KalturaWidget		 (optional)
	 **/
	add: function(widget){
		var kparams = new Object();
		kparams.widget = widget;
		return new KalturaRequestBuilder("widget", "add", kparams);
	},
	
	/**
	 * Add widget based on existing widget.
 *		 Must provide valid sourceWidgetId.
	 * @param	widget	KalturaWidget		 (optional)
	 **/
	cloneAction: function(widget){
		var kparams = new Object();
		kparams.widget = widget;
		return new KalturaRequestBuilder("widget", "clone", kparams);
	},
	
	/**
	 * Get widget by id.
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("widget", "get", kparams);
	},
	
	/**
	 * Retrieve a list of available widget depends on the filter given.
	 * @param	filter	KalturaWidgetFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("widget", "list", kparams);
	},
	
	/**
	 * Update existing widget.
	 * @param	id	string		 (optional)
	 * @param	widget	KalturaWidget		 (optional)
	 **/
	update: function(id, widget){
		var kparams = new Object();
		kparams.id = id;
		kparams.widget = widget;
		return new KalturaRequestBuilder("widget", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: annotation.
 **/
var KalturaAnnotationService = {
	/**
	 * Allows you to add an annotation object associated with an entry.
	 * @param	annotation	KalturaCuePoint		 (optional)
	 **/
	add: function(annotation){
		var kparams = new Object();
		kparams.annotation = annotation;
		return new KalturaRequestBuilder("annotation_annotation", "add", kparams);
	},
	
	/**
	 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
	 * @param	fileData	HTMLElement		 (optional)
	 **/
	addFromBulk: function(fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("annotation_annotation", "addFromBulk", kparams, kfiles);
	},
	
	/**
	 * Clone cuePoint with id to given entry.
	 * @param	id	string		 (optional)
	 * @param	entryId	string		 (optional)
	 * @param	parentId	string		 (optional, default: null)
	 **/
	cloneAction: function(id, entryId, parentId){
		if(!parentId)
			parentId = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.entryId = entryId;
		kparams.parentId = parentId;
		return new KalturaRequestBuilder("annotation_annotation", "clone", kparams);
	},
	
	/**
	 * count cue point objects by filter.
	 * @param	filter	KalturaCuePointFilter		 (optional, default: null)
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("annotation_annotation", "count", kparams);
	},
	
	/**
	 * delete cue point by id, and delete all children cue points.
	 * @param	id	string		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("annotation_annotation", "delete", kparams);
	},
	
	/**
	 * Retrieve an CuePoint object by id.
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("annotation_annotation", "get", kparams);
	},
	
	/**
	 * List annotation objects by filter and pager.
	 * @param	filter	KalturaCuePointFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("annotation_annotation", "list", kparams);
	},
	
	/**
	 * Update annotation by id.
	 * @param	id	string		 (optional)
	 * @param	annotation	KalturaCuePoint		 (optional)
	 **/
	update: function(id, annotation){
		var kparams = new Object();
		kparams.id = id;
		kparams.annotation = annotation;
		return new KalturaRequestBuilder("annotation_annotation", "update", kparams);
	},
	
	/**
	 * .
	 * @param	id	string		 (optional)
	 * @param	startTime	int		 (optional)
	 * @param	endTime	int		 (optional, default: null)
	 **/
	updateCuePointsTimes: function(id, startTime, endTime){
		if(!endTime)
			endTime = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.startTime = startTime;
		kparams.endTime = endTime;
		return new KalturaRequestBuilder("annotation_annotation", "updateCuePointsTimes", kparams);
	},
	
	/**
	 * Update cuePoint status by id.
	 * @param	id	string		 (optional)
	 * @param	status	int		 (optional, enum: KalturaCuePointStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("annotation_annotation", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: aspera.
 **/
var KalturaAsperaService = {
	/**
	 * .
	 * @param	flavorAssetId	string		 (optional)
	 **/
	getFaspUrl: function(flavorAssetId){
		var kparams = new Object();
		kparams.flavorAssetId = flavorAssetId;
		return new KalturaRequestBuilder("aspera_aspera", "getFaspUrl", kparams);
	}
}

/**
 *Class definition for the Kaltura service: attachmentAsset.
 **/
var KalturaAttachmentAssetService = {
	/**
	 * Add attachment asset.
	 * @param	entryId	string		 (optional)
	 * @param	attachmentAsset	KalturaAttachmentAsset		 (optional)
	 **/
	add: function(entryId, attachmentAsset){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.attachmentAsset = attachmentAsset;
		return new KalturaRequestBuilder("attachment_attachmentasset", "add", kparams);
	},
	
	/**
	 * .
	 * @param	attachmentAssetId	string		 (optional)
	 **/
	deleteAction: function(attachmentAssetId){
		var kparams = new Object();
		kparams.attachmentAssetId = attachmentAssetId;
		return new KalturaRequestBuilder("attachment_attachmentasset", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	attachmentAssetId	string		 (optional)
	 **/
	get: function(attachmentAssetId){
		var kparams = new Object();
		kparams.attachmentAssetId = attachmentAssetId;
		return new KalturaRequestBuilder("attachment_attachmentasset", "get", kparams);
	},
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param	id	string		 (optional)
	 **/
	getRemotePaths: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("attachment_attachmentasset", "getRemotePaths", kparams);
	},
	
	/**
	 * Get download URL for the asset.
	 * @param	id	string		 (optional)
	 * @param	storageId	int		 (optional, default: null)
	 **/
	getUrl: function(id, storageId){
		if(!storageId)
			storageId = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.storageId = storageId;
		return new KalturaRequestBuilder("attachment_attachmentasset", "getUrl", kparams);
	},
	
	/**
	 * List attachment Assets by filter and pager.
	 * @param	filter	KalturaAssetFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("attachment_attachmentasset", "list", kparams);
	},
	
	/**
	 * Update content of attachment asset.
	 * @param	id	string		 (optional)
	 * @param	contentResource	KalturaContentResource		 (optional)
	 **/
	setContent: function(id, contentResource){
		var kparams = new Object();
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new KalturaRequestBuilder("attachment_attachmentasset", "setContent", kparams);
	},
	
	/**
	 * Update attachment asset.
	 * @param	id	string		 (optional)
	 * @param	attachmentAsset	KalturaAttachmentAsset		 (optional)
	 **/
	update: function(id, attachmentAsset){
		var kparams = new Object();
		kparams.id = id;
		kparams.attachmentAsset = attachmentAsset;
		return new KalturaRequestBuilder("attachment_attachmentasset", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: auditTrail.
 **/
var KalturaAuditTrailService = {
	/**
	 * Allows you to add an audit trail object and audit trail content associated with Kaltura object.
	 * @param	auditTrail	KalturaAuditTrail		 (optional)
	 **/
	add: function(auditTrail){
		var kparams = new Object();
		kparams.auditTrail = auditTrail;
		return new KalturaRequestBuilder("audit_audittrail", "add", kparams);
	},
	
	/**
	 * Retrieve an audit trail object by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("audit_audittrail", "get", kparams);
	},
	
	/**
	 * List audit trail objects by filter and pager.
	 * @param	filter	KalturaAuditTrailFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("audit_audittrail", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: beacon.
 **/
var KalturaBeaconService = {
	/**
	 * .
	 * @param	beacon	KalturaBeacon		 (optional)
	 * @param	shouldLog	int		 (optional, enum: KalturaNullableBoolean)
	 **/
	add: function(beacon, shouldLog){
		if(!shouldLog)
			shouldLog = 0;
		var kparams = new Object();
		kparams.beacon = beacon;
		kparams.shouldLog = shouldLog;
		return new KalturaRequestBuilder("beacon_beacon", "add", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaBeaconEnhanceFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	enhanceSearch: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("beacon_beacon", "enhanceSearch", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaBeaconFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("beacon_beacon", "list", kparams);
	},
	
	/**
	 * .
	 * @param	searchParams	KalturaBeaconSearchParams		 (optional)
	 * @param	pager	KalturaPager		 (optional, default: null)
	 **/
	searchScheduledResource: function(searchParams, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.searchParams = searchParams;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("beacon_beacon", "searchScheduledResource", kparams);
	}
}

/**
 *Class definition for the Kaltura service: bulk.
 **/
var KalturaBulkService = {
	/**
	 * Aborts the bulk upload and all its child jobs.
	 * @param	id	int		job id (optional)
	 **/
	abort: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload_bulk", "abort", kparams);
	},
	
	/**
	 * Get bulk upload batch job by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload_bulk", "get", kparams);
	},
	
	/**
	 * List bulk upload batch jobs.
	 * @param	bulkUploadFilter	KalturaBulkUploadFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(bulkUploadFilter, pager){
		if(!bulkUploadFilter)
			bulkUploadFilter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (bulkUploadFilter != null)
			kparams.bulkUploadFilter = bulkUploadFilter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("bulkupload_bulk", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: businessProcessCase.
 **/
var KalturaBusinessProcessCaseService = {
	/**
	 * Abort business-process case.
	 * @param	objectType	string		 (optional, enum: KalturaEventNotificationEventObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	businessProcessStartNotificationTemplateId	int		 (optional)
	 **/
	abort: function(objectType, objectId, businessProcessStartNotificationTemplateId){
		var kparams = new Object();
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.businessProcessStartNotificationTemplateId = businessProcessStartNotificationTemplateId;
		return new KalturaRequestBuilder("businessprocessnotification_businessprocesscase", "abort", kparams);
	},
	
	/**
	 * list business-process cases.
	 * @param	objectType	string		 (optional, enum: KalturaEventNotificationEventObjectType)
	 * @param	objectId	string		 (optional)
	 **/
	listAction: function(objectType, objectId){
		var kparams = new Object();
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		return new KalturaRequestBuilder("businessprocessnotification_businessprocesscase", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: captionAsset.
 **/
var KalturaCaptionAssetService = {
	/**
	 * Add caption asset.
	 * @param	entryId	string		 (optional)
	 * @param	captionAsset	KalturaCaptionAsset		 (optional)
	 **/
	add: function(entryId, captionAsset){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.captionAsset = captionAsset;
		return new KalturaRequestBuilder("caption_captionasset", "add", kparams);
	},
	
	/**
	 * .
	 * @param	captionAssetId	string		 (optional)
	 **/
	deleteAction: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("caption_captionasset", "delete", kparams);
	},
	
	/**
	 * manually export an asset.
	 * @param	assetId	string		 (optional)
	 * @param	storageProfileId	int		 (optional)
	 **/
	exportAction: function(assetId, storageProfileId){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.storageProfileId = storageProfileId;
		return new KalturaRequestBuilder("caption_captionasset", "export", kparams);
	},
	
	/**
	 * .
	 * @param	captionAssetId	string		 (optional)
	 **/
	get: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("caption_captionasset", "get", kparams);
	},
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param	id	string		 (optional)
	 **/
	getRemotePaths: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("caption_captionasset", "getRemotePaths", kparams);
	},
	
	/**
	 * Get download URL for the asset.
	 * @param	id	string		 (optional)
	 * @param	storageId	int		 (optional, default: null)
	 **/
	getUrl: function(id, storageId){
		if(!storageId)
			storageId = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.storageId = storageId;
		return new KalturaRequestBuilder("caption_captionasset", "getUrl", kparams);
	},
	
	/**
	 * List caption Assets by filter and pager.
	 * @param	filter	KalturaAssetFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("caption_captionasset", "list", kparams);
	},
	
	/**
	 * Markss the caption as default and removes that mark from all other caption assets of the entry..
	 * @param	captionAssetId	string		 (optional)
	 **/
	setAsDefault: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("caption_captionasset", "setAsDefault", kparams);
	},
	
	/**
	 * Update content of caption asset.
	 * @param	id	string		 (optional)
	 * @param	contentResource	KalturaContentResource		 (optional)
	 **/
	setContent: function(id, contentResource){
		var kparams = new Object();
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new KalturaRequestBuilder("caption_captionasset", "setContent", kparams);
	},
	
	/**
	 * Update caption asset.
	 * @param	id	string		 (optional)
	 * @param	captionAsset	KalturaCaptionAsset		 (optional)
	 **/
	update: function(id, captionAsset){
		var kparams = new Object();
		kparams.id = id;
		kparams.captionAsset = captionAsset;
		return new KalturaRequestBuilder("caption_captionasset", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: captionParams.
 **/
var KalturaCaptionParamsService = {
	/**
	 * Add new Caption Params.
	 * @param	captionParams	KalturaCaptionParams		 (optional)
	 **/
	add: function(captionParams){
		var kparams = new Object();
		kparams.captionParams = captionParams;
		return new KalturaRequestBuilder("caption_captionparams", "add", kparams);
	},
	
	/**
	 * Delete Caption Params by ID.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("caption_captionparams", "delete", kparams);
	},
	
	/**
	 * Get Caption Params by ID.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("caption_captionparams", "get", kparams);
	},
	
	/**
	 * List Caption Params by filter with paging support (By default - all system default params will be listed too).
	 * @param	filter	KalturaCaptionParamsFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("caption_captionparams", "list", kparams);
	},
	
	/**
	 * Update Caption Params by ID.
	 * @param	id	int		 (optional)
	 * @param	captionParams	KalturaCaptionParams		 (optional)
	 **/
	update: function(id, captionParams){
		var kparams = new Object();
		kparams.id = id;
		kparams.captionParams = captionParams;
		return new KalturaRequestBuilder("caption_captionparams", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: captionAssetItem.
 **/
var KalturaCaptionAssetItemService = {
	/**
	 * List caption asset items by filter and pager.
	 * @param	captionAssetId	string		 (optional)
	 * @param	captionAssetItemFilter	KalturaCaptionAssetItemFilter		 (optional, default: null)
	 * @param	captionAssetItemPager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(captionAssetId, captionAssetItemFilter, captionAssetItemPager){
		if(!captionAssetItemFilter)
			captionAssetItemFilter = null;
		if(!captionAssetItemPager)
			captionAssetItemPager = null;
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		if (captionAssetItemFilter != null)
			kparams.captionAssetItemFilter = captionAssetItemFilter;
		if (captionAssetItemPager != null)
			kparams.captionAssetItemPager = captionAssetItemPager;
		return new KalturaRequestBuilder("captionsearch_captionassetitem", "list", kparams);
	},
	
	/**
	 * Parse content of caption asset and index it.
	 * @param	captionAssetId	string		 (optional)
	 **/
	parse: function(captionAssetId){
		var kparams = new Object();
		kparams.captionAssetId = captionAssetId;
		return new KalturaRequestBuilder("captionsearch_captionassetitem", "parse", kparams);
	},
	
	/**
	 * Search caption asset items by filter, pager and free text.
	 * @param	entryFilter	KalturaBaseEntryFilter		 (optional, default: null)
	 * @param	captionAssetItemFilter	KalturaCaptionAssetItemFilter		 (optional, default: null)
	 * @param	captionAssetItemPager	KalturaFilterPager		 (optional, default: null)
	 **/
	search: function(entryFilter, captionAssetItemFilter, captionAssetItemPager){
		if(!entryFilter)
			entryFilter = null;
		if(!captionAssetItemFilter)
			captionAssetItemFilter = null;
		if(!captionAssetItemPager)
			captionAssetItemPager = null;
		var kparams = new Object();
		if (entryFilter != null)
			kparams.entryFilter = entryFilter;
		if (captionAssetItemFilter != null)
			kparams.captionAssetItemFilter = captionAssetItemFilter;
		if (captionAssetItemPager != null)
			kparams.captionAssetItemPager = captionAssetItemPager;
		return new KalturaRequestBuilder("captionsearch_captionassetitem", "search", kparams);
	},
	
	/**
	 * Search caption asset items by filter, pager and free text.
	 * @param	entryFilter	KalturaBaseEntryFilter		 (optional, default: null)
	 * @param	captionAssetItemFilter	KalturaCaptionAssetItemFilter		 (optional, default: null)
	 * @param	captionAssetItemPager	KalturaFilterPager		 (optional, default: null)
	 **/
	searchEntries: function(entryFilter, captionAssetItemFilter, captionAssetItemPager){
		if(!entryFilter)
			entryFilter = null;
		if(!captionAssetItemFilter)
			captionAssetItemFilter = null;
		if(!captionAssetItemPager)
			captionAssetItemPager = null;
		var kparams = new Object();
		if (entryFilter != null)
			kparams.entryFilter = entryFilter;
		if (captionAssetItemFilter != null)
			kparams.captionAssetItemFilter = captionAssetItemFilter;
		if (captionAssetItemPager != null)
			kparams.captionAssetItemPager = captionAssetItemPager;
		return new KalturaRequestBuilder("captionsearch_captionassetitem", "searchEntries", kparams);
	}
}

/**
 *Class definition for the Kaltura service: distributionProfile.
 **/
var KalturaDistributionProfileService = {
	/**
	 * Add new Distribution Profile.
	 * @param	distributionProfile	KalturaDistributionProfile		 (optional)
	 **/
	add: function(distributionProfile){
		var kparams = new Object();
		kparams.distributionProfile = distributionProfile;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "add", kparams);
	},
	
	/**
	 * Delete Distribution Profile by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "delete", kparams);
	},
	
	/**
	 * Get Distribution Profile by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "get", kparams);
	},
	
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaDistributionProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "list", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listByPartner: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "listByPartner", kparams);
	},
	
	/**
	 * Update Distribution Profile by id.
	 * @param	id	int		 (optional)
	 * @param	distributionProfile	KalturaDistributionProfile		 (optional)
	 **/
	update: function(id, distributionProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.distributionProfile = distributionProfile;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "update", kparams);
	},
	
	/**
	 * Update Distribution Profile status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaDistributionProfileStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("contentdistribution_distributionprofile", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: entryDistribution.
 **/
var KalturaEntryDistributionService = {
	/**
	 * Add new Entry Distribution.
	 * @param	entryDistribution	KalturaEntryDistribution		 (optional)
	 **/
	add: function(entryDistribution){
		var kparams = new Object();
		kparams.entryDistribution = entryDistribution;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "add", kparams);
	},
	
	/**
	 * Delete Entry Distribution by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "delete", kparams);
	},
	
	/**
	 * Get Entry Distribution by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "get", kparams);
	},
	
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaEntryDistributionFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "list", kparams);
	},
	
	/**
	 * Retries last submit action.
	 * @param	id	int		 (optional)
	 **/
	retrySubmit: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "retrySubmit", kparams);
	},
	
	/**
	 * Submits Entry Distribution to the remote destination.
	 * @param	id	int		 (optional)
	 * @param	submitWhenReady	bool		 (optional, default: false)
	 **/
	submitAdd: function(id, submitWhenReady){
		if(!submitWhenReady)
			submitWhenReady = false;
		var kparams = new Object();
		kparams.id = id;
		kparams.submitWhenReady = submitWhenReady;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "submitAdd", kparams);
	},
	
	/**
	 * Deletes Entry Distribution from the remote destination.
	 * @param	id	int		 (optional)
	 **/
	submitDelete: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "submitDelete", kparams);
	},
	
	/**
	 * Submits Entry Distribution report request.
	 * @param	id	int		 (optional)
	 **/
	submitFetchReport: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "submitFetchReport", kparams);
	},
	
	/**
	 * Submits Entry Distribution changes to the remote destination.
	 * @param	id	int		 (optional)
	 **/
	submitUpdate: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "submitUpdate", kparams);
	},
	
	/**
	 * Update Entry Distribution by id.
	 * @param	id	int		 (optional)
	 * @param	entryDistribution	KalturaEntryDistribution		 (optional)
	 **/
	update: function(id, entryDistribution){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryDistribution = entryDistribution;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "update", kparams);
	},
	
	/**
	 * Validates Entry Distribution by id for submission.
	 * @param	id	int		 (optional)
	 **/
	validate: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_entrydistribution", "validate", kparams);
	}
}

/**
 *Class definition for the Kaltura service: distributionProvider.
 **/
var KalturaDistributionProviderService = {
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaDistributionProviderFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("contentdistribution_distributionprovider", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: genericDistributionProvider.
 **/
var KalturaGenericDistributionProviderService = {
	/**
	 * Add new Generic Distribution Provider.
	 * @param	genericDistributionProvider	KalturaGenericDistributionProvider		 (optional)
	 **/
	add: function(genericDistributionProvider){
		var kparams = new Object();
		kparams.genericDistributionProvider = genericDistributionProvider;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "add", kparams);
	},
	
	/**
	 * Delete Generic Distribution Provider by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "delete", kparams);
	},
	
	/**
	 * Get Generic Distribution Provider by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "get", kparams);
	},
	
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaGenericDistributionProviderFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "list", kparams);
	},
	
	/**
	 * Update Generic Distribution Provider by id.
	 * @param	id	int		 (optional)
	 * @param	genericDistributionProvider	KalturaGenericDistributionProvider		 (optional)
	 **/
	update: function(id, genericDistributionProvider){
		var kparams = new Object();
		kparams.id = id;
		kparams.genericDistributionProvider = genericDistributionProvider;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovider", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: genericDistributionProviderAction.
 **/
var KalturaGenericDistributionProviderActionService = {
	/**
	 * Add new Generic Distribution Provider Action.
	 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional)
	 **/
	add: function(genericDistributionProviderAction){
		var kparams = new Object();
		kparams.genericDistributionProviderAction = genericDistributionProviderAction;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "add", kparams);
	},
	
	/**
	 * Add MRSS transform file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	xslData	string		XSL MRSS transformation data (optional)
	 **/
	addMrssTransform: function(id, xslData){
		var kparams = new Object();
		kparams.id = id;
		kparams.xslData = xslData;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addMrssTransform", kparams);
	},
	
	/**
	 * Add MRSS transform file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	xslFile	HTMLElement		XSL MRSS transformation file (optional)
	 **/
	addMrssTransformFromFile: function(id, xslFile){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.id = id;
		kfiles.xslFile = xslFile;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addMrssTransformFromFile", kparams, kfiles);
	},
	
	/**
	 * Add MRSS validate file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	xsdData	string		XSD MRSS validatation data (optional)
	 **/
	addMrssValidate: function(id, xsdData){
		var kparams = new Object();
		kparams.id = id;
		kparams.xsdData = xsdData;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addMrssValidate", kparams);
	},
	
	/**
	 * Add MRSS validate file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	xsdFile	HTMLElement		XSD MRSS validatation file (optional)
	 **/
	addMrssValidateFromFile: function(id, xsdFile){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.id = id;
		kfiles.xsdFile = xsdFile;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addMrssValidateFromFile", kparams, kfiles);
	},
	
	/**
	 * Add results transform file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	transformData	string		transformation data xsl, xPath or regex (optional)
	 **/
	addResultsTransform: function(id, transformData){
		var kparams = new Object();
		kparams.id = id;
		kparams.transformData = transformData;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addResultsTransform", kparams);
	},
	
	/**
	 * Add MRSS transform file to generic distribution provider action.
	 * @param	id	int		the id of the generic distribution provider action (optional)
	 * @param	transformFile	HTMLElement		transformation file xsl, xPath or regex (optional)
	 **/
	addResultsTransformFromFile: function(id, transformFile){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.id = id;
		kfiles.transformFile = transformFile;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "addResultsTransformFromFile", kparams, kfiles);
	},
	
	/**
	 * Delete Generic Distribution Provider Action by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "delete", kparams);
	},
	
	/**
	 * Delete Generic Distribution Provider Action by provider id.
	 * @param	genericDistributionProviderId	int		 (optional)
	 * @param	actionType	int		 (optional, enum: KalturaDistributionAction)
	 **/
	deleteByProviderId: function(genericDistributionProviderId, actionType){
		var kparams = new Object();
		kparams.genericDistributionProviderId = genericDistributionProviderId;
		kparams.actionType = actionType;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "deleteByProviderId", kparams);
	},
	
	/**
	 * Get Generic Distribution Provider Action by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "get", kparams);
	},
	
	/**
	 * Get Generic Distribution Provider Action by provider id.
	 * @param	genericDistributionProviderId	int		 (optional)
	 * @param	actionType	int		 (optional, enum: KalturaDistributionAction)
	 **/
	getByProviderId: function(genericDistributionProviderId, actionType){
		var kparams = new Object();
		kparams.genericDistributionProviderId = genericDistributionProviderId;
		kparams.actionType = actionType;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "getByProviderId", kparams);
	},
	
	/**
	 * List all distribution providers.
	 * @param	filter	KalturaGenericDistributionProviderActionFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "list", kparams);
	},
	
	/**
	 * Update Generic Distribution Provider Action by id.
	 * @param	id	int		 (optional)
	 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional)
	 **/
	update: function(id, genericDistributionProviderAction){
		var kparams = new Object();
		kparams.id = id;
		kparams.genericDistributionProviderAction = genericDistributionProviderAction;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "update", kparams);
	},
	
	/**
	 * Update Generic Distribution Provider Action by provider id.
	 * @param	genericDistributionProviderId	int		 (optional)
	 * @param	actionType	int		 (optional, enum: KalturaDistributionAction)
	 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional)
	 **/
	updateByProviderId: function(genericDistributionProviderId, actionType, genericDistributionProviderAction){
		var kparams = new Object();
		kparams.genericDistributionProviderId = genericDistributionProviderId;
		kparams.actionType = actionType;
		kparams.genericDistributionProviderAction = genericDistributionProviderAction;
		return new KalturaRequestBuilder("contentdistribution_genericdistributionprovideraction", "updateByProviderId", kparams);
	}
}

/**
 *Class definition for the Kaltura service: cuePoint.
 **/
var KalturaCuePointService = {
	/**
	 * Allows you to add an cue point object associated with an entry.
	 * @param	cuePoint	KalturaCuePoint		 (optional)
	 **/
	add: function(cuePoint){
		var kparams = new Object();
		kparams.cuePoint = cuePoint;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "add", kparams);
	},
	
	/**
	 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
	 * @param	fileData	HTMLElement		 (optional)
	 **/
	addFromBulk: function(fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "addFromBulk", kparams, kfiles);
	},
	
	/**
	 * Clone cuePoint with id to given entry.
	 * @param	id	string		 (optional)
	 * @param	entryId	string		 (optional)
	 **/
	cloneAction: function(id, entryId){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "clone", kparams);
	},
	
	/**
	 * count cue point objects by filter.
	 * @param	filter	KalturaCuePointFilter		 (optional, default: null)
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "count", kparams);
	},
	
	/**
	 * delete cue point by id, and delete all children cue points.
	 * @param	id	string		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "delete", kparams);
	},
	
	/**
	 * Retrieve an CuePoint object by id.
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "get", kparams);
	},
	
	/**
	 * List cue point objects by filter and pager.
	 * @param	filter	KalturaCuePointFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "list", kparams);
	},
	
	/**
	 * Update cue point by id.
	 * @param	id	string		 (optional)
	 * @param	cuePoint	KalturaCuePoint		 (optional)
	 **/
	update: function(id, cuePoint){
		var kparams = new Object();
		kparams.id = id;
		kparams.cuePoint = cuePoint;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "update", kparams);
	},
	
	/**
	 * .
	 * @param	id	string		 (optional)
	 * @param	startTime	int		 (optional)
	 * @param	endTime	int		 (optional, default: null)
	 **/
	updateCuePointsTimes: function(id, startTime, endTime){
		if(!endTime)
			endTime = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.startTime = startTime;
		kparams.endTime = endTime;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "updateCuePointsTimes", kparams);
	},
	
	/**
	 * Update cuePoint status by id.
	 * @param	id	string		 (optional)
	 * @param	status	int		 (optional, enum: KalturaCuePointStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("cuepoint_cuepoint", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: documents.
 **/
var KalturaDocumentsService = {
	/**
	 * Copy entry into new entry.
	 * @param	sourceEntryId	string		Document entry id to copy from (optional)
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null)
	 * @param	sourceFlavorParamsId	int		The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null)
	 **/
	addFromEntry: function(sourceEntryId, documentEntry, sourceFlavorParamsId){
		if(!documentEntry)
			documentEntry = null;
		if(!sourceFlavorParamsId)
			sourceFlavorParamsId = null;
		var kparams = new Object();
		kparams.sourceEntryId = sourceEntryId;
		if (documentEntry != null)
			kparams.documentEntry = documentEntry;
		kparams.sourceFlavorParamsId = sourceFlavorParamsId;
		return new KalturaRequestBuilder("document_documents", "addFromEntry", kparams);
	},
	
	/**
	 * Copy flavor asset into new entry.
	 * @param	sourceFlavorAssetId	string		Flavor asset id to be used as the new entry source (optional)
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null)
	 **/
	addFromFlavorAsset: function(sourceFlavorAssetId, documentEntry){
		if(!documentEntry)
			documentEntry = null;
		var kparams = new Object();
		kparams.sourceFlavorAssetId = sourceFlavorAssetId;
		if (documentEntry != null)
			kparams.documentEntry = documentEntry;
		return new KalturaRequestBuilder("document_documents", "addFromFlavorAsset", kparams);
	},
	
	/**
	 * Add new document entry after the specific document file was uploaded and the upload token id exists.
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional)
	 * @param	uploadTokenId	string		Upload token id (optional)
	 **/
	addFromUploadedFile: function(documentEntry, uploadTokenId){
		var kparams = new Object();
		kparams.documentEntry = documentEntry;
		kparams.uploadTokenId = uploadTokenId;
		return new KalturaRequestBuilder("document_documents", "addFromUploadedFile", kparams);
	},
	
	/**
	 * Approves document replacement.
	 * @param	entryId	string		document entry id to replace (optional)
	 **/
	approveReplace: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "approveReplace", kparams);
	},
	
	/**
	 * Cancels document replacement.
	 * @param	entryId	string		Document entry id to cancel (optional)
	 **/
	cancelReplace: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "cancelReplace", kparams);
	},
	
	/**
	 * Convert entry.
	 * @param	entryId	string		Document entry id (optional)
	 * @param	conversionProfileId	int		 (optional, default: null)
	 * @param	dynamicConversionAttributes	array		 (optional, default: null)
	 **/
	convert: function(entryId, conversionProfileId, dynamicConversionAttributes){
		if(!conversionProfileId)
			conversionProfileId = null;
		if(!dynamicConversionAttributes)
			dynamicConversionAttributes = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.conversionProfileId = conversionProfileId;
		kparams.dynamicConversionAttributes = dynamicConversionAttributes;
		return new KalturaRequestBuilder("document_documents", "convert", kparams);
	},
	
	/**
	 * This will queue a batch job for converting the document file to swf
 *		 Returns the URL where the new swf will be available.
	 * @param	entryId	string		 (optional)
	 **/
	convertPptToSwf: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "convertPptToSwf", kparams);
	},
	
	/**
	 * Delete a document entry..
	 * @param	entryId	string		Document entry id to delete (optional)
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("document_documents", "delete", kparams);
	},
	
	/**
	 * Get document entry by ID..
	 * @param	entryId	string		Document entry id (optional)
	 * @param	version	int		Desired version of the data (optional, default: -1)
	 **/
	get: function(entryId, version){
		if(!version)
			version = -1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		return new KalturaRequestBuilder("document_documents", "get", kparams);
	},
	
	/**
	 * List document entries by filter with paging support..
	 * @param	filter	KalturaDocumentEntryFilter		Document entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("document_documents", "list", kparams);
	},
	
	/**
	 * Update document entry. Only the properties that were set will be updated..
	 * @param	entryId	string		Document entry id to update (optional)
	 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata to update (optional)
	 **/
	update: function(entryId, documentEntry){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.documentEntry = documentEntry;
		return new KalturaRequestBuilder("document_documents", "update", kparams);
	},
	
	/**
	 * Replace content associated with the given document entry..
	 * @param	entryId	string		document entry id to update (optional)
	 * @param	resource	KalturaResource		Resource to be used to replace entry doc content (optional)
	 * @param	conversionProfileId	int		The conversion profile id to be used on the entry (optional, default: null)
	 **/
	updateContent: function(entryId, resource, conversionProfileId){
		if(!conversionProfileId)
			conversionProfileId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.resource = resource;
		kparams.conversionProfileId = conversionProfileId;
		return new KalturaRequestBuilder("document_documents", "updateContent", kparams);
	},
	
	/**
	 * Upload a document file to Kaltura, then the file can be used to create a document entry..
	 * @param	fileData	HTMLElement		The file data (optional)
	 **/
	upload: function(fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("document_documents", "upload", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: drmPolicy.
 **/
var KalturaDrmPolicyService = {
	/**
	 * Allows you to add a new DrmPolicy object.
	 * @param	drmPolicy	KalturaDrmPolicy		 (optional)
	 **/
	add: function(drmPolicy){
		var kparams = new Object();
		kparams.drmPolicy = drmPolicy;
		return new KalturaRequestBuilder("drm_drmpolicy", "add", kparams);
	},
	
	/**
	 * Mark the KalturaDrmPolicy object as deleted.
	 * @param	drmPolicyId	int		 (optional)
	 **/
	deleteAction: function(drmPolicyId){
		var kparams = new Object();
		kparams.drmPolicyId = drmPolicyId;
		return new KalturaRequestBuilder("drm_drmpolicy", "delete", kparams);
	},
	
	/**
	 * Retrieve a KalturaDrmPolicy object by ID.
	 * @param	drmPolicyId	int		 (optional)
	 **/
	get: function(drmPolicyId){
		var kparams = new Object();
		kparams.drmPolicyId = drmPolicyId;
		return new KalturaRequestBuilder("drm_drmpolicy", "get", kparams);
	},
	
	/**
	 * List KalturaDrmPolicy objects.
	 * @param	filter	KalturaDrmPolicyFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("drm_drmpolicy", "list", kparams);
	},
	
	/**
	 * Update an existing KalturaDrmPolicy object.
	 * @param	drmPolicyId	int		 (optional)
	 * @param	drmPolicy	KalturaDrmPolicy		Id (optional)
	 **/
	update: function(drmPolicyId, drmPolicy){
		var kparams = new Object();
		kparams.drmPolicyId = drmPolicyId;
		kparams.drmPolicy = drmPolicy;
		return new KalturaRequestBuilder("drm_drmpolicy", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: drmProfile.
 **/
var KalturaDrmProfileService = {
	/**
	 * Allows you to add a new DrmProfile object.
	 * @param	drmProfile	KalturaDrmProfile		 (optional)
	 **/
	add: function(drmProfile){
		var kparams = new Object();
		kparams.drmProfile = drmProfile;
		return new KalturaRequestBuilder("drm_drmprofile", "add", kparams);
	},
	
	/**
	 * Mark the KalturaDrmProfile object as deleted.
	 * @param	drmProfileId	int		 (optional)
	 **/
	deleteAction: function(drmProfileId){
		var kparams = new Object();
		kparams.drmProfileId = drmProfileId;
		return new KalturaRequestBuilder("drm_drmprofile", "delete", kparams);
	},
	
	/**
	 * Retrieve a KalturaDrmProfile object by ID.
	 * @param	drmProfileId	int		 (optional)
	 **/
	get: function(drmProfileId){
		var kparams = new Object();
		kparams.drmProfileId = drmProfileId;
		return new KalturaRequestBuilder("drm_drmprofile", "get", kparams);
	},
	
	/**
	 * Retrieve a KalturaDrmProfile object by provider, if no specific profile defined return default profile.
	 * @param	provider	string		 (optional, enum: KalturaDrmProviderType)
	 **/
	getByProvider: function(provider){
		var kparams = new Object();
		kparams.provider = provider;
		return new KalturaRequestBuilder("drm_drmprofile", "getByProvider", kparams);
	},
	
	/**
	 * List KalturaDrmProfile objects.
	 * @param	filter	KalturaDrmProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("drm_drmprofile", "list", kparams);
	},
	
	/**
	 * Update an existing KalturaDrmProfile object.
	 * @param	drmProfileId	int		 (optional)
	 * @param	drmProfile	KalturaDrmProfile		Id (optional)
	 **/
	update: function(drmProfileId, drmProfile){
		var kparams = new Object();
		kparams.drmProfileId = drmProfileId;
		kparams.drmProfile = drmProfile;
		return new KalturaRequestBuilder("drm_drmprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: drmLicenseAccess.
 **/
var KalturaDrmLicenseAccessService = {
	/**
	 * getAccessAction
 *	     input: flavor ids, drmProvider
 *	     Get Access Action.
	 * @param	entryId	string		 (optional)
	 * @param	flavorIds	string		 (optional)
	 * @param	referrer	string		 (optional)
	 **/
	getAccess: function(entryId, flavorIds, referrer){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.flavorIds = flavorIds;
		kparams.referrer = referrer;
		return new KalturaRequestBuilder("drm_drmlicenseaccess", "getAccess", kparams);
	}
}

/**
 *Class definition for the Kaltura service: dropFolder.
 **/
var KalturaDropFolderService = {
	/**
	 * Allows you to add a new KalturaDropFolder object.
	 * @param	dropFolder	KalturaDropFolder		 (optional)
	 **/
	add: function(dropFolder){
		var kparams = new Object();
		kparams.dropFolder = dropFolder;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "add", kparams);
	},
	
	/**
	 * Mark the KalturaDropFolder object as deleted.
	 * @param	dropFolderId	int		 (optional)
	 **/
	deleteAction: function(dropFolderId){
		var kparams = new Object();
		kparams.dropFolderId = dropFolderId;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "delete", kparams);
	},
	
	/**
	 * freeExclusive KalturaDropFolder object.
	 * @param	dropFolderId	int		 (optional)
	 * @param	errorCode	string		 (optional, default: null)
	 * @param	errorDescription	string		 (optional, default: null)
	 **/
	freeExclusiveDropFolder: function(dropFolderId, errorCode, errorDescription){
		if(!errorCode)
			errorCode = null;
		if(!errorDescription)
			errorDescription = null;
		var kparams = new Object();
		kparams.dropFolderId = dropFolderId;
		kparams.errorCode = errorCode;
		kparams.errorDescription = errorDescription;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "freeExclusiveDropFolder", kparams);
	},
	
	/**
	 * Retrieve a KalturaDropFolder object by ID.
	 * @param	dropFolderId	int		 (optional)
	 **/
	get: function(dropFolderId){
		var kparams = new Object();
		kparams.dropFolderId = dropFolderId;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "get", kparams);
	},
	
	/**
	 * getExclusive KalturaDropFolder object.
	 * @param	tag	string		 (optional)
	 * @param	maxTime	int		 (optional)
	 **/
	getExclusiveDropFolder: function(tag, maxTime){
		var kparams = new Object();
		kparams.tag = tag;
		kparams.maxTime = maxTime;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "getExclusiveDropFolder", kparams);
	},
	
	/**
	 * List KalturaDropFolder objects.
	 * @param	filter	KalturaDropFolderFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "list", kparams);
	},
	
	/**
	 * Update an existing KalturaDropFolder object.
	 * @param	dropFolderId	int		 (optional)
	 * @param	dropFolder	KalturaDropFolder		Id (optional)
	 **/
	update: function(dropFolderId, dropFolder){
		var kparams = new Object();
		kparams.dropFolderId = dropFolderId;
		kparams.dropFolder = dropFolder;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "update", kparams);
	},
	
	/**
	 * .
	 * @param	dropFolderId	int		 (optional)
	 * @param	dropFolder	KalturaBasicFieldsDropFolder		Id (optional)
	 **/
	updateBasicFields: function(dropFolderId, dropFolder){
		var kparams = new Object();
		kparams.dropFolderId = dropFolderId;
		kparams.dropFolder = dropFolder;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "updateBasicFields", kparams);
	},
	
	/**
	 * .
	 * @param	dropFolderId	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaDropFolderStatus)
	 **/
	updateStatus: function(dropFolderId, status){
		var kparams = new Object();
		kparams.dropFolderId = dropFolderId;
		kparams.status = status;
		return new KalturaRequestBuilder("dropfolder_dropfolder", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: dropFolderFile.
 **/
var KalturaDropFolderFileService = {
	/**
	 * Allows you to add a new KalturaDropFolderFile object.
	 * @param	dropFolderFile	KalturaDropFolderFile		 (optional)
	 **/
	add: function(dropFolderFile){
		var kparams = new Object();
		kparams.dropFolderFile = dropFolderFile;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "add", kparams);
	},
	
	/**
	 * Mark the KalturaDropFolderFile object as deleted.
	 * @param	dropFolderFileId	int		 (optional)
	 **/
	deleteAction: function(dropFolderFileId){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "delete", kparams);
	},
	
	/**
	 * Retrieve a KalturaDropFolderFile object by ID.
	 * @param	dropFolderFileId	int		 (optional)
	 **/
	get: function(dropFolderFileId){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "get", kparams);
	},
	
	/**
	 * Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE).
	 * @param	dropFolderFileId	int		 (optional)
	 **/
	ignore: function(dropFolderFileId){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "ignore", kparams);
	},
	
	/**
	 * List KalturaDropFolderFile objects.
	 * @param	filter	KalturaDropFolderFileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "list", kparams);
	},
	
	/**
	 * Update an existing KalturaDropFolderFile object.
	 * @param	dropFolderFileId	int		 (optional)
	 * @param	dropFolderFile	KalturaDropFolderFile		Id (optional)
	 **/
	update: function(dropFolderFileId, dropFolderFile){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		kparams.dropFolderFile = dropFolderFile;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "update", kparams);
	},
	
	/**
	 * Update status of KalturaDropFolderFile.
	 * @param	dropFolderFileId	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaDropFolderFileStatus)
	 **/
	updateStatus: function(dropFolderFileId, status){
		var kparams = new Object();
		kparams.dropFolderFileId = dropFolderFileId;
		kparams.status = status;
		return new KalturaRequestBuilder("dropfolder_dropfolderfile", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: eSearch.
 **/
var KalturaESearchService = {
	/**
	 * .
	 * @param	searchParams	KalturaESearchCategoryParams		 (optional)
	 * @param	pager	KalturaPager		 (optional, default: null)
	 **/
	searchCategory: function(searchParams, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.searchParams = searchParams;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("elasticsearch_esearch", "searchCategory", kparams);
	},
	
	/**
	 * .
	 * @param	searchParams	KalturaESearchEntryParams		 (optional)
	 * @param	pager	KalturaPager		 (optional, default: null)
	 **/
	searchEntry: function(searchParams, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.searchParams = searchParams;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("elasticsearch_esearch", "searchEntry", kparams);
	},
	
	/**
	 * .
	 * @param	searchParams	KalturaESearchGroupParams		 (optional)
	 * @param	pager	KalturaPager		 (optional, default: null)
	 **/
	searchGroup: function(searchParams, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.searchParams = searchParams;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("elasticsearch_esearch", "searchGroup", kparams);
	},
	
	/**
	 * .
	 * @param	searchParams	KalturaESearchUserParams		 (optional)
	 * @param	pager	KalturaPager		 (optional, default: null)
	 **/
	searchUser: function(searchParams, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.searchParams = searchParams;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("elasticsearch_esearch", "searchUser", kparams);
	}
}

/**
 *Class definition for the Kaltura service: eventNotificationTemplate.
 **/
var KalturaEventNotificationTemplateService = {
	/**
	 * This action allows for the creation of new backend event types in the system. This action requires access to the Kaltura server Admin Console. If you're looking to register to existing event types, please use the clone action instead..
	 * @param	eventNotificationTemplate	KalturaEventNotificationTemplate		 (optional)
	 **/
	add: function(eventNotificationTemplate){
		var kparams = new Object();
		kparams.eventNotificationTemplate = eventNotificationTemplate;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "add", kparams);
	},
	
	/**
	 * This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action..
	 * @param	id	int		source template to clone (optional)
	 * @param	eventNotificationTemplate	KalturaEventNotificationTemplate		overwrite configuration object (optional, default: null)
	 **/
	cloneAction: function(id, eventNotificationTemplate){
		if(!eventNotificationTemplate)
			eventNotificationTemplate = null;
		var kparams = new Object();
		kparams.id = id;
		if (eventNotificationTemplate != null)
			kparams.eventNotificationTemplate = eventNotificationTemplate;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "clone", kparams);
	},
	
	/**
	 * Delete an event notification template object.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "delete", kparams);
	},
	
	/**
	 * Dispatch event notification object by id.
	 * @param	id	int		 (optional)
	 * @param	scope	KalturaEventNotificationScope		 (optional)
	 **/
	dispatch: function(id, scope){
		var kparams = new Object();
		kparams.id = id;
		kparams.scope = scope;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "dispatch", kparams);
	},
	
	/**
	 * Retrieve an event notification template object by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "get", kparams);
	},
	
	/**
	 * list event notification template objects.
	 * @param	filter	KalturaEventNotificationTemplateFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "list", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listByPartner: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "listByPartner", kparams);
	},
	
	/**
	 * Action lists the template partner event notification templates..
	 * @param	filter	KalturaEventNotificationTemplateFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listTemplates: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "listTemplates", kparams);
	},
	
	/**
	 * Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists.
	 * @param	notificationTemplateSystemName	string		Existing push notification template system name (optional)
	 * @param	pushNotificationParams	KalturaPushNotificationParams		 (optional)
	 **/
	register: function(notificationTemplateSystemName, pushNotificationParams){
		var kparams = new Object();
		kparams.notificationTemplateSystemName = notificationTemplateSystemName;
		kparams.pushNotificationParams = pushNotificationParams;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "register", kparams);
	},
	
	/**
	 * Clear queue messages.
	 * @param	notificationTemplateSystemName	string		Existing push notification template system name (optional)
	 * @param	pushNotificationParams	KalturaPushNotificationParams		 (optional)
	 * @param	command	string		Command to be sent to push server (optional, enum: KalturaPushNotificationCommandType)
	 **/
	sendCommand: function(notificationTemplateSystemName, pushNotificationParams, command){
		var kparams = new Object();
		kparams.notificationTemplateSystemName = notificationTemplateSystemName;
		kparams.pushNotificationParams = pushNotificationParams;
		kparams.command = command;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "sendCommand", kparams);
	},
	
	/**
	 * Update an existing event notification template object.
	 * @param	id	int		 (optional)
	 * @param	eventNotificationTemplate	KalturaEventNotificationTemplate		 (optional)
	 **/
	update: function(id, eventNotificationTemplate){
		var kparams = new Object();
		kparams.id = id;
		kparams.eventNotificationTemplate = eventNotificationTemplate;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "update", kparams);
	},
	
	/**
	 * Update event notification template status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaEventNotificationTemplateStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("eventnotification_eventnotificationtemplate", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: externalMedia.
 **/
var KalturaExternalMediaService = {
	/**
	 * Add external media entry.
	 * @param	entry	KalturaExternalMediaEntry		 (optional)
	 **/
	add: function(entry){
		var kparams = new Object();
		kparams.entry = entry;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "add", kparams);
	},
	
	/**
	 * Count media entries by filter..
	 * @param	filter	KalturaExternalMediaEntryFilter		External media entry filter (optional, default: null)
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "count", kparams);
	},
	
	/**
	 * Delete a external media entry..
	 * @param	id	string		External media entry id to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "delete", kparams);
	},
	
	/**
	 * Get external media entry by ID..
	 * @param	id	string		External media entry id (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "get", kparams);
	},
	
	/**
	 * List media entries by filter with paging support..
	 * @param	filter	KalturaExternalMediaEntryFilter		External media entry filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "list", kparams);
	},
	
	/**
	 * Update external media entry. Only the properties that were set will be updated..
	 * @param	id	string		External media entry id to update (optional)
	 * @param	entry	KalturaExternalMediaEntry		External media entry object to update (optional)
	 **/
	update: function(id, entry){
		var kparams = new Object();
		kparams.id = id;
		kparams.entry = entry;
		return new KalturaRequestBuilder("externalmedia_externalmedia", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: group.
 **/
var KalturaGroupService = {
	/**
	 * Adds a new group (user of type group)..
	 * @param	group	KalturaGroup		a new group (optional)
	 **/
	add: function(group){
		var kparams = new Object();
		kparams.group = group;
		return new KalturaRequestBuilder("group_group", "add", kparams);
	},
	
	/**
	 * clone the group (groupId), and set group id with the neeGroupName..
	 * @param	originalGroupId	string		The unique identifier in the partner's system (optional)
	 * @param	newGroupId	string		The unique identifier in the partner's system (optional)
	 * @param	newGroupName	string		The name of the new cloned group (optional, default: null)
	 **/
	cloneAction: function(originalGroupId, newGroupId, newGroupName){
		if(!newGroupName)
			newGroupName = null;
		var kparams = new Object();
		kparams.originalGroupId = originalGroupId;
		kparams.newGroupId = newGroupId;
		kparams.newGroupName = newGroupName;
		return new KalturaRequestBuilder("group_group", "clone", kparams);
	},
	
	/**
	 * Delete group by ID.
	 * @param	groupId	string		The unique identifier in the partner's system (optional)
	 **/
	deleteAction: function(groupId){
		var kparams = new Object();
		kparams.groupId = groupId;
		return new KalturaRequestBuilder("group_group", "delete", kparams);
	},
	
	/**
	 * Retrieves a group object for a specified group ID..
	 * @param	groupId	string		The unique identifier in the partner's system (optional)
	 **/
	get: function(groupId){
		var kparams = new Object();
		kparams.groupId = groupId;
		return new KalturaRequestBuilder("group_group", "get", kparams);
	},
	
	/**
	 * Lists group  objects that are associated with an account.
 *		 Blocked users are listed unless you use a filter to exclude them.
 *		 Deleted users are not listed unless you use a filter to include them..
	 * @param	filter	KalturaGroupFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("group_group", "list", kparams);
	},
	
	/**
	 * Update group by ID.
	 * @param	groupId	string		The unique identifier in the partner's system (optional)
	 * @param	group	KalturaGroup		Id The unique identifier in the partner's system (optional)
	 **/
	update: function(groupId, group){
		var kparams = new Object();
		kparams.groupId = groupId;
		kparams.group = group;
		return new KalturaRequestBuilder("group_group", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: integration.
 **/
var KalturaIntegrationService = {
	/**
	 * Dispatch integration task.
	 * @param	data	KalturaIntegrationJobData		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaBatchJobObjectType)
	 * @param	objectId	string		 (optional)
	 **/
	dispatch: function(data, objectType, objectId){
		var kparams = new Object();
		kparams.data = data;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		return new KalturaRequestBuilder("integration_integration", "dispatch", kparams);
	},
	
	/**
	 * .
	 * @param	id	int		integration job id (optional)
	 **/
	notify: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("integration_integration", "notify", kparams);
	}
}

/**
 *Class definition for the Kaltura service: interactivity.
 **/
var KalturaInteractivityService = {
	/**
	 * Add a interactivity object.
	 * @param	entryId	string		 (optional)
	 * @param	kalturaInteractivity	KalturaInteractivity		 (optional)
	 **/
	add: function(entryId, kalturaInteractivity){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.kalturaInteractivity = kalturaInteractivity;
		return new KalturaRequestBuilder("interactivity_interactivity", "add", kparams);
	},
	
	/**
	 * Delete a interactivity object by entry id.
	 * @param	entryId	string		 (optional)
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("interactivity_interactivity", "delete", kparams);
	},
	
	/**
	 * Retrieve a interactivity object by entry id.
	 * @param	entryId	string		 (optional)
	 * @param	dataFilter	KalturaInteractivityDataFilter		 (optional, default: null)
	 **/
	get: function(entryId, dataFilter){
		if(!dataFilter)
			dataFilter = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		if (dataFilter != null)
			kparams.dataFilter = dataFilter;
		return new KalturaRequestBuilder("interactivity_interactivity", "get", kparams);
	},
	
	/**
	 * Update an existing interactivity object.
	 * @param	entryId	string		 (optional)
	 * @param	version	int		 (optional)
	 * @param	kalturaInteractivity	KalturaInteractivity		 (optional)
	 **/
	update: function(entryId, version, kalturaInteractivity){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		kparams.kalturaInteractivity = kalturaInteractivity;
		return new KalturaRequestBuilder("interactivity_interactivity", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: volatileInteractivity.
 **/
var KalturaVolatileInteractivityService = {
	/**
	 * add a volatile interactivity object.
	 * @param	entryId	string		 (optional)
	 * @param	kalturaVolatileInteractivity	KalturaVolatileInteractivity		 (optional)
	 **/
	add: function(entryId, kalturaVolatileInteractivity){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.kalturaVolatileInteractivity = kalturaVolatileInteractivity;
		return new KalturaRequestBuilder("interactivity_volatileinteractivity", "add", kparams);
	},
	
	/**
	 * Delete a volatile interactivity object by entry id.
	 * @param	entryId	string		 (optional)
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("interactivity_volatileinteractivity", "delete", kparams);
	},
	
	/**
	 * Retrieve a volatile interactivity object by entry id.
	 * @param	entryId	string		 (optional)
	 **/
	get: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("interactivity_volatileinteractivity", "get", kparams);
	},
	
	/**
	 * Update a volatile interactivity object.
	 * @param	entryId	string		 (optional)
	 * @param	version	int		 (optional)
	 * @param	kalturaVolatileInteractivity	KalturaVolatileInteractivity		 (optional)
	 **/
	update: function(entryId, version, kalturaVolatileInteractivity){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		kparams.kalturaVolatileInteractivity = kalturaVolatileInteractivity;
		return new KalturaRequestBuilder("interactivity_volatileinteractivity", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: like.
 **/
var KalturaLikeService = {
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	userId	string		 (optional, default: null)
	 **/
	checkLikeExists: function(entryId, userId){
		if(!userId)
			userId = null;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("like_like", "checkLikeExists", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 **/
	like: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("like_like", "like", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaLikeFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("like_like", "list", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 **/
	unlike: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("like_like", "unlike", kparams);
	}
}

/**
 *Class definition for the Kaltura service: metadata.
 **/
var KalturaMetadataService = {
	/**
	 * Allows you to add a metadata object and metadata content associated with Kaltura object.
	 * @param	metadataProfileId	int		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	xmlData	string		XML metadata (optional)
	 **/
	add: function(metadataProfileId, objectType, objectId, xmlData){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.xmlData = xmlData;
		return new KalturaRequestBuilder("metadata_metadata", "add", kparams);
	},
	
	/**
	 * Allows you to add a metadata XML data from remote URL.
 *		 Enables different permissions than addFromUrl action..
	 * @param	metadataProfileId	int		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	url	string		XML metadata remote URL (optional)
	 **/
	addFromBulk: function(metadataProfileId, objectType, objectId, url){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.url = url;
		return new KalturaRequestBuilder("metadata_metadata", "addFromBulk", kparams);
	},
	
	/**
	 * Allows you to add a metadata object and metadata file associated with Kaltura object.
	 * @param	metadataProfileId	int		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	xmlFile	HTMLElement		XML metadata (optional)
	 **/
	addFromFile: function(metadataProfileId, objectType, objectId, xmlFile){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kfiles.xmlFile = xmlFile;
		return new KalturaRequestBuilder("metadata_metadata", "addFromFile", kparams, kfiles);
	},
	
	/**
	 * Allows you to add a metadata XML data from remote URL.
	 * @param	metadataProfileId	int		 (optional)
	 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	url	string		XML metadata remote URL (optional)
	 **/
	addFromUrl: function(metadataProfileId, objectType, objectId, url){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.url = url;
		return new KalturaRequestBuilder("metadata_metadata", "addFromUrl", kparams);
	},
	
	/**
	 * Delete an existing metadata.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("metadata_metadata", "delete", kparams);
	},
	
	/**
	 * Retrieve a metadata object by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("metadata_metadata", "get", kparams);
	},
	
	/**
	 * Index metadata by id, will also index the related object.
	 * @param	id	string		 (optional)
	 * @param	shouldUpdate	bool		 (optional)
	 **/
	index: function(id, shouldUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("metadata_metadata", "index", kparams);
	},
	
	/**
	 * Mark existing metadata as invalid
 *		 Used by batch metadata transform.
	 * @param	id	int		 (optional)
	 * @param	version	int		Enable update only if the metadata object version did not change by other process (optional, default: null)
	 **/
	invalidate: function(id, version){
		if(!version)
			version = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.version = version;
		return new KalturaRequestBuilder("metadata_metadata", "invalidate", kparams);
	},
	
	/**
	 * List metadata objects by filter and pager.
	 * @param	filter	KalturaMetadataFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("metadata_metadata", "list", kparams);
	},
	
	/**
	 * Update an existing metadata object with new XML content.
	 * @param	id	int		 (optional)
	 * @param	xmlData	string		XML metadata (optional, default: null)
	 * @param	version	int		Enable update only if the metadata object version did not change by other process (optional, default: null)
	 **/
	update: function(id, xmlData, version){
		if(!xmlData)
			xmlData = null;
		if(!version)
			version = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.xmlData = xmlData;
		kparams.version = version;
		return new KalturaRequestBuilder("metadata_metadata", "update", kparams);
	},
	
	/**
	 * Update an existing metadata object with new XML file.
	 * @param	id	int		 (optional)
	 * @param	xmlFile	HTMLElement		XML metadata (optional, default: null)
	 **/
	updateFromFile: function(id, xmlFile){
		if(!xmlFile)
			xmlFile = null;
		var kparams = new Object();
		var kfiles = new Object();
		kparams.id = id;
		kfiles.xmlFile = xmlFile;
		return new KalturaRequestBuilder("metadata_metadata", "updateFromFile", kparams, kfiles);
	},
	
	/**
	 * Action transforms current metadata object XML using a provided XSL..
	 * @param	id	int		 (optional)
	 * @param	xslFile	HTMLElement		 (optional)
	 **/
	updateFromXSL: function(id, xslFile){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.id = id;
		kfiles.xslFile = xslFile;
		return new KalturaRequestBuilder("metadata_metadata", "updateFromXSL", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: metadataProfile.
 **/
var KalturaMetadataProfileService = {
	/**
	 * Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type.
	 * @param	metadataProfile	KalturaMetadataProfile		 (optional)
	 * @param	xsdData	string		XSD metadata definition (optional)
	 * @param	viewsData	string		UI views definition (optional, default: null)
	 **/
	add: function(metadataProfile, xsdData, viewsData){
		if(!viewsData)
			viewsData = null;
		var kparams = new Object();
		kparams.metadataProfile = metadataProfile;
		kparams.xsdData = xsdData;
		kparams.viewsData = viewsData;
		return new KalturaRequestBuilder("metadata_metadataprofile", "add", kparams);
	},
	
	/**
	 * Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type.
	 * @param	metadataProfile	KalturaMetadataProfile		 (optional)
	 * @param	xsdFile	HTMLElement		XSD metadata definition (optional)
	 * @param	viewsFile	HTMLElement		UI views definition (optional, default: null)
	 **/
	addFromFile: function(metadataProfile, xsdFile, viewsFile){
		if(!viewsFile)
			viewsFile = null;
		var kparams = new Object();
		var kfiles = new Object();
		kparams.metadataProfile = metadataProfile;
		kfiles.xsdFile = xsdFile;
		kfiles.viewsFile = viewsFile;
		return new KalturaRequestBuilder("metadata_metadataprofile", "addFromFile", kparams, kfiles);
	},
	
	/**
	 * Delete an existing metadata profile.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("metadata_metadataprofile", "delete", kparams);
	},
	
	/**
	 * Retrieve a metadata profile object by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("metadata_metadataprofile", "get", kparams);
	},
	
	/**
	 * List metadata profile objects by filter and pager.
	 * @param	filter	KalturaMetadataProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("metadata_metadataprofile", "list", kparams);
	},
	
	/**
	 * List metadata profile fields by metadata profile id.
	 * @param	metadataProfileId	int		 (optional)
	 **/
	listFields: function(metadataProfileId){
		var kparams = new Object();
		kparams.metadataProfileId = metadataProfileId;
		return new KalturaRequestBuilder("metadata_metadataprofile", "listFields", kparams);
	},
	
	/**
	 * Update an existing metadata object definition file.
	 * @param	id	int		 (optional)
	 * @param	toVersion	int		 (optional)
	 **/
	revert: function(id, toVersion){
		var kparams = new Object();
		kparams.id = id;
		kparams.toVersion = toVersion;
		return new KalturaRequestBuilder("metadata_metadataprofile", "revert", kparams);
	},
	
	/**
	 * Update an existing metadata object.
	 * @param	id	int		 (optional)
	 * @param	metadataProfile	KalturaMetadataProfile		 (optional)
	 * @param	xsdData	string		XSD metadata definition (optional, default: null)
	 * @param	viewsData	string		UI views definition (optional, default: null)
	 **/
	update: function(id, metadataProfile, xsdData, viewsData){
		if(!xsdData)
			xsdData = null;
		if(!viewsData)
			viewsData = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.metadataProfile = metadataProfile;
		kparams.xsdData = xsdData;
		kparams.viewsData = viewsData;
		return new KalturaRequestBuilder("metadata_metadataprofile", "update", kparams);
	},
	
	/**
	 * Update an existing metadata object definition file.
	 * @param	id	int		 (optional)
	 * @param	xsdFile	HTMLElement		XSD metadata definition (optional)
	 **/
	updateDefinitionFromFile: function(id, xsdFile){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.id = id;
		kfiles.xsdFile = xsdFile;
		return new KalturaRequestBuilder("metadata_metadataprofile", "updateDefinitionFromFile", kparams, kfiles);
	},
	
	/**
	 * Update an existing metadata object XSLT file.
	 * @param	id	int		 (optional)
	 * @param	xsltFile	HTMLElement		XSLT file, will be executed on every metadata add/update (optional)
	 **/
	updateTransformationFromFile: function(id, xsltFile){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.id = id;
		kfiles.xsltFile = xsltFile;
		return new KalturaRequestBuilder("metadata_metadataprofile", "updateTransformationFromFile", kparams, kfiles);
	},
	
	/**
	 * Update an existing metadata object views file.
	 * @param	id	int		 (optional)
	 * @param	viewsFile	HTMLElement		UI views file (optional)
	 **/
	updateViewsFromFile: function(id, viewsFile){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.id = id;
		kfiles.viewsFile = viewsFile;
		return new KalturaRequestBuilder("metadata_metadataprofile", "updateViewsFromFile", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: playReadyDrm.
 **/
var KalturaPlayReadyDrmService = {
	/**
	 * Generate key id and content key for PlayReady encryption.
	 **/
	generateKey: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("playready_playreadydrm", "generateKey", kparams);
	},
	
	/**
	 * Get content keys for input key ids.
	 * @param	keyIds	string		- comma separated key id's (optional)
	 **/
	getContentKeys: function(keyIds){
		var kparams = new Object();
		kparams.keyIds = keyIds;
		return new KalturaRequestBuilder("playready_playreadydrm", "getContentKeys", kparams);
	},
	
	/**
	 * Get content key and key id for the given entry.
	 * @param	entryId	string		 (optional)
	 * @param	createIfMissing	bool		 (optional, default: false)
	 **/
	getEntryContentKey: function(entryId, createIfMissing){
		if(!createIfMissing)
			createIfMissing = false;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.createIfMissing = createIfMissing;
		return new KalturaRequestBuilder("playready_playreadydrm", "getEntryContentKey", kparams);
	},
	
	/**
	 * Get Play Ready policy and dates for license creation.
	 * @param	keyId	string		 (optional)
	 * @param	deviceId	string		 (optional)
	 * @param	deviceType	int		 (optional)
	 * @param	entryId	string		 (optional, default: null)
	 * @param	referrer	string		64base encoded (optional, default: null)
	 **/
	getLicenseDetails: function(keyId, deviceId, deviceType, entryId, referrer){
		if(!entryId)
			entryId = null;
		if(!referrer)
			referrer = null;
		var kparams = new Object();
		kparams.keyId = keyId;
		kparams.deviceId = deviceId;
		kparams.deviceType = deviceType;
		kparams.entryId = entryId;
		kparams.referrer = referrer;
		return new KalturaRequestBuilder("playready_playreadydrm", "getLicenseDetails", kparams);
	}
}

/**
 *Class definition for the Kaltura service: poll.
 **/
var KalturaPollService = {
	/**
	 * Add Action.
	 * @param	pollType	string		 (optional, default: SINGLE_ANONYMOUS)
	 **/
	add: function(pollType){
		if(!pollType)
			pollType = "SINGLE_ANONYMOUS";
		var kparams = new Object();
		kparams.pollType = pollType;
		return new KalturaRequestBuilder("poll_poll", "add", kparams);
	},
	
	/**
	 * Vote Action.
	 * @param	pollId	string		 (optional)
	 * @param	userId	string		 (optional)
	 **/
	getVote: function(pollId, userId){
		var kparams = new Object();
		kparams.pollId = pollId;
		kparams.userId = userId;
		return new KalturaRequestBuilder("poll_poll", "getVote", kparams);
	},
	
	/**
	 * Get Votes Action.
	 * @param	pollId	string		 (optional)
	 * @param	answerIds	string		 (optional)
	 **/
	getVotes: function(pollId, answerIds){
		var kparams = new Object();
		kparams.pollId = pollId;
		kparams.answerIds = answerIds;
		return new KalturaRequestBuilder("poll_poll", "getVotes", kparams);
	},
	
	/**
	 * Get resetVotes Action.
	 * @param	pollId	string		 (optional)
	 **/
	resetVotes: function(pollId){
		var kparams = new Object();
		kparams.pollId = pollId;
		return new KalturaRequestBuilder("poll_poll", "resetVotes", kparams);
	},
	
	/**
	 * Vote Action.
	 * @param	pollId	string		 (optional)
	 * @param	userId	string		 (optional)
	 * @param	answerIds	string		 (optional)
	 **/
	vote: function(pollId, userId, answerIds){
		var kparams = new Object();
		kparams.pollId = pollId;
		kparams.userId = userId;
		kparams.answerIds = answerIds;
		return new KalturaRequestBuilder("poll_poll", "vote", kparams);
	}
}

/**
 *Class definition for the Kaltura service: quiz.
 **/
var KalturaQuizService = {
	/**
	 * Allows to add a quiz to an entry.
	 * @param	entryId	string		 (optional)
	 * @param	quiz	KalturaQuiz		 (optional)
	 **/
	add: function(entryId, quiz){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.quiz = quiz;
		return new KalturaRequestBuilder("quiz_quiz", "add", kparams);
	},
	
	/**
	 * Allows to get a quiz.
	 * @param	entryId	string		 (optional)
	 **/
	get: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("quiz_quiz", "get", kparams);
	},
	
	/**
	 * sends a with an api request for pdf from quiz object.
	 * @param	entryId	string		 (optional)
	 * @param	quizOutputType	int		 (optional, enum: KalturaQuizOutputType)
	 **/
	getUrl: function(entryId, quizOutputType){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.quizOutputType = quizOutputType;
		return new KalturaRequestBuilder("quiz_quiz", "getUrl", kparams);
	},
	
	/**
	 * List quiz objects by filter and pager.
	 * @param	filter	KalturaQuizFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("quiz_quiz", "list", kparams);
	},
	
	/**
	 * Allows to update a quiz.
	 * @param	entryId	string		 (optional)
	 * @param	quiz	KalturaQuiz		 (optional)
	 **/
	update: function(entryId, quiz){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.quiz = quiz;
		return new KalturaRequestBuilder("quiz_quiz", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: rating.
 **/
var KalturaRatingService = {
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 **/
	checkRating: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("rating_rating", "checkRating", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaRatingCountFilter		 (optional)
	 **/
	getRatingCounts: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("rating_rating", "getRatingCounts", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	rank	int		 (optional)
	 **/
	rate: function(entryId, rank){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.rank = rank;
		return new KalturaRequestBuilder("rating_rating", "rate", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 **/
	removeRating: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("rating_rating", "removeRating", kparams);
	}
}

/**
 *Class definition for the Kaltura service: vendorCatalogItem.
 **/
var KalturaVendorCatalogItemService = {
	/**
	 * Allows you to add an service catalog item.
	 * @param	vendorCatalogItem	KalturaVendorCatalogItem		 (optional)
	 **/
	add: function(vendorCatalogItem){
		var kparams = new Object();
		kparams.vendorCatalogItem = vendorCatalogItem;
		return new KalturaRequestBuilder("reach_vendorcatalogitem", "add", kparams);
	},
	
	/**
	 * .
	 * @param	fileData	HTMLElement		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null)
	 * @param	bulkUploadVendorCatalogItemData	KalturaBulkUploadVendorCatalogItemData		 (optional, default: null)
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData, bulkUploadVendorCatalogItemData){
		if(!bulkUploadData)
			bulkUploadData = null;
		if(!bulkUploadVendorCatalogItemData)
			bulkUploadVendorCatalogItemData = null;
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadVendorCatalogItemData != null)
			kparams.bulkUploadVendorCatalogItemData = bulkUploadVendorCatalogItemData;
		return new KalturaRequestBuilder("reach_vendorcatalogitem", "addFromBulkUpload", kparams, kfiles);
	},
	
	/**
	 * Delete vedor catalog item object.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_vendorcatalogitem", "delete", kparams);
	},
	
	/**
	 * Retrieve specific catalog item by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_vendorcatalogitem", "get", kparams);
	},
	
	/**
	 * .
	 * @param	vendorPartnerId	int		 (optional, default: null)
	 **/
	getServeUrl: function(vendorPartnerId){
		if(!vendorPartnerId)
			vendorPartnerId = null;
		var kparams = new Object();
		kparams.vendorPartnerId = vendorPartnerId;
		return new KalturaRequestBuilder("reach_vendorcatalogitem", "getServeUrl", kparams);
	},
	
	/**
	 * List KalturaVendorCatalogItem objects.
	 * @param	filter	KalturaVendorCatalogItemFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("reach_vendorcatalogitem", "list", kparams);
	},
	
	/**
	 * Update an existing vedor catalog item object.
	 * @param	id	int		 (optional)
	 * @param	vendorCatalogItem	KalturaVendorCatalogItem		 (optional)
	 **/
	update: function(id, vendorCatalogItem){
		var kparams = new Object();
		kparams.id = id;
		kparams.vendorCatalogItem = vendorCatalogItem;
		return new KalturaRequestBuilder("reach_vendorcatalogitem", "update", kparams);
	},
	
	/**
	 * Update vendor catalog item status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaVendorCatalogItemStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("reach_vendorcatalogitem", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: reachProfile.
 **/
var KalturaReachProfileService = {
	/**
	 * Allows you to add a partner specific reach profile.
	 * @param	reachProfile	KalturaReachProfile		 (optional)
	 **/
	add: function(reachProfile){
		var kparams = new Object();
		kparams.reachProfile = reachProfile;
		return new KalturaRequestBuilder("reach_reachprofile", "add", kparams);
	},
	
	/**
	 * Delete vednor profile by id.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_reachprofile", "delete", kparams);
	},
	
	/**
	 * Retrieve specific reach profile by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_reachprofile", "get", kparams);
	},
	
	/**
	 * List KalturaReachProfile objects.
	 * @param	filter	KalturaReachProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("reach_reachprofile", "list", kparams);
	},
	
	/**
	 * sync vednor profile credit.
	 * @param	reachProfileId	int		 (optional)
	 **/
	syncCredit: function(reachProfileId){
		var kparams = new Object();
		kparams.reachProfileId = reachProfileId;
		return new KalturaRequestBuilder("reach_reachprofile", "syncCredit", kparams);
	},
	
	/**
	 * Update an existing reach profile object.
	 * @param	id	int		 (optional)
	 * @param	reachProfile	KalturaReachProfile		 (optional)
	 **/
	update: function(id, reachProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.reachProfile = reachProfile;
		return new KalturaRequestBuilder("reach_reachprofile", "update", kparams);
	},
	
	/**
	 * Update reach profile status by id.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaReachProfileStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("reach_reachprofile", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: entryVendorTask.
 **/
var KalturaEntryVendorTaskService = {
	/**
	 * Cancel entry task. will only occur for task in PENDING or PENDING_MODERATION status.
	 * @param	id	int		vendor task id (optional)
	 * @param	abortReason	string		 (optional, default: null)
	 **/
	abort: function(id, abortReason){
		if(!abortReason)
			abortReason = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.abortReason = abortReason;
		return new KalturaRequestBuilder("reach_entryvendortask", "abort", kparams);
	},
	
	/**
	 * Allows you to add a entry vendor task.
	 * @param	entryVendorTask	KalturaEntryVendorTask		 (optional)
	 **/
	add: function(entryVendorTask){
		var kparams = new Object();
		kparams.entryVendorTask = entryVendorTask;
		return new KalturaRequestBuilder("reach_entryvendortask", "add", kparams);
	},
	
	/**
	 * Approve entry vendor task for execution..
	 * @param	id	int		vendor task id to approve (optional)
	 **/
	approve: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_entryvendortask", "approve", kparams);
	},
	
	/**
	 * add batch job that sends an email with a link to download an updated CSV that contains list of users.
	 * @param	filter	KalturaEntryVendorTaskFilter		A filter used to exclude specific tasks (optional)
	 **/
	exportToCsv: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("reach_entryvendortask", "exportToCsv", kparams);
	},
	
	/**
	 * Extend access key in case the existing one has expired..
	 * @param	id	int		vendor task id (optional)
	 **/
	extendAccessKey: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_entryvendortask", "extendAccessKey", kparams);
	},
	
	/**
	 * Retrieve specific entry vendor task by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_entryvendortask", "get", kparams);
	},
	
	/**
	 * get KalturaEntryVendorTask objects for specific vendor partner.
	 * @param	filter	KalturaEntryVendorTaskFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	getJobs: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("reach_entryvendortask", "getJobs", kparams);
	},
	
	/**
	 * .
	 * @param	filterType	string		 (optional, default: null)
	 * @param	filterInput	int		 (optional, default: null)
	 * @param	status	int		 (optional, default: null)
	 * @param	dueDate	string		 (optional, default: null)
	 **/
	getServeUrl: function(filterType, filterInput, status, dueDate){
		if(!filterType)
			filterType = null;
		if(!filterInput)
			filterInput = null;
		if(!status)
			status = null;
		if(!dueDate)
			dueDate = null;
		var kparams = new Object();
		kparams.filterType = filterType;
		kparams.filterInput = filterInput;
		kparams.status = status;
		kparams.dueDate = dueDate;
		return new KalturaRequestBuilder("reach_entryvendortask", "getServeUrl", kparams);
	},
	
	/**
	 * List KalturaEntryVendorTask objects.
	 * @param	filter	KalturaEntryVendorTaskFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("reach_entryvendortask", "list", kparams);
	},
	
	/**
	 * Reject entry vendor task for execution..
	 * @param	id	int		vendor task id to reject (optional)
	 * @param	rejectReason	string		 (optional, default: null)
	 **/
	reject: function(id, rejectReason){
		if(!rejectReason)
			rejectReason = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.rejectReason = rejectReason;
		return new KalturaRequestBuilder("reach_entryvendortask", "reject", kparams);
	},
	
	/**
	 * Will serve a requested csv.
	 * @param	id	string		- the requested file id (optional)
	 **/
	serveCsv: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_entryvendortask", "serveCsv", kparams);
	},
	
	/**
	 * Update entry vendor task. Only the properties that were set will be updated..
	 * @param	id	int		vendor task id to update (optional)
	 * @param	entryVendorTask	KalturaEntryVendorTask		evntry vendor task to update (optional)
	 **/
	update: function(id, entryVendorTask){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryVendorTask = entryVendorTask;
		return new KalturaRequestBuilder("reach_entryvendortask", "update", kparams);
	},
	
	/**
	 * Update entry vendor task. Only the properties that were set will be updated..
	 * @param	id	int		vendor task id to update (optional)
	 * @param	entryVendorTask	KalturaEntryVendorTask		evntry vendor task to update (optional)
	 **/
	updateJob: function(id, entryVendorTask){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryVendorTask = entryVendorTask;
		return new KalturaRequestBuilder("reach_entryvendortask", "updateJob", kparams);
	}
}

/**
 *Class definition for the Kaltura service: PartnerCatalogItem.
 **/
var KalturaPartnerCatalogItemService = {
	/**
	 * Assign existing catalogItem to specific account.
	 * @param	id	int		source catalog item to assign to partner (optional)
	 **/
	add: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_partnercatalogitem", "add", kparams);
	},
	
	/**
	 * Remove existing catalogItem from specific account.
	 * @param	id	int		source catalog item to remove (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_partnercatalogitem", "delete", kparams);
	}
}

/**
 *Class definition for the Kaltura service: scheduleEvent.
 **/
var KalturaScheduleEventService = {
	/**
	 * Allows you to add a new KalturaScheduleEvent object.
	 * @param	scheduleEvent	KalturaScheduleEvent		 (optional)
	 **/
	add: function(scheduleEvent){
		var kparams = new Object();
		kparams.scheduleEvent = scheduleEvent;
		return new KalturaRequestBuilder("schedule_scheduleevent", "add", kparams);
	},
	
	/**
	 * Add new bulk upload batch job.
	 * @param	fileData	HTMLElement		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadScheduleEventJobData		 (optional, default: null)
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData){
		if(!bulkUploadData)
			bulkUploadData = null;
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		return new KalturaRequestBuilder("schedule_scheduleevent", "addFromBulkUpload", kparams, kfiles);
	},
	
	/**
	 * Mark the KalturaScheduleEvent object as cancelled.
	 * @param	scheduleEventId	int		 (optional)
	 **/
	cancel: function(scheduleEventId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		return new KalturaRequestBuilder("schedule_scheduleevent", "cancel", kparams);
	},
	
	/**
	 * Mark the KalturaScheduleEvent object as deleted.
	 * @param	scheduleEventId	int		 (optional)
	 **/
	deleteAction: function(scheduleEventId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		return new KalturaRequestBuilder("schedule_scheduleevent", "delete", kparams);
	},
	
	/**
	 * Retrieve a KalturaScheduleEvent object by ID.
	 * @param	scheduleEventId	int		 (optional)
	 **/
	get: function(scheduleEventId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		return new KalturaRequestBuilder("schedule_scheduleevent", "get", kparams);
	},
	
	/**
	 * List conflicting events for resourcesIds by event's dates.
	 * @param	resourceIds	string		comma separated (optional)
	 * @param	scheduleEvent	KalturaScheduleEvent		 (optional)
	 * @param	scheduleEventIdToIgnore	string		 (optional, default: null)
	 * @param	scheduleEventConflictType	int		 (optional, enum: KalturaScheduleEventConflictType, default: 1)
	 **/
	getConflicts: function(resourceIds, scheduleEvent, scheduleEventIdToIgnore, scheduleEventConflictType){
		if(!scheduleEventIdToIgnore)
			scheduleEventIdToIgnore = null;
		if(!scheduleEventConflictType)
			scheduleEventConflictType = 1;
		var kparams = new Object();
		kparams.resourceIds = resourceIds;
		kparams.scheduleEvent = scheduleEvent;
		kparams.scheduleEventIdToIgnore = scheduleEventIdToIgnore;
		kparams.scheduleEventConflictType = scheduleEventConflictType;
		return new KalturaRequestBuilder("schedule_scheduleevent", "getConflicts", kparams);
	},
	
	/**
	 * List KalturaScheduleEvent objects.
	 * @param	filter	KalturaScheduleEventFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("schedule_scheduleevent", "list", kparams);
	},
	
	/**
	 * Update an existing KalturaScheduleEvent object.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleEvent	KalturaScheduleEvent		Id (optional)
	 **/
	update: function(scheduleEventId, scheduleEvent){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleEvent = scheduleEvent;
		return new KalturaRequestBuilder("schedule_scheduleevent", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: scheduleResource.
 **/
var KalturaScheduleResourceService = {
	/**
	 * Allows you to add a new KalturaScheduleResource object.
	 * @param	scheduleResource	KalturaScheduleResource		 (optional)
	 **/
	add: function(scheduleResource){
		var kparams = new Object();
		kparams.scheduleResource = scheduleResource;
		return new KalturaRequestBuilder("schedule_scheduleresource", "add", kparams);
	},
	
	/**
	 * Add new bulk upload batch job.
	 * @param	fileData	HTMLElement		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadCsvJobData		 (optional, default: null)
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData){
		if(!bulkUploadData)
			bulkUploadData = null;
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		return new KalturaRequestBuilder("schedule_scheduleresource", "addFromBulkUpload", kparams, kfiles);
	},
	
	/**
	 * Mark the KalturaScheduleResource object as deleted.
	 * @param	scheduleResourceId	int		 (optional)
	 **/
	deleteAction: function(scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleresource", "delete", kparams);
	},
	
	/**
	 * Retrieve a KalturaScheduleResource object by ID.
	 * @param	scheduleResourceId	int		 (optional)
	 **/
	get: function(scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleresource", "get", kparams);
	},
	
	/**
	 * List KalturaScheduleResource objects.
	 * @param	filter	KalturaScheduleResourceFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("schedule_scheduleresource", "list", kparams);
	},
	
	/**
	 * Update an existing KalturaScheduleResource object.
	 * @param	scheduleResourceId	int		 (optional)
	 * @param	scheduleResource	KalturaScheduleResource		Id (optional)
	 **/
	update: function(scheduleResourceId, scheduleResource){
		var kparams = new Object();
		kparams.scheduleResourceId = scheduleResourceId;
		kparams.scheduleResource = scheduleResource;
		return new KalturaRequestBuilder("schedule_scheduleresource", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: scheduleEventResource.
 **/
var KalturaScheduleEventResourceService = {
	/**
	 * Allows you to add a new KalturaScheduleEventResource object.
	 * @param	scheduleEventResource	KalturaScheduleEventResource		 (optional)
	 **/
	add: function(scheduleEventResource){
		var kparams = new Object();
		kparams.scheduleEventResource = scheduleEventResource;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "add", kparams);
	},
	
	/**
	 * Mark the KalturaScheduleEventResource object as deleted.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 **/
	deleteAction: function(scheduleEventId, scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "delete", kparams);
	},
	
	/**
	 * Retrieve a KalturaScheduleEventResource object by ID.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 **/
	get: function(scheduleEventId, scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "get", kparams);
	},
	
	/**
	 * List KalturaScheduleEventResource objects.
	 * @param	filter	KalturaScheduleEventResourceFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @param	filterBlackoutConflicts	bool		 (optional, default: true)
	 **/
	listAction: function(filter, pager, filterBlackoutConflicts){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		if(!filterBlackoutConflicts)
			filterBlackoutConflicts = true;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		kparams.filterBlackoutConflicts = filterBlackoutConflicts;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "list", kparams);
	},
	
	/**
	 * Update an existing KalturaScheduleEventResource object.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 * @param	scheduleEventResource	KalturaScheduleEventResource		 (optional)
	 **/
	update: function(scheduleEventId, scheduleResourceId, scheduleEventResource){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		kparams.scheduleEventResource = scheduleEventResource;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: scheduledTaskProfile.
 **/
var KalturaScheduledTaskProfileService = {
	/**
	 * Add a new scheduled task profile.
	 * @param	scheduledTaskProfile	KalturaScheduledTaskProfile		 (optional)
	 **/
	add: function(scheduledTaskProfile){
		var kparams = new Object();
		kparams.scheduledTaskProfile = scheduledTaskProfile;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "add", kparams);
	},
	
	/**
	 * Delete a scheduled task profile.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "delete", kparams);
	},
	
	/**
	 * Retrieve a scheduled task profile by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "get", kparams);
	},
	
	/**
	 * .
	 * @param	requestId	int		 (optional)
	 **/
	getDryRunResults: function(requestId){
		var kparams = new Object();
		kparams.requestId = requestId;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "getDryRunResults", kparams);
	},
	
	/**
	 * List scheduled task profiles.
	 * @param	filter	KalturaScheduledTaskProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "list", kparams);
	},
	
	/**
	 * .
	 * @param	scheduledTaskProfileId	int		 (optional)
	 * @param	maxResults	int		 (optional, default: 500)
	 **/
	requestDryRun: function(scheduledTaskProfileId, maxResults){
		if(!maxResults)
			maxResults = 500;
		var kparams = new Object();
		kparams.scheduledTaskProfileId = scheduledTaskProfileId;
		kparams.maxResults = maxResults;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "requestDryRun", kparams);
	},
	
	/**
	 * Update an existing scheduled task profile.
	 * @param	id	int		 (optional)
	 * @param	scheduledTaskProfile	KalturaScheduledTaskProfile		 (optional)
	 **/
	update: function(id, scheduledTaskProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.scheduledTaskProfile = scheduledTaskProfile;
		return new KalturaRequestBuilder("scheduledtask_scheduledtaskprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: searchHistory.
 **/
var KalturaSearchHistoryService = {
	/**
	 * .
	 * @param	searchTerm	string		 (optional)
	 **/
	deleteAction: function(searchTerm){
		var kparams = new Object();
		kparams.searchTerm = searchTerm;
		return new KalturaRequestBuilder("searchhistory_searchhistory", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaESearchHistoryFilter		 (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("searchhistory_searchhistory", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: shortLink.
 **/
var KalturaShortLinkService = {
	/**
	 * Allows you to add a short link object.
	 * @param	shortLink	KalturaShortLink		 (optional)
	 **/
	add: function(shortLink){
		var kparams = new Object();
		kparams.shortLink = shortLink;
		return new KalturaRequestBuilder("shortlink_shortlink", "add", kparams);
	},
	
	/**
	 * Mark the short link as deleted.
	 * @param	id	string		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("shortlink_shortlink", "delete", kparams);
	},
	
	/**
	 * Retrieve an short link object by id.
	 * @param	id	string		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("shortlink_shortlink", "get", kparams);
	},
	
	/**
	 * List short link objects by filter and pager.
	 * @param	filter	KalturaShortLinkFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("shortlink_shortlink", "list", kparams);
	},
	
	/**
	 * Update existing short link.
	 * @param	id	string		 (optional)
	 * @param	shortLink	KalturaShortLink		 (optional)
	 **/
	update: function(id, shortLink){
		var kparams = new Object();
		kparams.id = id;
		kparams.shortLink = shortLink;
		return new KalturaRequestBuilder("shortlink_shortlink", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: pexip.
 **/
var KalturaPexipService = {
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	regenerate	bool		 (optional, default: false)
	 * @param	sourceType	int		 (optional, enum: KalturaSipSourceType, default: 1)
	 **/
	generateSipUrl: function(entryId, regenerate, sourceType){
		if(!regenerate)
			regenerate = false;
		if(!sourceType)
			sourceType = 1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.regenerate = regenerate;
		kparams.sourceType = sourceType;
		return new KalturaRequestBuilder("sip_pexip", "generateSipUrl", kparams);
	},
	
	/**
	 * .
	 **/
	handleIncomingCall: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("sip_pexip", "handleIncomingCall", kparams);
	},
	
	/**
	 * .
	 * @param	offset	int		 (optional)
	 * @param	pageSize	int		 (optional, default: 500)
	 * @param	activeOnly	bool		 (optional, default: false)
	 **/
	listRooms: function(offset, pageSize, activeOnly){
		if(!offset)
			offset = 0;
		if(!pageSize)
			pageSize = 500;
		if(!activeOnly)
			activeOnly = false;
		var kparams = new Object();
		kparams.offset = offset;
		kparams.pageSize = pageSize;
		kparams.activeOnly = activeOnly;
		return new KalturaRequestBuilder("sip_pexip", "listRooms", kparams);
	}
}

/**
 *Class definition for the Kaltura service: sso.
 **/
var KalturaSsoService = {
	/**
	 * Adds a new sso configuration..
	 * @param	sso	KalturaSso		a new sso configuration (optional)
	 **/
	add: function(sso){
		var kparams = new Object();
		kparams.sso = sso;
		return new KalturaRequestBuilder("sso_sso", "add", kparams);
	},
	
	/**
	 * Delete sso by ID.
	 * @param	ssoId	int		The unique identifier in the sso's object (optional)
	 **/
	deleteAction: function(ssoId){
		var kparams = new Object();
		kparams.ssoId = ssoId;
		return new KalturaRequestBuilder("sso_sso", "delete", kparams);
	},
	
	/**
	 * Retrieves sso object.
	 * @param	ssoId	int		The unique identifier in the sso's object (optional)
	 **/
	get: function(ssoId){
		var kparams = new Object();
		kparams.ssoId = ssoId;
		return new KalturaRequestBuilder("sso_sso", "get", kparams);
	},
	
	/**
	 * Lists sso objects that are associated with an account..
	 * @param	filter	KalturaSsoFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("sso_sso", "list", kparams);
	},
	
	/**
	 * Login with SSO, getting redirect url according to application type and partner Id
 *		 or according to application type and domain.
	 * @param	userId	string		 (optional)
	 * @param	applicationType	string		 (optional)
	 * @param	partnerId	int		 (optional, default: null)
	 **/
	login: function(userId, applicationType, partnerId){
		if(!partnerId)
			partnerId = null;
		var kparams = new Object();
		kparams.userId = userId;
		kparams.applicationType = applicationType;
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("sso_sso", "login", kparams);
	},
	
	/**
	 * Update sso by ID.
	 * @param	ssoId	int		The unique identifier in the sso's object (optional)
	 * @param	sso	KalturaSso		Id The unique identifier in the sso's object (optional)
	 **/
	update: function(ssoId, sso){
		var kparams = new Object();
		kparams.ssoId = ssoId;
		kparams.sso = sso;
		return new KalturaRequestBuilder("sso_sso", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: tag.
 **/
var KalturaTagService = {
	/**
	 * Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags..
	 **/
	deletePending: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("tagsearch_tag", "deletePending", kparams);
	},
	
	/**
	 * .
	 * @param	categoryId	int		 (optional)
	 * @param	pcToDecrement	string		 (optional)
	 * @param	pcToIncrement	string		 (optional)
	 **/
	indexCategoryEntryTags: function(categoryId, pcToDecrement, pcToIncrement){
		var kparams = new Object();
		kparams.categoryId = categoryId;
		kparams.pcToDecrement = pcToDecrement;
		kparams.pcToIncrement = pcToIncrement;
		return new KalturaRequestBuilder("tagsearch_tag", "indexCategoryEntryTags", kparams);
	},
	
	/**
	 * .
	 * @param	tagFilter	KalturaTagFilter		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	search: function(tagFilter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.tagFilter = tagFilter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("tagsearch_tag", "search", kparams);
	}
}

/**
 *Class definition for the Kaltura service: thumbnail.
 **/
var KalturaThumbnailService = {
	/**
	 * Retrieves a thumbnail according to the required transformation.
	 * @param	transformString	string		 (optional)
	 **/
	transform: function(transformString){
		var kparams = new Object();
		kparams.transformString = transformString;
		return new KalturaRequestBuilder("thumbnail_thumbnail", "transform", kparams);
	}
}

/**
 *Class definition for the Kaltura service: unicorn.
 **/
var KalturaUnicornService = {
	/**
	 * .
	 * @param	id	int		distribution job id (optional)
	 **/
	notify: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("unicorndistribution_unicorn", "notify", kparams);
	}
}

/**
 *Class definition for the Kaltura service: varConsole.
 **/
var KalturaVarConsoleService = {
	/**
	 * Function which calulates partner usage of a group of a VAR's sub-publishers.
	 * @param	partnerFilter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	usageFilter	KalturaReportInputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	getPartnerUsage: function(partnerFilter, usageFilter, pager){
		if(!partnerFilter)
			partnerFilter = null;
		if(!usageFilter)
			usageFilter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (partnerFilter != null)
			kparams.partnerFilter = partnerFilter;
		if (usageFilter != null)
			kparams.usageFilter = usageFilter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("varconsole_varconsole", "getPartnerUsage", kparams);
	},
	
	/**
	 * Function to change a sub-publisher's status.
	 * @param	id	int		 (optional)
	 * @param	status	int		 (optional, enum: KalturaPartnerStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("varconsole_varconsole", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: zoomVendor.
 **/
var KalturaZoomVendorService = {
	/**
	 * .
	 **/
	deAuthorization: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("vendor_zoomvendor", "deAuthorization", kparams);
	},
	
	/**
	 * .
	 * @param	tokensData	string		 (optional)
	 * @param	iv	string		 (optional)
	 **/
	fetchRegistrationPage: function(tokensData, iv){
		var kparams = new Object();
		kparams.tokensData = tokensData;
		kparams.iv = iv;
		return new KalturaRequestBuilder("vendor_zoomvendor", "fetchRegistrationPage", kparams);
	},
	
	/**
	 * Retrieve zoom integration setting object by partner id.
	 * @param	partnerId	int		 (optional)
	 **/
	get: function(partnerId){
		var kparams = new Object();
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("vendor_zoomvendor", "get", kparams);
	},
	
	/**
	 * List KalturaZoomIntegrationSetting objects.
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("vendor_zoomvendor", "list", kparams);
	},
	
	/**
	 * .
	 * @param	jwt	string		 (optional)
	 **/
	localRegistrationPage: function(jwt){
		var kparams = new Object();
		kparams.jwt = jwt;
		return new KalturaRequestBuilder("vendor_zoomvendor", "localRegistrationPage", kparams);
	},
	
	/**
	 * load html page the that will ask the user for its KMC URL, derive the region of the user from it,
 *		 and redirect to the registration page in the correct region, while forwarding the necessary code for registration.
	 **/
	oauthValidation: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("vendor_zoomvendor", "oauthValidation", kparams);
	},
	
	/**
	 * .
	 **/
	preOauthValidation: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("vendor_zoomvendor", "preOauthValidation", kparams);
	},
	
	/**
	 * .
	 **/
	recordingComplete: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("vendor_zoomvendor", "recordingComplete", kparams);
	},
	
	/**
	 * .
	 * @param	accountId	string		 (optional)
	 * @param	integrationSetting	KalturaZoomIntegrationSetting		 (optional)
	 **/
	submitRegistration: function(accountId, integrationSetting){
		var kparams = new Object();
		kparams.accountId = accountId;
		kparams.integrationSetting = integrationSetting;
		return new KalturaRequestBuilder("vendor_zoomvendor", "submitRegistration", kparams);
	}
}

/**
 *Class definition for the Kaltura service: virusScanProfile.
 **/
var KalturaVirusScanProfileService = {
	/**
	 * Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object.
	 * @param	virusScanProfile	KalturaVirusScanProfile		 (optional)
	 **/
	add: function(virusScanProfile){
		var kparams = new Object();
		kparams.virusScanProfile = virusScanProfile;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "add", kparams);
	},
	
	/**
	 * Mark the virus scan profile as deleted.
	 * @param	virusScanProfileId	int		 (optional)
	 **/
	deleteAction: function(virusScanProfileId){
		var kparams = new Object();
		kparams.virusScanProfileId = virusScanProfileId;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "delete", kparams);
	},
	
	/**
	 * Retrieve an virus scan profile object by id.
	 * @param	virusScanProfileId	int		 (optional)
	 **/
	get: function(virusScanProfileId){
		var kparams = new Object();
		kparams.virusScanProfileId = virusScanProfileId;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "get", kparams);
	},
	
	/**
	 * List virus scan profile objects by filter and pager.
	 * @param	filter	KalturaVirusScanProfileFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "list", kparams);
	},
	
	/**
	 * Scan flavor asset according to virus scan profile.
	 * @param	flavorAssetId	string		 (optional)
	 * @param	virusScanProfileId	int		 (optional, default: null)
	 **/
	scan: function(flavorAssetId, virusScanProfileId){
		if(!virusScanProfileId)
			virusScanProfileId = null;
		var kparams = new Object();
		kparams.flavorAssetId = flavorAssetId;
		kparams.virusScanProfileId = virusScanProfileId;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "scan", kparams);
	},
	
	/**
	 * Update existing virus scan profile, it is possible to update the virus scan profile id too.
	 * @param	virusScanProfileId	int		 (optional)
	 * @param	virusScanProfile	KalturaVirusScanProfile		Id (optional)
	 **/
	update: function(virusScanProfileId, virusScanProfile){
		var kparams = new Object();
		kparams.virusScanProfileId = virusScanProfileId;
		kparams.virusScanProfile = virusScanProfile;
		return new KalturaRequestBuilder("virusscan_virusscanprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: widevineDrm.
 **/
var KalturaWidevineDrmService = {
	/**
	 * Get license for encrypted content playback.
	 * @param	flavorAssetId	string		 (optional)
	 * @param	referrer	string		64base encoded (optional, default: null)
	 **/
	getLicense: function(flavorAssetId, referrer){
		if(!referrer)
			referrer = null;
		var kparams = new Object();
		kparams.flavorAssetId = flavorAssetId;
		kparams.referrer = referrer;
		return new KalturaRequestBuilder("widevine_widevinedrm", "getLicense", kparams);
	}
}
// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platfroms allow them to do with
// text.
//
// Copyright (C) 2006-2011  Kaltura Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================

/**
 * Utility global method for extending javascript for allowing easier Inheritance.
 * This method should be called directly after defining the class or object, before extending it's prototype. 
 * @param parentClassOrObject		the parent class or object to inherit from.
 * @return	the object or class being created (the child class).
 */
Function.prototype.inheritsFrom = function( parentClassOrObject ){ 
	if ( parentClassOrObject.constructor == Function ) 
	{ 
		//Normal Inheritance 
		this.prototype = new parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parentClass = parentClassOrObject.prototype;
	} 
	else 
	{ 
		//Pure Virtual Inheritance 
		this.prototype = parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parentClass = parentClassOrObject;
	} 
	return this;
}

/**
 * Sorts an array by key, maintaining key to data correlations. This is useful mainly for associative arrays. 
 * @param arr 	The array to sort.
 * @return		The sorted array.
 */
function ksort(arr) {
  var sArr = [];
  var tArr = [];
  var n = 0;
  for (i in arr)
	  tArr[n++] = i+' |'+arr[i];
  tArr = tArr.sort();
  for (var i=0; i<tArr.length; i++) {
	var x = tArr[i].split(' |');
    sArr[x[0]] = x[1];
  }
  return sArr;
}

/**
 * Implement to get Kaltura Client logs
 * 
 */
function IKalturaLogger(){
}
IKalturaLogger.prototype.log = function(msg){
	if (console && console.log){
		console.log(msg);
	}
};

/**
 * Kaltura client constructor
 * 
 */
function KalturaClientBase(){
}

/**
 * Kaltura client init
 * @param KalturaConfiguration config
 */
KalturaClientBase.prototype.init = function(config){
    this.config = config;
    var logger = this.config.getLogger();
	if (logger) {
		this.shouldLog = true;	
	}
};

KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSON = 1;
KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_XML = 2;
KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_PHP = 3;
KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSONP = 9;

/**
 * @param KalturaConfiguration The Kaltura Client - this is the facade through which all service actions should be called.
 */
KalturaClientBase.prototype.config = null;
	
/**
 * @param object Kaltura general request arguments
 */
KalturaClientBase.prototype.requestData = {};
	
/**
 * @param boolean	should the client log all actions.
 */
KalturaClientBase.prototype.shouldLog = false;
	
/**
 * getter for the referenced configuration object. 
 * @return KalturaConfiguration
 */
KalturaClientBase.prototype.getConfig = function(){
	return this.config;
};

/**
 * @param KalturaConfiguration config	setter for the referenced configuration object.
 */
KalturaClientBase.prototype.setConfig = function(config){
	this.config = config;
	logger = this.config.getLogger();
	if (logger instanceof IKalturaLogger){
		this.shouldLog = true;	
	}
};

/**
 * return a new multi-request builder
 */
KalturaClientBase.prototype.startMultiRequest = function(){
	return new KalturaMultiRequestBuilder();
};

/**
 * @param string msg	client logging utility. 
 */
KalturaClientBase.prototype.log = function(msg){
	if (this.shouldLog)
		this.config.getLogger().log(msg);
};

/**
 * Constructs new Kaltura configuration object
 */
function KalturaConfiguration(){
}

KalturaConfiguration.prototype.logger		= null;
KalturaConfiguration.prototype.serviceUrl	= 'http://www.kaltura.com';
KalturaConfiguration.prototype.serviceBase 	= '/api_v3/service';

/**
 * Set logger to get kaltura client debug logs.
 * @param IKalturaLogger log
 */
KalturaConfiguration.prototype.setLogger = function(log){
	this.logger = log;
};

/**
 * Gets the logger (Internal client use)
 * @return IKalturaLogger
 */
KalturaConfiguration.prototype.getLogger = function(){
	return this.logger;
};

function KalturaRequestBuilder(service, action, data, files){
	if(!service)
		return;
	
	this.service = service;
	this.action = action;
	this.data = data;
	this.files = files;
	this.requestData = {};
}

KalturaRequestBuilder.prototype.callback = null;

/**
 * Sign array of parameters for requests validation (CRC).
 * @param array params		service action call parameters that will be sent on the request.
 * @return string			a hashed signed signature that can identify the sent request parameters.
 */
KalturaRequestBuilder.prototype.signature = function(params){
	params = ksort(params);
	var str = '';
	for(var v in params) {
		var k = params[v];
		if(typeof(k) === 'object' || $.isArray(k))
			k = this.signature(k);
		
		str += v + k;
	}
	return MD5(str);
};

/**
 * send the http request.
 * @return array 							the results and errors inside an array.
 */
KalturaRequestBuilder.prototype.doHttpRequest = function(client){
	var json = this.getData(true);
	var callback = this.callback;
	var url = this.getUrl(client);

	client.log('URL: ' + url);
	client.log('Request JSON: ' + JSON.stringify(json));
	
	var data;
	var processData;
	var contentType;
	
	if(this.files) {
		processData = false;
		contentType = false;
		data = new FormData();
		data.append("json", JSON.stringify(json));
		for(var paramName in this.files) {
			data.append(paramName, this.files[paramName].files[0]);
		}
	}
	else {
		processData = true;
		contentType = 'application/json';
		data = JSON.stringify(json);
	}
	
	$.ajax({
	    type: 'POST',
	    url: url,
	    crossDomain: true,
	    data: data,
	    processData: processData,
	    contentType: contentType,
	    dataType: 'json',
	    success: function(json, textStatus, jqXHR) {
	    	client.log('Response JSON: ' + JSON.stringify(json));
	    	
	    	if(json && typeof(json) === 'object' && json.code && json.message){
		    	if(callback)
		    		callback(false, json);
		    	else
		    		throw new Error(json.message);
	    	}
	    	else if(callback)
	    		callback(true, json);
	    },
	    error: function (responseData, textStatus, errorThrown) {
	    	if(callback)
	    		callback(false, errorThrown);
	    	else
	    		throw errorThrown;
	    }
	});
};

KalturaRequestBuilder.prototype.sign = function(){
	var signature = this.signature(this.data);
	this.data.kalsig = signature;
};

KalturaRequestBuilder.prototype.getUrl = function(client){
	var url = client.config.serviceUrl + client.config.serviceBase;
	url += '/' + this.service + '/action/' + this.action;
	
	return url;
};

KalturaRequestBuilder.prototype.getData = function(sign){
	this.data.format = KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSON;

	$.extend(this.data, this.requestData);

	if(sign)
		this.sign();
	
	return this.data;
};

KalturaRequestBuilder.prototype.execute = function(client, callback){
	var requestData = $.extend({}, client.requestData); // clone client requestData
	this.requestData = $.extend(requestData, this.requestData); // merge client requestData with current requestData
	
	if(callback)
		this.completion(callback);
	
	this.doHttpRequest(client);
};

KalturaRequestBuilder.prototype.completion = function(callback){
	this.callback = callback;
	return this;
};

KalturaRequestBuilder.prototype.add = function(requestBuilder){
	var multiRequestBuilder = new KalturaMultiRequestBuilder();
	multiRequestBuilder.add(this);
	multiRequestBuilder.add(requestBuilder);
	return multiRequestBuilder;
};



function KalturaMultiRequestBuilder(){
	this.requestData = {};
	this.requests = [];
	this.generalCallback = null;
	
	var This = this;
	This.callback = function(success, results){
		if(!success)
			throw new Error(results);

		for(var i = 0; i < This.requests.length; i++){
				if(This.requests[i].callback){
					if(results[i] && typeof(results[i]) == 'object' && results[i].code && results[i].message)
						This.requests[i].callback(false, results[i]);
					else
						This.requests[i].callback(true, results[i]);
				}
		}
		
		if(This.generalCallback) {
			if(results && typeof(results) == 'object' && results.code && results.message)
				This.generalCallback(false, results)
			else
				This.generalCallback(true, results)
		}
	};
}

KalturaMultiRequestBuilder.inheritsFrom (KalturaRequestBuilder);

KalturaMultiRequestBuilder.prototype.completion = function(callback){
	this.generalCallback = callback;
	
	return this;
};

KalturaMultiRequestBuilder.prototype.add = function(requestBuilder){
	this.requests.push(requestBuilder);
	return this;
};

KalturaMultiRequestBuilder.prototype.getUrl = function(client){
	var url = client.config.serviceUrl + client.config.serviceBase;
	url += '/multirequest';
	
	return url;
};

KalturaMultiRequestBuilder.prototype.getData = function(){
	this.data = {
		format: KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSON
	}
	
	for(var i = 0; i < this.requests.length; i++){
		this.data[i] = this.requests[i].getData();
		this.data[i].service = this.requests[i].service;
		this.data[i].action = this.requests[i].action;
	}

	$.extend(this.data, this.requestData);
	
	this.sign();
	return this.data;
};

/**
*
*  MD5 (Message-Digest Algorithm)
*  http://www.webtoolkit.info/
*
**/
 
var MD5 = function (string) {
 
	function RotateLeft(lValue, iShiftBits) {
		return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
	}
 
	function AddUnsigned(lX,lY) {
		var lX4,lY4,lX8,lY8,lResult;
		lX8 = (lX & 0x80000000);
		lY8 = (lY & 0x80000000);
		lX4 = (lX & 0x40000000);
		lY4 = (lY & 0x40000000);
		lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
		if (lX4 & lY4) {
			return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
		}
		if (lX4 | lY4) {
			if (lResult & 0x40000000) {
				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			}
		} else {
			return (lResult ^ lX8 ^ lY8);
		}
 	}
 
 	function F(x,y,z) { return (x & y) | ((~x) & z); }
 	function G(x,y,z) { return (x & z) | (y & (~z)); }
 	function H(x,y,z) { return (x ^ y ^ z); }
	function I(x,y,z) { return (y ^ (x | (~z))); }
 
	function FF(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function GG(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function HH(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function II(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function ConvertToWordArray(string) {
		var lWordCount;
		var lMessageLength = string.length;
		var lNumberOfWords_temp1=lMessageLength + 8;
		var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
		var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
		var lWordArray=Array(lNumberOfWords-1);
		var lBytePosition = 0;
		var lByteCount = 0;
		while ( lByteCount < lMessageLength ) {
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
			lByteCount++;
		}
		lWordCount = (lByteCount-(lByteCount % 4))/4;
		lBytePosition = (lByteCount % 4)*8;
		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
		lWordArray[lNumberOfWords-2] = lMessageLength<<3;
		lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
		return lWordArray;
	};
 
	function WordToHex(lValue) {
		var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
		for (lCount = 0;lCount<=3;lCount++) {
			lByte = (lValue>>>(lCount*8)) & 255;
			WordToHexValue_temp = "0" + lByte.toString(16);
			WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
		}
		return WordToHexValue;
	};
 
	function Utf8Encode(string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	};
 
	var x=Array();
	var k,AA,BB,CC,DD,a,b,c,d;
	var S11=7, S12=12, S13=17, S14=22;
	var S21=5, S22=9 , S23=14, S24=20;
	var S31=4, S32=11, S33=16, S34=23;
	var S41=6, S42=10, S43=15, S44=21;
 
	string = Utf8Encode(string);
 
	x = ConvertToWordArray(string);
 
	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
 
	for (k=0;k<x.length;k+=16) {
		AA=a; BB=b; CC=c; DD=d;
		a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
		d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
		c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
		b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
		a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
		d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
		c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
		b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
		a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
		d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
		c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
		b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
		a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
		d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
		c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
		b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
		a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
		d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
		c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
		b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
		a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
		d=GG(d,a,b,c,x[k+10],S22,0x2441453);
		c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
		b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
		a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
		d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
		c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
		b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
		a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
		d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
		c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
		b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
		a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
		d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
		c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
		b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
		a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
		d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
		c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
		b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
		a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
		d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
		c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
		b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
		a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
		d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
		c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
		b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
		a=II(a,b,c,d,x[k+0], S41,0xF4292244);
		d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
		c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
		b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
		a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
		d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
		c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
		b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
		a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
		d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
		c=II(c,d,a,b,x[k+6], S43,0xA3014314);
		b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
		a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
		d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
		c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
		b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
		a=AddUnsigned(a,AA);
		b=AddUnsigned(b,BB);
		c=AddUnsigned(c,CC);
		d=AddUnsigned(d,DD);
	}
 
	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
 
	return temp.toLowerCase();
}

/**
 * The Kaltura Client - this is the facade through which all service actions should be called.
 * @param config the Kaltura configuration object holding partner credentials (type: KalturaConfiguration).
 */
function KalturaClient(config){
	this.init(config);
	this.setClientTag('ajax:21-07-19');
	this.setApiVersion('17.5.0');
}
KalturaClient.inheritsFrom (KalturaClientBase);
/**
 * The client constructor.
 * @param config the Kaltura configuration object holding partner credentials (type: KalturaConfiguration).
 */
KalturaClient.prototype.init = function(config){
	//call the super constructor:
	KalturaClientBase.prototype.init.apply(this, arguments);
};

/**
 * @param string $clientTag
 */
KalturaClient.prototype.setClientTag = function(clientTag){
	this.requestData.clientTag = clientTag;
};

/**
 * @return string
 */
KalturaClient.prototype.getClientTag = function(){
	return this.requestData.clientTag;
};

/**
 * @param string $apiVersion
 */
KalturaClient.prototype.setApiVersion = function(apiVersion){
	this.requestData.apiVersion = apiVersion;
};

/**
 * @return string
 */
KalturaClient.prototype.getApiVersion = function(){
	return this.requestData.apiVersion;
};

/**
 * Impersonated partner id
 * 
 * @param int $partnerId
 */
KalturaClient.prototype.setPartnerId = function(partnerId){
	this.requestData.partnerId = partnerId;
};

/**
 * Impersonated partner id
 * 
 * @return int
 */
KalturaClient.prototype.getPartnerId = function(){
	return this.requestData.partnerId;
};

/**
 * Kaltura API session
 * 
 * @param string $ks
 */
KalturaClient.prototype.setKs = function(ks){
	this.requestData.ks = ks;
};

/**
 * Kaltura API session
 * 
 * @return string
 */
KalturaClient.prototype.getKs = function(){
	return this.requestData.ks;
};

/**
 * Kaltura API session
 * 
 * @param string $sessionId
 */
KalturaClient.prototype.setSessionId = function(sessionId){
	this.requestData.ks = sessionId;
};

/**
 * Kaltura API session
 * 
 * @return string
 */
KalturaClient.prototype.getSessionId = function(){
	return this.requestData.ks;
};

/**
 * @param string $clientTag
 */
KalturaRequestBuilder.prototype.setClientTag = function(clientTag){
	this.requestData.clientTag = clientTag;
};

/**
 * @return string
 */
KalturaRequestBuilder.prototype.getClientTag = function(){
	return this.requestData.clientTag;
};

/**
 * @param string $apiVersion
 */
KalturaRequestBuilder.prototype.setApiVersion = function(apiVersion){
	this.requestData.apiVersion = apiVersion;
};

/**
 * @return string
 */
KalturaRequestBuilder.prototype.getApiVersion = function(){
	return this.requestData.apiVersion;
};

/**
 * Impersonated partner id
 * 
 * @param int $partnerId
 */
KalturaRequestBuilder.prototype.setPartnerId = function(partnerId){
	this.requestData.partnerId = partnerId;
};

/**
 * Impersonated partner id
 * 
 * @return int
 */
KalturaRequestBuilder.prototype.getPartnerId = function(){
	return this.requestData.partnerId;
};

/**
 * Kaltura API session
 * 
 * @param string $ks
 */
KalturaRequestBuilder.prototype.setKs = function(ks){
	this.requestData.ks = ks;
};

/**
 * Kaltura API session
 * 
 * @return string
 */
KalturaRequestBuilder.prototype.getKs = function(){
	return this.requestData.ks;
};

/**
 * Kaltura API session
 * 
 * @param string $sessionId
 */
KalturaRequestBuilder.prototype.setSessionId = function(sessionId){
	this.requestData.ks = sessionId;
};

/**
 * Kaltura API session
 * 
 * @return string
 */
KalturaRequestBuilder.prototype.getSessionId = function(){
	return this.requestData.ks;
};

/**
 * Response profile - this attribute will be automatically unset after every API call.
 * 
 * @param KalturaBaseResponseProfile $responseProfile
 */
KalturaRequestBuilder.prototype.setResponseProfile = function(responseProfile){
	this.requestData.responseProfile = responseProfile;
};

/**
 * Response profile - this attribute will be automatically unset after every API call.
 * 
 * @return KalturaBaseResponseProfile
 */
KalturaRequestBuilder.prototype.getResponseProfile = function(){
	return this.requestData.responseProfile;
};

// {"mode":"full","isActive":false}