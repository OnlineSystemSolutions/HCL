(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\development\hcl\src\main.ts */"zUnb");


/***/ }),

/***/ "4Kjx":
/*!*********************************************!*\
  !*** ./src/app/reducers/reducer.reducer.ts ***!
  \*********************************************/
/*! exports provided: reducerFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerFeatureKey", function() { return reducerFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_country_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/country.actions */ "kwsk");
/* harmony import */ var _actions_region_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/region.actions */ "oRti");



const reducerFeatureKey = 'reducer';
const initialState = {
    regions: ['asia', 'europe'],
    defaultRegion: 'asia',
    selectLocationResult: []
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_region_actions__WEBPACK_IMPORTED_MODULE_2__["loadRegionsSuccess"], (state) => (Object.assign(Object.assign({}, state), { selectLocationResult: state.selectLocationResult }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_country_actions__WEBPACK_IMPORTED_MODULE_1__["loadCountrysSuccess"], (state) => (Object.assign(Object.assign({}, state), { selectLocationResult: state.selectLocationResult }))));


/***/ }),

/***/ "67X7":
/*!*******************************************!*\
  !*** ./src/app/effects/europe.effects.ts ***!
  \*******************************************/
/*! exports provided: EuropeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EuropeEffects", function() { return EuropeEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_country_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/country.actions */ "kwsk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_europe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/europe.service */ "qoY5");






class EuropeEffects {
    constructor(actions$, europeService) {
        this.actions$ = actions$;
        this.europeService = europeService;
        this.asiaEffect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])('[Country] Load Countrys'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(() => this.europeService.getLocations()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => Object(_actions_country_actions__WEBPACK_IMPORTED_MODULE_2__["loadCountrysSuccess"])({ data: data }))))));
    }
}
EuropeEffects.??fac = function EuropeEffects_Factory(t) { return new (t || EuropeEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_service_europe_service__WEBPACK_IMPORTED_MODULE_4__["EuropeService"])); };
EuropeEffects.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: EuropeEffects, factory: EuropeEffects.??fac });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DLZx":
/*!*********************************************************!*\
  !*** ./src/app/presentation/region/region.component.ts ***!
  \*********************************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function RegionComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const regionName_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", regionName_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", regionName_r2, " ");
} }
function RegionComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const country_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", country_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", country_r3.name, " ");
} }
class RegionComponent {
    constructor(fb) {
        this.form = fb.group({
            'region': [null],
            'country': [null]
        });
    }
    ngOnInit() {
    }
}
RegionComponent.??fac = function RegionComponent_Factory(t) { return new (t || RegionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RegionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RegionComponent, selectors: [["app-region"]], inputs: { countries: "countries", regions: "regions", form: "form" }, outputs: { formEmitter: "formEmitter" }, decls: 10, vars: 4, consts: [["for", "region-select"], ["id", "region-select", 3, "formControl"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "country-select"], ["id", "country-select", 3, "formControl"], [3, "ngValue"]], template: function RegionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, RegionComponent_option_4_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, RegionComponent_option_9_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.form.controls.region);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.regions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.form.controls.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.countries);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _location_container_page_location_container_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-container-page/location-container-page.component */ "odKZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'hcl';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Hello HCL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-location-container-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_location_container_page_location_container_page_component__WEBPACK_IMPORTED_MODULE_1__["LocationContainerPageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Vx+w":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: serviceUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceUrl", function() { return serviceUrl; });
const serviceUrl = "https://restcountries.eu/rest/v2/";


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _service_europe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/europe.service */ "qoY5");
/* harmony import */ var _service_asia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/asia.service */ "hZF6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _presentation_region_region_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./presentation/region/region.component */ "DLZx");
/* harmony import */ var _presentation_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./presentation/country-details/country-details.component */ "wkEg");
/* harmony import */ var _effects_asia_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./effects/asia.effects */ "t68E");
/* harmony import */ var _location_container_page_location_container_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./location-container-page/location-container-page.component */ "odKZ");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _effects_europe_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./effects/europe.effects */ "67X7");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_reducer_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reducers/reducer.reducer */ "4Kjx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineInjector"]({ providers: [_service_europe_service__WEBPACK_IMPORTED_MODULE_4__["EuropeService"], _service_asia_service__WEBPACK_IMPORTED_MODULE_5__["AsiaService"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsRunner"]], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forRoot({ reducer: _reducers_reducer_reducer__WEBPACK_IMPORTED_MODULE_15__["reducer"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([_effects_asia_effects__WEBPACK_IMPORTED_MODULE_10__["AsiaEffects"], _effects_europe_effects__WEBPACK_IMPORTED_MODULE_13__["EuropeEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _presentation_region_region_component__WEBPACK_IMPORTED_MODULE_8__["RegionComponent"],
        _presentation_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_9__["CountryDetailsComponent"],
        _location_container_page_location_container_page_component__WEBPACK_IMPORTED_MODULE_11__["LocationContainerPageComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsRootModule"]] }); })();


