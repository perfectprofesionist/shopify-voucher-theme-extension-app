window.addEventListener('load', function () { 
    console.log("app present");
    let api_url = 'https://4d69-114-134-25-199.in.ngrok.io/cre2/public';

    let product_form = document.querySelector("form[action='/cart/add']");
    let shop = Shopify.shop;
    let html = '<div id="shopify-app-front-widget">My App</div>';

    let voucher_widget = document.getElementsByTagName("voucher-widget")[0];

    let all_prod_forms = document.querySelectorAll("form[action='/cart/add']");

    let cust_id = shopify_inside_customer ? shopify_inside_customer : ShopifyAnalytics.meta.page.customerId;
    // if (cust_id) {
    console.log("cust_id",cust_id);
    let pro_tag = '';

    // if(cust_id) {

        if (window.location.href.indexOf("/cart") > -1) {
            console.log("cart page");

            initialCartFunc();

            let css = '.widget-custom-btn { color: #fff; background-color: #000; border: 3px solid #000; display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; padding: 0.375rem 0.75rem; line-height: 1.5; border-radius: 0.25rem; }.modal { display: none; position: fixed; z-index: 1; left: 0; top: 50%; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); z-index: 9;    transform: translateY(-50%); }.modal-content { background-color: #fefefe; padding: 0px; border: 1px solid #888; width: 100%; max-width: 800px; }.widget-box { display: flex; width: 100%; align-items: flex-end;}.widget-box .coupon-input { width: 85%; }.widget-box .coupon-input input { width: 100%; height: 50px; border: 2px solid; box-shadow: 2px 3px 0px #a52a2a; margin-top: 10px; padding: 15px;}.widget-box .coupon-btn { width: 15%; height: 50px; text-align: center; }.coupon-btn button { background: #ffff00; color: #000; border-width: 2px; width: 100%; height: 100%; }.widget-wrapper { flex-direction: column; display: flex; justify-content: space-between; width: 60%; margin: 0 auto; align-items: center; }.redeem-btn button { background: #d3d3d3; border: 2px solid #000; color: #000; height: 50px; box-shadow: 2px 3px 0px #a52a2a; padding: 0 20px; }.close { float: unset; width: 5%; line-height: 10px; }.close:hover, .close:focus{ display: unset; }.coupnModalHeader { display: flex; justify-content: space-between; margin: 40px 20px; }.coupnModalHeader h2 { font-size: 35px; text-align: center; font-weight: bold; width: 95%; }.voucherErr { width: 100%; margin: 15px auto; text-align: center; color: red; }.voucherMsg{ font-weight: bold; margin: 10px; font-size: 20px; } .disPrice { font-weight: bold; font-size: 20px; }.v-footer {background: lightgrey;text-align: center;margin-top: 15px; padding: 15px; }.redeem_btn { background: unset; border: unset; width: 100%; padding: 0; margin: 0; }.redeem_btn button { max-width: 460px; width: 100%; }.redeem_btn button img { cursor: pointer; }';

            css += '.widget-custom-btn { color: #fff; background-color: #000; border: 3px solid #000; display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; padding: 0.375rem 0.75rem; line-height: 1.5; border-radius: 0.25rem; }.modal { display: none; position: fixed; z-index: 1; left: 0; top: 50%; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); z-index: 9; transform: translateY(-50%); padding-top: 60px; }.modal-content { position: relative; background-color: #fefefe; padding: 0px; border: 20px solid #194e93; width: 100%; max-width: 710px; height: 800px;overflow-y: auto; }.widget-box .voucher_wrapper { display: flex; width: 100%; align-items: flex-end; position: relative;}.widget-box .coupon-input { width: 100%; }.widget-box .coupon-input input { width: 100%; height: 45px; margin-top: 0px; padding: 15px 12px; color: #124F97; font-size: 13px; background: #FFFFFF; border: 2px solid #0080C0; box-shadow: 0px 4px 31px rgb(0 0 0 / 9%); border-radius: 4px;}.widget-box .coupon-btn { width: 15%; height: 45px; text-align: center; }.coupon-btn button { background: #007EC1; color: #fff; border-width: 2px; height: 100%; border: unset; border-radius: 4px; width: 100%; }.widget-wrapper { flex-direction: column; display: flex; justify-content: space-between; width: 60%; margin: 0 auto; align-items: center; }.redeem-btn button { border: unset; background: #194E93; box-shadow: 0px 4px 31px rgb(0 0 0 / 9%); border-radius: 18px; height: 50px; width: 100%; color: #fff; font-weight: 600; font-size: 18px; }.close { float: unset; background: #C1D5E3; border-radius: 6px; height: 34px; text-align: center; line-height: 30px; color: #194E93; width: 34px; position: absolute; right: 30px; }.close:hover, .close:focus{ display: unset; }.coupnModalHeader { display: flex; justify-content: space-between; margin: 20px; }.coupnModalHeader h2 { color: #124F97; font-size: 38px; line-height: 38px; margin: 0 auto; max-width: 290px; width: 100%; font-family: "Anek Devanagari", sans-serif; }.voucherErr { width: 100%; margin: 0 auto 10px; text-align: center; color: white; background: #F84F67; border-radius: 4px; font-size: 16px; padding: 5px; } .disPrice { font-weight: bold; font-size: 20px; }.v-footer {background: lightgrey;text-align: center;margin-top: 15px; padding: 15px; }.redeem_btn { background: unset; border: unset; width: 100%; padding: 0; margin: 0; }.redeem_btn button { max-width: 460px; width: 100%; }.redeem_btn button img { cursor: pointer; } .widget-box.widget-vouchers { margin: 10px 0px; } .widget-vouchers .coupon-input.e_inpt label, .voucher_inpts_wrapper label { font-family: "Anek Devanagari", sans-serif; font-weight: 600; font-size: 17px; color: #124F97; display: flex; justify-content: center; } .widget-box.widget-box-sm-inpt .coupon-input { width: 80% } .widget-box.widget-box-sm-inpt .coupon-input input { border-radius: 4px 0 0 4px;} .voucher_wrapper.voucher_wrapper_success .coupon-input input { border-color: #4caf50;} .widget-wrapper img { max-width: 100px; margin-bottom: 20px; } .widget-box.widget-box-sm-inpt .coupon-btn { width: 20% } .widget-box.widget-box-sm-inpt .coupon-btn button { border-radius: 0 4px 4px 0; font-size: 18px; } .voucher_inpts_wrapper { width: 100%;} .widget-box{ width: 100%; display: unset; align-items: unset;} .total_values, .voucherMsg { width: 100%; margin: 20px 0px; } .total_values .key_val, .voucherMsg { font-family: "Anek Devanagari", sans-serif; font-size: 14px; line-height: 25px; color: #124F97; font-weight: 400; } .total_values .key_val { display: flex; justify-content: space-between; } .redeem-btn { width: 100%; } .voucher_wrapper.error_inpt input { border-color: #f84f67; } .voucher_wrapper.error_inpt .widget-custom-btn { background: #f84f67; } .voucher_wrapper.voucher_wrapper_success {align-items: center; color: #fff; background: #4caf50; padding: 0 10px; justify-content: space-between; margin: 10px 0; flex-direction: column; } .voucher_wrapper.voucher_wrapper_success .coupon-btn { width: 30%; display: flex; } .voucher_wrapper.voucher_wrapper_success .coupon-btn button { background: #007ec1; font-size: 14px; width: 100%; padding: 6px; margin-bottom: 3px; } .voucher_rem { position: absolute; top: -10px; right: -10px; background: #F84F67; height: 25px; width: 25px; border-radius: 50%; text-align: center; color: #fff; font-weight: bold; line-height: 22px; border: 1px solid #fff; } .voucherMsg { margin: 0; } .widget-box .coupon-input input:focus { outline: none; } .widget-box.widget-box-sm-inpt .coupon-input, .widget-box.widget-box-sm-inpt .coupon-btn { margin-bottom: 10px; } .voucher_wrapper.voucher_wrapper_success .coupon-btn, .voucher_wrapper.voucher_wrapper_success .coupon-input { margin-bottom: 0; } .v_coupon_wrap { display: flex; align-items: center; } .voucherMsg { color: #fff; font-size: 11px; line-height: 15px; text-align: center; margin: 15px auto 5px; }';
            
            let html = '<button type="button" class="btn btn-primary redeem_btn" id="widget-custom-btn-id" fdprocessedid="ljbsn6v"><img src="https://cdn.shopify.com/s/files/1/0711/0187/4483/files/APPLYVOUCHER.png?v=1674538254" alt="discount_coupon"></button><div id="widget-custom-modal-id" class="modal"><div class="modal-content"><div class="coupnModalHeader"><h2>Back to School NSW Vouchers</h2><span class="close">&times;</span></div><div class="widget-wrapper">';

            if(!cust_id) {
                html += '<div class="widget-box widget-email-box"><div class="coupon-input e_inpt"><input type="text" id="widget-custom-code-email-id" fdprocessedid="gf1r2i" placeholder="Enter your Email"></div></div>';
            }

            html += '<div class="widget-box"><div class="coupon-input"><input type="text" id="widget-custom-code-id" class="code-redeem-input" fdprocessedid="gf1r2i"><div id="add-new-input-custom"></div></div><div class="coupon-btn"><button type="button" class="btn btn-primary widget-custom-btn" id="widget-custom-btn-add-id" fdprocessedid="is6dhe">+</button></div></div><div class="voucherErr"></div><div class="key_val disPrice"><span>Cart Total: </span><span id="discount-custom1"> $<span id="discount-custom-cart-total">0</span></span></div><div class="key_val disPrice"><span>Eligible Cart Total: </span><span id="discount-custom"> $<span id="discount-custom-eligible-total">0</span></span></div><div class="key_val disPrice"><span>Remaining Cart Total: </span><span id="discount-custom"> $<span id="discount-custom-remaining-total">0</span></span></div><div class="voucherMsg">Please add voucher above to continue</div><div class="voucher_wrapper voucher_wrapper_success"><div class="coupon-input">The voucher - 7xB9YvxrJJ has been successfully added</div><div class="coupon-btn"><button type="button" id="widget-create-new-disc-coupon" class="btn btn-primary widget-custom-btn">New coupon</button><button type="button" class="btn btn-primary widget-custom-btn">Checkout</button></div></div><div class="redeem-btn"><button type="button" class="btn btn-primary widget-custom-btn" id="widget-custom-btn-redeem-id" fdprocessedid="d2dlcr">Redeem Voucher</button></div></div><div class="v-footer">Please ensure you add all the Back To School NWS Vouchers you\'d like to use before you hit the redeem voucher button. You must press redeem voucher button to finalise this process.</div></div></div><div id="widget-success-modal-id" class="modal"><div class="modal-content"><span class="close">&times;</span><p>Your Voucher has been redeemed. Please apply this code to checkout discount and you can use the coupon within 105 minutes.</p></div></div>';

            html += '<button type="button" class="btn btn-primary redeem_btn" id="widget-custom-btn-id-new" fdprocessedid="ljbsn6v"><img src="https://cdn.shopify.com/s/files/1/0711/0187/4483/files/APPLYVOUCHER.png?v=1674538254" alt="discount_coupon"></button><div id="widget-custom-modal-id-new" class="modal"><div class="modal-content"><div class="coupnModalHeader"><h2>Back to School NSW Vouchers</h2><span class="close">&times;</span></div><div class="widget-wrapper"><img src="https://cdn.shopify.com/s/files/1/0711/0187/4483/files/13_2.png?v=1674822934" alt="btc"><div class="widget-box widget-email-box"><div class="coupon-input e_inpt"><input type="text" id="widget-custom-code-email-id" fdprocessedid="gf1r2i" placeholder="Enter your Email"></div></div><div class="widget-box widget-vouchers"><div class="coupon-input e_inpt"><label>How many vouchers are you looking to use? </label><input type="text" id="widget-custom-code-email-id" fdprocessedid="gf1r2i"></div></div><div class="voucher_inpts_wrapper"><label>NSW Back To School Vouchers code:</label><div class="widget-box widget-box-sm-inpt"><div class="voucher_wrapper"><div class="coupon-input"><input type="text" id="widget-custom-code-id" class="code-redeem-input" fdprocessedid="gf1r2i"><div id="add-new-input-custom"></div></div><div class="coupon-btn"><button type="button" class="btn btn-primary widget-custom-btn" id="widget-custom-btn-add-id" fdprocessedid="is6dhe">Submit</button></div><div class="voucher_rem">x</div></div></div><div class="widget-box widget-box-sm-inpt"><div class="voucher_wrapper"><div class="coupon-input"><input type="text" id="widget-custom-code-id" class="code-redeem-input" fdprocessedid="gf1r2i"><div id="add-new-input-custom"></div></div><div class="coupon-btn"><button type="button" class="btn btn-primary widget-custom-btn" id="widget-custom-btn-add-id" fdprocessedid="is6dhe">Submit</button></div></div><div class="voucherErr">Error: The voucher specified could not be found</div></div><div class="widget-box widget-box-sm-inpt"><div class="voucher_wrapper"><div class="coupon-input"><input type="text" id="widget-custom-code-id" class="code-redeem-input" fdprocessedid="gf1r2i"><div id="add-new-input-custom"></div></div><div class="coupon-btn"><button type="button" class="btn btn-primary widget-custom-btn" id="widget-custom-btn-add-id" fdprocessedid="is6dhe">Submit</button></div></div></div></div><div class="redeem-btn"><button type="button" class="btn btn-primary widget-custom-btn" id="widget-custom-btn-redeem-id" fdprocessedid="d2dlcr">Redeem Voucher</button></div><div class="total_values"><div class="key_val disPrice"><span>Cart Total: </span><span id="discount-custom1"> $<span id="discount-custom-cart-total">0</span></span></div><div class="key_val disPrice"><span>Voucher/s Value: </span><span id="discount-custom"> $<span id="discount-custom-eligible-total">0</span></span></div><div class="key_val disPrice"><span>Voucher Value Remaining: </span><span id="discount-custom"> $<span id="discount-custom-remaining-total">0</span></span></div><div class="key_val disPrice"><span>Balance Remaining: </span><span id="discount-custom"> $<span id="discount-custom-remaining-total">0</span></span></div><div class="widget-box widget-box-sm-inpt"><div class="voucher_wrapper voucher_wrapper_success"><div class="v_coupon_wrap"><div class="coupon-input">The voucher - 7xB9YvxrJJ has been successfully added</div><div class="coupon-btn"><button type="button" class="btn btn-primary widget-custom-btn" id="widget-custom-btn-add-id" fdprocessedid="is6dhe">New coupon</button></div></div><div class="voucherMsg">If you don\'t use it within 105 minutes,all vouchsrs will be voided.</div></div></div></div></div></div><div id="widget-success-modal-id" class="modal"><div class="modal-content"><span class="close">&times;</span><p>Your Voucher has been redeemed. Please apply this code to checkout discount and you can use the coupon within 105 minutes.</p></div></div>';

            initialCss(css);

            voucher_widget.insertAdjacentHTML('beforeend', html);

            let cust_btn_id = document.getElementById('widget-custom-btn-id');
            let cust_btn_id_new = document.getElementById('widget-custom-btn-id-new');
            let create_new_disc_coupon_btn = document.getElementById('widget-create-new-disc-coupon');
            let cust_btn_add_id = document.getElementById('widget-custom-btn-add-id');
            let cust_modal_id = document.getElementById('widget-custom-modal-id');
            let cust_modal_id_new = document.getElementById('widget-custom-modal-id-new');
            let success_modal_id = document.getElementById('widget-success-modal-id');
            let cust_btn_redeem_id = document.getElementById('widget-custom-btn-redeem-id');
            let span = document.getElementsByClassName("close")[0];
            let close_success = document.getElementsByClassName("close")[1];
            cust_btn_id.onclick = function() {
                console.log("button clicked");

                cust_modal_id.style.display = "block";
            }

            create_new_disc_coupon_btn.onclick = function() {
                console.log("button clicked");
                console.log("data",JSON.parse(localStorage.getItem("ShopifyDiscountVoucherDetails")));
                let discount_data = JSON.parse(localStorage.getItem("ShopifyDiscountVoucherDetails"));
                fetch(api_url+"/delete-shopify-coupon/"+shop+"/"+discount_data.price_rule_id+"/"+discount_data.discount_coupon_id+"/"+discount_data.coupon_code)
                .then(response => response.json())
                .then(async (data) => {
                    console.log("data",data);
                    if(data.success == "success") {
                        localStorage.removeItem('ShopifyDiscountVoucherDetails');
                        cust_btn_redeem_id.dispatchEvent(new Event('click'));
                    } else {
                        console.log("error");
                    }
                });
            }

            cust_btn_id_new.onclick = function() {
                console.log("button clicked");

                cust_modal_id_new.style.display = "block";
            }

            cust_btn_add_id.onclick = function() {
                console.log("button clicked");

                // cust_modal_id.style.display = "block";
                // $("<span>Hello world!</span>").insertAfter("p");
                document.getElementById('add-new-input-custom').insertAdjacentHTML('beforebegin','<input type="text" class="code-redeem-input">');
                let all_vouchers_inputs = document.querySelectorAll(".code-redeem-input");
                all_vouchers_inputs.forEach(function(item, index) {
                    console.log("value1");
                    // item.addEventListener('focusout', function(e) {
                    //     console.log("value");
                    //     let coupon_code = item.value;
                    //     if(item.value) {
                    //         fetch(api_url+"/check-single-coupon-validity/"+coupon_code)
                    //         .then(response => response.json())
                    //         .then(async (data) => {
                    //             console.log("data",data);
                    //             if(data.success == "success") {  
                    //                 document.getElementById('discount-custom').innerHTML = '$'+data.amount;      
                    //             } else {
                    //                 // document.getElementsByClassName('voucherErr').insertAdjacentHTML('beforebegin','<p>'+data.message+'</p>');
                    //                 document.getElementsByClassName('voucherErr')[0].innerHTML = '';
                    //                 document.getElementsByClassName('voucherErr')[0].innerHTML = 'Error: '+data.message;
                    //             }
                    //         });
                    //     }
                    // });
                });
            }

            let all_vouchers_inputs = document.querySelectorAll(".code-redeem-input");
            all_vouchers_inputs.forEach(function(item, index) {
                console.log("value1");
                item.addEventListener('focusout', function(e) {
                    console.log("value");
                    let coupon_code = item.value;
                    if(item.value) {
                        let headers = new Headers();
                        headers.append('Content-Type', 'application/json');
                        headers.append('Accept', 'application/json');

                        headers.append('Access-Control-Allow-Origin', '*');
                        headers.append('Access-Control-Allow-Credentials', 'true');
                        fetch(api_url+"/check-single-coupon-validity/"+coupon_code,{
                            method: 'GET',
                            headers: headers
                        })
                        .then(response => response.json())
                        .then(async (data) => {
                            console.log("data",data);
                            if(data.success == "success") {
                                document.getElementById('discount-custom').innerHTML = '$'+data.amount;        
                            } else {
                                document.getElementsByClassName('voucherErr')[0].innerHTML = '';
                                document.getElementsByClassName('voucherErr')[0].innerHTML = 'Error: '+data.message;
                            }
                        });
                    }
                });
            }); 

            cust_btn_redeem_id.onclick = function() {
                console.log("button 2 clicked");
                let coupon_code = document.getElementById('widget-custom-code-id').value;

                // get all coupons entered here
                let all_coupon_code = '';
                let all_vouchers = document.querySelectorAll(".code-redeem-input");
                all_vouchers.forEach(function(item, index) {
                    console.log("item",item.value);
                    console.log("item",item);
                    console.log("index",index);
                    if(item.value) {
                        if(index == 0) {
                            all_coupon_code += item.value;
                        } else {
                            all_coupon_code += ","+item.value;
                        }
                    }
                });
                // console.log("all_coupon_code",all_coupon_code);
                // return true;
                // send ajax call to API here
                let code_redeem_url = '';
                if(all_coupon_code) {
                    let total_cart_amount_val = document.getElementById('discount-custom-cart-total').innerHTML;

                    if(cust_id) {
                        code_redeem_url = api_url+"/check-coupon-validity/"+shop+"/"+all_coupon_code+"/"+cust_id+"/customer/"+total_cart_amount_val;
                    } else {
                        let user_email = document.getElementById('widget-custom-code-email-id').value;
                        if(user_email){
                            code_redeem_url = api_url+"/check-coupon-validity/"+shop+"/"+all_coupon_code+"/"+user_email+"/email/"+total_cart_amount_val;
                        } else {
                            document.getElementsByClassName('voucherErr')[0].innerHTML = '';
                            document.getElementsByClassName('voucherErr')[0].innerHTML = 'Error: Please enter email id';
                            return false;
                        }
                    }
                } else {
                    document.getElementsByClassName('voucherErr')[0].innerHTML = '';
                    document.getElementsByClassName('voucherErr')[0].innerHTML = 'Error: Enter a voucher code';
                    return false;
                }

                fetch(code_redeem_url)
                .then(response => response.json())
                .then(async (data) => {
                    console.log("data",data);
                    if(data.success == "success") {
                        cust_modal_id.style.display = "none";        
                        success_modal_id.style.display = "block";  
                        localStorage.setItem("ShopifyDiscountVoucherDetails",JSON.stringify(data));
                    } else {
                        // document.getElementById('widget-custom-btn-redeem-id').insertAdjacentHTML('beforebegin','<p>'+data.message+'</p>');
                        document.getElementsByClassName('voucherErr')[0].innerHTML = '';
                        document.getElementsByClassName('voucherErr')[0].innerHTML = 'Error: '+data.message;
                    }
                });
            }

            span.onclick = function() {
                cust_modal_id.style.display = "none";
                success_modal_id.style.display = "none"; 
            }

            close_success.onclick = function() {
                cust_modal_id.style.display = "none";
                success_modal_id.style.display = "none"; 
            }
        }
    // }

    async function sendData(url, requestoption) {
        const response = await fetch(url, requestoption);
        return response.json();
    }

    function initialCartFunc() {
        fetch("/cart.js")
        .then(response => response.json())
        .then(async (data) => {
            let cart_items = data.items;
            let total_cart_amount = 0;
            for(var i = 0; i < cart_items.length; i++) {
                console.log("cart_item",cart_items[i]);
                console.log("cart_item.tags",cart_items[i].tags);
                console.log("cart_item.price",cart_items[i].price /100);
                let prod_vals = cart_items[i].price;
                fetch("/products/"+cart_items[i].handle+".js")
                .then(response1 => response1.json())
                .then(async (data1) => {
                    console.log("new data",data1.tags);
                    // console.log("cart_items[i]",cart_items[i]);
                    console.log("prod_vals",prod_vals);
                    for(var j = 0; j < data1.tags.length; j++) {
                        if(data1.tags[j] == "BTS"){
                            total_cart_amount += parseInt(prod_vals /100);
                        }
                    }
                    console.log("total_cart_amount",total_cart_amount.toFixed(2));
                    document.getElementById('discount-custom-cart-total').innerHTML = total_cart_amount.toFixed(2);
                    let eligible_total = parseFloat(document.getElementById('discount-custom-eligible-total').innerHTML);
                    console.log("eligible_total",eligible_total);
                    console.log("parsInt(total_cart_amount.toFixed(2)) - eligible_total",parseFloat(total_cart_amount.toFixed(2)) - eligible_total);
                    let remaining_total = parseFloat(total_cart_amount.toFixed(2)) - eligible_total;
                    document.getElementById('discount-custom-remaining-total').innerHTML = remaining_total.toFixed(2);
                    // document.getElementById('discount-custom-remaining-total').innerHTML = total_cart_amount.toFixed(2);
                    // let remaining_total = parseFloat(document.getElementById('discount-custom-remaining-total').innerHTML);
                })
            }
        })
    }

    function initialCss(css) {

        let head = document.head || document.getElementsByTagName('head')[0];
        let style = document.createElement('style');

        head.appendChild(style);

        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }
})