import{_ as W,r as e,g as X,h as O,c as D,i as q,f as m,j as g,a as n,v as G,w as o,b as l,o as r,d,F as H,e as J,u as K,t as S,k as Q}from"./index-BZVKDLNc.js";import{_ as Y,a as Z,p as ee,b as A}from"./PromptDialog-ntkkh4yS.js";const te={id:"parkingView",class:"d-flex flex-column bg-grey-lighten-4 h-100"},ae={class:"mx-2 d-flex align-center"},se={class:"ml-3 d-block"},ne={class:"pt-1 text-h6 text-blue-grey-darken-4"},oe={class:"text-subtitle-1 text-blue-grey-darken-1"},le={__name:"CounterView",setup(re){const t=e(""),v=e(!1),x=e(!1),f=e(),i=e({phoneNumber:"",carNumber:"",captcha:""}),c=e(!1),h=e(""),p=e(""),u=e(!1),w=e(""),b=e(""),y=e(!1),I=F=>{t.value=F,v.value=!0},N=()=>{t.value="",f.value.initForm()},j=async()=>{console.log("提交表單",i.value),w.value="登記手機號碼已有申請車輛",b.value="<p>此電話已經申請車號AAA-6895，確認是否要覆蓋原有車號？</p>",y.value=!0,u.value=!0,p.value="success",h.value=`<p class="text-h4 text-grey-darken-1 font-weight-bold my-2">
      已完成登記
    </p>
    <p class="rental__text--h45 text-grey-darken-1 font-weight-bold mt-3">
      車號
    </p>
    <p class="text-h5 text-amber-darken-3 font-weight-bold my-0">
      AAX-6895
    </p>
    <p class="rental__text--h45 text-grey-darken-1 font-weight-bold mt-4">
      停放日期
    </p>
    <p class="text-h5 text-amber-darken-3 font-weight-bold my-0">
      2025-10-09 ~ 2025-10-10
    </p>`},B=()=>{t.value="",c.value=!0,p.value="searchSuccess",h.value=`<p class="text-h4 text-grey-darken-1 font-weight-bold my-2">
      已完成登記
    </p>
    <p class="rental__text--h45 text-grey-darken-1 font-weight-bold mt-3">
      車號
    </p>
    <p class="text-h5 text-amber-darken-3 font-weight-bold my-0">
      AAX-6895
    </p>
    <p class="rental__text--h45 text-grey-darken-1 font-weight-bold mt-4">
      停放日期
    </p>
    <p class="text-h5 text-amber-darken-3 font-weight-bold my-0">
      2025-10-09 ~ 2025-10-10
    </p>`},C=()=>{t.value="",f.value.initForm(),v.value=!1},T=()=>{c.value=!1,t.value="parking"},z=()=>{c.value=!1,v.value=!1,t.value="",i.value={phoneNumber:"",carNumber:"",captcha:""}},E=()=>{u.value=!1,c.value=!0,p.value="success",N()},L=()=>{u.value=!1},k=()=>{x.value=window.innerWidth<=960};return X(()=>{k(),window.addEventListener("resize",k)}),O(()=>{window.removeEventListener("resize",k)}),(F,a)=>{const P=l("v-img"),V=l("v-card"),R=l("v-avatar"),U=l("v-icon"),$=l("v-col"),M=l("v-row"),_=l("v-container");return r(),D("div",te,[q(n(_,{class:"rental rental__wrapper"},{default:o(()=>[n(V,{variant:"elevated",elevation:"4",class:"mb-5 pa-2"},{default:o(()=>[n(P,{color:"surface-variant",height:"200",width:"100%",src:"https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg",cover:"",alt:"Parking Image"},{default:o(()=>[...a[3]||(a[3]=[d("h1",{class:"ml-6 mt-4 text-h5"},"住宿車輛登記",-1)])]),_:1})]),_:1}),n(M,{dense:""},{default:o(()=>[(r(!0),D(H,null,J(K(ee),s=>(r(),m($,{key:s.value,cols:"12",md:"4"},{default:o(()=>[n(V,{class:"pa-4 d-flex align-center justify-space-between rounded-lg",variant:"elevated",elevation:"4","max-width":"100%","bg-color":"white",link:"",onClick:ie=>I(s.value)},{default:o(()=>[d("div",ae,[n(R,{image:"https://cdn.vuetifyjs.com/images/john.jpg",size:"50"}),d("div",se,[d("div",ne,S(s.title),1),d("span",oe,S(s.subTitle),1)])]),n(U,{icon:"fa:fas fa-chevron-right",size:"24",color:"indigo-darken-1",class:"mr-2"})]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1},512),[[G,!x.value||!v.value]]),t.value==="parking"?(r(),m(_,{key:0,id:"parking",class:"rental rental__wrapper"},{default:o(()=>[n(A,{ref_key:"searchFormRef",ref:f,formData:i.value,"onUpdate:formData":a[0]||(a[0]=s=>i.value=s),type:t.value,onCloseForm:C,onSendForm:j},null,8,["formData","type"])]),_:1})):g("",!0),t.value==="counter"?(r(),m(_,{key:1,id:"counter",class:"rental rental__wrapper"},{default:o(()=>[n(A,{ref_key:"searchFormRef",ref:f,type:t.value,formData:i.value,"onUpdate:formData":a[1]||(a[1]=s=>i.value=s),onCloseForm:C,onSendForm:B},null,8,["type","formData"])]),_:1})):g("",!0),t.value==="parkingInfo"?(r(),m(_,{key:2,id:"parkingInfo",class:"rental rental__wrapper"},{default:o(()=>[...a[4]||(a[4]=[Q(" parkingInfo ",-1)])]),_:1})):g("",!0),c.value?(r(),m(Y,{key:3,infoStatus:p.value,info:h.value,onInfoClose:z,onReWrite:T},null,8,["infoStatus","info"])):g("",!0),n(Z,{modelValue:u.value,"onUpdate:modelValue":a[2]||(a[2]=s=>u.value=s),message:b.value,messageTitle:w.value,isConfirmBtn:y.value,onPromptConfirm:E,onOnClose:L},null,8,["modelValue","message","messageTitle","isConfirmBtn"])])}}},me=W(le,[["__scopeId","data-v-a57815b1"]]);export{me as default};
