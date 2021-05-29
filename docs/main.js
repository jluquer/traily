(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/luque/Documents/traily/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "0HKr":
/*!*****************************************************!*\
  !*** ./src/app/components/chart/chart.component.ts ***!
  \*****************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ "LPYB");


class ChartComponent {
    constructor() {
        this.elevationGain = 0;
        this.distance = 0;
        this.label = 'Performance | x: distance (km) | y: height (m)';
        this.lineChartData = [
            { data: this.generateElevation, label: this.label },
        ];
        this.lineChartLabels = this.generateDistance;
        this.lineChartOptions = {
            responsive: true,
        };
        this.lineChartColors = [
            {
                borderColor: '#474c3f',
                backgroundColor: '#95cd43',
            },
        ];
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
    }
    ngOnChanges(changes) {
        console.log(changes);
        this.distance = changes.distance.currentValue;
        this.elevationGain = changes.elevationGain.currentValue;
        this.lineChartLabels = this.generateDistance;
        this.lineChartData = [
            { data: this.generateElevation, label: this.label },
        ];
    }
    get generateDistance() {
        let labels = [];
        const sum = this.distance / 10;
        for (let i = 0; i < 10; i++) {
            labels.push((sum * (i + 1)));
        }
        return labels;
    }
    get generateElevation() {
        let dataSet = [];
        while (dataSet.length < 10) {
            dataSet.push(Math.floor(Math.random() * this.elevationGain) + 1);
        }
        dataSet[Math.random() * 10] = this.elevationGain;
        return dataSet;
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], inputs: { elevationGain: "elevationGain", distance: "distance" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 7, consts: [[1, "chartjs-block"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]], styles: ["canvas[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRiIsImZpbGUiOiJjaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59Il19 */"] });


/***/ }),

/***/ "1jS7":
/*!*********************************************************************!*\
  !*** ./src/app/components/file-uploader/file-uploader.component.ts ***!
  \*********************************************************************/
/*! exports provided: FileUploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploaderComponent", function() { return FileUploaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_trails_trail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/trails/trail.service */ "qjQH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["dragArea"];
function FileUploaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Uploading file...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FileUploaderComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUploaderComponent_ng_container_13_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.resetStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.filepath);
} }
function FileUploaderComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "File could not be uploaded!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUploaderComponent_ng_container_14_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.resetStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Try again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class FileUploaderComponent {
    constructor(trailService) {
        this.trailService = trailService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host;
        this.filePathEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngAfterViewInit() {
        this.handleDragArea();
    }
    handleDragArea() {
        var _a;
        try {
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
                var _a;
                (_a = this.dragArea) === null || _a === void 0 ? void 0 : _a.nativeElement.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                });
            });
            (_a = this.dragArea) === null || _a === void 0 ? void 0 : _a.nativeElement.addEventListener('drop', (e) => {
                var _a;
                this.handleFiles((_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.files);
            });
        }
        catch (err) { }
    }
    handleInput(e) {
        this.handleFiles(e.target.files);
    }
    handleFiles(files) {
        try {
            if (!files)
                throw new Error('No files found');
            if ((files === null || files === void 0 ? void 0 : files.length) > 1)
                throw new Error("Only one file");
            const file = files[0];
            if (file.type !== 'application/gpx+xml') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Oops...',
                    text: 'File must be GPX!',
                    icon: 'error',
                });
                throw new Error('Invalid format');
            }
            this.uploadFile(file);
        }
        catch (err) {
            this.status = 'failed';
        }
    }
    uploadFile(file) {
        this.status = 'uploading';
        this.trailService.uploadFile(file).subscribe((res) => {
            this.status = "success";
            const filePath = `${res.filepath}`;
            this.filePathEvent.emit(filePath);
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Oops',
                text: 'Trail file could not be uploaded. Try again!',
            });
        });
    }
    resetStatus() {
        this.status = undefined;
        this.filePathEvent.emit("");
    }
}
FileUploaderComponent.ɵfac = function FileUploaderComponent_Factory(t) { return new (t || FileUploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trails_trail_service__WEBPACK_IMPORTED_MODULE_3__["TrailService"])); };
FileUploaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileUploaderComponent, selectors: [["app-file-uploader"]], viewQuery: function FileUploaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dragArea = _t.first);
    } }, inputs: { filepath: "filepath" }, outputs: { filePathEvent: "filePathEvent" }, decls: 15, vars: 5, consts: [["id", "fileUploader"], ["id", "drag"], ["dragArea", ""], ["type", "file", "name", "file", "accept", "application/gpx+xml", 3, "change"], ["fileInput", ""], ["src", "assets/images/image.svg", "alt", "default image"], ["id", "or"], ["for", "file", 1, "btn", "btn-primary", 3, "click"], ["id", "uploading", 4, "ngIf"], [4, "ngIf"], ["id", "uploading"], ["id", "loading-bar"], [1, "complete"], [1, "alert", "alert-success"], [1, "btn", "btn-primary", 3, "click"], [1, "alert", "alert-danger"]], template: function FileUploaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploaderComponent_Template_input_change_3_listener($event) { return ctx.handleInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Drag & Drop your GPX file here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUploaderComponent_Template_label_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Choose a file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FileUploaderComponent_div_12_Template, 5, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FileUploaderComponent_ng_container_13_Template, 6, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FileUploaderComponent_ng_container_14_Template, 6, 0, "ng-container", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", !ctx.status && !ctx.filepath ? "flex" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == "uploading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == "success" || ctx.filepath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == "failed");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["#fileUploader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex-direction: column;\n}\n#fileUploader[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n#fileUploader[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #fileUploader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  letter-spacing: -0.035em;\n  color: #adb5bd;\n  font-size: 18px;\n}\n#fileUploader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n#fileUploader[_ngcontent-%COMP%]   #drag[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px dashed #5878cc;\n  border-radius: 4px;\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex-direction: column;\n}\n#fileUploader[_ngcontent-%COMP%]   #drag[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1.5em;\n}\n#uploading[_ngcontent-%COMP%], #fileUploader[_ngcontent-%COMP%], .complete[_ngcontent-%COMP%] {\n  padding: 44px 32px;\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  margin-top: 1rem !important;\n  margin-bottom: 2rem !important;\n}\n#uploading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex-direction: column;\n}\n#uploading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-bottom: 1.5em;\n}\n#uploading[_ngcontent-%COMP%]   #loading-bar[_ngcontent-%COMP%] {\n  max-width: 340.71px;\n  width: 100%;\n  height: 6px;\n  overflow: hidden;\n  background-color: #dee2e6;\n}\n#uploading[_ngcontent-%COMP%]   #loading-bar[_ngcontent-%COMP%], #uploading[_ngcontent-%COMP%]   #loading-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n#uploading[_ngcontent-%COMP%]   #loading-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 101px;\n  height: 100%;\n  background-color: #95cd43;\n  position: relative;\n  animation: moveHorizontally 4s infinite;\n}\n.complete[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex-direction: column;\n}\n.complete[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.complete[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n@media (min-width: 768px) {\n  #fileUploader[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  #fileUploader[_ngcontent-%COMP%]   #drag[_ngcontent-%COMP%], #fileUploader[_ngcontent-%COMP%]   #or[_ngcontent-%COMP%] {\n    margin-right: 1.5em;\n  }\n\n  #uploading[_ngcontent-%COMP%], #fileUploader[_ngcontent-%COMP%], .complete[_ngcontent-%COMP%] {\n    max-width: 80%;\n    margin: 0 auto;\n  }\n}\n@keyframes moveHorizontally {\n  from {\n    left: -10%;\n  }\n  50% {\n    left: 80%;\n  }\n  to {\n    left: -10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9taXhpbnMvX3V0aWxpdGllcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvbWl4aW5zL19mb3Jtcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDRkUsYUFBQTtFQUNBLHVCQUY0QjtFQUc1QixtQkFIa0Q7RUFJbEQsbUJBSnNFO0VES3RFLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7QUFDSjtBQUNFOztFQUVFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjRVRPO0VGVVAsZUFBQTtBQUNKO0FBQ0U7RUFDRSxTQUFBO0FBQ0o7QUFFRTtFQUNFLG1CRXJCTztFRnNCUCwwQkFBQTtFQUNBLGtCRWdDWTtFRi9CWixhQUFBO0VDeEJGLGFBQUE7RUFDQSx1QkFGNEI7RUFHNUIsbUJBSGtEO0VBSWxELG1CQUpzRTtFRDJCcEUsc0JBQUE7QUFHSjtBQUZJO0VBQ0UsaUJBQUE7QUFJTjtBQUNBOzs7RUFHRSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBRUY7QUFDQTtFQzNDRSxhQUFBO0VBQ0EsdUJBRjRCO0VBRzVCLG1CQUhrRDtFQUlsRCxtQkFKc0U7RUQ4Q3RFLHNCQUFBO0FBS0Y7QUFKRTtFQUNFLHFCQUFBO0FBTUo7QUFIRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCRXJETztBRjBEWDtBQUpJOztFQUVFLGtCQUFBO0FBTU47QUFKSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJFOUNJO0VGK0NKLGtCQUFBO0VBQ0EsdUNBQUE7QUFNTjtBQURBO0VDdEVFLGFBQUE7RUFDQSx1QkFGNEI7RUFHNUIsbUJBSGtEO0VBSWxELG1CQUpzRTtFRHlFdEUsc0JBQUE7QUFPRjtBQU5FO0VBQ0UsU0FBQTtBQVFKO0FBTkU7RUFDRSxnQkFBQTtBQVFKO0FHcEZFO0VIaUZBO0lBQ0UsbUJBQUE7RUFPRjtFQU5FOztJQUVFLG1CQUFBO0VBUUo7O0VBSkE7OztJQUdFLGNBQUE7SUFDQSxjQUFBO0VBT0Y7QUFDRjtBQUpBO0VBQ0U7SUFDRSxVQUFBO0VBTUY7RUFKQTtJQUNFLFNBQUE7RUFNRjtFQUpBO0lBQ0UsVUFBQTtFQU1GO0FBQ0YiLCJmaWxlIjoiZmlsZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL21peGluc1wiO1xuXG4jZmlsZVVwbG9hZGVyIHtcbiAgQGluY2x1ZGUgZmxleCgpO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGgzLFxuICBwIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMzVlbTtcbiAgICBjb2xvcjogJGdyYXktNTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAjZHJhZyB7XG4gICAgYmFja2dyb3VuZDogJGdyYXktMTAwO1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAkYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIEBpbmNsdWRlIGZsZXgoKTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHAge1xuICAgICAgbWFyZ2luLXRvcDogMS41ZW07XG4gICAgfVxuICB9XG59XG5cbiN1cGxvYWRpbmcsXG4jZmlsZVVwbG9hZGVyLFxuLmNvbXBsZXRlIHtcbiAgcGFkZGluZzogNDRweCAzMnB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDJyZW0gIWltcG9ydGFudDtcbn1cblxuI3VwbG9hZGluZyB7XG4gIEBpbmNsdWRlIGZsZXgoKTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICB9XG5cbiAgI2xvYWRpbmctYmFyIHtcbiAgICBtYXgtd2lkdGg6IDM0MC43MXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktMzAwO1xuICAgICYsXG4gICAgZGl2IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG4gICAgZGl2IHtcbiAgICAgIHdpZHRoOiAxMDFweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi0yO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYW5pbWF0aW9uOiBtb3ZlSG9yaXpvbnRhbGx5IDRzIGluZmluaXRlO1xuICAgIH1cbiAgfVxufVxuXG4uY29tcGxldGUge1xuICBAaW5jbHVkZSBmbGV4KCk7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBidXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cbn1cblxuQGluY2x1ZGUgbWVkaWEoXCJtZFwiKSB7XG4gICNmaWxlVXBsb2FkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgI2RyYWcsXG4gICAgI29yIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMS41ZW07XG4gICAgfVxuICB9XG5cbiAgI3VwbG9hZGluZyxcbiAgI2ZpbGVVcGxvYWRlcixcbiAgLmNvbXBsZXRlIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmVIb3Jpem9udGFsbHkge1xuICBmcm9tIHtcbiAgICBsZWZ0OiAtMTAlO1xuICB9XG4gIDUwJSB7XG4gICAgbGVmdDogODAlO1xuICB9XG4gIHRvIHtcbiAgICBsZWZ0OiAtMTAlO1xuICB9XG59XG4iLCJAbWl4aW4gZmxleCgkanVzdGlmeS1jb250ZW50OiBjZW50ZXIsICRhbGlnbi1pdGVtczogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cbiIsIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuJGJsdWU6ICM1ODc4Y2MgIWRlZmF1bHQ7XG4kcmVkOiAjY2M0YzJmICFkZWZhdWx0O1xuJG9yYW5nZTogI2NjN2YzOSAhZGVmYXVsdDtcbiR5ZWxsb3c6ICNkOWNiM2QgIWRlZmF1bHQ7XG4kY3lhbjogIzU4YjVjYyAhZGVmYXVsdDtcbiRncmVlbi0xOiAjZDFlNmIyICFkZWZhdWx0O1xuJGdyZWVuLTI6ICM5NWNkNDMgIWRlZmF1bHQ7XG4kZ3JlZW4tMzogIzg3YjU0MyAhZGVmYXVsdDtcbiRncmVlbi00OiAjNzg5ZDQyICFkZWZhdWx0O1xuJGdyZWVuLTU6ICM1YjZkNDAgIWRlZmF1bHQ7XG4kZ3JlZW4tNjogIzQ3NGMzZiAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICRncmVlbi0zICFkZWZhdWx0O1xuJGluZm86ICRjeWFuICFkZWZhdWx0O1xuJHdhcm5pbmc6ICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogJGdyYXktOTAwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0aGVtZS1jb2xvci12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRoZW1lLWNvbG9ycy1tYXBcbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsXG4gIFwiaW5mb1wiOiAkaW5mbyxcbiAgXCJ3YXJuaW5nXCI6ICR3YXJuaW5nLFxuICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICBcImxpZ2h0XCI6ICRsaWdodCxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcImdyZWVuXCI6ICRncmVlbi00XG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHM6IChcbiAgeHM6IDMzMHB4LFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0MDBweCxcbikgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiA0cHg7XG4kY2FyZC1yYWRpdXM6IDAuNXJlbTtcbiRmb290ZXItaDogMjUwcHg7XG4kYW5pbWF0aW9uQm9yZGVyQ29sb3I6ICRncmVlbi01OyIsIkB1c2UgXCJzYXNzOm1hcFwiO1xuQG1peGluIG1lZGlhKCRicmVha3BvaW50KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAuZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "6t8a":
/*!**************************************************!*\
  !*** ./src/app/pages/trails/trails.component.ts ***!
  \**************************************************/
/*! exports provided: TrailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailsComponent", function() { return TrailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_trails_trail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/trails/trail.service */ "qjQH");
/* harmony import */ var _components_trail_list_trail_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/trail-list/trail-list.component */ "Y0KP");



