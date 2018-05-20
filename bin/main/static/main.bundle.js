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

/***/ "./src/app/Article_Page/comment-form/comment-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Article_Page/comment-form/comment-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #f=\"ngForm\" (ngSubmit)=\"postComment(f)\">\n    <div class=\"form-group\">\n\n      <!--\n      <mat-form-field class=\"example-full-width\">\n        <input matInput #body=\"ngModel\" maxlength=\"256\" ngModel name=\"body\" id=\"body\" class=\"form-control\" placeholder=\"Comment body..\">\n        <mat-hint align=\"start\">\n          <strong>Join the discussion now</strong>\n        </mat-hint>\n        <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n      </mat-form-field>\n    -->\n      <input #body=\"ngModel\" ngModel name=\"body\" id=\"body\" type=\"text\" class=\"form-control\">\n\n      <button class=\"btn btn-primary\">\n        Comment\n      </button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/Article_Page/comment-form/comment-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentFormComponent; });
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


var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent(commentService) {
        this.commentService = commentService;
        this.commentAdded = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
    }
    CommentFormComponent.prototype.postComment = function (form) {
        var _this = this;
        var comment = form.value;
        console.log(form);
        comment.articleId = this.articleId;
        comment.first = false;
        comment.id = null;
        var newComment = this.commentService
            .post(comment).subscribe(function (response) {
            console.log(response);
            _this.newComment = response;
        }, function (error) { return console.log(error); }, function () {
            _this.commentAdded.emit(_this.newComment);
        });
    };
    CommentFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('articleId'),
        __metadata("design:type", Number)
    ], CommentFormComponent.prototype, "articleId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Output */])('commentAdded'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */])
    ], CommentFormComponent.prototype, "commentAdded", void 0);
    CommentFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'comment-form',
            template: __webpack_require__("./src/app/Article_Page/comment-form/comment-form.component.html"),
            styles: [__webpack_require__("./src/app/Article_Page/comment-form/comment-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_comment_service__["a" /* CommentService */]])
    ], CommentFormComponent);
    return CommentFormComponent;
}());



/***/ }),

/***/ "./src/app/Article_Page/comment-list/comment-list.component.css":
/***/ (function(module, exports) {

module.exports = ".first{\r\n    margin-bottom: 20px;\r\n    padding-bottom: 20px;\r\n    border: white;\r\n    border-width: 0.5px;\r\n    border-bottom: black solid;\r\n}"

/***/ }),

/***/ "./src/app/Article_Page/comment-list/comment-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li *ngFor=\"let comment of comments; first as f\" class=\"list-group-item\" [class.first]=\"f\">\n    <div>\n      {{comment.body}}, {{comment.authorId}}\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/Article_Page/comment-list/comment-list.component.ts":
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
    CommentListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.newComment.currentValue) {
            if (!changes.newComment.previousValue) {
                this.comments.push(changes.newComment.currentValue);
            }
            else if (changes.newComment.currentValue.id != changes.newComment.previousValue.id) {
                this.comments.push(changes.newComment.currentValue);
            }
        }
    };
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('newComment'),
        __metadata("design:type", Object)
    ], CommentListComponent.prototype, "newComment", void 0);
    CommentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'comment-list',
            template: __webpack_require__("./src/app/Article_Page/comment-list/comment-list.component.html"),
            styles: [__webpack_require__("./src/app/Article_Page/comment-list/comment-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_comment_service__["a" /* CommentService */]])
    ], CommentListComponent);
    return CommentListComponent;
}());



/***/ }),

/***/ "./src/app/Article_Page/forum-article/forum-article.component.css":
/***/ (function(module, exports) {

module.exports = ".forumArticle {\r\n    border: black solid;\r\n    padding: 30px;\r\n    border-width: 1px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Article_Page/forum-article/forum-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"article\" class=\"forumArticle container\">\n  <h1>\n    {{article.subject}}\n  </h1>\n  <comment-list [newComment]=\"newComment\" [id]=\"id\"></comment-list>\n  <comment-form (commentAdded)=\"newCommentHandler($event)\" [articleId]=\"article.id\"></comment-form>\n</div>"

/***/ }),