/***/ }),

/***/ "chwS":
/*!********************************************!*\
  !*** ./src/app/model/forms/form-config.ts ***!
  \********************************************/
/*! exports provided: FormConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormConfig", function() { return FormConfig; });
class FormConfig {
}
FormConfig.locationFormConfig = () => {
    return {
        'region': [null],
        'country': [null]
    };
};


/***/ }),

/***/ "hZF6":
/*!*****************************************!*\
  !*** ./src/app/service/asia.service.ts ***!
  \*****************************************/
/*! exports provided: AsiaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsiaService", function() { return AsiaService; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AsiaService {
    constructor() { }
    getLocations() {
        // const header = this.getHeader();
        return this.httpClient.get(_config__WEBPACK_IMPORTED_MODULE_0__["serviceUrl"] + '/europe');
    }
}
AsiaService.??fac = function AsiaService_Factory(t) { return new (t || AsiaService)(); };
AsiaService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: AsiaService, factory: AsiaService.??fac });


/***/ }),

/***/ "kwsk":
/*!********************************************!*\
  !*** ./src/app/actions/country.actions.ts ***!
  \********************************************/
/*! exports provided: loadCountrys, loadCountrysSuccess, loadCountrysFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCountrys", function() { return loadCountrys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCountrysSuccess", function() { return loadCountrysSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCountrysFailure", function() { return loadCountrysFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadCountrys = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country] Load Countrys');
const loadCountrysSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country] Load Countrys Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCountrysFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Country] Load Countrys Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "oRti":
/*!*******************************************!*\
  !*** ./src/app/actions/region.actions.ts ***!
  \*******************************************/
/*! exports provided: loadRegions, loadRegionsSuccess, loadRegionsFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRegions", function() { return loadRegions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRegionsSuccess", function() { return loadRegionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRegionsFailure", function() { return loadRegionsFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadRegions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region] Load Regions');
const loadRegionsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region] Load Regions Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadRegionsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Region] Load Regions Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "odKZ":
/*!******************************************************************************!*\
  !*** ./src/app/location-container-page/location-container-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: LocationContainerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationContainerPageComponent", function() { return LocationContainerPageComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_country_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/country.actions */ "kwsk");
/* harmony import */ var _model_forms_form_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/forms/form-config */ "chwS");
/* harmony import */ var _selectors_location_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selectors/location.selectors */ "yoYb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _presentation_region_region_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../presentation/region/region.component */ "DLZx");
/* harmony import */ var _presentation_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../presentation/country-details/country-details.component */ "wkEg");









