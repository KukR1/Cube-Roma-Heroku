@php
// determine the base URL depending on the currently selected locale
$url_locale = ( Lang::getLocale() !== config('app.locale') ? '/' . Lang::getLocale() : '' );
$isPrimaryLanguage = Lang::getLocale() === config('app.locale');
$current_path = $_SERVER['REQUEST_URI'];

// if English version, remove the '/en' from it
if ($url_locale === '/fr') {
$current_path = substr($current_path, 3);
}elseif ($url_locale ==='/es') {
   $current_path = substr($current_path, 3);
}elseif ($url_locale ==='/de') {
   $current_path = substr($current_path, 3);
}elseif ($url_locale ==='/en') {
   $current_path = substr($current_path, 3);
}/* else{
    return $current_path;
} */
// for some reason although it plays fine locally, while live
// in homepage in English version both flags point to the same /en homepage
if ($current_path === '') {
$current_path = '/';
}
@endphp
<section id="contact-section">
    <div class="title">
        <h2>{{ trans('messages.contact_us')}}</h2>
    </div>
    <div class="form_video">
        <div class="form-container">
            <form method="post" role="form" onsubmit="return validateForm()">
                <div class="form-upper">
                    <input type="text" id="fname" name="firstname" placeholder="Name" class="form-input" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Name'">
                    <input type="text" id="lname" name="lastname" placeholder="Surname" class="form-input" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Surname'">
                </div>
                <div class="form-middle">
                    <input type="email" id="email" name="email" placeholder="Email" class="form-input" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'">
                </div>
                <div class="form-lower" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Message'">
                    <textarea placeholder="Message" id="message" name="message" rows="5"></textarea>
                    <button class="submitButton" id="submit" value="submit" onclick="validateForm();">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.67 67.11">
                            <polygon class="behindButton" points="154.45 59.77 13.5 59.77 24.22 12.16 165.18 12.16 154.45 59.77" />
                            <polygon class="sendButton4" points="151.56 55.08 10.61 55.08 21.33 7.47 162.29 7.47 151.56 55.08" /><text class="sendButton5" transform="translate(57.03 39.82)">Send</text>
                        </svg>
                    </button>
                </div>
                <div class="error-message">
                    <span id="fname-error"></span>
                    <span id="lname-error"></span>
                    <span id="email-error"></span>
                    <span id="message-error"></span>
                    <span id="submit-error"></span>
                    <div id="successMsg"></div>
                </div>
            </form>
        </div>
        <div class="cubeVideo">
            <video id="vid" loop muted autoplay playsinline>

            </video>
        </div>
    </div>
</section>