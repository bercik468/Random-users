(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{69:function(e,t,a){e.exports=a(78)},78:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),s=a.n(o),c=a(108),i=a(111),l=a(112),u=a(113),m=a(55),d=a.n(m),h=Object(c.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})),p=function(){var e=h(),t=Object(i.a)({disableHysteresis:!0,threshold:100});return n.a.createElement(l.a,{in:t},n.a.createElement("div",{className:e.root},n.a.createElement(u.a,{color:"secondary",onClick:function(e){return function(e){e.stopPropagation(),window.scrollTo({top:0,behavior:"smooth"})}(e)}},n.a.createElement(d.a,null))))},b=a(16),f=a(41),g=a(21),y=a(56),k=a(57),E=a(63),v=a(31),w=a(124),U=a(116),x=Object(c.a)((function(e){return{root:Object(v.a)({},e.flexCenter,{position:"relative",marginTop:30,marginBottom:30}),button:{display:"block",marginLeft:5,padding:16}}})),j=function(e){var t=x();return n.a.createElement("div",{className:t.root},n.a.createElement(w.a,{value:e.HowManyUsers,onChange:e.setHowManyUsers,onKeyPress:function(t){"Enter"===t.key&&e.onSubmit()},variant:"outlined",label:"Podaj ilo\u015b\u0107 u\u017cytkownik\xf3w",error:e.errorNumber,helperText:e.errorText,FormHelperTextProps:{style:{position:"absolute",top:55}}}),n.a.createElement(U.a,{onClick:e.onSubmit,variant:"contained",color:"primary",className:t.button},"pobierz"))},C=a(117),N=Object(c.a)((function(e){return{root:Object(v.a)({},e.absCenterDiv,{position:"fixed",backgroundColor:"rgba(102,102,102,0.8)",zIndex:2e3})}})),H=function(){var e=N();return n.a.createElement("div",{className:e.root},n.a.createElement(C.a,{size:120}))},O=a(43),M=a(20),S=a(115),T=a(12),I=a(118),P=a(120),D=a(119),z=a(126),L=a(122),F=a(121),B=a(125),G=a(61),J=a.n(G),W=a(60),A=a.n(W),K=Object(c.a)((function(e){return{avatar:{width:80,height:80},listItem:Object(T.a)({},e.breakpoints.up("md"),{cursor:"pointer","&:hover":{color:"blue"}}),textDiv:{flexGrow:1,display:"flex",alignItems:"flex-start",justifyContent:"space-between"},itemTextDiv:{flexGrow:1,display:"flex",flexDirection:"column",flexWrap:"wrap",alignItems:"center",justifyContent:"flex-start"},checkbox:{color:"red"}}})),q=function(e){var t=e.data,a=e.toggleCheckedUsers,r=e.checkedUsers,o=K(),s=n.a.useState(!1),c=Object(M.a)(s,2),i=c[0],l=c[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(I.a,{className:o.listItem,alignItems:"flex-start",onClick:function(){return l(!i)}},n.a.createElement(D.a,null,n.a.createElement(z.a,{className:o.avatar,alt:"avatar",src:t.picture.large})),n.a.createElement("div",{className:o.textDiv},n.a.createElement("div",{className:o.itemTextDiv},n.a.createElement(P.a,{align:"center",primary:"".concat(t.name.first," ").concat(t.name.last),primaryTypographyProps:{variant:"h5"}}),n.a.createElement(F.a,{in:i},n.a.createElement(S.a,null,["phone: ".concat(t.phone),"city: ".concat(t.location.city),"country: ".concat(t.location.country)].map((function(e){return n.a.createElement(I.a,{key:e},n.a.createElement(P.a,{secondary:e}))})))))),n.a.createElement(B.a,{checked:r.includes(t.login.uuid),onClick:function(e){e.stopPropagation(),a(t.login.uuid)},icon:n.a.createElement(A.a,null),checkedIcon:n.a.createElement(J.a,{className:o.checkbox}),value:"cheskedH"})),n.a.createElement(L.a,{variant:"inset",component:"li"}))},Q=Object(c.a)((function(e){return{root:{margin:"10px auto",width:"100%",maxWidth:500,backgroundColor:e.palette.background.paper},inline:{display:"inline"},button:Object(v.a)({},e.flexCenter,{marginTop:20})}})),R=function(e){var t=Q(),a=n.a.useState(!1),r=Object(M.a)(a,2),o=r[0],s=r[1],c=o?e.data.filter((function(t){return e.checkedUsers.includes(t.login.uuid)})):e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:t.button},n.a.createElement(U.a,{onClick:function(){return s(!o)},color:"secondary",variant:"contained"},o?"Poka\u017c wszystkich":"Poka\u017c ulubionych")),n.a.createElement(l.a,{in:e.data.length>0},n.a.createElement(S.a,{className:t.root},c.map((function(t){return n.a.createElement(q,{key:t.login.uuid,data:t,toggleCheckedUsers:e.toggleCheckedUsers,checkedUsers:e.checkedUsers})})))))},V=function(e){function t(){var e,a;Object(f.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(n)))).state={HowManyUsers:"",isLoading:!1,isError:!1,users:[],checkedUsers:[],errorNumber:!1,errorText:""},a.setHowManyUsers=function(e){e.target.value<=0?a.setState({errorNumber:!0,errorText:"wpisz ilo\u015b\u0107 u\u017cytkownik\xf3w",HowManyUsers:""}):e.target.value>150?a.setState({errorNumber:!0,errorText:"maksymalna ilo\u015b\u0107 to 150 os\xf3b",HowManyUsers:e.target.value}):e.target.value&&a.setState({errorNumber:!1,HowManyUsers:e.target.value})},a.toggleCheckedUsers=function(e){a.state.checkedUsers.includes(e)?a.setState({checkedUsers:a.state.checkedUsers.filter((function(t){return t!==e}))}):a.setState({checkedUsers:[].concat(Object(b.a)(a.state.checkedUsers),[e])})},a.onSubmit=function(){a.state.HowManyUsers>0&&a.state.HowManyUsers<=150?(fetch("https://randomuser.me/api?results=".concat(a.state.HowManyUsers)).then((function(e){return e.json()})).then((function(e){a.setState({isLoading:!1,isError:!1,users:e.results,errorNumber:!1})})).catch((function(){return a.setState({isLoading:!1,isError:!0,HowManyUsers:"",errorNumber:!1})})),a.setState({isLoading:!0,users:[],HowManyUsers:"",errorNumber:!1})):a.state.HowManyUsers<=0?a.setState({errorNumber:!0,errorText:"wpisz ilo\u015b\u0107 u\u017cytkownik\xf3w"}):a.state.HowManyUsers<150&&a.setState({errorNumber:!0})},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(j,{errorText:this.state.errorText,errorNumber:this.state.errorNumber,setHowManyUsers:this.setHowManyUsers,HowManyUsers:this.state.HowManyUsers,onSubmit:this.onSubmit}),n.a.createElement(R,{data:this.state.users,toggleCheckedUsers:this.toggleCheckedUsers,checkedUsers:this.state.checkedUsers}),this.state.isError&&n.a.createElement(O.a,{variant:"h4",color:"error",align:"center"},"Error 404 Page not Found"),this.state.isLoading&&n.a.createElement(H,null))}}]),t}(r.Component);var X=function(){return n.a.createElement("div",null,n.a.createElement(V,null),n.a.createElement(p,null))},Y=a(62),Z=Object(Y.a)({palette:{primary:{main:"#003366"},secondary:{main:"#009900"}},absCenterDiv:{position:"absolute",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},flexCenter:{display:"flex",justifyContent:"center",alignItems:"center"}}),$=a(123);s.a.render(n.a.createElement($.a,{theme:Z},n.a.createElement(X,null)),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.a4f6cf65.chunk.js.map