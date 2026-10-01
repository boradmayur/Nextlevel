function headerComponent() {
    var ngHeader = `
<nav class="navbar navbar-expand-lg navbar-light bg-black py-3 p-lg-0 "
    aria-label="Offcanvas navbar large">
    <div class="container">
        <a class="navbar-brand p-0" href="index.html"><img src="assets/images/nextgen-logo-white.svg"
                alt="NextGen logo" width="100" height="50"></a>

        <button class="navbar-toggler border-0 p-0 rounded-0" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> </button>

        <div class="offcanvas offcanvas-start bg-black" tabindex="-1" id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbar2Label">
                    <a class="navbar-brand p-0" href="index.html"><img src="assets/images/nextgen-logo-white.svg"
                            alt="NextGen logo" width="100" height="50"></a>
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end align-items-md-center ms-auto position-relative">
                    <li class="nav-item dropdown position-static">
                        <a class="dropdown-toggle position-relative" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Solutions <span
                                class="position-relative arrow down "></span></a>
                        <ul class="dropdown-menu mega-menu two-col w-100">
                            <li><a href="customer-engagement-personalization.html">
                                    <figure class="nav-icon"><img
                                            src="assets/images/nav-icon/customer-engagement.svg"></figure> Customer
                                    Engagement
                                </a></li>
                            <li><a href="cloud-infrastructure-iot-enablement.html">
                                    <figure class="nav-icon"><img
                                            src="assets/images/nav-icon/cloud-infrastructure.svg"></figure>Cloud
                                    Infrastructure
                                </a></li>
                            <li><a href="connected-systems.html">
                                    <figure class="nav-icon"><img src="assets/images/nav-icon/crm-cms.svg"></figure>
                                  Connected Systems
                                </a></li>
                            <li><a href="analytics-optimization.html">
                                    <figure class="nav-icon"><img
                                            src="assets/images/nav-icon/analytics-attribution.svg"></figure>
                                    Analytics Attribution
                                </a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown position-static">
                        <a class="dropdown-toggle position-relative" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Industries <span
                                class="position-relative arrow down "></span></a>
                        <ul class="dropdown-menu mega-menu four-col w-100">
                            <li><a href="retail.html">
                                    <figure class="nav-icon"><img src="assets/images/nav-icon/retail.svg"></figure>
                                    Retail
                                </a></li>
                            <li><a href="bfsi.html">
                                    <figure class="nav-icon"><img src="assets/images/nav-icon/bfsi.svg"></figure>
                                    BFSI
                                </a></li>
                            <li><a href="telecom.html">
                                    <figure class="nav-icon"><img src="assets/images/nav-icon/telco.svg"></figure>
                                    Telecom
                                </a></li>
                            <li><a href="entertainment.html">
                                    <figure class="nav-icon"><img src="assets/images/nav-icon/entertainment.svg">
                                    </figure> Entertainment
                                </a></li>
                            <li><a href="travel-and-hospitality.html">
                                    <figure class="nav-icon"><img
                                            src="assets/images/nav-icon/travel-hospitality.svg"></figure> Travel &
                                    Hospitality
                                </a></li>
                            <li><a href="b2b.html">
                                    <figure class="nav-icon"><img src="assets/images/nav-icon/b2b.svg"></figure> B2B
                                </a></li>
                            <li><a href="manufacturing-and-services.html">
                                    <figure class="nav-icon"><img src="assets/images/nav-icon/manufacturing.svg">
                                    </figure> Manufacturing
                                </a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown position-static">
                        <a class="dropdown-toggle position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Connected Ecosystem <span class="position-relative arrow down "></span></a>
                        <ul class="dropdown-menu mega-menu two-col-partner w-100">
                            <div>
                                <h3>Become a Partner</h3>
                                <li class="mb-3"><a href="our-partner-network.html"><figure class="nav-icon"><img src="assets/images/nav-icon/our-partner.svg"></figure> Our Partner Network</a></li>
                                <li class="mb-3"><a href="digital-sherpa.html"><figure class="nav-icon"><img src="assets/images/nav-icon/sherpa.svg"></figure> Sherpa Program</a></li>
                            </div>
                            <div class="nav-border">
                                <h3>Featured Partners</h3>
                                <ul class="childnav">
                                    <li><a href="aunica.html">Aunica </a></li>
                                    <li><a href="new-couch-and-associates.html">Couch & Associates</a></li>
                                    <li><a href="hvar.html">Hvar</a></li>
                                    <li><a href="the-pedowitz-group.html">Pedowitz</a></li>
                                    <li><a href="pathfactory.html">PathFactory</a></li>
                                    <li><a href="resulticks.html">Resulticks</a></li>
                                </ul>
                            </div>
                        </ul>
                    </li>

                    <!-- <li class="nav-item dropdown">
                    <a class="dropdown-toggle position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Success stories<span class="position-relative arrow down "></span></a>
                    <ul class="dropdown-menu rounded-0 border-0 p-0">
                        <li><a href="#">Client Case Studies</a></li>
                        <li><a href="#">Partner Testimonials</a></li>             
                    </ul>
                </li> -->

                    <li class="nav-item"><a href="https://www.nextgenholdings.net/blog">Resources</a></li>

                    <!-- <li class="nav-item"><a href="become-a-partner.html" class="btn-nav-outline nav-btn">Become a Partner</a></li> -->
                    <li class="nav-item "><a class="btn-nav-outline nav-btn becomepartneropenclose">Become a Partner</a></li>
                    <li class="nav-item"><a href="contact-us.html" class="btn-nav-secondary nav-btn">Contact Us</a>
                    </li>
                    <!-- <li class="nav-item dropdown">
                    <a class="dropdown-toggle position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us<span class="position-relative arrow down "></span></a>
                    <ul class="dropdown-menu rounded-0 border-0 p-0 last-nav">
                        <li><a href="#">Who We Are</a></li>
                        <li><a href="contact-us.html">Contact Us</a></li>             
                    </ul>
                </li> -->
                </ul>
            </div>
        </div>
    </div>
</nav>
`;
    document.getElementById('NGHeader').insertAdjacentHTML('afterbegin', ngHeader);
}
headerComponent();