/***/ "./src/app/Article_Page/forum-article/forum-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_comment_service__ = __webpack_require__("./src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_article_service__ = __webpack_require__("./src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function ForumArticleComponent(articleService, commentService, route) {
        this.articleService = articleService;
        this.commentService = commentService;
        this.route = route;
    }
    ForumArticleComponent.prototype.newCommentHandler = function (comment) {
        console.log("from forum article", comment);
        this.newComment = comment;
    };
    ForumArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.articleService.get(this.id).subscribe(function (r) {
            _this.article = r;
            _this.articleBody = _this.article.comments[0];
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["E" /* Input */])('newComment'),
        __metadata("design:type", Object)
    ], ForumArticleComponent.prototype, "newComment", void 0);
    ForumArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-forum-article',
            template: __webpack_require__("./src/app/Article_Page/forum-article/forum-article.component.html"),
            styles: [__webpack_require__("./src/app/Article_Page/forum-article/forum-article.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_article_service__["a" /* ArticleService */],
            __WEBPACK_IMPORTED_MODULE_0__services_comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ForumArticleComponent);
    return ForumArticleComponent;
}());



/***/ }),

/***/ "./src/app/Blog_Section/blog-portal/blog-portal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Blog_Section/blog-portal/blog-portal.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  blog-portal works!\n</p>\n"

/***/ }),

/***/ "./src/app/Blog_Section/blog-portal/blog-portal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPortalComponent; });
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

