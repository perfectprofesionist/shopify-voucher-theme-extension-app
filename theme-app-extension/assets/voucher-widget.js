window.addEventListener('load', function () { 
    
    let api_url = 'https://cre2.prod.hpprojects.net';
    // let api_url = 'https://eeb3-114-134-24-55.in.ngrok.io/cre2/public';
    // let api_url = 'https://cre2.dev.hpprojects.net';

    let product_form = document.querySelector("form[action='/cart/add']");
    let shop = Shopify.shop;
    let html = '<div id="shopify-app-front-widget">My App</div>';

    // let voucher_widget = document.getElementsByTagName("voucher-widget")[0];
    let voucher_widget_class = document.getElementsByClassName("cart-finish")[0];
    let voucher_widget = voucher_widget_class.getElementsByClassName("small-row")[0];
    // let voucher_widget = document.getElementById("shopify-section-template--15658867917025__main");

    let all_prod_forms = document.querySelectorAll("form[action='/cart/add']");
    let shopify_inside_customer = '';
    let cust_id = shopify_inside_customer ? shopify_inside_customer : ShopifyAnalytics.meta.page.customerId;
    // if (cust_id) {
    let pro_tag = '';
    let pro_types = '';
    let pre_voucher_val = 1;
    let calculate_difference = 1;
    let last_amount_check = 0;
    console.log("here");
    console.log("here1");

    let segment_str = window.location.pathname;
    let segment_array = segment_str.split('/');
    let last_segment = segment_array.pop();
    if (last_segment == 'thank_you') {
        localStorage.removeItem('ShopifyDiscountVoucherDetails');
    }

    // if(cust_id) {

    if (window.location.href.indexOf("/cart") > -1) {

        // initialCartFunc();

        // let css = '.widget-custom-btn { color: #fff; background-color: #000; border: 3px solid #000; display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; padding: 0.375rem 0.75rem; line-height: 1.5; border-radius: 0.25rem; }.modal { display: none; position: fixed; z-index: 1; left: 0; top: 50%; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); z-index: 9;    transform: translateY(-50%); }.modal-content { background-color: #fefefe; padding: 0px; border: 1px solid #888; width: 100%; max-width: 800px; }.widget-box { display: flex; width: 100%; align-items: flex-end;}.widget-box .coupon-input { width: 85%; }.widget-box .coupon-input input { width: 100%; height: 50px; border: 2px solid; box-shadow: 2px 3px 0px #a52a2a; margin-top: 10px; padding: 15px;}.widget-box .coupon-btn { width: 15%; height: 50px; text-align: center; }.coupon-btn button { background: #ffff00; color: #000; border-width: 2px; width: 100%; height: 100%; }.widget-wrapper { flex-direction: column; display: flex; justify-content: space-between; width: 60%; margin: 0 auto; align-items: center; }.redeem-btn button { background: #d3d3d3; border: 2px solid #000; color: #000; height: 50px; box-shadow: 2px 3px 0px #a52a2a; padding: 0 20px; }.close { float: unset; width: 5%; line-height: 10px; }.close:hover, .close:focus{ display: unset; }.coupnModalHeader { display: flex; justify-content: space-between; margin: 40px 20px; }.coupnModalHeader h2 { font-size: 35px; text-align: center; font-weight: bold; width: 95%; }.voucherErr { width: 100%; margin: 15px auto; text-align: center; color: red; }.voucherMsg{ font-weight: bold; margin: 10px; font-size: 20px; } .disPrice { font-weight: bold; font-size: 20px; }.v-footer {background: lightgrey;text-align: center;margin-top: 15px; padding: 15px; }.redeem_btn { background: unset; border: unset; width: 100%; padding: 0; margin: 0; }.redeem_btn button { max-width: 460px; width: 100%; }.redeem_btn button img { cursor: pointer; }';

        css = '#widget-custom-btn-id-new { } .widget-custom-btn {  color: #fff; background-color: #000; border: 3px solid #000; display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; padding: 5px 12px; line-height: 1.5; border-radius: 0.25rem; }.modal { display: none; position: fixed; z-index: 1; left: 0; top: 50% !important; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); z-index: 9; transform: translateY(-50%); padding-top: 10px !important; }.modal-content { position: relative; background-color: #fefefe; padding: 0px; border: 20px solid #194e93; width: 100%; max-width: 710px !important; height: 680px;overflow-y: auto; }.widget-box .voucher_wrapper { display: flex; width: 100%; align-items: flex-start; position: relative;}.widget-box .coupon-input { width: 100%; }.widget-box .coupon-input input { width: 100%; height: 45px; margin-top: 0px; padding: 15px 12px; color: #124F97; font-size: 13px; background: #FFFFFF; border: 2px solid #0080C0; box-shadow: 0px 4px 31px rgb(0 0 0 / 9%); border-radius: 4px; margin-bottom:0px;}.widget-box .coupon-btn { width: 15%; height: 43px; text-align: center; }.coupon-btn button, .coupon-btn button:hover { background: #007EC1; color: #fff; border-width: 2px; height: 100%; border: unset; border-radius: 4px; width: 100%; min-width: unset;} .widget-wrapper { flex-direction: column; display: flex; justify-content: space-between; width: 60%; margin: 0 auto; align-items: center; }.redeem-btn button, .redeem-btn button:hover { border: unset; background: #194E93; box-shadow: 0px 4px 31px rgb(0 0 0 / 9%); border-radius: 18px; height: 50px; width: 100%; color: #fff; font-weight: 600; font-size: 18px; }.close { float: unset; background: #C1D5E3; border-radius: 6px; height: 34px; text-align: center; line-height: 30px; color: #194E93; width: 34px; position: absolute; right: 30px; }.close:hover, .close:focus{ display: unset; }.coupnModalHeader { display: flex; justify-content: space-between; margin: 20px; }.coupnModalHeader h2 { color: #124F97; font-size: 38px; line-height: 38px; margin: 0 auto; max-width: 290px; width: 100%; font-family: "Anek Devanagari", sans-serif; }.voucherErr { width: 100%; margin: 0 auto 10px; text-align: center; color: white; background: #F84F67; border-radius: 4px; font-size: 16px; padding: 5px; display:none; }.voucherSucc { width: 100%; margin: 0 auto 10px; text-align: center; color: white; background: #4caf50; border-radius: 4px; font-size: 16px; padding: 5px; display:none; } .disPrice { font-weight: bold; font-size: 20px; }.v-footer {background: lightgrey;text-align: center;margin-top: 15px; padding: 15px; }.redeem_btn, .redeem_btn:hover { background: unset; border: unset; box-shadow: unset !important; padding: 0; margin: 0; }.redeem_btn button { max-width: 460px; width: 100%; }.redeem_btn button img { cursor: pointer; } .widget-box.widget-vouchers { margin: 10px 0px; } .widget-vouchers .coupon-input.e_inpt label, .voucher_inpts_wrapper label { font-family: "Anek Devanagari", sans-serif; font-weight: 600; font-size: 17px; color: #124F97; display: flex; justify-content: center; } .widget-box.widget-box-sm-inpt .coupon-input { width: 80% } .widget-box.widget-box-sm-inpt .coupon-input input { border-radius: 4px 0 0 4px;} .voucher_wrapper.voucher_wrapper_success .coupon-input input { border-color: #4caf50;} .widget-wrapper img { max-width: 100px; margin-bottom: 20px; } .widget-box.widget-box-sm-inpt .coupon-btn { width: 20% } .widget-box.widget-box-sm-inpt .coupon-btn button { border-radius: 0 4px 4px 0; font-size: 15px; } .voucher_inpts_wrapper { width: 100%;} .widget-box{ width: 100%; display: unset; align-items: unset;} .total_values, .voucherMsg { width: 100%; margin: 20px 0px; } .total_values .key_val, .voucherMsg { font-family: "Anek Devanagari", sans-serif; font-size: 14px; line-height: 25px; color: #242424; font-weight: 400; } .total_values .key_val { display: flex; justify-content: space-between; } .redeem-btn { width: 100%; } .voucher_wrapper.error_inpt input { border-color: #f84f67; } .voucher_wrapper.error_inpt .widget-custom-btn { background: #f84f67; } .voucher_wrapper.voucher_wrapper_success {align-items: center; color: #fff; background: #4caf50; padding: 0 10px; justify-content: space-between; margin: 10px 0; flex-direction: column; } .voucher_wrapper.voucher_wrapper_success .coupon-btn { width: 30%; display: flex; } .voucher_wrapper.voucher_wrapper_success .coupon-btn button { background: #007ec1; font-size: 14px; width: 100%; padding: 6px; margin-bottom: 3px; } .voucher_rem { position: absolute; top: -10px; right: -10px; background: #F84F67; height: 25px; width: 25px; border-radius: 50%; text-align: center; color: #fff; font-weight: bold; line-height: 22px; border: 1px solid #fff; } .voucherMsg { margin: 0; } .widget-box .coupon-input input:focus { outline: none; } .widget-box.widget-box-sm-inpt .coupon-input, .widget-box.widget-box-sm-inpt .coupon-btn { margin-bottom: 10px; } .voucher_wrapper.voucher_wrapper_success .coupon-btn, .voucher_wrapper.voucher_wrapper_success .coupon-input { margin-bottom: 0; } .v_coupon_wrap { display: flex; align-items: center; } .voucherMsg { color: #007ec1; font-size: 11px; line-height: 15px; text-align: center; margin: 15px auto 5px; background: rgb(0 126 193 / 18%); border: 2px solid #007ec1; padding: 5px 10px; } #widget-success-div{display:none;}#loading {margin-top: 8px;display: inline-block; width: 20px; height: 20px; border: 3px solid rgba(255,255,255,.3); border-radius: 50%; border-top-color: #fff; animation: spin 1s ease-in-out infinite; -webkit-animation: spin 1s ease-in-out infinite; } @keyframes spin { to { -webkit-transform: rotate(360deg); } } @-webkit-keyframes spin { to { -webkit-transform: rotate(360deg); }} @media screen and (max-width: 767px) { .widget-wrapper img { max-width: 80px; margin-bottom: 15px; } .redeem-btn button, .redeem-btn button:hover { height: 38px; font-size: 14px; } .voucherErr { font-size: 14px; padding: 2px; } .widget-vouchers .coupon-input.e_inpt label, .voucher_inpts_wrapper label { font-size: 14px; } .widget-box .coupon-input input, .widget-box .coupon-btn { height: 38px;} .widget-box .coupon-btn { height: 36px; } .widget-box.widget-box-sm-inpt .coupon-btn button { font-size: 12px; }.widget-box .coupon-input input { padding: 6px 12px; } .close {right: 10px; top: 10px; height: 26px; width: 26px; line-height: 26px;} .coupnModalHeader h2{ max-width: 350px; text-align: center;} .widget-wrapper { width: 90%; }} @media screen and (max-width: 480px) {.coupnModalHeader h2{ font-size: 20px; }} @media screen and (max-width: 400px) { .close { height: 22px; width: 22px; line-height: 22px; font-size: 20px; } .coupnModalHeader h2 { line-height: unset; font-size: 15px; } .widget-vouchers .coupon-input.e_inpt label, .voucher_inpts_wrapper label{ font-size: 14px; line-height: 18px; } .widget-custom-btn { padding: 5px; font-size: 10px !important; } .voucherErr { font-size: 15px; line-height: 15px; }} #voucher_rem-1, #voucher_rem-2, #voucher_rem-3, #voucher_rem-4, #voucher_rem-5, #voucher_rem-6, #voucher_rem-7, #voucher_rem-8, #voucher_rem-9 {cursor:pointer}; button#widget-custom-btn-id-new {box-shadow: unset !important;} .large-row.cart-finish .small-row {display: flex;flex-direction: column;align-items: end;} .widget-vouchers .coupon-input.e_inpt label {text-align: left;}';
        
        let html = '<button type="button" class="btn btn-primary redeem_btn" id="widget-custom-btn-id-new" fdprocessedid="ljbsn6v"> <img src="https://cdn.shopify.com/s/files/1/0711/0187/4483/files/APPLYVOUCHER.png?v=1674538254" alt="discount_coupon"> </button> <div id="widget-custom-modal-id-new" class="modal"> <div class="modal-content"> <div class="coupnModalHeader"> <h2>Back to School NSW Vouchers</h2> <span class="close">&times;</span> </div> <div class="widget-wrapper"> <img src="https://cdn.shopify.com/s/files/1/0711/0187/4483/files/13_2.png?v=1674822934" alt="btc"> <div class="widget-box widget-email-box">'; 

        if(!cust_id) {
            html += '<div class="coupon-input e_inpt"> <input type="email" maxlength="50" id="widget-custom-code-email-id" fdprocessedid="gf1r2i" placeholder="Enter your Email"> </div> </div>';
        } 

        html += '<div class="widget-box widget-vouchers"> <div class="coupon-input e_inpt"> <label>How many vouchers are you looking to use? </label> <input type="text" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" id="widget-custom-number-voucher" maxlength="1" fdprocessedid="gf1r2i" value="1"> </div> </div> <div class="voucher_inpts_wrapper"> <label>NSW Back To School Vouchers code:</label> <div id="add-new-input-custom-popup"> <div class="widget-box widget-box-sm-inpt"> <div class="voucher_wrapper"> <div class="coupon-input"> <input type="text" maxlength="20" id="widget-custom-code-id-1" validVal="0" class="code-redeem-input-new" fdprocessedid="gf1r2i"> </div> <div class="coupon-btn"> <button type="button" class="btn btn-primary widget-custom-btn" id="widget-custom-btn-add-id-1" rel="1" fdprocessedid="is6dhe">Submit</button> </div> <div class="voucher_rem" id="voucher_rem-1" rel="1">x</div> </div> <div class="voucherErr" id="voucherErr-1">Error: The voucher specified could not be found</div> <div class="voucherSucc" id="voucherSucc-1">Voucher added successfully</div> </div> </div> </div> <div class="redeem-btn"><div class="voucherErr" id="voucherErr-redeem">Error: The voucher specified could not be found</div><div class="voucherSucc" id="voucherSucc-redeem">Voucher added successfully</div> <button type="button" class="btn btn-primary widget-custom-btn" id="widget-custom-btn-redeem-id-new" fdprocessedid="d2dlcr" redeemed="0">Redeem Voucher</button> </div> <div class="total_values"> <div class="key_val disPrice"> <span>Cart Total: </span> <span id="discount-custom1"> $ <span id="discount-custom-cart-total">0.00</span> </span> </div> <div class="key_val disPrice"> <span>Voucher\'s Value: </span> <span id="discount-custom"> $ <span id="discount-custom-eligible-total">0</span> </span> </div> <div class="key_val disPrice"> <span>Balance Forfeited: </span> <span id="discount-custom"> $ <span id="discount-custom-remaining-total">0</span> </span> </div> <div class="key_val disPrice"> <span>Balance Remaining: </span> <span id="discount-custom"> $ <span id="discount-custom-balance-total">0.00</span> </span> </div><div class="widget-box widget-box-sm-inpt" id="widget-success-div"> <div class="voucher_wrapper voucher_wrapper_success"><div class="v_coupon_wrap"><div class="coupon-input">The voucher - <span id="widget-shopify-coupon-show">7xB9YvxrJJ</span> has been successfully added</div> <div class="coupon-btn"><button type="button" class="btn btn-primary widget-custom-btn" id="widget-custom-btn-checkout" fdprocessedid="is6dhe">Checkout</button></div></div></div></div><div class="voucherMsg">* After redeeming the voucher, if you don\'t use coupon in 105 minutes, all vouchers will be voided.</div> </div> </div> </div> </div>';

        initialCss(css);

        voucher_widget.insertAdjacentHTML('beforeend', html);

        // document.getElementsByTagName('body')[0].addEventListener('change', function(e) {
        //     // initialCartFunc();
        //     setTimeout(function(){
        //         initialCartFunc();
        //     }, 2000)  
        // });

        let cust_btn_id_new = document.getElementById('widget-custom-btn-id-new');
        let create_new_disc_coupon_btn = document.getElementById('widget-create-new-disc-coupon');
        let cust_modal_id_new = document.getElementById('widget-custom-modal-id-new');
        let cust_btn_redeem_id_new = document.getElementById('widget-custom-btn-redeem-id-new');
        let span = document.getElementsByClassName("close")[0];
        let close_success = document.getElementsByClassName("close")[1];

        cust_btn_id_new.onclick = function() {
            initialCartFunc();

            let my_main_id = document.getElementById('MainContent');
            let my_main_body_id = document.getElementById('your-shopping-cart');
            let my_z_ind_class = document.getElementsByClassName('docked-navigation-container__inner')[0];
            let my_z_ind_header_class = document.getElementsByClassName('header-content')[0];
            my_main_id.style.position = 'unset';
            my_main_body_id.style.overflowY = 'hidden';
            my_z_ind_class.style.zIndex = '99';
            my_z_ind_header_class.style.zIndex = '99';
            let my_footer_class = document.getElementsByClassName('sticky-footer')[0];
            my_footer_class.style.position = 'unset';
            // cust_modal_id_new.style.display = "block";
        }

        let dis_data = JSON.parse(localStorage.getItem("ShopifyDiscountVoucherDetailsCo"));
        if(dis_data) {
            let discount_data = JSON.parse(localStorage.getItem("ShopifyDiscountVoucherDetails"));
            if(discount_data) {
                cust_btn_redeem_id_new.setAttribute("redeemed",1);
                document.getElementById('widget-shopify-coupon-show').innerHTML = discount_data.coupon_code;
                cust_btn_redeem_id_new.innerHTML = 'Void Coupon and Redeem Again';
                document.getElementById('widget-success-div').style.display = 'block';
                let cust_btn_checkout_id = document.getElementById('widget-custom-btn-checkout');
                cust_btn_checkout_id.onclick = function() {
                    document.location.href = '/cart/checkout?discount='+discount_data.coupon_code;
                }
            }
        }


        cust_btn_redeem_id_new.onclick = function() {
            cust_btn_redeem_id_new.innerHTML = '<span id="loading"></span>';
            var already_redeemed = cust_btn_redeem_id_new.getAttribute('redeemed');
            if(already_redeemed == 1) {
                let discount_data = JSON.parse(localStorage.getItem("ShopifyDiscountVoucherDetails"));
                if(discount_data) {
                    if(discount_data.price_rule_id && discount_data.discount_coupon_id && discount_data.coupon_code) {
                        fetch(api_url+"/delete-shopify-coupon/"+shop+"/"+discount_data.price_rule_id+"/"+discount_data.discount_coupon_id+"/"+discount_data.coupon_code)
                        .then(response => response.json())
                        .then(async (data) => {
                            if(data.success == "success") {
                                localStorage.removeItem('ShopifyDiscountVoucherDetails');
                                cust_btn_redeem_id_new.setAttribute("redeemed",0);
                                cust_btn_redeem_id_new.innerHTML = 'Redeem Voucher';
                                document.getElementById('widget-success-div').style.display = 'none';
                                localStorage.removeItem("ShopifyDiscountVoucherDetailsCo");
                                // cust_btn_redeem_id_new.dispatchEvent(new Event('click'));
                            } else {
                                cust_btn_redeem_id_new.innerHTML = 'Void Coupon and Redeem Again';
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                            cust_btn_redeem_id_new.innerHTML = 'Void Coupon and Redeem Again';
                        });
                    } else {
                        cust_btn_redeem_id_new.setAttribute("redeemed",0);
                        document.getElementById('widget-success-div').style.display = 'none';
                        cust_btn_redeem_id_new.innerHTML = 'Redeem Voucher';
                        document.getElementById('voucherErr-redeem').innerHTML = 'Error: Shopify Coupon not available now';
                        document.getElementById('voucherErr-redeem').style.display = 'block';
                    }
                } else {
                    cust_btn_redeem_id_new.setAttribute("redeemed",0);
                    document.getElementById('widget-success-div').style.display = 'none';
                    cust_btn_redeem_id_new.innerHTML = 'Redeem Voucher';
                    document.getElementById('voucherErr-redeem').innerHTML = 'Error: Shopify cooupon not available now';
                    document.getElementById('voucherErr-redeem').style.display = 'block';
                }
            } else {
                document.getElementById('voucherErr-redeem').style.display = 'none';
                // check if all vouchers are redeemed correctly
                let all_vouchers_inputs = document.querySelectorAll(".code-redeem-input-new");
                let all_valid = true;
                all_vouchers_inputs.forEach(function(item, index) {
                    if(item.getAttribute('validVal') == 0){
                        all_valid = false;
                    }
                });

                if(!all_valid) {
                    document.getElementById('voucherErr-redeem').innerHTML = 'Error: Please redeem all the vouchers first';
                    document.getElementById('voucherErr-redeem').style.display = 'block';
                    document.getElementById('widget-success-div').style.display = 'none';
                    cust_btn_redeem_id_new.innerHTML = 'Redeem Voucher';
                    return false;
                } 

                let coupon_code = document.getElementById('widget-custom-code-id-1').value;

                // get all coupons entered here
                let all_coupon_code = '';
                let all_vouchers = document.querySelectorAll(".code-redeem-input-new");
                all_vouchers.forEach(function(item, index) {
                    if(item.value) {
                        if(index == 0) {
                            all_coupon_code += item.value;
                        } else {
                            all_coupon_code += ","+item.value;
                        }
                    }
                });
                // send ajax call to API here
                let code_redeem_url = '';
                if(all_coupon_code) {
                    let total_cart_amount_val = document.getElementById('discount-custom-cart-total').innerHTML;
                    if(pro_types == '') {
                        pro_types = 'no_product_type';
                    }
                    if(cust_id) {
                        code_redeem_url = api_url+"/check-coupon-validity/"+shop+"/"+all_coupon_code+"/"+cust_id+"/customer/"+total_cart_amount_val+'/'+pro_types;
                    } else {
                        let user_email = document.getElementById('widget-custom-code-email-id').value;
                        if(user_email){
                            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user_email)){
                                code_redeem_url = api_url+"/check-coupon-validity/"+shop+"/"+all_coupon_code+"/"+user_email+"/email/"+total_cart_amount_val+'/'+pro_types;
                            } else {
                                document.getElementById('voucherErr-redeem').innerHTML = 'Error: Please enter valid email';
                                document.getElementById('voucherErr-redeem').style.display = 'block';
                                cust_btn_redeem_id_new.innerHTML = 'Redeem Voucher';
                                return false;    
                            }
                        } else {
                            document.getElementById('voucherErr-redeem').innerHTML = 'Error: Please enter your email';
                            document.getElementById('voucherErr-redeem').style.display = 'block';
                            cust_btn_redeem_id_new.innerHTML = 'Redeem Voucher';
                            return false;
                        }
                    }
                } else {
                    document.getElementById('voucherErr-redeem').innerHTML = 'Error: Please redeem all the vouchers first';
                    document.getElementById('voucherErr-redeem').style.display = 'block';
                    cust_btn_redeem_id_new.innerHTML = 'Redeem Voucher';
                    return false;
                }

                fetch(code_redeem_url)
                .then(response => response.json())
                .then(async (data) => {
                    if(data.success == "success") {
                        localStorage.setItem("ShopifyDiscountVoucherDetails",JSON.stringify(data));
                        cust_btn_redeem_id_new.setAttribute("redeemed",1);
                        document.getElementById('widget-shopify-coupon-show').innerHTML = data.coupon_code;
                        cust_btn_redeem_id_new.innerHTML = 'Void Coupon and Redeem Again';
                        document.getElementById('widget-success-div').style.display = 'block';
                        let cust_btn_checkout_id = document.getElementById('widget-custom-btn-checkout');
                        cust_btn_checkout_id.onclick = function() {
                            document.location.href = '/cart/checkout?discount='+data.coupon_code;
                        }

                        // do calculations here
                        document.getElementById('discount-custom-eligible-total').innerHTML = parseFloat(data.amount).toFixed(2);
                        checkDifference(data.amount);
                    } else {
                        document.getElementById('voucherErr-redeem').innerHTML = '';
                        document.getElementById('voucherErr-redeem').innerHTML = data.message;
                        document.getElementById('voucherErr-redeem').style.display = 'block';
                        cust_btn_redeem_id_new.innerHTML = 'Redeem Voucher';
                    }
                })
                .catch((error) => {
                    console.log(error);
                    document.getElementById('voucherErr-redeem').innerHTML = '';
                    document.getElementById('voucherErr-redeem').innerHTML = "Something went wrong";
                    document.getElementById('voucherErr-redeem').style.display = 'block';
                    cust_btn_redeem_id_new.innerHTML = 'Redeem Voucher';
                });
            }
        }

        // code to remove input val on submit btn click
        let btn_remove_id = document.getElementById('voucher_rem-1');
        btn_remove_id.onclick = function() {
            // get input val
            let rel = btn_remove_id.getAttribute("rel");
            let input_val = document.getElementById('widget-custom-code-id-'+rel);
            let input_value = input_val.value;
            let valid_val = input_val.getAttribute("validVal");
            if(valid_val) {
                fetch(api_url+"/remove-existing-coupon/"+input_value)
                .then(response => response.json())
                .then(async (data) => {
                    if(data.success == "success") {
                        input_val.setAttribute("validVal",0);
                        input_val.value = '';
                        input_val.readOnly = false; 
                        // check if redeem button was clicked
                        var already_redeemed = cust_btn_redeem_id_new.getAttribute('redeemed');
                        if(already_redeemed == 1) {
                            cust_btn_redeem_id_new.dispatchEvent(new Event('click'));
                        }
                        checkDifference();
                    } else {
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

            }
        }    
        // code to remove input val on submit btn click

        let btn_id = document.getElementById('widget-custom-btn-add-id-1');
        btn_id.onclick = function() {
            btn_id.innerHTML = '<span id="loading"></span>';
            let rel = btn_id.getAttribute("rel");
            let input_val = document.getElementById('widget-custom-code-id-'+rel);
            let input_value = input_val.value;
            let is_al_valid = input_val.getAttribute("validVal");

            if(is_al_valid == 1) {
                // document.getElementById('voucherErr-'+rel).innerHTML = 'Error: Voucher is submitted already';
                // document.getElementById('voucherErr-'+rel).style.display = 'display';
                // setTimeout(function(){
                //     document.getElementById('voucherErr-'+rel).style.display = 'none'; 
                // }, 3000)
                btn_id.innerHTML = 'Submit';
                return false;
            }

            if(input_value) {
                fetch(api_url+"/check-single-coupon-validity/"+input_value)
                .then(response => response.json())
                .then(async (data) => {
                    if(data.success == "success") {
                        document.getElementById('discount-custom-eligible-total').innerHTML = parseFloat(data.amount).toFixed(2); 
                        input_val.readOnly  = true; 
                        document.getElementById('voucherSucc-'+rel).style.display = 'block'; 
                        document.getElementById('voucherErr-'+rel).style.display = 'none';

                        // set value to 1 whihc will indicate that this has been submitted
                        input_val.setAttribute("validVal",1);
                        checkDifference();
                        let all_vouchers = document.querySelectorAll(".code-redeem-input-new");
                        let all_coupon_code = '';
                        all_vouchers.forEach(function(item, index) {
                            if(item.value) {
                                if(item.getAttribute("validVal") == 1) {
                                    if(index == 0) {
                                        all_coupon_code += item.value;
                                    } else {
                                        all_coupon_code += ","+item.value;
                                    }
                                }
                            }
                        });
                        // console.log("all_coupon_code",all_coupon_code);
                        let store_data = {'email':'','discount':false,'coupons':all_coupon_code};
                        btn_id.innerHTML = 'Submit';
                        localStorage.setItem("ShopifyDiscountVoucherDetailsCo",JSON.stringify(store_data));
                        setTimeout(function(){
                            document.getElementById('voucherSucc-'+rel).style.display = 'none'; 
                        }, 3000)      
                    } else {
                        btn_id.innerHTML = 'Submit';
                        document.getElementById('voucherErr-'+rel).innerHTML = data.message;
                        document.getElementById('voucherErr-'+rel).style.display = 'block';
                    }
                })
                .catch((error) => {
                    console.log(error);
                    btn_id.innerHTML = 'Submit';
                    document.getElementById('voucherErr-'+rel).innerHTML = "Something went wrong";
                    document.getElementById('voucherErr-'+rel).style.display = 'block';
                });
            }  else {
                btn_id.innerHTML = 'Submit';
                document.getElementById('voucherErr-'+rel).innerHTML = 'Error: Please enter a voucher code to redeem';
                document.getElementById('voucherErr-'+rel).style.display = 'block';
            }
        }

        let voucher_numbers = document.getElementById("widget-custom-number-voucher");
        voucher_numbers.addEventListener('focusout', function(e) {
            let tot_number = voucher_numbers.value;
            if(tot_number > 0) {
                pre_voucher_val = tot_number;
                let tot_inputs_added = document.querySelectorAll('.code-redeem-input-new').length;

                if(tot_number > tot_inputs_added) {
                    let add_voucher_div_id = document.getElementById('add-new-input-custom-popup');
                    // add_voucher_div_id.innerHTML = "";
                    let new_html = '';
                    for(var i = (tot_inputs_added+1); i<= tot_number; i++){
                        new_html += '<div class="widget-box widget-box-sm-inpt"> <div class="voucher_wrapper"> <div class="coupon-input"> <input type="text" maxlength="20" id="widget-custom-code-id-'+i+'" validVal="0" class="code-redeem-input-new" fdprocessedid="gf1r2i" rel="'+i+'"> </div> <div class="coupon-btn"> <button type="button" class="btn btn-primary widget-custom-btn" id="widget-custom-btn-add-id-'+i+'" fdprocessedid="is6dhe" rel="'+i+'">Submit</button> </div> <div class="voucher_rem" id="voucher_rem-'+i+'" rel="'+i+'">x</div> </div> <div class="voucherErr" id="voucherErr-'+i+'">Error: The voucher specified could not be found</div> <div class="voucherSucc" id="voucherSucc-'+i+'">Voucher added successfully</div></div>';
                    }
                    add_voucher_div_id.insertAdjacentHTML('beforeend', new_html);

                    // set click function with each button;
                    for(var j = (tot_inputs_added+1); j<= tot_number; j++){
                        
                        // code to remove input val on submit btn click
                        let btn_remove_id = document.getElementById('voucher_rem-'+j);
                        btn_remove_id.onclick = function() {
                            // get input val
                            let rel = btn_remove_id.getAttribute("rel");
                            let input_val = document.getElementById('widget-custom-code-id-'+rel);
                            let input_value = input_val.value;
                            let valid_val = input_val.getAttribute("validVal");
                            if(valid_val) {
                                fetch(api_url+"/remove-existing-coupon/"+input_value)
                                .then(response => response.json())
                                .then(async (data) => {
                                    if(data.success == "success") {
                                        input_val.setAttribute("validVal",0);
                                        input_val.value = '';
                                        input_val.readOnly = false; 
                                        // check if redeem button was clicked
                                        var already_redeemed = cust_btn_redeem_id_new.getAttribute('redeemed');
                                        if(already_redeemed == 1) {
                                            cust_btn_redeem_id_new.dispatchEvent(new Event('click'));
                                        }
                                        checkDifference();
                                    } else {
                                    }
                                })
                                .catch((error) => {
                                    console.log(error);
                                    document.getElementById('voucherErr-'+rel).innerHTML = "Something went wrong";
                                    document.getElementById('voucherErr-'+rel).style.display = 'block';
                                });
                            }
                        }    
                        // code to remove input val on submit btn click
                        
                        let btn_id = document.getElementById('widget-custom-btn-add-id-'+j);
                        btn_id.onclick = function() {
                            // get input val
                            btn_id.innerHTML = '<span id="loading"></span>';
                            let rel = btn_id.getAttribute("rel");
                            let input_val = document.getElementById('widget-custom-code-id-'+rel);

                            let input_value = input_val.value;
                            if(input_value) {
                                fetch(api_url+"/check-single-coupon-validity/"+input_value)
                                .then(response => response.json())
                                .then(async (data) => {
                                    if(data.success == "success") {

                                        document.getElementById('discount-custom-eligible-total').innerHTML = parseFloat(data.amount).toFixed(2);
                                        input_val.readOnly = true; 
                                        document.getElementById('voucherSucc-'+rel).style.display = 'block'; 
                                        document.getElementById('voucherErr-'+rel).style.display = 'none';
                                        // set value to 1 whihc will indicate that this has been submitted
                                        input_val.setAttribute("validVal",1);
                                        checkDifference(); 
                                        let all_vouchers = document.querySelectorAll(".code-redeem-input-new");
                                        let all_coupon_code = '';
                                        all_vouchers.forEach(function(item, index) {
                                            if(item.value) {
                                                if(item.getAttribute("validVal") == 1) {
                                                    if(index == 0) {
                                                        all_coupon_code += item.value;
                                                    } else {
                                                        all_coupon_code += ","+item.value;
                                                    }
                                                }
                                            }
                                        });
                                        // console.log("all_coupon_code",all_coupon_code);
                                        let store_data = {'email':'','discount':false,'coupons':all_coupon_code};
                                        localStorage.setItem("ShopifyDiscountVoucherDetailsCo",JSON.stringify(store_data));
                                        btn_id.innerHTML = 'Submit';
                                        setTimeout(function(){
                                            document.getElementById('voucherSucc-'+rel).style.display = 'none'; 
                                        }, 3000)      
                                    } else {
                                        btn_id.innerHTML = 'Submit';
                                        document.getElementById('voucherErr-'+rel).innerHTML = data.message;
                                        document.getElementById('voucherErr-'+rel).style.display = 'block';
                                    }
                                })
                                .catch((error) => {
                                    console.log(error);
                                    btn_id.innerHTML = 'Submit';
                                    document.getElementById('voucherErr-'+rel).innerHTML = "Something went wrong";
                                    document.getElementById('voucherErr-'+rel).style.display = 'block';
                                });
                            }  else {
                                btn_id.innerHTML = 'Submit';
                                document.getElementById('voucherErr-'+rel).innerHTML = 'Error: Please enter a voucher code to redeem';
                                document.getElementById('voucherErr-'+rel).style.display = 'block';
                            }
                        }
                    }
                } else if(tot_number < tot_inputs_added) {
                    let remove_divs = tot_inputs_added-tot_number;
                    for(var i = 1; i<= remove_divs; i++){
                        var select = document.getElementById('add-new-input-custom-popup');
                        select.removeChild(select.lastChild);
                    }
                }
            } else {
                voucher_numbers.value = pre_voucher_val;
            }
        }); 

        span.onclick = function() {
            // cust_modal_id_new.style.display = "none";
            let my_main_id = document.getElementById('MainContent');
            let my_main_body_id = document.getElementById('your-shopping-cart');
            let my_z_ind_class = document.getElementsByClassName('docked-navigation-container__inner')[0];
            let my_z_ind_header_class = document.getElementsByClassName('header-content')[0];
            my_main_id.style.position = 'relative';
            my_main_body_id.style.overflowY = 'unset';
            my_z_ind_class.style.zIndex = '101';
            my_z_ind_header_class.style.zIndex = '102';
            cust_modal_id_new.style.display = "none";
            let my_footer_class = document.getElementsByClassName('sticky-footer')[0];
            my_footer_class.style.position = 'unset';
        }
    }

    async function sendData(url, requestoption) {
        const response = await fetch(url, requestoption);
        return response.json();
    }

    function initialCartFunc() {
        var is_coupon = localStorage.getItem("ShopifyDiscountVoucherDetailsCo");
        is_coupon = JSON.parse(is_coupon);
        if(is_coupon) {
            let coupon_code = is_coupon.coupons;
            if(coupon_code) {
                fetch(api_url+"/check-existing-coupon/"+coupon_code)
                .then(response => response.json())
                .then(async (data) => {
                    // console.log("data",data);
                    if(data.success == "success") {
                        // console.log("data",data);
                        let voucher_numbers = document.getElementById("widget-custom-number-voucher");
                        // voucher_numbers.value = data.all_code.length;
                        let add_voucher_div_id = document.getElementById('add-new-input-custom-popup');
                        let all_coupon_code = '';
                        for(var j = 0; j < data.all_code.length; j++){
                            // console.log("data.arr_val[j]",data.all_code[j]);
                            if(j == 0) {
                                // let input_val = document.getElementById('widget-custom-code-id-1');
                                // input_val.value = data.all_code[j];
                                // input_val.setAttribute("validVal",1);
                                // input_val.readOnly  = true;
                                all_coupon_code += data.all_code[j];
                            } else {
                                // var i=j+1;
                                // let new_html = '';
                                // new_html += '<div class="widget-box widget-box-sm-inpt"> <div class="voucher_wrapper"> <div class="coupon-input"> <input type="text" maxlength="20" id="widget-custom-code-id-'+i+'" validVal="1" readonly="true" value="'+data.all_code[j]+'" class="code-redeem-input-new" fdprocessedid="gf1r2i" rel="'+i+'"> </div> <div class="coupon-btn"> <button type="button" class="btn btn-primary widget-custom-btn" id="widget-custom-btn-add-id-'+i+'" fdprocessedid="is6dhe" rel="'+i+'">Submit</button> </div> <div class="voucher_rem" id="voucher_rem-'+i+'" rel="'+i+'">x</div> </div> <div class="voucherErr" id="voucherErr-'+i+'">Error: The voucher specified could not be found</div> <div class="voucherSucc" id="voucherSucc-'+i+'">Voucher added successfully</div></div>';

                                // add_voucher_div_id.insertAdjacentHTML('beforeend', new_html);
                                all_coupon_code += ","+data.all_code[j];
                            }
                        }
                        let store_data = {'email':'','discount':false,'coupons':all_coupon_code};
                        localStorage.setItem("ShopifyDiscountVoucherDetailsCo",JSON.stringify(store_data)); 

                        // let tot_number = data.all_code.length;
                        // for(var ja = 1; ja <= tot_number; ja++){
                    
                        //     // code to remove input val on submit btn click
                        //     let btn_remove_id = document.getElementById('voucher_rem-'+ja);
                        //     btn_remove_id.onclick = function() {
                        //         // get input val
                        //         let rel = btn_remove_id.getAttribute("rel");
                        //         let input_val = document.getElementById('widget-custom-code-id-'+rel);
                        //         let input_value = input_val.value;
                        //         let valid_val = input_val.getAttribute("validVal");
                        //         if(valid_val) {
                        //             fetch(api_url+"/remove-existing-coupon/"+input_value)
                        //             .then(response => response.json())
                        //             .then(async (data) => {
                        //                 if(data.success == "success") {
                        //                     input_val.setAttribute("validVal",0);
                        //                     input_val.value = '';
                        //                     input_val.readOnly = false; 
                        //                     // check if redeem button was clicked
                        //                     var already_redeemed = cust_btn_redeem_id_new.getAttribute('redeemed');
                        //                     if(already_redeemed == 1) {
                        //                         cust_btn_redeem_id_new.dispatchEvent(new Event('click'));
                        //                     }
                        //                 } else {
                        //                 }
                        //             });
                        //         }
                        //     }    
                        //     // code to remove input val on submit btn click
                            
                        //     let btn_id = document.getElementById('widget-custom-btn-add-id-'+ja);
                        //     btn_id.onclick = function() {
                        //         // get input val
                        //         let rel = btn_id.getAttribute("rel");
                        //         let input_val = document.getElementById('widget-custom-code-id-'+rel);

                        //         let input_value = input_val.value;
                        //         if(input_value) {
                        //             fetch(api_url+"/check-single-coupon-validity/"+input_value)
                        //             .then(response => response.json())
                        //             .then(async (data) => {
                        //                 if(data.success == "success") {

                        //                     document.getElementById('discount-custom-eligible-total').innerHTML = parseFloat(data.amount).toFixed(2);
                        //                     input_val.readOnly = true; 
                        //                     document.getElementById('voucherSucc-'+rel).style.display = 'block'; 
                        //                     document.getElementById('voucherErr-'+rel).style.display = 'none';
                        //                     // set value to 1 whihc will indicate that this has been submitted
                        //                     input_val.setAttribute("validVal",1);
                        //                     checkDifference(); 
                        //                     let all_vouchers = document.querySelectorAll(".code-redeem-input-new");
                        //                     let all_coupon_code = '';
                        //                     all_vouchers.forEach(function(item, index) {
                        //                         if(item.value) {
                        //                             if(item.getAttribute("validVal") == 1) {
                        //                                 if(index == 0) {
                        //                                     all_coupon_code += item.value;
                        //                                 } else {
                        //                                     all_coupon_code += ","+item.value;
                        //                                 }
                        //                             }
                        //                         }
                        //                     });
                        //                     console.log("all_coupon_code",all_coupon_code);
                        //                     let store_data = {'email':'','discount':false,'coupons':all_coupon_code};
                        //                     localStorage.setItem("ShopifyDiscountVoucherDetailsCo",JSON.stringify(store_data));
                        //                     setTimeout(function(){
                        //                         document.getElementById('voucherSucc-'+rel).style.display = 'none'; 
                        //                     }, 3000)      
                        //                 } else {
                        //                     document.getElementById('voucherErr-'+rel).innerHTML = data.message;
                        //                     document.getElementById('voucherErr-'+rel).style.display = 'block';
                        //                 }
                        //             });
                        //         }  else {
                        //             document.getElementById('voucherErr-'+rel).innerHTML = 'Error: Please enter a voucher code to redeem';
                        //             document.getElementById('voucherErr-'+rel).style.display = 'block';
                                // }
                            // }
                        // }
                    } else {
                        // let store_data = {'email':'','discount':false,'coupons':''};
                        localStorage.removeItem("ShopifyDiscountVoucherDetailsCo");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    localStorage.removeItem("ShopifyDiscountVoucherDetailsCo");
                });
            }
        }

        fetch("/cart.js")
        .then(response => response.json())
        .then(async (data) => {
            let cart_items = data.items;
            // console.log("cart_items",cart_items);
            let total_cart_amount = 0;
            for(var i = 0; i < cart_items.length; i++) {
                let prod_vals = cart_items[i].original_line_price;
                var quantity = cart_items[i].quantity;
                // console.log(cart_items[i].quantity);
                // console.log(quantity);
                fetch("/products/"+cart_items[i].handle+".js")
                .then(response1 => response1.json())
                .then(async (data1) => {
                    // console.log("data1",data1);
                    // console.log("quantity2",quantity);
                    for(var j = 0; j < data1.tags.length; j++) {
                        if(data1.tags[j] == "BTS"){
                            // check product type here
                            if(pro_types !== '') {
                                // pro_types += ','+data1.type;
                            } else {
                                pro_types = data1.type;
                            }
                            // if(data1.type == "") {
                            // console.log("pro_types",pro_types);
                            // total_cart_amount += parseInt(prod_vals /100);
                            // console.log("quantity",quantity);
                            // console.log("prod_vals /100",prod_vals /100);
                            total_cart_amount += parseFloat(prod_vals /100);
                            // console.log("total_cart_amount",total_cart_amount);
                            // }
                        }
                    }
                    // console.log("pro_types",pro_types);
                    // console.log("total_cart_amount",total_cart_amount);
                    document.getElementById('discount-custom-cart-total').innerHTML = parseFloat(total_cart_amount).toFixed(2);
                    checkDifference();
                    let cust_modal_id_new = document.getElementById('widget-custom-modal-id-new');
                    cust_modal_id_new.style.display = "block";
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        })
    }

    function checkDifference(data_amount = 0) {

        var total_vouchers = document.getElementById('widget-custom-number-voucher').value;
        let all_vouchers_inputs = document.querySelectorAll(".code-redeem-input-new");
        let all_valid = 0;
        all_vouchers_inputs.forEach(function(item, index) {
            if(item.getAttribute('validVal') == 1){
                all_valid = all_valid+1;
            }
        });
        var cust_btn_redeem_id_new_btn = document.getElementById('widget-custom-btn-redeem-id-new');
        var is_bt_redeemed = cust_btn_redeem_id_new_btn.getAttribute('redeemed');
        if(is_bt_redeemed == 1) {
            
            var disc_data = JSON.parse(localStorage.getItem("ShopifyDiscountVoucherCalculation"));
            var disc_data_el = disc_data.elg_tot_store;
            var eligible_tot = disc_data_el;
        } else {
            
            var eligible_tot = parseInt(all_valid)*50;
        }
        // document.getElementById('discount-custom-eligible-total').innerHTML = parseFloat(eligible_tot).toFixed(2);
        document.getElementById('discount-custom-eligible-total').innerHTML = parseFloat(eligible_tot).toFixed(2);
        var cart_tot = parseFloat(document.getElementById('discount-custom-cart-total').innerHTML);
        if(parseFloat(cart_tot.toFixed(2)) > parseFloat(eligible_tot)) {
            
            eligible_tot = parseInt(eligible_tot);
            let remaining_tot = parseFloat(cart_tot.toFixed(2)) - parseFloat(eligible_tot);
            document.getElementById('discount-custom-balance-total').innerHTML = parseFloat(remaining_tot.toFixed(2)); 
            // document.getElementById('discount-custom-balance-total').innerHTML = parseFloat(remaining_tot); 
            if(is_bt_redeemed == 1) {
                let remaining_tot = parseFloat(cart_tot.toFixed(2)) - parseFloat(disc_data.data_amount);
                // console.log("remaining_tot",remaining_tot);
                document.getElementById('discount-custom-balance-total').innerHTML = parseFloat(remaining_tot.toFixed(2));
                document.getElementById('discount-custom-remaining-total').innerHTML = disc_data.rem_tot_store; 
            } else {
                // console.log("here4");
                document.getElementById('discount-custom-remaining-total').innerHTML = '0.00'; 
            }
        } else {
            // console.log("here5");
            eligible_tot = parseInt(eligible_tot);
            let remaining_tot = parseFloat(eligible_tot.toFixed(2)) - parseFloat(cart_tot);
            if(is_bt_redeemed == 1) {
                // console.log("here6");
                document.getElementById('discount-custom-remaining-total').innerHTML = disc_data.rem_tot_store;; 
            } else {
                // console.log("here7");
                // console.log("parseFloat(remaining_tot.toFixed(2)",remaining_tot);
                // console.log("parseFloat(remaining_tot.toFixed(2)",parseFloat(remaining_tot.toFixed(2)));
                document.getElementById('discount-custom-remaining-total').innerHTML = parseFloat(remaining_tot.toFixed(2));
            } 
            // document.getElementById('discount-custom-remaining-total').innerHTML = parseFloat(remaining_tot); 
            document.getElementById('discount-custom-balance-total').innerHTML = '0.00'; 

        }
        // console.log("cart check1");
        var car_tot_store = document.getElementById('discount-custom-cart-total').innerHTML;
        var elg_tot_store = document.getElementById('discount-custom-eligible-total').innerHTML;
        var rem_tot_store = document.getElementById('discount-custom-remaining-total').innerHTML;
        var bal_tot_store = document.getElementById('discount-custom-balance-total').innerHTML;

        // first save the four calculation values here:-
        if(data_amount == 0) {

            var cal_data = {'car_tot_store':car_tot_store,'elg_tot_store':elg_tot_store,'rem_tot_store':rem_tot_store,'bal_tot_store':bal_tot_store,'data_amount':last_amount_check}
            localStorage.setItem("ShopifyDiscountVoucherCalculation",JSON.stringify(cal_data));
        } else {
            last_amount_check = data_amount;
            var cal_data = {'car_tot_store':car_tot_store,'elg_tot_store':elg_tot_store,'rem_tot_store':rem_tot_store,'bal_tot_store':bal_tot_store,'data_amount':data_amount}
            localStorage.setItem("ShopifyDiscountVoucherCalculation",JSON.stringify(cal_data));
        }

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