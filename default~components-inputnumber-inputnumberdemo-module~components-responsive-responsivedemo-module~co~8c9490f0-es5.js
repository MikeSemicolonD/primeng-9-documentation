function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-inputnumber-inputnumberdemo-module~components-responsive-responsivedemo-module~co~8c9490f0"], {
  /***/
  "./src/app/components/tree/public_api.ts":
  /*!***********************************************!*\
    !*** ./src/app/components/tree/public_api.ts ***!
    \***********************************************/

  /*! exports provided: UITreeNode, Tree, TreeModule */

  /***/
  function _src_app_components_tree_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tree */
    "./src/app/components/tree/tree.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UITreeNode", function () {
      return _tree__WEBPACK_IMPORTED_MODULE_0__["UITreeNode"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Tree", function () {
      return _tree__WEBPACK_IMPORTED_MODULE_0__["Tree"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TreeModule", function () {
      return _tree__WEBPACK_IMPORTED_MODULE_0__["TreeModule"];
    });
    /***/

  },

  /***/
  "./src/app/components/tree/tree.ts":
  /*!*****************************************!*\
    !*** ./src/app/components/tree/tree.ts ***!
    \*****************************************/

  /*! exports provided: UITreeNode, Tree, TreeModule */

  /***/
  function _src_app_components_tree_treeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UITreeNode", function () {
      return UITreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tree", function () {
      return Tree;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeModule", function () {
      return TreeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");
    /* harmony import */


    var primeng_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/utils */
    "./src/app/components/utils/public_api.ts");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/dom */
    "./src/app/components/dom/public_api.ts");

    var UITreeNode_1;

    var UITreeNode = UITreeNode_1 = /*#__PURE__*/function () {
      function UITreeNode(tree) {
        _classCallCheck(this, UITreeNode);

        this.tree = tree;
      }

      return _createClass(UITreeNode, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.node.parent = this.parentNode;

          if (this.parentNode) {
            this.tree.syncNodeOption(this.node, this.tree.value, 'parent', this.tree.getNodeWithKey(this.parentNode.key, this.tree.value));
          }
        }
      }, {
        key: "getIcon",
        value: function getIcon() {
          var icon;
          if (this.node.icon) icon = this.node.icon;else icon = this.node.expanded && this.node.children && this.node.children.length ? this.node.expandedIcon : this.node.collapsedIcon;
          return UITreeNode_1.ICON_CLASS + ' ' + icon;
        }
      }, {
        key: "isLeaf",
        value: function isLeaf() {
          return this.tree.isNodeLeaf(this.node);
        }
      }, {
        key: "toggle",
        value: function toggle(event) {
          if (this.node.expanded) this.collapse(event);else this.expand(event);
        }
      }, {
        key: "expand",
        value: function expand(event) {
          this.node.expanded = true;

          if (this.tree.virtualScroll) {
            this.tree.updateSerializedValue();
          }

          this.tree.onNodeExpand.emit({
            originalEvent: event,
            node: this.node
          });
        }
      }, {
        key: "collapse",
        value: function collapse(event) {
          this.node.expanded = false;

          if (this.tree.virtualScroll) {
            this.tree.updateSerializedValue();
          }

          this.tree.onNodeCollapse.emit({
            originalEvent: event,
            node: this.node
          });
        }
      }, {
        key: "onNodeClick",
        value: function onNodeClick(event) {
          this.tree.onNodeClick(event, this.node);
        }
      }, {
        key: "onNodeKeydown",
        value: function onNodeKeydown(event) {
          if (event.which === 13) {
            this.tree.onNodeClick(event, this.node);
          }
        }
      }, {
        key: "onNodeTouchEnd",
        value: function onNodeTouchEnd() {
          this.tree.onNodeTouchEnd();
        }
      }, {
        key: "onNodeRightClick",
        value: function onNodeRightClick(event) {
          this.tree.onNodeRightClick(event, this.node);
        }
      }, {
        key: "isSelected",
        value: function isSelected() {
          return this.tree.isSelected(this.node);
        }
      }, {
        key: "onDropPoint",
        value: function onDropPoint(event, position) {
          var _this = this;

          event.preventDefault();
          var dragNode = this.tree.dragNode;
          var dragNodeIndex = this.tree.dragNodeIndex;
          var dragNodeScope = this.tree.dragNodeScope;
          var isValidDropPointIndex = this.tree.dragNodeTree === this.tree ? position === 1 || dragNodeIndex !== this.index - 1 : true;

          if (this.tree.allowDrop(dragNode, this.node, dragNodeScope) && isValidDropPointIndex) {
            var dropParams = Object.assign({}, this.createDropPointEventMetadata(position));

            if (this.tree.validateDrop) {
              this.tree.onNodeDrop.emit({
                originalEvent: event,
                dragNode: dragNode,
                dropNode: this.node,
                dropIndex: this.index,
                accept: function accept() {
                  _this.processPointDrop(dropParams);
                }
              });
            } else {
              this.processPointDrop(dropParams);
              this.tree.onNodeDrop.emit({
                originalEvent: event,
                dragNode: dragNode,
                dropNode: this.node,
                dropIndex: this.index
              });
            }
          }

          this.draghoverPrev = false;
          this.draghoverNext = false;
        }
      }, {
        key: "processPointDrop",
        value: function processPointDrop(event) {
          var newNodeList = event.dropNode.parent ? event.dropNode.parent.children : this.tree.value;
          event.dragNodeSubNodes.splice(event.dragNodeIndex, 1);
          var dropIndex = this.index;

          if (event.position < 0) {
            dropIndex = event.dragNodeSubNodes === newNodeList ? event.dragNodeIndex > event.index ? event.index : event.index - 1 : event.index;
            newNodeList.splice(dropIndex, 0, event.dragNode);
          } else {
            dropIndex = newNodeList.length;
            newNodeList.push(event.dragNode);
          }

          this.tree.dragDropService.stopDrag({
            node: event.dragNode,
            subNodes: event.dropNode.parent ? event.dropNode.parent.children : this.tree.value,
            index: event.dragNodeIndex
          });
        }
      }, {
        key: "createDropPointEventMetadata",
        value: function createDropPointEventMetadata(position) {
          return {
            dragNode: this.tree.dragNode,
            dragNodeIndex: this.tree.dragNodeIndex,
            dragNodeSubNodes: this.tree.dragNodeSubNodes,
            dropNode: this.node,
            index: this.index,
            position: position
          };
        }
      }, {
        key: "onDropPointDragOver",
        value: function onDropPointDragOver(event) {
          event.dataTransfer.dropEffect = 'move';
          event.preventDefault();
        }
      }, {
        key: "onDropPointDragEnter",
        value: function onDropPointDragEnter(event, position) {
          if (this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
            if (position < 0) this.draghoverPrev = true;else this.draghoverNext = true;
          }
        }
      }, {
        key: "onDropPointDragLeave",
        value: function onDropPointDragLeave(event) {
          this.draghoverPrev = false;
          this.draghoverNext = false;
        }
      }, {
        key: "onDragStart",
        value: function onDragStart(event) {
          if (this.tree.draggableNodes && this.node.draggable !== false) {
            event.dataTransfer.setData("text", "data");
            this.tree.dragDropService.startDrag({
              tree: this,
              node: this.node,
              subNodes: this.node.parent ? this.node.parent.children : this.tree.value,
              index: this.index,
              scope: this.tree.draggableScope
            });
          } else {
            event.preventDefault();
          }
        }
      }, {
        key: "onDragStop",
        value: function onDragStop(event) {
          this.tree.dragDropService.stopDrag({
            node: this.node,
            subNodes: this.node.parent ? this.node.parent.children : this.tree.value,
            index: this.index
          });
        }
      }, {
        key: "onDropNodeDragOver",
        value: function onDropNodeDragOver(event) {
          event.dataTransfer.dropEffect = 'move';

          if (this.tree.droppableNodes) {
            event.preventDefault();
            event.stopPropagation();
          }
        }
      }, {
        key: "onDropNode",
        value: function onDropNode(event) {
          var _this2 = this;

          if (this.tree.droppableNodes && this.node.droppable !== false) {
            event.preventDefault();
            event.stopPropagation();
            var dragNode = this.tree.dragNode;

            if (this.tree.allowDrop(dragNode, this.node, this.tree.dragNodeScope)) {
              var dropParams = Object.assign({}, this.createDropNodeEventMetadata());

              if (this.tree.validateDrop) {
                this.tree.onNodeDrop.emit({
                  originalEvent: event,
                  dragNode: dragNode,
                  dropNode: this.node,
                  index: this.index,
                  accept: function accept() {
                    _this2.processNodeDrop(dropParams);
                  }
                });
              } else {
                this.processNodeDrop(dropParams);
                this.tree.onNodeDrop.emit({
                  originalEvent: event,
                  dragNode: dragNode,
                  dropNode: this.node,
                  index: this.index
                });
              }
            }
          }

          this.draghoverNode = false;
        }
      }, {
        key: "createDropNodeEventMetadata",
        value: function createDropNodeEventMetadata() {
          return {
            dragNode: this.tree.dragNode,
            dragNodeIndex: this.tree.dragNodeIndex,
            dragNodeSubNodes: this.tree.dragNodeSubNodes,
            dropNode: this.node
          };
        }
      }, {
        key: "processNodeDrop",
        value: function processNodeDrop(event) {
          var dragNodeIndex = event.dragNodeIndex;
          event.dragNodeSubNodes.splice(dragNodeIndex, 1);
          if (event.dropNode.children) event.dropNode.children.push(event.dragNode);else event.dropNode.children = [event.dragNode];
          this.tree.dragDropService.stopDrag({
            node: event.dragNode,
            subNodes: event.dropNode.parent ? event.dropNode.parent.children : this.tree.value,
            index: dragNodeIndex
          });
        }
      }, {
        key: "onDropNodeDragEnter",
        value: function onDropNodeDragEnter(event) {
          if (this.tree.droppableNodes && this.node.droppable !== false && this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
            this.draghoverNode = true;
          }
        }
      }, {
        key: "onDropNodeDragLeave",
        value: function onDropNodeDragLeave(event) {
          if (this.tree.droppableNodes) {
            var rect = event.currentTarget.getBoundingClientRect();

            if (event.x > rect.left + rect.width || event.x < rect.left || event.y >= Math.floor(rect.top + rect.height) || event.y < rect.top) {
              this.draghoverNode = false;
            }
          }
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
          var nodeElement = event.target.parentElement.parentElement;

          if (nodeElement.nodeName !== 'P-TREENODE') {
            return;
          }

          switch (event.which) {
            //down arrow
            case 40:
              var listElement = this.tree.droppableNodes ? nodeElement.children[1].children[1] : nodeElement.children[0].children[1];

              if (listElement && listElement.children.length > 0) {
                this.focusNode(listElement.children[0]);
              } else {
                var nextNodeElement = nodeElement.nextElementSibling;

                if (nextNodeElement) {
                  this.focusNode(nextNodeElement);
                } else {
                  var nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement);

                  if (nextSiblingAncestor) {
                    this.focusNode(nextSiblingAncestor);
                  }
                }
              }

              event.preventDefault();
              break;
            //up arrow

            case 38:
              if (nodeElement.previousElementSibling) {
                this.focusNode(this.findLastVisibleDescendant(nodeElement.previousElementSibling));
              } else {
                var parentNodeElement = this.getParentNodeElement(nodeElement);

                if (parentNodeElement) {
                  this.focusNode(parentNodeElement);
                }
              }

              event.preventDefault();
              break;
            //right arrow

            case 39:
              if (!this.node.expanded && !this.tree.isNodeLeaf(this.node)) {
                this.expand(event);
              }

              event.preventDefault();
              break;
            //left arrow

            case 37:
              if (this.node.expanded) {
                this.collapse(event);
              } else {
                var _parentNodeElement = this.getParentNodeElement(nodeElement);

                if (_parentNodeElement) {
                  this.focusNode(_parentNodeElement);
                }
              }

              event.preventDefault();
              break;
            //enter

            case 13:
              this.tree.onNodeClick(event, this.node);
              event.preventDefault();
              break;

            default:
              //no op
              break;
          }
        }
      }, {
        key: "findNextSiblingOfAncestor",
        value: function findNextSiblingOfAncestor(nodeElement) {
          var parentNodeElement = this.getParentNodeElement(nodeElement);

          if (parentNodeElement) {
            if (parentNodeElement.nextElementSibling) return parentNodeElement.nextElementSibling;else return this.findNextSiblingOfAncestor(parentNodeElement);
          } else {
            return null;
          }
        }
      }, {
        key: "findLastVisibleDescendant",
        value: function findLastVisibleDescendant(nodeElement) {
          var listElement = Array.from(nodeElement.children).find(function (el) {
            return primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].hasClass(el, 'ui-treenode');
          });
          var childrenListElement = listElement.children[1];

          if (childrenListElement && childrenListElement.children.length > 0) {
            var lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
            return this.findLastVisibleDescendant(lastChildElement);
          } else {
            return nodeElement;
          }
        }
      }, {
        key: "getParentNodeElement",
        value: function getParentNodeElement(nodeElement) {
          var parentNodeElement = nodeElement.parentElement.parentElement.parentElement;
          return parentNodeElement.tagName === 'P-TREENODE' ? parentNodeElement : null;
        }
      }, {
        key: "focusNode",
        value: function focusNode(element) {
          if (this.tree.droppableNodes) element.children[1].children[0].focus();else element.children[0].children[0].focus();
        }
      }]);
    }();

    UITreeNode.ICON_CLASS = 'ui-treenode-icon ';

    UITreeNode.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return Tree;
          })]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], UITreeNode.prototype, "rowNode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], UITreeNode.prototype, "node", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], UITreeNode.prototype, "parentNode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], UITreeNode.prototype, "root", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], UITreeNode.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], UITreeNode.prototype, "firstChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], UITreeNode.prototype, "lastChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], UITreeNode.prototype, "level", void 0);
    UITreeNode = UITreeNode_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-treeNode',
      template: "\n        <ng-template [ngIf]=\"node\">\n            <li *ngIf=\"tree.droppableNodes\" class=\"ui-treenode-droppoint\" [ngClass]=\"{'ui-treenode-droppoint-active ui-state-highlight':draghoverPrev}\"\n            (drop)=\"onDropPoint($event,-1)\" (dragover)=\"onDropPointDragOver($event)\" (dragenter)=\"onDropPointDragEnter($event,-1)\" (dragleave)=\"onDropPointDragLeave($event)\"></li>\n            <li *ngIf=\"!tree.horizontal\" role=\"treeitem\" [ngClass]=\"['ui-treenode',node.styleClass||'', isLeaf() ? 'ui-treenode-leaf': '']\">\n                <div class=\"ui-treenode-content\" [style.paddingLeft]=\"(level * 1.5)  + 'em'\" (click)=\"onNodeClick($event)\" (contextmenu)=\"onNodeRightClick($event)\" (touchend)=\"onNodeTouchEnd()\"\n                    (drop)=\"onDropNode($event)\" (dragover)=\"onDropNodeDragOver($event)\" (dragenter)=\"onDropNodeDragEnter($event)\" (dragleave)=\"onDropNodeDragLeave($event)\"\n                    [draggable]=\"tree.draggableNodes\" (dragstart)=\"onDragStart($event)\" (dragend)=\"onDragStop($event)\" [attr.tabindex]=\"0\"\n                    [ngClass]=\"{'ui-treenode-selectable':tree.selectionMode && node.selectable !== false,'ui-treenode-dragover':draghoverNode, 'ui-treenode-content-selected':isSelected()}\"\n                    (keydown)=\"onKeyDown($event)\" [attr.aria-posinset]=\"this.index + 1\" [attr.aria-expanded]=\"this.node.expanded\" [attr.aria-selected]=\"isSelected()\" [attr.aria-label]=\"node.label\">\n                    <span *ngIf=\"!isLeaf()\" class=\"ui-tree-toggler pi ui-unselectable-text\" [ngClass]=\"{'pi-caret-right':!node.expanded,'pi-caret-down':node.expanded}\" (click)=\"toggle($event)\"></span\n                    ><div class=\"ui-chkbox\" *ngIf=\"tree.selectionMode == 'checkbox'\" [attr.aria-checked]=\"isSelected()\"><div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\" [ngClass]=\"{'ui-state-disabled': node.selectable === false}\">\n                        <span class=\"ui-chkbox-icon ui-clickable pi\"\n                            [ngClass]=\"{'pi-check':isSelected(),'pi-minus':node.partialSelected}\"></span></div></div\n                    ><span [class]=\"getIcon()\" *ngIf=\"node.icon||node.expandedIcon||node.collapsedIcon\"></span\n                    ><span class=\"ui-treenode-label ui-corner-all\"\n                        [ngClass]=\"{'ui-state-highlight':isSelected()}\">\n                            <span *ngIf=\"!tree.getTemplateForNode(node)\">{{node.label}}</span>\n                            <span *ngIf=\"tree.getTemplateForNode(node)\">\n                                <ng-container *ngTemplateOutlet=\"tree.getTemplateForNode(node); context: {$implicit: node}\"></ng-container>\n                            </span>\n                    </span>\n                </div>\n                <ul class=\"ui-treenode-children\" style=\"display: none;\" *ngIf=\"!tree.virtualScroll && node.children && node.expanded\" [style.display]=\"node.expanded ? 'block' : 'none'\" role=\"group\">\n                    <p-treeNode *ngFor=\"let childNode of node.children;let firstChild=first;let lastChild=last; let index=index; trackBy: tree.trackBy\" [node]=\"childNode\" [parentNode]=\"node\"\n                        [firstChild]=\"firstChild\" [lastChild]=\"lastChild\" [index]=\"index\" [style.height.px]=\"tree.virtualNodeHeight\" [level]=\"level + 1\"></p-treeNode>\n                </ul>\n            </li>\n            <li *ngIf=\"tree.droppableNodes&&lastChild\" class=\"ui-treenode-droppoint\" [ngClass]=\"{'ui-treenode-droppoint-active ui-state-highlight':draghoverNext}\"\n            (drop)=\"onDropPoint($event,1)\" (dragover)=\"onDropPointDragOver($event)\" (dragenter)=\"onDropPointDragEnter($event,1)\" (dragleave)=\"onDropPointDragLeave($event)\"></li>\n            <table *ngIf=\"tree.horizontal\" [class]=\"node.styleClass\">\n                <tbody>\n                    <tr>\n                        <td class=\"ui-treenode-connector\" *ngIf=\"!root\">\n                            <table class=\"ui-treenode-connector-table\">\n                                <tbody>\n                                    <tr>\n                                        <td [ngClass]=\"{'ui-treenode-connector-line':!firstChild}\"></td>\n                                    </tr>\n                                    <tr>\n                                        <td [ngClass]=\"{'ui-treenode-connector-line':!lastChild}\"></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </td>\n                        <td class=\"ui-treenode\" [ngClass]=\"{'ui-treenode-collapsed':!node.expanded}\">\n                            <div class=\"ui-treenode-content ui-state-default ui-corner-all\" tabindex=\"0\"\n                                [ngClass]=\"{'ui-treenode-selectable':tree.selectionMode,'ui-state-highlight':isSelected()}\" (click)=\"onNodeClick($event)\" (contextmenu)=\"onNodeRightClick($event)\"\n                                (touchend)=\"onNodeTouchEnd()\" (keydown)=\"onNodeKeydown($event)\">\n                                <span class=\"ui-tree-toggler pi pi-fw ui-unselectable-text\" [ngClass]=\"{'pi-plus':!node.expanded,'pi-minus':node.expanded}\" *ngIf=\"!isLeaf()\"\n                                        (click)=\"toggle($event)\"></span\n                                ><span [class]=\"getIcon()\" *ngIf=\"node.icon||node.expandedIcon||node.collapsedIcon\"></span\n                                ><span class=\"ui-treenode-label ui-corner-all\">\n                                        <span *ngIf=\"!tree.getTemplateForNode(node)\">{{node.label}}</span>\n                                        <span *ngIf=\"tree.getTemplateForNode(node)\">\n                                        <ng-container *ngTemplateOutlet=\"tree.getTemplateForNode(node); context: {$implicit: node}\"></ng-container>\n                                        </span>\n                                </span>\n                            </div>\n                        </td>\n                        <td class=\"ui-treenode-children-container\" *ngIf=\"node.children && node.expanded\" [style.display]=\"node.expanded ? 'table-cell' : 'none'\">\n                            <div class=\"ui-treenode-children\">\n                                <p-treeNode *ngFor=\"let childNode of node.children;let firstChild=first;let lastChild=last; trackBy: tree.trackBy\" [node]=\"childNode\"\n                                        [firstChild]=\"firstChild\" [lastChild]=\"lastChild\"></p-treeNode>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </ng-template>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
      return Tree;
    }))), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], UITreeNode);

    var Tree = /*#__PURE__*/function () {
      function Tree(el, dragDropService) {
        _classCallCheck(this, Tree);

        this.el = el;
        this.dragDropService = dragDropService;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeContextMenuSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.layout = 'vertical';
        this.metaKeySelection = true;
        this.propagateSelectionUp = true;
        this.propagateSelectionDown = true;
        this.loadingIcon = 'pi pi-spinner';
        this.emptyMessage = 'No records found';
        this.filterBy = 'label';
        this.filterMode = 'lenient';

        this.trackBy = function (index, item) {
          return item;
        };

        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      return _createClass(Tree, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          if (this.droppableNodes) {
            this.dragStartSubscription = this.dragDropService.dragStart$.subscribe(function (event) {
              _this3.dragNodeTree = event.tree;
              _this3.dragNode = event.node;
              _this3.dragNodeSubNodes = event.subNodes;
              _this3.dragNodeIndex = event.index;
              _this3.dragNodeScope = event.scope;
            });
            this.dragStopSubscription = this.dragDropService.dragStop$.subscribe(function (event) {
              _this3.dragNodeTree = null;
              _this3.dragNode = null;
              _this3.dragNodeSubNodes = null;
              _this3.dragNodeIndex = null;
              _this3.dragNodeScope = null;
              _this3.dragHover = false;
            });
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(simpleChange) {
          if (simpleChange.value) {
            this.updateSerializedValue();
          }
        }
      }, {
        key: "horizontal",
        get: function get() {
          return this.layout == 'horizontal';
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this4 = this;

          if (this.templates.length) {
            this.templateMap = {};
          }

          this.templates.forEach(function (item) {
            _this4.templateMap[item.name] = item.template;
          });
        }
      }, {
        key: "updateSerializedValue",
        value: function updateSerializedValue() {
          this.serializedValue = [];
          this.serializeNodes(null, this.getRootNode(), 0, true);
        }
      }, {
        key: "serializeNodes",
        value: function serializeNodes(parent, nodes, level, visible) {
          if (nodes && nodes.length) {
            var _iterator = _createForOfIteratorHelper(nodes),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var node = _step.value;
                node.parent = parent;
                var rowNode = {
                  node: node,
                  parent: parent,
                  level: level,
                  visible: visible && (parent ? parent.expanded : true)
                };
                this.serializedValue.push(rowNode);

                if (rowNode.visible && node.expanded) {
                  this.serializeNodes(node, node.children, level + 1, rowNode.visible);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      }, {
        key: "onNodeClick",
        value: function onNodeClick(event, node) {
          var eventTarget = event.target;

          if (primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].hasClass(eventTarget, 'ui-tree-toggler')) {
            return;
          } else if (this.selectionMode) {
            if (node.selectable === false) {
              return;
            }

            if (this.hasFilteredNodes()) {
              node = this.getNodeWithKey(node.key, this.value);

              if (!node) {
                return;
              }
            }

            var index = this.findIndexInSelection(node);
            var selected = index >= 0;

            if (this.isCheckboxSelectionMode()) {
              if (selected) {
                if (this.propagateSelectionDown) this.propagateDown(node, false);else this.selection = this.selection.filter(function (val, i) {
                  return i != index;
                });

                if (this.propagateSelectionUp && node.parent) {
                  this.propagateUp(node.parent, false);
                }

                this.selectionChange.emit(this.selection);
                this.onNodeUnselect.emit({
                  originalEvent: event,
                  node: node
                });
              } else {
                if (this.propagateSelectionDown) this.propagateDown(node, true);else this.selection = [].concat(_toConsumableArray(this.selection || []), [node]);

                if (this.propagateSelectionUp && node.parent) {
                  this.propagateUp(node.parent, true);
                }

                this.selectionChange.emit(this.selection);
                this.onNodeSelect.emit({
                  originalEvent: event,
                  node: node
                });
              }
            } else {
              var metaSelection = this.nodeTouched ? false : this.metaKeySelection;

              if (metaSelection) {
                var metaKey = event.metaKey || event.ctrlKey;

                if (selected && metaKey) {
                  if (this.isSingleSelectionMode()) {
                    this.selectionChange.emit(null);
                  } else {
                    this.selection = this.selection.filter(function (val, i) {
                      return i != index;
                    });
                    this.selectionChange.emit(this.selection);
                  }

                  this.onNodeUnselect.emit({
                    originalEvent: event,
                    node: node
                  });
                } else {
                  if (this.isSingleSelectionMode()) {
                    this.selectionChange.emit(node);
                  } else if (this.isMultipleSelectionMode()) {
                    this.selection = !metaKey ? [] : this.selection || [];
                    this.selection = [].concat(_toConsumableArray(this.selection), [node]);
                    this.selectionChange.emit(this.selection);
                  }

                  this.onNodeSelect.emit({
                    originalEvent: event,
                    node: node
                  });
                }
              } else {
                if (this.isSingleSelectionMode()) {
                  if (selected) {
                    this.selection = null;
                    this.onNodeUnselect.emit({
                      originalEvent: event,
                      node: node
                    });
                  } else {
                    this.selection = node;
                    this.onNodeSelect.emit({
                      originalEvent: event,
                      node: node
                    });
                  }
                } else {
                  if (selected) {
                    this.selection = this.selection.filter(function (val, i) {
                      return i != index;
                    });
                    this.onNodeUnselect.emit({
                      originalEvent: event,
                      node: node
                    });
                  } else {
                    this.selection = [].concat(_toConsumableArray(this.selection || []), [node]);
                    this.onNodeSelect.emit({
                      originalEvent: event,
                      node: node
                    });
                  }
                }

                this.selectionChange.emit(this.selection);
              }
            }
          }

          this.nodeTouched = false;
        }
      }, {
        key: "onNodeTouchEnd",
        value: function onNodeTouchEnd() {
          this.nodeTouched = true;
        }
      }, {
        key: "onNodeRightClick",
        value: function onNodeRightClick(event, node) {
          if (this.contextMenu) {
            var eventTarget = event.target;

            if (eventTarget.className && eventTarget.className.indexOf('ui-tree-toggler') === 0) {
              return;
            } else {
              var index = this.findIndexInSelection(node);
              var selected = index >= 0;

              if (!selected) {
                if (this.isSingleSelectionMode()) this.selectionChange.emit(node);else this.selectionChange.emit([node]);
              }

              this.contextMenu.show(event);
              this.onNodeContextMenuSelect.emit({
                originalEvent: event,
                node: node
              });
            }
          }
        }
      }, {
        key: "findIndexInSelection",
        value: function findIndexInSelection(node) {
          var index = -1;

          if (this.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
              var areNodesEqual = this.selection.key && this.selection.key === node.key || this.selection == node;
              index = areNodesEqual ? 0 : -1;
            } else {
              for (var i = 0; i < this.selection.length; i++) {
                var selectedNode = this.selection[i];

                var _areNodesEqual = selectedNode.key && selectedNode.key === node.key || selectedNode == node;

                if (_areNodesEqual) {
                  index = i;
                  break;
                }
              }
            }
          }

          return index;
        }
      }, {
        key: "syncNodeOption",
        value: function syncNodeOption(node, parentNodes, option, value) {
          // to synchronize the node option between the filtered nodes and the original nodes(this.value)
          var _node = this.hasFilteredNodes() ? this.getNodeWithKey(node.key, parentNodes) : null;

          if (_node) {
            _node[option] = value || node[option];
          }
        }
      }, {
        key: "hasFilteredNodes",
        value: function hasFilteredNodes() {
          return this.filter && this.filteredNodes && this.filteredNodes.length;
        }
      }, {
        key: "getNodeWithKey",
        value: function getNodeWithKey(key, nodes) {
          var _iterator2 = _createForOfIteratorHelper(nodes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var node = _step2.value;

              if (node.key === key) {
                return node;
              }

              if (node.children) {
                var matchedNode = this.getNodeWithKey(key, node.children);

                if (matchedNode) {
                  return matchedNode;
                }
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }, {
        key: "propagateUp",
        value: function propagateUp(node, select) {
          if (node.children && node.children.length) {
            var selectedCount = 0;
            var childPartialSelected = false;

            var _iterator3 = _createForOfIteratorHelper(node.children),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var child = _step3.value;

                if (this.isSelected(child)) {
                  selectedCount++;
                } else if (child.partialSelected) {
                  childPartialSelected = true;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            if (select && selectedCount == node.children.length) {
              this.selection = [].concat(_toConsumableArray(this.selection || []), [node]);
              node.partialSelected = false;
            } else {
              if (!select) {
                var index = this.findIndexInSelection(node);

                if (index >= 0) {
                  this.selection = this.selection.filter(function (val, i) {
                    return i != index;
                  });
                }
              }

              if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length) node.partialSelected = true;else node.partialSelected = false;
            }

            this.syncNodeOption(node, this.filteredNodes, 'partialSelected');
          }

          var parent = node.parent;

          if (parent) {
            this.propagateUp(parent, select);
          }
        }
      }, {
        key: "propagateDown",
        value: function propagateDown(node, select) {
          var index = this.findIndexInSelection(node);

          if (select && index == -1) {
            this.selection = [].concat(_toConsumableArray(this.selection || []), [node]);
          } else if (!select && index > -1) {
            this.selection = this.selection.filter(function (val, i) {
              return i != index;
            });
          }

          node.partialSelected = false;
          this.syncNodeOption(node, this.filteredNodes, 'partialSelected');

          if (node.children && node.children.length) {
            var _iterator4 = _createForOfIteratorHelper(node.children),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var child = _step4.value;
                this.propagateDown(child, select);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }
      }, {
        key: "isSelected",
        value: function isSelected(node) {
          return this.findIndexInSelection(node) != -1;
        }
      }, {
        key: "isSingleSelectionMode",
        value: function isSingleSelectionMode() {
          return this.selectionMode && this.selectionMode == 'single';
        }
      }, {
        key: "isMultipleSelectionMode",
        value: function isMultipleSelectionMode() {
          return this.selectionMode && this.selectionMode == 'multiple';
        }
      }, {
        key: "isCheckboxSelectionMode",
        value: function isCheckboxSelectionMode() {
          return this.selectionMode && this.selectionMode == 'checkbox';
        }
      }, {
        key: "isNodeLeaf",
        value: function isNodeLeaf(node) {
          return node.leaf == false ? false : !(node.children && node.children.length);
        }
      }, {
        key: "getRootNode",
        value: function getRootNode() {
          return this.filteredNodes ? this.filteredNodes : this.value;
        }
      }, {
        key: "getTemplateForNode",
        value: function getTemplateForNode(node) {
          if (this.templateMap) return node.type ? this.templateMap[node.type] : this.templateMap['default'];else return null;
        }
      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          if (this.droppableNodes && (!this.value || this.value.length === 0)) {
            event.dataTransfer.dropEffect = 'move';
            event.preventDefault();
          }
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          if (this.droppableNodes && (!this.value || this.value.length === 0)) {
            event.preventDefault();
            var dragNode = this.dragNode;

            if (this.allowDrop(dragNode, null, this.dragNodeScope)) {
              var dragNodeIndex = this.dragNodeIndex;
              this.dragNodeSubNodes.splice(dragNodeIndex, 1);
              this.value = this.value || [];
              this.value.push(dragNode);
              this.dragDropService.stopDrag({
                node: dragNode
              });
            }
          }
        }
      }, {
        key: "onDragEnter",
        value: function onDragEnter(event) {
          if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
            this.dragHover = true;
          }
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          if (this.droppableNodes) {
            var rect = event.currentTarget.getBoundingClientRect();

            if (event.x > rect.left + rect.width || event.x < rect.left || event.y > rect.top + rect.height || event.y < rect.top) {
              this.dragHover = false;
            }
          }
        }
      }, {
        key: "allowDrop",
        value: function allowDrop(dragNode, dropNode, dragNodeScope) {
          if (!dragNode) {
            //prevent random html elements to be dragged
            return false;
          } else if (this.isValidDragScope(dragNodeScope)) {
            var allow = true;

            if (dropNode) {
              if (dragNode === dropNode) {
                allow = false;
              } else {
                var parent = dropNode.parent;

                while (parent != null) {
                  if (parent === dragNode) {
                    allow = false;
                    break;
                  }

                  parent = parent.parent;
                }
              }
            }

            return allow;
          } else {
            return false;
          }
        }
      }, {
        key: "isValidDragScope",
        value: function isValidDragScope(dragScope) {
          var dropScope = this.droppableScope;

          if (dropScope) {
            if (typeof dropScope === 'string') {
              if (typeof dragScope === 'string') return dropScope === dragScope;else if (dragScope instanceof Array) return dragScope.indexOf(dropScope) != -1;
            } else if (dropScope instanceof Array) {
              if (typeof dragScope === 'string') {
                return dropScope.indexOf(dragScope) != -1;
              } else if (dragScope instanceof Array) {
                var _iterator5 = _createForOfIteratorHelper(dropScope),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var s = _step5.value;

                    var _iterator6 = _createForOfIteratorHelper(dragScope),
                        _step6;

                    try {
                      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                        var ds = _step6.value;

                        if (s === ds) {
                          return true;
                        }
                      }
                    } catch (err) {
                      _iterator6.e(err);
                    } finally {
                      _iterator6.f();
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
            }

            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "_filter",
        value: function _filter(event) {
          var filterValue = event.target.value;

          if (filterValue === '') {
            this.filteredNodes = null;
          } else {
            this.filteredNodes = [];
            var searchFields = this.filterBy.split(',');
            var filterText = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].removeAccents(filterValue).toLocaleLowerCase(this.filterLocale);
            var isStrictMode = this.filterMode === 'strict';

            var _iterator7 = _createForOfIteratorHelper(this.value),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var node = _step7.value;
                var copyNode = Object.assign({}, node);
                var paramsWithoutNode = {
                  searchFields: searchFields,
                  filterText: filterText,
                  isStrictMode: isStrictMode
                };

                if (isStrictMode && (this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && (this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
                  this.filteredNodes.push(copyNode);
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }

          this.updateSerializedValue();
          this.onFilter.emit({
            filter: filterValue,
            filteredValue: this.filteredNodes
          });
        }
      }, {
        key: "findFilteredNodes",
        value: function findFilteredNodes(node, paramsWithoutNode) {
          if (node) {
            var matched = false;

            if (node.children) {
              var childNodes = _toConsumableArray(node.children);

              node.children = [];

              var _iterator8 = _createForOfIteratorHelper(childNodes),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var childNode = _step8.value;
                  var copyChildNode = Object.assign({}, childNode);

                  if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                    matched = true;
                    node.children.push(copyChildNode);
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }

            if (matched) {
              node.expanded = true;
              return true;
            }
          }
        }
      }, {
        key: "isFilterMatched",
        value: function isFilterMatched(node, _ref) {
          var searchFields = _ref.searchFields,
              filterText = _ref.filterText,
              isStrictMode = _ref.isStrictMode;
          var matched = false;

          var _iterator9 = _createForOfIteratorHelper(searchFields),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var field = _step9.value;
              var fieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].removeAccents(String(primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].resolveFieldData(node, field))).toLocaleLowerCase(this.filterLocale);

              if (fieldValue.indexOf(filterText) > -1) {
                matched = true;
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          if (!matched || isStrictMode && !this.isNodeLeaf(node)) {
            matched = this.findFilteredNodes(node, {
              searchFields: searchFields,
              filterText: filterText,
              isStrictMode: isStrictMode
            }) || matched;
          }

          return matched;
        }
      }, {
        key: "getBlockableElement",
        value: function getBlockableElement() {
          return this.el.nativeElement.children[0];
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.dragStartSubscription) {
            this.dragStartSubscription.unsubscribe();
          }

          if (this.dragStopSubscription) {
            this.dragStopSubscription.unsubscribe();
          }
        }
      }]);
    }();

    Tree.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["TreeDragDropService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], Tree.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Tree.prototype, "selectionMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Tree.prototype, "selection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Tree.prototype, "selectionChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Tree.prototype, "onNodeSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Tree.prototype, "onNodeUnselect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Tree.prototype, "onNodeExpand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Tree.prototype, "onNodeCollapse", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Tree.prototype, "onNodeContextMenuSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Tree.prototype, "onNodeDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Tree.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Tree.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Tree.prototype, "contextMenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Tree.prototype, "layout", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Tree.prototype, "draggableScope", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Tree.prototype, "droppableScope", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Tree.prototype, "draggableNodes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Tree.prototype, "droppableNodes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Tree.prototype, "metaKeySelection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Tree.prototype, "propagateSelectionUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Tree.prototype, "propagateSelectionDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Tree.prototype, "loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Tree.prototype, "loadingIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Tree.prototype, "emptyMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Tree.prototype, "ariaLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Tree.prototype, "ariaLabelledBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Tree.prototype, "validateDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Tree.prototype, "filter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Tree.prototype, "filterBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Tree.prototype, "filterMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Tree.prototype, "filterPlaceholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Tree.prototype, "filterLocale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Tree.prototype, "scrollHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Tree.prototype, "virtualScroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Tree.prototype, "virtualNodeHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Tree.prototype, "minBufferPx", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Tree.prototype, "maxBufferPx", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], Tree.prototype, "trackBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Tree.prototype, "onFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], Tree.prototype, "templates", void 0);
    Tree = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-tree',
      template: "\n        <div [ngClass]=\"{'ui-tree ui-widget ui-widget-content ui-corner-all':true,'ui-tree-selectable':selectionMode,\n                'ui-treenode-dragover':dragHover,'ui-tree-loading': loading, 'ui-tree-flex-scrollable': scrollHeight === 'flex'}\" \n            [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"!horizontal\"\n            (drop)=\"onDrop($event)\" (dragover)=\"onDragOver($event)\" (dragenter)=\"onDragEnter($event)\" (dragleave)=\"onDragLeave($event)\">\n            <div class=\"ui-tree-loading-mask ui-widget-overlay\" *ngIf=\"loading\"></div>\n            <div class=\"ui-tree-loading-content\" *ngIf=\"loading\">\n                <i [class]=\"'ui-tree-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <div *ngIf=\"filter\" class=\"ui-tree-filter-container\">\n                <input #filter type=\"text\" autocomplete=\"off\" class=\"ui-tree-filter ui-inputtext ui-widget ui-state-default ui-corner-all\" [attr.placeholder]=\"filterPlaceholder\"\n                    (keydown.enter)=\"$event.preventDefault()\" (input)=\"_filter($event)\">\n                    <span class=\"ui-tree-filter-icon pi pi-search\"></span>\n            </div>\n            <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                <div class=\"ui-tree-wrapper\" [style.max-height]=\"scrollHeight\">\n                    <ul class=\"ui-tree-container\" *ngIf=\"getRootNode()\" role=\"tree\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledBy\">\n                        <p-treeNode *ngFor=\"let node of getRootNode(); let firstChild=first;let lastChild=last; let index=index; trackBy: trackBy\" [node]=\"node\"\n                                    [firstChild]=\"firstChild\" [lastChild]=\"lastChild\" [index]=\"index\" [level]=\"0\"></p-treeNode>\n                    </ul>\n                </div>\n            </ng-container>\n            <ng-template #virtualScrollList>\n                <cdk-virtual-scroll-viewport class=\"ui-tree-wrapper\" [style.height]=\"scrollHeight\" [itemSize]=\"virtualNodeHeight\" [minBufferPx]=\"minBufferPx\" [maxBufferPx]=\"maxBufferPx\">\n                    <ul class=\"ui-tree-container\" *ngIf=\"getRootNode()\" role=\"tree\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledBy\">\n                        <p-treeNode *cdkVirtualFor=\"let rowNode of serializedValue; let firstChild=first; let lastChild=last; let index=index; trackBy: trackBy\"  [level]=\"rowNode.level\"\n                                    [rowNode]=\"rowNode\" [node]=\"rowNode.node\" [firstChild]=\"firstChild\" [lastChild]=\"lastChild\" [index]=\"index\" [style.height.px]=\"virtualNodeHeight\"></p-treeNode>\n                    </ul>\n                </cdk-virtual-scroll-viewport>\n            </ng-template>\n            <div class=\"ui-tree-empty-message\" *ngIf=\"!loading && (value == null || value.length === 0)\">{{emptyMessage}}</div>\n        </div>\n        <div [ngClass]=\"{'ui-tree ui-tree-horizontal ui-widget ui-widget-content ui-corner-all':true,'ui-tree-selectable':selectionMode}\"  [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"horizontal\">\n            <div class=\"ui-tree-loading ui-widget-overlay\" *ngIf=\"loading\"></div>\n            <div class=\"ui-tree-loading-content\" *ngIf=\"loading\">\n                <i [class]=\"'ui-tree-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <table *ngIf=\"value&&value[0]\">\n                <p-treeNode [node]=\"value[0]\" [root]=\"true\"></p-treeNode>\n            </table>\n            <div class=\"ui-tree-empty-message\" *ngIf=\"!loading && (value == null || value.length === 0)\">{{emptyMessage}}</div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["TreeDragDropService"]])], Tree);

    var TreeModule = /*#__PURE__*/_createClass(function TreeModule() {
      _classCallCheck(this, TreeModule);
    });

    TreeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]],
      exports: [Tree, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]],
      declarations: [Tree, UITreeNode]
    })], TreeModule);
    /***/
  }
}]);
//# sourceMappingURL=default~components-inputnumber-inputnumberdemo-module~components-responsive-responsivedemo-module~co~8c9490f0-es5.js.map