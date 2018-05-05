webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  This is a website developed by a semi-beginner programmer for my fellow beginners!\n</p>\n\n<p>\n  The purpose of this website is to allow people of all levels - from complete beginners learning how to use if/else statements\n  - to intermediates learning to use different frameworks of their choosing, to ask, whine, and share their experiences as\n  they are learning to program.\n</p>\n<p>\n\n  In short, this is a place of learning. no one will tell you your question is too stupid, or that it doesn't belong. Here\n  you can ask anything you like, and the rest of us will try to help you much as we can.\n</p>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__("./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<bs-navbar></bs-navbar>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_title_case_pipe__ = __webpack_require__("./src/app/pipes/title-case.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_article_service__ = __webpack_require__("./src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forum_forum_component__ = __webpack_require__("./src/app/forum/forum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bs_navbar_bs_navbar_component__ = __webpack_require__("./src/app/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__forums_portal_forums_portal_component__ = __webpack_require__("./src/app/forums-portal/forums-portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_forum_service__ = __webpack_require__("./src/app/services/forum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__forum_list_forum_list_component__ = __webpack_require__("./src/app/forum-list/forum-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__forum_categories_forum_categories_component__ = __webpack_require__("./src/app/forum-categories/forum-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__zippy_zippy_component__ = __webpack_require__("./src/app/zippy/zippy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__forum_article_forum_article_component__ = __webpack_require__("./src/app/forum-article/forum-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__comment_list_comment_list_component__ = __webpack_require__("./src/app/comment-list/comment-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_comment_service__ = __webpack_require__("./src/app/services/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: "about", component: __WEBPACK_IMPORTED_MODULE_3__about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: "forums/:id", component: __WEBPACK_IMPORTED_MODULE_2__forum_forum_component__["a" /* ForumComponent */] },
    { path: "article/:id", component: __WEBPACK_IMPORTED_MODULE_18__forum_article_forum_article_component__["a" /* ForumArticleComponent */] },
    { path: "forums", component: __WEBPACK_IMPORTED_MODULE_13__forums_portal_forums_portal_component__["a" /* ForumsPortalComponent */] },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__bs_navbar_bs_navbar_component__["a" /* BsNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_2__forum_forum_component__["a" /* ForumComponent */],
                __WEBPACK_IMPORTED_MODULE_13__forums_portal_forums_portal_component__["a" /* ForumsPortalComponent */],
                __WEBPACK_IMPORTED_MODULE_15__forum_list_forum_list_component__["a" /* ForumListComponent */],
                __WEBPACK_IMPORTED_MODULE_0__pipes_title_case_pipe__["a" /* TitleCasePipe */],
                __WEBPACK_IMPORTED_MODULE_16__forum_categories_forum_categories_component__["a" /* ForumCategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__zippy_zippy_component__["a" /* ZippyComponent */],
                __WEBPACK_IMPORTED_MODULE_18__forum_article_forum_article_component__["a" /* ForumArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_19__comment_list_comment_list_component__["a" /* CommentListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* HashLocationStrategy */] },
                __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_14__services_forum_service__["a" /* ForumService */], __WEBPACK_IMPORTED_MODULE_20__services_comment_service__["a" /* CommentService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n  <a class=\"navbar-brand\" routerLink='/'>Home</a>\n\n\n  <div class=\"collapse navbar-collapse\" id=\"bsnavbar\">\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link pointer\" routerLink=\"/forums\">Forums</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link pointer\" routerLink=\"/about\">About Us</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BsNavbarComponent = /** @class */ (function () {
    function BsNavbarComponent() {
    }
    BsNavbarComponent.prototype.ngOnInit = function () {
    };
    BsNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'bs-navbar',
            template: __webpack_require__("./src/app/bs-navbar/bs-navbar.component.html"),
            styles: [__webpack_require__("./src/app/bs-navbar/bs-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BsNavbarComponent);
    return BsNavbarComponent;
}());



/***/ }),

/***/ "./src/app/comment-list/comment-list.component.css":
/***/ (function(module, exports) {

module.exports = ".first{\r\n    margin-bottom: 20px;\r\n    padding-bottom: 20px;\r\n    border: white;\r\n    border-width: 0.5px;\r\n    border-bottom: black solid;\r\n}"

/***/ }),

/***/ "./src/app/comment-list/comment-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li *ngFor=\"let comment of comments; first as f\" class=\"list-group-item\" [class.first]=\"f\">\n    <div>\n      {{comment.body}}\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/comment-list/comment-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_comment_service__ = __webpack_require__("./src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentListComponent = /** @class */ (function () {
    function CommentListComponent(commentService) {
        this.commentService = commentService;
    }
    CommentListComponent.prototype.getComments = function () {
        var _this = this;
        this.commentService.getByArticle(this.id).subscribe(function (comments) {
            _this.comments = comments;
        });
    };
    CommentListComponent.prototype.ngOnInit = function () {
        this.getComments();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])("id"),
        __metadata("design:type", Number)
    ], CommentListComponent.prototype, "id", void 0);
    CommentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'comment-list',
            template: __webpack_require__("./src/app/comment-list/comment-list.component.html"),
            styles: [__webpack_require__("./src/app/comment-list/comment-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_comment_service__["a" /* CommentService */]])
    ], CommentListComponent);
    return CommentListComponent;
}());



