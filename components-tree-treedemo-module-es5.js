function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tree-treedemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treecontextmenudemo.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treecontextmenudemo.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_tree_treecontextmenudemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Tree <span class=\"subitem\">ContextMenu</span></span>\n        <span>Tree has exclusive integration with ContextMenu.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-tree [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFile\" [contextMenu]=\"cm\"></p-tree>\n    \n    <p-contextMenu #cm [model]=\"items\"></p-contextMenu>\n    <p-toast></p-toast>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"treecontextmenudemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treecontextmenudemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treecontextmenu-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component,OnInit&#125; from '@angular/core';\nimport &#123;NodeService&#125; from '../../service/nodeservice';\nimport &#123;MenuItem,TreeNode&#125; from 'primeng/api';\nimport &#123;MessageService&#125; from 'primeng/api';\n\n@Component(&#123;\n    templateUrl: './treecontextmenudemo.html',\n    providers: [MessageService]\n&#125;)\nexport class TreeContextMenuDemo implements OnInit &#123;\n\n    files: TreeNode[];\n\n    selectedFile: TreeNode;\n\n    items: MenuItem[];\n    \n    constructor(private nodeService: NodeService, private messageService: MessageService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.nodeService.getFiles().then(files => this.files = files);\n\n        this.items = [\n            &#123;label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedFile)&#125;,\n            &#123;label: 'Unselect', icon: 'pi pi-times', command: (event) => this.unselectFile()&#125;\n        ];\n    &#125;\n\n    viewFile(file: TreeNode) &#123;\n        this.messageService.add(&#123;severity: 'info', summary: 'Node Details', detail: file.label&#125;);\n    &#125;\n    \n    unselectFile() &#123;\n        this.selectedFile = null;\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"treecontextmenudemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treecontextmenudemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treecontextmenu-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFile\" [contextMenu]=\"cm\"&gt;&lt;/p-tree&gt;\n\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\n&lt;p-toast&gt;&lt;/p-toast&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-treecontextmenu-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treedemo.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treedemo.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_tree_treedemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Tree</span>\n        <span>Tree is used to display hierarchical data.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3>Basic</h3>\n    <p-tree [value]=\"files1\"></p-tree>\n\n    <h3>Programmatic</h3>\n    <div style=\"margin-bottom: 1rem\">\n        <button pButton type=\"button\" label=\"Expand all\" (click)=\"expandAll()\" style=\"margin-right: .5rem\"></button>\n        <button pButton type=\"button\" label=\"Collapse all\" (click)=\"collapseAll()\"></button>\n    </div>\n    <p-tree [value]=\"files2\"></p-tree>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>CDK</h3>\n            <p>VirtualScrolling depends on @angular/cdk's ScrollingModule so begin with installing CDK if not already installed.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnpm install @angular/cdk --save\n</code>\n</pre>\n\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TreeModule&#125; from 'primeng/tree';\nimport &#123;TreeNode&#125; from 'primeng/api';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Tree component requires an array of TreeNode objects as its value. Let's begin with the TreeNode api. Note that all of the properties are optional.</p>\n\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>label</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Label of the node.</td>\n                        </tr>\n                        <tr>\n                            <td>data</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Data represented by the node.</td>\n                        </tr>\n                        <tr>\n                            <td>icon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Icon of the node to display next to content.</td>\n                        </tr>\n                        <tr>\n                            <td>expandedIcon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Icon to use in expanded state.</td>\n                        </tr>\n                        <tr>\n                            <td>collapsedIcon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Icon to use in collapsed state.</td>\n                        </tr>\n                        <tr>\n                            <td>children</td>\n                            <td>TreeNode[]</td>\n                            <td>null</td>\n                            <td>An array of treenodes as children.</td>\n                        </tr>\n                        <tr>\n                            <td>leaf</td>\n                            <td>boolean</td>\n                            <td>null</td>\n                            <td>Specifies if the node has children. Used in lazy loading.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the node.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the node.</td>\n                        </tr>\n                        <tr>\n                            <td>expanded</td>\n                            <td>boolean</td>\n                            <td>null</td>\n                            <td>Whether the node is in an expanded or collapsed state.</td>\n\t\t\t\t\t\t</tr>\n                        <tr>\n                            <td>type</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Type of the node to match ng-template type.</td>\n                        </tr>\n                        <tr>\n                            <td>parent</td>\n                            <td>TreeNode</td>\n                            <td>null</td>\n                            <td>Parent of the node.</td>\n                        </tr>\n                        <tr>\n                            <td>draggable</td>\n                            <td>boolean</td>\n                            <td>null</td>\n                            <td>Whether to disable dragging for a particular node even if draggableNodes is enabled.</td>\n                        </tr>\n                        <tr>\n                            <td>droppable</td>\n                            <td>boolean</td>\n                            <td>null</td>\n                            <td>Whether to disable dropping for a particular node even if droppableNodes is enabled.</td>\n                        </tr>\n                        <tr>\n                            <td>selectable</td>\n                            <td>boolean</td>\n                            <td>null</td>\n                            <td>Used to disable selection of a particular node.</td>\n                        </tr>\n                        <tr>\n                            <td>key</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Unique key of the node.(<a href=\"https://github.com/primefaces/primeng/issues/7237#issue-409791407\" target=\"_blank\" rel=\"noopener noreferrer\">more</a>)</td>\n                        </tr>\n                        <tr>\n                            <td>emptyMessage</td>\n                            <td>string</td>\n                            <td>No records found.</td>\n                            <td>Text to display when there is no data.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <p>Most of the time, nodes will be loaded from a remote datasoure, here is an example NodeService that fetches the data from a json file.</p>\n<pre>\n<code class=\"language-javascript\" pCode ngNonBindable>\n@Injectable()\nexport class NodeService &#123;\n\n    constructor(private http: Http) &#123;&#125;\n\n    getFiles() &#123;\n        return this.http.get('showcase/resources/data/files.json')\n                    .toPromise()\n                    .then(res =&gt; &lt;TreeNode[]&gt; res.json().data);\n    &#125;\n&#125;\n</code>\n</pre>\n\n        <p>The files.json file consists of sample data. In a real application, this should be a dynamic response generated from the remote call.</p>\n<pre>\n<code class=\"language-javascript\" pCode ngNonBindable>\n&#123;\n    \"data\":\n    [\n        &#123;\n            \"label\": \"Documents\",\n            \"data\": \"Documents Folder\",\n            \"expandedIcon\": \"pi pi-folder-open\",\n            \"collapsedIcon\": \"pi pi-folder\",\n            \"children\": [&#123;\n                    \"label\": \"Work\",\n                    \"data\": \"Work Folder\",\n                    \"expandedIcon\": \"pi pi-folder-open\",\n                    \"collapsedIcon\": \"pi pi-folder\",\n                    \"children\": [&#123;\"label\": \"Expenses.doc\", \"icon\": \"pi pi-file\", \"data\": \"Expenses Document\"&#125;, &#123;\"label\": \"Resume.doc\", \"icon\": \"pi pi-file\", \"data\": \"Resume Document\"&#125;]\n                &#125;,\n                &#123;\n                    \"label\": \"Home\",\n                    \"data\": \"Home Folder\",\n                    \"expandedIcon\": \"pi pi-folder-open\",\n                    \"collapsedIcon\": \"pi pi-folder\",\n                    \"children\": [&#123;\"label\": \"Invoices.txt\", \"icon\": \"pi pi-file\", \"data\": \"Invoices for this month\"&#125;]\n                &#125;]\n        &#125;,\n        &#123;\n            \"label\": \"Pictures\",\n            \"data\": \"Pictures Folder\",\n            \"expandedIcon\": \"pi pi-folder-open\",\n            \"collapsedIcon\": \"pi pi-folder\",\n            \"children\": [\n                &#123;\"label\": \"barcelona.jpg\", \"icon\": \"pi pi-image\", \"data\": \"Barcelona Photo\"&#125;,\n                &#123;\"label\": \"logo.jpg\", \"icon\": \"pi pi-file\", \"data\": \"PrimeFaces Logo\"&#125;,\n                &#123;\"label\": \"primeui.png\", \"icon\": \"pi pi-image\", \"data\": \"PrimeUI Logo\"&#125;]\n        &#125;,\n        &#123;\n            \"label\": \"Movies\",\n            \"data\": \"Movies Folder\",\n            \"expandedIcon\": \"pi pi-folder-open\",\n            \"collapsedIcon\": \"pi pi-folder\",\n            \"children\": [&#123;\n                    \"label\": \"Al Pacino\",\n                    \"data\": \"Pacino Movies\",\n                    \"children\": [&#123;\"label\": \"Scarface\", \"icon\": \"pi pi-video\", \"data\": \"Scarface Movie\"&#125;, &#123;\"label\": \"Serpico\", \"icon\": \"pi pi-file-video\", \"data\": \"Serpico Movie\"&#125;]\n                &#125;,\n                &#123;\n                    \"label\": \"Robert De Niro\",\n                    \"data\": \"De Niro Movies\",\n                    \"children\": [&#123;\"label\": \"Goodfellas\", \"icon\": \"pi pi-video\", \"data\": \"Goodfellas Movie\"&#125;, &#123;\"label\": \"Untouchables\", \"icon\": \"pi pi-video\", \"data\": \"Untouchables Movie\"&#125;]\n                &#125;]\n        &#125;\n    ]\n&#125;\n</code>\n</pre>\n\n        <p>The component that uses this service makes a call to getFiles() and assigns them back to files property that is bound to the tree.</p>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TreeDemoComponent implements OnInit &#123;\n\n    files: TreeNode[];\n\n    constructor(private nodeService: NodeService) &#123;&#125;\n\n    ngOnInit() &#123;\n        this.nodeService.getFiles().then(files => this.files = files);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n\n            <h3>Selection</h3>\n            <p>Tree supports 3 selection methods, single, multiple and checkbox. Selection is enabled by setting <i>selectionMode</i> property and providing a single TreeNode or\n            an array of TreeNodes to reference the selections depending on the selection mode.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TreeDemoComponent implements OnInit &#123;\n\n    files: TreeNode[];\n\n    selectedFile: TreeNode;\n\n    constructor(private nodeService: NodeService) &#123;&#125;\n\n    ngOnInit() &#123;\n        this.nodeService.getFiles().then(files => this.files = files);\n    &#125;\n\n&#125;\n</code>\n</pre>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFile\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n\n        <p>In multiple mode or checkbox mode, selection property should be an array. In multiple mode, items can either be selected\n        using metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default. On touch enabled\n        devices metaKeySelection is turned off automatically. In checkbox mode, when inititing a tree with preselections, also set partialSelected\n        property on node so that minus icon can be displayed when necessary.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n    export class TreeDemoComponent implements OnInit &#123;\n\n        files: TreeNode[];\n\n        selectedFiles: TreeNode[];\n\n        constructor(private nodeService: NodeService) &#123;&#125;\n\n        ngOnInit() &#123;\n            this.nodeService.getFiles().then(files => this.files = files);\n        &#125;\n\n    &#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFiles\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n\n            <p>In checkbox mode, selections propagate up and down, if you prefer not to do so, propagation can be turned off by <i>propagateSelectionDown</i> and\n            <i>propagateSelectionUp</i> properties.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles\"\n                [propagateSelectionUp]=\"false\" [propagateSelectionDown]=\"false\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n\n            <p>Tree provides <i>onNodeSelect</i> and <i>onNodeUnselect</i> options as callbacks for selection feature.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TreeDemoComponent implements OnInit &#123;\n\n    files: TreeNode[];\n\n    selectedFiles: TreeNode[];\n\n    constructor(private nodeService: NodeService) &#123;&#125;\n\n    ngOnInit() &#123;\n        this.nodeService.getFiles().then(files => this.files = files);\n    &#125;\n\n    nodeSelect(event) &#123;\n        //event.node = selected node\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <p>Selection of a particular node can be disabled by setting the <i>selectable</i> property of the node to false.</p>\n\n            <h3>Icons</h3>\n            <p>Icon of a treenode is defined using the icon property, if you need an icon depending on the expand or collapse state, use\n                <i>expandedIcon</i> and <i>collapsedIcon</i> instead.</p>\n\n            <h3>Templating</h3>\n            <p>By default label of a treenode is displayed inside a tree node, in case you need to place custom content define a pTemplate that gets\n                the treenode as an implicit variable. Example below places an input field to create editable treenodes.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\"&gt;\n    &lt;ng-template let-node  pTemplate=\"default\"&gt;\n        &lt;input [(ngModel)]=\"node.label\" type=\"text\" style=\"width:100%\"&gt;\n    &lt;/ng-template&gt;\n&lt;/p-tree&gt;\n</code>\n</pre>\n\n            <p>Multiple templates are supported by matching the type property of the TreeNode with the type of pTemplate. If a node has no type,\n            then default <i>ng-template</i> is used.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\"&gt;\n    &lt;ng-template let-node  pTemplate=\"picture\"&gt;\n        &lt;img [attrs.src]=\"picture.path\"&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template let-node  pTemplate=\"default\"&gt;\n        &lt;input [(ngModel)]=\"node.label\" type=\"text\" style=\"width:100%\"&gt;\n    &lt;/ng-template&gt;\n&lt;/p-tree&gt;\n</code>\n</pre>\n\n            <h3>Filtering</h3>\n            <p>Filtering is enabled by setting the <i>filter</i> property to true, by default label property of a node\n                is used to compare against the value in the text field, in order to customize which field(s) should be used during search define <i>filterBy</i> property.</p>\n\n            <p>In addition <i>filterMode</i> specifies the filtering strategy. In <b>lenient</b> mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand,\n                    in <b>strict</b> mode when the query matches a node, filtering continues on all descendants.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"filesTree11\" [filter]=\"true\">&lt;/p-tree&gt;\n\n&lt;p-tree [value]=\"filesTree12\" [filter]=\"true\" filterMode=\"strict\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n\n            <h3>ContextMenu</h3>\n            <p>Tree has exclusive integration with context menu created by binding a menu instance to the tree.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFile2\" [contextMenu]=\"cm\"&gt;&lt;/p-tree&gt;\n\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\n</code>\n</pre>\n\n            <h3>Lazy Loading</h3>\n            <p>Lazy loading is handy to deal with large datasets. Instead of loading the whole tree, nodes can be loaded at <i>onNodeExpand</i> event.\n            Important part of implementing lazy loading is defining leaf property of a node as false, this will instruct tree to display an arrow icon\n            to indicate there are children of this node although they are not loaded yet. When the lazy node is expanded, onNodeExpand is called\n            and a remote call can be made to add the children to the expanded node.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" (onNodeExpand)=\"loadNode($event)\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TreeDemoComponent implements OnInit &#123;\n\n    files: TreeNode[];\n\n    selectedFiles: TreeNode[];\n\n    constructor(private nodeService: NodeService) &#123;&#125;\n\n    ngOnInit() &#123;\n        //initial nodes\n        this.nodeService.getFiles().then(files => this.files = files);\n    &#125;\n\n    loadNode(event) &#123;\n        if (event.node) &#123;\n            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children\n            this.nodeService.getLazyFiles().then(nodes => event.node.children = nodes);\n        &#125;\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <p>Assume at ngOnInit tree is initialized with a data like below that has nodes having no actual children but leaf property is set false.</p>\n<pre>\n<code class=\"language-javascript\" pCode ngNonBindable>\n&#123;\n    \"data\":\n    [\n        &#123;\n            \"label\": \"Lazy Node 0\",\n            \"data\": \"Node 0\",\n            \"expandedIcon\": \"pi pi-folder\",\n            \"collapsedIcon\": \"pi pi-folder\",\n            \"leaf\": false\n        &#125;,\n        &#123;\n            \"label\": \"Lazy Node 1\",\n            \"data\": \"Node 1\",\n            \"expandedIcon\": \"pi pi-folder-open\",\n            \"collapsedIcon\": \"pi pi-folder\",\n            \"leaf\": false\n        &#125;,\n        &#123;\n            \"label\": \"Lazy Node 1\",\n            \"data\": \"Node 2\",\n            \"expandedIcon\": \"pi pi-folder-open\",\n            \"collapsedIcon\": \"pi pi-folder\",\n            \"leaf\": false\n        &#125;\n    ]\n&#125;\n</code>\n</pre>\n\n                <h3>Scrolling</h3>\n                <p>Scrolling is used to preserve space as content of the tree is dynamic and enabled by <i>scrollHeight</i> property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" scrollHeight=\"200px\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n\n                <h3>Flex Scroll</h3>\n                <p>In cases where viewport should adjust itself according to the table parent's height instead of a fixed viewport height, set <i>scrollHeight</i> option as <b>flex</b>. In example below,\n                table is inside a Dialog where viewport size dynamically responds to the dialog size changes such as resizing or maximizing.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button type=\"button\" (click)=\"showDialog()\" pButton icon=\"pi pi-external-link\" label=\"View\"&gt;&lt;/button&gt;\n&lt;p-dialog header=\"Flexible ScrollHeight\" [(visible)]=\"dialogVisible\" [style]=\"&#123;width: '50vw'&#125;\" [baseZIndex]=\"10000\" [maximizable]=\"true\" [modal]=\"true\" \n    [resizable]=\"true\" [contentStyle]=\"&#123;height: '300px'&#125;\" styleClass=\"ui-fluid\"&gt;\n    &lt;p-tree [value]=\"files2\" scrollHeight=\"flex\"&gt;&lt;/p-tree&gt;   \n&lt;/p-dialog&gt;\n</code>\n</pre>\n\n                <h3>Virtual Scrolling</h3>\n                <p>VirtualScroller is a performant approach to handle huge data efficiently. Setting <i>virtualScroll</i> property as true and providing a <i>virtualNodeHeight</i> in pixels would be enough to enable this functionality.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" [virtualScroll]=\"true\" [virtualNodeHeight]=\"33\" scrollHeight=\"200px\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n\n            <h3>Drag and Drop</h3>\n            <p>Nodes can be reordered within a tree and also can be transferred between multiple trees. To enable dragging from a tree set <i>draggableNodes</i> to true and to allow\n            dropping enable <i>droppableNodes</i> property. In addition, import TreeDragDropService and configure it as a provider at your component or module.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TreeDragDropService&#125; from 'primeng/api';\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" draggableNodes=\"true\" droppableNodes=\"true\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n            <p>Multiple trees can be used in a drag drop operation, in order to add constraints like rejecting drags from a certain tree but allow from another use draggableScope\n            and droppableScope properties which can be a string or an array. Following example uses 3 trees where second one only accepts drags from first tree and second one only\n            accepts from second tree whereas first tree accepts drops from 3rd tree.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" draggableNodes=\"true\" droppableNodes=\"true\" draggableScope=\"a\" droppableScope=\"c\"&gt;&lt;/p-tree&gt;\n&lt;p-tree [value]=\"files\" draggableNodes=\"true\" droppableNodes=\"true\" draggableScope=\"b\" droppableScope=\"a\"&gt;&lt;/p-tree&gt;\n&lt;p-tree [value]=\"files\" draggableNodes=\"true\" droppableNodes=\"true\" draggableScope=\"c\" droppableScope=\"b\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n\n            <p>In case, a drop should be accepted based on a condition, enable validateDrop property, define an event handler for <i>onNodeDrop</i> where the passed event and call the accept callback of the event\n                to accept a drop. Simply emitting the call of <i>accept()</i> will reject the drop.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" draggableNodes=\"true\" droppableNodes=\"true\" [validateDrop]=\"true\" (onNodeDrop)=\"onDrop($event)\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nonDrop(event) &#123;\n    if (condition) &#123;\n        event.accept();\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Loading Status</h3>\n            <p>Tree has a loading property, when enabled a spinner icon is displayed to indicate data load.</p>\n            <p>An optional loadingIcon property can be passed in case you prefer a different icon.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" [loading]=\"loading\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n\n            <h3>Horizontal Orientation</h3>\n            <p>Horizontal mode is the alternative option for orientation.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" layout=\"horizontal\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                         <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of treenodes.</td>\n                        </tr>\n                        <tr>\n                            <td>selectionMode</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines the selection mode, valid values \"single\", \"multiple\", and \"checkbox\".</td>\n                        </tr>\n                        <tr>\n                            <td>selection</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>A single treenode instance or an array to refer to the selections.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>contextMenu</td>\n                            <td>ContextMenu</td>\n                            <td>null</td>\n                            <td>Context menu instance.</td>\n                        </tr>\n                        <tr>\n                            <td>layout</td>\n                            <td>string</td>\n                            <td>vertical</td>\n                            <td>Defines the orientation of the tree, valid values are 'vertical' and 'horizontal'.</td>\n                        </tr>\n                        <tr>\n                            <td>draggableScope</td>\n                            <td>string/array</td>\n                            <td>null</td>\n                            <td>Scope of the draggable nodes to match a droppableScope.</td>\n                        </tr>\n                        <tr>\n                            <td>droppableScope</td>\n                            <td>string/array</td>\n                            <td>null</td>\n                            <td>Scope of the droppable nodes to match a draggableScope.</td>\n                        </tr>\n                        <tr>\n                            <td>draggableNodes</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the nodes are draggable.</td>\n                        </tr>\n                        <tr>\n                            <td>droppableNodes</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the nodes are droppable.</td>\n                        </tr>\n                        <tr>\n                            <td>metaKeySelection</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item\n                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>\n                        </tr>\n                        <tr>\n                            <td>propagateSelectionUp</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether checkbox selections propagate to ancestor nodes.</td>\n                        </tr>\n                        <tr>\n                            <td>propagateSelectionDown</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether checkbox selections propagate to descendant nodes.</td>\n                        </tr>\n                        <tr>\n                            <td>loading</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Displays a loader to indicate data load is in progress.</td>\n                        </tr>\n                        <tr>\n                            <td>loadingIcon</td>\n                            <td>string</td>\n                            <td>pi pi-spinner</td>\n                            <td>The icon to show while indicating data load is in progress.</td>\n                        </tr>\n                        <tr>\n                            <td>emptyMessage</td>\n                            <td>string</td>\n                            <td>No records found</td>\n                            <td>Text to display when there is no data.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabel</td>\n                            <td>string</td>\n                            <td></td>\n                            <td>Used to define a string that labels the tree.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabelledBy</td>\n                            <td>string</td>\n                            <td>pi pi-spinner</td>\n                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>\n                        </tr>\n                        <tr>\n                            <td>validateDrop</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, drop can be accepted or rejected based on condition defined at onNodeDrop.</td>\n                        </tr>\n                        <tr>\n                            <td>filter</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified, displays an input field to filter the items.</td>\n                        </tr>\n                        <tr>\n                            <td>filterBy</td>\n                            <td>string</td>\n                            <td>label</td>\n                            <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>\n                        </tr>\n                        <tr>\n                            <td>filterMode</td>\n                            <td>string</td>\n                            <td>lenient</td>\n                            <td>Mode for filtering valid values are \"lenient\" and \"strict\". Default is lenient.</td>\n                        </tr>\n                        <tr>\n                            <td>filterPlaceholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Placeholder text to show when filter input is empty.</td>\n                        </tr>\n                        <tr>\n                            <td>filterLocale</td>\n                            <td>string</td>\n                            <td>undefined</td>\n                            <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollHeight</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Height of the scrollable viewport.</td>\n                        </tr>\n                        <tr>\n                            <td>virtualScroll</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the data should be rendered on demand during scroll.</td>\n                        </tr>\n                        <tr>\n                            <td>virtualNodeHeight</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Height of a node to use in calculations of virtual scrolling.</td>\n                        </tr>\n                        <tr>\n                            <td>minBufferPx</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Minimum amount of content buffer (in pixels) that the viewport must render.</td>\n                        </tr>\n                        <tr>\n                            <td>maxBufferPx</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Configures how much buffer space to render back up to when it detects that more buffer is required.</td>\n                        </tr>\n                        <tr>\n                            <td>trackBy</td>\n                            <td>Function</td>\n                            <td>null</td>\n                            <td>Function to optimize the node list rendering, default algoritm checks for object identity.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onNodeSelect</td>\n                            <td>event.originalEvent: browser event <br>\n                                event.node: Selected node instance.</td>\n                            <td>Callback to invoke when a node is selected.</td>\n                        </tr>\n                        <tr>\n                            <td>onNodeUnselect</td>\n                            <td>event.originalEvent: browser event <br>\n                                event.node: Unselected node instance.</td>\n                            <td>Callback to invoke when a node is unselected.</td>\n                        </tr>\n                        <tr>\n                            <td>onNodeExpand</td>\n                            <td>event.originalEvent: browser event <br>\n                                event.node: Expanded node instance.</td>\n                            <td>Callback to invoke when a node is expanded.</td>\n                        </tr>\n                        <tr>\n                            <td>onNodeCollapse</td>\n                            <td>event.originalEvent: browser event <br>\n                                event.node: Collapsed node instance.</td>\n                            <td>Callback to invoke when a node is collapsed.</td>\n                        </tr>\n                        <tr>\n                            <td>onNodeContextMenuSelect</td>\n                            <td>event.originalEvent: browser event <br>\n                                event.node: Selected node instance.</td>\n                            <td>Callback to invoke when a node is selected with right click.</td>\n                        </tr>\n                        <tr>\n                            <td>onNodeDrop</td>\n                            <td>event.originalEvent: browser event <br>\n                                event.dragNode: Dragged node instance <br>\n                                event.dropNode: Dropped node instance.\n                                event.index: Index of the dropped node within siblings.</td>\n                            <td>Callback to invoke when a node is dropped.</td>\n                        </tr>\n                        <tr>\n                            <td>onFilter</td>\n                            <td>event.filter: Filter value used in filtering.<br>\n                                event.filteredValue: Filtered data after running the filtering.</td>\n                            <td>Callback to invoke when data is filtered.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-tree</td>\n                            <td>Main container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-tree-horizontal</td>\n                            <td>Main container element in horizontal mode</td>\n                        </tr>\n                        <tr>\n                            <td>ui-tree-container</td>\n                            <td>Container of nodes</td>\n                        </tr>\n                        <tr>\n                            <td>ui-treenode</td>\n                            <td>A treenode element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-treenode-content</td>\n                            <td>Content of a treenode</td>\n                        </tr>\n                        <tr>\n                            <td>ui-treenode-toggler</td>\n                            <td>Toggle icon</td>\n                        </tr>\n                        <tr>\n                            <td>ui-treenode-icon</td>\n                            <td>Icon of a treenode</td>\n                        </tr>\n                        <tr>\n                            <td>ui-treenode-label</td>\n                            <td>Label of a treenode</td>\n                        </tr>\n                        <tr>\n                            <td>ui-treenode-children</td>\n                            <td>Container element for node children</td>\n                        </tr>\n                        <tr>\n                            <td>ui-treenode-content-selected</td>\n                            <td>Content of a selected node.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tree-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Basic&lt;/h3&gt;\n&lt;p-tree [value]=\"files1\"&gt;&lt;/p-tree&gt;\n\n&lt;h3&gt;Programmatic&lt;/h3&gt;\n&lt;div style=\"margin-bottom: 1rem\"&gt;\n    &lt;button pButton type=\"button\" label=\"Expand all\" (click)=\"expandAll()\" style=\"margin-right: .5rem\"&gt;&lt;/button&gt;\n    &lt;button pButton type=\"button\" label=\"Collapse all\" (click)=\"collapseAll()\"&gt;&lt;/button&gt;\n&lt;/div&gt;\n&lt;p-tree [value]=\"files2\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component,OnInit&#125; from '@angular/core';\nimport &#123;NodeService&#125; from '../../service/nodeservice';\nimport &#123;TreeNode&#125; from 'primeng/api';\n\n@Component(&#123;\n    templateUrl: './treebasicdemo.html'\n&#125;)\nexport class TreeBasicDemo implements OnInit &#123;\n\n    files1: TreeNode[];\n    \n    files2: TreeNode[];\n    \n    constructor(private nodeService: NodeService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.nodeService.getFiles().then(files => this.files1 = files);\n        this.nodeService.getFiles().then(files => this.files2 = files);\n    &#125;\n    \n    expandAll()&#123;\n        this.files2.forEach( node => &#123;\n            this.expandRecursive(node, true);\n        &#125; );\n    &#125;\n\n    collapseAll()&#123;\n        this.files2.forEach( node => &#123;\n            this.expandRecursive(node, false);\n        &#125; );\n    &#125;\n    \n    private expandRecursive(node:TreeNode, isExpand:boolean)&#123;\n        node.expanded = isExpand;\n        if (node.children)&#123;\n            node.children.forEach( childNode => &#123;\n                this.expandRecursive(childNode, isExpand);\n            &#125; );\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tree-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treedragdropdemo.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treedragdropdemo.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_tree_treedragdropdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Tree <span class=\"subitem\">DragDrop</span></span>\n        <span>Nodes can be reordered within the same tree and also can be transferred between other trees using drag&drop.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3>Single Tree</h3>\n    <p>Node reordering within a tree.</p>\n    <p-tree [value]=\"files1\" [draggableNodes]=\"true\" [droppableNodes]=\"true\" draggableScope=\"self\" droppableScope=\"self\"></p-tree>\n\n    <h3>Multiple Trees</h3>\n    <p>Node reordering between multiple tree based on scope constraints.</p>\n    <div class=\"p-grid ui-fluid\">\n        <div class=\"p-col-12 p-md-4\">\n            <h4>Files</h4>\n            <p>Can transfer to Server 2.</p>\n            <p-tree [value]=\"files2\" [draggableNodes]=\"true\" [droppableNodes]=\"true\" droppableScope=\"files\" draggableScope=\"server2\"></p-tree>\n        </div>\n\n        <div class=\"p-col-12 p-md-4\">\n            <h4>Server 1</h4>\n            <p>Can transfer to Files.</p>\n            <p-tree [value]=\"files3\" [draggableNodes]=\"true\" [droppableNodes]=\"true\" droppableScope=\"server1\" draggableScope=\"files\"></p-tree>\n        </div>\n\n        <div class=\"p-col-12 p-md-4\">\n            <h4>Server 2</h4>\n            <p>Can transfer to Server 1.</p>\n            <p-tree [value]=\"files4\" [draggableNodes]=\"true\" [droppableNodes]=\"true\" droppableScope=\"server2\" draggableScope=\"server1\"></p-tree>\n        </div>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"treedragdropdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treedragdropdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treedragdrop-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component,OnInit&#125; from '@angular/core';\nimport &#123;NodeService&#125; from '../../service/nodeservice';\nimport &#123;TreeNode&#125; from 'primeng/api';\nimport &#123;TreeDragDropService&#125; from 'primeng/api';\nimport &#123;MessageService&#125; from 'primeng/api';\n\n@Component(&#123;\n    templateUrl: './treedragdropdemo.html',\n    providers: [TreeDragDropService,MessageService],\n    styles:[`\n        h4 &#123;\n            text-align: center;\n            margin: 0 0 8px 0;\n        &#125;\n    `]\n&#125;)\nexport class TreeDragDropDemo implements OnInit &#123;\n\n    files1: TreeNode[];\n\n    files2: TreeNode[];\n\n    files3: TreeNode[];\n\n    files4: TreeNode[];\n    \n    constructor(private nodeService: NodeService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.nodeService.getFiles().then(files => this.files1 = files);\n        this.nodeService.getFiles().then(files => this.files2 = files);\n        this.files3 = [&#123;\n                label: \"Backup\",\n                data: \"Backup Folder\",\n                expandedIcon: \"pi pi-folder-open\",\n                collapsedIcon: \"pi pi-folder\"\n            &#125;\n        ];\n\n        this.files4 = [&#123;\n                label: \"Storage\",\n                data: \"Storage Folder\",\n                expandedIcon: \"pi pi-folder-open\",\n                collapsedIcon: \"pi pi-folder\"\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"treedragdropdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treedragdropdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treedragdrop-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Single Tree&lt;/h3&gt;\n&lt;p&gt;Node reordering within a tree.&lt;/p&gt;\n&lt;p-tree [value]=\"files1\" [draggableNodes]=\"true\" [droppableNodes]=\"true\" draggableScope=\"self\" droppableScope=\"self\"&gt;&lt;/p-tree&gt;\n\n&lt;h3&gt;Multiple Trees&lt;/h3&gt;\n&lt;p&gt;Node reordering between multiple tree based on scope constraints.&lt;/p&gt;\n&lt;div class=\"p-grid ui-fluid\"&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;h4&gt;Files&lt;/h4&gt;\n        &lt;p&gt;Can transfer to Server 2.&lt;/p&gt;\n        &lt;p-tree [value]=\"files2\" [draggableNodes]=\"true\" [droppableNodes]=\"true\" droppableScope=\"files\" draggableScope=\"server2\"&gt;&lt;/p-tree&gt;\n    &lt;/div&gt;\n\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;h4&gt;Server 1&lt;/h4&gt;\n        &lt;p&gt;Can transfer to Files.&lt;/p&gt;\n        &lt;p-tree [value]=\"files3\" [draggableNodes]=\"true\" [droppableNodes]=\"true\" droppableScope=\"server1\" draggableScope=\"files\"&gt;&lt;/p-tree&gt;\n    &lt;/div&gt;\n\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;h4&gt;Server 2&lt;/h4&gt;\n        &lt;p&gt;Can transfer to Server 1.&lt;/p&gt;\n        &lt;p-tree [value]=\"files4\" [draggableNodes]=\"true\" [droppableNodes]=\"true\" droppableScope=\"server2\" draggableScope=\"server1\"&gt;&lt;/p-tree&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-treedragdrop-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treefilterdemo.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treefilterdemo.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_tree_treefilterdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Tree <span class=\"subitem\">Filter</span></span>\n        <span>Tree supports two types of filtering with different behaviors.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3>Lenient Filter Mode</h3>\n    <p-tree [value]=\"files1\" [filter]=\"true\"></p-tree>\n\n    <h3>Strict Filter Mode</h3>\n    <p-tree [value]=\"files2\" [filter]=\"true\" filterMode=\"strict\"></p-tree>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"treefilterdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treefilterdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treefilter-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component,OnInit&#125; from '@angular/core';\nimport &#123;NodeService&#125; from '../../service/nodeservice';\nimport &#123;TreeNode&#125; from 'primeng/api';\n\n@Component(&#123;\n    templateUrl: './treefilterdemo.html'\n&#125;)\nexport class TreeFilterDemo implements OnInit &#123;\n\n    files1: TreeNode[];\n\n    files2: TreeNode[];\n    \n    constructor(private nodeService: NodeService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.nodeService.getFiles().then(files => this.files1 = files);\n        this.nodeService.getFiles().then(files => this.files2 = files);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"treefilterdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treefilterdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treefilter-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Lenient Filter Mode&lt;/h3&gt;\n&lt;p-tree [value]=\"files1\" [filter]=\"true\"&gt;&lt;/p-tree&gt;\n\n&lt;h3&gt;Strict Filter Mode&lt;/h3&gt;\n&lt;p-tree [value]=\"files2\" [filter]=\"true\" filterMode=\"strict\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-treefilter-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treehorizontaldemo.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treehorizontaldemo.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_tree_treehorizontaldemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Tree <span class=\"subitem\">Horizontal</span></span>\n        <span>Horizontal orientation is the alternative layout option.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-tree [value]=\"files\" layout=\"horizontal\" selectionMode=\"single\" [(selection)]=\"selectedFile\"></p-tree>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"treehorizontaldemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treehorizontaldemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treehorizontal-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component,OnInit&#125; from '@angular/core';\nimport &#123;NodeService&#125; from '../../service/nodeservice';\nimport &#123;TreeNode&#125; from 'primeng/api';\n\n@Component(&#123;\n    templateUrl: './treehorizontaldemo.html'\n&#125;)\nexport class TreeHorizontalDemo implements OnInit &#123;\n\n    files: TreeNode[];\n\n    selectedFile: TreeNode;\n    \n    constructor(private nodeService: NodeService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.nodeService.getFiles().then(files => &#123;\n            this.files = [&#123;\n                label: 'Root',\n                children: files\n            &#125;];\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"treehorizontaldemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treehorizontaldemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treehorizontal-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" layout=\"horizontal\" selectionMode=\"single\" [(selection)]=\"selectedFile\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-treehorizontal-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treelazydemo.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treelazydemo.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_tree_treelazydemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Tree <span class=\"subitem\">Lazy</span></span>\n        <span>Lazy loading is handy to reduce the initial load time by loading the nodes on demand only with the expand event.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-tree [value]=\"files\" (onNodeExpand)=\"nodeExpand($event)\" [loading]=\"loading\"></p-tree>\n\n    <p-toast></p-toast>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"treelazydemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treelazydemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treelazy-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component,OnInit&#125; from '@angular/core';\nimport &#123;NodeService&#125; from '../../service/nodeservice';\nimport &#123;TreeNode&#125; from 'primeng/api';\nimport &#123;MessageService&#125; from 'primeng/api';\n\n@Component(&#123;\n    templateUrl: './treelazydemo.html',\n    providers: [MessageService]\n&#125;)\nexport class TreeLazyDemo implements OnInit &#123;\n\n    files: TreeNode[];\n\n    loading: boolean;\n    \n    constructor(private nodeService: NodeService, private messageService: MessageService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.loading = true;\n        setTimeout(() => &#123;\n            this.nodeService.getLazyFiles().then(files => this.files = files);\n            this.loading = false;\n        &#125;, 1000);\n    &#125;\n\n    nodeExpand(event) &#123;\n        if (event.node) &#123;\n            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children\n            this.nodeService.getLazyFiles().then(nodes => &#123;\n                event.node.children = nodes\n                this.messageService.add(&#123;severity: 'info', summary: 'Children Loaded', detail: event.node.label&#125;);\n            &#125;);\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"treelazydemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treelazydemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treelazy-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\" (onNodeExpand)=\"nodeExpand($event)\" [loading]=\"loading\"&gt;&lt;/p-tree&gt;\n\n&lt;p-toast&gt;&lt;/p-toast&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-treelazy-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treescrolldemo.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treescrolldemo.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_tree_treescrolldemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Tree <span class=\"subitem\">Scroll</span></span>\n        <span>Regular scrolling is used to preserve space as content of the tree is dynamic whereas virtual scrolling is a performant approach to large data rendering.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3>Regular Scroll</h3>\n    <p-tree [value]=\"files1\" scrollHeight=\"200px\"></p-tree>\n\n    <h3>Flexible Viewport</h3>\n    <p>Flex scroll feature makes the scrollable viewport section dynamic so that it can grow or shrink relative to the parent size of the tree. Click the button below\n        to display a resizable and maximizable Dialog where data viewport adjusts itself according to the size changes.</p>\n\n    <button type=\"button\" (click)=\"showDialog()\" pButton icon=\"pi pi-external-link\" label=\"View\"></button>\n    <p-dialog header=\"Flexible ScrollHeight\" [(visible)]=\"dialogVisible\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\" [maximizable]=\"true\" [modal]=\"true\" \n        [resizable]=\"true\" [contentStyle]=\"{height: '300px'}\" styleClass=\"ui-fluid\">\n        <p-tree [value]=\"files2\" scrollHeight=\"flex\"></p-tree>   \n    </p-dialog>\n\n    <h3>Virtual Scroll</h3>\n    <p-tree [value]=\"files3\" [virtualScroll]=\"true\" [virtualNodeHeight]=\"33\" scrollHeight=\"200px\"></p-tree>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"treescrolldemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treescrolldemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treescroll-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n\n<pre>\n<code class=\"language-javascript\" pCode ngNonBindable>\nimport &#123;Component,OnInit&#125; from '@angular/core';\nimport &#123;NodeService&#125; from '../../service/nodeservice';\nimport &#123;TreeNode&#125; from 'primeng/api';\n\n@Component(&#123;\n    templateUrl: './treescrolldemo.html'\n&#125;)\nexport class TreeScrollDemo implements OnInit &#123;\n\n    files1: TreeNode[];\n\n    files2: TreeNode[];\n\n    files3: TreeNode[];\n\n    dialogVisible: boolean;\n    \n    constructor(private nodeService: NodeService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.nodeService.getFiles().then(files => this.files1 = files);\n        this.files2 = Array.from(&#123;length: 100&#125;).map((_,i) => this.createNode(i, 2));\n        this.files3 = Array.from(&#123;length: 50&#125;).map((_,i) => this.createNode(i, 1000));\n    &#125;\n\n    createNode(i: number, children: number): TreeNode &#123;\n        let node: TreeNode = &#123;\n            label: 'Node ' + i,\n            data: 'Node ' + i,\n            expandedIcon: 'pi pi-folder-open',\n            collapsedIcon: 'pi pi-folder',\n            children: Array.from(&#123;length: children&#125;).map((_,j) => &#123;\n                return &#123;\n                    label: 'Node ' + i + '.' + j, \n                    data: 'Node ' + i + '.' + j, \n                    icon: 'pi pi-file-o'\n                &#125;\n            &#125;)\n        &#125;;\n\n        return node;\n    &#125;\n\n    showDialog() &#123;\n        this.dialogVisible = true;\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"treescrolldemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treescrolldemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treescroll-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Regular Scroll&lt;/h3&gt;\n&lt;p-tree [value]=\"files1\" scrollHeight=\"200px\"&gt;&lt;/p-tree&gt;\n\n&lt;h3&gt;Flexible Viewport&lt;/h3&gt;\n&lt;p&gt;Flex scroll feature makes the scrollable viewport section dynamic so that it can grow or shrink relative to the parent size of the tree. Click the button below\n    to display a resizable and maximizable Dialog where data viewport adjusts itself according to the size changes.&lt;/p&gt;\n\n&lt;button type=\"button\" (click)=\"showDialog()\" pButton icon=\"pi pi-external-link\" label=\"View\"&gt;&lt;/button&gt;\n&lt;p-dialog header=\"Flexible ScrollHeight\" [(visible)]=\"dialogVisible\" [style]=\"&#123;width: '50vw'&#125;\" [baseZIndex]=\"10000\" [maximizable]=\"true\" [modal]=\"true\" \n    [resizable]=\"true\" [contentStyle]=\"&#123;height: '300px'&#125;\" styleClass=\"ui-fluid\"&gt;\n    &lt;p-tree [value]=\"files2\" scrollHeight=\"flex\"&gt;&lt;/p-tree&gt;   \n&lt;/p-dialog&gt;\n\n&lt;h3&gt;Virtual Scroll&lt;/h3&gt;\n&lt;p-tree [value]=\"files3\" [virtualScroll]=\"true\" [virtualNodeHeight]=\"33\" scrollHeight=\"200px\"&gt;&lt;/p-tree&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-treescroll-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treeselectiondemo.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treeselectiondemo.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_tree_treeselectiondemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Tree <span class=\"subitem\">Selection</span></span>\n        <span>Single, Multiple and Checkbox are the available modes for node selection.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3>Single Selection</h3>\n    <p-tree [value]=\"files1\" selectionMode=\"single\" [(selection)]=\"selectedFile\"\n        (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\"></p-tree>\n    <div>Selected Node: {{selectedFile ? selectedFile.label : 'none'}}</div>\n\n    <h3>Multiple Selection with Metakey</h3>\n    <p-tree [value]=\"files2\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles1\"\n        (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\"></p-tree>\n    <div>Selected Nodes: <span *ngFor=\"let file of selectedFiles1\">{{file.label}}</span></div>\n\n    <h3>Multiple Selection with Checkbox</h3>\n    <p-tree [value]=\"files3\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles2\"></p-tree>\n    <div>Selected Nodes: <span *ngFor=\"let file of selectedFiles2\">{{file.label}}</span></div>\n\n    <p-toast></p-toast>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"treeselectiondemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treeselectiondemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treeselection-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component,OnInit&#125; from '@angular/core';\nimport &#123;NodeService&#125; from '../../service/nodeservice';\nimport &#123;TreeNode&#125; from 'primeng/api';\nimport &#123;MessageService&#125; from 'primeng/api';\n\n@Component(&#123;\n    templateUrl: './treeselectiondemo.html',\n    providers: [MessageService]\n&#125;)\nexport class TreeSelectionDemo implements OnInit &#123;\n\n    files1: TreeNode[];\n\n    files2: TreeNode[];\n\n    files3: TreeNode[];\n\n    selectedFile: TreeNode;\n\n    selectedFiles1: TreeNode;\n\n    selectedFiles2: TreeNode;\n    \n    constructor(private nodeService: NodeService, private messageService: MessageService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.nodeService.getFiles().then(files => this.files1 = files);\n        this.nodeService.getFiles().then(files => this.files2 = files);\n        this.nodeService.getFiles().then(files => this.files3 = files);\n    &#125;\n\n    nodeSelect(event) &#123;\n        this.messageService.add(&#123;severity: 'info', summary: 'Node Selected', detail: event.node.label&#125;);\n    &#125;\n    \n    nodeUnselect(event) &#123;\n        this.messageService.add(&#123;severity: 'info', summary: 'Node Unselected', detail: event.node.label&#125;);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"treeselectiondemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treeselectiondemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treeselection-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Single Selection&lt;/h3&gt;\n&lt;p-tree [value]=\"files1\" selectionMode=\"single\" [(selection)]=\"selectedFile\"\n    (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\"&gt;&lt;/p-tree&gt;\n&lt;div&gt;Selected Node: &#123;&#123;selectedFile ? selectedFile.label : 'none'&#125;&#125;&lt;/div&gt;\n\n&lt;h3&gt;Multiple Selection with Metakey&lt;/h3&gt;\n&lt;p-tree [value]=\"files2\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles1\"\n    (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\"&gt;&lt;/p-tree&gt;\n&lt;div&gt;Selected Nodes: &lt;span *ngFor=\"let file of selectedFiles1\"&gt;&#123;&#123;file.label&#125;&#125;&lt;/span&gt;&lt;/div&gt;\n\n&lt;h3&gt;Multiple Selection with Checkbox&lt;/h3&gt;\n&lt;p-tree [value]=\"files3\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles2\"&gt;&lt;/p-tree&gt;\n&lt;div&gt;Selected Nodes: &lt;span *ngFor=\"let file of selectedFiles2\"&gt;&#123;&#123;file.label&#125;&#125;&lt;/span&gt;&lt;/div&gt;\n\n&lt;p-toast&gt;&lt;/p-toast&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-treeselection-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treetemplatingdemo.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treetemplatingdemo.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_tree_treetemplatingdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Tree <span class=\"subitem\">Templating</span></span>\n        <span>Custom content support inside node content is provided via templating.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-tree [value]=\"files\">\n        <ng-template let-node pTemplate=\"default\">\n            <input [(ngModel)]=\"node.label\" type=\"text\" style=\"width:100%\" class=\"ui-inputtext\">\n        </ng-template>\n    </p-tree>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"treetemplatingdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treetemplatingdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treetemplating-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component,OnInit&#125; from '@angular/core';\nimport &#123;NodeService&#125; from '../../service/nodeservice';\nimport &#123;TreeNode&#125; from 'primeng/api';\n\n@Component(&#123;\n    templateUrl: './treetemplatingdemo.html',\n    styles:[`\n        .ui-inputtext &#123;\n            padding-top: 0;\n            padding-bottom: 0;\n            font-size: 12px;\n        &#125;\n    `]\n&#125;)\nexport class TreeTemplatingDemo implements OnInit &#123;\n\n    files: TreeNode[];\n    \n    constructor(private nodeService: NodeService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.nodeService.getFiles().then(files => this.files = files);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"treetemplatingdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tree/treetemplatingdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-treetemplating-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tree [value]=\"files\"&gt;\n    &lt;ng-template let-node pTemplate=\"default\"&gt;\n        &lt;input [(ngModel)]=\"node.label\" type=\"text\" style=\"width:100%\" class=\"ui-inputtext\"&gt;\n    &lt;/ng-template&gt;\n&lt;/p-tree&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-treetemplating-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./src/app/showcase/components/tree/treecontextmenudemo.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/showcase/components/tree/treecontextmenudemo.ts ***!
    \*****************************************************************/

  /*! exports provided: TreeContextMenuDemo */

  /***/
  function _src_app_showcase_components_tree_treecontextmenudemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeContextMenuDemo", function () {
      return TreeContextMenuDemo;
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


    var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/nodeservice */
    "./src/app/showcase/service/nodeservice.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var TreeContextMenuDemo = /*#__PURE__*/function () {
      function TreeContextMenuDemo(nodeService, messageService) {
        _classCallCheck(this, TreeContextMenuDemo);

        this.nodeService = nodeService;
        this.messageService = messageService;
      }

      return _createClass(TreeContextMenuDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.nodeService.getFiles().then(function (files) {
            return _this.files = files;
          });
          this.items = [{
            label: 'View',
            icon: 'pi pi-search',
            command: function command(event) {
              return _this.viewFile(_this.selectedFile);
            }
          }, {
            label: 'Unselect',
            icon: 'pi pi-times',
            command: function command(event) {
              return _this.unselectFile();
            }
          }];
        }
      }, {
        key: "viewFile",
        value: function viewFile(file) {
          this.messageService.add({
            severity: 'info',
            summary: 'Node Details',
            detail: file.label
          });
        }
      }, {
        key: "unselectFile",
        value: function unselectFile() {
          this.selectedFile = null;
        }
      }]);
    }();

    TreeContextMenuDemo.ctorParameters = function () {
      return [{
        type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };

    TreeContextMenuDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./treecontextmenudemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treecontextmenudemo.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])], TreeContextMenuDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/tree/treedemo-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/showcase/components/tree/treedemo-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: TreeDemoRoutingModule */

  /***/
  function _src_app_showcase_components_tree_treedemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeDemoRoutingModule", function () {
      return TreeDemoRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _treedemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./treedemo */
    "./src/app/showcase/components/tree/treedemo.ts");
    /* harmony import */


    var _treetemplatingdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./treetemplatingdemo */
    "./src/app/showcase/components/tree/treetemplatingdemo.ts");
    /* harmony import */


    var _treeselectiondemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./treeselectiondemo */
    "./src/app/showcase/components/tree/treeselectiondemo.ts");
    /* harmony import */


    var _treefilterdemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./treefilterdemo */
    "./src/app/showcase/components/tree/treefilterdemo.ts");
    /* harmony import */


    var _treelazydemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./treelazydemo */
    "./src/app/showcase/components/tree/treelazydemo.ts");
    /* harmony import */


    var _treescrolldemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./treescrolldemo */
    "./src/app/showcase/components/tree/treescrolldemo.ts");
    /* harmony import */


    var _treecontextmenudemo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./treecontextmenudemo */
    "./src/app/showcase/components/tree/treecontextmenudemo.ts");
    /* harmony import */


    var _treedragdropdemo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./treedragdropdemo */
    "./src/app/showcase/components/tree/treedragdropdemo.ts");
    /* harmony import */


    var _treehorizontaldemo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./treehorizontaldemo */
    "./src/app/showcase/components/tree/treehorizontaldemo.ts");

    var TreeDemoRoutingModule = /*#__PURE__*/_createClass(function TreeDemoRoutingModule() {
      _classCallCheck(this, TreeDemoRoutingModule);
    });

    TreeDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _treedemo__WEBPACK_IMPORTED_MODULE_3__["TreeDemo"]
      }, {
        path: 'templating',
        component: _treetemplatingdemo__WEBPACK_IMPORTED_MODULE_4__["TreeTemplatingDemo"]
      }, {
        path: 'selection',
        component: _treeselectiondemo__WEBPACK_IMPORTED_MODULE_5__["TreeSelectionDemo"]
      }, {
        path: 'filter',
        component: _treefilterdemo__WEBPACK_IMPORTED_MODULE_6__["TreeFilterDemo"]
      }, {
        path: 'lazy',
        component: _treelazydemo__WEBPACK_IMPORTED_MODULE_7__["TreeLazyDemo"]
      }, {
        path: 'scroll',
        component: _treescrolldemo__WEBPACK_IMPORTED_MODULE_8__["TreeScrollDemo"]
      }, {
        path: 'contextmenu',
        component: _treecontextmenudemo__WEBPACK_IMPORTED_MODULE_9__["TreeContextMenuDemo"]
      }, {
        path: 'dragdrop',
        component: _treedragdropdemo__WEBPACK_IMPORTED_MODULE_10__["TreeDragDropDemo"]
      }, {
        path: 'horizontal',
        component: _treehorizontaldemo__WEBPACK_IMPORTED_MODULE_11__["TreeHorizontalDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TreeDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/tree/treedemo.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/showcase/components/tree/treedemo.module.ts ***!
    \*************************************************************/

  /*! exports provided: TreeDemoModule */

  /***/
  function _src_app_showcase_components_tree_treedemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeDemoModule", function () {
      return TreeDemoModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _treedemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./treedemo */
    "./src/app/showcase/components/tree/treedemo.ts");
    /* harmony import */


    var _treetemplatingdemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./treetemplatingdemo */
    "./src/app/showcase/components/tree/treetemplatingdemo.ts");
    /* harmony import */


    var _treeselectiondemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./treeselectiondemo */
    "./src/app/showcase/components/tree/treeselectiondemo.ts");
    /* harmony import */


    var _treefilterdemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./treefilterdemo */
    "./src/app/showcase/components/tree/treefilterdemo.ts");
    /* harmony import */


    var _treescrolldemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./treescrolldemo */
    "./src/app/showcase/components/tree/treescrolldemo.ts");
    /* harmony import */


    var _treelazydemo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./treelazydemo */
    "./src/app/showcase/components/tree/treelazydemo.ts");
    /* harmony import */


    var _treecontextmenudemo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./treecontextmenudemo */
    "./src/app/showcase/components/tree/treecontextmenudemo.ts");
    /* harmony import */


    var _treedragdropdemo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./treedragdropdemo */
    "./src/app/showcase/components/tree/treedragdropdemo.ts");
    /* harmony import */


    var _treehorizontaldemo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./treehorizontaldemo */
    "./src/app/showcase/components/tree/treehorizontaldemo.ts");
    /* harmony import */


    var _treedemo_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./treedemo-routing.module */
    "./src/app/showcase/components/tree/treedemo-routing.module.ts");
    /* harmony import */


    var primeng_tree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/tree */
    "./src/app/components/tree/public_api.ts");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/toast */
    "./src/app/components/toast/public_api.ts");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/dialog */
    "./src/app/components/dialog/public_api.ts");
    /* harmony import */


    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/contextmenu */
    "./src/app/components/contextmenu/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var TreeDemoModule = /*#__PURE__*/_createClass(function TreeDemoModule() {
      _classCallCheck(this, TreeDemoModule);
    });

    TreeDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _treedemo_routing_module__WEBPACK_IMPORTED_MODULE_13__["TreeDemoRoutingModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_14__["TreeModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"], primeng_button__WEBPACK_IMPORTED_MODULE_16__["ButtonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_19__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_20__["CodeHighlighterModule"]],
      declarations: [_treedemo__WEBPACK_IMPORTED_MODULE_4__["TreeDemo"], _treetemplatingdemo__WEBPACK_IMPORTED_MODULE_5__["TreeTemplatingDemo"], _treeselectiondemo__WEBPACK_IMPORTED_MODULE_6__["TreeSelectionDemo"], _treefilterdemo__WEBPACK_IMPORTED_MODULE_7__["TreeFilterDemo"], _treelazydemo__WEBPACK_IMPORTED_MODULE_9__["TreeLazyDemo"], _treescrolldemo__WEBPACK_IMPORTED_MODULE_8__["TreeScrollDemo"], _treecontextmenudemo__WEBPACK_IMPORTED_MODULE_10__["TreeContextMenuDemo"], _treedragdropdemo__WEBPACK_IMPORTED_MODULE_11__["TreeDragDropDemo"], _treehorizontaldemo__WEBPACK_IMPORTED_MODULE_12__["TreeHorizontalDemo"]]
    })], TreeDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/tree/treedemo.ts":
  /*!******************************************************!*\
    !*** ./src/app/showcase/components/tree/treedemo.ts ***!
    \******************************************************/

  /*! exports provided: TreeDemo */

  /***/
  function _src_app_showcase_components_tree_treedemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeDemo", function () {
      return TreeDemo;
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


    var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/nodeservice */
    "./src/app/showcase/service/nodeservice.ts");

    var TreeDemo = /*#__PURE__*/function () {
      function TreeDemo(nodeService) {
        _classCallCheck(this, TreeDemo);

        this.nodeService = nodeService;
      }

      return _createClass(TreeDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.nodeService.getFiles().then(function (files) {
            return _this2.files1 = files;
          });
          this.nodeService.getFiles().then(function (files) {
            return _this2.files2 = files;
          });
        }
      }, {
        key: "expandAll",
        value: function expandAll() {
          var _this3 = this;

          this.files2.forEach(function (node) {
            _this3.expandRecursive(node, true);
          });
        }
      }, {
        key: "collapseAll",
        value: function collapseAll() {
          var _this4 = this;

          this.files2.forEach(function (node) {
            _this4.expandRecursive(node, false);
          });
        }
      }, {
        key: "expandRecursive",
        value: function expandRecursive(node, isExpand) {
          var _this5 = this;

          node.expanded = isExpand;

          if (node.children) {
            node.children.forEach(function (childNode) {
              _this5.expandRecursive(childNode, isExpand);
            });
          }
        }
      }]);
    }();

    TreeDemo.ctorParameters = function () {
      return [{
        type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]
      }];
    };

    TreeDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./treedemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treedemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])], TreeDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/tree/treedragdropdemo.ts":
  /*!**************************************************************!*\
    !*** ./src/app/showcase/components/tree/treedragdropdemo.ts ***!
    \**************************************************************/

  /*! exports provided: TreeDragDropDemo */

  /***/
  function _src_app_showcase_components_tree_treedragdropdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeDragDropDemo", function () {
      return TreeDragDropDemo;
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


    var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/nodeservice */
    "./src/app/showcase/service/nodeservice.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var TreeDragDropDemo = /*#__PURE__*/function () {
      function TreeDragDropDemo(nodeService) {
        _classCallCheck(this, TreeDragDropDemo);

        this.nodeService = nodeService;
      }

      return _createClass(TreeDragDropDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.nodeService.getFiles().then(function (files) {
            return _this6.files1 = files;
          });
          this.nodeService.getFiles().then(function (files) {
            return _this6.files2 = files;
          });
          this.files3 = [{
            label: "Backup",
            data: "Backup Folder",
            expandedIcon: "pi pi-folder-open",
            collapsedIcon: "pi pi-folder"
          }];
          this.files4 = [{
            label: "Storage",
            data: "Storage Folder",
            expandedIcon: "pi pi-folder-open",
            collapsedIcon: "pi pi-folder"
          }];
        }
      }]);
    }();

    TreeDragDropDemo.ctorParameters = function () {
      return [{
        type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]
      }];
    };

    TreeDragDropDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./treedragdropdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treedragdropdemo.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["TreeDragDropService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
      styles: ["\n        h4 {\n            text-align: center;\n            margin: 0 0 8px 0;\n        }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])], TreeDragDropDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/tree/treefilterdemo.ts":
  /*!************************************************************!*\
    !*** ./src/app/showcase/components/tree/treefilterdemo.ts ***!
    \************************************************************/

  /*! exports provided: TreeFilterDemo */

  /***/
  function _src_app_showcase_components_tree_treefilterdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeFilterDemo", function () {
      return TreeFilterDemo;
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


    var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/nodeservice */
    "./src/app/showcase/service/nodeservice.ts");

    var TreeFilterDemo = /*#__PURE__*/function () {
      function TreeFilterDemo(nodeService) {
        _classCallCheck(this, TreeFilterDemo);

        this.nodeService = nodeService;
      }

      return _createClass(TreeFilterDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.nodeService.getFiles().then(function (files) {
            return _this7.files1 = files;
          });
          this.nodeService.getFiles().then(function (files) {
            return _this7.files2 = files;
          });
        }
      }]);
    }();

    TreeFilterDemo.ctorParameters = function () {
      return [{
        type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]
      }];
    };

    TreeFilterDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./treefilterdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treefilterdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])], TreeFilterDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/tree/treehorizontaldemo.ts":
  /*!****************************************************************!*\
    !*** ./src/app/showcase/components/tree/treehorizontaldemo.ts ***!
    \****************************************************************/

  /*! exports provided: TreeHorizontalDemo */

  /***/
  function _src_app_showcase_components_tree_treehorizontaldemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeHorizontalDemo", function () {
      return TreeHorizontalDemo;
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


    var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/nodeservice */
    "./src/app/showcase/service/nodeservice.ts");

    var TreeHorizontalDemo = /*#__PURE__*/function () {
      function TreeHorizontalDemo(nodeService) {
        _classCallCheck(this, TreeHorizontalDemo);

        this.nodeService = nodeService;
      }

      return _createClass(TreeHorizontalDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.nodeService.getFiles().then(function (files) {
            _this8.files = [{
              label: 'Root',
              children: files
            }];
          });
        }
      }]);
    }();

    TreeHorizontalDemo.ctorParameters = function () {
      return [{
        type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]
      }];
    };

    TreeHorizontalDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./treehorizontaldemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treehorizontaldemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])], TreeHorizontalDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/tree/treelazydemo.ts":
  /*!**********************************************************!*\
    !*** ./src/app/showcase/components/tree/treelazydemo.ts ***!
    \**********************************************************/

  /*! exports provided: TreeLazyDemo */

  /***/
  function _src_app_showcase_components_tree_treelazydemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeLazyDemo", function () {
      return TreeLazyDemo;
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


    var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/nodeservice */
    "./src/app/showcase/service/nodeservice.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var TreeLazyDemo = /*#__PURE__*/function () {
      function TreeLazyDemo(nodeService, messageService) {
        _classCallCheck(this, TreeLazyDemo);

        this.nodeService = nodeService;
        this.messageService = messageService;
      }

      return _createClass(TreeLazyDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.loading = true;
          setTimeout(function () {
            _this9.nodeService.getLazyFiles().then(function (files) {
              return _this9.files = files;
            });

            _this9.loading = false;
          }, 1000);
        }
      }, {
        key: "nodeExpand",
        value: function nodeExpand(event) {
          var _this10 = this;

          if (event.node) {
            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getLazyFiles().then(function (nodes) {
              event.node.children = nodes;

              _this10.messageService.add({
                severity: 'info',
                summary: 'Children Loaded',
                detail: event.node.label
              });
            });
          }
        }
      }]);
    }();

    TreeLazyDemo.ctorParameters = function () {
      return [{
        type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };

    TreeLazyDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./treelazydemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treelazydemo.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])], TreeLazyDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/tree/treescrolldemo.ts":
  /*!************************************************************!*\
    !*** ./src/app/showcase/components/tree/treescrolldemo.ts ***!
    \************************************************************/

  /*! exports provided: TreeScrollDemo */

  /***/
  function _src_app_showcase_components_tree_treescrolldemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeScrollDemo", function () {
      return TreeScrollDemo;
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


    var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/nodeservice */
    "./src/app/showcase/service/nodeservice.ts");

    var TreeScrollDemo = /*#__PURE__*/function () {
      function TreeScrollDemo(nodeService) {
        _classCallCheck(this, TreeScrollDemo);

        this.nodeService = nodeService;
      }

      return _createClass(TreeScrollDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.nodeService.getFiles().then(function (files) {
            return _this11.files1 = files;
          });
          this.files2 = Array.from({
            length: 100
          }).map(function (_, i) {
            return _this11.createNode(i, 2);
          });
          this.files3 = Array.from({
            length: 50
          }).map(function (_, i) {
            return _this11.createNode(i, 1000);
          });
        }
      }, {
        key: "createNode",
        value: function createNode(i, children) {
          var node = {
            label: 'Node ' + i,
            data: 'Node ' + i,
            expandedIcon: 'pi pi-folder-open',
            collapsedIcon: 'pi pi-folder',
            children: Array.from({
              length: children
            }).map(function (_, j) {
              return {
                label: 'Node ' + i + '.' + j,
                data: 'Node ' + i + '.' + j,
                icon: 'pi pi-file-o'
              };
            })
          };
          return node;
        }
      }, {
        key: "showDialog",
        value: function showDialog() {
          this.dialogVisible = true;
        }
      }]);
    }();

    TreeScrollDemo.ctorParameters = function () {
      return [{
        type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]
      }];
    };

    TreeScrollDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./treescrolldemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treescrolldemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])], TreeScrollDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/tree/treeselectiondemo.ts":
  /*!***************************************************************!*\
    !*** ./src/app/showcase/components/tree/treeselectiondemo.ts ***!
    \***************************************************************/

  /*! exports provided: TreeSelectionDemo */

  /***/
  function _src_app_showcase_components_tree_treeselectiondemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeSelectionDemo", function () {
      return TreeSelectionDemo;
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


    var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/nodeservice */
    "./src/app/showcase/service/nodeservice.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var TreeSelectionDemo = /*#__PURE__*/function () {
      function TreeSelectionDemo(nodeService, messageService) {
        _classCallCheck(this, TreeSelectionDemo);

        this.nodeService = nodeService;
        this.messageService = messageService;
      }

      return _createClass(TreeSelectionDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.nodeService.getFiles().then(function (files) {
            return _this12.files1 = files;
          });
          this.nodeService.getFiles().then(function (files) {
            return _this12.files2 = files;
          });
          this.nodeService.getFiles().then(function (files) {
            return _this12.files3 = files;
          });
        }
      }, {
        key: "nodeSelect",
        value: function nodeSelect(event) {
          this.messageService.add({
            severity: 'info',
            summary: 'Node Selected',
            detail: event.node.label
          });
        }
      }, {
        key: "nodeUnselect",
        value: function nodeUnselect(event) {
          this.messageService.add({
            severity: 'info',
            summary: 'Node Unselected',
            detail: event.node.label
          });
        }
      }]);
    }();

    TreeSelectionDemo.ctorParameters = function () {
      return [{
        type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };

    TreeSelectionDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./treeselectiondemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treeselectiondemo.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])], TreeSelectionDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/tree/treetemplatingdemo.ts":
  /*!****************************************************************!*\
    !*** ./src/app/showcase/components/tree/treetemplatingdemo.ts ***!
    \****************************************************************/

  /*! exports provided: TreeTemplatingDemo */

  /***/
  function _src_app_showcase_components_tree_treetemplatingdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeTemplatingDemo", function () {
      return TreeTemplatingDemo;
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


    var _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/nodeservice */
    "./src/app/showcase/service/nodeservice.ts");

    var TreeTemplatingDemo = /*#__PURE__*/function () {
      function TreeTemplatingDemo(nodeService) {
        _classCallCheck(this, TreeTemplatingDemo);

        this.nodeService = nodeService;
      }

      return _createClass(TreeTemplatingDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.nodeService.getFiles().then(function (files) {
            return _this13.files = files;
          });
        }
      }]);
    }();

    TreeTemplatingDemo.ctorParameters = function () {
      return [{
        type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]
      }];
    };

    TreeTemplatingDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./treetemplatingdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tree/treetemplatingdemo.html"))["default"],
      styles: ["\n        .ui-inputtext {\n            padding-top: 0;\n            padding-bottom: 0;\n            font-size: 12px;\n        }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_nodeservice__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])], TreeTemplatingDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-tree-treedemo-module-es5.js.map