class TrailsComponent {
    constructor(trailService) {
        this.trailService = trailService;
        this.trails = [];
    }
    ngOnInit() {
        this.getTrails();
    }
    getTrails() {
        this.trailService.getAllTrails().subscribe((trails) => (this.trails = trails), () => { });
    }
}
TrailsComponent.ɵfac = function TrailsComponent_Factory(t) { return new (t || TrailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trails_trail_service__WEBPACK_IMPORTED_MODULE_1__["TrailService"])); };
TrailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrailsComponent, selectors: [["app-trails"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "page-title"], [3, "trails"]], template: function TrailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Trails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-trail-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("trails", ctx.trails);
    } }, directives: [_components_trail_list_trail_list_component__WEBPACK_IMPORTED_MODULE_2__["TrailListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "8Smb":
/*!*******************************************************!*\
  !*** ./src/app/interceptors/user/user.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: UserInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterceptor", function() { return UserInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");




class UserInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        if (this.requiresAuthorization(req.url)) {
            req = req.clone({
                setHeaders: {
                    authorization: `Bearer ${authToken}`,
                },
            });
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
        }));
    }
    requiresAuthorization(url) {
        const unrestrictedUrls = ['user/create', 'auth/login'];
        for (let i = 0; i < unrestrictedUrls.length; i++) {
            if (url.includes(unrestrictedUrls[i]))
                return false;
        }
        return true;
    }
}
UserInterceptor.ɵfac = function UserInterceptor_Factory(t) { return new (t || UserInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
UserInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserInterceptor, factory: UserInterceptor.ɵfac });


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.authUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].host + 'auth/';
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        this.isLogged$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.isLogged$.next(this.isLogged);
    }
    login(email, password) {
        return this.http.post(this.authUrl + 'login', { email, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            this.setToken(data.token);
            this.router.navigateByUrl('dashboard');
            this.isLogged$.next(true);
        }));
    }
    logout() {
        localStorage.removeItem('token');
        this.isLogged$.next(false);
        this.router.navigateByUrl('login');
    }
    get isLogged() {
        const userToken = this.getToken();
        if (!userToken)
            return false;
        const isExpired = this.helper.isTokenExpired(userToken);
        if (isExpired)
            this.logout();
        return !isExpired;
    }
    getLoggedUserId() {
        var _a;
        const token = (_a = this.getToken()) !== null && _a !== void 0 ? _a : undefined;
        const decodedToken = this.helper.decodeToken(token);
        if (!decodedToken)
            return undefined;
        return decodedToken.userId;
    }
    setToken(token) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    ngOnDestroy() {
        this.isLogged$.unsubscribe();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Ag98":
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _components_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/user-search/user-search.component */ "hGRI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







function UsersComponent_ng_container_4_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function UsersComponent_ng_container_4_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_ng_container_4_div_1_ng_template_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.unfollow(user_r2.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "unfollow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersComponent_ng_container_4_div_1_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_ng_container_4_div_1_ng_template_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.follow(user_r2.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "follow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/profile", a1]; };
function UsersComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UsersComponent_ng_container_4_div_1_ng_container_5_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UsersComponent_ng_container_4_div_1_ng_template_6_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UsersComponent_ng_container_4_div_1_ng_template_8_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, user_r2.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isFollowing(user_r2.userId))("ngIfThen", _r4)("ngIfElse", _r6);
} }
function UsersComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UsersComponent_ng_container_4_div_1_Template, 10, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.users);
} }
class UsersComponent {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
        this.following = [];
    }
    ngOnInit() {
        this.loggedUserId = this.authService.getLoggedUserId();
        this.getUsers();
        this.getFollowing();
    }
    getUsers() {
        this.userService
            .getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((users) => users.filter((user) => user.userId !== this.loggedUserId)))
            .subscribe((users) => (this.users = users), (_) => this.users = undefined);
    }
    getFollowing() {
        this.userService.getFollowing().subscribe((users) => (this.following = users), (err) => console.log(err));
    }
    isFollowing(userId) {
        if (!userId)
            return false;
        return this.following.filter((user) => user.userId === userId).length > 0;
    }
    follow(userId) {
        if (userId)
            this.userService.follow(userId).subscribe((_) => this.getFollowing());
    }
    unfollow(userId) {
        if (userId)
            this.userService.unfollow(userId).subscribe((_) => this.getFollowing());
    }
    search(data) {
        if (!data || data === [])
            return this.getUsers();
        this.users = data;
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 5, vars: 1, consts: [[1, "container"], [1, "page-title"], [3, "searchEvent"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "card"], [1, "card-header"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["unfollowBtn", ""], ["followBtn", ""], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-user-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("searchEvent", function UsersComponent_Template_app_user_search_searchEvent_3_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UsersComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.users);
    } }, directives: [_components_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_4__["UserSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-bottom: 6rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin-bottom: 1rem !important;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0FBREY7O0FBRUU7RUFJRSxvQ0FBQTtBQUhKOztBQUFJO0VBQ0UsU0FBQTtBQUVOIiwiZmlsZSI6InVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9fdmFyaWFibGVzXCI7XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIC5jYXJkLWhlYWRlciB7XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTEwMCAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "Am1z":
/*!**************************************************!*\
  !*** ./src/app/services/alerts/alert.service.ts ***!
  \**************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AlertService {
    constructor() { }
    error(text = 'Sorry, something went wrong.', title = 'Oops') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            icon: 'error',
            title: title,
            text: text,
        }));
    }
    success(text = '', title = 'Success!') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            icon: 'success',
            title: title,
            text: text,
        }));
    }
    custom(config) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(config));
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


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
    production: false,
    host: "http://localhost:3000/api/"
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

/***/ "CFL1":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserService {
    constructor(http) {
        this.http = http;
        this.userUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].host + 'user/';
    }
    createUser(user) {
        return this.http.post(this.userUrl + 'create', user);
    }
    /**
     * Get all users from database
     *
     * @returns {Observable<any>}
     */
    getAll() {
        return this.http.get(this.userUrl + 'getAll');
    }
    getOneById(userId) {
        return this.http.get(this.userUrl + this.getOneById.name, {
            headers: {
                id: '' + userId,
            },
        });
    }
    getFollowing() {
        return this.http.get(this.userUrl + 'getFollowing');
    }
    getFollowers() {
        return this.http.get(this.userUrl + 'getFollowers');
    }
    /**
     * Follow a user
     *
     * @param userId {number} User id you are going to follow
     * @returns {Observable<any>}
     */
    follow(userId) {
        return this.http.post(this.userUrl + 'follow', {}, {
            headers: {
                id: String(userId),
            },
        });
    }
    /**
     * Unfollow a user
     *
     * @param userId {number} User id you are going to unfollow
     * @returns {Observable<any>}
     */
    unfollow(userId) {
        return this.http.delete(this.userUrl + 'unfollow', {
            headers: {
                id: String(userId),
            },
        });
    }
    /**
     * Search users by their name
     *
     * @param name {string}
     * @returns {Observable<any>}
     */
    search(name) {
        return this.http.get(this.userUrl + 'search', {
            headers: {
                name,
            },
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function LoginComponent_div_8_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_8_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_8_small_1_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_8_small_2_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.email.errors == null ? null : ctx_r1.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.email.errors == null ? null : ctx_r1.email.errors.pattern);
} }
function LoginComponent_div_11_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_11_small_1_Template, 2, 0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.password.errors == null ? null : ctx_r2.password.errors.required);
} }
const _c0 = function () { return ["/signup"]; };
class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
        this.displayError = { email: false, password: false };
    }
    ngOnInit() { }
    onSubmit() {
        this.displayErrors();
        if (this.email &&
            this.email.valid &&
            this.password &&
            this.password.valid) {
            this.authService.login(this.email.value, this.password.value).subscribe((_data) => { }, (_err) => {
                this.displayErrors(false);
            });
        }
    }
    get email() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }
    displayErrors(display = true) {
        Object.keys(this.displayError).map((key) => (this.displayError[key] = display));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 5, consts: [["src", "../../../assets/video/forest.mp4", "type", "video/mp4", "loop", "", 3, "canplay", "loadedmetadata"], ["video", ""], [1, "container-full"], [1, "form", "form-login", 3, "formGroup", "ngSubmit"], [1, "form-control"], ["name", "email", "type", "email", "formControlName", "email", "placeholder", "Email"], [4, "ngIf"], ["name", "password", "type", "password", "formControlName", "password", "placeholder", "Password"], [1, "align-center"], ["type", "submit", 1, "btn", "btn-success", "btn-login"], [3, "routerLink"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "video", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("canplay", function LoginComponent_Template_video_canplay_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r0.play(); })("loadedmetadata", function LoginComponent_Template_video_loadedmetadata_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r0.muted = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "User Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Create your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email && (ctx.email.invalid || ctx.email.dirty) && ctx.displayError.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.password && (ctx.password.invalid || ctx.password.dirty) && ctx.displayError.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["video[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: -1;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidmlkZW8ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IC0xO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ "G9k0":
/*!**************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_trails_trail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/trails/trail.service */ "qjQH");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_trail_list_trail_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/trail-list/trail-list.component */ "Y0KP");






function UserProfileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.followers && ctx_r0.followers.length, " Followers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.following && ctx_r0.following.length, " Following");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.user.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.user.email, " ");
} }
function UserProfileComponent_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-trail-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("trailDeleted", function UserProfileComponent_6_ng_template_0_Template_app_trail_list_trailDeleted_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.getTrails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("trails", ctx_r4.trails);
} }
function UserProfileComponent_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserProfileComponent_6_ng_template_0_Template, 1, 1, "ng-template");
} }
function UserProfileComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upload a trail!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserProfileComponent {
    constructor(trailService, userService, activeRoute) {
        this.trailService = trailService;
        this.userService = userService;
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
        var _a;
        this.userId = this.activeRoute.snapshot.params.userId;
        this.userService.getFollowing().subscribe((following) => {
            this.following = following;
        });
        this.userService.getFollowers().subscribe((followers) => {
            this.followers = followers;
        });
        this.userService.getOneById((_a = this.userId) !== null && _a !== void 0 ? _a : 0).subscribe((user) => (this.user = user), () => { });
        this.getTrails();
    }
    getTrails() {
        this.trailService.getAllByUserId(this.userId).subscribe((trails) => (this.trails = trails), () => { });
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trails_trail_service__WEBPACK_IMPORTED_MODULE_1__["TrailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 9, vars: 3, consts: [[1, "container"], [1, "page-title"], ["id", "user-profile", "class", "card", 4, "ngIf"], [1, "text-center", "subtitle"], [4, "ngIf", "ngIfElse"], ["upload", ""], ["id", "user-profile", 1, "card"], [1, "card-header", "bg-blue"], [1, "m-0"], [1, "card-body", "grid", "text-center"], [1, "col"], [1, "col-title"], [3, "trails", "trailDeleted"], [1, "text-center"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserProfileComponent_div_3_Template, 17, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Trails uploaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserProfileComponent_6_Template, 1, 0, undefined, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserProfileComponent_ng_template_7_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trails && ctx.trails.length > 0)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_trail_list_trail_list_component__WEBPACK_IMPORTED_MODULE_5__["TrailListComponent"]], styles: ["#user-profile[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n#user-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  word-break: break-all;\n}\n@media (max-width: 320px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG9CQUFBO0FBQUo7QUFHRTtFQUNFLHFCQUFBO0FBREo7QUFLQTtFQUNFO0lBQ0UsMEJBQUE7RUFGRjtBQUNGIiwiZmlsZSI6InVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN1c2VyLXByb2ZpbGUge1xuICAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIHA6bnRoLWNoaWxkKDIpIHtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "H3jT":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/trails"]; };
const _c1 = function () { return ["active"]; };
const _c2 = function () { return ["/users"]; };
const _c3 = function () { return ["/trail/create"]; };
function FooterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A9 Javier Luque Rodr\u00EDguez");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Trails");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create Trail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
} }
class FooterComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLogged = null;
    }
    ngOnInit() {
        this.authService.isLogged$.subscribe((logged) => (this.isLogged = logged));
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "footer-links"], [1, "nav-link", 3, "routerLink", "routerLinkActive"], [3, "routerLink", "routerLinkActive"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_ng_container_0_Template, 11, 12, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["footer[_ngcontent-%COMP%] {\n  min-height: 250px;\n  color: #fff;\n  background-color: #212529;\n  padding: 4rem 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex-direction: column;\n}\nfooter[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: color 500ms;\n  color: #d1e6b2;\n}\nfooter[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #95cd43;\n}\nfooter[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL21peGlucy9fdXRpbGl0aWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkN1RFM7RUR0RFQsV0NKTTtFREtOLHlCQ0lTO0VESFQsZUFBQTtFRUxBLGFBQUE7RUFDQSw2QkZNYztFRUxkLG1CQUhrRDtFQUlsRCxtQkFKc0U7RUZTdEUsZUFBQTtFQUNBLFNBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtBQUNKO0FBRUU7RUVmQSxhQUFBO0VBQ0EsdUJBRjRCO0VBRzVCLG1CQUhrRDtFQUlsRCxtQkFKc0U7RUZrQnBFLHNCQUFBO0FBR0o7QUFGSTtFQUNFLHVCQUFBO0VBQ0EsY0NKSTtBRFFWO0FBSE07RUFDRSxjQ0xFO0FEVVY7QUFGSTtFQUNFLHFCQUFBO0FBSU4iLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXNcIiwgXCJzcmMvYXNzZXRzL3Njc3MvbWl4aW5zXCI7XG5cbmZvb3RlciB7XG4gIG1pbi1oZWlnaHQ6ICRmb290ZXItaDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XG4gIHBhZGRpbmc6IDRyZW0gMDtcblxuICBAaW5jbHVkZSBmbGV4KHNwYWNlLWFyb3VuZCk7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAycmVtO1xuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5mb290ZXItbGlua3Mge1xuICAgIEBpbmNsdWRlIGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhIHtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDUwMG1zO1xuICAgICAgY29sb3I6ICRncmVlbi0xO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkZ3JlZW4tMjtcbiAgICAgIH1cbiAgICB9XG4gICAgYTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICB9XG4gIH1cbn1cbiIsIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuJGJsdWU6ICM1ODc4Y2MgIWRlZmF1bHQ7XG4kcmVkOiAjY2M0YzJmICFkZWZhdWx0O1xuJG9yYW5nZTogI2NjN2YzOSAhZGVmYXVsdDtcbiR5ZWxsb3c6ICNkOWNiM2QgIWRlZmF1bHQ7XG4kY3lhbjogIzU4YjVjYyAhZGVmYXVsdDtcbiRncmVlbi0xOiAjZDFlNmIyICFkZWZhdWx0O1xuJGdyZWVuLTI6ICM5NWNkNDMgIWRlZmF1bHQ7XG4kZ3JlZW4tMzogIzg3YjU0MyAhZGVmYXVsdDtcbiRncmVlbi00OiAjNzg5ZDQyICFkZWZhdWx0O1xuJGdyZWVuLTU6ICM1YjZkNDAgIWRlZmF1bHQ7XG4kZ3JlZW4tNjogIzQ3NGMzZiAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICRncmVlbi0zICFkZWZhdWx0O1xuJGluZm86ICRjeWFuICFkZWZhdWx0O1xuJHdhcm5pbmc6ICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogJGdyYXktOTAwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0aGVtZS1jb2xvci12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRoZW1lLWNvbG9ycy1tYXBcbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsXG4gIFwiaW5mb1wiOiAkaW5mbyxcbiAgXCJ3YXJuaW5nXCI6ICR3YXJuaW5nLFxuICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICBcImxpZ2h0XCI6ICRsaWdodCxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcImdyZWVuXCI6ICRncmVlbi00XG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHM6IChcbiAgeHM6IDMzMHB4LFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0MDBweCxcbikgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiA0cHg7XG4kY2FyZC1yYWRpdXM6IDAuNXJlbTtcbiRmb290ZXItaDogMjUwcHg7XG4kYW5pbWF0aW9uQm9yZGVyQ29sb3I6ICRncmVlbi01OyIsIkBtaXhpbiBmbGV4KCRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciwgJGFsaWduLWl0ZW1zOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuIl19 */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

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
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/header/header.component */ "gK8K");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "H3jT");