var BlogPortalComponent = /** @class */ (function () {
    function BlogPortalComponent() {
    }
    BlogPortalComponent.prototype.ngOnInit = function () {
    };
    BlogPortalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blog-portal',
            template: __webpack_require__("./src/app/Blog_Section/blog-portal/blog-portal.component.html"),
            styles: [__webpack_require__("./src/app/Blog_Section/blog-portal/blog-portal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogPortalComponent);
    return BlogPortalComponent;
}());



/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  This is a website developed by a semi-beginner programmer for my fellow beginners!\n</p>\n\n<p>\n  The purpose of this website is to allow people of all levels - from complete beginners learning how to use if/else statements\n  - to intermediates learning to use different frameworks of their choosing, to ask, whine, and share their experiences as\n  they are learning to program.\n</p>"

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

module.exports = "<bs-navbar [user]=\"user\" (out)=\"logout()\"></bs-navbar>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, storage) {
        var _this = this;
        this.authService = authService;
        this.storage = storage;
        authService.authEmitter.subscribe(function (event) {
            _this.user = event;
            storage.storeUser(event);
        });
        this.user = storage.getUser();
    }
    AppComponent.prototype.logout = function () {
        console.log("logout event reached appcomponent");
        this.storage.deleteUser();
        this.user = null;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_title_case_pipe__ = __webpack_require__("./src/app/pipes/title-case.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_article_service__ = __webpack_require__("./src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forum_forum_component__ = __webpack_require__("./src/app/forum/forum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bs_navbar_bs_navbar_component__ = __webpack_require__("./src/app/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__forums_portal_forums_portal_component__ = __webpack_require__("./src/app/forums-portal/forums-portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_forum_service__ = __webpack_require__("./src/app/services/forum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__forum_list_forum_list_component__ = __webpack_require__("./src/app/forum-list/forum-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__forum_categories_forum_categories_component__ = __webpack_require__("./src/app/forum-categories/forum-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__zippy_zippy_component__ = __webpack_require__("./src/app/zippy/zippy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Article_Page_forum_article_forum_article_component__ = __webpack_require__("./src/app/Article_Page/forum-article/forum-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Article_Page_comment_list_comment_list_component__ = __webpack_require__("./src/app/Article_Page/comment-list/comment-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_comment_service__ = __webpack_require__("./src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Article_Page_comment_form_comment_form_component__ = __webpack_require__("./src/app/Article_Page/comment-form/comment-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__login_redirect_login_redirect_component__ = __webpack_require__("./src/app/login-redirect/login-redirect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Blog_Section_blog_portal_blog_portal_component__ = __webpack_require__("./src/app/Blog_Section/blog-portal/blog-portal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var routes = [
    { path: "about", component: __WEBPACK_IMPORTED_MODULE_6__about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: "blogs", component: __WEBPACK_IMPORTED_MODULE_29__Blog_Section_blog_portal_blog_portal_component__["a" /* BlogPortalComponent */] },
    { path: "login/success/:id", component: __WEBPACK_IMPORTED_MODULE_28__login_redirect_login_redirect_component__["a" /* LoginRedirectComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_24__login_login_component__["a" /* LoginComponent */] },
    { path: "forums/:id", component: __WEBPACK_IMPORTED_MODULE_5__forum_forum_component__["a" /* ForumComponent */] },
    { path: "article/:id", component: __WEBPACK_IMPORTED_MODULE_21__Article_Page_forum_article_forum_article_component__["a" /* ForumArticleComponent */] },
    { path: "forums", component: __WEBPACK_IMPORTED_MODULE_16__forums_portal_forums_portal_component__["a" /* ForumsPortalComponent */] },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__bs_navbar_bs_navbar_component__["a" /* BsNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__forum_forum_component__["a" /* ForumComponent */],
                __WEBPACK_IMPORTED_MODULE_16__forums_portal_forums_portal_component__["a" /* ForumsPortalComponent */],
                __WEBPACK_IMPORTED_MODULE_18__forum_list_forum_list_component__["a" /* ForumListComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_title_case_pipe__["a" /* TitleCasePipe */],
                __WEBPACK_IMPORTED_MODULE_19__forum_categories_forum_categories_component__["a" /* ForumCategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__zippy_zippy_component__["a" /* ZippyComponent */],
                __WEBPACK_IMPORTED_MODULE_21__Article_Page_forum_article_forum_article_component__["a" /* ForumArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_22__Article_Page_comment_list_comment_list_component__["a" /* CommentListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_27__Article_Page_comment_form_comment_form_component__["a" /* CommentFormComponent */],
                __WEBPACK_IMPORTED_MODULE_28__login_redirect_login_redirect_component__["a" /* LoginRedirectComponent */],
                __WEBPACK_IMPORTED_MODULE_29__Blog_Section_blog_portal_blog_portal_component__["a" /* BlogPortalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_25__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_25__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_13__angular_common__["i" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_13__angular_common__["f" /* HashLocationStrategy */] },
                __WEBPACK_IMPORTED_MODULE_4__services_article_service__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_17__services_forum_service__["a" /* ForumService */],
                __WEBPACK_IMPORTED_MODULE_23__services_comment_service__["a" /* CommentService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_1__services_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
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

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" routerLink='/'>Home</a>\n\n\n  <div class=\"collapse navbar-collapse\" id=\"bsnavbar\">\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link pointer\" routerLink=\"/forums\">Forums</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link pointer\" routerLink=\"/blogs\">Blogs</a>\n      </li>\n      <li *ngIf=\"!user\" class=\"nav-item\">\n        <a class=\"nav-link pointer\" routerLink=\"/login\">Log In</a>\n      </li>\n      <li *ngIf=\"user; else anonymousUser\" ngbDropdown class=\"nav-item dropdown\">\n        <a ngbDropdownToggle class=\"nav-link dropdown-toggle pointer\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">{{ user.username }}</a>\n        <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n          <a class=\"dropdown-item\" routerLink=\"/my/posts\">My Posts</a>\n          <a class=\"dropdown-item\" routerLink=\"/my/profile\">Profile</a>\n          <a class=\"dropdown-item\" routerLink=\"/my/settings\">Privacy Settings</a>\n          <ng-container *ngIf=\"user.role === admin\">\n            <a class=\"dropdown-item\" routerLink=\"/my/settings\">Manage Users</a>\n          </ng-container>\n          <a class=\"dropdown-item\" (click)=\"logout()\">Log Out</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link pointer\" routerLink=\"/about\">About Us</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

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
        this.out = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    BsNavbarComponent.prototype.logout = function () {
        console.log("emitting logout event");
        this.out.emit();
    };
    BsNavbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('user'),
        __metadata("design:type", Object)
    ], BsNavbarComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])('out'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], BsNavbarComponent.prototype, "out", void 0);
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

/***/ "./src/app/login-redirect/login-redirect.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-redirect/login-redirect.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login-redirect works!\n</p>\n"

/***/ }),

/***/ "./src/app/login-redirect/login-redirect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRedirectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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


var LoginRedirectComponent = /** @class */ (function () {
    function LoginRedirectComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    LoginRedirectComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.redirectToHome();
    };
    LoginRedirectComponent.prototype.redirectToHome = function () {
        this.router.navigate(["/"]);
    };
    LoginRedirectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login-redirect',
            template: __webpack_require__("./src/app/login-redirect/login-redirect.component.html"),
            styles: [__webpack_require__("./src/app/login-redirect/login-redirect.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], LoginRedirectComponent);
    return LoginRedirectComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"login(f.value)\">\n  <div class=\"container col-md-6 form-group\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <label for=\"username\">Email</label>\n        <br>\n        <input placeholder=\"*Email\" id=\"email\" #email=\"ngModel\" ngModel name=\"email\" class=\"form-control\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <label>Password </label>\n        <br>\n        <input type=\"password\" placeholder=\"*Password\" ngModel name=\"password\" #password=\"ngModel\" class=\"form-control\"> </div>\n    </div>\n    <br>\n    <button class=\"btn btn-primary\">Log In\n    </button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, auth) {
        this.userService = userService;
        this.router = router;
        this.auth = auth;
    }
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        var data = this.userService.login(user).subscribe(function (data) {
            console.log("FROM LOGIN COMPONENT USER AUTH DATA: ", data);
            _this.user = data;
        }, function (error) { return console.log(error); }, function () {
            _this.auth.loginEvent(_this.user);
            _this.redirectToSuccesfulLogin(_this.user.id);
        });
        //user$.subscribe(user => {
        // this.user = user;
        // this.userService.storeUser(user.id);
        //}, null, () => {
        // console.log(this.user)
        // })
    };
    LoginComponent.prototype.redirectToSuccesfulLogin = function (id) {
        this.router.navigate(['/login/success/', id]);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());

/*
.subscribe(u => {
        let authData: ClientAuthData;
        //this.auth.loginEvent(u);
        authData.id = u.id;
        authData.role = u.role;
        console.log("User: " + user, " Authdata " + authData)
        console.log("from login method in user service", authData)
        return authData;
      })
      */ 


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

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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

var AuthService = /** @class */ (function () {
    function AuthService() {
        this.authEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    AuthService.prototype.loginEvent = function (user) {
        this.authEmitter.emit(user);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
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
    function CommentService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = 'http://localhost:8080/comments';
    }
    CommentService.prototype.getByArticle = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    CommentService.prototype.post = function (comment) {
        comment.authorId = this.storage.getUser().id;
        return this.http.post(this.url, comment);
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]])
    ], CommentService);
    return CommentService;
}());

/*
Service.createForum()

authorizationmanager.checkPermission(User, CREATEFORUM)->

permissions = user.getPermissions();

array.forEach(permission => {
  if(permission==DesignatedPermission)
  return true;
});
else return false;
*/ 


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
    ForumService.prototype.setPageParams = function (info) {
        var Params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
        Params = Params.append('page', String(info.page));
        Params = Params.append('size', String(info.size));
        return Params;
    };
    ForumService.prototype.get = function (id) {
    };
    ForumService.prototype.getAll = function (queryInfo) {
        var Params = this.setPageParams(queryInfo);
        return this.http.get(this.url, { params: Params });
    };
    ForumService.prototype.getCategories = function () {
        return this.http.get(this.url + "/categories");
    };
    ForumService.prototype.getByCategory = function (category) {
        return this.http.get(this.url + "/" + category);
    };
    ForumService.prototype.create = function (forum) {
    };
    ForumService.prototype.update = function (forum) {
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

/***/ "./src/app/services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
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

var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.storeUser = function (user) {
        sessionStorage.setItem("user", JSON.stringify(user));
    };
    StorageService.prototype.getUser = function () {
        return JSON.parse(sessionStorage.getItem("user"));
    };
    StorageService.prototype.deleteUser = function () {
        sessionStorage.removeItem("user");
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http, storage, auth) {
        this.http = http;
        this.storage = storage;
        this.auth = auth;
        this.url = "http://localhost:8080/users";
    }
    UserService.prototype.login = function (user) {
        return this.http.get(this.url + "/login/" + user.email + "/" + user.password);
    };
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    UserService.prototype.storeUser = function (id) {
        var user = this.getUserById(id);
        console.log(user);
        user.subscribe(function (u) { return console.log(u); });
        //this.userId = id;
        //this.storage.storeUser(id);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]])
    ], UserService);
    return UserService;
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