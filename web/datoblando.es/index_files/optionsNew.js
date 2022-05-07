/* Específicos de FRAMEWORK, necesarios para el funcionamiento de la validación de formularios */

var automaticScript = false; //Para validaciones
var rutaRelativa = "/FwFront";
var rutaJS = "/core/js";
var rutaImg = "/core/img";
var rutaIdiomaTemporal = rutaJS + "/idiomas/";
var arrLit = [];

var assetsVersion = document.currentScript != undefined && document.currentScript.src != undefined && document.currentScript.src.split("?")[1] != undefined ? (document.currentScript.src.split("?")[1] != undefined ? document.currentScript.src.split("?")[1] : "") : "";

//valida el captcha desde el navegador llamando a un microservicio
function validaCaptcha () {
	var result = true;
	var captchaValue = $("#captcha").val();
	if (captchaValue != "") {
		$.ajax({
			type: "GET",
			url: "/FrameWork/microservices/microservices.jsp?service=validaCaptcha&param0=" + captchaValue,
			data: "",
			timeout: 1000, //1 sec
			async: false,
			success: function ( returnedData ) {
				if ("Not allowed" == returnedData) {
					result = false;
					document.getElementById('captchaImg').src='/FrameWork/Captcha.jpg?seed='+Math.floor(Math.random()*1000000000);
					$("#captcha").val("");
				}												
			},
			error: function (jqXHR, textStatus, errorThrown ) {
				console.error("error calling captcha service. errorThrown: " + errorThrown);
				console.error("error jqXHR: " + jqXHR);
			}
		});	
	}
	return result;
}

var captchaReloadAction={
	carga:function(){
		var captchaReloadLink=document.getElementById("captchaReloadLink");
		var captchaImg=document.getElementById("captchaImg");
		captchaReloadLink.href = "javascript:void(0);"; 
		captchaReloadLink.onclick = function(){document.getElementById('captchaImg').src='/FrameWork/Captcha.jpg?seed='+Math.floor(Math.random()*1000000000);};
		}		
}

var validaForm={
	cargaScriptValidadacion:function(){
		if(document.getElementById("datosValidacion1") || document.getElementById("datosEspeciales1"))
		{	
			if(window.valida){
				return;
			}
			else{
				automaticScript = true;
				var htmlHead = document.getElementsByTagName("head")[0];
				var eleScript = document.createElement("script");
				eleScript.src = "/FwFront/core/js/validar.js?" + assetsVersion;
				htmlHead.appendChild(eleScript);
			}
			return true;
		}
		return false;
	}
};

//	OJO HAY QUE DESHABILITAR ESTA VAR CUANDO SE QUIERE CONFIGURAR UN TEMPLATE VACIO

var acciones={
	load:function() {	
		if (document.getElementById("datosValidacion1") || document.getElementById("datosEspeciales1") ){
			validaForm.cargaScriptValidadacion();
		}
		
		if (document.getElementById("content")){
			anchor.carga();
			formula.carga();
			identificacion.carga();
			waitForElementToDisplay(500);
		}
		
		if($(".chartjs-hidden-iframe").length > 0){
			ocultar.frame();
		}
		
		if (fdom.$("captchaReloadLink")){captchaReloadAction.carga();}		
		
		if(fdom.$("tweetsLi")){tweets.muestra();}

		// Si no hay resultados en colecciones que tengan coordenadas se oculta la capa "ver listado/mapa", ojo que no sean las pestañas de buscadores
		if ( $('div.event-info:has(.event-location[data-latitude])').length == 0 && $('div.buscadores').length == 0 && $('div.distritos-listado').length > 0 ) {
			classElements = fdom.getElementsByClass("bg-fluid6");
			classElements[0].className = 'hidden';
		}
		
		// si la página no tiene header, main ni footer se manda a error
		if ( ($('header').length == 0) && ($('main').length == 0) && ( $('footer').length == 0) ) {
			document.write("<meta name='robots' content='noindex'>");
			window.location = "/error";
		}
		
		var infoDetalles = document.getElementsByClassName("header-panel-detalle")[0];
		const valoresURL = window.location.search;
		// Al darle a la paginación en normativa, mueve la ventana al texto y lo muestra
		
			if(valoresURL.indexOf('target=texto') != -1 && valoresURL.indexOf("numPagina=") != -1){
				abrirnormativa();
			}
			
		
		// Despliega o pliega todos los boletines
		var buttonPlegable = document.getElementById("plegable");
		if(buttonPlegable){
			var span_desplegar = document.getElementsByClassName("textoDesplegar")[0];
			var span_plegar = document.getElementsByClassName("textoPlegar")[0];
			
			//No se muestra el nodo que tiene el texto plegar
			span_plegar.style.display = "none";
			buttonPlegable.onclick = function(){
				
			//Comprobamos si hay que desplegar o plegar mediante un tag span
			desplegarboletin(span_plegar);
			
			//hacemos que se muestre solo uno de los dos textos
			span_desplegar.style.display = span_desplegar.style.display == "none" ? "" : "none";
			span_plegar.style.display = span_plegar.style.display == "none" ? "" : "none";
			};
		}
	}
};

