const $template=document.createElement('template')
$template.innerHTML=`
<footer style="display: flex;justify-content: center; border-top: 1px solid #ddd;margin-top: 100px;margin-bottom: 30px;box-shadow: 0px 5px 5px rgb(0 0 0 / 70%);">
        <div class="container" style="padding: 30px 0;display: flex;">
            <div style="width: 50%;">
                <div
                    style="text-transform: uppercase;font-size: 14px;line-height: 19px;margin-bottom: 15px;font-weight: 700;">
                    Liên hệ</div>
                <div style="display: flex;">
                    <div
                        style="height: 34px;width: 34px;background: #3a589d;margin: 10px;display: flex;border-radius: 50%;">
                        <a href="https://www.facebook.com/bestmartvietnam/"
                            style="width: 34px;display: flex;align-items: center;justify-content: center;color: white;"><i
                                class="fa fa-facebook" aria-hidden="true"></i></a>
                    </div>
                    <div
                        style="height: 34px;width: 34px;background: #dd4e31;margin: 10px;display: flex;border-radius: 50%;">
                        <a href="https://plus.google.com/116360082835008038710"
                            style="width: 34px;display: flex;align-items: center;justify-content: center;color: white;"><i
                                class="fa fa-google-plus" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            <div style="width: 50%;">
                <div
                    style="text-transform: uppercase;font-size: 14px;line-height: 19px;margin-bottom: 15px;font-weight: 700;">
                    Ứng dụng di động</div>
                <div style="display: flex;">
                    <a href="#" style="margin-right: 30px;"><img src="/img/qrcode.png" alt=""></a>
                    <div style="display: flex;flex-direction: column;">
                        <a href="#" style="margin-bottom: 5px;"><img src="/img/app-android.png" alt=""></a>
                        <a href="#"><img src="/img/app-ios.png" alt=""></a>
                    </div>
                </div>    
            </div>
        </div>
    </footer>
`;
export default class WebFooter extends HTMLElement{
    constructor(){
        super();
        this.appendChild($template.content.cloneNode(true))
    }

}
window.customElements.define('web-footer',WebFooter)