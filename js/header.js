const $template=document.createElement('template')
$template.innerHTML=`
<header id="header">
        <div class="wrapper">
            <div class="header-top ">
                <div class="flex-row container">
                    <div class="flex-col flex-left">
                        <p>BestMart nơi mua sắm tốt nhất cho mọi nhà</p>
                    </div>
                    <div class="flex-col flex-right">
                        <ul class="nav top-bar-nav nav-right nav-small  nav-divided">
                            <li class="menu-item"style="padding-right: 10px;"><a href="index.html">Tin tức</a></li>
                            <li class="menu-item"style="padding-right: 10px;"><a href="index.html">Điều khoản</a></li>
                            <li class="menu-item"style="padding-right: 10px;"><a href="index.html">Bảo hành</a></li>
                            <li class="menu-item"style="padding-right: 10px;"><a href="index.html">Trang chủ</a></li>
                            <li class="header-social-icons">
                                <div class="social-icons">
                                    <a href="https://www.facebook.com/bestmartvietnam/" target="_blank"
                                        data-label="Facebook" rel="nofollow"
                                        class="icon plain facebook tooltip tooltipstered"><i class="fa fa-facebook"
                                            aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCjEcOPWxBHjHRg552S_JAlA" target="_blank"
                                        data-label="E-mail" rel="nofollow"
                                        class="icon plain  email tooltip tooltipstered"><i class="fa fa-envelope"
                                            aria-hidden="true"></i>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="header-main">
                <div class="flex-row container">
                    <div id="logo" class="flex-col logo">
                        <a href="index.html" title="">
                            <img width="245" height="70"
                                src="https://bestmart.vn/admin/uploads/2017/04/10/picture/484a7eca4b69e435b9ffa103e3cbcffb_1.png"
                                alt="BestMart"></a>
                    </div>
                    <div class="search-container">
                        <form action="/index.html">
                            <input type="text" placeholder="Search.." name="search" style="width: 500px;height: 40px;margin: 0;border: solid red;">
                            <button type="submit" class="sub-but"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <div class="flex-col" style="width: 300px;">
                        <ul class="nav" style="display: flex; justify-content: space-around;">
                            <li class="cart-item">
                                <div class="header-button" style="background-color: #C9141B;border: none;">
                                    <a href="index.html" title="Giỏ hàng"
                                        class="header-cart-link icon button circle is-outline is-small" style="color: white;">
                                        <span style="margin-left: 3px;"> Giỏ hàng <i class="fa fa-shopping-bag" style="margin-left: 10px;" aria-hidden="true"></i></span>
                                    </a>
                                </div>
                            </li>
                            <li class="cart-item">
                                <div class="header-button">
                                    <a href="index.html" title="Thông báo"
                                        class="icon button circle is-outline is-small notification">
                                        <span style="margin-left: 5px;"> Thông báo <i class="fa fa-globe"> </i></span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </header>
`;
export default class WebHeader extends HTMLElement{
    constructor(){
        super();
        this.appendChild($template.content.cloneNode(true))
    }

}
window.customElements.define('web-header',WebHeader)