//Control dom para las funciones de validacion
var fdom = {
		$: function(id){
			return document.getElementById(id);
		},
		isArray: function(obj){
			return obj && !(obj.propertyIsEnumerable('length')) && typeof obj === 'object' && typeof obj.length === 'number';
		},
		getElementsById: function(strId, sep){
			var arr = [];
			sep = (sep === undefined) ? "_" : sep;
			while(dom.$(strId + sep + arr.length) !== null) {
				arr[arr.length] = dom.$(strId + sep + arr.length);
			}
			return arr;
		},
		getElementsByClass: function(searchClass, node, tag) {
			var classElements = [];			
			if (!node ){
				node = document;
			}
			if (!tag){
				tag = '*';
			}			
			var els = node.getElementsByTagName(tag);
			var elsLen = els.length;
			var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
			for (i = 0, j = 0; i < elsLen; i++) {
				if ( pattern.test(els[i].className) ) { 
					classElements[j] = els[i];
					j++;
				}
			}
			return classElements;
		},	
		onlyThisElement: function(tag, obj){
			var newObj=[];
		    for(var xx = 0; xx < obj.childNodes.length; xx++){
		    	if(obj.childNodes[xx].tagName == tag.toUpperCase()){
		    		newObj[newObj.length] = obj.childNodes[xx];
		            }
		    	}
		    return newObj;
		},
		findChilds: function(obj, tag){
			var arr = [];
			for(var x = 0; x < obj.childNodes.length; x++){
				if(obj.childNodes[x].tagName){
					if(obj.childNodes[x].tagName.toLowerCase() == tag.toLowerCase()){
						arr[arr.length] = obj.childNodes[x];
					}
				}
			}
			return arr;
		}
};

/* el validar.js a su vez necesita los ficheros de idioma que tienen los arrays de literales, se incluyen */
var idiomaAplicacion = {
		codIdioma: null,
		idiomaPorDefecto: "es",
		rutaScripts: rutaJS,							  //valor pruebas local
		rutaIdioma: rutaIdiomaTemporal,
		literal: function(l){
			return	arrLit[idiomaAplicacion.codIdioma][l]; 				
		},
		cargaIdioma: function(){
			var htmlLang=document.getElementsByTagName("html")[0].lang.toLowerCase();
			idiomaAplicacion.codIdioma = (idiomaAplicacion.codIdioma === null)? idiomaAplicacion.idiomaPorDefecto.toLowerCase():htmlLang;
			//document.write("<script  src='"+rutaRelativa+idiomaAplicacion.rutaIdioma+"lang_"+idiomaAplicacion.codIdioma+".js' language='JavaScript' ><\/script>");		
			var htmlHead = document.getElementsByTagName("head")[0];
			var eleScript = document.createElement("script");
			eleScript.src = rutaRelativa + idiomaAplicacion.rutaScripts + "/validar.js";
			eleScript.src = rutaRelativa + idiomaAplicacion.rutaIdioma + "lang_" + idiomaAplicacion.codIdioma+ ".js";
			htmlHead.appendChild(eleScript);
		} 
	};