class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */"] });


/***/ }),

/***/ "U5Cf":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_trails_trail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/trails/trail.service */ "qjQH");
/* harmony import */ var _components_trail_list_trail_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/trail-list/trail-list.component */ "Y0KP");



class DashboardComponent {
    constructor(trailService) {
        this.trailService = trailService;
        this.trails = [];
    }
    ngOnInit() {
        this.getTrails();
    }
    getTrails() {
        this.trailService.getDashboardTrails().subscribe((trails) => (this.trails = trails), () => { });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trails_trail_service__WEBPACK_IMPORTED_MODULE_1__["TrailService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 21, vars: 1, consts: [[1, "container", "pb-footer"], [1, "page-title"], [1, "subtitle"], ["src", "https://open.spotify.com/embed/playlist/37i9dQZF1DWUX4dHd4gmc7", "width", "100%", "height", "380", "frameBorder", "0", "allowtransparency", "true", "allow", "encrypted-media"], ["id", "music"], ["src", "../../../assets/audio/gimme-shelter.opus", "controls", ""], ["href", "https://open.spotify.com/playlist/37i9dQZF1DWYNSm3Z3MxiM?si=21f57f9803764440", "target", "_blank"], [1, "btn", "btn-info"], [3, "trails", "trailDeleted"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You can hear our hip hop playlist recommendation during your trails. You can hear some of the songs here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " @import \"src/assets/scss/variables\", \"src/assets/scss/mixins\"; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "If you prefer to listen to some rock, you can hear one of our classic rock collection here or go to the full spotify playlist: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "audio", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Go to playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Trails following");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-trail-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("trailDeleted", function DashboardComponent_Template_app_trail_list_trailDeleted_20_listener() { return ctx.getTrails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("trails", ctx.trails);
    } }, directives: [_components_trail_list_trail_list_component__WEBPACK_IMPORTED_MODULE_2__["TrailListComponent"]], styles: [".container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 3rem;\n}\n.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:first-of-type {\n  padding: 0 0.6rem 4rem 0.6rem;\n}\n.container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.container[_ngcontent-%COMP%]   #music[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL21peGlucy9fdXRpbGl0aWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxnQkFBQTtBQUZKO0FBS0U7RUFDRSw2QkFBQTtBQUhKO0FBTUU7RUFDRSxxQkFBQTtBQUpKO0FBT0U7RUNkQSxhQUFBO0VBQ0EsNkJEY2dCO0VDYmhCLG1CQUhrRDtFQUlsRCxtQkFKc0U7RURpQnBFLGVBQUE7RUFDQSxTQUFBO0FBRkoiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9taXhpbnNcIjtcblxuLmNvbnRhaW5lciB7XG4gIC5zdWJ0aXRsZTpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICB9XG5cbiAgc2VjdGlvbjpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nOiAwIDAuNnJlbSA0cmVtIDAuNnJlbTtcbiAgfVxuXG4gIGlmcmFtZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB9XG5cbiAgI211c2ljIHtcbiAgICBAaW5jbHVkZSBmbGV4KHNwYWNlLWFyb3VuZCk7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMnJlbTtcbiAgfVxufVxuIiwiQG1peGluIGZsZXgoJGp1c3RpZnktY29udGVudDogY2VudGVyLCAkYWxpZ24taXRlbXM6IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1pdGVtcztcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG4iXX0= */"] });


