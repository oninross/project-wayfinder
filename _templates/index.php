<?php
set_include_path($_SERVER['DOCUMENT_ROOT'] . '/includes');
$primary = 0;
include('header.php');
?>

<main id="main" role="document">
    <button class="action js-close-path">
       <i class="icon-cross"></i>
    </button>

    <div class="office">
        <!--
            levels--open
            levels--selected-upper
            levels--selected-lower
        -->
        <div class="levels">
            <!-- level--current -->
            <div class="level level-lower">
                <svg version="1.1" id="level-lower" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 1258.413 557.683" enable-background="new 0 0 1258.413 557.683"
                    xml:space="preserve">
                    <rect x="3" y="3" fill="#D7D7DC" stroke="#A6A2A8" stroke-width="6" stroke-miterlimit="10" width="1252.413" height="551.683"/>
                    <rect x="48" y="48" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="48" y="93" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="133.673" y="48" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="133.673" y="93" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="219.346" y="48" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="219.346" y="93" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="305.019" y="48" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="305.019" y="93" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="390.692" y="50.163" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="782.712" y="93" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="782.712" y="48" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="697.038" y="93" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="697.038" y="48" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="611.365" y="93" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="611.365" y="48" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="525.692" y="93" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="525.692" y="48" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="480.692" y="50.163" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="868.385" y="93" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="868.385" y="48" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="999.058" y="180.837" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="1044.058" y="180.837" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="999.058" y="95.163" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="1044.058" y="95.163" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="1001.221" y="50.163" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="737.712" y="268.673" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="737.712" y="223.673" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="652.038" y="268.673" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="652.038" y="223.673" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="566.365" y="268.673" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="566.365" y="223.673" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="480.692" y="268.673" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="480.692" y="223.673" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="435.692" y="225.837" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="823.385" y="268.673" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="823.385" y="223.673" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="958.385" y="266.51" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="1044.058" y="266.51" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="131.51" y="225.837" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="131.51" y="270.837" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="217.183" y="225.837" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="217.183" y="270.837" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="302.856" y="228" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="86.51" y="270.837" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="86.51" y="356.51" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="131.51" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="217.183" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="519.202" y="464.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="519.202" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="433.529" y="464.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="433.529" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="347.856" y="464.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="347.856" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="821.221" y="464.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="821.221" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="735.548" y="464.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="735.548" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="649.875" y="464.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="649.875" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="1123.24" y="464.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="1123.24" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="1037.567" y="464.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="1037.567" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="951.894" y="464.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="951.894" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                </svg>
            </div>

            <div class="level level-upper">
                <svg version="1.1" id="level-upper" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 1258.413 557.683" enable-background="new 0 0 1258.413 557.683"
                    xml:space="preserve">

                    <rect x="3" y="68.336" fill="#D7D7DC" stroke="#A6A2A8" stroke-width="6" stroke-miterlimit="10" width="1171.731" height="441.346"/>
                    <rect x="223.673" y="289.01" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="223.673" y="244.01" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="178.673" y="246.173" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="309.346" y="289.01" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="309.346" y="244.01" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="395.019" y="289.01" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="395.019" y="244.01" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="223.673" y="113.336" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="309.346" y="113.336" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="395.019" y="113.336" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="395.019" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="309.346" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="223.673" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="480.692" y="419.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="85.673" height="45"/>
                    <rect x="48" y="289.01" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="48" y="203.336" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="48" y="117.663" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="48" y="374.683" fill="#BDBDBD" stroke="#A6A2A8" stroke-width="3" stroke-miterlimit="10" width="45" height="85.673"/>
                    <rect x="611.365" y="114.683" fill="#BDBDBD" width="518.365" height="350"/>
                </svg>

                <!-- level__pins--active -->
                <div class="level__pins">
                    <a class="pin pin--marker" data-category="1" data-space="4.01" href="#">
                        <span class="pin__icon">
                            <svg class="icon icon--pin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 24 34.282" enable-background="new 0 0 24 34.282" xml:space="preserve">

                                <path d="M12,0C5.365,0,0,5.365,0,12c0,6.617,12,22.282,12,22.282S24,18.617,24,12C24,5.365,18.626,0,12,0z M12,18.818
                                    c-3.765,0-6.818-3.071-6.818-6.818c0-3.765,3.053-6.818,6.818-6.818S18.818,8.235,18.818,12C18.818,15.747,15.765,18.818,12,18.818z
                                    "/>
                                <path fill="#FFFFFF" d="M12,18.818c-3.765,0-6.818-3.071-6.818-6.818c0-3.765,3.053-6.818,6.818-6.818S18.818,8.235,18.818,12
                                    C18.818,15.747,15.765,18.818,12,18.818z"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="controls">
        <div class="container">
            <div class="wrap">
                <div class="col">
                    <button class="btn flat colored js-open-path" data-path="toilet">Toilet</button>
                </div>

                <div class="col">
                    <button class="btn flat colored js-open-path" data-path="exit">Exit</button>
                </div>

                <div class="col">
                    <button class="btn flat colored js-open-path" data-path="div-head">Div Heads</button>
                </div>

                <div class="col">
                    <button class="btn flat colored js-open-path" data-path="toilet">Toilet</button>
                </div>
            </div>
        </div>
    </div>
</main>

<?php include('footer.php'); ?>

