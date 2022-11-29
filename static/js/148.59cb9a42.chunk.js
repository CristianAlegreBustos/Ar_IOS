"use strict";(self.webpackChunkar_ios=self.webpackChunkar_ios||[]).push([[148],{4148:function(e,a,o){o.r(a),o.d(a,{default:function(){return B}});var s=o(9439),t=o(4519),r=o(7556),i=o(1629),n=o(9563),d=o(9591),c=o(2556);function l(e){e.onSelect;var a=e.position,o=e.name,l=e.onEnded,m=(e.freezed,(0,i.L)("./modelosRA/BoxBeneficiosCompressed.gltf")),h=m.nodes,f=m.materials,u=(0,t.useRef)(),g=(0,t.useRef)(),S=(0,t.useRef)(),p=(0,t.useRef)(),x=(0,t.useRef)(),j=(0,t.useState)(!1),y=(0,s.Z)(j,2),w=y[0],M=(y[1],(0,r.useSpring)({positionTop:w?[0,10,0]:a,config:{mass:1,tension:100,friction:50}}).positionTop),v=((0,r.useSpring)({rotationSide1:w?[Math.PI/2,Math.PI/2,0]:[Math.PI/2,0,0],config:{mass:1,tension:100,friction:50}}).rotationSide1,(0,r.useSpring)({positionSide1:w?[-1.3,3,-1]:a,config:{mass:1,tension:100,friction:50}}).positionSide1),_=((0,r.useSpring)({rotationSide2:w?[Math.PI,0,0]:[Math.PI/2,0,0],config:{mass:1,tension:100,friction:50}}).rotationSide2,(0,r.useSpring)({positionSide2:w?[0,3.5,1.2]:a,config:{mass:1,tension:100,friction:50}}).positionSide2),B=((0,r.useSpring)({rotationSide3:w?[Math.PI/2,-Math.PI/2,0]:[Math.PI/2,0,0],config:{mass:1,tension:100,friction:50}}).rotationSide3,(0,r.useSpring)({positionSide3:w?[2.8,4,-1.2]:a,config:{mass:1,tension:100,friction:50}}).positionSide3),R=((0,r.useSpring)({rotationSide4:w?[Math.PI,0,0]:[Math.PI/2,0,0],config:{mass:1,tension:100,friction:50}}).rotationSide4,(0,r.useSpring)({positionSide4:w?[.3,-2.5,-10.6]:a,config:{mass:1,tension:100,friction:50}}).positionSide4),z=(0,r.useSpring)({opacity:w?0:1,delay:500,config:{mass:10,tension:500,friction:250}}).opacity;return console.log("BoxBeneficios"+o),(0,n.useFrame)((function(e){var a=e.clock;if(u.current.rotation.z-=.03,!1===w){var o=a.getElapsedTime();u.current.scale.z=.014+.002*Math.sin(3*o),u.current.scale.x=.014+.002*Math.sin(3*o),u.current.scale.y=.014+.002*Math.sin(3*o)}else!0===w&&(g.current.scale.z=0,g.current.scale.x=0,g.current.scale.y=0,S.current.scale.z=0,S.current.scale.x=0,S.current.scale.y=0,p.current.scale.z=0,p.current.scale.x=0,p.current.scale.y=0)})),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.animated.group,{position:a,dispose:null,scale:.015,ref:u,rotation:[Math.PI/2,0,0],children:[(0,c.jsx)(r.animated.mesh,{castShadow:!0,receiveShadow:!0,geometry:h.lado1.geometry,material:f.diffuse_Blue,position:v,children:(0,c.jsx)(r.animated.meshStandardMaterial,{color:"cyan",opacity:z,transparent:!0,alphaTest:0})}),(0,c.jsx)(r.animated.mesh,{castShadow:!0,receiveShadow:!0,geometry:h.lado4.geometry,material:f.diffuse_Lime,position:_,children:(0,c.jsx)(r.animated.meshStandardMaterial,{color:"cyan",opacity:z,transparent:!0,alphaTest:0})}),(0,c.jsx)(r.animated.mesh,{castShadow:!0,receiveShadow:!0,geometry:h.lado2.geometry,material:f.diffuse_Blue,position:B,children:(0,c.jsx)(r.animated.meshStandardMaterial,{color:"cyan",opacity:z,transparent:!0,alphaTest:0})}),(0,c.jsx)(r.animated.mesh,{castShadow:!0,receiveShadow:!0,geometry:h.lado3.geometry,material:f.diffuse_Blue,position:R,children:(0,c.jsx)(r.animated.meshStandardMaterial,{color:"cyan",opacity:z,transparent:!0,alphaTest:0})}),(0,c.jsx)(r.animated.mesh,{castShadow:!0,receiveShadow:!0,geometry:h.base.geometry,material:f.Plastic,position:a,children:(0,c.jsx)(r.animated.meshStandardMaterial,{color:"cyan",opacity:z,transparent:!0,alphaTest:0})}),(0,c.jsx)(r.animated.mesh,{castShadow:!0,receiveShadow:!0,geometry:h.tapa.geometry,material:f.Metal,position:M,children:(0,c.jsx)(r.animated.meshStandardMaterial,{color:"cyan",opacity:z,transparent:!0,alphaTest:0})}),(0,c.jsx)(r.animated.mesh,{castShadow:!0,receiveShadow:!0,geometry:h.signo4.geometry,material:f.diffuse_White,position:a,ref:S,children:(0,c.jsx)(r.animated.meshStandardMaterial,{color:"#643fBc",metalness:1,roughness:.6})}),(0,c.jsx)(r.animated.mesh,{castShadow:!0,receiveShadow:!0,geometry:h.signo1.geometry,material:f.Gem,position:a,ref:p,children:(0,c.jsx)(r.animated.meshStandardMaterial,{color:"#643fBc",metalness:1,roughness:.6})}),(0,c.jsx)(r.animated.mesh,{castShadow:!0,receiveShadow:!0,geometry:h.signo2y3.geometry,material:f.diffuse_0,position:a,ref:g,children:(0,c.jsx)(r.animated.meshStandardMaterial,{color:"#643fBc",metalness:1,roughness:.6})})]}),(0,c.jsx)(d.V,{loop:!1,url:"./soundRA/OpenBox.mp3",distance:1,onEnded:l,ref:x})]})}i.L.preload("./modelosRA/BoxBeneficiosCompressed.gltf");var m=(0,t.memo)(l);function h(e){var a=e.scale,o=e.position,s=(0,i.L)("./modelosRA/BurgerAndMostazaCompressed.gltf"),t=s.nodes,n=s.materials;return(0,c.jsx)(r.animated.group,{dispose:null,scale:a,position:o,children:(0,c.jsxs)(r.animated.group,{rotation:[Math.PI/2,0,0],children:[(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t["1_(1)"].geometry,material:n.diffuse_Aqua,children:(0,c.jsx)("meshStandardMaterial",{color:"cyan"})}),(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t["1_(1)002"].geometry,material:n.diffuse_0,children:(0,c.jsx)("meshStandardMaterial",{color:"#643fBc"})}),(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t["1_(1)001"].geometry,material:n.diffuse_White,children:(0,c.jsx)("meshStandardMaterial",{color:"white"})}),(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t["1_(1)003"].geometry,material:n.diffuse_Red,children:(0,c.jsx)("meshStandardMaterial",{color:"red"})}),(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t["1_(1)004"].geometry,material:n.diffuse_Lime,children:(0,c.jsx)("meshStandardMaterial",{color:"orange"})})]})})}i.L.preload("/modelosRA/BurgerAndMostazaCompressed.gltf");var f=function(e){var a=e.onSelect,o=e.onEnded,i=e.freezed,n=(0,r.useSpring)((function(){return{scale:0}})),l=(0,s.Z)(n,2),f=l[0].scale,u=l[1],g=(0,t.useRef)();return console.log("BurgerAndMostazaObject"),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m,{freezed:i,name:"BurgerAndMostazaObject",position:[.25,.25,-1.2],onSelect:function(){u.start({scale:.01,config:{mass:1,tension:100,friction:50}}),a()},onEnded:function(){g.current.play()}}),(0,c.jsx)(h,{scale:f,position:[.28,.25,-1.2]}),(0,c.jsx)(d.V,{loop:!1,url:"./soundRA/audioMostazaYburgerKing.mp3",distance:1,onEnded:o,ref:g})]})},u=(0,t.memo)(f);function g(e){var a=e.scale,o=e.position,s=(0,i.L)("./modelosRA/BeneficiosCinemarkHoytsCompressed.gltf"),t=s.nodes,n=s.materials;return(0,c.jsx)(r.animated.group,{dispose:null,scale:a,position:o,children:(0,c.jsxs)(r.animated.group,{rotation:[Math.PI/2,0,0],children:[(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t["3_(2)003"].geometry,material:n.diffuse_Yellow,children:(0,c.jsx)("meshStandardMaterial",{color:"black"})}),(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t["3_(2)004"].geometry,material:n.diffuse_Aqua,children:(0,c.jsx)("meshStandardMaterial",{color:"cyan"})}),(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t["3_(2)002"].geometry,material:n.diffuse_Red,children:(0,c.jsx)("meshStandardMaterial",{color:"red"})}),(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t["3_(2)001"].geometry,material:n.diffuse_0,children:(0,c.jsx)("meshStandardMaterial",{color:"#643fBc"})}),(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t["3_(2)"].geometry,material:n.diffuse_White,children:(0,c.jsx)("meshStandardMaterial",{color:"white"})})]})})}i.L.preload("/modelosRA/BeneficiosCinemarkHoytsCompressed.gltf");var S=function(e){var a=e.onSelect,o=e.onEnded,i=e.freezed,n=(0,r.useSpring)((function(){return{scale:0}})),l=(0,s.Z)(n,2),h=l[0].scale,f=l[1],u=(0,t.useRef)();return console.log("CineObjects"),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m,{freezed:i,name:"CineObject",position:[.25,-.11,-1.2],onSelect:function(){f.start({scale:.01,config:{mass:1,tension:100,friction:50}}),a()},onEnded:function(){u.current.play()}}),(0,c.jsx)(g,{scale:h,position:[.28,-.16,-1.2]}),(0,c.jsx)(d.V,{loop:!1,url:"./soundRA/AudiosCine.mp3",distance:1,onEnded:o,ref:u})]})},p=(0,t.memo)(S);function x(e){var a=e.scale,o=e.position,s=(0,i.L)("./modelosRA/BeneficiosFreddoCompressed.gltf"),t=s.nodes,n=s.materials;return(0,c.jsx)(r.animated.group,{dispose:null,scale:a,position:o,children:(0,c.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t[2002].geometry,material:n.diffuse_Aqua,children:(0,c.jsx)("meshStandardMaterial",{color:"cyan"})}),(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t[2003].geometry,material:n.diffuse_0,children:(0,c.jsx)("meshStandardMaterial",{color:"#643fBc"})}),(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t[2001].geometry,material:n.diffuse_White,children:(0,c.jsx)("meshStandardMaterial",{color:"white"})}),(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t[2].geometry,material:n.diffuse_Yellow,children:(0,c.jsx)("meshStandardMaterial",{color:"blue"})})]})})}i.L.preload("/BeneficiosFreddoCompressed.gltf");var j=function(e){var a=e.onSelect,o=e.onEnded,i=e.freezed,n=(0,r.useSpring)((function(){return{scale:0}})),l=(0,s.Z)(n,2),h=l[0].scale,f=l[1],u=(0,t.useRef)();return console.log("FreddoObject"),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m,{freezed:i,name:"CelularesObjects",position:[-.3,.25,-1.2],onSelect:function(){f.start({scale:.01,config:{mass:1,tension:100,friction:50}}),a()},onEnded:function(){u.current.play()}}),(0,c.jsx)(x,{scale:h,position:[-.33,.25,-1.2]}),(0,c.jsx)(d.V,{loop:!1,url:"./soundRA/audioCelulares.mp3",distance:1,onEnded:o,ref:u})]})},y=(0,t.memo)(j);function w(e){var a=e.scale,o=e.position,s=(e.opacity,(0,i.L)("./modelosRA/BeneficiosPedidosYaCompressed.gltf")),t=s.nodes,n=s.materials;return(0,c.jsx)(r.animated.group,{dispose:null,scale:a,position:o,children:(0,c.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.card_benefit_2003.geometry,material:n.diffuse_Aqua,children:(0,c.jsx)("meshStandardMaterial",{color:"cyan"})}),(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.card_benefit_2002.geometry,material:n.diffuse_Red,children:(0,c.jsx)("meshStandardMaterial",{color:"red"})}),(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.card_benefit_2001.geometry,material:n.diffuse_0,children:(0,c.jsx)("meshStandardMaterial",{color:"#643fBc"})}),(0,c.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.card_benefit_2.geometry,material:n.diffuse_White,children:(0,c.jsx)("meshStandardMaterial",{color:"white"})})]})})}i.L.preload("/modelosRA/BeneficiosPedidosYaCompressed.gltf");var M=function(e){var a=e.onSelect,o=e.onEnded,i=e.freezed,n=(0,r.useSpring)((function(){return{scale:0}})),l=(0,s.Z)(n,2),h=l[0].scale,f=l[1],u=(0,t.useRef)();return console.log("PedidosYa"),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m,{freezed:i,name:"PedidosYaObjects",position:[-.3,-.1,-1.2],onSelect:function(){f.start({scale:.01,config:{mass:1,tension:100,friction:50}}),a()},onEnded:function(){u.current.play()}}),(0,c.jsx)(w,{scale:h,position:[-.33,-.1,-1.2]}),(0,c.jsx)(d.V,{loop:!1,url:"./soundRA/audioPedidosYa.mp3",distance:1,onEnded:o,ref:u})]})},v=(0,t.memo)(M),_=function(e){var a=e.handleClick,o=(0,t.useState)(!1),r=(0,s.Z)(o,2),i=r[0],n=r[1],d=(0,t.useCallback)((function(){i||(a(),n(!0))}),[a,i]),l=function(){n(!1)};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u,{freezed:i,onSelect:d,onEnded:l}),(0,c.jsx)(y,{freezed:i,onSelect:d,onEnded:l}),(0,c.jsx)(p,{freezed:i,onSelect:d,onEnded:l}),(0,c.jsx)(v,{freezed:i,onSelect:d,onEnded:l})]})},B=(0,t.memo)(_)}}]);
//# sourceMappingURL=148.59cb9a42.chunk.js.map