/***/ }),

/***/ "Y0KP":
/*!***************************************************************!*\
  !*** ./src/app/components/trail-list/trail-list.component.ts ***!
  \***************************************************************/
/*! exports provided: TrailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailListComponent", function() { return TrailListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var src_app_services_trails_trail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/trails/trail.service */ "qjQH");
/* harmony import */ var src_app_services_alerts_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alerts/alert.service */ "Am1z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-moment */ "5eXZ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_7__);









const _c0 = function (a1) { return ["/trail/edit/", a1]; };
function TrailListComponent_div_0_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrailListComponent_div_0_div_1_ng_container_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const trail_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.deleteTrail(trail_r4.trailId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const trail_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, trail_r4.trailId));
} }
function TrailListComponent_div_0_div_1_ng_template_6_small_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trail_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", trail_r4.user.name, " ");
} }
function TrailListComponent_div_0_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrailListComponent_div_0_div_1_ng_template_6_small_0_Template, 3, 1, "small", 18);
} if (rf & 2) {
    const trail_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", trail_r4.user);
} }
function TrailListComponent_div_0_div_1_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trail_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, trail_r4.createdAt), " ");
} }
const _c1 = function (a1) { return ["/trail", a1]; };
function TrailListComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TrailListComponent_div_0_div_1_ng_container_5_Template, 6, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TrailListComponent_div_0_div_1_ng_template_6_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "see more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TrailListComponent_div_0_div_1_small_24_Template, 3, 3, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trail_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trail_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", trail_r4.trailId && (trail_r4.user == null ? null : trail_r4.user.name) === ctx_r3.username)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, trail_r4.activity && trail_r4.activity.activity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", trail_r4.province, ", ", trail_r4.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", trail_r4.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, trail_r4.trailId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", trail_r4 && trail_r4.createdAt);
} }
function TrailListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrailListComponent_div_0_div_1_Template, 25, 13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.trails);
} }
function TrailListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Oops... We didn't find any trail!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TrailListComponent {
    constructor(authService, userService, trailService, alertService) {
        this.authService = authService;
        this.userService = userService;
        this.trailService = trailService;
        this.alertService = alertService;
        this.trails = [];
        this.trailDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        const userId = this.authService.getLoggedUserId();
        if (userId)
            this.userService.getOneById(userId).subscribe((user) => {
                this.username = user.name;
            }, (err) => console.log(err));
    }
    deleteTrail(trailId) {
        this.alertService
            .custom({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        })
            .subscribe((data) => {
            if (data.isConfirmed)
                this.trailService.delete(trailId).subscribe((deleted) => {
                    console.log(deleted);
                    this.alertService.success().subscribe(() => {
                        this.trailDeleted.emit(true);
                    });
                }, (err) => this.alertService.error());
        });
    }
}
TrailListComponent.ɵfac = function TrailListComponent_Factory(t) { return new (t || TrailListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trails_trail_service__WEBPACK_IMPORTED_MODULE_3__["TrailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alerts_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
TrailListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrailListComponent, selectors: [["app-trail-list"]], inputs: { trails: "trails" }, outputs: { trailDeleted: "trailDeleted" }, decls: 3, vars: 2, consts: [["id", "trail-list", 4, "ngIf", "ngIfElse"], ["loading", ""], ["id", "trail-list"], ["class", "card trail", 4, "ngFor", "ngForOf"], [1, "card", "trail"], [1, "card-header"], [1, "user"], [4, "ngIf", "ngIfElse"], ["trailCreator", ""], [1, "card-body"], [1, "trail-info"], [1, "fas", "fa-mountain"], [1, "fas", "fa-globe-africa"], [1, "trail-description"], [1, "card-footer"], [1, "card-links"], [3, "routerLink"], [1, "created-at"], [4, "ngIf"], [1, "buttons"], [1, "btn", "btn-warning", 3, "routerLink"], [1, "fas", "fa-edit"], [1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-trash-alt"], [1, "far", "fa-user"], ["id", "loading", 1, "container"], [1, "alert", "alert-danger"]], template: function TrailListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrailListComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrailListComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trails.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], angular2_moment__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"]], styles: ["#loading[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  margin-top: 1rem;\n}\n\n#trail-list[_ngcontent-%COMP%] {\n  padding: 0 0.6rem 4rem 0.6rem;\n}\n\n#trail-list[_ngcontent-%COMP%]   .card.trail[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n#trail-list[_ngcontent-%COMP%]   .trail-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-size: 0.8rem;\n  padding: 0 1rem 0.5rem 1rem;\n  margin-bottom: 0.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n\n#trail-list[_ngcontent-%COMP%]   .trail-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n#trail-list[_ngcontent-%COMP%]   .trail-description[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyYWlsLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9taXhpbnMvX3V0aWxpdGllcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7QUFERjs7QUFFRTtFQUNFLG1CQUFBO0FBQUo7O0FBR0U7RUNaQSxhQUFBO0VBQ0EsOEJEWWdCO0VDWGhCLG1CQUhrRDtFQUlsRCxtQkFKc0U7RURlcEUsZUFBQTtFQUNBLGlCQUFBO0VBSUEsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBREo7O0FBSkk7RUFDRSxnQkFBQTtBQU1OOztBQUNFO0VBQ0UsYUFBQTtBQUNKIiwiZmlsZSI6InRyYWlsLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlc1wiLCBcInNyYy9hc3NldHMvc2Nzcy9taXhpbnNcIjtcblxuI2xvYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4jdHJhaWwtbGlzdCB7XG4gIHBhZGRpbmc6IDAgMC42cmVtIDRyZW0gMC42cmVtO1xuICAuY2FyZC50cmFpbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC50cmFpbC1pbmZvIHtcbiAgICBAaW5jbHVkZSBmbGV4KHNwYWNlLWJldHdlZW4pO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIHBhZGRpbmc6IDAgMXJlbSAwLjVyZW0gMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmF5LTIwMDtcbiAgfVxuXG4gIC50cmFpbC1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxufVxuIiwiQG1peGluIGZsZXgoJGp1c3RpZnktY29udGVudDogY2VudGVyLCAkYWxpZ24taXRlbXM6IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1pdGVtcztcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG4iXX0= */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-moment */ "5eXZ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _interceptors_user_user_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/user/user.interceptor */ "8Smb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_trail_list_trail_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/trail-list/trail-list.component */ "Y0KP");
/* harmony import */ var _components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/file-uploader/file-uploader.component */ "1jS7");
/* harmony import */ var _components_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user-search/user-search.component */ "hGRI");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/layout/header/header.component */ "gK8K");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "H3jT");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ "qTot");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _pages_trails_trails_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/trails/trails.component */ "6t8a");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/user-profile/user-profile.component */ "G9k0");
/* harmony import */ var _pages_trail_form_trail_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/trail-form/trail-form.component */ "kfrl");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/users/users.component */ "Ag98");
/* harmony import */ var _pages_trail_trail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/trail/trail.component */ "h5Qh");
/* harmony import */ var _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/chart/chart.component */ "0HKr");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_user_user_interceptor__WEBPACK_IMPORTED_MODULE_5__["UserInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            angular2_moment__WEBPACK_IMPORTED_MODULE_4__["MomentModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_21__["ChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"],
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
        _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _components_trail_list_trail_list_component__WEBPACK_IMPORTED_MODULE_7__["TrailListComponent"],
        _pages_trails_trails_component__WEBPACK_IMPORTED_MODULE_15__["TrailsComponent"],
        _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__["UserProfileComponent"],
        _pages_trail_form_trail_form_component__WEBPACK_IMPORTED_MODULE_17__["TrailFormComponent"],
        _components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_8__["FileUploaderComponent"],
        _pages_users_users_component__WEBPACK_IMPORTED_MODULE_18__["UsersComponent"],
        _components_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_9__["UserSearchComponent"],
        _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _pages_trail_trail_component__WEBPACK_IMPORTED_MODULE_19__["TrailComponent"],
        _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_20__["ChartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        angular2_moment__WEBPACK_IMPORTED_MODULE_4__["MomentModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_21__["ChartsModule"]] }); })();


/***/ }),

/***/ "cNMA":
/*!***********************************************!*\
  !*** ./src/app/guards/logged/logged.guard.ts ***!
  \***********************************************/
