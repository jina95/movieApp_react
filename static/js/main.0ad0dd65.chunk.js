(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{20:function(e,t,a){e.exports=a(47)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(13),i=a.n(s),c=a(3),o=a.n(c),m=a(14),l=a(15),u=a(16),d=a(19),v=a(18),p=a(17),g=a.n(p),y=a(2),_=a.n(y);a(45);function f(e){var t=e.year,a=e.title,r=e.summary,s=e.poster,i=e.genres;return n.a.createElement("div",{className:"movie"},n.a.createElement("img",{src:s,alt:a,title:a}),n.a.createElement("div",{className:"movie__data"},n.a.createElement("h3",{className:"movie__title"},a),n.a.createElement("h5",{className:"movie__year"},t),n.a.createElement("ul",{className:"genres"},i.map((function(e,t){return n.a.createElement("li",{className:"genres__genre",key:t},e)}))),n.a.createElement("p",{className:"movie__summary"},r.slice(0,180),"...")))}f.prototype={id:_.a.number.isRequired,year:_.a.string.isRequired,title:_.a.string.isRequired,summary:_.a.string.isRequired,poster:_.a.string.isRequired,genres:_.a.arrayOf(_.a.string).isRequired};var E=f,h=(a(46),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,r=a.data.data.movies,e.setState({movies:r,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return n.a.createElement("section",{calss:"container"},t?n.a.createElement("div",{className:"loader"},n.a.createElement("span",{className:"loader__text"},"Loading...")):n.a.createElement("div",{className:"movies"},a.map((function(e){return n.a.createElement(E,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(n.a.Component));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.0ad0dd65.chunk.js.map