class LocationContainerPageComponent {
    constructor(store, fb) {
        this.store = store;
        this.region$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_selectors_location_selectors__WEBPACK_IMPORTED_MODULE_3__["getRegionsSelector"]));
        this.locationResult$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_selectors_location_selectors__WEBPACK_IMPORTED_MODULE_3__["getLocationResultSelector"]));
        this.form = fb.group(_model_forms_form_config__WEBPACK_IMPORTED_MODULE_2__["FormConfig"].locationFormConfig());
    }
    ngOnInit() {
        this.form.controls.region.valueChanges.subscribe((selectedValue) => {
            this.store.dispatch(Object(_actions_country_actions__WEBPACK_IMPORTED_MODULE_1__["loadCountrys"])());
        });
        this.form.controls.country.valueChanges.subscribe((selectedValue) => {
            this.country = selectedValue;
            this.store.dispatch(Object(_actions_country_actions__WEBPACK_IMPORTED_MODULE_1__["loadCountrys"])());
        });
    }
}
LocationContainerPageComponent.??fac = function LocationContainerPageComponent_Factory(t) { return new (t || LocationContainerPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"])); };
LocationContainerPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: LocationContainerPageComponent, selectors: [["app-location-container-page"]], decls: 5, vars: 4, consts: [[1, "flex"], [1, "region-item"], [3, "form", "countries", "regions"], [3, "countryDetail"]], template: function LocationContainerPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "app-region", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](4, "app-country-details", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("form", ctx.form)("countries", ctx.locationResult$)("regions", ctx.region$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("countryDetail", ctx.country);
    } }, directives: [_presentation_region_region_component__WEBPACK_IMPORTED_MODULE_6__["RegionComponent"], _presentation_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_7__["CountryDetailsComponent"]], styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.region-item[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvY2F0aW9uLWNvbnRhaW5lci1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoibG9jYXRpb24tY29udGFpbmVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJlZ2lvbi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbn0iXX0= */"] });


/***/ }),

/***/ "qoY5":
/*!*******************************************!*\
  !*** ./src/app/service/europe.service.ts ***!
  \*******************************************/
/*! exports provided: EuropeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EuropeService", function() { return EuropeService; });
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config */ "Vx+w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class EuropeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getLocations() {
        // const header = this.getHeader();
        return this.httpClient.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__["serviceUrl"] + '/europe');
    }
}
EuropeService.??fac = function EuropeService_Factory(t) { return new (t || EuropeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EuropeService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: EuropeService, factory: EuropeService.??fac });


/***/ }),

/***/ "t68E":
/*!*****************************************!*\
  !*** ./src/app/effects/asia.effects.ts ***!
  \*****************************************/
/*! exports provided: AsiaEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsiaEffects", function() { return AsiaEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _actions_country_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/country.actions */ "kwsk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_asia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/asia.service */ "hZF6");






class AsiaEffects {
    constructor(actions$, asiaService) {
        this.actions$ = actions$;
        this.asiaService = asiaService;
        this.asiaEffect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])('[Country] Load Countrys'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => this.asiaService.getLocations()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => Object(_actions_country_actions__WEBPACK_IMPORTED_MODULE_1__["loadCountrysSuccess"])({ data: data }))))));
    }
}
AsiaEffects.??fac = function AsiaEffects_Factory(t) { return new (t || AsiaEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_service_asia_service__WEBPACK_IMPORTED_MODULE_4__["AsiaService"])); };
AsiaEffects.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: AsiaEffects, factory: AsiaEffects.??fac });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wkEg":
/*!***************************************************************************!*\
  !*** ./src/app/presentation/country-details/country-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: CountryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDetailsComponent", function() { return CountryDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CountryDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CountryDetailsComponent.??fac = function CountryDetailsComponent_Factory(t) { return new (t || CountryDetailsComponent)(); };
CountryDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CountryDetailsComponent, selectors: [["app-country-details"]], inputs: { countryDetail: "countryDetail" }, decls: 23, vars: 5, template: function CountryDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Capital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Population");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Currencies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.countryDetail.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.countryDetail.captial, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.countryDetail.population, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.countryDetail.currencies, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.countryDetail.flag, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudHJ5LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "yoYb":
/*!*************************************************!*\
  !*** ./src/app/selectors/location.selectors.ts ***!
  \*************************************************/
/*! exports provided: currentStateSelector, getLocationResultSelector, getRegionsSelector, getCurrentRegionSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentStateSelector", function() { return currentStateSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationResultSelector", function() { return getLocationResultSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegionsSelector", function() { return getRegionsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentRegionSelector", function() { return getCurrentRegionSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const currentStateSelector = (state) => state;
const getLocationResultSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(currentStateSelector, (state) => state.selectLocationResult);
const getRegionsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(currentStateSelector, (state) => state.regions);
const getCurrentRegionSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(currentStateSelector, (state) => state.defaultRegion);


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map