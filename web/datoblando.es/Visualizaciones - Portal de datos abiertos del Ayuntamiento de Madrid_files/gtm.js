// Copyright 2012 Google Inc. All rights reserved.
(function() {
    var data = {
        resource: {
            version: "15",

            macros: [
                { function: "__e" },
                { function: "__c", vtp_value: "UA-43924734-1" },
                {
                    function: "__v",
                    vtp_name: "gtm.elementClasses",
                    vtp_dataLayerVersion: 1,
                },
                { function: "__u", vtp_component: "URL" },
                { function: "__aev", vtp_varType: "TEXT" },
                {
                    function: "__v",
                    vtp_name: "gtm.elementUrl",
                    vtp_dataLayerVersion: 1,
                },
                {
                    function: "__v",
                    vtp_name: "gtm.elementUrl",
                    vtp_dataLayerVersion: 1,
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "ti",
                },
                { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
                { function: "__e" },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "eventLabel",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "eventCategory",
                },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "eventAction",
                },
                { function: "__u", vtp_component: "PATH" },
                {
                    function: "__v",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: false,
                    vtp_name: "cg_s",
                },
                { function: "__u", vtp_component: "FRAGMENT" },
                { function: "__u", vtp_component: "HOST" },
                { function: "__f", vtp_component: "URL" },
                { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
                {
                    function: "__v",
                    vtp_name: "gtm.elementTarget",
                    vtp_dataLayerVersion: 1,
                },
                { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
                {
                    function: "__v",
                    vtp_name: "gtm.elementClasses",
                    vtp_dataLayerVersion: 1,
                },
                { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
                {
                    function: "__v",
                    vtp_name: "gtm.elementTarget",
                    vtp_dataLayerVersion: 1,
                },
                { function: "__aev", vtp_varType: "TEXT" },
            ],
            tags: [{
                    function: "__ua",
                    once_per_event: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_useHashAutoLink: false,
                    vtp_trackType: "TRACK_PAGEVIEW",
                    vtp_decorateFormsAutoLink: false,
                    vtp_enableLinkId: false,
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    tag_id: 1,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Herramientas comunes",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Fuente aumentar",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 3,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Buscadores",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Buscador General",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 10,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Entidades y Organismos",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Click MailTo",
                    vtp_eventLabel: ["macro", 4],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 11,
                },
                {
                    function: "__ga",
                    once_per_event: true,
                    vtp_detectTitle: true,
                    vtp_ignoredRef: ["list"],
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Entidades y Organismos",
                    vtp_allowLinker: false,
                    vtp_trackType: "TRACK_EVENT",
                    vtp_cookiePathCopy: ["list"],
                    vtp_clientInfo: true,
                    vtp_campaignTrack: true,
                    vtp_eventAction: "Click Web Biblioteca",
                    vtp_anonymizeIp: false,
                    vtp_eventLabel: ["macro", 6],
                    vtp_webPropertyId: ["macro", 1],
                    vtp_allowAnchor: false,
                    vtp_allowHash: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_sendHitsToGoogle: true,
                    vtp_enableInPageLinkId: false,
                    vtp_forceSsl: false,
                    vtp_ignoredOrganic: ["list"],
                    vtp_detectFlash: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 12,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Compartir RRSS",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Correo Electrónico",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 14,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Compartir RRSS",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Facebook",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 15,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Compartir RRSS",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Google+",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 16,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Compartir RRSS",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "LinkedIn",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 17,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Compartir RRSS",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Twitter",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 18,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "PDF",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 19,
                },
                {
                    function: "__ga",
                    once_per_event: true,
                    vtp_detectTitle: true,
                    vtp_ignoredRef: ["list"],
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Desplegables",
                    vtp_allowLinker: false,
                    vtp_trackType: "TRACK_EVENT",
                    vtp_cookiePathCopy: ["list"],
                    vtp_clientInfo: true,
                    vtp_campaignTrack: true,
                    vtp_eventAction: "Publicación de datos",
                    vtp_anonymizeIp: false,
                    vtp_eventLabel: ["macro", 3],
                    vtp_webPropertyId: ["macro", 1],
                    vtp_allowAnchor: false,
                    vtp_allowHash: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_sendHitsToGoogle: true,
                    vtp_enableInPageLinkId: false,
                    vtp_forceSsl: false,
                    vtp_ignoredOrganic: ["list"],
                    vtp_detectFlash: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 21,
                },
                {
                    function: "__ga",
                    once_per_event: true,
                    vtp_detectTitle: true,
                    vtp_ignoredRef: ["list"],
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Desplegables",
                    vtp_allowLinker: false,
                    vtp_trackType: "TRACK_EVENT",
                    vtp_cookiePathCopy: ["list"],
                    vtp_clientInfo: true,
                    vtp_campaignTrack: true,
                    vtp_eventAction: "Mapa",
                    vtp_anonymizeIp: false,
                    vtp_eventLabel: ["macro", 3],
                    vtp_webPropertyId: ["macro", 1],
                    vtp_allowAnchor: false,
                    vtp_allowHash: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_sendHitsToGoogle: true,
                    vtp_enableInPageLinkId: false,
                    vtp_forceSsl: false,
                    vtp_ignoredOrganic: ["list"],
                    vtp_detectFlash: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 22,
                },
                {
                    function: "__ga",
                    once_per_event: true,
                    vtp_detectTitle: true,
                    vtp_ignoredRef: ["list"],
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Desplegables",
                    vtp_allowLinker: false,
                    vtp_trackType: "TRACK_EVENT",
                    vtp_cookiePathCopy: ["list"],
                    vtp_clientInfo: true,
                    vtp_campaignTrack: true,
                    vtp_eventAction: "Definición del conjunto de datos",
                    vtp_anonymizeIp: false,
                    vtp_eventLabel: ["macro", 3],
                    vtp_webPropertyId: ["macro", 1],
                    vtp_allowAnchor: false,
                    vtp_allowHash: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_sendHitsToGoogle: true,
                    vtp_enableInPageLinkId: false,
                    vtp_forceSsl: false,
                    vtp_ignoredOrganic: ["list"],
                    vtp_detectFlash: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 23,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Herramientas comunes",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Fuente disminuir",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 25,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Herramientas comunes",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Imprimir",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 27,
                },
                {
                    function: "__ga",
                    once_per_event: true,
                    vtp_detectTitle: true,
                    vtp_ignoredRef: ["list"],
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Navegacion",
                    vtp_allowLinker: false,
                    vtp_trackType: "TRACK_EVENT",
                    vtp_cookiePathCopy: ["list"],
                    vtp_clientInfo: true,
                    vtp_campaignTrack: true,
                    vtp_eventAction: "Logo Madrid",
                    vtp_anonymizeIp: false,
                    vtp_eventLabel: ["macro", 3],
                    vtp_webPropertyId: ["macro", 1],
                    vtp_allowAnchor: false,
                    vtp_allowHash: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_sendHitsToGoogle: true,
                    vtp_enableInPageLinkId: false,
                    vtp_forceSsl: false,
                    vtp_ignoredOrganic: ["list"],
                    vtp_detectFlash: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 28,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Entidades y Organismos",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Ver Mapa",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 29,
                },
                {
                    function: "__ga",
                    once_per_event: true,
                    vtp_detectTitle: true,
                    vtp_ignoredRef: ["list"],
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["macro", 11],
                    vtp_allowLinker: false,
                    vtp_trackType: "TRACK_EVENT",
                    vtp_cookiePathCopy: ["list"],
                    vtp_clientInfo: true,
                    vtp_campaignTrack: true,
                    vtp_eventAction: ["macro", 12],
                    vtp_anonymizeIp: false,
                    vtp_eventLabel: ["macro", 10],
                    vtp_webPropertyId: ["macro", 1],
                    vtp_allowAnchor: false,
                    vtp_allowHash: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_sendHitsToGoogle: true,
                    vtp_enableInPageLinkId: false,
                    vtp_forceSsl: false,
                    vtp_ignoredOrganic: ["list"],
                    vtp_detectFlash: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 31,
                },
                {
                    function: "__ga",
                    once_per_event: true,
                    vtp_detectTitle: true,
                    vtp_ignoredRef: ["list"],
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Utilidad",
                    vtp_allowLinker: false,
                    vtp_trackType: "TRACK_EVENT",
                    vtp_cookiePathCopy: ["list"],
                    vtp_clientInfo: true,
                    vtp_campaignTrack: true,
                    vtp_eventAction: "Comunicar Error",
                    vtp_anonymizeIp: false,
                    vtp_eventLabel: ["macro", 3],
                    vtp_webPropertyId: ["macro", 1],
                    vtp_allowAnchor: false,
                    vtp_allowHash: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_sendHitsToGoogle: true,
                    vtp_enableInPageLinkId: false,
                    vtp_forceSsl: false,
                    vtp_ignoredOrganic: ["list"],
                    vtp_detectFlash: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 35,
                },
                {
                    function: "__ga",
                    once_per_event: true,
                    vtp_detectTitle: true,
                    vtp_ignoredRef: ["list"],
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Utilidad",
                    vtp_allowLinker: false,
                    vtp_trackType: "TRACK_EVENT",
                    vtp_cookiePathCopy: ["list"],
                    vtp_clientInfo: true,
                    vtp_campaignTrack: true,
                    vtp_eventAction: "No",
                    vtp_anonymizeIp: false,
                    vtp_eventLabel: ["macro", 3],
                    vtp_webPropertyId: ["macro", 1],
                    vtp_allowAnchor: false,
                    vtp_allowHash: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_sendHitsToGoogle: true,
                    vtp_enableInPageLinkId: false,
                    vtp_forceSsl: false,
                    vtp_ignoredOrganic: ["list"],
                    vtp_detectFlash: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 36,
                },
                {
                    function: "__ga",
                    once_per_event: true,
                    vtp_detectTitle: true,
                    vtp_ignoredRef: ["list"],
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Utilidad",
                    vtp_allowLinker: false,
                    vtp_trackType: "TRACK_EVENT",
                    vtp_cookiePathCopy: ["list"],
                    vtp_clientInfo: true,
                    vtp_campaignTrack: true,
                    vtp_eventAction: "Si",
                    vtp_anonymizeIp: false,
                    vtp_eventLabel: ["macro", 3],
                    vtp_webPropertyId: ["macro", 1],
                    vtp_allowAnchor: false,
                    vtp_allowHash: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_sendHitsToGoogle: true,
                    vtp_enableInPageLinkId: false,
                    vtp_forceSsl: false,
                    vtp_ignoredOrganic: ["list"],
                    vtp_detectFlash: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 37,
                },
                {
                    function: "__hjtc",
                    once_per_event: true,
                    vtp_hotjar_site_id: "404527",
                    tag_id: 42,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "XLS",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 43,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "ATOM",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 44,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "CSV",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 45,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "GEO",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 46,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "GPX",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 47,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "JSON",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 48,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "KML",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 49,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "KMZ",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 50,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "MDB",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 51,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "RSS",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 52,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "SHP",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 53,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "TXT",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 54,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "WMS",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 55,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "XML",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 56,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "ZIP",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 57,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "RDF",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 58,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Herramientas comunes",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Suscribirse al RSS",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 59,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: ["template", "Descargas - ", ["macro", 7]],
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: ["macro", 6],
                    vtp_eventLabel: "DOC",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 60,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Buscadores",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Buscador Filtro",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 61,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_fieldsToSet: [
                        "list", [
                            "map",
                            "fieldName",
                            "page",
                            "value",
                            "/catalogo/despliegue-filtro",
                        ],
                        [
                            "map",
                            "fieldName",
                            "title",
                            "value",
                            "Catálogo -  Despliegue filtro",
                        ],
                    ],
                    vtp_useHashAutoLink: false,
                    vtp_trackType: "TRACK_PAGEVIEW",
                    vtp_decorateFormsAutoLink: false,
                    vtp_enableLinkId: false,
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    tag_id: 62,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_fieldsToSet: [
                        "list", ["map", "fieldName", "page", "value", "/catalogo/boton-filtrar"],
                        ["map", "fieldName", "title", "value", "Catálogo - Botón Filtrar"],
                    ],
                    vtp_useHashAutoLink: false,
                    vtp_trackType: "TRACK_PAGEVIEW",
                    vtp_decorateFormsAutoLink: false,
                    vtp_enableLinkId: false,
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    tag_id: 63,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_fieldsToSet: [
                        "list", ["map", "fieldName", "page", "value", "/colabora/enviar-propuesta"],
                        [
                            "map",
                            "fieldName",
                            "title",
                            "value",
                            "Colabora- Envíar Propuesta",
                        ],
                    ],
                    vtp_useHashAutoLink: false,
                    vtp_trackType: "TRACK_PAGEVIEW",
                    vtp_decorateFormsAutoLink: false,
                    vtp_enableLinkId: false,
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    tag_id: 64,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Votaciones",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Votar contenido",
                    vtp_eventLabel: "Votación",
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 65,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Navegacion",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Portal de transparencia",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 66,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Navegacion",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Decide Madrid",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 67,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Navegacion",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Información Estadística",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 68,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_useHashAutoLink: false,
                    vtp_trackType: "TRACK_PAGEVIEW",
                    vtp_decorateFormsAutoLink: false,
                    vtp_enableLinkId: false,
                    vtp_dimension: [
                        "list", ["map", "index", "1", "dimension", ["macro", 14]],
                    ],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    tag_id: 69,
                },
                {
                    function: "__ga",
                    once_per_event: true,
                    vtp_detectTitle: true,
                    vtp_ignoredRef: ["list"],
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Buscadores",
                    vtp_allowLinker: false,
                    vtp_trackType: "TRACK_EVENT",
                    vtp_cookiePathCopy: ["list"],
                    vtp_clientInfo: true,
                    vtp_campaignTrack: true,
                    vtp_eventAction: "Buscador Buscador",
                    vtp_anonymizeIp: false,
                    vtp_eventLabel: ["macro", 3],
                    vtp_webPropertyId: ["macro", 1],
                    vtp_allowAnchor: false,
                    vtp_allowHash: true,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_sendHitsToGoogle: true,
                    vtp_enableInPageLinkId: false,
                    vtp_forceSsl: false,
                    vtp_ignoredOrganic: ["list"],
                    vtp_detectFlash: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 70,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Navegacion",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Premios Datathon",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 71,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Navegacion",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Ordenanza de Transparencia",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 72,
                },
                {
                    function: "__ua",
                    once_per_event: true,
                    vtp_nonInteraction: false,
                    vtp_doubleClick: false,
                    vtp_setTrackerName: false,
                    vtp_useDebugVersion: false,
                    vtp_eventCategory: "Navegacion",
                    vtp_trackType: "TRACK_EVENT",
                    vtp_enableLinkId: false,
                    vtp_eventAction: "Envía tu propuesta",
                    vtp_eventLabel: ["macro", 3],
                    vtp_enableEcommerce: false,
                    vtp_trackingId: ["macro", 1],
                    vtp_enableUaRlsa: false,
                    vtp_enableUseInternalVersion: false,
                    vtp_enableFirebaseCampaignData: true,
                    vtp_trackTypeIsEvent: true,
                    tag_id: 73,
                },
                { function: "__cl", tag_id: 74 },
                { function: "__cl", tag_id: 75 },
                { function: "__cl", tag_id: 76 },
                { function: "__cl", tag_id: 77 },
                { function: "__cl", tag_id: 78 },
                { function: "__cl", tag_id: 79 },
                { function: "__cl", tag_id: 80 },
                { function: "__cl", tag_id: 81 },
                { function: "__cl", tag_id: 82 },
                { function: "__cl", tag_id: 83 },
                { function: "__cl", tag_id: 84 },
                { function: "__cl", tag_id: 85 },
                { function: "__cl", tag_id: 86 },
                { function: "__cl", tag_id: 87 },
                { function: "__cl", tag_id: 88 },
                { function: "__cl", tag_id: 89 },
                { function: "__cl", tag_id: 90 },
                { function: "__cl", tag_id: 91 },
                { function: "__cl", tag_id: 92 },
                { function: "__cl", tag_id: 93 },
                { function: "__cl", tag_id: 94 },
                { function: "__cl", tag_id: 95 },
                { function: "__cl", tag_id: 96 },
                { function: "__cl", tag_id: 97 },
                { function: "__cl", tag_id: 98 },
                { function: "__cl", tag_id: 99 },
                { function: "__cl", tag_id: 100 },
                { function: "__cl", tag_id: 101 },
                { function: "__cl", tag_id: 102 },
                { function: "__cl", tag_id: 103 },
                { function: "__cl", tag_id: 104 },
                { function: "__cl", tag_id: 105 },
                { function: "__cl", tag_id: 106 },
                { function: "__cl", tag_id: 107 },
                { function: "__cl", tag_id: 108 },
                { function: "__cl", tag_id: 109 },
                { function: "__cl", tag_id: 110 },
                { function: "__cl", tag_id: 111 },
                { function: "__cl", tag_id: 112 },
                { function: "__cl", tag_id: 113 },
                { function: "__cl", tag_id: 114 },
                { function: "__cl", tag_id: 115 },
                { function: "__cl", tag_id: 116 },
                { function: "__cl", tag_id: 117 },
                { function: "__cl", tag_id: 118 },
                { function: "__cl", tag_id: 119 },
                { function: "__cl", tag_id: 120 },
                { function: "__cl", tag_id: 121 },
                { function: "__cl", tag_id: 122 },
                { function: "__cl", tag_id: 123 },
                { function: "__cl", tag_id: 124 },
                { function: "__cl", tag_id: 125 },
                {
                    function: "__html",
                    once_per_event: true,
                    vtp_html: '\u003Cscript type="text/gtmscript"\u003E/*\n @preserve\n jquery.scrolldepth.js | v0.8\n Copyright (c) 2015 Rob Flaherty (@robflaherty)\n Licensed under the MIT and GPL licenses.\n*/\n(function(e,f,r,A){var v={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0,gaGlobal:!1,gtmOverride:!1},n=e(f),k=[],l=0,m,p,g,h;e.scrollDepth=function(a){function t(a,c){if(h)h({event:"ScrollDistance",eventCategory:"Profundidad Scroll",eventAction:a,eventLabel:"Inicio Pagina",eventValue:1,eventNonInteraction:!0});else{if(m)f[g]("send","event","Profundidad Scroll",a,"Inicio Pagina",1,{nonInteraction:!0});p\u0026\u0026_gaq.push(["_trackEvent","Profundidad Scroll",a,"Inicio Pagina",\n1,!0])}}function u(b,c,d,q){if(h)h({event:"ScrollDistance",eventCategory:"Profundidad Scroll",eventAction:b,eventLabel:c,eventValue:1,eventNonInteraction:a.nonInteraction}),a.pixelDepth\u0026\u00262\u003Carguments.length\u0026\u0026d\u003El\u0026\u0026(l=d,h({event:"ScrollDistance",eventCategory:"Profundidad Scroll",eventAction:"Profundidad Pixeles",eventLabel:(250*Math.floor(d/250)).toString(),eventValue:1,eventNonInteraction:a.nonInteraction})),a.userTiming\u0026\u00263\u003Carguments.length\u0026\u0026h({event:"ScrollTiming",eventCategory:"Profundidad Scroll",\neventAction:b,eventLabel:c,eventTiming:q});else{if(m\u0026\u0026(f[g]("send","event","Profundidad Scroll",b,c,1,{nonInteraction:a.nonInteraction}),a.pixelDepth\u0026\u00262\u003Carguments.length\u0026\u0026d\u003El\u0026\u0026(l=d,f[g]("send","event","Profundidad Scroll","Profundidad Pixeles",(250*Math.floor(d/250)).toString(),1,{nonInteraction:a.nonInteraction})),a.userTiming\u0026\u00263\u003Carguments.length))f[g]("send","timing","Profundidad Scroll",b,q,c);p\u0026\u0026(_gaq.push(["_trackEvent","Profundidad Scroll",b,c,1,a.nonInteraction]),a.pixelDepth\u0026\u00262\u003Carguments.length\u0026\u0026\nd\u003El\u0026\u0026(l=d,_gaq.push(["_trackEvent","Profundidad Scroll","Profundidad Pixeles",(250*Math.floor(d/250)).toString(),1,a.nonInteraction])),a.userTiming\u0026\u00263\u003Carguments.length\u0026\u0026_gaq.push(["_trackTiming","Profundidad Scroll",b,q,c,100]))}}function w(a,c,d){e.each(a,function(a,b){-1===e.inArray(a,k)\u0026\u0026c\u003E=b\u0026\u0026(u("Porcentaje",a,c,d),k.push(a))})}function x(a,c,d){e.each(a,function(a,b){-1===e.inArray(b,k)\u0026\u0026e(b).length\u0026\u0026c\u003E=e(b).offset().top\u0026\u0026(u("Elements",b,c,d),k.push(b))})}function y(a,c){var b,e,h,f=null,g=0,\nl=function(){g=new Date;f=null;h=a.apply(b,e)};return function(){var d=new Date;g||(g=d);var k=c-(d-g);b=this;e=arguments;0\u003E=k?(clearTimeout(f),f=null,g=d,h=a.apply(b,e)):f||(f=setTimeout(l,k));return h}}var z=+new Date;a=e.extend({},v,a);e(r).height()\u003Ca.minHeight||(a.gaGlobal?(m=!0,g=a.gaGlobal):"function"===typeof ga?(m=!0,g="ga"):"function"===typeof __gaTracker\u0026\u0026(m=!0,g="__gaTracker"),"undefined"!==typeof _gaq\u0026\u0026"function"===typeof _gaq.push\u0026\u0026(p=!0),"function"===typeof a.eventHandler?h=a.eventHandler:\n"undefined"===typeof dataLayer||"function"!==typeof dataLayer.push||a.gtmOverride||(h=function(a){dataLayer.push(a)}),a.percentage?t("Porcentaje"):a.elements\u0026\u0026t("Elements"),n.on("scroll.scrollDepth",y(function(){var b=e(r).height(),c=f.innerHeight?f.innerHeight:n.height(),c=n.scrollTop()+c,b={"25%":parseInt(.25*b,10),"50%":parseInt(.5*b,10),"75%":parseInt(.75*b,10),"100%":b-5},d=+new Date-z;k.length\u003E=4+a.elements.length?n.off("scroll.scrollDepth"):(a.elements\u0026\u0026x(a.elements,c,d),a.percentage\u0026\u0026w(b,\nc,d))},500)))}})(jQuery,window,document);jQuery.scrollDepth();\u003C/script\u003E',
                    vtp_supportDocumentWrite: false,
                    vtp_enableIframeMode: false,
                    vtp_enableEditJsMacroBehavior: false,
                    tag_id: 32,
                },
            ],
            predicates: [
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
                {
                    function: "_cn",
                    arg0: ["macro", 2],
                    arg1: "btnMenuVerticalAumentarFuente",
                },
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.click" },
                { function: "_cn", arg0: ["macro", 2], arg1: "searcher-link" },
                { function: "_cn", arg0: ["macro", 4], arg1: "@madrid" },
                {
                    function: "_cn",
                    arg0: ["macro", 5],
                    arg1: "http://www.madrid.es/bibliotecaspublicas",
                },
                {
                    function: "_eq",
                    arg0: ["macro", 2],
                    arg1: "compartir-link compartir-email",
                },
                {
                    function: "_eq",
                    arg0: ["macro", 2],
                    arg1: "compartir-link compartir-facebook",
                },
                {
                    function: "_eq",
                    arg0: ["macro", 2],
                    arg1: "compartir-link compartir-google",
                },
                {
                    function: "_eq",
                    arg0: ["macro", 2],
                    arg1: "compartir-link compartir-linkedin",
                },
                {
                    function: "_eq",
                    arg0: ["macro", 2],
                    arg1: "compartir-link compartir-twitter",
                },
                { function: "_cn", arg0: ["macro", 4], arg1: "PDF" },
                { function: "_cn", arg0: ["macro", 2], arg1: "asociada-link" },
                { function: "_eq", arg0: ["macro", 4], arg1: "Publicación de datos" },
                { function: "_eq", arg0: ["macro", 2], arg1: "collapsed" },
                {
                    function: "_eq",
                    arg0: ["macro", 4],
                    arg1: "Ver resultados en el mapa",
                },
                {
                    function: "_eq",
                    arg0: ["macro", 4],
                    arg1: "Definición del conjunto de datos",
                },
                {
                    function: "_cn",
                    arg0: ["macro", 2],
                    arg1: "btnMenuVerticalReducirFuente",
                },
                {
                    function: "_cn",
                    arg0: ["macro", 2],
                    arg1: "btnMenuVerticalImprimir",
                },
                {
                    function: "_cn",
                    arg0: ["macro", 5],
                    arg1: "http://datos.madrid.es/assets/images/logo-madrid.png",
                },
                { function: "_eq", arg0: ["macro", 8], arg1: "vermapa" },
                { function: "_cn", arg0: ["macro", 9], arg1: "ScrollDistance" },
                { function: "_eq", arg0: ["macro", 10], arg1: "100%" },
                { function: "_eq", arg0: ["macro", 0], arg1: "ScrollDistance" },
                { function: "_eq", arg0: ["macro", 10], arg1: "50%" },
                { function: "_eq", arg0: ["macro", 10], arg1: "75%" },
                { function: "_eq", arg0: ["macro", 10], arg1: "25%" },
                {
                    function: "_eq",
                    arg0: ["macro", 4],
                    arg1: "No mucho",
                },
                { function: "_eq", arg0: ["macro", 4], arg1: "No mucho" },
                { function: "_eq", arg0: ["macro", 4], arg1: "No mucho" },
                { function: "_cn", arg0: ["macro", 4], arg1: "XLS" },
                { function: "_cn", arg0: ["macro", 4], arg1: "ATOM" },
                { function: "_cn", arg0: ["macro", 4], arg1: "CSV" },
                { function: "_cn", arg0: ["macro", 4], arg1: "GEO" },
                { function: "_cn", arg0: ["macro", 4], arg1: "GPX" },
                { function: "_cn", arg0: ["macro", 4], arg1: "JSON" },
                { function: "_cn", arg0: ["macro", 4], arg1: "KML" },
                { function: "_cn", arg0: ["macro", 4], arg1: "KMZ" },
                { function: "_cn", arg0: ["macro", 4], arg1: "MDB" },
                { function: "_cn", arg0: ["macro", 4], arg1: "RSS" },
                { function: "_cn", arg0: ["macro", 4], arg1: "descargas" },
                { function: "_cn", arg0: ["macro", 4], arg1: "SHP" },
                { function: "_cn", arg0: ["macro", 4], arg1: "TXT" },
                { function: "_cn", arg0: ["macro", 4], arg1: "WMS" },
                { function: "_cn", arg0: ["macro", 4], arg1: "XML" },
                { function: "_cn", arg0: ["macro", 4], arg1: "ZIP" },
                { function: "_cn", arg0: ["macro", 4], arg1: "RDF" },
                { function: "_eq", arg0: ["macro", 2], arg1: "btnMenuVerticalRss" },
                {
                    function: "_eq",
                    arg0: ["macro", 4],
                    arg1: "Suscríbete al canal RSS",
                },
                { function: "_cn", arg0: ["macro", 4], arg1: "DOC" },
                {
                    function: "_eq",
                    arg0: ["macro", 2],
                    arg1: "button button4 button-icon",
                },
                { function: "_eq", arg0: ["macro", 4], arg1: "Filtrar" },
                { function: "_cn", arg0: ["macro", 2], arg1: "button-icon-search" },
                {
                    function: "_eq",
                    arg0: ["macro", 13],
                    arg1: "/portal/site/egob/menuitem.9e1e2f6404558187cf35cf3584f1a5a0/",
                },
                { function: "_eq", arg0: ["macro", 2], arg1: "panel-title collapsed" },
                { function: "_eq", arg0: ["macro", 4], arg1: "Filtrar por..." },
                { function: "_cn", arg0: ["macro", 4], arg1: "Enviar" },
                { function: "_eq", arg0: ["macro", 2], arg1: "button-icon-arrowright" },
                {
                    function: "_eq",
                    arg0: ["macro", 13],
                    arg1: "/portal/site/egob/menuitem.51d72b6fd30127241e830cc2a8a409a0/",
                },
                { function: "_cn", arg0: ["macro", 2], arg1: "vote" },
                {
                    function: "_eq",
                    arg0: ["macro", 4],
                    arg1: "Portal de Transparencia",
                },
                { function: "_eq", arg0: ["macro", 4], arg1: "Decide Madrid" },
                {
                    function: "_eq",
                    arg0: ["macro", 4],
                    arg1: "Información estadística",
                },
                { function: "_cn", arg0: ["macro", 14], arg1: "DataSet" },
                { function: "_eq", arg0: ["macro", 0], arg1: "Plantilla" },
                { function: "_eq", arg0: ["macro", 4], arg1: "Buscar" },
                {
                    function: "_cn",
                    arg0: ["macro", 13],
                    arg1: "/vgn-ext-templating/v/index.jsp",
                },
                { function: "_eq", arg0: ["macro", 2], arg1: "button-icon-search" },
                {
                    function: "_eq",
                    arg0: ["macro", 13],
                    arg1: "/vgn-ext-templating/v/index.jsp",
                },
                { function: "_cn", arg0: ["macro", 4], arg1: "Premios Datathon" },
                {
                    function: "_eq",
                    arg0: ["macro", 4],
                    arg1: "Ordenanza de Transparencia para la Ciudad de Madrid",
                },
                { function: "_eq", arg0: ["macro", 4], arg1: "Envía tu propuesta" },
                {
                    function: "_cn",
                    arg0: ["macro", 3],
                    arg1: "/portal/site/bibliotecas",
                },
            ],
            rules: [
                [
                    ["if", 0],
                    [
                        "add",
                        0,
                        22,
                        54,
                        55,
                        56,
                        57,
                        58,
                        59,
                        60,
                        61,
                        62,
                        63,
                        64,
                        65,
                        66,
                        67,
                        68,
                        69,
                        70,
                        71,
                        72,
                        73,
                        74,
                        75,
                        76,
                        77,
                        78,
                        79,
                        80,
                        81,
                        82,
                        83,
                        84,
                        85,
                        86,
                        87,
                        88,
                        89,
                        90,
                        91,
                        92,
                        93,
                        94,
                        95,
                        96,
                        97,
                        98,
                        99,
                        100,
                        101,
                        102,
                        103,
                        104,
                        105,
                    ],
                ],
                [
                    ["if", 1, 2],
                    ["add", 1],
                ],
                [
                    ["if", 2, 3],
                    ["add", 2],
                ],
                [
                    ["if", 2, 4],
                    ["add", 3],
                ],
                [
                    ["if", 2, 5],
                    ["add", 4],
                ],
                [
                    ["if", 2, 6],
                    ["add", 5],
                ],
                [
                    ["if", 2, 7],
                    ["add", 6],
                ],
                [
                    ["if", 2, 8],
                    ["add", 7],
                ],
                [
                    ["if", 2, 9],
                    ["add", 8],
                ],
                [
                    ["if", 2, 10],
                    ["add", 9],
                ],
                [
                    ["if", 2, 11, 12],
                    ["add", 10],
                ],
                [
                    ["if", 2, 13, 14],
                    ["add", 11],
                ],
                [
                    ["if", 2, 14, 15],
                    ["add", 12],
                ],
                [
                    ["if", 2, 14, 16],
                    ["add", 13],
                ],
                [
                    ["if", 2, 17],
                    ["add", 14],
                ],
                [
                    ["if", 2, 18],
                    ["add", 15],
                ],
                [
                    ["if", 2, 19],
                    ["add", 16],
                ],
                [
                    ["if", 2, 20],
                    ["add", 17],
                ],
                [
                    ["if", 21, 22, 23],
                    ["add", 18],
                ],
                [
                    ["if", 21, 23, 24],
                    ["add", 18],
                ],
                [
                    ["if", 21, 23, 25],
                    ["add", 18],
                ],
                [
                    ["if", 21, 23, 26],
                    ["add", 18],
                ],
                [
                    ["if", 2, 27],
                    ["add", 19],
                ],
                [
                    ["if", 2, 28],
                    ["add", 20],
                ],
                [
                    ["if", 2, 29],
                    ["add", 21],
                ],
                [
                    ["if", 2, 12, 30],
                    ["add", 23],
                ],
                [
                    ["if", 2, 12, 31],
                    ["add", 24],
                ],
                [
                    ["if", 2, 12, 32],
                    ["add", 25],
                ],
                [
                    ["if", 2, 12, 33],
                    ["add", 26],
                ],
                [
                    ["if", 2, 12, 34],
                    ["add", 27],
                ],
                [
                    ["if", 2, 12, 35],
                    ["add", 28],
                ],
                [
                    ["if", 2, 12, 36],
                    ["add", 29],
                ],
                [
                    ["if", 2, 12, 37],
                    ["add", 30],
                ],
                [
                    ["if", 2, 12, 38],
                    ["add", 31],
                ],
                [
                    ["if", 2, 39, 40],
                    ["add", 32],
                ],
                [
                    ["if", 2, 12, 41],
                    ["add", 33],
                ],
                [
                    ["if", 2, 12, 42],
                    ["add", 34],
                ],
                [
                    ["if", 2, 12, 43],
                    ["add", 35],
                ],
                [
                    ["if", 2, 12, 44],
                    ["add", 36],
                ],
                [
                    ["if", 2, 12, 45],
                    ["add", 37],
                ],
                [
                    ["if", 2, 12, 46],
                    ["add", 38],
                ],
                [
                    ["if", 2, 47, 48],
                    ["add", 39],
                ],
                [
                    ["if", 2, 12, 49],
                    ["add", 40],
                ],
                [
                    ["if", 2, 50, 51],
                    ["add", 41, 43],
                ],
                [
                    ["if", 2, 52, 53],
                    ["add", 41, 43],
                ],
                [
                    ["if", 2, 54, 55],
                    ["add", 42],
                ],
                [
                    ["if", 2, 50, 56],
                    ["add", 44],
                ],
                [
                    ["if", 2, 57, 58],
                    ["add", 44],
                ],
                [
                    ["if", 2, 59],
                    ["add", 45],
                ],
                [
                    ["if", 2, 60],
                    ["add", 46],
                ],
                [
                    ["if", 2, 61],
                    ["add", 47],
                ],
                [
                    ["if", 2, 62],
                    ["add", 48],
                ],
                [
                    ["if", 63, 64],
                    ["add", 49],
                ],
                [
                    ["if", 2, 50, 65, 66],
                    ["add", 50],
                ],
                [
                    ["if", 2, 67, 68],
                    ["add", 50],
                ],
                [
                    ["if", 2, 69],
                    ["add", 51],
                ],
                [
                    ["if", 2, 70],
                    ["add", 52],
                ],
                [
                    ["if", 2, 71],
                    ["add", 53],
                ],
                [
                    ["if", 0, 72],
                    ["add", 106],
                ],
            ],
        },
        runtime: [
            [
                50,
                "__hjtc", [46, "a"],
                [52, "b", ["require", "createArgumentsQueue"]],
                [52, "c", ["require", "encodeUriComponent"]],
                [52, "d", ["require", "injectScript"]],
                [52, "e", ["require", "makeString"]],
                [52, "f", ["require", "setInWindow"]],
                ["b", "hj", "hj.q"],
                [52, "g", [17, [15, "a"], "hotjar_site_id"]],
                [
                    "f",
                    "_hjSettings", [8, "hjid", [15, "g"], "hjsv", 7, "scriptSource", "gtm"],
                ],
                [
                    "d", [
                        0, [0, "https://static.hotjar.com/c/hotjar-", ["c", ["e", [15, "g"]]]],
                        ".js?sv=7",
                    ],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"],
                ],
            ],
        ],
        permissions: {
            __hjtc: {
                access_globals: {
                    keys: [
                        { key: "hj", read: true, write: true, execute: false },
                        { key: "hj.q", read: true, write: true, execute: false },
                        { key: "_hjSettings", read: true, write: true, execute: false },
                    ],
                },
                inject_script: { urls: ["https://static.hotjar.com/c/hotjar-*"] },
            },
        },

        security_groups: {
            nonGoogleScripts: ["__hjtc"],
        },
    };

    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var l,
        aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
            };
        },
        ca = function(a) {
            return (a.raw = a);
        },
        da = function(a) {
            var b =
                "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : { next: aa(a) };
        },
        ea =
        "function" == typeof Object.create ?
        Object.create :
        function(a) {
            var b = function() {};
            b.prototype = a;
            return new b();
        },
        fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = { a: !0 },
                ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.a;
                break a;
            } catch (a) {}
            ha = !1;
        }
        fa = ha ?

            function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a;
            } :
            null;
    }
    var ka = fa,
        la = function(a, b) {
            a.prototype = ea(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d);
                        } else a[c] = b[c];
            a.$k = b.prototype;
        },
        ma = this || self,
        na = function(a) {
            return a;
        };
    var oa = function(a, b) {
        this.g = a;
        this.o = b;
    };
    var pa = function(a) {
            return (
                ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
                ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
            );
        },
        ra = function() {
            this.C = {};
            this.s = !1;
            this.I = {};
        },
        sa = function(a, b) {
            var c = [],
                d;
            for (d in a.C)
                if (a.C.hasOwnProperty(d))
                    switch (((d = d.substr(5)), b)) {
                        case 1:
                            c.push(d);
                            break;
                        case 2:
                            c.push(a.get(d));
                            break;
                        case 3:
                            c.push([d, a.get(d)]);
                    }
            return c;
        };
    ra.prototype.get = function(a) {
        return this.C["dust." + a];
    };
    ra.prototype.set = function(a, b) {
        this.s || ((a = "dust." + a), this.I.hasOwnProperty(a) || (this.C[a] = b));
    };
    ra.prototype.has = function(a) {
        return this.C.hasOwnProperty("dust." + a);
    };
    var ta = function(a, b) {
        b = "dust." + b;
        a.s || a.I.hasOwnProperty(b) || delete a.C[b];
    };
    ra.prototype.Lb = function() {
        this.s = !0;
    };
    var ua = function(a) {
        this.o = new ra();
        this.g = [];
        this.s = !1;
        a = a || [];
        for (var b in a)
            a.hasOwnProperty(b) &&
            (pa(b) ? (this.g[Number(b)] = a[Number(b)]) : this.o.set(b, a[b]));
    };
    l = ua.prototype;
    l.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.g.length; c++) {
            var d = this.g[c];
            null === d || void 0 === d ?
                b.push("") :
                d instanceof ua ?
                ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop()) :
                b.push(d.toString());
        }
        return b.join(",");
    };
    l.set = function(a, b) {
        if (!this.s)
            if ("length" === a) {
                if (!pa(b))
                    throw Error("RangeError: Length property must be a valid integer.");
                this.g.length = Number(b);
            } else pa(a) ? (this.g[Number(a)] = b) : this.o.set(a, b);
    };
    l.get = function(a) {
        return "length" === a ?
            this.length() :
            pa(a) ?
            this.g[Number(a)] :
            this.o.get(a);
    };
    l.length = function() {
        return this.g.length;
    };
    l.Kb = function() {
        for (var a = sa(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + "");
        return new ua(a);
    };
    var va = function(a, b) {
        pa(b) ? delete a.g[Number(b)] : ta(a.o, b);
    };
    l = ua.prototype;
    l.pop = function() {
        return this.g.pop();
    };
    l.push = function(a) {
        return this.g.push.apply(this.g, Array.prototype.slice.call(arguments));
    };
    l.shift = function() {
        return this.g.shift();
    };
    l.splice = function(a, b, c) {
        return new ua(this.g.splice.apply(this.g, arguments));
    };
    l.unshift = function(a) {
        return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments));
    };
    l.has = function(a) {
        return (pa(a) && this.g.hasOwnProperty(a)) || this.o.has(a);
    };
    l.Lb = function() {
        this.s = !0;
        Object.freeze(this.g);
        this.o.Lb();
    };
    var wa = function() {
        function a(f, g) {
            if (b[f]) {
                if (b[f].fe + g > b[f].max) throw Error("Quota exceeded");
                b[f].fe += g;
            }
        }
        var b = {},
            c = void 0,
            d = void 0,
            e = {
                Zj: function(f) {
                    c = f;
                },
                hh: function() {
                    c && a(c, 1);
                },
                bk: function(f) {
                    d = f;
                },
                Mb: function(f) {
                    d && a(d, f);
                },
                Bk: function(f, g) {
                    b[f] = b[f] || { fe: 0 };
                    b[f].max = g;
                },
                zj: function(f) {
                    return (b[f] && b[f].fe) || 0;
                },
                reset: function() {
                    b = {};
                },
                kj: a,
            };
        e.onFnConsume = e.Zj;
        e.consumeFn = e.hh;
        e.onStorageConsume = e.bk;
        e.consumeStorage = e.Mb;
        e.setMax = e.Bk;
        e.getConsumed = e.zj;
        e.reset = e.reset;
        e.consume = e.kj;
        return e;
    };
    var xa = function(a, b) {
        this.s = a;
        this.R = function(c, d, e) {
            return c.apply(d, e);
        };
        this.C = b;
        this.o = new ra();
        this.g = this.I = void 0;
    };
    xa.prototype.add = function(a, b) {
        ya(this, a, b, !1);
    };
    var ya = function(a, b, c, d) {
        if (!a.o.s)
            if (
                (a.s.Mb(
                        ("string" === typeof b ? b.length : 1) +
                        ("string" === typeof c ? c.length : 1)
                    ),
                    d)
            ) {
                var e = a.o;
                e.set(b, c);
                e.I["dust." + b] = !0;
            } else a.o.set(b, c);
    };
    xa.prototype.set = function(a, b) {
        this.o.s ||
            (!this.o.has(a) && this.C && this.C.has(a) ?
                this.C.set(a, b) :
                (this.s.Mb(
                        ("string" === typeof a ? a.length : 1) +
                        ("string" === typeof b ? b.length : 1)
                    ),
                    this.o.set(a, b)));
    };
    xa.prototype.get = function(a) {
        return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0;
    };
    xa.prototype.has = function(a) {
        return !!this.o.has(a) || !(!this.C || !this.C.has(a));
    };
    var za = function(a) {
        var b = new xa(a.s, a);
        a.I && (b.I = a.I);
        b.R = a.R;
        b.g = a.g;
        return b;
    };
    var Aa = function() {},
        Ca = function(a) {
            return "function" === typeof a;
        },
        m = function(a) {
            return "string" === typeof a;
        },
        Da = function(a) {
            return "number" === typeof a && !isNaN(a);
        },
        Ea = Array.isArray,
        Ga = function(a, b) {
            if (a && Ea(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c];
        },
        Ha = function(a, b) {
            if (!Da(a) || !Da(b) || a > b)(a = 0), (b = 2147483647);
            return Math.floor(Math.random() * (b - a + 1) + a);
        },
        Ka = function(a, b) {
            for (var c = new Ja(), d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1;
        },
        La = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
        },
        Ma = function(a) {
            return (!!a &&
                ("[object Arguments]" === Object.prototype.toString.call(a) ||
                    Object.prototype.hasOwnProperty.call(a, "callee"))
            );
        },
        Na = function(a) {
            return Math.round(Number(a)) || 0;
        },
        Oa = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a;
        },
        Pa = function(a) {
            var b = [];
            if (Ea(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b;
        },
        Ra = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : "";
        },
        Sa = function() {
            return new Date(Date.now());
        },
        Ta = function() {
            return Sa().getTime();
        },
        Ja = function() {
            this.prefix = "gtm.";
            this.values = {};
        };
    Ja.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b;
    };
    Ja.prototype.get = function(a) {
        return this.values[this.prefix + a];
    };
    var Ua = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c;
        },
        Va = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c();
                    } catch (d) {}
                }
            };
        },
        Wa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        },
        Xa = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1;
        },
        Ya = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++)
                c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c;
        },
        Za = function(a, b) {
            var c = z;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <= b.indexOf(d)) return;
            }
            return d;
        },
        $a = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
                d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c;
        },
        ab = /^\w{1,9}$/,
        bb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            La(a, function(d, e) {
                ab.test(d) && e && c.push(d);
            });
            return c.join(b);
        },
        cb = function(a, b) {
            function c() {
                ++d === b && (e(), (e = null), (c.done = !0));
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c;
        };
    var db = function(a, b) {
        ra.call(this);
        this.R = a;
        this.cb = b;
    };
    la(db, ra);
    db.prototype.toString = function() {
        return this.R;
    };
    db.prototype.Kb = function() {
        return new ua(sa(this, 1));
    };
    db.prototype.g = function(a, b) {
        a.s.hh();
        return this.cb.apply(
            new eb(this, a),
            Array.prototype.slice.call(arguments, 1)
        );
    };
    db.prototype.o = function(a, b) {
        try {
            return this.g.apply(this, Array.prototype.slice.call(arguments, 0));
        } catch (c) {}
    };
    var gb = function(a, b) {
            for (
                var c, d = 0; d < b.length && !((c = fb(a, b[d])), c instanceof oa); d++
            );
            return c;
        },
        fb = function(a, b) {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof db))
                    throw Error("Attempting to execute non-function " + b[0] + ".");
                return c.g.apply(c, [a].concat(b.slice(1)));
            } catch (e) {
                var d = a.I;
                d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
                throw e;
            }
        },
        eb = function(a, b) {
            this.o = a;
            this.g = b;
        },
        G = function(a, b) {
            return Ea(b) ? fb(a.g, b) : b;
        },
        I = function(a) {
            return a.o.R;
        };
    var hb = function() {
        ra.call(this);
    };
    la(hb, ra);
    hb.prototype.Kb = function() {
        return new ua(sa(this, 1));
    };
    var ib = {
        control: function(a, b) {
            return new oa(a, G(this, b));
        },
        fn: function(a, b, c) {
            var d = this.g,
                e = G(this, b);
            if (!(e instanceof ua))
                throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.g.s.Mb(a.length + f.length);
            return new db(
                a,
                (function() {
                    return function(g) {
                        var h = za(d);
                        void 0 === h.g && (h.g = this.g.g);
                        for (
                            var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++
                        )
                            if (((k[n] = G(this, k[n])), k[n] instanceof oa)) return k[n];
                        for (var p = e.get("length"), q = 0; q < p; q++)
                            q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
                        h.add("arguments", new ua(k));
                        var r = gb(h, f);
                        if (r instanceof oa) return "return" === r.g ? r.o : r;
                    };
                })()
            );
        },
        list: function(a) {
            var b = this.g.s;
            b.Mb(arguments.length);
            for (var c = new ua(), d = 0; d < arguments.length; d++) {
                var e = G(this, arguments[d]);
                "string" === typeof e && b.Mb(e.length ? e.length - 1 : 0);
                c.push(e);
            }
            return c;
        },
        map: function(a) {
            for (
                var b = this.g.s, c = new hb(), d = 0; d < arguments.length - 1; d += 2
            ) {
                var e = G(this, arguments[d]) + "",
                    f = G(this, arguments[d + 1]),
                    g = e.length;
                g += "string" === typeof f ? f.length : 1;
                b.Mb(g);
                c.set(e, f);
            }
            return c;
        },
        undefined: function() {},
    };
    var jb = function() {
            this.s = wa();
            this.g = new xa(this.s);
        },
        kb = function(a, b, c) {
            var d = new db(b, c);
            d.Lb();
            a.g.set(b, d);
        },
        lb = function(a, b, c) {
            ib.hasOwnProperty(b) && kb(a, c || b, ib[b]);
        };
    jb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.o(c);
    };
    jb.prototype.o = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = fb(this.g, arguments[c]);
        return b;
    };
    jb.prototype.C = function(a, b) {
        var c = za(this.g);
        c.g = a;
        for (var d, e = 1; e < arguments.length; e++) d = d = fb(c, arguments[e]);
        return d;
    };
    var mb,
        nb = function() {
            if (void 0 === mb) {
                var a = null,
                    b = ma.trustedTypes;
                if (b && b.createPolicy) {
                    try {
                        a = b.createPolicy("goog#html", {
                            createHTML: na,
                            createScript: na,
                            createScriptURL: na,
                        });
                    } catch (c) {
                        ma.console && ma.console.error(c.message);
                    }
                    mb = a;
                } else mb = a;
            }
            return mb;
        };
    var pb = function(a, b) {
        this.g = b === ob ? a : "";
    };
    pb.prototype.toString = function() {
        return this.g + "";
    };
    var qb = function(a) {
            return a instanceof pb && a.constructor === pb ?
                a.g :
                "type_error:TrustedResourceUrl";
        },
        ob = {},
        rb = function(a) {
            var b = nb(),
                c = b ? b.createScriptURL(a) : a;
            return new pb(c, ob);
        };
    var sb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function tb() {
        var a = ma.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b;
        }
        return "";
    }

    function ub(a) {
        return -1 != tb().indexOf(a);
    }
    var vb = {},
        wb = function(a, b, c) {
            this.g = c === vb ? a : "";
        };
    wb.prototype.toString = function() {
        return this.g.toString();
    };
    var xb = function(a) {
            return a instanceof wb && a.constructor === wb ?
                a.g :
                "type_error:SafeHtml";
        },
        yb = function(a) {
            var b = nb(),
                c = b ? b.createHTML(a) : a;
            return new wb(c, null, vb);
        };
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var zb = {};
    var Ab = function() {},
        Bb = function(a) {
            this.g = a;
        };
    la(Bb, Ab);
    Bb.prototype.toString = function() {
        return this.g;
    };

    function Cb(a, b) {
        var c = [new Bb(Db[0].toLowerCase(), zb)];
        if (0 === c.length) throw Error("No prefixes are provided");
        var d = c.map(function(f) {
                var g;
                if (f instanceof Bb) g = f.g;
                else throw Error("");
                return g;
            }),
            e = b.toLowerCase();
        if (
            d.every(function(f) {
                return 0 !== e.indexOf(f);
            })
        )
            throw Error(
                'Attribute "' + b + '" does not match any of the allowed prefixes.'
            );
        a.setAttribute(b, "true");
    }

    function Eb(a) {
        if ("script" === a.tagName.toLowerCase())
            throw Error("Use setTextContent with a SafeScript.");
        if ("style" === a.tagName.toLowerCase())
            throw Error("Use setTextContent with a SafeStyleSheet.");
    }
    var z = window,
        J = document,
        Fb = navigator,
        Gb = J.currentScript && J.currentScript.src,
        Hb = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a];
        },
        Ib = function(a, b) {
            b &&
                (a.addEventListener ?
                    (a.onload = b) :
                    (a.onreadystatechange = function() {
                        a.readyState in { loaded: 1, complete: 1 } &&
                            ((a.onreadystatechange = null), b());
                    }));
        },
        Jb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
        Kb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };

    function Lb(a, b, c) {
        b &&
            La(b, function(d, e) {
                d = d.toLowerCase();
                c.hasOwnProperty(d) || a.setAttribute(d, e);
            });
    }
    var Mb = function(a, b, c, d) {
            var e = J.createElement("script");
            Lb(e, d, Jb);
            e.type = "text/javascript";
            e.async = !0;
            var f = rb(a);
            e.src = qb(f);
            var g,
                h,
                k,
                n =
                null ==
                (k = (h = ((e.ownerDocument && e.ownerDocument.defaultView) || window)
                    .document).querySelector) ?
                void 0 :
                k.call(h, "script[nonce]");
            (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") &&
            e.setAttribute("nonce", g);
            Ib(e, b);
            c && (e.onerror = c);
            var p = J.getElementsByTagName("script")[0] || J.body || J.head;
            p.parentNode.insertBefore(e, p);
            return e;
        },
        Nb = function() {
            if (Gb) {
                var a = Gb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3;
            }
            return 1;
        },
        Ob = function(a, b, c, d, e) {
            var f = e,
                g = !1;
            f || ((f = J.createElement("iframe")), (g = !0));
            Lb(f, c, Kb);
            d &&
                La(d, function(k, n) {
                    f.dataset[k] = n;
                });
            f.height = "0";
            f.width = "0";
            f.style.display = "none";
            f.style.visibility = "hidden";
            if (g) {
                var h = (J.body && J.body.lastChild) || J.body || J.head;
                h.parentNode.insertBefore(f, h);
            }
            Ib(f, b);
            void 0 !== a && (f.src = a);
            return f;
        },
        Pb = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b();
            };
            d.onerror = function() {
                d.onerror = null;
                c && c();
            };
            d.src = a;
            return d;
        },
        Qb = function(a, b, c, d) {
            a.addEventListener ?
                a.addEventListener(b, c, !!d) :
                a.attachEvent && a.attachEvent("on" + b, c);
        },
        Rb = function(a, b, c) {
            a.removeEventListener ?
                a.removeEventListener(b, c, !1) :
                a.detachEvent && a.detachEvent("on" + b, c);
        },
        K = function(a) {
            z.setTimeout(a, 0);
        },
        Sb = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ?
                a.attributes[b].value :
                null;
        },
        Tb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b;
        },
        Ub = function(a) {
            var b = J.createElement("div"),
                c = b,
                d = yb("A<div>" + a + "</div>");
            void 0 !== c.tagName && Eb(c);
            c.innerHTML = d instanceof wb ? xb(d) : xb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e;
        },
        Vb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement;
            }
            return null;
        },
        Wb = function(a) {
            var b;
            try {
                b = Fb.sendBeacon && Fb.sendBeacon(a);
            } catch (c) {}
            b || Pb(a);
        },
        Yb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c;
        },
        Zb = function(a) {
            var b = J.featurePolicy;
            return b && Ca(b.allowsFeature) ? b.allowsFeature(a) : !1;
        };
    var $b = function(a, b) {
            return G(this, a) && G(this, b);
        },
        ac = function(a, b) {
            return G(this, a) === G(this, b);
        },
        bc = function(a, b) {
            return G(this, a) || G(this, b);
        },
        cc = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            return -1 < String(a).indexOf(String(b));
        },
        dc = function(a, b) {
            a = String(G(this, a));
            b = String(G(this, b));
            return a.substring(0, b.length) === b;
        },
        ec = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            switch (a) {
                case "pageLocation":
                    var c = z.location.href;
                    b instanceof hb &&
                        b.get("stripProtocol") &&
                        (c = c.replace(/^https?:\/\//, ""));
                    return c;
            }
        };
    var gc = function() {
        this.g = new jb();
        fc(this);
    };
    gc.prototype.execute = function(a) {
        return this.g.o(a);
    };
    var fc = function(a) {
        lb(a.g, "map");
        var b = function(c, d) {
            kb(a.g, c, d);
        };
        b("and", $b);
        b("contains", cc);
        b("equals", ac);
        b("or", bc);
        b("startsWith", dc);
        b("variable", ec);
    };
    var hc = function(a) {
        if (a instanceof hc) return a;
        this.ib = a;
    };
    hc.prototype.toString = function() {
        return String(this.ib);
    };
    var jc = function(a) {
        ra.call(this);
        this.g = a;
        this.set("then", ic(this));
        this.set("catch", ic(this, !0));
        this.set("finally", ic(this, !1, !0));
    };
    la(jc, hb);
    var ic = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new db("", function(d, e) {
            b && ((e = d), (d = void 0));
            c && (e = d);
            d instanceof db || (d = void 0);
            e instanceof db || (e = void 0);
            var f = za(this.g),
                g = function(k) {
                    return function(n) {
                        return c ? (k.g(f), a.g) : k.g(f, n);
                    };
                },
                h = a.g.then(d && g(d), e && g(e));
            return new jc(h);
        });
    };
    /*
    jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var kc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        lc = function(a) {
            if (null == a) return String(a);
            var b = kc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object";
        },
        mc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b);
        },
        nc = function(a) {
            if (!a || "object" != lc(a) || a.nodeType || a == a.window) return !1;
            try {
                if (
                    a.constructor &&
                    !mc(a, "constructor") &&
                    !mc(a.constructor.prototype, "isPrototypeOf")
                )
                    return !1;
            } catch (c) {
                return !1;
            }
            for (var b in a);
            return void 0 === b || mc(a, b);
        },
        oc = function(a, b) {
            var c = b || ("array" == lc(a) ? [] : {}),
                d;
            for (d in a)
                if (mc(a, d)) {
                    var e = a[d];
                    "array" == lc(e) ?
                        ("array" != lc(c[d]) && (c[d] = []), (c[d] = oc(e, c[d]))) :
                        nc(e) ?
                        (nc(c[d]) || (c[d] = {}), (c[d] = oc(e, c[d]))) :
                        (c[d] = e);
                }
            return c;
        };
    var qc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, k) {
                    for (var n = sa(h, 1), p = 0; p < n.length; p++)
                        k[n[p]] = g(h.get(n[p]));
                },
                g = function(h) {
                    var k = d.indexOf(h);
                    if (-1 < k) return e[k];
                    if (h instanceof ua) {
                        var n = [];
                        d.push(h);
                        e.push(n);
                        for (var p = h.Kb(), q = 0; q < p.length(); q++)
                            n[p.get(q)] = g(h.get(p.get(q)));
                        return n;
                    }
                    if (h instanceof jc) return h.g;
                    if (h instanceof hb) {
                        var r = {};
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r;
                    }
                    if (h instanceof db) {
                        var u = function() {
                            for (
                                var v = Array.prototype.slice.call(arguments, 0), x = 0; x < v.length; x++
                            )
                                v[x] = pc(v[x], b, c);
                            var y = b ? b.s : wa(),
                                w = new xa(y);
                            b && (w.g = b.g);
                            return g(h.g.apply(h, [w].concat(v)));
                        };
                        d.push(h);
                        e.push(u);
                        f(h, u);
                        return u;
                    }
                    var t = !1;
                    switch (c) {
                        case 1:
                            t = !0;
                            break;
                        case 2:
                            t = !1;
                            break;
                        case 3:
                            t = !1;
                            break;
                        default:
                    }
                    if (h instanceof hc && t) return h.ib;
                    switch (typeof h) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return h;
                        case "object":
                            if (null === h) return null;
                    }
                };
            return g(a);
        },
        pc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, k) {
                    for (var n in h) h.hasOwnProperty(n) && k.set(n, g(h[n]));
                },
                g = function(h) {
                    var k = d.indexOf(h);
                    if (-1 < k) return e[k];
                    if (Ea(h) || Ma(h)) {
                        var n = new ua([]);
                        d.push(h);
                        e.push(n);
                        for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                        return n;
                    }
                    if (nc(h)) {
                        var q = new hb();
                        d.push(h);
                        e.push(q);
                        f(h, q);
                        return q;
                    }
                    if ("function" === typeof h) {
                        var r = new db("", function(w) {
                            for (
                                var A = Array.prototype.slice.call(arguments, 0), B = 0; B < A.length; B++
                            )
                                A[B] = qc(G(this, A[B]), b, c);
                            return g((0, this.g.R)(h, h, A));
                        });
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r;
                    }
                    var x = typeof h;
                    if (null === h || "string" === x || "number" === x || "boolean" === x)
                        return h;
                    var y = !1;
                    switch (c) {
                        case 1:
                            y = !0;
                            break;
                        case 2:
                            y = !1;
                            break;
                        default:
                    }
                    if (void 0 !== h && y) return new hc(h);
                };
            return g(a);
        };
    var rc = function(a) {
            for (var b = [], c = 0; c < a.length(); c++)
                a.has(c) && (b[c] = a.get(c));
            return b;
        },
        sc = function(a) {
            if (void 0 === a || Ea(a) || nc(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0;
            }
            return !1;
        };
    var tc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
            " "
        ),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof ua)
                    for (var f = arguments[e], g = 0; g < f.length(); g++)
                        c.push(f.get(g));
                else c.push(arguments[e]);
            return new ua(c);
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
            return !0;
        },
        filter: function(a, b) {
            for (
                var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++
            )
                this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
            return new ua(d);
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                this.has(d) && b.g(a, this.get(d), d, this);
        },
        hasOwnProperty: function(a, b) {
            return this.has(b);
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) && this.get(f) === b) return f;
            return -1;
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b);
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1;
        },
        map: function(a, b) {
            for (
                var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++
            )
                this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
            return new ua(d);
        },
        pop: function() {
            return this.pop();
        },
        push: function(a, b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e,
                f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break;
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++)
                this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e;
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e,
                f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break;
                    }
                if (g > d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--)
                this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e;
        },
        reverse: function() {
            for (var a = rc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
                a.hasOwnProperty(b) ? this.set(c, a[b]) : va(this, c);
            return this;
        },
        shift: function() {
            return this.shift();
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new ua(e);
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
            return !1;
        },
        sort: function(a, b) {
            var c = rc(this);
            void 0 === b ?
                c.sort() :
                c.sort(function(e, f) {
                    return Number(b.g(a, e, f));
                });
            for (var d = 0; d < c.length; d++)
                c.hasOwnProperty(d) ? this.set(d, c[d]) : va(this, d);
            return this;
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(
                this,
                Array.prototype.splice.call(arguments, 1, arguments.length - 1)
            );
        },
        toString: function() {
            return this.toString();
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
        },
    };
    var uc =
        "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(
            " "
        ),
        vc = new oa("break"),
        wc = new oa("continue"),
        xc = function(a, b) {
            return G(this, a) + G(this, b);
        },
        yc = function(a, b) {
            return G(this, a) && G(this, b);
        },
        zc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (!(c instanceof ua))
                throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a)
                throw Error("TypeError: Can't read property " + b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) {
                if ("toString" === b) {
                    if (d && c.length()) {
                        var e = qc(c.get(0));
                        try {
                            return a.toString(e);
                        } catch (q) {}
                    }
                    return a.toString();
                }
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (0 <= uc.indexOf(b)) {
                    var f = qc(c);
                    return pc(a[b].apply(a, f), this.g);
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (a instanceof ua) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof db) {
                        var h = rc(c);
                        h.unshift(this.g);
                        return g.g.apply(g, h);
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if (0 <= tc.supportedMethods.indexOf(b)) {
                    var k = rc(c);
                    k.unshift(this.g);
                    return tc[b].apply(a, k);
                }
            }
            if (a instanceof db || a instanceof hb) {
                if (a.has(b)) {
                    var n = a.get(b);
                    if (n instanceof db) {
                        var p = rc(c);
                        p.unshift(this.g);
                        return n.g.apply(n, p);
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof db ? a.R : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, rc(c));
            }
            if (a instanceof hc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" + b + "' property.");
        },
        Ac = function(a, b) {
            a = G(this, a);
            if ("string" !== typeof a)
                throw Error("Invalid key name given for assignment.");
            var c = this.g;
            if (!c.has(a))
                throw Error("Attempting to assign to undefined value " + b);
            var d = G(this, b);
            c.set(a, d);
            return d;
        },
        Dc = function(a) {
            var b = za(this.g),
                c = gb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof oa) return c;
        },
        Ec = function() {
            return vc;
        },
        Fc = function(a) {
            for (var b = G(this, a), c = 0; c < b.length; c++) {
                var d = G(this, b[c]);
                if (d instanceof oa) return d;
            }
        },
        Gc = function(a) {
            for (var b = this.g, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = G(this, arguments[c + 1]);
                    ya(b, d, e, !0);
                }
            }
        },
        Hc = function() {
            return wc;
        },
        Ic = function(a, b, c) {
            var d = new ua();
            b = G(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(
                Array.prototype.splice.call(arguments, 2, arguments.length - 2)
            );
            this.g.add(a, G(this, f));
        },
        Jc = function(a, b) {
            return G(this, a) / G(this, b);
        },
        Kc = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            var c = a instanceof hc,
                d = b instanceof hc;
            return c || d ? (c && d ? a.ib == b.ib : !1) : a == b;
        },
        Lc = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = G(this, arguments[c]);
            return b;
        };

    function Mc(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = gb(f, d);
            if (g instanceof oa) {
                if ("break" === g.g) break;
                if ("return" === g.g) return g;
            }
        }
    }

    function Nc(a, b, c) {
        if ("string" === typeof b)
            return Mc(
                a,
                function() {
                    return b.length;
                },
                function(f) {
                    return f;
                },
                c
            );
        if (b instanceof hb || b instanceof ua || b instanceof db) {
            var d = b.Kb(),
                e = d.length();
            return Mc(
                a,
                function() {
                    return e;
                },
                function(f) {
                    return d.get(f);
                },
                c
            );
        }
    }
    var Oc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Nc(
                function(e) {
                    d.set(a, e);
                    return d;
                },
                b,
                c
            );
        },
        Pc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Nc(
                function(e) {
                    var f = za(d);
                    ya(f, a, e, !0);
                    return f;
                },
                b,
                c
            );
        },
        Qc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Nc(
                function(e) {
                    var f = za(d);
                    f.add(a, e);
                    return f;
                },
                b,
                c
            );
        },
        Sc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Rc(
                function(e) {
                    d.set(a, e);
                    return d;
                },
                b,
                c
            );
        },
        Tc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Rc(
                function(e) {
                    var f = za(d);
                    ya(f, a, e, !0);
                    return f;
                },
                b,
                c
            );
        },
        Uc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Rc(
                function(e) {
                    var f = za(d);
                    f.add(a, e);
                    return f;
                },
                b,
                c
            );
        };

    function Rc(a, b, c) {
        if ("string" === typeof b)
            return Mc(
                a,
                function() {
                    return b.length;
                },
                function(d) {
                    return b[d];
                },
                c
            );
        if (b instanceof ua)
            return Mc(
                a,
                function() {
                    return b.length();
                },
                function(d) {
                    return b.get(d);
                },
                c
            );
        throw new TypeError("The value is not iterable.");
    }
    var Vc = function(a, b, c, d) {
            function e(p, q) {
                for (var r = 0; r < f.length(); r++) {
                    var u = f.get(r);
                    q.add(u, p.get(u));
                }
            }
            var f = G(this, a);
            if (!(f instanceof ua))
                throw Error(
                    "TypeError: Non-List argument given to ForLet instruction."
                );
            var g = this.g;
            d = G(this, d);
            var h = za(g);
            for (e(g, h); fb(h, b);) {
                var k = gb(h, d);
                if (k instanceof oa) {
                    if ("break" === k.g) break;
                    if ("return" === k.g) return k;
                }
                var n = za(g);
                e(h, n);
                fb(n, c);
                h = n;
            }
        },
        Wc = function(a) {
            a = G(this, a);
            var b = this.g,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a);
        },
        Xc = function(a, b) {
            var c;
            a = G(this, a);
            b = G(this, b);
            if (void 0 === a || null === a)
                throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof hb || a instanceof ua || a instanceof db) c = a.get(b);
            else if ("string" === typeof a)
                "length" === b ? (c = a.length) : pa(b) && (c = a[b]);
            else if (a instanceof hc) return;
            return c;
        },
        Yc = function(a, b) {
            return G(this, a) > G(this, b);
        },
        Zc = function(a, b) {
            return G(this, a) >= G(this, b);
        },
        $c = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            a instanceof hc && (a = a.ib);
            b instanceof hc && (b = b.ib);
            return a === b;
        },
        ad = function(a, b) {
            return !$c.call(this, a, b);
        },
        bd = function(a, b, c) {
            var d = [];
            G(this, a) ? (d = G(this, b)) : c && (d = G(this, c));
            var e = gb(this.g, d);
            if (e instanceof oa) return e;
        },
        dd = function(a, b) {
            return G(this, a) < G(this, b);
        },
        ed = function(a, b) {
            return G(this, a) <= G(this, b);
        },
        fd = function(a, b) {
            return G(this, a) % G(this, b);
        },
        gd = function(a, b) {
            return G(this, a) * G(this, b);
        },
        hd = function(a) {
            return -G(this, a);
        },
        id = function(a) {
            return !G(this, a);
        },
        jd = function(a, b) {
            return !Kc.call(this, a, b);
        },
        kd = function() {
            return null;
        },
        ld = function(a, b) {
            return G(this, a) || G(this, b);
        },
        md = function(a, b) {
            var c = G(this, a);
            G(this, b);
            return c;
        },
        nd = function(a) {
            return G(this, a);
        },
        od = function(a) {
            return Array.prototype.slice.apply(arguments);
        },
        pd = function(a) {
            return new oa("return", G(this, a));
        },
        qd = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (null === a || void 0 === a)
                throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof db || a instanceof ua || a instanceof hb) && a.set(b, c);
            return c;
        },
        rd = function(a, b) {
            return G(this, a) - G(this, b);
        },
        sd = function(a, b, c) {
            a = G(this, a);
            var d = G(this, b),
                e = G(this, c);
            if (!Ea(d) || !Ea(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === G(this, d[h]))
                    if (((f = G(this, e[h])), f instanceof oa)) {
                        var k = f.g;
                        if ("break" === k) return;
                        if ("return" === k || "continue" === k) return f;
                    } else g = !0;
            if (
                e.length === d.length + 1 &&
                ((f = G(this, e[e.length - 1])),
                    f instanceof oa && ("return" === f.g || "continue" === f.g))
            )
                return f;
        },
        td = function(a, b, c) {
            return G(this, a) ? G(this, b) : G(this, c);
        },
        ud = function(a) {
            a = G(this, a);
            return a instanceof db ? "function" : typeof a;
        },
        vd = function(a) {
            for (var b = this.g, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0);
            }
        },
        wd = function(a, b, c, d) {
            var e = G(this, d);
            if (G(this, c)) {
                var f = gb(this.g, e);
                if (f instanceof oa) {
                    if ("break" === f.g) return;
                    if ("return" === f.g) return f;
                }
            }
            for (; G(this, a);) {
                var g = gb(this.g, e);
                if (g instanceof oa) {
                    if ("break" === g.g) break;
                    if ("return" === g.g) return g;
                }
                G(this, b);
            }
        },
        xd = function(a) {
            return ~Number(G(this, a));
        },
        yd = function(a, b) {
            return Number(G(this, a)) << Number(G(this, b));
        },
        Bd = function(a, b) {
            return Number(G(this, a)) >> Number(G(this, b));
        },
        Cd = function(a, b) {
            return Number(G(this, a)) >>> Number(G(this, b));
        },
        Dd = function(a, b) {
            return Number(G(this, a)) & Number(G(this, b));
        },
        Ed = function(a, b) {
            return Number(G(this, a)) ^ Number(G(this, b));
        },
        Fd = function(a, b) {
            return Number(G(this, a)) | Number(G(this, b));
        };
    var Hd = function() {
        this.g = new jb();
        Gd(this);
    };
    Hd.prototype.execute = function(a) {
        return Id(this.g.o(a));
    };
    var Jd = function(a, b, c) {
            return Id(a.g.C(b, c));
        },
        Gd = function(a) {
            var b = function(d, e) {
                lb(a.g, d, String(e));
            };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) {
                kb(a.g, String(d), e);
            };
            c(0, xc);
            c(1, yc);
            c(2, zc);
            c(3, Ac);
            c(53, Dc);
            c(4, Ec);
            c(5, Fc);
            c(52, Gc);
            c(6, Hc);
            c(9, Fc);
            c(50, Ic);
            c(10, Jc);
            c(12, Kc);
            c(13, Lc);
            c(47, Oc);
            c(54, Pc);
            c(55, Qc);
            c(63, Vc);
            c(64, Sc);
            c(65, Tc);
            c(66, Uc);
            c(15, Wc);
            c(16, Xc);
            c(17, Xc);
            c(18, Yc);
            c(19, Zc);
            c(20, $c);
            c(21, ad);
            c(22, bd);
            c(23, dd);
            c(24, ed);
            c(25, fd);
            c(26, gd);
            c(27, hd);
            c(28, id);
            c(29, jd);
            c(45, kd);
            c(30, ld);
            c(32, md);
            c(33, md);
            c(34, nd);
            c(35, nd);
            c(46, od);
            c(36, pd);
            c(43, qd);
            c(37, rd);
            c(38, sd);
            c(39, td);
            c(40, ud);
            c(41, vd);
            c(42, wd);
            c(58, xd);
            c(57, yd);
            c(60, Bd);
            c(61, Cd);
            c(56, Dd);
            c(62, Ed);
            c(59, Fd);
        };

    function Id(a) {
        if (
            a instanceof oa ||
            a instanceof db ||
            a instanceof ua ||
            a instanceof hb ||
            a instanceof hc ||
            null === a ||
            void 0 === a ||
            "string" === typeof a ||
            "number" === typeof a ||
            "boolean" === typeof a
        )
            return a;
    }
    var Kd = (function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b;
                },
            };
        };
        return {
            ai: a("consent"),
            Be: a("consent_always_fire"),
            cg: a("convert_case_to"),
            dg: a("convert_false_to"),
            eg: a("convert_null_to"),
            fg: a("convert_true_to"),
            gg: a("convert_undefined_to"),
            Lk: a("debug_mode_metadata"),
            Jb: a("function"),
            hf: a("instance_name"),
            Pi: a("live_only"),
            Qi: a("malware_disabled"),
            Ri: a("metadata"),
            Wi: a("original_activity_id"),
            Qk: a("original_vendor_template_id"),
            Pk: a("once_on_load"),
            Vi: a("once_per_event"),
            Mg: a("once_per_load"),
            Sk: a("priority_override"),
            Tk: a("respected_consent_types"),
            Sg: a("setup_tags"),
            Ug: a("tag_id"),
            Vg: a("teardown_tags"),
        };
    })();
    var fe;
    var ge = [],
        he = [],
        ie = [],
        je = [],
        ke = [],
        le = {},
        me,
        ne,
        qe,
        re = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c;
        },
        se = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = le[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_"))
                        e && d && d.gh && d.gh(a[g]),
                        (f[void 0 !== e ? g : g.substr(4)] = a[g]);
                    else if (g === Kd.Be.toString() && a[g]) {}
            e && d && d.fh && (f.vtp_gtmCachedValues = d.fh);
            if (b) {
                if (null == b.name) {
                    var h;
                    a: {
                        var k = b.index;
                        if (null == k) h = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = ge[k];
                                    break;
                                case 1:
                                    n = je[k];
                                    break;
                                default:
                                    h = "";
                                    break a;
                            }
                            var p = n && n[Kd.hf];
                            h = p ? String(p) : "";
                        }
                    }
                    b.name = h;
                }
                e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
            }
            return void 0 !== e ? e(f) : fe(c, f, b);
        },
        ue = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = te(a[e], b, c));
            return d;
        },
        te = function(a, b, c) {
            if (Ea(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(te(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = ge[f];
                        if (!g || b.If(g)) return;
                        c[f] = !0;
                        var h = String(g[Kd.hf]);
                        try {
                            var k = ue(g, b, c);
                            k.vtp_gtmEventId = b.id;
                            b.priorityId && (k.vtp_gtmPriorityId = b.priorityId);
                            d = se(k, { event: b, index: f, type: 2, name: h });
                            qe && (d = qe.lj(d, k));
                        } catch (w) {
                            b.zh && b.zh(w, Number(f), h), (d = !1);
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2)
                            d[te(a[n], b, c)] = te(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = te(a[q], b, c);
                            ne && (p = p || r === ne.Ud);
                            d.push(r);
                        }
                        return ne && p ? ne.pj(d) : d.join("");
                    case "escape":
                        d = te(a[1], b, c);
                        if (ne && Ea(a[1]) && "macro" === a[1][0] && ne.Lj(a))
                            return ne.hk(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Ld[a[u]] && (d = Ld[a[u]](d));
                        return d;
                    case "tag":
                        var t = a[1];
                        if (!je[t])
                            throw Error("Unable to resolve tag reference " + t + ".");
                        return (d = { oh: a[2], index: t });
                    case "zb":
                        var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                        v["function"] = a[1];
                        var x = ve(v, b, c),
                            y = !!a[4];
                        return y || 2 !== x ? y !== (1 === x) : null;
                    default:
                        throw Error(
                            "Attempting to expand unknown Value type: " + a[0] + "."
                        );
                }
            }
            return a;
        },
        ve = function(a, b, c) {
            try {
                return me(ue(a, b, c));
            } catch (d) {
                JSON.stringify(a);
            }
            return 2;
        };
    var we = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.o = a;
        this.g = c;
    };
    la(we, Error);

    function xe(a, b) {
        if (Ea(a)) {
            Object.defineProperty(a, "context", { value: { line: b[0] } });
            for (var c = 1; c < a.length; c++) xe(a[c], b[c]);
        }
    }
    var ye = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.ck = a;
        this.o = b;
        this.g = [];
    };
    la(ye, Error);
    var Ae = function() {
        return function(a, b) {
            a instanceof ye || (a = new ye(a, ze));
            b && a.g.push(b);
            throw a;
        };
    };

    function ze(a) {
        if (!a.length) return a;
        a.push({ id: "main", line: 0 });
        for (var b = a.length - 1; 0 < b; b--) Da(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a;
    }
    var De = function(a) {
            function b(r) {
                for (var u = 0; u < r.length; u++) d[r[u]] = !0;
            }
            for (var c = [], d = [], e = Be(a), f = 0; f < he.length; f++) {
                var g = he[f],
                    h = Ce(g, e);
                if (h) {
                    for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
                    b(g.block || []);
                } else null === h && b(g.block || []);
            }
            for (var p = [], q = 0; q < je.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p;
        },
        Ce = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null;
            }
            for (var f = a.unless || [], g = 0; g < f.length; g++) {
                var h = b(f[g]);
                if (2 === h) return null;
                if (1 === h) return !1;
            }
            return !0;
        },
        Be = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = ve(ie[c], a));
                return b[c];
            };
        };
    var Ee = {
        lj: function(a, b) {
            b[Kd.cg] &&
                "string" === typeof a &&
                (a = 1 == b[Kd.cg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Kd.eg) && null === a && (a = b[Kd.eg]);
            b.hasOwnProperty(Kd.gg) && void 0 === a && (a = b[Kd.gg]);
            b.hasOwnProperty(Kd.fg) && !0 === a && (a = b[Kd.fg]);
            b.hasOwnProperty(Kd.dg) && !1 === a && (a = b[Kd.dg]);
            return a;
        },
    };
    var Fe = function() {
        this.g = {};
    };

    function Ge(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    (f = a[e].call(void 0, b, c, d)), (g += ".");
                } catch (h) {
                    g =
                        "string" === typeof h ?
                        g + (": " + h) :
                        h instanceof Error ?
                        g + (": " + h.message) :
                        g + ".";
                }
                if (!f) throw new we(c, d, g);
            }
    }

    function He(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.g[d],
                    f = a.g.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Ge(e, b, d, g);
                    Ge(f, b, d, g);
                }
            }
        };
    }
    var Le = function() {
            var a = data.permissions || {},
                b = Ie.J,
                c = this;
            this.o = new Fe();
            this.g = {};
            var d = {},
                e = He(this.o, b, function() {
                    var f = arguments[0];
                    return f && d[f] ?
                        d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) :
                        {};
                });
            La(a, function(f, g) {
                var h = {};
                La(g, function(k, n) {
                    var p = Je(k, n);
                    h[k] = p.assert;
                    d[k] || (d[k] = p.W);
                });
                c.g[f] = function(k, n) {
                    var p = h[k];
                    if (!p)
                        throw Ke(
                            k, {},
                            "The requested permission " + k + " is not configured."
                        );
                    var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q);
                };
            });
        },
        Ne = function(a) {
            return Me.g[a] || function() {};
        };

    function Je(a, b) {
        var c = re(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Ke;
        try {
            return se(c);
        } catch (d) {
            return {
                assert: function(e) {
                    throw new we(e, {}, "Permission " + e + " is unknown.");
                },
                W: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f)
                        e["arg" + (f + 1)] = arguments[f];
                    return e;
                },
            };
        }
    }

    function Ke(a, b, c) {
        return new we(a, b, c);
    }
    var Oe = !1;
    var Pe = {};
    Pe.Kk = Oa("");
    Pe.sj = Oa("");
    var Qe = Oe,
        Re = Pe.sj,
        Se = Pe.Kk;
    var hf = function(a, b) {
            return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
        },
        jf = function(a, b) {
            var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
            hf(b, "/*") && (b = b.slice(0, -2));
            hf(b, "?") && (b = b.slice(0, -1));
            var d = b.split("*");
            if (!c && 1 === d.length) return a === d[0];
            for (var e = -1, f = 0; f < d.length; f++) {
                var g = d[f];
                if (g) {
                    e = a.indexOf(g, e);
                    if (-1 === e || (0 === f && 0 !== e)) return !1;
                    e += g.length;
                }
            }
            if (c || e === a.length) return !0;
            var h = d[d.length - 1];
            return a.lastIndexOf(h) === a.length - h.length;
        },
        kf = /^[a-z0-9-]+$/i,
        lf = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
        nf = function(a, b) {
            var c;
            if (!(c = !mf(a))) {
                var d;
                a: {
                    var e = a.hostname.split(".");
                    if (2 > e.length) d = !1;
                    else {
                        for (var f = 0; f < e.length; f++)
                            if (!kf.exec(e[f])) {
                                d = !1;
                                break a;
                            }
                        d = !0;
                    }
                }
                c = !d;
            }
            if (c) return !1;
            for (var g = 0; g < b.length; g++) {
                var h;
                var k = a,
                    n = b[g];
                if (!lf.exec(n)) throw Error("Invalid Wildcard");
                var p = n.slice(8),
                    q = p.slice(0, p.indexOf("/")),
                    r;
                var u = k.hostname,
                    t = q;
                if (0 !== t.indexOf("*.")) r = u.toLowerCase() === t.toLowerCase();
                else {
                    t = t.slice(2);
                    var v = u.toLowerCase().indexOf(t.toLowerCase());
                    r = -1 === v ?
                        !1 :
                        u.length === t.length ?
                        !0 :
                        u.length !== t.length + v ?
                        !1 :
                        "." === u[v - 1];
                }
                if (r) {
                    var x = p.slice(p.indexOf("/"));
                    h = jf(k.pathname + k.search, x) ? !0 : !1;
                } else h = !1;
                if (h) return !0;
            }
            return !1;
        },
        mf = function(a) {
            return "https:" === a.protocol && (!a.port || "443" === a.port);
        };
    var of =
        /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        pf = { Fn: "function", DustMap: "Object", List: "Array" },
        M = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = of.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    k = c[d];
                if (null == k) {
                    if (g)
                        throw Error(
                            "Error in " + a + ". Required argument " + f + " not supplied."
                        );
                } else if ("*" !== h) {
                    var n = typeof k;
                    k instanceof db
                        ?
                        (n = "Fn") :
                        k instanceof ua ?
                        (n = "List") :
                        k instanceof hb ?
                        (n = "DustMap") :
                        k instanceof hc && (n = "OpaqueValue");
                    if (n != h)
                        throw Error(
                            "Error in " +
                            a +
                            ". Argument " +
                            f +
                            " has type " +
                            (pf[n] || n) +
                            ", which does not match required type " +
                            (pf[h] || h) +
                            "."
                        );
                }
            }
        };

    function qf(a) {
        return "" + a;
    }

    function rf(a, b) {
        var c = [];
        return c;
    }
    var sf = function(a, b) {
            var c = new db(a, function() {
                for (
                    var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++
                )
                    d[e] = G(this, d[e]);
                return b.apply(this, d);
            });
            c.Lb();
            return c;
        },
        tf = function(a, b) {
            var c = new hb(),
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Ca(e) ?
                        c.set(d, sf(a + "_" + d, e)) :
                        (Da(e) || m(e) || "boolean" === typeof e) && c.set(d, e);
                }
            c.Lb();
            return c;
        };
    var uf = function(a, b) {
        M(I(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new hb();
        return (d = tf("AssertApiSubject", c));
    };
    var vf = function(a, b) {
        M(I(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof jc)
            throw Error(
                "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
            );
        var c = {},
            d = new hb();
        return (d = tf("AssertThatSubject", c));
    };

    function zf(a) {
        return function() {
            for (var b = [], c = this.g, d = 0; d < arguments.length; ++d)
                b.push(qc(arguments[d], c));
            return pc(a.apply(null, b));
        };
    }
    var Bf = function() {
        for (var a = Math, b = Af, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = zf(a[e].bind(a)));
        }
        return c;
    };
    var Cf = function(a) {
        var b;
        return b;
    };
    var Df = function(a) {
        var b;
        return b;
    };
    var Ef = function(a) {
        return encodeURI(a);
    };
    var Ff = function(a) {
        return encodeURIComponent(a);
    };
    var Gf = function(a) {
        M(I(this), ["message:?string"], arguments);
    };
    var Hf = function(a, b) {
        M(I(this), ["min:!number", "max:!number"], arguments);
        return Ha(a, b);
    };
    var N = function(a, b, c) {
        var d = a.g.g;
        if (!d) throw Error("Missing program state.");
        d.fj.apply(null, Array.prototype.slice.call(arguments, 1));
    };
    var If = function() {
        N(this, "read_container_data");
        var a = new hb();
        a.set("containerId", "GTM-TLVDH3L");
        a.set("version", "15");
        a.set("environmentName", "");
        a.set("debugMode", Qe);
        a.set("previewMode", Se);
        a.set("environmentMode", Re);
        a.Lb();
        return a;
    };
    var Jf = {};
    Jf.sstECEnableData = !0;
    Jf.enableAdsEc = !0;
    Jf.sstFFConversionEnabled = !0;
    Jf.sstEnableAuid = !0;
    Jf.enableGbraidUpdate = !0;
    Jf.enable1pScripts = !0;
    Jf.enableGlobalEventDeveloperIds = !1;
    Jf.enableGa4OnoRemarketing = !1;
    Jf.omitAuidIfWbraidPresent = !1;
    Jf.sstEnableDclid = !0;
    Jf.reconcileCampaignFields = !1;
    Jf.reconcileCampaignFields = !0;
    Jf.enableEmFormCcd = !1;
    Jf.enableEmFormCcdPart2 = !1;
    Jf.enableUrlPassthrough = !0;
    Jf.enableLandingPageDeduplication = !0;
    Jf.enableGtagDestinationFps = !0;
    Jf.enableFloodlightPrerenderingBypass = !1;
    Jf.enableHashTempClientId = !0;
    Jf.enableTranslateUAParamsToClassic = !0;
    Jf.analyticsPrivateParamsExcluded = !1;
    Jf.ipOverrideExperiment = !1;
    Jf.enableEmptyDestLists = !1;
    Jf.enableAdsHistoryChangeEvents = !1;
    Jf.requireGtagUserDataTos = !0;
    Jf.sendBeaconEnableExperimentPercentage = Number("0") || 0;

    function Kf() {
        return pc(Jf);
    }
    var Lf = function() {
        return new Date().getTime();
    };
    var Mf = function(a) {
        if (null === a) return "null";
        if (a instanceof ua) return "array";
        if (a instanceof db) return "function";
        if (a instanceof hc) {
            a = a.ib;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1);
            }
            return String(a.constructor.name);
        }
        return typeof a;
    };
    var Nf = function(a) {
        return Na(qc(a, this.g));
    };
    var Of = function(a) {
        return Number(qc(a, this.g));
    };
    var Pf = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
    };
    var Qf = function(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null;
    };
    var Af = "floor ceil round max min abs pow sqrt".split(" ");
    var Rf = function() {
            var a = {};
            return {
                Bj: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0;
                },
                Ck: function(b, c) {
                    a[b] = c;
                },
                reset: function() {
                    a = {};
                },
            };
        },
        Sf = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return db.prototype.g.apply(a, c);
            };
        },
        Tf = function(a, b) {
            M(I(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var Uf = {};
    Uf.keys = function(a) {
        return new ua();
    };
    Uf.values = function(a) {
        return new ua();
    };
    Uf.entries = function(a) {
        return new ua();
    };
    Uf.freeze = function(a) {
        return a;
    };
    Uf.delete = function(a, b) {
        return !1;
    };
    var Wf = function() {
        this.g = {};
        this.o = {};
    };
    Wf.prototype.get = function(a, b) {
        var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
        return c;
    };
    Wf.prototype.add = function(a, b, c) {
        if (this.g.hasOwnProperty(a))
            throw "Attempting to add a function which already exists: " + a + ".";
        if (this.o.hasOwnProperty(a))
            throw (
                "Attempting to add an API with an existing private API name: " + a + "."
            );
        this.g[a] = c ? void 0 : Ca(b) ? sf(a, b) : tf(a, b);
    };
    var Yf = function(a, b, c) {
        if (a.o.hasOwnProperty(b))
            throw (
                "Attempting to add a private function which already exists: " + b + "."
            );
        if (a.g.hasOwnProperty(b))
            throw (
                "Attempting to add a private function with an existing API name: " +
                b +
                "."
            );
        a.o[b] = Ca(c) ? sf(b, c) : tf(b, c);
    };

    function Xf(a, b) {
        var c = void 0;
        return c;
    }

    function Zf() {
        var a = {};
        return a;
    }
    var Q = {
        Ib: "_ee",
        oc: "_syn_or_mod",
        Bb: "_def",
        Uk: "_uei",
        Vk: "_upi",
        kc: "_eu",
        Rk: "_pci",
        Jg: "_is_passthrough_cid",
        Ig: "_is_linker_valid",
        nf: "_ntg",
        Vd: "_nge",
        fc: "event_callback",
        Kd: "event_timeout",
        La: "gtag.config",
        Sa: "gtag.get",
        Aa: "purchase",
        ac: "refund",
        Cb: "begin_checkout",
        Yb: "add_to_cart",
        Zb: "remove_from_cart",
        ji: "view_cart",
        ig: "add_to_wishlist",
        Ba: "view_item",
        $b: "view_promotion",
        Ge: "select_promotion",
        Fe: "select_item",
        Db: "view_item_list",
        hg: "add_payment_info",
        ii: "add_shipping_info",
        fb: "value_key",
        rb: "value_callback",
        da: "allow_ad_personalization_signals",
        Xc: "restricted_data_processing",
        Jc: "allow_google_signals",
        Ea: "cookie_expires",
        cc: "cookie_update",
        Yc: "session_duration",
        Pd: "session_engaged_time",
        Id: "engagement_time_msec",
        Oa: "user_properties",
        ba: "transport_url",
        ka: "ads_data_redaction",
        Ga: "user_data",
        Sc: "first_party_collection",
        H: "ad_storage",
        T: "analytics_storage",
        Ce: "region",
        bg: "wait_for_update",
        Da: "conversion_linker",
        Ta: "conversion_cookie_prefix",
        oa: "value",
        ma: "currency",
        Dg: "trip_type",
        fa: "items",
        ug: "passengers",
        Je: "allow_custom_scripts",
        Hb: "session_id",
        zg: "quantity",
        ub: "transaction_id",
        tb: "language",
        Hd: "country",
        Gd: "allow_enhanced_conversions",
        Oe: "aw_merchant_id",
        Me: "aw_feed_country",
        Ne: "aw_feed_language",
        Le: "discount",
        aa: "developer_id",
        qg: "global_developer_id_string",
        og: "event_developer_id_string",
        Qd: "delivery_postal_code",
        Ue: "estimated_delivery_date",
        Se: "shipping",
        Ye: "new_customer",
        Pe: "customer_lifetime_value",
        Te: "enhanced_conversions",
        Ic: "page_view",
        va: "linker",
        U: "domains",
        ic: "decorate_forms",
        ng: "enhanced_conversions_automatic_settings",
        si: "auto_detection_enabled",
        We: "ga_temp_client_id",
        He: "user_engagement",
        di: "app_remove",
        ei: "app_store_refund",
        fi: "app_store_subscription_cancel",
        gi: "app_store_subscription_convert",
        hi: "app_store_subscription_renew",
        ki: "first_open",
        li: "first_visit",
        mi: "in_app_purchase",
        ni: "session_start",
        oi: "allow_display_features",
        eb: "campaign",
        Kc: "campaign_content",
        Lc: "campaign_id",
        Mc: "campaign_medium",
        Nc: "campaign_name",
        Oc: "campaign_source",
        Pc: "campaign_term",
        ra: "client_id",
        sa: "cookie_domain",
        bc: "cookie_name",
        pb: "cookie_path",
        Ua: "cookie_flags",
        Qc: "custom_map",
        Nd: "groups",
        sg: "non_interaction",
        hb: "page_location",
        Ze: "page_path",
        Va: "page_referrer",
        Wc: "page_title",
        Fa: "send_page_view",
        Gb: "send_to",
        Zc: "session_engaged",
        Rc: "euid_logged_in_state",
        $c: "session_number",
        Ji: "tracking_id",
        vb: "url_passthrough",
        hc: "accept_incoming",
        Vc: "url_position",
        xg: "phone_conversion_number",
        vg: "phone_conversion_callback",
        wg: "phone_conversion_css_class",
        yg: "phone_conversion_options",
        Ei: "phone_conversion_ids",
        Di: "phone_conversion_country_code",
        Eb: "aw_remarketing",
        Ke: "aw_remarketing_only",
        Ie: "gclid",
        ri: "auid",
        yi: "affiliation",
        mg: "tax",
        Re: "list_name",
        lg: "checkout_step",
        kg: "checkout_option",
        zi: "coupon",
        Ai: "promotions",
        Na: "user_id",
        Hi: "retoken",
        Ma: "cookie_prefix",
        jg: "disable_merchant_reported_purchases",
        xi: "dc_natural_search",
        wi: "dc_custom_params",
        rg: "method",
        Ii: "search_term",
        vi: "content_type",
        Ci: "optimize_id",
        Bi: "experiments",
        sb: "google_signals",
    };
    Q.Md = "google_tld";
    Q.Sd = "update";
    Q.Ve = "firebase_id";
    Q.Tc = "ga_restrict_domain";
    Q.Jd = "event_settings";
    Q.Qe = "dynamic_event_settings";
    Q.jc = "user_data_settings";
    Q.Bg = "screen_name";
    Q.af = "screen_resolution";
    Q.Fb = "_x_19";
    Q.qb = "enhanced_client_id";
    Q.Ld = "_x_20";
    Q.Xe = "internal_traffic_results";
    Q.Rd = "traffic_type";
    Q.Od = "referral_exclusion_definition";
    Q.Uc = "ignore_referrer";
    Q.ui = "content_group";
    Q.Ca = "allow_interest_groups";
    (Q.$e = "redact_device_info"), (Q.pg = "geo_granularity");
    var bg = {};
    Q.Gg = Object.freeze(
        ((bg[Q.hg] = 1),
            (bg[Q.ii] = 1),
            (bg[Q.Yb] = 1),
            (bg[Q.Zb] = 1),
            (bg[Q.ji] = 1),
            (bg[Q.Cb] = 1),
            (bg[Q.Fe] = 1),
            (bg[Q.Db] = 1),
            (bg[Q.Ge] = 1),
            (bg[Q.$b] = 1),
            (bg[Q.Aa] = 1),
            (bg[Q.ac] = 1),
            (bg[Q.Ba] = 1),
            (bg[Q.ig] = 1),
            bg)
    );
    Q.cf = Object.freeze([Q.da, Q.Jc, Q.cc]);
    Q.Ti = Object.freeze([].concat(Q.cf));
    Q.df = Object.freeze([Q.Ea, Q.Kd, Q.Yc, Q.Pd, Q.Id]);
    Q.Ui = Object.freeze([].concat(Q.df));
    var cg = {};
    Q.De = ((cg[Q.H] = "1"), (cg[Q.T] = "2"), cg);
    var eg = { jh: "ES", Ih: "ES-MD" };
    var fg = {},
        gg = function(a, b) {
            fg[a] = fg[a] || [];
            fg[a][b] = !0;
        },
        hg = function(a) {
            for (var b = [], c = fg[a] || [], d = 0; d < c.length; d++)
                c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++)
                b[e] =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
                    b[e] || 0
                );
            return b.join("");
        },
        ig = function() {
            for (var a = [], b = fg.GA4_EVENT || [], c = 0; c < b.length; c++)
                b[c] && a.push(c);
            return 0 < a.length ? a : void 0;
        };
    var jg = function(a) {
        gg("GTM", a);
    };
    var kg = new(function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b;
    })(1933);
    var mg = function() {
        var a = lg,
            b = "Gf";
        if (a.Gf && a.hasOwnProperty(b)) return a.Gf;
        var c = new a();
        a.Gf = c;
        a.hasOwnProperty(b);
        return c;
    };
    var lg = function() {
        var a = {};
        this.g = function() {
            var b = kg.g,
                c = kg.defaultValue;
            return null != a[b] ? a[b] : c;
        };
        this.o = function() {
            a[kg.g] = !0;
        };
    };
    var ng = [];

    function og() {
        var a = Hb("google_tag_data", {});
        a.ics ||
            (a.ics = {
                entries: {},
                set: pg,
                update: qg,
                addListener: rg,
                notifyListeners: sg,
                active: !1,
                usedDefault: !1,
                usedUpdate: !1,
                accessedDefault: !1,
                accessedAny: !1,
                wasSetLate: !1,
            });
        return a.ics;
    }

    function pg(a, b, c, d, e, f) {
        var g = og();
        g.usedDefault ||
            (!g.accessedDefault && !g.accessedAny) ||
            (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries,
                k = h[a] || {},
                n = k.region,
                p = c && m(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === k.update),
                    r = {
                        region: p,
                        initial: "granted" === b,
                        update: k.update,
                        quiet: q,
                    };
                if ("" !== d || !1 !== k.initial) h[a] = r;
                q &&
                    z.setTimeout(function() {
                        h[a] === r &&
                            r.quiet &&
                            ((r.quiet = !1), tg(a), sg(), gg("TAGGING", 2));
                    }, f);
            }
        }
    }

    function qg(a, b) {
        var c = og();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = ug(c, a),
                e = c.entries,
                f = (e[a] = e[a] || {});
            f.update = "granted" === b;
            var g = ug(c, a);
            f.quiet ? ((f.quiet = !1), tg(a)) : g !== d && tg(a);
        }
    }

    function rg(a, b) {
        ng.push({ xf: a, wj: b });
    }

    function tg(a) {
        for (var b = 0; b < ng.length; ++b) {
            var c = ng[b];
            Ea(c.xf) && -1 !== c.xf.indexOf(a) && (c.Eh = !0);
        }
    }

    function sg(a, b) {
        for (var c = 0; c < ng.length; ++c) {
            var d = ng[c];
            if (d.Eh) {
                d.Eh = !1;
                try {
                    d.wj({ consentEventId: a, consentPriorityId: b });
                } catch (e) {}
            }
        }
    }

    function ug(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial;
    }
    var vg = function(a) {
            var b = og();
            b.accessedAny = !0;
            return ug(b, a);
        },
        wg = function(a) {
            var b = og();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial;
        },
        xg = function(a) {
            var b = og();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet;
        },
        yg = function() {
            if (!mg().g()) return !1;
            var a = og();
            a.accessedAny = !0;
            return a.active;
        },
        zg = function() {
            var a = og();
            a.accessedDefault = !0;
            return a.usedDefault;
        },
        Ag = function(a, b) {
            og().addListener(a, b);
        },
        Bg = function(a, b) {
            og().notifyListeners(a, b);
        },
        Cg = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!xg(b[e])) return !0;
                return !1;
            }
            if (c()) {
                var d = !1;
                Ag(b, function(e) {
                    d || c() || ((d = !0), a(e));
                });
            } else a({});
        },
        Dg = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var h = d[g];
                    !1 === vg(h) || e[h] || (f.push(h), (e[h] = !0));
                }
                return f;
            }
            var d = m(b) ? [b] : b,
                e = {};
            c().length !== d.length &&
                Ag(d, function(f) {
                    var g = c();
                    0 < g.length && ((f.xf = g), a(f));
                });
        };

    function Eg() {}

    function Fg() {}

    function Gg(a) {
        for (var b = [], c = 0; c < Hg.length; c++) {
            var d = a(Hg[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
        }
        return b.join("");
    }
    var Hg = [Q.H, Q.T],
        Ig = function(a) {
            var b = a[Q.Ce];
            b && jg(40);
            var c = a[Q.bg];
            c && jg(41);
            for (
                var d = Ea(b) ? b : [b], e = { Cc: 0 }; e.Cc < d.length; e = { Cc: e.Cc }, ++e.Cc
            )
                La(
                    a,
                    (function(f) {
                        return function(g, h) {
                            if (g !== Q.Ce && g !== Q.bg) {
                                var k = d[f.Cc],
                                    n = eg.jh,
                                    p = eg.Ih;
                                og().set(g, h, k, n, p, c);
                            }
                        };
                    })(e)
                );
        },
        Jg = 0,
        Kg = function(a, b) {
            La(a, function(e, f) {
                og().update(e, f);
            });
            Bg(b.eventId, b.priorityId);
            var c = Ta(),
                d = c - Jg;
            Jg && 0 <= d && 1e3 > d && jg(66);
            Jg = c;
        },
        Lg = function(a) {
            var b = vg(a);
            return void 0 != b ? b : !0;
        },
        Mg = function() {
            return "G1" + Gg(vg);
        },
        Ng = function(a, b) {
            Ag(a, b);
        },
        Og = function(a, b) {
            Dg(a, b);
        },
        Pg = function(a, b) {
            Cg(a, b);
        };
    var Rg = function(a) {
            return Qg ? J.querySelectorAll(a) : null;
        },
        Sg = function(a, b) {
            if (!Qg) return null;
            if (Element.prototype.closest)
                try {
                    return a.closest(b);
                } catch (e) {
                    return null;
                }
            var c =
                Element.prototype.matches ||
                Element.prototype.webkitMatchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector,
                d = a;
            if (!J.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d;
                } catch (e) {
                    break;
                }
                d = d.parentElement || d.parentNode;
            } while (null !== d && 1 === d.nodeType);
            return null;
        },
        Tg = !1;
    if (J.querySelectorAll)
        try {
            var Ug = J.querySelectorAll(":root");
            Ug && 1 == Ug.length && Ug[0] == J.documentElement && (Tg = !0);
        } catch (a) {}
    var Qg = Tg;
    var nh = {},
        S = (z.google_tag_manager = z.google_tag_manager || {}),
        oh = Math.random();
    nh.Zd = "520";
    nh.ca = "dataLayer";
    nh.ci =
        "ChAI8MjIkwYQ5MmH16fHt+UiEiQAySR8EZzo9+e5aVFk6wKhp/M9SX2YKeskA00EHdNzqOwYwTQaAn1K";
    var ph = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0,
        },
        qh = { __paused: !0, __tg: !0 },
        rh;
    for (rh in ph) ph.hasOwnProperty(rh) && (qh[rh] = !0);
    nh.Hc = "www.googletagmanager.com";
    var sh,
        th = nh.Hc + "/gtm.js";
    sh = th;
    var uh = Oa(""),
        vh = null,
        wh = null,
        xh = {},
        yh = {},
        Gh = function() {
            var a = S.sequence || 1;
            S.sequence = a + 1;
            return a;
        };
    nh.bi = "";
    var Hh = "";
    nh.$d = Hh;
    var Ih = new Ja(),
        Jh = {},
        Kh = {},
        Nh = {
            name: nh.ca,
            set: function(a, b) {
                oc($a(a, b), Jh);
                Lh();
            },
            get: function(a) {
                return Mh(a, 2);
            },
            reset: function() {
                Ih = new Ja();
                Jh = {};
                Lh();
            },
        },
        Mh = function(a, b) {
            return 2 != b ? Ih.get(a) : Oh(a);
        },
        Oh = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = Jh, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return;
            }
            return d;
        },
        Ph = function(a, b) {
            Kh.hasOwnProperty(a) || (Ih.set(a, b), oc($a(a, b), Jh), Lh());
        },
        Qh = function() {
            for (
                var a = [
                        "gtm.allowlist",
                        "gtm.blocklist",
                        "gtm.whitelist",
                        "gtm.blacklist",
                        "tagTypeBlacklist",
                    ],
                    b = 0; b < a.length; b++
            ) {
                var c = a[b],
                    d = Mh(c, 1);
                if (Ea(d) || nc(d)) d = oc(d);
                Kh[c] = d;
            }
        },
        Lh = function(a) {
            La(Kh, function(b, c) {
                Ih.set(b, c);
                oc($a(b), Jh);
                oc($a(b, c), Jh);
                a && delete Kh[b];
            });
        },
        Rh = function(a, b) {
            var c,
                d = 1 !== (void 0 === b ? 2 : b) ? Oh(a) : Ih.get(a);
            "array" === lc(d) || "object" === lc(d) ? (c = oc(d)) : (c = d);
            return c;
        };
    var Sh,
        Th = !1;

    function Uh() {
        Th = !0;
        Sh = Sh || {};
    }
    var Vh = function(a) {
        Th || Uh();
        return Sh[a];
    };
    var Wh = function(a) {
        if (J.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
            return !0;
        var c = z.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h &&
                    ((g = g.substring(h + 8, g.indexOf(")", h))),
                        "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                        (f = Math.min(g, f)));
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = z.getComputedStyle(d, null));
        }
        return !1;
    };
    var ei = /:[0-9]+$/,
        fi = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var k = h.slice(1).join("=");
                    if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
                    e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "));
                }
            }
            return c ? e : void 0;
        },
        ii = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b)
                a.protocol = gi(a.protocol) || gi(z.location.protocol);
            "port" === b
                ?
                (a.port = String(
                    Number(a.hostname ? a.port : z.location.port) ||
                    ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
                )) :
                "host" === b &&
                (a.hostname = (a.hostname || z.location.hostname)
                    .replace(ei, "")
                    .toLowerCase());
            return hi(a, b, c, d, e);
        },
        hi = function(a, b, c, d, e) {
            var f,
                g = gi(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = ji(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(ei, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length));
                    }
                    break;
                case "port":
                    f = String(
                        Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
                    );
                    break;
                case "path":
                    a.pathname || a.hostname || gg("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k = f.split("/");
                    0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = fi(f, e, !1));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href;
            }
            return f;
        },
        gi = function(a) {
            return a ? a.replace(":", "").toLowerCase() : "";
        },
        ji = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c);
            }
            return b;
        },
        ki = function(a) {
            var b = J.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || gg("TAGGING", 1), (c = "/" + c));
            var d = b.hostname.replace(ei, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port,
            };
        },
        li = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0";
            }

            function c(n) {
                return n
                    .split("&")
                    .map(b)
                    .filter(function(p) {
                        return void 0 !== p;
                    })
                    .join("&");
            }
            var d =
                "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
                    " "
                ),
                e = ki(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var k = "" + f + g + h;
            "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
            return k;
        };
    var mi = {};
    var Fi = {},
        Gi = function(a, b) {
            if (z._gtmexpgrp && z._gtmexpgrp.hasOwnProperty(a))
                return z._gtmexpgrp[a];
            void 0 === Fi[a] && (Fi[a] = Math.floor(Math.random() * b));
            return Fi[a];
        };
    var Hi = function(a) {
        var b = 1,
            c,
            d,
            e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--)
                (e = a.charCodeAt(d)),
                (b = ((b << 6) & 268435455) + e + (e << 14)),
                (c = b & 266338304),
                (b = 0 !== c ? b ^ (c >> 21) : b);
        return b;
    };
    var Ii = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var k = g
                    .slice(1)
                    .join("=")
                    .replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k);
            }
        }
        return d;
    };
    var Ji = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c();
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d;
        },
        Ki = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c();
                }
            };
        };

    function Li(a) {
        return "null" !== a.origin;
    }
    var Oi = function(a, b, c, d) {
            return Mi(d) ? Ii(a, String(b || Ni()), c) : [];
        },
        Ri = function(a, b, c, d, e) {
            if (Mi(e)) {
                var f = Pi(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Qi(
                        f,
                        function(g) {
                            return g.je;
                        },
                        b
                    );
                    if (1 === f.length) return f[0].id;
                    f = Qi(
                        f,
                        function(g) {
                            return g.pd;
                        },
                        c
                    );
                    return f[0] ? f[0].id : void 0;
                }
            }
        };

    function Si(a, b, c, d) {
        var e = Ni(),
            f = window;
        Li(f) && (f.document.cookie = a);
        var g = Ni();
        return e != g || (void 0 != c && 0 <= Oi(b, g, !1, d).indexOf(c));
    }
    var Wi = function(a, b, c, d) {
            function e(x, y, w) {
                if (null == w) return delete h[y], x;
                h[y] = w;
                return x + "; " + y + "=" + w;
            }

            function f(x, y) {
                if (null == y) return delete h[y], x;
                h[y] = !0;
                return x + "; " + y;
            }
            if (!Mi(c.lb)) return 2;
            var g;
            void 0 == b ?
                (g = a + "=deleted; expires=" + new Date(0).toUTCString()) :
                (c.encode && (b = encodeURIComponent(b)),
                    (b = Ti(b)),
                    (g = a + "=" + b));
            var h = {};
            g = e(g, "path", c.path);
            var k;
            c.expires instanceof Date ?
                (k = c.expires.toUTCString()) :
                null != c.expires && (k = "" + c.expires);
            g = e(g, "expires", k);
            g = e(g, "max-age", c.Wj);
            g = e(g, "samesite", c.sk);
            c.uk && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = Ui(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
                    var t = "none" !== p[u] ? p[u] : void 0,
                        v = e(g, "domain", t);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h);
                    } catch (x) {
                        q = x;
                        continue;
                    }
                    r = !0;
                    if (!Vi(t, c.path) && Si(v, a, b, c.lb)) return 0;
                }
                if (q && !r) throw q;
                return 1;
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return Vi(n, c.path) ? 1 : Si(g, a, b, c.lb) ? 0 : 1;
        },
        Xi = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Wi(a, b, c);
        };

    function Qi(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                k = b(h);
            k === c ?
                d.push(h) :
                void 0 === f || k < f ?
                ((e = [h]), (f = k)) :
                k === f && e.push(h);
        }
        return 0 < d.length ? d : e;
    }

    function Pi(a, b, c) {
        for (var d = [], e = Oi(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k &&
                    ((k = k.split("-")),
                        d.push({ id: g.join("."), je: 1 * k[0] || 1, pd: 1 * k[1] || 1 }));
            }
        }
        return d;
    }
    var Ti = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a;
        },
        Yi = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Zi = /(^|\.)doubleclick\.net$/i,
        Vi = function(a, b) {
            return (
                Zi.test(window.document.location.hostname) || ("/" === b && Yi.test(a))
            );
        },
        Ni = function() {
            return Li(window) ? window.document.cookie : "";
        },
        Ui = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"];
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Zi.test(e) || Yi.test(e) || a.push("none");
            return a;
        },
        Mi = function(a) {
            if (!mg().g() || !a || !yg()) return !0;
            if (!xg(a)) return !1;
            var b = vg(a);
            return null == b ? !0 : !!b;
        };
    var $i = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ (Hi(a) & 2147483647)) : String(b);
        },
        aj = function(a) {
            return [$i(a), Math.round(Ta() / 1e3)].join(".");
        },
        dj = function(a, b, c, d, e) {
            var f = bj(b);
            return Ri(a, f, cj(c), d, e);
        },
        ej = function(a, b, c, d) {
            var e = "" + bj(c),
                f = cj(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".");
        },
        bj = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length;
        },
        cj = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1;
        };

    function fj(a, b, c) {
        var d,
            e = Number(null != a.Sb ? a.Sb : void 0);
        0 !== e && (d = new Date((b || Ta()) + 1e3 * (e || 7776e3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d,
        };
    }
    var gj = ["1"],
        hj = {},
        ij = {},
        mj = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = jj(a.prefix);
            if (!hj[c] && !kj(c, a.path, a.domain) && b) {
                var d = jj(a.prefix),
                    e = aj();
                if (0 === lj(d, e, a)) {
                    var f = Hb("google_tag_data", {});
                    f._gcl_au ? gg("GTM", 57) : (f._gcl_au = e);
                }
                kj(c, a.path, a.domain);
            }
        };

    function lj(a, b, c, d) {
        var e = ej(b, "1", c.domain, c.path),
            f = fj(c, d);
        f.lb = "ad_storage";
        return Xi(a, e, f);
    }

    function kj(a, b, c) {
        var d = dj(a, b, c, gj, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ?
            ((hj[a] = e.slice(0, 2).join(".")),
                (ij[a] = { id: e.slice(2, 4).join("."), xh: Number(e[4]) || 0 })) :
            3 === e.length ?
            (ij[a] = { id: e.slice(0, 2).join("."), xh: Number(e[2]) || 0 }) :
            (hj[a] = d);
        return !0;
    }

    function jj(a) {
        return (a || "_gcl") + "_au";
    }
    var nj = function(a) {
        for (
            var b = [],
                c = J.cookie.split(";"),
                d = new RegExp(
                    "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
                ),
                e = 0; e < c.length; e++
        ) {
            var f = c[e].match(d);
            f &&
                b.push({
                    $f: f[1],
                    value: f[2],
                    timestamp: Number(f[2].split(".")[1]) || 0,
                });
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp;
        });
        return b;
    };

    function oj(a, b) {
        var c = nj(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
                Number(f[1])
            ) {
                d[c[e].$f] || (d[c[e].$f] = []);
                var g = { version: f[0], timestamp: 1e3 * Number(f[1]), Ha: f[2] };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].$f].push(g);
            }
        }
        return d;
    }

    function pj() {
        for (var a = qj, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b;
    }

    function rj() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + ".";
    }
    var qj, sj;

    function tj(a) {
        function b(k) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = sj[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return k;
        }
        qj = qj || rj();
        sj = sj || pj();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode((e << 2) | (f >> 4));
            64 != g &&
                ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
                    64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
        }
    }
    var uj;
    var yj = function() {
            var a = vj,
                b = wj,
                c = xj(),
                d = function(g) {
                    a(g.target || g.srcElement || {});
                },
                e = function(g) {
                    b(g.target || g.srcElement || {});
                };
            if (!c.init) {
                Qb(J, "mousedown", d);
                Qb(J, "keyup", d);
                Qb(J, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this);
                };
                c.init = !0;
            }
        },
        zj = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e,
            };
            xj().decorators.push(f);
        },
        Aj = function(a, b, c) {
            for (var d = xj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g = d[f],
                    h;
                if ((h = !c || g.forms))
                    a: {
                        var k = g.domains,
                            n = a,
                            p = !!g.sameHost;
                        if (k && (p || n !== J.location.hostname))
                            for (var q = 0; q < k.length; q++)
                                if (k[q] instanceof RegExp) {
                                    if (k[q].test(n)) {
                                        h = !0;
                                        break a;
                                    }
                                } else if (
                            0 <= n.indexOf(k[q]) ||
                            (p && 0 <= k[q].indexOf(n))
                        ) {
                            h = !0;
                            break a;
                        }
                        h = !1;
                    }
                if (h) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Wa(e, g.callback());
                }
            }
            return e;
        };

    function xj() {
        var a = Hb("google_tag_data", {}),
            b = a.gl;
        (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
        return b;
    }
    var Bj = /(.*?)\*(.*?)\*(.*)/,
        Cj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Dj = /^(?:www\.|m\.|amp\.)+/,
        Ej = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Fj(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
    }
    var Hj = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (
                    void 0 !== d &&
                    d === d &&
                    null !== d &&
                    "[object Object]" !== d.toString()
                ) {
                    b.push(c);
                    var e = b,
                        f = e.push,
                        g,
                        h = String(d);
                    qj = qj || rj();
                    sj = sj || pj();
                    for (var k = [], n = 0; n < h.length; n += 3) {
                        var p = n + 1 < h.length,
                            q = n + 2 < h.length,
                            r = h.charCodeAt(n),
                            u = p ? h.charCodeAt(n + 1) : 0,
                            t = q ? h.charCodeAt(n + 2) : 0,
                            v = r >> 2,
                            x = ((r & 3) << 4) | (u >> 4),
                            y = ((u & 15) << 2) | (t >> 6),
                            w = t & 63;
                        q || ((w = 64), p || (y = 64));
                        k.push(qj[v], qj[x], qj[y], qj[w]);
                    }
                    g = k.join("");
                    f.call(e, g);
                }
            }
        var A = b.join("*");
        return ["1", Gj(A), A].join("*");
    };

    function Gj(a, b) {
        var c = [
                z.navigator.userAgent,
                new Date().getTimezoneOffset(),
                Fb.userLanguage || Fb.language,
                Math.floor(Ta() / 60 / 1e3) - (void 0 === b ? 0 : b),
                a,
            ].join("*"),
            d;
        if (!(d = uj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++)
                    g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
                e[f] = g;
            }
            d = e;
        }
        uj = d;
        for (var k = 4294967295, n = 0; n < c.length; n++)
            k = (k >>> 8) ^ uj[(k ^ c.charCodeAt(n)) & 255];
        return ((k ^ -1) >>> 0).toString(36);
    }

    function Ij() {
        return function(a) {
            var b = ki(z.location.href),
                c = b.search.replace("?", ""),
                d = fi(c, "_gl", !1, !0) || "";
            a.query = Jj(d) || {};
            var e = ii(b, "fragment").match(Fj("_gl"));
            a.fragment = Jj((e && e[3]) || "") || {};
        };
    }

    function Kj(a, b) {
        var c = Fj(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f);
        }
        return d;
    }
    var Lj = function(a, b) {
            b || (b = "_gl");
            var c = Ej.exec(a);
            if (!c) return "";
            var d = c[1],
                e = Kj(b, (c[2] || "").slice(1)),
                f = Kj(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f;
        },
        Mj = function(a) {
            var b = Ij(),
                c = xj();
            c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
            var d = {},
                e = c.data;
            e && (Wa(d, e.query), a && Wa(d, e.fragment));
            return d;
        },
        Jj = function(a) {
            try {
                var b = Nj(a, 3);
                if (void 0 !== b) {
                    for (
                        var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2
                    ) {
                        var f = d[e],
                            g = tj(d[e + 1]);
                        c[f] = g;
                    }
                    gg("TAGGING", 6);
                    return c;
                }
            } catch (h) {
                gg("TAGGING", 8);
            }
        };

    function Nj(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Bj.exec(d);
                    if (f) {
                        c = f;
                        break a;
                    }
                    d = decodeURIComponent(d);
                }
                c = void 0;
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3],
                    k;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Gj(h, p)) {
                            k = !0;
                            break a;
                        }
                    k = !1;
                }
                if (k) return h;
                gg("TAGGING", 7);
            }
        }
    }

    function Oj(a, b, c, d) {
        function e(p) {
            p = Kj(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n;
        }
        d = void 0 === d ? !1 : d;
        var f = Ej.exec(c);
        if (!f) return "";
        var g = f[1],
            h = f[2] || "",
            k = f[3] || "",
            n = a + "=" + b;
        d ? (k = "#" + e(k.substring(1))) : (h = "?" + e(h.substring(1)));
        return "" + g + h + k;
    }

    function Pj(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Aj(b, 1, c),
            e = Aj(b, 2, c),
            f = Aj(b, 3, c);
        if (Xa(d)) {
            var g = Hj(d);
            c ? Qj("_gl", g, a) : Rj("_gl", g, a, !1);
        }
        if (!c && Xa(e)) {
            var h = Hj(e);
            Rj("_gl", h, a, !0);
        }
        for (var k in f)
            if (f.hasOwnProperty(k))
                a: {
                    var n = k,
                        p = f[k],
                        q = a;
                    if (q.tagName) {
                        if ("a" === q.tagName.toLowerCase()) {
                            Rj(n, p, q);
                            break a;
                        }
                        if ("form" === q.tagName.toLowerCase()) {
                            Qj(n, p, q);
                            break a;
                        }
                    }
                    "string" == typeof q && Oj(n, p, q);
                }
    }

    function Rj(a, b, c, d) {
        if (c.href) {
            var e = Oj(a, b, c.href, void 0 === d ? !1 : d);
            sb.test(e) && (c.href = e);
        }
    }

    function Qj(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break;
                    }
                }
                if (!f) {
                    var k = J.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k);
                }
            } else if ("post" === d) {
                var n = Oj(a, b, c.action);
                sb.test(n) && (c.action = n);
            }
        }
    }

    function vj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a;
                    }
                    c = c.parentNode;
                    d--;
                }
                b = null;
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                ("http:" !== f && "https:" !== f) || Pj(e, e.hostname);
            }
        } catch (g) {}
    }

    function wj(a) {
        try {
            if (a.action) {
                var b = ii(ki(a.action), "host");
                Pj(a, b);
            }
        } catch (c) {}
    }
    var Sj = function(a, b, c, d) {
            yj();
            zj(a, b, "fragment" === c ? 2 : 1, !!d, !1);
        },
        Tj = function(a, b) {
            yj();
            zj(a, [hi(z.location, "host", !0)], b, !0, !0);
        },
        Uj = function() {
            var a = J.location.hostname,
                b = Cj.exec(J.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-");
            }
            var h = a.replace(Dj, ""),
                k = e.replace(Dj, ""),
                n;
            if (!(n = h === k)) {
                var p = "." + k;
                n = h.substring(h.length - p.length, h.length) === p;
            }
            return n;
        },
        Vj = function(a, b) {
            return !1 === a ? !1 : a || b || Uj();
        };
    var Wj = {};
    var Xj = /^\w+$/,
        Yj = /^[\w-]+$/,
        Zj = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
        ak = function() {
            if (!mg().g() || !yg()) return !0;
            var a = vg("ad_storage");
            return null == a ? !0 : !!a;
        },
        bk = function(a, b) {
            xg("ad_storage") ?
                ak() ?
                a() :
                Dg(a, "ad_storage") :
                b ?
                gg("TAGGING", 3) :
                Cg(
                    function() {
                        bk(a, !0);
                    }, ["ad_storage"]
                );
        },
        dk = function(a) {
            return ck(a).map(function(b) {
                return b.Ha;
            });
        },
        ck = function(a) {
            var b = [];
            if (!Li(z) || !J.cookie) return b;
            var c = Oi(a, J.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = { Cd: d.Cd }, e++) {
                var f = ek(c[e]);
                if (null != f) {
                    var g = f,
                        h = g.version;
                    d.Cd = g.Ha;
                    var k = g.timestamp,
                        n = g.labels,
                        p = Ga(
                            b,
                            (function(q) {
                                return function(r) {
                                    return r.Ha === q.Cd;
                                };
                            })(d)
                        );
                    p
                        ?
                        ((p.timestamp = Math.max(p.timestamp, k)),
                            (p.labels = fk(p.labels, n || []))) :
                        b.push({ version: h, Ha: d.Cd, timestamp: k, labels: n });
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp;
            });
            return gk(b);
        };

    function fk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            (c[a[e]] = !0), d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d;
    }

    function hk(a) {
        return a && "string" == typeof a && a.match(Xj) ? a : "_gcl";
    }
    var jk = function() {
            var a = ki(z.location.href),
                b = ii(a, "query", !1, void 0, "gclid"),
                c = ii(a, "query", !1, void 0, "gclsrc"),
                d = ii(a, "query", !1, void 0, "wbraid"),
                e = ii(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || fi(f, "gclid", !1);
                c = c || fi(f, "gclsrc", !1);
                d = d || fi(f, "wbraid", !1);
            }
            return ik(b, c, e, d);
        },
        ik = function(a, b, c, d) {
            var e = {},
                f = function(g, h) {
                    e[h] || (e[h] = []);
                    e[h].push(g);
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Yj.test(d) && ((e.gbraid = d), f(d, "gb"));
            if (void 0 !== a && a.match(Yj))
                switch (b) {
                    case void 0:
                        f(a, "aw");
                        break;
                    case "aw.ds":
                        f(a, "aw");
                        f(a, "dc");
                        break;
                    case "ds":
                        f(a, "dc");
                        break;
                    case "3p.ds":
                        f(a, "dc");
                        break;
                    case "gf":
                        f(a, "gf");
                        break;
                    case "ha":
                        f(a, "ha");
                }
            c && f(c, "dc");
            return e;
        },
        lk = function(a) {
            var b = jk();
            bk(function() {
                kk(b, !1, a);
            });
        };

    function kk(a, b, c, d, e) {
        function f(x, y) {
            var w = mk(x, g);
            w && (Xi(w, y, h), (k = !0));
        }
        c = c || {};
        e = e || [];
        var g = hk(c.prefix);
        d = d || Ta();
        var h = fj(c, d, !0);
        h.lb = "ad_storage";
        var k = !1,
            n = Math.round(d / 1e3),
            p = function(x) {
                var y = ["GCL", n, x];
                0 < e.length && y.push(e.join("."));
                return y.join(".");
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (
            (void 0 == Wj.enable_gbraid_cookie_write ?
                0 :
                Wj.enable_gbraid_cookie_write) &&
            !k &&
            a.gb
        ) {
            var q = a.gb[0],
                r = mk("gb", g),
                u = !1;
            if (!b)
                for (var t = ck(r), v = 0; v < t.length; v++)
                    t[v].Ha === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
            u || f("gb", p(q));
        }
    }
    var ok = function(a, b) {
            var c = Mj(!0);
            bk(function() {
                for (var d = hk(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Zj[f]) {
                        var g = mk(f, d),
                            h = c[g];
                        if (h) {
                            var k = Math.min(nk(h), Ta()),
                                n;
                            b: {
                                var p = k;
                                if (Li(z))
                                    for (
                                        var q = Oi(g, J.cookie, void 0, "ad_storage"), r = 0; r < q.length;
                                        ++r
                                    )
                                        if (nk(q[r]) > p) {
                                            n = !0;
                                            break b;
                                        }
                                n = !1;
                            }
                            if (!n) {
                                var u = fj(b, k, !0);
                                u.lb = "ad_storage";
                                Xi(g, h, u);
                            }
                        }
                    }
                }
                kk(ik(c.gclid, c.gclsrc), !1, b);
            });
        },
        mk = function(a, b) {
            var c = Zj[a];
            if (void 0 !== c) return b + c;
        },
        nk = function(a) {
            return 0 !== pk(a.split(".")).length ?
                1e3 * (Number(a.split(".")[1]) || 0) :
                0;
        };

    function ek(a) {
        var b = pk(a.split("."));
        return 0 === b.length ?
            null :
            {
                version: b[0],
                Ha: b[2],
                timestamp: 1e3 * (Number(b[1]) || 0),
                labels: b.slice(3),
            };
    }

    function pk(a) {
        return 3 > a.length ||
            ("GCL" !== a[0] && "1" !== a[0]) ||
            !/^\d+$/.test(a[1]) ||
            !Yj.test(a[2]) ?
            [] :
            a;
    }
    var qk = function(a, b, c, d, e) {
            if (Ea(b) && Li(z)) {
                var f = hk(e),
                    g = function() {
                        for (var h = {}, k = 0; k < a.length; ++k) {
                            var n = mk(a[k], f);
                            if (n) {
                                var p = Oi(n, J.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1]);
                            }
                        }
                        return h;
                    };
                bk(function() {
                    Sj(g, b, c, d);
                });
            }
        },
        gk = function(a) {
            return a.filter(function(b) {
                return Yj.test(b.Ha);
            });
        },
        rk = function(a, b) {
            if (Li(z)) {
                for (var c = hk(b.prefix), d = {}, e = 0; e < a.length; e++)
                    Zj[a[e]] && (d[a[e]] = Zj[a[e]]);
                bk(function() {
                    La(d, function(f, g) {
                        var h = Oi(c + g, J.cookie, void 0, "ad_storage");
                        h.sort(function(u, t) {
                            return nk(t) - nk(u);
                        });
                        if (h.length) {
                            var k = h[0],
                                n = nk(k),
                                p = 0 !== pk(k.split(".")).length ? k.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== pk(k.split(".")).length ? k.split(".")[2] : void 0;
                            q[f] = [r];
                            kk(q, !0, b, n, p);
                        }
                    });
                });
            }
        };

    function sk(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1;
    }
    var tk = function(a) {
        function b(e, f, g) {
            g && (e[f] = g);
        }
        if (yg()) {
            var c = jk();
            if (sk(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Tj(function() {
                    return d;
                }, 3);
                Tj(function() {
                    var e = {};
                    return (e._up = "1"), e;
                }, 1);
            }
        }
    };

    function uk(a, b) {
        var c = hk(b),
            d = mk(a, c);
        if (!d) return 0;
        for (var e = ck(d), f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f;
    }

    function vk(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b;
    }
    var Pk = new RegExp(
            /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
        ),
        Qk = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: [
                "customScripts",
                "customPixels",
                "nonGooglePixels",
                "nonGoogleScripts",
                "nonGoogleIframes",
            ],
            customScripts: [
                "html",
                "customPixels",
                "nonGooglePixels",
                "nonGoogleScripts",
                "nonGoogleIframes",
            ],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"],
        },
        Rk = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: [
                "customPixels",
                "customScripts",
                "html",
                "nonGoogleScripts",
                "nonGoogleIframes",
            ],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
        },
        Sk =
        "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
            " "
        );
    var Tk = function() {
            var a = !1;
            return a;
        },
        Vk = function(a) {
            var b = Mh("gtm.allowlist") || Mh("gtm.whitelist");
            b && jg(9);
            Tk() && (b = ["google", "gtagfl", "lcl", "zone"]);
            var c = b && Ya(Pa(b), Qk),
                d = Mh("gtm.blocklist") || Mh("gtm.blacklist");
            d || ((d = Mh("tagTypeBlacklist")) && jg(3));
            d ? jg(8) : (d = []);
            Uk() &&
                ((d = Pa(d)),
                    d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Pa(d).indexOf("google") && jg(2);
            var e = d && Ya(Pa(d), Rk),
                f = {};
            return function(g) {
                var h = g && g[Kd.Jb];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var k = yh[h] || [],
                    n = a(h, k);
                if (b) {
                    var p;
                    if ((p = n))
                        a: {
                            if (0 > c.indexOf(h))
                                if (k && 0 < k.length)
                                    for (var q = 0; q < k.length; q++) {
                                        if (0 > c.indexOf(k[q])) {
                                            jg(11);
                                            p = !1;
                                            break a;
                                        }
                                    }
                                else {
                                    p = !1;
                                    break a;
                                }
                            p = !0;
                        }
                    n = p;
                }
                var r = !1;
                if (d) {
                    var u = 0 <= e.indexOf(h);
                    if (u) r = u;
                    else {
                        var t = Ka(e, k || []);
                        t && jg(10);
                        r = t;
                    }
                }
                var v = !n || r;
                v ||
                    !(0 <= k.indexOf("sandboxedScripts")) ||
                    (c && -1 !== c.indexOf("sandboxedScripts")) ||
                    (v = Ka(e, Sk));
                return (f[h] = v);
            };
        },
        Uk = function() {
            return Pk.test(z.location && z.location.hostname);
        };
    var Ie = { J: "GTM-TLVDH3L", Gc: "" },
        Wk = { Ch: "GTM-TLVDH3L", Dh: "GTM-TLVDH3L" },
        Xk = function() {
            var a = [Ie.J];
            return a;
        },
        Yk = function() {
            var a = [Ie.J];
            return a;
        },
        Zk = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
        },
        al = function(a) {
            return $k().container.hasOwnProperty(a);
        };

    function $k() {
        var a = S.tidr;
        a || ((a = new Zk()), (S.tidr = a));
        return a;
    }
    var dl = function(a) {},
        hl = function(a) {},
        yl = function() {
            return (
                "&tc=" +
                je.filter(function(a) {
                    return a;
                }).length
            );
        },
        Bl = function() {
            2022 <= zl().length && Al();
        },
        Cl = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
        },
        El = function() {
            Dl || (Dl = z.setTimeout(Al, 500));
        },
        Al = function() {
            Dl && (z.clearTimeout(Dl), (Dl = void 0));
            if (void 0 !== Fl && (!Gl[Fl] || Hl || Il))
                if (Jl[Fl] || Kl.Nj() || 0 >= Ll--) jg(1), (Jl[Fl] = !0);
                else {
                    Kl.mk();
                    var a = zl(!0);
                    Pb(a);
                    Gl[Fl] = !0;
                    Nl = Ml = Pl = Ql = Rl = Il = Hl = "";
                    Ol = [];
                }
        },
        zl = function(a) {
            var b = Fl;
            if (void 0 === b) return "";
            var c = hg("GTM"),
                d = hg("TAGGING");
            return [
                Sl,
                Gl[b] ? "" : "&es=1",
                Tl[b],
                dl(b),
                c ? "&u=" + c : "",
                d ? "&ut=" + d : "",
                yl(),
                Hl,
                Il,
                Rl,
                Ql,
                hl(a),
                Pl,
                Ml,
                Nl ? "&dl=" + encodeURIComponent(Nl) : "",
                0 < Ol.length ? "&tdp=" + Ol.join(".") : "",
                "&z=0",
            ].join("");
        },
        Vl = function() {
            Sl = Ul();
        },
        Ul = function() {
            return [Wl, "&v=3&t=t", "&pid=" + Ha(), "&rv=" + nh.Zd].join("");
        },
        gl = ["L", "S", "Y"],
        cl = ["S", "E"],
        Xl = { sampleRate: "0.005000", Wh: "", Vh: Number("5") },
        Yl =
        0 <= J.location.search.indexOf("?gtm_latency=") ||
        0 <= J.location.search.indexOf("&gtm_latency="),
        Zl;
    if (!(Zl = Yl)) {
        var $l = Math.random(),
            am = Xl.sampleRate;
        Zl = $l < am;
    }
    var bm = Zl,
        Wl = "https://www.googletagmanager.com/a?id=" + Ie.J + "&cv=15",
        cm = {
            label: Ie.J + " Container",
            children: [{ label: "Initialization", children: [] }],
        },
        Sl = Ul(),
        Gl = {},
        Hl = "",
        Il = "",
        Pl = "",
        Ql = "",
        Ml = "",
        Ol = [],
        Nl = "",
        fl = {},
        el = !1,
        bl = {},
        dm = {},
        Rl = "",
        Fl = void 0,
        Tl = {},
        Jl = {},
        Dl = void 0,
        em = 5;
    0 < Xl.Vh && (em = Xl.Vh);
    var Kl = (function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Nj: function() {
                    return c < a ? !1 : Ta() - d[c % a] < b;
                },
                mk: function() {
                    var f = c++ % a;
                    d[f] = Ta();
                },
            };
        })(em, 1e3),
        Ll = 1e3,
        gm = function(a, b) {
            if (bm && !Jl[a] && Fl !== a) {
                Al();
                Fl = a;
                Pl = Hl = "";
                Tl[a] = "&e=" + Cl(b) + "&eid=" + a;
                El();
            }
        },
        hm = function(a, b, c, d) {
            if (bm && b) {
                var e,
                    f = String(b[Kd.Jb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Jl[a]) {
                    a !== Fl && (Al(), (Fl = a));
                    Hl = Hl ? Hl + "." + g : "&tr=" + g;
                    var h = b["function"];
                    if (!h)
                        throw Error("Error: No function name given for function call.");
                    var k = (le[h] ? "1" : "2") + e;
                    Pl = Pl ? Pl + "." + k : "&ti=" + k;
                    El();
                    Bl();
                }
            }
        };
    var om = function(a, b, c) {
            if (bm && !Jl[a]) {
                a !== Fl && (Al(), (Fl = a));
                var d = c + b;
                Il = Il ? Il + "." + d : "&epr=" + d;
                El();
                Bl();
            }
        },
        pm = function(a, b, c) {};
    var qm = { initialized: 11, complete: 12, interactive: 13 },
        rm = {},
        sm = Object.freeze(((rm[Q.Ib] = !0), (rm[Q.oc] = !0), rm)),
        tm = {},
        um = Object.freeze(((tm[Q.Fa] = !0), tm)),
        vm =
        0 <= J.location.search.indexOf("?gtm_diagnostics=") ||
        0 <= J.location.search.indexOf("&gtm_diagnostics="),
        xm = function(a, b, c) {};

    function ym(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c;
    }

    function wm(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var u = r[q];
                return void 0 === u ? um[q] : u;
            },
            f;
        for (f in ym(a, b))
            if (!sm[f]) {
                var g = (d ? d + "." : "") + f,
                    h = e(f, a),
                    k = e(f, b),
                    n = "object" === lc(h) || "array" === lc(h),
                    p = "object" === lc(k) || "array" === lc(k);
                if (n && p) wm(h, k, c, g);
                else if (n || p || h !== k) c[g] = !0;
            }
        return Object.keys(c);
    }
    var zm = !1,
        Am = 0,
        Bm = [];

    function Cm(a) {
        if (!zm) {
            var b = J.createEventObject,
                c = "complete" == J.readyState,
                d = "interactive" == J.readyState;
            if (!a || "readystatechange" != a.type || c || (!b && d)) {
                zm = !0;
                for (var e = 0; e < Bm.length; e++) K(Bm[e]);
            }
            Bm.push = function() {
                for (var f = 0; f < arguments.length; f++) K(arguments[f]);
                return 0;
            };
        }
    }

    function Dm() {
        if (!zm && 140 > Am) {
            Am++;
            try {
                J.documentElement.doScroll("left"), Cm();
            } catch (a) {
                z.setTimeout(Dm, 50);
            }
        }
    }
    var Em = function(a) {
        zm ? a() : Bm.push(a);
    };
    var Gm = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Ie.J,
        };
    };
    var Im = function(a, b) {
            this.g = !1;
            this.C = [];
            this.I = { tags: [] };
            this.R = !1;
            this.o = this.s = 0;
            Hm(this, a, b);
        },
        Jm = function(a, b, c, d) {
            if (qh.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            nc(d) && (e = oc(d, e));
            e.id = c;
            e.status = "timeout";
            return a.I.tags.push(e) - 1;
        },
        Km = function(a, b, c, d) {
            var e = a.I.tags[b];
            e && ((e.status = c), (e.executionTime = d));
        },
        Lm = function(a) {
            if (!a.g) {
                for (var b = a.C, c = 0; c < b.length; c++) b[c]();
                a.g = !0;
                a.C.length = 0;
            }
        },
        Hm = function(a, b, c) {
            void 0 !== b && a.ce(b);
            c &&
                z.setTimeout(function() {
                    return Lm(a);
                }, Number(c));
        };
    Im.prototype.ce = function(a) {
        var b = this,
            c = Va(function() {
                return K(function() {
                    a(Ie.J, b.I);
                });
            });
        this.g ? c() : this.C.push(c);
    };
    var Mm = function(a) {
            a.s++;
            return Va(function() {
                a.o++;
                a.R && a.o >= a.s && Lm(a);
            });
        },
        Nm = function(a) {
            a.R = !0;
            a.o >= a.s && Lm(a);
        };
    var Om = function() {
            function a(d) {
                return !Da(d) || 0 > d ? 0 : d;
            }
            if (!S._li && z.performance && z.performance.timing) {
                var b = z.performance.timing.navigationStart,
                    c = Da(Nh.get("gtm.start")) ? Nh.get("gtm.start") : 0;
                S._li = { cst: a(c - b), cbt: a(wh - b) };
            }
        },
        Pm = function(a) {
            z.performance && z.performance.mark(Ie.J + "_" + a + "_start");
        },
        Qm = function(a) {
            if (z.performance) {
                var b = Ie.J + "_" + a + "_start",
                    c = Ie.J + "_" + a + "_duration";
                z.performance.measure(c, b);
                var d = z.performance.getEntriesByName(c)[0];
                z.performance.clearMarks(b);
                z.performance.clearMeasures(c);
                var e = S._p || {};
                void 0 === e[a] && ((e[a] = d.duration), (S._p = e));
                return d.duration;
            }
        },
        Rm = function() {
            if (z.performance && z.performance.now) {
                var a = S._p || {};
                a.PAGEVIEW = z.performance.now();
                S._p = a;
            }
        };
    var Sm = {},
        Tm = function() {
            return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject];
        },
        Um = !1;
    var Vm = function(a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b) || jg(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments);
                };
                c.l = Number(Sa());
                z[b] = c;
            }
            Om();
            return z[b];
        },
        Wm = function(a) {
            if (yg()) {
                var b = Tm();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0);
            }
        };

    function Xm() {
        return z.GoogleAnalyticsObject || "ga";
    }
    var Ym = function(a) {},
        Zm = function(a, b) {
            return function() {
                var c = Tm(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            k = 0 > g.indexOf("&tid=" + b);
                        k &&
                            (f.set(
                                    "hitPayload",
                                    g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0
                                ),
                                f.set("hitCallback", void 0, !0));
                        e(f);
                        k &&
                            (f.set("hitPayload", g, !0),
                                f.set("hitCallback", h, !0),
                                f.set("_x_19", void 0, !0),
                                e(f));
                    });
                }
            };
        };

    function dn(a, b, c, d) {
        var e = je[a],
            f = en(a, b, c, d);
        if (!f) return null;
        var g = te(e[Kd.Sg], c, []);
        if (g && g.length) {
            var h = g[0];
            f = dn(
                h.index, {
                    onSuccess: f,
                    onFailure: 1 === h.oh ? b.terminate : f,
                    terminate: b.terminate,
                },
                c,
                d
            );
        }
        return f;
    }

    function en(a, b, c, d) {
        function e() {
            if (f[Kd.Qi]) h();
            else {
                var x = ue(f, c, []);
                var y = x[Kd.ai];
                if (null != y)
                    for (var w = 0; w < y.length; w++)
                        if (!Lg(y[w])) {
                            h();
                            return;
                        }
                var A = Jm(c.xb, String(f[Kd.Jb]), Number(f[Kd.Ug]), x[Kd.Ri]),
                    B = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var D = Ta() - C;
                        hm(c.id, je[a], "5", D);
                        Km(c.xb, A, "success", D);
                        g();
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var D = Ta() - C;
                        hm(c.id, je[a], "6", D);
                        Km(c.xb, A, "failure", D);
                        h();
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
                hm(c.id, f, "1");
                var E = function() {
                    var D = Ta() - C;
                    hm(c.id, f, "7", D);
                    Km(c.xb, A, "exception", D);
                    B || ((B = !0), h());
                };
                var C = Ta();
                try {
                    se(x, { event: c, index: a, type: 1 });
                } catch (D) {
                    E(D);
                }
            }
        }
        var f = je[a],
            g = b.onSuccess,
            h = b.onFailure,
            k = b.terminate;
        if (c.If(f)) return null;
        var n = te(f[Kd.Vg], c, []);
        if (n && n.length) {
            var p = n[0],
                q = dn(p.index, { onSuccess: g, onFailure: h, terminate: k }, c, d);
            if (!q) return null;
            g = q;
            h = 2 === p.oh ? k : q;
        }
        if (f[Kd.Mg] || f[Kd.Vi]) {
            var r = f[Kd.Mg] ? ke : c.Dk,
                u = g,
                t = h;
            if (!r[a]) {
                e = Va(e);
                var v = fn(a, r, e);
                g = v.onSuccess;
                h = v.onFailure;
            }
            return function() {
                r[a](u, t);
            };
        }
        return e;
    }

    function fn(a, b, c) {
        var d = [],
            e = [];
        b[a] = gn(d, e, c);
        return {
            onSuccess: function() {
                b[a] = hn;
                for (var f = 0; f < d.length; f++) d[f]();
            },
            onFailure: function() {
                b[a] = jn;
                for (var f = 0; f < e.length; f++) e[f]();
            },
        };
    }

    function gn(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c();
        };
    }

    function hn(a) {
        a();
    }

    function jn(a, b) {
        b();
    }

    function kn(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") &&
                0 !== c.indexOf("https://") &&
                (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return ki("" + c + b).href;
        }
    }

    function ln(a, b) {
        return mn() ? kn(a, b) : void 0;
    }

    function mn() {
        var a = !1;
        return a;
    }

    function nn() {
        return !!nh.$d && "SGTM_TOKEN" !== nh.$d.replaceAll("@@", "");
    }
    var on = function() {
        var a = !1;
        return a;
    };
    var qn = function(a, b, c, d) {
            return (2 === pn() || d || "http:" != z.location.protocol ? a : b) + c;
        },
        pn = function() {
            var a = Nb(),
                b;
            if (1 === a)
                a: {
                    var c = sh;
                    c = c.toLowerCase();
                    for (
                        var d = "https://" + c,
                            e = "http://" + c,
                            f = 1,
                            g = J.getElementsByTagName("script"),
                            h = 0; h < g.length && 100 > h; h++
                    ) {
                        var k = g[h].src;
                        if (k) {
                            k = k.toLowerCase();
                            if (0 === k.indexOf(e)) {
                                b = 3;
                                break a;
                            }
                            1 === f && 0 === k.indexOf(d) && (f = 2);
                        }
                    }
                    b = f;
                }
            else b = a;
            return b;
        };
    var rn = !1;
    var tn = function(a, b, c) {
            if (!sn() && !al(a)) {
                var d = c ? "/gtag/js" : "/gtm.js",
                    e = "?id=" + encodeURIComponent(a) + "&l=" + nh.ca,
                    f = 0 === a.indexOf("GTM-");
                f || (e += "&cx=c");
                var g = nn();
                g && (e += "&sign=" + nh.$d);
                var h = ln(b, d + e);
                if (!h) {
                    var k = nh.Hc + d;
                    g &&
                        Gb &&
                        f &&
                        (k = Gb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    h = qn("https://", "http://", k + e);
                }
                $k().container[a] = !0;
                Mb(h);
            }
        },
        un = function(a, b) {
            if (rn) {
                var c;
                if ((c = !sn())) c = !$k().destination.hasOwnProperty(a);
                if (c) {
                    var d =
                        "/gtag/destination?id=" +
                        encodeURIComponent(a) +
                        "&l=" +
                        nh.ca +
                        "&cx=c";
                    nn() && (d += "&sign=" + nh.$d);
                    var e = ln(b, d);
                    e || (e = qn("https://", "http://", nh.Hc + d));
                    $k().destination[a] = !0;
                    Mb(e);
                }
            } else tn(a, b, !0);
        };

    function sn() {
        if (on()) {
            return !0;
        }
        return !1;
    }
    var vn = [];
    vn[1] = !0;
    var wn = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.dataLayerConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.priorityId = this.eventId = void 0;
            this.isGtmEvent = !1;
        },
        xn = function(a) {
            var b = new wn();
            b.eventModel = a;
            return b;
        },
        yn = function(a, b) {
            a.targetConfig = b;
            return a;
        },
        zn = function(a, b) {
            a.containerConfig = b;
            return a;
        },
        An = function(a, b) {
            a.globalConfig = b;
            return a;
        },
        Bn = function(a, b) {
            a.dataLayerConfig = b;
            return a;
        },
        Cn = function(a, b) {
            a.remoteConfig = b;
            return a;
        },
        Dn = function(a, b) {
            a.onSuccess = b;
            return a;
        },
        En = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a;
        },
        Fn = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a;
        },
        Gn = function(a, b) {
            a.onFailure = b;
            return a;
        };
    l = wn.prototype;
    l.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        Hn(this, this.globalConfig[a], this.dataLayerConfig[a]) && jg(71);
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
    };
    l.getTopLevelKeys = function() {
        function a(f) {
            for (var g = Object.keys(f), h = 0; h < g.length; ++h) b[g[h]] = 1;
        }
        var b = {};
        a(this.eventModel);
        a(this.targetConfig);
        a(this.containerConfig);
        a(this.globalConfig);
        for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
            var e = c[d];
            if (
                "event" !== e &&
                "gtm" !== e &&
                "tagTypeBlacklist" !== e &&
                !b.hasOwnProperty(e)
            ) {
                jg(71);
                break;
            }
        }
        return Object.keys(b);
    };
    l.getMergedValues = function(a, b) {
        function c(h) {
            nc(h) &&
                La(h, function(k, n) {
                    e = !0;
                    d[k] = n;
                });
        }
        var d = {},
            e = !1;
        (b && 1 !== b) ||
        (c(this.remoteConfig[a]),
            c(this.globalConfig[a]),
            c(this.containerConfig[a]),
            c(this.targetConfig[a]));
        (b && 2 !== b) || c(this.eventModel[a]);
        var f = e,
            g = d;
        d = {};
        e = !1;
        (b && 1 !== b) ||
        (c(this.remoteConfig[a]),
            c(this.dataLayerConfig[a]),
            c(this.containerConfig[a]),
            c(this.targetConfig[a]));
        (b && 2 !== b) || c(this.eventModel[a]);
        (e !== f || Hn(this, d, g)) && jg(71);
        e = f;
        d = g;
        return e ? d : void 0;
    };
    l.getKeysFromFirstOfAnyScope = function(a) {
        var b = {},
            c = !1,
            d = function(g) {
                for (var h = 0; h < a.length; h++)
                    void 0 !== g[a[h]] && ((b[a[h]] = g[a[h]]), (c = !0));
                return c;
            };
        if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig))
            return b;
        d(this.globalConfig);
        var e = b,
            f = c;
        b = {};
        c = !1;
        d(this.dataLayerConfig);
        Hn(this, b, e) && jg(71);
        b = e;
        c = f;
        if (c) return b;
        d(this.remoteConfig);
        return b;
    };
    l.getEventModelKeys = function() {
        var a = [],
            b;
        for (b in this.eventModel)
            b !== Q.Ib &&
            this.eventModel.hasOwnProperty(b) &&
            void 0 !== this.eventModel[b] &&
            a.push(b);
        return a;
    };
    var Hn = function(a, b, c) {
        try {
            if (b === c) return !1;
            var d = lc(b);
            if (d !== lc(c) || !((nc(b) && nc(c)) || "array" === d)) return !0;
            if ("array" === d) {
                if (b.length !== c.length) return !0;
                for (var e = 0; e < b.length; e++)
                    if (Hn(a, b[e], c[e])) return !0;
            } else {
                for (var f in c)
                    if (!b.hasOwnProperty(f)) return !0;
                for (var g in b)
                    if (!c.hasOwnProperty(g) || Hn(a, b[g], c[g])) return !0;
            }
        } catch (h) {
            jg(72);
        }
        return !1;
    };
    var In = function() {
        S.dedupe_gclid || (S.dedupe_gclid = "" + aj());
        return S.dedupe_gclid;
    };
    var Jn;
    if (3 === nh.Zd.length) Jn = "g";
    else {
        var Kn = "G";
        Jn = Kn;
    }
    var Ln = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Jn,
            OPT: "o",
        },
        Mn = function(a) {
            var b = Ie.J.split("-"),
                c = b[0].toUpperCase(),
                d = Ln[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === nh.Zd.length) {
                var g = "w";
                f = "2" + g;
            } else f = "";
            return f + d + nh.Zd + e;
        };

    function Nn(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c;
    }
    var On = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1);
    };

    function Pn() {
        return ub("iPhone") && !ub("iPod") && !ub("iPad");
    }
    ub("Opera");
    ub("Trident") || ub("MSIE");
    ub("Edge");
    !ub("Gecko") ||
        (-1 != tb().toLowerCase().indexOf("webkit") && !ub("Edge")) ||
        ub("Trident") ||
        ub("MSIE") ||
        ub("Edge"); -
    1 != tb().toLowerCase().indexOf("webkit") && !ub("Edge") && ub("Mobile");
    ub("Macintosh");
    ub("Windows");
    ub("Linux") || ub("CrOS");
    var Qn = ma.navigator || null;
    Qn && (Qn.appVersion || "").indexOf("X11");
    ub("Android");
    Pn();
    ub("iPad");
    ub("iPod");
    Pn() || ub("iPad") || ub("iPod");
    tb().toLowerCase().indexOf("kaios");
    var Rn = function(a) {
        if (!a || !J.head) return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        J.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b;
    };
    var Sn = function() {};
    var Tn = function(a) {
            void 0 !== a.addtlConsent &&
                "string" !== typeof a.addtlConsent &&
                (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies &&
                "boolean" !== typeof a.gdprApplies &&
                (a.gdprApplies = void 0);
            return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
                (void 0 !== a.listenerId && "number" !== typeof a.listenerId) ?
                2 :
                a.cmpStatus && "error" !== a.cmpStatus ?
                0 :
                3;
        },
        Un = function(a, b) {
            this.o = a;
            this.g = null;
            this.C = {};
            this.R = 0;
            this.I = void 0 === b ? 500 : b;
            this.s = null;
        };
    la(Un, Sn);
    Un.prototype.addEventListener = function(a) {
        var b = {},
            c = Ki(function() {
                return a(b);
            }),
            d = 0; -
        1 !== this.I &&
            (d = setTimeout(function() {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c();
            }, this.I));
        var e = function(f, g) {
            clearTimeout(d);
            f
                ?
                ((b = f),
                    (b.internalErrorState = Tn(b)),
                    (g && 0 === b.internalErrorState) ||
                    ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3))) :
                ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
            a(b);
        };
        try {
            Vn(this, "addEventListener", e);
        } catch (f) {
            (b.tcString = "tcunavailable"),
            (b.internalErrorState = 3),
            d && (clearTimeout(d), (d = 0)),
                c();
        }
    };
    Un.prototype.removeEventListener = function(a) {
        a && a.listenerId && Vn(this, "removeEventListener", null, a.listenerId);
    };
    var Xn = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a;
                    }
                }
                e = void 0;
            }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ?
                ((h = 0), 2 === g && (h = 1)) :
                3 === c && ((h = 1), 1 === g && (h = 0));
            var k;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = Wn(a.vendor.consents, void 0 === d ? "755" : d);
                    k =
                        n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ?
                        !0 :
                        n && Wn(a.purpose.consents, b);
                } else k = !0;
            else
                k =
                1 === h ?
                a.purpose && a.vendor ?
                Wn(a.purpose.legitimateInterests, b) &&
                Wn(a.vendor.legitimateInterests, void 0 === d ? "755" : d) :
                !0 :
                !0;
            return k;
        },
        Wn = function(a, b) {
            return !(!a || !a[b]);
        },
        Vn = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d);
            } else if (Yn(a)) {
                Zn(a);
                var f = ++a.R;
                a.C[f] = c;
                if (a.g) {
                    var g = {};
                    a.g.postMessage(
                        ((g.__tcfapiCall = {
                                command: b,
                                version: 2,
                                callId: f,
                                parameter: d,
                            }),
                            g),
                        "*"
                    );
                }
            } else c({}, !1);
        },
        Yn = function(a) {
            if (a.g) return a.g;
            var b;
            a: {
                for (var c = a.o, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator);
                    } catch (h) {
                        e = !1;
                    }
                    if (e) {
                        b = c;
                        break a;
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b;
                            }
                        } catch (h) {}
                        f = null;
                    }
                    if (!(c = f)) break;
                }
                b = null;
            }
            a.g = b;
            return a.g;
        },
        Zn = function(a) {
            a.s ||
                ((a.s = function(b) {
                        try {
                            var c;
                            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
                                .__tcfapiReturn;
                            a.C[c.callId](c.returnValue, c.success);
                        } catch (d) {}
                    }),
                    On(a.o, a.s));
        };
    var $n = !0;
    $n = !1;
    var ao = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
        bo = Nn("", 550),
        co = Nn("", 500);

    function eo() {
        var a = S.tcf || {};
        return (S.tcf = a);
    }
    var jo = function() {
        var a = eo(),
            b = new Un(z, $n ? 3e3 : -1);
        if (!0 === z.gtag_enable_tcf_support &&
            !a.active &&
            ("function" === typeof z.__tcfapi ||
                "function" === typeof b.o.__tcfapi ||
                null != Yn(b))
        ) {
            a.active = !0;
            a.ud = {};
            fo();
            var c = null;
            $n
                ?
                (c = z.setTimeout(function() {
                    go(a);
                    ho(a);
                    c = null;
                }, co)) :
                (a.tcString = "tcunavailable");
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c), (c = null));
                    if (0 !== d.internalErrorState) go(a), ho(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies)(e = io()), b.removeEventListener(d);
                        else if (
                            "tcloaded" === d.eventStatus ||
                            "useractioncomplete" === d.eventStatus ||
                            "cmpuishown" === d.eventStatus
                        ) {
                            var f = {},
                                g;
                            for (g in ao)
                                if (ao.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var h = d,
                                            k = !0;
                                        k = void 0 === k ? !1 : k;
                                        var n;
                                        var p = h;
                                        !1 === p.gdprApplies ?
                                            (n = !0) :
                                            (void 0 === p.internalErrorState &&
                                                (p.internalErrorState = Tn(p)),
                                                (n =
                                                    "error" === p.cmpStatus ||
                                                    0 !== p.internalErrorState ||
                                                    ("loaded" === p.cmpStatus &&
                                                        ("tcloaded" === p.eventStatus ||
                                                            "useractioncomplete" === p.eventStatus)) ?
                                                    !0 :
                                                    !1));
                                        f["1"] = n ?
                                            !1 === h.gdprApplies ||
                                            "tcunavailable" === h.tcString ||
                                            (void 0 === h.gdprApplies && !k) ||
                                            "string" !== typeof h.tcString ||
                                            !h.tcString.length ?
                                            !0 :
                                            Xn(h, "1", 0) :
                                            !1;
                                    } else f[g] = Xn(d, g, ao[g]);
                            e = f;
                        }
                        e && ((a.tcString = d.tcString || "tcempty"), (a.ud = e), ho(a));
                    }
                });
            } catch (d) {
                c && (clearTimeout(c), (c = null)), go(a), ho(a);
            }
        }
    };

    function go(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        $n && (a.ud = io());
    }

    function fo() {
        var a = {},
            b = ((a.ad_storage = "denied"), (a.wait_for_update = bo), a);
        Ig(b);
    }

    function io() {
        var a = {},
            b;
        for (b in ao) ao.hasOwnProperty(b) && (a[b] = !0);
        return a;
    }

    function ho(a) {
        var b = {},
            c = ((b.ad_storage = a.ud["1"] ? "granted" : "denied"), b);
        Kg(
            c, { eventId: 0 }, { gdprApplies: a ? a.gdprApplies : void 0, tcString: ko() }
        );
    }
    var ko = function() {
            var a = eo();
            return a.active ? a.tcString || "" : "";
        },
        lo = function() {
            var a = eo();
            return a.active && void 0 !== a.gdprApplies ?
                a.gdprApplies ?
                "1" :
                "0" :
                "";
        },
        mo = function(a) {
            if (!ao.hasOwnProperty(String(a))) return !0;
            var b = eo();
            return b.active && b.ud ? !!b.ud[String(a)] : !0;
        };
    var to = !1;
    var uo = function() {
            this.g = {};
        },
        vo = function(a, b, c) {
            null != c && (a.g[b] = c);
        },
        wo = function(a) {
            return Object.keys(a.g)
                .map(function(b) {
                    return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b]);
                })
                .join("&");
        },
        yo = function(a, b, c, d, e) {};
    var Ao = /[A-Z]+/,
        Bo = /\s/,
        Co = function(a) {
            if (m(a)) {
                a = Ra(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Ao.test(c)) {
                        for (
                            var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++
                        )
                            if (!d[e] || (Bo.test(d[e]) && ("AW" !== c || 1 !== e))) return;
                        return { id: a, prefix: c, containerId: c + "-" + d[0], P: d };
                    }
                }
            }
        },
        Eo = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Co(a[c]);
                d && (b[d.id] = d);
            }
            Do(b);
            var e = [];
            La(b, function(f, g) {
                e.push(g);
            });
            return e;
        };

    function Do(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.P[1] && b.push(d.containerId);
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]];
    }
    var Go = function(a, b, c) {
            if (z[a.functionName]) return b.Pf && K(b.Pf), z[a.functionName];
            var d = Fo();
            z[a.functionName] = d;
            if (a.de)
                for (var e = 0; e < a.de.length; e++) z[a.de[e]] = z[a.de[e]] || Fo();
            a.qe && void 0 === z[a.qe] && (z[a.qe] = c);
            Mb(qn("https://", "http://", a.Yf), b.Pf, b.$j);
            return d;
        },
        Fo = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments);
            };
            return a;
        },
        Ho = {
            functionName: "_googWcmImpl",
            qe: "_googWcmAk",
            Yf: "www.gstatic.com/wcm/loader.js",
        },
        Io = {
            functionName: "_gaPhoneImpl",
            qe: "ga_wpid",
            Yf: "www.gstatic.com/gaphone/loader.js",
        },
        Jo = { $h: "", Xi: "5" },
        Ko = {
            functionName: "_googCallTrackingImpl",
            de: [Io.functionName, Ho.functionName],
            Yf: "www.gstatic.com/call-tracking/call-tracking_" +
                (Jo.$h || Jo.Xi) +
                ".js",
        },
        Lo = {},
        Mo = function(a, b, c, d) {
            jg(22);
            if (c) {
                d = d || {};
                var e = Go(Ho, d, a),
                    f = { ak: a, cl: b };
                void 0 === d.jb && (f.autoreplace = c);
                e(2, d.jb, f, c, 0, Sa(), d.options);
            }
        },
        No = function(a, b, c, d) {
            jg(21);
            if (b && c) {
                d = d || {};
                for (
                    var e = {
                            countryNameCode: c,
                            destinationNumber: b,
                            retrievalTime: Sa(),
                        },
                        f = 0; f < a.length; f++
                ) {
                    var g = a[f];
                    Lo[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.P.length ?
                            ((e.adData = { ak: g.P[0], cl: g.P[1] }), (Lo[g.id] = !0)) :
                            g &&
                            "UA" === g.prefix &&
                            !e.gaData &&
                            ((e.gaData = { gaWpid: g.containerId }), (Lo[g.id] = !0)));
                }
                (e.gaData || e.adData) && Go(Ko, d)(d.jb, e, d.options);
            }
        },
        Oo = function() {
            var a = !1;
            return a;
        },
        Po = function(a, b) {
            if (a)
                if (on()) {} else {
                    if (m(a)) {
                        var c = Co(a);
                        if (!c) return;
                        a = c;
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(Q.Ei);
                    if (f && Ea(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var h = Co(f[g]);
                            h &&
                                (d.push(h),
                                    (a.id === h.id ||
                                        (a.id === a.containerId &&
                                            a.containerId === h.containerId)) &&
                                    (e = !0));
                        }
                    }
                    if (!d || e) {
                        var k = b.getWithConfig(Q.xg),
                            n;
                        if (k) {
                            Ea(k) ? (n = k) : (n = [k]);
                            var p = b.getWithConfig(Q.vg),
                                q = b.getWithConfig(Q.wg),
                                r = b.getWithConfig(Q.yg),
                                u = b.getWithConfig(Q.Di),
                                t = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var x = 0; x < n.length; x++)
                                if (x < v)
                                    if (d) No(d, n[x], u, { jb: t, options: r });
                                    else if ("AW" === a.prefix && a.P[1])
                                Oo() ?
                                No([a], n[x], u || "US", { jb: t, options: r }) :
                                Mo(a.P[0], a.P[1], n[x], { jb: t, options: r });
                            else if ("UA" === a.prefix)
                                if (Oo()) No([a], n[x], u || "US", { jb: t });
                                else {
                                    var y = a.containerId,
                                        w = n[x],
                                        A = { jb: t };
                                    jg(23);
                                    if (w) {
                                        A = A || {};
                                        var B = Go(Io, A, y),
                                            E = {};
                                        void 0 !== A.jb ? (E.receiver = A.jb) : (E.replace = w);
                                        E.ga_wpid = y;
                                        E.destination = w;
                                        B(2, Sa(), E);
                                    }
                                }
                        }
                    }
                }
        };
    var Xo = !1;

    function Yo() {
        if (Ca(Fb.joinAdInterestGroup)) return !0;
        Xo || (Rn(""), (Xo = !0));
        return Ca(Fb.joinAdInterestGroup);
    }

    function Zo(a, b) {
        var c = void 0;
        try {
            c = J.querySelector('iframe[data-tagging-id="' + b + '"]');
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6e4 > Ta() - d) {
                gg("TAGGING", 9);
                return;
            }
        } else
            try {
                if (
                    50 <=
                    J.querySelectorAll(
                        'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
                    ).length
                ) {
                    gg("TAGGING", 10);
                    return;
                }
            } catch (e) {}
        Ob(
            a,
            void 0, { allow: "join-ad-interest-group" }, { taggingId: b, loadTime: Ta() },
            c
        );
    }
    var Ip = function(a, b, c) {
            this.xa = a;
            this.eventName = b;
            this.D = c;
            this.F = {};
            this.metadata = {};
            this.Ia = !1;
        },
        Jp = function(a, b, c) {
            var d = a.D.getWithConfig(b);
            void 0 !== d ? (a.F[b] = d) : void 0 !== c && (a.F[b] = c);
        },
        Kp = function(a, b, c) {
            var d = Vh(a.xa);
            return d && d.hasOwnProperty(b) ? d[b] : c;
        };

    function Lp(a) {
        return {
            getDestinationId: function() {
                return a.xa;
            },
            getEventName: function() {
                return a.eventName;
            },
            setEventName: function(b) {
                return void(a.eventName = b);
            },
            getHitData: function(b) {
                return a.F[b];
            },
            setHitData: function(b, c) {
                return void(a.F[b] = c);
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.F[b] && (a.F[b] = c);
            },
            copyToHitData: function(b, c) {
                Jp(a, b, c);
            },
            getMetadata: function(b) {
                return a.metadata[b];
            },
            setMetadata: function(b, c) {
                return void(a.metadata[b] = c);
            },
            abort: function() {
                return void(a.Ia = !0);
            },
            getProcessedEvent: function() {
                return a;
            },
        };
    }
    var bq = function() {
            var a = !0;
            (mo(7) && mo(9) && mo(10)) || (a = !1);
            return a;
        },
        cq = function() {
            var a = !0;
            (mo(3) && mo(4)) || (a = !1);
            return a;
        };
    var gq = function(a, b) {},
        hq = function(a, b) {
            var c = a[Q.Vc],
                d = b + ".",
                e = a[Q.U] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                g = !!a[Q.ic];
            e = String(e).replace(/\s+/g, "").split(",");
            var h = Tm();
            h(d + "require", "linker");
            h(d + "linker:autoLink", e, f, g);
        },
        lq = function(a, b, c) {
            if (yg() && (!c.isGtmEvent || !iq[a])) {
                var d = !Lg(Q.T),
                    e = function(f) {
                        var g,
                            h,
                            k = Tm(),
                            n = jq(b, "", c),
                            p,
                            q = n.createOnlyFields._useUp;
                        if (c.isGtmEvent || kq(b, n.createOnlyFields)) {
                            c.isGtmEvent &&
                                ((g = "gtm" + Gh()),
                                    (h = n.createOnlyFields),
                                    n.gtmTrackerName && (h.name = g));
                            k(function() {
                                var u = k.getByName(b);
                                u && (p = u.get("clientId"));
                                c.isGtmEvent || k.remove(b);
                            });
                            k("create", a, c.isGtmEvent ? h : n.createOnlyFields);
                            d &&
                                Lg(Q.T) &&
                                ((d = !1),
                                    k(function() {
                                        var u = Tm().getByName(c.isGtmEvent ? g : b);
                                        !u ||
                                            (u.get("clientId") == p && q) ||
                                            (c.isGtmEvent ?
                                                ((n.fieldsToSet["&gcu"] = "1"),
                                                    (n.fieldsToSet["&gcut"] = Q.De[f])) :
                                                ((n.fieldsToSend["&gcu"] = "1"),
                                                    (n.fieldsToSend["&gcut"] = Q.De[f])),
                                                u.set(n.fieldsToSet),
                                                c.isGtmEvent ?
                                                u.send("pageview") :
                                                u.send("pageview", n.fieldsToSend));
                                    }));
                            c.isGtmEvent &&
                                k(function() {
                                    k.remove(g);
                                });
                        }
                    };
                Og(function() {
                    return e(Q.T);
                }, Q.T);
                Og(function() {
                    return e(Q.H);
                }, Q.H);
                c.isGtmEvent && (iq[a] = !0);
            }
        },
        mq = function(a, b) {
            nn() && b && (a[Q.Fb] = b);
        },
        vq = function(a, b, c) {
            function d() {
                var H = c.getWithConfig(Q.Qc);
                h(function() {
                    if (!c.isGtmEvent && nc(H)) {
                        var L = t.fieldsToSend,
                            U = k().getByName(n),
                            R;
                        for (R in H)
                            if (
                                H.hasOwnProperty(R) &&
                                /^(dimension|metric)\d+$/.test(R) &&
                                void 0 != H[R]
                            ) {
                                var O = U.get(fq(H[R]));
                                nq(L, R, O);
                            }
                    }
                });
            }

            function e() {
                if (t.displayfeatures) {
                    var H = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, { cookieName: H });
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                h = c.isGtmEvent ? Vm(c.getWithConfig("gaFunctionName")) : Vm();
            if (Ca(h)) {
                var k = Tm,
                    n;
                c.isGtmEvent ?
                    (n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName")) :
                    (n = "gtag_" + f.split("-").join("_"));
                var p = function(H) {
                        var L = [].slice.call(arguments, 0);
                        L[0] = n ? n + "." + L[0] : "" + L[0];
                        h.apply(window, L);
                    },
                    q = function(H) {
                        var L = function(T, qa) {
                                for (var Fa = 0; qa && Fa < qa.length; Fa++) p(T, qa[Fa]);
                            },
                            U = c.isGtmEvent,
                            R = U ? oq(t) : pq(b, c);
                        if (R) {
                            var O = {};
                            mq(O, H);
                            p("require", "ec", "ec.js", O);
                            U && R.yf && p("set", "&cu", R.yf);
                            var Z = R.action;
                            if (U || "impressions" === Z)
                                if ((L("ec:addImpression", R.wh), !U)) return;
                            if ("promo_click" === Z || "promo_view" === Z || (U && R.sd)) {
                                var ba = R.sd;
                                L("ec:addPromo", ba);
                                if (ba && 0 < ba.length && "promo_click" === Z) {
                                    U ? p("ec:setAction", Z, R.wb) : p("ec:setAction", Z);
                                    return;
                                }
                                if (!U) return;
                            }
                            "promo_view" !== Z &&
                                "impressions" !== Z &&
                                (L("ec:addProduct", R.Tb), p("ec:setAction", Z, R.wb));
                        }
                    },
                    r = function(H) {
                        if (H) {
                            var L = {};
                            if (nc(H))
                                for (var U in qq) qq.hasOwnProperty(U) && rq(qq[U], U, H[U], L);
                            mq(L, y);
                            p("require", "linkid", L);
                        }
                    },
                    u = function() {
                        if (on()) {} else {
                            var H = c.getWithConfig(Q.Ci);
                            H &&
                                (p("require", H, { dataLayer: nh.ca }), p("require", "render"));
                        }
                    },
                    t = jq(n, b, c),
                    v = function(H, L, U) {
                        U && (L = "" + L);
                        t.fieldsToSend[H] = L;
                    };
                !c.isGtmEvent &&
                    kq(n, t.createOnlyFields) &&
                    (h(function() {
                            k() && k().remove(n);
                        }),
                        (sq[n] = !1));
                h("create", f, t.createOnlyFields);
                if (t.createOnlyFields[Q.Fb] && !c.isGtmEvent) {
                    var x = ln(t.createOnlyFields[Q.Fb], "/analytics.js");
                    x && (g = x);
                }
                var y = c.isGtmEvent ? t.fieldsToSet[Q.Fb] : t.createOnlyFields[Q.Fb];
                if (y) {
                    var w = c.isGtmEvent ? t.fieldsToSet[Q.Ld] : t.createOnlyFields[Q.Ld];
                    w && !sq[n] && ((sq[n] = !0), h(Zm(n, w)));
                }
                c.isGtmEvent ?
                    t.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") :
                    (d(), r(t.linkAttribution));
                var A = t[Q.va];
                A && A[Q.U] && hq(A, n);
                p("set", t.fieldsToSet);
                if (c.isGtmEvent) {
                    if (t.enableLinkId) {
                        var B = {};
                        mq(B, y);
                        p("require", "linkid", "linkid.js", B);
                    }
                    yg() && lq(f, n, c);
                }
                if (b === Q.Ic)
                    if (c.isGtmEvent) {
                        e();
                        if (t.remarketingLists) {
                            var E = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", { cookieName: E });
                        }
                        q(y);
                        p("send", "pageview");
                        t.createOnlyFields._useUp && Wm(n + ".");
                    } else u(), p("send", "pageview", t.fieldsToSend);
                else
                    b === Q.La ?
                    (u(),
                        Po(f, c),
                        c.getWithConfig(Q.vb) && (tk(["aw", "dc"]), Wm(n + ".")),
                        0 != t.sendPageView && p("send", "pageview", t.fieldsToSend),
                        lq(f, n, c), !c.isGtmEvent &&
                        0 < c.getEventModelKeys().length &&
                        (jg(68), 1 < S.configCount && jg(69))) :
                    b === Q.Sa ?
                    gq(n, c) :
                    "screen_view" === b ?
                    p("send", "screenview", t.fieldsToSend) :
                    "timing_complete" === b ?
                    ((t.fieldsToSend.hitType = "timing"),
                        v("timingCategory", t.eventCategory, !0),
                        c.isGtmEvent ?
                        v("timingVar", t.timingVar, !0) :
                        v("timingVar", t.name, !0),
                        v("timingValue", Na(t.value)),
                        void 0 !== t.eventLabel && v("timingLabel", t.eventLabel, !0),
                        p("send", t.fieldsToSend)) :
                    "exception" === b ?
                    p("send", "exception", t.fieldsToSend) :
                    ("" === b && c.isGtmEvent) ||
                    ("track_social" === b && c.isGtmEvent ?
                        ((t.fieldsToSend.hitType = "social"),
                            v("socialNetwork", t.socialNetwork, !0),
                            v("socialAction", t.socialAction, !0),
                            v("socialTarget", t.socialTarget, !0)) :
                        ((c.isGtmEvent || tq[b]) && q(y),
                            c.isGtmEvent && e(),
                            (t.fieldsToSend.hitType = "event"),
                            v("eventCategory", t.eventCategory, !0),
                            v("eventAction", t.eventAction || b, !0),
                            void 0 !== t.eventLabel && v("eventLabel", t.eventLabel, !0),
                            void 0 !== t.value && v("eventValue", Na(t.value))),
                        p("send", t.fieldsToSend));
                var C = !1;
                var D = uq;
                C && (D = c.getContainerTypeLoaded("UA"));
                if (!D && !c.isGtmEvent) {
                    uq = !0;
                    C && c.setContainerTypeLoaded("UA", !0);
                    Om();
                    var F = function() {
                            C && c.setContainerTypeLoaded("UA", !1);
                            c.onFailure();
                        },
                        P = function() {
                            k().loaded || F();
                        };
                    on() ? K(P) : Mb(g, P, F);
                }
            } else K(c.onFailure);
        },
        wq = function(a, b, c, d) {
            Pg(
                function() {
                    vq(a, b, d);
                }, [Q.T, Q.H]
            );
        },
        yq = function(a, b) {
            function c(f) {
                function g(p, q) {
                    for (var r = 0; r < q.length; r++) {
                        var u = q[r];
                        if (f[u]) {
                            k[p] = f[u];
                            break;
                        }
                    }
                }

                function h() {
                    if (f.category) k.category = f.category;
                    else {
                        for (var p = "", q = 0; q < xq.length; q++)
                            void 0 !== f[xq[q]] && (p && (p += "/"), (p += f[xq[q]]));
                        p && (k.category = p);
                    }
                }
                var k = oc(f),
                    n = !1;
                if (n || b)
                    g("id", ["id", "item_id", "promotion_id"]),
                    g("name", ["name", "item_name", "promotion_name"]),
                    g("brand", ["brand", "item_brand"]),
                    g("variant", ["variant", "item_variant"]),
                    g("list", ["list_name", "item_list_name"]),
                    g("position", ["list_position", "creative_slot", "index"]),
                    h();
                g("listPosition", ["list_position"]);
                g("creative", ["creative_name"]);
                g("list", ["list_name"]);
                g("position", ["list_position", "creative_slot"]);
                return k;
            }
            b = void 0 === b ? !1 : b;
            for (var d = [], e = 0; a && e < a.length; e++)
                a[e] && nc(a[e]) && d.push(c(a[e]));
            return d.length ? d : void 0;
        },
        zq = function(a) {
            return Lg(a);
        },
        Aq = !1;
    var uq,
        sq = {},
        iq = {},
        Bq = {},
        dq = Object.freeze(
            ((Bq.client_storage = "storage"),
                (Bq.sample_rate = 1),
                (Bq.site_speed_sample_rate = 1),
                (Bq.store_gac = 1),
                (Bq.use_amp_client_id = 1),
                (Bq[Q.ra] = 1),
                (Bq[Q.Da] = "storeGac"),
                (Bq[Q.sa] = 1),
                (Bq[Q.Ea] = 1),
                (Bq[Q.Ua] = 1),
                (Bq[Q.bc] = 1),
                (Bq[Q.pb] = 1),
                (Bq[Q.cc] = 1),
                Bq)
        ),
        Cq = {},
        Dq = Object.freeze(
            ((Cq._cs = 1),
                (Cq._useUp = 1),
                (Cq.allowAnchor = 1),
                (Cq.allowLinker = 1),
                (Cq.alwaysSendReferrer = 1),
                (Cq.clientId = 1),
                (Cq.cookieDomain = 1),
                (Cq.cookieExpires = 1),
                (Cq.cookieFlags = 1),
                (Cq.cookieName = 1),
                (Cq.cookiePath = 1),
                (Cq.cookieUpdate = 1),
                (Cq.legacyCookieDomain = 1),
                (Cq.legacyHistoryImport = 1),
                (Cq.name = 1),
                (Cq.sampleRate = 1),
                (Cq.siteSpeedSampleRate = 1),
                (Cq.storage = 1),
                (Cq.storeGac = 1),
                (Cq.useAmpClientId = 1),
                (Cq._cd2l = 1),
                Cq)
        ),
        Eq = Object.freeze({ anonymize_ip: 1 }),
        Fq = {},
        eq = Object.freeze(
            ((Fq.campaign = {
                    content: "campaignContent",
                    id: "campaignId",
                    medium: "campaignMedium",
                    name: "campaignName",
                    source: "campaignSource",
                    term: "campaignKeyword",
                }),
                (Fq.app_id = 1),
                (Fq.app_installer_id = 1),
                (Fq.app_name = 1),
                (Fq.app_version = 1),
                (Fq.description = "exDescription"),
                (Fq.fatal = "exFatal"),
                (Fq.language = 1),
                (Fq.page_hostname = "hostname"),
                (Fq.transport_type = "transport"),
                (Fq[Q.ma] = "currencyCode"),
                (Fq[Q.sg] = 1),
                (Fq[Q.hb] = "location"),
                (Fq[Q.Ze] = "page"),
                (Fq[Q.Va] = "referrer"),
                (Fq[Q.Wc] = "title"),
                (Fq[Q.Bg] = 1),
                (Fq[Q.Na] = 1),
                Fq)
        ),
        Gq = {},
        Hq = Object.freeze(
            ((Gq.content_id = 1),
                (Gq.event_action = 1),
                (Gq.event_category = 1),
                (Gq.event_label = 1),
                (Gq.link_attribution = 1),
                (Gq.name = 1),
                (Gq[Q.va] = 1),
                (Gq[Q.rg] = 1),
                (Gq[Q.Fa] = 1),
                (Gq[Q.oa] = 1),
                Gq)
        ),
        Iq = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1,
        }),
        xq = Object.freeze([
            "item_category",
            "item_category2",
            "item_category3",
            "item_category4",
            "item_category5",
        ]),
        Jq = {},
        qq = Object.freeze(
            ((Jq.levels = 1), (Jq[Q.Ea] = "duration"), (Jq[Q.bc] = 1), Jq)
        ),
        Kq = {},
        Lq = Object.freeze(
            ((Kq.anonymize_ip = 1),
                (Kq.fatal = 1),
                (Kq.send_page_view = 1),
                (Kq.store_gac = 1),
                (Kq.use_amp_client_id = 1),
                (Kq[Q.Da] = 1),
                (Kq[Q.sg] = 1),
                Kq)
        ),
        rq = function(a, b, c, d) {
            if (void 0 !== c)
                if (
                    (Lq[b] && (c = Oa(c)),
                        "anonymize_ip" !== b || c || (c = void 0),
                        1 === a)
                )
                    d[fq(b)] = c;
                else if (m(a)) d[a] = c;
            else
                for (var e in a)
                    a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
        },
        fq = function(a) {
            return a && m(a) ?
                a.replace(/(_[a-z])/g, function(b) {
                    return b[1].toUpperCase();
                }) :
                a;
        },
        Mq = {},
        tq = Object.freeze(
            ((Mq.checkout_progress = 1),
                (Mq.select_content = 1),
                (Mq.set_checkout_option = 1),
                (Mq[Q.Yb] = 1),
                (Mq[Q.Zb] = 1),
                (Mq[Q.Cb] = 1),
                (Mq[Q.Db] = 1),
                (Mq[Q.$b] = 1),
                (Mq[Q.Aa] = 1),
                (Mq[Q.ac] = 1),
                (Mq[Q.Ba] = 1),
                Mq)
        ),
        Nq = {},
        Oq = Object.freeze(
            ((Nq.checkout_progress = 1),
                (Nq.set_checkout_option = 1),
                (Nq[Q.hg] = 1),
                (Nq[Q.Yb] = 1),
                (Nq[Q.Zb] = 1),
                (Nq[Q.Cb] = 1),
                (Nq[Q.Aa] = 1),
                (Nq[Q.ac] = 1),
                (Nq[Q.ig] = 1),
                Nq)
        ),
        Pq = {},
        Qq = Object.freeze(
            ((Pq.generate_lead = 1),
                (Pq.login = 1),
                (Pq.search = 1),
                (Pq.select_content = 1),
                (Pq.share = 1),
                (Pq.sign_up = 1),
                (Pq.view_search_results = 1),
                (Pq[Q.Db] = 1),
                (Pq[Q.$b] = 1),
                (Pq[Q.Ba] = 1),
                Pq)
        ),
        Rq = function(a) {
            var b = "general";
            Oq[a] ?
                (b = "ecommerce") :
                Qq[a] ?
                (b = "engagement") :
                "exception" === a && (b = "error");
            return b;
        },
        Sq = {},
        Tq = Object.freeze(
            ((Sq.view_search_results = 1),
                (Sq[Q.Db] = 1),
                (Sq[Q.$b] = 1),
                (Sq[Q.Ba] = 1),
                Sq)
        ),
        nq = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c);
        },
        Uq = function(a) {
            if (Ea(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
                    }
                }
                return 0 < b.length ? b.join("!") : void 0;
            }
        },
        jq = function(a, b, c) {
            var d = function(P) {
                    return c.getWithConfig(P);
                },
                e = {},
                f = {},
                g = {},
                h = {},
                k = Uq(d(Q.Bi));
            !c.isGtmEvent && k && nq(f, "exp", k);
            g["&gtm"] = Mn(!0);
            yg() && (h._cs = zq);
            var n = d(Q.Qc);
            if (!c.isGtmEvent && nc(n))
                for (var p in n)
                    if (
                        n.hasOwnProperty(p) &&
                        /^(dimension|metric)\d+$/.test(p) &&
                        void 0 != n[p]
                    ) {
                        var q = d(String(n[p]));
                        void 0 !== q && nq(f, p, q);
                    }
            for (var r = c.getTopLevelKeys(), u = 0; u < r.length; ++u) {
                var t = r[u];
                if (c.isGtmEvent) {
                    var v = d(t);
                    Iq.hasOwnProperty(t) ?
                        (e[t] = v) :
                        Dq.hasOwnProperty(t) ?
                        (h[t] = v) :
                        (g[t] = v);
                } else {
                    var x = void 0;
                    x = t !== Q.aa ? d(t) : c.getMergedValues(t);
                    if (Hq.hasOwnProperty(t)) rq(Hq[t], t, x, e);
                    else if (Eq.hasOwnProperty(t)) rq(Eq[t], t, x, g);
                    else if (eq.hasOwnProperty(t)) rq(eq[t], t, x, f);
                    else if (dq.hasOwnProperty(t)) rq(dq[t], t, x, h);
                    else if (/^(dimension|metric|content_group)\d+$/.test(t))
                        rq(1, t, x, f);
                    else if (t === Q.aa) {
                        if (!Aq) {
                            var y = bb(x);
                            y && (f["&did"] = y);
                        }
                        var w = void 0,
                            A = void 0;
                        b === Q.La ?
                            (w = bb(c.getMergedValues(t), ".")) :
                            ((w = bb(c.getMergedValues(t, 1), ".")),
                                (A = bb(c.getMergedValues(t, 2), ".")));
                        w && (f["&gdid"] = w);
                        A && (f["&edid"] = A);
                    } else
                        t === Q.Ma && 0 > r.indexOf(Q.bc) && (h.cookieName = x + "_ga");
                }
            }
            (!1 !== d(Q.oi) && !1 !== d(Q.Jc) && bq()) || (g.allowAdFeatures = !1);
            (!1 !== d(Q.da) && cq()) || (g.allowAdPersonalizationSignals = !1);
            !c.isGtmEvent && d(Q.vb) && (h._useUp = !0);
            if (c.isGtmEvent) {
                h.name = h.name || e.gtmTrackerName;
                var B = g.hitCallback;
                g.hitCallback = function() {
                    Ca(B) && B();
                    c.onSuccess();
                };
            } else {
                nq(h, "cookieDomain", "auto");
                nq(g, "forceSSL", !0);
                nq(e, "eventCategory", Rq(b));
                Tq[b] && nq(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ?
                    nq(e, "eventLabel", d(Q.rg)) :
                    "search" === b || "view_search_results" === b ?
                    nq(e, "eventLabel", d(Q.Ii)) :
                    "select_content" === b && nq(e, "eventLabel", d(Q.vi));
                var E = e[Q.va] || {},
                    C = E[Q.hc];
                C || (0 != C && E[Q.U]) ?
                    (h.allowLinker = !0) :
                    !1 === C && nq(h, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                h.name = a;
            }
            yg() &&
                ((g["&gcs"] = Mg()),
                    Lg(Q.T) || (h.storage = "none"),
                    Lg(Q.H) || ((g.allowAdFeatures = !1), (h.storeGac = !1)));
            var D = d(Q.ba) || d(Q.Fb),
                F = d(Q.Ld);
            D && (c.isGtmEvent || (h[Q.Fb] = D), (h._cd2l = !0));
            F && !c.isGtmEvent && (h[Q.Ld] = F);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = h;
            return e;
        },
        oq = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.yf = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.wh = "impressions" === b.translateIfKeyEquals ? yq(d, !0) : d;
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.sd = "promoView" === b.translateIfKeyEquals ? yq(e, !0) : e;
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.sd = "promoClick" === b.translateIfKeyEquals ? yq(f, !0) : f;
                c.wb = b.promoClick.actionField;
                return c;
            }
            for (var g in b)
                if (
                    b.hasOwnProperty(g) &&
                    "translateIfKeyEquals" !== g &&
                    "impressions" !== g &&
                    "promoView" !== g &&
                    "promoClick" !== g &&
                    "currencyCode" !== g
                ) {
                    c.action = g;
                    var h = b[g].products;
                    c.Tb = "products" === b.translateIfKeyEquals ? yq(h, !0) : h;
                    c.wb = b[g].actionField;
                    break;
                }
            return Object.keys(c).length ? c : null;
        },
        pq = function(a, b) {
            function c(u) {
                return {
                    id: d(Q.ub),
                    affiliation: d(Q.yi),
                    revenue: d(Q.oa),
                    tax: d(Q.mg),
                    shipping: d(Q.Se),
                    coupon: d(Q.zi),
                    list: d(Q.Re) || u,
                };
            }
            for (
                var d = function(u) {
                        return b.getWithConfig(u);
                    },
                    e = d(Q.fa),
                    f,
                    g = 0; e && g < e.length && !(f = e[g][Q.Re]); g++
            );
            var h = d(Q.Qc);
            if (nc(h))
                for (var k = 0; e && k < e.length; ++k) {
                    var n = e[k],
                        p;
                    for (p in h)
                        h.hasOwnProperty(p) &&
                        /^(dimension|metric)\d+$/.test(p) &&
                        void 0 != h[p] &&
                        nq(n, p, n[h[p]]);
                }
            var q = null,
                r = d(Q.Ai);
            a === Q.Aa || a === Q.ac ?
                (q = { action: a, wb: c(), Tb: yq(e) }) :
                a === Q.Yb ?
                (q = { action: "add", Tb: yq(e) }) :
                a === Q.Zb ?
                (q = { action: "remove", Tb: yq(e) }) :
                a === Q.Ba ?
                (q = { action: "detail", wb: c(f), Tb: yq(e) }) :
                a === Q.Db ?
                (q = { action: "impressions", wh: yq(e) }) :
                "view_promotion" === a ?
                (q = { action: "promo_view", sd: yq(r) }) :
                "select_content" === a && r && 0 < r.length ?
                (q = { action: "promo_click", sd: yq(r) }) :
                "select_content" === a ?
                (q = { action: "click", wb: { list: d(Q.Re) || f }, Tb: yq(e) }) :
                a === Q.Cb || "checkout_progress" === a ?
                (q = {
                    action: "checkout",
                    Tb: yq(e),
                    wb: { step: a === Q.Cb ? 1 : d(Q.lg), option: d(Q.kg) },
                }) :
                "set_checkout_option" === a &&
                (q = {
                    action: "checkout_option",
                    wb: { step: d(Q.lg), option: d(Q.kg) },
                });
            q && (q.yf = d(Q.ma));
            return q;
        },
        Vq = {},
        kq = function(a, b) {
            var c = Vq[a];
            Vq[a] = oc(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1;
        };
    var Wq = null,
        Xq = !1;

    function Yq(a) {
        return Xq && !a ? (Wq = Wq || new Zq()) : (S.gcq = S.gcq || new Zq());
    }
    var $q = function(a, b, c) {
            Yq().register(a, b, c);
        },
        ar = function(a, b, c, d) {
            Yq().push("event", [b, a], c, d);
        },
        br = function(a, b, c) {
            Yq().insert("event", [b, a], c);
        },
        cr = function(a, b) {
            Yq().push("config", [a], b);
        },
        dr = function(a, b, c, d) {
            Yq().push("get", [a, b], c, d);
        },
        er = function(a) {
            return Yq().getRemoteConfig(a);
        },
        fr = function() {
            var a = Q.ba;
            return Yq().getGlobalConfigValue && Yq().getGlobalConfigValue(a);
        },
        gr = {},
        hr = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.claimed = this.g = !1;
        },
        ir = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.X = c || "";
            this.g = d;
            this.o = e;
        },
        Zq = function() {
            this.o = {};
            this.s = {};
            this.g = [];
            this.C = { AW: !1, UA: !1 };
        },
        jr = function(a, b) {
            var c = Co(b);
            return (a.o[c.containerId] = a.o[c.containerId] || new hr());
        },
        kr = function(a, b, c, d) {
            if (b) {
                var e = Co(b);
                if (e && 1 === jr(a, b).status) {
                    jr(a, b).status = 2;
                    var f = {};
                    bm &&
                        (f.timeoutId = z.setTimeout(function() {
                            jg(38);
                            El();
                        }, 3e3));
                    a.push("require", [f], e.containerId);
                    gr[e.containerId] = Ta();
                    if (on()) {} else 2 === d ? un(e.containerId, c) : tn(e.containerId, c, !0);
                }
            }
        },
        lr = function(a, b, c, d) {
            if (d.X) {
                var e = jr(a, d.X),
                    f = e.s;
                if (f) {
                    var g = oc(c),
                        h = oc(e.targetConfig[d.X]),
                        k = oc(e.containerConfig),
                        n = oc(e.remoteConfig),
                        p = oc(a.s),
                        q = {};
                    try {
                        q = oc(Jh);
                    } catch (x) {
                        jg(72);
                    }
                    var r = Mh("gtm.uniqueEventId"),
                        u = Co(d.X).prefix,
                        t = Va(function() {
                            var x = g[Q.fc];
                            x && K(x);
                        }),
                        v = Fn(
                            En(
                                Gn(
                                    Dn(Bn(An(Cn(zn(yn(xn(g), h), k), n), p), q), function() {
                                        om(r, u, "2");
                                        t();
                                    }),
                                    function() {
                                        om(r, u, "3");
                                        t();
                                    }
                                ),
                                function(x, y) {
                                    a.C[x] = y;
                                }
                            ),
                            function(x) {
                                return a.C[x];
                            }
                        );
                    try {
                        om(r, u, "1"), xm(d.type, d.X, v);
                        f(d.X, b, d.s, v);
                    } catch (x) {
                        om(r, u, "4");
                    }
                }
            }
        };
    l = Zq.prototype;
    l.register = function(a, b, c) {
        var d = jr(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (oc(d.remoteConfig, c), (d.remoteConfig = c));
            var e = Co(a),
                f = gr[e.containerId];
            if (void 0 !== f) {
                var g = S[e.containerId].bootstrap,
                    h = e.prefix.toUpperCase();
                S[e.containerId]._spx && (h = h.toLowerCase());
                var k = Mh("gtm.uniqueEventId"),
                    n = h,
                    p = Ta() - g;
                if (bm && !Jl[k]) {
                    k !== Fl && (Al(), (Fl = k));
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Ql = Ql ? Ql + "," + q : "&cl=" + q;
                }
                delete gr[e.containerId];
            }
            this.flush();
        }
    };
    l.notifyContainerLoaded = function(a, b) {
        var c = this,
            d = function(f) {
                if (Co(f)) {
                    var g = jr(c, f);
                    g.status = 3;
                    g.claimed = !0;
                }
            };
        d(a);
        for (var e = 0; e < b.length; e++) d(b[e]);
        this.flush();
    };
    l.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!Co(c)) return;
            kr(this, c, b[0][Q.ba] || this.s[Q.ba], "event" === a ? 2 : 1);
            jr(this, c).g && (d = !1);
        }
        this.g.push(new ir(a, Math.floor(Ta() / 1e3), c, b, d));
        d || this.flush();
    };
    l.insert = function(a, b, c) {
        var d = Math.floor(Ta() / 1e3);
        0 < this.g.length ?
            this.g.splice(1, 0, new ir(a, d, c, b, !1)) :
            this.g.push(new ir(a, d, c, b, !1));
    };
    l.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
            var f = this.g[0];
            if (f.o)
                !f.X || jr(this, f.X).g ? ((f.o = !1), this.g.push(f)) : c.push(f),
                this.g.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = jr(this, f.X);
                        if (3 !== g.status && !a) {
                            this.g.push.apply(this.g, c);
                            return;
                        }
                        bm && z.clearTimeout(f.g[0].timeoutId);
                        break;
                    case "set":
                        La(f.g[0], function(r, u) {
                            oc($a(r, u), b.s);
                        });
                        break;
                    case "config":
                        g = jr(this, f.X);
                        if (g.claimed) break;
                        e.ab = {};
                        La(
                            f.g[0],
                            (function(r) {
                                return function(u, t) {
                                    oc($a(u, t), r.ab);
                                };
                            })(e)
                        );
                        var h = !!e.ab[Q.Sd];
                        delete e.ab[Q.Sd];
                        var k = Co(f.X),
                            n = k.containerId === k.id;
                        h || (n ? (g.containerConfig = {}) : (g.targetConfig[f.X] = {}));
                        (g.g && h) || lr(this, Q.La, e.ab, f);
                        g.g = !0;
                        delete e.ab[Q.Ib];
                        n
                            ?
                            oc(e.ab, g.containerConfig) :
                            (oc(e.ab, g.targetConfig[f.X]), jg(70));
                        d = !0;
                        break;
                    case "event":
                        g = jr(this, f.X);
                        if (g.claimed) break;
                        e.Bd = {};
                        La(
                            f.g[0],
                            (function(r) {
                                return function(u, t) {
                                    oc($a(u, t), r.Bd);
                                };
                            })(e)
                        );
                        lr(this, f.g[1], e.Bd, f);
                        break;
                    case "get":
                        if (((g = jr(this, f.X)), !g.claimed)) {
                            var p = {},
                                q = ((p[Q.fb] = f.g[0]), (p[Q.rb] = f.g[1]), p);
                            lr(this, Q.Sa, q, f);
                        }
                }
                this.g.shift();
                mr(this, f);
            }
            e = { ab: e.ab, Bd: e.Bd };
        }
        this.g.push.apply(this.g, c);
        d && this.flush();
    };
    var mr = function(a, b) {
        if ("require" !== b.type)
            if (b.X)
                for (
                    var c = a.getCommandListeners(b.X)[b.type] || [], d = 0; d < c.length; d++
                )
                    c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]();
                    }
    };
    Zq.prototype.getRemoteConfig = function(a) {
        return jr(this, a).remoteConfig;
    };
    Zq.prototype.getCommandListeners = function(a) {
        return jr(this, a).o;
    };
    Zq.prototype.getGlobalConfigValue = function(a) {
        return this.s[a];
    };
    var nr = [Q.Bb, Q.kc, Q.Vd],
        pr = function(a, b) {
            return 1 === arguments.length ? or("set", a) : or("set", a, b);
        },
        qr = function(a, b) {
            return 1 === arguments.length ? or("config", a) : or("config", a, b);
        },
        rr = function(a, b, c) {
            c = c || {};
            c[Q.Gb] = a;
            if ("G" === a.split("-")[0])
                for (var d in c) "_" === d[0] && -1 === nr.indexOf(d) && delete c[d];
            return or("event", b, c);
        };

    function or(a) {
        return arguments;
    }
    var tr = function(a) {
        if (sr(a)) return a;
        this.g = a;
    };
    tr.prototype.getUntrustedMessageValue = function() {
        return this.g;
    };
    var sr = function(a) {
            return !a || "object" !== lc(a) || nc(a) ?
                !1 :
                "getUntrustedMessageValue" in a;
        },
        ur = function(a) {
            if (sr(a)) return a.getUntrustedMessageValue();
        };
    tr.prototype.getUntrustedMessageValue = tr.prototype.getUntrustedMessageValue;
    var vr = function() {
        this.g = [];
        this.o = [];
    };
    vr.prototype.push = function(a, b, c) {
        var d = this.g.length + 1;
        sr(a) && (a = ur(a) || a);
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        a = new tr(a);
        var e = { debugContext: c, message: a, notBeforeEventId: b, priorityId: d };
        this.g.push(e);
        for (var f = 0; f < this.o.length; f++)
            try {
                this.o[f](e);
            } catch (g) {}
    };
    vr.prototype.listen = function(a) {
        this.o.push(a);
    };
    vr.prototype.get = function() {
        for (var a = {}, b = 0; b < this.g.length; b++) {
            var c = this.g[b],
                d = a[c.notBeforeEventId];
            d || ((d = []), (a[c.notBeforeEventId] = d));
            d.push(c);
        }
        return a;
    };
    var xr = function(a, b, c) {
            wr().push(a, b, c);
        },
        zr = function() {
            var a = yr;
            wr().listen(a);
        },
        Ar = function(a, b) {
            return (
                a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId
            );
        };

    function wr() {
        var a = S.mb;
        a || ((a = new vr()), (S.mb = a));
        return a;
    }
    var Br = !1;
    var Cr = !1;
    var Dr = function(a, b) {
        S.addDestinationToContainer ?
            S.addDestinationToContainer(a, b) :
            ((S.pendingDestinationIds = S.pendingDestinationIds || []),
                S.pendingDestinationIds.push([a, b]));
    };
    var Vr = function(a) {
            var b = S.zones;
            return b ?
                b.getIsAllowedFn(Xk(), a) :
                function() {
                    return !0;
                };
        },
        Wr = function(a) {
            var b = S.zones;
            return b ? b.isActive(Xk(), a) : !0;
        };
    var Zr = function(a, b) {
        for (var c = [], d = 0; d < je.length; d++)
            if (a[d]) {
                var e = je[d];
                var f = Mm(b.xb);
                try {
                    var g = dn(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
                    if (g) {
                        var h = c,
                            k = h.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = le[p];
                        k.call(h, {
                            Oh: n,
                            Fh: q ? q.priorityOverride || 0 : 0,
                            execute: g,
                        });
                    } else Xr(d, b), f();
                } catch (u) {
                    f();
                }
            }
        c.sort(Yr);
        for (var r = 0; r < c.length; r++) c[r].execute();
        return 0 < c.length;
    };

    function Yr(a, b) {
        var c,
            d = b.Fh,
            e = a.Fh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Oh,
                h = b.Oh;
            f = g > h ? 1 : g < h ? -1 : 0;
        }
        return f;
    }

    function Xr(a, b) {
        if (!bm) return;
        var c = function(d) {
            var e = b.If(je[d]) ? "3" : "4",
                f = te(je[d][Kd.Sg], b, []);
            f && f.length && c(f[0].index);
            hm(b.id, je[d], e);
            var g = te(je[d][Kd.Vg], b, []);
            g && g.length && c(g[0].index);
        };
        c(a);
    }
    var bs = !1,
        $r;
    var hs = function(a) {
        var b = Ta(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if ("gtm.js" === e) {
            if (bs) return !1;
            bs = !0;
        }
        var h,
            k = !1;
        if (Wr(c)) h = Vr(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
                return !1;
            k = !0;
            h = Vr(Number.MAX_SAFE_INTEGER);
        }
        gm(c, e);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = n;
        var r = {
                id: c,
                priorityId: d,
                name: e,
                If: Vk(h),
                Dk: [],
                zh: function() {
                    jg(6);
                },
                fh: ds(),
                gh: es(c),
                xb: new Im(q, p),
            },
            u = De(r);
        k && (u = fs(u));
        var t = Zr(u, r),
            v = !1;
        Nm(r.xb);
        ("gtm.js" !== e && "gtm.sync" !== e) || Ym(Ie.J);
        return gs(u, t) || v;
    };

    function es(a) {
        return function(b) {
            bm && (sc(b) || pm(a, "input", b));
        };
    }

    function ds() {
        var a = {};
        a.event = Rh("event", 1);
        a.ecommerce = Rh("ecommerce", 1);
        a.gtm = Rh("gtm");
        a.eventModel = Rh("eventModel");
        return a;
    }

    function fs(a) {
        for (var b = [], c = 0; c < a.length; c++)
            a[c] &&
            (ph[String(je[c][Kd.Jb])] && (b[c] = !0),
                void 0 !== je[c][Kd.Wi] && (b[c] = !0));
        return b;
    }

    function gs(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && je[c] && !qh[String(je[c][Kd.Jb])]) return !0;
        return !1;
    }
    var Me;
    var is = !1;
    var js = "HA GF G UA AW DC".split(" "),
        ks = !1,
        ls = !1,
        ms = 0;

    function ns(a) {
        a.hasOwnProperty("gtm.uniqueEventId") ||
            Object.defineProperty(a, "gtm.uniqueEventId", { value: Gh() });
        return a["gtm.uniqueEventId"];
    }

    function os(a) {
        delete a[Q.Vd];
        delete a[Q.Bb];
    }

    function ps() {
        return ks;
    }
    var qs = {
            config: function(a) {
                ns(a);
            },
            consent: function(a) {
                if (3 === a.length) {
                    jg(39);
                    var b = { eventId: ns(a), priorityId: a["gtm.priorityId"] },
                        c = a[1];
                    "default" === c ? Ig(a[2]) : "update" === c && Kg(a[2], b);
                }
            },
            event: function(a, b, c) {
                c = void 0 === c ? !1 : c;
                var d = a[1];
                if (!(2 > a.length) && m(d)) {
                    var e;
                    if (2 < a.length) {
                        if ((!nc(a[2]) && void 0 != a[2]) || 3 < a.length) return;
                        e = a[2];
                    }
                    var f = e,
                        g = {},
                        h = ((g.event = d), g);
                    f &&
                        ((h.eventModel = oc(f)),
                            f[Q.fc] && (h.eventCallback = f[Q.fc]),
                            f[Q.Kd] && (h.eventTimeout = f[Q.Kd]));
                    var k = !1,
                        n = !1;
                    if (e) {
                        e[Q.Vd] && 0 === Ie.J.indexOf("GTM") && (k = !0);
                        e[Q.Bb] && (n = !0);
                        os(h.eventModel);
                    }
                    var p = ns(a),
                        q = a["gtm.priorityId"];
                    h["gtm.uniqueEventId"] = p;
                    q && (h["gtm.priorityId"] = q);
                    return k ? void 0 : h;
                }
            },
            get: function(a) {},
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    ls = !0;
                    ps();
                    var b = {};
                    return (
                        (b.event = "gtm.js"),
                        (b["gtm.start"] = a[1].getTime()),
                        (b["gtm.uniqueEventId"] = ns(a)),
                        b
                    );
                }
            },
            policy: function(a) {
                if (3 === a.length && m(a[1]) && Ca(a[2])) {
                    var b = a[1],
                        c = a[2],
                        d = Me.o;
                    d.g[b] ? d.g[b].push(c) : (d.g[b] = [c]);
                    if ((jg(74), "all" === a[1])) {
                        jg(75);
                        var e = !1;
                        try {
                            e = a[2](Ie.J, "unknown", {});
                        } catch (f) {}
                        e || jg(76);
                    }
                } else {
                    jg(73);
                }
            },
            set: function(a) {
                var b;
                2 == a.length && nc(a[1]) ?
                    (b = oc(a[1])) :
                    3 == a.length &&
                    m(a[1]) &&
                    ((b = {}),
                        nc(a[2]) || Ea(a[2]) ? (b[a[1]] = oc(a[2])) : (b[a[1]] = a[2]));
                if (b) {
                    var c = ns(a),
                        d = a["gtm.priorityId"];
                    b._clear = !0;
                    return b;
                }
            },
        },
        rs = { policy: !0 };
    var ss = function(a) {
            var b = z[nh.ca].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break;
                    }
                c && (b.end(), (b.end = null));
            }
        },
        ts = function(a) {
            var b = z[nh.ca],
                c = b && b.hide;
            c && c.end && (c[a] = !0);
        };
    var us = !1,
        vs = [];

    function ws() {
        if (!us) {
            us = !0;
            for (var a = 0; a < vs.length; a++) K(vs[a]);
        }
    }
    var xs = function(a) {
        us ? K(a) : vs.push(a);
    };
    var Ns = 0,
        Os = {},
        Ps = [],
        Qs = [],
        Rs = !1,
        Ss = !1,
        Ts = function(a) {
            return z[nh.ca].push(a);
        },
        Us = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return Ts(a);
        },
        Vs = function(a, b) {
            var c = S[nh.ca],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b &&
                (g = z.setTimeout(function() {
                    f || ((f = !0), a());
                    g = void 0;
                }, b));
            return function() {
                ++e === d &&
                    (g && (z.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
            };
        };

    function Ws(a) {
        var b = a._clear;
        La(a, function(d, e) {
            "_clear" !== d && (b && Ph(d), Ph(d, e));
        });
        vh || (vh = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || ((c = Gh()), (a["gtm.uniqueEventId"] = c), Ph("gtm.uniqueEventId", c));
        return hs(a);
    }

    function Xs(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ma(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0;
        }
        return !1;
    }

    function Ys() {
        for (var a = !1; !Ss && (0 < Ps.length || 0 < Qs.length);) {
            if (!Rs && Xs(Ps[0])) {
                var b = {},
                    c = ((b.event = "gtm.init_consent"), b),
                    d = {},
                    e = ((d.event = "gtm.init"), d),
                    f = Ps[0]["gtm.uniqueEventId"];
                f &&
                    ((c["gtm.uniqueEventId"] = f - 2), (e["gtm.uniqueEventId"] = f - 1));
                Ps.unshift(c, e);
                Rs = !0;
            }
            Ss = !0;
            delete Jh.eventModel;
            Lh();
            var p = null,
                q = void 0,
                r = void 0;
            if (Qs.length) {
                var u = Qs.shift();
                p = u.message;
                q = u.debugContext;
                r = !0;
            }
            null == p && (p = Ps.shift());
            if (null != p) {
                var t = sr(p);
                t && ((p = ur(p)), Qh());
                try {
                    if (Ca(p))
                        try {
                            p.call(Nh);
                        } catch (C) {}
                    else if (Ea(p)) {
                        var v = p;
                        if (m(v[0])) {
                            var x = v[0].split("."),
                                y = x.pop(),
                                w = v.slice(1),
                                A = Mh(x.join("."), 2);
                            if (null != A)
                                try {
                                    A[y].apply(A, w);
                                } catch (C) {}
                        }
                    } else {
                        if (Ma(p)) {
                            a: {
                                if (p.length && m(p[0])) {
                                    var B = qs[p[0]];
                                    if (B && (!t || !rs[p[0]])) {
                                        p = B(p, q, r);
                                        break a;
                                    }
                                }
                                p = void 0;
                            }
                            if (!p) {
                                Ss = !1;
                                continue;
                            }
                        }
                        a = Ws(p) || a;
                        if (Xs(p)) {
                            var E = p["gtm.uniqueEventId"];
                            void 0 !== E && (Zs(E), (Ns = E));
                        }
                    }
                } finally {
                    t && Lh(!0);
                }
            }
            Ss = !1;
        }
        return !a;
    }

    function $s() {
        var b = Ys();
        try {
            ss(Ie.J);
        } catch (c) {}
        return b;
    }

    function yr(a) {
        var b = a.notBeforeEventId;
        Ns < b ?
            ((Os[String(b)] = Os[String(b)] || []), Os[String(b)].push(a)) :
            (Qs.push(a),
                Qs.sort(Ar),
                K(function() {
                    Ss || Ys();
                }));
    }

    function Zs(a) {
        for (var b = Os[String(a)] || [], c = 0; c < b.length; c++) Qs.push(b[c]);
        b.length && Qs.sort(Ar);
        delete Os[String(a)];
    }
    var bt = function() {
            var a = Hb(nh.ca, []),
                b = Hb("google_tag_manager", {});
            Os = wr().get();
            Zs(0);
            zr();
            b = b[nh.ca] = b[nh.ca] || {};
            Em(function() {
                if (!b.gtmDom) {
                    b.gtmDom = !0;
                    var e = {};
                    a.push(((e.event = "gtm.dom"), e));
                }
            });
            xs(function() {
                if (!b.gtmLoad) {
                    b.gtmLoad = !0;
                    var e = {};
                    a.push(((e.event = "gtm.load"), e));
                }
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < S.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++)
                        e[f] = new tr(arguments[f]);
                } else e = [].slice.call(arguments, 0);
                Ps.push.apply(Ps, e);
                var g = c.apply(a, e);
                if (300 < this.length)
                    for (jg(4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return Ys() && h;
            };
            var d = a.slice(0);
            Ps.push.apply(Ps, d);
            if (at()) {
                K($s);
            }
        },
        at = function() {
            var a = !0;
            return a;
        };

    function ct(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ta();
        return b < c + 3e5 && b > c - 9e5;
    }
    var dt = {};
    dt.Ud = new String("undefined");
    var et = function(a) {
        this.g = function(b) {
            for (var c = [], d = 0; d < a.length; d++)
                c.push(a[d] === dt.Ud ? b : a[d]);
            return c.join("");
        };
    };
    et.prototype.toString = function() {
        return this.g("undefined");
    };
    et.prototype.valueOf = et.prototype.toString;
    dt.Yi = et;
    dt.pf = {};
    dt.pj = function(a) {
        return new et(a);
    };
    var ft = {};
    dt.nk = function(a, b) {
        var c = Gh();
        ft[c] = [a, b];
        return c;
    };
    dt.kh = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = ft[c];
            if (d && "function" === typeof d[b]) d[b]();
            ft[c] = void 0;
        };
    };
    dt.Lj = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++)
            (b = b || 8 === a[d]), (c = c || 16 === a[d]);
        return b && c;
    };
    dt.hk = function(a) {
        if (a === dt.Ud) return a;
        var b = Gh();
        dt.pf[b] = a;
        return 'google_tag_manager["' + Ie.J + '"].macro(' + b + ")";
    };
    dt.Xj = function(a, b, c) {
        a instanceof dt.Yi && ((a = a.g(dt.nk(b, c))), (b = Aa));
        return { Ij: a, onSuccess: b };
    };
    var gt = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Yb(a, "className"),
                "gtm.elementId": a["for"] || Sb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Yb(a, "target") || "",
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] =
                (a.attributes && a.attributes.formaction ? a.formAction : "") ||
                a.action ||
                Yb(a, "href") ||
                a.src ||
                a.code ||
                a.codebase ||
                "";
            return d;
        },
        ht = function(a) {
            S.hasOwnProperty("autoEventsSettings") || (S.autoEventsSettings = {});
            var b = S.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a];
        },
        it = function(a, b, c) {
            ht(a)[b] = c;
        },
        jt = function(a, b, c, d) {
            var e = ht(a),
                f = Ua(e, b, d);
            e[b] = c(f);
        },
        kt = function(a, b, c) {
            var d = ht(a);
            return Ua(d, b, c);
        },
        lt = function(a) {
            return "string" === typeof a ? a : String(Gh());
        };
    var Yt = z.clearTimeout,
        Zt = z.setTimeout,
        V = function(a, b, c, d) {
            if (on()) {
                b && K(b);
            } else return Mb(a, b, c, d);
        },
        $t = function() {
            return new Date();
        },
        au = function() {
            return z.location.href;
        },
        bu = function(a) {
            return ii(ki(a), "fragment");
        },
        cu = function(a) {
            return ji(ki(a));
        },
        du = function(a, b) {
            return Mh(a, b || 2);
        },
        eu = function(a, b, c) {
            return b ? Us(a, b, c) : Ts(a);
        },
        fu = function(a, b) {
            z[a] = b;
        },
        W = function(a, b, c) {
            b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
            return z[a];
        },
        gu = function(a, b, c) {
            return Oi(a, b, void 0 === c ? !0 : !!c);
        },
        hu = function(a, b, c) {
            return 0 === Xi(a, b, c);
        },
        iu = function(a, b) {
            if (on()) {
                b && K(b);
            } else Ob(a, b);
        },
        ju = function(a) {
            return !!kt(a, "init", !1);
        },
        ku = function(a) {
            it(a, "init", !0);
        },
        lu = function(a, b, c) {
            bm && (sc(a) || pm(c, b, a));
        };

    var mu = dt.Xj;
    var Ju = [
        "matches",
        "webkitMatchesSelector",
        "mozMatchesSelector",
        "msMatchesSelector",
        "oMatchesSelector",
    ];

    function Ku(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c;
    }
    var Lu = new Ja();

    function Mu(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Lu.get(e);
            f || ((f = new RegExp(b, d)), Lu.set(e, f));
            return f.test(a);
        } catch (g) {
            return !1;
        }
    }

    function Nu(a, b) {
        function c(g) {
            var h = ki(g),
                k = ii(h, "protocol"),
                n = ii(h, "host", !0),
                p = ii(h, "port"),
                q = ii(h, "path").toLowerCase().replace(/\/$/, "");
            if (
                void 0 === k ||
                ("http" === k && "80" === p) ||
                ("https" === k && "443" === p)
            )
                (k = "web"), (p = "default");
            return [k, n, p, q];
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0;
    }

    function Ou(a) {
        return Pu(a) ? 1 : 0;
    }

    function Pu(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = oc(a, {});
                oc({ arg1: c[d], any_of: void 0 }, e);
                if (Ou(e)) return !0;
            }
            return !1;
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b)
                        try {
                            for (var g = 0; g < Ju.length; g++) {
                                var h = Ju[g];
                                if (b[h]) {
                                    f = b[h](c);
                                    break a;
                                }
                            }
                        } catch (k) {}
                    f = !1;
                }
                return f;
            case "_ew":
                return Ku(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Mu(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Nu(b, c);
        }
        return !1;
    }

    function Qu(a, b) {
        var c = this;
    }
    Qu.N = "addConsentListener";
    var Ru;
    var Su = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (Ru)
                try {
                    a[b]();
                } catch (c) {
                    jg(77);
                }
            else a[b]();
    };

    function Tu(a, b, c) {
        var d = this,
            e;
        return e;
    }
    Tu.M = "internal.addDataLayerEventListener";

    function Uu(a, b, c) {}
    Uu.N = "addDocumentEventListener";

    function Vu(a, b, c, d) {}
    Vu.N = "addElementEventListener";

    function Wu(a) {}
    Wu.N = "addEventCallback";

    function $u(a) {}
    $u.M = "internal.addFormAbandonmentListener";
    var av = {},
        bv = [],
        cv = {},
        dv = 0,
        ev = 0;

    function lv(a, b) {}
    lv.M = "internal.addFormInteractionListener";

    function sv(a, b) {}
    sv.M = "internal.addFormSubmitListener";

    function xv(a) {}
    xv.M = "internal.addGaSendListener";
    var yv = {},
        zv = [];
    var Gv = function(a, b) {};
    Gv.M = "internal.addHistoryChangeListener";

    function Hv(a, b, c) {}
    Hv.N = "addWindowEventListener";

    function Iv(a, b) {
        return !0;
    }
    Iv.N = "aliasInWindow";

    function Jv(a, b, c) {}
    Jv.M = "internal.appendRemoteConfigParameter";

    function Kv() {
        var a = 2;
        return a;
    }

    function Lv(a, b) {
        var c;
        return c;
    }
    Lv.N = "callInWindow";

    function Mv(a) {}
    Mv.N = "callLater";

    function Nv(a) {}
    Nv.M = "callOnDomReady";

    function Ov(a) {
        M(I(this), ["listener:!Fn"], arguments);
        N(this, "process_dom_events", "window", "load");
        xs(qc(a));
    }
    Ov.M = "callOnWindowLoad";

    function Pv(a) {
        var b;
        return b;
    }
    Pv.M = "internal.computeGtmParameter";

    function Qv(a, b) {
        var c;
        var d = pc(c, this.g, Kv());
        void 0 === d && void 0 !== c && jg(45);
        return d;
    }
    Qv.N = "copyFromDataLayer";

    function Rv(a) {
        var b;
        return b;
    }
    Rv.N = "copyFromWindow";

    function Sv(a, b) {
        var c;
        return c;
    }
    Sv.M = "internal.copyPreHit";

    function Tv(a, b) {
        var c = null,
            d = Kv();
        M(I(this), ["functionPath:!string", "arrayPath:!string"], arguments);
        N(this, "access_globals", "readwrite", a);
        N(this, "access_globals", "readwrite", b);
        var e = [z, J],
            f = a.split("."),
            g = Za(f, e),
            h = f[f.length - 1];
        if (void 0 === g) throw Error("Path " + a + " does not exist.");
        var k = g[h];
        if (k && !Ca(k)) return null;
        if (k) return pc(k, this.g, d);
        var n;
        k = function() {
            if (!Ca(n.push))
                throw Error("Object at " + b + " in window is not an array.");
            n.push.call(n, arguments);
        };
        g[h] = k;
        var p = b.split("."),
            q = Za(p, e),
            r = p[p.length - 1];
        if (void 0 === q) throw Error("Path " + p + " does not exist.");
        n = q[r];
        void 0 === n && ((n = []), (q[r] = n));
        c = function() {
            k.apply(k, Array.prototype.slice.call(arguments, 0));
        };
        return pc(c, this.g, d);
    }
    Tv.N = "createArgumentsQueue";

    function Uv(a) {
        var b;
        return pc(b, this.g, Kv());
    }
    Uv.N = "createQueue";
    var Vv = {},
        Wv = [],
        Xv = {},
        Yv = 0,
        Zv = 0;

    function ew(a, b) {
        var c = this;
        return b;
    }
    ew.M = "internal.enableAutoEventOnFormInteraction";

    function jw(a, b) {
        var c = this;
        return b;
    }
    jw.M = "internal.enableAutoEventOnFormSubmit";

    function ow() {
        var a = this;
    }
    ow.M = "internal.enableAutoEventOnGaSend";
    var pw = {},
        qw = [];

    function xw(a, b) {
        var c = this;
        return b;
    }
    xw.M = "internal.enableAutoEventOnHistoryChange";

    function Bw(a, b) {
        var c = this;
        return b;
    }
    Bw.M = "internal.enableAutoEventOnLinkClick";
    var Cw, Dw;

    function Mw(a, b) {
        var c = this;
        return b;
    }
    Mw.M = "internal.enableAutoEventOnScroll";
    var Db = ca(["data-gtm-yt-inspected-"]),
        Nw = ["www.youtube.com", "www.youtube-nocookie.com"],
        Ow,
        Pw = !1;

    function Zw(a, b) {
        var c = this;
        return b;
    }
    Zw.M = "internal.enableAutoEventOnYouTubeActivity";

    function $w(a) {
        return !1;
    }
    $w.M = "internal.evaluateFilteringRules";
    var ax;

    function bx(a) {
        var b = !1;
        return b;
    }
    bx.M = "internal.evaluateMatchingRules";

    function hx(a, b) {
        var c = !1;
        return c;
    }
    hx.M = "internal.evaluatePredicates";
    var ix = function(a) {
        var b;
        return b;
    };

    function jx(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c;
    }
    jx.N = "getCookieValues";

    function kx() {
        return eg.jh;
    }
    kx.M = "internal.getCountryCode";

    function lx() {
        var a = [];
        return pc(a);
    }
    lx.M = "internal.getDestinationIds";

    function mx(a) {
        var b = null;
        return b;
    }
    mx.N = "getElementById";

    function nx(a, b) {
        var c;
        return c;
    }
    nx.M = "internal.getProductSettingsParameter";

    function ox(a, b) {
        var c;
        return c;
    }
    ox.N = "getQueryParameters";

    function px(a, b) {
        var c;
        return c;
    }
    px.N = "getReferrerQueryParameters";

    function qx(a) {
        var b = "";
        return b;
    }
    qx.N = "getReferrerUrl";

    function rx() {
        return eg.Ih;
    }
    rx.M = "internal.getRegionCode";

    function sx(a, b) {
        var c;
        return c;
    }
    sx.M = "internal.getRemoteConfigParameter";

    function tx(a) {
        var b = "";
        return b;
    }
    tx.N = "getUrl";

    function ux() {
        N(this, "get_user_agent");
        return z.navigator.userAgent;
    }
    ux.N = "getUserAgent";

    function vx(a) {
        if (!a) return {};
        var b = a.vj;
        return Gm(b.type, b.index, b.name);
    }

    function xx(a, b) {}
    xx.N = "gtagSet";

    function yx(a, b) {}
    yx.N = "injectHiddenIframe";
    var zx = {};

    function Ax(a, b, c, d, e, f) {
        f
            ?
            e[f] ?
            (e[f][0].push(c), e[f][1].push(d)) :
            ((e[f] = [
                    [c],
                    [d]
                ]),
                Mb(
                    a,
                    function() {
                        for (var g = e[f][0], h = 0; h < g.length; h++) K(g[h]);
                        g.push = function(k) {
                            K(k);
                            return 0;
                        };
                    },
                    function() {
                        for (var g = e[f][1], h = 0; h < g.length; h++) K(g[h]);
                        e[f] = null;
                    },
                    b
                )) :
            Mb(a, c, d, b);
    }

    function Bx(a, b, c, d) {
        if (!on()) {
            M(
                I(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
                arguments
            );
            N(this, "inject_script", a);
            var e = this.g;
            Ax(
                a,
                void 0,
                function() {
                    b && b.o(e);
                },
                function() {
                    c && c.o(e);
                },
                zx,
                d
            );
        }
    }
    var Cx = Object.freeze({ dl: 1, id: 1 }),
        Dx = {};

    function Ex(a, b, c, d) {}
    Bx.N = "injectScript";
    Ex.M = "internal.injectScript";

    function Fx(a) {
        var b = !0;
        return b;
    }
    Fx.N = "isConsentGranted";
    var Gx = (function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d);
                } catch (e) {
                    (Qe || Se) && a.call(this, e.message);
                }
            };
        }
        return {
            parse: b(function(c) {
                return pc(JSON.parse(c));
            }),
            stringify: b(function(c) {
                return JSON.stringify(qc(c));
            }),
        };
    })(function(a) {
        var b = this.g.g;
        b && b.log.call(this, "error", a);
    });
    Gx.N = "JSON";
    var Hx = function() {
            return !1;
        },
        Ix = {
            getItem: function(a) {
                var b = null;
                return b;
            },
            setItem: function(a, b) {
                return !1;
            },
            removeItem: function(a) {},
        };
    var Jx = ["textContent", "value", "tagName", "children", "childElementCount"];

    function Kx(a) {
        var b;
        return b;
    }
    Kx.M = "internal.locateUserData";

    function Lx() {}
    Lx.N = "logToConsole";

    function Mx(a, b) {
        var c;
        return c;
    }
    Mx.M = "internal.newInWindow";

    function Nx(a) {
        var b = void 0;
        return b;
    }
    Nx.N = "parseUrl";

    function Ox(a) {}
    Ox.M = "internal.processAsNewEvent";

    function Px(a, b) {
        var c = !1;
        return c;
    }
    Px.N = "queryPermission";

    function Qx() {
        var a = "";
        return a;
    }
    Qx.N = "readCharacterSet";

    function Rx() {
        var a = "";
        return a;
    }
    Rx.N = "readTitle";

    function Sx(a, b) {
        var c = this;
    }
    Sx.M = "internal.registerCcdCallback";
    var Tx = Object.freeze(["config", "event", "get", "set"]);

    function Ux(a, b, c) {}
    Ux.M = "internal.registerGtagCommandListener";

    function Vx(a, b) {
        var c = !1;
        return c;
    }
    Vx.M = "internal.removeDataLayerEventListener";

    function Wx() {}
    Wx.N = "resetDataLayer";
    var Yx = !1;

    function Zx(a, b, c, d) {
        d = void 0 === d ? !1 : d;
    }
    Zx.M = "internal.sendGtagEvent";

    function $x(a, b, c) {}
    $x.N = "sendPixel";

    function ay(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f;
    }
    ay.N = "setCookie";
    var by = !1;
    by = !0;

    function cy(a) {
        M(I(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.Kb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e !== Q.Ce && N(this, "access_consent", e, "write");
        }
        var f = this.g.g,
            g = f.eventId,
            h = vx(f);
        if (by) {
            var k = or("consent", "default", qc(a));
            xr(k, g, h);
        } else Ig(qc(a));
    }
    cy.N = "setDefaultConsentState";

    function dy(a, b, c) {
        M(
            I(this), ["path:!string", "value:?*", "overrideExisting:?boolean"],
            arguments
        );
        N(this, "access_globals", "readwrite", a);
        var d = a.split("."),
            e = Za(d, [z, J]),
            f = d.pop();
        if (e && (void 0 === e[f] || c)) return (e[f] = qc(b, this.g, Kv())), !0;
        return !1;
    }
    dy.N = "setInWindow";

    function ey(a, b, c) {}
    ey.M = "internal.setProductSettingsParameter";

    function fy(a, b, c) {}
    fy.M = "internal.setRemoteConfigParameter";
    var gy = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ?
                (b[c++] = e) :
                (2048 > e ?
                    (b[c++] = (e >> 6) | 192) :
                    (55296 == (e & 64512) &&
                        d + 1 < a.length &&
                        56320 == (a.charCodeAt(d + 1) & 64512) ?
                        ((e =
                                65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                            (b[c++] = (e >> 18) | 240),
                            (b[c++] = ((e >> 12) & 63) | 128)) :
                        (b[c++] = (e >> 12) | 224),
                        (b[c++] = ((e >> 6) & 63) | 128)),
                    (b[c++] = (e & 63) | 128));
        }
        return b;
    };

    function hy(a, b, c, d) {
        var e = this;
    }
    hy.N = "sha256";

    function iy(a, b, c) {}
    iy.M = "internal.sortRemoteConfigParameters";
    var jy = {},
        ky = {};
    jy.N = "templateStorage";
    jy.getItem = function(a) {
        var b = null;
        return b;
    };
    jy.setItem = function(a, b) {};
    jy.removeItem = function(a) {};
    jy.clear = function() {};
    var ly = function(a) {
        var b;
        return b;
    };
    var my = !1;
    my = !0;

    function ny(a) {
        M(I(this), ["consentSettings:!DustMap"], arguments);
        var b = qc(a),
            c;
        for (c in b) b.hasOwnProperty(c) && N(this, "access_consent", c, "write");
        var d = this.g.g,
            e = d.eventId,
            f = vx(d);
        my ? xr(or("consent", "update", b), e, f) : Kg(b, { eventId: e });
    }
    ny.N = "updateConsentState";
    var oy = function() {
        var a = new Wf(),
            b = function(d) {
                return Yf(a, d.M, d);
            },
            c = function(d) {
                return a.add(d.N, d);
            };
        c(Qu);
        c(Wu);
        c(Iv);
        c(Lv);
        c(Mv);
        c(Qv);
        c(Rv);
        c(Tv);
        c(Uv);
        c(jx);
        c(ox);
        c(px);
        c(qx);
        c(tx);
        c(yx);
        c(Bx);
        c(Fx);
        c(Gx);
        c(Lx);
        c(Nx);
        c(Px);
        c(Qx);
        c(Rx);
        c($x);
        c(ay);
        c(cy);
        c(dy);
        c(hy);
        c(jy);
        c(ny);
        a.add("Math", Bf());
        a.add("Object", Uf);
        a.add("TestHelper", Zf());
        a.add("assertApi", uf);
        a.add("assertThat", vf);
        a.add("decodeUri", Cf);
        a.add("decodeUriComponent", Df);
        a.add("encodeUri", Ef);
        a.add("encodeUriComponent", Ff);
        a.add("fail", Gf);
        a.add("generateRandom", Hf);
        a.add("getContainerVersion", If);
        a.add("getTimestamp", Lf);
        a.add("getTimestampMillis", Lf);
        a.add("getType", Mf);
        a.add("makeInteger", Nf);
        a.add("makeNumber", Of);
        a.add("makeString", Pf);
        a.add("makeTableMap", Qf);
        a.add("mock", Tf);
        a.add("fromBase64", ix, !("atob" in z));
        a.add("localStorage", Ix, !Hx());
        a.add("toBase64", ly, !("btoa" in z));
        b(lv);
        b(sv);
        b(xv);
        b(Gv);
        b(Ov);
        b($w);
        b(bx);
        b(lx);
        b(Ex);
        b(Kx);
        b(Ux);
        b(Zx);
        Yf(a, "internal.getFlags", Kf);
        c(xx);
        b(jw);
        b(ew);
        b(xw);
        b(Tu);
        b(Zw);
        b(Vx);
        b(ow);
        b(Bw);
        b(Mw);
        b(kx);
        b(rx);
        return function(d) {
            var e;
            if (a.g.hasOwnProperty(d)) e = a.get(d, this);
            else {
                var f;
                if ((f = a.o.hasOwnProperty(d))) {
                    var g = !1,
                        h = this.g.g;
                    if (h) {
                        var k = h.kd();
                        if (k) {
                            0 !== k.indexOf("__cvt_") && (g = !0);
                        }
                    }
                    f = g;
                }
                if (f) {
                    var n = a.o.hasOwnProperty(d) ? a.o[d] : void 0;
                    e = n;
                } else throw Error(d + " is not a valid API name.");
            }
            return e;
        };
    };
    var py = function() {
            return !1;
        },
        qy = function() {
            var a = {};
            return function(b, c, d) {};
        };
    var ry;

    function sy() {
        var a = ry;
        return function(b, c, d) {
            var e = d && d.event;
            ty(c);
            var f = new hb();
            La(c, function(q, r) {
                var u = pc(r);
                void 0 === u && void 0 !== r && jg(44);
                f.set(q, u);
            });
            a.g.g.I = Ae();
            var g = {
                fj: Ne(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                ce: void 0 !== e ?

                    function(q) {
                        return e.xb.ce(q);
                    } :
                    void 0,
                kd: function() {
                    return b;
                },
                log: function() {},
                vj: { index: d && d.index, type: d && d.type, name: d && d.name },
            };
            if (py()) {
                var h = qy(),
                    k = void 0,
                    n = void 0;
                g.Ra = {
                    Zf: [],
                    cd: {},
                    Ya: function(q, r, u) {
                        1 === r && (k = q);
                        7 === r && (n = u);
                        h(q, r, u);
                    },
                    Nf: Rf(),
                };
                g.log = function(q, r) {
                    if (k) {
                        var u = Array.prototype.slice.call(arguments, 1);
                        h(k, 4, { level: q, source: n, message: u });
                    }
                };
            }
            var p = Jd(a, g, [b, f]);
            a.g.g.I = void 0;
            p instanceof oa && "return" === p.g && (p = p.o);
            return qc(p);
        };
    }

    function ty(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ca(b) &&
            (a.gtmOnSuccess = function() {
                K(b);
            });
        Ca(c) &&
            (a.gtmOnFailure = function() {
                K(c);
            });
    }

    function uy() {
        ry.g.g.R = function(a, b, c) {
            S.SANDBOXED_JS_SEMAPHORE = S.SANDBOXED_JS_SEMAPHORE || 0;
            S.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c);
            } finally {
                S.SANDBOXED_JS_SEMAPHORE--;
            }
        };
    }

    function vy(a) {
        void 0 !== a &&
            La(a, function(b, c) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d].replace(/^_*/, "");
                    yh[e] = yh[e] || [];
                    yh[e].push(b);
                }
            });
    }
    var wy = encodeURI,
        X = encodeURIComponent,
        xy = Pb;
    var yy = function(a, b) {
            if (!a) return !1;
            var c = ii(ki(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
                    if (0 <= f && c.indexOf(e, f) == f) return !0;
                }
            }
            return !1;
        },
        zy = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
                a[f] &&
                a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) &&
                ((d[a[f][b]] = a[f][c]), (e = !0));
            return e ? d : null;
        };

    function $z() {
        return (z.gaGlobal = z.gaGlobal || {});
    }
    var aA = function() {
            var a = $z();
            a.hid = a.hid || Ha();
            return a.hid;
        },
        bA = function(a, b) {
            var c = $z();
            if (void 0 == c.vid || (b && !c.from_cookie))
                (c.vid = a), (c.from_cookie = b);
        };
    var JA = function() {
        if (Ca(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
                    }
                });
            } catch (b) {}
            return a;
        }
    };
    var qB = window,
        rB = document,
        sB = function(a) {
            var b = qB._gaUserPrefs;
            if ((b && b.ioo && b.ioo()) || (a && !0 === qB["ga-disable-" + a]))
                return !0;
            try {
                var c = qB.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
            } catch (f) {}
            for (
                var d = Ii("AMP_TOKEN", String(rB.cookie), !0), e = 0; e < d.length; e++
            )
                if ("$OPT_OUT" == d[e]) return !0;
            return rB.getElementById("__gaOptOutExtension") ? !0 : !1;
        };
    var tB = {};

    function EB(a) {
        delete a.eventModel[Q.Ib];
        LB(a.eventModel);
    }
    var LB = function(a) {
        La(a, function(c) {
            "_" === c.charAt(0) && delete a[c];
        });
        var b = a[Q.Oa] || {};
        La(b, function(c) {
            "_" === c.charAt(0) && delete b[c];
        });
    };
    var UB = function(a, b, c) {
            ar(b, c, a);
        },
        VB = function(a, b, c) {
            ar(b, c, a, !0);
        },
        XB = function(a, b) {};

    function WB(a, b) {}
    var Y = { h: {} };

    (Y.h.c = ["google"]),
    (function() {
        (function(a) {
            Y.__c = a;
            Y.__c.m = "c";
            Y.__c.isVendorTemplate = !0;
            Y.__c.priorityOverride = 0;
        })(function(a) {
            lu(a.vtp_value, "c", a.vtp_gtmEventId);
            return a.vtp_value;
        });
    })();
    (Y.h.e = ["google"]),
    (function() {
        (function(a) {
            Y.__e = a;
            Y.__e.m = "e";
            Y.__e.isVendorTemplate = !0;
            Y.__e.priorityOverride = 0;
        })(function(a) {
            return String(a.vtp_gtmCachedValues.event);
        });
    })();
    (Y.h.f = ["google"]),
    (function() {
        (function(a) {
            Y.__f = a;
            Y.__f.m = "f";
            Y.__f.isVendorTemplate = !0;
            Y.__f.priorityOverride = 0;
        })(function(a) {
            var b = du("gtm.referrer", 1) || J.referrer;
            return b ?
                a.vtp_component && "URL" != a.vtp_component ?
                ii(
                    ki(String(b)),
                    a.vtp_component,
                    a.vtp_stripWww,
                    a.vtp_defaultPages,
                    a.vtp_queryKey
                ) :
                cu(String(b)) :
                String(b);
        });
    })();
    (Y.h.cl = ["google"]),
    (function() {
        function a(b) {
            var c = b.target;
            if (c) {
                var d = gt(c, "gtm.click");
                eu(d);
            }
        }
        (function(b) {
            Y.__cl = b;
            Y.__cl.m = "cl";
            Y.__cl.isVendorTemplate = !0;
            Y.__cl.priorityOverride = 0;
        })(function(b) {
            if (!ju("cl")) {
                var c = W("document");
                Qb(c, "click", a, !0);
                ku("cl");
            }
            K(b.vtp_gtmOnSuccess);
        });
    })();
    (Y.h.access_globals = ["google"]),
    (function() {
        function a(b, c, d) {
            var e = { key: d, read: !1, write: !1, execute: !1 };
            switch (c) {
                case "read":
                    e.read = !0;
                    break;
                case "write":
                    e.write = !0;
                    break;
                case "readwrite":
                    e.read = e.write = !0;
                    break;
                case "execute":
                    e.execute = !0;
                    break;
                default:
                    throw Error("Invalid " + b + " request " + c);
            }
            return e;
        }
        (function(b) {
            Y.__access_globals = b;
            Y.__access_globals.m = "access_globals";
            Y.__access_globals.isVendorTemplate = !0;
            Y.__access_globals.priorityOverride = 0;
        })(function(b) {
            for (
                var c = b.vtp_keys || [],
                    d = b.vtp_createPermissionError,
                    e = [],
                    f = [],
                    g = [],
                    h = 0; h < c.length; h++
            ) {
                var k = c[h],
                    n = k.key;
                k.read && e.push(n);
                k.write && f.push(n);
                k.execute && g.push(n);
            }
            return {
                assert: function(p, q, r) {
                    if (!m(r)) throw d(p, {}, "Key must be a string.");
                    if ("read" === q) {
                        if (-1 < e.indexOf(r)) return;
                    } else if ("write" === q) {
                        if (-1 < f.indexOf(r)) return;
                    } else if ("readwrite" === q) {
                        if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return;
                    } else if ("execute" === q) {
                        if (-1 < g.indexOf(r)) return;
                    } else
                        throw d(
                            p, {},
                            "Operation must be either 'read', 'write', or 'execute', was " +
                            q
                        );
                    throw d(
                        p, {},
                        "Prohibited " + q + " on global variable: " + r + "."
                    );
                },
                W: a,
            };
        });
    })();
    (Y.h.u = ["google"]),
    (function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b;
                },
            };
        };
        (function(b) {
            Y.__u = b;
            Y.__u.m = "u";
            Y.__u.isVendorTemplate = !0;
            Y.__u.priorityOverride = 0;
        })(function(b) {
            var c;
            c =
                (c = b.vtp_customUrlSource ?
                    b.vtp_customUrlSource :
                    du("gtm.url", 1)) || au();
            var d = b[a("vtp_component")];
            if (!d || "URL" == d) return cu(String(c));
            var e = ki(String(c)),
                f;
            if ("QUERY" === d)
                a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        h = b[a("vtp_queryKey").toString()] || "",
                        k = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;
                    g ?
                    Ea(h) ?
                    (n = h) :
                    (n = String(h).replace(/\s+/g, "").split(",")) :
                        (n = [String(h)]);
                    for (var p = 0; p < n.length; p++) {
                        var q = ii(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!k || "" !== q)) {
                            f = q;
                            break a;
                        }
                    }
                    f = void 0;
                }
            else
                f = ii(
                    e,
                    d,
                    "HOST" == d ? b[a("vtp_stripWww")] : void 0,
                    "PATH" == d ? b[a("vtp_defaultPages")] : void 0
                );
            return f;
        });
    })();
    (Y.h.v = ["google"]),
    (function() {
        (function(a) {
            Y.__v = a;
            Y.__v.m = "v";
            Y.__v.isVendorTemplate = !0;
            Y.__v.priorityOverride = 0;
        })(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = du(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                d = void 0 !== c ? c : a.vtp_defaultValue;
            lu(d, "v", a.vtp_gtmEventId);
            return d;
        });
    })();
    (Y.h.ua = ["google"]),
    (function() {
        function a(k, n) {
            for (var p in k)
                if (!h[p] && k.hasOwnProperty(p)) {
                    var q = g[p] ? Oa(k[p]) : k[p];
                    "anonymizeIp" != p || q || (q = void 0);
                    n[p] = q;
                }
        }

        function b(k) {
            var n = {};
            k.vtp_gaSettings &&
                oc(zy(k.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
            oc(zy(k.vtp_fieldsToSet, "fieldName", "value"), n);
            Oa(n.urlPassthrough) && (n._useUp = !0);
            k.vtp_transportUrl && (n._x_19 = k.vtp_transportUrl);
            return n;
        }

        function c(k, n) {
            return void 0 === n ? n : k(n);
        }

        function d(k, n, p) {}

        function e(k, n) {
            if (!f) {
                var p = k.vtp_useDebugVersion ?
                    "u/analytics_debug.js" :
                    "analytics.js";
                k.vtp_useInternalVersion &&
                    !k.vtp_useDebugVersion &&
                    (p = "internal/" + p);
                f = !0;
                var q = k.vtp_gtmOnFailure,
                    r = ln(n._x_19, "/analytics.js"),
                    u = qn(
                        "https:",
                        "http:",
                        "//www.google-analytics.com/" + p,
                        n && !!n.forceSSL
                    );
                V(
                    "analytics.js" === p && r ? r : u,
                    function() {
                        var t = Tm();
                        (t && t.loaded) || q();
                    },
                    q
                );
            }
        }
        var f,
            g = {
                allowAnchor: !0,
                allowLinker: !0,
                alwaysSendReferrer: !0,
                anonymizeIp: !0,
                cookieUpdate: !0,
                exFatal: !0,
                forceSSL: !0,
                javaEnabled: !0,
                legacyHistoryImport: !0,
                nonInteraction: !0,
                useAmpClientId: !0,
                useBeacon: !0,
                storeGac: !0,
                allowAdFeatures: !0,
                allowAdPersonalizationSignals: !0,
                _cd2l: !0,
            },
            h = { urlPassthrough: !0 };
        (function(k) {
            Y.__ua = k;
            Y.__ua.m = "ua";
            Y.__ua.isVendorTemplate = !0;
            Y.__ua.priorityOverride = 0;
        })(function(k) {
            function n() {
                if (
                    k.vtp_doubleClick ||
                    "DISPLAY_FEATURES" == k.vtp_advertisingFeaturesType
                )
                    v.displayfeatures = !0;
            }
            var p = {},
                q = {},
                r = {};
            if (k.vtp_gaSettings) {
                var u = k.vtp_gaSettings;
                oc(zy(u.vtp_contentGroup, "index", "group"), p);
                oc(zy(u.vtp_dimension, "index", "dimension"), q);
                oc(zy(u.vtp_metric, "index", "metric"), r);
                var t = oc(u);
                t.vtp_fieldsToSet = void 0;
                t.vtp_contentGroup = void 0;
                t.vtp_dimension = void 0;
                t.vtp_metric = void 0;
                k = oc(k, t);
            }
            oc(zy(k.vtp_contentGroup, "index", "group"), p);
            oc(zy(k.vtp_dimension, "index", "dimension"), q);
            oc(zy(k.vtp_metric, "index", "metric"), r);
            var v = b(k),
                x = String(k.vtp_trackingId || ""),
                y = "",
                w = "",
                A = "";
            k.vtp_setTrackerName && "string" == typeof k.vtp_trackerName ?
                "" !== k.vtp_trackerName && ((A = k.vtp_trackerName), (w = A + ".")) :
                ((A = "gtm" + Gh()), (w = A + "."));
            var B = function(ba, T) {
                for (var qa in T) T.hasOwnProperty(qa) && (v[ba + qa] = T[qa]);
            };
            B("contentGroup", p);
            B("dimension", q);
            B("metric", r);
            k.vtp_enableEcommerce &&
                ((y = k.vtp_gtmCachedValues.event),
                    (v.gtmEcommerceData = d(k, v, y)));
            if ("TRACK_EVENT" === k.vtp_trackType)
                (y = "track_event"),
                n(),
                (v.eventCategory = String(k.vtp_eventCategory)),
                (v.eventAction = String(k.vtp_eventAction)),
                (v.eventLabel = c(String, k.vtp_eventLabel)),
                (v.value = c(Na, k.vtp_eventValue));
            else if ("TRACK_PAGEVIEW" == k.vtp_trackType) {
                if (
                    ((y = Q.Ic),
                        n(),
                        "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" ==
                        k.vtp_advertisingFeaturesType && (v.remarketingLists = !0),
                        k.vtp_autoLinkDomains)
                ) {
                    var E = {};
                    E[Q.U] = k.vtp_autoLinkDomains;
                    E.use_anchor = k.vtp_useHashAutoLink;
                    E[Q.ic] = k.vtp_decorateFormsAutoLink;
                    v[Q.va] = E;
                }
            } else
                "TRACK_SOCIAL" === k.vtp_trackType ?
                ((y = "track_social"),
                    (v.socialNetwork = String(k.vtp_socialNetwork)),
                    (v.socialAction = String(k.vtp_socialAction)),
                    (v.socialTarget = String(k.vtp_socialActionTarget))) :
                "TRACK_TIMING" == k.vtp_trackType &&
                ((y = "timing_complete"),
                    (v.eventCategory = String(k.vtp_timingCategory)),
                    (v.timingVar = String(k.vtp_timingVar)),
                    (v.value = Na(k.vtp_timingValue)),
                    (v.eventLabel = c(String, k.vtp_timingLabel)));
            k.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
            k.vtp_enableLinkId && (v.enableLinkId = !0);
            var C = {};
            a(v, C);
            v.name || (C.gtmTrackerName = A);
            C.gaFunctionName = k.vtp_functionName;
            void 0 !== k.vtp_nonInteraction &&
                (C.nonInteraction = k.vtp_nonInteraction);
            var D = Gn(Dn(xn(C), k.vtp_gtmOnSuccess), k.vtp_gtmOnFailure);
            D.isGtmEvent = !0;
            wq(x, y, Date.now(), D);
            var F = Vm(k.vtp_functionName);
            if (Ca(F)) {
                var P = function(ba) {
                    var T = [].slice.call(arguments, 0);
                    T[0] = w + T[0];
                    F.apply(window, T);
                };
                if ("TRACK_TRANSACTION" == k.vtp_trackType) {} else if ("DECORATE_LINK" == k.vtp_trackType) {} else if ("DECORATE_FORM" == k.vtp_trackType) {} else if ("TRACK_DATA" == k.vtp_trackType) {}
                e(k, v);
            } else K(k.vtp_gtmOnFailure);
        });
    })();
    (Y.h.inject_script = ["google"]),
    (function() {
        function a(b, c) {
            return { url: c };
        }
        (function(b) {
            Y.__inject_script = b;
            Y.__inject_script.m = "inject_script";
            Y.__inject_script.isVendorTemplate = !0;
            Y.__inject_script.priorityOverride = 0;
        })(function(b) {
            var c = b.vtp_urls || [],
                d = b.vtp_createPermissionError;
            return {
                assert: function(e, f) {
                    if (!m(f)) throw d(e, {}, "Script URL must be a string.");
                    try {
                        if (nf(ki(f), c)) return;
                    } catch (g) {
                        throw d(e, {}, "Invalid script URL filter.");
                    }
                    throw d(e, {}, "Prohibited script URL: " + f);
                },
                W: a,
            };
        });
    })();

    (Y.h.aev = ["google"]),
    (function() {
        function a(r, u, t, v, x) {
            x || (x = "element");
            var y = u + "." + t,
                w;
            if (n.hasOwnProperty(y)) w = n[y];
            else {
                var A = r[x];
                if (A && ((w = v(A)), (n[y] = w), p.push(y), 35 < p.length)) {
                    var B = p.shift();
                    delete n[B];
                }
            }
            return w;
        }

        function b(r, u, t) {
            var v = r[q[u]];
            return void 0 !== v ? v : t;
        }

        function c(r, u) {
            if (!r) return !1;
            var t = d(au());
            Ea(u) ||
                (u = String(u || "")
                    .replace(/\s+/g, "")
                    .split(","));
            for (var v = [t], x = 0; x < u.length; x++) {
                var y = u[x];
                if (y.hasOwnProperty("is_regex"))
                    if (y.is_regex)
                        try {
                            y = new RegExp(y.domain);
                        } catch (B) {
                            continue;
                        }
                    else y = y.domain;
                var w = d(r);
                if (y instanceof RegExp) {
                    if (y.test(w)) return !1;
                } else {
                    var A = y;
                    if (0 != A.length) {
                        if (0 <= w.indexOf(A)) return !1;
                        v.push(d(A));
                    }
                }
            }
            return !yy(r, v);
        }

        function d(r) {
            k.test(r) || (r = "http://" + r);
            return ii(ki(r), "HOST", !0);
        }

        function e(r, u, t, v) {
            switch (r) {
                case "SUBMIT_TEXT":
                    return a(u, t, "FORM." + r, f, "formSubmitElement") || v;
                case "LENGTH":
                    var x = a(u, t, "FORM." + r, g);
                    return void 0 === x ? v : x;
                case "INTERACTED_FIELD_ID":
                    return h(u, "id", v);
                case "INTERACTED_FIELD_NAME":
                    return h(u, "name", v);
                case "INTERACTED_FIELD_TYPE":
                    return h(u, "type", v);
                case "INTERACTED_FIELD_POSITION":
                    var y = u.interactedFormFieldPosition;
                    return void 0 === y ? v : y;
                case "INTERACT_SEQUENCE_NUMBER":
                    var w = u.interactSequenceNumber;
                    return void 0 === w ? v : w;
                default:
                    return v;
            }
        }

        function f(r) {
            switch (r.tagName.toLowerCase()) {
                case "input":
                    return Sb(r, "value");
                case "button":
                    return Tb(r);
                default:
                    return null;
            }
        }

        function g(r) {
            if ("form" === r.tagName.toLowerCase() && r.elements) {
                for (var u = 0, t = 0; t < r.elements.length; t++)
                    Ht(r.elements[t]) && u++;
                return u;
            }
        }

        function h(r, u, t) {
            var v = r.interactedFormField;
            return (v && Sb(v, u)) || t;
        }
        var k = /^https?:\/\//i,
            n = {},
            p = [],
            q = {
                ATTRIBUTE: "elementAttribute",
                CLASSES: "elementClasses",
                ELEMENT: "element",
                ID: "elementId",
                HISTORY_CHANGE_SOURCE: "historyChangeSource",
                HISTORY_NEW_STATE: "newHistoryState",
                HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                HISTORY_OLD_STATE: "oldHistoryState",
                HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                TARGET: "elementTarget",
            };
        (function(r) {
            Y.__aev = r;
            Y.__aev.m = "aev";
            Y.__aev.isVendorTemplate = !0;
            Y.__aev.priorityOverride = 0;
        })(function(r) {
            var u = r.vtp_gtmEventId,
                t = r.vtp_defaultValue,
                v = r.vtp_varType,
                x = r.vtp_gtmCachedValues.gtm;
            switch (v) {
                case "TAG_NAME":
                    var y = x.element;
                    return (y && y.tagName) || t;
                case "TEXT":
                    return a(x, u, v, Tb) || t;
                case "URL":
                    var w;
                    a: {
                        var A = String(x.elementUrl || t || ""),
                            B = ki(A),
                            E = String(r.vtp_component || "URL");
                        switch (E) {
                            case "URL":
                                w = A;
                                break a;
                            case "IS_OUTBOUND":
                                w = c(A, r.vtp_affiliatedDomains);
                                break a;
                            default:
                                w = ii(
                                    B,
                                    E,
                                    r.vtp_stripWww,
                                    r.vtp_defaultPages,
                                    r.vtp_queryKey
                                );
                        }
                    }
                    return w;
                case "ATTRIBUTE":
                    var C;
                    if (void 0 === r.vtp_attribute) C = b(x, v, t);
                    else {
                        var D = x.element;
                        C = (D && Sb(D, r.vtp_attribute)) || t || "";
                    }
                    return C;
                case "MD":
                    var F = r.vtp_mdValue,
                        P = a(x, u, "MD", Tt);
                    return F && P ? Wt(P, F) || t : P || t;
                case "FORM":
                    return e(String(r.vtp_component || "SUBMIT_TEXT"), x, u, t);
                default:
                    var H = b(x, v, t);
                    lu(H, "aev", r.vtp_gtmEventId);
                    return H;
            }
        });
    })();
    (Y.h.ga = ["google"]),
    (function() {
        var a, b;
        (function(c) {
            Y.__ga = c;
            Y.__ga.m = "ga";
            Y.__ga.isVendorTemplate = !0;
            Y.__ga.priorityOverride = 0;
        })(function(c) {
            function d(R) {
                var O = [].slice.call(arguments, 0);
                O[0] = t + O[0];
                r.push(O);
            }

            function e(R, O) {
                void 0 !== c[O] && d(R, c[O]);
            }

            function f(R, O) {
                void 0 !== c[O] && d(R, Number(c[O]));
            }

            function g(R, O) {
                if (q(O))
                    for (var Z = 0; Z < O.length; Z++) d(R, O[Z]);
            }

            function h(R, O, Z) {
                if (q(O))
                    for (var ba = 0; ba < O.length; ba++) {
                        for (var T = [R], qa = O[ba], Fa = 0; Fa < Z.length; Fa++)
                            T.push(qa[Z[Fa]]);
                        d.apply(this, T);
                    }
            }

            function k(R, O) {
                void 0 !== c[O] && d("_set", R, c[O]);
            }

            function n(R, O) {
                return void 0 === O ? O : R(O);
            }

            function p(R, O) {
                void 0 !== O && (v += "&" + R + "=" + O);
            }
            var q = Ea,
                r = W("_gaq", [], !1),
                u = !1,
                t = "";
            void 0 == c.vtp_trackerName ?
                (t = "gtm" + Gh() + ".") :
                "" !== c.vtp_trackerName && (t = c.vtp_trackerName + ".");
            e("_setAccount", "vtp_webPropertyId");
            d("_set", "gtmid", Mn(!0));
            e("_setAllowLinker", "vtp_allowLinker");
            e("_setAllowAnchor", "vtp_allowAnchor");
            e("_setAllowHash", "vtp_allowHash");
            g("_addIgnoredRef", c.vtp_ignoredRef);
            g("_addIgnoredOrganic", c.vtp_ignoredOrganic);
            var v = "";
            if ("" !== v) {
                var x = function(R, O, Z) {
                        for (var ba = O.length - 1; 0 <= ba; ba--) {
                            var T = O[ba].split("=");
                            if (T[0] === R) return T[1] || "1";
                        }
                        for (var qa = Z.length - 1; 0 <= qa; qa--) {
                            var Fa = Z[qa].split("=");
                            if (Fa[0] === R) return Fa[1] || "1";
                        }
                    },
                    y = ki(au()),
                    w = ii(y, "query").split("&"),
                    A = c.vtp_allowAnchor ? ii(y, "fragment").split("&") : [];
                p("gclid", x("gclid", A, w));
                p("gclsrc", x("gclsrc", A, w));
                p("dclid", x("dclid", A, w));
                d("_set", "campaignParams", v);
            }
            k("anonymizeIp", "vtp_anonymizeIp");
            c.vtp_enableInPageLinkId &&
                d(
                    "_require",
                    "inpage_linkid",
                    "//www.google-analytics.com/plugins/ga/inpage_linkid.js"
                );
            e("_setCampaignTrack", "vtp_campaignTrack");
            e("_setClientInfo", "vtp_clientInfo");
            e("_setDetectFlash", "vtp_detectFlash");
            e("_setDetectTitle", "vtp_detectTitle");
            void 0 !== c.vtp_forceSsl &&
                c.vtp_forceSsl &&
                (r.push(["_gat._forceSSL"]), (u = !!c.vtp_forceSsl));
            d("_set", "hitCallback", function() {
                Ca(c.vtp_hitCallback) && c.vtp_hitCallback();
                c.vtp_gtmOnSuccess();
            });
            if ("TRACK_EVENT" == c.vtp_trackType) {
                d(
                    "_trackEvent",
                    String(c.vtp_eventCategory),
                    String(c.vtp_eventAction),
                    n(String, c.vtp_eventLabel),
                    n(Na, c.vtp_eventValue), !!c.vtp_nonInteraction
                );
            } else if ("TRACK_TRANSACTION" == c.vtp_trackType) {} else if ("LINK" == c.vtp_trackType) {} else if ("LINK_BY_POST" == c.vtp_trackType) {} else if ("TRACK_SOCIAL" == c.vtp_trackType) {} else if ("TRACK_TIMING" == c.vtp_trackType) {} else if ("DECORATE_LINK" == c.vtp_trackType) {} else if ("DECORATE_FORM" == c.vtp_trackType) {} else d("_trackPageview");
            g("_cookiePathCopy", c.vtp_cookiePathCopy);
            var L = function() {
                W("_gat") || c.vtp_gtmOnFailure();
            };
            if (c.vtp_doubleClick)
                b ||
                ((b = !0),
                    V(
                        qn("https", "http", "://stats.g.doubleclick.net/dc.js", u),
                        L,
                        c.vtp_gtmOnFailure
                    ));
            else if (!a) {
                var U = c.vtp_useDebugVersion ?
                    ".google-analytics.com/u/ga_debug.js" :
                    ".google-analytics.com/ga.js";
                a = !0;
                V(qn("https://ssl", "http://www", U, u), L, c.vtp_gtmOnFailure);
            }
        });
    })();

    (Y.h.html = ["customScripts"]),
    (function() {
        function a(d, e, f, g) {
            return function() {
                try {
                    if (0 < e.length) {
                        var h = e.shift(),
                            k = a(d, e, f, g);
                        if (
                            "SCRIPT" == String(h.nodeName).toUpperCase() &&
                            "text/gtmscript" == h.type
                        ) {
                            var n = J.createElement("script");
                            n.async = !1;
                            n.type = "text/javascript";
                            n.id = h.id;
                            n.text = h.text || h.textContent || h.innerHTML || "";
                            h.charset && (n.charset = h.charset);
                            var p = h.getAttribute("data-gtmsrc");
                            p && ((n.src = p), Ib(n, k));
                            d.insertBefore(n, null);
                            p || k();
                        } else if (
                            h.innerHTML &&
                            0 <= h.innerHTML.toLowerCase().indexOf("<script")
                        ) {
                            for (var q = []; h.firstChild;)
                                q.push(h.removeChild(h.firstChild));
                            d.insertBefore(h, null);
                            a(h, q, k, g)();
                        } else d.insertBefore(h, null), k();
                    } else f();
                } catch (r) {
                    K(g);
                }
            };
        }

        function b(d) {
            if (J.body) {
                var e = d.vtp_gtmOnFailure,
                    f = mu(d.vtp_html, d.vtp_gtmOnSuccess, e),
                    g = f.Ij,
                    h = f.onSuccess;
                if (d.vtp_useIframe) {} else
                    d.vtp_supportDocumentWrite ? c(g, h, e) : a(J.body, Ub(g), h, e)();
            } else
                Zt(function() {
                    b(d);
                }, 200);
        }
        Y.__html = b;
        Y.__html.m = "html";
        Y.__html.isVendorTemplate = !0;
        Y.__html.priorityOverride = 0;
    })();

    var YB = {};
    (YB.macro = function(a) {
        if (dt.pf.hasOwnProperty(a)) return dt.pf[a];
    }),
    (YB.onHtmlSuccess = dt.kh(!0)),
    (YB.onHtmlFailure = dt.kh(!1));
    YB.dataLayer = Nh;
    YB.callback = function(a) {
        xh.hasOwnProperty(a) && Ca(xh[a]) && xh[a]();
        delete xh[a];
    };
    YB.bootstrap = 0;
    YB._spx = !1;
    (function(a) {
        if (!z["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (J.referrer) {
                var c = ki(J.referrer);
                b = "cct.google" === hi(c, "host");
            }
            if (!b) {
                var d = Oi("googTaggyReferrer");
                b = d.length && d[0].length;
            }
            b &&
                ((z["__TAGGY_INSTALLED"] = !0),
                    Mb("https://cct.google/taggy/agent.js"));
        }
        var f = function(q) {
                var r = "GTM",
                    u = "GTM";
                var t = z["google.tagmanager.debugui2.queue"];
                t ||
                    ((t = []),
                        (z["google.tagmanager.debugui2.queue"] = t),
                        Mb(
                            "https://" +
                            nh.Hc +
                            "/debug/bootstrap?id=" +
                            Ie.J +
                            "&src=" +
                            u +
                            "&cond=" +
                            q +
                            "&gtm=" +
                            Mn()
                        ));
                var v = {
                    messageType: "CONTAINER_STARTING",
                    data: { scriptSource: Gb, containerProduct: r, debug: !1, id: Ie.J },
                };
                v.data.resume = function() {
                    a();
                };
                nh.bi && (v.data.initialPublish = !0);
                t.push(v);
            },
            g = void 0,
            h = ii(z.location, "query", !1, void 0, "gtm_debug");
        ct(h) && (g = 2);
        if (!g && J.referrer) {
            var k = ki(J.referrer);
            "tagassistant.google.com" === hi(k, "host") && (g = 3);
        }
        if (!g) {
            var n = Oi("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4);
        }
        if (!g) {
            var p = J.documentElement.getAttribute("data-tag-assistant-present");
            ct(p) && (g = 5);
        }
        g && Gb ? f(g) : a();
    })(function() {
        var a = !1;
        a && Pm("INIT");
        mg().o();
        jo();
        Wj.enable_gbraid_cookie_write = !0;
        var b = !!S[Ie.J];
        if (b) {
            var c = S.zones;
            c && c.unregisterChild(Xk());
        } else {
            for (var d = Yk(), e = 0; e < d.length; e++) Dr(d[e], Ie.J);
            for (
                var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++
            )
                ge.push(g[h]);
            for (var k = f.tags || [], n = 0; n < k.length; n++) je.push(k[n]);
            for (var p = f.predicates || [], q = 0; q < p.length; q++) ie.push(p[q]);
            for (var r = f.rules || [], u = 0; u < r.length; u++) {
                for (var t = r[u], v = {}, x = 0; x < t.length; x++)
                    v[t[x][0]] = Array.prototype.slice.call(t[x], 1);
                he.push(v);
            }
            le = Y;
            me = Ou;
            Me = new Le();
            var y = data.sandboxed_scripts,
                w = data.security_groups,
                A = data.runtime || [],
                B = data.runtime_lines;
            ry = new Hd();
            uy();
            fe = sy();
            var E = ry,
                C = oy();
            kb(E.g, "require", C);
            for (var D = 0; D < A.length; D++) {
                var F = A[D];
                if (!Ea(F) || 3 > F.length) {
                    if (0 === F.length) continue;
                    break;
                }
                B && B[D] && B[D].length && xe(F, B[D]);
                ry.execute(F);
            }
            if (void 0 !== y)
                for (var P = ["sandboxedScripts"], H = 0; H < y.length; H++) {
                    var L = y[H].replace(/^_*/, "");
                    yh[L] = P;
                }
            vy(w);
            S[Ie.J] = YB;
            for (var U = $k(), R = Xk(), O = 0; O < R.length; O++)
                U.container[R[O]] = !0;
            for (var Z = Yk(), ba = 0; ba < Z.length; ba++) U.destination[Z[ba]] = !0;
            U.canonical[Ie.Gc] = !0;
            Wa(yh, Y.h);
            ne = ne || dt;
            qe = Ee;
            bt();
            zm = !1;
            Am = 0;
            if (
                ("interactive" == J.readyState && !J.createEventObject) ||
                "complete" == J.readyState
            )
                Cm();
            else {
                Qb(J, "DOMContentLoaded", Cm);
                Qb(J, "readystatechange", Cm);
                if (J.createEventObject && J.documentElement.doScroll) {
                    var T = !0;
                    try {
                        T = !z.frameElement;
                    } catch (Qa) {}
                    T && Dm();
                }
                Qb(z, "load", Cm);
            }
            us = !1;
            "complete" === J.readyState ? ws() : Qb(z, "load", ws);
            bm && z.setInterval(Vl, 864e5);
            wh = Ta();
            if (a) {
                var Ia = Qm("INIT");
            }
        }
    });
})();