/*! exports provided: LoggedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedGuard", function() { return LoggedGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class LoggedGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        return this.authService.isLogged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((isLogged) => {
            if (!isLogged)
                this.router.navigate(['/login']);
        }));
    }
}
LoggedGuard.ɵfac = function LoggedGuard_Factory(t) { return new (t || LoggedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoggedGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoggedGuard, factory: LoggedGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fFVw":
/*!******************************************************!*\
  !*** ./src/app/services/comments/comment.service.ts ***!
  \******************************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "9ans");




class CommentService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.commentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].host + 'comment/';
        this.trailCommentUrl = this.commentUrl + 'trail/';
    }
    /**
     * Get all trail comments
     *
     * @param trailId {number}
     * @returns {Observable<any>}
     */
    getTrailComments(trailId) {
        return this.http.get(this.trailCommentUrl + 'getAllByTrailId', {
            headers: { trailId: String(trailId) },
        });
    }
    /**
     * Create a trail comment
     *
     * @param trailId {number}
     * @param trailComment {TrailComment}
     * @returns {Observable<any>}
     */
    createTrailComment(trailComment) {
        return this.http.post(this.trailCommentUrl + 'create', trailComment);
    }
    /**
     * Updates a trail comment
     *
     * @param trailId {number}
     * @param trailComment {TrailComment}
     * @returns {Observable<any>}
     */
    updateTrailComment(trailCommentId, trailComment) {
        return this.http.put(this.trailCommentUrl + 'update', trailComment, {
            headers: { trailCommentId: String(trailCommentId) },
        });
    }
    /**
     * Delete a trail comment
     *
     * @param trailId {number}
     * @returns {Observable<any>}
     */
    deleteTrailComment(trailId) {
        const userId = this.authService.getLoggedUserId();
        return this.http.delete(this.trailCommentUrl + 'delete', {
            headers: { trailCommentId: String(trailId), userId: String(userId) },
        });
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gK8K":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/dashboard"]; };
const _c1 = function () { return ["active"]; };
const _c2 = function () { return ["/trails"]; };
const _c3 = function () { return ["/users"]; };
const _c4 = function () { return ["/trail/create"]; };
const _c5 = function (a1) { return ["/profile", a1]; };
function HeaderComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Traily ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Trails");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Create Trail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c4))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c5, ctx_r0.userId))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));
} }
class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLogged = null;
    }
    ngOnInit() {
        this.authService.isLogged$.subscribe((logged) => (this.isLogged = logged));
        this.userId = this.authService.getLoggedUserId();
    }
    logout() {
        this.authService.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "logo"], [1, "nav-link", "logo", 3, "routerLink", "routerLinkActive"], ["src", "assets/images/logo-traily.svg", "alt", "default image"], ["id", "nav-links"], [1, "nav-link", 3, "routerLink", "routerLinkActive"], [1, "dropdown"], [1, "dropbtn", "nav-link"], [1, "rounded-icon"], [1, "fa", "fa-user"], [1, "fa", "fa-caret-down"], [1, "dropdown-content"], [3, "routerLink", "routerLinkActive"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_header_0_Template, 23, 21, "header", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n  align-items: center;\n}\n.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 3px;\n  color: #474c3f;\n}\n.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .rounded-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  color: white;\n  background-color: #5b6d40;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL21peGlucy9fdXRpbGl0aWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFJSTtFQUNFLGdCQUFBO0VBQ0EsY0NhSTtBRGZWO0FBSUk7RUFDRSxrQkFBQTtFQUNBLFdBWEU7RUFZRixZQVpFO0VFRE4sYUFBQTtFQUNBLHVCQUY0QjtFQUc1QixtQkFIa0Q7RUFJbEQsbUJBSnNFO0VGZ0JsRSxZQUFBO0VBQ0EseUJDSUk7QURIViIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlc1wiLCBcInNyYy9hc3NldHMvc2Nzcy9taXhpbnNcIjtcblxuJHJvdW5kOiA0NXB4O1xuLmRyb3Bkb3duIHtcbiAgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaTpudGgtY2hpbGQoMikge1xuICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICAgIGNvbG9yOiAkZ3JlZW4tNjtcbiAgICB9XG4gICAgLnJvdW5kZWQtaWNvbiB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogJHJvdW5kO1xuICAgICAgaGVpZ2h0OiAkcm91bmQ7XG4gICAgICBAaW5jbHVkZSBmbGV4KCk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tNTtcbiAgICB9XG4gIH1cbn1cbiIsIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuJGJsdWU6ICM1ODc4Y2MgIWRlZmF1bHQ7XG4kcmVkOiAjY2M0YzJmICFkZWZhdWx0O1xuJG9yYW5nZTogI2NjN2YzOSAhZGVmYXVsdDtcbiR5ZWxsb3c6ICNkOWNiM2QgIWRlZmF1bHQ7XG4kY3lhbjogIzU4YjVjYyAhZGVmYXVsdDtcbiRncmVlbi0xOiAjZDFlNmIyICFkZWZhdWx0O1xuJGdyZWVuLTI6ICM5NWNkNDMgIWRlZmF1bHQ7XG4kZ3JlZW4tMzogIzg3YjU0MyAhZGVmYXVsdDtcbiRncmVlbi00OiAjNzg5ZDQyICFkZWZhdWx0O1xuJGdyZWVuLTU6ICM1YjZkNDAgIWRlZmF1bHQ7XG4kZ3JlZW4tNjogIzQ3NGMzZiAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICRncmVlbi0zICFkZWZhdWx0O1xuJGluZm86ICRjeWFuICFkZWZhdWx0O1xuJHdhcm5pbmc6ICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogJGdyYXktOTAwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0aGVtZS1jb2xvci12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRoZW1lLWNvbG9ycy1tYXBcbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsXG4gIFwiaW5mb1wiOiAkaW5mbyxcbiAgXCJ3YXJuaW5nXCI6ICR3YXJuaW5nLFxuICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICBcImxpZ2h0XCI6ICRsaWdodCxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcImdyZWVuXCI6ICRncmVlbi00XG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHM6IChcbiAgeHM6IDMzMHB4LFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0MDBweCxcbikgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiA0cHg7XG4kY2FyZC1yYWRpdXM6IDAuNXJlbTtcbiRmb290ZXItaDogMjUwcHg7XG4kYW5pbWF0aW9uQm9yZGVyQ29sb3I6ICRncmVlbi01OyIsIkBtaXhpbiBmbGV4KCRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciwgJGFsaWduLWl0ZW1zOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuIl19 */"] });


/***/ }),

/***/ "h5Qh":
/*!************************************************!*\
  !*** ./src/app/pages/trail/trail.component.ts ***!
  \************************************************/
/*! exports provided: TrailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailComponent", function() { return TrailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_trails_trail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/trails/trail.service */ "qjQH");
/* harmony import */ var src_app_services_comments_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/comments/comment.service */ "fFVw");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/chart/chart.component */ "0HKr");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-moment */ "5eXZ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_8__);