var tweets={
		muestra:function(){
			if (fdom.$("tweetsDiv")) {
				var url = document.getElementById("tweetsUrl").innerHTML;
				var ocultarId = document.getElementById("ocultarId").innerHTML;
				var tit = null;
				if (fdom.$("tweetsTit")) {
					tit = document.getElementById("tweetsTit").innerHTML;
				}				
				var height = null; //nueva funcionalidad de Twitter: no hace falta widget id (pero pasamos altura para pintar bien el widget)
				var id = null; //vieja funcionalidad de Twitter: hace falta widget id (la altura se configura en Twitter)
				if (fdom.$("tweetsHeight")) {
					height = document.getElementById("tweetsHeight").innerHTML;
				} else {
					id = document.getElementById("tweetsId").innerHTML;
				}			
				var htmlTit = "Tweets";
				if (tit != null && tit != '') {
					htmlTit = htmlTit + " por " + tit;
				}
				if (height != null) { //no usar widget id, al nuevo estilo de Twitter/Facebook
					if  (url.indexOf("twitter") !=-1 ) {
						document.getElementById("tweetsDiv").innerHTML = "<a class=\"twitter-timeline\" data-chrome=\"nofooter\" href=\"" + url + "\" data-height=\"" + height + "\" data-dnt=\"true\" >" + htmlTit + "</a>";
					} else {
						htmlTit = "Facebook";
						document.getElementById("tweetsDiv").innerHTML = "<div id=\"fb-root\"></div>\n" + 
						"<div class=\"fb-page\" data-href=\"" + url +"\" data-tabs=\"timeline\" data-height=\"" + height + "\" data-small-header=\"true\" data-adapt-container-width=\"true\" data-hide-cover=\"true\" data-show-facepile=\"true\"><blockquote cite=\"" + url +"\" class=\"fb-xfbml-parse-ignore\"><a href=\"" + url + "\">" + htmlTit + "</a></blockquote></div>";																			
					}
				} else { //usar widget id al estilo antiguo de Twitter
					document.getElementById("tweetsDiv").innerHTML = "<a class=\"twitter-timeline\" data-chrome=\"nofooter\" href=\"" + url + "\"  data-widget-id=\"" + id + "\">" + htmlTit + "</a>";
				}
				// scripts de incrustación de cada red
				if ( url.indexOf("twitter") !=-1 ) {
					!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
				} else {
					!function(d,s,id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = 'https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v3.0';fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk');
				}
				$("#tweetsDiv").removeClass("hide");
				if (ocultarId != null && ocultarId != '') {
					$("#" + ocultarId).addClass("hide");
				}				
				
			}		
		}
	}

function clear_input_html(id) {
    $('#'+id).html($('#'+id).html());
}

function createMadridCookiesPolicy() {
	if (typeof Cookies !== 'undefined') {
		Cookies.set('MadridCookiesPolicy', '', { domain: COOKIE_MIMADRID_DOMAIN, expires: 365 });
	}
}

$(document).ready(function(){

	/* el nombre del usuario logado se pone ahora por JS arriba tras cargar la página */
	if( fullNameJS != null && fullNameJS != "" && document.getElementById("userOrFolder") != null ){
		
		var windowLocationHref = window.location.href;
		//si estamos en la template LOGOUT, no mostrar al usuario logado, porque se supone que se ya deslogado
		if (windowLocationHref == null || windowLocationHref.indexOf("template.LOGOUT") == -1) {
			var site = document.getElementById("userOrFolder").innerHTML ;
			var hrefLogout = '/portal/site/' + site + '/template.LOGOUT/';
			if ( fullNameJS.indexOf("/portal/site/")!=-1) {
				//modelo AJAX template USER
				$.ajax({
					type: "GET",
					url: fullNameJS,
					data: "",
					success: function ( returnedData ) {
						try {
							var result = returnedData.trim().split(";");
							if ( result[0]!= "" ) {
								if ( result[1]!= "" ) hrefLogout = result[1] + hrefLogout;	// Si viene algo en la segunda posición es que usa clave
								var logout = '<span class="qlh-item qlh-item-user">'+result[0]+'</span> <a href="' + hrefLogout + '" class="logout"><span class="sr-only">Cerrar sesión</span></a>';
								document.getElementById("userOrFolder").className=''; // ATENCIÓN: ésto solo se vale para que se siga viendo el logout en previewaux
								document.getElementById("userOrFolder").innerHTML = logout;
								var menuAreaPrivada = document.getElementById("menuAreaPrivada");
								if (menuAreaPrivada != null) {
									menuAreaPrivada.className='bg-fluid1';
								}	
							}
						} catch(err) {
							console.error("error parsing " + returnedData + ". errorThrown: " + err);
						 }
					},
					error: function (jqXHR, textStatus, errorThrown ) {
						console.error("error calling " + fullNameJS + ". errorThrown: " + errorThrown);
						console.error("error jqXHR: " + jqXHR);
					}
				});	
			} else {
				// modelo clásico de nombre de usuario en vars JS en la página
				if (typeof logoutSbaeClaveJS !== 'undefined' && logoutSbaeClaveJS != null && logoutSbaeClaveJS  != "" && logoutSbaeClaveJS.indexOf("/portal/site/")!=-1) {
					hrefLogout = logoutSbaeClaveJS  + hrefLogout;
				}
				var logout = '<span class="qlh-item qlh-item-user">'+fullNameJS+'</span> <a href="' + hrefLogout + '" class="logout"><span class="sr-only">Cerrar sesión</span></a>';
				document.getElementById("userOrFolder").className=''; // ATENCIÓN: ésto solo se vale para que se siga viendo el logout en previewaux
				document.getElementById("userOrFolder").innerHTML = logout;
				var menuAreaPrivada = document.getElementById("menuAreaPrivada");
				if (menuAreaPrivada != null) {
					menuAreaPrivada.className='bg-fluid1';
				}					
			}
		}
	}
	
	
	
	/* carga el idioma y las funciones de validacion */
	idiomaAplicacion.cargaIdioma();

	acciones.load();	
	
	//A todos los input files que tengan la clase "box" les añadimos un boton de clear oculto
	//El boton se muestra cuando el input tenga algun valor metido
	//Si se quiere mostrar el boton se debe meter la funcion changeFile en el evento onchange del input
	$('input[type=file]').each(function() {
		if ($(this).attr("class")=="box") {
			var inputFileId = $(this).attr("id");
			var oculto = "";
			if ($(this).attr("value")=="" || $(this).attr("value")===undefined) {
				oculto = "hidden";
			}
			$(this).parent().wrap('<div id="file_input_container_'+inputFileId+'"></div>');
			$(this).after('&nbsp;<a id="lnk_' + inputFileId + '" class="bold-link ' + oculto + '" href="javascript:void(0);" onclick="clearFile(\''+inputFileId+'\')">borrar</a>');
		}
	});	
	
	// Si el resultados tiene coordenadas se muestra la capa "ver listado/mapa"
	if ( $('div.event-info:has(.event-location[data-latitude])').length > 0 ) $('div#listado-mapa').attr('class','bg-fluid6');
	
	// Si es una revista digital ocultamos en menú horizontal si lo tiene
	if ( $('div#magazine').length > 0 && $('ul.sub-menu').length > 0 ) $('ul.sub-menu').attr('class','hidden hidden-print');
	
	$('#textoanunciosEnPlazo').click(function () {
		$('#ideseaCopia2q').click();
	});
	$('#ideseaCopia2q').click(function () {
		$('#textoanunciosEnPlazo').focus();
		$('#textoanunciosFueraPlazo').val("");
	});
	$('#textoanunciosFueraPlazo').click(function () {
		$('#ideseaCopia2e').click();
	});
	$('.ui-datepicker-trigger').click(function () {
		$('#ideseaCopia2e').click();
	});
	$('#ideseaCopia2e').click(function () {
		$('#textoanunciosFueraPlazo').focus();
		$('#textoanunciosEnPlazo').val("");
	});
	$('#ideseaCopia25').click(function () {
		$('#textoanunciosFueraPlazo').val("");
		$('#textoanunciosEnPlazo').val("");
	});
	
	// Si existe la cookie mostramos el aviso que por defecto está oculto
	if (typeof Cookies !== 'undefined' && Cookies.get('MadridCookiesPolicy') !== '' && $("div.content.cookies") !== "undefined") {
		$("div.content.cookies").toggleClass('hide');
	}
	// si continúa navendado el usuario no se muestra el aviso de cookies
	createMadridCookiesPolicy();
	
	
	// *****************************************************************************
	// AMMPG-258: botones subir y bajar
	// *****************************************************************************
	// the element inside of which we want to scroll
    var $elem = $(document);
    // show the buttons
	$('#nav_up').fadeIn('slow');
	$('#nav_down').fadeIn('slow');  
	// se resetea el ancla accesible para que no de un parpadeo al pulsar
	$('#nav_up').attr('href','#');
	$('#nav_down').attr('href','#');	
    // clicking the "down" button will make the page scroll to the $elem's height
	$('#nav_down').click(
		function (e) {
			$('html, body').animate({scrollTop: $elem.height()}, 800);
		}
	);
    // clicking the "up" button will make the page scroll to the top of the page
	$('#nav_up').click(
		function (e) {
			$('html, body').animate({scrollTop: '0px'}, 800);
		}
	);
	
	openStreetMaps.init();
	
})

//Borrar el valor de un input file y oculta el boton de borrar asociado
function clearFile(inputFileId) {
	clear_input_html('file_input_container_'+inputFileId);
	$("#img_" + inputFileId).addClass("hidden");
	$("#lnk_" + inputFileId).addClass("hidden");
}

//Esta funcion muestra en boton de Borrar en un input file cuando el input tiene valor
//Se debe meter en el evento onChange de los input file en los que se desee que se muestre el boton 
function changeFile(inputFileId) {
	var input = document.getElementById(inputFileId);
	if (input.value != '') {
		$("#img_" + inputFileId).removeClass("hidden");
		$("#lnk_" + inputFileId).removeClass("hidden");
	}
}

//Evento para cerrar el aviso de cookies
jQuery('.cookies a.eliminar').click(function(event) {
    $(this).parents('.cookies').toggleClass('hide');
    createMadridCookiesPolicy();
});

function getDocHeight(doc) {
    doc = doc || document;
    // stackoverflow.com/questions/1145850/
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}

function setIframeHeight(id) {
	var ifrm = document.getElementById(id);
	if (ifrm != null) {
		var doc = ifrm.contentDocument ? ifrm.contentDocument: ifrm.contentWindow.document;
		ifrm.style.visibility = 'hidden';
		ifrm.style.height = "10px"; // reset to minimal height ...
		var docHeight = getDocHeight(doc);
		ifrm.style.height = docHeight + 40 + "px"; //40 extra px to make sure scroll disapears
		ifrm.style.visibility = 'visible';
	}	
}

function getOpenStreetMaps () {
	return function() {
	    var verMapa = jQuery("#vermapa-open")
	      , tabMapa = jQuery("#tabmapa-open")
	      , mapaId = null
	      , zoom = 12
	      , datas = []
	      , isScriptAppended = !1
	      , isMapRendered = !1
	      , setups = function() {
		        jQuery.exists(verMapa) && verMapaSetup(),
		        jQuery.exists(tabMapa) && tabMapaSetup()
		    }
	      , appendScript = function() {
		        if (!isScriptAppended) {
		            isScriptAppended = !0;
					var link = document.createElement("link"); 
					link.rel = "stylesheet"; 
					link.crossorigin= ""; 
					link.href = "https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"; 
					document.head.appendChild(link);
		            var script = document.createElement("script");
		            script.id = "openStreetMapJS";
		            script.type = "text/javascript";
		            script.src = "https://unpkg.com/leaflet@1.4.0/dist/leaflet.js";
		            script.onload = appendScriptFS;
		            document.body.appendChild(script);
		        }
		    }
	      , appendScriptFS = function() {
	    	  		// hay que hacerlo así encadenado porque si no no se garantiza que estén los objetos listos
		            // fullscreen plugin
	    	  		var link = document.createElement("link"); 
					link.rel = "stylesheet"; 
					link.crossorigin= ""; 
					link.href = "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/leaflet.fullscreen.css"; 
					document.head.appendChild(link);
					var script = document.createElement("script");
		            script.id = "openStreetMapFS";
		            script.type = "text/javascript";
		            script.src = "https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/Leaflet.fullscreen.min.js";
		            script.onload = callback;           
		            document.body.appendChild(script);
		    }   
	      , verMapaSetup = function() {
		        mapaId = jQuery(verMapa.attr("href")),
		        datas = loadDatas(verMapa),
		        verMapa.on("click", function(event) {
		            event.preventDefault(),	            
		            mapaId.slideToggle(50).toggleClass("in"),
		        	zoom = 17,
		            appendScript(),
		            toogleText()
		        })
		    }
	      , tabMapaSetup = function() {
		        mapaId = jQuery(tabMapa.attr("href")),
		        datas = loadDatas(jQuery(".event-location[data-latitude]")),
		        tabMapa.on("click", function(event) {
		            event.preventDefault(),
		            appendScript()
		        })
		    }
	      , loadDatas = function(items) {
		        var datos = [];
		        return items.each(function() {
		            var item = $(this)
		              , uri = item.parents(".event-info").find("a").attr("href");
		            datos.push({
		                name: item.data("name"),
		                dir: item.data("direction"),
		                phone: item.data("phone"),
		                lat: parseFloat(item.data("latitude")),
		                "long": parseFloat(item.data("longitude")),
		                href: uri
		            })
		        }),
		        datos
		    }
	      , toogleText = function() {
		        var texto = verMapa.text()
		          , textoToggle = verMapa.attr("data-toggle-text");
		        verMapa.attr("data-toggle-text", texto),
		        verMapa.get(0).childNodes[0].nodeValue = textoToggle
		    }
	      , callback = function() {
		        var styleName, color, colores = {
		            blue: "ayuntamiento-madrid-blue",
		            orange: "ayuntamiento-madrid-orange",
		            green: "ayuntamiento-madrid-green",
		            pink: "ayuntamiento-madrid-pink",
		            purple: "ayuntamiento-madrid-purple"
		        }, getColor = $.map(colores, function(a, b) {
		            return b
		        }), getStyleName = $.map(colores, function(a, b) {
		            return a
		        });
		        $("link").each(function(index) {
		            for (var i = 0; i < $("link").length; i++)
		                $("link")[index].attributes.href.nodeValue.indexOf(getStyleName[i]) > -1 && (styleName = getStyleName[i],
		                color = getColor[i])
		        });
	    	  	var Leaflet = L.noConflict();
		        var mapa, bounds, iconUrl;
		        void 0 == color || "blue" == color ? iconUrl = "/assets/images/map/map-icon-target.png" : "orange" == color ? iconUrl = "/assets/images/map/map-icon-target-orange.png" : "green" == color ? iconUrl = "/assets/images/map/map-icon-target-green.png" : "pink" == color ? iconUrl = "/assets/images/map/map-icon-target-pink.png" : "purple" == color && (iconUrl = "/assets/images/map/map-icon-target-purple.png");
		        if (isMapRendered === !1) {
		            isMapRendered = !0,
		            bounds = new Leaflet.latLngBounds,
		            mapa = Leaflet.map(mapaId.get(0), {zoom: zoom, center: Leaflet.latLng(datas[0].lat,datas[0]["long"])});
		        	Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		        		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		        	}).addTo(mapa);
		            jQuery(datas).each(function(k, data) {
		            	if (data.lat!=0 && data["long"]!=0) {
			            	var pos = Leaflet.latLng(data.lat,data["long"]);
			                bounds.extend(pos);
							Leaflet.marker(pos, {
								title: data.name,
								icon: Leaflet.icon({
									iconUrl: iconUrl,
									shadowUrl: '',
									iconSize:     [44, 71],
									shadowSize:   [50, 64],
									iconAnchor:   [22, 94],
									shadowAnchor: [4, 62],
									popupAnchor:  [-3, -76]
									})
							}).bindPopup(data.name+"<br>"+data.dir+"<br>"+(data.phone!=undefined?data.phone+"<br>":"")+(data.href!=undefined?"<a href=\""+data.href+"\" class=\"infoWindow-href\">Ver detalle</a><br>":"")).addTo(mapa);
		            	}
		            });
		            mapa.addControl(new L.Control.Fullscreen()); // FullScreen plugin
		            datas.length > 1 && mapa.fitBounds(bounds);
		        }
	    };
	    return {
	        init: setups
	    }
	}();
}

