(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(13),n(1)),s=n(2),i=n(4),u=n(3),h=n(5),m=(n(15),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.book,t=e.title,n=e.link,a=e.image_url;return r.a.createElement("a",{href:n,title:t},r.a.createElement("img",{className:"book",src:a,alt:t}))}}]),t}(a.Component)),f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={shelf:!1},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://goodreads-shelves.herokuapp.com/").then(function(e){return e.json()}).then(function(t){e.setState({shelf:t})}).catch(function(e){console.error(e)})}},{key:"renderCurrentShelf",value:function(){var e=this.state.shelf.current.books;return r.a.createElement("div",{id:"current-shelf"},e.map(function(e,t){return r.a.createElement(m,{book:e.book,key:t})}))}},{key:"renderReadShelf",value:function(){var e=this.state.shelf.read.books;return r.a.createElement("div",{id:"read-shelf"},e.map(function(e,t){return r.a.createElement(m,{book:e.book,key:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h6",null,"Dunnkers' Digital Reading Shelf ",r.a.createElement("span",{role:"img","aria-label":"Book"},"\ud83d\udcd9"))),r.a.createElement("section",{className:"Shelf"},r.a.createElement("h4",{className:"header"},"Currently reading"),this.state.shelf?this.renderCurrentShelf():r.a.createElement("span",null),r.a.createElement("h4",{className:"header"},"Read"),this.state.shelf?this.renderReadShelf():r.a.createElement("span",null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.66a6205e.chunk.js.map