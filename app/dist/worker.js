!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";e.__esModule=!0,e.extend=s,e.indexOf=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}if(!o.test(t))return t;return t.replace(a,i)},e.isEmpty=function(t){return!t&&0!==t||!(!u(t)||0!==t.length)},e.createFrame=function(t){var e=s({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},a=/[&<>"'`=]/g,o=/[&<>"'`=]/;function i(t){return r[t]}function s(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var l=Object.prototype.toString;e.toString=l;var c=function(t){return"function"==typeof t};c(/x/)&&(e.isFunction=c=function(t){return"function"==typeof t&&"[object Function]"===l.call(t)}),e.isFunction=c;var u=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===l.call(t)};e.isArray=u},function(t,e,n){"use strict";e.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function a(t,e){var n=e&&e.loc,o=void 0,i=void 0,s=void 0,l=void 0;n&&(o=n.start.line,i=n.end.line,s=n.start.column,l=n.end.column,t+=" - "+o+":"+s);for(var c=Error.prototype.constructor.call(this,t),u=0;u<r.length;u++)this[r[u]]=c[r[u]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{n&&(this.lineNumber=o,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:l,enumerable:!0})):(this.column=s,this.endColumn=l))}catch(t){}}a.prototype=new Error,e.default=a,t.exports=e.default},function(t,e,n){t.exports=n(11).default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.HandlebarsEnvironment=u;var a=n(0),o=r(n(1)),i=n(4),s=n(19),l=r(n(6)),c=n(7);e.VERSION="4.7.3";e.COMPILER_REVISION=8;e.LAST_COMPATIBLE_COMPILER_REVISION=7;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function u(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},i.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:l.default,log:l.default.log,registerHelper:function(t,e){if("[object Object]"===a.toString.call(t)){if(e)throw new o.default("Arg not supported with multiple helpers");a.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===a.toString.call(t))a.extend(this.partials,t);else{if(void 0===e)throw new o.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===a.toString.call(t)){if(e)throw new o.default("Arg not supported with multiple decorators");a.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]},resetLoggedPropertyAccesses:function(){c.resetLoggedProperties()}};var d=l.default.log;e.log=d,e.createFrame=a.createFrame,e.logger=l.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.registerDefaultHelpers=function(t){a.default(t),o.default(t),i.default(t),s.default(t),l.default(t),c.default(t),u.default(t)},e.moveHelperToHooks=function(t,e,n){t.helpers[e]&&(t.hooks[e]=t.helpers[e],n||delete t.helpers[e])};var a=r(n(12)),o=r(n(13)),i=r(n(14)),s=r(n(15)),l=r(n(16)),c=r(n(17)),u=r(n(18))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0),a={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=r.indexOf(a.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=a.lookupLevel(t),"undefined"!=typeof console&&a.lookupLevel(a.level)<=t){var e=a.methodMap[t];console[e]||(e="log");for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];console[e].apply(console,r)}}};e.default=a,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.createProtoAccessControl=function(t){var e=Object.create(null);e.constructor=!1,e.__defineGetter__=!1,e.__defineSetter__=!1,e.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:r.createNewLookupObject(n,t.allowedProtoProperties),defaultValue:t.allowProtoPropertiesByDefault},methods:{whitelist:r.createNewLookupObject(e,t.allowedProtoMethods),defaultValue:t.allowProtoMethodsByDefault}}},e.resultIsAllowed=function(t,e,n){return i("function"==typeof t?e.methods:e.properties,n)},e.resetLoggedProperties=function(){Object.keys(o).forEach((function(t){delete o[t]}))};var r=n(21),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(6)),o=Object.create(null);function i(t,e){return void 0!==t.whitelist[e]?!0===t.whitelist[e]:void 0!==t.defaultValue?t.defaultValue:(function(t){!0!==o[t]&&(o[t]=!0,a.log("error",'Handlebars: Access has been denied to resolve the property "'+t+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(e),!1)}},function(t,e){const n=t=>e=>e.method.toLowerCase()===t.toLowerCase(),r=n("connect"),a=n("delete"),o=n("get"),i=n("head"),s=n("options"),l=n("patch"),c=n("post"),u=n("put"),d=n("trace"),f=t=>e=>{const n=new URL(e.url).pathname;return(n.match(t)||[])[0]===n};t.exports=class{constructor(){this.routes=[]}handle(t,e){return this.routes.push({conditions:t,handler:e}),this}connect(t,e){return this.handle([r,f(t)],e)}delete(t,e){return this.handle([a,f(t)],e)}get(t,e){return this.handle([o,f(t)],e)}head(t,e){return this.handle([i,f(t)],e)}options(t,e){return this.handle([s,f(t)],e)}patch(t,e){return this.handle([l,f(t)],e)}post(t,e){return this.handle([c,f(t)],e)}put(t,e){return this.handle([u,f(t)],e)}trace(t,e){return this.handle([d,f(t)],e)}all(t){return this.handle([],t)}route(t){const e=this.resolve(t);return e?e.handler(t):new Response("resource not found",{status:404,statusText:"not found",headers:{"content-type":"text/plain"}})}resolve(t){return this.routes.find(e=>!(e.conditions&&(!Array.isArray(e)||e.conditions.length))||("function"==typeof e.conditions?e.conditions(t):e.conditions.every(e=>e(t))))}}},function(t,e,n){var r=n(2);t.exports=(r.default||r).template({1:function(t,e,n,r,a){return'<header>\n    <nav class="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">\n        <a class="navbar-brand" href="#top"><strong>We\'re at WARS</strong></a>\n        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"\n            aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">\n            <span class="navbar-toggler-icon"></span>\n        </button>\n        <div class="collapse navbar-collapse" id="navbarContent">\n            <ul class="navbar-nav mr-auto">\n                <li class="nav-item active">\n                    <a class="nav-link" href="#world">World</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link" href="#country">Country</a>\n                </li>\n            </ul>\n            <ul class="navbar-nav nav-flex-icons">\n                <li class="nav-item">\n                    <a class="nav-link" href="https://github.com/kring0hk/wars-cfworker" target="_blank"><i class="fab fa-github"></i></a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</header>\n<main>\n    <div class="container-fluid" id="world">\n        <div class="row py-3 pt-5 mt-5">\n            <div class="col">\n                <h2 class="text-center">World</h2>\n            </div>\n        </div>\n        <div class="row py-3 mx-lg-3">\n            <div class="col-12 col-lg-4">\n                <h3 class="text-center" data-title-for="chart1"></h3>\n                <div id="chart1" class="chart" data-src="confirmed" data-title="Confirmed (> 10000)" data-min="10000"></div>\n            </div>\n            <div class="col-12 col-lg-4">\n                <h3 class="text-center" data-title-for="chart2"></h3>\n                <div id="chart2" class="chart" data-src="deaths" data-title="Deaths (> 1000)" data-min="1000"></div>\n            </div>\n            <div class="col-12 col-lg-4">\n                <h3 class="text-center" data-title-for="chart3"></h3>\n                <div id="chart3" class="chart" data-src="recovered" data-title="Recovered (> 1000)" data-min="1000"></div>\n            </div>\n        </div>\n    </div>\n    <div class="container-fluid" id="country">\n        <div class="row py-3 pt-3 mt-3">\n            <div class="col">\n                <h2 class="text-center">By Country - Confirmed</h2>\n            </div>\n        </div>\n        <div class="row py-3 mx-lg-3">\n            <div class="col-12 col-lg-4">\n                <h3 class="text-center" data-title-for="chart4"></h3>\n                <div id="chart4" class="chart" data-src="confirmed" data-title="China (> 1000)" data-country="China" data-min="1000" data-scale="logarithmic"></div>\n            </div>\n            <div class="col-12 col-lg-4">\n                <h3 class="text-center" data-title-for="chart5"></h3>\n                <div id="chart5" class="chart" data-src="confirmed" data-title="US (> 1000)" data-country="US" data-min="1000"></div>\n            </div>\n            <div class="col-12 col-lg-4">\n                <h3 class="text-center" data-title-for="chart6"></h3>\n                <div id="chart6" class="chart" data-src="confirmed" data-title="Hong Kong" data-country="Hong Kong"></div>\n            </div>\n            <div class="col-12 col-lg-4">\n                <h3 class="text-center" data-title-for="chart7"></h3>\n                <div id="chart7" class="chart" data-src="confirmed" data-title="Italy" data-country="Italy"></div>\n            </div>\n            <div class="col-12 col-lg-4">\n                <h3 class="text-center" data-title-for="chart8"></h3>\n                <div id="chart8" class="chart" data-src="confirmed" data-title="Spain" data-country="Spain"></div>\n            </div>\n            <div class="col-12 col-lg-4">\n                <h3 class="text-center" data-title-for="chart9"></h3>\n                <div id="chart9" class="chart" data-src="confirmed" data-title="Germany" data-country="Germany"></div>\n            </div>\n        </div>\n    </div>\n</main>\n<footer class="page-footer font-small pink">\n    <div class="footer-copyright text-center py-3">\n        Based on data by <a href="https://github.com/CSSEGISandData/COVID-19" target="_blank">Johns Hopkins University</a>\n    </div>\n</footer>\n<script>\nclass DataSet {\n    constructor(csv) {\n        let lines = csv.split(\'\\n\')\n        let [,,,, ...labels] = lines.shift().split(\',\')\n        this.labels = labels.map(t => new Date(t).getTime())\n        this.rows = []\n\n        for (let s of lines) {\n            let state, country, lat, long, values\n\n            [, state, s] = s.match(/^("(?:[^"]*?)"|[^,]*),(.*)/);\n            [, country, s] = s.match(/^("(?:[^"]*?)"|[^,]*),(.*)/);\n            [lat, long, ...values] = s.split(\',\');\n\n            if (state == \'Hong Kong\') {\n                [state, country] = [\'\', state]\n            }\n\n            [, state] = state.match(/^"?(.*?)"?$/);\n            [, country] = country.match(/^"?(.*?)"?$/);\n\n            this.add([state, country], values.map(s => parseFloat(s)))\n        }\n    }\n    add(categories, row) {\n        this.rows.push([categories, row])\n    }\n    toSeries(filter) {\n        let rows = filter ? this.rows.filter(filter) : this.rows;\n        return rows.map(([[state, country], row]) => ({\n            name: state ? `${state} (${country})` : country,\n            data: row.map((e, i) => [this.labels[i], e])\n        }))\n    }\n}\n\nfunction rowFilter(chart) {\n    let e = $(chart)\n    return ([[state, country], row]) => {\n        let match = true;\n        let filterState = e.data(\'state\');\n        let filterCountry = e.data(\'country\');\n        let filterMin = e.data(\'min\');\n        let filterMax = e.data(\'max\');\n        let cases = row[row.length - 1];\n\n        if (filterState && state && filterState != state)\n            match = false;\n        if (filterCountry && country && filterCountry != country)\n            match = false;\n        if (filterMin && cases < filterMin)\n            match = false;\n        if (filterMax && cases > filterMax)\n            match = false;\n\n        return match\n    }\n}\n\n// https://github.com/d3/d3-scale-chromatic/blob/master/src/sequential-multi/turbo.js\nfunction interpolateTurbo(t) {\n    t = Math.max(0, Math.min(1, t));\n    return "rgb("\n        + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", "\n        + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", "\n        + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66)))))))\n        + ")";\n}\n\n$(function() {\n    let sources = {\n        confirmed: \'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv\',\n        deaths: \'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv\',\n        recovered: \'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv\',\n    }\n\n    let chartOptions = {\n        chart: {\n            type: \'line\',\n            height: 350\n        },\n        dataLabels: {\n            enabled: false\n        },\n        stroke: {\n            width: 2\n        },\n        xaxis: {\n            type: \'datetime\',\n            min: new Date(Date.now() - 30 * 86400000).getTime(),\n        },\n        yaxis: {\n            logarithmic: false\n        },\n        title: {\n            text: \'Chart Title\',\n        },\n        tooltip: {\n            x: {\n                format: \'dd MMM yyyy\'\n            }\n        },\n    }\n\n    for (let src in sources) {\n        fetch(sources[src]).then(resp => resp.text()).then(csv => {\n            let ds = new DataSet(csv)\n            $(\'.chart\')\n                .filter((i, e) => $(e).data(\'src\') == src)\n                .each((i, e) => {\n                    let options = Object.assign({}, chartOptions);\n                    options.series = ds.toSeries(rowFilter(e))\n                    options.colors = options.series.map((e, i) => interpolateTurbo((1+i) / options.series.length))\n                    if ($(e).data(\'scale\') == \'logarithmic\') {\n                        options.yaxis = {logarithmic: true}\n                    }\n                    if ($(e).data(\'title\')) {\n                        options.title = {text: $(e).data(\'title\')}\n                    }\n                    let chart = new ApexCharts(e, options)\n                    chart.render()\n                    $(\'.spinner\', e).hide()\n                })\n        })\n    }\n\n    $(\'.chart\').append(\'<div class="spinner spinner-border"/>\')\n\n    $(\'*[data-title-for]\').each((i, e) => {\n        let id = $(e).data(\'title-for\');\n        $(e).text($(\'#\' + id).data(\'title\'))\n    })\n})\n<\/script>\n'},compiler:[8,">= 4.3.0"],main:function(t,e,r,a,o){var i;return null!=(i=t.invokePartial(n(26),e,{name:"layout",fn:t.program(1,o,0),inverse:t.noop,data:o,helpers:r,partials:a,decorators:t.decorators}))?i:""},usePartial:!0,useData:!0})},function(t,e,n){"use strict";n.r(e);var r=n(8),a=n.n(r),o=n(9),i=n.n(o);addEventListener("fetch",t=>{t.respondWith(async function(t){const e={headers:{"content-type":"text/html; charset=utf-8"}},n=new a.a;return n.get(".*/",()=>new Response(i()({}),e)),await n.route(t)}(t.request))})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}e.__esModule=!0;var o=a(n(3)),i=r(n(22)),s=r(n(1)),l=a(n(0)),c=a(n(23)),u=r(n(25));function d(){var t=new o.HandlebarsEnvironment;return l.extend(t,o),t.SafeString=i.default,t.Exception=s.default,t.Utils=l,t.escapeExpression=l.escapeExpression,t.VM=c,t.template=function(e){return c.template(e,t)},t}var f=d();f.create=d,u.default(f),f.default=f,e.default=f,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerHelper("blockHelperMissing",(function(e,n){var a=n.inverse,o=n.fn;if(!0===e)return o(this);if(!1===e||null==e)return a(this);if(r.isArray(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):a(this);if(n.data&&n.ids){var i=r.createFrame(n.data);i.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:i}}return o(e,n)}))},t.exports=e.default},function(t,e,n){"use strict";(function(r){e.__esModule=!0;var a,o=n(0),i=n(1),s=(a=i)&&a.__esModule?a:{default:a};e.default=function(t){t.registerHelper("each",(function(t,e){if(!e)throw new s.default("Must pass iterator to #each");var n,a=e.fn,i=e.inverse,l=0,c="",u=void 0,d=void 0;function f(e,n,r){u&&(u.key=e,u.index=n,u.first=0===n,u.last=!!r,d&&(u.contextPath=d+e)),c+=a(t[e],{data:u,blockParams:o.blockParams([t[e],e],[d+e,null])})}if(e.data&&e.ids&&(d=o.appendContextPath(e.data.contextPath,e.ids[0])+"."),o.isFunction(t)&&(t=t.call(this)),e.data&&(u=o.createFrame(e.data)),t&&"object"==typeof t)if(o.isArray(t))for(var p=t.length;l<p;l++)l in t&&f(l,l,l===t.length-1);else if(r.Symbol&&t[r.Symbol.iterator]){for(var h=[],v=t[r.Symbol.iterator](),m=v.next();!m.done;m=v.next())h.push(m.value);for(p=(t=h).length;l<p;l++)f(l,l,l===t.length-1)}else n=void 0,Object.keys(t).forEach((function(t){void 0!==n&&f(n,l-1),n=t,l++})),void 0!==n&&f(n,l-1,!0);return 0===l&&(c=i(this)),c}))},t.exports=e.default}).call(this,n(5))},function(t,e,n){"use strict";e.__esModule=!0;var r,a=n(1),o=(r=a)&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r,a=n(0),o=n(1),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("if",(function(t,e){if(2!=arguments.length)throw new i.default("#if requires exactly one argument");return a.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||a.isEmpty(t)?e.inverse(this):e.fn(this)})),t.registerHelper("unless",(function(e,n){if(2!=arguments.length)throw new i.default("#unless requires exactly one argument");return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",(function(){for(var e=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)e.push(arguments[r]);var a=1;null!=n.hash.level?a=n.hash.level:n.data&&null!=n.data.level&&(a=n.data.level),e[0]=a,t.log.apply(t,e)}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",(function(t,e,n){return t?n.lookupProperty(t,e):t}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r,a=n(0),o=n(1),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("with",(function(t,e){if(2!=arguments.length)throw new i.default("#with requires exactly one argument");a.isFunction(t)&&(t=t.call(this));var n=e.fn;if(a.isEmpty(t))return e.inverse(this);var r=e.data;return e.data&&e.ids&&((r=a.createFrame(e.data)).contextPath=a.appendContextPath(e.data.contextPath,e.ids[0])),n(t,{data:r,blockParams:a.blockParams([t],[r&&r.contextPath])})}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.registerDefaultDecorators=function(t){o.default(t)};var r,a=n(20),o=(r=a)&&r.__esModule?r:{default:r}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerDecorator("inline",(function(t,e,n,a){var o=t;return e.partials||(e.partials={},o=function(a,o){var i=n.partials;n.partials=r.extend({},i,e.partials);var s=t(a,o);return n.partials=i,s}),e.partials[a.args[0]]=a.fn,o}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.createNewLookupObject=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.extend.apply(void 0,[Object.create(null)].concat(e))};var r=n(0)},function(t,e,n){"use strict";function r(t){this.string=t}e.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},e.default=r,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,n=s.COMPILER_REVISION;if(e>=s.LAST_COMPATIBLE_COMPILER_REVISION&&e<=s.COMPILER_REVISION)return;if(e<s.LAST_COMPATIBLE_COMPILER_REVISION){var r=s.REVISION_CHANGES[n],a=s.REVISION_CHANGES[e];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+a+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")},e.template=function(t,e){if(!e)throw new i.default("No environment passed to template");if(!t||!t.main)throw new i.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var n=t.compiler&&7===t.compiler[0];var r={strict:function(t,e,n){if(!(t&&e in t))throw new i.default('"'+e+'" not defined in '+t,{loc:n});return t[e]},lookupProperty:function(t,e){var n=t[e];return null==n||Object.prototype.hasOwnProperty.call(t,e)||u.resultIsAllowed(n,r.protoAccessControl,e)?n:void 0},lookup:function(t,e){for(var n=t.length,a=0;a<n;a++){if(null!=(t[a]&&r.lookupProperty(t[a],e)))return t[a][e]}},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:a.escapeExpression,invokePartial:function(n,r,o){o.hash&&(r=a.extend({},r,o.hash),o.ids&&(o.ids[0]=!0)),n=e.VM.resolvePartial.call(this,n,r,o);var s=a.extend({},o,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),l=e.VM.invokePartial.call(this,n,r,s);if(null==l&&e.compile&&(o.partials[o.name]=e.compile(n,t.compilerOptions,e),l=o.partials[o.name](r,s)),null!=l){if(o.indent){for(var c=l.split("\n"),u=0,d=c.length;u<d&&(c[u]||u+1!==d);u++)c[u]=o.indent+c[u];l=c.join("\n")}return l}throw new i.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,r,a){var o=this.programs[t],i=this.fn(t);return e||a||r||n?o=d(this,t,i,e,n,r,a):o||(o=this.programs[t]=d(this,t,i)),o},data:function(t,e){for(;t&&e--;)t=t._parent;return t},mergeIfNeeded:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=a.extend({},e,t)),n},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function o(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=n.data;o._setup(n),!n.partial&&t.useData&&(a=p(e,a));var i=void 0,s=t.useBlockParams?[]:void 0;function l(e){return""+t.main(r,e,r.helpers,r.partials,a,s,i)}return t.useDepths&&(i=n.depths?e!=n.depths[0]?[e].concat(n.depths):n.depths:[e]),(l=h(t.main,l,r,n.depths||[],a,s))(e,n)}return o.isTop=!0,o._setup=function(o){if(o.partial)r.protoAccessControl=o.protoAccessControl,r.helpers=o.helpers,r.partials=o.partials,r.decorators=o.decorators,r.hooks=o.hooks;else{var i=a.extend({},e.helpers,o.helpers);!function(t,e){Object.keys(t).forEach((function(n){var r=t[n];t[n]=function(t,e){var n=e.lookupProperty;return c.wrapHelper(t,(function(t){return a.extend({lookupProperty:n},t)}))}(r,e)}))}(i,r),r.helpers=i,t.usePartial&&(r.partials=r.mergeIfNeeded(o.partials,e.partials)),(t.usePartial||t.useDecorators)&&(r.decorators=a.extend({},e.decorators,o.decorators)),r.hooks={},r.protoAccessControl=u.createProtoAccessControl(o);var s=o.allowCallsToHelperMissing||n;l.moveHelperToHooks(r,"helperMissing",s),l.moveHelperToHooks(r,"blockHelperMissing",s)}},o._child=function(e,n,a,o){if(t.useBlockParams&&!a)throw new i.default("must pass block params");if(t.useDepths&&!o)throw new i.default("must pass parent depths");return d(r,e,t[e],n,0,a,o)},o},e.wrapProgram=d,e.resolvePartial=function(t,e,n){t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return t},e.invokePartial=function(t,e,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var o=void 0;n.fn&&n.fn!==f&&function(){n.data=s.createFrame(n.data);var t=n.fn;o=n.data["partial-block"]=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=s.createFrame(n.data),n.data["partial-block"]=r,t(e,n)},t.partials&&(n.partials=a.extend({},n.partials,t.partials))}();void 0===t&&o&&(t=o);if(void 0===t)throw new i.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)},e.noop=f;var r,a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),o=n(1),i=(r=o)&&r.__esModule?r:{default:r},s=n(3),l=n(4),c=n(24),u=n(7);function d(t,e,n,r,a,o,i){function s(e){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=i;return!i||e==i[0]||e===t.nullContext&&null===i[0]||(s=[e].concat(i)),n(t,e,t.helpers,t.partials,a.data||r,o&&[a.blockParams].concat(o),s)}return(s=h(n,s,t,i,r,o)).program=e,s.depth=i?i.length:0,s.blockParams=a||0,s}function f(){return""}function p(t,e){return e&&"root"in e||((e=e?s.createFrame(e):{}).root=t),e}function h(t,e,n,r,o,i){if(t.decorator){var s={};e=t.decorator(e,s,n,r&&r[0],o,i,r),a.extend(e,s)}return e}},function(t,e,n){"use strict";e.__esModule=!0,e.wrapHelper=function(t,e){if("function"!=typeof t)return t;return function(){var n=arguments[arguments.length-1];return arguments[arguments.length-1]=e(n),t.apply(this,arguments)}}},function(t,e,n){"use strict";(function(n){e.__esModule=!0,e.default=function(t){var e=void 0!==n?n:window,r=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=r),t}},t.exports=e.default}).call(this,n(5))},function(t,e,n){var r=n(2);t.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,r,a){var o,i=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<!DOCTYPE html>\n<html>\n    <head>\n        <title>We\'re at WARS</title>\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta name="og:name" content="We\'re at WARS">\n        <meta name="og:type" content="website">\n        <meta name="og:url" content="https://lab.ring0.hk/wars/">\n        <meta name="og:description" content="Wuhan Virus, Chinese Virus, Coronavirus, COVID-19, SARS-CoV-2, 2019-nCoV, Pandemic">\n        <meta name="og:image" content="https://www.telegraph.co.uk/content/dam/news/2020/01/28/TELEMMGLPICT000222919873_trans_NvBQzQNjv4Bq6J6r0Dxf764MplSGmeYPZVTmGTZwRSZcqbDiPNar8DA.jpeg">\n        <meta name="theme-color" content="#e91e63">\n        <meta name="apple-mobile-web-app-capable" content="yes">\n        <meta name="apple-mobile-web-app-status-bar-style" content="black">\n        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">\n        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.14.1/css/mdb.min.css">\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"><\/script>\n    </head>\n    <body>\n'+(null!=(o=t.invokePartial(i(r,"@partial-block"),e,{name:"@partial-block",data:a,indent:"        ",helpers:n,partials:r,decorators:t.decorators}))?o:"")+'\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"><\/script>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.min.js"><\/script>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.14.1/js/mdb.min.js"><\/script>\n        <script src="https://cdn.jsdelivr.net/npm/apexcharts"><\/script>\n    </body>\n</html>\n'},usePartial:!0,useData:!0})}]);