var openStreetMaps = {};
openStreetMaps = getOpenStreetMaps();

function ajaxPestania (url, total, active) {
	for (var i = 0; i < total; i++) {
		var pestLi = $('#pestLi' + i);
		if (pestLi) {			
			if (i != active && pestLi.hasClass('active')) {
				pestLi.removeClass('active');
				var pestLiHtml = pestLi.html().replace('<h4>', '').replace('</h4>','');
				pestLi.html(pestLiHtml);
			}
			if (i == active && !pestLi.hasClass('active')) {
				pestLi.addClass('active');
				var pestLiHtml = '<h4>' + pestLi.html() + '</h4>';
				pestLi.html(pestLiHtml);
			}
		}
	}
	ajaxDivChange(url, 'ajaxDiv', 'top');
}

function ajaxPersianas (url, chId, chName) {
	var notPerformDivChange = $('#' + chName).hasClass('in'); //si esta desplegado solo plegar, no recargar el div
	$('.divPersianaAjax.collapse.in').removeClass('in').html('<div class="ajaxLoadingDiv hide"></div><span class="ajax-error hide" title="No se ha podido cargar la página solicitada"></span>');
	$('.aPersianaAjax').addClass('collapsed');
	if (!notPerformDivChange) { 
		$('#' + chName).addClass('in');
		ajaxDivChangePersiana(url, 'ajaxDiv_' + chId, 'a' + chId);
	}	
}

