(this["webpackJsonpreact-lessons"]=this["webpackJsonpreact-lessons"]||[]).push([[3],{301:function(t,e,s){t.exports={content:"MyPosts_content__2Em1q",postsBlock:"MyPosts_postsBlock__kHrtZ",posts:"MyPosts_posts__h2ZPW"}},302:function(t,e,s){t.exports={item:"Post_item__3oHn9"}},303:function(t,e,s){},304:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3l9un"}},306:function(t,e,s){"use strict";s.r(e);var i=s(3),n=s(1),r=s(35),c=s(36),o=s(38),a=s(37),u=s(0),j=s.n(u),d=s(14),l=s(93),b=s(125),p=s(126),h=s(70),f=s(63),O=s(301),x=s.n(O),v=s(302),m=s.n(v),g=function(t){return Object(n.jsxs)("div",{className:m.a.item,children:[Object(n.jsx)("img",{src:"https://i.pinimg.com/236x/b7/49/48/b749481dbd97281c159bd9a8b055c432.jpg"}),t.message,Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"like"})," ",t.likesCount]})]})},k=Object(h.a)(10),y=Object(p.a)({form:"addPost"})((function(t){return Object(n.jsx)("form",{onSubmit:t.handleSubmit,children:Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)(b.a,{component:f.b,placeholder:"Post Message",name:"newPostText",validate:[h.b,k]})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:"Add post"})})]})})})),P=j.a.memo((function(t){var e=t.profilePage.posts.map((function(t){return Object(n.jsx)(g,{message:t.message,likesCount:t.likesCount})}));return Object(n.jsxs)("div",{className:x.a.postsBlock,children:["My posts",Object(n.jsx)("div",{children:Object(n.jsx)(y,{onSubmit:function(e){console.log(e),t.addPost(e.newPostText)}})}),Object(n.jsx)("div",{className:x.a.posts,children:e})]})})),S={addPost:l.a},_=Object(d.b)((function(t){return{profilePage:t.profilePage}}),S)(P),w=(s(303),s(39)),I=s(304),A=s.n(I);var B=s(95);function M(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],i=!0,n=!1,r=void 0;try{for(var c,o=t[Symbol.iterator]();!(i=(c=o.next()).done)&&(s.push(c.value),!e||s.length!==e);i=!0);}catch(a){n=!0,r=a}finally{try{i||null==o.return||o.return()}finally{if(n)throw r}}return s}}(t,e)||Object(B.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=function(t){var e=M(Object(u.useState)(!1),2),s=e[0],i=e[1],r=M(Object(u.useState)(t.status),2),c=r[0],o=r[1];Object(u.useEffect)((function(){o(t.status)}),[t.status]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:"ProfileStatus!"}),!s&&Object(n.jsx)("div",{children:Object(n.jsx)("span",{onDoubleClick:function(){i(!0)},children:t.status||"No status"})}),s&&Object(n.jsx)("div",{children:Object(n.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(c)},value:c,onChange:function(t){o(t.currentTarget.value)}})})]})},N=function(t){if(t.profile){var e=t.profile,s=e.aboutMe,i=e.contacts,r=i.facebook,c=i.website,o=i.vk,a=i.twitter,u=i.instagram,j=i.youtube,d=i.github,l=i.mainLink,b=e.lookingForAJob,p=e.lookingForAJobDescription,h=e.fullName,f=(e.userId,e.photos),O=(f.small,f.large),x=t.status,v=t.updateStatus;return Object(n.jsxs)("div",{children:[Object(n.jsx)(C,{status:x,updateStatus:v}),Object(n.jsxs)("div",{className:A.a.descriptionBlock,children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:O,alt:""})}),Object(n.jsx)("div",{children:"Info"}),Object(n.jsxs)("div",{children:["\u0418\u043c\u044f: ",h]}),Object(n.jsxs)("div",{children:["\u041e\u0431\u043e \u043c\u043d\u0435: ",s]}),Object(n.jsxs)("div",{children:["\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:["facebook: ",r]}),Object(n.jsxs)("div",{children:["website: ",c]}),Object(n.jsxs)("div",{children:["vk: ",o," "]}),Object(n.jsxs)("div",{children:["twitter: ",a]}),Object(n.jsxs)("div",{children:["instagram: ",u," "]}),Object(n.jsxs)("div",{children:["youTube: ",j," "]}),Object(n.jsxs)("div",{children:["github: ",d," "]}),Object(n.jsxs)("div",{children:["mainLink: ",l," "]}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{children:["\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: ",b?"\u0414\u0430":"\u041d\u0435\u0442"]}),Object(n.jsxs)("div",{children:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0438\u0441\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u044b: ",p]})]})]})}return Object(n.jsx)(w.a,{isFetching:!0})},T=function(t){return Object(n.jsxs)("div",{children:[Object(n.jsx)(N,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(n.jsx)(_,{})]})},F=s(11),J=s(8),D=function(t){Object(o.a)(s,t);var e=Object(a.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfileInfo(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(n.jsx)(T,Object(i.a)(Object(i.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(j.a.Component),E={getProfileInfo:l.c,getStatus:l.d,updateStatus:l.e},z=Object(J.d)(F.f,Object(d.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),E))(D);e.default=z}}]);
//# sourceMappingURL=3.81850916.chunk.js.map