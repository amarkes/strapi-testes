"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[7255],{57255:(K,s,_)=>{_.r(s),_.d(s,{HomePageEE:()=>m});var P=_(92132),D=_(26485),n=_(24586),C=_(21272),A=_(55506),v=_(14718),i=_(45270),R=_(55151),U=_(79077),B=_(81929),t=_(15126),l=_(63299),L=_(67014),d=_(59080),I=_(79275),O=_(82437),T=_(61535),M=_(5790),E=_(12083),o=_(35223),W=_(5409),a=_(74930),h=_(2600),r=_(48940),f=_(41286),g=_(56336),S=_(13426),y=_(84624),N=_(77965),H=_(54257),j=_(71210),V=_(51187),c=_(39404),x=_(58692),F=_(501),G=_(57646),$=_(23120),e=_(44414),z=_(25962),X=_(14664),Y=_(42588),J=_(90325),Z=_(62785),Q=_(87443),u=_(41032),p=_(22957),k=_(93179),w=_(73055),b=_(15747),q=_(85306),__=_(26509),E_=_(32058),t_=_(81185),s_=_(82261),O_=_(42153),M_=_(67031);const m=()=>((0,n.u)(),(0,P.jsx)(D.HomePageCE,{}))},24586:(K,s,_)=>{_.d(s,{u:()=>B});var P=_(21272),D=_(55506),n=_(67031),C=_(54894),A=_(17703),v=_(81929);const i="strapi-notification-seat-limit",R="https://cloud.strapi.io/profile/billing",U="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,C.A)(),{license:l,isError:L,isLoading:d}=(0,v.m)(),I=(0,D.hN)(),{pathname:O}=(0,A.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:o}=l??{};P.useEffect(()=>{if(L||d)return;const W=!n(M)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let a;E==="OVER_LIMIT"?a="warning":E==="AT_LIMIT"&&(a="softWarning"),W&&I({type:a,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:o?R:U,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:o})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[I,l,O,t,d,M,E,T,o,L])}}}]);
