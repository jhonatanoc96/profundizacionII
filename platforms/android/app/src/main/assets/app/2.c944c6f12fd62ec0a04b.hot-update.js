webpackHotUpdate(2,{

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!-- \n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!-- \n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\" ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Home\"></Label>\n</ActionBar>\n\n<GridLayout class=\"page__content\">\n    <Label class=\"page__content-icon fas\" text=\"&#xf015;\"></Label>\n    <Label class=\"page__content-placeholder\" text=\"<!-- Page content goes here -->\"></Label>\n    <Button text=\"Profundización!\" class=\"btn btn-primary\"></Button>\n    <Button text=\"Volver\" (tap)=\"salir()\"></Button>\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOHpCQUE4ekIsZ1EiLCJmaWxlIjoiMi5jOTQ0YzZmMTJmZDYyZWMwYTA0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxuICAgIDwhLS0gXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXG4gICAgLS0+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwhLS0gXFxuICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxcbiAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXFxuICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cXG4gICAgLS0+XFxuICAgIDxBY3Rpb25JdGVtIGljb249XFxcInJlczovL21lbnVcXFwiIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCIgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIj5cXG4gICAgPC9BY3Rpb25JdGVtPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiSG9tZVxcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dCBjbGFzcz1cXFwicGFnZV9fY29udGVudFxcXCI+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwicGFnZV9fY29udGVudC1pY29uIGZhc1xcXCIgdGV4dD1cXFwiJiN4ZjAxNTtcXFwiPjwvTGFiZWw+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwicGFnZV9fY29udGVudC1wbGFjZWhvbGRlclxcXCIgdGV4dD1cXFwiPCEtLSBQYWdlIGNvbnRlbnQgZ29lcyBoZXJlIC0tPlxcXCI+PC9MYWJlbD5cXG4gICAgPEJ1dHRvbiB0ZXh0PVxcXCJQcm9mdW5kaXphY2nDs24hXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cXG4gICAgPEJ1dHRvbiB0ZXh0PVxcXCJWb2x2ZXJcXFwiICh0YXApPVxcXCJzYWxpcigpXFxcIj48L0J1dHRvbj5cXG48L0dyaWRMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9