/***/ }),

/***/ "./src/app/forum-article/forum-article.component.css":
/***/ (function(module, exports) {

module.exports = ".forumArticle {\r\n    border: black solid;\r\n    padding: 30px;\r\n    border-width: 1px;\r\n}\r\n.first{\r\n    margin-bottom: 20px;\r\n    border: black solid;\r\n    border-bottom: 1px;\r\n}"

/***/ }),

/***/ "./src/app/forum-article/forum-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"article\" class=\"forumArticle container\">\n  <h1>\n    {{article.subject}}\n  </h1>\n  <comment-list [id]=\"id\"></comment-list>\n  <form>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #message maxlength=\"256\" placeholder=\"Message\">\n      <mat-hint align=\"start\">\n        <strong>Join the discussion now</strong>\n      </mat-hint>\n      <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n    </mat-form-field>\n    <button class=\"btn btn-primary\">\n      Comment\n    </button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/forum-article/forum-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_article_service__ = __webpack_require__("./src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForumArticleComponent = /** @class */ (function () {
    function ForumArticleComponent(articleService, route) {
        this.articleService = articleService;
        this.route = route;
    }
    ForumArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.articleService.get(this.id).subscribe(function (r) {
            console.log(r);
            _this.article = r;
            _this.articleBody = _this.article.comments[0];
        });
    };
    ForumArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-forum-article',
            template: __webpack_require__("./src/app/forum-article/forum-article.component.html"),
            styles: [__webpack_require__("./src/app/forum-article/forum-article.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], ForumArticleComponent);
    return ForumArticleComponent;
}());



/***/ }),

/***/ "./src/app/forum-categories/forum-categories.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forum-categories/forum-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<ul *ngFor=\"let category of categories\" class=\"list-group\">\n  <li class=\"list-group-item pointer\">\n    <zippy [title]=\"category | titleCase\">\n      <forum-list categories=\"categories\" [category]=\"category\"></forum-list>\n    </zippy>\n\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/forum-categories/forum-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_forum_service__ = __webpack_require__("./src/app/services/forum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForumCategoriesComponent = /** @class */ (function () {
    function ForumCategoriesComponent(forumService) {
        this.forumService = forumService;
    }
    ForumCategoriesComponent.prototype.getForumCategories = function () {
        var _this = this;
        this.forumService.getCategories().subscribe(function (r) {
            _this.categories = r;
        });
    };
    ForumCategoriesComponent.prototype.ngOnInit = function () {
        this.getForumCategories();
    };
    ForumCategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'forum-categories',
            template: __webpack_require__("./src/app/forum-categories/forum-categories.component.html"),
            styles: [__webpack_require__("./src/app/forum-categories/forum-categories.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_forum_service__["a" /* ForumService */]])
    ], ForumCategoriesComponent);
    return ForumCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/forum-list/forum-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forum-list/forum-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor='let forum of forums'>\n  <a [routerLink]=\"['/forums/', forum.id]\"> {{forum.name}}</a>\n</div>"

/***/ }),

