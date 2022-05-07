// Declara la variables y metodos de Webtrends pero los metodos no hacen nada y las variables no contienen nada
// Este fichero JS se usa para que las llamadas a webtrends no den errores javascript cuando Webtrends está deshabilitado

function WebTrends(){
	var that=this;
	// begin: user modifiable
	this.dcsid="";
	this.domain="";
	this.timezone=1;
	this.onsitedoms="";
	this.downloadtypes="";
	this.navigationtag="";
	this.trackevents=true;
	this.enabled=true;
	this.i18n=false;
	this.paidsearchparams="";
	this.splitvalue="";
	this.preserve=true;
	this.cookieTypes = "";
	this.FPCConfig = {
		enabled: false,
		name: "",
		domain: "",
		expires: 0
	};
	this.TPCConfig = {
		enabled: false,
		cfgType: ""
	};
	// end: user modifiable
	this.DCS={};
	this.WT={};
	this.DCSext={};
	this.images=[];
	this.index=0;
	this.exre=(function(){})();
	this.re=(function(){})();
}
WebTrends.prototype.dcsGetId=function(){
}
WebTrends.prototype.setCookieTypes = function (types) {
}
WebTrends.prototype.dcsGetCookie=function(name){
}
WebTrends.prototype.dcsGetCrumb=function(cval,crumb,sep){
}
WebTrends.prototype.dcsGetIdCrumb=function(cval,crumb){
}
WebTrends.prototype.dcsIsFpcSet=function(name,id,lv,ss){
}
WebTrends.prototype.dcsDeleteCookie=function(name, path, domain) {	
}
WebTrends.prototype.dcsFPC=function(){
}
WebTrends.prototype.dcsIsOnsite=function(host){
}
WebTrends.prototype.dcsTypeMatch=function(pth, typelist){
}
WebTrends.prototype.dcsEvt=function(evt,tag){
}
WebTrends.prototype.dcsNavigation=function(evt){
}
WebTrends.prototype.dcsBind=function(event,func){
}
WebTrends.prototype.dcsET=function(){
}
WebTrends.prototype.dcsMultiTrack=function(){
}

WebTrends.prototype.dcsCleanUp=function(){
}
WebTrends.prototype.dcsSetProps=function(args){
}
WebTrends.prototype.dcsSaveProps=function(args){
}
WebTrends.prototype.dcsRestoreProps=function(){
}
WebTrends.prototype.dcsSplit=function(list){
}
// Code section for Track clicks to download links.
WebTrends.prototype.dcsDownload=function(evt){
}
// Code section for Track right clicks to download links.
WebTrends.prototype.dcsRightClick=function(evt){
}
WebTrends.prototype.dcsAdv=function(){
}
WebTrends.prototype.dcsVar=function(){
}
WebTrends.prototype.dcsEscape=function(S, REL){
}
WebTrends.prototype.dcsA=function(N,V){
}
WebTrends.prototype.dcsEncode=function(S){
}
WebTrends.prototype.dcsCreateImage=function(dcsSrc){
}
WebTrends.prototype.dcsMeta=function(){
}
WebTrends.prototype.dcsTag=function(){
}
WebTrends.prototype.dcsDebug=function(){
}
WebTrends.prototype.dcsCollect=function(){
}

function dcsMultiTrack(){
}

function dcsDebug(){
}

Function.prototype.wtbind = function(obj){
}

var _tag = new WebTrends();