function TrailComponent_div_0_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getDifficulty(ctx_r1.trail.difficulty));
} }
function TrailComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Max elevation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.trail.elevMax, "m");
} }
function TrailComponent_div_0_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Min elevation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.trail.elevMin, "m");
} }
function TrailComponent_div_0_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chart", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("distance", ctx_r4.trail.distance)("elevationGain", ctx_r4.trail.elevGain);
} }
function TrailComponent_div_0_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r5.trail.createdAt));
} }
function TrailComponent_div_0_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrailComponent_div_0_ng_container_54_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.download(ctx_r11.trail.trailFilepath); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TrailComponent_div_0_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This trail does not have any track files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrailComponent_div_0_ng_container_57_div_1_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", comment_r14.userId === ctx_r15.loggedUserId ? "You" : comment_r14.user.name, " ");
} }
function TrailComponent_div_0_ng_container_57_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrailComponent_div_0_ng_container_57_div_1_ng_container_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const comment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.deleteComment(comment_r14.trailCommentId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TrailComponent_div_0_ng_container_57_div_1_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, comment_r14.createdAt));
} }
function TrailComponent_div_0_ng_container_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrailComponent_div_0_ng_container_57_div_1_small_2_Template, 3, 1, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TrailComponent_div_0_ng_container_57_div_1_ng_container_3_Template, 3, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TrailComponent_div_0_ng_container_57_div_1_p_7_Template, 4, 3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r14.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r14.userId === ctx_r13.loggedUserId && comment_r14.trailCommentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r14.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r14.createdAt);
} }
function TrailComponent_div_0_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrailComponent_div_0_ng_container_57_div_1_Template, 8, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.comments);
} }
function TrailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Difficulty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TrailComponent_div_0_p_12_Template, 2, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Distance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Elevation gain");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TrailComponent_div_0_div_23_Template, 5, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TrailComponent_div_0_div_24_Template, 5, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TrailComponent_div_0_ng_container_25_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Province");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, TrailComponent_div_0_div_53_Template, 6, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, TrailComponent_div_0_ng_container_54_Template, 4, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, TrailComponent_div_0_ng_template_55_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, TrailComponent_div_0_ng_container_57_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "form", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TrailComponent_div_0_Template_form_ngSubmit_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.comment(_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrailComponent_div_0_Template_textarea_ngModelChange_61_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.newComment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.trail.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.trail.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.trail.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.trail.distance, "km");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.trail.elevGain, "m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.trail.elevMax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.trail.elevMin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.trail.distance && ctx_r0.trail.elevGain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.trail.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.trail.province);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.trail.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.trail.user == null ? null : ctx_r0.trail.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.trail.activity == null ? null : ctx_r0.trail.activity.activity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.trail.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.trail.trailFilepath)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newComment);
} }
class TrailComponent {
    constructor(activatedRoute, trailService, commentService, authService) {
        this.activatedRoute = activatedRoute;
        this.trailService = trailService;
        this.commentService = commentService;
        this.authService = authService;
    }
    ngOnInit() {
        const trailId = this.activatedRoute.snapshot.params.trailId;
        this.loggedUserId = this.authService.getLoggedUserId();
        this.trailService
            .getOneById(trailId)
            .subscribe((trail) => (this.trail = trail));
        this.getComments(trailId);
    }
    /**
     * Downloads the file if it exists
     * @param filepath {string}
     */
    download(filepath) {
        this.trailService.download(filepath).subscribe((data) => {
            var _a;
            const a = document.createElement('a');
            const objectUrl = URL.createObjectURL(data);
            a.href = objectUrl;
            a.download = ((_a = this.trail) === null || _a === void 0 ? void 0 : _a.name) + '.gpx';
            a.click();
            URL.revokeObjectURL(objectUrl);
        });
    }
    /**
     * Transforms difficulty from number to string
     * @param difficulty {number}
     * @returns {string}
     */
    getDifficulty(difficulty) {
        let difficultyString = '';
        switch (difficulty) {
            case 1:
                difficultyString = 'Very easy';
                break;
            case 2:
                difficultyString = 'Easy';
                break;
            case 3:
                difficultyString = 'Medium';
                break;
            case 4:
                difficultyString = 'Hard';
                break;
            case 5:
                difficultyString = 'Very hard';
                break;
            default:
                break;
        }
        return difficultyString;
    }
    /**
     * Create a new comment
     * @param form {HTMLFormElement} form to reset comment field
     */
    comment(form) {
        if (this.trail && this.newComment && this.trail.trailId) {
            const comment = {
                trailId: this.trail.trailId,
                comment: this.newComment,
            };
            this.commentService.createTrailComment(comment).subscribe((_) => {
                this.getComments();
                form.reset();
            });
        }
    }
    /**
     * Delete a comment
     * @param commentId {number}
     */
    deleteComment(commentId) {
        this.commentService.deleteTrailComment(commentId).subscribe((_) => {
            this.getComments();
        }, () => { });
    }
    /**
     * Get all trail comments
     * @param trailId {number}
     */
    getComments(trailId) {
        var _a;
        const id = ((_a = this.trail) === null || _a === void 0 ? void 0 : _a.trailId) || trailId;
        if (id)
            this.commentService
                .getTrailComments(id)
                .subscribe((comments) => (this.comments = comments));
    }
}
TrailComponent.ɵfac = function TrailComponent_Factory(t) { return new (t || TrailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trails_trail_service__WEBPACK_IMPORTED_MODULE_2__["TrailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_comments_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
TrailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrailComponent, selectors: [["app-trail"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "page-title"], [1, "field", "trail-info"], [1, "trail-info", "flex"], [1, "field"], [4, "ngIf"], ["class", "field", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noFile", ""], [3, "ngSubmit"], ["commentForm", ""], [1, "form-control"], ["name", "comment", "cols", "30", "rows", "10", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success"], [3, "distance", "elevationGain"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-download"], [1, "alert", "alert-danger"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "far", "fa-user"], [1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-trash-alt"]], template: function TrailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrailComponent_div_0_Template, 64, 18, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_7__["ChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [angular2_moment__WEBPACK_IMPORTED_MODULE_8__["TimeAgoPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-bottom: 6rem;\n}\n.container[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n.container[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:first-child {\n  font-weight: bold;\n  font-size: 1.2rem;\n  margin-bottom: 0.2rem;\n}\n.container[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.container[_ngcontent-%COMP%]   .trail-info[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 2rem;\n  box-shadow: 0 0 6px #ced4da;\n  background-color: #f8f9fa;\n  margin-bottom: 2rem;\n}\n.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  background-color: #e9ecef;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n@media (min-width: 576px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyYWlsLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvbWl4aW5zL19mb3Jtcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQUE7QUFERjtBQUVFO0VBQ0UsZUFBQTtBQUFKO0FBRUU7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBQUo7QUFJSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUZOO0FBS0k7RUFDRSxnQkFBQTtBQUhOO0FBT0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJDNUJPO0VENkJQLG1CQUFBO0FBTEo7QUFRRTtFQUNFLGdCQUFBO0FBTko7QUFPSTtFQUNFLGVBQUE7QUFMTjtBQVNFO0VBQ0UsZ0JBQUE7QUFQSjtBQVFJO0VBQ0UsZUFBQTtFQUNBLHlCQzFDSztBRG9DWDtBQVFJO0VBQ0Usb0JBQUE7QUFOTjtBRXZDRTtFRm1EQTtJQUNFLGVBQUE7RUFSRjtBQUNGIiwiZmlsZSI6InRyYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXNcIiwgXCJzcmMvYXNzZXRzL3Njc3MvbWl4aW5zXCI7XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbiAgLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuICAuZmxleCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMnJlbTtcbiAgfVxuXG4gIC5maWVsZCB7XG4gICAgKjpmaXJzdC1jaGlsZCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xuICAgIH1cblxuICAgICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC50cmFpbC1pbmZvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMCA2cHggJGdyYXktNDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTEwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB0ZXh0YXJlYSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICB9XG5cbiAgLmNhcmQge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTIwMDtcbiAgICB9XG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgbWVkaWEoXCJzbVwiKSB7XG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbn1cbiIsIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuJGJsdWU6ICM1ODc4Y2MgIWRlZmF1bHQ7XG4kcmVkOiAjY2M0YzJmICFkZWZhdWx0O1xuJG9yYW5nZTogI2NjN2YzOSAhZGVmYXVsdDtcbiR5ZWxsb3c6ICNkOWNiM2QgIWRlZmF1bHQ7XG4kY3lhbjogIzU4YjVjYyAhZGVmYXVsdDtcbiRncmVlbi0xOiAjZDFlNmIyICFkZWZhdWx0O1xuJGdyZWVuLTI6ICM5NWNkNDMgIWRlZmF1bHQ7XG4kZ3JlZW4tMzogIzg3YjU0MyAhZGVmYXVsdDtcbiRncmVlbi00OiAjNzg5ZDQyICFkZWZhdWx0O1xuJGdyZWVuLTU6ICM1YjZkNDAgIWRlZmF1bHQ7XG4kZ3JlZW4tNjogIzQ3NGMzZiAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICRncmVlbi0zICFkZWZhdWx0O1xuJGluZm86ICRjeWFuICFkZWZhdWx0O1xuJHdhcm5pbmc6ICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogJGdyYXktOTAwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0aGVtZS1jb2xvci12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRoZW1lLWNvbG9ycy1tYXBcbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsXG4gIFwiaW5mb1wiOiAkaW5mbyxcbiAgXCJ3YXJuaW5nXCI6ICR3YXJuaW5nLFxuICBcImRhbmdlclwiOiAkZGFuZ2VyLFxuICBcImxpZ2h0XCI6ICRsaWdodCxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcImdyZWVuXCI6ICRncmVlbi00XG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHM6IChcbiAgeHM6IDMzMHB4LFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0MDBweCxcbikgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiA0cHg7XG4kY2FyZC1yYWRpdXM6IDAuNXJlbTtcbiRmb290ZXItaDogMjUwcHg7XG4kYW5pbWF0aW9uQm9yZGVyQ29sb3I6ICRncmVlbi01OyIsIkB1c2UgXCJzYXNzOm1hcFwiO1xuQG1peGluIG1lZGlhKCRicmVha3BvaW50KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAuZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "hGRI":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-search/user-search.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchComponent", function() { return UserSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");





class UserSearchComponent {
    constructor(userService) {
        this.userService = userService;
        this.keyUp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subscription = this.keyUp
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => event.target.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe((search) => this.search(search));
    }
    search(search) {
        this.searchEvent.emit(undefined);
        this.userService.search(search).subscribe((users) => this.searchEvent.emit(users), (_) => this.searchEvent.emit([]));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
UserSearchComponent.ɵfac = function UserSearchComponent_Factory(t) { return new (t || UserSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
UserSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSearchComponent, selectors: [["app-user-search"]], outputs: { searchEvent: "searchEvent" }, decls: 2, vars: 0, consts: [["type", "text", "placeholder", "Search for users", 3, "keyup"], ["searchInput", ""]], template: function UserSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UserSearchComponent_Template_input_keyup_0_listener($event) { return ctx.keyUp.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["input[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  margin-bottom: 1.5rem;\n  padding: 0.6rem;\n  font-size: 1rem;\n  border-radius: 0.5rem;\n  border: 2px solid #5878cc;\n  outline: none;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VzZXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFERjtBQUdFO0VBQ0UsY0NQTztBRE1YIiwiZmlsZSI6InVzZXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXNcIjtcblxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgcGFkZGluZzogMC42cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgJGJsdWU7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAkZ3JheS02MDA7XG4gIH1cbn1cblxuXG4iLCIkd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG5cbiRibHVlOiAjNTg3OGNjICFkZWZhdWx0O1xuJHJlZDogI2NjNGMyZiAhZGVmYXVsdDtcbiRvcmFuZ2U6ICNjYzdmMzkgIWRlZmF1bHQ7XG4keWVsbG93OiAjZDljYjNkICFkZWZhdWx0O1xuJGN5YW46ICM1OGI1Y2MgIWRlZmF1bHQ7XG4kZ3JlZW4tMTogI2QxZTZiMiAhZGVmYXVsdDtcbiRncmVlbi0yOiAjOTVjZDQzICFkZWZhdWx0O1xuJGdyZWVuLTM6ICM4N2I1NDMgIWRlZmF1bHQ7XG4kZ3JlZW4tNDogIzc4OWQ0MiAhZGVmYXVsdDtcbiRncmVlbi01OiAjNWI2ZDQwICFkZWZhdWx0O1xuJGdyZWVuLTY6ICM0NzRjM2YgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5OiAkYmx1ZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAkZ3JlZW4tMyAhZGVmYXVsdDtcbiRpbmZvOiAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICRncmF5LTkwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdGhlbWUtY29sb3ItdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0aGVtZS1jb2xvcnMtbWFwXG4kdGhlbWUtY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeSxcbiAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLFxuICBcImluZm9cIjogJGluZm8sXG4gIFwid2FybmluZ1wiOiAkd2FybmluZyxcbiAgXCJkYW5nZXJcIjogJGRhbmdlcixcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwiZGFya1wiOiAkZGFyayxcbiAgXCJncmVlblwiOiAkZ3JlZW4tNFxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzOiAoXG4gIHhzOiAzMzBweCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweCxcbiAgeHhsOiAxNDAwcHgsXG4pICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1czogNHB4O1xuJGNhcmQtcmFkaXVzOiAwLjVyZW07XG4kZm9vdGVyLWg6IDI1MHB4O1xuJGFuaW1hdGlvbkJvcmRlckNvbG9yOiAkZ3JlZW4tNTsiXX0= */"] });


/***/ }),

/***/ "kfrl":
/*!**********************************************************!*\
  !*** ./src/app/pages/trail-form/trail-form.component.ts ***!
  \**********************************************************/
/*! exports provided: TrailFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailFormComponent", function() { return TrailFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_trails_trail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/trails/trail.service */ "qjQH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_services_activity_activity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/activity/activity.service */ "s6Pj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/file-uploader/file-uploader.component */ "1jS7");








const _c0 = ["trailForm"];
function TrailFormComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Trail name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TrailFormComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TrailFormComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Difficulty is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TrailFormComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Distance is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TrailFormComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Elevation gain is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TrailFormComponent_ng_container_37_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", activity_r21.activityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", activity_r21.activity, " ");
} }
function TrailFormComponent_ng_container_37_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Activity is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TrailFormComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrailFormComponent_ng_container_37_Template_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.trail.activityId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TrailFormComponent_ng_container_37_option_4_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Activity*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TrailFormComponent_ng_container_37_ng_container_7_Template, 3, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.trail.activityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.activities);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r18.valid && (_r18.touched || ctx_r11.submitted));
} }
function TrailFormComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Country is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TrailFormComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Province is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TrailFormComponent_ng_container_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "City is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class TrailFormComponent {
    constructor(trailService, activatedRoute, authService, activityService, router) {
        this.trailService = trailService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.activityService = activityService;
        this.router = router;
        this.trail = {
            trailId: undefined,
            name: '',
            description: '',
            distance: null,
            elevGain: null,
            difficulty: null,
            country: '',
            province: '',
            city: '',
            activityId: 0,
            userId: 0,
            elevMax: null,
            elevMin: null,
            trailFilepath: null,
            createdAt: undefined,
            user: undefined,
            activity: undefined,
        };
        this.edit = false;
        this.submitted = false;
    }
    ngOnInit() {
        const trailId = this.activatedRoute.snapshot.params.trailId;
        const userId = this.authService.getLoggedUserId();
        if (trailId)
            this.trailService.getOneById(trailId).subscribe((trail) => {
                this.trail = trail;
                this.edit = true;
            }, (err) => {
                console.log(err);
            });
        if (userId)
            this.trail.userId = userId;
        this.activityService.getAll().subscribe((activities) => {
            this.activities = activities;
        });
    }
    onSubmit() {
        var _a;
        this.submitted = true;
        if ((_a = this.trailForm) === null || _a === void 0 ? void 0 : _a.valid) {
            if (this.edit) {
                this.updateTrail();
            }
            else {
                this.createTrail();
            }
        }
    }
    updateTrail() {
        console.log(this.trail);
        this.trailService.update(this.trail).subscribe((res) => {
            this.router.navigate(["/trails"]);
        }, (err) => console.log(err));
    }
    createTrail() {
        this.trailService.create(this.trail).subscribe((res) => {
            this.router.navigate(["/trails"]);
        }, (err) => console.log(err));
    }
    getFilePath(filepath) {
        this.trail.trailFilepath = filepath;
    }
}
TrailFormComponent.ɵfac = function TrailFormComponent_Factory(t) { return new (t || TrailFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trails_trail_service__WEBPACK_IMPORTED_MODULE_1__["TrailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_activity_activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TrailFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrailFormComponent, selectors: [["app-trail-form"]], viewQuery: function TrailFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trailForm = _t.first);
    } }, decls: 68, vars: 22, consts: [[1, "full", "bg-green"], [1, "container"], [1, "page-title"], [1, "form", 3, "ngSubmit"], ["trailForm", "ngForm"], [1, "form-control"], ["type", "text", "name", "name", "required", "", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["for", "name"], [4, "ngIf"], ["for", "description"], ["type", "text", "name", "description", "required", "", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], ["for", "difficulty"], ["type", "range", "min", "1", "max", "5", "name", "difficulty", "list", "difficulty", "required", "", 3, "ngModel", "ngModelChange"], ["difficulty", "ngModel"], [1, "form-group"], ["type", "number", "name", "distance", "required", "", 3, "ngModel", "ngModelChange"], ["distance", "ngModel"], ["for", "distance"], ["type", "number", "name", "elevGain", "required", "", 3, "ngModel", "ngModelChange"], ["elevGain", "ngModel"], ["for", "elevGain"], ["type", "text", "name", "country", "required", "", 3, "ngModel", "ngModelChange"], ["country", "ngModel"], ["for", "country"], ["type", "text", "name", "province", "required", "", 3, "ngModel", "ngModelChange"], ["province", "ngModel"], ["for", "province"], ["type", "text", "name", "city", "required", "", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], ["for", "city"], ["type", "number", "name", "elevMax", 3, "ngModel", "ngModelChange"], ["for", "elevMax"], ["type", "number", "name", "elevMin", 3, "ngModel", "ngModelChange"], ["for", "elevMin"], [3, "filepath", "filePathEvent"], ["type", "submit", 1, "btn", "btn-success", 3, "value"], ["name", "activity", "required", "", 3, "ngModel", "ngModelChange"], ["activity", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "activity"], [3, "value"]], template: function TrailFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TrailFormComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrailFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.trail.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "trail name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TrailFormComponent_ng_container_11_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrailFormComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.trail.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TrailFormComponent_ng_container_17_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "difficulty*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrailFormComponent_Template_input_ngModelChange_21_listener($event) { return ctx.trail.difficulty = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TrailFormComponent_ng_container_23_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrailFormComponent_Template_input_ngModelChange_26_listener($event) { return ctx.trail.distance = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Distance* (km)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TrailFormComponent_ng_container_30_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrailFormComponent_Template_input_ngModelChange_32_listener($event) { return ctx.trail.elevGain = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Elevation gain* (m)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TrailFormComponent_ng_container_36_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, TrailFormComponent_ng_container_37_Template, 8, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrailFormComponent_Template_input_ngModelChange_40_listener($event) { return ctx.trail.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Country*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TrailFormComponent_ng_container_44_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrailFormComponent_Template_input_ngModelChange_46_listener($event) { return ctx.trail.province = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "province*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, TrailFormComponent_ng_container_50_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrailFormComponent_Template_input_ngModelChange_52_listener($event) { return ctx.trail.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "city*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TrailFormComponent_ng_container_56_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrailFormComponent_Template_input_ngModelChange_59_listener($event) { return ctx.trail.elevMax = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Maximum elevation (m)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrailFormComponent_Template_input_ngModelChange_63_listener($event) { return ctx.trail.elevMin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Minimum elevation (m)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "app-file-uploader", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filePathEvent", function TrailFormComponent_Template_app_file_uploader_filePathEvent_66_listener($event) { return ctx.getFilePath($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.edit ? "Edit Trail" : "Create Trail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trail.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.valid && (_r1.touched || ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trail.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r3.valid && (_r3.touched || ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trail.difficulty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r5.valid && (_r5.touched || ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trail.distance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r7.valid && (_r7.touched || ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trail.elevGain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r9.valid && (_r9.touched || ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trail.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r12.valid && (_r12.touched || ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trail.province);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r14.valid && (_r14.touched || ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trail.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r16.valid && (_r16.touched || ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trail.elevMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trail.elevMin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filepath", ctx.trail.trailFilepath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.edit ? "Modify" : "Create");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_7__["FileUploaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-bottom: 6rem;\n}\n\n.form[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.form[_ngcontent-%COMP%]   .three-fields[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n  position: relative;\n}\n\n.form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: block;\n  color: #474c3f;\n}\n\n.form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  text-transform: capitalize;\n  text-align: left;\n}\n\n.form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #cc4c2f;\n}\n\n.form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .ng-touched.ng-invalid[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .ng-touched.ng-invalid[_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%] {\n  color: #cc4c2f;\n  border-color: #cc4c2f;\n}\n\n.form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none;\n  border: none;\n  border-bottom: 0.15em solid #5b6d40;\n  padding: 8px 0 3px 0;\n  background: transparent;\n}\n\n.form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -3px;\n  left: 0;\n  padding: 10px 0;\n  transition: 0.5s;\n}\n\n.form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\n  top: -25px;\n  font-size: 12px;\n}\n\n.form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: #d1e6b2;\n  font-size: 1rem;\n}\n\n.form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (min-width: 576px) {\n  .form[_ngcontent-%COMP%] {\n    padding: 3rem;\n  }\n  .form[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n    width: 40% !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: row;\n  }\n  .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:nth-child(n+2) {\n    margin-left: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyYWlsLWZvcm0uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9taXhpbnMvX2Zvcm1zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9taXhpbnMvX3V0aWxpdGllcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQUE7QUFERjs7QUFHQTtFQUNFLHNCQ05NO0FETVI7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQURKOztBQUdJOzs7RUFHRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFETjs7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUROOztBQUdJO0VBQ0UsY0NqQkE7QURnQk47O0FBS007O0VBRUUsY0N2QkY7RUR3QkUscUJDeEJGO0FEcUJOOztBQU9JOzs7RUFHRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFMTjs7QUFNTTs7O0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZSOztBQU1ROzs7OztFQUNFLFVBQUE7RUFDQSxlQUFBO0FBQVY7O0FBS0k7RUFDRSx5QkNsREk7RURtREosZUFBQTtBQUhOOztBQUtJO0VBQ0UsV0FBQTtBQUhOOztBRWxFRTtFRjRFQTtJQUNFLGFBQUE7RUFORjtFQVFFO0lBQ0UscUJBQUE7RUFOSjtBQUNGOztBRTNFRTtFRnVGRTtJR3hGRixhQUFBO0lBQ0EsOEJId0ZrQjtJR3ZGbEIsbUJBSGtEO0lBSWxELG1CQUpzRTtFSG9GdEU7RUFPSTtJQUNFLFdBQUE7RUFMTjtFQU1NO0lBQ0UsaUJBQUE7RUFKUjtBQUNGIiwiZmlsZSI6InRyYWlsLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlc1wiLCBcInNyYy9hc3NldHMvc2Nzcy9taXhpbnNcIjtcblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xufVxuLmZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG5cbiAgLnRocmVlLWZpZWxkcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgbGFiZWwsXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0sXG4gICAgaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbG9yOiAkZ3JlZW4tNjtcbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICBzbWFsbCB7XG4gICAgICBjb2xvcjogJHJlZDtcbiAgICB9XG5cbiAgICAubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgICAgICYsXG4gICAgICB+IGxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRyZWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHJlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbiAgICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxuICAgIHNlbGVjdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItYm90dG9tOiAwLjE1ZW0gc29saWQgJGdyZWVuLTU7XG4gICAgICBwYWRkaW5nOiA4cHggMCAzcHggMDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfiBsYWJlbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICB9XG4gICAgICAmOmZvY3VzLFxuICAgICAgJjp2YWxpZCB7XG4gICAgICAgIH4gbGFiZWwge1xuICAgICAgICAgIHRvcDogLTI1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi0xO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICBpbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gXG59XG5cbkBpbmNsdWRlIG1lZGlhKFwic21cIikge1xuICAuZm9ybSB7XG4gICAgcGFkZGluZzogM3JlbTtcblxuICAgIGlucHV0W3R5cGU9XCJyYW5nZVwiXSB7XG4gICAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIG1lZGlhKFwibWRcIikge1xuICAuZm9ybSB7XG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgQGluY2x1ZGUgZmxleChzcGFjZS1iZXR3ZWVuKTtcbiAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgJjpudGgtY2hpbGQobiArIDIpIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogIzU4NzhjYyAhZGVmYXVsdDtcbiRyZWQ6ICNjYzRjMmYgIWRlZmF1bHQ7XG4kb3JhbmdlOiAjY2M3ZjM5ICFkZWZhdWx0O1xuJHllbGxvdzogI2Q5Y2IzZCAhZGVmYXVsdDtcbiRjeWFuOiAjNThiNWNjICFkZWZhdWx0O1xuJGdyZWVuLTE6ICNkMWU2YjIgIWRlZmF1bHQ7XG4kZ3JlZW4tMjogIzk1Y2Q0MyAhZGVmYXVsdDtcbiRncmVlbi0zOiAjODdiNTQzICFkZWZhdWx0O1xuJGdyZWVuLTQ6ICM3ODlkNDIgIWRlZmF1bHQ7XG4kZ3JlZW4tNTogIzViNmQ0MCAhZGVmYXVsdDtcbiRncmVlbi02OiAjNDc0YzNmICFkZWZhdWx0O1xuXG4kcHJpbWFyeTogJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogJGdyZWVuLTMgIWRlZmF1bHQ7XG4kaW5mbzogJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAkZ3JheS05MDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRoZW1lLWNvbG9yLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdGhlbWUtY29sb3JzLW1hcFxuJHRoZW1lLWNvbG9yczogKFxuICBcInByaW1hcnlcIjogJHByaW1hcnksXG4gIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXG4gIFwic3VjY2Vzc1wiOiAkc3VjY2VzcyxcbiAgXCJpbmZvXCI6ICRpbmZvLFxuICBcIndhcm5pbmdcIjogJHdhcm5pbmcsXG4gIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXG4gIFwibGlnaHRcIjogJGxpZ2h0LFxuICBcImRhcmtcIjogJGRhcmssXG4gIFwiZ3JlZW5cIjogJGdyZWVuLTRcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50czogKFxuICB4czogMzMwcHgsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHgsXG4gIHh4bDogMTQwMHB4LFxuKSAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXM6IDRweDtcbiRjYXJkLXJhZGl1czogMC41cmVtO1xuJGZvb3Rlci1oOiAyNTBweDtcbiRhbmltYXRpb25Cb3JkZXJDb2xvcjogJGdyZWVuLTU7IiwiQHVzZSBcInNhc3M6bWFwXCI7XG5AbWl4aW4gbWVkaWEoJGJyZWFrcG9pbnQpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC5nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufSIsIkBtaXhpbiBmbGV4KCRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciwgJGFsaWduLWl0ZW1zOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuIl19 */"] });


/***/ }),

/***/ "ptOw":
/*!*********************************************************!*\
  !*** ./src/app/guards/check-login/check-login.guard.ts ***!
  \*********************************************************/
/*! exports provided: CheckLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckLoginGuard", function() { return CheckLoginGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class CheckLoginGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        return this.authService.isLogged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((isLogged) => {
            if (isLogged)
                this.router.navigate(['/dashboard']);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((isLogged) => !isLogged));
    }
}
CheckLoginGuard.ɵfac = function CheckLoginGuard_Factory(t) { return new (t || CheckLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CheckLoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CheckLoginGuard, factory: CheckLoginGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qTot":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_alerts_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alerts/alert.service */ "Am1z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SignUpComponent_div_6_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignUpComponent_div_6_small_1_Template, 2, 0, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.firstName.errors == null ? null : ctx_r0.firstName.errors.required);
} }
function SignUpComponent_div_9_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Last name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignUpComponent_div_9_small_1_Template, 2, 0, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.lastName.errors == null ? null : ctx_r1.lastName.errors.required);
} }
function SignUpComponent_div_12_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_12_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignUpComponent_div_12_small_1_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignUpComponent_div_12_small_2_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.email.errors == null ? null : ctx_r2.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.email.errors == null ? null : ctx_r2.email.errors.pattern);
} }
function SignUpComponent_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignUpComponent_div_15_small_1_Template, 2, 0, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.password.errors == null ? null : ctx_r3.password.errors.required);
} }
const _c0 = function () { return ["/login"]; };
class SignUpComponent {
    constructor(userService, router, alert) {
        this.userService = userService;
        this.router = router;
        this.alert = alert;
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
        this.displayErrors = false;
    }
    ngOnInit() { }
    onSubmit() {
        this.displayErrors = true;
        if (this.signUpForm &&
            this.signUpForm.valid &&
            this.email &&
            this.password &&
            this.firstName &&
            this.lastName)
            this.userService
                .createUser({
                email: this.email.value,
                password: this.password.value,
                name: `${this.firstName.value} ${this.lastName.value}`,
            })
                .subscribe((_data) => {
                this.alert
                    .success('Your account have been created')
                    .subscribe(() => {
                    this.router.navigateByUrl('login');
                });
            }, (_err) => {
                this.alert.error('Email already in use, try again!');
            });
    }
    get email() {
        return this.signUpForm.get('email');
    }
    get password() {
        return this.signUpForm.get('password');
    }
    get firstName() {
        return this.signUpForm.get('firstName');
    }
    get lastName() {
        return this.signUpForm.get('lastName');
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_alerts_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 21, vars: 7, consts: [[1, "container-full", "bg-forest"], [1, "form", "form-login", 3, "formGroup", "ngSubmit"], [1, "form-control"], ["name", "firstName", "type", "email", "formControlName", "firstName", "placeholder", "First name"], [4, "ngIf"], ["name", "lastName", "type", "email", "formControlName", "lastName", "placeholder", "Last name"], ["name", "email", "type", "email", "formControlName", "email", "placeholder", "Email"], ["name", "password", "type", "password", "formControlName", "password", "placeholder", "Password"], [1, "align-center"], ["type", "submit", 1, "btn", "btn-success", "btn-login"], [3, "routerLink"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Create your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SignUpComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SignUpComponent_div_9_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SignUpComponent_div_12_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SignUpComponent_div_15_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Already have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.firstName && (ctx.firstName.invalid || ctx.firstName.dirty) && ctx.displayErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lastName && (ctx.lastName.invalid || ctx.lastName.dirty) && ctx.displayErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email && (ctx.email.invalid || ctx.email.dirty) && ctx.displayErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.password && (ctx.password.invalid || ctx.password.dirty) && ctx.displayErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "qjQH":
/*!**************************************************!*\
  !*** ./src/app/services/trails/trail.service.ts ***!
  \**************************************************/
/*! exports provided: TrailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailService", function() { return TrailService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "9ans");





class TrailService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.trailUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host + 'trail/';
    }
    /**
     * Get all trails from the users you are following ordered by date. If you don't
     * follow any user it will return an empty array.
     *
     * @returns {Observable<any>}
     */
    getDashboardTrails() {
        return this.http.get(this.trailUrl + this.getDashboardTrails.name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((trails) => trails.sort((a, b) => {
            return +new Date(b.createdAt) - +new Date(a.createdAt);
        })));
    }
    /**
     *  Get all trails from a user. If no userId is provided it will default
     * to the logged user id.
     *
     * @param {number} userId user id
     * @returns {Observable<any>}
     */
    getAllByUserId(userId) {
        if (!userId)
            userId = this.authService.getLoggedUserId();
        return this.http.get(this.trailUrl + this.getAllByUserId.name, {
            headers: {
                userId: `${userId}`,
            },
        });
    }
    /**
     * Get all trails stored in database ordered by date. Older trails will be
     * at the end of the array.
     *
     * @returns {Observable<any>}
     */
    getAllTrails() {
        return this.http.get(this.trailUrl + 'getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((trails) => trails.sort((a, b) => {
            return +new Date(b.createdAt) - +new Date(a.createdAt);
        })));
    }
    /**
     * Get a trail from database by trailId
     *
     * @param id {number}
     * @returns {Observable<any>}
     */
    getOneById(id) {
        const trailId = String(id);
        return this.http.get(this.trailUrl + this.getOneById.name, {
            headers: { id: trailId },
        });
    }
    /**
     * Create a new trail
     *
     * @param trail {Trail}
     * @returns {Observable<any>}
     */
    create(trail) {
        return this.http.post(this.trailUrl + 'create', trail);
    }
    /**
     * Update a trail
     *
     * @param trail {Trail}
     * @returns
     */
    update(trail) {
        return this.http.put(this.trailUrl + 'update', trail, {
            headers: { id: String(trail.trailId) },
        });
    }
    /**
     * Uploads a file to the server.
     *
     * @param file {File}
     * @returns {Observable<any>}
     */
    uploadFile(file) {
        const formData = new FormData();
        formData.append('file0', file);
        return this.http.post(this.trailUrl + 'upload', formData);
    }
    /**
     * Delete a trail
     *
     * @param trailId {number}
     * @returns {Observable<any>}
     */
    delete(trailId) {
        return this.http.delete(this.trailUrl + 'delete', {
            headers: {
                id: String(trailId),
            },
        });
    }
    /**
     * Downloads the trail file
     *
     * @param filepath {string} trail track filepath
     * @returns {Observable<any>}
     */
    download(filepath) {
        return this.http.get(this.trailUrl + 'getTrackFile', { headers: { filepath }, responseType: "blob" });
    }
}
TrailService.ɵfac = function TrailService_Factory(t) { return new (t || TrailService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
TrailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TrailService, factory: TrailService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "s6Pj":
/*!*******************************************************!*\
  !*** ./src/app/services/activity/activity.service.ts ***!
  \*******************************************************/
/*! exports provided: ActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityService", function() { return ActivityService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ActivityService {
    constructor(http) {
        this.http = http;
        this.activityUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].host + "activity/";
    }
    /**
     * Get all activities from database
     *
     * @returns {Observable<any>}
     */
    getAll() {
        return this.http.get(this.activityUrl + "getAll");
    }
}
ActivityService.ɵfac = function ActivityService_Factory(t) { return new (t || ActivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ActivityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActivityService, factory: ActivityService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ "qTot");
/* harmony import */ var _guards_check_login_check_login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/check-login/check-login.guard */ "ptOw");
/* harmony import */ var _guards_logged_logged_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/logged/logged.guard */ "cNMA");
/* harmony import */ var _pages_trails_trails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/trails/trails.component */ "6t8a");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user-profile/user-profile.component */ "G9k0");
/* harmony import */ var _pages_trail_form_trail_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/trail-form/trail-form.component */ "kfrl");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/users/users.component */ "Ag98");
/* harmony import */ var _pages_trail_trail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/trail/trail.component */ "h5Qh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], canActivate: [_guards_check_login_check_login_guard__WEBPACK_IMPORTED_MODULE_4__["CheckLoginGuard"]] },
    {
        path: 'signup',
        component: _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"],
        canActivate: [_guards_check_login_check_login_guard__WEBPACK_IMPORTED_MODULE_4__["CheckLoginGuard"]],
    },
    {
        path: 'dashboard',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        canActivate: [_guards_logged_logged_guard__WEBPACK_IMPORTED_MODULE_5__["LoggedGuard"]],
    },
    { path: 'trails', component: _pages_trails_trails_component__WEBPACK_IMPORTED_MODULE_6__["TrailsComponent"], canActivate: [_guards_logged_logged_guard__WEBPACK_IMPORTED_MODULE_5__["LoggedGuard"]] },
    { path: 'trail/create', component: _pages_trail_form_trail_form_component__WEBPACK_IMPORTED_MODULE_8__["TrailFormComponent"], canActivate: [_guards_logged_logged_guard__WEBPACK_IMPORTED_MODULE_5__["LoggedGuard"]] },
    { path: 'trail/edit/:trailId', component: _pages_trail_form_trail_form_component__WEBPACK_IMPORTED_MODULE_8__["TrailFormComponent"], canActivate: [_guards_logged_logged_guard__WEBPACK_IMPORTED_MODULE_5__["LoggedGuard"]] },
    { path: 'trail/:trailId', component: _pages_trail_trail_component__WEBPACK_IMPORTED_MODULE_10__["TrailComponent"], canActivate: [_guards_logged_logged_guard__WEBPACK_IMPORTED_MODULE_5__["LoggedGuard"]] },
    {
        path: 'profile/:userId',
        component: _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"],
        canActivate: [_guards_logged_logged_guard__WEBPACK_IMPORTED_MODULE_5__["LoggedGuard"]],
    },
    { path: 'users', component: _pages_users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"], canActivate: [_guards_logged_logged_guard__WEBPACK_IMPORTED_MODULE_5__["LoggedGuard"]] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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