function ajaxDivChangePersiana (urltoCall, divToChange, elemToFocus) {
	$('.ajax-error').addClass('hide');
	$('.ajaxLoadingDiv').removeClass('hide');
	$.ajax({
		type: "GET",
		url: urltoCall,
		data: "",
		success: function ( returnedData ) {
			$( '#' + divToChange ).html( returnedData );
			$('.ajaxLoadingDiv').addClass('hide');
			$( '#' + divToChange ).focus();
			$('#' + elemToFocus).focus();
		},
		error: function (jqXHR, textStatus, errorThrown ) {
			console.error("error calling " + urltoCall + ". errorThrown: " + errorThrown);
			console.error("error jqXHR: " + jqXHR);
			$('.ajaxLoadingDiv').addClass('hide');
			$('.ajax-error').text("¡error!").removeClass('hide');
			$('#' + elemToFocus).focus();
		}
	});	
	
}

function ajaxDivChange (urltoCall, divToChange, loadClass) {
	$('.ajax-error').addClass('hide');
	$('#ajaxLoading').height($('#ajaxDiv').height()).removeClass('hide').addClass(loadClass);
	$.ajax({
		type: "GET",
		url: urltoCall,
		data: "",
		success: function ( returnedData ) {
			$( '#' + divToChange ).html( returnedData );
			$('#mapSearchResults').removeClass('active');
			$('#ajaxLoading').removeClass(loadClass).addClass('hide');
			
			var loadMap = false;
			// Si el resultados tiene coordenadas se muestra la capa "ver listado/mapa"
			if ( $('div.event-info:has(.event-location[data-latitude])').length > 0 ) {
				$('div#listado-mapa').attr('class','bg-fluid6');
				loadMap = true;
			}
			// En colecciones lo mismo pero al revés, si no tiene coordenadas se oculta
			if ($('div.event-info:has(.event-location[data-latitude])').length == 0 && $('div.distritos-listado.distritos').length > 0 ) {
				$('.bg-fluid6').attr('class','hidden');
				loadMap = false;
			}

			if (loadMap) {
				openStreetMaps = getOpenStreetMaps();
				openStreetMaps.init();
			}			
			
			if (loadClass == 'bottom') {				
				$('#totalResultsUL').focus();
			}
			
			// ponemos en la URL el parametro 'page' para que se añada al historial de navegacion
			addPageToHistory(urltoCall);
		},
		error: function (jqXHR, textStatus, errorThrown ) {
			console.error("error calling " + urltoCall + ". errorThrown: " + errorThrown);
			console.error("error jqXHR: " + jqXHR);
			$('#ajaxLoading').removeClass(loadClass).addClass('hide');
			$('.ajax-error').text("¡error!").removeClass('hide');
		}
	});
}