/***/ "./src/app/forum-list/forum-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_QueryInfo__ = __webpack_require__("./src/app/models/QueryInfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_forum_service__ = __webpack_require__("./src/app/services/forum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_OrderBy__ = __webpack_require__("./src/app/models/OrderBy.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForumListComponent = /** @class */ (function () {
    function ForumListComponent(forumService) {
        this.forumService = forumService;
    }
    ForumListComponent.prototype.getAllForums = function () {
        var _this = this;
        this.forumService.getAll(this.queryInfo).subscribe(function (r) {
            _this.forums = r;
        });
    };
    ForumListComponent.prototype.getForumByCategory = function () {
        var _this = this;
        this.forumService.getByCategory(this.category).subscribe(function (r) {
            _this.forums = r;
        });
    };
    ForumListComponent.prototype.ngOnInit = function () {
        this.queryInfo = new __WEBPACK_IMPORTED_MODULE_0__models_QueryInfo__["a" /* QueryInfo */](0, 2, __WEBPACK_IMPORTED_MODULE_3__models_OrderBy__["a" /* OrderBy */].ASC);
        this.getForumByCategory();
        console.log(this.forums);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* Input */])('categories'),
        __metadata("design:type", Object)
    ], ForumListComponent.prototype, "categories", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* Input */])('category'),
        __metadata("design:type", Object)
    ], ForumListComponent.prototype, "category", void 0);
    ForumListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'forum-list',
            template: __webpack_require__("./src/app/forum-list/forum-list.component.html"),
            styles: [__webpack_require__("./src/app/forum-list/forum-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_forum_service__["a" /* ForumService */]])
    ], ForumListComponent);
    return ForumListComponent;
}());



/***/ }),

/***/ "./src/app/forum/forum.component.css":
/***/ (function(module, exports) {

module.exports = ".odd{\r\n    background-color: #eeeeee;\r\n}"

/***/ }),

/***/ "./src/app/forum/forum.component.html":
/***/ (function(module, exports) {

module.exports = "<ul *ngFor=\"let a of articles; odd as o\" class=\"list-group\">\n  <li class=\"list-group-item pointer\" [class.odd]=\"o\">\n    <a [routerLink]=\"['/article/', a.id]\">\n      {{a.subject}}\n    </a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/forum/forum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_article_service__ = __webpack_require__("./src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForumComponent = /** @class */ (function () {
    function ForumComponent(articleService, route) {
        this.articleService = articleService;
        this.route = route;
    }
    ForumComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getArticles();
    };
    ForumComponent.prototype.getArticles = function () {
        var _this = this;
        this.articleService.getAllByForum(this.id).subscribe(function (r) {
            _this.articles = r;
        });
    };
    ForumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-forum',
            template: __webpack_require__("./src/app/forum/forum.component.html"),
            styles: [__webpack_require__("./src/app/forum/forum.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_article_service__["a" /* ArticleService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/forums-portal/forums-portal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forums-portal/forums-portal.component.html":
/***/ (function(module, exports) {

module.exports = "<forum-categories></forum-categories>"

/***/ }),

/***/ "./src/app/forums-portal/forums-portal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumsPortalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_forum_service__ = __webpack_require__("./src/app/services/forum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForumsPortalComponent = /** @class */ (function () {
    function ForumsPortalComponent(forumService) {
        this.forumService = forumService;
    }
    ForumsPortalComponent.prototype.ngOnInit = function () {
    };
    ForumsPortalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-forums-portal',
            template: __webpack_require__("./src/app/forums-portal/forums-portal.component.html"),
            styles: [__webpack_require__("./src/app/forums-portal/forums-portal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_forum_service__["a" /* ForumService */]])
    ], ForumsPortalComponent);
    return ForumsPortalComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/OrderBy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderBy; });
var OrderBy;
(function (OrderBy) {
    OrderBy[OrderBy["DESC"] = 0] = "DESC";
    OrderBy[OrderBy["ASC"] = 1] = "ASC";
})(OrderBy || (OrderBy = {}));


/***/ }),

/***/ "./src/app/models/QueryInfo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryInfo; });
var QueryInfo = /** @class */ (function () {
    function QueryInfo(_page, _size, _orderBy) {
        this._page = _page;
        this._size = _size;
        this._orderBy = _orderBy;
    }
    Object.defineProperty(QueryInfo.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (page) {
            this._page = page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryInfo.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (size) {
            this._size = size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryInfo.prototype, "orderBy", {
        get: function () {
            return this._orderBy;
        },
        set: function (orderBy) {
            this._orderBy = orderBy;
        },
        enumerable: true,
        configurable: true
    });
    return QueryInfo;
}());



/***/ }),

/***/ "./src/app/pipes/title-case.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleCasePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TitleCasePipe = /** @class */ (function () {
    function TitleCasePipe() {
    }
    TitleCasePipe.prototype.transform = function (value) {
        if (!value)
            return null;
        var words = value.split(' ');
        for (var i = 0; i < words.length; i++) {
            if (i > 0 && this.isAPreposition(words[i]))
                words[i] = words[i].toLowerCase();
            else {
                words[i] = this.toTitleCase(words[i]);
            }
        }
        return words.join(' ');
    };
    TitleCasePipe.prototype.toTitleCase = function (word) {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    };
    TitleCasePipe.prototype.isAPreposition = function (word) {
        var prepositions = [
            'of', 'the', 'on', 'at', 'in', 'with', 'to', 'as', 'or', 'like'
        ];
        if (prepositions.includes(word))
            return true;
        else
            return false;
    };
    TitleCasePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'titleCase'
        })
    ], TitleCasePipe);
    return TitleCasePipe;
}());



