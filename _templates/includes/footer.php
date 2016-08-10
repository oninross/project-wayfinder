        <script id="toaster-template" type="text/template">
            <div class="toaster toaster{{= it.ind }}">
                <div class="container">
                    <p>{{! it.message }}</p>

                    <button class="js-dismiss">
                        <span class="vh">Close</span>
                        <i class="icon icon-cross"></i>
                    </button>
                </div>
            </div>
        </script>

        <!-- build:js //ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js -->
        <script src="assets/wayfinder/js/vendor/jquery-1.11.3.min.js"></script>
        <!-- /build -->

        <!--[if lt IE 9]>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.0.4/jquery.backstretch.min.js"></script>
        <![endif]-->

        <!-- build:js assets/wayfinder/js/plugins.min.js -->
        <script src="assets/wayfinder/js/plugins.js"></script>
        <!-- /build -->

        <!-- build:js assets/wayfinder/js/modules.min.js -->
        <script src="assets/wayfinder/js/modules.js"></script>
        <!-- /build -->

        <!-- build:js assets/wayfinder/js/main.min.js -->
        <script src="assets/wayfinder/js/main.js"></script>
        <!-- /build -->

        <!-- pushcrew for push notification -->
        <script type="text/javascript">
            (function(p,u,s,h){
                p._pcq=p._pcq||[];
                p._pcq.push(['_currentTime',Date.now()]);
                s=u.createElement('script');
                s.type='text/javascript';
                s.async=true;
                s.src='https://cdn.pushcrew.com/js/0251b63228db211ef5a17681fd17a0d6.js';
                h=u.getElementsByTagName('script')[0];
                h.parentNode.insertBefore(s,h);
            })(window,document);
        </script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            // (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            // function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            // e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            // e.src='https://www.google-analytics.com/analytics.js';
            // r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            // ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script>
    </body>
</html>