function addPageToHistory (urltoCall){
	var locActual = window.document.location.toString();

	//Cogemos el page=num página al que enviamos
	var contienePage = urltoCall.substring(urltoCall.indexOf('page='));

	//Si url ya tiene param page se cambiamos el valor, en caso contrario lo ponemos al final 
	var url = locActual + "&" + contienePage;
	if(locActual.indexOf('page=') != -1){
		url = locActual.substring(0, locActual.indexOf('page=')) + contienePage ;
	}
	
	window.history.pushState( {} , '', url );
}

//para capturar el evento popstate que se lanza al pulsar botón back en el navegador o hacer window.history.back()
window.onpopstate = function(event) {
	document.location.reload(false); //recargar página metida en el historico con window.history.pushState()
};

function ajaxDivChangeCal (urltoCall, divToChange) {
	$('.ajax-error').addClass('hide');
	$('#ajaxLoading').height($('#ajaxDiv').height()).removeClass('hide');
	$.ajax({
		type: "GET",
		url: urltoCall,
		data: "",
		success: function ( returnedData ) {
			$( '#' + divToChange ).html( returnedData );
			$('#ajaxLoading').addClass('hide');
			
		},
		error: function (jqXHR, textStatus, errorThrown ) {
			console.error("error calling " + urltoCall + ". errorThrown: " + errorThrown);
			console.error("error jqXHR: " + jqXHR);
			$('#ajaxLoading').addClass('hide');
			$('.ajax-error').text("¡error!").removeClass('hide');
		}
	});
}

