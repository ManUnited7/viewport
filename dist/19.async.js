(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"2AEw":function(e,t,a){"use strict";var l=a("xK3H"),r=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("hVLL");var d=l(a("OZJJ"));a("Rzmo");var m=l(a("RC+H"));a("NzIi");var o=l(a("K/gO"));a("Godv");var u=l(a("enpQ"));a("Nhki");var i=l(a("qavB"));a("/+mP");var f=l(a("vKT5")),s=l(a("dnxz")),n=l(a("Sx57")),c=l(a("4zp0")),p=l(a("iVWQ")),g=l(a("lF+r")),E=l(a("PApH"));a("tWxd");var b=l(a("J8zY"));a("Qd0H");var h=l(a("anYX"));a("MF7W");var v=l(a("SWvb"));a("dCeQ");var M,F,y,w=l(a("C2i2")),x=r(a("zLBQ")),q=a("LneV"),C=a("0iMl"),k=l(a("zHco")),z=l(a("Zpge")),H=w.default.Item,R=v.default.Option,A=h.default.RangePicker,N=b.default.TextArea,Q=(M=(0,q.connect)(function(e){var t=e.loading;return{submitting:t.effects["form/submitRegularForm"]}}),F=w.default.create(),M(y=F(y=function(e){function t(){var e,a;(0,n.default)(this,t);for(var l=arguments.length,r=new Array(l),d=0;d<l;d++)r[d]=arguments[d];return a=(0,p.default)(this,(e=(0,g.default)(t)).call.apply(e,[this].concat(r))),a.handleSubmit=function(e){var t=a.props,l=t.dispatch,r=t.form;e.preventDefault(),r.validateFieldsAndScroll(function(e,t){e||l({type:"form/submitRegularForm",payload:t})})},a}return(0,E.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.submitting,t=this.props.form,a=t.getFieldDecorator,l=t.getFieldValue,r={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},n={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return x.default.createElement(k.default,{title:x.default.createElement(C.FormattedMessage,{id:"app.forms.basic.title"}),content:x.default.createElement(C.FormattedMessage,{id:"app.forms.basic.description"})},x.default.createElement(d.default,{bordered:!1},x.default.createElement(w.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},x.default.createElement(H,(0,s.default)({},r,{label:x.default.createElement(C.FormattedMessage,{id:"form.title.label"})}),a("title",{rules:[{required:!0,message:(0,C.formatMessage)({id:"validation.title.required"})}]})(x.default.createElement(b.default,{placeholder:(0,C.formatMessage)({id:"form.title.placeholder"})}))),x.default.createElement(H,(0,s.default)({},r,{label:x.default.createElement(C.FormattedMessage,{id:"form.date.label"})}),a("date",{rules:[{required:!0,message:(0,C.formatMessage)({id:"validation.date.required"})}]})(x.default.createElement(A,{style:{width:"100%"},placeholder:[(0,C.formatMessage)({id:"form.date.placeholder.start"}),(0,C.formatMessage)({id:"form.date.placeholder.end"})]}))),x.default.createElement(H,(0,s.default)({},r,{label:x.default.createElement(C.FormattedMessage,{id:"form.goal.label"})}),a("goal",{rules:[{required:!0,message:(0,C.formatMessage)({id:"validation.goal.required"})}]})(x.default.createElement(N,{style:{minHeight:32},placeholder:(0,C.formatMessage)({id:"form.goal.placeholder"}),rows:4}))),x.default.createElement(H,(0,s.default)({},r,{label:x.default.createElement(C.FormattedMessage,{id:"form.standard.label"})}),a("standard",{rules:[{required:!0,message:(0,C.formatMessage)({id:"validation.standard.required"})}]})(x.default.createElement(N,{style:{minHeight:32},placeholder:(0,C.formatMessage)({id:"form.standard.placeholder"}),rows:4}))),x.default.createElement(H,(0,s.default)({},r,{label:x.default.createElement("span",null,x.default.createElement(C.FormattedMessage,{id:"form.client.label"}),x.default.createElement("em",{className:z.default.optional},x.default.createElement(C.FormattedMessage,{id:"form.optional"}),x.default.createElement(i.default,{title:x.default.createElement(C.FormattedMessage,{id:"form.client.label.tooltip"})},x.default.createElement(f.default,{type:"info-circle-o",style:{marginRight:4}}))))}),a("client")(x.default.createElement(b.default,{placeholder:(0,C.formatMessage)({id:"form.client.placeholder"})}))),x.default.createElement(H,(0,s.default)({},r,{label:x.default.createElement("span",null,x.default.createElement(C.FormattedMessage,{id:"form.invites.label"}),x.default.createElement("em",{className:z.default.optional},x.default.createElement(C.FormattedMessage,{id:"form.optional"})))}),a("invites")(x.default.createElement(b.default,{placeholder:(0,C.formatMessage)({id:"form.invites.placeholder"})}))),x.default.createElement(H,(0,s.default)({},r,{label:x.default.createElement("span",null,x.default.createElement(C.FormattedMessage,{id:"form.weight.label"}),x.default.createElement("em",{className:z.default.optional},x.default.createElement(C.FormattedMessage,{id:"form.optional"})))}),a("weight")(x.default.createElement(u.default,{placeholder:(0,C.formatMessage)({id:"form.weight.placeholder"}),min:0,max:100})),x.default.createElement("span",{className:"ant-form-text"},"%")),x.default.createElement(H,(0,s.default)({},r,{label:x.default.createElement(C.FormattedMessage,{id:"form.public.label"}),help:x.default.createElement(C.FormattedMessage,{id:"form.public.label.help"})}),x.default.createElement("div",null,a("public",{initialValue:"1"})(x.default.createElement(o.default.Group,null,x.default.createElement(o.default,{value:"1"},x.default.createElement(C.FormattedMessage,{id:"form.public.radio.public"})),x.default.createElement(o.default,{value:"2"},x.default.createElement(C.FormattedMessage,{id:"form.public.radio.partially-public"})),x.default.createElement(o.default,{value:"3"},x.default.createElement(C.FormattedMessage,{id:"form.public.radio.private"})))),x.default.createElement(H,{style:{marginBottom:0}},a("publicUsers")(x.default.createElement(v.default,{mode:"multiple",placeholder:(0,C.formatMessage)({id:"form.publicUsers.placeholder"}),style:{margin:"8px 0",display:"2"===l("public")?"block":"none"}},x.default.createElement(R,{value:"1"},x.default.createElement(C.FormattedMessage,{id:"form.publicUsers.option.A"})),x.default.createElement(R,{value:"2"},x.default.createElement(C.FormattedMessage,{id:"form.publicUsers.option.B"})),x.default.createElement(R,{value:"3"},x.default.createElement(C.FormattedMessage,{id:"form.publicUsers.option.C"}))))))),x.default.createElement(H,(0,s.default)({},n,{style:{marginTop:32}}),x.default.createElement(m.default,{type:"primary",htmlType:"submit",loading:e},x.default.createElement(C.FormattedMessage,{id:"form.submit"})),x.default.createElement(m.default,{style:{marginLeft:8}},x.default.createElement(C.FormattedMessage,{id:"form.save"}))))))}}]),t}(x.PureComponent))||y)||y),S=Q;t.default=S}}]);