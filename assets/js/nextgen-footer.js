function headerComponent() {
    var ngFooter = `
<div class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="f-nav-outer d-grid">
                    <div class="fnav-widget">
                        <h3>Solutions</h3>
                        <ul class="m-0 p-0">
                            <li><a href="customer-engagement-personalization.html">Customer Engagement</a></li>
                            <li><a href="cloud-infrastructure-iot-enablement.html">Cloud Infrastructure</a></li>
                            <li><a href="connected-systems.html">Connected Systems</a></li>
                            <li><a href="analytics-optimization.html">Analytics Attribution</a></li>
                        </ul>
                    </div>
                    <div class="fnav-widget">
                        <h3>Industries</h3>
                        <ul class="m-0 p-0">
                            <li><a href="retail.html">Retail</a></li>
                            <li><a href="bfsi.html">BFSI</a></li>
                            <li><a href="telecom.html">Telecom</a></li>
                            <li><a href="entertainment.html">Entertainment</a></li>
                            <li><a href="travel-and-hospitality.html">Travel & Hospitality</a></li>
                            <li><a href="b2b.html">B2B</a></li>
                            <li><a href="manufacturing-and-services.html">Manufacturing</a></li>
                        </ul>
                    </div>
                    <div class="fnav-widget">
                        <h3>Connected Ecosystem</h3>
                        <ul class="m-0 p-0">
                            <li><a href="our-partner-network.html">Our Partner Network</a></li>
                            <li><a href="digital-sherpa.html">Sherpa Program</a></li>
                            <li>
                                <a href="javascript:void(0)">Featured Partners</a>
                                <ul class="childnav ps-3 pt-2 border-0">
                                    <li><a href="aunica.html">Aunica </a></li>
                                    <li><a href="the-pedowitz-group.html">Pedowitz</a></li>
                                    <li><a href="hvar.html">Hvar</a></li>
                                    <li><a href="new-couch-and-associates.html">Couch & Associates</a></li>
                                    <li><a href="pathfactory.html">PathFactory</a></li>
                                    <li><a href="resulticks">Resulticks</a></li>
                                </ul>
                            </li>
                            <!-- <li><a href="#">Partner Testimonials</a></li> -->
                            
                        </ul>
                    </div>
                    <div class="fnav-widget">
                      
                        <ul class="m-0 p-0">
                            <li><a href="https://www.nextgenholdings.net/blog">  <h3 >Resources<h3></a></li>
                        </ul>

                          <ul class="m-0 p-0">
                           <li><a href="contact-us.html"><h3 >Contact Us<h3></a></li>
                        </ul>
                        
                        <!-- <ul class="m-0 p-0">
                            <li><a href="https://www.nextgenholdings.net/blog">Resources</a></li>
                            <li><a href="#">Newsroom</a></li>  
                        </ul>
                        <ul class="m-0 p-0">
                            <li><a href="contact-us.html">Contact Us</a></li>
                        </ul> -->
                    </div>
                    <div>
                        <div class="fright-badge">
                            <figure class="mb-4"><a href="#"><img src="assets/images/nextgen-logo-white.svg"
                                        alt="nextgen-logo" width="200" height="50" loading="lazy"></a></figure>
                            <p>Shaping the next generation of customer engagement.</p>
                            <div class="f-social">
                                <a href="https://www.linkedin.com/company/nextgen-customerengagement/"
                                    target="_blank"><img src="assets/images/linkedin.svg" alt="linkedin" width="30"
                                        height="30" loading="lazy" class="me-2"></a>
                                <a href="tel:18008061458"><img src="assets/images/phone.svg" alt="Phone" width="30"
                                        height="30" loading="lazy"> <span class="ms-1">1 (800) 806-1458</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-copy py-3">
                <div class="row">
                    <div class="col-md-5 text-center text-md-start">
                        <p class="lh-base">© 2025 | All Rights Reserved - A Next-Gen Holdings Inc</p>
                    </div>
                    <div class="col-md-7 footer-copy-links text-md-end text-center">
                        <a href="privacy-policy.html" title="Privacy policy">Privacy policy</a>
                        <a href="terms-and-conditions.html" title="Terms &amp; conditions">Terms &amp; conditions</a>
                        <a href="accessibility.html" title="Accessibility">Accessibility</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
    document.getElementById('NGFooter').insertAdjacentHTML('afterbegin', ngFooter);
}
headerComponent();