function marcarRespuesta() {
	var seleccionado = "Debes seleccionar una opción para continuar";
	var lnkSiguiente = null;
	var no_border = document.getElementsByClassName('no-background');	
	for (var i = 0; i < no_border.length; i++) {
		if (no_border[i].getElementsByClassName('in').length > 0) {
			seleccionado = no_border[i].getElementsByClassName('in')[0].getElementsByClassName("seleccionado")[0].firstChild.nodeValue;
			$("#lnkSiguiente").attr("href", seleccionado);
			$("#lnkSiguiente").click();
		}
	}
	if (seleccionado == "Debes seleccionar una opción para continuar") {
		alert(seleccionado);
	} 	
	return false;
}

//Está funcion encuentra los hijos del listado y los muestra o no dependiendo si está desplegado o plegado
function desplegarboletin(span) {
	//buscamo el arbol que despliega los elementos boletin y buscamos por tags a y li que son los elementos a modificar en el plegado/desplegado
	var tree = document.getElementsByClassName("tree")[0];
	
	var tags_a = tree.getElementsByTagName("a");
	var tags_li = tree.getElementsByTagName("li");
	
	 for (var i = 0; i < tags_a.length; i++) {
		 if(tags_a[i].className.indexOf("tree-toggle") != -1){
			 tags_a[i].className = span.style.display == "none" ? "tree-toggle" : "tree-toggle plus";
		 }
	 }
	 
	 for (var i = 0; i < tags_li.length; i++) {
		//(si no tiene estilo.display el tag li se muestra como "")
	 	if(tags_li[i].style.display != ""){
	 		 //solo se modifican los li que tienen definido style none o list-item 
			 tags_li[i].style.display = span.style.display == "none" ? "list-item" : "none";
		 }
	 }
}

function abrirnormativa() {
    //Busca el header correspondiente al texto y lo muestra y enfoca solo cuando se utiliza paginación 
	var collapse = document.getElementsByClassName("header-panel-detalle");
	var tag_texto = null
	for(var i = 0 ; i < collapse.length; i++){
		var tag_a = collapse[i].getElementsByTagName("a")[0]; //solo contiene un tag a los header
		if(tag_a.getAttribute('href') == "#texto"){
			tag_texto = tag_a;
		}
	}
	
	if(!tag_texto.getAttribute('aria-expanded')){
		var texto = document.getElementById("texto");
		if(texto){
			texto.className = "collapse in";
			texto.focus();
		}
	}
}

// Evita la recarga de la página y realiza el focus al contenido principan
var anchor={
	carga:function(){
		if(document.getElementById("anchorToContent") != null){
			document.getElementById("anchorToContent").addEventListener("click", function(event){
				if(document.getElementById('content') != null){
					var anchorLink = document.getElementById('content');
					anchorLink.setAttribute("tabindex","-1");
					anchorLink.scrollIntoView();
					anchorLink.focus();
				}
	        	event.preventDefault();
	     	})
		}
	}
}

// Pone titulo y aria hidden al iframe de los graficos, solo sirve para el redimensionado
var ocultar={
	frame:function(){
	   var hid = '.chartjs-hidden-iframe';
	   $(hid).attr("title","iframe utilizado para el cambio de tamaño del canvas");
	   $(hid).attr('aria-hidden', true);
	}
}

var formula={
	carga:function(){
		var button = $('.calculate');
		button.on('click keyup', function(e) {
			if((e.type == 'keyup' && e.keyCode == 13) || e.type=='click'){
				calcular($(this).next().text());
			}
		});
	}
}


function calcular(datos) {
	var listaValores = datos.slice(0, -1).split("_"); //siempre acaba en ';' se elimina
	var idInput = listaValores[0]
	var operandos = listaValores[3].split(";"); 
	var resultado = Number.MIN_VALUE;
	var esDecimal = listaValores[2];
	for (var i = 1; typeof(resultado) == "number" && i < operandos.length; i++) {
		var tipoValor = operandos[i].split("=");
		if(tipoValor[0] != "editable"){
			if(tipoValor[0] == "id"){
				var valor = esDecimal == "true" ? parseFloat($("#"+tipoValor[1]).val().replace(",", "."))  : parseInt($("#"+tipoValor[1]).val());	
			}else{
				var valor = esDecimal == "true" ? parseFloat(tipoValor[1].replace(",", ".")) : parseInt(tipoValor[1].replace(",", ".")) ;
			}
			resultado = !isFinite(valor) ? "Debes rellenar el campo <strong>"+"'"+$('#'+tipoValor[1]).prev().text()+"'"+"</strong> con valores númericos" : resultado == Number.MIN_VALUE ? valor : operacion(operandos[0], resultado, valor);
		}
	}
	if(typeof(resultado) == "string"){ //gestionamos la gestión del error y la pista para solucionarlo
		$("#hint_"+idInput).remove();
		var span = $("<span>",{"id":"hint_"+listaValores[0],"class": "hint"}).append(resultado);
		$("#" + idInput).addClass("errorField").parent().append(span);
	}else{
		$("#hint_"+idInput).remove(); //si no existe no hace nada
		$("#" + idInput).removeClass("errorField").val( esDecimal == "true" ? resultado.toFixed(2).replace(".", ",") : resultado);
	}
}

