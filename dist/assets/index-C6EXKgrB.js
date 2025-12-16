import{r as a,k as e,p as l,aX as c,aQ as d,S as m,l as p,H as u,C as h}from"./index-DL1FC2Xw.js";import{M as x}from"./markdown-CHRWPvcH.js";import{C as f}from"./custom-breadcrumbs-nJImJlyu.js";import{C}from"./component-hero-BkcKDfuo.js";import{C as g}from"./component-block-4vZoPPTX.js";import{C as j}from"./Card-x9v4l8Wx.js";import{F as k}from"./FormControlLabel-RF8C1zCS.js";import"./html-to-markdown-C60JWNql.js";const z=`

<h4>This is Heading 4</h4>
<code>This is code</code>

<pre><code class="language-javascript">for (var i=1; i &#x3C;= 20; i++) {
  if (i % 15 == 0)
    return "FizzBuzz"
  else if (i % 3 == 0)
    return "Fizz"
  else if (i % 5 == 0)
    return "Buzz"
  else
    return i
  }</code></pre>
`;function F(){const[r,o]=a.useState(!0),[s,n]=a.useState(z),i=t=>{o(t.target.checked)};return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx(f,{heading:"Editor",links:[{name:"Components",href:l.components},{name:"Editor"}],moreLink:["https://tiptap.dev/docs/editor/introduction"]})}),e.jsxs(g,{maxWidth:!1,sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsxs(j,{sx:{p:3,gap:2,flexShrink:0,display:"flex",flexDirection:"column"},children:[e.jsx(k,{control:e.jsx(c,{name:"fullItem",checked:r,onChange:i}),label:"Full item",labelPlacement:"start",sx:{ml:"auto"}}),e.jsx(d,{fullItem:r,value:s,onChange:t=>n(t),sx:{maxHeight:720}})]}),e.jsxs(m,{spacing:1,sx:{p:3,borderRadius:2,overflowX:"auto",bgcolor:"background.neutral"},children:[e.jsx(p,{variant:"h6",children:"Preview"}),e.jsx(x,{children:s})]})]})]})}const b={title:`Editor | Components - ${h.site.name}`};function G(){return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsxs("title",{children:[" ",b.title]})}),e.jsx(F,{})]})}export{G as default};
