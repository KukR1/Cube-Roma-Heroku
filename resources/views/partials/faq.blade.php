<section id="faq" class="content-section">
    <div class="title">
        <h2>FAQ<span style="text-transform: none">s</span></h2>
    </div>
    <div class="faq_image">
        <picture class="faqImage">
            <source srcset="../img/home_page/questionmarks.png">
            <img data-src="../img/home_page/questionmarks.png" alt="Question marks" class="lazyload">
        </picture>
        <div id="accordion" class="accordion">
            <div class="card" id="faq1">
                <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#questionone" aria-expanded="false" aria-controls="questionone">{{trans('messages.faq_q1')}}<span class="collapsed">
                            <p><img width="20" src="../img/home_page/faqarrow.svg" alt="FAQ Arrow"></p>
                        </span>
                        <span class="expanded">
                            <p><img width="20" class="rotateArrow180" src="../img/home_page/faqarrow.svg" alt="">
                            </p>
                        </span>
                    </a></div>
                <div id="questionone" class="collapse">
                    <div class="card-body">
                        {{trans('messages.faq_a1')}}
                    </div>
                </div>
            </div>
            <div class="card" id="faq2">
                <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#questiontwo" aria-expanded="false" aria-controls="questiontwo">{{trans('messages.faq_q2')}} <span class="collapsed">
                            <p><img width="20" src="../img/home_page/faqarrow.svg" alt="FAQ Arrow"></p>
                        </span>
                        <span class="expanded">
                            <p><img width="20" class="rotateArrow180" src="../img/home_page/faqarrow.svg" alt="">
                            </p>
                        </span> </a></div>
                <div id="questiontwo" class="collapse">
                    <div class="card-body">
                        {{trans('messages.faq_a2')}}
                    </div>
                </div>
            </div>
            <div class="card" id="faq3">
                <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#questionthree" aria-expanded="false" aria-controls="questionthree">{{trans('messages.faq_q3')}} <span class="collapsed">
                            <p><img width="20" src="../img/home_page/faqarrow.svg" alt="FAQ Arrow"></p>
                        </span>
                        <span class="expanded">
                            <p><img width="20" class="rotateArrow180" src="../img/home_page/faqarrow.svg" alt="">
                            </p>
                        </span> </a></div>
                <div id="questionthree" class="collapse">
                    <div class="card-body">
                        {{trans('messages.faq_a3')}}
                    </div>
                </div>
            </div>
            <div class="card" id="faq4">
                <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#questionfour" aria-expanded="false" aria-controls="questionfour">{{trans('messages.faq_q4')}} <span class="collapsed">
                            <p><img width="20" src="../img/home_page/faqarrow.svg" alt="FAQ Arrow"></p>
                        </span>
                        <span class="expanded">
                            <p><img width="20" class="rotateArrow180" src="../img/home_page/faqarrow.svg" alt="">
                            </p>
                        </span> </a></div>
                <div id="questionfour" class="collapse">
                    <div class="card-body">
                        {{trans('messages.faq_a4')}}
                    </div>
                </div>
            </div>
            <div class="card" id="faq5">
                <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#questionfive" aria-expanded="false" aria-controls="questionfive">{{trans('messages.faq_q5')}} <span class="collapsed">
                            <p><img width="20" src="../img/home_page/faqarrow.svg" alt="FAQ Arrow"></p>
                        </span>
                        <span class="expanded">
                            <p><img width="20" class="rotateArrow180" src="../img/home_page/faqarrow.svg" alt="">
                            </p>
                        </span> </a></div>
                <div id="questionfive" class="collapse">
                    <div class="card-body">
                        {{trans('messages.faq_a5')}}
                    </div>
                </div>
            </div>
            <div class="card" id="faq6">
                <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#questionsix" aria-expanded="false" aria-controls="questionsix">{{trans('messages.faq_q6')}} <span class="collapsed">
                            <p><img width="20" src="../img/home_page/faqarrow.svg" alt="FAQ Arrow"></p>
                        </span>
                        <span class="expanded">
                            <p><img width="20" class="rotateArrow180" src="../img/home_page/faqarrow.svg" alt="">
                            </p>
                        </span> </a></div>
                <div id="questionsix" class="collapse">
                    <div class="card-body">
                        {{trans('messages.faq_a6')}}
                    </div>
                </div>
            </div>
        </div>

        <div class="joinButton">
            <a target="_blank" href="http://cubechallenges.com/">
                <?php include "img/home_page/join.svg" ?>
            </a>
        </div>
        <div class="location">

            <!-- <p>Address: Maximum Aalborg Fiskene 10, 9200 Aalborg<br>
                Email: aalborg@cubechallenges.com</p> -->
        </div>
        <div class="social_media">
            <a href="https://www.facebook.com/Cube-K%C3%B6ln-109410040852533" target="_blank">
                <img data-src="../img/home_page/facebook.png" alt="facebook page" class="lazyload">
            </a>
            <a href="https://www.instagram.com/cube_challenges_cologne/" target="_blank">
                <img data-src="../img/home_page/instagram.png" alt="instagram page" class="lazyload">
            </a>
        </div>
        @include('common.footer')
</section>