function operacion(operador, resultado, valor){
	switch (operador) {
	  case '*':
		return resultado = resultado * valor;
	  case '+':
		return resultado = resultado + valor;
	  case '/':
		resultado = resultado / valor; 
		return resultado = !isFinite(resultado) ? "No se puede dividir entre 0" : resultado
	  default:
		return resultado = resultado - valor;
	}
}

function waitForElementToDisplay(time) {
	var focus = $("#mm-0 li a:first");
    if($(".mm-close").length) {
		/* Ponemos los textos alternativos que faltan */
		$(".mm-close").attr('alt', 'Cerrar menú del portal');
		$(".mm-prev").attr('alt', 'Atrás');
		/* Añadimos los tabIndex para que sean focusable los enlaces y el evento click para obtener el foco */
		$("nav#menu div > a, nav#menu ul li > a").attr('tabindex', "0").click(function() {
			//Si se clica al cerrar no debe avanzar en el listado
			if(this != objectValues($(".mm-close"))[0] ){
				/* Si no se ha accedido previamente al submenu está oculto, sino está activo para acceder a ellos*/
				var id = "#" +this.href.substring(this.href.indexOf("#")+1);
				focus = $(id+":hidden li:not(.mm-subtitle):first a");
				focus = focus.length == 0 ? $(id+" li:not(.mm-subtitle):first a") : focus
			}
			setTimeout(function(){focus.focus();}, 500);
		}).keydown(function(e) {
		var key = e.keyCode ? e.keyCode : e.which;	
		// tab
		if(!e.shiftKey && key == 9){
				if(objectValues(focus)[0] != document.activeElement){
					/* Se comprueba que es la cabecera sino posicionamos el foco al primer elemento */
					$(".mm-prev:visible").length > 0 && objectValues($(".mm-close"))[0] == document.activeElement ? $(".mm-prev").focus() :focus.focus();
				}else{
					var siguienteEle = focus.parent().next().find("a:visible:first")
					focus = siguienteEle.length > 0 ? siguienteEle.focus() : focus.focus()
				}
			}
			// tab + shift
			if(e.shiftKey && key == 9){ 
				if(objectValues(focus)[0] != document.activeElement){
					/* Se comprueba que es la cabecera sino posicionamos el foco al primer elemento */
					var cabecera = objectValues($(".mm-prev:visible"))[0] == document.activeElement || objectValues($(".mm-close"))[0] == document.activeElement
					cabecera ? $(".mm-close").focus() : focus.focus();
					}else{
						/* Desde el primer elemento posicionamos al < o x sino al elemento anterior del listado */
						if( $(this).parent().prev().find("a:visible").length == 0){
							$(".mm-prev:visible").length > 0 ? $(".mm-prev:visible").focus() : $(".mm-close").focus();
						}else{
							focus = $(this).parent().prev().find("a:first").focus();
						}
					}
				}
      		});

	/* Añadimos eventos de teclado o raton para poner el puntero en el menu */
	$("#sidebar-toggle-button").click(function() {
       	setTimeout(function(){focus.focus();}, 500);
  	});
	
	$(".mm-prev").click(function() {
		var enlace = $(".mm-prev").attr('href')
		focus = $(enlace +" li:not(.mm-subtitle):first a");
		setTimeout(function(){focus.focus();}, 500);
      	});
		
	$(".mm-close").click(function() {
		$("#sidebar-toggle-button").focus();
      });

	$("#menu").mousedown(function(e) { // handle the mousedown event
			e.preventDefault(); // prevent the textarea to loose focus!
		});
		
    } else {
        setTimeout(function() {
            waitForElementToDisplay(time);
        }, time);
    }
}

/* Metodo para obtener el mapa con los elementos de los objetos en jquery para IE */
function objectValues(obj) {
   return Object.keys(obj).map(function(k) {
      return obj[k];
   });
}

/* Método para sustituir el menú de identificacion con el de usuario/contraseña en "mi carpeta" */
var identificacion={
	carga:function(){
		$("#acceso_pass").click(function (event) {
			event.preventDefault();
			identificacionCID360();
		});
		$("#volver_identificacion").click(function (event) {
			event.preventDefault();
			identificacionCID360();
		});
	}
}

function identificacionCID360(){
	var menu_user_pass = $("#user-pass");
	var menu_identificacion = $("#medios-acceso");
	if(menu_user_pass.hasClass("hide")){
		menu_user_pass.removeClass("hide");
		menu_identificacion.addClass("hide");
		$(window).scrollTop(menu_user_pass.offset().top);
	}else{
		menu_identificacion.removeClass("hide");
		menu_user_pass.addClass("hide");
		$(window).scrollTop(menu_identificacion.offset().top);
	}
}
