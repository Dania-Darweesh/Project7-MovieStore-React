import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
        
            <footer class="footer">
                <div class="container">
                    <div class="row">
                
                        <div class="col-12 col-md-3">
                            <h6 class="footer__title">Download Our App</h6>
                            <ul class="footer__app">
                                <li><a href="#"><img src="img/Download_on_the_App_Store_Badge.svg" alt=""/></a></li>
                                <li><a href="#"><img src="img/google-play-badge.png" alt=""/></a></li>
                            </ul>
                        </div>
                     
                        <div class="col-6 col-sm-4 col-md-3">
                            <h6 class="footer__title">Resources</h6>
                            <ul class="footer__list">
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="pricing.html">Pricing Plan</a></li>
                                <li><a href="faq.html">Help</a></li>
                            </ul>
                        </div>
                     
                        <div class="col-6 col-sm-4 col-md-3">
                            <h6 class="footer__title">Legal</h6>
                            <ul class="footer__list">
                                <li><a href="privacy.html">Terms of Use</a></li>
                                <li><a href="privacy.html">Privacy Policy</a></li>
                                <li><a href="privacy.html">Security</a></li>
                            </ul>
                        </div>
                     

                        <div class="col-12 col-sm-4 col-md-3">
                            <h6 class="footer__title">Contact</h6>
                            <ul class="footer__list">
                                <li><a href="tel:+18002345678">+1 800 234-5678</a></li>
                                <li><a href="mailto:support@moviego.com">support@flixgo.com</a></li>
                            </ul>
                            <ul class="footer__social">
                                <li class="facebook"><i class="icon ion-logo-facebook"></i></li>
                                <li class="instagram"><i class="icon ion-logo-instagram"></i></li>
                                <li class="twitter"><i class="icon ion-logo-twitter"></i></li>
                                <li class="vk"><i class="icon ion-logo-vk"></i></li>
                            </ul>
                        </div>
                 
                        <div class="col-12">
                            <div class="footer__copyright">
                                <small>© 2020 FlixGo. Create by <a href="https://themeforest.net/user/dmitryvolkov/portfolio" target="_blank">Dmitry Volkov</a></small>
        
                                <ul>
                                    <li><a href="privacy.html">Terms of Use</a></li>
                                    <li><a href="privacy.html">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                     
                    </div>
                </div>
                <script src="js/jquery-3.5.1.min.js"></script>
            <script src="js/bootstrap.bundle.min.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/jquery.mousewheel.min.js"></script>
            <script src="js/jquery.mCustomScrollbar.min.js"></script>
            <script src="js/wNumb.js"></script>
            <script src="js/nouislider.min.js"></script>
            <script src="js/plyr.min.js"></script>
            <script src="js/jquery.morelines.min.js"></script>
            <script src="js/photoswipe.min.js"></script>
            <script src="js/photoswipe-ui-default.min.js"></script>
            <script src="js/main.js"></script>
            </footer>
         
        
        
   
        
        
      
        );
    }
}
 
export default Footer;