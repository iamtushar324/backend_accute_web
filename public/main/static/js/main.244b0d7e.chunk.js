(this.webpackJsonpledger_main_react=this.webpackJsonpledger_main_react||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/cancel.4122b3e7.svg"},156:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(48),r=a.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(3),o=a(2),i=a(1),d=a(4),m=a(5),u=a(49),p=a.n(u),E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).navToDash=n.navToDash.bind(Object(o.a)(n)),n.navToRep=n.navToRep.bind(Object(o.a)(n)),n.navToAcc=n.navToAcc.bind(Object(o.a)(n)),n.navToTrans=n.navToTrans.bind(Object(o.a)(n)),n.getUserProImg=n.getUserProImg.bind(Object(o.a)(n)),n.state={pro_img:p.a},n.getUserProImg(),n}return Object(i.a)(a,[{key:"navToDash",value:function(){this.props.navTo("dash")}},{key:"navToRep",value:function(){this.props.navTo("rep")}},{key:"navToAcc",value:function(){this.props.navTo("accounting")}},{key:"navToTrans",value:function(){this.props.navTo("trans")}},{key:"getUserProImg",value:function(){var e=this;fetch("/api/profile/img",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.pro_img||e.setState((function(){return{pro_img:t.pro_img}}))})).catch((function(e){console.log(e)}))}}]),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"side_bar"},c.a.createElement("div",{className:"side_bar_con"},c.a.createElement("img",{className:"add_img_btn",src:this.state.pro_img,alt:""}),c.a.createElement("li",{className:"new_btn",onClick:this.props.AddAccCrossBtn},c.a.createElement("span",null,"New")," ",c.a.createElement("img",{src:"",alt:""})),c.a.createElement("li",{className:"dash"===this.props.actPage?"side_btn act_s_btn":"side_btn",onClick:this.navToDash},c.a.createElement("span",null,"DashBoard"),c.a.createElement("img",{src:"",alt:""})),c.a.createElement("li",{className:"accounting"===this.props.actPage?"side_btn act_s_btn":"side_btn",onClick:this.navToAcc},c.a.createElement("span",null,"Accounting"),c.a.createElement("img",{src:"",alt:""})),c.a.createElement("li",{className:"trans"===this.props.actPage?"side_btn act_s_btn":"side_btn",onClick:this.navToTrans},c.a.createElement("span",null,"Transactions"),c.a.createElement("img",{src:"",alt:""})),c.a.createElement("li",{className:"rep"===this.props.actPage?"side_btn act_s_btn":"side_btn",onClick:this.navToRep},c.a.createElement("span",null,"Reports"),c.a.createElement("img",{src:"",alt:""})),c.a.createElement("li",{className:"agency"===this.props.actPage?"side_btn act_s_btn":"side_btn",onClick:this.navToAgency},c.a.createElement("span",null,"Agency"),c.a.createElement("img",{src:"",alt:""}))))}}]),a}(c.a.Component),_=a(50),h=a.n(_),v=a(51),b=a.n(v),N=a(52),g=a.n(N),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"logout",value:function(){fetch("/api/login",{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(){window.location.href="/home"})).catch((function(e){alert(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"top_bar",style:{marginBottom:"50px"}},c.a.createElement("img",{className:"menu_btn",src:h.a,alt:""}),c.a.createElement("li",{className:"top_btns help_btn",onClick:this.logout},c.a.createElement("span",null,c.a.createElement("img",{src:b.a,alt:"?"}))," Help"),c.a.createElement("li",{className:"top_btns settings_btn"}," ",c.a.createElement("span",null,c.a.createElement("img",{src:g.a,alt:""}))," Settings"))}}]),a}(c.a.Component);y.defaultProps={margin:"5px"};var f=y,A=a(10),C=a.n(A),P=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).addProSaveBtn=n.addProSaveBtn.bind(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"addProSaveBtn",value:function(){var e=this,t={product_name:document.querySelector(".add_pro_inp_name").value,hsn_num:document.querySelector(".add_pro_inp_num").value};fetch("/api/products",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){t.product?(alert("Product Saved"),e.props.AddProCrossBtn()):(alert("Unable to save products, Please Try again later"),e.props.AddProCrossBtn())})).catch((function(t){alert(t),e.props.AddProCrossBtn()}))}}]),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"add_products"},c.a.createElement("div",{className:"overlay"}),c.a.createElement("div",{className:"add_pro_con"},c.a.createElement("div",{className:"add_pro_head"},c.a.createElement("h1",null,"Add Products"),c.a.createElement("img",{onClick:this.props.AddProCrossBtn,src:C.a,alt:""})),c.a.createElement("div",{className:"add_pro_body"},c.a.createElement("div",{className:"add_pro_name"},c.a.createElement("span",null,"Product Name"),c.a.createElement("input",{className:"add_pro_inp_name",type:"text",placeholder:"Enter Product Name"})),c.a.createElement("div",{className:"add_pro_num"},c.a.createElement("span",null,"HSN No."),c.a.createElement("input",{className:"add_pro_inp_num",placeholder:"Enter HSN No.",type:"text"})),c.a.createElement("div",{className:"two_items",id:"add_pro_btns"},c.a.createElement("button",{className:"add_pro_can_btn",onClick:this.props.AddProCrossBtn},"Cancel"),c.a.createElement("button",{className:"add_pro_btn",onClick:this.addProSaveBtn},"Save")))))}}]),a}(c.a.Component),O=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).shipAdd=n.shipAdd.bind(Object(o.a)(n)),n.billAdd=n.billAdd.bind(Object(o.a)(n)),n.state={bil_add:!0},n}return Object(i.a)(a,[{key:"shipAdd",value:function(){this.setState((function(){return{bil_add:!1}}))}},{key:"billAdd",value:function(){this.setState((function(){return{bil_add:!0}}))}}]),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"add_acc"},c.a.createElement("div",{className:"overlay"}),c.a.createElement("div",{className:"add_acc_con"},c.a.createElement("div",{className:"add_acc_head"},c.a.createElement("h1",null,"Add Account"),c.a.createElement("img",{onClick:this.props.AddAccCrossBtn,src:C.a,alt:""})),c.a.createElement("div",{className:"add_acc_body"},c.a.createElement("div",{className:"add_acc_body_left"},c.a.createElement("h1",null,"Account Details"),c.a.createElement("div",{className:"two_items"},c.a.createElement("div",{className:"add_acc_name si"},c.a.createElement("span",null,"Account Name"),c.a.createElement("br",null),c.a.createElement("input",{className:"add_acc_inp_name",type:"text",placeholder:"Enter Name here"})),c.a.createElement("div",{className:"add_acc_type si"},c.a.createElement("span",null,"Account Type"),c.a.createElement("br",null),c.a.createElement("select",{name:"Group",className:"add_acc_inp",id:"add_acc_inp_group",placeholder:"Select Group"},c.a.createElement("option",null,"Option one"),c.a.createElement("option",null,"Option one"),c.a.createElement("option",null,"Option one")))),c.a.createElement("div",{className:"add_acc_print_name si"},c.a.createElement("span",null,"Print Name"),c.a.createElement("br",null),c.a.createElement("input",{className:"add_acc_inp_name",placeholder:"Enter Name here",type:"text"})),c.a.createElement("div",{className:"add_acc_obal si"},c.a.createElement("span",null,"Opening Balacing"),c.a.createElement("br",null),c.a.createElement("input",{className:"add_acc_inp_num",placeholder:"Enter Amount",type:"text"})),c.a.createElement("h1",{id:"reg_det_h"}," Registration Details"),c.a.createElement("div",{className:"two_items"},c.a.createElement("div",{className:"add_acc_status si"},c.a.createElement("span",null,"Status "),c.a.createElement("br",null),c.a.createElement("select",{id:"add_acc_status"},c.a.createElement("option",{value:"option one"},"option one"),c.a.createElement("option",{value:"option one"},"option one"),c.a.createElement("option",{value:"option one"},"option one"),c.a.createElement("option",{value:"option one"},"option one"))),c.a.createElement("div",{className:"add_acc_gstnum si"},c.a.createElement("span",null,"GST No."),c.a.createElement("br",null),c.a.createElement("input",{className:"add_acc_inp_gst",placeholder:"Enter GST No.",type:"text"}))),c.a.createElement("div",{className:"two_items"},c.a.createElement("div",{className:"add_acc_pan si"},c.a.createElement("span",null,"Pan No."),c.a.createElement("br",null),c.a.createElement("input",{className:"add_acc_inp_pan",placeholder:"Enter Pan No.",type:"text"})),c.a.createElement("div",{className:"add_acc_aadhar si"},c.a.createElement("span",null,"Aadhar No."),c.a.createElement("br",null),c.a.createElement("input",{className:"add_acc_inp_aadhar",placeholder:"Enter Aadhar No.",type:"text"})))),c.a.createElement("div",{className:"add_acc_body_right "},c.a.createElement("h1",null,c.a.createElement("span",{id:"billing_add",onClick:this.billAdd,style:this.state.bil_add?{color:"black"}:null},"Billing Address"),c.a.createElement("span",{onClick:this.shipAdd,id:"shipping_add",style:this.state.bil_add?null:{color:"black"}},"Shipping Address")),c.a.createElement("div",{className:"add_acc_add1 si"},c.a.createElement("span",null,"Address Line 1"),c.a.createElement("br",null),c.a.createElement("input",{id:"add_acc_inp_add1",type:"text",placeholder:"Address Line 1"})),c.a.createElement("div",{className:"add_acc_add2 si"},c.a.createElement("span",null,"Address Line 2"),c.a.createElement("br",null),c.a.createElement("input",{id:"add_acc_inp_add2",type:"text",placeholder:"Address Line 2"})),c.a.createElement("div",{className:"two_items"},c.a.createElement("div",{className:"add_acc_state si"},c.a.createElement("span",null,"State"),c.a.createElement("br",null),c.a.createElement("select",{name:"Group",id:"add_acc_inp_state"},c.a.createElement("option",null,"Select State"),c.a.createElement("option",null,"Option one"),c.a.createElement("option",null,"Option one"))),c.a.createElement("div",{className:"add_acc_city si"},c.a.createElement("span",null,"City"),c.a.createElement("br",null),c.a.createElement("select",{name:"Group",id:"add_acc_inp_city"},c.a.createElement("option",null,"Select City"),c.a.createElement("option",null,"Option one"),c.a.createElement("option",null,"Option one")))),c.a.createElement("div",{className:"add_acc_pincode si"},c.a.createElement("span",null,"Pincode"),c.a.createElement("br",null),c.a.createElement("input",{className:"add_acc_inp_pincode",type:"text",placeholder:"Enter Pincode"})),c.a.createElement("div",{className:"two_items"},c.a.createElement("div",{className:"add_acc_mobnum si"},c.a.createElement("span",null,"Mobile No."),c.a.createElement("br",null),c.a.createElement("select",{name:"mob",id:"add_acc_inp_mobnum"},c.a.createElement("option",null,"+91"),c.a.createElement("option",null,"+1"),c.a.createElement("option",null,"+2")),c.a.createElement("input",{type:"Number",id:"add_acc_inp_mob",placeholder:"Enter Mobile No."})),c.a.createElement("div",{className:"add_acc_phonenum si"},c.a.createElement("span",null,"Phone No."),c.a.createElement("br",null),c.a.createElement("select",{name:"mob",id:"add_acc_inp_phonenum"},c.a.createElement("option",null,"+91"),c.a.createElement("option",null,"Option one"),c.a.createElement("option",null,"Option one")),c.a.createElement("input",{type:"Number",id:"add_acc_inp_phone",placeholder:"Enter Phone No."}))),c.a.createElement("div",{className:"two_items"},c.a.createElement("div",{className:"add_acc_email si"},c.a.createElement("span",null,"E-mail ID"),c.a.createElement("br",null),c.a.createElement("input",{className:"add_acc_inp_email",type:"Email",placeholder:"Enter e-mail Id"})),c.a.createElement("div",{className:"add_acc_note si"},c.a.createElement("span",null,"Note (If any)"),c.a.createElement("br",null),c.a.createElement("input",{className:"add_acc_inp_note",type:"text",placeholder:"Note , if any"}))))),c.a.createElement("div",{id:"bottom_btns",className:"two_items"},c.a.createElement("button",{className:"add_acc_can_btn",onClick:this.props.AddAccCrossBtn},"Cancel"),c.a.createElement("button",{className:"add_acc_btn",onClick:this.props.AddAccSaveBtn},"Save"))))}}]),a}(c.a.Component),j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"c_logo"},c.a.createElement("div",{className:"c_name"}," ",c.a.createElement("h1",null,"Company Name ")))}}]),a}(c.a.Component),S=a(53),T=a.n(S),B=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"nav_sec"},c.a.createElement("div",{className:"nav_items"},this.props.navItems&&this.props.navItems.map((function(e){return c.a.createElement("li",null,e)}))),c.a.createElement("div",{className:"other_det"},this.props.isAddAccount&&c.a.createElement("div",{className:"add_account",onClick:this.props.AddProCrossBtn},"+ Add Account"),c.a.createElement("img",{src:T.a,alt:""}),c.a.createElement("input",{type:"text"})))}}]),a}(c.a.Component),k=B;B.defaultProps={isAddAccount:!0};var x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getProducts=n.getProducts.bind(Object(o.a)(n)),n.state={products:[]},n.getProducts(),n}return Object(i.a)(a,[{key:"getProducts",value:function(){var e=this;fetch("/api/products",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.Products&&e.setState((function(){return{products:t.Products}}))})).catch((function(e){alert(e)}))}}]),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"pro_compo"},c.a.createElement("div",{className:"pro_con"},c.a.createElement("table",{id:"accounting_pro_table"},c.a.createElement("tr",null,c.a.createElement("th",null,"S.No."),c.a.createElement("th",null,"Product Name"),c.a.createElement("th",null,"Product HSN No."),c.a.createElement("th",null,"Edit"),c.a.createElement("th",null,"Delete")),c.a.createElement("tr",null,c.a.createElement("td",null,"1"),c.a.createElement("td",null,"Milk"),c.a.createElement("td",null,"15684542545"),c.a.createElement("td",null,c.a.createElement("a",{href:""},"edit")),c.a.createElement("td",null,c.a.createElement("a",{href:""},"X"))),this.state.products.map((function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,"1"),c.a.createElement("td",null,e&&e.product_name),c.a.createElement("td",null,"15684542545"),c.a.createElement("td",null,c.a.createElement("a",{href:""},"edit")),c.a.createElement("td",null,c.a.createElement("a",{href:""},"X")))})))))}}]),a}(c.a.Component),w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).vochAddPro=n.vochAddPro.bind(Object(o.a)(n)),n.getProducts=n.getProducts.bind(Object(o.a)(n)),n.state={products:[]},n.getProducts(),n}return Object(i.a)(a,[{key:"vochAddPro",value:function(){var e=document.querySelector("#vouch_pro_item").value,t=document.querySelector("#vouch_table"),a=this.state.products.find((function(t,a){if(t.hsn_num==e)return!0})),n=document.createElement("tr");n.innerHTML="<td>1</td>\n                           <td>".concat(a.product_name,"</td>\n                           <td>").concat(a.hsn_num,'</td>\n                           <td><a href="">edit</a></td>\n                           <td><a href="">X</a></td>'),t.appendChild(n)}},{key:"getProducts",value:function(){var e=this;fetch("/api/products",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.Products&&e.setState((function(){return{products:t.Products}}))})).catch((function(e){alert(e)}))}}]),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"add_vouch_con"},c.a.createElement("div",{className:"add_pro_head"},c.a.createElement("h1",null,"Add Purchase Voucher"),c.a.createElement("div",{className:"add_vouch_right_btns"},c.a.createElement("p",null,"Save"),c.a.createElement("p",null,"Reset"),c.a.createElement("img",{onClick:this.props.AddProCrossBtn,src:C.a,alt:""}))),c.a.createElement("div",{className:"vouch_body"},c.a.createElement("div",{className:"vouch_body_left"},c.a.createElement("div",{className:"vouch_body_left_top"},c.a.createElement("div",{className:"vouch_details"},c.a.createElement("div",{className:"vouch_si"},c.a.createElement("span",null,"Bill Date"),c.a.createElement("br",null),c.a.createElement("input",{type:"date",name:"vouch_bill_date",id:"vouch_bill_date"})),c.a.createElement("div",{className:"vouch_si"},c.a.createElement("span",null,"Type"),c.a.createElement("br",null),c.a.createElement("select",{name:"vouch_type",id:"vouch_type"},c.a.createElement("option",{value:"option1"},"Purchase"),c.a.createElement("option",{value:"option1"},"Purchase"),c.a.createElement("option",{value:"option1"},"Purchase"))),c.a.createElement("div",{className:"vouch_si"},c.a.createElement("span",null,"Bill No."),c.a.createElement("br",null),c.a.createElement("input",{type:"number",name:"vouch_bill_no",id:"vouch_bill_no"})),c.a.createElement("div",{className:"vouch_si"},c.a.createElement("span",null,"G. R. No."),c.a.createElement("br",null),c.a.createElement("input",{type:"number",name:"vouch_gr_no",id:"vouch_gr_no"})),c.a.createElement("div",{className:"vouch_si"},c.a.createElement("span",null,"Transport Name"),c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"vouch_transport_name",id:"vouch_transport_name"})),c.a.createElement("div",{className:"vouch_si"},c.a.createElement("span",null,"Supplier"),c.a.createElement("br",null),c.a.createElement("select",{name:"vouch_sup",id:"vouch_sup"},c.a.createElement("option",{value:"opt1"},"D S Textile"),c.a.createElement("option",{value:"opt1"},"D S Textile"),c.a.createElement("option",{value:"opt1"},"D S Textile"))),c.a.createElement("div",{className:"vouch_si"},c.a.createElement("span",null,"Supplier Agent"),c.a.createElement("br",null),c.a.createElement("select",{name:"vouch_sup_agent",id:"vouch_sup_agent"},c.a.createElement("option",{value:"opt1"},"D S Textile"),c.a.createElement("option",{value:"opt1"},"D S Textile"),c.a.createElement("option",{value:"opt1"},"D S Textile"))),c.a.createElement("div",{className:"vouch_si"},c.a.createElement("span",null,"Set Commission"),c.a.createElement("br",null),c.a.createElement("input",{type:"number",name:"vouch_comission",id:"vouch_comission",defaultValue:"1"}))),c.a.createElement("div",{className:"vouch_customer"},c.a.createElement("div",{className:"vouch_si"},c.a.createElement("span",null,"Customer"),c.a.createElement("br",null),c.a.createElement("select",{name:"vouch_sup_agent",id:"vouch_sup_agent"},c.a.createElement("option",{value:"opt1"},"D S Textile"),c.a.createElement("option",{value:"opt1"},"D S Textile"),c.a.createElement("option",{value:"opt1"},"D S Textile")),c.a.createElement("span",{style:{marginLeft:"20px",cursor:"pointer"},onClick:function(){alert("to do : add sub Agent")}},"   + Add Sub Agent")))),c.a.createElement("div",{className:"vouch_body_middle"},c.a.createElement("div",{className:"vouch_si"},c.a.createElement("span",null,"Product / Item"),c.a.createElement("br",null),c.a.createElement("select",{name:"vouch_pro_item",id:"vouch_pro_item"},this.state.products&&this.state.products.map((function(e){return c.a.createElement("option",{value:e.hsn_num},e.product_name)})))),c.a.createElement("div",{className:"vouch_si"},c.a.createElement("span",null,"Quality"),c.a.createElement("br",null),c.a.createElement("input",{type:"number",name:"vouch_quality",id:"vouch_quality",defaultValue:"1"})),c.a.createElement("div",{className:"vouch_si"},c.a.createElement("span",null,"Rate"),c.a.createElement("br",null),c.a.createElement("input",{type:"number",name:"vouch_rate",id:"vouch_rate",defaultValue:"1"})),c.a.createElement("div",{className:"vouch_si"},c.a.createElement("span",null,"GST"),c.a.createElement("br",null),c.a.createElement("input",{type:"number",name:"vouch_rate",id:"vouch_rate",defaultValue:"18"})),c.a.createElement("div",{className:"vouch_si"},c.a.createElement("button",{id:"vouch_add_btn",onClick:this.vochAddPro},"Add"))),c.a.createElement("div",{className:"vouch_table_con"},c.a.createElement("table",{id:"vouch_table"},c.a.createElement("tr",null,c.a.createElement("th",null,"S.No."),c.a.createElement("th",null,"Product Name"),c.a.createElement("th",null,"Product HSN No."),c.a.createElement("th",null,"Edit"),c.a.createElement("th",null,"Delete")),c.a.createElement("tr",null,c.a.createElement("td",null,"1"),c.a.createElement("td",null,"Milk"),c.a.createElement("td",null,"15684542545"),c.a.createElement("td",null,c.a.createElement("a",{href:""},"edit")),c.a.createElement("td",null,c.a.createElement("a",{href:""},"X")))))),c.a.createElement("div",{className:"vouch_body_right"},c.a.createElement("div",{className:"right items"}))))}}]),a}(c.a.Component),D=a(54),I=a.n(D),R=a(21),G=a.n(R),L=a(22),H=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).state={data:10};var c=!1;return setInterval((function(){n.state.data>50?c=!0:n.state.data<5&&(c=!1),!1===c?n.setState((function(e){return{data:e.data+1}})):n.setState((function(e){return{data:e.data-1}}))}),500),n}return Object(i.a)(a,[{key:"render",value:function(){var e={labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,15,25,this.state.data,10],backgroundColor:["#29A8AB","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","#29A8AB","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]};return c.a.createElement("div",{className:"Dash"},c.a.createElement("div",{className:"dash_con"},c.a.createElement("div",{className:"empty_con "},c.a.createElement("div",{onClick:this.props.addAccBtn,className:"add_acc_big empty_box empty_box1"},c.a.createElement("img",{src:I.a,alt:""}),c.a.createElement("h1",null,"Add Accounts")),c.a.createElement("div",{className:"add_trans_big empty_box empty_box1"},c.a.createElement("img",{src:G.a,alt:""}),c.a.createElement("h1",null,"Add Transactions"))),c.a.createElement("div",{className:"empty_con_text"},c.a.createElement("p",null,"Nothing Here to show,",c.a.createElement("br",null)," Start by adding accounts and much more.")),c.a.createElement("div",{className:"empty_con "},c.a.createElement("div",{className:"empty_box empty_box2"},c.a.createElement("img",{src:G.a,alt:""}),c.a.createElement("h1",null,"Add Reports")),c.a.createElement("div",{className:"empty_box empty_box2"},c.a.createElement("img",{src:G.a,alt:""}),c.a.createElement("h1",null,"Add Agents")))),c.a.createElement("div",{className:"charts"},c.a.createElement("div",{className:"chart"},c.a.createElement("div",{className:"chart_con"}," ",c.a.createElement(L.a,{data:e,options:{maintainAspectRatio:!1}}))),c.a.createElement("div",{className:"chart"},c.a.createElement("div",{className:"chart_con"},c.a.createElement(L.b,{data:e,options:{maintainAspectRatio:!1}}))),c.a.createElement("div",{className:"chart"},c.a.createElement("div",{className:"chart_con"}," ",c.a.createElement(L.c,{data:e,options:{maintainAspectRatio:!1}})))))}}]),a}(c.a.Component),M=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).AddProCrossBtn=n.AddProCrossBtn.bind(Object(o.a)(n)),n.AddAccCrossBtn=n.AddAccCrossBtn.bind(Object(o.a)(n)),n.navTo=n.navTo.bind(Object(o.a)(n)),n.state={AddPro:!1,AddAcc:!1,page:"trans"},n}return Object(i.a)(a,[{key:"navTo",value:function(e){this.setState((function(){return{page:e}}))}},{key:"AddProCrossBtn",value:function(){var e=this;this.setState((function(t){return e.state.AddPro?{AddPro:!1}:{AddPro:!0}}))}},{key:"AddAccCrossBtn",value:function(){var e=this;this.setState((function(){return e.state.AddAcc?{AddAcc:!1}:{AddAcc:!0}}))}}]),Object(i.a)(a,[{key:"render",value:function(){var e=null;return"rep"===this.state.page&&(e=c.a.createElement("div",{className:"pageBody"},c.a.createElement(f,null),c.a.createElement(j,null),c.a.createElement(k,{AddProCrossBtn:this.AddProCrossBtn,navItems:["Challen Reg.","Daily Book ","Ledger"]}),c.a.createElement(x,null))),"dash"===this.state.page&&(e=c.a.createElement("div",{className:"pageBody"},c.a.createElement(f,null),c.a.createElement(j,null),c.a.createElement(H,{addAccBtn:this.AddAccCrossBtn}))),"accounting"===this.state.page&&(e=c.a.createElement("div",{className:"pageBody"},c.a.createElement(f,null),c.a.createElement(j,null),c.a.createElement(k,{AddProCrossBtn:this.AddProCrossBtn,navItems:["Accounts ","Products"]}),c.a.createElement(x,{reload:this.state.AddPro}))),"trans"===this.state.page&&(e=c.a.createElement("div",{className:"pageBody"},c.a.createElement(f,{margin:{marginBottom:"50px"}}),c.a.createElement(k,{AddProCrossBtn:this.AddProCrossBtn,isAddAccount:!1}),c.a.createElement(w,null))),c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"side"},c.a.createElement(E,{AddAccCrossBtn:this.AddAccCrossBtn,navTo:this.navTo,actPage:this.state.page})),e,this.state.AddPro?c.a.createElement(P,{AddProCrossBtn:this.AddProCrossBtn}):null,this.state.AddAcc?c.a.createElement(O,{AddAccCrossBtn:this.AddAccCrossBtn}):null)}}]),a}(c.a.Component);a(156);r.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}));var q=!0;document.getElementsByClassName("menu_btn")[0].onclick=function(){q?(document.getElementsByClassName("side_bar")[0].style.animationName="hideSideMenu",document.getElementsByClassName("side_bar_con")[0].style.animationName="hideSideItems",q=!1):(document.getElementsByClassName("side_bar")[0].style.animationName="showSideMenu",document.getElementsByClassName("side_bar_con")[0].style.animationName="showSideItems",q=!0)}},21:function(e,t,a){e.exports=a.p+"static/media/add_rep.fa1aea5d.svg"},49:function(e,t,a){e.exports=a.p+"static/media/social-media.bda8e017.svg"},50:function(e,t,a){e.exports=a.p+"static/media/menu.2696b127.svg"},51:function(e,t,a){e.exports=a.p+"static/media/info.4b71b0dd.svg"},52:function(e,t,a){e.exports=a.p+"static/media/settings.852d7b70.svg"},53:function(e,t,a){e.exports=a.p+"static/media/refresh.cb499d5d.svg"},54:function(e,t,a){e.exports=a.p+"static/media/add_acc.34a34a4f.svg"},56:function(e,t,a){e.exports=a(157)}},[[56,1,2]]]);
//# sourceMappingURL=main.244b0d7e.chunk.js.map