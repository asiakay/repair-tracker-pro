(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(8332)}])},2917:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(5893),r=n(7294),a=n(841),o=n(7577),i=n(1163),l=n(8282);n(6100);var u=n(9583);function c(){let[e,t]=(0,r.useState)(null),[n,c]=(0,r.useState)(null),d=(0,i.useRouter)(),h=async e=>{let t=await o.db.collection("users").doc(e.uid).get();t.exists||await (0,l.$)(e)},g=async e=>{e.preventDefault();try{let e=new a.hJ;e.setCustomParameters({prompt:"select_account"});let t=await (0,a.rh)(o.I8,e),{user:n}=t;n&&(await h(n),d.push("/status"))}catch(e){c(e.message)}};(0,r.useEffect)(()=>{let e=(0,a.Aj)(o.I8,e=>{e?t(e):t(null)});return()=>e()},[]),(0,r.useEffect)(()=>{e&&d.push("/")},[e,d]);let p=async()=>{try{await (0,a.w7)(o.I8),t(null)}catch(e){console.log(e)}};return(0,s.jsx)(s.Fragment,{children:e?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("button",{onClick:p,children:[" ",(0,s.jsx)(u.ldW,{})," Sign Out"]})}):(0,s.jsxs)("button",{onClick:g,children:[(0,s.jsx)(u.ldW,{})," Sign In"]})})}},8282:function(e,t,n){"use strict";n.d(t,{$:function(){return a}});var s=n(7577),r=n(6100);let a=async(e,t,n)=>{try{await (0,r.pl)(r.JU,(s.db,e.uid),{name:t,email:n}),console.log("Adding user to Firestore:",e)}catch(t){console.log("Error adding user to Firestore:",t+e)}}},8332:function(e,t,n){"use strict";n.r(t);var s=n(5893),r=n(7294),a=n(7577),o=n(8174),i=n.n(o),l=n(2917),u=n(3680),c=n(5447),d=n(1163);let h=()=>{let[e,t]=(0,r.useState)(""),[n,o]=(0,r.useState)(""),[h,g]=(0,r.useState)(""),p=(0,d.useRouter)(),_=async t=>{t.preventDefault();try{await signInWithEmailAndPassword(a.I8,e,n),p.push("/")}catch(e){g(e.message)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Login Page"}),(0,s.jsx)("div",{className:i().login,children:(0,s.jsxs)(c.Z,{onSubmit:_,children:[(0,s.jsxs)(c.Z.Group,{controlId:"formBasicEmail",children:[(0,s.jsx)(c.Z.Label,{children:"Email address"}),(0,s.jsx)(c.Z.Control,{type:"email",placeholder:"Enter email",value:e,onChange:e=>t(e.target.value)})]}),(0,s.jsxs)(c.Z.Group,{controlId:"formBasicPassword",children:[(0,s.jsx)(c.Z.Label,{children:"Password"}),(0,s.jsx)(c.Z.Control,{type:"password",placeholder:"Password",value:n,onChange:e=>o(e.target.value)})]}),(0,s.jsx)(c.Z.Group,{children:(0,s.jsx)(u.Z,{variant:"primary",type:"submit",children:"Submit"})}),(0,s.jsx)(c.Z.Group,{children:(0,s.jsx)(l.Z,{})})]})})]})};t.default=h},8174:function(e){e.exports={login:"Login_login__aNhkp",googleSignIn:"Login_googleSignIn__Hb3eT",loginButtonsContainer:"Login_loginButtonsContainer__FDh1_"}}},function(e){e.O(0,[445,30,774,888,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);