/***/ }),

/***/ "./src/app/services/article.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleService = /** @class */ (function () {
    function ArticleService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/articles';
    }
    ArticleService.prototype.get = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    ArticleService.prototype.getAll = function () {
    };
    ArticleService.prototype.getAllByForum = function (id) {
        return this.http.get(this.url + "/byForum/" + id);
    };
    ArticleService.prototype.create = function (article) {
    };
    ArticleService.prototype.update = function (article) {
    };
    ArticleService.prototype.delete = function (id) {
    };
    ArticleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/app/services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/comments';
    }
    CommentService.prototype.getByArticle = function (id) {
        console.log(id);
        return this.http.get(this.url + '/' + id);
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/services/forum.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForumService = /** @class */ (function () {
    function ForumService(http) {
        this.http = http;
        this.url = "http://localhost:8080/forums";
    }
    ForumService.prototype.setParams = function (info) {
        var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
        Params = Params.append('page', info.page + '');
        Params = Params.append('size', info.size + '');
        return Params;
    };
    ForumService.prototype.get = function (id) {
    };
    ForumService.prototype.getAll = function (queryInfo) {
        var Params = this.setParams(queryInfo);
        return this.http.get(this.url, { params: Params });
    };
    ForumService.prototype.getCategories = function () {
        return this.http.get(this.url + "/categories");
    };
    ForumService.prototype.getByCategory = function (category) {
        return this.http.get(this.url + "/" + category);
    };
    ForumService.prototype.create = function (article) {
    };
    ForumService.prototype.update = function (article) {
    };
    ForumService.prototype.delete = function (id) {
    };
    ForumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ForumService);
    return ForumService;
}());



/***/ }),

/***/ "./src/app/zippy/zippy.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/zippy/zippy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"zippy\">\n  <div [class.expanded]=\"isExpanded\" (click)=\"isExpanded=!isExpanded\" class=\"zippy-heading\">\n    {{title}}\n    <span class=\"glyphicon\" [ngClass]=\"{\n    'glyphicon-chevron-up ' :  isExpanded,\n    ' glyphicon-chevron-down' : !isExpanded\n   }\"></span>\n  </div>\n  <div *ngIf=\"isExpanded\" class=\"zippy-body\">\n    <ng-content></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/zippy/zippy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZippyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZippyComponent = /** @class */ (function () {
    function ZippyComponent() {
    }
    ZippyComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('title'),
        __metadata("design:type", String)
    ], ZippyComponent.prototype, "title", void 0);
    ZippyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zippy',
            template: __webpack_require__("./src/app/zippy/zippy.component.html"),
            styles: [__webpack_require__("./src/app/zippy/zippy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ZippyComponent);
    return ZippyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map