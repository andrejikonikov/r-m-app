(this["webpackJsonpr-m-app"]=this["webpackJsonpr-m-app"]||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n(0),c=n.n(a),s=n(29),i=n.n(s),l=n(27),j=(n(78),n(79),n(66));function o(){var e=Object(j.a)(["\n  query Characters($page:Int, $filter: FilterCharacter) {\n    characters(page:$page, filter:$filter) {\n      info{\n        count,\n        pages,\n        next,\n        prev,\n      }\n      results{\n        name\n        image\n        status,\n        species,\n        gender,\n      }\n    }\n  }\n"]);return o=function(){return e},e}var u=Object(l.gql)(o()),b=n(118),p=n(120),h=n(116),d=n(122),g=n(115),O=n(121),x=n(123),m=n(117);var f=function(){var e=Object(l.useQuery)(u,{variables:{page:1}}),t=e.loading,n=e.error,c=(e.data||{characters:{results:[]}}).characters.results;return t?Object(r.jsx)(m.a,{}):n?Object(r.jsx)("p",{severity:"error",children:"Something went wrong, try later."}):Object(r.jsx)("div",{className:"List",children:Object(r.jsx)(b.a,{children:c.map((function(e){return function(e){var t=e.name,n=e.image,c=e.status,s=e.species,i=e.gender;return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsxs)(p.a,{alignItems:"flex-start",children:[Object(r.jsx)(g.a,{children:Object(r.jsx)(O.a,{alt:t,src:n})}),Object(r.jsx)(d.a,{primary:t}),Object(r.jsx)(x.a,{label:c}),Object(r.jsx)(x.a,{label:s}),Object(r.jsx)(x.a,{label:i})]}),Object(r.jsx)(h.a,{})]})}(e)}))})})};var v=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(f,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},C=new l.ApolloClient({uri:"https://rickandmortyapi.com/graphql",cache:new l.InMemoryCache});i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(l.ApolloProvider,{client:C,children:Object(r.jsx)(v,{})})}),document.getElementById("root")),y()}},[[92,1,2]]]);
//# sourceMappingURL=main.c8860d31.chunk.js.map